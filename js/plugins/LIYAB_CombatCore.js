/*:
 * @plugindesc [v1.0] LIYAB Combat Core - Aggro/taunt/provoke, passive skill system, and row targeting.
 * @author GDKJasper
 *
 * @param ---Aggro Settings---
 * @default
 *
 * @param Base Aggro
 * @desc Starting aggro value for all battlers
 * @type number
 * @default 100
 *
 * @param Damage Aggro Multiplier
 * @desc Aggro gained per point of damage dealt
 * @type number
 * @default 0.1
 *
 * @param Heal Aggro Multiplier
 * @desc Aggro gained per point of healing done
 * @type number
 * @default 0.2
 *
 * @param Show Aggro Gauge
 * @desc Display aggro gauge over actor heads
 * @type boolean
 * @default true
 *
 * @param Target Highest Aggro
 * @desc Enemies always target highest aggro (false = weighted random)
 * @type boolean
 * @default false
 *
 * @param ---Passive Settings---
 * @default
 *
 * @param Max Passive Slots
 * @desc Maximum number of passive states an actor can have active
 * @type number
 * @default 10
 *
 * @param Show Passive Icon
 * @desc Show passive state icon in status window
 * @type boolean
 * @default true
 *
 * @param Require Level
 * @desc Passives require actor level to learn
 * @type boolean
 * @default true
 *
 * @param Passive Learn Command
 * @desc Add 'Passives' command to skill menu
 * @type boolean
 * @default true
 *
 * @param ---Row Targeting Settings---
 * @default
 *
 * @param Row Count
 * @desc Number of rows used for position-based detection.
 * @type number
 * @default 2
 *
 * @param Front Row Is Bottom
 * @desc true = front row is the enemies lowest on screen (largest Y). false = highest.
 * @type boolean
 * @default true
 *
 * @param Row Gap Sensitivity
 * @desc Minimum Y difference to treat enemies as a new row. 0 = split evenly by row count.
 * @type number
 * @default 0
 *
 * @param Row Target Help Text
 * @desc Help text shown for row-targeting skills.
 * @default Row Target
 *
 * @param Show Row Names
 * @desc Prefix enemy names in the selection window with their row (e.g. 'F. Goblin').
 * @type boolean
 * @default false
 *
 * @param Auto Row Needs Selection
 * @desc true = row-target skills still require selecting an enemy first (targets its row). false = auto-targets the row with no selection.
 * @type boolean
 * @default false
 *
 * @help
 * ============================================================================
 * LIYAB COMBAT CORE
 * ============================================================================
 * Consolidated core combat systems: aggro/taunt/provoke management, the
 * passive skill system (auto passives, learnable passives, aura effects), and
 * row targeting for enemy front/back rows.
 *
 * AGGRO SYSTEM
 *   <Aggro: +100> / <Target Aggro: -50> / <Bypass Taunt> / <Provoke>
 *   <Physical Taunt> / <Magical Taunt> / <Certain Taunt> / <Aggro Multiplier>
 *   Plugin commands: ChangeActorAggro, SetActorAggro, ResetAllAggro
 *
 * PASSIVE SYSTEM
 *   <Passive State: x> / <Passive States: x, y> / <Learnable Passive: x>
 *   <Passive Param: 2 +10%> / <Passive Condition: ...> / <Custom Passive Condition>
 *   <Passive State Add/Remove: x> / <Passive Skill Learn: x>
 *   Plugin commands: LearnPassive, ForgetPassive, AddPassive, RemovePassive, ShowPassiveMenu
 *
 * ROW TARGETING
 *   <Target: Front Enemy Row> / <Target: Back Enemy Row> / <Target: Enemy Row x>
 *   <Target: x Random Front Row> / <Target: x Random Back Row>
 *   Enemy notetag: <Row: x>
 *   Script calls: $gameTroop.rowMembers(x), battler.row()
 * ============================================================================
 */
