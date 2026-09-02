//=============================================================================
// LIYAB_PathMove.js
//=============================================================================

/*:
 * @plugindesc v1.0 Pathfind the player and/or events to a tile, walking only on the road/path tile family (the tile Event 2 stands on).
 * @author LIYAB
 *
 * @param Road Tile Min
 * @text Road Tile Min
 * @desc Lowest base tile id considered walkable road. Default 2800 (covers the family Event 2 stands on).
 * @default 2800
 *
 * @param Road Tile Max
 * @text Road Tile Max
 * @desc Highest base tile id considered walkable road. Default 2910.
 * @default 2910
 *
 * @help
 * ============================================================================
 *   Plugin Command
 * ============================================================================
 *
 *   LIYAB MoveTo x y [eventIds...]
 *     Moves the player and the given event ids (comma-separated, no spaces) to
 *     tile (x, y). If no event ids are given, only the player moves.
 *
 *   Examples:
 *     LIYAB MoveTo 14 14            -> player walks to (14,14)
 *     LIYAB MoveTo 14 14 2,3        -> events 2 and 3 walk to (14,14)
 *     LIYAB MoveTo 14 14 -1,2,3     -> player plus events 2 and 3
 *
 *   Movement only steps on tiles whose base (layer 0) tile id is within the
 *   Road Tile Range param, so everyone stays on the road and never cuts
 *   across grass/walls. The default range (2800-2910) is the road family
 *   that Event 2 (Vicente Enriquez) stands on.
 *
 * ============================================================================
 *   Notes
 * ============================================================================
 *   - Uses the same A* idea as the engine's findDirectionTo, but returns the
 *     full route at once and bakes it into a forced move route per character,
 *     so they all walk simultaneously and deterministically.
 *   - The target tile itself does not need to be a road tile; the walker
 *     stops at the first road tile adjacent to it.
 *   - Set the event's moveSpeed/moveFrequency beforehand if you want a march.
 */

(function() {
  'use strict';

  var parameters = PluginManager.parameters('LIYAB_PathMove');
  var roadMin = Number(parameters['Road Tile Min'] || 2800);
  var roadMax = Number(parameters['Road Tile Max'] || 2910);

  var isRoad = function(x, y) {
    if (x < 0 || y < 0 || x >= $gameMap.width() || y >= $gameMap.height()) return false;
    var tileId = $gameMap.data()[y * $gameMap.width() + x];
    return tileId >= roadMin && tileId <= roadMax;
  };

  var findRoadPath = function(startX, startY, goalX, goalY) {
    var openList = [[startX, startY]];
    var came = {};
    var g = {};
    var key = startX + ',' + startY;
    g[key] = 0;

    var h = function(x, y) {
      return Math.abs(x - goalX) + Math.abs(y - goalY);
    };

    while (openList.length > 0) {
      var bestIndex = 0;
      for (var i = 1; i < openList.length; i++) {
        var k = openList[i][0] + ',' + openList[i][1];
        var bk = openList[bestIndex][0] + ',' + openList[bestIndex][1];
        if (g[k] + h(openList[i][0], openList[i][1]) < g[bk] + h(openList[bestIndex][0], openList[bestIndex][1])) {
          bestIndex = i;
        }
      }
      var current = openList.splice(bestIndex, 1)[0];
      var ck = current[0] + ',' + current[1];
      if (current[0] === goalX && current[1] === goalY) {
        var path = [];
        var c = ck;
        while (c !== undefined) {
          var parts = c.split(',');
          path.unshift({ x: Number(parts[0]), y: Number(parts[1]) });
          c = came[c];
        }
        return path;
      }
      var dirs = [[1, 0, 3], [-1, 0, 2], [0, 1, 1], [0, -1, 4]];
      for (var j = 0; j < dirs.length; j++) {
        var nx = current[0] + dirs[j][0];
        var ny = current[1] + dirs[j][1];
        var nk = nx + ',' + ny;
        if (g[nk] !== undefined) continue;
        if (nx === goalX && ny === goalY || isRoad(nx, ny)) {
          g[nk] = g[ck] + 1;
          came[nk] = ck;
          openList.push([nx, ny]);
        }
      }
    }
    return null;
  };

  var routeCommands = function(path) {
    var list = [];
    for (var i = 1; i < path.length; i++) {
      var dx = path[i].x - path[i - 1].x;
      var dy = path[i].y - path[i - 1].y;
      var code;
      if (dx === 1) code = 3;       // Move Right
      else if (dx === -1) code = 2; // Move Left
      else if (dy === 1) code = 1;  // Move Down
      else code = 4;                // Move Up
      list.push({ code: code, parameters: [] });
    }
    list.push({ code: 0, parameters: [] });
    return list;
  };

  var moveCharacter = function(character, goalX, goalY) {
    if (!character) return;
    var path = findRoadPath(character.x, character.y, goalX, goalY);
    if (!path) {
      console.log('LIYAB PathMove: no road path to ' + goalX + ',' + goalY);
      return;
    }
    var route = {
      list: routeCommands(path),
      repeat: false,
      skippable: false,
      wait: false
    };
    character.forceMoveRoute(route);
  };

  var _pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _pluginCommand.call(this, command, args);
    if (command === 'LIYAB' && args[0] === 'MoveTo') {
      var goalX = Number(args[1]);
      var goalY = Number(args[2]);
      if (isNaN(goalX) || isNaN(goalY)) return;
      var ids = [];
      if (args.length > 3) {
        ids = args[3].split(',');
      } else {
        ids = ['-1'];
      }
      for (var i = 0; i < ids.length; i++) {
        var id = Number(ids[i]);
        if (id === -1) {
          moveCharacter($gamePlayer, goalX, goalY);
        } else {
          moveCharacter($gameMap.event(id), goalX, goalY);
        }
      }
    }
  };

})();
