/*:
 * @plugindesc [v1.0] LIYAB Core - Critical damage control, reload/brace states, ally MP regen aura, and Supremo aura.
 * @author GDKJasper
 *
 * @param ---Critical Damage---
 * @default
 *
 * @param Default Critical Multiplier
 * @desc Base critical damage multiplier as a percentage. Default is MV's 300%.
 * @type number
 * @default 300
 *
 * @param ---Reload State---
 * @default
 *
 * @param Reload State Id
 * @desc State ID used as the 'reloading' status marker while the mechanic is active.
 * @type number
 * @default 25
 *
 * @param Reload Boost
 * @desc Damage multiplier for the user's boosted attack on the follow-up turn.
 * @type number
 * @default 150
 *
 * @param ---Supremo Aura---
 * @default
 *
 * @param Vengeance State Id
 * @desc State ID applied to the whole party when the Supremo bearer dies.
 * @type number
 * @default 15
 *
 * @param Vengeance Min Turns
 * @desc Minimum turns the Vengeance state lasts when applied to the party.
 * @type number
 * @default 5
 *
 * @param Vengeance Max Turns
 * @desc Maximum turns the Vengeance state lasts when applied to the party.
 * @type number
 * @default 7
 *
 * @param Katipunan Classes
 * @desc Comma-separated class IDs that count as Katipunan (the aura targets).
 * @default 7,8,9,10,11,12,13,14,15,16
 *
 * @param ---Chapter Names---
 * @default
 *
 * @param Chapter Variable Id
 * @desc Game variable that holds the current chapter number. Class/weapon/skill
 * names with a <Chapter Name[n]> notetag swap when this variable changes.
 * @type number
 * @default 1
 *
 * @help
 * ============================================================================
 * LIYAB CORE
 * ============================================================================
 * Consolidated skill-mechanic plugins: critical damage control, the two-turn
 * reload/brace mechanic, ally MP regen auras, and the Supremo aura.
 *
 * CRITICAL DAMAGE
 *   Battler notetags: <Critical Multiplier: +x%> / <Flat Critical: +x>
 *     <Physical Critical Rate: +x%> / <Magical ...> / <Certain Hit ...>
 *   Skill/Item notetags: <Critical Multiplier: x%> / <Flat Critical: x% stat>
 *   [Optional] <Critical Rate: x%>
 *   [Optional] Action sequence: CRITICAL MULTIPLIER / FLAT CRITICAL /
 *     FORCE CRITICAL / FORCE NO CRITICAL / NORMAL CRITICAL
 *
 * RELOAD STATE
 *   Skill notetag: <Reload State> - skips the user's next turn, then the
 *   following attack is guaranteed-hit and boosted (Reload Boost param).
 *
 * ALLY MP REGEN
 *   State notetag: <Ally MP Regen: x%> - while the bearer is alive, allies
 *   recover x% of MaxMP each turn.
 *
 * SUPREMO AURA
 *   State notetags: <Katipunan Aura: x%> (boosts Katipunan-class allies'
 *   MHP/MMP/ATK/DEF/MAT/MDF/AGI) and <Vengeance On Death> (applies the
 *   Vengeance state to the party when the bearer dies for a random 5-7 turns).
 *
 * CHAPTER NAMES
 *   Class/Weapon/Skill notetag: <Chapter Name[n]: New Name>
 *   When the Chapter Variable equals n, the object's display name becomes
 *   "New Name". Set the variable to any other value and the base (editor) name
 *   is restored, so renames revert naturally when a player returns to an
 *   earlier chapter. Multiple tags on one object give it a different name per
 *   chapter.
 *   Example (Sapper class):
 *     Base name: "Sapper (Inhinyero)"   (editor field)
 *     Notetag:   <Chapter Name[4]: Sapper (Demolisyunista)>
 *   Set the Chapter Variable Id param to the game variable that tracks the
 *   current chapter (default 1). Just set that variable in a story event
 *   (Control Variables) and the rename applies automatically.
 *   Plugin command: LIYAB SetChapter x  — sets the variable and re-evaluates
 *   every chapter-name notetag. Class names shown in menus/status update too;
 *   battle windows draw names when they open, so the new name appears from the
 *   next scene refresh onward.
 * ============================================================================
 */