(function() {
  'use strict';

  //=============================================================================
  // Parameters
  //=============================================================================
  var parameters = PluginManager.parameters('LIYAB_CombatCore');
  var baseAggro = Number(parameters['Base Aggro'] || 100);
  var damageAggroMult = Number(parameters['Damage Aggro Multiplier'] || 0.1);
  var healAggroMult = Number(parameters['Heal Aggro Multiplier'] || 0.2);
  var showAggroGauge = parameters['Show Aggro Gauge'] === 'true';
  var targetHighestAggro = parameters['Target Highest Aggro'] === 'true';

  //=============================================================================
  // Notetag Cache
  //=============================================================================
  var notetagCache = {
    skills: {},
    items: {},
    states: {},
    actors: {},
    classes: {},
    weapons: {},
    armors: {}
  };

  function parseNotetags(obj, type) {
    var notes = obj.note || '';
    var result = {
      aggro: 0,
      targetAggro: 0,
      bypassTaunt: false,
      physicalTaunt: false,
      magicalTaunt: false,
      certainTaunt: false,
      aggroMultiplier: 1.0,
      provoke: false,
      bypassProvoke: false
    };

    if (notes.match(/<Aggro:\s*([+\-]?\d+)>/i)) {
      result.aggro = parseInt(RegExp.$1);
    }
    if (notes.match(/<Target Aggro:\s*([+\-]?\d+)>/i)) {
      result.targetAggro = parseInt(RegExp.$1);
    }
    if (notes.match(/<Bypass Taunt>/i)) {
      result.bypassTaunt = true;
    }
    if (notes.match(/<Physical Taunt>/i)) {
      result.physicalTaunt = true;
    }
    if (notes.match(/<Magical Taunt>/i)) {
      result.magicalTaunt = true;
    }
    if (notes.match(/<Certain Taunt>/i)) {
      result.certainTaunt = true;
    }
    if (notes.match(/<Aggro Multiplier:\s*(\d+)%>/i)) {
      result.aggroMultiplier = parseInt(RegExp.$1) / 100;
    }
    if (notes.match(/<Provoke>/i)) {
      result.provoke = true;
    }
    if (notes.match(/<Bypass Provoke>/i)) {
      result.bypassProvoke = true;
    }

    return result;
  }

  function getNotetags(obj, type) {
    if (!notetagCache[type]) notetagCache[type] = {};
    if (!notetagCache[type][obj.id]) {
      notetagCache[type][obj.id] = parseNotetags(obj, type);
    }
    return notetagCache[type][obj.id];
  }

  //=============================================================================
  // Game_Battler - Aggro Properties
  //=============================================================================
  var _Game_Battler_initMembers = Game_Battler.prototype.initMembers;
  Game_Battler.prototype.initMembers = function() {
    _Game_Battler_initMembers.call(this);
    this._aggro = baseAggro;
    this._tauntPhysical = false;
    this._tauntMagical = false;
    this._tauntCertain = false;
    this._provokedBy = null;
  };

  Game_Battler.prototype.aggro = function() {
    return this._aggro || baseAggro;
  };

  Game_Battler.prototype.setAggro = function(value) {
    this._aggro = Math.max(1, value);
  };

  Game_Battler.prototype.changeAggro = function(amount) {
    this._aggro = Math.max(1, this._aggro + amount);
  };

  Game_Battler.prototype.resetAggro = function() {
    this._aggro = baseAggro;
    this._tauntPhysical = false;
    this._tauntMagical = false;
    this._tauntCertain = false;
    this._provokedBy = null;
  };

  Game_Battler.prototype.hasPhysicalTaunt = function() {
    return this._tauntPhysical;
  };

  Game_Battler.prototype.hasMagicalTaunt = function() {
    return this._tauntMagical;
  };

  Game_Battler.prototype.hasCertainTaunt = function() {
    return this._tauntCertain;
  };

  Game_Battler.prototype.isProvoked = function() {
    return this._provokedBy !== null;
  };

  Game_Battler.prototype.provokedBy = function() {
    return this._provokedBy;
  };

  Game_Battler.prototype.setProvoked = function(battler) {
    this._provokedBy = battler;
  };

  Game_Battler.prototype.clearProvoke = function() {
    this._provokedBy = null;
  };

  //=============================================================================
  // Game_Actor - Aggro Setup
  //=============================================================================
  var _Game_Actor_setup = Game_Actor.prototype.setup;
  Game_Actor.prototype.setup = function(actorId) {
    _Game_Actor_setup.call(this, actorId);
    this.refreshTauntStates();
  };

  Game_Actor.prototype.refreshTauntStates = function() {
    this._tauntPhysical = false;
    this._tauntMagical = false;
    this._tauntCertain = false;

    // Check actor notetags
    var actorTags = getNotetags($dataActors[this._actorId], 'actors');
    if (actorTags.physicalTaunt) this._tauntPhysical = true;
    if (actorTags.magicalTaunt) this._tauntMagical = true;
    if (actorTags.certainTaunt) this._tauntCertain = true;

    // Check class notetags
    var classTags = getNotetags($dataClasses[this._classId], 'classes');
    if (classTags.physicalTaunt) this._tauntPhysical = true;
    if (classTags.magicalTaunt) this._tauntMagical = true;
    if (classTags.certainTaunt) this._tauntCertain = true;

    // Check equips
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
      if (equips[i]) {
        var type = equips[i].wtypeId !== undefined ? 'weapons' : 'armors';
        var tags = getNotetags(equips[i], type);
        if (tags.physicalTaunt) this._tauntPhysical = true;
        if (tags.magicalTaunt) this._tauntMagical = true;
        if (tags.certainTaunt) this._tauntCertain = true;
      }
    }

    // Check states
    var states = this.states();
    for (var j = 0; j < states.length; j++) {
      var stateTags = getNotetags(states[j], 'states');
      if (stateTags.physicalTaunt) this._tauntPhysical = true;
      if (stateTags.magicalTaunt) this._tauntMagical = true;
      if (stateTags.certainTaunt) this._tauntCertain = true;
    }
  };

  //=============================================================================
  // Game_Enemy - Aggro Targeting
  //=============================================================================
  var _Game_Enemy_makeActions = Game_Enemy.prototype.makeActions;
  Game_Enemy.prototype.makeActions = function() {
    _Game_Enemy_makeActions.call(this);
    this.updateAggroTargeting();
  };

  Game_Enemy.prototype.updateAggroTargeting = function() {
    // Always check provoke first, regardless of targetHighestAggro setting
    if (this.isProvoked() && this.provokedBy() && this.provokedBy().isActor()) {
      this._actionTargetIndex = this.provokedBy().index();
      return;
    }

    if (targetHighestAggro) {
      // Always target highest aggro
      var highest = this.findHighestAggroTarget();
      if (highest) {
        this._actionTargetIndex = highest.index();
      }
    }
  };

  Game_Enemy.prototype.findHighestAggroTarget = function() {
    var members = $gameParty.aliveMembers();
    var highest = null;
    var highestAggro = -1;

    // First check: is THIS enemy provoked by an actor?
    if (this.isProvoked() && this.provokedBy() && this.provokedBy().isActor()) {
      return this.provokedBy();
    }

    for (var i = 0; i < members.length; i++) {
      var member = members[i];
      var aggro = member.aggro();

      // Check if member is provoked by this enemy (reverse provoke)
      if (member.isProvoked() && member.provokedBy() === this) {
        return member;
      }

      // Check taunt
      var action = this.currentAction();
      if (action) {
        var hitType = this.getActionHitType(action);
        if (hitType === 'physical' && member.hasPhysicalTaunt()) {
          return member;
        }
        if (hitType === 'magical' && member.hasMagicalTaunt()) {
          return member;
        }
        if (hitType === 'certain' && member.hasCertainTaunt()) {
          return member;
        }
      }

      // Track highest aggro
      if (aggro > highestAggro) {
        highestAggro = aggro;
        highest = member;
      }
    }

    return highest;
  };

  Game_Enemy.prototype.getActionHitType = function(action) {
    var item = $dataSkills[action._skillId];
    if (!item) return 'physical';

    if (item.hitType === 0) return 'certain';
    if (item.hitType === 1) return 'physical';
    if (item.hitType === 2) return 'magical';
    return 'physical';
  };

  //=============================================================================
  // BattleManager - Aggro on Actions
  //=============================================================================
  var _BattleManager_startAction = BattleManager.startAction;
  BattleManager.startAction = function() {
    _BattleManager_startAction.call(this);
    this.applyAggroOnAction();
  };

  BattleManager.applyAggroOnAction = function() {
    var subject = this._subject;
    var action = this._action;
    var targets = this._targets || (action && action.makeTargets && action.makeTargets()) || [];

    if (!subject || !action) return;

    var item = action.item();
    var tags = getNotetags(item, item.damage.type === 3 ? 'items' : 'skills');

    // Apply user aggro
    subject.changeAggro(tags.aggro);

    // Apply target aggro (per hit)
    for (var i = 0; i < targets.length; i++) {
      var target = targets[i];
      target.changeAggro(tags.targetAggro);

      // Apply damage-based aggro
      if (action._damageType === 1) {
        // Physical damage
        subject.changeAggro(Math.floor(action._damage * damageAggroMult));
      } else if (action._damageType === 3) {
        // Healing
        subject.changeAggro(Math.floor(Math.abs(action._damage) * healAggroMult));
      }
    }
  };

  //=============================================================================
  // Window_BattleLog - Provoke Display
  //=============================================================================
  var _Window_BattleLog_displayAction = Window_BattleLog.prototype.displayAction;
  Window_BattleLog.prototype.displayAction = function(subject, action) {
    _Window_BattleLog_displayAction.call(this, subject, action);

    if (!action || typeof action.item !== 'function') return;
    var item = action.item();
    var tags = getNotetags(item, item.damage.type === 3 ? 'items' : 'skills');

    if (tags.provoke) {
      var targets = (BattleManager._targets || []).slice();
      for (var i = 0; i < targets.length; i++) {
        var target = targets[i];
        if (!target.hasBypassProvoke()) {
          target.setProvoked(subject);
          this.push('addText', subject.name() + ' provokes ' + target.name() + '!');
        }
      }
    }
  };

  // Also detect when states with <Provoke> are applied
  var _Game_Battler_addState = Game_Battler.prototype.addState;
  Game_Battler.prototype.addState = function(stateId) {
    _Game_Battler_addState.call(this, stateId);
    var state = $dataStates[stateId];
    if (state) {
      var stateTags = getNotetags(state, 'states');
      if (stateTags.provoke && BattleManager._subject) {
        this.setProvoked(BattleManager._subject);
      }
    }
  };

  // Clear provoke when state is removed
  var _Game_Battler_removeState = Game_Battler.prototype.removeState;
  Game_Battler.prototype.removeState = function(stateId) {
    _Game_Battler_removeState.call(this, stateId);
    var state = $dataStates[stateId];
    if (state) {
      var stateTags = getNotetags(state, 'states');
      if (stateTags.provoke) {
        this.clearProvoke();
      }
    }
  };

  Game_Battler.prototype.hasBypassProvoke = function() {
    // Check states for bypass
    var states = this.states();
    for (var i = 0; i < states.length; i++) {
      var tags = getNotetags(states[i], 'states');
      if (tags.bypassProvoke) return true;
    }
    return false;
  };

  //=============================================================================
  // Sprite_Battler - Aggro Gauge
  //=============================================================================
  if (showAggroGauge) {
    var _Sprite_Battler_createMainSprite = Sprite_Battler.prototype.createMainSprite;
    Sprite_Battler.prototype.createMainSprite = function() {
      _Sprite_Battler_createMainSprite.call(this);
      this.createAggroGauge();
    };

    Sprite_Battler.prototype.createAggroGauge = function() {
      this._aggroGaugeSprite = new Sprite_AggroGauge();
      this.addChild(this._aggroGaugeSprite);
    };

    var _Sprite_Battler_update = Sprite_Battler.prototype.update;
    Sprite_Battler.prototype.update = function() {
      _Sprite_Battler_update.call(this);
      if (this._aggroGaugeSprite) {
        this._aggroGaugeSprite.update();
      }
    };
  }

  //=============================================================================
  // Sprite_AggroGauge - Visual Gauge
  //=============================================================================
  function Sprite_AggroGauge() {
    this.initialize.apply(this, arguments);
  }

  Sprite_AggroGauge.prototype = Object.create(Sprite.prototype);
  Sprite_AggroGauge.prototype.constructor = Sprite_AggroGauge;

  Sprite_AggroGauge.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
    this._gaugeWidth = 40;
    this._gaugeHeight = 4;
    this.bitmap = new Bitmap(this._gaugeWidth, this._gaugeHeight);
    this.anchor.x = 0.5;
    this.anchor.y = 1;
    this.y = -20;
  };

  Sprite_AggroGauge.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this.refresh();
  };

  Sprite_AggroGauge.prototype.refresh = function() {
    var battler = this._battler;
    if (!battler || !battler.isActor()) {
      this.visible = false;
      return;
    }

    this.visible = true;
    this.bitmap.clear();

    var aggro = battler.aggro();
    var maxAggro = this.getMaxAggro();
    var ratio = Math.min(1, aggro / maxAggro);

    // Background
    this.bitmap.fillRect(0, 0, this._gaugeWidth, this._gaugeHeight, '#333333');

    // Fill
    var color = this.getAggroColor(ratio);
    this.bitmap.fillRect(0, 0, Math.floor(this._gaugeWidth * ratio), this._gaugeHeight, color);
  };

  Sprite_AggroGauge.prototype.getMaxAggro = function() {
    var members = $gameParty.aliveMembers();
    var max = baseAggro;
    for (var i = 0; i < members.length; i++) {
      if (members[i].aggro() > max) {
        max = members[i].aggro();
      }
    }
    return max;
  };

  Sprite_AggroGauge.prototype.getAggroColor = function(ratio) {
    if (ratio < 0.33) return '#00ff00'; // Green - low aggro
    if (ratio < 0.66) return '#ffff00'; // Yellow - medium aggro
    return '#ff0000'; // Red - high aggro
  };

  //=============================================================================
  // Plugin Commands
  //=============================================================================
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);

    if (command === 'ChangeActorAggro') {
      var actorId = parseInt(args[0]);
      var amount = parseInt(args[1]);
      var actor = $gameActors.actor(actorId);
      if (actor) {
        actor.changeAggro(amount);
      }
    }

    if (command === 'SetActorAggro') {
      var actorId = parseInt(args[0]);
      var value = parseInt(args[1]);
      var actor = $gameActors.actor(actorId);
      if (actor) {
        actor.setAggro(value);
      }
    }

    if (command === 'ResetAllAggro') {
      $gameParty.aliveMembers().forEach(function(actor) {
        actor.resetAggro();
      });
      $gameTroop.aliveMembers().forEach(function(enemy) {
        enemy.resetAggro();
      });
    }
  };

  //=============================================================================
  // Battle Start - Reset Aggro
  //=============================================================================
  var _BattleManager_startBattle = BattleManager.startBattle;
  BattleManager.startBattle = function() {
    _BattleManager_startBattle.call(this);
    $gameParty.aliveMembers().forEach(function(actor) {
      actor.resetAggro();
    });
    $gameTroop.aliveMembers().forEach(function(enemy) {
      enemy.resetAggro();
    });
  };

})();


