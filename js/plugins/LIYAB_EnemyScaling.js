/*:
 * @plugindesc [v1.0] LIYAB Enemy Scaling - Per-enemy level/chapter/both scaling with configurable caps.
 * @author GDKJasper
 *
 * @param ---Scaling---
 * @default
 *
 * @param Chapter Variable Id
 * @desc Game variable that holds the current chapter number.
 * @type number
 * @default 1
 *
 * @param Base Level
 * @desc Party average level at which enemies are at 1.0x multiplier.
 * @type number
 * @default 1
 *
 * @param Level Growth Rate
 * @desc Percentage increase per party level above Base Level.
 * @type number
 * @default 15
 *
 * @param Chapter Growth Rate
 * @desc Percentage increase per chapter above 1.
 * @type number
 * @default 20
 *
 * @param Max Multiplier
 * @desc Hard cap as a percentage (150 = 1.5x max).
 * @type number
 * @default 150
 *
 * @help
 * ============================================================================
 * LIYAB ENEMY SCALING
 * ============================================================================
 * Scales enemy base parameters (HP, MP, ATK, DEF, MAT, MDF, AGI, LUK) based
 * on party level, story chapter, or both. Each enemy chooses its own scaling
 * type via note tags.
 *
 * SCALING TYPES
 *   <Scale Type: Level>   - scale by party average level only
 *   <Scale Type: Chapter> - scale by story chapter variable only
 *   <Scale Type: Both>    - average of level + chapter scales, then capped
 *   <No Scale>            - exempt this enemy entirely
 *
 * OVERRIDE TAGS (optional, per enemy)
 *   <Scale Level Rate: n>   - custom level growth rate (% per level)
 *   <Scale Chapter Rate: n> - custom chapter growth rate (% per chapter)
 *   <Scale Max: n.n>        - custom max multiplier (1.3 = 1.3x cap)
 *
 * FORMULAS
 *   levelScale   = 1 + (partyAvgLevel - baseLevel) * (levelRate / 100)
 *   chapterScale = 1 + (chapter - 1) * (chapterRate / 100)
 *
 *   Type Level:   multiplier = levelScale
 *   Type Chapter: multiplier = chapterScale
 *   Type Both:    multiplier = (levelScale + chapterScale) / 2
 *
 *   finalMultiplier = min(multiplier, maxMultiplier)
 *   scaledParam = floor(baseParam * finalMultiplier)
 *
 * EXAMPLE
 *   Guardia Civil Soldier:  <Scale Type: Chapter>
 *   Bonzon's Men:           <Scale Type: Level>
 *   Spanish Officer:        <Scale Type: Both>  <Scale Max: 1.3>
 *   Boss (Agustin):         <No Scale>
 * ============================================================================
 */
(function() {
  'use strict';

  var parameters = PluginManager.parameters('LIYAB_EnemyScaling');
  var chapterVarId = Number(parameters['Chapter Variable Id'] || 1);
  var baseLevel = Number(parameters['Base Level'] || 1);
  var defaultLevelRate = Number(parameters['Level Growth Rate'] || 15);
  var defaultChapterRate = Number(parameters['Chapter Growth Rate'] || 20);
  var defaultMaxMultiplier = Number(parameters['Max Multiplier'] || 150) / 100;

  //=============================================================================
  // Notetag Cache
  //=============================================================================
  var scaleCache = {};

  function getScaleData(enemyId) {
    if (scaleCache[enemyId]) return scaleCache[enemyId];

    var enemy = $dataEnemies[enemyId];
    var data = {
      type: null,
      levelRate: defaultLevelRate,
      chapterRate: defaultChapterRate,
      maxMult: defaultMaxMultiplier
    };

    if (!enemy) {
      scaleCache[enemyId] = data;
      return data;
    }

    var notes = enemy.note || '';

    if (notes.match(/<No\s+Scale>/i)) {
      data.type = 'none';
    } else if (notes.match(/<Scale\s+Type:\s*(Level|Chapter|Both)>/i)) {
      data.type = RegExp.$1.toLowerCase();
    }

    if (notes.match(/<Scale\s+Level\s+Rate:\s*(\d+)>/i)) {
      data.levelRate = parseInt(RegExp.$1, 10);
    }
    if (notes.match(/<Scale\s+Chapter\s+Rate:\s*(\d+)>/i)) {
      data.chapterRate = parseInt(RegExp.$1, 10);
    }
    if (notes.match(/<Scale\s+Max:\s*(\d+(?:\.\d+)?)>/i)) {
      data.maxMult = parseFloat(RegExp.$1);
    }

    scaleCache[enemyId] = data;
    return data;
  }

  //=============================================================================
  // Helpers
  //=============================================================================
  function currentChapter() {
    if (!$gameVariables) return 0;
    var v = $gameVariables.value(chapterVarId);
    return typeof v === 'number' ? v : 0;
  }

  function partyAvgLevel() {
    if (!$gameParty) return baseLevel;
    var members = $gameParty.members();
    if (members.length === 0) return baseLevel;
    var sum = 0;
    for (var i = 0; i < members.length; i++) {
      sum += members[i].level;
    }
    return Math.floor(sum / members.length);
  }

  function computeMultiplier(data) {
    var levelScale = 1 + (partyAvgLevel() - baseLevel) * (data.levelRate / 100);
    var chapterScale = 1 + (currentChapter() - 1) * (data.chapterRate / 100);

    var multiplier;
    switch (data.type) {
      case 'level':
        multiplier = levelScale;
        break;
      case 'chapter':
        multiplier = chapterScale;
        break;
      case 'both':
        multiplier = (levelScale + chapterScale) / 2;
        break;
      default:
        multiplier = 1;
        break;
    }

    if (multiplier > data.maxMult) multiplier = data.maxMult;
    if (multiplier < 0) multiplier = 0;
    return multiplier;
  }

  //=============================================================================
  // Hook: Game_Enemy.prototype.paramBase
  //=============================================================================
  var _Game_Enemy_paramBase = Game_Enemy.prototype.paramBase;
  Game_Enemy.prototype.paramBase = function(paramId) {
    var base = _Game_Enemy_paramBase.call(this, paramId);
    var data = getScaleData(this._enemyId);
    if (!data.type || data.type === 'none') return base;
    return Math.floor(base * computeMultiplier(data));
  };

})();