(function() {
  'use strict';

  var parameters = PluginManager.parameters('LIYAB_Core');
  var defaultMultiplier = Number(parameters['Default Critical Multiplier'] || 300);

  var STAT_NAMES = ['hp','mp','atk','def','mat','mdf','agi','luk'];

  //=============================================================================
  // Notetag Cache
  //=============================================================================
  var notetagCache = {
    skills: {}, items: {},
    actors: {}, classes: {}, enemies: {}, weapons: {}, armors: {}, states: {}
  };

  //=============================================================================
  // GROUP 1 — Notetag Parsing: Battler Sources
  //=============================================================================
  function parseBattlerNotetags(obj, type) {
    var notes = obj.note || '';
    var result = {
      critMultBonus: 0,
      flatCritBonus: 0,
      physicalCritRate: 0,
      magicalCritRate: 0,
      certainCritRate: 0
    };

    if (notes.match(/<Critical\s+Multiplier:\s+([+\-])\s*(\d+)\s*%>/i)) {
      var sign = RegExp.$1;
      var amt = parseInt(RegExp.$2);
      result.critMultBonus = sign === '-' ? -amt : amt;
    }

    if (notes.match(/<Flat\s+Critical:\s+([+\-])\s*(\d+)>/i)) {
      var fSign = RegExp.$1;
      var fAmt = parseInt(RegExp.$2);
      result.flatCritBonus = fSign === '-' ? -fAmt : fAmt;
    }

    if (notes.match(/<Physical\s+Critical\s+Rate:\s+([+\-])\s*(\d+)\s*%>/i)) {
      var pSign = RegExp.$1;
      var pAmt = parseInt(RegExp.$2);
      result.physicalCritRate = pSign === '-' ? -pAmt : pAmt;
    }

    if (notes.match(/<Magical\s+Critical\s+Rate:\s+([+\-])\s*(\d+)\s*%>/i)) {
      var mSign = RegExp.$1;
      var mAmt = parseInt(RegExp.$2);
      result.magicalCritRate = mSign === '-' ? -mAmt : mAmt;
    }

    if (notes.match(/<Certain\s+Hit\s+Critical\s+Rate:\s+([+\-])\s*(\d+)\s*%>/i)) {
      var cSign = RegExp.$1;
      var cAmt = parseInt(RegExp.$2);
      result.certainCritRate = cSign === '-' ? -cAmt : cAmt;
    }

    return result;
  }

  //=============================================================================
  // GROUP 1 — Notetag Parsing: Skill/Item Sources
  //=============================================================================
  function parseSkillNotetags(obj, type) {
    var notes = obj.note || '';
    var result = {
      critMultiplier: null,
      flatCritPct: 0,
      flatCritStat: '',
      critRate: null       // GROUP 2
    };

    if (notes.match(/<Critical\s+Multiplier:\s*(\d+(?:\.\d+)?)\s*%>/i)) {
      result.critMultiplier = parseFloat(RegExp.$1);
    }

    if (notes.match(/<Flat\s+Critical:\s*(\d+(?:\.\d+)?)\s*%\s+(hp|mp|atk|def|mat|mdf|agi|luk)>/i)) {
      result.flatCritPct = parseFloat(RegExp.$1);
      result.flatCritStat = RegExp.$2;
    }

    // GROUP 2 — per-skill critical rate
    if (notes.match(/<Critical\s+Rate:\s*(\d+(?:\.\d+)?)\s*%>/i)) {
      result.critRate = parseFloat(RegExp.$1) / 100;
    } else if (notes.match(/<Critical\s+Rate:\s*(\d+\.\d+)>/i)) {
      result.critRate = parseFloat(RegExp.$1);
    }

    return result;
  }

  function getBattlerTags(obj, type) {
    if (!obj) return parseBattlerNotetags({note:''}, type);
    if (!notetagCache[type]) notetagCache[type] = {};
    if (!notetagCache[type][obj.id]) {
      notetagCache[type][obj.id] = parseBattlerNotetags(obj, type);
    }
    return notetagCache[type][obj.id];
  }

  function getSkillTags(obj, type) {
    if (!obj) return parseSkillNotetags({note:''}, type);
    if (!notetagCache[type]) notetagCache[type] = {};
    if (!notetagCache[type][obj.id]) {
      notetagCache[type][obj.id] = parseSkillNotetags(obj, type);
    }
    return notetagCache[type][obj.id];
  }

  //=============================================================================
  // GROUP 1 — Game_Battler: Battler-level bonuses
  //=============================================================================
  Game_Battler.prototype.critMultSourceType = function(obj) {
    if (!obj) return null;
    if (DataManager.isWeapon(obj)) return 'weapons';
    if (DataManager.isArmor(obj)) return 'armors';
    if (typeof obj.expParams !== 'undefined') return 'classes';
    if (typeof obj.nickname === 'string' && typeof obj.wtypeId === 'undefined') return 'actors';
    if (typeof obj.params !== 'undefined') return 'enemies';
    if (typeof obj.autoRemovalTiming !== 'undefined') return 'states';
    return null;
  };

  Game_Battler.prototype.critMultBonus = function() {
    var bonus = 0;
    var sources = this.traitObjects();
    for (var i = 0; i < sources.length; i++) {
      var obj = sources[i];
      if (!obj || obj.id === undefined) continue;
      var type = this.critMultSourceType(obj);
      if (!type) continue;
      bonus += getBattlerTags(obj, type).critMultBonus;
    }
    return bonus;
  };

  Game_Battler.prototype.critFlatBonus = function() {
    var bonus = 0;
    var sources = this.traitObjects();
    for (var i = 0; i < sources.length; i++) {
      var obj = sources[i];
      if (!obj || obj.id === undefined) continue;
      var type = this.critMultSourceType(obj);
      if (!type) continue;
      bonus += getBattlerTags(obj, type).flatCritBonus;
    }
    return bonus;
  };

  Game_Battler.prototype.critRateBonus = function(hitType) {
    var bonus = 0;
    var sources = this.traitObjects();
    for (var i = 0; i < sources.length; i++) {
      var obj = sources[i];
      if (!obj || obj.id === undefined) continue;
      var type = this.critMultSourceType(obj);
      if (!type) continue;
      var tags = getBattlerTags(obj, type);
      if (hitType === 1) bonus += tags.physicalCritRate;
      else if (hitType === 2) bonus += tags.magicalCritRate;
      else if (hitType === 0) bonus += tags.certainCritRate;
    }
    return bonus;
  };

  //=============================================================================
  // GROUP 1 — Game_Action: applyCritical override
  //=============================================================================
  var _Game_Action_applyCritical = Game_Action.prototype.applyCritical;
  Game_Action.prototype.applyCritical = function(damage) {
    var item = this.item();
    if (!item) return _Game_Action_applyCritical.call(this, damage);

    var itemTags = getSkillTags(item, DataManager.isItem(item) ? 'items' : 'skills');
    var user = this.subject();

    // Skill-level base multiplier (or default), plus battler bonuses
    var baseMult = itemTags.critMultiplier !== null ? itemTags.critMultiplier : defaultMultiplier;

    // GROUP 2 — action sequence override
    if (this._critMultOverride !== undefined) {
      baseMult = this._critMultOverride;
    }

    var totalMult = (baseMult + user.critMultBonus()) / 100;
    if (totalMult < 0) totalMult = 0;

    var result = Math.round(damage * totalMult);

    // Battler flat bonus
    result += user.critFlatBonus();

    // GROUP 2 — action sequence flat override
    if (this._flatCritOverride !== undefined) {
      result += this._flatCritOverride;
    }

    // Per-skill flat critical
    if (itemTags.flatCritStat !== '') {
      var statIndex = STAT_NAMES.indexOf(itemTags.flatCritStat);
      if (statIndex >= 0) {
        result += Math.floor(user.param(statIndex) * itemTags.flatCritPct / 100);
      }
    }

    return result;
  };

  //=============================================================================
  // GROUP 1 — Game_Action: itemCri override (crit rate bonuses)
  //=============================================================================
  var _Game_Action_itemCri = Game_Action.prototype.itemCri;
  Game_Action.prototype.itemCri = function(target) {
    // GROUP 2 — force critical / force no critical
    if (this._forceCritical) return 1;
    if (this._forceNoCritical) return 0;

    var item = this.item();
    if (!item || !item.damage.critical) return 0;

    // GROUP 2 — per-skill crit rate override
    var itemTags = getSkillTags(item, DataManager.isItem(item) ? 'items' : 'skills');
    if (itemTags.critRate !== null) {
      return itemTags.critRate;
    }

    // Vanilla base
    var rate = this.subject().cri * (1 - target.cev);

    // Hit-type crit rate bonus
    rate += this.subject().critRateBonus(item.hitType);

    return rate;
  };

  //=============================================================================
  // GROUP 2 — Game_Action: Force Critical / Override State
  //=============================================================================
  var _Game_Action_clear = Game_Action.prototype.clear;
  Game_Action.prototype.clear = function() {
    _Game_Action_clear.call(this);
    this._forceCritical = false;
    this._forceNoCritical = false;
    this._critMultOverride = undefined;
    this._flatCritOverride = undefined;
  };

  //=============================================================================
  // GROUP 2 — Action Sequence Integration (YEP_BattleEngineCore)
  //=============================================================================
  if (typeof BattleManager !== 'undefined' &&
      typeof BattleManager.processActionSequence === 'function') {

    var _BM_processActionSequence = BattleManager.processActionSequence;
    BattleManager.processActionSequence = function(actionName, actionArgs) {
      var subject = this._subject;
      var action = subject ? subject.currentAction() : null;

      // FORCE CRITICAL
      if (actionName === 'FORCE CRITICAL') {
        if (action) { action._forceCritical = true; action._forceNoCritical = false; }
        return true;
      }

      // FORCE NO CRITICAL
      if (actionName === 'FORCE NO CRITICAL') {
        if (action) { action._forceNoCritical = true; action._forceCritical = false; }
        return true;
      }

      // NORMAL CRITICAL
      if (actionName === 'NORMAL CRITICAL') {
        if (action) { action._forceCritical = false; action._forceNoCritical = false; }
        return true;
      }

      // CRITICAL MULTIPLIER: x%
      if (actionName === 'CRITICAL MULTIPLIER' && action && actionArgs.length > 0) {
        var rawArg = String(actionArgs[0]).trim();
        var val;
        if (rawArg.toUpperCase().match(/^VARIABLE\s+(\d+)/)) {
          val = $gameVariables.value(parseInt(RegExp.$1));
        } else {
          val = parseFloat(rawArg.replace('%', ''));
        }
        if (!isNaN(val)) action._critMultOverride = val;
        return true;
      }

      // FLAT CRITICAL: +x
      if (actionName === 'FLAT CRITICAL' && action && actionArgs.length > 0) {
        var flatRaw = String(actionArgs[0]).trim();
        var flatVal;
        if (flatRaw.toUpperCase().match(/^VARIABLE\s+(\d+)/)) {
          flatVal = $gameVariables.value(parseInt(RegExp.$1));
        } else {
          flatVal = parseInt(flatRaw);
        }
        if (!isNaN(flatVal)) action._flatCritOverride = flatVal;
        return true;
      }

      return _BM_processActionSequence.call(this, actionName, actionArgs);
    };
  }

})();