(function() {
  'use strict';

  //=============================================================================
  // Parameters
  //=============================================================================
  var parameters = PluginManager.parameters('LIYAB_CombatCore');
  var maxPassiveSlots = Number(parameters['Max Passive Slots'] || 10);
  var showPassiveIcon = parameters['Show Passive Icon'] === 'true';
  var requireLevel = parameters['Require Level'] === 'true';
  var passiveLearnCommand = parameters['Passive Learn Command'] === 'true';

  //=============================================================================
  // Notetag Cache
  //=============================================================================
  var notetagCache = {};

  function parseNotetags(obj, type) {
    var notes = obj.note || '';
    var result = {
      passiveStates: [],
      learnablePassives: [],
      learnedPassives: [],
      passiveConditions: [],
      auraType: null,
      auraCondition: null,
      auraRange: 1,
      passiveParamBonus: [],
      passiveStateAdd: [],
      passiveStateRemove: [],
      passiveSkillLearn: [],
      linkLearnPassive: [],
      passiveLearnCost: 0,
      customCondition: null
    };

    // Passive States (auto-granted)
    var passiveMatch;
    var passiveRegex = /<Passive States?:\s*(\d+(?:\s*(?:to|-)\s*\d+)?(?:\s*,\s*\d+(?:\s*(?:to|-)\s*\d+)?)*)>/gi;
    while ((passiveMatch = passiveRegex.exec(notes)) !== null) {
      var ids = parseIdList(passiveMatch[1]);
      result.passiveStates = result.passiveStates.concat(ids);
    }

    // Learnable Passives
    var learnableRegex = /<Learnable Passives?:\s*(\d+(?:\s*,\s*\d+)*)>/gi;
    while ((passiveMatch = learnableRegex.exec(notes)) !== null) {
      result.learnablePassives = result.learnablePassives.concat(parseIdList(passiveMatch[1]));
    }

    // Learned Passives (default)
    var learnedRegex = /<Learned Passives?:\s*(\d+(?:\s*,\s*\d+)*)>/gi;
    while ((passiveMatch = learnedRegex.exec(notes)) !== null) {
      result.learnedPassives = result.learnedPassives.concat(parseIdList(passiveMatch[1]));
    }

    // Passive Conditions
    var condRegex = /<Passive Condition:\s*(.+?)>/gi;
    while ((passiveMatch = condRegex.exec(notes)) !== null) {
      result.passiveConditions.push(parseCondition(passiveMatch[1]));
    }

    // Custom Passive Condition
    var customMatch = notes.match(/<Custom Passive Condition>\s*([\s\S]*?)\s*<\/Custom Passive Condition>/i);
    if (customMatch) {
      result.customCondition = customMatch[1];
    }

    // Aura Type
    var auraTypeMatch = notes.match(/<Aura Type:\s*(Physical|Magical|Certain)>/i);
    if (auraTypeMatch) {
      result.auraType = auraTypeMatch[1].toLowerCase();
    }

    // Aura Condition
    var auraCondMatch = notes.match(/<Aura Condition:\s*HP Below\s*(\d+)%>/i);
    if (auraCondMatch) {
      result.auraCondition = { type: 'hpBelow', value: parseInt(auraCondMatch[1]) };
    }

    // Aura Range
    var auraRangeMatch = notes.match(/<Aura Range:\s*(\d+)>/i);
    if (auraRangeMatch) {
      result.auraRange = parseInt(auraRangeMatch[1]);
    }

    // Passive Param Bonus
    var paramRegex = /<Passive Param:\s*(\d+)\s*([+-])(\d+)%>/gi;
    while ((passiveMatch = paramRegex.exec(notes)) !== null) {
      result.passiveParamBonus.push({
        paramId: parseInt(passiveMatch[1]),
        sign: passiveMatch[2],
        value: parseInt(passiveMatch[3])
      });
    }

    // Passive State Add
    var stateAddRegex = /<Passive State Add:\s*(\d+)>/gi;
    while ((passiveMatch = stateAddRegex.exec(notes)) !== null) {
      result.passiveStateAdd.push(parseInt(passiveMatch[1]));
    }

    // Passive State Remove
    var stateRemoveRegex = /<Passive State Remove:\s*(\d+)>/gi;
    while ((passiveMatch = stateRemoveRegex.exec(notes)) !== null) {
      result.passiveStateRemove.push(parseInt(passiveMatch[1]));
    }

    // Passive Skill Learn
    var skillLearnRegex = /<Passive Skill Learn:\s*(\d+)>/gi;
    while ((passiveMatch = skillLearnRegex.exec(notes)) !== null) {
      result.passiveSkillLearn.push(parseInt(passiveMatch[1]));
    }

    // Link Learn Passive
    var linkRegex = /<Link Learn Passive:\s*(\d+)>/gi;
    while ((passiveMatch = linkRegex.exec(notes)) !== null) {
      result.linkLearnPassive.push(parseInt(passiveMatch[1]));
    }

    // Passive Learn Cost (AP)
    var costMatch = notes.match(/<Passive Learn AP Cost:\s*(\d+)>/i);
    if (costMatch) {
      result.passiveLearnCost = parseInt(costMatch[1]);
    }

    return result;
  }

  function parseIdList(str) {
    var ids = [];
    var parts = str.split(',');
    for (var i = 0; i < parts.length; i++) {
      var part = parts[i].trim();
      if (part.match(/(\d+)\s*(?:to|-)\s*(\d+)/)) {
        var start = parseInt(RegExp.$1);
        var end = parseInt(RegExp.$2);
        for (var j = start; j <= end; j++) {
          ids.push(j);
        }
      } else {
        ids.push(parseInt(part));
      }
    }
    return ids;
  }

  function parseCondition(str) {
    str = str.trim();

    if (str.match(/HP\s+(Above|Below)\s+(\d+)%/i)) {
      return { type: 'hp', above: RegExp.$1.toLowerCase() === 'above', value: parseInt(RegExp.$2) };
    }
    if (str.match(/MP\s+(Above|Below)\s+(\d+)%/i)) {
      return { type: 'mp', above: RegExp.$1.toLowerCase() === 'above', value: parseInt(RegExp.$2) };
    }
    if (str.match(/TP\s+(Above|Below)\s+(\d+)%/i)) {
      return { type: 'tp', above: RegExp.$1.toLowerCase() === 'above', value: parseInt(RegExp.$2) };
    }
    if (str.match(/(ATK|DEF|MAT|MDF|AGI|LUK)\s+(Above|Below)\s+(\d+)/i)) {
      var stats = { 'ATK': 2, 'DEF': 3, 'MAT': 4, 'MDF': 5, 'AGI': 6, 'LUK': 7 };
      return { type: 'stat', statId: stats[RegExp.$1.toUpperCase()], above: RegExp.$2.toLowerCase() === 'above', value: parseInt(RegExp.$3) };
    }
    if (str.match(/Switch\s+(\d+)\s+(ON|OFF)/i)) {
      return { type: 'switch', switchId: parseInt(RegExp.$1), on: RegExp.$2.toUpperCase() === 'ON' };
    }
    if (str.match(/Variable\s+(\d+)\s+(Above|Below)\s+(\d+)/i)) {
      return { type: 'variable', variableId: parseInt(RegExp.$1), above: RegExp.$2.toLowerCase() === 'above', value: parseInt(RegExp.$3) };
    }
    if (str.match(/State\s+(\d+)\s+Active/i)) {
      return { type: 'state', stateId: parseInt(RegExp.$1) };
    }
    if (str.match(/Enemy\s+Alive\s+(\d+)/i)) {
      return { type: 'enemyAlive', count: parseInt(RegExp.$1) };
    }
    if (str.match(/Ally\s+Dead\s+(\d+)/i)) {
      return { type: 'allyDead', count: parseInt(RegExp.$1) };
    }
    if (str.match(/Party\s+Level\s+Above\s+(\d+)/i)) {
      return { type: 'partyLevel', value: parseInt(RegExp.$1) };
    }
    if (str.match(/In\s+Battle/i)) {
      return { type: 'inBattle' };
    }
    if (str.match(/Not\s+In\s+Battle/i)) {
      return { type: 'notInBattle' };
    }

    return null;
  }

  function getNotetags(obj, type) {
    var key = type + '_' + obj.id;
    if (!notetagCache[key]) {
      notetagCache[key] = parseNotetags(obj, type);
    }
    return notetagCache[key];
  }

  //=============================================================================
  // Game_Battler - Passive State Management
  //=============================================================================
  var _Game_Battler_initMembers = Game_Battler.prototype.initMembers;
  Game_Battler.prototype.initMembers = function() {
    _Game_Battler_initMembers.call(this);
    this._passiveStates = [];
    this._learnedPassives = [];
    this._activePassives = [];
  };

  Game_Battler.prototype.passiveStates = function() {
    return this._passiveStates || [];
  };

  Game_Battler.prototype.learnedPassives = function() {
    return this._learnedPassives || [];
  };

  Game_Battler.prototype.activePassives = function() {
    return this._activePassives || [];
  };

  Game_Battler.prototype.addPassiveState = function(stateId) {
    if (!this._passiveStates.contains(stateId) && this._passiveStates.length < maxPassiveSlots) {
      this._passiveStates.push(stateId);
      this.refreshPassives();
    }
  };

  Game_Battler.prototype.removePassiveState = function(stateId) {
    var index = this._passiveStates.indexOf(stateId);
    if (index >= 0) {
      this._passiveStates.splice(index, 1);
      this.refreshPassives();
    }
  };

  Game_Battler.prototype.learnPassive = function(stateId) {
    if (!this._learnedPassives.contains(stateId)) {
      this._learnedPassives.push(stateId);
    }
  };

  Game_Battler.prototype.forgetPassive = function(stateId) {
    var index = this._learnedPassives.indexOf(stateId);
    if (index >= 0) {
      this._learnedPassives.splice(index, 1);
      this.removePassiveState(stateId);
    }
  };

  Game_Battler.prototype.hasPassive = function(stateId) {
    return this._passiveStates.contains(stateId);
  };

  Game_Battler.prototype.hasLearnedPassive = function(stateId) {
    return this._learnedPassives.contains(stateId);
  };

  Game_Battler.prototype.canLearnPassive = function(stateId) {
    if (this.hasLearnedPassive(stateId)) return false;
    if (this._passiveStates.length >= maxPassiveSlots) return false;

    var state = $dataStates[stateId];
    if (!state) return false;

    var tags = getNotetags(state, 'states');
    var conditionsMet = this.checkPassiveConditions(tags.passiveConditions, tags.customCondition);
    if (!conditionsMet) return false;

    return true;
  };

  Game_Battler.prototype.checkPassiveConditions = function(conditions, customCondition) {
    for (var i = 0; i < conditions.length; i++) {
      if (!this.checkSingleCondition(conditions[i])) {
        return false;
      }
    }

    if (customCondition) {
      try {
        var user = this;
        var state = null;
        var condition = true;
        eval(customCondition);
        if (!condition) return false;
      } catch (e) {
        console.error('Passive condition eval error:', e);
      }
    }

    return true;
  };

  Game_Battler.prototype.checkSingleCondition = function(cond) {
    if (!cond) return true;

    switch (cond.type) {
      case 'hp':
        var hpRatio = (this.hp / this.mhp) * 100;
        return cond.above ? hpRatio >= cond.value : hpRatio <= cond.value;
      case 'mp':
        var mpRatio = (this.mp / this.mmp) * 100;
        return cond.above ? mpRatio >= cond.value : mpRatio <= cond.value;
      case 'tp':
        var tpRatio = this.tp;
        return cond.above ? tpRatio >= cond.value : tpRatio <= cond.value;
      case 'stat':
        var statValue = this.param(cond.statId);
        return cond.above ? statValue >= cond.value : statValue <= cond.value;
      case 'switch':
        return cond.on ? $gameSwitches.value(cond.switchId) : !$gameSwitches.value(cond.switchId);
      case 'variable':
        var varValue = $gameVariables.value(cond.variableId);
        return cond.above ? varValue >= cond.value : varValue <= cond.value;
      case 'state':
        return this.isStateAffected(cond.stateId);
      case 'enemyAlive':
        return $gameTroop.aliveMembers().length >= cond.count;
      case 'allyDead':
        var deadCount = $gameParty.deadMembers().length;
        return deadCount >= cond.count;
      case 'partyLevel':
        return $gameParty.averageLevel() >= cond.value;
      case 'inBattle':
        return $gameParty.inBattle();
      case 'notInBattle':
        return !$gameParty.inBattle();
      default:
        return true;
    }
  };

  Game_Battler.prototype.refreshPassives = function() {
    this._activePassives = [];

    for (var i = 0; i < this._passiveStates.length; i++) {
      var stateId = this._passiveStates[i];
      var state = $dataStates[stateId];
      if (!state) continue;

      var tags = getNotetags(state, 'states');
      if (this.checkPassiveConditions(tags.passiveConditions, tags.customCondition)) {
        this._activePassives.push(stateId);
      }
    }
  };

  //=============================================================================
  // Game_Actor - Passive Setup
  //=============================================================================
  var _Game_Actor_setup = Game_Actor.prototype.setup;
  Game_Actor.prototype.setup = function(actorId) {
    _Game_Actor_setup.call(this, actorId);
    this.initPassives();
  };

  Game_Actor.prototype.initPassives = function() {
    this._passiveStates = [];
    this._learnedPassives = [];

    // From actor notetags
    var actorTags = getNotetags($dataActors[this._actorId], 'actors');
    this._passiveStates = this._passiveStates.concat(actorTags.passiveStates);
    this._learnedPassives = this._learnedPassives.concat(actorTags.learnedPassives);

    // From class notetags
    var classTags = getNotetags($dataClasses[this._classId], 'classes');
    this._passiveStates = this._passiveStates.concat(classTags.passiveStates);
    this._learnedPassives = this._learnedPassives.concat(classTags.learnedPassives);

    // From equipped items
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
      if (equips[i]) {
        var type = equips[i].wtypeId !== undefined ? 'weapons' : 'armors';
        var tags = getNotetags(equips[i], type);
        this._passiveStates = this._passiveStates.concat(tags.passiveStates);
      }
    }

    // From learned skills
    var skills = this._skills;
    for (var j = 0; j < skills.length; j++) {
      var skill = $dataSkills[skills[j]];
      if (skill) {
        var skillTags = getNotetags(skill, 'skills');
        this._passiveStates = this._passiveStates.concat(skillTags.passiveStates);
        this._learnedPassives = this._learnedPassives.concat(skillTags.linkLearnPassive);
      }
    }

    // Remove duplicates
    this._passiveStates = this._passiveStates.filter(function(v, i, a) { return a.indexOf(v) === i; });
    this._learnedPassives = this._learnedPassives.filter(function(v, i, a) { return a.indexOf(v) === i; });

    this.refreshPassives();
  };

  var _Game_Actor_refreshActors = Game_Actor.prototype.refreshActors;
  Game_Actor.prototype.refreshActors = function() {
    if (_Game_Actor_refreshActors) _Game_Actor_refreshActors.call(this);
    this.refreshPassives();
  };

  //=============================================================================
  // Game_Enemy - Passive Setup
  //=============================================================================
  var _Game_Enemy_setup = Game_Enemy.prototype.setup;
  Game_Enemy.prototype.setup = function(enemyId, x, y) {
    _Game_Enemy_setup.call(this, enemyId, x, y);
    this.initEnemyPassives();
  };

  Game_Enemy.prototype.initEnemyPassives = function() {
    this._passiveStates = [];

    var enemyTags = getNotetags(this.enemy(), 'enemies');
    this._passiveStates = this._passiveStates.concat(enemyTags.passiveStates);
    this.refreshPassives();
  };

  //=============================================================================
  // Passive State Trait Application
  //=============================================================================
  var _Game_Battler_traitObjects = Game_Battler.prototype.traitObjects;
  Game_Battler.prototype.traitObjects = function() {
    var objects = _Game_Battler_traitObjects.call(this);

    // Add active passive states as trait objects
    for (var i = 0; i < this._activePassives.length; i++) {
      var state = $dataStates[this._activePassives[i]];
      if (state) {
        objects.push(state);
      }
    }

    return objects;
  };

  //=============================================================================
  // Passive State Param Bonuses
  //=============================================================================
  var _Game_Actor_paramPlus = Game_Actor.prototype.paramPlus;
  Game_Actor.prototype.paramPlus = function(paramId) {
    var value = _Game_Actor_paramPlus.call(this, paramId);

    for (var i = 0; i < this._activePassives.length; i++) {
      var state = $dataStates[this._activePassives[i]];
      if (!state) continue;

      var tags = getNotetags(state, 'states');
      for (var j = 0; j < tags.passiveParamBonus.length; j++) {
        var bonus = tags.passiveParamBonus[j];
        if (bonus.paramId === paramId) {
          var baseParam = this.paramBase(paramId);
          var rate = bonus.value / 100;
          value += bonus.sign === '+' ? Math.floor(baseParam * rate) : -Math.floor(baseParam * rate);
        }
      }
    }

    return value;
  };

  //=============================================================================
  // Passive State Effects (State Add/Remove/Skill Learn)
  //=============================================================================
  var _Game_Battler_states = Game_Battler.prototype.states;
  Game_Battler.prototype.states = function() {
    var states = _Game_Battler_states.call(this);

    // Add states granted by passives
    for (var i = 0; i < this._activePassives.length; i++) {
      var state = $dataStates[this._activePassives[i]];
      if (!state) continue;

      var tags = getNotetags(state, 'states');
      for (var j = 0; j < tags.passiveStateAdd.length; j++) {
        var addState = $dataStates[tags.passiveStateAdd[j]];
        if (addState && !states.contains(addState)) {
          states.push(addState);
        }
      }
    }

    return states;
  };

  var _Game_Battler_isStateAffected = Game_Battler.prototype.isStateAffected;
  Game_Battler.prototype.isStateAffected = function(stateId) {
    // Check if state is removed by passive
    for (var i = 0; i < this._activePassives.length; i++) {
      var state = $dataStates[this._activePassives[i]];
      if (!state) continue;

      var tags = getNotetags(state, 'states');
      if (tags.passiveStateRemove.contains(stateId)) {
        return false;
      }
    }

    return _Game_Battler_isStateAffected.call(this, stateId);
  };

  var _Game_Actor_skills = Game_Actor.prototype.skills;
  Game_Actor.prototype.skills = function() {
    var skills = _Game_Actor_skills.call(this);

    // Add skills granted by passives
    for (var i = 0; i < this._activePassives.length; i++) {
      var state = $dataStates[this._activePassives[i]];
      if (!state) continue;

      var tags = getNotetags(state, 'states');
      for (var j = 0; j < tags.passiveSkillLearn.length; j++) {
        var skill = $dataSkills[tags.passiveSkillLearn[j]];
        if (skill && !skills.contains(skill)) {
          skills.push(skill);
        }
      }
    }

    return skills;
  };

  //=============================================================================
  // Aura Effects
  //=============================================================================
  Game_Battler.prototype.hasAuraType = function(type) {
    for (var i = 0; i < this._activePassives.length; i++) {
      var state = $dataStates[this._activePassives[i]];
      if (!state) continue;

      var tags = getNotetags(state, 'states');
      if (tags.auraType === type) {
        if (!tags.auraCondition || this.checkAuraCondition(tags.auraCondition)) {
          return true;
        }
      }
    }
    return false;
  };

  Game_Battler.prototype.checkAuraCondition = function(condition) {
    if (!condition) return true;

    switch (condition.type) {
      case 'hpBelow':
        return (this.hp / this.mhp) * 100 <= condition.value;
      default:
        return true;
    }
  };

  Game_Battler.prototype.getAuraRange = function() {
    var maxRange = 0;
    for (var i = 0; i < this._activePassives.length; i++) {
      var state = $dataStates[this._activePassives[i]];
      if (!state) continue;

      var tags = getNotetags(state, 'states');
      if (tags.auraType && tags.auraRange > maxRange) {
        maxRange = tags.auraRange;
      }
    }
    return maxRange;
  };

  //=============================================================================
  // Aura Taunt Integration (with LIYAB_AggroSystem)
  //=============================================================================
  if (typeof Game_Battler.prototype.hasPhysicalTaunt === 'function') {
    var _Game_Battler_hasPhysicalTaunt = Game_Battler.prototype.hasPhysicalTaunt;
    Game_Battler.prototype.hasPhysicalTaunt = function() {
      if (_Game_Battler_hasPhysicalTaunt.call(this)) return true;
      return this.hasAuraType('physical');
    };

    var _Game_Battler_hasMagicalTaunt = Game_Battler.prototype.hasMagicalTaunt;
    Game_Battler.prototype.hasMagicalTaunt = function() {
      if (_Game_Battler_hasMagicalTaunt.call(this)) return true;
      return this.hasAuraType('magical');
    };

    var _Game_Battler_hasCertainTaunt = Game_Battler.prototype.hasCertainTaunt;
    Game_Battler.prototype.hasCertainTaunt = function() {
      if (_Game_Battler_hasCertainTaunt.call(this)) return true;
      return this.hasAuraType('certain');
    };
  }

  //=============================================================================
  // Skill Learn Menu Integration
  //=============================================================================
  if (passiveLearnCommand) {
    var _Window_MenuCommand_addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
    Window_MenuCommand.prototype.addOriginalCommands = function() {
      _Window_MenuCommand_addOriginalCommands.call(this);
      this.addCommand('Passives', 'passives', true);
    };

    var _Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
    Scene_Menu.prototype.createCommandWindow = function() {
      _Scene_Menu_createCommandWindow.call(this);
      this._commandWindow.setHandler('passives', this.commandPersonal.bind(this));
    };

    var _Scene_Menu_onPersonalOk = Scene_Menu.prototype.onPersonalOk;
    Scene_Menu.prototype.onPersonalOk = function() {
      _Scene_Menu_onPersonalOk.call(this);
      if (this._commandWindow.currentSymbol() === 'passives') {
        SceneManager.push(Scene_PassiveMenu);
      }
    };
  }

  //=============================================================================
  // Scene_PassiveMenu - Passive Learning Screen
  //=============================================================================
  function Scene_PassiveMenu() {
    this.initialize.apply(this, arguments);
  }

  Scene_PassiveMenu.prototype = Object.create(Scene_MenuBase.prototype);
  Scene_PassiveMenu.prototype.constructor = Scene_PassiveMenu;

  Scene_PassiveMenu.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
  };

  Scene_PassiveMenu.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createPassiveListWindow();
    this.createStatusWindow();
  };

  Scene_PassiveMenu.prototype.createHelpWindow = function() {
    this._helpWindow = new Window_Help(1);
    this.addWindow(this._helpWindow);
    this._helpWindow.setText('Select a passive to learn or forget.');
  };

  Scene_PassiveMenu.prototype.createPassiveListWindow = function() {
    var wy = this._helpWindow.height;
    var wh = Graphics.boxHeight - wy;
    this._passiveListWindow = new Window_PassiveList(0, wy, 300, wh);
    this._passiveListWindow.setHelpWindow(this._helpWindow);
    this._passiveListWindow.setHandler('ok', this.onPassiveOk.bind(this));
    this._passiveListWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._passiveListWindow);
  };

  Scene_PassiveMenu.prototype.createStatusWindow = function() {
    var wx = 300;
    var wy = this._helpWindow.height;
    var wh = Graphics.boxHeight - wy;
    this._statusWindow = new Window_PassiveStatus(wx, wy, Graphics.boxWidth - wx, wh);
    this._passiveListWindow.setStatusWindow(this._statusWindow);
    this.addWindow(this._statusWindow);
  };

  Scene_PassiveMenu.prototype.onPassiveOk = function() {
    var passive = this._passiveListWindow.currentPassive();
    if (passive) {
      var actor = this.actor();
      if (actor.hasPassive(passive.id)) {
        actor.removePassiveState(passive.id);
      } else {
        actor.addPassiveState(passive.id);
      }
      this._passiveListWindow.refresh();
      this._statusWindow.refresh();
    }
  };

  //=============================================================================
  // Window_PassiveList - Passive List Window
  //=============================================================================
  function Window_PassiveList() {
    this.initialize.apply(this, arguments);
  }

  Window_PassiveList.prototype = Object.create(Window_Selectable.prototype);
  Window_PassiveList.prototype.constructor = Window_PassiveList;

  Window_PassiveList.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._data = [];
    this._statusWindow = null;
    this.refresh();
  };

  Window_PassiveList.prototype.setStatusWindow = function(statusWindow) {
    this._statusWindow = statusWindow;
    this.callUpdateHelp();
  };

  Window_PassiveList.prototype.maxItems = function() {
    return this._data ? this._data.length : 0;
  };

  Window_PassiveList.prototype.currentPassive = function() {
    return this._data ? this._data[this.index()] : null;
  };

  Window_PassiveList.prototype.refresh = function() {
    this._data = this.buildPassiveList();
    Window_Selectable.prototype.refresh.call(this);
  };

  Window_PassiveList.prototype.buildPassiveList = function() {
    var actor = this._actor || $gameParty.leader();
    if (!actor) return [];

    var list = [];

    // Get learnable passives from class
    var classTags = getNotetags($dataClasses[actor._classId], 'classes');
    var learnableIds = classTags.learnablePassives;

    // Also get from actor
    var actorTags = getNotetags($dataActors[actor._actorId], 'actors');
    learnableIds = learnableIds.concat(actorTags.learnablePassives);

    // Remove duplicates
    learnableIds = learnableIds.filter(function(v, i, a) { return a.indexOf(v) === i; });

    for (var i = 0; i < learnableIds.length; i++) {
      var state = $dataStates[learnableIds[i]];
      if (state) {
        list.push(state);
      }
    }

    // Add currently equipped passives
    for (var j = 0; j < actor.passiveStates().length; j++) {
      var stateId = actor.passiveStates()[j];
      var state = $dataStates[stateId];
      if (state && !list.contains(state)) {
        list.push(state);
      }
    }

    return list;
  };

  Window_PassiveList.prototype.drawItem = function(index) {
    var passive = this._data[index];
    var actor = this._actor || $gameParty.leader();
    if (!passive || !actor) return;

    var rect = this.itemRectForText(index);
    var equipped = actor.hasPassive(passive.id);
    var canLearn = actor.canLearnPassive(passive.id);

    // Icon
    if (passive.iconIndex > 0) {
      this.drawIcon(passive.iconIndex, rect.x, rect.y);
    }

    // Name
    var nameX = rect.x + 32;
    this.changeTextColor(equipped ? '#00ff00' : (canLearn ? '#ffffff' : '#888888'));
    this.drawText(passive.name, nameX, rect.y, rect.width - 32);

    // Status indicator
    if (equipped) {
      this.changeTextColor('#00ff00');
      this.drawText('[Equipped]', nameX + 200, rect.y, 100);
    }
  };

  Window_PassiveList.prototype.callUpdateHelp = function() {
    if (this._statusWindow) {
      this._statusWindow.setPassive(this.currentPassive());
    }
  };

  Window_PassiveList.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
      this._actor = actor;
      this.refresh();
    }
  };

  //=============================================================================
  // Window_PassiveStatus - Passive Details Window
  //=============================================================================
  function Window_PassiveStatus() {
    this.initialize.apply(this, arguments);
  }

  Window_PassiveStatus.prototype = Object.create(Window_Base.prototype);
  Window_PassiveStatus.prototype.constructor = Window_PassiveStatus;

  Window_PassiveStatus.prototype.initialize = function(x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._passive = null;
  };

  Window_PassiveStatus.prototype.setPassive = function(passive) {
    if (this._passive !== passive) {
      this._passive = passive;
      this.refresh();
    }
  };

  Window_PassiveStatus.prototype.refresh = function() {
    this.contents.clear();

    if (!this._passive) return;

    var passive = this._passive;
    var y = 0;

    // Icon and Name
    if (passive.iconIndex > 0) {
      this.drawIcon(passive.iconIndex, 0, y);
    }
    this.drawText(passive.name, 36, y, 200);
    y += 36;

    // Description
    if (passive.description) {
      this.drawTextEx(passive.description, 0, y);
      y += 60;
    }

    // Traits from state
    this.drawTraits(passive, y);
    y += 120;

    // Conditions
    this.drawConditions(passive, y);
  };

  Window_PassiveStatus.prototype.drawTraits = function(state, y) {
    this.changeTextColor('#ffff00');
    this.drawText('Effects:', 0, y, 200);
    y += 28;

    this.resetTextColor();
    var traitText = '';

    // Parse traits for display
    if (state.traits) {
      for (var i = 0; i < state.traits.length && i < 6; i++) {
        var trait = state.traits[i];
        var text = this.getTraitName(trait);
        if (text) {
          this.drawText(text, 12, y, 280);
          y += 24;
        }
      }
    }

    // Parse passive param bonuses
    var tags = getNotetags(state, 'states');
    var paramNames = ['MHP', 'MMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'];
    for (var j = 0; j < tags.passiveParamBonus.length; j++) {
      var bonus = tags.passiveParamBonus[j];
      var paramName = paramNames[bonus.paramId] || '???';
      var bonusText = paramName + ' ' + bonus.sign + bonus.value + '%';
      this.drawText(bonusText, 12, y, 280);
      y += 24;
    }
  };

  Window_PassiveStatus.prototype.getTraitName = function(trait) {
    switch (trait.code) {
      case 11: return 'Element Rate: ' + Math.round(trait.value * 100) + '%';
      case 12: return 'Debuff Rate: ' + Math.round(trait.value * 100) + '%';
      case 13: return 'State Rate: ' + Math.round(trait.value * 100) + '%';
      case 14: return 'State Resist: State ' + trait.dataId;
      case 21: return 'Param: ' + trait.dataId + ' ' + Math.round(trait.value * 100) + '%';
      case 22: return 'Ex-Param: ' + trait.dataId + ' ' + Math.round(trait.value * 100) + '%';
      case 23: return 'Sp-Param: ' + trait.dataId + ' ' + Math.round(trait.value * 100) + '%';
      case 31: return 'Attack Element: ' + trait.dataId;
      case 32: return 'Attack State: ' + trait.dataId;
      case 33: return 'Attack Speed: +' + trait.dataId;
      case 34: return 'Attack Times: +' + trait.dataId;
      case 41: return 'Add Skill: ' + trait.dataId;
      case 42: return 'Seal Skill: ' + trait.dataId;
      case 43: return 'Skill Type: ' + trait.dataId;
      case 44: return 'Weapon Type: ' + trait.dataId;
      case 45: return 'Armor Type: ' + trait.dataId;
      case 46: return 'Lock Cursor';
      case 47: return 'Lock Equipment';
      case 51: return 'Action Times: ' + Math.round(trait.value * 100) + '%';
      case 52: return 'Sp-AGI: ' + Math.round(trait.value * 100) + '%';
      case 53: return 'Sp-Magic Def: ' + Math.round(trait.value * 100) + '%';
      case 54: return 'Magic Reflection';
      case 55: return 'Counter Attack';
      case 56: return 'Substitute';
      case 57: return 'TP Boost: ' + Math.round(trait.value * 100) + '%';
      case 58: return 'Guarded by: ' + trait.dataId;
      default: return null;
    }
  };

  Window_PassiveStatus.prototype.drawConditions = function(state, y) {
    var tags = getNotetags(state, 'states');
    if (tags.passiveConditions.length === 0 && !tags.customCondition) return;

    this.changeTextColor('#ffff00');
    this.drawText('Conditions:', 0, y, 200);
    y += 28;

    this.resetTextColor();
    for (var i = 0; i < tags.passiveConditions.length; i++) {
      var cond = tags.passiveConditions[i];
      var text = this.getConditionText(cond);
      if (text) {
        this.drawText(text, 12, y, 280);
        y += 24;
      }
    }
  };

  Window_PassiveStatus.prototype.getConditionText = function(cond) {
    switch (cond.type) {
      case 'hp': return 'HP ' + (cond.above ? '>' : '<') + ' ' + cond.value + '%';
      case 'mp': return 'MP ' + (cond.above ? '>' : '<') + ' ' + cond.value + '%';
      case 'tp': return 'TP ' + (cond.above ? '>' : '<') + ' ' + cond.value + '%';
      case 'stat': return 'Param ' + cond.statId + ' ' + (cond.above ? '>' : '<') + ' ' + cond.value;
      case 'switch': return 'Switch ' + cond.switchId + ' ' + (cond.on ? 'ON' : 'OFF');
      case 'variable': return 'Variable ' + cond.variableId + ' ' + (cond.above ? '>' : '<') + ' ' + cond.value;
      case 'state': return 'State ' + cond.stateId + ' active';
      case 'enemyAlive': return 'Enemies alive >= ' + cond.count;
      case 'allyDead': return 'Allies dead >= ' + cond.count;
      case 'partyLevel': return 'Party level > ' + cond.value;
      case 'inBattle': return 'In battle only';
      case 'notInBattle': return 'Out of battle only';
      default: return null;
    }
  };

  //=============================================================================
  // Plugin Commands
  //=============================================================================
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);

    if (command === 'LearnPassive') {
      var actorId = parseInt(args[0]);
      var stateId = parseInt(args[1]);
      var actor = $gameActors.actor(actorId);
      if (actor) {
        actor.learnPassive(stateId);
      }
    }

    if (command === 'ForgetPassive') {
      var actorId = parseInt(args[0]);
      var stateId = parseInt(args[1]);
      var actor = $gameActors.actor(actorId);
      if (actor) {
        actor.forgetPassive(stateId);
      }
    }

    if (command === 'AddPassive') {
      var actorId = parseInt(args[0]);
      var stateId = parseInt(args[1]);
      var actor = $gameActors.actor(actorId);
      if (actor) {
        actor.addPassiveState(stateId);
      }
    }

    if (command === 'RemovePassive') {
      var actorId = parseInt(args[0]);
      var stateId = parseInt(args[1]);
      var actor = $gameActors.actor(actorId);
      if (actor) {
        actor.removePassiveState(stateId);
      }
    }

    if (command === 'ShowPassiveMenu') {
      SceneManager.push(Scene_PassiveMenu);
    }
  };

  //=============================================================================
  // Refresh Passives on Action
  //=============================================================================
  var _BattleManager_startAction = BattleManager.startAction;
  BattleManager.startAction = function() {
    _BattleManager_startAction.call(this);
    // Refresh passives for all battlers
    $gameParty.aliveMembers().forEach(function(actor) {
      actor.refreshPassives();
    });
    $gameTroop.aliveMembers().forEach(function(enemy) {
      enemy.refreshPassives();
    });
  };

})();


