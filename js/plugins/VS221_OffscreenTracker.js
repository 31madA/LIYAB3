/*:
 * @target MZ
 * @plugindesc Offscreen Tracker system with horizontal lock and dynamic distance display.
 * @author Vishi221
 * @url https://vishi221.itch.io/
 * @help
 * Works with RPG Maker MV and MZ.
 * ---------------------------------------------------------------------------
 * Version: 1.0.1
 * ---------------------------------------------------------------------------
 * FEATURES:
 * - Displays direction arrows pointing to off-screen events or objectives.
 * - The Arrow rotates based on direction, the [Icon] and [Text] always 
 * remain in a perfect horizontal row.
 * - Group Positioning: The whole [Icon+Text] block intelligently follows 
 * the tail of the arrow.
 * - Dynamic Distance: Optionally display distance to target (e.g., "15m").
 * - Fully customizable: Colors, Icons, Fonts, Scale, and Arrow Images.
 * - Control visibility via Plugin Commands (Global or Specific Target).
 *
 * QUICK START:
 * 1. Add the Notetag (see below) to any Event you want to track.
 * 2. Configure global settings (Edge Padding, Scale, etc.) in Parameters.
 * 3. Make sure the Event is active (not erased) on the map.
 *
 * NOTETAGS (Event Note):
 * <VS221_Tracker: Name, IconID, Color, MaxDist, AlwaysShow>
 * - Name: Text to display.
 * - IconID: ID of the icon.
 * - Color: Hex color code.
 * - MaxDist (Optional): Limit visibility distance (0 = infinite).
 * - AlwaysShow (Optional): true/false. If true, the tracker stays visible 
 * even when the event is on the screen.
 * 
 * Example 1: Simple
 * <VS221_Tracker: Quest, 193, #ffcc00>
 * 
 * Example 2: Distance Limit + Always Show On Screen
 * <VS221_Tracker: Target, 87, #ff0000, 20, true>
 * 
 * PLUGIN COMMANDS ( MZ )
 * 1. Set Global Visibility
 * - Turn ALL trackers ON or OFF.
 * - Use this during cutscenes or specific map sections.
 * 
 * 2. Set Target Visibility
 * - Hide or Show a specific tracker by its NAME.
 * - Example: You have <VS221_Tracker: Inn, ...> and <VS221_Tracker: Shop, ...>
 * You can hide "Inn" while keeping "Shop" visible.
 * 
 * PLUGIN COMMANDS ( MV )
 * 1. Global Visibility (Hide/Show All)
 * Command: SetGlobalVisibility [true/false]
 * Example: SetGlobalVisibility false
 * (This will smoothly fade out all trackers)
 *
 * 2. Target Visibility (Hide/Show Specific)
 * Command: SetTargetVisibility [Name] [true/false]
 * Example: SetTargetVisibility Blacksmith false
 * (This will smoothly fade out the "Blacksmith" tracker)
 * 
 * SUPPORT:
 * Author: Vishi221  |  URL: https://vishi221.itch.io/
 * Feedback / bug reports: via the itch.io page above
 * Discord: https://discord.gg/C5EaJwgHwd
 *
 * @param EdgePadding
 * @text Edge Padding
 * @desc Distance from screen edge.
 * @type number
 * @default 35
 *
 * @param ScreenSafeGap
 * @text On-Screen Safe Gap
 * @desc Distance between the arrow and the target Event when on screen (prevents overlapping).
 * @type number
 * @default 40
 * 
 * @param ContentGap
 * @text Arrow-Content Gap
 * @desc Distance from Arrow to the [Icon+Text] group.
 * @type number
 * @default 40
 *
 * @param TextIconGap
 * @text Text-Icon Gap
 * @desc Distance between Icon and Text.
 * @type number
 * @default 5
 *
 * @param ArrowScale
 * @text Arrow Scale
 * @desc Size multiplier for the arrow.
 * @type number
 * @decimals 1
 * @default 1.0
 *
 * @param IconScale
 * @text Icon Scale
 * @desc Size multiplier for the icon.
 * @type number
 * @decimals 1
 * @default 1.0
 *
 * @param FontSize
 * @text Font Size
 * @desc Font size for the label.
 * @type number
 * @default 18
 * 
 * @param ArrowImage
 * @text Arrow Image Filename
 * @desc Select arrow image from img/system/ folder.
 * @default ArrowTrack
 * @require 1
 * @dir img/system/
 * @type file
 * 
 * @param ShowDistance
 * @text Show Distance
 * @desc Show distance to target next to the name (e.g., "Target 15m").
 * @type boolean
 * @default true
 *
 * @param DistanceUnit
 * @text Distance Unit
 * @desc Unit string to append to distance (e.g., m, km, steps).
 * @default m
 * 
 * @param MaxVisDistance
 * @text Max Visibility Distance
 * @desc Hide tracker if target is further than this distance (0 = Infinite/Always Show).
 * @type number
 * @default 0
 * 
 * @param HideAtDistance
 * @text Hide At Close Range
 * @desc Hide tracker if player is closer than this distance (e.g., 1.5 tiles).
 * @type number
 * @decimals 1
 * @default 1.5
 * 
 * @param AlwaysShow
 * @text Always Show On Screen
 * @desc If true, trackers remain visible even when the target is on screen (acting like a compass).
 * @type boolean
 * @default false
 * 
 * @command SetGlobalVisibility
 * @text Set Global Visibility
 * @desc Turn the entire tracker system ON or OFF.
 * 
 * @arg visible
 * @text Visible
 * @type boolean
 * @default true
 * @desc ON = Show trackers, OFF = Hide all trackers.
 * 
 * @command SetTargetVisibility
 * @text Set Target Visibility
 * @desc Hide or Show specific trackers by their Name.
 * 
 * @arg name
 * @text Target Name
 * @type string
 * @desc The exact name defined in the Notetag (e.g., "Inn").
 * 
 * @arg visible
 * @text Visible
 * @type boolean
 * @default true
 * @desc ON = Show this target, OFF = Hide this target.
 */