(function() {
  'use strict';

  var parameters = PluginManager.parameters('LIYAB_Core');
  var RELOAD_STATE_ID = Number(parameters['Reload State Id'] || 25);
  var RELOAD_BOOST = Number(parameters['Reload Boost'] || 150);
  var RELOAD_PHASE_KEY = '_liyabReloadPhase';

  //=============================================================================
  // Notetag Parsing
  //=============================================================================
  var reloadSkillCache = {};

  function getReloadSkillData(skill) {
    if (!skill) return null;
    if (reloadSkillCache[skill.id]) return reloadSkillCache[skill.id];
    var notes = skill.note || '';
    var data = { isReload: false };
    if (notes.match(/<Reload\s+State>/i)) {
      data.isReload = true;
    }
    reloadSkillCache[skill.id] = data;
    return data;
  }

  //=============================================================================
  // Phase helpers
  //=============================================================================
  Game_Battler.prototype.liyabReloadPhase = function() {
    return this[RELOAD_PHASE_KEY] || 0;
  };

  Game_Battler.prototype.setLiyabReloadPhase = function(phase) {
    this[RELOAD_PHASE_KEY] = phase;
    if (phase > 0) {
      this.addState(RELOAD_STATE_ID);
    } else {
      this.removeState(RELOAD_STATE_ID);
    }
  };

Game_Battler.prototype.liyabReloadCastTurn = function() {
return this['_liyabReloadCastTurn'] || 0;
};

  //=============================================================================
  // Casting the reload skill - arming phase 1
  //=============================================================================
  var _Game_Action_apply = Game_Action.prototype.apply;
  Game_Action.prototype.apply = function(target) {
    var item = this.item();
    if (item && DataManager.isSkill(item) && !item.isItem) {
      var skillData = getReloadSkillData(item);
      if (skillData && skillData.isReload) {
        var subject = this.subject();
        subject['_liyabReloadCastTurn'] = typeof $gameTroop !== 'undefined' ? $gameTroop.turnCount() : 0;
        subject.setLiyabReloadPhase(1);
      }
    }
    return _Game_Action_apply.call(this, target);
  };

  //=============================================================================
  // Skip the turn while reloading (phase 1)
  //=============================================================================
  var _Game_Battler_makeActions = Game_Battler.prototype.makeActions;
  Game_Battler.prototype.makeActions = function() {
    _Game_Battler_makeActions.call(this);
    if (this.liyabReloadPhase() === 1) {
      // Buffered hits can still land from prior actions, but the (re)loading
      // battler issues no new commands this turn.
      this.clearActions();
      this.setActionState ? this.setActionState('waiting') : null;
    }
  };

  //=============================================================================
  // Advance the phase at turn end
  //=============================================================================
  var _Game_Battler_onTurnEnd = Game_Battler.prototype.onTurnEnd;
  Game_Battler.prototype.onTurnEnd = function() {
    _Game_Battler_onTurnEnd.call(this);
    if (!BattleManager.isForcedTurn()) {
      var phase = this.liyabReloadPhase();
      var currentTurn = typeof $gameTroop !== 'undefined' ? $gameTroop.turnCount() : 0;
      if (phase === 1) {
        // Only advance once the turn following the cast has ended, so the
        // user skips exactly one full turn before becoming armed.
        if (currentTurn !== this.liyabReloadCastTurn()) {
          this.setLiyabReloadPhase(2);
        }
      } else if (phase === 2) {
        // Boost expired without being used.
        this.setLiyabReloadPhase(0);
      }
    }
  };

  //=============================================================================
  // Boosted attack while armed (phase 2): +% damage and guaranteed hit
  //=============================================================================
  var _Game_Action_makeDamageValue = Game_Action.prototype.makeDamageValue;
  Game_Action.prototype.makeDamageValue = function(target, critical) {
    var value = _Game_Action_makeDamageValue.call(this, target, critical);
    var subject = this.subject();
    if (subject.liyabReloadPhase() === 2) {
      var item = this.item();
      var isAttackSkill = item && (item.damage.type === 1); // HP damage
      if (isAttackSkill) {
        value = Math.floor(value * (RELOAD_BOOST / 100));
        // The boosted hit lands; consume the mechanic.
        subject.setLiyabReloadPhase(0);
      }
    }
    return value;
  };

  // Guaranteed hit while armed
  var _Game_Action_itemHit = Game_Action.prototype.itemHit;
  Game_Action.prototype.itemHit = function(target, targetIdx) {
    if (this.subject().liyabReloadPhase() === 2) {
      return 1;
    }
    return _Game_Action_itemHit.call(this, target, targetIdx);
  };

})();