(function() {
  'use strict';

  //=============================================================================
  // Parameters
  //=============================================================================
  var parameters = PluginManager.parameters('LIYAB_CombatCore');
  var rowCount = Math.max(1, parseInt(parameters['Row Count'] || 2));
  var frontIsBottom = parameters['Front Row Is Bottom'] !== 'false';
  var rowGapSensitivity = Number(parameters['Row Gap Sensitivity'] || 0);
  var rowTargetHelpText = String(parameters['Row Target Help Text'] || 'Row Target');
  var showRowNames = parameters['Show Row Names'] === 'true';
  var autoRowNeedsSelection = parameters['Auto Row Needs Selection'] === 'true';

  //=============================================================================
  // Notetag Cache
  //=============================================================================
  var notetagCache = {
    skills: {},
    items: {},
    enemies: {}
  };

  function parseEnemyTags(obj) {
    var notes = obj.note || '';
    var result = { row: 0 };
    if (notes.match(/<Row:\s*(\d+)>/i)) {
      result.row = Math.max(1, parseInt(RegExp.$1));
    }
    return result;
  }

  function parseItemTags(obj) {
    var notes = obj.note || '';
    var result = {
      targetType: '',
      targetRow: 0,
      targetCount: 0
    };

    if (notes.match(/<Target:\s*Front\s+Enemy\s+Row>/i)) {
      result.targetType = 'frontRow';
    } else if (notes.match(/<Target:\s*Back\s+Enemy\s+Row>/i)) {
      result.targetType = 'backRow';
    } else if (notes.match(/<Target:\s*Enemy\s+Row\s+(\d+)>/i)) {
      result.targetType = 'enemyRow';
      result.targetRow = Math.max(1, parseInt(RegExp.$1));
    } else if (notes.match(/<Target:\s*Enemy\s+Row>/i)) {
      result.targetType = 'selectedRow';
    } else if (notes.match(/<Target:\s*(\d+)\s+Random\s+Front\s+Row>/i)) {
      result.targetType = 'randomFrontRow';
      result.targetCount = Math.max(1, parseInt(RegExp.$1));
    } else if (notes.match(/<Target:\s*(\d+)\s+Random\s+Back\s+Row>/i)) {
      result.targetType = 'randomBackRow';
      result.targetCount = Math.max(1, parseInt(RegExp.$1));
    } else if (notes.match(/<Target:\s*(\d+)\s+Random\s+Enemy\s+Row>/i)) {
      result.targetType = 'randomSelectedRow';
      result.targetCount = Math.max(1, parseInt(RegExp.$1));
    }

    return result;
  }

  function getEnemyTags(obj) {
    if (!notetagCache.enemies[obj.id]) {
      notetagCache.enemies[obj.id] = parseEnemyTags(obj);
    }
    return notetagCache.enemies[obj.id];
  }

  function getItemTags(obj) {
    var type = obj.isItem ? 'items' : 'skills';
    if (!notetagCache[type][obj.id]) {
      notetagCache[type][obj.id] = parseItemTags(obj);
    }
    return notetagCache[type][obj.id];
  }

  function getActionTags(action) {
    if (!action || !action.item()) return null;
    return getItemTags(action.item());
  }

  //=============================================================================
  // Game_Battler - Row Access
  //=============================================================================
  Game_Battler.prototype.row = function() {
    if (this.isEnemy()) {
      return this.enemyRow();
    }
    return 1;
  };

  //=============================================================================
  // Game_Enemy - Row Detection
  //=============================================================================
  Game_Enemy.prototype.enemyRow = function() {
    var tags = getEnemyTags(this.enemy());
    if (tags.row > 0) return tags.row;
    return this.positionRow();
  };

  Game_Enemy.prototype.positionRow = function() {
    var members = $gameTroop.aliveMembers();
    if (members.length === 0) return 1;

    var sorted = members.slice().sort(function(a, b) {
      if (frontIsBottom) {
        return a.screenY() - b.screenY();
      }
      return b.screenY() - a.screenY();
    });

    if (rowGapSensitivity > 0) {
      return this.gapBasedRow(sorted);
    }

    var index = sorted.indexOf(this);
    if (index < 0) return 1;
    return Math.floor(index * rowCount / sorted.length) + 1;
  };

  Game_Enemy.prototype.gapBasedRow = function(sorted) {
    var currentRow = 1;
    var lastY = null;
    var rowMap = {};
    for (var i = 0; i < sorted.length; i++) {
      var enemy = sorted[i];
      var y = frontIsBottom ? enemy.screenY() : -enemy.screenY();
      if (lastY !== null && y - lastY > rowGapSensitivity) {
        currentRow++;
      }
      rowMap[enemy._enemyId] = currentRow;
      lastY = y;
    }
    var row = rowMap[this._enemyId] || 1;
    return Math.min(row, rowCount);
  };

  //=============================================================================
  // Game_Troop - Row Helpers
  //=============================================================================
  Game_Troop.prototype.rowMembers = function(x) {
    return this.members().filter(function(enemy) {
      return enemy.enemyRow() === x;
    });
  };

  Game_Troop.prototype.rowAliveMembers = function(x) {
    return this.aliveMembers().filter(function(enemy) {
      return enemy.enemyRow() === x;
    });
  };

  Game_Troop.prototype.frontRowAliveMembers = function() {
    for (var i = 1; i <= rowCount; i++) {
      var members = this.rowAliveMembers(i);
      if (members.length > 0) return members;
    }
    return [];
  };

  Game_Troop.prototype.backRowAliveMembers = function() {
    for (var i = rowCount; i >= 1; i--) {
      var members = this.rowAliveMembers(i);
      if (members.length > 0) return members;
    }
    return [];
  };

  //=============================================================================
  // Game_Action - Row Targeting
  //=============================================================================
  var _Game_Action_makeTargets = Game_Action.prototype.makeTargets;
  Game_Action.prototype.makeTargets = function() {
    var tags = getActionTags(this);
    if (tags && tags.targetType) {
      return this.repeatTargets(this.makeRowTargets(tags));
    }
    return _Game_Action_makeTargets.call(this);
  };

  Game_Action.prototype.makeRowTargets = function(tags) {
    var unit = this.opponentsUnit();
    if (!unit || typeof unit.rowAliveMembers !== 'function') return [];
    var targets = [];
    var type = tags.targetType;

    switch (type) {
      case 'frontRow':
        targets = unit.frontRowAliveMembers();
        break;
      case 'backRow':
        targets = unit.backRowAliveMembers();
        break;
      case 'enemyRow':
        targets = unit.rowAliveMembers(tags.targetRow);
        break;
      case 'selectedRow':
        if (this._targetIndex >= 0) {
          var enemy = unit.smoothTarget(this._targetIndex);
          if (enemy) targets = unit.rowAliveMembers(enemy.enemyRow());
        }
        break;
      case 'randomFrontRow':
        targets = this.randomRowTargets(unit.frontRowAliveMembers(), tags.targetCount);
        break;
      case 'randomBackRow':
        targets = this.randomRowTargets(unit.backRowAliveMembers(), tags.targetCount);
        break;
      case 'randomSelectedRow':
        if (this._targetIndex >= 0) {
          var enemy = unit.smoothTarget(this._targetIndex);
          if (enemy) targets = this.randomRowTargets(unit.rowAliveMembers(enemy.enemyRow()), tags.targetCount);
        }
        break;
    }
    return targets;
  };

  Game_Action.prototype.randomRowTargets = function(members, count) {
    var pool = members.slice();
    var result = [];
    while (pool.length > 0 && result.length < count) {
      var index = Math.randomInt(pool.length);
      result.push(pool.splice(index, 1)[0]);
    }
    return result;
  };

  // Row-targeting skills need selection so the player can pick which enemy's
  // row to hit (only relevant when Auto Row Needs Selection is enabled).
  var _Game_Action_needsSelection = Game_Action.prototype.needsSelection;
  Game_Action.prototype.needsSelection = function() {
    var tags = getActionTags(this);
    if (tags && tags.targetType) {
      if (!autoRowNeedsSelection) return false;
      if (tags.targetType === 'selectedRow' || tags.targetType === 'randomSelectedRow') {
        return true;
      }
      return false;
    }
    return _Game_Action_needsSelection.call(this);
  };

  //=============================================================================
  // BattleManager - Row Target Integration
  //=============================================================================
  var _BattleManager_startAction = BattleManager.startAction;
  BattleManager.startAction = function() {
    _BattleManager_startAction.call(this);
    if (this._action && getActionTags(this._action)) {
      this._targets = this._action.makeTargets();
    }
  };

  //=============================================================================
  // Window_Help - Row Target Text
  //=============================================================================
  var _Window_Help_setBattler = Window_Help.prototype.setBattler;
  Window_Help.prototype.setBattler = function(battler) {
    if (!battler) {
      _Window_Help_setBattler.call(this, battler);
      return;
    }
    var action = BattleManager.inputtingAction();
    var tags = getActionTags(action);
    if (tags && tags.targetType && !autoRowNeedsSelection) {
      this.drawRowTargetText(tags);
      return;
    }
    _Window_Help_setBattler.call(this, battler);
  };

  Window_Help.prototype.drawRowTargetText = function(tags) {
    this.contents.clear();
    this.resetFontSettings();
    var text = rowTargetHelpText;
    if (tags.targetType === 'frontRow') text = 'Front Row';
    if (tags.targetType === 'backRow') text = 'Back Row';
    if (tags.targetType === 'enemyRow') text = 'Row ' + tags.targetRow;
    if (tags.targetType === 'randomFrontRow') text = tags.targetCount + ' Random Front Row';
    if (tags.targetType === 'randomBackRow') text = tags.targetCount + ' Random Back Row';
    var wx = 0;
    var wy = (this.contents.height - this.lineHeight()) / 2;
    this.drawText(text, wx, wy, this.contents.width, 'center');
  };

  //=============================================================================
  // Window_BattleEnemy - Row Name Display + Row-Only Selection
  //=============================================================================
  var _Window_BattleEnemy_drawItem = Window_BattleEnemy.prototype.drawItem;
  Window_BattleEnemy.prototype.drawItem = function(index) {
    if (!showRowNames) {
      _Window_BattleEnemy_drawItem.call(this, index);
      return;
    }
    this.resetTextColor();
    var enemy = this._enemies[index];
    var name = enemy.name();
    var rect = this.itemRectForText(index);
    this.drawText(name, rect.x, rect.y, rect.width);
    var rowText = this.rowLabel(enemy);
    this.drawText(rowText, rect.x + rect.width - this.textWidth(rowText), rect.y, this.textWidth(rowText));
  };

  Window_BattleEnemy.prototype.rowLabel = function(enemy) {
    if (enemy.enemyRow() === 1) return 'F.';
    return 'B.';
  };

})();