(() => {
  "use strict";
  const PLUGIN_NAME = "VS221_OffscreenTracker";
  const P = PluginManager.parameters(PLUGIN_NAME);
  const EdgePadding = Number(P.EdgePadding || 35);
  const ScreenSafeGap = Number(P.ScreenSafeGap || 40);
  const ContentGap  = Number(P.ContentGap || 40);
  const TextIconGap = Number(P.TextIconGap || 5);
  const ArrowScale  = Number(P.ArrowScale || 1.0);
  const IconScale   = Number(P.IconScale || 1.0);
  const FontSize    = Number(P.FontSize || 18);
  const ArrowImage  = String(P.ArrowImage || "");
  const ShowDistance = String(P.ShowDistance || "true") === "true";
  const DistanceUnit = String(P.DistanceUnit || "m");
  const MaxVisDistance = Number(P.MaxVisDistance || 0);
  const HideAtDistance = Number(P.HideAtDistance || 1.5);
  const AlwaysShowGlobal = String(P.AlwaysShow || "false") === "true";
  const _Game_System_initialize = Game_System.prototype.initialize;
  Game_System.prototype.initialize = function() {
      _Game_System_initialize.call(this);
      this._vsTrackerGlobalVisible = true;
      this._vsTrackerHiddenNames = [];
  };

  Game_System.prototype.vsSetTrackerGlobal = function(visible) {
      this._vsTrackerGlobalVisible = visible;
  };

  Game_System.prototype.vsIsTrackerGlobal = function() {
      return this._vsTrackerGlobalVisible !== undefined ? this._vsTrackerGlobalVisible : true;
  };

  Game_System.prototype.vsSetTrackerTarget = function(name, visible) {
      if (!this._vsTrackerHiddenNames) this._vsTrackerHiddenNames = [];
      const index = this._vsTrackerHiddenNames.indexOf(name);
      if (visible) {
          if (index > -1) {
              this._vsTrackerHiddenNames.splice(index, 1);
          }
      } else {
          if (index === -1) {
              this._vsTrackerHiddenNames.push(name);
          }
      }
  };

  Game_System.prototype.vsIsTrackerHidden = function(name) {
      if (!this._vsTrackerHiddenNames) return false;
      return this._vsTrackerHiddenNames.includes(name);
  };

  const vsCreateArrowBitmap = (color) => {
    if (ArrowImage) {
        return ImageManager.loadSystem(ArrowImage);
    }
    return new Bitmap(32, 32);
  };
  
  const vsGetTrackerData = (event) => {
    if (!event) return null;
    if (event._vsTrackerCachePage === event._pageIndex && event._vsTrackerCacheResult !== undefined) {
        return event._vsTrackerCacheResult;
    }

    let result = null;
    if (event.page() && event.list()) {
        const list = event.list();
        const regex = /<Tracker\s*:\s*([^,]+)\s*,\s*(\d+)\s*,\s*(#[0-9A-Fa-f]{6})(?:\s*,\s*(\d+))?(?:\s*,\s*(true|false))?>/i;
        for (const cmd of list) {
            if (cmd.code === 108 || cmd.code === 408) { 
                const match = cmd.parameters[0].match(regex);
                if (match) {
                    result = { 
                        name: match[1].trim(), 
                        iconIndex: parseInt(match[2]), 
                        color: match[3],
                        maxDist: match[4] ? parseInt(match[4]) : 0,
                        alwaysShow: match[5] ? (match[5].toLowerCase() === 'true') : null
                    };
                    break;
                }
            }
        }
    }
    event._vsTrackerCachePage = event._pageIndex;
    event._vsTrackerCacheResult = result;
    return result;
  };

  // ---------------- Sprite ----------------
  function Sprite_VSTracker() { this.initialize(...arguments); }
  Sprite_VSTracker.prototype = Object.create(Sprite.prototype);
  Sprite_VSTracker.prototype.constructor = Sprite_VSTracker;
  Sprite_VSTracker.prototype.initialize = function(event, data) {
    Sprite.prototype.initialize.call(this);
    this._event = event;
    this._data = data;
    this._lastDistance = -1; 
    this.anchor.set(0.5);
    this.z = 50; 
    this.createChildren();
    this.refresh();
  };
  
  Sprite_VSTracker.prototype.createChildren = function() {
    this._nameSprite = new Sprite(new Bitmap(200, 32));
    this._nameSprite.anchor.set(0, 0.5);
    this.addChild(this._nameSprite);
    this._iconSprite = new Sprite();
    this._iconSprite.anchor.set(0.5, 0.5); 
    this._iconSprite.scale.set(IconScale);
    this.addChild(this._iconSprite);
    this._arrowSprite = new Sprite();
    this._arrowSprite.anchor.set(0.5);
    this._arrowSprite.scale.set(ArrowScale);
    this.addChild(this._arrowSprite);
  };

  Sprite_VSTracker.prototype.refresh = function() {
    if (this._arrowSprite.bitmap && !this._arrowSprite.bitmap.url) {
        this._arrowSprite.bitmap.destroy();
    }
    this._arrowSprite.bitmap = vsCreateArrowBitmap(this._data.color);
    this._iconSprite.bitmap = ImageManager.loadSystem("IconSet");
    const iconIndex = this._data.iconIndex;
    const pw = ImageManager.iconWidth || 32;
    const ph = ImageManager.iconHeight || 32;
    this._iconSprite.setFrame((iconIndex % 16) * pw, Math.floor(iconIndex / 16) * ph, pw, ph);
    if (!this._nameSprite.bitmap) this._nameSprite.bitmap = new Bitmap(200, 32);
    this._nameSprite.bitmap.clear();
    this._nameSprite.bitmap.fontSize = FontSize;
    this._nameSprite.bitmap.textColor = this._data.color;
    if (this._nameSprite.bitmap.outlineWidth !== undefined) {
        this._nameSprite.bitmap.outlineWidth = 4;
        this._nameSprite.bitmap.outlineColor = 'rgba(0,0,0,0.8)';
    }
    let displayText = this._data.name;
    if (ShowDistance) {
        const dist = $gameMap.distance($gamePlayer.x, $gamePlayer.y, this._event.x, this._event.y);
        displayText += ` ${Math.round(dist)}${DistanceUnit}`;
    }
    this._nameSprite.bitmap.drawText(displayText, 0, 0, 200, 32, 'left');
    this._textWidth = this._nameSprite.bitmap.measureTextWidth(displayText);
  };

  Sprite_VSTracker.prototype.destroy = function(options) {
      Sprite.prototype.destroy.call(this, options);
  };

  Sprite_VSTracker.prototype.update = function() {
  Sprite.prototype.update.call(this);
    if (!this._event || this._event._erased) {
      this.visible = false; return;
    }
    const isGlobalHidden = !$gameSystem.vsIsTrackerGlobal();
    const isTargetHidden = $gameSystem.vsIsTrackerHidden(this._data.name);
    const tw = $gameMap.tileWidth();
    const th = $gameMap.tileHeight();
    const pX = Graphics.width / 2;
    const pY = Graphics.height / 2;
    const evX = $gameMap.adjustX(this._event._realX) * tw + tw / 2;
    const evY = $gameMap.adjustY(this._event._realY) * th + th / 2;
    const isOnScreen = (evX > 0 && evX < Graphics.width && evY > 0 && evY < Graphics.height);
    // Distance
    const distPlayer = $gameMap.distance($gamePlayer.x, $gamePlayer.y, this._event.x, this._event.y);
    const limitDist = (this._data.maxDist && this._data.maxDist > 0) ? this._data.maxDist : MaxVisDistance;
    const isOutOfRange = (limitDist > 0 && distPlayer > limitDist);
    const isTooClose = (distPlayer <= HideAtDistance);
    const forceShow = (this._data.alwaysShow !== null) ? this._data.alwaysShow : AlwaysShowGlobal;
    let targetOpacity = 255;
    if (isGlobalHidden || isTargetHidden || (isOnScreen && !forceShow) || isOutOfRange || isTooClose) {
        targetOpacity = 0;
    }
    if (this.opacity > targetOpacity) {
        this.opacity -= 25; 
    } else if (this.opacity < targetOpacity) {
        this.visible = true;
        this.opacity += 25; 
    }

    if (this.opacity <= 0) {
        this.visible = false;
        return; 
    }

    const angle = Math.atan2(evY - pY, evX - pX);
    const margin = EdgePadding;
    const halfW = Graphics.width / 2 - margin;
    const halfH = Graphics.height / 2 - margin;
    const edgeDist = Math.min(
        halfW / Math.abs(Math.cos(angle) || 0.001), 
        halfH / Math.abs(Math.sin(angle) || 0.001)
    );
    const realDist = Math.sqrt(Math.pow(evX - pX, 2) + Math.pow(evY - pY, 2));
    const onScreenDist = Math.max(0, realDist - ScreenSafeGap);
    const dist = Math.min(edgeDist, onScreenDist);
    const arrowX = pX + Math.cos(angle) * dist;
    const arrowY = pY + Math.sin(angle) * dist;
    this._arrowSprite.x = arrowX;
    this._arrowSprite.y = arrowY;
    this._arrowSprite.rotation = angle;
    const anchorX = arrowX - Math.cos(angle) * ContentGap;
    const anchorY = arrowY - Math.sin(angle) * ContentGap;
    const baseIconW = ImageManager.iconWidth || 32;
    const iconW = baseIconW * IconScale;
    const textW = this._textWidth || 0;
    const gap = TextIconGap;
    const totalW = iconW + gap + textW;
    const startX = anchorX - (totalW / 2);
    this._iconSprite.x = startX + (iconW / 2);
    this._iconSprite.y = anchorY; 
    this._iconSprite.rotation = 0;
    this._nameSprite.x = startX + iconW + gap;
    this._nameSprite.y = anchorY;
    this._nameSprite.rotation = 0; 
    if (ShowDistance) {
        const distVal = Math.round($gameMap.distance($gamePlayer.x, $gamePlayer.y, this._event.x, this._event.y));
        if (this._lastDistance !== distVal) {
            this._lastDistance = distVal;
            const newText = `${this._data.name} ${distVal}${DistanceUnit}`;
            this._nameSprite.bitmap.clear();
            this._nameSprite.bitmap.drawText(newText, 0, 0, 200, 32, 'left');
            this._textWidth = this._nameSprite.bitmap.measureTextWidth(newText);
        }
    }
  };

  // --- Layer ---
  function Sprite_VSTrackerLayer() { this.initialize(...arguments); }
  Sprite_VSTrackerLayer.prototype = Object.create(Sprite.prototype);
  Sprite_VSTrackerLayer.prototype.constructor = Sprite_VSTrackerLayer;
  Sprite_VSTrackerLayer.prototype.initialize = function() {
      Sprite.prototype.initialize.call(this); 
      this._trackers = {};
      this.z = 90; 
  };

  Sprite_VSTrackerLayer.prototype.destroy = function(options) {
      for (const id in this._trackers) {
          if (this._trackers[id]) {
              this._trackers[id].destroy();
          }
      }
      this._trackers = null;
      Sprite.prototype.destroy.call(this, options);
  };

  Sprite_VSTrackerLayer.prototype.update = function() {
    Sprite.prototype.update.call(this);
    if (!$gameMap || !$gamePlayer) return;
    const events = $gameMap.events();
    for (const event of events) {
      const id = event.eventId();
      const data = vsGetTrackerData(event);
      if (data) {
        if (!this._trackers[id]) {
          const s = new Sprite_VSTracker(event, data);
          this.addChild(s); this._trackers[id] = s;
        } else {
          const s = this._trackers[id];
          if (s._data.name !== data.name || s._data.iconIndex !== data.iconIndex) {
             s._data = data; s.refresh();
          }
        }
      } else if (this._trackers[id]) {
          this._trackers[id].destroy(); 
          this.removeChild(this._trackers[id]); 
          delete this._trackers[id];
      }
    }
    for (const id in this._trackers) {
      const s = this._trackers[id];
      if (!s._event || s._event._erased) { 
          s.destroy();
          this.removeChild(s); 
          delete this._trackers[id]; 
      }
    }
  };

  const _SSM_createUpper = Spriteset_Map.prototype.createUpperLayer;
  Spriteset_Map.prototype.createUpperLayer = function() {
    _SSM_createUpper.call(this);
    this._vsTrackerLayer = new Sprite_VSTrackerLayer();
    if (Utils.RPGMAKER_NAME === "MZ") {
        this.addChild(this._vsTrackerLayer);
    } else {
        this.addChild(this._vsTrackerLayer); 
    }
  };


  // PLUGIN COMMANDS (MZ & MV)
  if (PluginManager.registerCommand) {
    // --- MZ Commands ---
    PluginManager.registerCommand(PLUGIN_NAME, "SetGlobalVisibility", args => {
        const visible = (String(args.visible) === "true");
        $gameSystem.vsSetTrackerGlobal(visible);
    });

    PluginManager.registerCommand(PLUGIN_NAME, "SetTargetVisibility", args => {
        const name = String(args.name);
        const visible = (String(args.visible) === "true");
        $gameSystem.vsSetTrackerTarget(name, visible);
    });
  } else {
    // --- MV Commands ---
    const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === "SetGlobalVisibility") {
            const visible = (String(args[0]).toLowerCase() === "true");
            $gameSystem.vsSetTrackerGlobal(visible);
        }
        if (command === "SetTargetVisibility") {
            const visibleStr = args[args.length - 1];
            const visible = (String(visibleStr).toLowerCase() === "true");
            const nameArgs = args.slice(0, args.length - 1);
            const name = nameArgs.join(" ");
            
            $gameSystem.vsSetTrackerTarget(name, visible);
        }
    };
  }

})();