(function() {
  'use strict';

  var regenStateCache = {};

  function getRegenPct(state) {
    if (!state) return 0;
    if (regenStateCache[state.id] !== undefined) return regenStateCache[state.id];
    var m = (state.note || '').match(/<Ally\s+MP\s+Regen:\s*(\d+(?:\.\d+)?)\s*%>/i);
    var pct = m ? parseFloat(m[1]) : 0;
    regenStateCache[state.id] = pct;
    return pct;
  }

  Game_Battler.prototype.liyabAllyMpRegenPct = function() {
    var total = 0;
    this.states().forEach(function(state) {
      total += getRegenPct(state);
    }, this);
    return total;
  };

  var _Game_Battler_regenerateAll = Game_Battler.prototype.regenerateAll;
  Game_Battler.prototype.regenerateAll = function() {
    _Game_Battler_regenerateAll.call(this);

    if (!this.isActor()) return;
    if (!$gameParty.inBattle()) return;

    var party = $gameParty.aliveMembers();
    var bearers = party.filter(function(m) {
      return m.liyabAllyMpRegenPct() > 0;
    });
    if (bearers.length === 0) return;

    var totalPct = bearers.reduce(function(sum, b) {
      return sum + b.liyabAllyMpRegenPct();
    }, 0);

    party.forEach(function(member) {
      // The aura bearer does not benefit from their own aura.
      if (bearers.contains(member)) return;
      var gain = Math.floor(member.mmp * totalPct / 100);
      if (gain > 0) {
        member.gainMp(gain);
      }
    });
  };

})();


(function() {
  'use strict';

  var parameters = PluginManager.parameters('LIYAB_Core');
  var VENGEANCE_STATE_ID = Number(parameters['Vengeance State Id'] || 15);
  var VENGEANCE_MIN = Number(parameters['Vengeance Min Turns'] || 5);
  var VENGEANCE_MAX = Number(parameters['Vengeance Max Turns'] || 7);
  var KATIPUNAN_CLASSES = (parameters['Katipunan Classes'] || '7,8,9,10,11,12,13,14,15,16')
    .split(',').map(function(n) { return parseInt(n, 10); });

  var stateCache = {};

  function auraPct(state) {
    if (!state) return 0;
    if (stateCache[state.id] !== undefined && stateCache[state.id].computed) return stateCache[state.id].pct;
    var m = (state.note || '').match(/<Katipunan\s+Aura:\s*(\d+(?:\.\d+)?)\s*%>/i);
    var hasDeath = /<Vengeance\s+On\s+Death>/i.test(state.note || '');
    stateCache[state.id] = { pct: m ? parseFloat(m[1]) : 0, death: hasDeath, computed: true };
    return stateCache[state.id].pct;
  }

  function auraDeathState(state) {
    if (!state) return false;
    if (stateCache[state.id] && stateCache[state.id].computed) return stateCache[state.id].death;
    auraPct(state);
    return stateCache[state.id] ? stateCache[state.id].death : false;
  }

  // Highest aura % contributed by a living bearer (sum if multiple).
  Game_Battler.prototype.liyabSupremoAuraPct = function() {
    var pct = 0;
    this.states().forEach(function(state) {
      pct += auraPct(state);
    }, this);
    return pct;
  };

  Game_Battler.prototype.liyabHasVengeanceOnDeath = function() {
    return this.states().some(function(state) {
      return auraDeathState(state);
    }, this);
  };

  Game_Battler.prototype.isKatipunanClass = function() {
    return this.isActor() && KATIPUNAN_CLASSES.contains(this._classId);
  };

  // Party-wide aura presence (only active during battle, from a living ally).
  Game_Battler.prototype.liyabSupremoAuraActive = function() {
    if (!this.isActor()) return false;
    return $gameParty.aliveMembers().some(function(member) {
      return member !== this && member.liyabSupremoAuraPct() > 0;
    }, this);
  };

  // Apply the aura to base params 0-6 (exclude Luck = 7).
  var _Game_Battler_paramPlus = Game_Battler.prototype.paramPlus;
  Game_Battler.prototype.paramPlus = function(paramId) {
    var value = _Game_Battler_paramPlus.call(this, paramId);

    if (paramId >= 0 && paramId <= 6 && this.liyabSupremoAuraActive() && this.isKatipunanClass()) {
      var pct = 0;
      $gameParty.aliveMembers().forEach(function(member) {
        if (member !== this) pct += member.liyabSupremoAuraPct();
      }, this);
      value += Math.floor(this.paramBase(paramId) * pct / 100);
    }

    return value;
  };

  // Death-triggered party Vengeance.
  var _Game_Battler_die = Game_Battler.prototype.die;
  Game_Battler.prototype.die = function() {
    _Game_Battler_die.call(this);

    if (this.isActor() && this.liyabHasVengeanceOnDeath() && $gameParty.inBattle()) {
      var turns = VENGEANCE_MIN + Math.randomInt(VENGEANCE_MAX - VENGEANCE_MIN + 1);
      $gameParty.aliveMembers().forEach(function(member) {
        if (member.isStateAddable(VENGEANCE_STATE_ID)) {
          member.addState(VENGEANCE_STATE_ID);
          member._stateTurns[VENGEANCE_STATE_ID] = turns;
        }
      }, this);
    }
  };

})();


(function() {
  'use strict';

  //=============================================================================
  // CHAPTER NAMES — rename classes/weapons/skills by the current chapter
  //=============================================================================
  var parameters = PluginManager.parameters('LIYAB_Core');
  var chapterVarId = Number(parameters['Chapter Variable Id'] || 1);
  var nameCache = { classes: {}, weapons: {}, skills: {} };

  function chapterNames(obj, type) {
    if (!obj) return null;
    if (nameCache[type][obj.id]) return nameCache[type][obj.id];
    var renames = {};
    var notes = obj.note || '';
    var re = /<Chapter\s+Name\[(\d+)\]:\s*([^>]+)>/gi;
    var m;
    while ((m = re.exec(notes))) {
      renames[parseInt(m[1], 10)] = m[2].trim();
    }
    nameCache[type][obj.id] = { base: obj.name, renames: renames };
    return nameCache[type][obj.id];
  }

  function currentChapter() {
    if (!$gameVariables) return 0;
    var v = $gameVariables.value(chapterVarId);
    return typeof v === 'number' ? v : 0;
  }

  function applyChapterNames() {
    if (!$gameParty) return;
    var chapter = currentChapter();
    [['classes', $dataClasses], ['weapons', $dataWeapons], ['skills', $dataSkills]]
      .forEach(function(pair) {
        var type = pair[0];
        var list = pair[1];
        for (var i = 0; i < list.length; i++) {
          var obj = list[i];
          if (!obj) continue;
          var entry = chapterNames(obj, type);
          if (!entry || Object.keys(entry.renames).length === 0) continue;
          obj.name = entry.renames.hasOwnProperty(chapter)
            ? entry.renames[chapter]
            : entry.base;
        }
      });
  }

  var _Game_Variables_setValue = Game_Variables.prototype.setValue;
  Game_Variables.prototype.setValue = function(variableId, value) {
    _Game_Variables_setValue.call(this, variableId, value);
    if (variableId === chapterVarId && $gameParty) {
      applyChapterNames();
    }
  };

  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'LIYAB' && args[0] === 'SetChapter' && args[1] !== undefined) {
      var ch = parseInt(args[1], 10);
      if (!isNaN(ch)) {
        $gameVariables.setValue(chapterVarId, ch);
      }
    }
  };

  ['loadGame', 'setupNewGame'].forEach(function(method) {
    var alias = DataManager[method];
    DataManager[method] = function() {
      var result = alias.apply(this, arguments);
      applyChapterNames();
      return result;
    };
  });

})();
