/*:
 * @target MZ
 * @author Aerosys
 * @plugindesc [Version 1.8.3] [MV & MZ]
 * 
 * @help
 * 
 * ----------------------------------------------------------------------------
 * Start
 * ----------------------------------------------------------------------------
 * 
 * - Start Game
 * - Open In Game Menu
 * - Press F9 to open the tool
 * 
 * 
 * ----------------------------------------------------------------------------
 * Can no longer access the tool - what now?
 * ----------------------------------------------------------------------------
 * 
 * If your game crashes before you are able to open the tool, you can reset
 * this plugin by deleting the
 * 
 * "uicustom"
 * 
 * folder from your game project's directory. The plugin will automatically
 * recreate the folder and files when you start the game again.
 * 
 * 
 * ----------------------------------------------------------------------------
 * Tier?
 * ----------------------------------------------------------------------------
 * 
 * This Plugin has no Tier?
 * Yes, unlike other MK plugins, this one has no tier assigned. You need to
 * find out where to position this plugin in the list by yourself.
 * 
 * 
 * ----------------------------------------------------------------------------
 * Rules
 * ----------------------------------------------------------------------------
 * 
 * 1. This Plugin is provided free of charge and may be used in any
 *    game project.
 * 
 * 2. You may not redistribute, sell, or make this Plugin available on any
 *    website, platform, or any other distribution channel on a standalone
 *    basis. You may also not claim the Plugin as your own.
 * 
 * 3. You may modify this Plugin to suit your needs, but Rule 2 also applies
 *    for modified versions of this Plugin.
 * 
 * 4. You may create a Plugin that requires this Plugin to function, but you
 *    may not redistribute, sell, or make your Plugin available on any website,
 *    platform, or any other distribution channel on a standalone basis, even
 *    if it is not a direct violation of Rule 2. Your Plugin can only be
 *    shipped as part of your game.
 * 
 * 5. You may send this Plugin to another person when you hire them for
 *    personal modifications.
 * 
 * 6. When multiple people work on the project, purchasing a license for every
 *    team member is not required.
 * 
 * 
 * @endofhelp
 * 
 * @command setMenuPortrait
 * @text Set Actor Menu Portrait
 * @desc Sets the menu portrait for the specified Actor.
 * 
 * @arg actorId
 * @text Actor
 * @type actor
 * @default 1
 * 
 * @arg pictureName
 * @text Picture Name
 * @type file
 * @dir img/pictures/
 * 
 * 
 * @command resetMenuPortrait
 * @text Reset Actor Menu Portrait
 * @desc Resets the menu portrait for the specified Actor.
 * 
 * @arg actorId
 * @text Actor
 * @type actor
 * @default 1
 * 
 * 
 * @param menuOptions
 * @text Menu Options
 * 
 * @param overrideMenuCommands
 * @parent menuOptions
 * @text Use custom Menu Commands?
 * @type boolean
 * @default true
 * @desc When true, this plugin will override the menu commands. When false, only Icons are read and that's it.
 * 
 * @param menuCommands
 * @parent menuOptions
 * @text Menu Commands
 * @type struct<MenuCommand>[]
 * @default ["{\"symbol\":\"item\",\"iconIndex\":\"176\",\"text\":\"Items\",\"showCondition\":\"{\\\"switchId\\\":\\\"\\\",\\\"misc\\\":\\\"\\\",\\\"pluginName\\\":\\\"\\\",\\\"customEval\\\":\\\"$dataSystem.menuCommands[[\\\\\\\"item\\\\\\\",\\\\\\\"skill\\\\\\\",\\\\\\\"equip\\\\\\\",\\\\\\\"status\\\\\\\",\\\\\\\"formation\\\\\\\",\\\\\\\"save\\\\\\\"].indexOf('item')]\\\"}\",\"enableCondition\":\"{\\\"switchId\\\":\\\"\\\",\\\"misc\\\":\\\"at least 1 Party Member?\\\",\\\"pluginName\\\":\\\"\\\",\\\"customEval\\\":\\\"\\\"}\",\"action\":\"Jump to...\",\"destination\":\"Scene_Item\",\"commonEventId\":\"\",\"actionCustomCode\":\"\",\"isPersonal\":\"false\"}","{\"symbol\":\"skill\",\"iconIndex\":\"79\",\"text\":\"Skills\",\"showCondition\":\"{\\\"switchId\\\":\\\"\\\",\\\"misc\\\":\\\"\\\",\\\"pluginName\\\":\\\"\\\",\\\"customEval\\\":\\\"$dataSystem.menuCommands[[\\\\\\\"item\\\\\\\",\\\\\\\"skill\\\\\\\",\\\\\\\"equip\\\\\\\",\\\\\\\"status\\\\\\\",\\\\\\\"formation\\\\\\\",\\\\\\\"save\\\\\\\"].indexOf('skill')]\\\"}\",\"enableCondition\":\"{\\\"switchId\\\":\\\"\\\",\\\"misc\\\":\\\"at least 1 Party Member?\\\",\\\"pluginName\\\":\\\"\\\",\\\"customEval\\\":\\\"\\\"}\",\"action\":\"Jump to...\",\"destination\":\"Scene_Skill\",\"commonEventId\":\"\",\"actionCustomCode\":\"\",\"isPersonal\":\"true\"}","{\"symbol\":\"equip\",\"iconIndex\":\"96\",\"text\":\"Equip\",\"showCondition\":\"{\\\"switchId\\\":\\\"\\\",\\\"misc\\\":\\\"\\\",\\\"pluginName\\\":\\\"\\\",\\\"customEval\\\":\\\"$dataSystem.menuCommands[[\\\\\\\"item\\\\\\\",\\\\\\\"skill\\\\\\\",\\\\\\\"equip\\\\\\\",\\\\\\\"status\\\\\\\",\\\\\\\"formation\\\\\\\",\\\\\\\"save\\\\\\\"].indexOf('equip')]\\\"}\",\"enableCondition\":\"{\\\"switchId\\\":\\\"\\\",\\\"misc\\\":\\\"at least 1 Party Member?\\\",\\\"pluginName\\\":\\\"\\\",\\\"customEval\\\":\\\"\\\"}\",\"action\":\"Jump to...\",\"destination\":\"Scene_Equip\",\"commonEventId\":\"\",\"actionCustomCode\":\"\",\"isPersonal\":\"true\"}","{\"symbol\":\"status\",\"iconIndex\":\"189\",\"text\":\"Status\",\"showCondition\":\"{\\\"switchId\\\":\\\"\\\",\\\"misc\\\":\\\"\\\",\\\"pluginName\\\":\\\"\\\",\\\"customEval\\\":\\\"$dataSystem.menuCommands[[\\\\\\\"item\\\\\\\",\\\\\\\"skill\\\\\\\",\\\\\\\"equip\\\\\\\",\\\\\\\"status\\\\\\\",\\\\\\\"formation\\\\\\\",\\\\\\\"save\\\\\\\"].indexOf('status')]\\\"}\",\"enableCondition\":\"{\\\"switchId\\\":\\\"\\\",\\\"misc\\\":\\\"at least 1 Party Member?\\\",\\\"pluginName\\\":\\\"\\\",\\\"customEval\\\":\\\"\\\"}\",\"action\":\"Jump to...\",\"destination\":\"Scene_Status\",\"commonEventId\":\"\",\"actionCustomCode\":\"\",\"isPersonal\":\"true\"}","{\"symbol\":\"formation\",\"iconIndex\":\"75\",\"text\":\"Formation\",\"showCondition\":\"{\\\"switchId\\\":\\\"\\\",\\\"misc\\\":\\\"\\\",\\\"pluginName\\\":\\\"\\\",\\\"customEval\\\":\\\"$dataSystem.menuCommands[[\\\\\\\"item\\\\\\\",\\\\\\\"skill\\\\\\\",\\\\\\\"equip\\\\\\\",\\\\\\\"status\\\\\\\",\\\\\\\"formation\\\\\\\",\\\\\\\"save\\\\\\\"].indexOf('formation')]\\\"}\",\"enableCondition\":\"{\\\"switchId\\\":\\\"\\\",\\\"misc\\\":\\\"is Formation allowed?\\\",\\\"pluginName\\\":\\\"\\\",\\\"customEval\\\":\\\"\\\"}\",\"action\":\"Formation Mode\",\"destination\":\"\",\"commonEventId\":\"\",\"actionCustomCode\":\"\",\"isPersonal\":\"false\"}","{\"symbol\":\"options\",\"iconIndex\":\"83\",\"text\":\"Options\",\"showCondition\":\"\",\"enableCondition\":\"\",\"action\":\"Jump to...\",\"destination\":\"Scene_Options\",\"commonEvent\":\"\",\"actionCustomCode\":\"\",\"isPersonal\":\"false\"}","{\"symbol\":\"save\",\"iconIndex\":\"245\",\"text\":\"Save\",\"showCondition\":\"{\\\"switchId\\\":\\\"\\\",\\\"misc\\\":\\\"\\\",\\\"pluginName\\\":\\\"\\\",\\\"customEval\\\":\\\"$dataSystem.menuCommands[[\\\\\\\"item\\\\\\\",\\\\\\\"skill\\\\\\\",\\\\\\\"equip\\\\\\\",\\\\\\\"status\\\\\\\",\\\\\\\"formation\\\\\\\",\\\\\\\"save\\\\\\\"].indexOf('save')]\\\"}\",\"enableCondition\":\"{\\\"switchId\\\":\\\"\\\",\\\"misc\\\":\\\"is Save allowed?\\\",\\\"pluginName\\\":\\\"\\\",\\\"customEval\\\":\\\"\\\"}\",\"action\":\"Jump to...\",\"destination\":\"Scene_Save\",\"commonEventId\":\"\",\"actionCustomCode\":\"\",\"isPersonal\":\"false\"}","{\"symbol\":\"load\",\"iconIndex\":\"245\",\"text\":\"Load Game\",\"showCondition\":\"\",\"enableCondition\":\"\",\"action\":\"Jump to...\",\"destination\":\"Scene_Load\",\"commonEvent\":\"\",\"actionCustomCode\":\"\",\"isPersonal\":\"false\"}","{\"symbol\":\"gameEnd\",\"iconIndex\":\"74\",\"text\":\"Quit\",\"showCondition\":\"\",\"enableCondition\":\"\",\"action\":\"Jump to...\",\"destination\":\"Scene_GameEnd\",\"commonEvent\":\"\",\"actionCustomCode\":\"\",\"isPersonal\":\"false\"}"]
 * 
 * 
 * @param a
 * @text _
 * 
 * 
 * @param gameplay
 * @text Gameplay
 * 
 * @param skipActorSelection
 * @parent gameplay
 * @text Skip Actor Selection when single Actor?
 * @type boolean
 * @default true
 * 
 * 
 * @param b
 * @text _
 * 
 * 
 * @param actorPortraitsHeader
 * @text Actor Portraits
 * 
 * @param actorPortraits
 * @parent actorPortraitsHeader
 * @text Default Portraits
 * @type struct<ActorToPortrait>[]
 * 
 * @param actorPortraitOverrides
 * @parent actorPortraitsHeader
 * @text Conditional Portraits
 * @type struct<ActorPortraitRuleSet>[]
 * @desc Rules are scanned from top to bottom. If no rule matches, the default portraits are used (if any).
 * 
 * 
 * @param c
 * @text _
 * 
 * 
 * @param misc
 * @text Miscellaneous
 * 
 * @param showNews
 * @parent misc
 * @text Show News in the App?
 * @type boolean
 * @default true
 * 
 */

/*~struct~MenuCommand:
 *
 * @param symbol
 * @text symbol
 * @default REQUIRED
 * @desc Unique text value. Usually something like: item, equip, skill, ...
 * 
 * @param iconIndex
 * @text Icon
 * @type icon
 * @default 16
 * 
 * @param text
 * @text Text
 * @default REQUIRED
 * 
 * @param showCondition
 * @text Show when...
 * @type struct<Condition>
 * @desc Just like Event Tabs, ALL conditions must be either blank or truthy
 * 
 * @param enableCondition
 * @text Enable when...
 * @type struct<Condition>
 * @desc Just like Event Tabs, ALL conditions must be either blank or truthy
 * 
 * @param action
 * @text Action
 * @type select
 * @option Jump to...
 * @option Formation Mode
 * @option Common Event
 * @option Custom Code
 * @default Jump to...
 * 
 * @param destination
 * @parent action
 * @text when Jump to: next Scene
 * @type combo
 * @option Scene_Item
 * @option Scene_Skill
 * @option Scene_Equip
 * @option Scene_Status
 * @option Scene_Options
 * @option Scene_Save
 * @option Scene_Load
 * @option Scene_GameEnd
 * 
 * @param commonEventId
 * @parent action
 * @text when Common Event:
 * @type common_event
 * 
 * @param actionCustomCode
 * @parent action
 * @text when Custom Code:
 * 
 * @param isPersonal
 * @text Is Personal?
 * @type boolean
 * @default false
 * 
 */

/*~struct~Condition:
 *
 * @param switchId
 * @text Switch?
 * @type switch
 * @desc When selection, this Switch must be ON
 * 
 * @param misc
 * @text Game Info
 * @type select
 * @option at least 1 Party Member?
 * @option is Formation allowed?
 * @option is Save allowed?
 * @option _
 * 
 * @param pluginName
 * @text Plugin?
 * @desc When selection, this Plugin must be active
 * 
 * @param customEval
 * @text Custom Code
 * @desc Custom JavaScript code that must return true
 * 
 */

/*~struct~ActorToPortrait:
 *
 * @param actorId
 * @text Actor
 * @type actor
 * @desc REQUIRED
 * 
 * @param pictureName
 * @text Picture
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc REQUIRED
 * 
 */

/*~struct~ActorPortraitRuleSet:
 *
 * @param actorId
 * @text Actor
 * @type actor
 * @desc Empty = Applies to all actors
 * 
 * @param a
 * @text _
 * 
 * @param conditions
 * @text Conditions
 * 
 * @param classIds
 * @parent conditions
 * @text Must be this Class(es)?
 * @type class[]
 * 
 * @param weaponStatus
 * @parent conditions
 * @text Unarmed/Equipped?
 * @type select
 * @option <ignore>
 * @option unarmed
 * @option any weapon equipped
 * @default <ignore>
 * 
 * @param weapons
 * @parent conditions
 * @text Weapon(s)?
 * @type weapon[]
 * @desc Keep empty for any weapon
 * 
 * @param armors
 * @parent conditions
 * @text Armor(s)?
 * @type armor[]
 * @desc Keep empty for any armor
 * 
 * @param deathCrisisState
 * @parent conditions
 * @text Knockout, Crisis, Abnormal?
 * @type select
 * @option <ignore>
 * @option healthy
 * @option dead
 * @option crisis OR abnormal state
 * @option crisis OR abnormal state OR dead
 * 
 * @param stateIds
 * @parent conditions
 * @text State(s)?
 * @type state[]
 * 
 * @param switchId
 * @parent conditions
 * @text Switch?
 * @type switch
 * @desc Keep empty for any switch state
 *
 * @param script
 * @parent conditions
 * @text JS: Custom script
 * @desc Example: actor.isDead() OR $gameSwitches.value(1) OR any valid JS expression that returns true/false
 * 
 * @param b
 * @text _
 * 
 * @param pictureName
 * @text Picture
 * @type file
 * @dir img/pictures
 * @require 1
 * @default REQUIRED
 * 
 */


var Imported = Imported || { };
Imported.MK_UICustomizer = '1.8.3';

var UICustom = UICustom || { }
UICustom.requiredCoreCodeVersionMZ = '1.8.0';

if ('MV' == Utils.RPGMAKER_NAME) {

// =====================================================================================
// MV Support
// =====================================================================================

ImageManager.iconWidth  = Window_Base._iconWidth;
ImageManager.iconHeight = Window_Base._iconHeight;
ImageManager.faceWidth  = Window_Base._faceWidth;
ImageManager.faceHeight = Window_Base._faceHeight;

Utils.extractFileName = function (filename) {
    return filename.split('/').pop();
}

Scene_Base.prototype.calcWindowHeight = function (numLines, selectable) {
    return selectable
        ? Window_Selectable.prototype.fittingHeight(numLines)
        : Window_Base.prototype.fittingHeight(numLines);
}

Scene_MenuBase.prototype.helpWindowRect = function () {
    return new Rectangle(
        0,
        this.helpAreaTop(),
        Graphics.boxWidth,
        this.helpAreaHeight(),
    );
}

const _WindowBase_initialize = Window_Base.prototype.initialize;
Window_Base.prototype.initialize = function (arg) {
    if (isRectangle(arg)) {
        _WindowBase_initialize.call(
            this,
            arg.x,
            arg.y,
            arg.width,
            arg.height,
        );
    } else {
        _WindowBase_initialize.apply(this, arguments);
    }
}

const _WindowHelp_initialize = Window_Help.prototype.initialize;
Window_Help.prototype.initialize = function (arg) {
    if (isRectangle(arg)) {
        Window_Base.prototype.initialize.call(this, arg);
        this._text = '';
    }
    else if (typeof SceneManager._scene.helpWindowRect == 'function') {
        Window_Base.prototype.initialize.call(this, SceneManager._scene.helpWindowRect());
        this._text = '';
    }
    else {
        _WindowHelp_initialize.apply(this, arguments);
    }
}

const _WindowSelectable_initialize = Window_Selectable.prototype.initialize;
Window_Selectable.prototype.initialize = function (arg) {
    if (isRectangle(arg)) {
        _WindowSelectable_initialize.call(
            this,
            arg.x,
            arg.y,
            arg.width,
            arg.height,
        );
    }
    else {
        _WindowSelectable_initialize.apply(this, arguments);
    }
}

const _WindowCommand_initialize = Window_Command.prototype.initialize;
Window_Command.prototype.initialize = function (arg) {
    if (isRectangle(arg)) {
        this.clearCommandList();
        this.makeCommandList();

        Window_Selectable.prototype.initialize.call(this, arg);

        this.refresh();
        this.select(0);
        this.activate();
    } else {
        _WindowCommand_initialize.apply(this, arguments);
    }
}

const _WindowMenuCommand_initialize = Window_MenuCommand.prototype.initialize;
Window_MenuCommand.prototype.initialize = function (arg) {
    if (isRectangle(arg)) {
        _WindowMenuCommand_initialize.call(this, arg);
    } else {
        _WindowMenuCommand_initialize.call(this, SceneManager._scene.commandWindowRect());
    }
}

// Override
Scene_Menu.prototype.createStatusWindow = function () {
    const rectangle = this.statusWindowRect();
    this._statusWindow = new Window_MenuStatus(rectangle);
    this._statusWindow.reserveFaceImages();
    this.addWindow(this._statusWindow);
}

const _WindowMenuStatus_initialize = Window_MenuStatus.prototype.initialize;
Window_MenuStatus.prototype.initialize = function (arg1) {

    if (isRectangle(arg1)) {
        Window_Selectable.prototype.initialize.call(this, arg1);

        this._formationMode = false;
        this._pendingIndex = -1;
        this.refresh();
    } else {
        _WindowMenuStatus_initialize.apply(this, arguments);
    }
}

// Override
const _WindowMenuActor_initialize = Window_MenuActor.prototype.initialize;
Window_MenuActor.prototype.initialize = function (arg1) {

    if (isRectangle(arg1)) {
        Window_MenuStatus.prototype.initialize.call(this, arg1);
        this.hide();
    } else if (typeof SceneManager._scene.actorWindowRect == 'function') {
        Window_MenuStatus.prototype.initialize.call(this, SceneManager._scene.actorWindowRect());
        this.hide();
    } else {
        _WindowMenuActor_initialize.apply(this, arguments);
    }
}

function isRectangle(object) {
    return (
        typeof object === 'object' &&
        'x' in object && 'y' in object &&
        'width' in object && 'height' in object
    );
}

Scene_MenuBase.prototype.isBottomHelpMode = function () {
    return false;
}

Scene_MenuBase.prototype.helpAreaTop = function () {
    if (this.isBottomHelpMode()) {
        return this.mainAreaBottom();
    } else {
        return 0;
    }
}

Scene_MenuBase.prototype.helpAreaBottom = function () {
    return this.helpAreaTop() + this.helpAreaHeight();
}

Scene_MenuBase.prototype.mainAreaHeight = function () {
    return Graphics.boxHeight - this.helpAreaHeight();
}

Scene_MenuBase.prototype.mainAreaTop = function () {
    if (this.isBottomHelpMode()) {
        return 0;
    } else {
        return this.helpAreaBottom();
    }
}

Scene_MenuBase.prototype.mainAreaBottom = function () {
    return this.mainAreaTop() + this.mainAreaHeight();
}

Scene_Base.prototype.mainCommandWidth = function () {
    return 240;
}


// =====================================================================================
// Windows General
// =====================================================================================

Object.defineProperty(Window.prototype, "innerWidth", {
    get: function () {
        return Math.max(0, this._width - this._padding * 2);
    },
    configurable: true
});

Object.defineProperty(Window.prototype, "innerHeight", {
    get: function () {
        return Math.max(0, this._height - this._padding * 2);
    },
    configurable: true
});

Window_Base.prototype.itemPadding = function () {
    return 8;
}

Window_Selectable.prototype.itemRectWithPadding = function (index) {
    const rect = this.itemRect(index);
    const padding = this.itemPadding();
    rect.x += padding;
    rect.width -= padding * 2;
    return rect;
}

Window_Selectable.prototype.itemLineRect = function (index) {
    return this.itemRectForText(index);
}

Window_ItemList.prototype.itemAt = function (index) {
    return this._data && index >= 0 ? this._data[index] : null;
}

Window_Base.prototype.textSizeEx = function (text) {
    const textState = {
        text: this.convertEscapeCharacters(text),
        index: 0,
    };

    return {
        width: this.drawTextEx(text, 0, this.contents.height),
        height: this.calcTextHeight(textState),
    };
}

Window_Base.prototype.drawBackgroundRect = function () {
    // not yet implemented
}


// =====================================================================================
// Colors
// =====================================================================================

var ColorManager = ColorManager || { };

const colors = [ ];
let pendingColor;

const windowskin = ImageManager.loadSystem('Window');
windowskin.addLoadListener(() => {
    for (let i = 0; i < 32; i++) {
        const x = 96 + (i % 8) * 12 + 6;
        const y = 144 + Math.floor(i / 8) * 12 + 6;
        colors[i] = windowskin.getPixel(x, y);
    }
    pendingColor = windowskin.getPixel(120, 120);
});


ColorManager.textColor              = function (i) { return colors[i || 0] || '#FFFFFF'; }
ColorManager.normalColor            = function () { return ColorManager.textColor(0); }
ColorManager.systemColor            = function () { return ColorManager.textColor(16); }
ColorManager.pendingColor           = function () { return pendingColor; }
ColorManager.translucentOpacity     = function () { return 160; }
ColorManager.dimColor1              = function () { return 'rgba(0, 0, 0, 0.6)'; }
ColorManager.dimColor2              = function () { return 'rgba(0, 0, 0, 0)'; }
ColorManager.powerUpColor           = function () { return this.textColor(24); }
ColorManager.powerDownColor         = function () { return this.textColor(25); }

ColorManager.paramchangeTextColor = function (change) {
    if (change > 0) return this.powerUpColor();
    if (change < 0) return this.powerDownColor();
    return this.normalColor();
}

Window_Base.prototype.normalColor           = function () { return ColorManager.textColor(0); };
Window_Base.prototype.systemColor           = function () { return ColorManager.textColor(16); };
Window_Base.prototype.crisisColor           = function () { return ColorManager.textColor(17); };
Window_Base.prototype.deathColor            = function () { return ColorManager.textColor(18); };
Window_Base.prototype.gaugeBackColor        = function () { return ColorManager.textColor(19); };
Window_Base.prototype.hpGaugeColor1         = function () { return ColorManager.textColor(20); };
Window_Base.prototype.hpGaugeColor2         = function () { return ColorManager.textColor(21); };
Window_Base.prototype.mpGaugeColor1         = function () { return ColorManager.textColor(22); };
Window_Base.prototype.mpGaugeColor2         = function () { return ColorManager.textColor(23); };
Window_Base.prototype.mpCostColor           = function () { return ColorManager.textColor(23); };
Window_Base.prototype.powerUpColor          = function () { return ColorManager.textColor(24); };
Window_Base.prototype.powerDownColor        = function () { return ColorManager.textColor(25); };
Window_Base.prototype.tpGaugeColor1         = function () { return ColorManager.textColor(28); };
Window_Base.prototype.tpGaugeColor2         = function () { return ColorManager.textColor(29); };
Window_Base.prototype.tpCostColor           = function () { return ColorManager.textColor(29); };
Window_Base.prototype.pendingColor          = function () { return ColorManager.pendingColor(); }
Window_Base.prototype.translucentOpacity    = function () { return ColorManager.translucentOpacity(); }
Window_Base.prototype.dimColor1             = function () { return ColorManager.dimColor1(); }
Window_Base.prototype.dimColor2             = function () { return ColorManager.dimColor2(); }

} // MV Support

(function() {

const PLUGIN_NAME = 'MK_UICustomizer';

const directoryName         = 'uicustom';
const toolHTMLFileName      = directoryName + '/index.html';
const toolJSFileName        = directoryName + '/index.js';
const configFileName        = directoryName + '/config.json';
const helpConfigFileName    = directoryName + '/config_help.json';
const mvSupport             = true;
const mzSupport             = true;

function compareVersions(a, b) {
    if (typeof a !== 'string') return false;
    if (typeof b !== 'string') return false;

    for (let i = 0; i < 3; i++) {
        if (Number(a.split('.')[i]) > Number(b.split('.')[i])) {
            return true;
        }
        if (Number(a.split('.')[i]) < Number(b.split('.')[i])) {
            return false;
        }
    }
    return true;
}

if (Utils.RPGMAKER_NAME == 'MV' && !mvSupport) {
    alert(PLUGIN_NAME + " does not support RPG Maker MV.");
    throw new Error(PLUGIN_NAME + " does not support RPG Maker MV.");
}

if (Utils.RPGMAKER_NAME == 'MZ' && !mzSupport) {
    alert(PLUGIN_NAME + " does not support RPG Maker MZ.");
    throw new Error(PLUGIN_NAME + " does not support RPG Maker MZ.");
}

// Please understand that the web app is encoded to make packaging inside an RPG Maker plugin easier and more reliable.
// It is not intended for extraction, modification, or any other use outside of this plugin.
const indexHtml = "PGhlYWQ+CjwhLS0galF1ZXJ5IGxpYnJhcnkgLS0+CjxzY3JpcHQgc3JjPSJqUXVlcnkuanMiPjwvc2NyaXB0PgoKPCEtLSBsb2NhbCBDU1MgYW5kIEpTIC0tPgo8bGluayByZWw9InN0eWxlc2hlZXQiIGhyZWY9ImluZGV4LmNzcyIgLz4KPHNjcmlwdCBzcmM9ImNvbW1vbi5qcyI+PC9zY3JpcHQ+CjxzY3JpcHQgc3JjPSJpbmRleC5qcyI+PC9zY3JpcHQ+Cgo8IS0tIEJvb3RzdHJhcCA1LjMgLS0+CjxsaW5rIGhyZWY9ImJvb3RzdHJhcC5taW4uY3NzIiByZWw9InN0eWxlc2hlZXQiIC8+CjxzY3JpcHQgc3JjPSJib290c3RyYXAuYnVuZGxlLm1pbi5qcyI+PC9zY3JpcHQ+Cgo8IS0tIEJvb3RzdHJhcCBJY29ucyAtLT4KPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcC1pY29uc0AxLjExLjMvZm9udC9ib290c3RyYXAtaWNvbnMubWluLmNzcyIgLz4KPC9oZWFkPgoKPGJvZHkgZGF0YS1icy10aGVtZT0iZGFyayI+CjxkaXY+CjxkaXYgY2xhc3M9ImNhcmQiPgo8aDEgY2xhc3M9ImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiI+Ck1haW4gTWVudSBTY2VuZQo8c3BhbiBjbGFzcz0iYmFkZ2UgYmctcHJpbWFyeSBteiI+TVo8L3NwYW4+CjxzcGFuIGNsYXNzPSJiYWRnZSBiZy1zdWNjZXNzIG12Ij5NVjwvc3Bhbj4KPC9oMT4KPGRpdiBjbGFzcz0iY2FyZC1ib2R5Ij4KPGRpdiBjbGFzcz0iYWxlcnQgYWxlcnQtc3VjY2VzcyBtYi0yIiBpZD0ibmV3VmVyc2lvbkF2YWlsYWJsZUJveCIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij4KPGRpdiBjbGFzcz0icm93IGp1c3RpZnktY29udGVudC1zcGFjZS1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciI+CjxwIGNsYXNzPSJjb2wgbWItMCIgaWQ9Im5ld1ZlcnNpb25BdmFpbGFibGVNZXNzYWdlIj4KQSBuZXcgdmVyc2lvbiBvZiB0aGlzIFBsdWdpbiBpcyBhdmFpbGFibGUhCjwvcD4KPGRpdiBjbGFzcz0iY29sIGNvbC1hdXRvIj4KPGEgY2xhc3M9ImJ0biBidG4tb3V0bGluZS1saWdodCIgaWQ9Im5ld1ZlcnNpb25BdmFpbGFibGVMaW5rIgpocmVmPSJodHRwczovL2Flcm9zeXMuaXRjaC5pby9jdXN0b20tdWkiIHRhcmdldD0iX2JsYW5rIj4KRG93bmxvYWQKPC9hPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJyb3cgYWxpZ24taXRlbXMtc3RyZXRjaCBtYi00IiBpZD0ibmV3c0JveENvbnRhaW5lciI+CjxkaXYgY2xhc3M9ImNvbCBkLWZsZXgiPgo8ZGl2IGNsYXNzPSJjYXJkIGp1c3RpZnktY29udGVudC1zcGFjZS1iZXR3ZWVuIGZsZXgtZmlsbCIgaWQ9Im5ld3NCb3giPgo8ZGl2IGNsYXNzPSJjYXJkLWJvZHkgcm93IGFsaWduLWl0ZW1zLWNlbnRlciI+CjxwIGNsYXNzPSJjb2wgbWItMCIgaWQ9Im5ld3NNZXNzYWdlIj4KRmV0Y2hpbmcgbGF0ZXN0IG5ld3MuLi4KPC9wPgo8ZGl2IGNsYXNzPSJjb2wgY29sLWF1dG8iPgo8YSBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IiBpZD0ibmV3c0xpbmsiCmhyZWY9Imh0dHBzOi8vaXRjaC5pby9jLzU3NjkzNTMvcnBnLW1ha2VyLXd5c2l3eWctbWVudS1lZGl0b3JzIiB0YXJnZXQ9Il9ibGFuayI+ClZpc2l0IEl0Y2guaW8KPC9hPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJhbGVydCBhbGVydC13YXJuaW5nIG1iLTQiIGlkPSJyZXF1aXJlZENvcmVTY3JpcHRWZXJzaW9uV2FybmluZ0JveCIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij4KPHA+CjxpIGNsYXNzPSJiaSBiaS1leGNsYW1hdGlvbi10cmlhbmdsZSBtZS0yIj48L2k+ClRoaXMgcGx1Z2luIGlzIGRlc2lnbmVkIHRvIHdvcmsgd2l0aCBSUEcgTWFrZXIgQ29yZSBTY3JpcHRzIHZlcnNpb24KPHN0cm9uZz48c3BhbiBpZD0icmVxdWlyZWRDb3JlU2NyaXB0VmVyc2lvbiI+PC9zcGFuPjwvc3Ryb25nPgpvciBuZXdlci4KPC9wPgo8cCBjbGFzcz0ibWItMCI+Ck1pbmQgdXBkYXRpbmcgeW91ciBDb3JlIFNjcmlwdHMuCkluIFJQRyBNYWtlciwgcGxlYXNlIGdvIHRvICdHYW1lJyAtPiAnVXBkYXRlIENvcmUgU2NyaXB0cycuCjwvcD4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJjYXJkIj4KPGgyIGNsYXNzPSJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gY29sbGFwc2VkIiBkYXRhLWJzLXRvZ2dsZT0iY29sbGFwc2UiCmRhdGEtYnMtdGFyZ2V0PSIjdGVtcGxhdGVzIj4KUXVpY2sgVGVtcGxhdGVzCjxidXR0b24gY2xhc3M9ImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkiPgo8aSBjbGFzcz0iYmkgYmktY2hldnJvbi11cCBhcnJvdyI+PC9pPgo8L2J1dHRvbj4KPC9oMj4KPGRpdiBjbGFzcz0iY2FyZC1ib2R5IGNvbGxhcHNlIiBpZD0idGVtcGxhdGVzIj4KPGRpdiBjbGFzcz0iZC1mbGV4IG1iLTQiPgo8ZGl2IGNsYXNzPSJtZS00Ij4KPHNlbGVjdCBjbGFzcz0iZm9ybS1zZWxlY3QiIGlkPSJxdWlja3RlbXBsYXRlIj4KPG9wdGlvbiB2YWx1ZT0icm93cyI+Um93czwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJjb2x1bW5zIj5Db2x1bW5zPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9InNpbmdsZUFjdG9yIj5TaW5nbGUgQWN0b3I8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0ibm9TdGF0dXMiPk5vIFN0YXR1cyBXaW5kb3c8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0icmV0cm8iPlJldHJvPC9vcHRpb24+Cjwvc2VsZWN0Pgo8L2Rpdj4KPGRpdj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyIKb25jbGljaz0ib25RdWlja1RlbXBsYXRlKHF1aWNrdGVtcGxhdGUudmFsdWUpIj4KQXBwbHkKPC9idXR0b24+CjwvZGl2Pgo8L2Rpdj4KPHAgY2xhc3M9ImluZm8iPgo8c3BhbiBjbGFzcz0iYmkgYmktaW5mby1zcXVhcmUgbWUtMSI+PC9zcGFuPgpCeSBjbGlja2luZyBvbiBBcHBseSwgYSBRdWljayBUZW1wbGF0ZSBvdmVycmlkZXMgYWxsIGluZGl2aWR1YWxpemF0aW9uIHRoYXQgeW91IGhhdmUgYWxyZWFkeQpkb25lLgpUaGVyZSdzIG5vIHVuZG8gYnV0dG9uLgo8L3A+CjwvZGl2Pgo8L2Rpdj4KCjxoNCBjbGFzcz0ibXQteGwiPkdsb2JhbCBTZXR0aW5nczwvaDQ+CjxkaXYgY2xhc3M9ImNhcmQiPgo8aDIgY2xhc3M9ImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBjb2xsYXBzZWQiIGRhdGEtYnMtdG9nZ2xlPSJjb2xsYXBzZSIKZGF0YS1icy10YXJnZXQ9IiN0b3VjaFVJIj4KVG91Y2ggVUkKPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSI+CjxpIGNsYXNzPSJiaSBiaS1jaGV2cm9uLXVwIGFycm93Ij48L2k+CjwvYnV0dG9uPgo8L2gyPgo8ZGl2IGNsYXNzPSJjYXJkLWJvZHkgY29sbGFwc2UiIGlkPSJ0b3VjaFVJIj4KPGRpdiBjbGFzcz0iYWxlcnQgYWxlcnQtd2FybmluZyBtdiI+ClRoaXMgc2VjdGlvbiBpcyBvbmx5IGF2YWlsYWJsZSBpbiBSUEcgTWFrZXIgTVouCjwvZGl2Pgo8ZGl2IGNsYXNzPSJteiI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+U2hvdz88L2xhYmVsPgo8c2VsZWN0IGNsYXNzPSJmb3JtLXNlbGVjdCBtYi00IiBpZD0ic2hvd1RvdWNoVUlNb2RlIgpvbmNoYW5nZT0iY2hhbmdlVGV4dCh0aGlzLmlkLCB0aGlzLnZhbHVlKSI+CjxvcHRpb24gdmFsdWU9ImFsd2F5cyI+WWVzIChEZWZhdWx0KTwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJvbk1vYmlsZSI+V2hlbiBvbiBtb2JpbGU8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0ibmV2ZXIiPk5vIFRvdWNoIFVJPC9vcHRpb24+Cjwvc2VsZWN0Pgo8dWwgY2xhc3M9ImluZm8gbWItNCI+CjxsaT4KV2hlbiBUb3VjaCBVSSBpcyBvbiwgdGhlIHBsYXllciBjYW4gc3RpbGwgZGVjaWRlIHRvIGRpc2FibGUgaXQgaW4gdGhlIEdhbWUncyBPcHRpb25zCm1lbnUuCjwvbGk+CjxsaT4KV2hlbiBUb3VjaCBVSSBpcyBvZmYsIHRoZW4gIlNob3cgVG91Y2ggVUkiIGlzIGFsc28gcmVtb3ZlZCBmcm9tIHRoZSBHYW1lJ3MgT3B0aW9uCm1lbnUuCjwvbGk+CjxsaT4KV2hlbiBzZXQgdG8gIldoZW4gb24gbW9iaWxlIiB0aGVuIHRoaXMgUGx1Z2luIGNhbGxzIGFuIFJQRyBNYWtlciBjb3JlIGNvZGUgZnVuY3Rpb24KdG8KY2hlY2sgd2hldGhlciB0aGUgcGxheWVyIGlzIHVzaW5nIGEgbW9iaWxlIGRldmljZS4KVGhpcyBQbHVnaW4gZG9lcyBub3QgZ3VhcmFudGVlIHRoaXMgY2hlY2sncyByZWxpYWJpbGl0eS4KPC9saT4KPC91bD4KPGhyPgo8ZGl2IGlkPSJ0b3VjaFVJQm94MSI+CjxsYWJlbCBjbGFzcz0iZm9ybS1jaGVjayBmb3JtLXN3aXRjaCBtYi00Ij4KPGlucHV0IGNsYXNzPSJmb3JtLWNoZWNrLWlucHV0IiB0eXBlPSJjaGVja2JveCIgaWQ9ImtlZXBUb3VjaFVJU3BhY2UiCm9uY2hhbmdlPSJjaGFuZ2VCb29sZWFuKHRoaXMuaWQsIHRoaXMuY2hlY2tlZCkiIC8+CjxzcGFuIGNsYXNzPSJmb3JtLWNoZWNrIGxhYmVsIj5LZWVwIFRvdWNoIFVJIFNwYWNlPzwvc3Bhbj4KPC9sYWJlbD4KPHAgY2xhc3M9ImluZm8gbWItNCI+ClRpcDogWW91IG1heSB3YW50IHRvIGVuYWJsZSB0aGlzIGNoZWNrYm94IHdoZW4geW91IHNlbGVjdGVkICJTaG93IFRvdWNoIFVJIHdoZW4gb24KbW9iaWxlIgpzbyB5b3UgZG9uJ3QgZW5kIHVwIHdpdGggMiBzbGlnaHRseSBkaWZmZXJlbnQgd2luZG93IHNpemVzLgo8L3A+CjwvZGl2Pgo8ZGl2IGlkPSJ0b3VjaFVJQm94MiI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+VG91Y2ggVUkgQXJlYSBIZWlnaHQ8L2xhYmVsPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0ibnVtYmVyIiBzdHlsZT0id2lkdGg6IDZyZW0iIG1pbj0iMCIgcGxhY2Vob2xkZXI9IjUyIgppZD0idG91Y2hVSUFyZWFIZWlnaHQiIG9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJjYXJkIj4KPGgyIGNsYXNzPSJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gY29sbGFwc2VkIiBkYXRhLWJzLXRvZ2dsZT0iY29sbGFwc2UiCmRhdGEtYnMtdGFyZ2V0PSIjd2luZG93cyI+CldpbmRvd3MgR2VuZXJhbAo8YnV0dG9uIGNsYXNzPSJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5Ij4KPGkgY2xhc3M9ImJpIGJpLWNoZXZyb24tdXAgYXJyb3ciPjwvaT4KPC9idXR0b24+CjwvaDI+CjxkaXYgY2xhc3M9ImNhcmQtYm9keSBjb2xsYXBzZSIgaWQ9IndpbmRvd3MiPgo8cCBjbGFzcz0iaW5mbyI+CjxzcGFuIGNsYXNzPSJiaSBiaS1pbmZvLXNxdWFyZSBtZS0xIj48L3NwYW4+ClNldHRpbmdzIHdpbGwgYWZmZWN0IGFsbCBXaW5kb3dzIGFjcm9zcyBhbGwgU2NlbmVzLgo8L3A+CjxkaXYgY2xhc3M9ImFsZXJ0IGFsZXJ0LXdhcm5pbmcgbXYiPgpTb21lIHNldHRpbmdzIG1heSBub3QgZnVsbHkgc3VwcG9ydCBSUEcgTWFrZXIgTVYuCjwvZGl2Pgo8aHIgLz4KCjxkaXYgY2xhc3M9InJvdyBteiBtYi00Ij4KPGRpdiBjbGFzcz0iY29sIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5JdGVtIEJhY2tncm91bmQ8L2xhYmVsPgo8c2VsZWN0IGNsYXNzPSJmb3JtLXNlbGVjdCIgaWQ9IndpbmRvd0l0ZW1CYWNrZ3JvdW5kVHlwZSIKb25jaGFuZ2U9Im9uV2luZG93SXRlbUJhY2tncm91bmRUeXBlQ2hhbmdlKHRoaXMudmFsdWUpIj4KPG9wdGlvbiB2YWx1ZT0iZGltbWVkIj5SUEcgTWFrZXIgRGVmYXVsdDwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJpbWFnZSI+SW1hZ2U8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0ibm9uZSI+Tm9uZTwvb3B0aW9uPgo8L3NlbGVjdD4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCI+CjxkaXYgaWQ9IndpbmRvd0l0ZW1CYWNrZ3JvdW5kRmlsZUJveCI+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIiB0eXBlPSJmaWxlIiBpZD0id2luZG93SXRlbUJhY2tncm91bmRGaWxlIgphY2NlcHQ9ImltYWdlL3BuZyIgb25jaGFuZ2U9ImNoYW5nZUZpbGUodGhpcy5pZCwgJ2ltZycsIHRoaXMudmFsdWUpIiAvPgo8cCBjbGFzcz0iaW5mbyBtYi0wIj4KRmlsZSBtdXN0IGJlIGxvY2F0ZWQgaW4geW91ciBnYW1lIGRpcmVjdG9yeS9pbWcKPC9wPgo8L2Rpdj4KPC9kaXY+CjwvZGl2PgoKPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgbWItMiI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IiBzdHlsZT0id2lkdGg6IDIwMHB4Ij4KPGkgY2xhc3M9ImJpIGJpLXRyYW5zcGFyZW5jeSBtZS0yIj48L2k+T3BhY2l0eQo8L3NwYW4+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIiBzdHlsZT0iZmxleC1ncm93OiAwOyBmbGV4LWJhc2lzOiA1cmVtIiB0eXBlPSJudW1iZXIiCmlkPSJ3aW5kb3dPcGFjaXR5IiBvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgcGxhY2Vob2xkZXI9IjE5MiIgLz4KPC9kaXY+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIG1iLTIiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCIgc3R5bGU9IndpZHRoOiAyMDBweCI+CjxpIGNsYXNzPSJiaSBiaS1zcXVhcmUgbWUtMiI+PC9pPlBhZGRpbmcKPC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgc3R5bGU9ImZsZXgtZ3JvdzogMDsgZmxleC1iYXNpczogNXJlbTsiIHR5cGU9Im51bWJlciIKaWQ9IndpbmRvd1BhZGRpbmciIG9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiBwbGFjZWhvbGRlcj0iMTgiIC8+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBtYi0yIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIHN0eWxlPSJ3aWR0aDogMjAwcHgiPgo8aSBjbGFzcz0iYmkgYmktZm9udHMgbWUtMiI+PC9pPkxpbmUgSGVpZ2h0Cjwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHN0eWxlPSJmbGV4LWdyb3c6IDA7IGZsZXgtYmFzaXM6IDVyZW07IiB0eXBlPSJudW1iZXIiCmlkPSJ3aW5kb3dMaW5lSGVpZ2h0IiBvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgcGxhY2Vob2xkZXI9IjM2IiAvPgo8L2Rpdj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgbWItMiI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IiBzdHlsZT0id2lkdGg6IDIwMHB4Ij4KPGkgY2xhc3M9ImJpIGJpLWFycm93cy12ZXJ0aWNhbCBtZS0yIj48L2k+Ckl0ZW0gSGVpZ2h0Cjwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHN0eWxlPSJmbGV4LWdyb3c6IDA7IGZsZXgtYmFzaXM6IDVyZW0iIHR5cGU9Im51bWJlciIKaWQ9IndpbmRvd0l0ZW1IZWlnaHQiIG9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiBwbGFjZWhvbGRlcj0iMzYiIC8+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBtYi0yIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIHN0eWxlPSJ3aWR0aDogMjAwcHgiPgo8aSBjbGFzcz0iYmkgYmktc3F1YXJlIG1lLTIiPjwvaT4KSXRlbSBQYWRkaW5nCjwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHN0eWxlPSJmbGV4LWdyb3c6IDA7IGZsZXgtYmFzaXM6IDVyZW0iIHR5cGU9Im51bWJlciIKaWQ9IndpbmRvd0l0ZW1QYWRkaW5nIiBvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgcGxhY2Vob2xkZXI9IjgiIC8+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBtYi0yIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIHN0eWxlPSJ3aWR0aDogMjAwcHgiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3dzLXZlcnRpY2FsIG1lLTIiPjwvaT4KSXRlbSBTcGFjaW5nCjwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHN0eWxlPSJmbGV4LWdyb3c6IDA7IGZsZXgtYmFzaXM6IDVyZW0iIHR5cGU9Im51bWJlciIKaWQ9IndpbmRvd1Jvd1NwYWNpbmciIG9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiBwbGFjZWhvbGRlcj0iNCIgLz4KPC9kaXY+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIG1iLTQiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCIgc3R5bGU9IndpZHRoOiAyMDBweCI+CjxpIGNsYXNzPSJiaSBiaS1hcnJvd3MgbWUtMiI+PC9pPgpJdGVtIFNwYWNpbmcKPC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgc3R5bGU9ImZsZXgtZ3JvdzogMDsgZmxleC1iYXNpczogNXJlbSIgdHlwZT0ibnVtYmVyIgppZD0id2luZG93Q29sdW1uU3BhY2luZyIgb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIHBsYWNlaG9sZGVyPSI4IiAvPgo8L2Rpdj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgbWItNCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IiBzdHlsZT0id2lkdGg6IDIwMHB4Ij4KPGkgY2xhc3M9ImJpIGJpLWZvbnRzIG1lLTIiPjwvaT4KRm9udCBTaXplCjwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHN0eWxlPSJmbGV4LWdyb3c6IDA7IGZsZXgtYmFzaXM6IDVyZW0iIHR5cGU9Im51bWJlciIKaWQ9ImZvbnRTaXplIiBvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgcGxhY2Vob2xkZXI9IjI2IiAvPgo8L2Rpdj4KPGhyIGNsYXNzPSJtdC00IG1iLTQiIC8+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+Q3Vyc29yIFN0eWxlPC9sYWJlbD4KPHNlbGVjdCBjbGFzcz0iZm9ybS1zZWxlY3QgbWItNCIgaWQ9ImN1cnNvclN0eWxlIgpvbmNoYW5nZT0ib25DdXJzb3JTdHlsZUNoYW5nZShjdXJzb3JTdHlsZS52YWx1ZSkiPgo8b3B0aW9uIHZhbHVlPSJkZWZhdWx0Ij5EZWZhdWx0PC9vcHRpb24+CjxvcHRpb24gdmFsdWU9ImltYWdlIj5DdXN0b20gSW1hZ2U8L29wdGlvbj4KPC9zZWxlY3Q+CjxkaXYgaWQ9ImN1cnNvclN0eWxlQm94Ij4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9ImZpbGUiIGlkPSJjdXJzb3JCYWNrZ3JvdW5kRmlsZSIgYWNjZXB0PSJpbWFnZS9wbmciCm9uY2hhbmdlPSJjaGFuZ2VGaWxlKHRoaXMuaWQsICdpbWcnLCB0aGlzLnZhbHVlKSIgLz4KPHAgY2xhc3M9ImluZm8gbWItNCI+RmlsZSBtdXN0IGJlIGxvY2F0ZWQgaW4gZ2FtZS9pbWcvc3lzdGVtPC9wPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPkFkanVzdDwvbGFiZWw+CjxkaXYgY2xhc3M9ImQtZmxleCBtYi00Ij4KPGRpdj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgbWUtMiI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij54PC9zcGFuPgo8aW5wdXQgY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIHR5cGU9Im51bWJlciIgc3R5bGU9IndpZHRoOiA1cmVtIgppZD0iY3Vyc29yQWRqdXN0WCIgb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8L2Rpdj4KPGRpdj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+eTwvc3Bhbj4KPGlucHV0IGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IiB0eXBlPSJudW1iZXIiIHN0eWxlPSJ3aWR0aDogNXJlbSIKaWQ9ImN1cnNvckFkanVzdFkiIG9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPGxhYmVsIGNsYXNzPSJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoIG1iLTQiPgo8aW5wdXQgY2xhc3M9ImZvcm0tY2hlY2staW5wdXQiIHR5cGU9ImNoZWNrYm94IiBpZD0iYmxpbmtDdXJzb3IiCm9uY2hhbmdlPSJjaGFuZ2VCb29sZWFuKHRoaXMuaWQsIHRoaXMuY2hlY2tlZCkiIC8+CjxzcGFuIGNsYXNzPSJmb3JtLWNoZWNrLWxhYmVsIj5CbGluaz88L3NwYW4+CjwvbGFiZWw+CjxociBjbGFzcz0ibXQtNCBtYi00IiAvPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwgbWItMiI+V2hlbiBDb21tYW5kIGlzIGRpc2FibGVkPC9sYWJlbD4KPHA+PC9wPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPlRleHQgT3BhY2l0eTwvbGFiZWw+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIG1iLTQiIHR5cGU9Im51bWJlciIgc3R5bGU9IndpZHRoOiA2cmVtIiBpZD0iZGlzYWJsZWRUZXh0T3BhY2l0eSIKb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjxkaXYgY2xhc3M9ImQtZmxleCBhbGlnbi1pdGVtcy1lbmQiPgo8ZGl2IGNsYXNzPSJtZS0yIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoIj4KPGlucHV0IGNsYXNzPSJmb3JtLWNoZWNrLWlucHV0IiB0eXBlPSJjaGVja2JveCIgaWQ9Im92ZXJyaWRlRGlzYWJsZWRUZXh0Q29sb3IiCm9uY2hhbmdlPSJvbk92ZXJyaWRlRGlzYWJsZWRUZXh0Q29sb3JDaGFuZ2Uob3ZlcnJpZGVEaXNhYmxlZFRleHRDb2xvci5jaGVja2VkKSIgLz4KPHNwYW4gY2xhc3M9ImZvcm0tY2hlY2stbGFiZWwiPkNoYW5nZSBUZXh0IENvbG9yPzwvc3Bhbj4KPC9sYWJlbD4KPC9kaXY+CjxpbnB1dCB0eXBlPSJjb2xvciIgY2xhc3M9ImlucHV0LWdyb3VwLXRleHQgZm9ybS1jb250cm9sLWNvbG9yIiBpZD0iZGlzYWJsZWRUZXh0Q29sb3IiCm9uY2hhbmdlPSJjaGFuZ2VDb2xvcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KCjxkaXYgY2xhc3M9ImNhcmQiPgo8aDIgY2xhc3M9ImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBjb2xsYXBzZWQiIGRhdGEtYnMtdG9nZ2xlPSJjb2xsYXBzZSIKZGF0YS1icy10YXJnZXQ9IiNnYXVnZVNldHRpbmdzIj4KR2F1Z2UgU2V0dGluZ3MKPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSI+CjxpIGNsYXNzPSJiaSBiaS1jaGV2cm9uLXVwIGFycm93Ij48L2k+CjwvYnV0dG9uPgo8L2gyPgo8ZGl2IGNsYXNzPSJjYXJkLWJvZHkgY29sbGFwc2UiIGlkPSJnYXVnZVNldHRpbmdzIj4KCjxwIGNsYXNzPSJpbmZvIG1iLTQiPgo8c3BhbiBjbGFzcz0iYmkgYmktaW5mby1zcXVhcmUgbWUtMSI+PC9zcGFuPgpHYXVnZXMgU2V0dGluZ3MgYWZmZWN0IGFsbCBHYXVnZXMgaW4geW91ciBnYW1lLgo8L3A+Cgo8ZGl2IGNsYXNzPSJhbGVydCBhbGVydC13YXJuaW5nIG1iLTQgbXYiPgo8cD4KPHNwYW4gY2xhc3M9ImJpIGJpLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlIG1lLTEiPjwvc3Bhbj4KU29tZSBzZXR0aW5ncyBtYXkgbm90IHN1cHBvcnQgTVYuCjwvcD4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJhbGVydCBhbGVydC13YXJuaW5nIiBpZD0iVmlzdXN0ZWxsYUdhdWdlc0NvbXBhdGliaWxpdHlXYXJuaW5nIj4KPHAgY2xhc3M9Im1iLTQiPgo8c3BhbiBjbGFzcz0iYmkgYmktc2lnbi1tZXJnZS1yaWdodCBtZS0xIj48L3NwYW4+ClZpc3VzdGVsbGEgU2tpbGwgJiBTdGF0ZXMgQ29yZSBkZXRlY3RlZC4KU29tZSBzZXR0aW5ncyBtYXkgbm90IHdvcmsgYXMgZXhwZWN0ZWQuCjwvcD4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJyb3cgbWItNCI+CjxkaXYgY2xhc3M9ImNvbCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+V2lkdGg8L2xhYmVsPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij48aSBjbGFzcz0iYmkgYmktYXJyb3dzIj48L2k+PC9zcGFuPgo8aW5wdXQgdHlwZT0ibnVtYmVyIiBjbGFzcz0iZm9ybS1jb250cm9sIiBpZD0iZ2F1Z2VXaWR0aCIKb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5IZWlnaHQ8L2xhYmVsPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij48aSBjbGFzcz0iYmkgYmktYXJyb3dzLXZlcnRpY2FsIj48L2k+PC9zcGFuPgo8aW5wdXQgdHlwZT0ibnVtYmVyIiBjbGFzcz0iZm9ybS1jb250cm9sIiBpZD0iZ2F1Z2VIZWlnaHQiCm9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPC9kaXY+CjwvZGl2PgoKPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5PdmVycmlkZSBXaWR0aCBpbjwvbGFiZWw+CjxzZWxlY3QgY2xhc3M9ImZvcm0tc2VsZWN0IG1iLTQiIGlkPSJnYXVnZVdpZHRoT3ZlcnJpZGVTY2VuZSIKb25jaGFuZ2U9ImNoYW5nZVRleHQodGhpcy5pZCwgdGhpcy52YWx1ZSkiPgo8b3B0aW9uIHZhbHVlPSJnbG9iYWwiPkFsbCBTY2VuZXM8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0iZXhjZXB0QmF0dGxlIj5BbGwgU2NlbmVzIGV4Y2VwdCBCYXR0bGU8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0ibWVudSI+TWFpbiBNZW51IG9ubHk8L29wdGlvbj4KPC9zZWxlY3Q+Cgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPk92ZXJyaWRlIEhlaWdodCBpbjwvbGFiZWw+CjxzZWxlY3QgY2xhc3M9ImZvcm0tc2VsZWN0IG1iLTQiIGlkPSJnYXVnZUhlaWdodE92ZXJyaWRlU2NlbmUiCm9uY2hhbmdlPSJjaGFuZ2VUZXh0KHRoaXMuaWQsIHRoaXMudmFsdWUpIj4KPG9wdGlvbiB2YWx1ZT0iZ2xvYmFsIj5BbGwgU2NlbmVzPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9ImV4Y2VwdEJhdHRsZSI+QWxsIFNjZW5lcyBleGNlcHQgQmF0dGxlPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9Im1lbnUiPk1haW4gTWVudSBvbmx5PC9vcHRpb24+Cjwvc2VsZWN0PgoKPGRpdiBjbGFzcz0icm93IG10LTQgbWItNCI+CjxkaXYgY2xhc3M9ImNvbCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+TGFiZWwgRm9udCBTaXplPC9sYWJlbD4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAiIHN0eWxlPSJ3aWR0aDogMTByZW07Ij4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPjxpIGNsYXNzPSJiaSBiaS1mb250cyI+PC9pPjwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9Im51bWJlciIgaWQ9ImdhdWdlTGFiZWxGb250U2l6ZSIKb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5WYWx1ZSBGb250IFNpemU8L2xhYmVsPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCIgc3R5bGU9IndpZHRoOiAxMHJlbTsiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+PGkgY2xhc3M9ImJpIGJpLWZvbnRzIj48L2k+PC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0ibnVtYmVyIiBpZD0iZ2F1Z2VWYWx1ZUZvbnRTaXplIgpvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KCjxkaXYgY2xhc3M9InJvdyBtYi00Ij4KPGRpdiBjbGFzcz0iY29sIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5MYWJlbCBWZXJ0IEFkanVzdDwvbGFiZWw+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIiBzdHlsZT0id2lkdGg6IDEwcmVtIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPgo8aSBjbGFzcz0iYmkgYmktZm9udHMiPjwvaT4KPGkgY2xhc3M9ImJpIGJpLWFycm93LWRvd24iPjwvaT4KPC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0ibnVtYmVyIiBpZD0iZ2F1Z2VMYWJlbFkiCm9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+VmFsdWUgVmVydCBBZGp1c3Q8L2xhYmVsPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCIgc3R5bGU9IndpZHRoOiAxMHJlbSI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij4KPGkgY2xhc3M9ImJpIGJpLWZvbnRzIj48L2k+CjxpIGNsYXNzPSJiaSBiaS1hcnJvdy1kb3duIj48L2k+Cjwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9Im51bWJlciIgaWQ9ImdhdWdlVmFsdWVZIgpvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KCjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+U3R5bGU8L2xhYmVsPgo8c2VsZWN0IGNsYXNzPSJmb3JtLXNlbGVjdCBtYi00IiBpZD0iZ2F1Z2VTdHlsZSIgb25jaGFuZ2U9Im9uR2F1Z2VTdHlsZUNoYW5nZSh0aGlzLnZhbHVlKSI+CjxvcHRpb24gdmFsdWU9ImRlZmF1bHQiPlJQRyBNYWtlciBEZWZhdWx0PC9vcHRpb24+CjxvcHRpb24gdmFsdWU9InN0cmV0Y2giPlN0cmV0Y2ggZnVsbHkgdG8gbGVmdDwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJ0ZXh0Ij5UZXh0IE9ubHk8L29wdGlvbj4KPC9zZWxlY3Q+Cgo8bGFiZWwgY2xhc3M9ImZvcm0tY2hlY2sgZm9ybS1zd2l0Y2ggbWItNCBteiI+CjxpbnB1dCBjbGFzcz0iZm9ybS1jaGVjay1pbnB1dCIgdHlwZT0iY2hlY2tib3giIGlkPSJzaG93R2F1Z2VNYXhWYWx1ZXMiCm9uY2hhbmdlPSJjaGFuZ2VCb29sZWFuKHRoaXMuaWQsIHRoaXMuY2hlY2tlZCkiIC8+CjxzcGFuIGNsYXNzPSJmb3JtLWNoZWNrLWxhYmVsIj5TaG93IE1heCBWYWx1ZT88L3NwYW4+CjwvbGFiZWw+Cgo8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJjYXJkIj4KPGgyIGNsYXNzPSJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gY29sbGFwc2VkIiBkYXRhLWJzLXRvZ2dsZT0iY29sbGFwc2UiCmRhdGEtYnMtdGFyZ2V0PSIjZ2F1Z2VDb2xvcnMiPgpHYXVnZSBDb2xvcnMKPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSI+CjxpIGNsYXNzPSJiaSBiaS1jaGV2cm9uLXVwIGFycm93Ij48L2k+CjwvYnV0dG9uPgo8L2gyPgo8ZGl2IGNsYXNzPSJjYXJkLWJvZHkgY29sbGFwc2UiIGlkPSJnYXVnZUNvbG9ycyI+Cgo8cCBjbGFzcz0iaW5mbyBtYi00Ij4KPHNwYW4gY2xhc3M9ImJpIGJpLWluZm8tc3F1YXJlIG1lLTEiPjwvc3Bhbj4KR2F1Z2VzIENvbG9ycyBhZmZlY3QgYWxsIEdhdWdlcyBpbiB5b3VyIGdhbWUuCjwvcD4KCjxkaXYgY2xhc3M9ImFsZXJ0IGFsZXJ0LWluZm8gbXYiPgpNViBtYXkgbm90IHN1cHBvcnQgZXZlcnkgY29sb3IgcGlja2VyLgo8L2Rpdj4KCjxkaXYgY2xhc3M9ImQtZmxleCBtYi0yIj4KPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtZS0yIiBvbmNsaWNrPSJoZWFsQWN0b3IoKSI+CjxpIGNsYXNzPSJiaSBiaS1leWUgbWUtMiI+PC9pPlJlZ3VsYXIKPC9idXR0b24+CjxidXR0b24gY2xhc3M9ImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbWUtMiIgb25jbGljaz0ibWFrZUFjdG9yQ3Jpc2lzKCkiPgo8aSBjbGFzcz0iYmkgYmktZXllIG1lLTIiPjwvaT5DcmlzaXMKPC9idXR0b24+CjxidXR0b24gY2xhc3M9ImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbWUtMiIgb25jbGljaz0ibWFrZUFjdG9yRGVhZCgpIj4KPGkgY2xhc3M9ImJpIGJpLWV5ZSBtZS0yIj48L2k+RGVhZAo8L2J1dHRvbj4KPC9kaXY+CjxwIGNsYXNzPSJpbmZvIG1iLTQiPkJ5IGRlZmF1bHQsIFRQIGNhbm5vdCBiZSBwcmV2aWV3ZWQgb3V0c2lkZSBmcm9tIGJhdHRsZXM8L3A+Cgo8ZGl2Pgo8ZGl2IGNsYXNzPSJkLWZsZXggbWItNCI+CjxkaXYgY2xhc3M9ImQtZmxleCBmbGV4LWNvbHVtbiBtZS00Ij4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5IUCBMYWJlbDwvbGFiZWw+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIGlkPSJocExhYmVsVGV4dENvbG9yU3BhbiIgc3R5bGU9Igpmb250LXNpemU6IGxhcmdlcjsKdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7CnRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDRweDsKICAiPgpBCjwvc3Bhbj4KPHNlbGVjdCBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCBmb3JtLXNlbGVjdCBteS1jb2xvci1waWNrZXIiIHN0eWxlPSJ3aWR0aDogM3JlbSIKaWQ9ImhwTGFiZWxUZXh0Q29sb3IiCm9uY2hhbmdlPSJvblRleHRDb2xvckNoYW5nZSgnaHBMYWJlbCcsIGhwTGFiZWxUZXh0Q29sb3IudmFsdWUpIj48L3NlbGVjdD4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJkLWZsZXggZmxleC1jb2x1bW4gbWUtNCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+SFAgVmFsdWU8L2xhYmVsPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IiBpZD0iaHBWYWx1ZXNUZXh0Q29sb3JTcGFuIiBzdHlsZT0iCmZvbnQtc2l6ZTogbGFyZ2VyOwp0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogNHB4OwogICI+CkEKPC9zcGFuPgo8c2VsZWN0IGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IGZvcm0tc2VsZWN0IG15LWNvbG9yLXBpY2tlciIgc3R5bGU9IndpZHRoOiAzcmVtIgppZD0iaHBWYWx1ZXNUZXh0Q29sb3IiCm9uY2hhbmdlPSJvblRleHRDb2xvckNoYW5nZSgnaHBWYWx1ZXMnLCBocFZhbHVlc1RleHRDb2xvci52YWx1ZSkiPjwvc2VsZWN0Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImQtZmxleCBmbGV4LWNvbHVtbiBtZS00Ij4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5IUCBDcmlzaXM8L2xhYmVsPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IiBpZD0iaHBDcmlzaXNUZXh0Q29sb3JTcGFuIiBzdHlsZT0iCmZvbnQtc2l6ZTogbGFyZ2VyOwp0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogNHB4OwogICI+CkEKPC9zcGFuPgo8c2VsZWN0IGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IGZvcm0tc2VsZWN0IG15LWNvbG9yLXBpY2tlciIgc3R5bGU9IndpZHRoOiAzcmVtIgppZD0iaHBDcmlzaXNUZXh0Q29sb3IiCm9uY2hhbmdlPSJvblRleHRDb2xvckNoYW5nZSgnaHBDcmlzaXMnLCBocENyaXNpc1RleHRDb2xvci52YWx1ZSkiPjwvc2VsZWN0Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImQtZmxleCBmbGV4LWNvbHVtbiBtZS00Ij4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5IUCBLbm9ja291dDwvbGFiZWw+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIGlkPSJocERlYWRUZXh0Q29sb3JTcGFuIiBzdHlsZT0iCmZvbnQtc2l6ZTogbGFyZ2VyOwp0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogNHB4OwogICI+CkEKPC9zcGFuPgo8c2VsZWN0IGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IGZvcm0tc2VsZWN0IG15LWNvbG9yLXBpY2tlciIgc3R5bGU9IndpZHRoOiAzcmVtIgppZD0iaHBEZWFkVGV4dENvbG9yIgpvbmNoYW5nZT0ib25UZXh0Q29sb3JDaGFuZ2UoJ2hwRGVhZCcsIGhwRGVhZFRleHRDb2xvci52YWx1ZSkiPjwvc2VsZWN0Pgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJkLWZsZXggbWItNCI+CjxkaXYgY2xhc3M9ImQtZmxleCBmbGV4LWNvbHVtbiBtZS00Ij4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5NUCBMYWJlbDwvbGFiZWw+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIGlkPSJtcExhYmVsVGV4dENvbG9yU3BhbiIgc3R5bGU9Igpmb250LXNpemU6IGxhcmdlcjsKdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7CnRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDRweDsKICAiPgpBCjwvc3Bhbj4KPHNlbGVjdCBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCBmb3JtLXNlbGVjdCBteS1jb2xvci1waWNrZXIiIHN0eWxlPSJ3aWR0aDogM3JlbSIKaWQ9Im1wTGFiZWxUZXh0Q29sb3IiCm9uY2hhbmdlPSJvblRleHRDb2xvckNoYW5nZSgnbXBMYWJlbCcsIG1wTGFiZWxUZXh0Q29sb3IudmFsdWUpIj48L3NlbGVjdD4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJkLWZsZXggZmxleC1jb2x1bW4gbWUtNCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+TVAgVmFsdWU8L2xhYmVsPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IiBpZD0ibXBWYWx1ZXNUZXh0Q29sb3JTcGFuIiBzdHlsZT0iCmZvbnQtc2l6ZTogbGFyZ2VyOwp0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogNHB4OwogICI+CkEKPC9zcGFuPgo8c2VsZWN0IGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IGZvcm0tc2VsZWN0IG15LWNvbG9yLXBpY2tlciIgc3R5bGU9IndpZHRoOiAzcmVtIgppZD0ibXBWYWx1ZXNUZXh0Q29sb3IiCm9uY2hhbmdlPSJvblRleHRDb2xvckNoYW5nZSgnbXBWYWx1ZXMnLCBtcFZhbHVlc1RleHRDb2xvci52YWx1ZSkiPjwvc2VsZWN0Pgo8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJkLWZsZXggZmxleC1jb2x1bW4gbWUtNCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+TVAgVmFsdWUgKERlcGxldGVkKTwvbGFiZWw+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIGlkPSJtcEVtcHR5VGV4dENvbG9yU3BhbiIgc3R5bGU9Igpmb250LXNpemU6IGxhcmdlcjsKdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7CnRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDRweDsKICAiPgpBCjwvc3Bhbj4KPHNlbGVjdCBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCBmb3JtLXNlbGVjdCBteS1jb2xvci1waWNrZXIiIHN0eWxlPSJ3aWR0aDogM3JlbSIKaWQ9Im1wRW1wdHlUZXh0Q29sb3IiCm9uY2hhbmdlPSJvblRleHRDb2xvckNoYW5nZSgnbXBFbXB0eScsIG1wRW1wdHlUZXh0Q29sb3IudmFsdWUpIj48L3NlbGVjdD4KPC9kaXY+CjwvZGl2PgoKPC9kaXY+CjxkaXYgY2xhc3M9ImQtZmxleCBtYi00Ij4KPGRpdiBjbGFzcz0iZC1mbGV4IGZsZXgtY29sdW1uIG1lLTQiPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPlRQIExhYmVsPC9sYWJlbD4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCIgaWQ9InRwTGFiZWxUZXh0Q29sb3JTcGFuIiBzdHlsZT0iCmZvbnQtc2l6ZTogbGFyZ2VyOwp0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogNHB4OwogICI+CkEKPC9zcGFuPgo8c2VsZWN0IGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IGZvcm0tc2VsZWN0IG15LWNvbG9yLXBpY2tlciIgc3R5bGU9IndpZHRoOiAzcmVtIgppZD0idHBMYWJlbFRleHRDb2xvciIKb25jaGFuZ2U9Im9uVGV4dENvbG9yQ2hhbmdlKCd0cExhYmVsJywgdHBMYWJlbFRleHRDb2xvci52YWx1ZSkiPjwvc2VsZWN0Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImQtZmxleCBmbGV4LWNvbHVtbiBtZS00Ij4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5UUCBWYWx1ZTwvbGFiZWw+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIGlkPSJocExhYmVsVGV4dENvbG9yU3BhbiIgc3R5bGU9Igpmb250LXNpemU6IGxhcmdlcjsKdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7CnRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDRweDsKICAiPgpBCjwvc3Bhbj4KPHNlbGVjdCBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCBmb3JtLXNlbGVjdCBteS1jb2xvci1waWNrZXIiIHN0eWxlPSJ3aWR0aDogM3JlbSIKaWQ9InRwVmFsdWVzVGV4dENvbG9yIgpvbmNoYW5nZT0ib25UZXh0Q29sb3JDaGFuZ2UoJ3RwVmFsdWVzJywgdHBWYWx1ZXNUZXh0Q29sb3IudmFsdWUpIj48L3NlbGVjdD4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+Cgo8aHI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCBteiI+R2F1Z2UgQ29sb3JzPC9sYWJlbD4KPGRpdiBjbGFzcz0icm93IG1iLTQiPgo8ZGl2IGNsYXNzPSJjb2wiPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPkhQPC9sYWJlbD4KPGRpdiBjbGFzcz0iZC1mbGV4Ij4KPGlucHV0IHR5cGU9ImNvbG9yIiBjbGFzcz0iZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1jb2xvciBtZS0yIiBpZD0iZ2F1Z2VDb2xvckhwMSIKb25jaGFuZ2U9Im9uR2F1Z2VDb2xvckNoYW5nZSgnSHAxJywgZ2F1Z2VDb2xvckhwMS52YWx1ZSkiIC8+CjxpbnB1dCB0eXBlPSJjb2xvciIgY2xhc3M9ImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtY29sb3IgbWUtMiIgaWQ9ImdhdWdlQ29sb3JIcDIiCm9uY2hhbmdlPSJvbkdhdWdlQ29sb3JDaGFuZ2UoJ0hwMicsIGdhdWdlQ29sb3JIcDIudmFsdWUpIiAvPgo8YnV0dG9uIGNsYXNzPSJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IiBvbmNsaWNrPSJvblJlc2V0R2F1Z2VDb2xvcignSHAnKSI+CjxpIGNsYXNzPSJiaSBiaS1hcnJvdy1jb3VudGVyY2xvY2t3aXNlIj48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+SFAgKENyaXNpcyk8L2xhYmVsPgo8ZGl2IGNsYXNzPSJkLWZsZXgiPgo8aW5wdXQgdHlwZT0iY29sb3IiIGNsYXNzPSJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWNvbG9yIG1lLTIiCmlkPSJnYXVnZUNvbG9ySHBDcmlzaXMxIgpvbmNoYW5nZT0ib25HYXVnZUNvbG9yQ2hhbmdlKCdIcENyaXNpczEnLCBnYXVnZUNvbG9ySHBDcmlzaXMxLnZhbHVlKSIgLz4KPGlucHV0IHR5cGU9ImNvbG9yIiBjbGFzcz0iZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1jb2xvciBtZS0yIgppZD0iZ2F1Z2VDb2xvckhwQ3Jpc2lzMiIKb25jaGFuZ2U9Im9uR2F1Z2VDb2xvckNoYW5nZSgnSHBDcmlzaXMyJywgZ2F1Z2VDb2xvckhwQ3Jpc2lzMi52YWx1ZSkiIC8+CjxidXR0b24gY2xhc3M9ImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkiIG9uY2xpY2s9Im9uUmVzZXRHYXVnZUNvbG9yKCdIcENyaXNpcycpIj4KPGkgY2xhc3M9ImJpIGJpLWFycm93LWNvdW50ZXJjbG9ja3dpc2UiPjwvaT4KPC9idXR0b24+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sIj48L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9InJvdyBtYi00Ij4KPGRpdiBjbGFzcz0iY29sIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5NUDwvbGFiZWw+CjxkaXYgY2xhc3M9ImQtZmxleCI+CjxpbnB1dCB0eXBlPSJjb2xvciIgY2xhc3M9ImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtY29sb3IgbWUtMiIgaWQ9ImdhdWdlQ29sb3JNcDEiCm9uY2hhbmdlPSJvbkdhdWdlQ29sb3JDaGFuZ2UoJ01wMScsIGdhdWdlQ29sb3JNcDEudmFsdWUpIiAvPgo8aW5wdXQgdHlwZT0iY29sb3IiIGNsYXNzPSJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWNvbG9yIG1lLTIiIGlkPSJnYXVnZUNvbG9yTXAyIgpvbmNoYW5nZT0ib25HYXVnZUNvbG9yQ2hhbmdlKCdNcDInLCBnYXVnZUNvbG9yTXAyLnZhbHVlKSIgLz4KPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSIgb25jbGljaz0ib25SZXNldEdhdWdlQ29sb3IoJ01wJykiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3ctY291bnRlcmNsb2Nrd2lzZSI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPlRQPC9sYWJlbD4KPGRpdiBjbGFzcz0iZC1mbGV4Ij4KPGlucHV0IHR5cGU9ImNvbG9yIiBjbGFzcz0iZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1jb2xvciBtZS0yIiBpZD0iZ2F1Z2VDb2xvclRwMSIKb25jaGFuZ2U9Im9uR2F1Z2VDb2xvckNoYW5nZSgnVHAxJywgZ2F1Z2VDb2xvclRwMS52YWx1ZSkiIC8+CjxpbnB1dCB0eXBlPSJjb2xvciIgY2xhc3M9ImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtY29sb3IgbWUtMiIgaWQ9ImdhdWdlQ29sb3JUcDIiCm9uY2hhbmdlPSJvbkdhdWdlQ29sb3JDaGFuZ2UoJ1RwMicsIGdhdWdlQ29sb3JUcDIudmFsdWUpIiAvPgo8YnV0dG9uIGNsYXNzPSJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IiBvbmNsaWNrPSJvblJlc2V0R2F1Z2VDb2xvcignVHAnKSI+CjxpIGNsYXNzPSJiaSBiaS1hcnJvdy1jb3VudGVyY2xvY2t3aXNlIj48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+QVRCPC9sYWJlbD4KPGRpdiBjbGFzcz0iZC1mbGV4Ij4KPGlucHV0IHR5cGU9ImNvbG9yIiBjbGFzcz0iZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1jb2xvciBtZS0yIiBpZD0iZ2F1Z2VDb2xvckF0YjEiCm9uY2hhbmdlPSJvbkdhdWdlQ29sb3JDaGFuZ2UoJ0F0YjEnLCBnYXVnZUNvbG9yQXRiMS52YWx1ZSkiIC8+CjxpbnB1dCB0eXBlPSJjb2xvciIgY2xhc3M9ImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtY29sb3IgbWUtMiIgaWQ9ImdhdWdlQ29sb3JBdGIyIgpvbmNoYW5nZT0ib25HYXVnZUNvbG9yQ2hhbmdlKCdBdGIyJywgZ2F1Z2VDb2xvckF0YjIudmFsdWUpIiAvPgo8YnV0dG9uIGNsYXNzPSJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IiBvbmNsaWNrPSJvblJlc2V0R2F1Z2VDb2xvcignQXRiJykiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3ctY291bnRlcmNsb2Nrd2lzZSI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KCjxocj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIG16Ij5CYWNrZ3JvdW5kPC9sYWJlbD4KPGRpdiBjbGFzcz0icm93IG1iLTQgbXoiPgo8ZGl2IGNsYXNzPSJjb2wiPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPkhQPC9sYWJlbD4KPGRpdiBjbGFzcz0iZC1mbGV4Ij4KPGlucHV0IHR5cGU9ImNvbG9yIiBjbGFzcz0iZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1jb2xvciBtZS0yIgppZD0iZ2F1Z2VCYWNrZ3JvdW5kQ29sb3JIcCIKb25jaGFuZ2U9Im9uR2F1Z2VCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UoJ0hwJywgZ2F1Z2VCYWNrZ3JvdW5kQ29sb3JIcC52YWx1ZSkiIC8+CjxidXR0b24gY2xhc3M9ImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkiCm9uY2xpY2s9Im9uUmVzZXRHYXVnZUJhY2tncm91bmRDb2xvcignSHAnKSI+CjxpIGNsYXNzPSJiaSBiaS1hcnJvdy1jb3VudGVyY2xvY2t3aXNlIj48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+SFAgKENyaXNpcyk8L2xhYmVsPgo8ZGl2IGNsYXNzPSJkLWZsZXgiPgo8aW5wdXQgdHlwZT0iY29sb3IiIGNsYXNzPSJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWNvbG9yIG1lLTIiCmlkPSJnYXVnZUJhY2tncm91bmRDb2xvckhwQ3Jpc2lzIgpvbmNoYW5nZT0ib25HYXVnZUJhY2tncm91bmRDb2xvckNoYW5nZSgnSHBDcmlzaXMnLCBnYXVnZUJhY2tncm91bmRDb2xvckhwQ3Jpc2lzLnZhbHVlKSIgLz4KPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSIKb25jbGljaz0ib25SZXNldEdhdWdlQmFja2dyb3VuZENvbG9yKCdIcENyaXNpcycpIj4KPGkgY2xhc3M9ImJpIGJpLWFycm93LWNvdW50ZXJjbG9ja3dpc2UiPjwvaT4KPC9idXR0b24+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5IUCAoS25vY2tvdXQpPC9sYWJlbD4KPGRpdiBjbGFzcz0iZC1mbGV4Ij4KPGlucHV0IHR5cGU9ImNvbG9yIiBjbGFzcz0iZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1jb2xvciBtZS0yIgppZD0iZ2F1Z2VCYWNrZ3JvdW5kQ29sb3JIcERlYWQiCm9uY2hhbmdlPSJvbkdhdWdlQmFja2dyb3VuZENvbG9yQ2hhbmdlKCdIcERlYWQnLCBnYXVnZUJhY2tncm91bmRDb2xvckhwRGVhZC52YWx1ZSkiIC8+CjxidXR0b24gY2xhc3M9ImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkiCm9uY2xpY2s9Im9uUmVzZXRHYXVnZUJhY2tncm91bmRDb2xvcignSHBEZWFkJykiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3ctY291bnRlcmNsb2Nrd2lzZSI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0icm93IG1iLTQgbXoiPgo8ZGl2IGNsYXNzPSJjb2wiPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPk1QPC9sYWJlbD4KPGRpdiBjbGFzcz0iZC1mbGV4Ij4KPGlucHV0IHR5cGU9ImNvbG9yIiBjbGFzcz0iZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1jb2xvciBtZS0yIgppZD0iZ2F1Z2VCYWNrZ3JvdW5kQ29sb3JNcCIKb25jaGFuZ2U9Im9uR2F1Z2VCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UoJ01wJywgZ2F1Z2VCYWNrZ3JvdW5kQ29sb3JNcC52YWx1ZSkiIC8+CjxidXR0b24gY2xhc3M9ImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkiCm9uY2xpY2s9Im9uUmVzZXRHYXVnZUJhY2tncm91bmRDb2xvcignTXAnKSI+CjxpIGNsYXNzPSJiaSBiaS1hcnJvdy1jb3VudGVyY2xvY2t3aXNlIj48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+VFA8L2xhYmVsPgo8ZGl2IGNsYXNzPSJkLWZsZXgiPgo8aW5wdXQgdHlwZT0iY29sb3IiIGNsYXNzPSJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWNvbG9yIG1lLTIiCmlkPSJnYXVnZUJhY2tncm91bmRDb2xvclRwIgpvbmNoYW5nZT0ib25HYXVnZUJhY2tncm91bmRDb2xvckNoYW5nZSgnVHAnLCBnYXVnZUJhY2tncm91bmRDb2xvclRwLnZhbHVlKSIgLz4KPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSIKb25jbGljaz0ib25SZXNldEdhdWdlQmFja2dyb3VuZENvbG9yKCdUcCcpIj4KPGkgY2xhc3M9ImJpIGJpLWFycm93LWNvdW50ZXJjbG9ja3dpc2UiPjwvaT4KPC9idXR0b24+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5BVEI8L2xhYmVsPgo8ZGl2IGNsYXNzPSJkLWZsZXgiPgo8aW5wdXQgdHlwZT0iY29sb3IiIGNsYXNzPSJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWNvbG9yIG1lLTIiCmlkPSJnYXVnZUJhY2tncm91bmRDb2xvckF0YiIKb25jaGFuZ2U9Im9uR2F1Z2VCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UoJ0F0YicsIGdhdWdlQmFja2dyb3VuZENvbG9yQXRiLnZhbHVlKSIgLz4KPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSIKb25jbGljaz0ib25SZXNldEdhdWdlQmFja2dyb3VuZENvbG9yKCdBdGInKSI+CjxpIGNsYXNzPSJiaSBiaS1hcnJvdy1jb3VudGVyY2xvY2t3aXNlIj48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+Cgo8aDQgY2xhc3M9Im10LXhsIj5NYWluIE1lbnU8L2g0Pgo8ZGl2IGNsYXNzPSJjYXJkIj4KPGgyIGNsYXNzPSJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gY29sbGFwc2VkIiBkYXRhLWJzLXRvZ2dsZT0iY29sbGFwc2UiCmRhdGEtYnMtdGFyZ2V0PSIjbGF5b3V0Ij4KTGF5b3V0IDEKPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSI+CjxpIGNsYXNzPSJiaSBiaS1jaGV2cm9uLXVwIGFycm93Ij48L2k+CjwvYnV0dG9uPgo8L2gyPgo8ZGl2IGNsYXNzPSJjYXJkLWJvZHkgY29sbGFwc2UiIGlkPSJsYXlvdXQiPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPklucHV0IE1vZGUgKGFsbCBTY2VuZXMpPC9sYWJlbD4KPGRpdiBjbGFzcz0iZm9ybS1yb3cgbWItNCI+CjxkaXYgY2xhc3M9ImJ0bi1ncm91cCI+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0iY29tbWFuZElucHV0TW9kZUxlZnQiCm9uY2xpY2s9Im9uQ29tbWFuZElucHV0TW9kZSgnbGVmdCcpIj4KPGkgY2xhc3M9ImJpIGJpLWxheW91dC1zaWRlYmFyLWluc2V0Ij48L2k+IExlZnQKPC9idXR0b24+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0iY29tbWFuZElucHV0TW9kZVJpZ2h0IgpvbmNsaWNrPSJvbkNvbW1hbmRJbnB1dE1vZGUoJ3JpZ2h0JykiPgo8aSBjbGFzcz0iYmkgYmktbGF5b3V0LXNpZGViYXItaW5zZXQtcmV2ZXJzZSI+PC9pPiBSaWdodAo8L2J1dHRvbj4KPC9kaXY+CjwvZGl2Pgo8aHIgLz4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5BY3Rvci9TdGF0dXMgV2luZG93PC9sYWJlbD4KPGRpdiBjbGFzcz0iZm9ybS1yb3cgbWItNCI+CjxkaXYgY2xhc3M9ImJ0bi1ncm91cCI+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0ic3RhdHVzT3JpZW50YXRpb25Sb3dzIgpvbmNsaWNrPSJvblN0YXR1c1dpbmRvd01vZGVDaGFuZ2UoJ3Jvd3MnKSI+CjxpIGNsYXNzPSJiaSBiaS1sYXlvdXQtdGhyZWUtY29sdW1ucyByb3RhdGUtOTAgbWUtMiI+PC9pPlJvd3MKPC9idXR0b24+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0ic3RhdHVzT3JpZW50YXRpb25Db2x1bW5zIgpvbmNsaWNrPSJvblN0YXR1c1dpbmRvd01vZGVDaGFuZ2UoJ2NvbHVtbnMnKSI+CjxpIGNsYXNzPSJiaSBiaS1sYXlvdXQtdGhyZWUtY29sdW1ucyBtZS0yIj48L2k+Q29sdW1ucwo8L2J1dHRvbj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJzdGF0dXNPcmllbnRhdGlvbkdyaWQiCm9uY2xpY2s9Im9uU3RhdHVzV2luZG93TW9kZUNoYW5nZSgnZ3JpZCcpIj4KPGkgY2xhc3M9ImJpIGJpLWdyaWQgbWUtMiI+PC9pPkdyaWQKPC9idXR0b24+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0ic3RhdHVzT3JpZW50YXRpb25TaW5nbGVBY3RvciIKb25jbGljaz0ib25TdGF0dXNXaW5kb3dNb2RlQ2hhbmdlKCdzaW5nbGUgYWN0b3InKSI+CjxpIGNsYXNzPSJiaSBiaS1maWxlLXBlcnNvbiBtZS0yIj48L2k+U2luZ2xlIEFjdG9yCjwvYnV0dG9uPgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biIgaWQ9InN0YXR1c09yaWVudGF0aW9uTm9uZSIKb25jbGljaz0ib25TdGF0dXNXaW5kb3dNb2RlQ2hhbmdlKCdub25lJykiPgo8aSBjbGFzcz0iYmkgYmkteC1sZyBtZS0yIj48L2k+RG9uJ3Qgc2hvdwo8L2J1dHRvbj4KPC9kaXY+CjwvZGl2PgoKPGRpdiBpZD0idmlzaWJsZUFjdG9yc0JveCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+VmlzaWJsZSBBY3RvcnM8L2xhYmVsPgo8ZGl2IGNsYXNzPSJkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUiPgo8aW5wdXQgdHlwZT0ibnVtYmVyIiBjbGFzcz0iZm9ybS1jb250cm9sIG1iLTQiIHBsYWNlaG9sZGVyPSI0IiBtaW49IjEiIG1heD0iMTAiCnN0eWxlPSJ3aWR0aDogNnJlbSIgaWQ9InZpc2libGVBY3RvcnMiCm9uY2hhbmdlPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjxwIGNsYXNzPSJtcy0zIG1lLTMiIGlkPSJ2aXNpYmxlQWN0b3JzV2F2ZSI+fjwvcD4KPGlucHV0IHR5cGU9Im51bWJlciIgY2xhc3M9ImZvcm0tY29udHJvbCBtYi00IiBwbGFjZWhvbGRlcj0iNCIgbWluPSIxIiBtYXg9IjEwIgpzdHlsZT0id2lkdGg6IDZyZW0iIGlkPSJ2aXNpYmxlQWN0b3JzTWF4IgpvbmNoYW5nZT0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPGxhYmVsIGNsYXNzPSJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoIG1iLTQiPgo8aW5wdXQgY2xhc3M9ImZvcm0tY2hlY2staW5wdXQiIHR5cGU9ImNoZWNrYm94IiBpZD0iYXV0b0FkanVzdFZpc2libGVBY3RvcnMiCm9uY2hhbmdlPSJvbkF1dG9BZGp1c3RWaXNpYmxlQWN0b3JzQ2hhbmdlKGF1dG9BZGp1c3RWaXNpYmxlQWN0b3JzLmNoZWNrZWQpIiAvPgo8c3BhbiBjbGFzcz0iZm9ybS1jaGVjay1sYWJlbCI+QWx3YXlzIGFkanVzdCB0byBjdXJyZW50IFBhcnR5IFNpemU/PC9zcGFuPgo8L2xhYmVsPgo8L2Rpdj4KCjxkaXYgaWQ9InN0YXR1c09yaWVudGF0aW9uR3JpZEJveCI+CjxkaXYgY2xhc3M9ImQtZmxleCBnYXAtNCI+CjxkaXY+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+Q29sdW1uczwvbGFiZWw+CjxpbnB1dCB0eXBlPSJudW1iZXIiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSIyIiBtaW49IjEiIG1heD0iMTAiCnN0eWxlPSJ3aWR0aDogNnJlbTsiIGlkPSJzdGF0dXNXaW5kb3dDb2xzIgpvbmNoYW5nZT0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPGRpdj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5Sb3dzPC9sYWJlbD4KPGlucHV0IHR5cGU9Im51bWJlciIgY2xhc3M9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9IjIiIG1pbj0iMSIgbWF4PSIxMCIKc3R5bGU9IndpZHRoOiA2cmVtOyIgaWQ9InN0YXR1c1dpbmRvd1Jvd3MiCm9uY2hhbmdlPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+Cgo8aHIgLz4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5Db21tYW5kIFdpbmRvdyBQb3NpdGlvbjwvbGFiZWw+Cgo8ZGl2IGNsYXNzPSJmb3JtLXJvdyBtYi00IiBpZD0iY29tbWFuZE9yaWVudGF0aW9uQm94Ij4KPGRpdiBjbGFzcz0iYnRuLWdyb3VwIj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJjb21tYW5kT3JpZW50YXRpb25TaWRlIgpvbmNsaWNrPSJvbkNvbW1hbmRPcmllbnRhdGlvbignc2lkZScpIj4KPGkgY2xhc3M9ImJpIGJpLWxheW91dC1zaWRlYmFyLWluc2V0LXJldmVyc2UiPjwvaT4gU2lkZQo8L2J1dHRvbj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJjb21tYW5kT3JpZW50YXRpb25Ub3AiCm9uY2xpY2s9Im9uQ29tbWFuZE9yaWVudGF0aW9uKCd0b3AnKSI+CjxpIGNsYXNzPSJiaSBiaS1sYXlvdXQtc2lkZWJhci1pbnNldCByb3RhdGUtOTAiPjwvaT4gVG9wCjwvYnV0dG9uPgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biIgaWQ9ImNvbW1hbmRPcmllbnRhdGlvbkJvdHRvbSIKb25jbGljaz0ib25Db21tYW5kT3JpZW50YXRpb24oJ2JvdHRvbScpIj4KPGkgY2xhc3M9ImJpIGJpLWxheW91dC1zaWRlYmFyLWluc2V0LXJldmVyc2Ugcm90YXRlLTkwIj48L2k+CkJvdHRvbQo8L2J1dHRvbj4KPC9kaXY+CjwvZGl2PgoKPGRpdiBpZD0iY29tbWFuZE9yaWVudGF0aW9uQm94MiI+CjxkaXYgY2xhc3M9InJvdyI+CjxkaXYgY2xhc3M9ImNvbCI+CjxkaXYgY2xhc3M9InJvdyBtYi00IGctMiIgc3R5bGU9IndpZHRoOiAxMHJlbSI+CjxkaXYgY2xhc3M9ImNvbC00Ij4KPGJ1dHRvbiBjbGFzcz0iYnRuIHctMTAwIiBpZD0iY29tbWFuZFBvc2l0aW9uVG9wTGVmdCIKb25jbGljaz0iY2hhbmdlOURpcih0aGlzLmlkKSI+CjxpIGNsYXNzPSJiaSBiaS1hcnJvdy11cC1sZWZ0Ij48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sLTQiPgo8YnV0dG9uIGNsYXNzPSJidG4gdy0xMDAiIGlkPSJjb21tYW5kUG9zaXRpb25Ub3BDZW50ZXIiCm9uY2xpY2s9ImNoYW5nZTlEaXIodGhpcy5pZCkiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3ctdXAiPjwvaT4KPC9idXR0b24+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wtNCI+CjxidXR0b24gY2xhc3M9ImJ0biB3LTEwMCIgaWQ9ImNvbW1hbmRQb3NpdGlvblRvcFJpZ2h0IgpvbmNsaWNrPSJjaGFuZ2U5RGlyKHRoaXMuaWQpIj4KPGkgY2xhc3M9ImJpIGJpLWFycm93LXVwLXJpZ2h0Ij48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sLTQiPgo8YnV0dG9uIGNsYXNzPSJidG4gdy0xMDAiIGlkPSJjb21tYW5kUG9zaXRpb25NaWRkbGVMZWZ0IgpvbmNsaWNrPSJjaGFuZ2U5RGlyKHRoaXMuaWQpIj4KPGkgY2xhc3M9ImJpIGJpLWFycm93LWxlZnQiPjwvaT4KPC9idXR0b24+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wtNCI+CjxidXR0b24gY2xhc3M9ImJ0biB3LTEwMCIgaWQ9ImNvbW1hbmRQb3NpdGlvbk1pZGRsZUNlbnRlciIKb25jbGljaz0iY2hhbmdlOURpcih0aGlzLmlkKSI+CjxpIGNsYXNzPSJiaSBiaS1mdWxsc2NyZWVuIj48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sLTQiPgo8YnV0dG9uIGNsYXNzPSJidG4gdy0xMDAiIGlkPSJjb21tYW5kUG9zaXRpb25NaWRkbGVSaWdodCIKb25jbGljaz0iY2hhbmdlOURpcih0aGlzLmlkKSI+CjxpIGNsYXNzPSJiaSBiaS1hcnJvdy1yaWdodCI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbC00Ij4KPGJ1dHRvbiBjbGFzcz0iYnRuIHctMTAwIiBpZD0iY29tbWFuZFBvc2l0aW9uQm90dG9tTGVmdCIKb25jbGljaz0iY2hhbmdlOURpcih0aGlzLmlkKSI+CjxpIGNsYXNzPSJiaSBiaS1hcnJvdy1kb3duLWxlZnQiPjwvaT4KPC9idXR0b24+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wtNCI+CjxidXR0b24gY2xhc3M9ImJ0biB3LTEwMCIgaWQ9ImNvbW1hbmRQb3NpdGlvbkJvdHRvbUNlbnRlciIKb25jbGljaz0iY2hhbmdlOURpcih0aGlzLmlkKSI+CjxpIGNsYXNzPSJiaSBiaS1hcnJvdy1kb3duIj48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sLTQiPgo8YnV0dG9uIGNsYXNzPSJidG4gdy0xMDAiIGlkPSJjb21tYW5kUG9zaXRpb25Cb3R0b21SaWdodCIKb25jbGljaz0iY2hhbmdlOURpcih0aGlzLmlkKSI+CjxpIGNsYXNzPSJiaSBiaS1hcnJvdy1kb3duLXJpZ2h0Ij48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KCjxkaXYgY2xhc3M9InJvdyI+CjxkaXYgY2xhc3M9ImNvbCI+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIG1iLTQiIHN0eWxlPSJ3aWR0aDogMTByZW07Ij4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPng8L3NwYW4+CjxpbnB1dCB0eXBlPSJudW1iZXIiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJjb21tYW5kT2Zmc2V0WCIKb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sIj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAiIHN0eWxlPSJ3aWR0aDogMTByZW07Ij4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPnk8L3NwYW4+CjxpbnB1dCB0eXBlPSJudW1iZXIiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJjb21tYW5kT2Zmc2V0WSIKb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sIj48L2Rpdj4KPC9kaXY+CjwvZGl2PgoKPGRpdiBjbGFzcz0icm93IG1iLTQiPgo8ZGl2IGNsYXNzPSJjb2wiIGlkPSJjb21tYW5kV2lkdGhCb3giPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPldpZHRoPC9sYWJlbD4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9Im51bWJlciIgbWluPSIxIiBtYXg9IjEwMDAwIiBwbGFjZWhvbGRlcj0iMjQwIgpzdHlsZT0id2lkdGg6IDZyZW0iIGlkPSJjb21tYW5kV2lkdGgiIG9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sIiBpZD0iY29tbWFuZE51bWJlck9mQ29sdW1uc0JveCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+Q29sdW1uczwvbGFiZWw+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIiB0eXBlPSJudW1iZXIiIHBsYWNlaG9sZGVyPSI0IiBtaW49IjEiIG1heD0iMTAiCnN0eWxlPSJ3aWR0aDogNnJlbSIgaWQ9ImNvbW1hbmROdW1iZXJPZkNvbHVtbnMiCm9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sIiBpZD0iY29tbWFuZE51bWJlck9mTGluZXNCb3giPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPlJvd3M8L2xhYmVsPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0ibnVtYmVyIiBwbGFjZWhvbGRlcj0iMiIgbWluPSIxIiBtYXg9IjEwIgpzdHlsZT0id2lkdGg6IDZyZW0iIGlkPSJjb21tYW5kTnVtYmVyT2ZMaW5lcyIKb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8L2Rpdj4KCjxocj4KCjxkaXYgaWQ9ImdvbGRXaW5kb3dMYXlvdXRCb3giPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPkdvbGQgJiBHYW1lIEluZm8gV2luZG93PC9sYWJlbD4KPGRpdiBjbGFzcz0icm93Ij4KPGRpdiBjbGFzcz0iY29sIj4KPGRpdiBjbGFzcz0icm93IG1iLTQgZy0yIiBzdHlsZT0id2lkdGg6IDEwcmVtIj4KPGRpdiBjbGFzcz0iY29sLTQiPgo8YnV0dG9uIGNsYXNzPSJidG4gdy0xMDAiIGlkPSJnb2xkV2luZG93UG9zaXRpb25Ub3BMZWZ0IgpvbmNsaWNrPSJjaGFuZ2U5RGlyKHRoaXMuaWQpIj4KPGkgY2xhc3M9ImJpIGJpLWFycm93LXVwLWxlZnQiPjwvaT4KPC9idXR0b24+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wtNCI+CjxidXR0b24gY2xhc3M9ImJ0biB3LTEwMCIgaWQ9ImdvbGRXaW5kb3dQb3NpdGlvblRvcENlbnRlciIKb25jbGljaz0iY2hhbmdlOURpcih0aGlzLmlkKSI+CjxpIGNsYXNzPSJiaSBiaS1hcnJvdy11cCI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbC00Ij4KPGJ1dHRvbiBjbGFzcz0iYnRuIHctMTAwIiBpZD0iZ29sZFdpbmRvd1Bvc2l0aW9uVG9wUmlnaHQiCm9uY2xpY2s9ImNoYW5nZTlEaXIodGhpcy5pZCkiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3ctdXAtcmlnaHQiPjwvaT4KPC9idXR0b24+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wtNCI+CjxidXR0b24gY2xhc3M9ImJ0biB3LTEwMCIgaWQ9ImdvbGRXaW5kb3dQb3NpdGlvbk1pZGRsZUxlZnQiCm9uY2xpY2s9ImNoYW5nZTlEaXIodGhpcy5pZCkiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3ctbGVmdCI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbC00Ij4KPGJ1dHRvbiBjbGFzcz0iYnRuIHctMTAwIiBpZD0iZ29sZFdpbmRvd1Bvc2l0aW9uTWlkZGxlQ2VudGVyIgpvbmNsaWNrPSJjaGFuZ2U5RGlyKHRoaXMuaWQpIj4KPGkgY2xhc3M9ImJpIGJpLWZ1bGxzY3JlZW4iPjwvaT4KPC9idXR0b24+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wtNCI+CjxidXR0b24gY2xhc3M9ImJ0biB3LTEwMCIgaWQ9ImdvbGRXaW5kb3dQb3NpdGlvbk1pZGRsZVJpZ2h0IgpvbmNsaWNrPSJjaGFuZ2U5RGlyKHRoaXMuaWQpIj4KPGkgY2xhc3M9ImJpIGJpLWFycm93LXJpZ2h0Ij48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sLTQiPgo8YnV0dG9uIGNsYXNzPSJidG4gdy0xMDAiIGlkPSJnb2xkV2luZG93UG9zaXRpb25Cb3R0b21MZWZ0IgpvbmNsaWNrPSJjaGFuZ2U5RGlyKHRoaXMuaWQpIj4KPGkgY2xhc3M9ImJpIGJpLWFycm93LWRvd24tbGVmdCI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbC00Ij4KPGJ1dHRvbiBjbGFzcz0iYnRuIHctMTAwIiBpZD0iZ29sZFdpbmRvd1Bvc2l0aW9uQm90dG9tQ2VudGVyIgpvbmNsaWNrPSJjaGFuZ2U5RGlyKHRoaXMuaWQpIj4KPGkgY2xhc3M9ImJpIGJpLWFycm93LWRvd24iPjwvaT4KPC9idXR0b24+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wtNCI+CjxidXR0b24gY2xhc3M9ImJ0biB3LTEwMCIgaWQ9ImdvbGRXaW5kb3dQb3NpdGlvbkJvdHRvbVJpZ2h0IgpvbmNsaWNrPSJjaGFuZ2U5RGlyKHRoaXMuaWQpIj4KPGkgY2xhc3M9ImJpIGJpLWFycm93LWRvd24tcmlnaHQiPjwvaT4KPC9idXR0b24+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJyb3ciPgo8ZGl2IGNsYXNzPSJjb2wiPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBtYi00IiBzdHlsZT0id2lkdGg6IDEwcmVtOyI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij54PC9zcGFuPgo8aW5wdXQgdHlwZT0ibnVtYmVyIiBjbGFzcz0iZm9ybS1jb250cm9sIiBpZD0iZ29sZFdpbmRvd09mZnNldFgiCm9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCI+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIiBzdHlsZT0id2lkdGg6IDEwcmVtOyI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij55PC9zcGFuPgo8aW5wdXQgdHlwZT0ibnVtYmVyIiBjbGFzcz0iZm9ybS1jb250cm9sIiBpZD0iZ29sZFdpbmRvd09mZnNldFkiCm9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCI+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIiBzdHlsZT0id2lkdGg6IDEwcmVtOyI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij48aSBjbGFzcz0iYmkgYmktYXJyb3dzIj48L2k+PC9zcGFuPgo8aW5wdXQgdHlwZT0ibnVtYmVyIiBjbGFzcz0iZm9ybS1jb250cm9sIiBpZD0iZ29sZFdpbmRvd1dpZHRoIgpvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+Cgo8aHI+Cgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBtYi0yIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIHN0eWxlPSJ3aWR0aDogMjAwcHgiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3ctYmFyLXVwIG1lLTIiPjwvaT4KVG9wIFNwYWNpbmcKPC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgc3R5bGU9ImZsZXgtZ3JvdzogMDsgZmxleC1iYXNpczogNXJlbSIgdHlwZT0ibnVtYmVyIgppZD0idG9wU3BhY2luZyIgb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBtYi0yIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIHN0eWxlPSJ3aWR0aDogMjAwcHgiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3ctYmFyLWRvd24gbWUtMiI+PC9pPgpCb3R0b20gU3BhY2luZwo8L3NwYW4+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIiBzdHlsZT0iZmxleC1ncm93OiAwOyBmbGV4LWJhc2lzOiA1cmVtIiB0eXBlPSJudW1iZXIiCmlkPSJib3R0b21TcGFjaW5nIiBvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIG1iLTIiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCIgc3R5bGU9IndpZHRoOiAyMDBweCI+CjxpIGNsYXNzPSJiaSBiaS1hcnJvdy1iYXItbGVmdCBtZS0yIj48L2k+CkxlZnQgU3BhY2luZwo8L3NwYW4+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIiBzdHlsZT0iZmxleC1ncm93OiAwOyBmbGV4LWJhc2lzOiA1cmVtIiB0eXBlPSJudW1iZXIiCmlkPSJsZWZ0U3BhY2luZyIgb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBtYi0yIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIHN0eWxlPSJ3aWR0aDogMjAwcHgiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3ctYmFyLXJpZ2h0IG1lLTIiPjwvaT4KUmlnaHQgU3BhY2luZwo8L3NwYW4+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIiBzdHlsZT0iZmxleC1ncm93OiAwOyBmbGV4LWJhc2lzOiA1cmVtIiB0eXBlPSJudW1iZXIiCmlkPSJyaWdodFNwYWNpbmciIG9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgbWItMiI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IiBzdHlsZT0id2lkdGg6IDIwMHB4Ij4KPGkgY2xhc3M9ImJpIGJpLWFycm93cy1hbmdsZS1leHBhbmQgcm90YXRlLTQ1IG1lLTIiPjwvaT4KSW5uZXIgU3BhY2luZwo8L3NwYW4+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIiBzdHlsZT0iZmxleC1ncm93OiAwOyBmbGV4LWJhc2lzOiA1cmVtIiB0eXBlPSJudW1iZXIiCmlkPSJob3J6U3BhY2luZyIgb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBtYi0yIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIHN0eWxlPSJ3aWR0aDogMjAwcHgiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3dzLWFuZ2xlLWV4cGFuZCByb3RhdGUtMTM1IG1lLTIiPjwvaT4KSW5uZXIgU3BhY2luZwo8L3NwYW4+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIiBzdHlsZT0iZmxleC1ncm93OiAwOyBmbGV4LWJhc2lzOiA1cmVtIiB0eXBlPSJudW1iZXIiCmlkPSJ2ZXJ0U3BhY2luZyIgb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJjYXJkIj4KPGgyIGNsYXNzPSJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gY29sbGFwc2VkIiBkYXRhLWJzLXRvZ2dsZT0iY29sbGFwc2UiCmRhdGEtYnMtdGFyZ2V0PSIjbGF5b3V0TWFudWFsIj4KTGF5b3V0IDIKPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSI+CjxpIGNsYXNzPSJiaSBiaS1jaGV2cm9uLXVwIGFycm93Ij48L2k+CjwvYnV0dG9uPgo8L2gyPgo8ZGl2IGNsYXNzPSJjYXJkLWJvZHkgY29sbGFwc2UiIGlkPSJsYXlvdXRNYW51YWwiPgo8bGFiZWwgY2xhc3M9ImZvcm0tY2hlY2sgZm9ybS1zd2l0Y2ggbWItNCI+CjxpbnB1dCBjbGFzcz0iZm9ybS1jaGVjay1pbnB1dCIgdHlwZT0iY2hlY2tib3giIGlkPSJvdmVycmlkZUNvbW1hbmRSZWN0YW5nbGUiCm9uY2hhbmdlPSJvbkxheW91dDJDaGVja2JveENoYW5nZSgnY29tbWFuZCcsIHRoaXMuY2hlY2tlZCkiIC8+CjxzcGFuIGNsYXNzPSJmb3JtLWNoZWNrLWxhYmVsIj5PdmVycmlkZSBWYWx1ZXMgZm9yIENvbW1hbmQgV2luZG93Pzwvc3Bhbj4KPC9sYWJlbD4KPGRpdiBjbGFzcz0icm93IG1iLTQiIGlkPSJjb21tYW5kUmVjdGFuZ2xlQnlWYWx1ZXNCb3giPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBjb2wiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+eDwvc3Bhbj4KPGlucHV0IHR5cGU9Im51bWJlciIgY2xhc3M9ImZvcm0tY29udHJvbCIgaWQ9ImNvbW1hbmRSZWN0YW5nbGVfeCIKb25ibHVyPSJvbkxheW91dDJWYWx1ZUNoYW5nZSgnY29tbWFuZCcsICd4JywgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBjb2wiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+eTwvc3Bhbj4KPGlucHV0IHR5cGU9Im51bWJlciIgY2xhc3M9ImZvcm0tY29udHJvbCIgaWQ9ImNvbW1hbmRSZWN0YW5nbGVfeSIKb25ibHVyPSJvbkxheW91dDJWYWx1ZUNoYW5nZSgnY29tbWFuZCcsICd5JywgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBjb2wiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+PGkgY2xhc3M9ImJpIGJpLWFycm93cyI+PC9pPjwvc3Bhbj4KPGlucHV0IHR5cGU9Im51bWJlciIgY2xhc3M9ImZvcm0tY29udHJvbCIgaWQ9ImNvbW1hbmRSZWN0YW5nbGVfd2lkdGgiCm9uYmx1cj0ib25MYXlvdXQyVmFsdWVDaGFuZ2UoJ2NvbW1hbmQnLCAnd2lkdGgnLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIGNvbCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij48aSBjbGFzcz0iYmkgYmktYXJyb3dzLXZlcnRpY2FsIj48L2k+PC9zcGFuPgo8aW5wdXQgdHlwZT0ibnVtYmVyIiBjbGFzcz0iZm9ybS1jb250cm9sIiBpZD0iY29tbWFuZFJlY3RhbmdsZV9oZWlnaHQiCm9uYmx1cj0ib25MYXlvdXQyVmFsdWVDaGFuZ2UoJ2NvbW1hbmQnLCAnaGVpZ2h0JywgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8L2Rpdj4KPGxhYmVsIGNsYXNzPSJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoIG1iLTQiPgo8aW5wdXQgY2xhc3M9ImZvcm0tY2hlY2staW5wdXQiIHR5cGU9ImNoZWNrYm94IiBpZD0ib3ZlcnJpZGVTdGF0dXNSZWN0YW5nbGUiCm9uY2hhbmdlPSJvbkxheW91dDJDaGVja2JveENoYW5nZSgnc3RhdHVzJywgdGhpcy5jaGVja2VkKSIgLz4KPHNwYW4gY2xhc3M9ImZvcm0tY2hlY2stbGFiZWwiPk92ZXJyaWRlIFZhbHVlcyBmb3IgU3RhdHVzIFdpbmRvdz88L3NwYW4+CjwvbGFiZWw+CjxkaXYgY2xhc3M9InJvdyBtYi00IiBpZD0ic3RhdHVzUmVjdGFuZ2xlQnlWYWx1ZXNCb3giPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBjb2wiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+eDwvc3Bhbj4KPGlucHV0IHR5cGU9Im51bWJlciIgY2xhc3M9ImZvcm0tY29udHJvbCIgaWQ9InN0YXR1c1JlY3RhbmdsZV94IgpvbmJsdXI9Im9uTGF5b3V0MlZhbHVlQ2hhbmdlKCdzdGF0dXMnLCAneCcsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgY29sIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPnk8L3NwYW4+CjxpbnB1dCB0eXBlPSJudW1iZXIiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJzdGF0dXNSZWN0YW5nbGVfeSIKb25ibHVyPSJvbkxheW91dDJWYWx1ZUNoYW5nZSgnc3RhdHVzJywgJ3knLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIGNvbCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij48aSBjbGFzcz0iYmkgYmktYXJyb3dzIj48L2k+PC9zcGFuPgo8aW5wdXQgdHlwZT0ibnVtYmVyIiBjbGFzcz0iZm9ybS1jb250cm9sIiBpZD0ic3RhdHVzUmVjdGFuZ2xlX3dpZHRoIgpvbmJsdXI9Im9uTGF5b3V0MlZhbHVlQ2hhbmdlKCdzdGF0dXMnLCAnd2lkdGgnLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIGNvbCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij48aSBjbGFzcz0iYmkgYmktYXJyb3dzLXZlcnRpY2FsIj48L2k+PC9zcGFuPgo8aW5wdXQgdHlwZT0ibnVtYmVyIiBjbGFzcz0iZm9ybS1jb250cm9sIiBpZD0ic3RhdHVzUmVjdGFuZ2xlX2hlaWdodCIKb25ibHVyPSJvbkxheW91dDJWYWx1ZUNoYW5nZSgnc3RhdHVzJywgJ2hlaWdodCcsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPC9kaXY+CjxsYWJlbCBjbGFzcz0iZm9ybS1jaGVjayBmb3JtLXN3aXRjaCBtYi00Ij4KPGlucHV0IGNsYXNzPSJmb3JtLWNoZWNrLWlucHV0IiB0eXBlPSJjaGVja2JveCIgaWQ9Im92ZXJyaWRlR29sZFJlY3RhbmdsZSIKb25jaGFuZ2U9Im9uTGF5b3V0MkNoZWNrYm94Q2hhbmdlKCdnb2xkJywgdGhpcy5jaGVja2VkKSIgLz4KPHNwYW4gY2xhc3M9ImZvcm0tY2hlY2stbGFiZWwiPk92ZXJyaWRlIFZhbHVlcyBmb3IgR29sZC9HYW1lIEluZm8gV2luZG93Pzwvc3Bhbj4KPC9sYWJlbD4KPGRpdiBjbGFzcz0icm93IiBpZD0iZ29sZFJlY3RhbmdsZUJ5VmFsdWVzQm94Ij4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgY29sIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPng8L3NwYW4+CjxpbnB1dCB0eXBlPSJudW1iZXIiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJnb2xkUmVjdGFuZ2xlX3giCm9uYmx1cj0ib25MYXlvdXQyVmFsdWVDaGFuZ2UoJ2dvbGQnLCAneCcsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgY29sIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPnk8L3NwYW4+CjxpbnB1dCB0eXBlPSJudW1iZXIiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJnb2xkUmVjdGFuZ2xlX3kiCm9uYmx1cj0ib25MYXlvdXQyVmFsdWVDaGFuZ2UoJ2dvbGQnLCAneScsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgY29sIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPjxpIGNsYXNzPSJiaSBiaS1hcnJvd3MiPjwvaT48L3NwYW4+CjxpbnB1dCB0eXBlPSJudW1iZXIiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJnb2xkUmVjdGFuZ2xlX3dpZHRoIgpvbmJsdXI9Im9uTGF5b3V0MlZhbHVlQ2hhbmdlKCdnb2xkJywgJ3dpZHRoJywgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBjb2wiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+PGkgY2xhc3M9ImJpIGJpLWFycm93cy12ZXJ0aWNhbCI+PC9pPjwvc3Bhbj4KPGlucHV0IHR5cGU9Im51bWJlciIgY2xhc3M9ImZvcm0tY29udHJvbCIgaWQ9ImdvbGRSZWN0YW5nbGVfaGVpZ2h0IgpvbmJsdXI9Im9uTGF5b3V0MlZhbHVlQ2hhbmdlKCdnb2xkJywgJ2hlaWdodCcsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KCjxkaXYgY2xhc3M9ImNhcmQiPgo8aDIgY2xhc3M9ImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBjb2xsYXBzZWQiIGRhdGEtYnMtdG9nZ2xlPSJjb2xsYXBzZSIKZGF0YS1icy10YXJnZXQ9IiNzY2VuZSI+Ck1lbnUgU2NlbmUgR2VuZXJhbAo8YnV0dG9uIGNsYXNzPSJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5Ij4KPGkgY2xhc3M9ImJpIGJpLWNoZXZyb24tdXAgYXJyb3ciPjwvaT4KPC9idXR0b24+CjwvaDI+CjxkaXYgY2xhc3M9ImNhcmQtYm9keSBjb2xsYXBzZSIgaWQ9InNjZW5lIj4KCjxkaXYgY2xhc3M9ImQtZmxleCBhbGlnbi1pdGVtcy1lbmQgZ2FwLTQiPgo8ZGl2Pgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPkJhY2tncm91bmQ8L2xhYmVsPgo8c2VsZWN0IGNsYXNzPSJmb3JtLXNlbGVjdCIgaWQ9InNjZW5lQmFja2dyb3VuZFR5cGUiCm9uY2hhbmdlPSJvblNjZW5lQmFja2dyb3VuZFR5cGVDaGFuZ2Uoc2NlbmVCYWNrZ3JvdW5kVHlwZS52YWx1ZSkiPgo8b3B0aW9uIHZhbHVlPSJtYXBTcHJpdGUiPk1hcCBTcHJpdGU8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0iaW1hZ2UiPkltYWdlPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9Im5vbmUiPk5vbmU8L29wdGlvbj4KPC9zZWxlY3Q+CjwvZGl2Pgo8ZGl2Pgo8ZGl2IGlkPSJzY2VuZUJhY2tncm91bmRGaWxlQm94Ij4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9ImZpbGUiIGlkPSJzY2VuZUJhY2tncm91bmRGaWxlIiBhY2NlcHQ9ImltYWdlL3BuZyIKb25jaGFuZ2U9ImNoYW5nZUZpbGUodGhpcy5pZCwgJ2ltZycsIHRoaXMudmFsdWUpIiAvPgo8cCBjbGFzcz0iaW5mbyBtYi0wIj4KRmlsZSBtdXN0IGJlIGxvY2F0ZWQgaW4geW91ciBnYW1lIGRpcmVjdG9yeS9pbWcKPC9wPgo8L2Rpdj4KPC9kaXY+CjwvZGl2PgoKPGRpdiBpZD0ic2NlbmVCYWNrZ3JvdW5kRWZmZWN0c0JveCIgY2xhc3M9Im10LTQiPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPkVmZmVjdHM8L2xhYmVsPgo8c2VsZWN0IGNsYXNzPSJmb3JtLXNlbGVjdCIgaWQ9InNjZW5lQmFja2dyb3VuZEVmZmVjdHMiCm9uY2hhbmdlPSJjaGFuZ2VUZXh0KHRoaXMuaWQsIHRoaXMudmFsdWUpIj4KPG9wdGlvbiB2YWx1ZT0iYmx1cnJlZCI+Qmx1cnJlZDwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJibGFja1doaXRlIj4oTVopIEJsYWNrIFdoaXRlPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9InNlcGlhIj4oTVopIFNlcGlhPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9Im5vbmUiPk5vbmU8L29wdGlvbj4KPC9zZWxlY3Q+Cgo8cCBjbGFzcz0iaW5mbyBtdiBtdC00Ij4KPHNwYW4gY2xhc3M9ImJpIGJpLWluZm8tc3F1YXJlIG1lLTEiPjwvc3Bhbj4KU29tZSBmaWx0ZXJzIG1heSBub3Qgd29yayBpbiBSUEcgTWFrZXIgTVYuPGJyPgpZb3UgbWF5IG5lZWQgdG8gY2xvc2UgYW5kIHJlb3BlbiB0aGUgZ2FtZSBtZW51IHRvIHNlZSBjaGFuZ2VzLgo8L3A+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+Cgo8aDQgY2xhc3M9Im10LXhsIj5QYXJ0eSBTdGF0dXM8L2g0Pgo8ZGl2IGNsYXNzPSJjYXJkIj4KPGgyIGNsYXNzPSJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gY29sbGFwc2VkIiBkYXRhLWJzLXRvZ2dsZT0iY29sbGFwc2UiCmRhdGEtYnMtdGFyZ2V0PSIjYWN0b3JzIj4KQWN0b3JzL1BhcnR5IEdlbmVyYWwKPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSI+CjxpIGNsYXNzPSJiaSBiaS1jaGV2cm9uLXVwIGFycm93Ij48L2k+CjwvYnV0dG9uPgo8L2gyPgo8ZGl2IGNsYXNzPSJjYXJkLWJvZHkgY29sbGFwc2UiIGlkPSJhY3RvcnMiPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBtYi0yIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIHN0eWxlPSJ3aWR0aDogMjAwcHgiPgo8aSBjbGFzcz0iYmkgYmktdHJhbnNwYXJlbmN5IG1lLTIiPjwvaT5PcGFjaXR5Cjwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9Im51bWJlciIgaWQ9InN0YXR1c09wYWNpdHkiCnN0eWxlPSJmbGV4LWdyb3c6IDA7IGZsZXgtYmFzaXM6IDVyZW0iIG9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgbWItMiI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IiBzdHlsZT0id2lkdGg6IDIwMHB4Ij4KPGkgY2xhc3M9ImJpIGJpLXNxdWFyZSBtZS0yIj48L2k+UGFkZGluZwo8L3NwYW4+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIiBzdHlsZT0iZmxleC1ncm93OiAwOyBmbGV4LWJhc2lzOiA1cmVtOyIgdHlwZT0ibnVtYmVyIgppZD0ic3RhdHVzUGFkZGluZyIgb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBtYi0yIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIHN0eWxlPSJ3aWR0aDogMjAwcHgiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3dzLXZlcnRpY2FsIG1lLTIiPjwvaT4KSXRlbSBTcGFjaW5nCjwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9Im51bWJlciIgaWQ9InN0YXR1c1Jvd1NwYWNpbmciCnN0eWxlPSJmbGV4LWdyb3c6IDA7IGZsZXgtYmFzaXM6IDVyZW0iIG9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+cHg8L3NwYW4+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBtYi0yIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIHN0eWxlPSJ3aWR0aDogMjAwcHgiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3dzIG1lLTIiPjwvaT4KSXRlbSBTcGFjaW5nCjwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9Im51bWJlciIgaWQ9InN0YXR1c0NvbHVtblNwYWNpbmciCnN0eWxlPSJmbGV4LWdyb3c6IDA7IGZsZXgtYmFzaXM6IDVyZW0iIG9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+cHg8L3NwYW4+CjwvZGl2Pgo8aHIgLz4KPGRpdiBjbGFzcz0icm93IGFsaWduLWl0ZW1zLXN0YXJ0IG1iLTQiPgo8ZGl2IGNsYXNzPSJjb2wiPgo8bGFiZWwgY2xhc3M9ImZvcm0tY2hlY2sgZm9ybS1zd2l0Y2ggbWItNCIgaWQ9InNob3VsZE92ZXJyaWRlU3RhdHVzV2luZG93Qm94Ij4KPGlucHV0IGNsYXNzPSJmb3JtLWNoZWNrLWlucHV0IiB0eXBlPSJjaGVja2JveCIgaWQ9InNob3VsZE92ZXJyaWRlU3RhdHVzV2luZG93IgpvbmNoYW5nZT0ib25PdmVycmlkZVN0YXR1c1dpbmRvd0NoYW5nZShzaG91bGRPdmVycmlkZVN0YXR1c1dpbmRvdy5jaGVja2VkKSIgLz4KPHNwYW4gY2xhc3M9ImZvcm0tY2hlY2stbGFiZWwiPkluZGl2aWR1YWwgV2luZG93IEZpbGU/PC9zcGFuPgo8L2xhYmVsPgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sIj4KPGRpdiBpZD0ic3RhdHVzV2luZG93RmlsZUJveCI+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIiB0eXBlPSJmaWxlIiBpZD0ic3RhdHVzV2luZG93RmlsZSIgYWNjZXB0PSJpbWFnZS9wbmciCm9uY2hhbmdlPSJjaGFuZ2VGaWxlKHRoaXMuaWQsICdpbWcnLCB0aGlzLnZhbHVlKSIgLz4KPHAgY2xhc3M9ImluZm8gbWItMCI+CkZpbGUgbXVzdCBiZSBsb2NhdGVkIGluIHlvdXIgZ2FtZS9pbWcvc3lzdGVtCjwvcD4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0icm93IGFsaWduLWl0ZW1zLWVuZCBtYi00Ij4KPGRpdiBjbGFzcz0iY29sIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5XaW5kb3cgQmFja2dyb3VuZDwvbGFiZWw+CjxzZWxlY3QgY2xhc3M9ImZvcm0tc2VsZWN0IiBpZD0ic3RhdHVzQmFja2dyb3VuZFR5cGUiCm9uY2hhbmdlPSJvblN0YXR1c0JhY2tncm91bmRUeXBlQ2hhbmdlKHN0YXR1c0JhY2tncm91bmRUeXBlLnZhbHVlKSI+CjxvcHRpb24gdmFsdWU9IndpbmRvdyI+V2luZG93PC9vcHRpb24+CjxvcHRpb24gdmFsdWU9ImRpbW1lZCI+RGltbWVkPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9ImltYWdlIj5JbWFnZTwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJub25lIj5Ob25lPC9vcHRpb24+Cjwvc2VsZWN0Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sIj4KPGRpdiBpZD0ic3RhdHVzQmFja2dyb3VuZEZpbGVCb3giPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0iZmlsZSIgaWQ9InN0YXR1c0JhY2tncm91bmRGaWxlIiBhY2NlcHQ9ImltYWdlL3BuZyIKb25jaGFuZ2U9ImNoYW5nZUZpbGUodGhpcy5pZCwgJ2ltZycsIHRoaXMudmFsdWUpIiAvPgo8cCBjbGFzcz0iaW5mbyBtYi0wIj4KRmlsZSBtdXN0IGJlIGxvY2F0ZWQgaW4geW91ciBnYW1lIGRpcmVjdG9yeS9pbWcKPC9wPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJyb3cgYWxpZ24taXRlbXMtZW5kIG1iLTQiPgo8ZGl2IGNsYXNzPSJjb2wiPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPkl0ZW0gQmFja2dyb3VuZDwvbGFiZWw+CjxzZWxlY3QgY2xhc3M9ImZvcm0tc2VsZWN0IiBpZD0ic3RhdHVzSXRlbUJhY2tncm91bmRUeXBlIgpvbmNoYW5nZT0ib25TdGF0dXNJdGVtQmFja2dyb3VuZFR5cGVDaGFuZ2Uoc3RhdHVzSXRlbUJhY2tncm91bmRUeXBlLnZhbHVlKSI+CjxvcHRpb24gdmFsdWU9ImRpbW1lZCI+RGltbWVkPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9ImltYWdlIj5JbWFnZTwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJub25lIj5Ob25lPC9vcHRpb24+Cjwvc2VsZWN0Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sIj4KPGRpdiBpZD0ic3RhdHVzSXRlbUJhY2tncm91bmRGaWxlQm94Ij4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9ImZpbGUiIGlkPSJzdGF0dXNJdGVtQmFja2dyb3VuZEZpbGUiCmFjY2VwdD0iaW1hZ2UvcG5nIiBvbmNoYW5nZT0iY2hhbmdlRmlsZSh0aGlzLmlkLCAnaW1nJywgdGhpcy52YWx1ZSkiIC8+CjxwIGNsYXNzPSJpbmZvIG1iLTAiPgpGaWxlIG11c3QgYmUgbG9jYXRlZCBpbiB5b3VyIGdhbWUgZGlyZWN0b3J5L2ltZwo8L3A+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9InJvdyBhbGlnbi1pdGVtcy1lbmQgbWItNCI+CjxkaXYgY2xhc3M9ImNvbCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+Q3Vyc29yIEJhY2tncm91bmQ8L2xhYmVsPgo8c2VsZWN0IGNsYXNzPSJmb3JtLXNlbGVjdCIgaWQ9InN0YXR1c0N1cnNvckJhY2tncm91bmRUeXBlIgpvbmNoYW5nZT0ib25TdGF0dXNDdXJzb3JCYWNrZ3JvdW5kVHlwZUNoYW5nZShzdGF0dXNDdXJzb3JCYWNrZ3JvdW5kVHlwZS52YWx1ZSkiPgo8b3B0aW9uIHZhbHVlPSJkZWZhdWx0Ij5EZWZhdWx0PC9vcHRpb24+CjxvcHRpb24gdmFsdWU9ImltYWdlIj5JbWFnZTwvb3B0aW9uPgo8L3NlbGVjdD4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCI+CjxkaXYgaWQ9InN0YXR1c0N1cnNvckJhY2tncm91bmRGaWxlQm94Ij4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9ImZpbGUiIGlkPSJzdGF0dXNDdXJzb3JCYWNrZ3JvdW5kRmlsZSIKYWNjZXB0PSJpbWFnZS9wbmciIG9uY2hhbmdlPSJjaGFuZ2VGaWxlKHRoaXMuaWQsICdpbWcnLCB0aGlzLnZhbHVlKSIgLz4KPHAgY2xhc3M9ImluZm8gbWItMCI+CkZpbGUgbXVzdCBiZSBsb2NhdGVkIGluIHlvdXIgZ2FtZSBkaXJlY3RvcnkvaW1nCjwvcD4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0icm93IGFsaWduLWl0ZW1zLWVuZCBtYi00IiBpZD0ic3RhdHVzQmxpbmtDdXJzb3JCb3giPgo8ZGl2IGNsYXNzPSJjb2wiPgo8bGFiZWwgY2xhc3M9ImZvcm0tY2hlY2sgZm9ybS1zd2l0Y2giPgo8aW5wdXQgY2xhc3M9ImZvcm0tY2hlY2staW5wdXQiIHR5cGU9ImNoZWNrYm94IiBpZD0ic3RhdHVzQmxpbmtDdXJzb3IiCm9uY2hhbmdlPSJjaGFuZ2VCb29sZWFuKHRoaXMuaWQsIHRoaXMuY2hlY2tlZCkiIC8+CjxzcGFuIGNsYXNzPSJmb3JtLWNoZWNrLWxhYmVsIj5CbGluaz88L3NwYW4+CjwvbGFiZWw+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0icm93IGFsaWduLWl0ZW1zLWVuZCBtYi00Ij4KPGRpdiBjbGFzcz0iY29sIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5QZW5kaW5nIEJhY2tncm91bmQgKEZvcm1hdGlvbiBDaGFuZ2UpPC9sYWJlbD4KPHNlbGVjdCBjbGFzcz0iZm9ybS1zZWxlY3QiIGlkPSJzdGF0dXNQZW5kaW5nQmFja2dyb3VuZFR5cGUiCm9uY2hhbmdlPSJvblN0YXR1c1BlbmRpbmdCYWNrZ3JvdW5kVHlwZUNoYW5nZShzdGF0dXNQZW5kaW5nQmFja2dyb3VuZFR5cGUudmFsdWUpIj4KPG9wdGlvbiB2YWx1ZT0iZGVmYXVsdCI+RGVmYXVsdDwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJpbWFnZSI+SW1hZ2U8L29wdGlvbj4KPC9zZWxlY3Q+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPgo8ZGl2IGlkPSJzdGF0dXNQZW5kaW5nQmFja2dyb3VuZEZpbGVCb3giPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0iZmlsZSIgaWQ9InN0YXR1c1BlbmRpbmdCYWNrZ3JvdW5kRmlsZSIKYWNjZXB0PSJpbWFnZS9wbmciIG9uY2hhbmdlPSJjaGFuZ2VGaWxlKHRoaXMuaWQsICdpbWcnLCB0aGlzLnZhbHVlKSIgLz4KPHAgY2xhc3M9ImluZm8gbWItMCI+CkZpbGUgbXVzdCBiZSBsb2NhdGVkIGluIHlvdXIgZ2FtZSBkaXJlY3RvcnkvaW1nCjwvcD4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjwvZGl2PgoKPGRpdiBjbGFzcz0iY2FyZCI+CjxoMiBjbGFzcz0iY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGNvbGxhcHNlZCIgZGF0YS1icy10b2dnbGU9ImNvbGxhcHNlIgpkYXRhLWJzLXRhcmdldD0iI2FjdG9ySW1hZ2VDb2xsYXBzaWJsZSI+CkFjdG9yIFBvcnRyYWl0CjxidXR0b24gY2xhc3M9ImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkiPgo8aSBjbGFzcz0iYmkgYmktY2hldnJvbi11cCBhcnJvdyI+PC9pPgo8L2J1dHRvbj4KPC9oMj4KPGRpdiBjbGFzcz0iY2FyZC1ib2R5IGNvbGxhcHNlIiBpZD0iYWN0b3JJbWFnZUNvbGxhcHNpYmxlIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5JbWFnZTwvbGFiZWw+CjxzZWxlY3QgY2xhc3M9ImZvcm0tc2VsZWN0IG1iLTQiIGlkPSJzdGF0dXNSZW5kZXJUeXBlIgpvbmNoYW5nZT0ib25TdGF0dXNSZW5kZXJUeXBlQ2hhbmdlKHN0YXR1c1JlbmRlclR5cGUudmFsdWUpIj4KPG9wdGlvbiB2YWx1ZT0iZmFjZSI+RmFjZTwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJiYXR0bGVyIj5TViBCYXR0bGVyPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9Im1hcFNwcml0ZSI+TWFwIFNwcml0ZTwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJwb3J0cmFpdCI+Q3VzdG9tIEltYWdlPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9Im5vbmUiPk5vbmU8L29wdGlvbj4KPC9zZWxlY3Q+CjxkaXYgY2xhc3M9Im1iLTQiIGlkPSJwb3J0cmFpdE5vdGV0YWdIaW50Ij4KPHAgY2xhc3M9ImluZm8gbWItNCI+CjxpIGNsYXNzPSJiaSBiaS1pbmZvLXNxdWFyZSBtZS0xIj48L2k+Ck1lbnUgUG9ydHJhaXRzIGFyZSBjb25maWd1cmVkIGluIHRoZSBQbHVnaW4gTWFuYWdlci4KPC9wPgo8YnV0dG9uIGNsYXNzPSJidG4gYnRuLWxpbmsiIGRhdGEtYnMtdGFyZ2V0PSIjcG9ydHJhaXRTY3JpcHRDYWxsc0hpbnQiCmRhdGEtYnMtdG9nZ2xlPSJjb2xsYXBzZSI+CjxpIGNsYXNzPSJiaSBiaS1jaGV2cm9uLWRvd24gbWUtMiI+PC9pPlNob3cgU2NyaXB0IENhbGxzCjwvYnV0dG9uPgo8ZGl2IGNsYXNzPSJjYXJkIGNhcmQtYm9keSBjb2xsYXBzZSIgaWQ9InBvcnRyYWl0U2NyaXB0Q2FsbHNIaW50Ij4KPGRpdiBjbGFzcz0iY3VzdG9tLWNvZGUiPgokZ2FtZUFjdG9ycy5hY3RvcigxKS5zZXRNZW51UG9ydHJhaXQoIlJlaWQiKQo8L2Rpdj4KPHAgY2xhc3M9ImluZm8gbWItNCI+CkltYWdlIG5hbWVkICJSZWlkIiBtdXN0IGJlIGxvY2F0ZWQgaW4geW91ciBnYW1lIGRpcmVjdG9yeS9pbWcvcGljdHVyZXMKPC9wPgo8ZGl2IGNsYXNzPSJjdXN0b20tY29kZSI+CiRnYW1lQWN0b3JzLmFjdG9yKDEpLnJlc2V0TWVudVBvcnRyYWl0KCkKPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBpZD0iYWN0b3JJbWFnZUJveCI+Cgo8ZGl2IGNsYXNzPSJyb3cgbWItNCBnLTIiIHN0eWxlPSJ3aWR0aDogMTByZW0iPgo8ZGl2IGNsYXNzPSJjb2wtNCI+CjxidXR0b24gY2xhc3M9ImJ0biB3LTEwMCIgaWQ9ImFjdG9ySW1hZ2VQb3NpdGlvblRvcExlZnQiCm9uY2xpY2s9ImNoYW5nZTlEaXIodGhpcy5pZCkiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3ctdXAtbGVmdCI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbC00Ij4KPGJ1dHRvbiBjbGFzcz0iYnRuIHctMTAwIiBpZD0iYWN0b3JJbWFnZVBvc2l0aW9uVG9wQ2VudGVyIgpvbmNsaWNrPSJjaGFuZ2U5RGlyKHRoaXMuaWQpIj4KPGkgY2xhc3M9ImJpIGJpLWFycm93LXVwIj48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sLTQiPgo8YnV0dG9uIGNsYXNzPSJidG4gdy0xMDAiIGlkPSJhY3RvckltYWdlUG9zaXRpb25Ub3BSaWdodCIKb25jbGljaz0iY2hhbmdlOURpcih0aGlzLmlkKSI+CjxpIGNsYXNzPSJiaSBiaS1hcnJvdy11cC1yaWdodCI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbC00Ij4KPGJ1dHRvbiBjbGFzcz0iYnRuIHctMTAwIiBpZD0iYWN0b3JJbWFnZVBvc2l0aW9uTWlkZGxlTGVmdCIKb25jbGljaz0iY2hhbmdlOURpcih0aGlzLmlkKSI+CjxpIGNsYXNzPSJiaSBiaS1hcnJvdy1sZWZ0Ij48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sLTQiPgo8YnV0dG9uIGNsYXNzPSJidG4gdy0xMDAiIGlkPSJhY3RvckltYWdlUG9zaXRpb25NaWRkbGVDZW50ZXIiCm9uY2xpY2s9ImNoYW5nZTlEaXIodGhpcy5pZCkiPgo8aSBjbGFzcz0iYmkgYmktZnVsbHNjcmVlbiI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbC00Ij4KPGJ1dHRvbiBjbGFzcz0iYnRuIHctMTAwIiBpZD0iYWN0b3JJbWFnZVBvc2l0aW9uTWlkZGxlUmlnaHQiCm9uY2xpY2s9ImNoYW5nZTlEaXIodGhpcy5pZCkiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3ctcmlnaHQiPjwvaT4KPC9idXR0b24+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wtNCI+CjxidXR0b24gY2xhc3M9ImJ0biB3LTEwMCIgaWQ9ImFjdG9ySW1hZ2VQb3NpdGlvbkJvdHRvbUxlZnQiCm9uY2xpY2s9ImNoYW5nZTlEaXIodGhpcy5pZCkiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3ctZG93bi1sZWZ0Ij48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sLTQiPgo8YnV0dG9uIGNsYXNzPSJidG4gdy0xMDAiIGlkPSJhY3RvckltYWdlUG9zaXRpb25Cb3R0b21DZW50ZXIiCm9uY2xpY2s9ImNoYW5nZTlEaXIodGhpcy5pZCkiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3ctZG93biI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbC00Ij4KPGJ1dHRvbiBjbGFzcz0iYnRuIHctMTAwIiBpZD0iYWN0b3JJbWFnZVBvc2l0aW9uQm90dG9tUmlnaHQiCm9uY2xpY2s9ImNoYW5nZTlEaXIodGhpcy5pZCkiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3ctZG93bi1yaWdodCI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjwvZGl2PgoKPGRpdiBjbGFzcz0iZm9ybS1ncm91cCByb3cgbWItNCI+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIGNvbCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij54PC9zcGFuPgo8aW5wdXQgdHlwZT0ibnVtYmVyIiBjbGFzcz0iZm9ybS1jb250cm9sIiBpZD0iYWN0b3JJbWFnZU9mZnNldFgiCm9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+cHg8L3NwYW4+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBjb2wiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+eTwvc3Bhbj4KPGlucHV0IHR5cGU9Im51bWJlciIgY2xhc3M9ImZvcm0tY29udHJvbCIgaWQ9ImFjdG9ySW1hZ2VPZmZzZXRZIgpvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPnB4PC9zcGFuPgo8L2Rpdj4KPC9kaXY+Cgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPkNyb3A8L2xhYmVsPgo8ZGl2IGNsYXNzPSJmb3JtLWdyb3VwIHJvdyBtYi00Ij4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgY29sIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPjxpIGNsYXNzPSJiaSBiaS1hcnJvd3MiPjwvaT48L3NwYW4+CjxpbnB1dCB0eXBlPSJudW1iZXIiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJhY3RvckltYWdlQ3JvcFgiCm9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+cHg8L3NwYW4+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBjb2wiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+PGkgY2xhc3M9ImJpIGJpLWFycm93cy12ZXJ0aWNhbCI+PC9pPjwvc3Bhbj4KPGlucHV0IHR5cGU9Im51bWJlciIgY2xhc3M9ImZvcm0tY29udHJvbCIgaWQ9ImFjdG9ySW1hZ2VDcm9wWSIKb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij5weDwvc3Bhbj4KPC9kaXY+CjwvZGl2Pgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPlNjYWxlPC9sYWJlbD4KPGRpdiBjbGFzcz0icm93Ij4KPGRpdiBjbGFzcz0iY29sIj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+PGkgY2xhc3M9ImJpIGJpLWFycm93cyI+PC9pPjwvc3Bhbj4KPGlucHV0IHR5cGU9Im51bWJlciIgY2xhc3M9ImZvcm0tY29udHJvbCIgaWQ9ImFjdG9ySW1hZ2VTY2FsZSIKb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij4lPC9zcGFuPgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCI+PC9kaXY+CjwvZGl2PgoKPC9kaXY+Cgo8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJjYXJkIj4KPGgyIGNsYXNzPSJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gY29sbGFwc2VkIiBkYXRhLWJzLXRvZ2dsZT0iY29sbGFwc2UiCmRhdGEtYnMtdGFyZ2V0PSIjYWN0b3JTaGFkb3dCb3hDb2xsYXBzaWJsZSI+CkFjdG9yIFNoYWRvdyBCb3gKPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSI+CjxpIGNsYXNzPSJiaSBiaS1jaGV2cm9uLXVwIGFycm93Ij48L2k+CjwvYnV0dG9uPgo8L2gyPgo8ZGl2IGNsYXNzPSJjYXJkLWJvZHkgY29sbGFwc2UiIGlkPSJhY3RvclNoYWRvd0JveENvbGxhcHNpYmxlIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoIG1iLTQiPgo8aW5wdXQgY2xhc3M9ImZvcm0tY2hlY2staW5wdXQiIHR5cGU9ImNoZWNrYm94IiBpZD0ic2hvd1NoYWRvd0JveCIKb25jaGFuZ2U9Im9uU2hvd1NoYWRvd0JveENoYW5nZShzaG93U2hhZG93Qm94LmNoZWNrZWQpIiAvPgo8c3BhbiBjbGFzcz0iZm9ybS1jaGVjay1sYWJlbCI+U2hvdz88L3NwYW4+CjwvbGFiZWw+CjxkaXYgaWQ9ImFjdG9yU2hhZG93Qm94Qm94Ij4KPGRpdiBjbGFzcz0icm93Ij4KPGxhYmVsIGNsYXNzPSJjb2wgZm9ybS1sYWJlbCI+UG9zaXRpb248L2xhYmVsPgo8ZGl2IGNsYXNzPSJjb2wiPjwvZGl2Pgo8bGFiZWwgY2xhc3M9ImNvbCBmb3JtLWxhYmVsIj5XaWR0aCAmIEhlaWdodDwvbGFiZWw+CjxkaXYgY2xhc3M9ImNvbCI+PC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJyb3cgbWItNCI+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIGNvbCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij54PC9zcGFuPgo8aW5wdXQgdHlwZT0ibnVtYmVyIiBjbGFzcz0iZm9ybS1jb250cm9sIiBpZD0ic2hhZG93Qm94WCIgcGxhY2Vob2xkZXI9IjAiCm9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgY29sIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPnk8L3NwYW4+CjxpbnB1dCB0eXBlPSJudW1iZXIiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJzaGFkb3dCb3hZIiBwbGFjZWhvbGRlcj0iMCIKb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBjb2wiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+PGkgY2xhc3M9ImJpIGJpLWFycm93cyI+PC9pPjwvc3Bhbj4KPGlucHV0IHR5cGU9Im51bWJlciIgY2xhc3M9ImZvcm0tY29udHJvbCIgaWQ9InNoYWRvd0JveFdpZHRoIgpvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIGNvbCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij48aSBjbGFzcz0iYmkgYmktYXJyb3dzLXZlcnRpY2FsIj48L2k+PC9zcGFuPgo8aW5wdXQgdHlwZT0ibnVtYmVyIiBjbGFzcz0iZm9ybS1jb250cm9sIiBpZD0ic2hhZG93Qm94SGVpZ2h0IgpvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBtYi0yIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPjxpIGNsYXNzPSJiaSBiaS1wYWludC1idWNrZXQgbWUtMSI+PC9pPkNvbG9yPC9zcGFuPgo8aW5wdXQgdHlwZT0iY29sb3IiIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IGZvcm0tY29udHJvbC1jb2xvciBtZS0yIiBpZD0ic2hhZG93Qm94Q29sb3IiCm9uY2hhbmdlPSJjaGFuZ2VDb2xvcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIG1iLTQiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+PGkgY2xhc3M9ImJpIGJpLXRyYW5zcGFyZW5jeSBtZS0xIj48L2k+T3BhY2l0eTwvc3Bhbj4KPGlucHV0IHR5cGU9Im51bWJlciIgY2xhc3M9ImZvcm0tY29udHJvbCIgbWluPSIwIiBtYXg9IjI1NSIKc3R5bGU9ImZsZXgtZ3JvdzogMDsgZmxleC1iYXNpczogNXJlbSIgaWQ9InNoYWRvd0JveE9wYWNpdHkiCm9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPGRpdiBjbGFzcz0icm93Ij4KPGRpdiBjbGFzcz0iY29sIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5HcmFkaWVudCBEaXJlY3Rpb248L2xhYmVsPgo8ZGl2IGNsYXNzPSJkLWZsZXgiPgo8YnV0dG9uIGNsYXNzPSJidG4gbWUtMiIgaWQ9InNoYWRvd0JveEdyYWRpZW50VG9wIgpvbmNsaWNrPSJvblNoYWRvd0JveEdyYWRpZW50Q2hhbmdlKCd0b3AnKSI+CjxzcGFuIGNsYXNzPSJiaSBiaS1jaGV2cm9uLXVwIj48L3NwYW4+CjwvYnV0dG9uPgo8YnV0dG9uIGNsYXNzPSJidG4gbWUtMiIgaWQ9InNoYWRvd0JveEdyYWRpZW50Qm90dG9tIgpvbmNsaWNrPSJvblNoYWRvd0JveEdyYWRpZW50Q2hhbmdlKCdib3R0b20nKSI+CjxzcGFuIGNsYXNzPSJiaSBiaS1jaGV2cm9uLWRvd24iPjwvc3Bhbj4KPC9idXR0b24+CjxidXR0b24gY2xhc3M9ImJ0biBtZS0yIiBpZD0ic2hhZG93Qm94R3JhZGllbnRMZWZ0IgpvbmNsaWNrPSJvblNoYWRvd0JveEdyYWRpZW50Q2hhbmdlKCdsZWZ0JykiPgo8c3BhbiBjbGFzcz0iYmkgYmktY2hldnJvbi1sZWZ0Ij48L3NwYW4+CjwvYnV0dG9uPgo8YnV0dG9uIGNsYXNzPSJidG4gbWUtMiIgaWQ9InNoYWRvd0JveEdyYWRpZW50UmlnaHQiCm9uY2xpY2s9Im9uU2hhZG93Qm94R3JhZGllbnRDaGFuZ2UoJ3JpZ2h0JykiPgo8c3BhbiBjbGFzcz0iYmkgYmktY2hldnJvbi1yaWdodCI+PC9zcGFuPgo8L2J1dHRvbj4KPGJ1dHRvbiBjbGFzcz0iYnRuIG1lLTIiIGlkPSJzaGFkb3dCb3hHcmFkaWVudE5vbmUiCm9uY2xpY2s9Im9uU2hhZG93Qm94R3JhZGllbnRDaGFuZ2UoJ25vbmUnKSI+CjxzcGFuIGNsYXNzPSJiaSBiaS14LWxnIj48L3NwYW4+CjwvYnV0dG9uPgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCIgaWQ9InNoYWRvd0JveEdyYWRpZW50UG93ZXJCb3giPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPkdyYWRpZW50IFBvd2VyPC9sYWJlbD4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAiPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0ibnVtYmVyIiBpZD0ic2hhZG93Qm94R3JhZGllbnRQb3dlciIKcGxhY2Vob2xkZXI9IjEwIiBtaW49IjAiIG1heD0iMTAwIgpvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPiU8L3NwYW4+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJjYXJkIj4KPGgyIGNsYXNzPSJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gY29sbGFwc2VkIiBkYXRhLWJzLXRvZ2dsZT0iY29sbGFwc2UiCmRhdGEtYnMtdGFyZ2V0PSIjYWN0b3JOYW1lc0NvbGxhcHNpYmxlIj4KQWN0b3IgTmFtZSAmIENsYXNzCjxidXR0b24gY2xhc3M9ImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkiPgo8aSBjbGFzcz0iYmkgYmktY2hldnJvbi11cCBhcnJvdyI+PC9pPgo8L2J1dHRvbj4KPC9oMj4KPGRpdiBjbGFzcz0iY2FyZC1ib2R5IGNvbGxhcHNlIiBpZD0iYWN0b3JOYW1lc0NvbGxhcHNpYmxlIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5OYW1lPC9sYWJlbD4KPGxhYmVsIGNsYXNzPSJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoIG1iLTQiPgo8aW5wdXQgY2xhc3M9ImZvcm0tY2hlY2staW5wdXQiIHR5cGU9ImNoZWNrYm94IiBpZD0ic2hvdWxkU2hvd05hbWUiCm9uY2hhbmdlPSJvblNob3dOYW1lQ2hhbmdlKHNob3VsZFNob3dOYW1lLmNoZWNrZWQpIiAvPgo8c3BhbiBjbGFzcz0iZm9ybS1jaGVjay1sYWJlbCI+U2hvdz88L3NwYW4+CjwvbGFiZWw+CjxkaXYgaWQ9ImFjdG9yTmFtZUJveCI+CjxkaXYgY2xhc3M9InJvdyBtYi00Ij4KPGRpdiBjbGFzcz0iY29sIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5Ib3Jpem9udGFsIEFsaWduPC9sYWJlbD4KPGRpdiBjbGFzcz0iZm9ybS1yb3ciPgo8ZGl2IGNsYXNzPSJidG4tZ3JvdXAgYnRuLWdyb3VwLWxnIj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJuYW1lSG9yekFsaWduTGVmdCIKb25jbGljaz0ib25OYW1lSG9yekFsaWduKCdsZWZ0JykiPgo8aSBjbGFzcz0iYmkgYmktYWxpZ24tc3RhcnQiPjwvaT4KPC9idXR0b24+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0ibmFtZUhvcnpBbGlnbkNlbnRlciIKb25jbGljaz0ib25OYW1lSG9yekFsaWduKCdjZW50ZXInKSI+CjxpIGNsYXNzPSJiaSBiaS1hbGlnbi1jZW50ZXIiPjwvaT4KPC9idXR0b24+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0ibmFtZUhvcnpBbGlnblJpZ2h0IgpvbmNsaWNrPSJvbk5hbWVIb3J6QWxpZ24oJ3JpZ2h0JykiPgo8aSBjbGFzcz0iYmkgYmktYWxpZ24tZW5kIj48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPlZlcnRpY2FsIEFsaWduPC9sYWJlbD4KPGRpdiBjbGFzcz0iZm9ybS1yb3ciPgo8ZGl2IGNsYXNzPSJidG4tZ3JvdXAgYnRuLWdyb3VwLWxnIj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJuYW1lVmVydEFsaWduVG9wIgpvbmNsaWNrPSJvbk5hbWVWZXJ0QWxpZ24oJ3RvcCcpIj4KPGkgY2xhc3M9ImJpIGJpLWFsaWduLXRvcCI+PC9pPgo8L2J1dHRvbj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJuYW1lVmVydEFsaWduTWlkZGxlIgpvbmNsaWNrPSJvbk5hbWVWZXJ0QWxpZ24oJ21pZGRsZScpIj4KPGkgY2xhc3M9ImJpIGJpLWFsaWduLW1pZGRsZSI+PC9pPgo8L2J1dHRvbj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJuYW1lVmVydEFsaWduQm90dG9tIgpvbmNsaWNrPSJvbk5hbWVWZXJ0QWxpZ24oJ2JvdHRvbScpIj4KPGkgY2xhc3M9ImJpIGJpLWFsaWduLWJvdHRvbSI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImZvcm0tZ3JvdXAgcm93IG1iLTQiPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBjb2wiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+eDwvc3Bhbj4KPGlucHV0IHR5cGU9Im51bWJlciIgY2xhc3M9ImZvcm0tY29udHJvbCIgaWQ9Im5hbWVYIgpvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIGNvbCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij55PC9zcGFuPgo8aW5wdXQgdHlwZT0ibnVtYmVyIiBjbGFzcz0iZm9ybS1jb250cm9sIiBpZD0ibmFtZVkiCm9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgY29sIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPjxpIGNsYXNzPSJiaSBiaS1hcnJvd3MiPjwvaT48L3NwYW4+CjxpbnB1dCB0eXBlPSJudW1iZXIiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJuYW1lV2lkdGgiCm9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sIj48L2Rpdj4KPC9kaXY+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+VGV4dCBBbGlnbjwvbGFiZWw+CjxkaXYgY2xhc3M9Im1iLTQiPgo8ZGl2IGNsYXNzPSJidG4tZ3JvdXAiPgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biIgaWQ9Im5hbWVUZXh0QWxpZ25MZWZ0IgpvbmNsaWNrPSJvbk5hbWVUZXh0QWxpZ25DaGFuZ2UoJ2xlZnQnKSI+CjxpIGNsYXNzPSJiaSBiaS10ZXh0LWxlZnQiPjwvaT4gTGVmdAo8L2J1dHRvbj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJuYW1lVGV4dEFsaWduQ2VudGVyIgpvbmNsaWNrPSJvbk5hbWVUZXh0QWxpZ25DaGFuZ2UoJ2NlbnRlcicpIj4KPGkgY2xhc3M9ImJpIGJpLXRleHQtY2VudGVyIj48L2k+IENlbnRlcgo8L2J1dHRvbj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJuYW1lVGV4dEFsaWduUmlnaHQiCm9uY2xpY2s9Im9uTmFtZVRleHRBbGlnbkNoYW5nZSgncmlnaHQnKSI+CjxpIGNsYXNzPSJiaSBiaS10ZXh0LXJpZ2h0Ij48L2k+IFJpZ2h0CjwvYnV0dG9uPgo8L2Rpdj4KPC9kaXY+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+Rm9udCBTaXplPC9sYWJlbD4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgbWItNCIgc3R5bGU9IndpZHRoOiAyMDBweDsiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+PGkgY2xhc3M9ImJpIGJpLWZvbnRzIj48L2k+PC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0ibnVtYmVyIiBpZD0ibmFtZUZvbnRTaXplIgpvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+VGV4dCBDb2xvcjwvbGFiZWw+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIG1iLTQiIHN0eWxlPSJ3aWR0aDogMTAwcHgiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCIgaWQ9Im5hbWVUZXh0Q29sb3JTcGFuIiBzdHlsZT0iCmZvbnQtc2l6ZTogbGFyZ2VyOwp0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogNHB4OwogICI+CkEKPC9zcGFuPgo8c2VsZWN0IGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IGZvcm0tc2VsZWN0IG15LWNvbG9yLXBpY2tlciIgaWQ9Im5hbWVUZXh0Q29sb3IiCm9uY2hhbmdlPSJvbk5hbWVUZXh0Q29sb3JDaGFuZ2UobmFtZVRleHRDb2xvci52YWx1ZSkiPjwvc2VsZWN0Pgo8L2Rpdj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5CYWNrZ3JvdW5kPC9sYWJlbD4KPHNlbGVjdCBjbGFzcz0iZm9ybS1zZWxlY3QiIGlkPSJuYW1lQmFja2dyb3VuZFR5cGUiCm9uY2hhbmdlPSJjaGFuZ2VUZXh0KHRoaXMuaWQsIHRoaXMudmFsdWUpIj4KPG9wdGlvbiB2YWx1ZT0iZ3JhZGllbnQiIHNlbGVjdGVkPkdyYWRpZW50PC9vcHRpb24+CjxvcHRpb24gdmFsdWU9Im5vbmUiPk5vbmU8L29wdGlvbj4KPC9zZWxlY3Q+CjwvZGl2Pgo8aHIgLz4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5DbGFzczwvbGFiZWw+CjxsYWJlbCBjbGFzcz0iZm9ybS1jaGVjayBmb3JtLXN3aXRjaCBtYi00Ij4KPGlucHV0IGNsYXNzPSJmb3JtLWNoZWNrLWlucHV0IiB0eXBlPSJjaGVja2JveCIgaWQ9InNob3VsZFNob3dDbGFzcyIKb25jaGFuZ2U9Im9uU2hvd0NsYXNzQ2hhbmdlKHNob3VsZFNob3dDbGFzcy5jaGVja2VkKSIgLz4KPHNwYW4gY2xhc3M9ImZvcm0tY2hlY2stbGFiZWwiPlNob3c/PC9zcGFuPgo8L2xhYmVsPgo8ZGl2IGlkPSJhY3RvckNsYXNzQm94Ij4KPGRpdiBjbGFzcz0icm93IG1iLTQiPgo8ZGl2IGNsYXNzPSJjb2wiPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPkhvcml6b250YWwgQWxpZ248L2xhYmVsPgo8ZGl2IGNsYXNzPSJmb3JtLXJvdyI+CjxkaXYgY2xhc3M9ImJ0bi1ncm91cCBidG4tZ3JvdXAtbGciPgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biIgaWQ9ImNsYXNzSG9yekFsaWduTGVmdCIKb25jbGljaz0ib25DbGFzc0hvcnpBbGlnbignbGVmdCcpIj4KPGkgY2xhc3M9ImJpIGJpLWFsaWduLXN0YXJ0Ij48L2k+CjwvYnV0dG9uPgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biIgaWQ9ImNsYXNzSG9yekFsaWduQ2VudGVyIgpvbmNsaWNrPSJvbkNsYXNzSG9yekFsaWduKCdjZW50ZXInKSI+CjxpIGNsYXNzPSJiaSBiaS1hbGlnbi1jZW50ZXIiPjwvaT4KPC9idXR0b24+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0iY2xhc3NIb3J6QWxpZ25SaWdodCIKb25jbGljaz0ib25DbGFzc0hvcnpBbGlnbigncmlnaHQnKSI+CjxpIGNsYXNzPSJiaSBiaS1hbGlnbi1lbmQiPjwvaT4KPC9idXR0b24+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+VmVydGljYWwgQWxpZ248L2xhYmVsPgo8ZGl2IGNsYXNzPSJmb3JtLXJvdyI+CjxkaXYgY2xhc3M9ImJ0bi1ncm91cCBidG4tZ3JvdXAtbGciPgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biIgaWQ9ImNsYXNzVmVydEFsaWduVG9wIgpvbmNsaWNrPSJvbkNsYXNzVmVydEFsaWduKCd0b3AnKSI+CjxpIGNsYXNzPSJiaSBiaS1hbGlnbi10b3AiPjwvaT4KPC9idXR0b24+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0iY2xhc3NWZXJ0QWxpZ25NaWRkbGUiCm9uY2xpY2s9Im9uQ2xhc3NWZXJ0QWxpZ24oJ21pZGRsZScpIj4KPGkgY2xhc3M9ImJpIGJpLWFsaWduLW1pZGRsZSI+PC9pPgo8L2J1dHRvbj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJjbGFzc1ZlcnRBbGlnbkJvdHRvbSIKb25jbGljaz0ib25DbGFzc1ZlcnRBbGlnbignYm90dG9tJykiPgo8aSBjbGFzcz0iYmkgYmktYWxpZ24tYm90dG9tIj48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iZm9ybS1ncm91cCByb3cgbWItNCI+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIGNvbCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij54PC9zcGFuPgo8aW5wdXQgdHlwZT0ibnVtYmVyIiBjbGFzcz0iZm9ybS1jb250cm9sIiBpZD0iY2xhc3NYIgpvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIGNvbCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij55PC9zcGFuPgo8aW5wdXQgdHlwZT0ibnVtYmVyIiBjbGFzcz0iZm9ybS1jb250cm9sIiBpZD0iY2xhc3NZIgpvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIGNvbCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij48aSBjbGFzcz0iYmkgYmktYXJyb3dzIj48L2k+PC9zcGFuPgo8aW5wdXQgdHlwZT0ibnVtYmVyIiBjbGFzcz0iZm9ybS1jb250cm9sIiBpZD0iY2xhc3NXaWR0aCIKb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPjwvZGl2Pgo8L2Rpdj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5UZXh0IEFsaWduPC9sYWJlbD4KPGRpdiBjbGFzcz0ibWItNCI+CjxkaXYgY2xhc3M9ImJ0bi1ncm91cCI+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0iY2xhc3NUZXh0QWxpZ25MZWZ0IgpvbmNsaWNrPSJvbkNsYXNzVGV4dEFsaWduQ2hhbmdlKCdsZWZ0JykiPgo8aSBjbGFzcz0iYmkgYmktdGV4dC1sZWZ0Ij48L2k+IExlZnQKPC9idXR0b24+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0iY2xhc3NUZXh0QWxpZ25DZW50ZXIiCm9uY2xpY2s9Im9uQ2xhc3NUZXh0QWxpZ25DaGFuZ2UoJ2NlbnRlcicpIj4KPGkgY2xhc3M9ImJpIGJpLXRleHQtY2VudGVyIj48L2k+IENlbnRlcgo8L2J1dHRvbj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJjbGFzc1RleHRBbGlnblJpZ2h0IgpvbmNsaWNrPSJvbkNsYXNzVGV4dEFsaWduQ2hhbmdlKCdyaWdodCcpIj4KPGkgY2xhc3M9ImJpIGJpLXRleHQtcmlnaHQiPjwvaT4gUmlnaHQKPC9idXR0b24+CjwvZGl2Pgo8L2Rpdj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5Gb250IFNpemU8L2xhYmVsPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBtYi00IiBzdHlsZT0id2lkdGg6IDIwMHB4OyI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij48aSBjbGFzcz0iYmkgYmktZm9udHMiPjwvaT48L3NwYW4+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIiB0eXBlPSJudW1iZXIiIGlkPSJjbGFzc0ZvbnRTaXplIgpvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+VGV4dCBDb2xvcjwvbGFiZWw+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIG1iLTQiIHN0eWxlPSJ3aWR0aDogMTAwcHgiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCIgaWQ9ImNsYXNzVGV4dENvbG9yU3BhbiIgc3R5bGU9Igpmb250LXNpemU6IGxhcmdlcjsKdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7CnRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDRweDsKICAiPgpBCjwvc3Bhbj4KPHNlbGVjdCBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCBmb3JtLXNlbGVjdCBteS1jb2xvci1waWNrZXIiIGlkPSJjbGFzc1RleHRDb2xvciIKb25jaGFuZ2U9Im9uQ2xhc3NUZXh0Q29sb3JDaGFuZ2UoY2xhc3NUZXh0Q29sb3IudmFsdWUpIj48L3NlbGVjdD4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJjYXJkIj4KPGgyIGNsYXNzPSJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gY29sbGFwc2VkIiBkYXRhLWJzLXRvZ2dsZT0iY29sbGFwc2UiCmRhdGEtYnMtdGFyZ2V0PSIjYWN0b3JMZXZlbENvbGxhcHNpYmxlIj4KQWN0b3IgTGV2ZWwgJiBFeHAKPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSI+CjxpIGNsYXNzPSJiaSBiaS1jaGV2cm9uLXVwIGFycm93Ij48L2k+CjwvYnV0dG9uPgo8L2gyPgo8ZGl2IGNsYXNzPSJjYXJkLWJvZHkgY29sbGFwc2UiIGlkPSJhY3RvckxldmVsQ29sbGFwc2libGUiPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPk1vZGU8L2xhYmVsPgo8c2VsZWN0IGNsYXNzPSJmb3JtLXNlbGVjdCBtYi00IiBpZD0ic2hvd0xldmVsTW9kZSIKb25jaGFuZ2U9Im9uU2hvd0xldmVsTW9kZUNoYW5nZShzaG93TGV2ZWxNb2RlLnZhbHVlKSI+CjxvcHRpb24gdmFsdWU9ImdhdWdlIj5HYXVnZTwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJ0ZXh0Ij5UZXh0PC9vcHRpb24+CjxvcHRpb24gdmFsdWU9Im5vbmUiPkhpZGU8L29wdGlvbj4KPC9zZWxlY3Q+CjxkaXYgaWQ9ImxldmVsUG9zaXRpb25Cb3giPgo8ZGl2IGNsYXNzPSJyb3cgbWItNCI+CjxkaXYgY2xhc3M9ImNvbCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+SG9yaXpvbnRhbCBBbGlnbjwvbGFiZWw+CjxkaXYgY2xhc3M9ImZvcm0tcm93Ij4KPGRpdiBjbGFzcz0iYnRuLWdyb3VwIGJ0bi1ncm91cC1sZyI+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0ibGV2ZWxJbmZvSG9yekFsaWduTGVmdCIKb25jbGljaz0ib25MZXZlbEluZm9Ib3J6QWxpZ24oJ2xlZnQnKSI+CjxpIGNsYXNzPSJiaSBiaS1hbGlnbi1zdGFydCI+PC9pPgo8L2J1dHRvbj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJsZXZlbEluZm9Ib3J6QWxpZ25DZW50ZXIiCm9uY2xpY2s9Im9uTGV2ZWxJbmZvSG9yekFsaWduKCdjZW50ZXInKSI+CjxpIGNsYXNzPSJiaSBiaS1hbGlnbi1jZW50ZXIiPjwvaT4KPC9idXR0b24+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0ibGV2ZWxJbmZvSG9yekFsaWduUmlnaHQiCm9uY2xpY2s9Im9uTGV2ZWxJbmZvSG9yekFsaWduKCdyaWdodCcpIj4KPGkgY2xhc3M9ImJpIGJpLWFsaWduLWVuZCI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5WZXJ0aWNhbCBBbGlnbjwvbGFiZWw+CjxkaXYgY2xhc3M9ImZvcm0tcm93Ij4KPGRpdiBjbGFzcz0iYnRuLWdyb3VwIGJ0bi1ncm91cC1sZyI+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0ibGV2ZWxJbmZvVmVydEFsaWduVG9wIgpvbmNsaWNrPSJvbkxldmVsSW5mb1ZlcnRBbGlnbigndG9wJykiPgo8aSBjbGFzcz0iYmkgYmktYWxpZ24tdG9wIj48L2k+CjwvYnV0dG9uPgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biIgaWQ9ImxldmVsSW5mb1ZlcnRBbGlnbk1pZGRsZSIKb25jbGljaz0ib25MZXZlbEluZm9WZXJ0QWxpZ24oJ21pZGRsZScpIj4KPGkgY2xhc3M9ImJpIGJpLWFsaWduLW1pZGRsZSI+PC9pPgo8L2J1dHRvbj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJsZXZlbEluZm9WZXJ0QWxpZ25Cb3R0b20iCm9uY2xpY2s9Im9uTGV2ZWxJbmZvVmVydEFsaWduKCdib3R0b20nKSI+CjxpIGNsYXNzPSJiaSBiaS1hbGlnbi1ib3R0b20iPjwvaT4KPC9idXR0b24+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJmb3JtLWdyb3VwIHJvdyBtYi00Ij4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgY29sIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPng8L3NwYW4+CjxpbnB1dCB0eXBlPSJudW1iZXIiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJsZXZlbFgiCm9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgY29sIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPnk8L3NwYW4+CjxpbnB1dCB0eXBlPSJudW1iZXIiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJsZXZlbFkiCm9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sIGlucHV0LWdyb3VwIiBpZD0ibGV2ZWxHYXBCb3giPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+PGkgY2xhc3M9ImJpIGJpLWRpc3RyaWJ1dGUtaG9yaXpvbnRhbCI+PC9pPjwvc3Bhbj4KPGlucHV0IHR5cGU9Im51bWJlciIgY2xhc3M9ImZvcm0tY29udHJvbCIgaWQ9ImxldmVsR2FwIgpvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCIgaWQ9ImxldmVsRW1wdHlCb3giPjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wgaW5wdXQtZ3JvdXAiIGlkPSJleHBHYXVnZVdpZHRoQm94Ij4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPjxpIGNsYXNzPSJiaSBiaS1hcnJvd3MiPjwvaT48L3NwYW4+CjxpbnB1dCB0eXBlPSJudW1iZXIiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJleHBHYXVnZVdpZHRoIgpvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCIgaWQ9ImV4cEdhdWdlSGVpZ2h0Qm94Ij4KPGRpdiBjbGFzcz0iY29sIGlucHV0LWdyb3VwIG16Ij4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPjxpIGNsYXNzPSJiaSBiaS1hcnJvd3MtdmVydGljYWwiPjwvaT48L3NwYW4+CjxpbnB1dCB0eXBlPSJudW1iZXIiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJleHBHYXVnZUhlaWdodCIKb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGlkPSJsZXZlbEFzVGV4dEJveCI+CjxkaXYgY2xhc3M9ImQtZmxleCBhbGlnbi1pdGVtcy1lbmQgbWItNCI+CjxkaXYgY2xhc3M9ImQtZmxleCBmbGV4LWNvbHVtbiBtZS00Ij4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5Gb250IFNpemU8L2xhYmVsPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCIgc3R5bGU9IndpZHRoOiAyMDBweDsiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+PGkgY2xhc3M9ImJpIGJpLWZvbnRzIj48L2k+PC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0ibnVtYmVyIiBpZD0ibGV2ZWxGb250U2l6ZSIKb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iZC1mbGV4IGZsZXgtY29sdW1uIG1lLTQiPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPlRleHQgQ29sb3JzPC9sYWJlbD4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCIgaWQ9ImxldmVsVGV4dENvbG9yMVNwYW4iIHN0eWxlPSIKZm9udC1zaXplOiBsYXJnZXI7CnRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOwp0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiA0cHg7CiAgIj4KQQo8L3NwYW4+CjxzZWxlY3QgY2xhc3M9ImlucHV0LWdyb3VwLXRleHQgZm9ybS1zZWxlY3QgbXktY29sb3ItcGlja2VyIiBzdHlsZT0id2lkdGg6IDNyZW0iCmlkPSJsZXZlbFRleHRDb2xvcjEiCm9uY2hhbmdlPSJvbkxldmVsVGV4dENvbG9yMUNoYW5nZShsZXZlbFRleHRDb2xvcjEudmFsdWUpIj48L3NlbGVjdD4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJkLWZsZXggZmxleC1jb2x1bW4gbWUtNCI+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIGlkPSJsZXZlbFRleHRDb2xvcjJTcGFuIiBzdHlsZT0iCmZvbnQtc2l6ZTogbGFyZ2VyOwp0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogNHB4OwogICI+CkEKPC9zcGFuPgo8c2VsZWN0IGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IGZvcm0tc2VsZWN0IG15LWNvbG9yLXBpY2tlciIgc3R5bGU9IndpZHRoOiAzcmVtIgppZD0ibGV2ZWxUZXh0Q29sb3IyIgpvbmNoYW5nZT0ib25MZXZlbFRleHRDb2xvcjJDaGFuZ2UobGV2ZWxUZXh0Q29sb3IyLnZhbHVlKSI+PC9zZWxlY3Q+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjwvZGl2PgoKPGRpdiBpZD0ibGV2ZWxBc0dhdWdlQm94Ij4KPGRpdiBjbGFzcz0icm93IG1iLTQiPgo8ZGl2IGNsYXNzPSJjb2wiPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPkdhdWdlIENvbG9yczwvbGFiZWw+CjxkaXYgY2xhc3M9ImQtZmxleCI+CjxpbnB1dCB0eXBlPSJjb2xvciIgY2xhc3M9ImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtY29sb3IgbWUtMiIKaWQ9ImdhdWdlQ29sb3JFeHAxIgpvbmNoYW5nZT0ib25HYXVnZUNvbG9yQ2hhbmdlKCdFeHAxJywgZ2F1Z2VDb2xvckV4cDEudmFsdWUpIiAvPgo8aW5wdXQgdHlwZT0iY29sb3IiIGNsYXNzPSJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWNvbG9yIG1lLTIiCmlkPSJnYXVnZUNvbG9yRXhwMiIKb25jaGFuZ2U9Im9uR2F1Z2VDb2xvckNoYW5nZSgnRXhwMicsIGdhdWdlQ29sb3JFeHAyLnZhbHVlKSIgLz4KPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSIgb25jbGljaz0ib25SZXNldEdhdWdlQ29sb3IoJ0V4cCcpIj4KPGkgY2xhc3M9ImJpIGJpLWFycm93LWNvdW50ZXJjbG9ja3dpc2UiPjwvaT4KPC9idXR0b24+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj53aGVuIE1heCBMZXZlbDwvbGFiZWw+CjxkaXYgY2xhc3M9ImQtZmxleCI+CjxpbnB1dCB0eXBlPSJjb2xvciIgY2xhc3M9ImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtY29sb3IgbWUtMiIKaWQ9ImdhdWdlQ29sb3JFeHBNYXhlZDEiCm9uY2hhbmdlPSJvbkdhdWdlQ29sb3JDaGFuZ2UoJ0V4cE1heGVkMScsIGdhdWdlQ29sb3JFeHBNYXhlZDEudmFsdWUpIiAvPgo8aW5wdXQgdHlwZT0iY29sb3IiIGNsYXNzPSJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWNvbG9yIG1lLTIiCmlkPSJnYXVnZUNvbG9yRXhwTWF4ZWQyIgpvbmNoYW5nZT0ib25HYXVnZUNvbG9yQ2hhbmdlKCdFeHBNYXhlZDInLCBnYXVnZUNvbG9yRXhwTWF4ZWQyLnZhbHVlKSIgLz4KPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSIKb25jbGljaz0ib25SZXNldEdhdWdlQ29sb3IoJ0V4cE1heGVkJykiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3ctY291bnRlcmNsb2Nrd2lzZSI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPkJhY2tncm91bmQgQ29sb3I8L2xhYmVsPgo8ZGl2IGNsYXNzPSJkLWZsZXgiPgo8aW5wdXQgdHlwZT0iY29sb3IiIGNsYXNzPSJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWNvbG9yIG1lLTIiCmlkPSJnYXVnZUJhY2tncm91bmRDb2xvckV4cCIKb25jaGFuZ2U9Im9uR2F1Z2VCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UoJ0V4cCcsIGdhdWdlQmFja2dyb3VuZENvbG9yRXhwLnZhbHVlKSIgLz4KPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSIKb25jbGljaz0ib25SZXNldEdhdWdlQmFja2dyb3VuZENvbG9yKCdFeHAnKSI+CjxpIGNsYXNzPSJiaSBiaS1hcnJvdy1jb3VudGVyY2xvY2t3aXNlIj48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPC9kaXY+CjwvZGl2PgoKPGRpdiBjbGFzcz0iZC1mbGV4IG1iLTIiPgo8YnV0dG9uIGNsYXNzPSJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1lLTIiIG9uY2xpY2s9InVuZG9NYWtlQWN0b3JFeHBNYXhlZE91dCgpIj4KPGkgY2xhc3M9ImJpIGJpLWV5ZSBtZS0yIj48L2k+UmVndWxhcgo8L2J1dHRvbj4KPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtZS0yIiBvbmNsaWNrPSJtYWtlQWN0b3JFeHBNYXhlZE91dCgpIj4KPGkgY2xhc3M9ImJpIGJpLWV5ZSBtZS0yIj48L2k+TWF4IExldmVsCjwvYnV0dG9uPgo8L2Rpdj4KPC9kaXY+Cgo8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJjYXJkIj4KPGgyIGNsYXNzPSJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gY29sbGFwc2VkIiBkYXRhLWJzLXRvZ2dsZT0iY29sbGFwc2UiCmRhdGEtYnMtdGFyZ2V0PSIjYWN0b3JTdGF0dXNDb2xsYXBzaWJsZSI+CkFjdG9yIEhQLCBNUCwgVFAKPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSI+CjxpIGNsYXNzPSJiaSBiaS1jaGV2cm9uLXVwIGFycm93Ij48L2k+CjwvYnV0dG9uPgo8L2gyPgo8ZGl2IGNsYXNzPSJjYXJkLWJvZHkgY29sbGFwc2UiIGlkPSJhY3RvclN0YXR1c0NvbGxhcHNpYmxlIj4KCjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+TW9kZTwvbGFiZWw+CjxzZWxlY3QgY2xhc3M9ImZvcm0tc2VsZWN0IG1iLTQiIGlkPSJzaG93SHBNb2RlIiBvbmNoYW5nZT0ib25TaG93SHBNb2RlQ2hhbmdlKHRoaXMudmFsdWUpIj4KPG9wdGlvbiB2YWx1ZT0iZGVmYXVsdCI+U2hvdzwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJub25lIj5IaWRlPC9vcHRpb24+Cjwvc2VsZWN0PgoKPGRpdiBpZD0iYWN0b3JIcEJveCI+CjxwIGNsYXNzPSJpbmZvIG1iLTQiPgpZb3UgZmluZCBtb3JlIHN0eWxlcyBpbiB0aGUgIkdhdWdlIFNldHRpbmdzIiBzZWN0aW9uIGFib3ZlLgo8L3A+Cgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPlNob3cgTVA/PC9sYWJlbD4KPHNlbGVjdCBjbGFzcz0iZm9ybS1zZWxlY3QgbWItNCIgaWQ9InNob3dNcE1vZGUiIG9uY2hhbmdlPSJjaGFuZ2VUZXh0KHRoaXMuaWQsIHRoaXMudmFsdWUpIj4KPG9wdGlvbiB2YWx1ZT0iZGVmYXVsdCI+UlBHIE1ha2VyJ3MgRGVmYXVsdDwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJiYXR0bGVPbmx5Ij5Pbmx5IGluIGJhdHRsZXM8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0ib2ZmIj5OZXZlcjwvb3B0aW9uPgo8L3NlbGVjdD4KCjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+U2hvdyBUUD88L2xhYmVsPgo8c2VsZWN0IGNsYXNzPSJmb3JtLXNlbGVjdCBtYi00IiBpZD0ic2hvd1RwTW9kZSIgb25jaGFuZ2U9ImNoYW5nZVRleHQodGhpcy5pZCwgdGhpcy52YWx1ZSkiPgo8b3B0aW9uIHZhbHVlPSJkZWZhdWx0Ij5SUEcgTWFrZXIncyBEZWZhdWx0PC9vcHRpb24+CjxvcHRpb24gdmFsdWU9Im9uIj5CYXR0bGUgJiBtZW51czwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJiYXR0bGVPbmx5Ij5Pbmx5IGluIGJhdHRsZXM8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0ib2ZmIj5OZXZlcjwvb3B0aW9uPgo8L3NlbGVjdD4KPHAgY2xhc3M9ImluZm8iPgpVc2UgdGhlc2UgTm90ZXRhZ3Mgb24gQWN0b3JzIG9yIENsYXNzZXMgdG8gZGlzYWJsZSBNUCBhbmQgVFAgZm9yIGNlcnRhaW4gSGVyb2VzOgo8L3A+CjxkaXYgY2xhc3M9ImQtZmxleCBtYi00Ij4KPGRpdiBjbGFzcz0iY3VzdG9tLWNvZGUiPgo8cD4mbHQ7Tm8gTVAmZ3Q7PC9wPgo8cD4mbHQ7Tm8gVFAmZ3Q7PC9wPgo8L2Rpdj4KPC9kaXY+Cgo8aHI+CjxkaXYgY2xhc3M9InJvdyBtYi00Ij4KPGRpdiBjbGFzcz0iY29sIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5Ib3Jpem9udGFsIEFsaWduPC9sYWJlbD4KPGRpdiBjbGFzcz0iZm9ybS1yb3ciPgo8ZGl2IGNsYXNzPSJidG4tZ3JvdXAgYnRuLWdyb3VwLWxnIj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJocEdhdWdlSG9yekFsaWduTGVmdCIKb25jbGljaz0ib25IcEdhdWdlSG9yekFsaWduKCdsZWZ0JykiPgo8aSBjbGFzcz0iYmkgYmktYWxpZ24tc3RhcnQiPjwvaT4KPC9idXR0b24+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0iaHBHYXVnZUhvcnpBbGlnbkNlbnRlciIKb25jbGljaz0ib25IcEdhdWdlSG9yekFsaWduKCdjZW50ZXInKSI+CjxpIGNsYXNzPSJiaSBiaS1hbGlnbi1jZW50ZXIiPjwvaT4KPC9idXR0b24+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0iaHBHYXVnZUhvcnpBbGlnblJpZ2h0IgpvbmNsaWNrPSJvbkhwR2F1Z2VIb3J6QWxpZ24oJ3JpZ2h0JykiPgo8aSBjbGFzcz0iYmkgYmktYWxpZ24tZW5kIj48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPlZlcnRpY2FsIEFsaWduPC9sYWJlbD4KPGRpdiBjbGFzcz0iZm9ybS1yb3ciPgo8ZGl2IGNsYXNzPSJidG4tZ3JvdXAgYnRuLWdyb3VwLWxnIj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJocEdhdWdlVmVydEFsaWduVG9wIgpvbmNsaWNrPSJvbkhwR2F1Z2VWZXJ0QWxpZ24oJ3RvcCcpIj4KPGkgY2xhc3M9ImJpIGJpLWFsaWduLXRvcCI+PC9pPgo8L2J1dHRvbj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJocEdhdWdlVmVydEFsaWduTWlkZGxlIgpvbmNsaWNrPSJvbkhwR2F1Z2VWZXJ0QWxpZ24oJ21pZGRsZScpIj4KPGkgY2xhc3M9ImJpIGJpLWFsaWduLW1pZGRsZSI+PC9pPgo8L2J1dHRvbj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJocEdhdWdlVmVydEFsaWduQm90dG9tIgpvbmNsaWNrPSJvbkhwR2F1Z2VWZXJ0QWxpZ24oJ2JvdHRvbScpIj4KPGkgY2xhc3M9ImJpIGJpLWFsaWduLWJvdHRvbSI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9InJvdyBtYi00Ij4KPGRpdiBjbGFzcz0iY29sIj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+eDwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9Im51bWJlciIgaWQ9ImhwR2F1Z2VYIgpvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij55PC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0ibnVtYmVyIiBpZD0iaHBHYXVnZVkiCm9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCI+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPjxpIGNsYXNzPSJiaSBiaS1hcnJvd3MiPjwvaT48L3NwYW4+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIiB0eXBlPSJudW1iZXIiIGlkPSJocEdhdWdlV2lkdGgiIHBsYWNlaG9sZGVyPSJhdXRvIgpvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBteiI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij48aSBjbGFzcz0iYmkgYmktYXJyb3dzLXZlcnRpY2FsIj48L2k+PC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0ibnVtYmVyIiBpZD0iaHBHYXVnZUhlaWdodCIgcGxhY2Vob2xkZXI9ImF1dG8iCm9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPlZlcnRpY2FsIFNwYWNlPC9sYWJlbD4KPGRpdiBjbGFzcz0icm93Ij4KPGRpdiBjbGFzcz0iY29sIj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgbWItMiI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij48aSBjbGFzcz0iYmkgYmktZGlzdHJpYnV0ZS12ZXJ0aWNhbCI+PC9pPjwvc3Bhbj4KPGlucHV0IHR5cGU9Im51bWJlciIgY2xhc3M9ImZvcm0tY29udHJvbCIgaWQ9ImhwR2F1Z2VWZXJ0aWNhbFNwYWNlIgpvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPjwvZGl2Pgo8L2Rpdj4KCjxocj4KCjxkaXYgY2xhc3M9Im16Ij4KPGRpdiBjbGFzcz0iYnRuLWdyb3VwIj4KPGJ1dHRvbiBjbGFzcz0iYnRuIiBpZD0iZ2F1Z2VMYWJlbFN0eWxlVGV4dCIKb25jbGljaz0ib25HYXVnZUxhYmVsU3R5bGVDaGFuZ2UoJ3RleHQnKSI+CjxpIGNsYXNzPSJiaSBiaS1mb250cyBtZS0yIj48L2k+VGV4dAo8L2J1dHRvbj4KPGJ1dHRvbiBjbGFzcz0iYnRuIiBpZD0iZ2F1Z2VMYWJlbFN0eWxlSWNvbiIKb25jbGljaz0ib25HYXVnZUxhYmVsU3R5bGVDaGFuZ2UoJ2ljb24nKSI+CjxpIGNsYXNzPSJiaSBiaS1oZWFydCBtZS0yIj48L2k+SWNvbgo8L2J1dHRvbj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJtdiI+CjxkaXYgY2xhc3M9ImJ0bi1ncm91cCI+CjxidXR0b24gY2xhc3M9ImJ0biBidG4tcHJpbWFyeSIgZGlzYWJsZWQ+CjxpIGNsYXNzPSJiaSBiaS1mb250cyBtZS0yIj48L2k+VGV4dAo8L2J1dHRvbj4KPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkiIGRpc2FibGVkPgo8aSBjbGFzcz0iYmkgYmktaGVhcnQgbWUtMiI+PC9pPkljb24KPC9idXR0b24+CjwvZGl2Pgo8cCBjbGFzcz0iaW5mbyBtdC0yIj4KPHNwYW4gY2xhc3M9ImJpIGJpLWluZm8tc3F1YXJlIG1lLTEiPjwvc3Bhbj4KTVogb25seQo8L3A+CjwvZGl2PgoKPGRpdiBpZD0iZ2F1Z2VMYWJlbEFzSWNvbkJveCI+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIG10LTQgbWItMiI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IiBzdHlsZT0id2lkdGg6IDNyZW0iPkhQPC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0idGV4dCIgaWQ9ImhwSWNvbkluZGV4IiByZWFkb25seQpzdHlsZT0id2lkdGg6IDVyZW07IGZsZXgtZ3JvdzogMDsiPgo8YnV0dG9uIGNsYXNzPSJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGNob29zZS1pY29uIiBkYXRhLXRhcmdldD0iI2hwSWNvbkluZGV4IgpkYXRhLWNvbmZpZy1maWVsZD0iaHBJY29uSW5kZXgiPgo8aSBjbGFzcz0iYmkgYmktYm94LWFycm93LXVwLXJpZ2h0Ij48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgbWItMiI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IiBzdHlsZT0id2lkdGg6IDNyZW0iPk1QPC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0idGV4dCIgaWQ9Im1wSWNvbkluZGV4IiByZWFkb25seQpzdHlsZT0id2lkdGg6IDVyZW07IGZsZXgtZ3JvdzogMDsiPgo8YnV0dG9uIGNsYXNzPSJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGNob29zZS1pY29uIiBkYXRhLXRhcmdldD0iI21wSWNvbkluZGV4IgpkYXRhLWNvbmZpZy1maWVsZD0ibXBJY29uSW5kZXgiPgo8aSBjbGFzcz0iYmkgYmktYm94LWFycm93LXVwLXJpZ2h0Ij48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCIgc3R5bGU9IndpZHRoOiAzcmVtIj5UUDwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9InRleHQiIGlkPSJ0cEljb25JbmRleCIgcmVhZG9ubHkKc3R5bGU9IndpZHRoOiA1cmVtOyBmbGV4LWdyb3c6IDA7Ij4KPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBjaG9vc2UtaWNvbiIgZGF0YS10YXJnZXQ9IiN0cEljb25JbmRleCIKZGF0YS1jb25maWctZmllbGQ9InRwSWNvbkluZGV4Ij4KPGkgY2xhc3M9ImJpIGJpLWJveC1hcnJvdy11cC1yaWdodCI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KCjwvZGl2Pgo8L2Rpdj4KCjxkaXYgY2xhc3M9ImNhcmQiPgo8aDIgY2xhc3M9ImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBjb2xsYXBzZWQiIGRhdGEtYnMtdG9nZ2xlPSJjb2xsYXBzZSIKZGF0YS1icy10YXJnZXQ9IiNhY3RvclN0YXR1c0VmZmVjdHMiPgpBY3RvciBTdGF0dXMgRWZmZWN0cwo8YnV0dG9uIGNsYXNzPSJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5Ij4KPGkgY2xhc3M9ImJpIGJpLWNoZXZyb24tdXAgYXJyb3ciPjwvaT4KPC9idXR0b24+CjwvaDI+CjxkaXYgY2xhc3M9ImNhcmQtYm9keSBjb2xsYXBzZSIgaWQ9ImFjdG9yU3RhdHVzRWZmZWN0cyI+CjxkaXYgY2xhc3M9InJvdyBtYi00Ij4KPGRpdiBjbGFzcz0iY29sIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5Ib3Jpem9udGFsIEFsaWduPC9sYWJlbD4KPGRpdiBjbGFzcz0iZm9ybS1yb3ciPgo8ZGl2IGNsYXNzPSJidG4tZ3JvdXAgYnRuLWdyb3VwLWxnIj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJzdGF0dXNFZmZlY3RzSG9yekFsaWduTGVmdCIKb25jbGljaz0ib25TdGF0dXNFZmZlY3RzSG9yekFsaWduKCdsZWZ0JykiPgo8aSBjbGFzcz0iYmkgYmktYWxpZ24tc3RhcnQiPjwvaT4KPC9idXR0b24+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0ic3RhdHVzRWZmZWN0c0hvcnpBbGlnbkNlbnRlciIKb25jbGljaz0ib25TdGF0dXNFZmZlY3RzSG9yekFsaWduKCdjZW50ZXInKSI+CjxpIGNsYXNzPSJiaSBiaS1hbGlnbi1jZW50ZXIiPjwvaT4KPC9idXR0b24+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0ic3RhdHVzRWZmZWN0c0hvcnpBbGlnblJpZ2h0IgpvbmNsaWNrPSJvblN0YXR1c0VmZmVjdHNIb3J6QWxpZ24oJ3JpZ2h0JykiPgo8aSBjbGFzcz0iYmkgYmktYWxpZ24tZW5kIj48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPlZlcnRpY2FsIEFsaWduPC9sYWJlbD4KPGRpdiBjbGFzcz0iZm9ybS1yb3ciPgo8ZGl2IGNsYXNzPSJidG4tZ3JvdXAgYnRuLWdyb3VwLWxnIj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJzdGF0dXNFZmZlY3RzVmVydEFsaWduVG9wIgpvbmNsaWNrPSJvblN0YXR1c0VmZmVjdHNWZXJ0QWxpZ24oJ3RvcCcpIj4KPGkgY2xhc3M9ImJpIGJpLWFsaWduLXRvcCI+PC9pPgo8L2J1dHRvbj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJzdGF0dXNFZmZlY3RzVmVydEFsaWduTWlkZGxlIgpvbmNsaWNrPSJvblN0YXR1c0VmZmVjdHNWZXJ0QWxpZ24oJ21pZGRsZScpIj4KPGkgY2xhc3M9ImJpIGJpLWFsaWduLW1pZGRsZSI+PC9pPgo8L2J1dHRvbj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJzdGF0dXNFZmZlY3RzVmVydEFsaWduQm90dG9tIgpvbmNsaWNrPSJvblN0YXR1c0VmZmVjdHNWZXJ0QWxpZ24oJ2JvdHRvbScpIj4KPGkgY2xhc3M9ImJpIGJpLWFsaWduLWJvdHRvbSI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9InJvdyBtYi00Ij4KPGRpdiBjbGFzcz0iY29sIj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+eDwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9Im51bWJlciIgaWQ9InN0YXR1c0VmZmVjdHNYIgpvbmJsdXI9Im9uU3RhdHVzRWZmZWN0c1hDaGFuZ2Uoc3RhdHVzRWZmZWN0c1gudmFsdWUpIiAvPgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCI+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPnk8L3NwYW4+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIiB0eXBlPSJudW1iZXIiIGlkPSJzdGF0dXNFZmZlY3RzWSIKb25ibHVyPSJvblN0YXR1c0VmZmVjdHNZQ2hhbmdlKHN0YXR1c0VmZmVjdHNZLnZhbHVlKSIgLz4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5JY29uIExpbWl0PC9sYWJlbD4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wgbWItNCIgdHlwZT0ibnVtYmVyIiBpZD0ic3RhdHVzRWZmZWN0c01heEljb25zIiBtaW49IjEiCnBsYWNlaG9sZGVyPSI4IiBzdHlsZT0id2lkdGg6IDEwMHB4IgpvbmJsdXI9Im9uU3RhdHVzRWZmZWN0c01heEljb25zQ2hhbmdlKHN0YXR1c0VmZmVjdHNNYXhJY29ucy52YWx1ZSkiIC8+Cgo8ZGl2IGNsYXNzPSJkLWZsZXgiPgo8YnV0dG9uIGNsYXNzPSJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1lLTIiIG9uY2xpY2s9ImFwcGx5U3RhdGVzKCkiPgo8aSBjbGFzcz0iYmkgYmktZXllIG1lLTIiPjwvaT5BcHBseSBTdGF0dXMgRWZmZWN0cwo8L2J1dHRvbj4KPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtZS0yIiBvbmNsaWNrPSJjbGVhclN0YXRlcygpIj4KPGkgY2xhc3M9ImJpIGJpLWV5ZSBtZS0yIj48L2k+Q2xlYXIgU3RhdHVzIEVmZmVjdHMKPC9idXR0b24+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJjYXJkIj4KPGgyIGNsYXNzPSJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gY29sbGFwc2VkIiBkYXRhLWJzLXRvZ2dsZT0iY29sbGFwc2UiCmRhdGEtYnMtdGFyZ2V0PSIjYWN0b3JDdXN0b21Db2xsYXBzaWJsZSI+CkFjdG9yIEN1c3RvbSBQYXJhbWV0ZXIKPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSI+CjxpIGNsYXNzPSJiaSBiaS1jaGV2cm9uLXVwIGFycm93Ij48L2k+CjwvYnV0dG9uPgo8L2gyPgo8ZGl2IGNsYXNzPSJjYXJkLWJvZHkgY29sbGFwc2UiIGlkPSJhY3RvckN1c3RvbUNvbGxhcHNpYmxlIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoIG1iLTQiPgo8aW5wdXQgY2xhc3M9ImZvcm0tY2hlY2staW5wdXQiIHR5cGU9ImNoZWNrYm94IiBpZD0iZW5hYmxlQ3VzdG9tUGFyYW1ldGVyIiBjaGVja2VkCm9uY2hhbmdlPSJvbkVuYWJsZUN1c3RvbVBhcmFtZXRlckNoYW5nZShlbmFibGVDdXN0b21QYXJhbWV0ZXIuY2hlY2tlZCkiIC8+CjxzcGFuIGNsYXNzPSJmb3JtLWNoZWNrLWxhYmVsIj5FbmFibGU/PC9zcGFuPgo8L2xhYmVsPgo8ZGl2IGlkPSJjdXN0b21QYXJhbWV0ZXJCb3giPgo8bGFiZWwgY2xhc3M9ImZvcm0tY2hlY2sgZm9ybS1zd2l0Y2ggbWItNCI+CjxpbnB1dCBjbGFzcz0iZm9ybS1jaGVjay1pbnB1dCIgdHlwZT0iY2hlY2tib3giIGlkPSJzaG93Q3VzdG9tUGFyYW1ldGVySW5PdGhlclNjZW5lcyIKb25jaGFuZ2U9Im9uU2hvd0N1c3RvbVBhcmFtZXRlckluT3RoZXJTY2VuZXNDaGFuZ2UodGhpcy5jaGVja2VkKSIgLz4KPHNwYW4gY2xhc3M9ImZvcm0tY2hlY2stbGFiZWwiPlNob3cgaW4gb3RoZXIgTWVudXM/IChlLmcuIEl0ZW0gTWVudSwgU2tpbGwgTWVudSk8L3NwYW4+CjwvbGFiZWw+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+TW9kZTwvbGFiZWw+CjxzZWxlY3QgY2xhc3M9ImZvcm0tc2VsZWN0IG1iLTQiIGlkPSJjdXN0b21QYXJhbWV0ZXJNb2RlIgpvbmNoYW5nZT0ib25DdXN0b21QYXJhbWV0ZXJNb2RlQ2hhbmdlKGN1c3RvbVBhcmFtZXRlck1vZGUudmFsdWUpIj4KPG9wdGlvbiB2YWx1ZT0iZ2F1Z2UiIGNsYXNzPSJteiI+R2F1Z2U8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0ieC15Ij5YL1kgdmFsdWVzPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9Im51bWJlciI+U2luZ2xlIG51bWJlcjwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJ0ZXh0Ij5GcmVlc3R5bGUgVGV4dDwvb3B0aW9uPgo8L3NlbGVjdD4KPGRpdiBjbGFzcz0ibWItNCIgaWQ9ImN1c3RvbVBhcmFtZXRlckxhYmVsQm94Ij4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5MYWJlbDwvbGFiZWw+CjxkaXYgY2xhc3M9ImQtZmxleCBhbGlnbi1pdGVtcy1lbmQiPgo8ZGl2IGNsYXNzPSJtZS00IiBzdHlsZT0id2lkdGg6IDVyZW07Ij4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJjdXN0b21QYXJhbWV0ZXJMYWJlbCIKb25ibHVyPSJvbkN1c3RvbVBhcmFtZXRlckxhYmVsQ2hhbmdlKGN1c3RvbVBhcmFtZXRlckxhYmVsLnZhbHVlKSI+CjwvZGl2Pgo8ZGl2IHN0eWxlPSJ3aWR0aDogNnJlbTsiPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IiBpZD0iY3VzdG9tUGFyYW1ldGVyTGFiZWxUZXh0Q29sb3JTcGFuIiBzdHlsZT0iCmZvbnQtc2l6ZTogbGFyZ2VyOwp0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogNHB4OwogICI+CkEKPC9zcGFuPgo8c2VsZWN0IGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IGZvcm0tc2VsZWN0IG15LWNvbG9yLXBpY2tlciIKaWQ9ImN1c3RvbVBhcmFtZXRlckxhYmVsVGV4dENvbG9yIgpvbmNoYW5nZT0ib25UZXh0Q29sb3JDaGFuZ2UoJ2N1c3RvbVBhcmFtZXRlckxhYmVsJywgY3VzdG9tUGFyYW1ldGVyTGFiZWxUZXh0Q29sb3IudmFsdWUpIj48L3NlbGVjdD4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+UHJlLUNvbmRpdGlvbjwvbGFiZWw+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPkpTPC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgaWQ9ImN1c3RvbVBhcmFtZXRlclByZWNvbmRpdGlvbkV2YWwiCm9uYmx1cj0ib25DdXN0b21QYXJhbWV0ZXJQcmVjb25kaXRpb25FdmFsQ2hhbmdlKGN1c3RvbVBhcmFtZXRlclByZWNvbmRpdGlvbkV2YWwudmFsdWUpIj4KPC9kaXY+CjxwIGNsYXNzPSJpbmZvIj4KTGVhdmUgdGhpcyBmaWVsZCBibGFuayB0byBhbHdheXMgZGlzcGxheSB0aGUgY3VzdG9tIHBhcmFtZXRlciBvciB3cml0ZSBhIHNob3J0IGZ1bmN0aW9uCnRoYXQgbXVzdCByZXR1cm4gdHJ1dGh5Lgo8L3A+CjxwIGNsYXNzPSJpbmZvIj5FeGFtcGxlczo8L3A+Cjx1bCBjbGFzcz0iY3VzdG9tLWNvZGUgbWItNCI+CjxsaT5hY3Rvci5uYW1lKCkgPT0gJ1JlaWQnPC9saT4KPGxpPmFjdG9yLmlzQ2xhc3MoJGRhdGFDbGFzc2VzWzFdKTwvbGk+CjxsaT4kZ2FtZVN3aXRjaGVzLnZhbHVlKDEpPC9saT4KPC91bD4KPGRpdiBjbGFzcz0ibWItNCIgaWQ9ImN1c3RvbVBhcmFtZXRlclhZVmFsdWVzQm94Ij4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5DdXJyZW50IFZhbHVlPC9sYWJlbD4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgbWItNCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij5KUzwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJjdXN0b21QYXJhbWV0ZXJDdXJyZW50VmFsdWVFdmFsIgpvbmJsdXI9Im9uQ3VzdG9tUGFyYW1ldGVyQ3VycmVudFZhbHVlRXZhbENoYW5nZShjdXN0b21QYXJhbWV0ZXJDdXJyZW50VmFsdWVFdmFsLnZhbHVlKSI+CjwvZGl2Pgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPk1heCBWYWx1ZTwvbGFiZWw+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIG1iLTQiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+SlM8L3NwYW4+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIiBpZD0iY3VzdG9tUGFyYW1ldGVyTWF4VmFsdWVFdmFsIgpvbmJsdXI9Im9uQ3VzdG9tUGFyYW1ldGVyTWF4VmFsdWVFdmFsQ2hhbmdlKGN1c3RvbVBhcmFtZXRlck1heFZhbHVlRXZhbC52YWx1ZSkiPgo8L2Rpdj4KPHAgY2xhc3M9ImluZm8iPkV4YW1wbGVzOjwvcD4KPHVsIGNsYXNzPSJjdXN0b20tY29kZSI+CjxsaT5hY3Rvci5sdWs8L2xpPgo8bGk+YWN0b3IucGFyYW0oMSk8L2xpPgo8L3VsPgo8L2Rpdj4KPGRpdiBpZD0iY3VzdG9tUGFyYW1ldGVyU2hvd01heFZhbHVlQm94Ij4KPGxhYmVsIGNsYXNzPSJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoIG1iLTQgbXoiPgo8aW5wdXQgY2xhc3M9ImZvcm0tY2hlY2staW5wdXQiIHR5cGU9ImNoZWNrYm94IgppZD0ic2hvd0N1c3RvbVBhcmFtZXRlckdhdWdlTWF4VmFsdWVzIgpvbmNoYW5nZT0ib25TaG93Q3VzdG9tUGFyYW1ldGVyR2F1Z2VNYXhWYWx1ZXNDaGFuZ2Uoc2hvd0N1c3RvbVBhcmFtZXRlckdhdWdlTWF4VmFsdWVzLmNoZWNrZWQpIiAvPgo8c3BhbiBjbGFzcz0iZm9ybS1jaGVjay1sYWJlbCI+U2hvdyBNYXggVmFsdWU/PC9zcGFuPgo8L2xhYmVsPgo8L2Rpdj4KPGRpdiBjbGFzcz0ibWItNCIgaWQ9ImN1c3RvbVBhcmFtZXRlck51bWJlckV2YWxCb3giPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPkV2YWw8L2xhYmVsPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBtYi00Ij4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPkpTPC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgaWQ9ImN1c3RvbVBhcmFtZXRlck51bWJlckV2YWwiCm9uYmx1cj0ib25DdXN0b21QYXJhbWV0ZXJOdW1iZXJFdmFsQ2hhbmdlKGN1c3RvbVBhcmFtZXRlck51bWJlckV2YWwudmFsdWUpIj4KPC9kaXY+CjxwIGNsYXNzPSJpbmZvIj5FeGFtcGxlczo8L3A+Cjx1bCBjbGFzcz0iY3VzdG9tLWNvZGUiPgo8bGk+YWN0b3IubHVrPC9saT4KPGxpPmFjdG9yLnBhcmFtKDEpPC9saT4KPC91bD4KPC9kaXY+CjxkaXYgY2xhc3M9Im1iLTQiIGlkPSJjdXN0b21QYXJhbWV0ZXJUZXh0RXZhbEJveCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+VGV4dCB0byBkaXNwbGF5PC9sYWJlbD4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgbWItNCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij5KUzwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJjdXN0b21QYXJhbWV0ZXJUZXh0RXZhbCIKb25ibHVyPSJvbkN1c3RvbVBhcmFtZXRlclRleHRFdmFsQ2hhbmdlKGN1c3RvbVBhcmFtZXRlclRleHRFdmFsLnZhbHVlKSI+CjwvZGl2Pgo8cCBjbGFzcz0iaW5mbyI+CllvdSBtYXkgdXNlIFRleHQgQ29kZXMsIGhvd2V2ZXIsIHlvdSBuZWVkIHRvIGVzY2FwZSB0aGVtLgpcQyBiZWNvbWVzIFxcQy4KPC9wPgo8cCBjbGFzcz0iaW5mbyI+RXhhbXBsZXM6PC9wPgo8dWwgY2xhc3M9ImN1c3RvbS1jb2RlIj4KPGxpPiJcXENbMTZdRnJlZXN0eWxlIFRleHQiPC9saT4KPGxpPmFjdG9yLmN1cnJlbnRDbGFzcygpLm5hbWU8L2xpPgo8bGk+IlxcQ1sxNl0gIiArICRnYW1lVmFyaWFibGVzLnZhbHVlKDEpPC9saT4KPC91bD4KPC9kaXY+Cjxocj4KPGRpdiBjbGFzcz0icm93IG1iLTQiPgo8ZGl2IGNsYXNzPSJjb2wiPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPkhvcml6b250YWwgQWxpZ248L2xhYmVsPgo8ZGl2IGNsYXNzPSJmb3JtLXJvdyI+CjxkaXYgY2xhc3M9ImJ0bi1ncm91cCBidG4tZ3JvdXAtbGciPgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biIgaWQ9ImN1c3RvbVBhcmFtZXRlckhvcnpBbGlnbkxlZnQiCm9uY2xpY2s9Im9uQ3VzdG9tUGFyYW1ldGVySG9yekFsaWduKCdsZWZ0JykiPgo8aSBjbGFzcz0iYmkgYmktYWxpZ24tc3RhcnQiPjwvaT4KPC9idXR0b24+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0iY3VzdG9tUGFyYW1ldGVySG9yekFsaWduQ2VudGVyIgpvbmNsaWNrPSJvbkN1c3RvbVBhcmFtZXRlckhvcnpBbGlnbignY2VudGVyJykiPgo8aSBjbGFzcz0iYmkgYmktYWxpZ24tY2VudGVyIj48L2k+CjwvYnV0dG9uPgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biIgaWQ9ImN1c3RvbVBhcmFtZXRlckhvcnpBbGlnblJpZ2h0IgpvbmNsaWNrPSJvbkN1c3RvbVBhcmFtZXRlckhvcnpBbGlnbigncmlnaHQnKSI+CjxpIGNsYXNzPSJiaSBiaS1hbGlnbi1lbmQiPjwvaT4KPC9idXR0b24+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+VmVydGljYWwgQWxpZ248L2xhYmVsPgo8ZGl2IGNsYXNzPSJmb3JtLXJvdyI+CjxkaXYgY2xhc3M9ImJ0bi1ncm91cCBidG4tZ3JvdXAtbGciPgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biIgaWQ9ImN1c3RvbVBhcmFtZXRlclZlcnRBbGlnblRvcCIKb25jbGljaz0ib25DdXN0b21QYXJhbWV0ZXJWZXJ0QWxpZ24oJ3RvcCcpIj4KPGkgY2xhc3M9ImJpIGJpLWFsaWduLXRvcCI+PC9pPgo8L2J1dHRvbj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJjdXN0b21QYXJhbWV0ZXJWZXJ0QWxpZ25NaWRkbGUiCm9uY2xpY2s9Im9uQ3VzdG9tUGFyYW1ldGVyVmVydEFsaWduKCdtaWRkbGUnKSI+CjxpIGNsYXNzPSJiaSBiaS1hbGlnbi1taWRkbGUiPjwvaT4KPC9idXR0b24+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0iY3VzdG9tUGFyYW1ldGVyVmVydEFsaWduQm90dG9tIgpvbmNsaWNrPSJvbkN1c3RvbVBhcmFtZXRlclZlcnRBbGlnbignYm90dG9tJykiPgo8aSBjbGFzcz0iYmkgYmktYWxpZ24tYm90dG9tIj48L2k+CjwvYnV0dG9uPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0icm93IG1iLTQiPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBjb2wiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+eDwvc3Bhbj4KPGlucHV0IHR5cGU9Im51bWJlciIgY2xhc3M9ImZvcm0tY29udHJvbCIgaWQ9ImN1c3RvbVBhcmFtZXRlck9mZnNldFgiCm9uYmx1cj0ib25DdXN0b21QYXJhbWV0ZXJPZmZzZXRYQ2hhbmdlKGN1c3RvbVBhcmFtZXRlck9mZnNldFgudmFsdWUpIiAvPgo8L2Rpdj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgY29sIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPnk8L3NwYW4+CjxpbnB1dCB0eXBlPSJudW1iZXIiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJjdXN0b21QYXJhbWV0ZXJPZmZzZXRZIgpvbmJsdXI9Im9uQ3VzdG9tUGFyYW1ldGVyT2Zmc2V0WUNoYW5nZShjdXN0b21QYXJhbWV0ZXJPZmZzZXRZLnZhbHVlKSIgLz4KPC9kaXY+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIGNvbCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij48aSBjbGFzcz0iYmkgYmktYXJyb3dzIj48L2k+PC9zcGFuPgo8aW5wdXQgdHlwZT0ibnVtYmVyIiBjbGFzcz0iZm9ybS1jb250cm9sIiBpZD0iY3VzdG9tUGFyYW1ldGVyV2lkdGgiCm9uYmx1cj0ib25DdXN0b21QYXJhbWV0ZXJXaWR0aENoYW5nZShjdXN0b21QYXJhbWV0ZXJXaWR0aC52YWx1ZSkiIC8+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCIgaWQ9ImN1c3RvbVBhcmFtZXRlckhlaWdodEJveCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij48aSBjbGFzcz0iYmkgYmktYXJyb3dzLXZlcnRpY2FsIj48L2k+PC9zcGFuPgo8aW5wdXQgdHlwZT0ibnVtYmVyIiBjbGFzcz0iZm9ybS1jb250cm9sIiBpZD0iY3VzdG9tUGFyYW1ldGVySGVpZ2h0IgpvbmJsdXI9Im9uQ3VzdG9tUGFyYW1ldGVySGVpZ2h0Q2hhbmdlKGN1c3RvbVBhcmFtZXRlckhlaWdodC52YWx1ZSkiIC8+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+Cjxocj4KPGRpdiBjbGFzcz0ibWItNCIgaWQ9ImN1c3RvbVBhcmFtZXRlclRleHRBbGlnbkJveCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+VGV4dCBBbGlnbjwvbGFiZWw+CjxkaXYgY2xhc3M9ImZvcm0tcm93Ij4KPGRpdiBjbGFzcz0iYnRuLWdyb3VwIj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJjdXN0b21QYXJhbWV0ZXJUZXh0QWxpZ25MZWZ0IgpvbmNsaWNrPSJvbkN1c3RvbVBhcmFtZXRlclRleHRBbGlnbignbGVmdCcpIj4KPGkgY2xhc3M9ImJpIGJpLXRleHQtbGVmdCI+PC9pPiBMZWZ0CjwvYnV0dG9uPgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biIgaWQ9ImN1c3RvbVBhcmFtZXRlclRleHRBbGlnbkNlbnRlciIKb25jbGljaz0ib25DdXN0b21QYXJhbWV0ZXJUZXh0QWxpZ24oJ2NlbnRlcicpIj4KPGkgY2xhc3M9ImJpIGJpLXRleHQtY2VudGVyIj48L2k+IENlbnRlcgo8L2J1dHRvbj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJjdXN0b21QYXJhbWV0ZXJUZXh0QWxpZ25SaWdodCIKb25jbGljaz0ib25DdXN0b21QYXJhbWV0ZXJUZXh0QWxpZ24oJ3JpZ2h0JykiPgo8aSBjbGFzcz0iYmkgYmktdGV4dC1yaWdodCI+PC9pPiBSaWdodAo8L2J1dHRvbj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iZC1mbGV4IG1iLTQiPgo8ZGl2IGNsYXNzPSJkLWZsZXggZmxleC1jb2x1bW4gbWUtNCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+VGV4dCBDb2xvcjwvbGFiZWw+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIGlkPSJjdXN0b21QYXJhbWV0ZXJUZXh0Q29sb3JTcGFuIiBzdHlsZT0iCmZvbnQtc2l6ZTogbGFyZ2VyOwp0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogNHB4OwogICI+CkEKPC9zcGFuPgo8c2VsZWN0IGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IGZvcm0tc2VsZWN0IG15LWNvbG9yLXBpY2tlciIgc3R5bGU9IndpZHRoOiAzcmVtIgppZD0iY3VzdG9tUGFyYW1ldGVyVGV4dENvbG9yIgpvbmNoYW5nZT0ib25UZXh0Q29sb3JDaGFuZ2UoJ2N1c3RvbVBhcmFtZXRlcicsIGN1c3RvbVBhcmFtZXRlclRleHRDb2xvci52YWx1ZSkiPjwvc2VsZWN0Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgaWQ9ImN1c3RvbVBhcmFtZXRlcldoZW5FbXB0eVRleHRDb2xvckJveCI+CjxkaXYgY2xhc3M9ImQtZmxleCBmbGV4LWNvbHVtbiBtZS00Ij4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5XaGVuIERlcGxldGVkPC9sYWJlbD4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCIgaWQ9ImN1c3RvbVBhcmFtZXRlcldoZW5FbXB0eVRleHRDb2xvclNwYW4iCnN0eWxlPSIKZm9udC1zaXplOiBsYXJnZXI7CnRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOwp0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiA0cHg7CiAgIj4KQQo8L3NwYW4+CjxzZWxlY3QgY2xhc3M9ImlucHV0LWdyb3VwLXRleHQgZm9ybS1zZWxlY3QgbXktY29sb3ItcGlja2VyIgpzdHlsZT0id2lkdGg6IDNyZW0iIGlkPSJjdXN0b21QYXJhbWV0ZXJXaGVuRW1wdHlUZXh0Q29sb3IiCm9uY2hhbmdlPSJvblRleHRDb2xvckNoYW5nZSgnY3VzdG9tUGFyYW1ldGVyV2hlbkVtcHR5JywgY3VzdG9tUGFyYW1ldGVyV2hlbkVtcHR5VGV4dENvbG9yLnZhbHVlKSI+PC9zZWxlY3Q+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJtYi00IiBpZD0iY3VzdG9tUGFyYW1ldGVyR2F1Z2VCb3giPgo8ZGl2IGNsYXNzPSJkLWZsZXgiPgo8ZGl2IGNsYXNzPSJtZS00Ij4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5HYXVnZSBDb2xvcjwvbGFiZWw+CjxkaXYgY2xhc3M9ImQtZmxleCI+CjxpbnB1dCB0eXBlPSJjb2xvciIgY2xhc3M9ImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtY29sb3IgbWUtMiIKaWQ9ImdhdWdlQ29sb3JDdXN0b20xIgpvbmNoYW5nZT0ib25HYXVnZUNvbG9yQ2hhbmdlKCdDdXN0b20xJywgZ2F1Z2VDb2xvckN1c3RvbTEudmFsdWUpIiAvPgo8aW5wdXQgdHlwZT0iY29sb3IiIGNsYXNzPSJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWNvbG9yIG1lLTIiCmlkPSJnYXVnZUNvbG9yQ3VzdG9tMiIKb25jaGFuZ2U9Im9uR2F1Z2VDb2xvckNoYW5nZSgnQ3VzdG9tMicsIGdhdWdlQ29sb3JDdXN0b20yLnZhbHVlKSIgLz4KPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSIKb25jbGljaz0ib25SZXNldEdhdWdlQ29sb3IoJ0N1c3RvbScpIj4KPGkgY2xhc3M9ImJpIGJpLWFycm93LWNvdW50ZXJjbG9ja3dpc2UiPjwvaT4KPC9idXR0b24+CjwvZGl2Pgo8L2Rpdj4KPGRpdj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5CYWNrIENvbG9yPC9sYWJlbD4KPGRpdiBjbGFzcz0iZC1mbGV4Ij4KPGlucHV0IHR5cGU9ImNvbG9yIiBjbGFzcz0iZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1jb2xvciBtZS0yIgppZD0iZ2F1Z2VCYWNrZ3JvdW5kQ29sb3JDdXN0b20iCm9uY2hhbmdlPSJvbkdhdWdlQmFja2dyb3VuZENvbG9yQ2hhbmdlKCdDdXN0b20nLCBnYXVnZUJhY2tncm91bmRDb2xvckN1c3RvbS52YWx1ZSkiIC8+CjxidXR0b24gY2xhc3M9ImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkiCm9uY2xpY2s9Im9uUmVzZXRHYXVnZUJhY2tncm91bmRDb2xvcignQ3VzdG9tJykiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3ctY291bnRlcmNsb2Nrd2lzZSI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgaWQ9ImN1c3RvbVBhcmFtZXRlckZvbnRTaXplQm94Ij4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5Gb250IFNpemU8L2xhYmVsPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBtYi00IiBzdHlsZT0id2lkdGg6IDIwMHB4OyI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij48aSBjbGFzcz0iYmkgYmktZm9udHMiPjwvaT48L3NwYW4+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIiB0eXBlPSJudW1iZXIiIGlkPSJjdXN0b21QYXJhbWV0ZXJGb250U2l6ZSIKb25ibHVyPSJvbkN1c3RvbVBhcmFtZXRlckZvbnRTaXplQ2hhbmdlKGN1c3RvbVBhcmFtZXRlckZvbnRTaXplLnZhbHVlKSIgLz4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjwvZGl2PgoKPGg0IGNsYXNzPSJtdC14bCI+T3RoZXIgV2luZG93czwvaDQ+CjxkaXYgY2xhc3M9ImNhcmQiPgo8aDIgY2xhc3M9ImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBjb2xsYXBzZWQiIGRhdGEtYnMtdG9nZ2xlPSJjb2xsYXBzZSIKZGF0YS1icy10YXJnZXQ9IiNjb21tYW5kQ29tbWFuZCI+CkNvbW1hbmQgV2luZG93CjxidXR0b24gY2xhc3M9ImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkiPgo8aSBjbGFzcz0iYmkgYmktY2hldnJvbi11cCBhcnJvdyI+PC9pPgo8L2J1dHRvbj4KPC9oMj4KPGRpdiBjbGFzcz0iY2FyZC1ib2R5IGNvbGxhcHNlIiBpZD0iY29tbWFuZENvbW1hbmQiPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBtYi0yIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIHN0eWxlPSJ3aWR0aDogMjAwcHgiPgo8aSBjbGFzcz0iYmkgYmktdHJhbnNwYXJlbmN5IG1lLTIiPjwvaT5PcGFjaXR5Cjwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHN0eWxlPSJmbGV4LWdyb3c6IDA7IGZsZXgtYmFzaXM6IDVyZW0iIHR5cGU9Im51bWJlciIKaWQ9ImNvbW1hbmRPcGFjaXR5IiBvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIG1iLTIiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCIgc3R5bGU9IndpZHRoOiAyMDBweCI+CjxpIGNsYXNzPSJiaSBiaS1zcXVhcmUgbWUtMiI+PC9pPlBhZGRpbmcKPC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgc3R5bGU9ImZsZXgtZ3JvdzogMDsgZmxleC1iYXNpczogNXJlbTsiIHR5cGU9Im51bWJlciIKaWQ9ImNvbW1hbmRQYWRkaW5nIiBvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIG1iLTIiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCIgc3R5bGU9IndpZHRoOiAyMDBweCI+CjxpIGNsYXNzPSJiaSBiaS1hcnJvd3MtdmVydGljYWwgbWUtMiI+PC9pPgpJdGVtIEhlaWdodAo8L3NwYW4+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIiBzdHlsZT0iZmxleC1ncm93OiAwOyBmbGV4LWJhc2lzOiA1cmVtIiB0eXBlPSJudW1iZXIiCmlkPSJjb21tYW5kSXRlbUhlaWdodCIgb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBtYi0yIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiIHN0eWxlPSJ3aWR0aDogMjAwcHgiPgo8aSBjbGFzcz0iYmkgYmktYXJyb3dzLXZlcnRpY2FsIG1lLTIiPjwvaT4KSXRlbSBTcGFjaW5nCjwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHN0eWxlPSJmbGV4LWdyb3c6IDA7IGZsZXgtYmFzaXM6IDVyZW0iIHR5cGU9Im51bWJlciIKaWQ9ImNvbW1hbmRSb3dTcGFjaW5nIiBvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIG1iLTIiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCIgc3R5bGU9IndpZHRoOiAyMDBweCI+CjxpIGNsYXNzPSJiaSBiaS1hcnJvd3MgbWUtMiI+PC9pPgpJdGVtIFNwYWNpbmcKPC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgc3R5bGU9ImZsZXgtZ3JvdzogMDsgZmxleC1iYXNpczogNXJlbSIgdHlwZT0ibnVtYmVyIgppZD0iY29tbWFuZENvbHVtblNwYWNpbmciIG9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAgbWItMiI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0IiBzdHlsZT0id2lkdGg6IDIwMHB4Ij4KPGkgY2xhc3M9ImJpIGJpLWZvbnRzIG1lLTIiPjwvaT5Gb250IFNpemUKPC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgc3R5bGU9ImZsZXgtZ3JvdzogMDsgZmxleC1iYXNpczogNXJlbSIgdHlwZT0ibnVtYmVyIgppZD0iY29tbWFuZEZvbnRTaXplIiBvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjxociAvPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPlN0eWxlPC9sYWJlbD4KPHNlbGVjdCBjbGFzcz0iZm9ybS1zZWxlY3QgbWItMiIgaWQ9ImNvbW1hbmRTdHlsZSIKb25jaGFuZ2U9Im9uQ29tbWFuZFN0eWxlQ2hhbmdlKGNvbW1hbmRTdHlsZS52YWx1ZSkiPgo8b3B0aW9uIHZhbHVlPSJpY29uQW5kVGV4dCI+SWNvbiBhbmQgVGV4dDwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJpY29uIj5JY29uIG9ubHk8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0idGV4dCI+VGV4dCBvbmx5PC9vcHRpb24+Cjwvc2VsZWN0Pgo8cCBjbGFzcz0iaW5mbyBtYi00Ij5JY29ucyBhcmUgY29uZmlndXJlZCBpbiB0aGUgUGx1Z2luIE1hbmFnZXIuPC9wPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPlRleHQgQWxpZ248L2xhYmVsPgo8ZGl2IGNsYXNzPSJmb3JtLXJvdyBtYi00Ij4KPGRpdiBjbGFzcz0iYnRuLWdyb3VwIj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJjb21tYW5kVGV4dEFsaWduTGVmdCIKb25jbGljaz0ib25Db21tYW5kVGV4dEFsaWduKCdsZWZ0JykiPgo8aSBjbGFzcz0iYmkgYmktdGV4dC1sZWZ0IG1lLTIiPjwvaT5MZWZ0CjwvYnV0dG9uPgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biIgaWQ9ImNvbW1hbmRUZXh0QWxpZ25DZW50ZXIiCm9uY2xpY2s9Im9uQ29tbWFuZFRleHRBbGlnbignY2VudGVyJykiPgo8aSBjbGFzcz0iYmkgYmktdGV4dC1jZW50ZXIgbWUtMiI+PC9pPkNlbnRlcgo8L2J1dHRvbj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJjb21tYW5kVGV4dEFsaWduUmlnaHQiCm9uY2xpY2s9Im9uQ29tbWFuZFRleHRBbGlnbigncmlnaHQnKSI+CjxpIGNsYXNzPSJiaSBiaS10ZXh0LXJpZ2h0IG1lLTIiPjwvaT5SaWdodAo8L2J1dHRvbj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJyb3cgYWxpZ24taXRlbXMtc3RhcnQgbWItNCI+CjxkaXYgY2xhc3M9ImNvbCI+CjxsYWJlbCBjbGFzcz0iZm9ybS1jaGVjayBmb3JtLXN3aXRjaCBtYi00IiBpZD0ic2hvdWxkT3ZlcnJpZGVDb21tYW5kV2luZG93Qm94Ij4KPGlucHV0IGNsYXNzPSJmb3JtLWNoZWNrLWlucHV0IiB0eXBlPSJjaGVja2JveCIgaWQ9InNob3VsZE92ZXJyaWRlQ29tbWFuZFdpbmRvdyIKb25jaGFuZ2U9Im9uT3ZlcnJpZGVDb21tYW5kV2luZG93Q2hhbmdlKHNob3VsZE92ZXJyaWRlQ29tbWFuZFdpbmRvdy5jaGVja2VkKSIgLz4KPHNwYW4gY2xhc3M9ImZvcm0tY2hlY2stbGFiZWwiPkluZGl2aWR1YWwgV2luZG93IEZpbGU/PC9zcGFuPgo8L2xhYmVsPgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sIj4KPGRpdiBpZD0iY29tbWFuZFdpbmRvd0ZpbGVCb3giPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0iZmlsZSIgaWQ9ImNvbW1hbmRXaW5kb3dGaWxlIiBhY2NlcHQ9ImltYWdlL3BuZyIKb25jaGFuZ2U9ImNoYW5nZUZpbGUodGhpcy5pZCwgJ2ltZycsIHRoaXMudmFsdWUpIiAvPgo8cCBjbGFzcz0iaW5mbyBtYi0wIj4KRmlsZSBtdXN0IGJlIGxvY2F0ZWQgaW4geW91ciBnYW1lL2ltZy9zeXN0ZW0KPC9wPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJyb3cgYWxpZ24taXRlbXMtZW5kIG1iLTQiPgo8ZGl2IGNsYXNzPSJjb2wiPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPldpbmRvdyBCYWNrZ3JvdW5kPC9sYWJlbD4KPHNlbGVjdCBjbGFzcz0iZm9ybS1zZWxlY3QiIGlkPSJjb21tYW5kQmFja2dyb3VuZFR5cGUiCm9uY2hhbmdlPSJvbkNvbW1hbmRCYWNrZ3JvdW5kVHlwZUNoYW5nZShjb21tYW5kQmFja2dyb3VuZFR5cGUudmFsdWUpIj4KPG9wdGlvbiB2YWx1ZT0id2luZG93Ij5XaW5kb3c8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0iZGltbWVkIj5EaW1tZWQ8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0iaW1hZ2UiPkltYWdlPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9Im5vbmUiPk5vbmU8L29wdGlvbj4KPC9zZWxlY3Q+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPgo8ZGl2IGlkPSJjb21tYW5kQmFja2dyb3VuZEZpbGVCb3giPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0iZmlsZSIgaWQ9ImNvbW1hbmRCYWNrZ3JvdW5kRmlsZSIKYWNjZXB0PSJpbWFnZS9wbmciIG9uY2hhbmdlPSJjaGFuZ2VGaWxlKHRoaXMuaWQsICdpbWcnLCB0aGlzLnZhbHVlKSIgLz4KPHAgY2xhc3M9ImluZm8gbWItMCI+CkZpbGUgbXVzdCBiZSBsb2NhdGVkIGluIHlvdXIgZ2FtZSBkaXJlY3RvcnkvaW1nCjwvcD4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0icm93IG16Ij4KPGRpdiBjbGFzcz0iY29sIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5JdGVtIEJhY2tncm91bmQ8L2xhYmVsPgo8c2VsZWN0IGNsYXNzPSJmb3JtLXNlbGVjdCIgaWQ9ImNvbW1hbmRJdGVtQmFja2dyb3VuZFR5cGUiCm9uY2hhbmdlPSJvbkNvbW1hbmRJdGVtQmFja2dyb3VuZFR5cGVDaGFuZ2UodGhpcy52YWx1ZSkiPgo8b3B0aW9uIHZhbHVlPSJkZWZhdWx0Ij5EZWZhdWx0PC9vcHRpb24+CjxvcHRpb24gdmFsdWU9ImRpbW1lZCI+UlBHIE1ha2VyIERlZmF1bHQ8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0iaW1hZ2UiPkltYWdlPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9Im5vbmUiPk5vbmU8L29wdGlvbj4KPC9zZWxlY3Q+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPgo8ZGl2IGlkPSJjb21tYW5kSXRlbUJhY2tncm91bmRGaWxlQm94Ij4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9ImZpbGUiIGlkPSJjb21tYW5kSXRlbUJhY2tncm91bmRGaWxlIgphY2NlcHQ9ImltYWdlL3BuZyIgb25jaGFuZ2U9ImNoYW5nZUZpbGUodGhpcy5pZCwgJ2ltZycsIHRoaXMudmFsdWUpIiAvPgo8cCBjbGFzcz0iaW5mbyBtYi0wIj4KRmlsZSBtdXN0IGJlIGxvY2F0ZWQgaW4geW91ciBnYW1lIGRpcmVjdG9yeS9pbWcKPC9wPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJjYXJkIj4KPGgyIGNsYXNzPSJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gY29sbGFwc2VkIiBkYXRhLWJzLXRvZ2dsZT0iY29sbGFwc2UiCmRhdGEtYnMtdGFyZ2V0PSIjYWRkV2luZG93cyI+CkdvbGQgJiBHYW1lIEluZm8gV2luZG93CjxidXR0b24gY2xhc3M9ImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkiPgo8aSBjbGFzcz0iYmkgYmktY2hldnJvbi11cCBhcnJvdyI+PC9pPgo8L2J1dHRvbj4KPC9oMj4KPGRpdiBjbGFzcz0iY2FyZC1ib2R5IGNvbGxhcHNlIiBpZD0iYWRkV2luZG93cyI+CjxsYWJlbCBjbGFzcz0iZm9ybS1jaGVjayBmb3JtLXN3aXRjaCBtYi00Ij4KPGlucHV0IGNsYXNzPSJmb3JtLWNoZWNrLWlucHV0IiB0eXBlPSJjaGVja2JveCIgaWQ9InNob3dHb2xkV2luZG93IiBjaGVja2VkCm9uY2hhbmdlPSJvblNob3dHb2xkQ2hhbmdlKHNob3dHb2xkV2luZG93LmNoZWNrZWQpIiAvPgo8c3BhbiBjbGFzcz0iZm9ybS1jaGVjay1sYWJlbCI+U2hvdz88L3NwYW4+CjwvbGFiZWw+CjxkaXYgaWQ9ImdvbGRXaW5kb3dCb3giPgo8ZGl2IGNsYXNzPSJyb3cgbWItNCI+CjxkaXYgY2xhc3M9ImNvbCI+Cjx0ZXh0YXJlYSBjbGFzcz0iZm9ybS1jb250cm9sIiByb3dzPSIzIiBpZD0iZ2FtZUluZm9UZXh0TGVmdCIKb25ibHVyPSJvbkdhbWVJbmZvVGV4dExlZnRDaGFuZ2UoZ2FtZUluZm9UZXh0TGVmdC52YWx1ZSkiPjwvdGV4dGFyZWE+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPgo8dGV4dGFyZWEgY2xhc3M9ImZvcm0tY29udHJvbCIgcm93cz0iMyIgaWQ9ImdhbWVJbmZvVGV4dFJpZ2h0IgpvbmJsdXI9Im9uR2FtZUluZm9UZXh0UmlnaHRDaGFuZ2UoZ2FtZUluZm9UZXh0UmlnaHQudmFsdWUpIj48L3RleHRhcmVhPgo8L2Rpdj4KPC9kaXY+CjxwIGNsYXNzPSJpbmZvIj4KWW91IG1heSB1c2UgVGV4dCBDb2RlcyAoZS5nLiBcVlsxXSwgXENbMl0sIC4uLikuIFVzZQo8dWw+CjxsaSBjbGFzcz0iaW5mbyI+XCQgZm9yIGN1cnJlbnQgZ29sZDwvbGk+CjxsaSBjbGFzcz0iaW5mbyI+XE1OIGZvciBtYXAgbmFtZTwvbGk+CjxsaSBjbGFzcz0iaW5mbyI+XFBUIGZvciBwbGF5dGltZTwvbGk+CjxsaSBjbGFzcz0iaW5mbyI+XFZbMV0gZm9yIFZhcmlhYmxlIDE8L2xpPgo8L3VsPgo8L3A+CjxidXR0b24gY2xhc3M9ImJ0biBidG4tbGluayBteiIKb25jbGljaz0id2luZG93Lm9wZW4oJ2h0dHA6Ly93d3cueWFuZmx5Lm1vZS93aWtpL0NhdGVnb3J5OlRleHRfQ29kZXNfKE1aKScpIj4KTG9va3VwIGFsbCBUZXh0IENvZGVzCjxpIGNsYXNzPSJiaSBiaS1ib3gtYXJyb3ctdXAtcmlnaHQgbXMtMiI+PC9pPgo8L2J1dHRvbj4KPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1saW5rIG12IgpvbmNsaWNrPSJ3aW5kb3cub3BlbignaHR0cDovL3d3dy55YW5mbHkubW9lL3dpa2kvQ2F0ZWdvcnk6VGV4dF9Db2Rlc18oTVYpJykiPgpMb29rdXAgYWxsIFRleHQgQ29kZXMKPGkgY2xhc3M9ImJpIGJpLWJveC1hcnJvdy11cC1yaWdodCBtcy0yIj48L2k+CjwvYnV0dG9uPgo8aHI+CjxkaXYgY2xhc3M9InJvdyBhbGlnbi1pdGVtcy1lbmQgbXQtNCBtYi00Ij4KPGRpdiBjbGFzcz0iY29sIj4KPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5Vbmtub3duIE1hcCBSZWZlcmVuY2U8L2xhYmVsPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0idGV4dCIgaWQ9InVua25vd25NYXBOYW1lIgpwbGFjZWhvbGRlcj0iVW5rbm93biBSZWdpb24iIG9uYmx1cj0iY2hhbmdlVGV4dCh0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCBpbmZvIj4KVGV4dCB0byBzaG93IHdoZW4gdGhlIGN1cnJlbnQgTWFwIGhhcyBubyBEaXNwbGF5IE5hbWUKPC9kaXY+CjwvZGl2Pgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPkZvbnQgU2l6ZTwvbGFiZWw+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIG1iLTQiIHN0eWxlPSJ3aWR0aDogMjAwcHg7Ij4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPjxpIGNsYXNzPSJiaSBiaS1mb250cyI+PC9pPjwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9Im51bWJlciIgaWQ9ImdvbGRGb250U2l6ZSIKb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJyb3cgYWxpZ24taXRlbXMtZW5kIG1iLTQiPgo8ZGl2IGNsYXNzPSJjb2wiPgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPkJhY2tncm91bmQ8L2xhYmVsPgo8c2VsZWN0IGNsYXNzPSJmb3JtLXNlbGVjdCIgaWQ9ImdvbGRCYWNrZ3JvdW5kVHlwZSIKb25jaGFuZ2U9Im9uR29sZEJhY2tncm91bmRUeXBlQ2hhbmdlKGdvbGRCYWNrZ3JvdW5kVHlwZS52YWx1ZSkiPgo8b3B0aW9uIHZhbHVlPSJ3aW5kb3ciPldpbmRvdzwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJkaW1tZWQiPkRpbW1lZDwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJpbWFnZSI+SW1hZ2U8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0ibm9uZSI+Tm9uZTwvb3B0aW9uPgo8L3NlbGVjdD4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCI+CjxkaXYgaWQ9ImdvbGRCYWNrZ3JvdW5kRmlsZUJveCI+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIiB0eXBlPSJmaWxlIiBpZD0iZ29sZEJhY2tncm91bmRGaWxlIgphY2NlcHQ9ImltYWdlL3BuZyIgb25jaGFuZ2U9ImNoYW5nZUZpbGUodGhpcy5pZCwgJ2ltZycsIHRoaXMudmFsdWUpIiAvPgo8cCBjbGFzcz0iaW5mbyBtYi0wIj4KRmlsZSBtdXN0IGJlIGxvY2F0ZWQgaW4geW91ciBnYW1lIGRpcmVjdG9yeS9pbWcKPC9wPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjwvZGl2PgoKPGRpdiBjbGFzcz0ibXQteGwiPgo8ZGl2IGNsYXNzPSJkLWZsZXggYWxpZ24taXRlbXMtZW5kIGdhcC00Ij4KPGg0IGNsYXNzPSJtYi0xIj5UYXJnZXQgQWN0b3IgV2luZG93PC9oND4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4gYnRuLW91dGxpbmUtbGlnaHQiIG9uY2xpY2s9Im9wZW5DbG9zZVRhcmdldEFjdG9yV2luZG93KCkiPgo8aSBjbGFzcz0iYmkgYmktZXllIG1lLTIiPjwvaT4KT3Blbi9DbG9zZSBUYXJnZXQgQWN0b3IgV2luZG93CjwvYnV0dG9uPgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNhcmQiPgo8aDIgY2xhc3M9ImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBjb2xsYXBzZWQiIGRhdGEtYnMtdG9nZ2xlPSJjb2xsYXBzZSIKZGF0YS1icy10YXJnZXQ9IiN0YXJnZXRBY3RvcldpbmRvd0NhcmQxIj4KR2VuZXJhbAo8YnV0dG9uIGNsYXNzPSJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5Ij4KPGkgY2xhc3M9ImJpIGJpLWNoZXZyb24tdXAgYXJyb3ciPjwvaT4KPC9idXR0b24+CjwvaDI+CjxkaXYgY2xhc3M9ImNhcmQtYm9keSBjb2xsYXBzZSIgaWQ9InRhcmdldEFjdG9yV2luZG93Q2FyZDEiPgoKPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5XaWR0aDwvbGFiZWw+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIG1iLTQiIHN0eWxlPSJ3aWR0aDogMTByZW07Ij4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9Im51bWJlciIgaWQ9InRhcmdldEFjdG9yV2luZG93V2lkdGhQZXJjZW50YWdlIgpwbGFjZWhvbGRlcj0iNzAiIG9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPiU8L3NwYW4+CjwvZGl2Pgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPkhlaWdodDwvbGFiZWw+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIG1iLTIiIHN0eWxlPSJ3aWR0aDogMTByZW07Ij4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9Im51bWJlciIgaWQ9InRhcmdldEFjdG9yV2luZG93SGVpZ2h0UGVyY2VudGFnZSIKcGxhY2Vob2xkZXI9IjEwMCIgb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+JTwvc3Bhbj4KPC9kaXY+CjxwIGNsYXNzPSJpbmZvIG1iLTQiPlJlbGF0aXZlIHRvIHdpbmRvdyBzY3JlZW4gKGV4Y2x1ZGluZyBUb3VjaCBVSSBCdXR0b24gQXJlYSk8L3A+Cgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPkhvcml6b250YWwgUG9zaXRpb248L2xhYmVsPgo8c2VsZWN0IGNsYXNzPSJmb3JtLXNlbGVjdCIgaWQ9InRhcmdldEFjdG9yV2luZG93SG9yekFsaWduTW9kZSIKb25jaGFuZ2U9ImNoYW5nZVRleHQodGhpcy5pZCwgdGhpcy52YWx1ZSkiPgo8b3B0aW9uIHZhbHVlPSJkZWZhdWx0Ij5MZWZ0L1JpZ2h0IChSUEcgTWFrZXIgZGVmYXVsdCk8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0iY2VudGVyIj5DZW50ZXI8L29wdGlvbj4KPC9zZWxlY3Q+CjxwIGNsYXNzPSJpbmZvIG1iLTQiPk5vdCByZWZsZWN0ZWQgaGVyZSwgYnV0IGl0IHdpbGwgYmUgaW4gdGhlIHJlc3BlY3RpdmUgbWVudXMuPC9wPgoKPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5WZXJ0aWNhbCBBbGlnbjwvbGFiZWw+CjxkaXYgY2xhc3M9ImZvcm0tcm93IG1iLTQiPgo8ZGl2IGNsYXNzPSJidG4tZ3JvdXAgYnRuLWdyb3VwLWxnIj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJ0YXJnZXRBY3RvcldpbmRvd1ZlcnRBbGlnblRvcCIKb25jbGljaz0ib25UYXJnZXRBY3RvcldpbmRvd1ZlcnRBbGlnbigndG9wJykiPgo8aSBjbGFzcz0iYmkgYmktYWxpZ24tdG9wIj48L2k+CjwvYnV0dG9uPgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biIgaWQ9InRhcmdldEFjdG9yV2luZG93VmVydEFsaWduTWlkZGxlIgpvbmNsaWNrPSJvblRhcmdldEFjdG9yV2luZG93VmVydEFsaWduKCdtaWRkbGUnKSI+CjxpIGNsYXNzPSJiaSBiaS1hbGlnbi1taWRkbGUiPjwvaT4KPC9idXR0b24+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0idGFyZ2V0QWN0b3JXaW5kb3dWZXJ0QWxpZ25Cb3R0b20iCm9uY2xpY2s9Im9uVGFyZ2V0QWN0b3JXaW5kb3dWZXJ0QWxpZ24oJ2JvdHRvbScpIj4KPGkgY2xhc3M9ImJpIGJpLWFsaWduLWJvdHRvbSI+PC9pPgo8L2J1dHRvbj4KPC9kaXY+CjwvZGl2PgoKPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5PcmllbnRhdGlvbjwvbGFiZWw+CjxkaXYgY2xhc3M9ImZvcm0tcm93IG1iLTQiPgo8ZGl2IGNsYXNzPSJidG4tZ3JvdXAiPgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biIgaWQ9InRhcmdldEFjdG9yV2luZG93T3JpZW50YXRpb25EZWZhdWx0IgpvbmNsaWNrPSJvblRhcmdldEFjdG9yV2luZG93T3JpZW50YXRpb25DaGFuZ2UoJ2RlZmF1bHQnKSI+CjxpIGNsYXNzPSJiaSBiaS14LWxnIG1lLTIiPjwvaT5Eb24ndCBjaGFuZ2UKPC9idXR0b24+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0idGFyZ2V0QWN0b3JXaW5kb3dPcmllbnRhdGlvblJvd3MiCm9uY2xpY2s9Im9uVGFyZ2V0QWN0b3JXaW5kb3dPcmllbnRhdGlvbkNoYW5nZSgncm93cycpIj4KPGkgY2xhc3M9ImJpIGJpLWxheW91dC10aHJlZS1jb2x1bW5zIHJvdGF0ZS05MCBtZS0yIj48L2k+Um93cwo8L2J1dHRvbj4KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4iIGlkPSJ0YXJnZXRBY3RvcldpbmRvd09yaWVudGF0aW9uQ29sdW1ucyIKb25jbGljaz0ib25UYXJnZXRBY3RvcldpbmRvd09yaWVudGF0aW9uQ2hhbmdlKCdjb2x1bW5zJykiPgo8aSBjbGFzcz0iYmkgYmktbGF5b3V0LXRocmVlLWNvbHVtbnMgbWUtMiI+PC9pPkNvbHVtbnMKPC9idXR0b24+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0idGFyZ2V0QWN0b3JXaW5kb3dPcmllbnRhdGlvbkdyaWQiCm9uY2xpY2s9Im9uVGFyZ2V0QWN0b3JXaW5kb3dPcmllbnRhdGlvbkNoYW5nZSgnZ3JpZCcpIj4KPGkgY2xhc3M9ImJpIGJpLWdyaWQgcm90YXRlLTkwIG1lLTIiPjwvaT5HcmlkCjwvYnV0dG9uPgo8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJkLWZsZXggZ2FwLTQgbWItNCI+CjxkaXY+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+Q29sdW1uczwvbGFiZWw+CjxpbnB1dCB0eXBlPSJudW1iZXIiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIHN0eWxlPSJ3aWR0aDogNnJlbTsiCmlkPSJ0YXJnZXRBY3RvcldpbmRvd0NvbHMiIHBsYWNlaG9sZGVyPSIyIiBtaW49IjEiIG1heD0iMTAiCm9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIj4KPC9kaXY+CjxkaXY+CjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+Um93czwvbGFiZWw+CjxpbnB1dCB0eXBlPSJudW1iZXIiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIHN0eWxlPSJ3aWR0aDogNnJlbTsiCmlkPSJ0YXJnZXRBY3RvcldpbmRvd1Jvd3MiIHBsYWNlaG9sZGVyPSIyIiBtaW49IjEiIG1heD0iMTAiCm9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIj4KPC9kaXY+CjwvZGl2PgoKPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5CYWNrZ3JvdW5kIFR5cGU8L2xhYmVsPgo8c2VsZWN0IGNsYXNzPSJmb3JtLXNlbGVjdCBtYi00IiBpZD0idGFyZ2V0QWN0b3JXaW5kb3dCYWNrZ3JvdW5kVHlwZSIKb25jaGFuZ2U9ImNoYW5nZVRleHQodGhpcy5pZCwgdGhpcy52YWx1ZSkiPgo8b3B0aW9uIHZhbHVlPSJkZWZhdWx0Ij5Eb24ndCBjaGFuZ2U8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0id2luZG93Ij5XaW5kb3c8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0iZGltbWVkIj5EaW1tZWQ8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0iaW1hZ2UiPkltYWdlPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9Im5vbmUiPk5vbmU8L29wdGlvbj4KPC9zZWxlY3Q+Cgo8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJjYXJkIj4KPGgyIGNsYXNzPSJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gY29sbGFwc2VkIiBkYXRhLWJzLXRvZ2dsZT0iY29sbGFwc2UiCmRhdGEtYnMtdGFyZ2V0PSIjdGFyZ2V0QWN0b3JXaW5kb3dDYXJkMiI+CkFjdG9yIHJlbGF0ZWQKPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSI+CjxpIGNsYXNzPSJiaSBiaS1jaGV2cm9uLXVwIGFycm93Ij48L2k+CjwvYnV0dG9uPgo8L2gyPgo8ZGl2IGNsYXNzPSJjYXJkLWJvZHkgY29sbGFwc2UiIGlkPSJ0YXJnZXRBY3RvcldpbmRvd0NhcmQyIj4KCjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+QWN0b3IgUG9ydHJhaXQ8L2xhYmVsPgo8c2VsZWN0IGNsYXNzPSJmb3JtLXNlbGVjdCBtYi00IiBpZD0idGFyZ2V0QWN0b3JQb3J0cmFpdE1vZGUiCm9uY2hhbmdlPSJjaGFuZ2VUZXh0KHRoaXMuaWQsIHRoaXMudmFsdWUpIj4KPG9wdGlvbiB2YWx1ZT0iZGVmYXVsdCI+RG9uJ3QgY2hhbmdlPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9ImZhY2UiPkZhY2U8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0iYmF0dGxlciI+U1YgQmF0dGxlcjwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJtYXBTcHJpdGUiPk1hcCBTcHJpdGU8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0icG9ydHJhaXQiPkN1c3RvbSBJbWFnZTwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJub25lIj5Ob25lPC9vcHRpb24+Cjwvc2VsZWN0PgoKPGxhYmVsIGNsYXNzPSJmb3JtLWxhYmVsIj5Qb3J0cmFpdCBQb3NpdGlvbjwvbGFiZWw+CjxzZWxlY3QgY2xhc3M9ImZvcm0tc2VsZWN0IG1iLTQiIGlkPSJ0YXJnZXRBY3RvclBvcnRyYWl0UG9zaXRpb24iCm9uY2hhbmdlPSJjaGFuZ2VUZXh0KHRoaXMuaWQsIHRoaXMudmFsdWUpIj4KPG9wdGlvbiB2YWx1ZT0iZGVmYXVsdCI+RG9uJ3QgY2hhbmdlPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9InRvcExlZnQiPlRvcCBMZWZ0PC9vcHRpb24+CjxvcHRpb24gdmFsdWU9InRvcENlbnRlciI+VG9wIENlbnRlcjwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJ0b3BSaWdodCI+VG9wIFJpZ2h0PC9vcHRpb24+CjxvcHRpb24gdmFsdWU9Im1pZGRsZUxlZnQiPk1pZGRsZSBMZWZ0PC9vcHRpb24+CjxvcHRpb24gdmFsdWU9Im1pZGRsZUNlbnRlciI+TWlkZGxlIENlbnRlcjwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJtaWRkbGVSaWdodCI+TWlkZGxlIFJpZ2h0PC9vcHRpb24+CjxvcHRpb24gdmFsdWU9ImJvdHRvbUxlZnQiPkJvdHRvbSBMZWZ0PC9vcHRpb24+CjxvcHRpb24gdmFsdWU9ImJvdHRvbUNlbnRlciI+Qm90dG9tIENlbnRlcjwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJib3R0b21SaWdodCI+Qm90dG9tIFJpZ2h0PC9vcHRpb24+Cjwvc2VsZWN0PgoKPGRpdiBjbGFzcz0icm93IG1iLTQiPgo8ZGl2IGNsYXNzPSJjb2wiPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij54PC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0ibnVtYmVyIiBpZD0idGFyZ2V0QWN0b3JQb3J0cmFpdE9mZnNldFgiCnBsYWNlaG9sZGVyPSJrZWVwIiBvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij55PC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0ibnVtYmVyIiBpZD0idGFyZ2V0QWN0b3JQb3J0cmFpdE9mZnNldFkiCnBsYWNlaG9sZGVyPSJrZWVwIiBvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij48aSBjbGFzcz0iYmkgYmktYXJyb3dzLWFuZ2xlLWV4cGFuZCI+PC9pPjwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9Im51bWJlciIgaWQ9InRhcmdldEFjdG9yUG9ydHJhaXRTY2FsZSIKcGxhY2Vob2xkZXI9ImtlZXAiIG9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+JTwvc3Bhbj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KCjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+TmFtZSBQb3NpdGlvbjwvbGFiZWw+CjxzZWxlY3QgY2xhc3M9ImZvcm0tc2VsZWN0IG1iLTQiIGlkPSJ0YXJnZXRBY3Rvck5hbWVQb3NpdGlvbiIKb25jaGFuZ2U9ImNoYW5nZVRleHQodGhpcy5pZCwgdGhpcy52YWx1ZSkiPgo8b3B0aW9uIHZhbHVlPSJkZWZhdWx0Ij5Eb24ndCBjaGFuZ2U8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0idG9wTGVmdCI+VG9wIExlZnQ8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0idG9wQ2VudGVyIj5Ub3AgQ2VudGVyPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9InRvcFJpZ2h0Ij5Ub3AgUmlnaHQ8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0ibWlkZGxlTGVmdCI+TWlkZGxlIExlZnQ8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0ibWlkZGxlQ2VudGVyIj5NaWRkbGUgQ2VudGVyPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9Im1pZGRsZVJpZ2h0Ij5NaWRkbGUgUmlnaHQ8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0iYm90dG9tTGVmdCI+Qm90dG9tIExlZnQ8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0iYm90dG9tQ2VudGVyIj5Cb3R0b20gQ2VudGVyPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9ImJvdHRvbVJpZ2h0Ij5Cb3R0b20gUmlnaHQ8L29wdGlvbj4KPC9zZWxlY3Q+Cgo8ZGl2IGNsYXNzPSJyb3cgbWItNCI+CjxkaXYgY2xhc3M9ImNvbCI+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPng8L3NwYW4+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIiB0eXBlPSJudW1iZXIiIGlkPSJ0YXJnZXRBY3Rvck5hbWVPZmZzZXRYIgpwbGFjZWhvbGRlcj0ia2VlcCIgb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sIj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+eTwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9Im51bWJlciIgaWQ9InRhcmdldEFjdG9yTmFtZU9mZnNldFkiCnBsYWNlaG9sZGVyPSJrZWVwIiBvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij48aSBjbGFzcz0iYmkgYmktYXJyb3dzIj48L2k+PC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0ibnVtYmVyIiBpZD0idGFyZ2V0QWN0b3JOYW1lV2lkdGgiCnBsYWNlaG9sZGVyPSJrZWVwIiBvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KCjxsYWJlbCBjbGFzcz0iZm9ybS1sYWJlbCI+VGV4dCBBbGlnbjwvbGFiZWw+CjxkaXYgY2xhc3M9ImZvcm0tcm93IG1iLTQiPgo8ZGl2IGNsYXNzPSJidG4tZ3JvdXAiPgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biIgaWQ9InRhcmdldEFjdG9yTmFtZVRleHRBbGlnbkRlZmF1bHQiCm9uY2xpY2s9Im9uVGFyZ2V0QWN0b3JOYW1lVGV4dEFsaWduQ2hhbmdlKCdkZWZhdWx0JykiPgo8aSBjbGFzcz0iYmkgYmkteC1sZyBtZS0yIj48L2k+RG9uJ3QgY2hhbmdlCjwvYnV0dG9uPgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biIgaWQ9InRhcmdldEFjdG9yTmFtZVRleHRBbGlnbkxlZnQiCm9uY2xpY2s9Im9uVGFyZ2V0QWN0b3JOYW1lVGV4dEFsaWduQ2hhbmdlKCdsZWZ0JykiPgo8aSBjbGFzcz0iYmkgYmktdGV4dC1sZWZ0IG1lLTIiPjwvaT5MZWZ0CjwvYnV0dG9uPgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biIgaWQ9InRhcmdldEFjdG9yTmFtZVRleHRBbGlnbkNlbnRlciIKb25jbGljaz0ib25UYXJnZXRBY3Rvck5hbWVUZXh0QWxpZ25DaGFuZ2UoJ2NlbnRlcicpIj4KPGkgY2xhc3M9ImJpIGJpLXRleHQtY2VudGVyIG1lLTIiPjwvaT5DZW50ZXIKPC9idXR0b24+CjxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIiBpZD0idGFyZ2V0QWN0b3JOYW1lVGV4dEFsaWduUmlnaHQiCm9uY2xpY2s9Im9uVGFyZ2V0QWN0b3JOYW1lVGV4dEFsaWduQ2hhbmdlKCdyaWdodCcpIj4KPGkgY2xhc3M9ImJpIGJpLXRleHQtcmlnaHQgbWUtMiI+PC9pPlJpZ2h0CjwvYnV0dG9uPgo8L2Rpdj4KPC9kaXY+Cgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPkhQL01QL1RQIFBvc2l0aW9uPC9sYWJlbD4KPHNlbGVjdCBjbGFzcz0iZm9ybS1zZWxlY3QgbWItNCIgaWQ9InRhcmdldEFjdG9ySHBNcFRwUG9zaXRpb24iCm9uY2hhbmdlPSJjaGFuZ2VUZXh0KHRoaXMuaWQsIHRoaXMudmFsdWUpIj4KPG9wdGlvbiB2YWx1ZT0iZGVmYXVsdCI+RG9uJ3QgY2hhbmdlPC9vcHRpb24+CjxvcHRpb24gdmFsdWU9InRvcExlZnQiPlRvcCBMZWZ0PC9vcHRpb24+CjxvcHRpb24gdmFsdWU9InRvcENlbnRlciI+VG9wIENlbnRlcjwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJ0b3BSaWdodCI+VG9wIFJpZ2h0PC9vcHRpb24+CjxvcHRpb24gdmFsdWU9Im1pZGRsZUxlZnQiPk1pZGRsZSBMZWZ0PC9vcHRpb24+CjxvcHRpb24gdmFsdWU9Im1pZGRsZUNlbnRlciI+TWlkZGxlIENlbnRlcjwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJtaWRkbGVSaWdodCI+TWlkZGxlIFJpZ2h0PC9vcHRpb24+CjxvcHRpb24gdmFsdWU9ImJvdHRvbUxlZnQiPkJvdHRvbSBMZWZ0PC9vcHRpb24+CjxvcHRpb24gdmFsdWU9ImJvdHRvbUNlbnRlciI+Qm90dG9tIENlbnRlcjwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJib3R0b21SaWdodCI+Qm90dG9tIFJpZ2h0PC9vcHRpb24+Cjwvc2VsZWN0PgoKPGRpdiBjbGFzcz0icm93IG1iLTQiPgo8ZGl2IGNsYXNzPSJjb2wiPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij54PC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0ibnVtYmVyIiBpZD0idGFyZ2V0QWN0b3JIcE1wVHBPZmZzZXRYIgpwbGFjZWhvbGRlcj0ia2VlcCIgb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sIj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+eTwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9Im51bWJlciIgaWQ9InRhcmdldEFjdG9ySHBNcFRwT2Zmc2V0WSIKcGxhY2Vob2xkZXI9ImtlZXAiIG9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCI+CjxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIj4KPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLXRleHQiPjxpIGNsYXNzPSJiaSBiaS1hcnJvd3MiPjwvaT48L3NwYW4+CjxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIiB0eXBlPSJudW1iZXIiIGlkPSJ0YXJnZXRBY3RvckhwTXBUcFdpZHRoIgpwbGFjZWhvbGRlcj0ia2VlcCIgb25ibHVyPSJjaGFuZ2VOdW1iZXIodGhpcy5pZCwgdGhpcy52YWx1ZSkiIC8+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+Cgo8bGFiZWwgY2xhc3M9ImZvcm0tbGFiZWwiPlN0YXR1cyBFZmZlY3RzIFBvc2l0aW9uPC9sYWJlbD4KPHNlbGVjdCBjbGFzcz0iZm9ybS1zZWxlY3QgbWItNCIgaWQ9InRhcmdldEFjdG9yU3RhdHVzRWZmZWN0c1Bvc2l0aW9uIgpvbmNoYW5nZT0iY2hhbmdlVGV4dCh0aGlzLmlkLCB0aGlzLnZhbHVlKSI+CjxvcHRpb24gdmFsdWU9ImRlZmF1bHQiPkRvbid0IGNoYW5nZTwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJ0b3BMZWZ0Ij5Ub3AgTGVmdDwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJ0b3BDZW50ZXIiPlRvcCBDZW50ZXI8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0idG9wUmlnaHQiPlRvcCBSaWdodDwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJtaWRkbGVMZWZ0Ij5NaWRkbGUgTGVmdDwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJtaWRkbGVDZW50ZXIiPk1pZGRsZSBDZW50ZXI8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0ibWlkZGxlUmlnaHQiPk1pZGRsZSBSaWdodDwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJib3R0b21MZWZ0Ij5Cb3R0b20gTGVmdDwvb3B0aW9uPgo8b3B0aW9uIHZhbHVlPSJib3R0b21DZW50ZXIiPkJvdHRvbSBDZW50ZXI8L29wdGlvbj4KPG9wdGlvbiB2YWx1ZT0iYm90dG9tUmlnaHQiPkJvdHRvbSBSaWdodDwvb3B0aW9uPgo8L3NlbGVjdD4KCjxkaXYgY2xhc3M9InJvdyBtYi00Ij4KPGRpdiBjbGFzcz0iY29sIj4KPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAiPgo8c3BhbiBjbGFzcz0iaW5wdXQtZ3JvdXAtdGV4dCI+eDwvc3Bhbj4KPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHR5cGU9Im51bWJlciIgaWQ9InRhcmdldEFjdG9yU3RhdHVzRWZmZWN0c09mZnNldFgiCnBsYWNlaG9sZGVyPSJrZWVwIiBvbmJsdXI9ImNoYW5nZU51bWJlcih0aGlzLmlkLCB0aGlzLnZhbHVlKSIgLz4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wiPgo8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCI+CjxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC10ZXh0Ij55PC9zcGFuPgo8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdHlwZT0ibnVtYmVyIiBpZD0idGFyZ2V0QWN0b3JTdGF0dXNFZmZlY3RzT2Zmc2V0WSIKcGxhY2Vob2xkZXI9ImtlZXAiIG9uYmx1cj0iY2hhbmdlTnVtYmVyKHRoaXMuaWQsIHRoaXMudmFsdWUpIiAvPgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbCI+PC9kaXY+CjwvZGl2PgoKPGRpdiBjbGFzcz0iZC1mbGV4Ij4KPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtZS0yIiBvbmNsaWNrPSJhcHBseVN0YXRlcygpIj4KPGkgY2xhc3M9ImJpIGJpLWV5ZSBtZS0yIj48L2k+QXBwbHkgU3RhdHVzIEVmZmVjdHMKPC9idXR0b24+CjxidXR0b24gY2xhc3M9ImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbWUtMiIgb25jbGljaz0iY2xlYXJTdGF0ZXMoKSI+CjxpIGNsYXNzPSJiaSBiaS1leWUgbWUtMiI+PC9pPkNsZWFyIFN0YXR1cyBFZmZlY3RzCjwvYnV0dG9uPgo8L2Rpdj4KCjwvZGl2Pgo8L2Rpdj4KCjwvZGl2PgoKPGRpdiBjbGFzcz0iY2FyZC1mb290ZXIiPgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biBidG4tb3V0bGluZS1kYW5nZXIiIG9uY2xpY2s9Im9uUmVzdG9yZURlZmF1bHRzKCkiPgpSZXN0b3JlIERlZmF1bHRzCjwvYnV0dG9uPgo8L2Rpdj4KCjwvZGl2Pgo8L2Rpdj4KCjxkaXYgY2xhc3M9Im1vZGFsIGZhZGUiIGlkPSJpY29uUGlja2VyTW9kYWwiIHRhYmluZGV4PSItMSI+CjxzdHlsZT4KI2ljb24tc2VsZWN0b3Igewpwb3NpdGlvbjogcmVsYXRpdmU7CmRpc3BsYXk6IGlubGluZS1ibG9jazsKYm9yZGVyLXJhZGl1czogOHB4OwpvdmVyZmxvdzogaGlkZGVuOwp9CgojaGlnaGxpZ2h0IHsKcG9zaXRpb246IGFic29sdXRlOwp3aWR0aDogMzJweDsKaGVpZ2h0OiAzMnB4Owpib3JkZXI6IDNweCBzb2xpZCAjYmYwOTA5Owpib3gtc2l6aW5nOiBib3JkZXItYm94Owpwb2ludGVyLWV2ZW50czogbm9uZTsKZGlzcGxheTogbm9uZTsKYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTEwLCAyNTMsIDAuMSk7Cn0KCi5yZXN1bHQtYm94IHsKZm9udC1zaXplOiAxLjFyZW07CmZvbnQtd2VpZ2h0OiA1MDA7Cn0KPC9zdHlsZT4KPGRpdiBjbGFzcz0ibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCIgc3R5bGU9Im1heC13aWR0aDogOTB2dzsgd2lkdGg6IDkwdnc7Ij4KPGRpdiBjbGFzcz0ibW9kYWwtY29udGVudCI+Cgo8ZGl2IGNsYXNzPSJtb2RhbC1oZWFkZXIiPgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0bi1jbG9zZSIgZGF0YS1icy1kaXNtaXNzPSJtb2RhbCI+PC9idXR0b24+CjwvZGl2PgoKPGRpdiBjbGFzcz0ibW9kYWwtYm9keSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIiPgoKPGRpdiBzdHlsZT0id2lkdGg6IDUxMnB4IiBjbGFzcz0iZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciI+Cgo8ZGl2IGNsYXNzPSJhbGVydCBhbGVydC1saWdodCBtdC00IG1iLTQiPgo8c3BhbiBjbGFzcz0iYmkgYmktbGlnaHRidWxiIj48L3NwYW4+ClRpcDogRG91YmxlLWNsaWNrIGFuIGljb24gdG8gc2VsZWN0ICYgY2xvc2UgZGlhbG9nLgo8L2Rpdj4KCjxkaXYgaWQ9Imljb24tc2VsZWN0b3IiIGNsYXNzPSJwb3NpdGlvbi1yZWxhdGl2ZSBkLWlubGluZS1ibG9jayBib3JkZXIgcm91bmRlZCI+CjxpbWcgaWQ9Imljb25TcHJpdGUiIHNyYz0iLi4vaW1nL3N5c3RlbS9JY29uU2V0LnBuZyIgYWx0PSJJY29ucyI+CjxkaXYgaWQ9ImhpZ2hsaWdodCI+PC9kaXY+CjwvZGl2PgoKPC9kaXY+CjwvZGl2PgoKPGRpdiBjbGFzcz0ibW9kYWwtZm9vdGVyIj4KPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1wcmltYXJ5IiBvbmNsaWNrPSJvbkNob29zZUljb25Db25maXJtKCkiPkNvbmZpcm08L2J1dHRvbj4KPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSIgZGF0YS1icy1kaXNtaXNzPSJtb2RhbCI+Q2FuY2VsPC9idXR0b24+CjwvZGl2PgoKPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9ib2R5Pg=="
const commonJs  = "DQokKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7DQogICAgY29uc3QgcnBnTWFrZXJOYW1lID0gd2luZG93Lm9wZW5lciA/IHdpbmRvdy5vcGVuZXIuVXRpbHMuUlBHTUFLRVJfTkFNRSA6ICdNWic7DQogICAgJChycGdNYWtlck5hbWUgPT0gJ01aJyA/ICcubXYnIDogJy5teicpLmhpZGUoKTsNCn0pOw0KDQokKGRvY3VtZW50KS5yZWFkeSgoKSA9Pg0KICAgICQoJy5pbml0aWFsbHktaGlkZGVuJykNCiAgICAgICAgLmNzcygnZGlzcGxheScsICdub25lJykNCiAgICAgICAgLnJlbW92ZUNsYXNzKCdpbml0aWFsbHktaGlkZGVuJykNCik7DQoNCmNvbnN0IGhleENvbG9ycyA9IFsNCiAgICAnI2ZmZmZmZicsDQogICAgJyMyMEEwRDYnLA0KICAgICcjRkY3ODRDJywNCiAgICAnIzY2Q0M0MCcsDQogICAgJyM5OUNDRkYnLA0KICAgICcjQ0NDMEZGJywNCiAgICAnI0ZGRkZBMCcsDQogICAgJyM4MDgwODAnLA0KICAgICcjQzBDMEMwJywNCiAgICAnIzIwODBDQycsDQogICAgJyNGRjM4MTAnLA0KICAgICcjMDBBMDEwJywNCiAgICAnIzNFOUFERScsDQogICAgJyNBMDk4RkYnLA0KICAgICcjRkZDQzIwJywNCiAgICAnIzAwMDAwMCcsDQogICAgJyM4NEFBRkYnLA0KICAgICcjRkZGRjQwJywNCiAgICAnI0ZGMjAyMCcsDQogICAgJyMyMDIwNDAnLA0KICAgICcjRTA4MDQwJywNCiAgICAnI0YwQzA0MCcsDQogICAgJyM0MDgwQzAnLA0KICAgICcjNDBDMEYwJywNCiAgICAnIzgwRkY4MCcsDQogICAgJyNDMDgwODAnLA0KICAgICcjODA4MEZGJywNCiAgICAnI0ZGODBGRicsDQogICAgJyMwMEEwNDAnLA0KICAgICcjMDBFMDYwJywNCiAgICAnI0EwNjBFMCcsDQogICAgJyNDMDgwRkYnLA0KXTsNCg0KZnVuY3Rpb24gY29sb3JDb2RlVG9IZXgoY29sb3IpIHsNCiAgICByZXR1cm4gaGV4Q29sb3JzW2NvbG9yXSB8fCAnI2ZmZmZmZic7DQp9DQoNCiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHsNCiAgICAkKCcubXktY29sb3ItcGlja2VyJykuZWFjaCgoXywgZWxlbWVudCkgPT4gew0KICAgICAgICBoZXhDb2xvcnMuZm9yRWFjaCgoaGV4LCBpKSA9PiAkKGVsZW1lbnQpDQogICAgICAgICAgICAuYXBwZW5kKCQoJzxvcHRpb24+PC9vcHRpb24+JykNCiAgICAgICAgICAgICAgICAudmFsKGkpDQogICAgICAgICAgICAgICAgLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGhleCkNCiAgICAgICAgICAgICkpDQogICAgfSk7DQp9KTsNCg0KdmFyIGNvbmZpZyA9IHsgfTsNCg0KZnVuY3Rpb24gbG9hZENvbmZpZygpIHsNCiAgICByZWFkRmlsZSgNCiAgICAgICAgJ3VpY3VzdG9tLycgKyBDT05GSUdfTkFNRSwNCiAgICAgICAgKGRhdGEpID0+IE9iamVjdC5hc3NpZ24oY29uZmlnLCBkYXRhKSwNCiAgICAgICAgKCkgPT4gY29uZmlnID0gZ2V0VGVtcGxhdGUoKSwNCiAgICAgICAgKCkgPT4gc3luY0Zvcm1JbnB1dHMoKSwNCiAgICApOw0KfQ0KDQpmdW5jdGlvbiBvblNhdmUoKSB7DQogICAgd3JpdGVGaWxlKCd1aWN1c3RvbS8nICsgQ09ORklHX05BTUUsIGNvbmZpZyk7DQp9DQoNCmZ1bmN0aW9uIG9uUXVpY2tUZW1wbGF0ZSh0ZW1wbGF0ZSkgew0KICAgIGNvbmZpZyA9IGdldFRlbXBsYXRlKHRlbXBsYXRlKTsNCg0KICAgIHN5bmNGb3JtSW5wdXRzKCk7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uUmVzdG9yZURlZmF1bHRzKCkgew0KICAgIG9uUXVpY2tUZW1wbGF0ZShudWxsKTsNCn0NCg0KZnVuY3Rpb24gY2hhbmdlVGV4dChrZXksIHZhbHVlKSB7DQogICAgY29uZmlnW2tleV0gPSB2YWx1ZSAhPT0gJycgPyB2YWx1ZSA6IHVuZGVmaW5lZDsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gY2hhbmdlTnVtYmVyKGtleSwgdmFsdWUpIHsNCiAgICBjb25maWdba2V5XSA9IHZhbHVlICE9PSAnJyA/IE51bWJlcih2YWx1ZSkgOiB1bmRlZmluZWQ7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIGNoYW5nZUJvb2xlYW4oa2V5LCBjaGVja2VkKSB7DQogICAgY29uZmlnW2tleV0gPSBjaGVja2VkOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBjaGFuZ2VGaWxlKGtleSwgZm9sZGVyLCBmaWxlKSB7DQogICAgY29uZmlnW2tleV0gPSB1c2VyRmlsZVRvTG9jYWxGaWxlKGZvbGRlciwgZmlsZSk7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIHVzZXJGaWxlVG9Mb2NhbEZpbGUoZm9sZGVyLCBmaWxlcGF0aCkgew0KICAgIHJldHVybiBmaWxlcGF0aA0KICAgICAgICA/IGZvbGRlciArICcvJyArIGZpbGVwYXRoLnJlcGxhY2UoL1xcL2csICcvJykuc3BsaXQoJy8nICsgZm9sZGVyICsgJy8nKVsxXQ0KICAgICAgICA6IG51bGw7DQp9DQoNCmZ1bmN0aW9uIGNoYW5nZVRleHRBbGlnbihmdWxsRWxlbWVudElkKSB7DQogICAgY2hhbmdlQnV0dG9uR3JvdXAoZnVsbEVsZW1lbnRJZCwgWydsZWZ0JywgJ2NlbnRlcicsICdyaWdodCddKTsNCn0NCg0KZnVuY3Rpb24gY2hhbmdlVmVydEFsaWduKGZ1bGxFbGVtZW50SWQpIHsNCiAgICBjaGFuZ2VCdXR0b25Hcm91cChmdWxsRWxlbWVudElkLCBbJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJ10pOw0KfQ0KDQpmdW5jdGlvbiBjaGFuZ2U5RGlyKGZ1bGxFbGVtZW50SWQpIHsgIA0KICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbDQogICAgICAgICd0b3BMZWZ0JywgICAgICAndG9wQ2VudGVyJywgICAgICAgICd0b3BSaWdodCcsDQogICAgICAgICdtaWRkbGVMZWZ0JywgICAnbWlkZGxlQ2VudGVyJywgICAgICdtaWRkbGVSaWdodCcsDQogICAgICAgICdib3R0b21MZWZ0JywgICAnYm90dG9tQ2VudGVyJywgICAgICdib3R0b21SaWdodCcsDQogICAgXTsNCg0KICAgIGNoYW5nZUJ1dHRvbkdyb3VwKGZ1bGxFbGVtZW50SWQsIGRpcmVjdGlvbnMpOw0KfQ0KDQpmdW5jdGlvbiBjaGFuZ2VCdXR0b25Hcm91cChmdWxsRWxlbWVudElkLCBidXR0b25zKSB7DQogICAgY29uc3QgYWN0aXZlQnV0dG9uID0gYnV0dG9ucy5maW5kKGl0ZW0gPT4gZnVsbEVsZW1lbnRJZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGl0ZW0udG9Mb3dlckNhc2UoKSkpOw0KDQogICAgaWYgKGFjdGl2ZUJ1dHRvbikgew0KICAgICAgICBjb25zdCBrZXkgPSBmdWxsRWxlbWVudElkLnNsaWNlKDAsIGZ1bGxFbGVtZW50SWQubGVuZ3RoIC0gYWN0aXZlQnV0dG9uLmxlbmd0aCk7DQogICAgICAgIGNvbmZpZ1trZXldID0gYWN0aXZlQnV0dG9uOw0KDQogICAgICAgIHRvZ2dsZUJ1dHRvbnMoJyMnICsga2V5LCBidXR0b25zLCBhY3RpdmVCdXR0b24pOw0KICAgICAgICBvblNhdmUoKTsNCiAgICB9DQp9DQoNCmZ1bmN0aW9uIHRvZ2dsZTlEaXJCdXR0b25zKGVsZW1lbnRJZCwgc2VsZWN0ZWRWYWx1ZSkgew0KICAgIHRvZ2dsZUJ1dHRvbnMoDQogICAgICAgIGVsZW1lbnRJZCwNCiAgICAgICAgWw0KICAgICAgICAgICAgJ3RvcExlZnQnLCAgICAgICd0b3BDZW50ZXInLCAgICAgICAgJ3RvcFJpZ2h0JywNCiAgICAgICAgICAgICdtaWRkbGVMZWZ0JywgICAnbWlkZGxlQ2VudGVyJywgICAgICdtaWRkbGVSaWdodCcsDQogICAgICAgICAgICAnYm90dG9tTGVmdCcsICAgJ2JvdHRvbUNlbnRlcicsICAgICAnYm90dG9tUmlnaHQnLA0KICAgICAgICBdLA0KICAgICAgICBzZWxlY3RlZFZhbHVlLA0KICAgICk7DQp9DQoNCmZ1bmN0aW9uIHRvZ2dsZUJ1dHRvbnMoZWxlbWVudElkLCB2YWx1ZXMsIHNlbGVjdGVkVmFsdWUpIHsNCiAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHRvZ2dsZUJ1dHRvbigNCiAgICAgICAgZWxlbWVudElkICsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHZhbHVlKSwNCiAgICAgICAgdmFsdWUgPT0gc2VsZWN0ZWRWYWx1ZSwNCiAgICApKTsNCn0NCg0KZnVuY3Rpb24gdG9nZ2xlQnV0dG9uKGVsZW1lbnRJZCwgYikgew0KICAgIGINCiAgICAgICAgPyAkKGVsZW1lbnRJZCkucmVtb3ZlQ2xhc3MoJ2J0bi1vdXRsaW5lLXByaW1hcnknKS5hZGRDbGFzcygnYnRuLXByaW1hcnknKQ0KICAgICAgICA6ICQoZWxlbWVudElkKS5yZW1vdmVDbGFzcygnYnRuLXByaW1hcnknKS5hZGRDbGFzcygnYnRuLW91dGxpbmUtcHJpbWFyeScpOw0KfQ0KDQpmdW5jdGlvbiB0b2dnbGVWaXNpYmlsaXR5KGVsZW1lbnRJZCwgYikgew0KICAgIGINCiAgICAgICAgPyAkKGVsZW1lbnRJZCkuc2hvdygpDQogICAgICAgIDogJChlbGVtZW50SWQpLmhpZGUoKTsNCn0NCg0KZnVuY3Rpb24gdG9nZ2xlRW5hYmxlKGVsZW1lbnRJZCwgYikgew0KICAgICQoZWxlbWVudElkKS5wcm9wKCdkaXNhYmxlZCcsICFiKTsNCn0NCg0KZnVuY3Rpb24gY2hhbmdlVGV4dENvbG9yKGVsZW1lbnRJZCwgdGV4dENvbG9yKSB7DQogICAgJCgnIycgKyBlbGVtZW50SWQgKyAnU3BhbicpLmNzcygndGV4dC1kZWNvcmF0aW9uLWNvbG9yJywgY29sb3JDb2RlVG9IZXgodGV4dENvbG9yKSk7DQoNCiAgICBjb25maWdbZWxlbWVudElkXSA9IE51bWJlcih0ZXh0Q29sb3IpOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBjaGFuZ2VDb2xvcihrZXksIHZhbHVlKSB7DQogICAgY2hhbmdlVGV4dChrZXksIHZhbHVlKTsNCn0NCg0KZnVuY3Rpb24gb25SZXNldEdhdWdlQ29sb3IodHlwZSkgew0KICAgIHdpbmRvd1snZ2F1Z2VDb2xvcicgKyB0eXBlICsgJzEnXS52YWx1ZSA9IGdldFRlbXBsYXRlKClbJ2dhdWdlQ29sb3InICsgdHlwZSArICcxJ107DQogICAgd2luZG93WydnYXVnZUNvbG9yJyArIHR5cGUgKyAnMiddLnZhbHVlID0gZ2V0VGVtcGxhdGUoKVsnZ2F1Z2VDb2xvcicgKyB0eXBlICsgJzInXTsNCg0KICAgIGNvbmZpZ1snZ2F1Z2VDb2xvcicgKyB0eXBlICsgJzEnXSA9IGdldFRlbXBsYXRlKClbJ2dhdWdlQ29sb3InICsgdHlwZSArICcxJ107DQogICAgY29uZmlnWydnYXVnZUNvbG9yJyArIHR5cGUgKyAnMiddID0gZ2V0VGVtcGxhdGUoKVsnZ2F1Z2VDb2xvcicgKyB0eXBlICsgJzInXTsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25SZXNldEdhdWdlQmFja2dyb3VuZENvbG9yKHR5cGUpIHsNCiAgICB3aW5kb3dbJ2dhdWdlQmFja2dyb3VuZENvbG9yJyArIHR5cGVdLnZhbHVlID0gZ2V0VGVtcGxhdGUoKVsnZ2F1Z2VCYWNrZ3JvdW5kQ29sb3InICsgdHlwZV07DQoNCiAgICBjb25maWdbJ2dhdWdlQmFja2dyb3VuZENvbG9yJyArIHR5cGVdID0gZ2V0VGVtcGxhdGUoKVsnZ2F1Z2VCYWNrZ3JvdW5kQ29sb3InICsgdHlwZV07DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uSGVscFdpbmRvd0JhY2tncm91bmRUeXBlQ2hhbmdlKHR5cGUpIHsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjaGVscFdpbmRvd0JhY2tncm91bmRGaWxlQm94JywgJ2ltYWdlJyA9PSB0eXBlKTsNCiAgICANCiAgICBjb25maWcuaGVscFdpbmRvd0JhY2tncm91bmRUeXBlID0gdHlwZTsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25PdmVycmlkZUhlbHBXaW5kb3dDaGFuZ2UoY2hlY2tlZCkgew0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNoZWxwV2luZG93RmlsZUJveCcsIGNoZWNrZWQpOw0KICAgIA0KICAgIGNvbmZpZy5vdmVycmlkZUhlbHBXaW5kb3dTa2luID0gY2hlY2tlZDsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gc3luY0xheW91dDJGaWVsZHMod2luZG93VHlwZXMpIHsNCiAgICB3aW5kb3dUeXBlcy5mb3JFYWNoKHdpbmRvd1R5cGUgPT4gew0KICAgICAgICBjb25zdCBrZXkgPSBgb3ZlcnJpZGUke2NhcGl0YWxpemVGaXJzdExldHRlcih3aW5kb3dUeXBlKX1SZWN0YW5nbGVgOw0KICAgICAgICB3aW5kb3dba2V5XS5jaGVja2VkID0gY29uZmlnW2tleV07DQoNCiAgICAgICAgdG9nZ2xlVmlzaWJpbGl0eShgIyR7d2luZG93VHlwZX1SZWN0YW5nbGVCeVZhbHVlc0JveGAsIGNvbmZpZ1trZXldKTsNCg0KICAgICAgICBbJ3gnLCAneScsICd3aWR0aCcsICdoZWlnaHQnXQ0KICAgICAgICAgICAgLm1hcChwcm9wID0+IGAke3dpbmRvd1R5cGV9UmVjdGFuZ2xlXyR7cHJvcH1gKQ0KICAgICAgICAgICAgLmZvckVhY2goa2V5ID0+IHdpbmRvd1trZXldLnZhbHVlID0gY29uZmlnW2tleV0pOw0KICAgIH0pOw0KfQ0KDQpmdW5jdGlvbiBvbkxheW91dDJDaGVja2JveENoYW5nZSh3aW5kb3dUeXBlLCBjaGVja2VkKSB7DQogICAgdG9nZ2xlVmlzaWJpbGl0eShgIyR7d2luZG93VHlwZX1SZWN0YW5nbGVCeVZhbHVlc0JveGAsIGNoZWNrZWQpOw0KICAgIA0KICAgIGNvbnN0IGtleSA9IGBvdmVycmlkZSR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHdpbmRvd1R5cGUpfVJlY3RhbmdsZWA7DQogICAgY2hhbmdlQm9vbGVhbihrZXksIGNoZWNrZWQpOw0KfQ0KDQpmdW5jdGlvbiBvbkxheW91dDJWYWx1ZUNoYW5nZSh3aW5kb3dUeXBlLCBwcm9wLCB2YWx1ZSkgew0KICAgIGNvbnN0IGtleSA9IGAke3dpbmRvd1R5cGV9UmVjdGFuZ2xlXyR7cHJvcH1gOw0KDQogICAgY2hhbmdlTnVtYmVyKGtleSwgdmFsdWUpOw0KfQ0KDQpmdW5jdGlvbiBjaGVja1BsdWdpblBhcmFtZXRlcihwbHVnaW5OYW1lLCBwYXJhbWV0ZXJOYW1lLCB2YWx1ZVRvQ2hlY2spIHsNCiAgICBpZiAod2luZG93Lm9wZW5lcikgew0KICAgICAgICBjb25zdCBwYXJhbXMgPSB3aW5kb3cub3BlbmVyLlBsdWdpbk1hbmFnZXIucGFyYW1ldGVycyhwbHVnaW5OYW1lKTsNCiAgICAgICAgcmV0dXJuIHBhcmFtcyAmJiBwYXJhbXNbcGFyYW1ldGVyTmFtZV0gPT09IHZhbHVlVG9DaGVjazsNCiAgICB9DQogICAgcmV0dXJuIGZhbHNlOw0KfQ0KDQoNCmZ1bmN0aW9uIHJlYWRGaWxlKGZpbGVQYXRoLCBmLCBlcnJvciwgdGhlbikgew0KICAgIHRyeSB7DQogICAgICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTsNCiAgICAgICAgZnMucmVhZEZpbGUoZmlsZVBhdGgsICd1dGYtOCcsIChfLCBkYXRhKSA9PiB7DQogICAgICAgICAgICBpZiAoZGF0YSkgew0KICAgICAgICAgICAgICAgIGYoSlNPTi5wYXJzZShkYXRhKSk7DQogICAgICAgICAgICB9IGVsc2Ugew0KICAgICAgICAgICAgICAgIGVycm9yKCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICB0aGVuKCk7DQogICAgICAgIH0pOw0KICAgIH0gY2F0Y2ggKF8pIHsNCiAgICAgICAgZXJyb3IoKTsNCiAgICAgICAgdGhlbigpOw0KICAgIH0NCn0NCg0KZnVuY3Rpb24gd3JpdGVGaWxlKGZpbGVwYXRoLCBkYXRhKSB7DQogICAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpOw0KICAgIGZzLndyaXRlRmlsZSgNCiAgICAgICAgZmlsZXBhdGgsDQogICAgICAgIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpLA0KICAgICAgICAndXRmLTgnLA0KICAgICAgICAoZXJyb3IpID0+IGVycm9yICYmIGFsZXJ0KCJTb21ldGhpbmcgd2VudCB3cm9uZzogIiArIGVycm9yKSwNCiAgICApOw0KfQ0KDQpmdW5jdGlvbiBmZXRjaExhdGVzdFZlcnNpb24oY3VycmVudFZlcnNpb24sIGV4dHJhY3RWZXJzaW9uT25TZXJ2ZXIpIHsNCiAgICAkLmFqYXgoew0KICAgICAgICB1cmw6ICAgICAgICAnaHR0cDovL2Rvd25sb2Fkcy5hZXJvc3lzLmJsb2cvcGx1Z2lucy9uZXdzLmpzb24nLA0KICAgICAgICB0eXBlOiAgICAgICAnR0VUJywNCiAgICAgICAgZGF0YVR5cGU6ICAgJ2pzb24nLA0KICAgICAgICB0aW1lb3V0OiAgICA1MDAwLA0KICAgICAgICBjYWNoZTogICAgICBmYWxzZSwNCiAgICAgICAgZXJyb3I6ICAgICAgKCkgPT4gKHsgfSksDQogICAgICAgIHN1Y2Nlc3M6ICAgIChkYXRhKSA9PiB7DQogICAgICAgICAgICBjb25zdCB2ZXJzaW9uT25TZXJ2ZXIgPSBleHRyYWN0VmVyc2lvbk9uU2VydmVyKGRhdGEpOw0KDQogICAgICAgICAgICBpZiAodmVyc2lvbk9uU2VydmVyICYmICFjb21wYXJlVmVyc2lvbnMoY3VycmVudFZlcnNpb24sIHZlcnNpb25PblNlcnZlcikpIHsNCiAgICAgICAgICAgICAgICAkKCcjbmV3VmVyc2lvbkF2YWlsYWJsZUJveCcpLnNob3coKTsNCiAgICAgICAgICAgICAgICAkKCcjbmV3VmVyc2lvbkF2YWlsYWJsZU1lc3NhZ2UnKS50ZXh0KCJBIG5ldyB2ZXJzaW9uIG9mIHRoaXMgcGx1Z2luIGlzIGF2YWlsYWJsZTogIiArIHZlcnNpb25PblNlcnZlcik7DQogICAgICAgICAgICB9DQogICAgICAgIH0sDQogICAgfSk7DQp9DQoNCmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHsNCiAgICBpZiAoIXN0cmluZyB8fCBzdHJpbmcubGVuZ3RoID09PSAwKSByZXR1cm4gc3RyaW5nOw0KICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7DQp9DQoNCmZ1bmN0aW9uIGNvbXBhcmVWZXJzaW9ucyhhLCBiKSB7DQogICAgaWYgKHR5cGVvZiBhICE9PSAnc3RyaW5nJykgcmV0dXJuIGZhbHNlOw0KICAgIGlmICh0eXBlb2YgYiAhPT0gJ3N0cmluZycpIHJldHVybiBmYWxzZTsNCg0KICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7DQogICAgICAgIGlmIChOdW1iZXIoYS5zcGxpdCgnLicpW2ldKSA+IE51bWJlcihiLnNwbGl0KCcuJylbaV0pKSB7DQogICAgICAgICAgICByZXR1cm4gdHJ1ZTsNCiAgICAgICAgfQ0KICAgICAgICBpZiAoTnVtYmVyKGEuc3BsaXQoJy4nKVtpXSkgPCBOdW1iZXIoYi5zcGxpdCgnLicpW2ldKSkgew0KICAgICAgICAgICAgcmV0dXJuIGZhbHNlOw0KICAgICAgICB9DQogICAgfQ0KICAgIHJldHVybiB0cnVlOw0KfQ0KDQpsZXQgY3VycmVudFRhcmdldElucHV0ICAgICAgICAgID0gbnVsbDsNCmxldCBjdXJyZW50SWNvblBpY2tlckNvbmZpZ0tleSAgPSBudWxsOw0KbGV0IHNlbGVjdGVkSWNvbkluZGV4ICAgICAgICAgICA9IG51bGw7DQoNCmNvbnN0IElDT05TX1BFUl9ST1cgPSAxNjsNCg0KY29uc3QgSUNPTl9TSVpFID0gd2luZG93ICYmIHdpbmRvdy5vcGVuZXIgJiYgd2luZG93Lm9wZW5lci4kZGF0YVN5c3RlbSAmJiB3aW5kb3cub3BlbmVyLiRkYXRhU3lzdGVtLmljb25TaXplDQogICAgPyB3aW5kb3cub3BlbmVyLiRkYXRhU3lzdGVtLmljb25TaXplDQogICAgOiAzMjsNCg0KDQpmdW5jdGlvbiBpbml0SWNvblBpY2tlcigpIHsNCiAgICBjb25zdCBzcHJpdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWNvblNwcml0ZScpOw0KDQogICAgc3ByaXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7DQogICAgICAgIHNlbGVjdGVkSWNvbkluZGV4ID0gZ2V0SGlnaGxpZ2h0ZWRJY29uSW5kZXgoZSk7DQogICAgICAgIG1vdmVJY29uSGlnaGxpZ2h0KHNlbGVjdGVkSWNvbkluZGV4KTsNCiAgICB9KTsNCg0KICAgIHNwcml0ZS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGUgPT4gew0KICAgICAgICBjb25zdCBpY29uSW5kZXggPSBnZXRIaWdobGlnaHRlZEljb25JbmRleChlKTsNCg0KICAgICAgICBpZiAodHlwZW9mIGljb25JbmRleCA9PSAnbnVtYmVyJykgew0KICAgICAgICAgICAgc2VsZWN0ZWRJY29uSW5kZXggPSBpY29uSW5kZXg7DQogICAgICAgICAgICBvbkNob29zZUljb25Db25maXJtKCk7DQogICAgICAgIH0NCiAgICB9KTsNCn0NCg0KZnVuY3Rpb24gZ2V0SGlnaGxpZ2h0ZWRJY29uSW5kZXgoZSkgew0KICAgIGNvbnN0IHJlY3QgID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7DQogICAgY29uc3QgeCAgICAgPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7DQogICAgY29uc3QgeSAgICAgPSBlLmNsaWVudFkgLSByZWN0LnRvcDsNCiAgICBjb25zdCBjb2wgICA9IE1hdGguZmxvb3IoeCAvIElDT05fU0laRSk7DQogICAgY29uc3Qgcm93ICAgPSBNYXRoLmZsb29yKHkgLyBJQ09OX1NJWkUpOw0KICAgIA0KICAgIHJldHVybiByb3cgKiBJQ09OU19QRVJfUk9XICsgY29sOw0KfQ0KDQpmdW5jdGlvbiBtb3ZlSWNvbkhpZ2hsaWdodChpbmRleCkgew0KICAgIGNvbnN0IGhpZ2hsaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWdobGlnaHQnKTsNCiAgICANCiAgICBoaWdobGlnaHQuc3R5bGUubGVmdCAgICAgICAgPSAoKGluZGV4ICUgSUNPTlNfUEVSX1JPVykgKiBJQ09OX1NJWkUpICsgInB4IjsNCiAgICBoaWdobGlnaHQuc3R5bGUudG9wICAgICAgICAgPSAoTWF0aC5mbG9vcihpbmRleCAvIElDT05TX1BFUl9ST1cpICogSUNPTl9TSVpFKSArICJweCI7DQogICAgaGlnaGxpZ2h0LnN0eWxlLmRpc3BsYXkgICAgID0gImJsb2NrIjsNCn0NCg0KZnVuY3Rpb24gb25DaG9vc2VJY29uQ29uZmlybSgpIHsNCiAgICBjbG9zZUljb25QaWNrZXIoKTsNCiAgICANCiAgICBpZiAoY3VycmVudFRhcmdldElucHV0KSB7DQogICAgICAgIGN1cnJlbnRUYXJnZXRJbnB1dC52YWx1ZSA9IHNlbGVjdGVkSWNvbkluZGV4Ow0KICAgICAgICBjaGFuZ2VOdW1iZXIoY3VycmVudEljb25QaWNrZXJDb25maWdLZXksIHNlbGVjdGVkSWNvbkluZGV4KTsNCiAgICB9DQp9DQoNCmZ1bmN0aW9uIGNsb3NlSWNvblBpY2tlcigpIHsNCiAgICAkKCcjaWNvblBpY2tlck1vZGFsJykubW9kYWwoJ2hpZGUnKTsNCn0NCg0KJChkb2N1bWVudCkucmVhZHkoKCkgPT4gew0KICAgIGluaXRJY29uUGlja2VyKCk7DQogICAgDQogICAgJCgnLmNob29zZS1pY29uJykub24oJ2NsaWNrJywgZSA9PiB7DQogICAgICAgIGN1cnJlbnRUYXJnZXRJbnB1dCAgICAgICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFyZ2V0KTsNCiAgICAgICAgY3VycmVudEljb25QaWNrZXJDb25maWdLZXkgID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY29uZmlnRmllbGQ7DQogICAgICAgIHNlbGVjdGVkSWNvbkluZGV4ICAgICAgICAgICA9IGNvbmZpZ1tjdXJyZW50SWNvblBpY2tlckNvbmZpZ0tleV0gfHwgMDsNCiAgICAgICAgDQogICAgICAgIG1vdmVJY29uSGlnaGxpZ2h0KHNlbGVjdGVkSWNvbkluZGV4KTsNCg0KICAgICAgICAkKCcjaWNvblBpY2tlck1vZGFsJykubW9kYWwoJ3Nob3cnKTsNCiAgICB9KTsNCn0pOw0K"
const indexJs   = "DQpjb25zdCBDT05GSUdfTkFNRSAgID0gJ2NvbmZpZy5qc29uJzsNCmNvbnN0IHBsdWdpblZlcnNpb24gPSB3aW5kb3cub3BlbmVyID8gd2luZG93Lm9wZW5lci5JbXBvcnRlZC5NS19VSUN1c3RvbWl6ZXIgOiAnMS4wLjAnOw0KY29uc3QgUlBHTUFLRVJfTkFNRSA9IHdpbmRvdy5vcGVuZXIgPyB3aW5kb3cub3BlbmVyLlV0aWxzLlJQR01BS0VSX05BTUUgOiAnTVonOw0KDQokKGRvY3VtZW50KS5yZWFkeSgoKSA9PiBsb2FkQ29uZmlnKCkpOw0KJChkb2N1bWVudCkucmVhZHkoKCkgPT4gZmV0Y2hMYXRlc3RWZXJzaW9uKHBsdWdpblZlcnNpb24sIGRhdGEgPT4gZGF0YS5sYXRlc3RWZXJzaW9uQ29yZSkpOw0KDQokKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7DQogICAgaWYgKHdpbmRvdy5vcGVuZXIgJiYgUlBHTUFLRVJfTkFNRSA9PSAnTVonKSB7DQogICAgICAgIGNvbnN0IGNvcmVTY3JpcHRWZXJzaW9uID0gd2luZG93Lm9wZW5lci5VdGlscy5SUEdNQUtFUl9WRVJTSU9OOw0KICAgICAgICBjb25zdCByZXF1aXJlZFZlcnNpb24gPSB3aW5kb3cub3BlbmVyLlVJQ3VzdG9tLnJlcXVpcmVkQ29yZUNvZGVWZXJzaW9uTVo7DQoNCiAgICAgICAgdG9nZ2xlVmlzaWJpbGl0eSgnI3JlcXVpcmVkQ29yZVNjcmlwdFZlcnNpb25XYXJuaW5nQm94JywgIWNvbXBhcmVWZXJzaW9ucyhjb3JlU2NyaXB0VmVyc2lvbiwgcmVxdWlyZWRWZXJzaW9uKSk7DQogICAgICAgICQoJyNyZXF1aXJlZENvcmVTY3JpcHRWZXJzaW9uJykudGV4dChyZXF1aXJlZFZlcnNpb24pOw0KICAgIH0NCn0pOw0KDQokKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7DQogICAgY29uc3QgSW1wb3J0ZWQgPSB3aW5kb3cub3BlbmVyICYmIHdpbmRvdy5vcGVuZXIuSW1wb3J0ZWQ7DQoNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjVmlzdXN0ZWxsYUdhdWdlc0NvbXBhdGliaWxpdHlXYXJuaW5nJywgSW1wb3J0ZWQgJiYgSW1wb3J0ZWQuVmlzdU1aXzFfU2tpbGxzU3RhdGVzQ29yZSk7DQp9KTsNCg0KY29uc3QgZ2V0VGVtcGxhdGUyID0gKG5hbWUpID0+IHsNCiAgICByZXR1cm4gew0KICAgICAgICAncm93cyc6IHsNCiAgICAgICAgICAgIG5hbWVYOiAtMzAsDQogICAgICAgICAgICBuYW1lWTogMTAsDQogICAgICAgICAgICBjbGFzc1g6IC0xMCwNCiAgICAgICAgICAgIGNsYXNzWTogMTAsDQogICAgICAgICAgICBsZXZlbFg6IC03NiwNCiAgICAgICAgICAgIGxldmVsWTogNCwNCiAgICAgICAgICAgIGhwR2F1Z2VYOiAtMTAsDQogICAgICAgICAgICBzdGF0dXNFZmZlY3RzWDogMTkwLA0KICAgICAgICAgICAgc2hhZG93Qm94WDogMjAwLA0KICAgICAgICAgICAgc2hhZG93Qm94R3JhZGllbnRQb3dlcjogMTAwLA0KICAgICAgICAgICAgaHBHYXVnZVk6IC00LA0KICAgICAgICAgICAgaHBHYXVnZVZlcnRpY2FsU3BhY2U6IDI4LA0KICAgICAgICB9LA0KICAgICAgICAnY29sdW1ucyc6IHsNCiAgICAgICAgICAgIHN0YXR1c09yaWVudGF0aW9uOiAiY29sdW1ucyIsDQogICAgICAgICAgICBjb21tYW5kT3JpZW50YXRpb246ICJ0b3AiLA0KICAgICAgICAgICAgYWN0b3JJbWFnZVBvc2l0aW9uOiAidG9wQ2VudGVyIiwNCiAgICAgICAgICAgIGFjdG9ySW1hZ2VPZmZzZXRZOiAyMCwNCiAgICAgICAgICAgIG5hbWVIb3J6QWxpZ246ICJjZW50ZXIiLA0KICAgICAgICAgICAgbmFtZVg6IDAsDQogICAgICAgICAgICBzaG93TmFtZTogdHJ1ZSwNCiAgICAgICAgICAgIG5hbWVWZXJ0QWxpZ246ICJtaWRkbGUiLA0KICAgICAgICAgICAgbmFtZVk6IC0yMCwNCiAgICAgICAgICAgIG5hbWVUZXh0QWxpZ246ICJjZW50ZXIiLA0KICAgICAgICAgICAgbmFtZVdpZHRoOiAxMDAsDQogICAgICAgICAgICBuYW1lQmFja2dyb3VuZFR5cGU6ICJub25lIiwNCiAgICAgICAgICAgIGNsYXNzSG9yekFsaWduOiAiY2VudGVyIiwNCiAgICAgICAgICAgIGNsYXNzWDogMCwNCiAgICAgICAgICAgIGNsYXNzVmVydEFsaWduOiAibWlkZGxlIiwNCiAgICAgICAgICAgIGNsYXNzWTogMTAsDQogICAgICAgICAgICBjbGFzc1RleHRBbGlnbjogImNlbnRlciIsDQogICAgICAgICAgICBjbGFzc1dpZHRoOiAyMDAsDQogICAgICAgICAgICBsZXZlbFg6IDAsDQogICAgICAgICAgICBsZXZlbFk6IDUwLA0KICAgICAgICAgICAgbGV2ZWxJbmZvSG9yekFsaWduOiAiY2VudGVyIiwNCiAgICAgICAgICAgIGxldmVsSW5mb1ZlcnRBbGlnbjogIm1pZGRsZSIsDQogICAgICAgICAgICBocEdhdWdlWDogMCwNCiAgICAgICAgICAgIGhwR2F1Z2VIb3J6QWxpZ246ICJjZW50ZXIiLA0KICAgICAgICAgICAgaHBHYXVnZVk6IC0xMCwNCiAgICAgICAgICAgIHN0YXR1c0VmZmVjdHNYOiAyMCwNCiAgICAgICAgICAgIHN0YXR1c0VmZmVjdHNWZXJ0QWxpZ246ICJib3R0b20iLA0KICAgICAgICAgICAgc3RhdHVzRWZmZWN0c1k6IC0xMjAsDQogICAgICAgICAgICBzaGFkb3dCb3hYOiAwLA0KICAgICAgICAgICAgc2hhZG93Qm94WTogMTIwLA0KICAgICAgICAgICAgc2hhZG93Qm94R3JhZGllbnREaXJlY3Rpb246ICJ0b3AiLA0KICAgICAgICAgICAgc2hhZG93Qm94R3JhZGllbnRQb3dlcjogNDAsDQogICAgICAgIH0sDQogICAgICAgICdzaW5nbGVBY3Rvcic6IHsNCiAgICAgICAgICAgIHN0YXR1c09yaWVudGF0aW9uOiAic2luZ2xlIGFjdG9yIiwNCiAgICAgICAgICAgIG5hbWVWZXJ0QWxpZ246ICJtaWRkbGUiLA0KICAgICAgICAgICAgbmFtZVk6IDgwLA0KICAgICAgICAgICAgaHBHYXVnZVZlcnRBbGlnbjogImJvdHRvbSIsDQogICAgICAgICAgICBsZXZlbFg6IDQwLA0KICAgICAgICAgICAgYWN0b3JJbWFnZU9mZnNldFg6IDAsDQogICAgICAgICAgICBhY3RvckltYWdlQ3JvcFg6IDAsDQogICAgICAgICAgICBhY3RvckltYWdlU2NhbGU6IDIwMCwNCiAgICAgICAgICAgIGFjdG9ySW1hZ2VIb3J6QWxpZ246ICJjZW50ZXIiLA0KICAgICAgICAgICAgYWN0b3JJbWFnZVZlcnRBbGlnbjogInRvcCIsDQogICAgICAgICAgICBocEdhdWdlSG9yekFsaWduOiAicmlnaHQiLA0KICAgICAgICAgICAgaHBHYXVnZVdpZHRoOiAyNjAsDQogICAgICAgICAgICBocEdhdWdlWTogLTQwLA0KICAgICAgICAgICAgYWN0b3JJbWFnZU9mZnNldFk6IDQwLA0KICAgICAgICAgICAgbmFtZUJhY2tncm91bmRUeXBlOiAiZ3JhZGllbnQiLA0KICAgICAgICAgICAgY2xhc3NIb3J6QWxpZ246ICJjZW50ZXIiLA0KICAgICAgICAgICAgY2xhc3NWZXJ0QWxpZ246ICJtaWRkbGUiLA0KICAgICAgICAgICAgY2xhc3NUZXh0QWxpZ246ICJyaWdodCIsDQogICAgICAgICAgICBuYW1lVGV4dEFsaWduOiAibGVmdCIsDQogICAgICAgICAgICBuYW1lWDogMCwNCiAgICAgICAgICAgIGNsYXNzWDogMCwNCiAgICAgICAgICAgIGNsYXNzWTogODAsDQogICAgICAgICAgICBsZXZlbEluZm9WZXJ0QWxpZ246ICJib3R0b20iLA0KICAgICAgICAgICAgbGV2ZWxZOiAtNDAsDQogICAgICAgICAgICBzaG93U2hhZG93Qm94OiBmYWxzZSwNCiAgICAgICAgICAgIGNvbW1hbmRXaWR0aDogMzAwLA0KICAgICAgICAgICAgbGV2ZWxJbmZvSG9yekFsaWduOiAibGVmdCIsDQogICAgICAgICAgICBocEdhdWdlWDogLTQwLA0KICAgICAgICAgICAgc3RhdHVzRWZmZWN0c0hvcnpBbGlnbjogInJpZ2h0IiwNCiAgICAgICAgICAgIHN0YXR1c0VmZmVjdHNYOiAtNDAsDQogICAgICAgICAgICBzdGF0dXNFZmZlY3RzVmVydEFsaWduOiAiYm90dG9tIiwNCiAgICAgICAgICAgIHN0YXR1c0VmZmVjdHNZOiAtMTUwLA0KICAgICAgICB9LA0KICAgICAgICAnbm9TdGF0dXMnOiB7DQogICAgICAgICAgICBzdGF0dXNPcmllbnRhdGlvbjogIm5vbmUiLA0KICAgICAgICAgICAgY29tbWFuZFdpZHRoOiA5MDAsDQogICAgICAgICAgICBjb21tYW5kTnVtYmVyT2ZDb2x1bW5zOiAzLA0KICAgICAgICAgICAgY29tbWFuZE51bWJlck9mTGluZXM6IDMsDQogICAgICAgICAgICBjb21tYW5kSXRlbUhlaWdodDogMTAwLA0KICAgICAgICAgICAgY29tbWFuZFRleHRBbGlnbjogImNlbnRlciIsDQogICAgICAgICAgICBnb2xkV2luZG93V2lkdGg6IDQwMCwNCiAgICAgICAgICAgIGdvbGRXaW5kb3dQb3NpdGlvbjogImJvdHRvbUNlbnRlciINCiAgICAgICAgfSwNCiAgICAgICAgJ3JldHJvJzogew0KICAgICAgICAgICAgbmFtZUhvcnpBbGlnbjogImxlZnQiLA0KICAgICAgICAgICAgbmFtZVg6IDE2MCwNCiAgICAgICAgICAgIG5hbWVZOiAxMCwNCiAgICAgICAgICAgIGNsYXNzWDogLTEwLA0KICAgICAgICAgICAgY2xhc3NZOiAxMCwNCiAgICAgICAgICAgIGxldmVsWDogLTc2LA0KICAgICAgICAgICAgbGV2ZWxZOiAtMTAsDQogICAgICAgICAgICBocEdhdWdlWDogLTEwLA0KICAgICAgICAgICAgaHBHYXVnZVk6IC04LA0KICAgICAgICAgICAgc3RhdHVzRWZmZWN0c1g6IDE5MCwNCiAgICAgICAgICAgIHNoYWRvd0JveFg6IDIwMCwNCiAgICAgICAgICAgIHNoYWRvd0JveEdyYWRpZW50UG93ZXI6IDEwMCwNCiAgICAgICAgICAgIHN0YXR1c1JlbmRlclR5cGU6ICJiYXR0bGVyIiwNCiAgICAgICAgICAgIGFjdG9ySW1hZ2VTY2FsZTogMjAwLA0KICAgICAgICAgICAgc2hvd0xldmVsTW9kZTogInRleHQiLA0KICAgICAgICAgICAgbGV2ZWxJbmZvSG9yekFsaWduOiAibGVmdCIsDQogICAgICAgICAgICBsZXZlbEluZm9WZXJ0QWxpZ246ICJtaWRkbGUiLA0KICAgICAgICAgICAgbGV2ZWxYOiAxNjAsDQogICAgICAgICAgICBsZXZlbFk6IDAsDQogICAgICAgICAgICBjb21tYW5kSXRlbUJhY2tncm91bmRUeXBlOiAibm9uZSIsDQogICAgICAgICAgICBjb21tYW5kU3R5bGU6ICJ0ZXh0IiwNCiAgICAgICAgICAgIGNvbW1hbmRUZXh0QWxpZ246ICJyaWdodCIsDQogICAgICAgICAgICBnYXVnZVN0eWxlOiAidGV4dCIsDQogICAgICAgIH0NCiAgICB9W25hbWVdOw0KfQ0KDQpjb25zdCBnZXRUZW1wbGF0ZSA9IChuYW1lKSA9PiB7DQogICAgY29uc3QgdGVtcGxhdGUgPSB7DQogICAgICAgIGdhbWVJbmZvVGV4dExlZnQ6ICJcXElbMTkwXVxuXFxJWzMxNF0iLA0KICAgICAgICBnYW1lSW5mb1RleHRSaWdodDogIlxcfVxcQ1szXVxcTU5cblxcJCBcXENbMTZdXFxHIiwNCiAgICAgICAgdW5rbm93bk1hcE5hbWU6ICJcXENbOF1Vbmtub3duIFJlZ2lvbiIsDQogICAgICAgIGdhdWdlQ29sb3JIcDE6ICIjQTE2MjA3IiwNCiAgICAgICAgZ2F1Z2VDb2xvckhwMjogIiNGNTlFMEIiLA0KICAgICAgICBnYXVnZUNvbG9ySHBDcmlzaXMxOiAiIzk5MUIxQiIsDQogICAgICAgIGdhdWdlQ29sb3JIcENyaXNpczI6ICIjREMyNjI2IiwNCiAgICAgICAgZ2F1Z2VDb2xvck1wMTogIiMxRDRFRDgiLA0KICAgICAgICBnYXVnZUNvbG9yTXAyOiAiIzNCODJGNiIsDQogICAgICAgIGdhdWdlQ29sb3JUcDE6ICIjMTU4MDNEIiwNCiAgICAgICAgZ2F1Z2VDb2xvclRwMjogIiMyMkM1NUUiLA0KICAgICAgICBnYXVnZUNvbG9yQXRiMTogIiNEOTgwRkEiLA0KICAgICAgICBnYXVnZUNvbG9yQXRiMjogIiNGREE3REYiLA0KICAgICAgICBnYXVnZUNvbG9yRXhwMTogJyM4ODg4ODgnLA0KICAgICAgICBnYXVnZUNvbG9yRXhwMjogJyNGRkZGRkYnLA0KICAgICAgICBnYXVnZUNvbG9yRXhwTWF4ZWQxOiAnI0ZGQzEwNycsDQogICAgICAgIGdhdWdlQ29sb3JFeHBNYXhlZDI6ICcjRkZFQjNCJywNCiAgICAgICAgZ2F1Z2VCYWNrZ3JvdW5kQ29sb3JIcDogJyMyMjIyMjInLA0KICAgICAgICBnYXVnZUJhY2tncm91bmRDb2xvckhwQ3Jpc2lzOiAnIzIyMjIyMicsDQogICAgICAgIGdhdWdlQmFja2dyb3VuZENvbG9ySHBEZWFkOiAnIzQ0MDAwMCcsDQogICAgICAgIGdhdWdlQmFja2dyb3VuZENvbG9yTXA6ICcjMjIyMjIyJywNCiAgICAgICAgZ2F1Z2VCYWNrZ3JvdW5kQ29sb3JUcDogJyMyMjIyMjInLA0KICAgICAgICBnYXVnZUJhY2tncm91bmRDb2xvckF0YjogJyMyMjIyMjInLA0KICAgICAgICBnYXVnZUJhY2tncm91bmRDb2xvckV4cDogJyMyMjIyMjInLA0KICAgICAgICBnYXVnZUJhY2tncm91bmRDb2xvckV4cE1heGVkOiAnIzIyMjIyMicsDQogICAgICAgIGdhdWdlV2lkdGg6IDIwMCwNCiAgICAgICAgZ2F1Z2VXaWR0aE92ZXJyaWRlU2NlbmU6ICJleGNlcHRCYXR0bGUiLA0KICAgICAgICBnYXVnZUhlaWdodE92ZXJyaWRlU2NlbmU6ICJleGNlcHRCYXR0bGUiLA0KICAgICAgICBnYXVnZVN0eWxlOiAic3RyZXRjaCIsDQogICAgICAgIHNob3dHYXVnZU1heFZhbHVlczogdHJ1ZSwNCiAgICAgICAgaHBJY29uSW5kZXg6IDg0LA0KICAgICAgICBtcEljb25JbmRleDogMTY1LA0KICAgICAgICB0cEljb25JbmRleDogMTY0LA0KICAgIH0NCiAgICBPYmplY3QNCiAgICAgICAgLmVudHJpZXMoZ2V0VGVtcGxhdGUyKG5hbWUgfHwgJ3Jvd3MnKSkNCiAgICAgICAgLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4gdGVtcGxhdGVba2V5XSA9IHZhbHVlKTsNCiAgICANCiAgICByZXR1cm4gdGVtcGxhdGU7DQp9DQoNCmZ1bmN0aW9uIHN5bmNGb3JtSW5wdXRzKCkgew0KICAgIA0KICAgIC8vIFRvdWNoIFVJDQogICAgc2hvd1RvdWNoVUlNb2RlLnZhbHVlICAgICAgID0gY29uZmlnLnNob3dUb3VjaFVJTW9kZSB8fCAnYWx3YXlzJzsNCiAgICBrZWVwVG91Y2hVSVNwYWNlLmNoZWNrZWQgICAgPSAhIWNvbmZpZy5rZWVwVG91Y2hVSVNwYWNlOw0KICAgIHRvdWNoVUlBcmVhSGVpZ2h0LnZhbHVlICAgICA9IGNvbmZpZy50b3VjaFVJQXJlYUhlaWdodDsNCg0KICAgIC8vIENvbW1vbiBMYXlvdXQgU2V0dGluZ3MNCiAgICB0b2dnbGVCdXR0b24oJyNjb21tYW5kSW5wdXRNb2RlTGVmdCcsICAgICAgICAgICAnbGVmdCcgPT0gY29uZmlnLmNvbW1hbmRJbnB1dE1vZGUpOw0KICAgIHRvZ2dsZUJ1dHRvbignI2NvbW1hbmRJbnB1dE1vZGVSaWdodCcsICAgICAgICAgICdsZWZ0JyAhPSBjb25maWcuY29tbWFuZElucHV0TW9kZSk7DQoNCiAgICB0b2dnbGVCdXR0b24oJyNzdGF0dXNPcmllbnRhdGlvblJvd3MnLCAgICAgICAgICAncm93cycgPT0gY29uZmlnLnN0YXR1c09yaWVudGF0aW9uIHx8ICFjb25maWcuc3RhdHVzT3JpZW50YXRpb24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI3N0YXR1c09yaWVudGF0aW9uQ29sdW1ucycsICAgICAgICdjb2x1bW5zJyA9PSBjb25maWcuc3RhdHVzT3JpZW50YXRpb24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI3N0YXR1c09yaWVudGF0aW9uR3JpZCcsICAgICAgICAgICdncmlkJyA9PSBjb25maWcuc3RhdHVzT3JpZW50YXRpb24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI3N0YXR1c09yaWVudGF0aW9uU2luZ2xlQWN0b3InLCAgICdzaW5nbGUgYWN0b3InID09IGNvbmZpZy5zdGF0dXNPcmllbnRhdGlvbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjc3RhdHVzT3JpZW50YXRpb25Ob25lJywgICAgICAgICAgJ25vbmUnID09IGNvbmZpZy5zdGF0dXNPcmllbnRhdGlvbik7DQoNCiAgICB2aXNpYmxlQWN0b3JzLnZhbHVlICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGNvbmZpZy52aXNpYmxlQWN0b3JzOw0KICAgIGF1dG9BZGp1c3RWaXNpYmxlQWN0b3JzLmNoZWNrZWQgICAgICAgICAgICAgICAgID0gY29uZmlnLmF1dG9BZGp1c3RWaXNpYmxlQWN0b3JzOw0KICAgIHZpc2libGVBY3RvcnNNYXgudmFsdWUgICAgICAgICAgICAgICAgICAgICAgICAgID0gY29uZmlnLnZpc2libGVBY3RvcnNNYXg7DQogICAgc3RhdHVzV2luZG93Q29scy52YWx1ZSAgICAgICAgICAgICAgICAgICAgICAgICAgPSBjb25maWcuc3RhdHVzV2luZG93Q29sczsNCiAgICBzdGF0dXNXaW5kb3dSb3dzLnZhbHVlICAgICAgICAgICAgICAgICAgICAgICAgICA9IGNvbmZpZy5zdGF0dXNXaW5kb3dSb3dzOw0KDQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI3Zpc2libGVBY3RvcnNCb3gnLCAgICAgICAgICAgWydyb3dzJywgJ2NvbHVtbnMnXS5pbmNsdWRlcyhjb25maWcuc3RhdHVzT3JpZW50YXRpb24pIHx8ICFjb25maWcuc3RhdHVzT3JpZW50YXRpb24pOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyN2aXNpYmxlQWN0b3JzV2F2ZScsICAgICAgICAgIGNvbmZpZy5hdXRvQWRqdXN0VmlzaWJsZUFjdG9ycyk7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI3Zpc2libGVBY3RvcnNNYXgnLCAgICAgICAgICAgY29uZmlnLmF1dG9BZGp1c3RWaXNpYmxlQWN0b3JzKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjc3RhdHVzT3JpZW50YXRpb25HcmlkQm94JywgICAnZ3JpZCcgPT0gY29uZmlnLnN0YXR1c09yaWVudGF0aW9uKTsNCg0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjb21tYW5kT3JpZW50YXRpb25Cb3gnLCAgICAgICdub25lJyAhPSBjb25maWcuc3RhdHVzT3JpZW50YXRpb24pOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjb21tYW5kT3JpZW50YXRpb25Cb3gyJywgICAgICdub25lJyA9PSBjb25maWcuc3RhdHVzT3JpZW50YXRpb24pOw0KDQogICAgdG9nZ2xlQnV0dG9uKCcjY29tbWFuZE9yaWVudGF0aW9uU2lkZScsICAgICAgICAgJ3NpZGUnID09IGNvbmZpZy5jb21tYW5kT3JpZW50YXRpb24gfHwgIWNvbmZpZy5jb21tYW5kT3JpZW50YXRpb24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI2NvbW1hbmRPcmllbnRhdGlvblRvcCcsICAgICAgICAgICd0b3AnID09IGNvbmZpZy5jb21tYW5kT3JpZW50YXRpb24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI2NvbW1hbmRPcmllbnRhdGlvbkJvdHRvbScsICAgICAgICdib3R0b20nID09IGNvbmZpZy5jb21tYW5kT3JpZW50YXRpb24pOw0KDQogICAgdG9nZ2xlOURpckJ1dHRvbnMoJyNjb21tYW5kUG9zaXRpb24nLCAgICAgICAgICAgY29uZmlnLmNvbW1hbmRQb3NpdGlvbiB8fCAnbWlkZGxlQ2VudGVyJyk7DQoNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjY29tbWFuZFdpZHRoQm94JywgICAgICAgICAgICBzaG91bGRTaG93Q29tbWFuZFdpZHRoKCkpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjb21tYW5kTnVtYmVyT2ZDb2x1bW5zQm94JywgIHNob3VsZFNob3dDb21tYW5kQ29sdW1uc0FuZExpbmVzKCkpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjb21tYW5kTnVtYmVyT2ZMaW5lc0JveCcsICAgIHNob3VsZFNob3dDb21tYW5kQ29sdW1uc0FuZExpbmVzKCkpOw0KDQogICAgY29tbWFuZE9mZnNldFgudmFsdWUgPSBjb25maWcuY29tbWFuZE9mZnNldFg7DQogICAgY29tbWFuZE9mZnNldFkudmFsdWUgPSBjb25maWcuY29tbWFuZE9mZnNldFk7DQoNCiAgICBjb21tYW5kV2lkdGgudmFsdWUgICAgICAgICAgICAgID0gY29uZmlnLmNvbW1hbmRXaWR0aDsNCiAgICBjb21tYW5kTnVtYmVyT2ZDb2x1bW5zLnZhbHVlICAgID0gY29uZmlnLmNvbW1hbmROdW1iZXJPZkNvbHVtbnM7DQogICAgY29tbWFuZE51bWJlck9mTGluZXMudmFsdWUgICAgICA9IGNvbmZpZy5jb21tYW5kTnVtYmVyT2ZMaW5lczsNCiAgICBjb21tYW5kSXRlbUhlaWdodC52YWx1ZSAgICAgICAgID0gY29uZmlnLmNvbW1hbmRJdGVtSGVpZ2h0Ow0KDQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI2dvbGRXaW5kb3dMYXlvdXRCb3gnLCAgICAnbm9uZScgPT0gY29uZmlnLnN0YXR1c09yaWVudGF0aW9uKTsNCiAgICB0b2dnbGU5RGlyQnV0dG9ucygnI2dvbGRXaW5kb3dQb3NpdGlvbicsICAgIGNvbmZpZy5nb2xkV2luZG93UG9zaXRpb24gfHwgJ2JvdHRvbUxlZnQnKTsNCiAgICBnb2xkV2luZG93T2Zmc2V0WC52YWx1ZSAgICAgPSBjb25maWcuZ29sZFdpbmRvd09mZnNldFg7DQogICAgZ29sZFdpbmRvd09mZnNldFkudmFsdWUgICAgID0gY29uZmlnLmdvbGRXaW5kb3dPZmZzZXRZOw0KICAgIGdvbGRXaW5kb3dXaWR0aC52YWx1ZSAgICAgICA9IGNvbmZpZy5nb2xkV2luZG93V2lkdGg7DQoNCiAgICB0b3BTcGFjaW5nLnZhbHVlICAgICAgICA9IGNvbmZpZy50b3BTcGFjaW5nOw0KICAgIGJvdHRvbVNwYWNpbmcudmFsdWUgICAgID0gY29uZmlnLmJvdHRvbVNwYWNpbmc7DQogICAgbGVmdFNwYWNpbmcudmFsdWUgICAgICAgPSBjb25maWcubGVmdFNwYWNpbmc7DQogICAgcmlnaHRTcGFjaW5nLnZhbHVlICAgICAgPSBjb25maWcucmlnaHRTcGFjaW5nOw0KICAgIGhvcnpTcGFjaW5nLnZhbHVlICAgICAgID0gY29uZmlnLmhvcnpTcGFjaW5nOw0KICAgIHZlcnRTcGFjaW5nLnZhbHVlICAgICAgID0gY29uZmlnLnZlcnRTcGFjaW5nOw0KDQogICAgLy8gTGF5b3V0IDINCiAgICBzeW5jTGF5b3V0MkZpZWxkcyhbJ2NvbW1hbmQnLCAnc3RhdHVzJywgJ2dvbGQnXSk7DQoNCiAgICAvLyBXaW5kb3dzIEdlbmVyYWwNCiAgICB3aW5kb3dJdGVtQmFja2dyb3VuZFR5cGUudmFsdWUgPSBjb25maWcud2luZG93SXRlbUJhY2tncm91bmRUeXBlIHx8IChSUEdNQUtFUl9OQU1FID09ICdNWicgPyAnZGltbWVkJyA6ICdub25lJyk7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI3dpbmRvd0l0ZW1CYWNrZ3JvdW5kRmlsZUJveCcsIHdpbmRvd0l0ZW1CYWNrZ3JvdW5kVHlwZS52YWx1ZSA9PSAnaW1hZ2UnKTsNCiAgICANCiAgICB3aW5kb3dPcGFjaXR5LnZhbHVlICAgICAgICAgICAgID0gY29uZmlnLndpbmRvd09wYWNpdHk7DQogICAgd2luZG93UGFkZGluZy52YWx1ZSAgICAgICAgICAgICA9IGNvbmZpZy53aW5kb3dQYWRkaW5nOw0KICAgIHdpbmRvd0xpbmVIZWlnaHQudmFsdWUgICAgICAgICAgPSBjb25maWcud2luZG93TGluZUhlaWdodDsNCiAgICB3aW5kb3dJdGVtSGVpZ2h0LnZhbHVlICAgICAgICAgID0gY29uZmlnLndpbmRvd0l0ZW1IZWlnaHQ7DQogICAgd2luZG93SXRlbVBhZGRpbmcudmFsdWUgICAgICAgICA9IGNvbmZpZy53aW5kb3dJdGVtUGFkZGluZzsNCiAgICB3aW5kb3dSb3dTcGFjaW5nLnZhbHVlICAgICAgICAgID0gY29uZmlnLndpbmRvd1Jvd1NwYWNpbmc7DQogICAgd2luZG93Q29sdW1uU3BhY2luZy52YWx1ZSAgICAgICA9IGNvbmZpZy53aW5kb3dDb2x1bW5TcGFjaW5nOw0KICAgIGZvbnRTaXplLnZhbHVlICAgICAgICAgICAgICAgICAgPSBjb25maWcuZm9udFNpemU7DQoNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjY3Vyc29yU3R5bGVCb3gnLCAnaW1hZ2UnID09IGNvbmZpZy5jdXJzb3JTdHlsZSk7DQogICAgY3Vyc29yU3R5bGUudmFsdWUgPSBjb25maWcuY3Vyc29yU3R5bGUgfHwgJ2RlZmF1bHQnOw0KICAgIGN1cnNvckFkanVzdFgudmFsdWUgPSBjb25maWcuY3Vyc29yQWRqdXN0WDsNCiAgICBjdXJzb3JBZGp1c3RZLnZhbHVlID0gY29uZmlnLmN1cnNvckFkanVzdFk7DQogICAgYmxpbmtDdXJzb3IuY2hlY2tlZCA9IGNvbmZpZy5ibGlua0N1cnNvciAhPT0gZmFsc2U7DQoNCiAgICBkaXNhYmxlZFRleHRPcGFjaXR5LnZhbHVlID0gY29uZmlnLmRpc2FibGVkVGV4dE9wYWNpdHk7DQogICAgb3ZlcnJpZGVEaXNhYmxlZFRleHRDb2xvci5jaGVja2VkID0gY29uZmlnLm92ZXJyaWRlRGlzYWJsZWRUZXh0Q29sb3I7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI2Rpc2FibGVkVGV4dENvbG9yJywgb3ZlcnJpZGVEaXNhYmxlZFRleHRDb2xvci5jaGVja2VkKTsNCiAgICBkaXNhYmxlZFRleHRDb2xvci52YWx1ZSA9IGNvbmZpZy5kaXNhYmxlZFRleHRDb2xvcjsNCg0KICAgIC8vIFNjZW5lIEdlbmVyYWwNCiAgICBzY2VuZUJhY2tncm91bmRUeXBlLnZhbHVlICAgICAgID0gY29uZmlnLnNjZW5lQmFja2dyb3VuZFR5cGUgfHwgJ21hcFNwcml0ZSc7DQogICAgc2NlbmVCYWNrZ3JvdW5kRWZmZWN0cy52YWx1ZSAgICA9IGNvbmZpZy5zY2VuZUJhY2tncm91bmRFZmZlY3RzIHx8ICdibHVycmVkJzsNCg0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNzY2VuZUJhY2tncm91bmRFZmZlY3RzQm94JywgICdub25lJyAhPSBzY2VuZUJhY2tncm91bmRUeXBlLnZhbHVlKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjc2NlbmVCYWNrZ3JvdW5kRmlsZUJveCcsICAgICAnaW1hZ2UnID09IHNjZW5lQmFja2dyb3VuZFR5cGUudmFsdWUpOw0KDQogICAgLy8gUGFydHkgU3RhdHVzDQogICAgc3RhdHVzT3BhY2l0eS52YWx1ZSAgICAgICAgICAgICAgICAgPSBjb25maWcuc3RhdHVzT3BhY2l0eTsNCiAgICBzdGF0dXNQYWRkaW5nLnZhbHVlICAgICAgICAgICAgICAgICA9IGNvbmZpZy5zdGF0dXNQYWRkaW5nOw0KICAgIHN0YXR1c1Jvd1NwYWNpbmcudmFsdWUgICAgICAgICAgICAgID0gY29uZmlnLnN0YXR1c1Jvd1NwYWNpbmc7DQogICAgc3RhdHVzQ29sdW1uU3BhY2luZy52YWx1ZSAgICAgICAgICAgPSBjb25maWcuc3RhdHVzQ29sdW1uU3BhY2luZzsNCiAgICBzaG91bGRPdmVycmlkZVN0YXR1c1dpbmRvdy5jaGVja2VkICA9IGNvbmZpZy5vdmVycmlkZVN0YXR1c1dpbmRvdzsNCiAgICBzdGF0dXNCYWNrZ3JvdW5kVHlwZS52YWx1ZSAgICAgICAgICA9IGNvbmZpZy5zdGF0dXNCYWNrZ3JvdW5kVHlwZSB8fCAnd2luZG93JzsNCiAgICBzdGF0dXNJdGVtQmFja2dyb3VuZFR5cGUudmFsdWUgICAgICA9IGNvbmZpZy5zdGF0dXNJdGVtQmFja2dyb3VuZFR5cGUgfHwgJ2RpbW1lZCc7DQogICAgc3RhdHVzQ3Vyc29yQmFja2dyb3VuZFR5cGUudmFsdWUgICAgPSBjb25maWcuc3RhdHVzQ3Vyc29yQmFja2dyb3VuZFR5cGUgfHwgJ2RlZmF1bHQnOw0KICAgIHN0YXR1c0JsaW5rQ3Vyc29yLmNoZWNrZWQgICAgICAgICAgID0gY29uZmlnLnN0YXR1c0JsaW5rQ3Vyc29yOw0KICAgIHN0YXR1c1BlbmRpbmdCYWNrZ3JvdW5kVHlwZS52YWx1ZSAgID0gY29uZmlnLnN0YXR1c1BlbmRpbmdCYWNrZ3JvdW5kVHlwZSB8fCAnZGVmYXVsdCc7DQogICAgDQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI3N0YXR1c1dpbmRvd0ZpbGVCb3gnLCAgICAgICAgICAgIGNvbmZpZy5vdmVycmlkZVN0YXR1c1dpbmRvdyk7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI3N0YXR1c0JhY2tncm91bmRGaWxlQm94JywgICAgICAgICdpbWFnZScgPT0gY29uZmlnLnN0YXR1c0JhY2tncm91bmRUeXBlKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjc3RhdHVzSXRlbUJhY2tncm91bmRGaWxlQm94JywgICAgJ2ltYWdlJyA9PSBjb25maWcuc3RhdHVzSXRlbUJhY2tncm91bmRUeXBlKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjc3RhdHVzQ3Vyc29yQmFja2dyb3VuZEZpbGVCb3gnLCAgJ2ltYWdlJyA9PSBjb25maWcuc3RhdHVzQ3Vyc29yQmFja2dyb3VuZFR5cGUpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNzdGF0dXNCbGlua0N1cnNvckJveCcsICAgICAgICAgICAnaW1hZ2UnID09IGNvbmZpZy5zdGF0dXNDdXJzb3JCYWNrZ3JvdW5kVHlwZSk7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI3N0YXR1c1BlbmRpbmdCYWNrZ3JvdW5kRmlsZUJveCcsICdpbWFnZScgPT0gY29uZmlnLnN0YXR1c1BlbmRpbmdCYWNrZ3JvdW5kVHlwZSk7DQoNCiAgICAvLyBBY3RvciBJbWFnZXMNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjYWN0b3JJbWFnZUJveCcsICAgICAgICAgICdub25lJyAhPSBjb25maWcuc3RhdHVzUmVuZGVyVHlwZSk7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI3BvcnRyYWl0Tm90ZXRhZ0hpbnQnLCAgICAncG9ydHJhaXQnID09IGNvbmZpZy5zdGF0dXNSZW5kZXJUeXBlKTsNCiAgICB0b2dnbGU5RGlyQnV0dG9ucygnI2FjdG9ySW1hZ2VQb3NpdGlvbicsICAgIGNvbmZpZy5hY3RvckltYWdlUG9zaXRpb24gfHwgJ21pZGRsZUxlZnQnKTsNCg0KICAgIHN0YXR1c1JlbmRlclR5cGUudmFsdWUgID0gY29uZmlnLnN0YXR1c1JlbmRlclR5cGUgfHwgJ2ZhY2UnOw0KICAgIGFjdG9ySW1hZ2VPZmZzZXRYLnZhbHVlID0gY29uZmlnLmFjdG9ySW1hZ2VPZmZzZXRYOw0KICAgIGFjdG9ySW1hZ2VPZmZzZXRZLnZhbHVlID0gY29uZmlnLmFjdG9ySW1hZ2VPZmZzZXRZOw0KICAgIGFjdG9ySW1hZ2VDcm9wWC52YWx1ZSAgID0gY29uZmlnLmFjdG9ySW1hZ2VDcm9wWDsNCiAgICBhY3RvckltYWdlQ3JvcFkudmFsdWUgICA9IGNvbmZpZy5hY3RvckltYWdlQ3JvcFk7DQogICAgYWN0b3JJbWFnZVNjYWxlLnZhbHVlICAgPSBjb25maWcuYWN0b3JJbWFnZVNjYWxlOw0KDQogICAgLy8gU2hhZG93IEJveA0KICAgIHNob3dTaGFkb3dCb3guY2hlY2tlZCA9IGNvbmZpZy5zaG93U2hhZG93Qm94ICE9PSBmYWxzZTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjYWN0b3JTaGFkb3dCb3hCb3gnLCBzaG93U2hhZG93Qm94LmNoZWNrZWQpOw0KDQogICAgc2hhZG93Qm94WC52YWx1ZSAgICAgICAgICAgICAgICA9IGNvbmZpZy5zaGFkb3dCb3hYOw0KICAgIHNoYWRvd0JveFkudmFsdWUgICAgICAgICAgICAgICAgPSBjb25maWcuc2hhZG93Qm94WTsNCiAgICBzaGFkb3dCb3hXaWR0aC52YWx1ZSAgICAgICAgICAgID0gY29uZmlnLnNoYWRvd0JveFdpZHRoOw0KICAgIHNoYWRvd0JveEhlaWdodC52YWx1ZSAgICAgICAgICAgPSBjb25maWcuc2hhZG93Qm94SGVpZ2h0Ow0KICAgIHNoYWRvd0JveENvbG9yLnZhbHVlICAgICAgICAgICAgPSBjb25maWcuc2hhZG93Qm94Q29sb3IgfHwgJ3JnYigwLCAwLCAwKSc7DQogICAgc2hhZG93Qm94T3BhY2l0eS52YWx1ZSAgICAgICAgICA9IGNvbmZpZy5zaGFkb3dCb3hPcGFjaXR5Ow0KICAgIHNoYWRvd0JveEdyYWRpZW50UG93ZXIudmFsdWUgICAgPSBjb25maWcuc2hhZG93Qm94R3JhZGllbnRQb3dlcjsNCg0KICAgIHRvZ2dsZUJ1dHRvbignI3NoYWRvd0JveEdyYWRpZW50VG9wJywgICAgICAgICAgICd0b3AnID09IGNvbmZpZy5zaGFkb3dCb3hHcmFkaWVudERpcmVjdGlvbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjc2hhZG93Qm94R3JhZGllbnRCb3R0b20nLCAgICAgICAgJ2JvdHRvbScgPT0gY29uZmlnLnNoYWRvd0JveEdyYWRpZW50RGlyZWN0aW9uKTsNCiAgICB0b2dnbGVCdXR0b24oJyNzaGFkb3dCb3hHcmFkaWVudExlZnQnLCAgICAgICAgICAnbGVmdCcgPT0gY29uZmlnLnNoYWRvd0JveEdyYWRpZW50RGlyZWN0aW9uIHx8ICFjb25maWcuc2hhZG93Qm94R3JhZGllbnREaXJlY3Rpb24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI3NoYWRvd0JveEdyYWRpZW50UmlnaHQnLCAgICAgICAgICdyaWdodCcgPT0gY29uZmlnLnNoYWRvd0JveEdyYWRpZW50RGlyZWN0aW9uKTsNCiAgICB0b2dnbGVCdXR0b24oJyNzaGFkb3dCb3hHcmFkaWVudE5vbmUnLCAgICAgICAgICAnbm9uZScgPT0gY29uZmlnLnNoYWRvd0JveEdyYWRpZW50RGlyZWN0aW9uKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjc2hhZG93Qm94R3JhZGllbnRQb3dlckJveCcsICAnbm9uZScgIT0gY29uZmlnLnNoYWRvd0JveEdyYWRpZW50RGlyZWN0aW9uKTsNCg0KICAgIC8vIE5hbWUNCiAgICBzaG91bGRTaG93TmFtZS5jaGVja2VkID0gY29uZmlnLnNob3dOYW1lICE9PSBmYWxzZTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjYWN0b3JOYW1lQm94Jywgc2hvdWxkU2hvd05hbWUuY2hlY2tlZCk7DQoNCiAgICB0b2dnbGVCdXR0b24oJyNuYW1lSG9yekFsaWduTGVmdCcsICAgICAgJ2xlZnQnID09IGNvbmZpZy5uYW1lSG9yekFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNuYW1lSG9yekFsaWduQ2VudGVyJywgICAgJ2NlbnRlcicgPT0gY29uZmlnLm5hbWVIb3J6QWxpZ24gfHwgIWNvbmZpZy5uYW1lSG9yekFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNuYW1lSG9yekFsaWduUmlnaHQnLCAgICAgJ3JpZ2h0JyA9PSBjb25maWcubmFtZUhvcnpBbGlnbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjbmFtZVZlcnRBbGlnblRvcCcsICAgICAgICd0b3AnID09IGNvbmZpZy5uYW1lVmVydEFsaWduIHx8ICFjb25maWcubmFtZVZlcnRBbGlnbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjbmFtZVZlcnRBbGlnbk1pZGRsZScsICAgICdtaWRkbGUnID09IGNvbmZpZy5uYW1lVmVydEFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNuYW1lVmVydEFsaWduQm90dG9tJywgICAgJ2JvdHRvbScgPT0gY29uZmlnLm5hbWVWZXJ0QWxpZ24pOw0KDQogICAgbmFtZVgudmFsdWUgICAgICAgICAgICAgICAgID0gY29uZmlnLm5hbWVYOw0KICAgIG5hbWVZLnZhbHVlICAgICAgICAgICAgICAgICA9IGNvbmZpZy5uYW1lWTsNCiAgICBuYW1lV2lkdGgudmFsdWUgICAgICAgICAgICAgPSBjb25maWcubmFtZVdpZHRoOw0KICAgIG5hbWVGb250U2l6ZS52YWx1ZSAgICAgICAgICA9IGNvbmZpZy5uYW1lRm9udFNpemU7DQogICAgbmFtZUJhY2tncm91bmRUeXBlLnZhbHVlICAgID0gY29uZmlnLm5hbWVCYWNrZ3JvdW5kVHlwZSB8fCAnZ3JhZGllbnQnOw0KDQogICAgdG9nZ2xlQnV0dG9uKCcjbmFtZVRleHRBbGlnbkxlZnQnLCAgICAgICdsZWZ0JyA9PSBjb25maWcubmFtZVRleHRBbGlnbiB8fCAhY29uZmlnLm5hbWVUZXh0QWxpZ24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI25hbWVUZXh0QWxpZ25DZW50ZXInLCAgICAnY2VudGVyJyA9PSBjb25maWcubmFtZVRleHRBbGlnbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjbmFtZVRleHRBbGlnblJpZ2h0JywgICAgICdyaWdodCcgPT0gY29uZmlnLm5hbWVUZXh0QWxpZ24pOw0KDQogICAgLy8gQ2xhc3MNCiAgICBzaG91bGRTaG93Q2xhc3MuY2hlY2tlZCA9IGNvbmZpZy5zaG93Q2xhc3MgIT09IGZhbHNlOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNhY3RvckNsYXNzQm94Jywgc2hvdWxkU2hvd0NsYXNzLmNoZWNrZWQpOw0KDQogICAgdG9nZ2xlQnV0dG9uKCcjY2xhc3NIb3J6QWxpZ25MZWZ0JywgICAgICdsZWZ0JyA9PSBjb25maWcuY2xhc3NIb3J6QWxpZ24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI2NsYXNzSG9yekFsaWduQ2VudGVyJywgICAnY2VudGVyJyA9PSBjb25maWcuY2xhc3NIb3J6QWxpZ24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI2NsYXNzSG9yekFsaWduUmlnaHQnLCAgICAncmlnaHQnID09IGNvbmZpZy5jbGFzc0hvcnpBbGlnbiB8fCAhY29uZmlnLmNsYXNzSG9yekFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNjbGFzc1ZlcnRBbGlnblRvcCcsICAgICAgJ3RvcCcgPT0gY29uZmlnLmNsYXNzVmVydEFsaWduIHx8ICFjb25maWcuY2xhc3NWZXJ0QWxpZ24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI2NsYXNzVmVydEFsaWduTWlkZGxlJywgICAnbWlkZGxlJyA9PSBjb25maWcuY2xhc3NWZXJ0QWxpZ24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI2NsYXNzVmVydEFsaWduQm90dG9tJywgICAnYm90dG9tJyA9PSBjb25maWcuY2xhc3NWZXJ0QWxpZ24pOw0KDQogICAgY2xhc3NYLnZhbHVlICAgICAgICA9IGNvbmZpZy5jbGFzc1g7DQogICAgY2xhc3NZLnZhbHVlICAgICAgICA9IGNvbmZpZy5jbGFzc1k7DQogICAgY2xhc3NXaWR0aC52YWx1ZSAgICA9IGNvbmZpZy5jbGFzc1dpZHRoOw0KICAgIGNsYXNzRm9udFNpemUudmFsdWUgPSBjb25maWcuY2xhc3NGb250U2l6ZTsNCg0KICAgIHRvZ2dsZUJ1dHRvbignI2NsYXNzVGV4dEFsaWduTGVmdCcsICAgICAnbGVmdCcgPT0gY29uZmlnLmNsYXNzVGV4dEFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNjbGFzc1RleHRBbGlnbkNlbnRlcicsICAgJ2NlbnRlcicgPT0gY29uZmlnLmNsYXNzVGV4dEFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNjbGFzc1RleHRBbGlnblJpZ2h0JywgICAgJ3JpZ2h0JyA9PSBjb25maWcuY2xhc3NUZXh0QWxpZ24gfHwgIWNvbmZpZy5jbGFzc1RleHRBbGlnbik7DQoNCiAgICAkKCcjbmFtZVRleHRDb2xvclNwYW4nKS5jc3MoJ3RleHQtZGVjb3JhdGlvbi1jb2xvcicsICAgIGNvbG9yQ29kZVRvSGV4KGNvbmZpZy5uYW1lVGV4dENvbG9yKSk7DQogICAgJCgnI2NsYXNzVGV4dENvbG9yU3BhbicpLmNzcygndGV4dC1kZWNvcmF0aW9uLWNvbG9yJywgICBjb2xvckNvZGVUb0hleChjb25maWcuY2xhc3NUZXh0Q29sb3IpKTsNCg0KICAgIC8vIExldmVsDQogICAgc2hvd0xldmVsTW9kZS52YWx1ZSA9IGNvbmZpZy5zaG93TGV2ZWxNb2RlIHx8ICdnYXVnZSc7DQoNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjbGV2ZWxQb3NpdGlvbkJveCcsICAgICAgICdub25lJyAhPSBzaG93TGV2ZWxNb2RlLnZhbHVlKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjbGV2ZWxHYXBCb3gnLCAgICAgICAgICAgICd0ZXh0JyA9PSBzaG93TGV2ZWxNb2RlLnZhbHVlKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjbGV2ZWxFbXB0eUJveCcsICAgICAgICAgICd0ZXh0JyA9PSBzaG93TGV2ZWxNb2RlLnZhbHVlKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjZXhwR2F1Z2VXaWR0aEJveCcsICAgICAgICdnYXVnZScgPT0gc2hvd0xldmVsTW9kZS52YWx1ZSk7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI2V4cEdhdWdlSGVpZ2h0Qm94JywgICAgICAnZ2F1Z2UnID09IHNob3dMZXZlbE1vZGUudmFsdWUpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNsZXZlbEFzVGV4dEJveCcsICAgICAgICAgJ3RleHQnID09IHNob3dMZXZlbE1vZGUudmFsdWUpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNsZXZlbEFzR2F1Z2VCb3gnLCAgICAgICAgJ2dhdWdlJyA9PSBzaG93TGV2ZWxNb2RlLnZhbHVlKTsNCg0KICAgIHRvZ2dsZUJ1dHRvbignI2xldmVsSW5mb0hvcnpBbGlnbkxlZnQnLCAgICAgJ2xlZnQnID09IGNvbmZpZy5sZXZlbEluZm9Ib3J6QWxpZ24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI2xldmVsSW5mb0hvcnpBbGlnbkNlbnRlcicsICAgJ2NlbnRlcicgPT0gY29uZmlnLmxldmVsSW5mb0hvcnpBbGlnbiB8fCAhY29uZmlnLmxldmVsSW5mb0hvcnpBbGlnbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjbGV2ZWxJbmZvSG9yekFsaWduUmlnaHQnLCAgICAncmlnaHQnID09IGNvbmZpZy5sZXZlbEluZm9Ib3J6QWxpZ24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI2xldmVsSW5mb1ZlcnRBbGlnblRvcCcsICAgICAgJ3RvcCcgPT0gY29uZmlnLmxldmVsSW5mb1ZlcnRBbGlnbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjbGV2ZWxJbmZvVmVydEFsaWduTWlkZGxlJywgICAnbWlkZGxlJyA9PSBjb25maWcubGV2ZWxJbmZvVmVydEFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNsZXZlbEluZm9WZXJ0QWxpZ25Cb3R0b20nLCAgICdib3R0b20nID09IGNvbmZpZy5sZXZlbEluZm9WZXJ0QWxpZ24gfHwgIWNvbmZpZy5sZXZlbEluZm9WZXJ0QWxpZ24pOw0KDQogICAgbGV2ZWxYLnZhbHVlICAgICAgICA9IGNvbmZpZy5sZXZlbFg7DQogICAgbGV2ZWxZLnZhbHVlICAgICAgICA9IGNvbmZpZy5sZXZlbFk7DQogICAgbGV2ZWxHYXAudmFsdWUgICAgICA9IGNvbmZpZy5sZXZlbEdhcDsNCiAgICBsZXZlbEZvbnRTaXplLnZhbHVlID0gY29uZmlnLmxldmVsRm9udFNpemU7DQogICAgDQogICAgJCgnI2xldmVsVGV4dENvbG9yMVNwYW4nKS5jc3MoJ3RleHQtZGVjb3JhdGlvbi1jb2xvcicsIGNvbG9yQ29kZVRvSGV4KGNvbmZpZy5sZXZlbFRleHRDb2xvcjEpKTsNCiAgICAkKCcjbGV2ZWxUZXh0Q29sb3IyU3BhbicpLmNzcygndGV4dC1kZWNvcmF0aW9uLWNvbG9yJywgY29sb3JDb2RlVG9IZXgoY29uZmlnLmxldmVsVGV4dENvbG9yMikpOw0KDQogICAgZXhwR2F1Z2VXaWR0aC52YWx1ZSA9IGNvbmZpZy5leHBHYXVnZVdpZHRoOw0KICAgIGV4cEdhdWdlSGVpZ2h0LnZhbHVlID0gY29uZmlnLmV4cEdhdWdlSGVpZ2h0Ow0KDQogICAgLy8gSFAgR2F1Z2VzDQogICAgc2hvd0hwTW9kZS52YWx1ZSA9IGNvbmZpZy5zaG93SHBNb2RlIHx8ICdkZWZhdWx0JzsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjYWN0b3JIcEJveCcsIHNob3dIcE1vZGUudmFsdWUgIT09ICdub25lJyk7DQoNCiAgICBzaG93TXBNb2RlLnZhbHVlID0gY29uZmlnLnNob3dNcE1vZGUgfHwgJ2RlZmF1bHQnOw0KICAgIHNob3dUcE1vZGUudmFsdWUgPSBjb25maWcuc2hvd1RwTW9kZSB8fCAnZGVmYXVsdCc7DQoNCiAgICB0b2dnbGVCdXR0b24oJyNocEdhdWdlSG9yekFsaWduTGVmdCcsICAgJ2xlZnQnID09IGNvbmZpZy5ocEdhdWdlSG9yekFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNocEdhdWdlSG9yekFsaWduQ2VudGVyJywgJ2NlbnRlcicgPT0gY29uZmlnLmhwR2F1Z2VIb3J6QWxpZ24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI2hwR2F1Z2VIb3J6QWxpZ25SaWdodCcsICAncmlnaHQnID09IGNvbmZpZy5ocEdhdWdlSG9yekFsaWduIHx8ICFjb25maWcuaHBHYXVnZUhvcnpBbGlnbik7DQoNCiAgICB0b2dnbGVCdXR0b24oJyNocEdhdWdlVmVydEFsaWduVG9wJywgICAgJ3RvcCcgPT0gY29uZmlnLmhwR2F1Z2VWZXJ0QWxpZ24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI2hwR2F1Z2VWZXJ0QWxpZ25NaWRkbGUnLCAnbWlkZGxlJyA9PSBjb25maWcuaHBHYXVnZVZlcnRBbGlnbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjaHBHYXVnZVZlcnRBbGlnbkJvdHRvbScsICdib3R0b20nID09IGNvbmZpZy5ocEdhdWdlVmVydEFsaWduIHx8ICFjb25maWcuaHBHYXVnZVZlcnRBbGlnbik7DQoNCiAgICBocEdhdWdlWC52YWx1ZSAgICAgICAgICAgICAgICAgID0gY29uZmlnLmhwR2F1Z2VYOw0KICAgIGhwR2F1Z2VZLnZhbHVlICAgICAgICAgICAgICAgICAgPSBjb25maWcuaHBHYXVnZVk7DQogICAgaHBHYXVnZVdpZHRoLnZhbHVlICAgICAgICAgICAgICA9IGNvbmZpZy5ocEdhdWdlV2lkdGg7DQogICAgaHBHYXVnZUhlaWdodC52YWx1ZSAgICAgICAgICAgICA9IGNvbmZpZy5ocEdhdWdlSGVpZ2h0Ow0KICAgIGhwR2F1Z2VWZXJ0aWNhbFNwYWNlLnZhbHVlICAgICAgPSBjb25maWcuaHBHYXVnZVZlcnRpY2FsU3BhY2U7DQoNCiAgICAvLyBTdGF0dXMgRWZmZWN0cw0KICAgIHRvZ2dsZUJ1dHRvbignI3N0YXR1c0VmZmVjdHNIb3J6QWxpZ25MZWZ0JywgICAnbGVmdCcgPT0gY29uZmlnLnN0YXR1c0VmZmVjdHNIb3J6QWxpZ24gfHwgIWNvbmZpZy5zdGF0dXNFZmZlY3RzSG9yekFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNzdGF0dXNFZmZlY3RzSG9yekFsaWduQ2VudGVyJywgJ2NlbnRlcicgPT0gY29uZmlnLnN0YXR1c0VmZmVjdHNIb3J6QWxpZ24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI3N0YXR1c0VmZmVjdHNIb3J6QWxpZ25SaWdodCcsICAncmlnaHQnID09IGNvbmZpZy5zdGF0dXNFZmZlY3RzSG9yekFsaWduKTsNCg0KICAgIHRvZ2dsZUJ1dHRvbignI3N0YXR1c0VmZmVjdHNWZXJ0QWxpZ25Ub3AnLCAgICAndG9wJyA9PSBjb25maWcuc3RhdHVzRWZmZWN0c1ZlcnRBbGlnbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjc3RhdHVzRWZmZWN0c1ZlcnRBbGlnbk1pZGRsZScsICdtaWRkbGUnID09IGNvbmZpZy5zdGF0dXNFZmZlY3RzVmVydEFsaWduIHx8ICFjb25maWcuc3RhdHVzRWZmZWN0c1ZlcnRBbGlnbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjc3RhdHVzRWZmZWN0c1ZlcnRBbGlnbkJvdHRvbScsICdib3R0b20nID09IGNvbmZpZy5zdGF0dXNFZmZlY3RzVmVydEFsaWduKTsNCg0KICAgIHN0YXR1c0VmZmVjdHNYLnZhbHVlICAgICAgICAgICAgPSBjb25maWcuc3RhdHVzRWZmZWN0c1g7DQogICAgc3RhdHVzRWZmZWN0c1kudmFsdWUgICAgICAgICAgICA9IGNvbmZpZy5zdGF0dXNFZmZlY3RzWTsNCiAgICBzdGF0dXNFZmZlY3RzTWF4SWNvbnMudmFsdWUgICAgID0gY29uZmlnLnN0YXR1c0VmZmVjdHNNYXhJY29ucyB8fCA4Ow0KDQogICAgLy8gQ3VzdG9tIFBhcmFtZXRlcg0KICAgIGVuYWJsZUN1c3RvbVBhcmFtZXRlci5jaGVja2VkICAgICAgICAgICAgICAgPSBjb25maWcuZW5hYmxlQ3VzdG9tUGFyYW1ldGVyOw0KICAgIHNob3dDdXN0b21QYXJhbWV0ZXJJbk90aGVyU2NlbmVzLmNoZWNrZWQgICAgPSBjb25maWcuc2hvd0N1c3RvbVBhcmFtZXRlckluT3RoZXJTY2VuZXM7DQogICAgY3VzdG9tUGFyYW1ldGVyTW9kZS52YWx1ZSAgICAgICAgICAgICAgICAgICA9IGNvbmZpZy5jdXN0b21QYXJhbWV0ZXJNb2RlIHx8IChSUEdNQUtFUl9OQU1FID09ICdNWicgPyAnZ2F1Z2UnIDogJ3gteScpOw0KICAgIGN1c3RvbVBhcmFtZXRlckxhYmVsLnZhbHVlICAgICAgICAgICAgICAgICAgPSBjb25maWcuY3VzdG9tUGFyYW1ldGVyTGFiZWwgfHwgJyc7DQogICAgY3VzdG9tUGFyYW1ldGVyUHJlY29uZGl0aW9uRXZhbC52YWx1ZSAgICAgICA9IGNvbmZpZy5jdXN0b21QYXJhbWV0ZXJQcmVjb25kaXRpb25FdmFsIHx8ICcnOw0KICAgIGN1c3RvbVBhcmFtZXRlckN1cnJlbnRWYWx1ZUV2YWwudmFsdWUgICAgICAgPSBjb25maWcuY3VzdG9tUGFyYW1ldGVyQ3VycmVudFZhbHVlRXZhbCB8fCAnJzsNCiAgICBjdXN0b21QYXJhbWV0ZXJNYXhWYWx1ZUV2YWwudmFsdWUgICAgICAgICAgID0gY29uZmlnLmN1c3RvbVBhcmFtZXRlck1heFZhbHVlRXZhbCB8fCAnJzsNCiAgICBzaG93Q3VzdG9tUGFyYW1ldGVyR2F1Z2VNYXhWYWx1ZXMuY2hlY2tlZCAgID0gY29uZmlnLnNob3dDdXN0b21QYXJhbWV0ZXJHYXVnZU1heFZhbHVlczsNCiAgICBjdXN0b21QYXJhbWV0ZXJOdW1iZXJFdmFsLnZhbHVlICAgICAgICAgICAgID0gY29uZmlnLmN1c3RvbVBhcmFtZXRlck51bWJlckV2YWwgfHwgJyc7DQogICAgY3VzdG9tUGFyYW1ldGVyVGV4dEV2YWwudmFsdWUgICAgICAgICAgICAgICA9IGNvbmZpZy5jdXN0b21QYXJhbWV0ZXJUZXh0RXZhbCB8fCAnJzsNCiAgICBjdXN0b21QYXJhbWV0ZXJGb250U2l6ZS52YWx1ZSAgICAgICAgICAgICAgID0gY29uZmlnLmN1c3RvbVBhcmFtZXRlckZvbnRTaXplOw0KDQogICAgdG9nZ2xlQnV0dG9uKCcjY3VzdG9tUGFyYW1ldGVySG9yekFsaWduTGVmdCcsICAgJ2xlZnQnID09IGNvbmZpZy5jdXN0b21QYXJhbWV0ZXJIb3J6QWxpZ24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI2N1c3RvbVBhcmFtZXRlckhvcnpBbGlnbkNlbnRlcicsICdjZW50ZXInID09IGNvbmZpZy5jdXN0b21QYXJhbWV0ZXJIb3J6QWxpZ24gfHwgIWNvbmZpZy5jdXN0b21QYXJhbWV0ZXJIb3J6QWxpZ24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI2N1c3RvbVBhcmFtZXRlckhvcnpBbGlnblJpZ2h0JywgICdyaWdodCcgPT0gY29uZmlnLmN1c3RvbVBhcmFtZXRlckhvcnpBbGlnbik7DQoNCiAgICB0b2dnbGVCdXR0b24oJyNjdXN0b21QYXJhbWV0ZXJWZXJ0QWxpZ25Ub3AnLCAgICAndG9wJyA9PSBjb25maWcuY3VzdG9tUGFyYW1ldGVyVmVydEFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNjdXN0b21QYXJhbWV0ZXJWZXJ0QWxpZ25NaWRkbGUnLCAnbWlkZGxlJyA9PSBjb25maWcuY3VzdG9tUGFyYW1ldGVyVmVydEFsaWduIHx8ICFjb25maWcuY3VzdG9tUGFyYW1ldGVyVmVydEFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNjdXN0b21QYXJhbWV0ZXJWZXJ0QWxpZ25Cb3R0b20nLCAnYm90dG9tJyA9PSBjb25maWcuY3VzdG9tUGFyYW1ldGVyVmVydEFsaWduKTsNCg0KICAgIGN1c3RvbVBhcmFtZXRlck9mZnNldFgudmFsdWUgICAgPSBjb25maWcuY3VzdG9tUGFyYW1ldGVyT2Zmc2V0WDsNCiAgICBjdXN0b21QYXJhbWV0ZXJPZmZzZXRZLnZhbHVlICAgID0gY29uZmlnLmN1c3RvbVBhcmFtZXRlck9mZnNldFk7DQogICAgY3VzdG9tUGFyYW1ldGVyV2lkdGgudmFsdWUgICAgICA9IGNvbmZpZy5jdXN0b21QYXJhbWV0ZXJXaWR0aDsNCiAgICBjdXN0b21QYXJhbWV0ZXJIZWlnaHQudmFsdWUgICAgID0gY29uZmlnLmN1c3RvbVBhcmFtZXRlckhlaWdodDsNCg0KICAgIHRvZ2dsZUJ1dHRvbignI2N1c3RvbVBhcmFtZXRlclRleHRBbGlnbkxlZnQnLCAgICdsZWZ0JyA9PSBjb25maWcuY3VzdG9tUGFyYW1ldGVyVGV4dEFsaWduIHx8ICFjb25maWcuY3VzdG9tUGFyYW1ldGVyVGV4dEFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNjdXN0b21QYXJhbWV0ZXJUZXh0QWxpZ25DZW50ZXInLCAnY2VudGVyJyA9PSBjb25maWcuY3VzdG9tUGFyYW1ldGVyVGV4dEFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNjdXN0b21QYXJhbWV0ZXJUZXh0QWxpZ25SaWdodCcsICAncmlnaHQnID09IGNvbmZpZy5jdXN0b21QYXJhbWV0ZXJUZXh0QWxpZ24pOw0KDQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI2N1c3RvbVBhcmFtZXRlckJveCcsICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQ3VzdG9tUGFyYW1ldGVyLmNoZWNrZWQpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjdXN0b21QYXJhbWV0ZXJMYWJlbEJveCcsICAgICAgICAgICAgICAgIGN1c3RvbVBhcmFtZXRlck1vZGUudmFsdWUgIT0gJ3RleHQnKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjY3VzdG9tUGFyYW1ldGVyWFlWYWx1ZXNCb3gnLCAgICAgICAgICAgICBbJ2dhdWdlJywgJ3gteSddLmluY2x1ZGVzKGN1c3RvbVBhcmFtZXRlck1vZGUudmFsdWUpKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjY3VzdG9tUGFyYW1ldGVyU2hvd01heFZhbHVlQm94JywgICAgICAgICBjdXN0b21QYXJhbWV0ZXJNb2RlLnZhbHVlID09ICdnYXVnZScpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjdXN0b21QYXJhbWV0ZXJOdW1iZXJFdmFsQm94JywgICAgICAgICAgIGN1c3RvbVBhcmFtZXRlck1vZGUudmFsdWUgPT0gJ251bWJlcicpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjdXN0b21QYXJhbWV0ZXJUZXh0RXZhbEJveCcsICAgICAgICAgICAgIGN1c3RvbVBhcmFtZXRlck1vZGUudmFsdWUgPT0gJ3RleHQnKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjY3VzdG9tUGFyYW1ldGVySGVpZ2h0Qm94JywgICAgICAgICAgICAgICBjdXN0b21QYXJhbWV0ZXJNb2RlLnZhbHVlID09ICdnYXVnZScpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjdXN0b21QYXJhbWV0ZXJUZXh0QWxpZ25Cb3gnLCAgICAgICAgICAgIGN1c3RvbVBhcmFtZXRlck1vZGUudmFsdWUgPT0gJ3RleHQnKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjY3VzdG9tUGFyYW1ldGVyV2hlbkVtcHR5VGV4dENvbG9yQm94JywgICBjdXN0b21QYXJhbWV0ZXJNb2RlLnZhbHVlICE9ICd0ZXh0Jyk7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI2N1c3RvbVBhcmFtZXRlckdhdWdlQm94JywgICAgICAgICAgICAgICAgY3VzdG9tUGFyYW1ldGVyTW9kZS52YWx1ZSA9PSAnZ2F1Z2UnKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjY3VzdG9tUGFyYW1ldGVyRm9udFNpemVCb3gnLCAgICAgICAgICAgICBbJ3gteScsICdudW1iZXInXS5pbmNsdWRlcyhjdXN0b21QYXJhbWV0ZXJNb2RlLnZhbHVlKSk7DQoNCiAgICAvLyBDb21tYW5kIFdpbmRvdw0KICAgIHRvZ2dsZUJ1dHRvbignI2NvbW1hbmRUZXh0QWxpZ25MZWZ0JywgICAgICAgICAgICAgICAnbGVmdCcgPT0gY29uZmlnLmNvbW1hbmRUZXh0QWxpZ24gfHwgIWNvbmZpZy5jb21tYW5kVGV4dEFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNjb21tYW5kVGV4dEFsaWduQ2VudGVyJywgICAgICAgICAgICAgJ2NlbnRlcicgPT0gY29uZmlnLmNvbW1hbmRUZXh0QWxpZ24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI2NvbW1hbmRUZXh0QWxpZ25SaWdodCcsICAgICAgICAgICAgICAncmlnaHQnID09IGNvbmZpZy5jb21tYW5kVGV4dEFsaWduKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjY29tbWFuZFdpbmRvd0ZpbGVCb3gnLCAgICAgICAgICAgY29uZmlnLm92ZXJyaWRlQ29tbWFuZFdpbmRvdyk7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI2NvbW1hbmRCYWNrZ3JvdW5kRmlsZUJveCcsICAgICAgICdpbWFnZScgPT0gY29uZmlnLmNvbW1hbmRCYWNrZ3JvdW5kRmlsZSk7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI2NvbW1hbmRJdGVtQmFja2dyb3VuZEZpbGVCb3gnLCAgICdpbWFnZScgPT0gY29uZmlnLmNvbW1hbmRJdGVtQmFja2dyb3VuZFR5cGUpOw0KDQogICAgY29tbWFuZE9wYWNpdHkudmFsdWUgICAgICAgICAgICAgICAgPSBjb25maWcuY29tbWFuZE9wYWNpdHk7DQogICAgY29tbWFuZFBhZGRpbmcudmFsdWUgICAgICAgICAgICAgICAgPSBjb25maWcuY29tbWFuZFBhZGRpbmc7DQogICAgY29tbWFuZEl0ZW1IZWlnaHQudmFsdWUgICAgICAgICAgICAgPSBjb25maWcuY29tbWFuZEl0ZW1IZWlnaHQ7DQogICAgY29tbWFuZFJvd1NwYWNpbmcudmFsdWUgICAgICAgICAgICAgPSBjb25maWcuY29tbWFuZFJvd1NwYWNpbmc7DQogICAgY29tbWFuZENvbHVtblNwYWNpbmcudmFsdWUgICAgICAgICAgPSBjb25maWcuY29tbWFuZENvbHVtblNwYWNpbmc7DQogICAgY29tbWFuZEZvbnRTaXplLnZhbHVlICAgICAgICAgICAgICAgPSBjb25maWcuY29tbWFuZEZvbnRTaXplOw0KICAgIGNvbW1hbmRTdHlsZS52YWx1ZSAgICAgICAgICAgICAgICAgID0gY29uZmlnLmNvbW1hbmRTdHlsZSB8fCAnaWNvbkFuZFRleHQnOw0KICAgIHNob3VsZE92ZXJyaWRlQ29tbWFuZFdpbmRvdy5jaGVja2VkID0gY29uZmlnLm92ZXJyaWRlQ29tbWFuZFdpbmRvdzsNCiAgICBjb21tYW5kQmFja2dyb3VuZFR5cGUudmFsdWUgICAgICAgICA9IGNvbmZpZy5jb21tYW5kQmFja2dyb3VuZFR5cGUgfHwgJ3dpbmRvdyc7DQogICAgY29tbWFuZEl0ZW1CYWNrZ3JvdW5kVHlwZS52YWx1ZSAgICAgPSBjb25maWcuY29tbWFuZEl0ZW1CYWNrZ3JvdW5kVHlwZSB8fCAnZGltbWVkJzsNCg0KICAgIC8vIEdhbWUgSW5mbw0KICAgIHNob3dHb2xkV2luZG93LmNoZWNrZWQgICAgICAgICAgICAgICAgICA9IGNvbmZpZy5zaG93R29sZFdpbmRvdyAhPT0gZmFsc2U7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI2dvbGRXaW5kb3dCb3gnLCAgICAgIHNob3dHb2xkV2luZG93LmNoZWNrZWQpOw0KICAgIA0KICAgIGdhbWVJbmZvVGV4dExlZnQudmFsdWUgICAgICA9IGNvbmZpZy5nYW1lSW5mb1RleHRMZWZ0Ow0KICAgIGdhbWVJbmZvVGV4dFJpZ2h0LnZhbHVlICAgICA9IGNvbmZpZy5nYW1lSW5mb1RleHRSaWdodDsNCiAgICB1bmtub3duTWFwTmFtZS52YWx1ZSAgICAgICAgPSBjb25maWcudW5rbm93bk1hcE5hbWU7DQoNCiAgICBnb2xkRm9udFNpemUudmFsdWUgICAgICAgICAgPSBjb25maWcuZ29sZEZvbnRTaXplOw0KICAgIGdvbGRCYWNrZ3JvdW5kVHlwZS52YWx1ZSAgICA9IGNvbmZpZy5nb2xkQmFja2dyb3VuZFR5cGUgfHwgJ3dpbmRvdyc7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI2dvbGRCYWNrZ3JvdW5kRmlsZUJveCcsICdpbWFnZScgPT0gY29uZmlnLmdvbGRCYWNrZ3JvdW5kVHlwZSk7DQoNCiAgICAvLyBHYXVnZSBTZXR0aW5ncw0KICAgIGdhdWdlV2lkdGgudmFsdWUgICAgICAgICAgICAgICAgPSBjb25maWcuZ2F1Z2VXaWR0aDsNCiAgICBnYXVnZUhlaWdodC52YWx1ZSAgICAgICAgICAgICAgID0gY29uZmlnLmdhdWdlSGVpZ2h0Ow0KICAgIGdhdWdlV2lkdGhPdmVycmlkZVNjZW5lLnZhbHVlICAgPSBjb25maWcuZ2F1Z2VXaWR0aE92ZXJyaWRlU2NlbmUgfHwgJ2dsb2JhbCc7DQogICAgZ2F1Z2VIZWlnaHRPdmVycmlkZVNjZW5lLnZhbHVlICA9IGNvbmZpZy5nYXVnZUhlaWdodE92ZXJyaWRlU2NlbmUgfHwgJ2dsb2JhbCc7DQogICAgZ2F1Z2VMYWJlbEZvbnRTaXplLnZhbHVlICAgICAgICA9IGNvbmZpZy5nYXVnZUxhYmVsRm9udFNpemU7DQogICAgZ2F1Z2VWYWx1ZUZvbnRTaXplLnZhbHVlICAgICAgICA9IGNvbmZpZy5nYXVnZVZhbHVlRm9udFNpemU7DQogICAgZ2F1Z2VMYWJlbFkudmFsdWUgICAgICAgICAgICAgICA9IGNvbmZpZy5nYXVnZUxhYmVsWTsNCiAgICBnYXVnZVZhbHVlWS52YWx1ZSAgICAgICAgICAgICAgID0gY29uZmlnLmdhdWdlVmFsdWVZOw0KDQogICAgdG9nZ2xlVmlzaWJpbGl0eSgNCiAgICAgICAgJyNnYXVnZUxhYmVsQXNJY29uQm94JywNCiAgICAgICAgY29uZmlnLmdhdWdlTGFiZWxTdHlsZSA9PSAnaWNvbicsDQogICAgKTsNCiAgICB0b2dnbGVCdXR0b25zKA0KICAgICAgICAnI2dhdWdlTGFiZWxTdHlsZScsDQogICAgICAgIFsndGV4dCcsICdpY29uJ10sDQogICAgICAgIGNvbmZpZy5nYXVnZUxhYmVsU3R5bGUgfHwgJ3RleHQnLA0KICAgICk7DQogICAgDQogICAgZ2F1Z2VTdHlsZS52YWx1ZSAgICAgICAgICAgICAgICA9IGNvbmZpZy5nYXVnZVN0eWxlIHx8ICdkZWZhdWx0JzsNCiAgICBzaG93R2F1Z2VNYXhWYWx1ZXMuZGlzYWJsZWQgICAgID0gZ2F1Z2VTdHlsZS52YWx1ZSA9PSAndGV4dCc7DQogICAgc2hvd0dhdWdlTWF4VmFsdWVzLmNoZWNrZWQgICAgICA9IHNob3dHYXVnZU1heFZhbHVlcy5kaXNhYmxlZCB8fCBjb25maWcuc2hvd0dhdWdlTWF4VmFsdWVzOw0KDQogICAgaHBJY29uSW5kZXgudmFsdWUgPSB0eXBlb2YgY29uZmlnLmhwSWNvbkluZGV4ID09ICdudW1iZXInID8gY29uZmlnLmhwSWNvbkluZGV4IDogODQ7DQogICAgbXBJY29uSW5kZXgudmFsdWUgPSB0eXBlb2YgY29uZmlnLm1wSWNvbkluZGV4ID09ICdudW1iZXInID8gY29uZmlnLm1wSWNvbkluZGV4IDogMTY1Ow0KICAgIHRwSWNvbkluZGV4LnZhbHVlID0gdHlwZW9mIGNvbmZpZy50cEljb25JbmRleCA9PSAnbnVtYmVyJyA/IGNvbmZpZy50cEljb25JbmRleCA6IDE2NDsNCg0KICAgIFsnSHAnLCAnSHBDcmlzaXMnLCAnTXAnLCAnVHAnLCAnQXRiJywgJ0V4cCcsICdFeHBNYXhlZCcsICdDdXN0b20nXS5mb3JFYWNoKHR5cGUgPT4gew0KICAgICAgICB3aW5kb3dbJ2dhdWdlQ29sb3InICsgdHlwZSArICcxJ10udmFsdWUgPSBjb25maWdbJ2dhdWdlQ29sb3InICsgdHlwZSArICcxJ107DQogICAgICAgIHdpbmRvd1snZ2F1Z2VDb2xvcicgKyB0eXBlICsgJzInXS52YWx1ZSA9IGNvbmZpZ1snZ2F1Z2VDb2xvcicgKyB0eXBlICsgJzInXTsNCiAgICB9KTsNCiAgICANCiAgICBbJ0hwJywgJ0hwQ3Jpc2lzJywgJ0hwRGVhZCcsICdNcCcsICdUcCcsICdBdGInLCAnRXhwJywgJ0N1c3RvbSddLmZvckVhY2godHlwZSA9PiB7DQogICAgICAgIHdpbmRvd1snZ2F1Z2VCYWNrZ3JvdW5kQ29sb3InICsgdHlwZV0udmFsdWUgPSBjb25maWdbJ2dhdWdlQmFja2dyb3VuZENvbG9yJyArIHR5cGVdOw0KICAgIH0pOw0KDQogICAgLy8gVGFyZ2V0IEFjdG9yIFdpbmRvdw0KICAgIHRhcmdldEFjdG9yV2luZG93V2lkdGhQZXJjZW50YWdlLnZhbHVlICAgICAgPSBjb25maWcudGFyZ2V0QWN0b3JXaW5kb3dXaWR0aFBlcmNlbnRhZ2U7DQogICAgdGFyZ2V0QWN0b3JXaW5kb3dIZWlnaHRQZXJjZW50YWdlLnZhbHVlICAgICA9IGNvbmZpZy50YXJnZXRBY3RvcldpbmRvd0hlaWdodFBlcmNlbnRhZ2U7DQogICAgdGFyZ2V0QWN0b3JXaW5kb3dIb3J6QWxpZ25Nb2RlLnZhbHVlICAgICAgICA9IGNvbmZpZy50YXJnZXRBY3RvcldpbmRvd0hvcnpBbGlnbk1vZGUgfHwgJ2RlZmF1bHQnOw0KICAgIHRhcmdldEFjdG9yV2luZG93Q29scy52YWx1ZSAgICAgICAgICAgICAgICAgPSBjb25maWcudGFyZ2V0QWN0b3JXaW5kb3dDb2xzOw0KICAgIHRhcmdldEFjdG9yV2luZG93Um93cy52YWx1ZSAgICAgICAgICAgICAgICAgPSBjb25maWcudGFyZ2V0QWN0b3JXaW5kb3dSb3dzOw0KICAgIHRhcmdldEFjdG9yUG9ydHJhaXRNb2RlLnZhbHVlICAgICAgICAgICAgICAgPSBjb25maWcudGFyZ2V0QWN0b3JQb3J0cmFpdE1vZGUgfHwgJ2RlZmF1bHQnOw0KICAgIHRhcmdldEFjdG9yUG9ydHJhaXRQb3NpdGlvbi52YWx1ZSAgICAgICAgICAgPSBjb25maWcudGFyZ2V0QWN0b3JQb3J0cmFpdFBvc2l0aW9uIHx8ICdkZWZhdWx0JzsNCiAgICB0YXJnZXRBY3RvclBvcnRyYWl0T2Zmc2V0WC52YWx1ZSAgICAgICAgICAgID0gY29uZmlnLnRhcmdldEFjdG9yUG9ydHJhaXRPZmZzZXRYOw0KICAgIHRhcmdldEFjdG9yUG9ydHJhaXRPZmZzZXRZLnZhbHVlICAgICAgICAgICAgPSBjb25maWcudGFyZ2V0QWN0b3JQb3J0cmFpdE9mZnNldFk7DQogICAgdGFyZ2V0QWN0b3JQb3J0cmFpdFNjYWxlLnZhbHVlICAgICAgICAgICAgICA9IGNvbmZpZy50YXJnZXRBY3RvclBvcnRyYWl0U2NhbGU7DQogICAgdGFyZ2V0QWN0b3JXaW5kb3dCYWNrZ3JvdW5kVHlwZS52YWx1ZSAgICAgICA9IGNvbmZpZy50YXJnZXRBY3RvcldpbmRvd0JhY2tncm91bmRUeXBlIHx8ICdkZWZhdWx0JzsNCiAgICB0YXJnZXRBY3RvckhwTXBUcFBvc2l0aW9uLnZhbHVlICAgICAgICAgICAgID0gY29uZmlnLnRhcmdldEFjdG9ySHBNcFRwUG9zaXRpb24gfHwgJ2RlZmF1bHQnOw0KICAgIHRhcmdldEFjdG9ySHBNcFRwT2Zmc2V0WC52YWx1ZSAgICAgICAgICAgICAgPSBjb25maWcudGFyZ2V0QWN0b3JIcE1wVHBPZmZzZXRYOw0KICAgIHRhcmdldEFjdG9ySHBNcFRwT2Zmc2V0WS52YWx1ZSAgICAgICAgICAgICAgPSBjb25maWcudGFyZ2V0QWN0b3JIcE1wVHBPZmZzZXRZOw0KICAgIHRhcmdldEFjdG9ySHBNcFRwV2lkdGgudmFsdWUgICAgICAgICAgICAgICAgPSBjb25maWcudGFyZ2V0QWN0b3JIcE1wVHBXaWR0aDsNCiAgICB0YXJnZXRBY3Rvck5hbWVQb3NpdGlvbi52YWx1ZSAgICAgICAgICAgICAgID0gY29uZmlnLnRhcmdldEFjdG9yTmFtZVBvc2l0aW9uIHx8ICdkZWZhdWx0JzsNCiAgICB0YXJnZXRBY3Rvck5hbWVPZmZzZXRYLnZhbHVlICAgICAgICAgICAgICAgID0gY29uZmlnLnRhcmdldEFjdG9yTmFtZU9mZnNldFg7DQogICAgdGFyZ2V0QWN0b3JOYW1lT2Zmc2V0WS52YWx1ZSAgICAgICAgICAgICAgICA9IGNvbmZpZy50YXJnZXRBY3Rvck5hbWVPZmZzZXRZOw0KICAgIHRhcmdldEFjdG9yTmFtZVdpZHRoLnZhbHVlICAgICAgICAgICAgICAgICAgPSBjb25maWcudGFyZ2V0QWN0b3JOYW1lV2lkdGg7DQogICAgdGFyZ2V0QWN0b3JTdGF0dXNFZmZlY3RzUG9zaXRpb24udmFsdWUgICAgICA9IGNvbmZpZy50YXJnZXRBY3RvclN0YXR1c0VmZmVjdHNQb3NpdGlvbiB8fCAnZGVmYXVsdCc7DQogICAgdGFyZ2V0QWN0b3JTdGF0dXNFZmZlY3RzT2Zmc2V0WC52YWx1ZSAgICAgICA9IGNvbmZpZy50YXJnZXRBY3RvclN0YXR1c0VmZmVjdHNPZmZzZXRYOw0KICAgIHRhcmdldEFjdG9yU3RhdHVzRWZmZWN0c09mZnNldFkudmFsdWUgICAgICAgPSBjb25maWcudGFyZ2V0QWN0b3JTdGF0dXNFZmZlY3RzT2Zmc2V0WTsNCg0KICAgIHRvZ2dsZUJ1dHRvbnMoDQogICAgICAgICcjdGFyZ2V0QWN0b3JXaW5kb3dWZXJ0QWxpZ24nLA0KICAgICAgICBbJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJ10sDQogICAgICAgIGNvbmZpZy50YXJnZXRBY3RvcldpbmRvd1ZlcnRBbGlnbiB8fCAnbWlkZGxlJywNCiAgICApOw0KICAgIHRvZ2dsZUJ1dHRvbnMoDQogICAgICAgICcjdGFyZ2V0QWN0b3JXaW5kb3dPcmllbnRhdGlvbicsDQogICAgICAgIFsnZGVmYXVsdCcsICdyb3dzJywgJ2NvbHVtbnMnLCAnZ3JpZCddLA0KICAgICAgICBjb25maWcudGFyZ2V0QWN0b3JXaW5kb3dPcmllbnRhdGlvbiB8fCAnZGVmYXVsdCcsDQogICAgKTsNCiAgICB0b2dnbGVCdXR0b25zKA0KICAgICAgICAnI3RhcmdldEFjdG9yTmFtZVRleHRBbGlnbicsDQogICAgICAgIFsnZGVmYXVsdCcsICdsZWZ0JywgJ2NlbnRlcicsICdyaWdodCddLA0KICAgICAgICBjb25maWcudGFyZ2V0QWN0b3JOYW1lVGV4dEFsaWduIHx8ICdkZWZhdWx0JywNCiAgICApOw0KfQ0KDQpmdW5jdGlvbiBzaG91bGRTaG93Q29tbWFuZFdpZHRoKCkgew0KICAgIHJldHVybiAoDQogICAgICAgICdub25lJyA9PSBjb25maWcuc3RhdHVzT3JpZW50YXRpb24gfHwNCiAgICAgICAgJ3NpZGUnID09IGNvbmZpZy5jb21tYW5kT3JpZW50YXRpb24gfHwNCiAgICAgICAgIWNvbmZpZy5jb21tYW5kT3JpZW50YXRpb24NCiAgICApOw0KfQ0KDQpmdW5jdGlvbiBzaG91bGRTaG93Q29tbWFuZENvbHVtbnNBbmRMaW5lcygpIHsNCiAgICByZXR1cm4gKA0KICAgICAgICAnbm9uZScgPT0gY29uZmlnLnN0YXR1c09yaWVudGF0aW9uIHx8DQogICAgICAgICd0b3AnID09IGNvbmZpZy5jb21tYW5kT3JpZW50YXRpb24gfHwNCiAgICAgICAgJ2JvdHRvbScgPT0gY29uZmlnLmNvbW1hbmRPcmllbnRhdGlvbg0KICAgICk7DQp9DQoNCmZ1bmN0aW9uIG9uQ29tbWFuZElucHV0TW9kZShkaXJlY3Rpb24pIHsNCiAgICB0b2dnbGVCdXR0b25zKA0KICAgICAgICAnI2NvbW1hbmRJbnB1dE1vZGUnLA0KICAgICAgICBbJ2xlZnQnLCAncmlnaHQnXSwNCiAgICAgICAgZGlyZWN0aW9uLA0KICAgICk7DQogICAgDQogICAgY29uZmlnLmNvbW1hbmRJbnB1dE1vZGUgPSBkaXJlY3Rpb247DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uQ29tbWFuZE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7DQogICAgY29uZmlnLmNvbW1hbmRPcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uOw0KICAgIA0KICAgIHRvZ2dsZUJ1dHRvbignI2NvbW1hbmRPcmllbnRhdGlvblNpZGUnLCAgICAgICAgICdzaWRlJyA9PSBvcmllbnRhdGlvbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjY29tbWFuZE9yaWVudGF0aW9uVG9wJywgICAgICAgICAgJ3RvcCcgPT0gb3JpZW50YXRpb24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI2NvbW1hbmRPcmllbnRhdGlvbkJvdHRvbScsICAgICAgICdib3R0b20nID09IG9yaWVudGF0aW9uKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjY29tbWFuZFdpZHRoQm94JywgICAgICAgICAgICBzaG91bGRTaG93Q29tbWFuZFdpZHRoKCkpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjb21tYW5kTnVtYmVyT2ZDb2x1bW5zQm94JywgIHNob3VsZFNob3dDb21tYW5kQ29sdW1uc0FuZExpbmVzKCkpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjb21tYW5kTnVtYmVyT2ZMaW5lc0JveCcsICAgIHNob3VsZFNob3dDb21tYW5kQ29sdW1uc0FuZExpbmVzKCkpOw0KDQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uU3RhdHVzV2luZG93TW9kZUNoYW5nZShvcmllbnRhdGlvbikgew0KICAgIGNvbmZpZy5zdGF0dXNPcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uOw0KICAgIA0KICAgIHRvZ2dsZUJ1dHRvbignI3N0YXR1c09yaWVudGF0aW9uUm93cycsICAgICAgICAgICdyb3dzJyA9PSBvcmllbnRhdGlvbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjc3RhdHVzT3JpZW50YXRpb25Db2x1bW5zJywgICAgICAgJ2NvbHVtbnMnID09IG9yaWVudGF0aW9uKTsNCiAgICB0b2dnbGVCdXR0b24oJyNzdGF0dXNPcmllbnRhdGlvbkdyaWQnLCAgICAgICAgICAnZ3JpZCcgPT0gb3JpZW50YXRpb24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI3N0YXR1c09yaWVudGF0aW9uU2luZ2xlQWN0b3InLCAgICdzaW5nbGUgYWN0b3InID09IG9yaWVudGF0aW9uKTsNCiAgICB0b2dnbGVCdXR0b24oJyNzdGF0dXNPcmllbnRhdGlvbk5vbmUnLCAgICAgICAgICAnbm9uZScgPT0gb3JpZW50YXRpb24pOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyN2aXNpYmxlQWN0b3JzQm94JywgICAgICAgICAgIFsncm93cycsICdjb2x1bW5zJ10uaW5jbHVkZXMob3JpZW50YXRpb24pKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjc3RhdHVzT3JpZW50YXRpb25HcmlkQm94JywgICAnZ3JpZCcgPT0gb3JpZW50YXRpb24pOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjb21tYW5kT3JpZW50YXRpb25Cb3gnLCAgICAgICdub25lJyAhPSBvcmllbnRhdGlvbik7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI2NvbW1hbmRPcmllbnRhdGlvbkJveDInLCAgICAgJ25vbmUnID09IG9yaWVudGF0aW9uKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjY29tbWFuZFdpZHRoQm94JywgICAgICAgICAgICBzaG91bGRTaG93Q29tbWFuZFdpZHRoKCkpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjb21tYW5kTnVtYmVyT2ZDb2x1bW5zQm94JywgIHNob3VsZFNob3dDb21tYW5kQ29sdW1uc0FuZExpbmVzKCkpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjb21tYW5kTnVtYmVyT2ZMaW5lc0JveCcsICAgIHNob3VsZFNob3dDb21tYW5kQ29sdW1uc0FuZExpbmVzKCkpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNnb2xkV2luZG93TGF5b3V0Qm94JywgICAgICAgICdub25lJyA9PSBvcmllbnRhdGlvbik7DQoNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25BdXRvQWRqdXN0VmlzaWJsZUFjdG9yc0NoYW5nZShjaGVja2VkKSB7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI3Zpc2libGVBY3RvcnNXYXZlJywgY2hlY2tlZCk7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI3Zpc2libGVBY3RvcnNNYXgnLCBjaGVja2VkKTsNCiAgICANCiAgICBjb25maWcuYXV0b0FkanVzdFZpc2libGVBY3RvcnMgPSBjaGVja2VkOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvbldpbmRvd0l0ZW1CYWNrZ3JvdW5kVHlwZUNoYW5nZSh0eXBlKSB7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI3dpbmRvd0l0ZW1CYWNrZ3JvdW5kRmlsZUJveCcsIHR5cGUgPT0gJ2ltYWdlJyk7DQoNCiAgICBjb25maWcud2luZG93SXRlbUJhY2tncm91bmRUeXBlID0gdHlwZTsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25DdXJzb3JTdHlsZUNoYW5nZShzdHlsZSkgew0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjdXJzb3JTdHlsZUJveCcsICdpbWFnZScgPT0gc3R5bGUpOw0KICAgIA0KICAgIGNvbmZpZy5jdXJzb3JTdHlsZSA9IHN0eWxlOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvbk92ZXJyaWRlRGlzYWJsZWRUZXh0Q29sb3JDaGFuZ2UoY2hlY2tlZCkgew0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNkaXNhYmxlZFRleHRDb2xvcicsIGNoZWNrZWQpOw0KICAgIA0KICAgIGNvbmZpZy5vdmVycmlkZURpc2FibGVkVGV4dENvbG9yID0gY2hlY2tlZDsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25TY2VuZUJhY2tncm91bmRUeXBlQ2hhbmdlKHR5cGUpIHsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjc2NlbmVCYWNrZ3JvdW5kRWZmZWN0c0JveCcsICdub25lJyAhPSB0eXBlKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjc2NlbmVCYWNrZ3JvdW5kRmlsZUJveCcsICdpbWFnZScgPT0gdHlwZSk7DQoNCiAgICBjb25maWcuc2NlbmVCYWNrZ3JvdW5kVHlwZSA9IHR5cGU7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uT3ZlcnJpZGVTdGF0dXNXaW5kb3dDaGFuZ2UoYikgew0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNzdGF0dXNXaW5kb3dGaWxlQm94JywgYik7DQogICAgDQogICAgY29uZmlnLm92ZXJyaWRlU3RhdHVzV2luZG93ID0gYjsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25TdGF0dXNCYWNrZ3JvdW5kVHlwZUNoYW5nZSh0eXBlKSB7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI3N0YXR1c0JhY2tncm91bmRGaWxlQm94JywgJ2ltYWdlJyA9PSB0eXBlKTsNCiAgICANCiAgICBjb25maWcuc3RhdHVzQmFja2dyb3VuZFR5cGUgPSB0eXBlOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvblN0YXR1c0l0ZW1CYWNrZ3JvdW5kVHlwZUNoYW5nZSh0eXBlKSB7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI3N0YXR1c0l0ZW1CYWNrZ3JvdW5kRmlsZUJveCcsICdpbWFnZScgPT0gdHlwZSk7DQogICAgDQogICAgY29uZmlnLnN0YXR1c0l0ZW1CYWNrZ3JvdW5kVHlwZSA9IHR5cGU7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uU3RhdHVzQ3Vyc29yQmFja2dyb3VuZFR5cGVDaGFuZ2UodHlwZSkgew0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNzdGF0dXNDdXJzb3JCYWNrZ3JvdW5kRmlsZUJveCcsICAnaW1hZ2UnID09IHR5cGUpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNzdGF0dXNCbGlua0N1cnNvckJveCcsICAgICAgICAgICAnaW1hZ2UnID09IHR5cGUpOw0KICAgIA0KICAgIGNvbmZpZy5zdGF0dXNDdXJzb3JCYWNrZ3JvdW5kVHlwZSA9IHR5cGU7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uU3RhdHVzUGVuZGluZ0JhY2tncm91bmRUeXBlQ2hhbmdlKHR5cGUpIHsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjc3RhdHVzUGVuZGluZ0JhY2tncm91bmRGaWxlQm94JywgJ2ltYWdlJyA9PSB0eXBlKTsNCiAgICANCiAgICBjb25maWcuc3RhdHVzUGVuZGluZ0JhY2tncm91bmRUeXBlID0gdHlwZTsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25TdGF0dXNSZW5kZXJUeXBlQ2hhbmdlKHR5cGUpIHsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjcG9ydHJhaXROb3RldGFnSGludCcsICdwb3J0cmFpdCcgPT0gdHlwZSk7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI2FjdG9ySW1hZ2VCb3gnLCAnbm9uZScgIT0gdHlwZSk7DQogICAgDQogICAgY29uZmlnLnN0YXR1c1JlbmRlclR5cGUgPSB0eXBlOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvblNob3dTaGFkb3dCb3hDaGFuZ2UoY2hlY2tlZCkgew0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNhY3RvclNoYWRvd0JveEJveCcsIGNoZWNrZWQpOw0KDQogICAgY29uZmlnLnNob3dTaGFkb3dCb3ggPSBjaGVja2VkOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvblNoYWRvd0JveEdyYWRpZW50Q2hhbmdlKGRpcmVjdGlvbikgew0KICAgIHRvZ2dsZUJ1dHRvbignI3NoYWRvd0JveEdyYWRpZW50VG9wJywgICAgICAgICAgICd0b3AnID09IGRpcmVjdGlvbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjc2hhZG93Qm94R3JhZGllbnRCb3R0b20nLCAgICAgICAgJ2JvdHRvbScgPT0gZGlyZWN0aW9uKTsNCiAgICB0b2dnbGVCdXR0b24oJyNzaGFkb3dCb3hHcmFkaWVudExlZnQnLCAgICAgICAgICAnbGVmdCcgPT0gZGlyZWN0aW9uKTsNCiAgICB0b2dnbGVCdXR0b24oJyNzaGFkb3dCb3hHcmFkaWVudFJpZ2h0JywgICAgICAgICAncmlnaHQnID09IGRpcmVjdGlvbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjc2hhZG93Qm94R3JhZGllbnROb25lJywgICAgICAgICAgJ25vbmUnID09IGRpcmVjdGlvbik7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI3NoYWRvd0JveEdyYWRpZW50UG93ZXJCb3gnLCAgJ25vbmUnICE9IGRpcmVjdGlvbikNCg0KICAgIGNvbmZpZy5zaGFkb3dCb3hHcmFkaWVudERpcmVjdGlvbiA9IGRpcmVjdGlvbjsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25TaG93TmFtZUNoYW5nZShjaGVja2VkKSB7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI2FjdG9yTmFtZUJveCcsIGNoZWNrZWQpOw0KICAgIA0KICAgIGNvbmZpZy5zaG93TmFtZSA9IGNoZWNrZWQ7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uTmFtZUhvcnpBbGlnbihhbGlnbikgew0KICAgIHRvZ2dsZUJ1dHRvbignI25hbWVIb3J6QWxpZ25MZWZ0JywgICAgICAnbGVmdCcgPT0gYWxpZ24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI25hbWVIb3J6QWxpZ25DZW50ZXInLCAgICAnY2VudGVyJyA9PSBhbGlnbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjbmFtZUhvcnpBbGlnblJpZ2h0JywgICAgICdyaWdodCcgPT0gYWxpZ24pOw0KICAgIA0KICAgIGNvbmZpZy5uYW1lSG9yekFsaWduID0gYWxpZ247DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uTmFtZVZlcnRBbGlnbihhbGlnbikgew0KICAgIHRvZ2dsZUJ1dHRvbignI25hbWVWZXJ0QWxpZ25Ub3AnLCAgICAgICAndG9wJyA9PSBhbGlnbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjbmFtZVZlcnRBbGlnbk1pZGRsZScsICAgICdtaWRkbGUnID09IGFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNuYW1lVmVydEFsaWduQm90dG9tJywgICAgJ2JvdHRvbScgPT0gYWxpZ24pOw0KICAgIA0KICAgIGNvbmZpZy5uYW1lVmVydEFsaWduID0gYWxpZ247DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uTmFtZVRleHRBbGlnbkNoYW5nZShhbGlnbikgew0KICAgIHRvZ2dsZUJ1dHRvbignI25hbWVUZXh0QWxpZ25MZWZ0JywgICAgJ2xlZnQnID09IGFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNuYW1lVGV4dEFsaWduQ2VudGVyJywgICdjZW50ZXInID09IGFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNuYW1lVGV4dEFsaWduUmlnaHQnLCAgICdyaWdodCcgPT0gYWxpZ24pOw0KDQogICAgY29uZmlnLm5hbWVUZXh0QWxpZ24gPSBhbGlnbjsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25OYW1lVGV4dENvbG9yQ2hhbmdlKGNvbG9yKSB7DQogICAgJCgnI25hbWVUZXh0Q29sb3JTcGFuJykuY3NzKCd0ZXh0LWRlY29yYXRpb24tY29sb3InLCBjb2xvckNvZGVUb0hleChjb2xvcikpOw0KICAgIA0KICAgIGNvbmZpZy5uYW1lVGV4dENvbG9yID0gTnVtYmVyKGNvbG9yKTsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25TaG93Q2xhc3NDaGFuZ2UoY2hlY2tlZCkgew0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNhY3RvckNsYXNzQm94JywgY2hlY2tlZCk7DQogICAgDQogICAgY29uZmlnLnNob3dDbGFzcyA9IGNoZWNrZWQ7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uQ2xhc3NIb3J6QWxpZ24oYWxpZ24pIHsNCiAgICB0b2dnbGVCdXR0b24oJyNjbGFzc0hvcnpBbGlnbkxlZnQnLCAgICAgJ2xlZnQnID09IGFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNjbGFzc0hvcnpBbGlnbkNlbnRlcicsICAgJ2NlbnRlcicgPT0gYWxpZ24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI2NsYXNzSG9yekFsaWduUmlnaHQnLCAgICAncmlnaHQnID09IGFsaWduKTsNCiAgICANCiAgICBjb25maWcuY2xhc3NIb3J6QWxpZ24gPSBhbGlnbjsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25DbGFzc1ZlcnRBbGlnbihhbGlnbikgew0KICAgIHRvZ2dsZUJ1dHRvbignI2NsYXNzVmVydEFsaWduVG9wJywgICAgICAndG9wJyA9PSBhbGlnbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjY2xhc3NWZXJ0QWxpZ25NaWRkbGUnLCAgICdtaWRkbGUnID09IGFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNjbGFzc1ZlcnRBbGlnbkJvdHRvbScsICAgJ2JvdHRvbScgPT0gYWxpZ24pOw0KICAgIA0KICAgIGNvbmZpZy5jbGFzc1ZlcnRBbGlnbiA9IGFsaWduOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvbkNsYXNzVGV4dEFsaWduQ2hhbmdlKGFsaWduKSB7DQogICAgdG9nZ2xlQnV0dG9uKCcjY2xhc3NUZXh0QWxpZ25MZWZ0JywgICAgJ2xlZnQnID09IGFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNjbGFzc1RleHRBbGlnbkNlbnRlcicsICAnY2VudGVyJyA9PSBhbGlnbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjY2xhc3NUZXh0QWxpZ25SaWdodCcsICAgJ3JpZ2h0JyA9PSBhbGlnbik7DQoNCiAgICBjb25maWcuY2xhc3NUZXh0QWxpZ24gPSBhbGlnbjsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25DbGFzc1RleHRDb2xvckNoYW5nZShjb2xvcikgew0KICAgICQoJyNjbGFzc1RleHRDb2xvclNwYW4nKS5jc3MoJ3RleHQtZGVjb3JhdGlvbi1jb2xvcicsIGNvbG9yQ29kZVRvSGV4KGNvbG9yKSk7DQogICAgDQogICAgY29uZmlnLmNsYXNzVGV4dENvbG9yID0gTnVtYmVyKGNvbG9yKTsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25TaG93SHBNb2RlQ2hhbmdlKG1vZGUpIHsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjYWN0b3JIcEJveCcsIG1vZGUgIT0gJ25vbmUnKTsNCg0KICAgIGNvbmZpZy5zaG93SHBNb2RlID0gbW9kZTsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25IcEdhdWdlSG9yekFsaWduKGFsaWduKSB7DQogICAgdG9nZ2xlQnV0dG9uKCcjaHBHYXVnZUhvcnpBbGlnbkxlZnQnLCAgICdsZWZ0JyA9PSBhbGlnbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjaHBHYXVnZUhvcnpBbGlnbkNlbnRlcicsICdjZW50ZXInID09IGFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNocEdhdWdlSG9yekFsaWduUmlnaHQnLCAgJ3JpZ2h0JyA9PSBhbGlnbik7DQoNCiAgICBjb25maWcuaHBHYXVnZUhvcnpBbGlnbiA9IGFsaWduOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvbkhwR2F1Z2VWZXJ0QWxpZ24oYWxpZ24pIHsNCiAgICB0b2dnbGVCdXR0b24oJyNocEdhdWdlVmVydEFsaWduVG9wJywgICAgJ3RvcCcgPT0gYWxpZ24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI2hwR2F1Z2VWZXJ0QWxpZ25NaWRkbGUnLCAnbWlkZGxlJyA9PSBhbGlnbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjaHBHYXVnZVZlcnRBbGlnbkJvdHRvbScsICdib3R0b20nID09IGFsaWduKTsNCg0KICAgIGNvbmZpZy5ocEdhdWdlVmVydEFsaWduID0gYWxpZ247DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uVGV4dENvbG9yQ2hhbmdlKGlkLCBjb2xvcikgew0KICAgICQoJyMnICsgaWQgKyAnVGV4dENvbG9yU3BhbicpLmNzcygndGV4dC1kZWNvcmF0aW9uLWNvbG9yJywgY29sb3JDb2RlVG9IZXgoY29sb3IpKTsNCiAgICANCiAgICBjb25maWdbaWQgKyAnVGV4dENvbG9yJ10gPSBOdW1iZXIoY29sb3IpOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvblN0YXR1c0VmZmVjdHNIb3J6QWxpZ24oYWxpZ24pIHsNCiAgICB0b2dnbGVCdXR0b24oJyNzdGF0dXNFZmZlY3RzSG9yekFsaWduTGVmdCcsICAgJ2xlZnQnID09IGFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNzdGF0dXNFZmZlY3RzSG9yekFsaWduQ2VudGVyJywgJ2NlbnRlcicgPT0gYWxpZ24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI3N0YXR1c0VmZmVjdHNIb3J6QWxpZ25SaWdodCcsICAncmlnaHQnID09IGFsaWduKTsNCg0KICAgIGNvbmZpZy5zdGF0dXNFZmZlY3RzSG9yekFsaWduID0gYWxpZ247DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uU3RhdHVzRWZmZWN0c1ZlcnRBbGlnbihhbGlnbikgew0KICAgIHRvZ2dsZUJ1dHRvbignI3N0YXR1c0VmZmVjdHNWZXJ0QWxpZ25Ub3AnLCAgICAndG9wJyA9PSBhbGlnbik7DQogICAgdG9nZ2xlQnV0dG9uKCcjc3RhdHVzRWZmZWN0c1ZlcnRBbGlnbk1pZGRsZScsICdtaWRkbGUnID09IGFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNzdGF0dXNFZmZlY3RzVmVydEFsaWduQm90dG9tJywgJ2JvdHRvbScgPT0gYWxpZ24pOw0KDQogICAgY29uZmlnLnN0YXR1c0VmZmVjdHNWZXJ0QWxpZ24gPSBhbGlnbjsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25TdGF0dXNFZmZlY3RzWENoYW5nZSh4KSB7DQogICAgY29uZmlnLnN0YXR1c0VmZmVjdHNYID0gTnVtYmVyKHgpOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvblN0YXR1c0VmZmVjdHNZQ2hhbmdlKHkpIHsNCiAgICBjb25maWcuc3RhdHVzRWZmZWN0c1kgPSBOdW1iZXIoeSk7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uU3RhdHVzRWZmZWN0c01heEljb25zQ2hhbmdlKHZhbHVlKSB7DQogICAgY29uZmlnLnN0YXR1c0VmZmVjdHNNYXhJY29ucyA9IE51bWJlcih2YWx1ZSk7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uRW5hYmxlQ3VzdG9tUGFyYW1ldGVyQ2hhbmdlKGNoZWNrZWQpIHsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjY3VzdG9tUGFyYW1ldGVyQm94JywgY2hlY2tlZCk7DQogICAgDQogICAgY29uZmlnLmVuYWJsZUN1c3RvbVBhcmFtZXRlciA9IGNoZWNrZWQ7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uU2hvd0N1c3RvbVBhcmFtZXRlckluT3RoZXJTY2VuZXNDaGFuZ2UoY2hlY2tlZCkgew0KICAgIGNvbmZpZy5zaG93Q3VzdG9tUGFyYW1ldGVySW5PdGhlclNjZW5lcyA9IGNoZWNrZWQ7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uQ3VzdG9tUGFyYW1ldGVyTW9kZUNoYW5nZShjdXN0b21QYXJhbWV0ZXJNb2RlKSB7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI2N1c3RvbVBhcmFtZXRlckxhYmVsQm94JywgICAgICAgICAgICAgICAgY3VzdG9tUGFyYW1ldGVyTW9kZSAhPSAndGV4dCcpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjdXN0b21QYXJhbWV0ZXJYWVZhbHVlc0JveCcsICAgICAgICAgICAgIFsnZ2F1Z2UnLCAneC15J10uaW5jbHVkZXMoY3VzdG9tUGFyYW1ldGVyTW9kZSkpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjdXN0b21QYXJhbWV0ZXJTaG93TWF4VmFsdWVCb3gnLCAgICAgICAgIGN1c3RvbVBhcmFtZXRlck1vZGUgPT0gJ2dhdWdlJyk7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI2N1c3RvbVBhcmFtZXRlck51bWJlckV2YWxCb3gnLCAgICAgICAgICAgY3VzdG9tUGFyYW1ldGVyTW9kZSA9PSAnbnVtYmVyJyk7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI2N1c3RvbVBhcmFtZXRlclRleHRFdmFsQm94JywgICAgICAgICAgICAgY3VzdG9tUGFyYW1ldGVyTW9kZSA9PSAndGV4dCcpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjdXN0b21QYXJhbWV0ZXJIZWlnaHRCb3gnLCAgICAgICAgICAgICAgIGN1c3RvbVBhcmFtZXRlck1vZGUgPT0gJ2dhdWdlJyk7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI2N1c3RvbVBhcmFtZXRlclRleHRBbGlnbkJveCcsICAgICAgICAgICAgY3VzdG9tUGFyYW1ldGVyTW9kZSA9PSAndGV4dCcpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjdXN0b21QYXJhbWV0ZXJXaGVuRW1wdHlUZXh0Q29sb3JCb3gnLCAgIGN1c3RvbVBhcmFtZXRlck1vZGUgIT0gJ3RleHQnKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjY3VzdG9tUGFyYW1ldGVyR2F1Z2VCb3gnLCAgICAgICAgICAgICAgICBjdXN0b21QYXJhbWV0ZXJNb2RlID09ICdnYXVnZScpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjdXN0b21QYXJhbWV0ZXJGb250U2l6ZUJveCcsICAgICAgICAgICAgIFsneC15JywgJ251bWJlciddLmluY2x1ZGVzKGN1c3RvbVBhcmFtZXRlck1vZGUpKTsNCg0KICAgIGNvbmZpZy5jdXN0b21QYXJhbWV0ZXJNb2RlID0gY3VzdG9tUGFyYW1ldGVyTW9kZTsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25DdXN0b21QYXJhbWV0ZXJMYWJlbENoYW5nZSh2YWx1ZSkgew0KICAgIGNvbmZpZy5jdXN0b21QYXJhbWV0ZXJMYWJlbCA9IHZhbHVlOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvbkN1c3RvbVBhcmFtZXRlclByZWNvbmRpdGlvbkV2YWxDaGFuZ2UodmFsdWUpIHsNCiAgICBjb25maWcuY3VzdG9tUGFyYW1ldGVyUHJlY29uZGl0aW9uRXZhbCA9IHZhbHVlICE9ICcnID8gdmFsdWUgOiB1bmRlZmluZWQ7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uQ3VzdG9tUGFyYW1ldGVyQ3VycmVudFZhbHVlRXZhbENoYW5nZSh2YWx1ZSkgew0KICAgIGNvbmZpZy5jdXN0b21QYXJhbWV0ZXJDdXJyZW50VmFsdWVFdmFsID0gdmFsdWUgIT0gJycgPyB2YWx1ZSA6IHVuZGVmaW5lZDsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25DdXN0b21QYXJhbWV0ZXJNYXhWYWx1ZUV2YWxDaGFuZ2UodmFsdWUpIHsNCiAgICBjb25maWcuY3VzdG9tUGFyYW1ldGVyTWF4VmFsdWVFdmFsID0gdmFsdWUgIT0gJycgPyB2YWx1ZSA6IHVuZGVmaW5lZDsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25TaG93Q3VzdG9tUGFyYW1ldGVyR2F1Z2VNYXhWYWx1ZXNDaGFuZ2UoY2hlY2tlZCkgew0KICAgIGNvbmZpZy5zaG93Q3VzdG9tUGFyYW1ldGVyR2F1Z2VNYXhWYWx1ZXMgPSBjaGVja2VkOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvbkN1c3RvbVBhcmFtZXRlck51bWJlckV2YWxDaGFuZ2UodmFsdWUpIHsNCiAgICBjb25maWcuY3VzdG9tUGFyYW1ldGVyTnVtYmVyRXZhbCA9IHZhbHVlICE9ICcnID8gdmFsdWUgOiB1bmRlZmluZWQ7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uQ3VzdG9tUGFyYW1ldGVyVGV4dEV2YWxDaGFuZ2UodmFsdWUpIHsNCiAgICBjb25maWcuY3VzdG9tUGFyYW1ldGVyVGV4dEV2YWwgPSB2YWx1ZSAhPSAnJyA/IHZhbHVlIDogdW5kZWZpbmVkOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvbkN1c3RvbVBhcmFtZXRlckhvcnpBbGlnbihhbGlnbikgew0KICAgIHRvZ2dsZUJ1dHRvbignI2N1c3RvbVBhcmFtZXRlckhvcnpBbGlnbkxlZnQnLCAgICAgICBhbGlnbiA9PSAnbGVmdCcpOw0KICAgIHRvZ2dsZUJ1dHRvbignI2N1c3RvbVBhcmFtZXRlckhvcnpBbGlnbkNlbnRlcicsICAgICBhbGlnbiA9PSAnY2VudGVyJyk7DQogICAgdG9nZ2xlQnV0dG9uKCcjY3VzdG9tUGFyYW1ldGVySG9yekFsaWduUmlnaHQnLCAgICAgIGFsaWduID09ICdyaWdodCcpOw0KDQogICAgY29uZmlnLmN1c3RvbVBhcmFtZXRlckhvcnpBbGlnbiA9IGFsaWduOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvbkN1c3RvbVBhcmFtZXRlclZlcnRBbGlnbihhbGlnbikgew0KICAgIHRvZ2dsZUJ1dHRvbignI2N1c3RvbVBhcmFtZXRlclZlcnRBbGlnblRvcCcsICAgICAgICBhbGlnbiA9PSAndG9wJyk7DQogICAgdG9nZ2xlQnV0dG9uKCcjY3VzdG9tUGFyYW1ldGVyVmVydEFsaWduTWlkZGxlJywgICAgIGFsaWduID09ICdtaWRkbGUnKTsNCiAgICB0b2dnbGVCdXR0b24oJyNjdXN0b21QYXJhbWV0ZXJWZXJ0QWxpZ25Cb3R0b20nLCAgICAgYWxpZ24gPT0gJ2JvdHRvbScpOw0KDQogICAgY29uZmlnLmN1c3RvbVBhcmFtZXRlclZlcnRBbGlnbiA9IGFsaWduOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvbkN1c3RvbVBhcmFtZXRlck9mZnNldFhDaGFuZ2UodmFsdWUpIHsNCiAgICBjb25maWcuY3VzdG9tUGFyYW1ldGVyT2Zmc2V0WCA9IHZhbHVlICE9ICcnID8gTnVtYmVyKHZhbHVlKSA6IHVuZGVmaW5lZDsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25DdXN0b21QYXJhbWV0ZXJPZmZzZXRZQ2hhbmdlKHZhbHVlKSB7DQogICAgY29uZmlnLmN1c3RvbVBhcmFtZXRlck9mZnNldFkgPSB2YWx1ZSAhPSAnJyA/IE51bWJlcih2YWx1ZSkgOiB1bmRlZmluZWQ7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uQ3VzdG9tUGFyYW1ldGVyV2lkdGhDaGFuZ2UodmFsdWUpIHsNCiAgICBjb25maWcuY3VzdG9tUGFyYW1ldGVyV2lkdGggPSB2YWx1ZSAhPSAnJyA/IE51bWJlcih2YWx1ZSkgOiB1bmRlZmluZWQ7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uQ3VzdG9tUGFyYW1ldGVySGVpZ2h0Q2hhbmdlKHZhbHVlKSB7DQogICAgY29uZmlnLmN1c3RvbVBhcmFtZXRlckhlaWdodCA9IHZhbHVlICE9ICcnID8gTnVtYmVyKHZhbHVlKSA6IHVuZGVmaW5lZDsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25DdXN0b21QYXJhbWV0ZXJUZXh0QWxpZ24oYWxpZ24pIHsNCiAgICB0b2dnbGVCdXR0b24oJyNjdXN0b21QYXJhbWV0ZXJUZXh0QWxpZ25MZWZ0JywgICAgICAgYWxpZ24gPT0gJ2xlZnQnKTsNCiAgICB0b2dnbGVCdXR0b24oJyNjdXN0b21QYXJhbWV0ZXJUZXh0QWxpZ25DZW50ZXInLCAgICAgYWxpZ24gPT0gJ2NlbnRlcicpOw0KICAgIHRvZ2dsZUJ1dHRvbignI2N1c3RvbVBhcmFtZXRlclRleHRBbGlnblJpZ2h0JywgICAgICBhbGlnbiA9PSAncmlnaHQnKTsNCg0KICAgIGNvbmZpZy5jdXN0b21QYXJhbWV0ZXJUZXh0QWxpZ24gPSBhbGlnbjsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25DdXN0b21QYXJhbWV0ZXJGb250U2l6ZUNoYW5nZSh2YWx1ZSkgew0KICAgIGNvbmZpZy5jdXN0b21QYXJhbWV0ZXJGb250U2l6ZSA9IHZhbHVlICE9ICcnID8gTnVtYmVyKHZhbHVlKSA6IHVuZGVmaW5lZDsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25Db21tYW5kT3BhY2l0eUNoYW5nZSh2YWx1ZSkgew0KICAgIGNvbmZpZy5jb21tYW5kT3BhY2l0eSA9IHZhbHVlIHx8IHZhbHVlID09PSAwID8gTnVtYmVyKHZhbHVlKSA6IHVuZGVmaW5lZDsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25Db21tYW5kSXRlbUhlaWdodENoYW5nZSh2YWx1ZSkgew0KICAgIGNvbmZpZy5jb21tYW5kSXRlbUhlaWdodCA9IHZhbHVlIHx8IHZhbHVlID09PSAwID8gTnVtYmVyKHZhbHVlKSA6IHVuZGVmaW5lZDsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25Db21tYW5kUm93U3BhY2luZ0NoYW5nZSh2YWx1ZSkgew0KICAgIGNvbmZpZy5jb21tYW5kUm93U3BhY2luZyA9IHZhbHVlIHx8IHZhbHVlID09PSAwID8gTnVtYmVyKHZhbHVlKSA6IHVuZGVmaW5lZDsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25Db21tYW5kQ29sdW1uU3BhY2luZ0NoYW5nZSh2YWx1ZSkgew0KICAgIGNvbmZpZy5jb21tYW5kQ29sdW1uU3BhY2luZyA9IHZhbHVlIHx8IHZhbHVlID09PSAwID8gTnVtYmVyKHZhbHVlKSA6IHVuZGVmaW5lZDsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25Db21tYW5kRm9udFNpemVDaGFuZ2UodmFsdWUpIHsNCiAgICBjb25maWcuY29tbWFuZEZvbnRTaXplID0gdmFsdWUgIT09ICcnID8gTnVtYmVyKHZhbHVlKSA6IHVuZGVmaW5lZDsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25Db21tYW5kU3R5bGVDaGFuZ2UodmFsdWUpIHsNCiAgICBjb25maWcuY29tbWFuZFN0eWxlID0gdmFsdWU7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uQ29tbWFuZFRleHRBbGlnbihhbGlnbikgew0KICAgIHRvZ2dsZUJ1dHRvbignI2NvbW1hbmRUZXh0QWxpZ25MZWZ0JywgICAgJ2xlZnQnID09IGFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNjb21tYW5kVGV4dEFsaWduQ2VudGVyJywgICdjZW50ZXInID09IGFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNjb21tYW5kVGV4dEFsaWduUmlnaHQnLCAgICdyaWdodCcgPT0gYWxpZ24pOw0KDQogICAgY29uZmlnLmNvbW1hbmRUZXh0QWxpZ24gPSBhbGlnbjsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25TaG93TGV2ZWxNb2RlQ2hhbmdlKG1vZGUpIHsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjbGV2ZWxQb3NpdGlvbkJveCcsICAgJ25vbmUnICE9IG1vZGUpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNsZXZlbEdhcEJveCcsICAgICAgICAndGV4dCcgPT0gbW9kZSk7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI2xldmVsRW1wdHlCb3gnLCAgICAgICd0ZXh0JyA9PSBtb2RlKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjZXhwR2F1Z2VXaWR0aEJveCcsICAgJ2dhdWdlJyA9PSBtb2RlKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjZXhwR2F1Z2VIZWlnaHRCb3gnLCAgJ2dhdWdlJyA9PSBtb2RlKTsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjbGV2ZWxBc1RleHRCb3gnLCAgICAgJ3RleHQnID09IG1vZGUpOw0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNsZXZlbEFzR2F1Z2VCb3gnLCAgICAnZ2F1Z2UnID09IG1vZGUpOw0KDQogICAgY29uZmlnLnNob3dMZXZlbE1vZGUgPSBtb2RlOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvbkxldmVsSW5mb0hvcnpBbGlnbihhbGlnbikgew0KICAgIHRvZ2dsZUJ1dHRvbignI2xldmVsSW5mb0hvcnpBbGlnbkxlZnQnLCAgICAgJ2xlZnQnID09IGFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNsZXZlbEluZm9Ib3J6QWxpZ25DZW50ZXInLCAgICdjZW50ZXInID09IGFsaWduKTsNCiAgICB0b2dnbGVCdXR0b24oJyNsZXZlbEluZm9Ib3J6QWxpZ25SaWdodCcsICAgICdyaWdodCcgPT0gYWxpZ24pOw0KDQogICAgY29uZmlnLmxldmVsSW5mb0hvcnpBbGlnbiA9IGFsaWduOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvbkxldmVsSW5mb1ZlcnRBbGlnbihhbGlnbikgew0KICAgIHRvZ2dsZUJ1dHRvbignI2xldmVsSW5mb1ZlcnRBbGlnblRvcCcsICAgICAgJ3RvcCcgPT0gYWxpZ24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI2xldmVsSW5mb1ZlcnRBbGlnbk1pZGRsZScsICAgJ21pZGRsZScgPT0gYWxpZ24pOw0KICAgIHRvZ2dsZUJ1dHRvbignI2xldmVsSW5mb1ZlcnRBbGlnbkJvdHRvbScsICAgJ2JvdHRvbScgPT0gYWxpZ24pOw0KDQogICAgY29uZmlnLmxldmVsSW5mb1ZlcnRBbGlnbiA9IGFsaWduOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvbkxldmVsVGV4dENvbG9yMUNoYW5nZShjb2xvcikgew0KICAgICQoJyNsZXZlbFRleHRDb2xvcjFTcGFuJykuY3NzKCd0ZXh0LWRlY29yYXRpb24tY29sb3InLCBjb2xvckNvZGVUb0hleChjb2xvcikpOw0KICAgIA0KICAgIGNvbmZpZy5sZXZlbFRleHRDb2xvcjEgPSBOdW1iZXIoY29sb3IpOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvbkxldmVsVGV4dENvbG9yMkNoYW5nZShjb2xvcikgew0KICAgICQoJyNsZXZlbFRleHRDb2xvcjJTcGFuJykuY3NzKCd0ZXh0LWRlY29yYXRpb24tY29sb3InLCBjb2xvckNvZGVUb0hleChjb2xvcikpOw0KICAgIA0KICAgIGNvbmZpZy5sZXZlbFRleHRDb2xvcjIgPSBOdW1iZXIoY29sb3IpOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvbkV4cEdhdWdlQ29sb3JDaGFuZ2UodHlwZSwgY29sb3IpIHsNCiAgICBjb25maWdbJ2V4cEdhdWdlQ29sb3InICsgdHlwZV0gPSBjb2xvcjsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25HYXVnZUxhYmVsU3R5bGVDaGFuZ2Uoc3R5bGUpIHsNCiAgICBjb25maWcuZ2F1Z2VMYWJlbFN0eWxlID0gc3R5bGU7DQoNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjZ2F1Z2VMYWJlbEFzSWNvbkJveCcsIHN0eWxlID09ICdpY29uJyk7DQogICAgdG9nZ2xlQnV0dG9ucygNCiAgICAgICAgJyNnYXVnZUxhYmVsU3R5bGUnLA0KICAgICAgICBbJ3RleHQnLCAnaWNvbiddLA0KICAgICAgICBzdHlsZSwNCiAgICApOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvbkdhdWdlU3R5bGVDaGFuZ2Uoc3R5bGUpIHsNCiAgICBzaG93R2F1Z2VNYXhWYWx1ZXMuZGlzYWJsZWQgPSBzdHlsZSA9PSAndGV4dCc7DQogICAgc2hvd0dhdWdlTWF4VmFsdWVzLmNoZWNrZWQgID0gc2hvd0dhdWdlTWF4VmFsdWVzLmRpc2FibGVkIHx8IGNvbmZpZy5zaG93R2F1Z2VNYXhWYWx1ZXM7DQoNCiAgICBjb25maWcuZ2F1Z2VTdHlsZSA9IHN0eWxlOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvbk92ZXJyaWRlQ29tbWFuZFdpbmRvd0NoYW5nZShiKSB7DQogICAgdG9nZ2xlVmlzaWJpbGl0eSgnI2NvbW1hbmRXaW5kb3dGaWxlQm94JywgYik7DQoNCiAgICBjb25maWcub3ZlcnJpZGVDb21tYW5kV2luZG93ID0gYjsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25Db21tYW5kQmFja2dyb3VuZFR5cGVDaGFuZ2UodHlwZSkgew0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjb21tYW5kQmFja2dyb3VuZEZpbGVCb3gnLCAnaW1hZ2UnID09IHR5cGUpOw0KICAgIA0KICAgIGNvbmZpZy5jb21tYW5kQmFja2dyb3VuZFR5cGUgPSB0eXBlOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvbkNvbW1hbmRJdGVtQmFja2dyb3VuZFR5cGVDaGFuZ2UodHlwZSkgew0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNjb21tYW5kSXRlbUJhY2tncm91bmRGaWxlQm94JywgJ2ltYWdlJyA9PSB0eXBlKTsNCiAgICANCiAgICBjb25maWcuY29tbWFuZEl0ZW1CYWNrZ3JvdW5kVHlwZSA9IHR5cGU7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uU2hvd0dvbGRDaGFuZ2UoY2hlY2tlZCkgew0KICAgIHRvZ2dsZVZpc2liaWxpdHkoJyNnb2xkV2luZG93Qm94JywgY2hlY2tlZCk7DQogICAgDQogICAgY29uZmlnLnNob3dHb2xkV2luZG93ID0gY2hlY2tlZDsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25HYW1lSW5mb1RleHRMZWZ0Q2hhbmdlKHRleHQpIHsNCiAgICBjb25maWcuZ2FtZUluZm9UZXh0TGVmdCA9IHRleHQ7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uR2FtZUluZm9UZXh0UmlnaHRDaGFuZ2UodGV4dCkgew0KICAgIGNvbmZpZy5nYW1lSW5mb1RleHRSaWdodCA9IHRleHQ7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uR29sZEJhY2tncm91bmRUeXBlQ2hhbmdlKHR5cGUpIHsNCiAgICB0b2dnbGVWaXNpYmlsaXR5KCcjZ29sZEJhY2tncm91bmRGaWxlQm94JywgJ2ltYWdlJyA9PSB0eXBlKTsNCiAgICANCiAgICBjb25maWcuZ29sZEJhY2tncm91bmRUeXBlID0gdHlwZTsNCiAgICBvblNhdmUoKTsNCn0NCg0KZnVuY3Rpb24gb25HYXVnZUNvbG9yQ2hhbmdlKHR5cGUsIGNvbG9yKSB7DQogICAgY29uZmlnWydnYXVnZUNvbG9yJyArIHR5cGVdID0gY29sb3I7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uUmVzZXRHYXVnZUNvbG9yKHR5cGUpIHsNCiAgICB3aW5kb3dbJ2dhdWdlQ29sb3InICsgdHlwZSArICcxJ10udmFsdWUgPSBnZXRUZW1wbGF0ZSgpWydnYXVnZUNvbG9yJyArIHR5cGUgKyAnMSddOw0KICAgIHdpbmRvd1snZ2F1Z2VDb2xvcicgKyB0eXBlICsgJzInXS52YWx1ZSA9IGdldFRlbXBsYXRlKClbJ2dhdWdlQ29sb3InICsgdHlwZSArICcyJ107DQoNCiAgICBjb25maWdbJ2dhdWdlQ29sb3InICsgdHlwZSArICcxJ10gPSBnZXRUZW1wbGF0ZSgpWydnYXVnZUNvbG9yJyArIHR5cGUgKyAnMSddOw0KICAgIGNvbmZpZ1snZ2F1Z2VDb2xvcicgKyB0eXBlICsgJzInXSA9IGdldFRlbXBsYXRlKClbJ2dhdWdlQ29sb3InICsgdHlwZSArICcyJ107DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uR2F1Z2VCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UodHlwZSwgY29sb3IpIHsNCiAgICBjb25maWdbJ2dhdWdlQmFja2dyb3VuZENvbG9yJyArIHR5cGVdID0gY29sb3I7DQogICAgb25TYXZlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uUmVzZXRHYXVnZUJhY2tncm91bmRDb2xvcih0eXBlKSB7DQogICAgd2luZG93WydnYXVnZUJhY2tncm91bmRDb2xvcicgKyB0eXBlXS52YWx1ZSA9IGdldFRlbXBsYXRlKClbJ2dhdWdlQmFja2dyb3VuZENvbG9yJyArIHR5cGVdOw0KDQogICAgY29uZmlnWydnYXVnZUJhY2tncm91bmRDb2xvcicgKyB0eXBlXSA9IGdldFRlbXBsYXRlKClbJ2dhdWdlQmFja2dyb3VuZENvbG9yJyArIHR5cGVdOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvblRhcmdldEFjdG9yV2luZG93VmVydEFsaWduKGFsaWduKSB7DQogICAgdG9nZ2xlQnV0dG9ucygNCiAgICAgICAgJyN0YXJnZXRBY3RvcldpbmRvd1ZlcnRBbGlnbicsDQogICAgICAgIFsndG9wJywgJ21pZGRsZScsICdib3R0b20nXSwNCiAgICAgICAgYWxpZ24sDQogICAgKTsNCg0KICAgIGNvbmZpZy50YXJnZXRBY3RvcldpbmRvd1ZlcnRBbGlnbiA9IGFsaWduOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvblRhcmdldEFjdG9yV2luZG93T3JpZW50YXRpb25DaGFuZ2Uob3JpZW50YXRpb24pIHsNCiAgICB0b2dnbGVCdXR0b25zKA0KICAgICAgICAnI3RhcmdldEFjdG9yV2luZG93T3JpZW50YXRpb24nLA0KICAgICAgICBbJ2RlZmF1bHQnLCAncm93cycsICdjb2x1bW5zJywgJ2dyaWQnXSwNCiAgICAgICAgb3JpZW50YXRpb24sDQogICAgKTsNCiAgICBjb25maWcudGFyZ2V0QWN0b3JXaW5kb3dPcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQpmdW5jdGlvbiBvblRhcmdldEFjdG9yTmFtZVRleHRBbGlnbkNoYW5nZShhbGlnbikgew0KICAgIHRvZ2dsZUJ1dHRvbnMoDQogICAgICAgICcjdGFyZ2V0QWN0b3JOYW1lVGV4dEFsaWduJywNCiAgICAgICAgWydkZWZhdWx0JywgJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J10sDQogICAgICAgIGFsaWduLA0KICAgICk7DQogICAgY29uZmlnLnRhcmdldEFjdG9yTmFtZVRleHRBbGlnbiA9IGFsaWduOw0KICAgIG9uU2F2ZSgpOw0KfQ0KDQoNCmZ1bmN0aW9uIGZldGNoTmV3cygpIHsNCiAgICBpZiAod2luZG93Lm9wZW5lciAmJiB3aW5kb3cub3BlbmVyLlVJQ3VzdG9tLnNob3dOZXdzKSB7DQogICAgICAgICQuYWpheCh7DQogICAgICAgICAgICB1cmw6ICAgICAgICAnaHR0cDovL2Rvd25sb2Fkcy5hZXJvc3lzLmJsb2cvcGx1Z2lucy9uZXdzLmpzb24nLA0KICAgICAgICAgICAgdHlwZTogICAgICAgJ0dFVCcsDQogICAgICAgICAgICBkYXRhVHlwZTogICAnanNvbicsDQogICAgICAgICAgICB0aW1lb3V0OiAgICA1MDAwLA0KICAgICAgICAgICAgY2FjaGU6ICAgICAgZmFsc2UsDQogICAgICAgICAgICBzdWNjZXNzOiAgICAoZGF0YSkgPT4gb25GZXRjaE5ld3NTdWNjZXNzKGRhdGEpLA0KICAgICAgICAgICAgZXJyb3I6ICAgICAgKCkgPT4gJCgnI25ld3NNZXNzYWdlJykudGV4dCgiVW5hYmxlIHRvIGxvYWQgbmV3cy4gVGhlIHNlcnZlciBpcyBub3QgYXZhaWxhYmxlIHJpZ2h0IG5vdyBvciB5b3UgZG9uJ3QgaGF2ZSBhbiBpbnRlcm5ldCBjb25uZWN0aW9uLiIpLA0KICAgICAgICB9KTsNCiAgICB9IGVsc2Ugew0KICAgICAgICAkKCcjbmV3c0JveENvbnRhaW5lcicpLmhpZGUoKTsNCiAgICB9DQp9Ow0KDQpmdW5jdGlvbiBvbkZldGNoTmV3c1N1Y2Nlc3MoZGF0YSkgew0KICAgICQoJyNuZXdzTWVzc2FnZScpLnRleHQoZGF0YS5tZXNzYWdlKTsNCiAgICAkKCcjbmV3c0xpbmsnKS5hdHRyKCdocmVmJywgZGF0YS5saW5rKTsNCg0KICAgIGlmIChkYXRhLmJhY2tncm91bmRDb2xvcikgICAkKCcjbmV3c0JveCcpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGRhdGEuYmFja2dyb3VuZENvbG9yKTsNCiAgICBpZiAoZGF0YS50ZXh0Q29sb3IpICAgICAgICAgJCgnI25ld3NCb3gnKS5jc3MoJ2NvbG9yJywgZGF0YS50ZXh0Q29sb3IpOw0KICAgIGlmIChkYXRhLmJvcmRlckNvbG9yKSAgICAgICAkKCcjbmV3c0JveCcpLmNzcygnYm9yZGVyLWNvbG9yJywgZGF0YS5ib3JkZXJDb2xvcik7DQogICAgaWYgKGRhdGEuYnV0dG9uQWN0aW9uVGV4dCkgICQoJyNuZXdzTGluaycpLnRleHQoZGF0YS5idXR0b25BY3Rpb25UZXh0KTsgIA0KfQ0KDQokKGRvY3VtZW50KS5yZWFkeSgoKSA9PiBmZXRjaE5ld3MoKSk7DQoNCg0KZnVuY3Rpb24gaGVhbEFjdG9yKCkgew0KICAgIGNvbnN0IGFjdG9yID0gbGVhZGVyKCk7DQoNCiAgICBpZiAoYWN0b3IpIHsNCiAgICAgICAgYWN0b3Iuc2V0SHAoTWF0aC5mbG9vcihhY3Rvci5taHAgKiAwLjgpKTsNCiAgICAgICAgYWN0b3Iuc2V0TXAoTWF0aC5mbG9vcihhY3Rvci5tbXAgKiAwLjgpKTsNCiAgICAgICAgYWN0b3Iuc2V0VHAoTWF0aC5mbG9vcihhY3Rvci5tYXhUcCgpICogMC44KSk7DQoNCiAgICAgICAgcmVmcmVzaFNjZW5lKCk7DQogICAgfQ0KfQ0KDQpmdW5jdGlvbiBtYWtlQWN0b3JDcmlzaXMoKSB7DQogICAgY29uc3QgYWN0b3IgPSBsZWFkZXIoKTsNCg0KICAgIGlmIChhY3Rvcikgew0KICAgICAgICBhY3Rvci5zZXRIcChNYXRoLmZsb29yKGFjdG9yLm1ocCAqIDAuMikpOw0KICAgICAgICByZWZyZXNoU2NlbmUoKTsNCiAgICB9DQp9DQoNCmZ1bmN0aW9uIG1ha2VBY3RvckRlYWQoKSB7DQogICAgY29uc3QgYWN0b3IgPSBsZWFkZXIoKTsNCg0KICAgIGlmIChhY3Rvcikgew0KICAgICAgICBhY3Rvci5zZXRIcCgwKTsNCiAgICAgICAgcmVmcmVzaFNjZW5lKCk7DQogICAgfQ0KfQ0KDQpmdW5jdGlvbiBtYWtlQWN0b3JFeHBNYXhlZE91dCgpIHsNCiAgICBjb25zdCBhY3RvciA9IGxlYWRlcigpOw0KDQogICAgaWYgKGFjdG9yKSB7DQogICAgICAgIGFjdG9yLmNoYW5nZUxldmVsKGFjdG9yLm1heExldmVsKCkpOw0KICAgICAgICByZWZyZXNoU2NlbmUoKTsNCiAgICB9DQp9DQoNCmZ1bmN0aW9uIHVuZG9NYWtlQWN0b3JFeHBNYXhlZE91dCgpIHsNCiAgICBjb25zdCBhY3RvciA9IGxlYWRlcigpOw0KDQogICAgaWYgKGFjdG9yKSB7DQogICAgICAgIGFjdG9yLmNoYW5nZUxldmVsKDEpOw0KICAgICAgICBhY3Rvci5jaGFuZ2VFeHAoTWF0aC5mbG9vcihhY3Rvci5uZXh0TGV2ZWxFeHAoKSAqIDAuNykpOw0KDQogICAgICAgIHJlZnJlc2hTY2VuZSgpOw0KICAgIH0NCn0NCg0KZnVuY3Rpb24gYXBwbHlTdGF0ZXMoKSB7DQogICAgY2hhbmdlU3RhdGVzKHRydWUpOw0KfQ0KDQpmdW5jdGlvbiBjbGVhclN0YXRlcygpIHsNCiAgICBjaGFuZ2VTdGF0ZXMoZmFsc2UpOw0KfQ0KDQpmdW5jdGlvbiBjaGFuZ2VTdGF0ZXMoYWRkKSB7DQogICAgY29uc3QgYWN0b3IgPSBsZWFkZXIoKTsNCg0KICAgIGlmIChhY3Rvcikgew0KICAgICAgICBmb3IgKGxldCBpID0gNDsgaSA8PSAxMDsgaSsrKSB7DQogICAgICAgICAgICBhZGQgPyBhY3Rvci5hZGRTdGF0ZShpKSA6IGFjdG9yLnJlbW92ZVN0YXRlKGkpOw0KICAgICAgICB9DQogICAgICAgIHJlZnJlc2hTY2VuZSgpOw0KICAgIH0NCn0NCg0KZnVuY3Rpb24gbGVhZGVyKCkgew0KICAgIHJldHVybiB3aW5kb3cub3BlbmVyICYmIHdpbmRvdy5vcGVuZXIuJGdhbWVQYXJ0eS5sZWFkZXIoKTsNCn0NCg0KZnVuY3Rpb24gcmVmcmVzaFNjZW5lKCkgew0KICAgIHdpbmRvdy5vcGVuZXIuU2NlbmVNYW5hZ2VyLmdvdG8od2luZG93Lm9wZW5lci5TY2VuZV9NZW51KTsNCn0NCg0KZnVuY3Rpb24gb3BlbkNsb3NlVGFyZ2V0QWN0b3JXaW5kb3coKSB7DQogICAgY29uc3Qgc2NlbmUgPSB3aW5kb3cub3BlbmVyLlNjZW5lTWFuYWdlci5fc2NlbmU7DQogICAgaWYgKHNjZW5lICYmIHNjZW5lLm9wZW5DbG9zZVRhcmdldEFjdG9yV2luZG93KSB7DQogICAgICAgIHNjZW5lLm9wZW5DbG9zZVRhcmdldEFjdG9yV2luZG93KCk7DQogICAgfQ0KfQ0K"
const css       = "DQouY2FyZCB7DQogICAgbWFyZ2luLXRvcDogMXJlbTsNCn0NCg0KLmN1c3RvbS1jb2RlIHsNCiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlOw0KICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTsNCiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlOw0KICAgIGNvbG9yOiAjZmFmYWZhOw0KICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7DQogICAgb3ZlcmZsb3cteDogYXV0bzsNCn0NCg0Kc3Bhbi5jdXN0b20tY29kZSB7DQogICAgcGFkZGluZzogMC40cmVtOw0KfQ0KDQpkaXYuY3VzdG9tLWNvZGUgew0KICAgIHBhZGRpbmc6IDFyZW07DQogICAgd2lkdGg6IGZpdC1jb250ZW50Ow0KfQ0KDQp1bC5jdXN0b20tY29kZSB7DQogICAgcGFkZGluZzogMXJlbTsNCiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07DQogICAgd2lkdGg6IGZpdC1jb250ZW50Ow0KfQ0KDQouY3VzdG9tLWNvZGUgcCwNCi5jdXN0b20tY29kZSBwcmUgew0KICAgIG1hcmdpbjogMDsNCn0NCg0KDQouaW5mbyB7DQogICAgY29sb3I6ICM4ODg4ODggIWltcG9ydGFudDsNCn0NCg0KdGQuaW5mbyB7DQogICAgZm9udC1zdHlsZTogaXRhbGljOw0KfQ0KDQoucm90YXRlLTQ1IHsNCiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7DQogICAgZGlzcGxheTogaW5saW5lLWJsb2NrOw0KfQ0KDQoucm90YXRlLTkwIHsNCiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7DQogICAgZGlzcGxheTogaW5saW5lLWJsb2NrOw0KfQ0KDQoucm90YXRlLTEzNSB7DQogICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTsNCiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7DQp9DQoNCi5yb3RhdGUtMTgwIHsNCiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOw0KICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsNCn0NCg0KLnJvdGF0ZS0yNzAgew0KICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7DQogICAgZGlzcGxheTogaW5saW5lLWJsb2NrOw0KfQ0KDQouYmktYXJyb3ctOTBkZWctbGVmdCB7DQogICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGVZKDVweCk7DQp9DQoNCi5hcnJvdyB7DQogICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTsNCiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7DQp9DQoNCi5jb2xsYXBzZWQgLmFycm93IHsNCiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOw0KfQ0KDQpzZWxlY3QuZm9ybS1zZWxlY3Qgew0KICAgIHdpZHRoOiBtYXgtY29udGVudDsNCn0NCg0KLnRpdGxlLmJhZGdlLmxpdGUgew0KICAgIGJvcmRlcjogIzg4ODg4OCAxcHggc29saWQ7DQogICAgZm9udC1zdHlsZTogaXRhbGljOw0KICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyOw0KfQ0KDQoudGl0bGUuYmFkZ2UucHJvIHsNCiAgICBjb2xvcjogYmxhY2s7DQogICAgLS1ib3JkZXI6ICNGMEU2OEMgMXB4IHNvbGlkOw0KICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7DQogICAgYmFja2dyb3VuZC1jb2xvcjogI0I4ODYwQjsNCiAgICAtLWZvbnQtd2VpZ2h0OiBub3JtYWw7DQp9DQoNCi5sb2NrZWQgew0KICAgIGJvcmRlcjogI0ZGQzEwNyAxcHggc29saWQ7DQogICAgYm9yZGVyLXJhZGl1czogMC41cmVtOw0KICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsNCiAgICBmb250LXdlaWdodDogbGlnaHRlcjsNCiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07DQogICAgcGFkZGluZy1yaWdodDogMXJlbTsNCiAgICBtYXJnaW4tbGVmdDogMXJlbTsNCiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07DQp9DQoNCi5tdC14bCB7DQogICAgbWFyZ2luLXRvcDogNHJlbTsNCn0NCg=="
const jQuery    = "LyohIGpRdWVyeSB2My42LjAgfCAoYykgT3BlbkpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IGpxdWVyeS5vcmcvbGljZW5zZSAqLwohZnVuY3Rpb24oZSx0KXsidXNlIHN0cmljdCI7Im9iamVjdCI9PXR5cGVvZiBtb2R1bGUmJiJvYmplY3QiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZS5kb2N1bWVudD90KGUsITApOmZ1bmN0aW9uKGUpe2lmKCFlLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcigialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudCIpO3JldHVybiB0KGUpfTp0KGUpfSgidW5kZWZpbmVkIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihDLGUpeyJ1c2Ugc3RyaWN0Ijt2YXIgdD1bXSxyPU9iamVjdC5nZXRQcm90b3R5cGVPZixzPXQuc2xpY2UsZz10LmZsYXQ/ZnVuY3Rpb24oZSl7cmV0dXJuIHQuZmxhdC5jYWxsKGUpfTpmdW5jdGlvbihlKXtyZXR1cm4gdC5jb25jYXQuYXBwbHkoW10sZSl9LHU9dC5wdXNoLGk9dC5pbmRleE9mLG49e30sbz1uLnRvU3RyaW5nLHY9bi5oYXNPd25Qcm9wZXJ0eSxhPXYudG9TdHJpbmcsbD1hLmNhbGwoT2JqZWN0KSx5PXt9LG09ZnVuY3Rpb24oZSl7cmV0dXJuImZ1bmN0aW9uIj09dHlwZW9mIGUmJiJudW1iZXIiIT10eXBlb2YgZS5ub2RlVHlwZSYmImZ1bmN0aW9uIiE9dHlwZW9mIGUuaXRlbX0seD1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZSYmZT09PWUud2luZG93fSxFPUMuZG9jdW1lbnQsYz17dHlwZTohMCxzcmM6ITAsbm9uY2U6ITAsbm9Nb2R1bGU6ITB9O2Z1bmN0aW9uIGIoZSx0LG4pe3ZhciByLGksbz0obj1ufHxFKS5jcmVhdGVFbGVtZW50KCJzY3JpcHQiKTtpZihvLnRleHQ9ZSx0KWZvcihyIGluIGMpKGk9dFtyXXx8dC5nZXRBdHRyaWJ1dGUmJnQuZ2V0QXR0cmlidXRlKHIpKSYmby5zZXRBdHRyaWJ1dGUocixpKTtuLmhlYWQuYXBwZW5kQ2hpbGQobykucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKX1mdW5jdGlvbiB3KGUpe3JldHVybiBudWxsPT1lP2UrIiI6Im9iamVjdCI9PXR5cGVvZiBlfHwiZnVuY3Rpb24iPT10eXBlb2YgZT9uW28uY2FsbChlKV18fCJvYmplY3QiOnR5cGVvZiBlfXZhciBmPSIzLjYuMCIsUz1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgUy5mbi5pbml0KGUsdCl9O2Z1bmN0aW9uIHAoZSl7dmFyIHQ9ISFlJiYibGVuZ3RoImluIGUmJmUubGVuZ3RoLG49dyhlKTtyZXR1cm4hbShlKSYmIXgoZSkmJigiYXJyYXkiPT09bnx8MD09PXR8fCJudW1iZXIiPT10eXBlb2YgdCYmMDx0JiZ0LTEgaW4gZSl9Uy5mbj1TLnByb3RvdHlwZT17anF1ZXJ5OmYsY29uc3RydWN0b3I6UyxsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHMuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP3MuY2FsbCh0aGlzKTplPDA/dGhpc1tlK3RoaXMubGVuZ3RoXTp0aGlzW2VdfSxwdXNoU3RhY2s6ZnVuY3Rpb24oZSl7dmFyIHQ9Uy5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksZSk7cmV0dXJuIHQucHJldk9iamVjdD10aGlzLHR9LGVhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIFMuZWFjaCh0aGlzLGUpfSxtYXA6ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMubWFwKHRoaXMsZnVuY3Rpb24oZSx0KXtyZXR1cm4gbi5jYWxsKGUsdCxlKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2socy5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxldmVuOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMuZ3JlcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuKHQrMSklMn0pKX0sb2RkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMuZ3JlcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQlMn0pKX0sZXE6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5sZW5ndGgsbj0rZSsoZTwwP3Q6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKDA8PW4mJm48dD9bdGhpc1tuXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6dSxzb3J0OnQuc29ydCxzcGxpY2U6dC5zcGxpY2V9LFMuZXh0ZW5kPVMuZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGUsdCxuLHIsaSxvLGE9YXJndW1lbnRzWzBdfHx7fSxzPTEsdT1hcmd1bWVudHMubGVuZ3RoLGw9ITE7Zm9yKCJib29sZWFuIj09dHlwZW9mIGEmJihsPWEsYT1hcmd1bWVudHNbc118fHt9LHMrKyksIm9iamVjdCI9PXR5cGVvZiBhfHxtKGEpfHwoYT17fSkscz09PXUmJihhPXRoaXMscy0tKTtzPHU7cysrKWlmKG51bGwhPShlPWFyZ3VtZW50c1tzXSkpZm9yKHQgaW4gZSlyPWVbdF0sIl9fcHJvdG9fXyIhPT10JiZhIT09ciYmKGwmJnImJihTLmlzUGxhaW5PYmplY3Qocil8fChpPUFycmF5LmlzQXJyYXkocikpKT8obj1hW3RdLG89aSYmIUFycmF5LmlzQXJyYXkobik/W106aXx8Uy5pc1BsYWluT2JqZWN0KG4pP246e30saT0hMSxhW3RdPVMuZXh0ZW5kKGwsbyxyKSk6dm9pZCAwIT09ciYmKGFbdF09cikpO3JldHVybiBhfSxTLmV4dGVuZCh7ZXhwYW5kbzoialF1ZXJ5IisoZitNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cRC9nLCIiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihlKX0sbm9vcDpmdW5jdGlvbigpe30saXNQbGFpbk9iamVjdDpmdW5jdGlvbihlKXt2YXIgdCxuO3JldHVybiEoIWV8fCJbb2JqZWN0IE9iamVjdF0iIT09by5jYWxsKGUpKSYmKCEodD1yKGUpKXx8ImZ1bmN0aW9uIj09dHlwZW9mKG49di5jYWxsKHQsImNvbnN0cnVjdG9yIikmJnQuY29uc3RydWN0b3IpJiZhLmNhbGwobik9PT1sKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihlKXt2YXIgdDtmb3IodCBpbiBlKXJldHVybiExO3JldHVybiEwfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGUsdCxuKXtiKGUse25vbmNlOnQmJnQubm9uY2V9LG4pfSxlYWNoOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wO2lmKHAoZSkpe2ZvcihuPWUubGVuZ3RoO3I8bjtyKyspaWYoITE9PT10LmNhbGwoZVtyXSxyLGVbcl0pKWJyZWFrfWVsc2UgZm9yKHIgaW4gZSlpZighMT09PXQuY2FsbChlW3JdLHIsZVtyXSkpYnJlYWs7cmV0dXJuIGV9LG1ha2VBcnJheTpmdW5jdGlvbihlLHQpe3ZhciBuPXR8fFtdO3JldHVybiBudWxsIT1lJiYocChPYmplY3QoZSkpP1MubWVyZ2Uobiwic3RyaW5nIj09dHlwZW9mIGU/W2VdOmUpOnUuY2FsbChuLGUpKSxufSxpbkFycmF5OmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbnVsbD09dD8tMTppLmNhbGwodCxlLG4pfSxtZXJnZTpmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0rdC5sZW5ndGgscj0wLGk9ZS5sZW5ndGg7cjxuO3IrKyllW2krK109dFtyXTtyZXR1cm4gZS5sZW5ndGg9aSxlfSxncmVwOmZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9W10saT0wLG89ZS5sZW5ndGgsYT0hbjtpPG87aSsrKSF0KGVbaV0saSkhPT1hJiZyLnB1c2goZVtpXSk7cmV0dXJuIHJ9LG1hcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPTAsYT1bXTtpZihwKGUpKWZvcihyPWUubGVuZ3RoO288cjtvKyspbnVsbCE9KGk9dChlW29dLG8sbikpJiZhLnB1c2goaSk7ZWxzZSBmb3IobyBpbiBlKW51bGwhPShpPXQoZVtvXSxvLG4pKSYmYS5wdXNoKGkpO3JldHVybiBnKGEpfSxndWlkOjEsc3VwcG9ydDp5fSksImZ1bmN0aW9uIj09dHlwZW9mIFN5bWJvbCYmKFMuZm5bU3ltYm9sLml0ZXJhdG9yXT10W1N5bWJvbC5pdGVyYXRvcl0pLFMuZWFjaCgiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2wiLnNwbGl0KCIgIiksZnVuY3Rpb24oZSx0KXtuWyJbb2JqZWN0ICIrdCsiXSJdPXQudG9Mb3dlckNhc2UoKX0pO3ZhciBkPWZ1bmN0aW9uKG4pe3ZhciBlLGQsYixvLGksaCxmLGcsdyx1LGwsVCxDLGEsRSx2LHMsYyx5LFM9InNpenpsZSIrMSpuZXcgRGF0ZSxwPW4uZG9jdW1lbnQsaz0wLHI9MCxtPXVlKCkseD11ZSgpLEE9dWUoKSxOPXVlKCksaj1mdW5jdGlvbihlLHQpe3JldHVybiBlPT09dCYmKGw9ITApLDB9LEQ9e30uaGFzT3duUHJvcGVydHksdD1bXSxxPXQucG9wLEw9dC5wdXNoLEg9dC5wdXNoLE89dC5zbGljZSxQPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKWlmKGVbbl09PT10KXJldHVybiBuO3JldHVybi0xfSxSPSJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZCIsTT0iW1xceDIwXFx0XFxyXFxuXFxmXSIsST0iKD86XFxcXFtcXGRhLWZBLUZdezEsNn0iK00rIj98XFxcXFteXFxyXFxuXFxmXXxbXFx3LV18W15cMC1cXHg3Zl0pKyIsVz0iXFxbIitNKyIqKCIrSSsiKSg/OiIrTSsiKihbKl4kfCF+XT89KSIrTSsiKig/OicoKD86XFxcXC58W15cXFxcJ10pKiknfFwiKCg/OlxcXFwufFteXFxcXFwiXSkqKVwifCgiK0krIikpfCkiK00rIipcXF0iLEY9IjooIitJKyIpKD86XFwoKCgnKCg/OlxcXFwufFteXFxcXCddKSopJ3xcIigoPzpcXFxcLnxbXlxcXFxcIl0pKilcIil8KCg/OlxcXFwufFteXFxcXCgpW1xcXV18IitXKyIpKil8LiopXFwpfCkiLEI9bmV3IFJlZ0V4cChNKyIrIiwiZyIpLCQ9bmV3IFJlZ0V4cCgiXiIrTSsiK3woKD86XnxbXlxcXFxdKSg/OlxcXFwuKSopIitNKyIrJCIsImciKSxfPW5ldyBSZWdFeHAoIl4iK00rIiosIitNKyIqIiksej1uZXcgUmVnRXhwKCJeIitNKyIqKFs+K35dfCIrTSsiKSIrTSsiKiIpLFU9bmV3IFJlZ0V4cChNKyJ8PiIpLFg9bmV3IFJlZ0V4cChGKSxWPW5ldyBSZWdFeHAoIl4iK0krIiQiKSxHPXtJRDpuZXcgUmVnRXhwKCJeIygiK0krIikiKSxDTEFTUzpuZXcgUmVnRXhwKCJeXFwuKCIrSSsiKSIpLFRBRzpuZXcgUmVnRXhwKCJeKCIrSSsifFsqXSkiKSxBVFRSOm5ldyBSZWdFeHAoIl4iK1cpLFBTRVVETzpuZXcgUmVnRXhwKCJeIitGKSxDSElMRDpuZXcgUmVnRXhwKCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXCgiK00rIiooZXZlbnxvZGR8KChbKy1dfCkoXFxkKilufCkiK00rIiooPzooWystXXwpIitNKyIqKFxcZCspfCkpIitNKyIqXFwpfCkiLCJpIiksYm9vbDpuZXcgUmVnRXhwKCJeKD86IitSKyIpJCIsImkiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cCgiXiIrTSsiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFwoIitNKyIqKCg/Oi1cXGQpP1xcZCopIitNKyIqXFwpfCkoPz1bXi1dfCQpIiwiaSIpfSxZPS9IVE1MJC9pLFE9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxKPS9eaFxkJC9pLEs9L15bXntdK1x7XHMqXFtuYXRpdmUgXHcvLFo9L14oPzojKFtcdy1dKyl8KFx3Kyl8XC4oW1x3LV0rKSkkLyxlZT0vWyt+XS8sdGU9bmV3IFJlZ0V4cCgiXFxcXFtcXGRhLWZBLUZdezEsNn0iK00rIj98XFxcXChbXlxcclxcblxcZl0pIiwiZyIpLG5lPWZ1bmN0aW9uKGUsdCl7dmFyIG49IjB4IitlLnNsaWNlKDEpLTY1NTM2O3JldHVybiB0fHwobjwwP1N0cmluZy5mcm9tQ2hhckNvZGUobis2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShuPj4xMHw1NTI5NiwxMDIzJm58NTYzMjApKX0scmU9LyhbXDAtXHgxZlx4N2ZdfF4tP1xkKXxeLSR8W15cMC1ceDFmXHg3Zi1cdUZGRkZcdy1dL2csaWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD8iXDAiPT09ZT8iXHVmZmZkIjplLnNsaWNlKDAsLTEpKyJcXCIrZS5jaGFyQ29kZUF0KGUubGVuZ3RoLTEpLnRvU3RyaW5nKDE2KSsiICI6IlxcIitlfSxvZT1mdW5jdGlvbigpe1QoKX0sYWU9YmUoZnVuY3Rpb24oZSl7cmV0dXJuITA9PT1lLmRpc2FibGVkJiYiZmllbGRzZXQiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpfSx7ZGlyOiJwYXJlbnROb2RlIixuZXh0OiJsZWdlbmQifSk7dHJ5e0guYXBwbHkodD1PLmNhbGwocC5jaGlsZE5vZGVzKSxwLmNoaWxkTm9kZXMpLHRbcC5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZSl7SD17YXBwbHk6dC5sZW5ndGg/ZnVuY3Rpb24oZSx0KXtMLmFwcGx5KGUsTy5jYWxsKHQpKX06ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmxlbmd0aCxyPTA7d2hpbGUoZVtuKytdPXRbcisrXSk7ZS5sZW5ndGg9bi0xfX19ZnVuY3Rpb24gc2UodCxlLG4scil7dmFyIGksbyxhLHMsdSxsLGMsZj1lJiZlLm93bmVyRG9jdW1lbnQscD1lP2Uubm9kZVR5cGU6OTtpZihuPW58fFtdLCJzdHJpbmciIT10eXBlb2YgdHx8IXR8fDEhPT1wJiY5IT09cCYmMTEhPT1wKXJldHVybiBuO2lmKCFyJiYoVChlKSxlPWV8fEMsRSkpe2lmKDExIT09cCYmKHU9Wi5leGVjKHQpKSlpZihpPXVbMV0pe2lmKDk9PT1wKXtpZighKGE9ZS5nZXRFbGVtZW50QnlJZChpKSkpcmV0dXJuIG47aWYoYS5pZD09PWkpcmV0dXJuIG4ucHVzaChhKSxufWVsc2UgaWYoZiYmKGE9Zi5nZXRFbGVtZW50QnlJZChpKSkmJnkoZSxhKSYmYS5pZD09PWkpcmV0dXJuIG4ucHVzaChhKSxufWVsc2V7aWYodVsyXSlyZXR1cm4gSC5hcHBseShuLGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUodCkpLG47aWYoKGk9dVszXSkmJmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBILmFwcGx5KG4sZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGkpKSxufWlmKGQucXNhJiYhTlt0KyIgIl0mJighdnx8IXYudGVzdCh0KSkmJigxIT09cHx8Im9iamVjdCIhPT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKXtpZihjPXQsZj1lLDE9PT1wJiYoVS50ZXN0KHQpfHx6LnRlc3QodCkpKXsoZj1lZS50ZXN0KHQpJiZ5ZShlLnBhcmVudE5vZGUpfHxlKT09PWUmJmQuc2NvcGV8fCgocz1lLmdldEF0dHJpYnV0ZSgiaWQiKSk/cz1zLnJlcGxhY2UocmUsaWUpOmUuc2V0QXR0cmlidXRlKCJpZCIscz1TKSksbz0obD1oKHQpKS5sZW5ndGg7d2hpbGUoby0tKWxbb109KHM/IiMiK3M6IjpzY29wZSIpKyIgIit4ZShsW29dKTtjPWwuam9pbigiLCIpfXRyeXtyZXR1cm4gSC5hcHBseShuLGYucXVlcnlTZWxlY3RvckFsbChjKSksbn1jYXRjaChlKXtOKHQsITApfWZpbmFsbHl7cz09PVMmJmUucmVtb3ZlQXR0cmlidXRlKCJpZCIpfX19cmV0dXJuIGcodC5yZXBsYWNlKCQsIiQxIiksZSxuLHIpfWZ1bmN0aW9uIHVlKCl7dmFyIHI9W107cmV0dXJuIGZ1bmN0aW9uIGUodCxuKXtyZXR1cm4gci5wdXNoKHQrIiAiKT5iLmNhY2hlTGVuZ3RoJiZkZWxldGUgZVtyLnNoaWZ0KCldLGVbdCsiICJdPW59fWZ1bmN0aW9uIGxlKGUpe3JldHVybiBlW1NdPSEwLGV9ZnVuY3Rpb24gY2UoZSl7dmFyIHQ9Qy5jcmVhdGVFbGVtZW50KCJmaWVsZHNldCIpO3RyeXtyZXR1cm4hIWUodCl9Y2F0Y2goZSl7cmV0dXJuITF9ZmluYWxseXt0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSx0PW51bGx9fWZ1bmN0aW9uIGZlKGUsdCl7dmFyIG49ZS5zcGxpdCgifCIpLHI9bi5sZW5ndGg7d2hpbGUoci0tKWIuYXR0ckhhbmRsZVtuW3JdXT10fWZ1bmN0aW9uIHBlKGUsdCl7dmFyIG49dCYmZSxyPW4mJjE9PT1lLm5vZGVUeXBlJiYxPT09dC5ub2RlVHlwZSYmZS5zb3VyY2VJbmRleC10LnNvdXJjZUluZGV4O2lmKHIpcmV0dXJuIHI7aWYobil3aGlsZShuPW4ubmV4dFNpYmxpbmcpaWYobj09PXQpcmV0dXJuLTE7cmV0dXJuIGU/MTotMX1mdW5jdGlvbiBkZSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuImlucHV0Ij09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmZS50eXBlPT09dH19ZnVuY3Rpb24gaGUobil7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oImlucHV0Ij09PXR8fCJidXR0b24iPT09dCkmJmUudHlwZT09PW59fWZ1bmN0aW9uIGdlKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4iZm9ybSJpbiBlP2UucGFyZW50Tm9kZSYmITE9PT1lLmRpc2FibGVkPyJsYWJlbCJpbiBlPyJsYWJlbCJpbiBlLnBhcmVudE5vZGU/ZS5wYXJlbnROb2RlLmRpc2FibGVkPT09dDplLmRpc2FibGVkPT09dDplLmlzRGlzYWJsZWQ9PT10fHxlLmlzRGlzYWJsZWQhPT0hdCYmYWUoZSk9PT10OmUuZGlzYWJsZWQ9PT10OiJsYWJlbCJpbiBlJiZlLmRpc2FibGVkPT09dH19ZnVuY3Rpb24gdmUoYSl7cmV0dXJuIGxlKGZ1bmN0aW9uKG8pe3JldHVybiBvPStvLGxlKGZ1bmN0aW9uKGUsdCl7dmFyIG4scj1hKFtdLGUubGVuZ3RoLG8pLGk9ci5sZW5ndGg7d2hpbGUoaS0tKWVbbj1yW2ldXSYmKGVbbl09ISh0W25dPWVbbl0pKX0pfSl9ZnVuY3Rpb24geWUoZSl7cmV0dXJuIGUmJiJ1bmRlZmluZWQiIT10eXBlb2YgZS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmZX1mb3IoZSBpbiBkPXNlLnN1cHBvcnQ9e30saT1zZS5pc1hNTD1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLm5hbWVzcGFjZVVSSSxuPWUmJihlLm93bmVyRG9jdW1lbnR8fGUpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4hWS50ZXN0KHR8fG4mJm4ubm9kZU5hbWV8fCJIVE1MIil9LFQ9c2Uuc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbixyPWU/ZS5vd25lckRvY3VtZW50fHxlOnA7cmV0dXJuIHIhPUMmJjk9PT1yLm5vZGVUeXBlJiZyLmRvY3VtZW50RWxlbWVudCYmKGE9KEM9cikuZG9jdW1lbnRFbGVtZW50LEU9IWkoQykscCE9QyYmKG49Qy5kZWZhdWx0VmlldykmJm4udG9wIT09biYmKG4uYWRkRXZlbnRMaXN0ZW5lcj9uLmFkZEV2ZW50TGlzdGVuZXIoInVubG9hZCIsb2UsITEpOm4uYXR0YWNoRXZlbnQmJm4uYXR0YWNoRXZlbnQoIm9udW5sb2FkIixvZSkpLGQuc2NvcGU9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQoZSkuYXBwZW5kQ2hpbGQoQy5jcmVhdGVFbGVtZW50KCJkaXYiKSksInVuZGVmaW5lZCIhPXR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGwmJiFlLnF1ZXJ5U2VsZWN0b3JBbGwoIjpzY29wZSBmaWVsZHNldCBkaXYiKS5sZW5ndGh9KSxkLmF0dHJpYnV0ZXM9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2xhc3NOYW1lPSJpIiwhZS5nZXRBdHRyaWJ1dGUoImNsYXNzTmFtZSIpfSksZC5nZXRFbGVtZW50c0J5VGFnTmFtZT1jZShmdW5jdGlvbihlKXtyZXR1cm4gZS5hcHBlbmRDaGlsZChDLmNyZWF0ZUNvbW1lbnQoIiIpKSwhZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgiKiIpLmxlbmd0aH0pLGQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1LLnRlc3QoQy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxkLmdldEJ5SWQ9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQoZSkuaWQ9UywhQy5nZXRFbGVtZW50c0J5TmFtZXx8IUMuZ2V0RWxlbWVudHNCeU5hbWUoUykubGVuZ3RofSksZC5nZXRCeUlkPyhiLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UodGUsbmUpO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoImlkIik9PT10fX0sYi5maW5kLklEPWZ1bmN0aW9uKGUsdCl7aWYoInVuZGVmaW5lZCIhPXR5cGVvZiB0LmdldEVsZW1lbnRCeUlkJiZFKXt2YXIgbj10LmdldEVsZW1lbnRCeUlkKGUpO3JldHVybiBuP1tuXTpbXX19KTooYi5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIG49ZS5yZXBsYWNlKHRlLG5lKTtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9InVuZGVmaW5lZCIhPXR5cGVvZiBlLmdldEF0dHJpYnV0ZU5vZGUmJmUuZ2V0QXR0cmlidXRlTm9kZSgiaWQiKTtyZXR1cm4gdCYmdC52YWx1ZT09PW59fSxiLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZigidW5kZWZpbmVkIiE9dHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQmJkUpe3ZhciBuLHIsaSxvPXQuZ2V0RWxlbWVudEJ5SWQoZSk7aWYobyl7aWYoKG49by5nZXRBdHRyaWJ1dGVOb2RlKCJpZCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dO2k9dC5nZXRFbGVtZW50c0J5TmFtZShlKSxyPTA7d2hpbGUobz1pW3IrK10paWYoKG49by5nZXRBdHRyaWJ1dGVOb2RlKCJpZCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dfXJldHVybltdfX0pLGIuZmluZC5UQUc9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihlLHQpe3JldHVybiJ1bmRlZmluZWQiIT10eXBlb2YgdC5nZXRFbGVtZW50c0J5VGFnTmFtZT90LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpOmQucXNhP3QucXVlcnlTZWxlY3RvckFsbChlKTp2b2lkIDB9OmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPTAsbz10LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpO2lmKCIqIj09PWUpe3doaWxlKG49b1tpKytdKTE9PT1uLm5vZGVUeXBlJiZyLnB1c2gobik7cmV0dXJuIHJ9cmV0dXJuIG99LGIuZmluZC5DTEFTUz1kLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGUsdCl7aWYoInVuZGVmaW5lZCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJkUpcmV0dXJuIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlKX0scz1bXSx2PVtdLChkLnFzYT1LLnRlc3QoQy5xdWVyeVNlbGVjdG9yQWxsKSkmJihjZShmdW5jdGlvbihlKXt2YXIgdDthLmFwcGVuZENoaWxkKGUpLmlubmVySFRNTD0iPGEgaWQ9JyIrUysiJz48L2E+PHNlbGVjdCBpZD0nIitTKyItXHJcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD4iLGUucXVlcnlTZWxlY3RvckFsbCgiW21zYWxsb3djYXB0dXJlXj0nJ10iKS5sZW5ndGgmJnYucHVzaCgiWypeJF09IitNKyIqKD86Jyd8XCJcIikiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoIltzZWxlY3RlZF0iKS5sZW5ndGh8fHYucHVzaCgiXFxbIitNKyIqKD86dmFsdWV8IitSKyIpIiksZS5xdWVyeVNlbGVjdG9yQWxsKCJbaWR+PSIrUysiLV0iKS5sZW5ndGh8fHYucHVzaCgifj0iKSwodD1DLmNyZWF0ZUVsZW1lbnQoImlucHV0IikpLnNldEF0dHJpYnV0ZSgibmFtZSIsIiIpLGUuYXBwZW5kQ2hpbGQodCksZS5xdWVyeVNlbGVjdG9yQWxsKCJbbmFtZT0nJ10iKS5sZW5ndGh8fHYucHVzaCgiXFxbIitNKyIqbmFtZSIrTSsiKj0iK00rIiooPzonJ3xcIlwiKSIpLGUucXVlcnlTZWxlY3RvckFsbCgiOmNoZWNrZWQiKS5sZW5ndGh8fHYucHVzaCgiOmNoZWNrZWQiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoImEjIitTKyIrKiIpLmxlbmd0aHx8di5wdXNoKCIuIy4rWyt+XSIpLGUucXVlcnlTZWxlY3RvckFsbCgiXFxcZiIpLHYucHVzaCgiW1xcclxcblxcZl0iKX0pLGNlKGZ1bmN0aW9uKGUpe2UuaW5uZXJIVE1MPSI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD4iO3ZhciB0PUMuY3JlYXRlRWxlbWVudCgiaW5wdXQiKTt0LnNldEF0dHJpYnV0ZSgidHlwZSIsImhpZGRlbiIpLGUuYXBwZW5kQ2hpbGQodCkuc2V0QXR0cmlidXRlKCJuYW1lIiwiRCIpLGUucXVlcnlTZWxlY3RvckFsbCgiW25hbWU9ZF0iKS5sZW5ndGgmJnYucHVzaCgibmFtZSIrTSsiKlsqXiR8IX5dPz0iKSwyIT09ZS5xdWVyeVNlbGVjdG9yQWxsKCI6ZW5hYmxlZCIpLmxlbmd0aCYmdi5wdXNoKCI6ZW5hYmxlZCIsIjpkaXNhYmxlZCIpLGEuYXBwZW5kQ2hpbGQoZSkuZGlzYWJsZWQ9ITAsMiE9PWUucXVlcnlTZWxlY3RvckFsbCgiOmRpc2FibGVkIikubGVuZ3RoJiZ2LnB1c2goIjplbmFibGVkIiwiOmRpc2FibGVkIiksZS5xdWVyeVNlbGVjdG9yQWxsKCIqLDp4Iiksdi5wdXNoKCIsLio6Iil9KSksKGQubWF0Y2hlc1NlbGVjdG9yPUsudGVzdChjPWEubWF0Y2hlc3x8YS53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fGEubW96TWF0Y2hlc1NlbGVjdG9yfHxhLm9NYXRjaGVzU2VsZWN0b3J8fGEubXNNYXRjaGVzU2VsZWN0b3IpKSYmY2UoZnVuY3Rpb24oZSl7ZC5kaXNjb25uZWN0ZWRNYXRjaD1jLmNhbGwoZSwiKiIpLGMuY2FsbChlLCJbcyE9JyddOngiKSxzLnB1c2goIiE9IixGKX0pLHY9di5sZW5ndGgmJm5ldyBSZWdFeHAodi5qb2luKCJ8IikpLHM9cy5sZW5ndGgmJm5ldyBSZWdFeHAocy5qb2luKCJ8IikpLHQ9Sy50ZXN0KGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHk9dHx8Sy50ZXN0KGEuY29udGFpbnMpP2Z1bmN0aW9uKGUsdCl7dmFyIG49OT09PWUubm9kZVR5cGU/ZS5kb2N1bWVudEVsZW1lbnQ6ZSxyPXQmJnQucGFyZW50Tm9kZTtyZXR1cm4gZT09PXJ8fCEoIXJ8fDEhPT1yLm5vZGVUeXBlfHwhKG4uY29udGFpbnM/bi5jb250YWlucyhyKTplLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHIpKSl9OmZ1bmN0aW9uKGUsdCl7aWYodCl3aGlsZSh0PXQucGFyZW50Tm9kZSlpZih0PT09ZSlyZXR1cm4hMDtyZXR1cm4hMX0saj10P2Z1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuIGw9ITAsMDt2YXIgbj0hZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gbnx8KDEmKG49KGUub3duZXJEb2N1bWVudHx8ZSk9PSh0Lm93bmVyRG9jdW1lbnR8fHQpP2UuY29tcGFyZURvY3VtZW50UG9zaXRpb24odCk6MSl8fCFkLnNvcnREZXRhY2hlZCYmdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKT09PW4/ZT09Q3x8ZS5vd25lckRvY3VtZW50PT1wJiZ5KHAsZSk/LTE6dD09Q3x8dC5vd25lckRvY3VtZW50PT1wJiZ5KHAsdCk/MTp1P1AodSxlKS1QKHUsdCk6MDo0Jm4/LTE6MSl9OmZ1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuIGw9ITAsMDt2YXIgbixyPTAsaT1lLnBhcmVudE5vZGUsbz10LnBhcmVudE5vZGUsYT1bZV0scz1bdF07aWYoIWl8fCFvKXJldHVybiBlPT1DPy0xOnQ9PUM/MTppPy0xOm8/MTp1P1AodSxlKS1QKHUsdCk6MDtpZihpPT09bylyZXR1cm4gcGUoZSx0KTtuPWU7d2hpbGUobj1uLnBhcmVudE5vZGUpYS51bnNoaWZ0KG4pO249dDt3aGlsZShuPW4ucGFyZW50Tm9kZSlzLnVuc2hpZnQobik7d2hpbGUoYVtyXT09PXNbcl0pcisrO3JldHVybiByP3BlKGFbcl0sc1tyXSk6YVtyXT09cD8tMTpzW3JdPT1wPzE6MH0pLEN9LHNlLm1hdGNoZXM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gc2UoZSxudWxsLG51bGwsdCl9LHNlLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihlLHQpe2lmKFQoZSksZC5tYXRjaGVzU2VsZWN0b3ImJkUmJiFOW3QrIiAiXSYmKCFzfHwhcy50ZXN0KHQpKSYmKCF2fHwhdi50ZXN0KHQpKSl0cnl7dmFyIG49Yy5jYWxsKGUsdCk7aWYobnx8ZC5kaXNjb25uZWN0ZWRNYXRjaHx8ZS5kb2N1bWVudCYmMTEhPT1lLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBufWNhdGNoKGUpe04odCwhMCl9cmV0dXJuIDA8c2UodCxDLG51bGwsW2VdKS5sZW5ndGh9LHNlLmNvbnRhaW5zPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKGUub3duZXJEb2N1bWVudHx8ZSkhPUMmJlQoZSkseShlLHQpfSxzZS5hdHRyPWZ1bmN0aW9uKGUsdCl7KGUub3duZXJEb2N1bWVudHx8ZSkhPUMmJlQoZSk7dmFyIG49Yi5hdHRySGFuZGxlW3QudG9Mb3dlckNhc2UoKV0scj1uJiZELmNhbGwoYi5hdHRySGFuZGxlLHQudG9Mb3dlckNhc2UoKSk/bihlLHQsIUUpOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09cj9yOmQuYXR0cmlidXRlc3x8IUU/ZS5nZXRBdHRyaWJ1dGUodCk6KHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSYmci5zcGVjaWZpZWQ/ci52YWx1ZTpudWxsfSxzZS5lc2NhcGU9ZnVuY3Rpb24oZSl7cmV0dXJuKGUrIiIpLnJlcGxhY2UocmUsaWUpfSxzZS5lcnJvcj1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246ICIrZSl9LHNlLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1bXSxyPTAsaT0wO2lmKGw9IWQuZGV0ZWN0RHVwbGljYXRlcyx1PSFkLnNvcnRTdGFibGUmJmUuc2xpY2UoMCksZS5zb3J0KGopLGwpe3doaWxlKHQ9ZVtpKytdKXQ9PT1lW2ldJiYocj1uLnB1c2goaSkpO3doaWxlKHItLSllLnNwbGljZShuW3JdLDEpfXJldHVybiB1PW51bGwsZX0sbz1zZS5nZXRUZXh0PWZ1bmN0aW9uKGUpe3ZhciB0LG49IiIscj0wLGk9ZS5ub2RlVHlwZTtpZihpKXtpZigxPT09aXx8OT09PWl8fDExPT09aSl7aWYoInN0cmluZyI9PXR5cGVvZiBlLnRleHRDb250ZW50KXJldHVybiBlLnRleHRDb250ZW50O2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZyluKz1vKGUpfWVsc2UgaWYoMz09PWl8fDQ9PT1pKXJldHVybiBlLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKHQ9ZVtyKytdKW4rPW8odCk7cmV0dXJuIG59LChiPXNlLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmxlLG1hdGNoOkcsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOnsiPiI6e2RpcjoicGFyZW50Tm9kZSIsZmlyc3Q6ITB9LCIgIjp7ZGlyOiJwYXJlbnROb2RlIn0sIisiOntkaXI6InByZXZpb3VzU2libGluZyIsZmlyc3Q6ITB9LCJ+Ijp7ZGlyOiJwcmV2aW91c1NpYmxpbmcifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0ucmVwbGFjZSh0ZSxuZSksZVszXT0oZVszXXx8ZVs0XXx8ZVs1XXx8IiIpLnJlcGxhY2UodGUsbmUpLCJ+PSI9PT1lWzJdJiYoZVszXT0iICIrZVszXSsiICIpLGUuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS50b0xvd2VyQ2FzZSgpLCJudGgiPT09ZVsxXS5zbGljZSgwLDMpPyhlWzNdfHxzZS5lcnJvcihlWzBdKSxlWzRdPSsoZVs0XT9lWzVdKyhlWzZdfHwxKToyKigiZXZlbiI9PT1lWzNdfHwib2RkIj09PWVbM10pKSxlWzVdPSsoZVs3XStlWzhdfHwib2RkIj09PWVbM10pKTplWzNdJiZzZS5lcnJvcihlWzBdKSxlfSxQU0VVRE86ZnVuY3Rpb24oZSl7dmFyIHQsbj0hZVs2XSYmZVsyXTtyZXR1cm4gRy5DSElMRC50ZXN0KGVbMF0pP251bGw6KGVbM10/ZVsyXT1lWzRdfHxlWzVdfHwiIjpuJiZYLnRlc3QobikmJih0PWgobiwhMCkpJiYodD1uLmluZGV4T2YoIikiLG4ubGVuZ3RoLXQpLW4ubGVuZ3RoKSYmKGVbMF09ZVswXS5zbGljZSgwLHQpLGVbMl09bi5zbGljZSgwLHQpKSxlLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKHRlLG5lKS50b0xvd2VyQ2FzZSgpO3JldHVybiIqIj09PWU/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oZSl7cmV0dXJuIGUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXR9fSxDTEFTUzpmdW5jdGlvbihlKXt2YXIgdD1tW2UrIiAiXTtyZXR1cm4gdHx8KHQ9bmV3IFJlZ0V4cCgiKF58IitNKyIpIitlKyIoIitNKyJ8JCkiKSkmJm0oZSxmdW5jdGlvbihlKXtyZXR1cm4gdC50ZXN0KCJzdHJpbmciPT10eXBlb2YgZS5jbGFzc05hbWUmJmUuY2xhc3NOYW1lfHwidW5kZWZpbmVkIiE9dHlwZW9mIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZSgiY2xhc3MiKXx8IiIpfSl9LEFUVFI6ZnVuY3Rpb24obixyLGkpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1zZS5hdHRyKGUsbik7cmV0dXJuIG51bGw9PXQ/IiE9Ij09PXI6IXJ8fCh0Kz0iIiwiPSI9PT1yP3Q9PT1pOiIhPSI9PT1yP3QhPT1pOiJePSI9PT1yP2kmJjA9PT10LmluZGV4T2YoaSk6Iio9Ij09PXI/aSYmLTE8dC5pbmRleE9mKGkpOiIkPSI9PT1yP2kmJnQuc2xpY2UoLWkubGVuZ3RoKT09PWk6In49Ij09PXI/LTE8KCIgIit0LnJlcGxhY2UoQiwiICIpKyIgIikuaW5kZXhPZihpKToifD0iPT09ciYmKHQ9PT1pfHx0LnNsaWNlKDAsaS5sZW5ndGgrMSk9PT1pKyItIikpfX0sQ0hJTEQ6ZnVuY3Rpb24oaCxlLHQsZyx2KXt2YXIgeT0ibnRoIiE9PWguc2xpY2UoMCwzKSxtPSJsYXN0IiE9PWguc2xpY2UoLTQpLHg9Im9mLXR5cGUiPT09ZTtyZXR1cm4gMT09PWcmJjA9PT12P2Z1bmN0aW9uKGUpe3JldHVybiEhZS5wYXJlbnROb2RlfTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGw9eSE9PW0/Im5leHRTaWJsaW5nIjoicHJldmlvdXNTaWJsaW5nIixjPWUucGFyZW50Tm9kZSxmPXgmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxwPSFuJiYheCxkPSExO2lmKGMpe2lmKHkpe3doaWxlKGwpe2E9ZTt3aGlsZShhPWFbbF0paWYoeD9hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1mOjE9PT1hLm5vZGVUeXBlKXJldHVybiExO3U9bD0ib25seSI9PT1oJiYhdSYmIm5leHRTaWJsaW5nIn1yZXR1cm4hMH1pZih1PVttP2MuZmlyc3RDaGlsZDpjLmxhc3RDaGlsZF0sbSYmcCl7ZD0ocz0ocj0oaT0obz0oYT1jKVtTXXx8KGFbU109e30pKVthLnVuaXF1ZUlEXXx8KG9bYS51bmlxdWVJRF09e30pKVtoXXx8W10pWzBdPT09ayYmclsxXSkmJnJbMl0sYT1zJiZjLmNoaWxkTm9kZXNbc107d2hpbGUoYT0rK3MmJmEmJmFbbF18fChkPXM9MCl8fHUucG9wKCkpaWYoMT09PWEubm9kZVR5cGUmJisrZCYmYT09PWUpe2lbaF09W2sscyxkXTticmVha319ZWxzZSBpZihwJiYoZD1zPShyPShpPShvPShhPWUpW1NdfHwoYVtTXT17fSkpW2EudW5pcXVlSURdfHwob1thLnVuaXF1ZUlEXT17fSkpW2hdfHxbXSlbMF09PT1rJiZyWzFdKSwhMT09PWQpd2hpbGUoYT0rK3MmJmEmJmFbbF18fChkPXM9MCl8fHUucG9wKCkpaWYoKHg/YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09ZjoxPT09YS5ub2RlVHlwZSkmJisrZCYmKHAmJigoaT0obz1hW1NdfHwoYVtTXT17fSkpW2EudW5pcXVlSURdfHwob1thLnVuaXF1ZUlEXT17fSkpW2hdPVtrLGRdKSxhPT09ZSkpYnJlYWs7cmV0dXJuKGQtPXYpPT09Z3x8ZCVnPT0wJiYwPD1kL2d9fX0sUFNFVURPOmZ1bmN0aW9uKGUsbyl7dmFyIHQsYT1iLnBzZXVkb3NbZV18fGIuc2V0RmlsdGVyc1tlLnRvTG93ZXJDYXNlKCldfHxzZS5lcnJvcigidW5zdXBwb3J0ZWQgcHNldWRvOiAiK2UpO3JldHVybiBhW1NdP2Eobyk6MTxhLmxlbmd0aD8odD1bZSxlLCIiLG9dLGIuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShlLnRvTG93ZXJDYXNlKCkpP2xlKGZ1bmN0aW9uKGUsdCl7dmFyIG4scj1hKGUsbyksaT1yLmxlbmd0aDt3aGlsZShpLS0pZVtuPVAoZSxyW2ldKV09ISh0W25dPXJbaV0pfSk6ZnVuY3Rpb24oZSl7cmV0dXJuIGEoZSwwLHQpfSk6YX19LHBzZXVkb3M6e25vdDpsZShmdW5jdGlvbihlKXt2YXIgcj1bXSxpPVtdLHM9ZihlLnJlcGxhY2UoJCwiJDEiKSk7cmV0dXJuIHNbU10/bGUoZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbz1zKGUsbnVsbCxyLFtdKSxhPWUubGVuZ3RoO3doaWxlKGEtLSkoaT1vW2FdKSYmKGVbYV09ISh0W2FdPWkpKX0pOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gclswXT1lLHMocixudWxsLG4saSksclswXT1udWxsLCFpLnBvcCgpfX0pLGhhczpsZShmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIDA8c2UodCxlKS5sZW5ndGh9fSksY29udGFpbnM6bGUoZnVuY3Rpb24odCl7cmV0dXJuIHQ9dC5yZXBsYWNlKHRlLG5lKSxmdW5jdGlvbihlKXtyZXR1cm4tMTwoZS50ZXh0Q29udGVudHx8byhlKSkuaW5kZXhPZih0KX19KSxsYW5nOmxlKGZ1bmN0aW9uKG4pe3JldHVybiBWLnRlc3Qobnx8IiIpfHxzZS5lcnJvcigidW5zdXBwb3J0ZWQgbGFuZzogIituKSxuPW4ucmVwbGFjZSh0ZSxuZSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihlKXt2YXIgdDtkb3tpZih0PUU/ZS5sYW5nOmUuZ2V0QXR0cmlidXRlKCJ4bWw6bGFuZyIpfHxlLmdldEF0dHJpYnV0ZSgibGFuZyIpKXJldHVybih0PXQudG9Mb3dlckNhc2UoKSk9PT1ufHwwPT09dC5pbmRleE9mKG4rIi0iKX13aGlsZSgoZT1lLnBhcmVudE5vZGUpJiYxPT09ZS5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGUpe3ZhciB0PW4ubG9jYXRpb24mJm4ubG9jYXRpb24uaGFzaDtyZXR1cm4gdCYmdC5zbGljZSgxKT09PWUuaWR9LHJvb3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1hfSxmb2N1czpmdW5jdGlvbihlKXtyZXR1cm4gZT09PUMuYWN0aXZlRWxlbWVudCYmKCFDLmhhc0ZvY3VzfHxDLmhhc0ZvY3VzKCkpJiYhIShlLnR5cGV8fGUuaHJlZnx8fmUudGFiSW5kZXgpfSxlbmFibGVkOmdlKCExKSxkaXNhYmxlZDpnZSghMCksY2hlY2tlZDpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuImlucHV0Ij09PXQmJiEhZS5jaGVja2VkfHwib3B0aW9uIj09PXQmJiEhZS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsITA9PT1lLnNlbGVjdGVkfSxlbXB0eTpmdW5jdGlvbihlKXtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpaWYoZS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIWIucHNldWRvcy5lbXB0eShlKX0saGVhZGVyOmZ1bmN0aW9uKGUpe3JldHVybiBKLnRlc3QoZS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGUpe3JldHVybiBRLnRlc3QoZS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuImlucHV0Ij09PXQmJiJidXR0b24iPT09ZS50eXBlfHwiYnV0dG9uIj09PXR9LHRleHQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuImlucHV0Ij09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmInRleHQiPT09ZS50eXBlJiYobnVsbD09KHQ9ZS5nZXRBdHRyaWJ1dGUoInR5cGUiKSl8fCJ0ZXh0Ij09PXQudG9Mb3dlckNhc2UoKSl9LGZpcnN0OnZlKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDp2ZShmdW5jdGlvbihlLHQpe3JldHVyblt0LTFdfSksZXE6dmUoZnVuY3Rpb24oZSx0LG4pe3JldHVybltuPDA/bit0Om5dfSksZXZlbjp2ZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLG9kZDp2ZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0xO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLGx0OnZlKGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9bjwwP24rdDp0PG4/dDpuOzA8PS0tcjspZS5wdXNoKHIpO3JldHVybiBlfSksZ3Q6dmUoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1uPDA/bit0Om47KytyPHQ7KWUucHVzaChyKTtyZXR1cm4gZX0pfX0pLnBzZXVkb3MubnRoPWIucHNldWRvcy5lcSx7cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pYi5wc2V1ZG9zW2VdPWRlKGUpO2ZvcihlIGlue3N1Ym1pdDohMCxyZXNldDohMH0pYi5wc2V1ZG9zW2VdPWhlKGUpO2Z1bmN0aW9uIG1lKCl7fWZ1bmN0aW9uIHhlKGUpe2Zvcih2YXIgdD0wLG49ZS5sZW5ndGgscj0iIjt0PG47dCsrKXIrPWVbdF0udmFsdWU7cmV0dXJuIHJ9ZnVuY3Rpb24gYmUocyxlLHQpe3ZhciB1PWUuZGlyLGw9ZS5uZXh0LGM9bHx8dSxmPXQmJiJwYXJlbnROb2RlIj09PWMscD1yKys7cmV0dXJuIGUuZmlyc3Q/ZnVuY3Rpb24oZSx0LG4pe3doaWxlKGU9ZVt1XSlpZigxPT09ZS5ub2RlVHlwZXx8ZilyZXR1cm4gcyhlLHQsbik7cmV0dXJuITF9OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT1bayxwXTtpZihuKXt3aGlsZShlPWVbdV0paWYoKDE9PT1lLm5vZGVUeXBlfHxmKSYmcyhlLHQsbikpcmV0dXJuITB9ZWxzZSB3aGlsZShlPWVbdV0paWYoMT09PWUubm9kZVR5cGV8fGYpaWYoaT0obz1lW1NdfHwoZVtTXT17fSkpW2UudW5pcXVlSURdfHwob1tlLnVuaXF1ZUlEXT17fSksbCYmbD09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSllPWVbdV18fGU7ZWxzZXtpZigocj1pW2NdKSYmclswXT09PWsmJnJbMV09PT1wKXJldHVybiBhWzJdPXJbMl07aWYoKGlbY109YSlbMl09cyhlLHQsbikpcmV0dXJuITB9cmV0dXJuITF9fWZ1bmN0aW9uIHdlKGkpe3JldHVybiAxPGkubGVuZ3RoP2Z1bmN0aW9uKGUsdCxuKXt2YXIgcj1pLmxlbmd0aDt3aGlsZShyLS0paWYoIWlbcl0oZSx0LG4pKXJldHVybiExO3JldHVybiEwfTppWzBdfWZ1bmN0aW9uIFRlKGUsdCxuLHIsaSl7Zm9yKHZhciBvLGE9W10scz0wLHU9ZS5sZW5ndGgsbD1udWxsIT10O3M8dTtzKyspKG89ZVtzXSkmJihuJiYhbihvLHIsaSl8fChhLnB1c2gobyksbCYmdC5wdXNoKHMpKSk7cmV0dXJuIGF9ZnVuY3Rpb24gQ2UoZCxoLGcsdix5LGUpe3JldHVybiB2JiYhdltTXSYmKHY9Q2UodikpLHkmJiF5W1NdJiYoeT1DZSh5LGUpKSxsZShmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscz1bXSx1PVtdLGw9dC5sZW5ndGgsYz1lfHxmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPTAsaT10Lmxlbmd0aDtyPGk7cisrKXNlKGUsdFtyXSxuKTtyZXR1cm4gbn0oaHx8IioiLG4ubm9kZVR5cGU/W25dOm4sW10pLGY9IWR8fCFlJiZoP2M6VGUoYyxzLGQsbixyKSxwPWc/eXx8KGU/ZDpsfHx2KT9bXTp0OmY7aWYoZyYmZyhmLHAsbixyKSx2KXtpPVRlKHAsdSksdihpLFtdLG4sciksbz1pLmxlbmd0aDt3aGlsZShvLS0pKGE9aVtvXSkmJihwW3Vbb11dPSEoZlt1W29dXT1hKSl9aWYoZSl7aWYoeXx8ZCl7aWYoeSl7aT1bXSxvPXAubGVuZ3RoO3doaWxlKG8tLSkoYT1wW29dKSYmaS5wdXNoKGZbb109YSk7eShudWxsLHA9W10saSxyKX1vPXAubGVuZ3RoO3doaWxlKG8tLSkoYT1wW29dKSYmLTE8KGk9eT9QKGUsYSk6c1tvXSkmJihlW2ldPSEodFtpXT1hKSl9fWVsc2UgcD1UZShwPT09dD9wLnNwbGljZShsLHAubGVuZ3RoKTpwKSx5P3kobnVsbCx0LHAscik6SC5hcHBseSh0LHApfSl9ZnVuY3Rpb24gRWUoZSl7Zm9yKHZhciBpLHQsbixyPWUubGVuZ3RoLG89Yi5yZWxhdGl2ZVtlWzBdLnR5cGVdLGE9b3x8Yi5yZWxhdGl2ZVsiICJdLHM9bz8xOjAsdT1iZShmdW5jdGlvbihlKXtyZXR1cm4gZT09PWl9LGEsITApLGw9YmUoZnVuY3Rpb24oZSl7cmV0dXJuLTE8UChpLGUpfSxhLCEwKSxjPVtmdW5jdGlvbihlLHQsbil7dmFyIHI9IW8mJihufHx0IT09dyl8fCgoaT10KS5ub2RlVHlwZT91KGUsdCxuKTpsKGUsdCxuKSk7cmV0dXJuIGk9bnVsbCxyfV07czxyO3MrKylpZih0PWIucmVsYXRpdmVbZVtzXS50eXBlXSljPVtiZSh3ZShjKSx0KV07ZWxzZXtpZigodD1iLmZpbHRlcltlW3NdLnR5cGVdLmFwcGx5KG51bGwsZVtzXS5tYXRjaGVzKSlbU10pe2ZvcihuPSsrcztuPHI7bisrKWlmKGIucmVsYXRpdmVbZVtuXS50eXBlXSlicmVhaztyZXR1cm4gQ2UoMTxzJiZ3ZShjKSwxPHMmJnhlKGUuc2xpY2UoMCxzLTEpLmNvbmNhdCh7dmFsdWU6IiAiPT09ZVtzLTJdLnR5cGU/IioiOiIifSkpLnJlcGxhY2UoJCwiJDEiKSx0LHM8biYmRWUoZS5zbGljZShzLG4pKSxuPHImJkVlKGU9ZS5zbGljZShuKSksbjxyJiZ4ZShlKSl9Yy5wdXNoKHQpfXJldHVybiB3ZShjKX1yZXR1cm4gbWUucHJvdG90eXBlPWIuZmlsdGVycz1iLnBzZXVkb3MsYi5zZXRGaWx0ZXJzPW5ldyBtZSxoPXNlLnRva2VuaXplPWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzLHUsbD14W2UrIiAiXTtpZihsKXJldHVybiB0PzA6bC5zbGljZSgwKTthPWUscz1bXSx1PWIucHJlRmlsdGVyO3doaWxlKGEpe2ZvcihvIGluIG4mJiEocj1fLmV4ZWMoYSkpfHwociYmKGE9YS5zbGljZShyWzBdLmxlbmd0aCl8fGEpLHMucHVzaChpPVtdKSksbj0hMSwocj16LmV4ZWMoYSkpJiYobj1yLnNoaWZ0KCksaS5wdXNoKHt2YWx1ZTpuLHR5cGU6clswXS5yZXBsYWNlKCQsIiAiKX0pLGE9YS5zbGljZShuLmxlbmd0aCkpLGIuZmlsdGVyKSEocj1HW29dLmV4ZWMoYSkpfHx1W29dJiYhKHI9dVtvXShyKSl8fChuPXIuc2hpZnQoKSxpLnB1c2goe3ZhbHVlOm4sdHlwZTpvLG1hdGNoZXM6cn0pLGE9YS5zbGljZShuLmxlbmd0aCkpO2lmKCFuKWJyZWFrfXJldHVybiB0P2EubGVuZ3RoOmE/c2UuZXJyb3IoZSk6eChlLHMpLnNsaWNlKDApfSxmPXNlLmNvbXBpbGU9ZnVuY3Rpb24oZSx0KXt2YXIgbix2LHksbSx4LHIsaT1bXSxvPVtdLGE9QVtlKyIgIl07aWYoIWEpe3R8fCh0PWgoZSkpLG49dC5sZW5ndGg7d2hpbGUobi0tKShhPUVlKHRbbl0pKVtTXT9pLnB1c2goYSk6by5wdXNoKGEpOyhhPUEoZSwodj1vLG09MDwoeT1pKS5sZW5ndGgseD0wPHYubGVuZ3RoLHI9ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdT0wLGw9IjAiLGM9ZSYmW10sZj1bXSxwPXcsZD1lfHx4JiZiLmZpbmQuVEFHKCIqIixpKSxoPWsrPW51bGw9PXA/MTpNYXRoLnJhbmRvbSgpfHwuMSxnPWQubGVuZ3RoO2ZvcihpJiYodz10PT1DfHx0fHxpKTtsIT09ZyYmbnVsbCE9KG89ZFtsXSk7bCsrKXtpZih4JiZvKXthPTAsdHx8by5vd25lckRvY3VtZW50PT1DfHwoVChvKSxuPSFFKTt3aGlsZShzPXZbYSsrXSlpZihzKG8sdHx8QyxuKSl7ci5wdXNoKG8pO2JyZWFrfWkmJihrPWgpfW0mJigobz0hcyYmbykmJnUtLSxlJiZjLnB1c2gobykpfWlmKHUrPWwsbSYmbCE9PXUpe2E9MDt3aGlsZShzPXlbYSsrXSlzKGMsZix0LG4pO2lmKGUpe2lmKDA8dSl3aGlsZShsLS0pY1tsXXx8ZltsXXx8KGZbbF09cS5jYWxsKHIpKTtmPVRlKGYpfUguYXBwbHkocixmKSxpJiYhZSYmMDxmLmxlbmd0aCYmMTx1K3kubGVuZ3RoJiZzZS51bmlxdWVTb3J0KHIpfXJldHVybiBpJiYoaz1oLHc9cCksY30sbT9sZShyKTpyKSkpLnNlbGVjdG9yPWV9cmV0dXJuIGF9LGc9c2Uuc2VsZWN0PWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbD0iZnVuY3Rpb24iPT10eXBlb2YgZSYmZSxjPSFyJiZoKGU9bC5zZWxlY3Rvcnx8ZSk7aWYobj1ufHxbXSwxPT09Yy5sZW5ndGgpe2lmKDI8KG89Y1swXT1jWzBdLnNsaWNlKDApKS5sZW5ndGgmJiJJRCI9PT0oYT1vWzBdKS50eXBlJiY5PT09dC5ub2RlVHlwZSYmRSYmYi5yZWxhdGl2ZVtvWzFdLnR5cGVdKXtpZighKHQ9KGIuZmluZC5JRChhLm1hdGNoZXNbMF0ucmVwbGFjZSh0ZSxuZSksdCl8fFtdKVswXSkpcmV0dXJuIG47bCYmKHQ9dC5wYXJlbnROb2RlKSxlPWUuc2xpY2Uoby5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9aT1HLm5lZWRzQ29udGV4dC50ZXN0KGUpPzA6by5sZW5ndGg7d2hpbGUoaS0tKXtpZihhPW9baV0sYi5yZWxhdGl2ZVtzPWEudHlwZV0pYnJlYWs7aWYoKHU9Yi5maW5kW3NdKSYmKHI9dShhLm1hdGNoZXNbMF0ucmVwbGFjZSh0ZSxuZSksZWUudGVzdChvWzBdLnR5cGUpJiZ5ZSh0LnBhcmVudE5vZGUpfHx0KSkpe2lmKG8uc3BsaWNlKGksMSksIShlPXIubGVuZ3RoJiZ4ZShvKSkpcmV0dXJuIEguYXBwbHkobixyKSxuO2JyZWFrfX19cmV0dXJuKGx8fGYoZSxjKSkocix0LCFFLG4sIXR8fGVlLnRlc3QoZSkmJnllKHQucGFyZW50Tm9kZSl8fHQpLG59LGQuc29ydFN0YWJsZT1TLnNwbGl0KCIiKS5zb3J0KGopLmpvaW4oIiIpPT09UyxkLmRldGVjdER1cGxpY2F0ZXM9ISFsLFQoKSxkLnNvcnREZXRhY2hlZD1jZShmdW5jdGlvbihlKXtyZXR1cm4gMSZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKEMuY3JlYXRlRWxlbWVudCgiZmllbGRzZXQiKSl9KSxjZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9IjxhIGhyZWY9JyMnPjwvYT4iLCIjIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoImhyZWYiKX0pfHxmZSgidHlwZXxocmVmfGhlaWdodHx3aWR0aCIsZnVuY3Rpb24oZSx0LG4pe2lmKCFuKXJldHVybiBlLmdldEF0dHJpYnV0ZSh0LCJ0eXBlIj09PXQudG9Mb3dlckNhc2UoKT8xOjIpfSksZC5hdHRyaWJ1dGVzJiZjZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9IjxpbnB1dC8+IixlLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKCJ2YWx1ZSIsIiIpLCIiPT09ZS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZSgidmFsdWUiKX0pfHxmZSgidmFsdWUiLGZ1bmN0aW9uKGUsdCxuKXtpZighbiYmImlucHV0Ij09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSlyZXR1cm4gZS5kZWZhdWx0VmFsdWV9KSxjZShmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZS5nZXRBdHRyaWJ1dGUoImRpc2FibGVkIil9KXx8ZmUoUixmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYoIW4pcmV0dXJuITA9PT1lW3RdP3QudG9Mb3dlckNhc2UoKToocj1lLmdldEF0dHJpYnV0ZU5vZGUodCkpJiZyLnNwZWNpZmllZD9yLnZhbHVlOm51bGx9KSxzZX0oQyk7Uy5maW5kPWQsUy5leHByPWQuc2VsZWN0b3JzLFMuZXhwclsiOiJdPVMuZXhwci5wc2V1ZG9zLFMudW5pcXVlU29ydD1TLnVuaXF1ZT1kLnVuaXF1ZVNvcnQsUy50ZXh0PWQuZ2V0VGV4dCxTLmlzWE1MRG9jPWQuaXNYTUwsUy5jb250YWlucz1kLmNvbnRhaW5zLFMuZXNjYXBlU2VsZWN0b3I9ZC5lc2NhcGU7dmFyIGg9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVtdLGk9dm9pZCAwIT09bjt3aGlsZSgoZT1lW3RdKSYmOSE9PWUubm9kZVR5cGUpaWYoMT09PWUubm9kZVR5cGUpe2lmKGkmJlMoZSkuaXMobikpYnJlYWs7ci5wdXNoKGUpfXJldHVybiByfSxUPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPVtdO2U7ZT1lLm5leHRTaWJsaW5nKTE9PT1lLm5vZGVUeXBlJiZlIT09dCYmbi5wdXNoKGUpO3JldHVybiBufSxrPVMuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7ZnVuY3Rpb24gQShlLHQpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10LnRvTG93ZXJDYXNlKCl9dmFyIE49L148KFthLXpdW15cL1wwPjpceDIwXHRcclxuXGZdKilbXHgyMFx0XHJcblxmXSpcLz8+KD86PFwvXDE+fCkkL2k7ZnVuY3Rpb24gaihlLG4scil7cmV0dXJuIG0obik/Uy5ncmVwKGUsZnVuY3Rpb24oZSx0KXtyZXR1cm4hIW4uY2FsbChlLHQsZSkhPT1yfSk6bi5ub2RlVHlwZT9TLmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4gZT09PW4hPT1yfSk6InN0cmluZyIhPXR5cGVvZiBuP1MuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybi0xPGkuY2FsbChuLGUpIT09cn0pOlMuZmlsdGVyKG4sZSxyKX1TLmZpbHRlcj1mdW5jdGlvbihlLHQsbil7dmFyIHI9dFswXTtyZXR1cm4gbiYmKGU9Ijpub3QoIitlKyIpIiksMT09PXQubGVuZ3RoJiYxPT09ci5ub2RlVHlwZT9TLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHIsZSk/W3JdOltdOlMuZmluZC5tYXRjaGVzKGUsUy5ncmVwKHQsZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfSkpfSxTLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihlKXt2YXIgdCxuLHI9dGhpcy5sZW5ndGgsaT10aGlzO2lmKCJzdHJpbmciIT10eXBlb2YgZSlyZXR1cm4gdGhpcy5wdXNoU3RhY2soUyhlKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodD0wO3Q8cjt0KyspaWYoUy5jb250YWlucyhpW3RdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihuPXRoaXMucHVzaFN0YWNrKFtdKSx0PTA7dDxyO3QrKylTLmZpbmQoZSxpW3RdLG4pO3JldHVybiAxPHI/Uy51bmlxdWVTb3J0KG4pOm59LGZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaih0aGlzLGV8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaih0aGlzLGV8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGUpe3JldHVybiEhaih0aGlzLCJzdHJpbmciPT10eXBlb2YgZSYmay50ZXN0KGUpP1MoZSk6ZXx8W10sITEpLmxlbmd0aH19KTt2YXIgRCxxPS9eKD86XHMqKDxbXHdcV10rPilbXj5dKnwjKFtcdy1dKykpJC87KFMuZm4uaW5pdD1mdW5jdGlvbihlLHQsbil7dmFyIHIsaTtpZighZSlyZXR1cm4gdGhpcztpZihuPW58fEQsInN0cmluZyI9PXR5cGVvZiBlKXtpZighKHI9IjwiPT09ZVswXSYmIj4iPT09ZVtlLmxlbmd0aC0xXSYmMzw9ZS5sZW5ndGg/W251bGwsZSxudWxsXTpxLmV4ZWMoZSkpfHwhclsxXSYmdClyZXR1cm4hdHx8dC5qcXVlcnk/KHR8fG4pLmZpbmQoZSk6dGhpcy5jb25zdHJ1Y3Rvcih0KS5maW5kKGUpO2lmKHJbMV0pe2lmKHQ9dCBpbnN0YW5jZW9mIFM/dFswXTp0LFMubWVyZ2UodGhpcyxTLnBhcnNlSFRNTChyWzFdLHQmJnQubm9kZVR5cGU/dC5vd25lckRvY3VtZW50fHx0OkUsITApKSxOLnRlc3QoclsxXSkmJlMuaXNQbGFpbk9iamVjdCh0KSlmb3IociBpbiB0KW0odGhpc1tyXSk/dGhpc1tyXSh0W3JdKTp0aGlzLmF0dHIocix0W3JdKTtyZXR1cm4gdGhpc31yZXR1cm4oaT1FLmdldEVsZW1lbnRCeUlkKHJbMl0pKSYmKHRoaXNbMF09aSx0aGlzLmxlbmd0aD0xKSx0aGlzfXJldHVybiBlLm5vZGVUeXBlPyh0aGlzWzBdPWUsdGhpcy5sZW5ndGg9MSx0aGlzKTptKGUpP3ZvaWQgMCE9PW4ucmVhZHk/bi5yZWFkeShlKTplKFMpOlMubWFrZUFycmF5KGUsdGhpcyl9KS5wcm90b3R5cGU9Uy5mbixEPVMoRSk7dmFyIEw9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sSD17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtmdW5jdGlvbiBPKGUsdCl7d2hpbGUoKGU9ZVt0XSkmJjEhPT1lLm5vZGVUeXBlKTtyZXR1cm4gZX1TLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGUpe3ZhciB0PVMoZSx0aGlzKSxuPXQubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8bjtlKyspaWYoUy5jb250YWlucyh0aGlzLHRbZV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10aGlzLmxlbmd0aCxvPVtdLGE9InN0cmluZyIhPXR5cGVvZiBlJiZTKGUpO2lmKCFrLnRlc3QoZSkpZm9yKDtyPGk7cisrKWZvcihuPXRoaXNbcl07biYmbiE9PXQ7bj1uLnBhcmVudE5vZGUpaWYobi5ub2RlVHlwZTwxMSYmKGE/LTE8YS5pbmRleChuKToxPT09bi5ub2RlVHlwZSYmUy5maW5kLm1hdGNoZXNTZWxlY3RvcihuLGUpKSl7by5wdXNoKG4pO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjaygxPG8ubGVuZ3RoP1MudW5pcXVlU29ydChvKTpvKX0saW5kZXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/InN0cmluZyI9PXR5cGVvZiBlP2kuY2FsbChTKGUpLHRoaXNbMF0pOmkuY2FsbCh0aGlzLGUuanF1ZXJ5P2VbMF06ZSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soUy51bmlxdWVTb3J0KFMubWVyZ2UodGhpcy5nZXQoKSxTKGUsdCkpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWU/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoZSkpfX0pLFMuZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmMTEhPT10Lm5vZGVUeXBlP3Q6bnVsbH0scGFyZW50czpmdW5jdGlvbihlKXtyZXR1cm4gaChlLCJwYXJlbnROb2RlIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGgoZSwicGFyZW50Tm9kZSIsbil9LG5leHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIE8oZSwibmV4dFNpYmxpbmciKX0scHJldjpmdW5jdGlvbihlKXtyZXR1cm4gTyhlLCJwcmV2aW91c1NpYmxpbmciKX0sbmV4dEFsbDpmdW5jdGlvbihlKXtyZXR1cm4gaChlLCJuZXh0U2libGluZyIpfSxwcmV2QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBoKGUsInByZXZpb3VzU2libGluZyIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBoKGUsIm5leHRTaWJsaW5nIixuKX0scHJldlVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLCJwcmV2aW91c1NpYmxpbmciLG4pfSxzaWJsaW5nczpmdW5jdGlvbihlKXtyZXR1cm4gVCgoZS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxlKX0sY2hpbGRyZW46ZnVuY3Rpb24oZSl7cmV0dXJuIFQoZS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWUuY29udGVudERvY3VtZW50JiZyKGUuY29udGVudERvY3VtZW50KT9lLmNvbnRlbnREb2N1bWVudDooQShlLCJ0ZW1wbGF0ZSIpJiYoZT1lLmNvbnRlbnR8fGUpLFMubWVyZ2UoW10sZS5jaGlsZE5vZGVzKSl9fSxmdW5jdGlvbihyLGkpe1MuZm5bcl09ZnVuY3Rpb24oZSx0KXt2YXIgbj1TLm1hcCh0aGlzLGksZSk7cmV0dXJuIlVudGlsIiE9PXIuc2xpY2UoLTUpJiYodD1lKSx0JiYic3RyaW5nIj09dHlwZW9mIHQmJihuPVMuZmlsdGVyKHQsbikpLDE8dGhpcy5sZW5ndGgmJihIW3JdfHxTLnVuaXF1ZVNvcnQobiksTC50ZXN0KHIpJiZuLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2sobil9fSk7dmFyIFA9L1teXHgyMFx0XHJcblxmXSsvZztmdW5jdGlvbiBSKGUpe3JldHVybiBlfWZ1bmN0aW9uIE0oZSl7dGhyb3cgZX1mdW5jdGlvbiBJKGUsdCxuLHIpe3ZhciBpO3RyeXtlJiZtKGk9ZS5wcm9taXNlKT9pLmNhbGwoZSkuZG9uZSh0KS5mYWlsKG4pOmUmJm0oaT1lLnRoZW4pP2kuY2FsbChlLHQsbik6dC5hcHBseSh2b2lkIDAsW2VdLnNsaWNlKHIpKX1jYXRjaChlKXtuLmFwcGx5KHZvaWQgMCxbZV0pfX1TLkNhbGxiYWNrcz1mdW5jdGlvbihyKXt2YXIgZSxuO3I9InN0cmluZyI9PXR5cGVvZiByPyhlPXIsbj17fSxTLmVhY2goZS5tYXRjaChQKXx8W10sZnVuY3Rpb24oZSx0KXtuW3RdPSEwfSksbik6Uy5leHRlbmQoe30scik7dmFyIGksdCxvLGEscz1bXSx1PVtdLGw9LTEsYz1mdW5jdGlvbigpe2ZvcihhPWF8fHIub25jZSxvPWk9ITA7dS5sZW5ndGg7bD0tMSl7dD11LnNoaWZ0KCk7d2hpbGUoKytsPHMubGVuZ3RoKSExPT09c1tsXS5hcHBseSh0WzBdLHRbMV0pJiZyLnN0b3BPbkZhbHNlJiYobD1zLmxlbmd0aCx0PSExKX1yLm1lbW9yeXx8KHQ9ITEpLGk9ITEsYSYmKHM9dD9bXToiIil9LGY9e2FkZDpmdW5jdGlvbigpe3JldHVybiBzJiYodCYmIWkmJihsPXMubGVuZ3RoLTEsdS5wdXNoKHQpKSxmdW5jdGlvbiBuKGUpe1MuZWFjaChlLGZ1bmN0aW9uKGUsdCl7bSh0KT9yLnVuaXF1ZSYmZi5oYXModCl8fHMucHVzaCh0KTp0JiZ0Lmxlbmd0aCYmInN0cmluZyIhPT13KHQpJiZuKHQpfSl9KGFyZ3VtZW50cyksdCYmIWkmJmMoKSksdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIFMuZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oZSx0KXt2YXIgbjt3aGlsZSgtMTwobj1TLmluQXJyYXkodCxzLG4pKSlzLnNwbGljZShuLDEpLG48PWwmJmwtLX0pLHRoaXN9LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZT8tMTxTLmluQXJyYXkoZSxzKTowPHMubGVuZ3RofSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBzJiYocz1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBhPXU9W10scz10PSIiLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIXN9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gYT11PVtdLHR8fGl8fChzPXQ9IiIpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiEhYX0sZmlyZVdpdGg6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gYXx8KHQ9W2UsKHQ9dHx8W10pLnNsaWNlP3Quc2xpY2UoKTp0XSx1LnB1c2godCksaXx8YygpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGYuZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFvfX07cmV0dXJuIGZ9LFMuZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihlKXt2YXIgbz1bWyJub3RpZnkiLCJwcm9ncmVzcyIsUy5DYWxsYmFja3MoIm1lbW9yeSIpLFMuQ2FsbGJhY2tzKCJtZW1vcnkiKSwyXSxbInJlc29sdmUiLCJkb25lIixTLkNhbGxiYWNrcygib25jZSBtZW1vcnkiKSxTLkNhbGxiYWNrcygib25jZSBtZW1vcnkiKSwwLCJyZXNvbHZlZCJdLFsicmVqZWN0IiwiZmFpbCIsUy5DYWxsYmFja3MoIm9uY2UgbWVtb3J5IiksUy5DYWxsYmFja3MoIm9uY2UgbWVtb3J5IiksMSwicmVqZWN0ZWQiXV0saT0icGVuZGluZyIsYT17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gaX0sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIHMuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSwiY2F0Y2giOmZ1bmN0aW9uKGUpe3JldHVybiBhLnRoZW4obnVsbCxlKX0scGlwZTpmdW5jdGlvbigpe3ZhciBpPWFyZ3VtZW50cztyZXR1cm4gUy5EZWZlcnJlZChmdW5jdGlvbihyKXtTLmVhY2gobyxmdW5jdGlvbihlLHQpe3ZhciBuPW0oaVt0WzRdXSkmJmlbdFs0XV07c1t0WzFdXShmdW5jdGlvbigpe3ZhciBlPW4mJm4uYXBwbHkodGhpcyxhcmd1bWVudHMpO2UmJm0oZS5wcm9taXNlKT9lLnByb21pc2UoKS5wcm9ncmVzcyhyLm5vdGlmeSkuZG9uZShyLnJlc29sdmUpLmZhaWwoci5yZWplY3QpOnJbdFswXSsiV2l0aCJdKHRoaXMsbj9bZV06YXJndW1lbnRzKX0pfSksaT1udWxsfSkucHJvbWlzZSgpfSx0aGVuOmZ1bmN0aW9uKHQsbixyKXt2YXIgdT0wO2Z1bmN0aW9uIGwoaSxvLGEscyl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49dGhpcyxyPWFyZ3VtZW50cyxlPWZ1bmN0aW9uKCl7dmFyIGUsdDtpZighKGk8dSkpe2lmKChlPWEuYXBwbHkobixyKSk9PT1vLnByb21pc2UoKSl0aHJvdyBuZXcgVHlwZUVycm9yKCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb24iKTt0PWUmJigib2JqZWN0Ij09dHlwZW9mIGV8fCJmdW5jdGlvbiI9PXR5cGVvZiBlKSYmZS50aGVuLG0odCk/cz90LmNhbGwoZSxsKHUsbyxSLHMpLGwodSxvLE0scykpOih1KyssdC5jYWxsKGUsbCh1LG8sUixzKSxsKHUsbyxNLHMpLGwodSxvLFIsby5ub3RpZnlXaXRoKSkpOihhIT09UiYmKG49dm9pZCAwLHI9W2VdKSwoc3x8by5yZXNvbHZlV2l0aCkobixyKSl9fSx0PXM/ZTpmdW5jdGlvbigpe3RyeXtlKCl9Y2F0Y2goZSl7Uy5EZWZlcnJlZC5leGNlcHRpb25Ib29rJiZTLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soZSx0LnN0YWNrVHJhY2UpLHU8PWkrMSYmKGEhPT1NJiYobj12b2lkIDAscj1bZV0pLG8ucmVqZWN0V2l0aChuLHIpKX19O2k/dCgpOihTLkRlZmVycmVkLmdldFN0YWNrSG9vayYmKHQuc3RhY2tUcmFjZT1TLkRlZmVycmVkLmdldFN0YWNrSG9vaygpKSxDLnNldFRpbWVvdXQodCkpfX1yZXR1cm4gUy5EZWZlcnJlZChmdW5jdGlvbihlKXtvWzBdWzNdLmFkZChsKDAsZSxtKHIpP3I6UixlLm5vdGlmeVdpdGgpKSxvWzFdWzNdLmFkZChsKDAsZSxtKHQpP3Q6UikpLG9bMl1bM10uYWRkKGwoMCxlLG0obik/bjpNKSl9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWU/Uy5leHRlbmQoZSxhKTphfX0scz17fTtyZXR1cm4gUy5lYWNoKG8sZnVuY3Rpb24oZSx0KXt2YXIgbj10WzJdLHI9dFs1XTthW3RbMV1dPW4uYWRkLHImJm4uYWRkKGZ1bmN0aW9uKCl7aT1yfSxvWzMtZV1bMl0uZGlzYWJsZSxvWzMtZV1bM10uZGlzYWJsZSxvWzBdWzJdLmxvY2ssb1swXVszXS5sb2NrKSxuLmFkZCh0WzNdLmZpcmUpLHNbdFswXV09ZnVuY3Rpb24oKXtyZXR1cm4gc1t0WzBdKyJXaXRoIl0odGhpcz09PXM/dm9pZCAwOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxzW3RbMF0rIldpdGgiXT1uLmZpcmVXaXRofSksYS5wcm9taXNlKHMpLGUmJmUuY2FsbChzLHMpLHN9LHdoZW46ZnVuY3Rpb24oZSl7dmFyIG49YXJndW1lbnRzLmxlbmd0aCx0PW4scj1BcnJheSh0KSxpPXMuY2FsbChhcmd1bWVudHMpLG89Uy5EZWZlcnJlZCgpLGE9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JbdF09dGhpcyxpW3RdPTE8YXJndW1lbnRzLmxlbmd0aD9zLmNhbGwoYXJndW1lbnRzKTplLC0tbnx8by5yZXNvbHZlV2l0aChyLGkpfX07aWYobjw9MSYmKEkoZSxvLmRvbmUoYSh0KSkucmVzb2x2ZSxvLnJlamVjdCwhbiksInBlbmRpbmciPT09by5zdGF0ZSgpfHxtKGlbdF0mJmlbdF0udGhlbikpKXJldHVybiBvLnRoZW4oKTt3aGlsZSh0LS0pSShpW3RdLGEodCksby5yZWplY3QpO3JldHVybiBvLnByb21pc2UoKX19KTt2YXIgVz0vXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLztTLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2s9ZnVuY3Rpb24oZSx0KXtDLmNvbnNvbGUmJkMuY29uc29sZS53YXJuJiZlJiZXLnRlc3QoZS5uYW1lKSYmQy5jb25zb2xlLndhcm4oImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb246ICIrZS5tZXNzYWdlLGUuc3RhY2ssdCl9LFMucmVhZHlFeGNlcHRpb249ZnVuY3Rpb24oZSl7Qy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZX0pfTt2YXIgRj1TLkRlZmVycmVkKCk7ZnVuY3Rpb24gQigpe0UucmVtb3ZlRXZlbnRMaXN0ZW5lcigiRE9NQ29udGVudExvYWRlZCIsQiksQy5yZW1vdmVFdmVudExpc3RlbmVyKCJsb2FkIixCKSxTLnJlYWR5KCl9Uy5mbi5yZWFkeT1mdW5jdGlvbihlKXtyZXR1cm4gRi50aGVuKGUpWyJjYXRjaCJdKGZ1bmN0aW9uKGUpe1MucmVhZHlFeGNlcHRpb24oZSl9KSx0aGlzfSxTLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxyZWFkeTpmdW5jdGlvbihlKXsoITA9PT1lPy0tUy5yZWFkeVdhaXQ6Uy5pc1JlYWR5KXx8KFMuaXNSZWFkeT0hMCkhPT1lJiYwPC0tUy5yZWFkeVdhaXR8fEYucmVzb2x2ZVdpdGgoRSxbU10pfX0pLFMucmVhZHkudGhlbj1GLnRoZW4sImNvbXBsZXRlIj09PUUucmVhZHlTdGF0ZXx8ImxvYWRpbmciIT09RS5yZWFkeVN0YXRlJiYhRS5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/Qy5zZXRUaW1lb3V0KFMucmVhZHkpOihFLmFkZEV2ZW50TGlzdGVuZXIoIkRPTUNvbnRlbnRMb2FkZWQiLEIpLEMuYWRkRXZlbnRMaXN0ZW5lcigibG9hZCIsQikpO3ZhciAkPWZ1bmN0aW9uKGUsdCxuLHIsaSxvLGEpe3ZhciBzPTAsdT1lLmxlbmd0aCxsPW51bGw9PW47aWYoIm9iamVjdCI9PT13KG4pKWZvcihzIGluIGk9ITAsbikkKGUsdCxzLG5bc10sITAsbyxhKTtlbHNlIGlmKHZvaWQgMCE9PXImJihpPSEwLG0ocil8fChhPSEwKSxsJiYoYT8odC5jYWxsKGUsciksdD1udWxsKToobD10LHQ9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBsLmNhbGwoUyhlKSxuKX0pKSx0KSlmb3IoO3M8dTtzKyspdChlW3NdLG4sYT9yOnIuY2FsbChlW3NdLHMsdChlW3NdLG4pKSk7cmV0dXJuIGk/ZTpsP3QuY2FsbChlKTp1P3QoZVswXSxuKTpvfSxfPS9eLW1zLS8sej0vLShbYS16XSkvZztmdW5jdGlvbiBVKGUsdCl7cmV0dXJuIHQudG9VcHBlckNhc2UoKX1mdW5jdGlvbiBYKGUpe3JldHVybiBlLnJlcGxhY2UoXywibXMtIikucmVwbGFjZSh6LFUpfXZhciBWPWZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZXx8OT09PWUubm9kZVR5cGV8fCErZS5ub2RlVHlwZX07ZnVuY3Rpb24gRygpe3RoaXMuZXhwYW5kbz1TLmV4cGFuZG8rRy51aWQrK31HLnVpZD0xLEcucHJvdG90eXBlPXtjYWNoZTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHR8fCh0PXt9LFYoZSkmJihlLm5vZGVUeXBlP2VbdGhpcy5leHBhbmRvXT10Ok9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHRoaXMuZXhwYW5kbyx7dmFsdWU6dCxjb25maWd1cmFibGU6ITB9KSkpLHR9LHNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaT10aGlzLmNhY2hlKGUpO2lmKCJzdHJpbmciPT10eXBlb2YgdClpW1godCldPW47ZWxzZSBmb3IociBpbiB0KWlbWChyKV09dFtyXTtyZXR1cm4gaX0sZ2V0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQ/dGhpcy5jYWNoZShlKTplW3RoaXMuZXhwYW5kb10mJmVbdGhpcy5leHBhbmRvXVtYKHQpXX0sYWNjZXNzOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdm9pZCAwPT09dHx8dCYmInN0cmluZyI9PXR5cGVvZiB0JiZ2b2lkIDA9PT1uP3RoaXMuZ2V0KGUsdCk6KHRoaXMuc2V0KGUsdCxuKSx2b2lkIDAhPT1uP246dCl9LHJlbW92ZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9ZVt0aGlzLmV4cGFuZG9dO2lmKHZvaWQgMCE9PXIpe2lmKHZvaWQgMCE9PXQpe249KHQ9QXJyYXkuaXNBcnJheSh0KT90Lm1hcChYKToodD1YKHQpKWluIHI/W3RdOnQubWF0Y2goUCl8fFtdKS5sZW5ndGg7d2hpbGUobi0tKWRlbGV0ZSByW3Rbbl1dfSh2b2lkIDA9PT10fHxTLmlzRW1wdHlPYmplY3QocikpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBlW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PXQmJiFTLmlzRW1wdHlPYmplY3QodCl9fTt2YXIgWT1uZXcgRyxRPW5ldyBHLEo9L14oPzpce1tcd1xXXSpcfXxcW1tcd1xXXSpcXSkkLyxLPS9bQS1aXS9nO2Z1bmN0aW9uIFooZSx0LG4pe3ZhciByLGk7aWYodm9pZCAwPT09biYmMT09PWUubm9kZVR5cGUpaWYocj0iZGF0YS0iK3QucmVwbGFjZShLLCItJCYiKS50b0xvd2VyQ2FzZSgpLCJzdHJpbmciPT10eXBlb2Yobj1lLmdldEF0dHJpYnV0ZShyKSkpe3RyeXtuPSJ0cnVlIj09PShpPW4pfHwiZmFsc2UiIT09aSYmKCJudWxsIj09PWk/bnVsbDppPT09K2krIiI/K2k6Si50ZXN0KGkpP0pTT04ucGFyc2UoaSk6aSl9Y2F0Y2goZSl7fVEuc2V0KGUsdCxuKX1lbHNlIG49dm9pZCAwO3JldHVybiBufVMuZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiBRLmhhc0RhdGEoZSl8fFkuaGFzRGF0YShlKX0sZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFEuYWNjZXNzKGUsdCxuKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe1EucmVtb3ZlKGUsdCl9LF9kYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gWS5hY2Nlc3MoZSx0LG4pfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe1kucmVtb3ZlKGUsdCl9fSksUy5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24obixlKXt2YXIgdCxyLGksbz10aGlzWzBdLGE9byYmby5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PW4pe2lmKHRoaXMubGVuZ3RoJiYoaT1RLmdldChvKSwxPT09by5ub2RlVHlwZSYmIVkuZ2V0KG8sImhhc0RhdGFBdHRycyIpKSl7dD1hLmxlbmd0aDt3aGlsZSh0LS0pYVt0XSYmMD09PShyPWFbdF0ubmFtZSkuaW5kZXhPZigiZGF0YS0iKSYmKHI9WChyLnNsaWNlKDUpKSxaKG8scixpW3JdKSk7WS5zZXQobywiaGFzRGF0YUF0dHJzIiwhMCl9cmV0dXJuIGl9cmV0dXJuIm9iamVjdCI9PXR5cGVvZiBuP3RoaXMuZWFjaChmdW5jdGlvbigpe1Euc2V0KHRoaXMsbil9KTokKHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ7aWYobyYmdm9pZCAwPT09ZSlyZXR1cm4gdm9pZCAwIT09KHQ9US5nZXQobyxuKSk/dDp2b2lkIDAhPT0odD1aKG8sbikpP3Q6dm9pZCAwO3RoaXMuZWFjaChmdW5jdGlvbigpe1Euc2V0KHRoaXMsbixlKX0pfSxudWxsLGUsMTxhcmd1bWVudHMubGVuZ3RoLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtRLnJlbW92ZSh0aGlzLGUpfSl9fSksUy5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZihlKXJldHVybiB0PSh0fHwiZngiKSsicXVldWUiLHI9WS5nZXQoZSx0KSxuJiYoIXJ8fEFycmF5LmlzQXJyYXkobik/cj1ZLmFjY2VzcyhlLHQsUy5tYWtlQXJyYXkobikpOnIucHVzaChuKSkscnx8W119LGRlcXVldWU6ZnVuY3Rpb24oZSx0KXt0PXR8fCJmeCI7dmFyIG49Uy5xdWV1ZShlLHQpLHI9bi5sZW5ndGgsaT1uLnNoaWZ0KCksbz1TLl9xdWV1ZUhvb2tzKGUsdCk7ImlucHJvZ3Jlc3MiPT09aSYmKGk9bi5zaGlmdCgpLHItLSksaSYmKCJmeCI9PT10JiZuLnVuc2hpZnQoImlucHJvZ3Jlc3MiKSxkZWxldGUgby5zdG9wLGkuY2FsbChlLGZ1bmN0aW9uKCl7Uy5kZXF1ZXVlKGUsdCl9LG8pKSwhciYmbyYmby5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGUsdCl7dmFyIG49dCsicXVldWVIb29rcyI7cmV0dXJuIFkuZ2V0KGUsbil8fFkuYWNjZXNzKGUsbix7ZW1wdHk6Uy5DYWxsYmFja3MoIm9uY2UgbWVtb3J5IikuYWRkKGZ1bmN0aW9uKCl7WS5yZW1vdmUoZSxbdCsicXVldWUiLG5dKX0pfSl9fSksUy5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKHQsbil7dmFyIGU9MjtyZXR1cm4ic3RyaW5nIiE9dHlwZW9mIHQmJihuPXQsdD0iZngiLGUtLSksYXJndW1lbnRzLmxlbmd0aDxlP1MucXVldWUodGhpc1swXSx0KTp2b2lkIDA9PT1uP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9Uy5xdWV1ZSh0aGlzLHQsbik7Uy5fcXVldWVIb29rcyh0aGlzLHQpLCJmeCI9PT10JiYiaW5wcm9ncmVzcyIhPT1lWzBdJiZTLmRlcXVldWUodGhpcyx0KX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtTLmRlcXVldWUodGhpcyxlKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnF1ZXVlKGV8fCJmeCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0xLGk9Uy5EZWZlcnJlZCgpLG89dGhpcyxhPXRoaXMubGVuZ3RoLHM9ZnVuY3Rpb24oKXstLXJ8fGkucmVzb2x2ZVdpdGgobyxbb10pfTsic3RyaW5nIiE9dHlwZW9mIGUmJih0PWUsZT12b2lkIDApLGU9ZXx8ImZ4Ijt3aGlsZShhLS0pKG49WS5nZXQob1thXSxlKyJxdWV1ZUhvb2tzIikpJiZuLmVtcHR5JiYocisrLG4uZW1wdHkuYWRkKHMpKTtyZXR1cm4gcygpLGkucHJvbWlzZSh0KX19KTt2YXIgZWU9L1srLV0/KD86XGQqXC58KVxkKyg/OltlRV1bKy1dP1xkK3wpLy5zb3VyY2UsdGU9bmV3IFJlZ0V4cCgiXig/OihbKy1dKT18KSgiK2VlKyIpKFthLXolXSopJCIsImkiKSxuZT1bIlRvcCIsIlJpZ2h0IiwiQm90dG9tIiwiTGVmdCJdLHJlPUUuZG9jdW1lbnRFbGVtZW50LGllPWZ1bmN0aW9uKGUpe3JldHVybiBTLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKX0sb2U9e2NvbXBvc2VkOiEwfTtyZS5nZXRSb290Tm9kZSYmKGllPWZ1bmN0aW9uKGUpe3JldHVybiBTLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKXx8ZS5nZXRSb290Tm9kZShvZSk9PT1lLm93bmVyRG9jdW1lbnR9KTt2YXIgYWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4ibm9uZSI9PT0oZT10fHxlKS5zdHlsZS5kaXNwbGF5fHwiIj09PWUuc3R5bGUuZGlzcGxheSYmaWUoZSkmJiJub25lIj09PVMuY3NzKGUsImRpc3BsYXkiKX07ZnVuY3Rpb24gc2UoZSx0LG4scil7dmFyIGksbyxhPTIwLHM9cj9mdW5jdGlvbigpe3JldHVybiByLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiBTLmNzcyhlLHQsIiIpfSx1PXMoKSxsPW4mJm5bM118fChTLmNzc051bWJlclt0XT8iIjoicHgiKSxjPWUubm9kZVR5cGUmJihTLmNzc051bWJlclt0XXx8InB4IiE9PWwmJit1KSYmdGUuZXhlYyhTLmNzcyhlLHQpKTtpZihjJiZjWzNdIT09bCl7dS89MixsPWx8fGNbM10sYz0rdXx8MTt3aGlsZShhLS0pUy5zdHlsZShlLHQsYytsKSwoMS1vKSooMS0obz1zKCkvdXx8LjUpKTw9MCYmKGE9MCksYy89bztjKj0yLFMuc3R5bGUoZSx0LGMrbCksbj1ufHxbXX1yZXR1cm4gbiYmKGM9K2N8fCt1fHwwLGk9blsxXT9jKyhuWzFdKzEpKm5bMl06K25bMl0sciYmKHIudW5pdD1sLHIuc3RhcnQ9YyxyLmVuZD1pKSksaX12YXIgdWU9e307ZnVuY3Rpb24gbGUoZSx0KXtmb3IodmFyIG4scixpLG8sYSxzLHUsbD1bXSxjPTAsZj1lLmxlbmd0aDtjPGY7YysrKShyPWVbY10pLnN0eWxlJiYobj1yLnN0eWxlLmRpc3BsYXksdD8oIm5vbmUiPT09biYmKGxbY109WS5nZXQociwiZGlzcGxheSIpfHxudWxsLGxbY118fChyLnN0eWxlLmRpc3BsYXk9IiIpKSwiIj09PXIuc3R5bGUuZGlzcGxheSYmYWUocikmJihsW2NdPSh1PWE9bz12b2lkIDAsYT0oaT1yKS5vd25lckRvY3VtZW50LHM9aS5ub2RlTmFtZSwodT11ZVtzXSl8fChvPWEuYm9keS5hcHBlbmRDaGlsZChhLmNyZWF0ZUVsZW1lbnQocykpLHU9Uy5jc3MobywiZGlzcGxheSIpLG8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKSwibm9uZSI9PT11JiYodT0iYmxvY2siKSx1ZVtzXT11KSkpKToibm9uZSIhPT1uJiYobFtjXT0ibm9uZSIsWS5zZXQociwiZGlzcGxheSIsbikpKTtmb3IoYz0wO2M8ZjtjKyspbnVsbCE9bFtjXSYmKGVbY10uc3R5bGUuZGlzcGxheT1sW2NdKTtyZXR1cm4gZX1TLmZuLmV4dGVuZCh7c2hvdzpmdW5jdGlvbigpe3JldHVybiBsZSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBsZSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGUpe3JldHVybiJib29sZWFuIj09dHlwZW9mIGU/ZT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXthZSh0aGlzKT9TKHRoaXMpLnNob3coKTpTKHRoaXMpLmhpZGUoKX0pfX0pO3ZhciBjZSxmZSxwZT0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxkZT0vPChbYS16XVteXC9cMD5ceDIwXHRcclxuXGZdKikvaSxoZT0vXiR8Xm1vZHVsZSR8XC8oPzpqYXZhfGVjbWEpc2NyaXB0L2k7Y2U9RS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkuYXBwZW5kQ2hpbGQoRS5jcmVhdGVFbGVtZW50KCJkaXYiKSksKGZlPUUuY3JlYXRlRWxlbWVudCgiaW5wdXQiKSkuc2V0QXR0cmlidXRlKCJ0eXBlIiwicmFkaW8iKSxmZS5zZXRBdHRyaWJ1dGUoImNoZWNrZWQiLCJjaGVja2VkIiksZmUuc2V0QXR0cmlidXRlKCJuYW1lIiwidCIpLGNlLmFwcGVuZENoaWxkKGZlKSx5LmNoZWNrQ2xvbmU9Y2UuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGNlLmlubmVySFRNTD0iPHRleHRhcmVhPng8L3RleHRhcmVhPiIseS5ub0Nsb25lQ2hlY2tlZD0hIWNlLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZSxjZS5pbm5lckhUTUw9IjxvcHRpb24+PC9vcHRpb24+Iix5Lm9wdGlvbj0hIWNlLmxhc3RDaGlsZDt2YXIgZ2U9e3RoZWFkOlsxLCI8dGFibGU+IiwiPC90YWJsZT4iXSxjb2w6WzIsIjx0YWJsZT48Y29sZ3JvdXA+IiwiPC9jb2xncm91cD48L3RhYmxlPiJdLHRyOlsyLCI8dGFibGU+PHRib2R5PiIsIjwvdGJvZHk+PC90YWJsZT4iXSx0ZDpbMywiPHRhYmxlPjx0Ym9keT48dHI+IiwiPC90cj48L3Rib2R5PjwvdGFibGU+Il0sX2RlZmF1bHQ6WzAsIiIsIiJdfTtmdW5jdGlvbiB2ZShlLHQpe3ZhciBuO3JldHVybiBuPSJ1bmRlZmluZWQiIT10eXBlb2YgZS5nZXRFbGVtZW50c0J5VGFnTmFtZT9lLmdldEVsZW1lbnRzQnlUYWdOYW1lKHR8fCIqIik6InVuZGVmaW5lZCIhPXR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGw/ZS5xdWVyeVNlbGVjdG9yQWxsKHR8fCIqIik6W10sdm9pZCAwPT09dHx8dCYmQShlLHQpP1MubWVyZ2UoW2VdLG4pOm59ZnVuY3Rpb24geWUoZSx0KXtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjtuKyspWS5zZXQoZVtuXSwiZ2xvYmFsRXZhbCIsIXR8fFkuZ2V0KHRbbl0sImdsb2JhbEV2YWwiKSl9Z2UudGJvZHk9Z2UudGZvb3Q9Z2UuY29sZ3JvdXA9Z2UuY2FwdGlvbj1nZS50aGVhZCxnZS50aD1nZS50ZCx5Lm9wdGlvbnx8KGdlLm9wdGdyb3VwPWdlLm9wdGlvbj1bMSwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPiIsIjwvc2VsZWN0PiJdKTt2YXIgbWU9Lzx8JiM/XHcrOy87ZnVuY3Rpb24geGUoZSx0LG4scixpKXtmb3IodmFyIG8sYSxzLHUsbCxjLGY9dC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkscD1bXSxkPTAsaD1lLmxlbmd0aDtkPGg7ZCsrKWlmKChvPWVbZF0pfHwwPT09bylpZigib2JqZWN0Ij09PXcobykpUy5tZXJnZShwLG8ubm9kZVR5cGU/W29dOm8pO2Vsc2UgaWYobWUudGVzdChvKSl7YT1hfHxmLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudCgiZGl2IikpLHM9KGRlLmV4ZWMobyl8fFsiIiwiIl0pWzFdLnRvTG93ZXJDYXNlKCksdT1nZVtzXXx8Z2UuX2RlZmF1bHQsYS5pbm5lckhUTUw9dVsxXStTLmh0bWxQcmVmaWx0ZXIobykrdVsyXSxjPXVbMF07d2hpbGUoYy0tKWE9YS5sYXN0Q2hpbGQ7Uy5tZXJnZShwLGEuY2hpbGROb2RlcyksKGE9Zi5maXJzdENoaWxkKS50ZXh0Q29udGVudD0iIn1lbHNlIHAucHVzaCh0LmNyZWF0ZVRleHROb2RlKG8pKTtmLnRleHRDb250ZW50PSIiLGQ9MDt3aGlsZShvPXBbZCsrXSlpZihyJiYtMTxTLmluQXJyYXkobyxyKSlpJiZpLnB1c2gobyk7ZWxzZSBpZihsPWllKG8pLGE9dmUoZi5hcHBlbmRDaGlsZChvKSwic2NyaXB0IiksbCYmeWUoYSksbil7Yz0wO3doaWxlKG89YVtjKytdKWhlLnRlc3Qoby50eXBlfHwiIikmJm4ucHVzaChvKX1yZXR1cm4gZn12YXIgYmU9L14oW14uXSopKD86XC4oLispfCkvO2Z1bmN0aW9uIHdlKCl7cmV0dXJuITB9ZnVuY3Rpb24gVGUoKXtyZXR1cm4hMX1mdW5jdGlvbiBDZShlLHQpe3JldHVybiBlPT09ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIEUuYWN0aXZlRWxlbWVudH1jYXRjaChlKXt9fSgpPT0oImZvY3VzIj09PXQpfWZ1bmN0aW9uIEVlKGUsdCxuLHIsaSxvKXt2YXIgYSxzO2lmKCJvYmplY3QiPT10eXBlb2YgdCl7Zm9yKHMgaW4ic3RyaW5nIiE9dHlwZW9mIG4mJihyPXJ8fG4sbj12b2lkIDApLHQpRWUoZSxzLG4scix0W3NdLG8pO3JldHVybiBlfWlmKG51bGw9PXImJm51bGw9PWk/KGk9bixyPW49dm9pZCAwKTpudWxsPT1pJiYoInN0cmluZyI9PXR5cGVvZiBuPyhpPXIscj12b2lkIDApOihpPXIscj1uLG49dm9pZCAwKSksITE9PT1pKWk9VGU7ZWxzZSBpZighaSlyZXR1cm4gZTtyZXR1cm4gMT09PW8mJihhPWksKGk9ZnVuY3Rpb24oZSl7cmV0dXJuIFMoKS5vZmYoZSksYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KS5ndWlkPWEuZ3VpZHx8KGEuZ3VpZD1TLmd1aWQrKykpLGUuZWFjaChmdW5jdGlvbigpe1MuZXZlbnQuYWRkKHRoaXMsdCxpLHIsbil9KX1mdW5jdGlvbiBTZShlLGksbyl7bz8oWS5zZXQoZSxpLCExKSxTLmV2ZW50LmFkZChlLGkse25hbWVzcGFjZTohMSxoYW5kbGVyOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj1ZLmdldCh0aGlzLGkpO2lmKDEmZS5pc1RyaWdnZXImJnRoaXNbaV0pe2lmKHIubGVuZ3RoKShTLmV2ZW50LnNwZWNpYWxbaV18fHt9KS5kZWxlZ2F0ZVR5cGUmJmUuc3RvcFByb3BhZ2F0aW9uKCk7ZWxzZSBpZihyPXMuY2FsbChhcmd1bWVudHMpLFkuc2V0KHRoaXMsaSxyKSx0PW8odGhpcyxpKSx0aGlzW2ldKCksciE9PShuPVkuZ2V0KHRoaXMsaSkpfHx0P1kuc2V0KHRoaXMsaSwhMSk6bj17fSxyIT09bilyZXR1cm4gZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSxlLnByZXZlbnREZWZhdWx0KCksbiYmbi52YWx1ZX1lbHNlIHIubGVuZ3RoJiYoWS5zZXQodGhpcyxpLHt2YWx1ZTpTLmV2ZW50LnRyaWdnZXIoUy5leHRlbmQoclswXSxTLkV2ZW50LnByb3RvdHlwZSksci5zbGljZSgxKSx0aGlzKX0pLGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkpfX0pKTp2b2lkIDA9PT1ZLmdldChlLGkpJiZTLmV2ZW50LmFkZChlLGksd2UpfVMuZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24odCxlLG4scixpKXt2YXIgbyxhLHMsdSxsLGMsZixwLGQsaCxnLHY9WS5nZXQodCk7aWYoVih0KSl7bi5oYW5kbGVyJiYobj0obz1uKS5oYW5kbGVyLGk9by5zZWxlY3RvciksaSYmUy5maW5kLm1hdGNoZXNTZWxlY3RvcihyZSxpKSxuLmd1aWR8fChuLmd1aWQ9Uy5ndWlkKyspLCh1PXYuZXZlbnRzKXx8KHU9di5ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSksKGE9di5oYW5kbGUpfHwoYT12LmhhbmRsZT1mdW5jdGlvbihlKXtyZXR1cm4idW5kZWZpbmVkIiE9dHlwZW9mIFMmJlMuZXZlbnQudHJpZ2dlcmVkIT09ZS50eXBlP1MuZXZlbnQuZGlzcGF0Y2guYXBwbHkodCxhcmd1bWVudHMpOnZvaWQgMH0pLGw9KGU9KGV8fCIiKS5tYXRjaChQKXx8WyIiXSkubGVuZ3RoO3doaWxlKGwtLSlkPWc9KHM9YmUuZXhlYyhlW2xdKXx8W10pWzFdLGg9KHNbMl18fCIiKS5zcGxpdCgiLiIpLnNvcnQoKSxkJiYoZj1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LGQ9KGk/Zi5kZWxlZ2F0ZVR5cGU6Zi5iaW5kVHlwZSl8fGQsZj1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LGM9Uy5leHRlbmQoe3R5cGU6ZCxvcmlnVHlwZTpnLGRhdGE6cixoYW5kbGVyOm4sZ3VpZDpuLmd1aWQsc2VsZWN0b3I6aSxuZWVkc0NvbnRleHQ6aSYmUy5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGkpLG5hbWVzcGFjZTpoLmpvaW4oIi4iKX0sbyksKHA9dVtkXSl8fCgocD11W2RdPVtdKS5kZWxlZ2F0ZUNvdW50PTAsZi5zZXR1cCYmITEhPT1mLnNldHVwLmNhbGwodCxyLGgsYSl8fHQuYWRkRXZlbnRMaXN0ZW5lciYmdC5hZGRFdmVudExpc3RlbmVyKGQsYSkpLGYuYWRkJiYoZi5hZGQuY2FsbCh0LGMpLGMuaGFuZGxlci5ndWlkfHwoYy5oYW5kbGVyLmd1aWQ9bi5ndWlkKSksaT9wLnNwbGljZShwLmRlbGVnYXRlQ291bnQrKywwLGMpOnAucHVzaChjKSxTLmV2ZW50Lmdsb2JhbFtkXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdSxsLGMsZixwLGQsaCxnLHY9WS5oYXNEYXRhKGUpJiZZLmdldChlKTtpZih2JiYodT12LmV2ZW50cykpe2w9KHQ9KHR8fCIiKS5tYXRjaChQKXx8WyIiXSkubGVuZ3RoO3doaWxlKGwtLSlpZihkPWc9KHM9YmUuZXhlYyh0W2xdKXx8W10pWzFdLGg9KHNbMl18fCIiKS5zcGxpdCgiLiIpLnNvcnQoKSxkKXtmPVMuZXZlbnQuc3BlY2lhbFtkXXx8e30scD11W2Q9KHI/Zi5kZWxlZ2F0ZVR5cGU6Zi5iaW5kVHlwZSl8fGRdfHxbXSxzPXNbMl0mJm5ldyBSZWdFeHAoIihefFxcLikiK2guam9pbigiXFwuKD86LipcXC58KSIpKyIoXFwufCQpIiksYT1vPXAubGVuZ3RoO3doaWxlKG8tLSljPXBbb10sIWkmJmchPT1jLm9yaWdUeXBlfHxuJiZuLmd1aWQhPT1jLmd1aWR8fHMmJiFzLnRlc3QoYy5uYW1lc3BhY2UpfHxyJiZyIT09Yy5zZWxlY3RvciYmKCIqKiIhPT1yfHwhYy5zZWxlY3Rvcil8fChwLnNwbGljZShvLDEpLGMuc2VsZWN0b3ImJnAuZGVsZWdhdGVDb3VudC0tLGYucmVtb3ZlJiZmLnJlbW92ZS5jYWxsKGUsYykpO2EmJiFwLmxlbmd0aCYmKGYudGVhcmRvd24mJiExIT09Zi50ZWFyZG93bi5jYWxsKGUsaCx2LmhhbmRsZSl8fFMucmVtb3ZlRXZlbnQoZSxkLHYuaGFuZGxlKSxkZWxldGUgdVtkXSl9ZWxzZSBmb3IoZCBpbiB1KVMuZXZlbnQucmVtb3ZlKGUsZCt0W2xdLG4sciwhMCk7Uy5pc0VtcHR5T2JqZWN0KHUpJiZZLnJlbW92ZShlLCJoYW5kbGUgZXZlbnRzIil9fSxkaXNwYXRjaDpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaSxvLGEscz1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksdT1TLmV2ZW50LmZpeChlKSxsPShZLmdldCh0aGlzLCJldmVudHMiKXx8T2JqZWN0LmNyZWF0ZShudWxsKSlbdS50eXBlXXx8W10sYz1TLmV2ZW50LnNwZWNpYWxbdS50eXBlXXx8e307Zm9yKHNbMF09dSx0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKylzW3RdPWFyZ3VtZW50c1t0XTtpZih1LmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWMucHJlRGlzcGF0Y2h8fCExIT09Yy5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsdSkpe2E9Uy5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsdSxsKSx0PTA7d2hpbGUoKGk9YVt0KytdKSYmIXUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7dS5jdXJyZW50VGFyZ2V0PWkuZWxlbSxuPTA7d2hpbGUoKG89aS5oYW5kbGVyc1tuKytdKSYmIXUuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSl1LnJuYW1lc3BhY2UmJiExIT09by5uYW1lc3BhY2UmJiF1LnJuYW1lc3BhY2UudGVzdChvLm5hbWVzcGFjZSl8fCh1LmhhbmRsZU9iaj1vLHUuZGF0YT1vLmRhdGEsdm9pZCAwIT09KHI9KChTLmV2ZW50LnNwZWNpYWxbby5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fG8uaGFuZGxlcikuYXBwbHkoaS5lbGVtLHMpKSYmITE9PT0odS5yZXN1bHQ9cikmJih1LnByZXZlbnREZWZhdWx0KCksdS5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBjLnBvc3REaXNwYXRjaCYmYy5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLHUpLHUucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhLHM9W10sdT10LmRlbGVnYXRlQ291bnQsbD1lLnRhcmdldDtpZih1JiZsLm5vZGVUeXBlJiYhKCJjbGljayI9PT1lLnR5cGUmJjE8PWUuYnV0dG9uKSlmb3IoO2whPT10aGlzO2w9bC5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1sLm5vZGVUeXBlJiYoImNsaWNrIiE9PWUudHlwZXx8ITAhPT1sLmRpc2FibGVkKSl7Zm9yKG89W10sYT17fSxuPTA7bjx1O24rKyl2b2lkIDA9PT1hW2k9KHI9dFtuXSkuc2VsZWN0b3IrIiAiXSYmKGFbaV09ci5uZWVkc0NvbnRleHQ/LTE8UyhpLHRoaXMpLmluZGV4KGwpOlMuZmluZChpLHRoaXMsbnVsbCxbbF0pLmxlbmd0aCksYVtpXSYmby5wdXNoKHIpO28ubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczpvfSl9cmV0dXJuIGw9dGhpcyx1PHQubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczp0LnNsaWNlKHUpfSksc30sYWRkUHJvcDpmdW5jdGlvbih0LGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShTLkV2ZW50LnByb3RvdHlwZSx0LHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6bShlKT9mdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gZSh0aGlzLm9yaWdpbmFsRXZlbnQpfTpmdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50W3RdfSxzZXQ6ZnVuY3Rpb24oZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZX0pfX0pfSxmaXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbUy5leHBhbmRvXT9lOm5ldyBTLkV2ZW50KGUpfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sY2xpY2s6e3NldHVwOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXN8fGU7cmV0dXJuIHBlLnRlc3QodC50eXBlKSYmdC5jbGljayYmQSh0LCJpbnB1dCIpJiZTZSh0LCJjbGljayIsd2UpLCExfSx0cmlnZ2VyOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXN8fGU7cmV0dXJuIHBlLnRlc3QodC50eXBlKSYmdC5jbGljayYmQSh0LCJpbnB1dCIpJiZTZSh0LCJjbGljayIpLCEwfSxfZGVmYXVsdDpmdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldDtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsImlucHV0IikmJlkuZ2V0KHQsImNsaWNrIil8fEEodCwiYSIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dm9pZCAwIT09ZS5yZXN1bHQmJmUub3JpZ2luYWxFdmVudCYmKGUub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1lLnJlc3VsdCl9fX19LFMucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oZSx0LG4pe2UucmVtb3ZlRXZlbnRMaXN0ZW5lciYmZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbil9LFMuRXZlbnQ9ZnVuY3Rpb24oZSx0KXtpZighKHRoaXMgaW5zdGFuY2VvZiBTLkV2ZW50KSlyZXR1cm4gbmV3IFMuRXZlbnQoZSx0KTtlJiZlLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1lLHRoaXMudHlwZT1lLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1lLmRlZmF1bHRQcmV2ZW50ZWQmJiExPT09ZS5yZXR1cm5WYWx1ZT93ZTpUZSx0aGlzLnRhcmdldD1lLnRhcmdldCYmMz09PWUudGFyZ2V0Lm5vZGVUeXBlP2UudGFyZ2V0LnBhcmVudE5vZGU6ZS50YXJnZXQsdGhpcy5jdXJyZW50VGFyZ2V0PWUuY3VycmVudFRhcmdldCx0aGlzLnJlbGF0ZWRUYXJnZXQ9ZS5yZWxhdGVkVGFyZ2V0KTp0aGlzLnR5cGU9ZSx0JiZTLmV4dGVuZCh0aGlzLHQpLHRoaXMudGltZVN0YW1wPWUmJmUudGltZVN0YW1wfHxEYXRlLm5vdygpLHRoaXNbUy5leHBhbmRvXT0hMH0sUy5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOlMuRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOlRlLGlzUHJvcGFnYXRpb25TdG9wcGVkOlRlLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOlRlLGlzU2ltdWxhdGVkOiExLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPXdlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXdlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD13ZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sUy5lYWNoKHthbHRLZXk6ITAsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGNoYW5nZWRUb3VjaGVzOiEwLGN0cmxLZXk6ITAsZGV0YWlsOiEwLGV2ZW50UGhhc2U6ITAsbWV0YUtleTohMCxwYWdlWDohMCxwYWdlWTohMCxzaGlmdEtleTohMCx2aWV3OiEwLCJjaGFyIjohMCxjb2RlOiEwLGNoYXJDb2RlOiEwLGtleTohMCxrZXlDb2RlOiEwLGJ1dHRvbjohMCxidXR0b25zOiEwLGNsaWVudFg6ITAsY2xpZW50WTohMCxvZmZzZXRYOiEwLG9mZnNldFk6ITAscG9pbnRlcklkOiEwLHBvaW50ZXJUeXBlOiEwLHNjcmVlblg6ITAsc2NyZWVuWTohMCx0YXJnZXRUb3VjaGVzOiEwLHRvRWxlbWVudDohMCx0b3VjaGVzOiEwLHdoaWNoOiEwfSxTLmV2ZW50LmFkZFByb3ApLFMuZWFjaCh7Zm9jdXM6ImZvY3VzaW4iLGJsdXI6ImZvY3Vzb3V0In0sZnVuY3Rpb24oZSx0KXtTLmV2ZW50LnNwZWNpYWxbZV09e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIFNlKHRoaXMsZSxDZSksITF9LHRyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gU2UodGhpcyxlKSwhMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4hMH0sZGVsZWdhdGVUeXBlOnR9fSksUy5lYWNoKHttb3VzZWVudGVyOiJtb3VzZW92ZXIiLG1vdXNlbGVhdmU6Im1vdXNlb3V0Iixwb2ludGVyZW50ZXI6InBvaW50ZXJvdmVyIixwb2ludGVybGVhdmU6InBvaW50ZXJvdXQifSxmdW5jdGlvbihlLGkpe1MuZXZlbnQuc3BlY2lhbFtlXT17ZGVsZWdhdGVUeXBlOmksYmluZFR5cGU6aSxoYW5kbGU6ZnVuY3Rpb24oZSl7dmFyIHQsbj1lLnJlbGF0ZWRUYXJnZXQscj1lLmhhbmRsZU9iajtyZXR1cm4gbiYmKG49PT10aGlzfHxTLmNvbnRhaW5zKHRoaXMsbikpfHwoZS50eXBlPXIub3JpZ1R5cGUsdD1yLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGUudHlwZT1pKSx0fX19KSxTLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIEVlKHRoaXMsZSx0LG4scil9LG9uZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gRWUodGhpcyxlLHQsbixyLDEpfSxvZmY6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk7aWYoZSYmZS5wcmV2ZW50RGVmYXVsdCYmZS5oYW5kbGVPYmopcmV0dXJuIHI9ZS5oYW5kbGVPYmosUyhlLmRlbGVnYXRlVGFyZ2V0KS5vZmYoci5uYW1lc3BhY2U/ci5vcmlnVHlwZSsiLiIrci5uYW1lc3BhY2U6ci5vcmlnVHlwZSxyLnNlbGVjdG9yLHIuaGFuZGxlciksdGhpcztpZigib2JqZWN0Ij09dHlwZW9mIGUpe2ZvcihpIGluIGUpdGhpcy5vZmYoaSx0LGVbaV0pO3JldHVybiB0aGlzfXJldHVybiExIT09dCYmImZ1bmN0aW9uIiE9dHlwZW9mIHR8fChuPXQsdD12b2lkIDApLCExPT09biYmKG49VGUpLHRoaXMuZWFjaChmdW5jdGlvbigpe1MuZXZlbnQucmVtb3ZlKHRoaXMsZSxuLHQpfSl9fSk7dmFyIGtlPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLEFlPS9jaGVja2VkXHMqKD86W149XXw9XHMqLmNoZWNrZWQuKS9pLE5lPS9eXHMqPCEoPzpcW0NEQVRBXFt8LS0pfCg/OlxdXF18LS0pPlxzKiQvZztmdW5jdGlvbiBqZShlLHQpe3JldHVybiBBKGUsInRhYmxlIikmJkEoMTEhPT10Lm5vZGVUeXBlP3Q6dC5maXJzdENoaWxkLCJ0ciIpJiZTKGUpLmNoaWxkcmVuKCJ0Ym9keSIpWzBdfHxlfWZ1bmN0aW9uIERlKGUpe3JldHVybiBlLnR5cGU9KG51bGwhPT1lLmdldEF0dHJpYnV0ZSgidHlwZSIpKSsiLyIrZS50eXBlLGV9ZnVuY3Rpb24gcWUoZSl7cmV0dXJuInRydWUvIj09PShlLnR5cGV8fCIiKS5zbGljZSgwLDUpP2UudHlwZT1lLnR5cGUuc2xpY2UoNSk6ZS5yZW1vdmVBdHRyaWJ1dGUoInR5cGUiKSxlfWZ1bmN0aW9uIExlKGUsdCl7dmFyIG4scixpLG8sYSxzO2lmKDE9PT10Lm5vZGVUeXBlKXtpZihZLmhhc0RhdGEoZSkmJihzPVkuZ2V0KGUpLmV2ZW50cykpZm9yKGkgaW4gWS5yZW1vdmUodCwiaGFuZGxlIGV2ZW50cyIpLHMpZm9yKG49MCxyPXNbaV0ubGVuZ3RoO248cjtuKyspUy5ldmVudC5hZGQodCxpLHNbaV1bbl0pO1EuaGFzRGF0YShlKSYmKG89US5hY2Nlc3MoZSksYT1TLmV4dGVuZCh7fSxvKSxRLnNldCh0LGEpKX19ZnVuY3Rpb24gSGUobixyLGksbyl7cj1nKHIpO3ZhciBlLHQsYSxzLHUsbCxjPTAsZj1uLmxlbmd0aCxwPWYtMSxkPXJbMF0saD1tKGQpO2lmKGh8fDE8ZiYmInN0cmluZyI9PXR5cGVvZiBkJiYheS5jaGVja0Nsb25lJiZBZS50ZXN0KGQpKXJldHVybiBuLmVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9bi5lcShlKTtoJiYoclswXT1kLmNhbGwodGhpcyxlLHQuaHRtbCgpKSksSGUodCxyLGksbyl9KTtpZihmJiYodD0oZT14ZShyLG5bMF0ub3duZXJEb2N1bWVudCwhMSxuLG8pKS5maXJzdENoaWxkLDE9PT1lLmNoaWxkTm9kZXMubGVuZ3RoJiYoZT10KSx0fHxvKSl7Zm9yKHM9KGE9Uy5tYXAodmUoZSwic2NyaXB0IiksRGUpKS5sZW5ndGg7YzxmO2MrKyl1PWUsYyE9PXAmJih1PVMuY2xvbmUodSwhMCwhMCkscyYmUy5tZXJnZShhLHZlKHUsInNjcmlwdCIpKSksaS5jYWxsKG5bY10sdSxjKTtpZihzKWZvcihsPWFbYS5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxTLm1hcChhLHFlKSxjPTA7YzxzO2MrKyl1PWFbY10saGUudGVzdCh1LnR5cGV8fCIiKSYmIVkuYWNjZXNzKHUsImdsb2JhbEV2YWwiKSYmUy5jb250YWlucyhsLHUpJiYodS5zcmMmJiJtb2R1bGUiIT09KHUudHlwZXx8IiIpLnRvTG93ZXJDYXNlKCk/Uy5fZXZhbFVybCYmIXUubm9Nb2R1bGUmJlMuX2V2YWxVcmwodS5zcmMse25vbmNlOnUubm9uY2V8fHUuZ2V0QXR0cmlidXRlKCJub25jZSIpfSxsKTpiKHUudGV4dENvbnRlbnQucmVwbGFjZShOZSwiIiksdSxsKSl9cmV0dXJuIG59ZnVuY3Rpb24gT2UoZSx0LG4pe2Zvcih2YXIgcixpPXQ/Uy5maWx0ZXIodCxlKTplLG89MDtudWxsIT0ocj1pW29dKTtvKyspbnx8MSE9PXIubm9kZVR5cGV8fFMuY2xlYW5EYXRhKHZlKHIpKSxyLnBhcmVudE5vZGUmJihuJiZpZShyKSYmeWUodmUociwic2NyaXB0IikpLHIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyKSk7cmV0dXJuIGV9Uy5leHRlbmQoe2h0bWxQcmVmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGNsb25lOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjPWUuY2xvbmVOb2RlKCEwKSxmPWllKGUpO2lmKCEoeS5ub0Nsb25lQ2hlY2tlZHx8MSE9PWUubm9kZVR5cGUmJjExIT09ZS5ub2RlVHlwZXx8Uy5pc1hNTERvYyhlKSkpZm9yKGE9dmUoYykscj0wLGk9KG89dmUoZSkpLmxlbmd0aDtyPGk7cisrKXM9b1tyXSx1PWFbcl0sdm9pZCAwLCJpbnB1dCI9PT0obD11Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpJiZwZS50ZXN0KHMudHlwZSk/dS5jaGVja2VkPXMuY2hlY2tlZDoiaW5wdXQiIT09bCYmInRleHRhcmVhIiE9PWx8fCh1LmRlZmF1bHRWYWx1ZT1zLmRlZmF1bHRWYWx1ZSk7aWYodClpZihuKWZvcihvPW98fHZlKGUpLGE9YXx8dmUoYykscj0wLGk9by5sZW5ndGg7cjxpO3IrKylMZShvW3JdLGFbcl0pO2Vsc2UgTGUoZSxjKTtyZXR1cm4gMDwoYT12ZShjLCJzY3JpcHQiKSkubGVuZ3RoJiZ5ZShhLCFmJiZ2ZShlLCJzY3JpcHQiKSksY30sY2xlYW5EYXRhOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuLHIsaT1TLmV2ZW50LnNwZWNpYWwsbz0wO3ZvaWQgMCE9PShuPWVbb10pO28rKylpZihWKG4pKXtpZih0PW5bWS5leHBhbmRvXSl7aWYodC5ldmVudHMpZm9yKHIgaW4gdC5ldmVudHMpaVtyXT9TLmV2ZW50LnJlbW92ZShuLHIpOlMucmVtb3ZlRXZlbnQobixyLHQuaGFuZGxlKTtuW1kuZXhwYW5kb109dm9pZCAwfW5bUS5leHBhbmRvXSYmKG5bUS5leHBhbmRvXT12b2lkIDApfX19KSxTLmZuLmV4dGVuZCh7ZGV0YWNoOmZ1bmN0aW9uKGUpe3JldHVybiBPZSh0aGlzLGUsITApfSxyZW1vdmU6ZnVuY3Rpb24oZSl7cmV0dXJuIE9lKHRoaXMsZSl9LHRleHQ6ZnVuY3Rpb24oZSl7cmV0dXJuICQodGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZT9TLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsxIT09dGhpcy5ub2RlVHlwZSYmMTEhPT10aGlzLm5vZGVUeXBlJiY5IT09dGhpcy5ub2RlVHlwZXx8KHRoaXMudGV4dENvbnRlbnQ9ZSl9KX0sbnVsbCxlLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fGplKHRoaXMsZSkuYXBwZW5kQ2hpbGQoZSl9KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiBIZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIHQ9amUodGhpcyxlKTt0Lmluc2VydEJlZm9yZShlLHQuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiBIZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiBIZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzLm5leHRTaWJsaW5nKX0pfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgZSx0PTA7bnVsbCE9KGU9dGhpc1t0XSk7dCsrKTE9PT1lLm5vZGVUeXBlJiYoUy5jbGVhbkRhdGEodmUoZSwhMSkpLGUudGV4dENvbnRlbnQ9IiIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihlLHQpe3JldHVybiBlPW51bGwhPWUmJmUsdD1udWxsPT10P2U6dCx0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBTLmNsb25lKHRoaXMsZSx0KX0pfSxodG1sOmZ1bmN0aW9uKGUpe3JldHVybiAkKHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc1swXXx8e30sbj0wLHI9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09ZSYmMT09PXQubm9kZVR5cGUpcmV0dXJuIHQuaW5uZXJIVE1MO2lmKCJzdHJpbmciPT10eXBlb2YgZSYmIWtlLnRlc3QoZSkmJiFnZVsoZGUuZXhlYyhlKXx8WyIiLCIiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2U9Uy5odG1sUHJlZmlsdGVyKGUpO3RyeXtmb3IoO248cjtuKyspMT09PSh0PXRoaXNbbl18fHt9KS5ub2RlVHlwZSYmKFMuY2xlYW5EYXRhKHZlKHQsITEpKSx0LmlubmVySFRNTD1lKTt0PTB9Y2F0Y2goZSl7fX10JiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGUpfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIG49W107cmV0dXJuIEhlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyZW50Tm9kZTtTLmluQXJyYXkodGhpcyxuKTwwJiYoUy5jbGVhbkRhdGEodmUodGhpcykpLHQmJnQucmVwbGFjZUNoaWxkKGUsdGhpcykpfSxuKX19KSxTLmVhY2goe2FwcGVuZFRvOiJhcHBlbmQiLHByZXBlbmRUbzoicHJlcGVuZCIsaW5zZXJ0QmVmb3JlOiJiZWZvcmUiLGluc2VydEFmdGVyOiJhZnRlciIscmVwbGFjZUFsbDoicmVwbGFjZVdpdGgifSxmdW5jdGlvbihlLGEpe1MuZm5bZV09ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG49W10scj1TKGUpLGk9ci5sZW5ndGgtMSxvPTA7bzw9aTtvKyspdD1vPT09aT90aGlzOnRoaXMuY2xvbmUoITApLFMocltvXSlbYV0odCksdS5hcHBseShuLHQuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhuKX19KTt2YXIgUGU9bmV3IFJlZ0V4cCgiXigiK2VlKyIpKD8hcHgpW2EteiVdKyQiLCJpIiksUmU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O3JldHVybiB0JiZ0Lm9wZW5lcnx8KHQ9QyksdC5nZXRDb21wdXRlZFN0eWxlKGUpfSxNZT1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXt9O2ZvcihpIGluIHQpb1tpXT1lLnN0eWxlW2ldLGUuc3R5bGVbaV09dFtpXTtmb3IoaSBpbiByPW4uY2FsbChlKSx0KWUuc3R5bGVbaV09b1tpXTtyZXR1cm4gcn0sSWU9bmV3IFJlZ0V4cChuZS5qb2luKCJ8IiksImkiKTtmdW5jdGlvbiBXZShlLHQsbil7dmFyIHIsaSxvLGEscz1lLnN0eWxlO3JldHVybihuPW58fFJlKGUpKSYmKCIiIT09KGE9bi5nZXRQcm9wZXJ0eVZhbHVlKHQpfHxuW3RdKXx8aWUoZSl8fChhPVMuc3R5bGUoZSx0KSksIXkucGl4ZWxCb3hTdHlsZXMoKSYmUGUudGVzdChhKSYmSWUudGVzdCh0KSYmKHI9cy53aWR0aCxpPXMubWluV2lkdGgsbz1zLm1heFdpZHRoLHMubWluV2lkdGg9cy5tYXhXaWR0aD1zLndpZHRoPWEsYT1uLndpZHRoLHMud2lkdGg9cixzLm1pbldpZHRoPWkscy5tYXhXaWR0aD1vKSksdm9pZCAwIT09YT9hKyIiOmF9ZnVuY3Rpb24gRmUoZSx0KXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7aWYoIWUoKSlyZXR1cm4odGhpcy5nZXQ9dCkuYXBwbHkodGhpcyxhcmd1bWVudHMpO2RlbGV0ZSB0aGlzLmdldH19fSFmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtpZihsKXt1LnN0eWxlLmNzc1RleHQ9InBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHg7d2lkdGg6NjBweDttYXJnaW4tdG9wOjFweDtwYWRkaW5nOjA7Ym9yZGVyOjAiLGwuc3R5bGUuY3NzVGV4dD0icG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6c2Nyb2xsO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7d2lkdGg6NjAlO3RvcDoxJSIscmUuYXBwZW5kQ2hpbGQodSkuYXBwZW5kQ2hpbGQobCk7dmFyIGU9Qy5nZXRDb21wdXRlZFN0eWxlKGwpO249IjElIiE9PWUudG9wLHM9MTI9PT10KGUubWFyZ2luTGVmdCksbC5zdHlsZS5yaWdodD0iNjAlIixvPTM2PT09dChlLnJpZ2h0KSxyPTM2PT09dChlLndpZHRoKSxsLnN0eWxlLnBvc2l0aW9uPSJhYnNvbHV0ZSIsaT0xMj09PXQobC5vZmZzZXRXaWR0aC8zKSxyZS5yZW1vdmVDaGlsZCh1KSxsPW51bGx9fWZ1bmN0aW9uIHQoZSl7cmV0dXJuIE1hdGgucm91bmQocGFyc2VGbG9hdChlKSl9dmFyIG4scixpLG8sYSxzLHU9RS5jcmVhdGVFbGVtZW50KCJkaXYiKSxsPUUuY3JlYXRlRWxlbWVudCgiZGl2Iik7bC5zdHlsZSYmKGwuc3R5bGUuYmFja2dyb3VuZENsaXA9ImNvbnRlbnQtYm94IixsLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9IiIseS5jbGVhckNsb25lU3R5bGU9ImNvbnRlbnQtYm94Ij09PWwuc3R5bGUuYmFja2dyb3VuZENsaXAsUy5leHRlbmQoeSx7Ym94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLHJ9LHBpeGVsQm94U3R5bGVzOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxvfSxwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxufSxyZWxpYWJsZU1hcmdpbkxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLHN9LHNjcm9sbGJveFNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLGl9LHJlbGlhYmxlVHJEaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGUsdCxuLHI7cmV0dXJuIG51bGw9PWEmJihlPUUuY3JlYXRlRWxlbWVudCgidGFibGUiKSx0PUUuY3JlYXRlRWxlbWVudCgidHIiKSxuPUUuY3JlYXRlRWxlbWVudCgiZGl2IiksZS5zdHlsZS5jc3NUZXh0PSJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O2JvcmRlci1jb2xsYXBzZTpzZXBhcmF0ZSIsdC5zdHlsZS5jc3NUZXh0PSJib3JkZXI6MXB4IHNvbGlkIix0LnN0eWxlLmhlaWdodD0iMXB4IixuLnN0eWxlLmhlaWdodD0iOXB4IixuLnN0eWxlLmRpc3BsYXk9ImJsb2NrIixyZS5hcHBlbmRDaGlsZChlKS5hcHBlbmRDaGlsZCh0KS5hcHBlbmRDaGlsZChuKSxyPUMuZ2V0Q29tcHV0ZWRTdHlsZSh0KSxhPXBhcnNlSW50KHIuaGVpZ2h0LDEwKStwYXJzZUludChyLmJvcmRlclRvcFdpZHRoLDEwKStwYXJzZUludChyLmJvcmRlckJvdHRvbVdpZHRoLDEwKT09PXQub2Zmc2V0SGVpZ2h0LHJlLnJlbW92ZUNoaWxkKGUpKSxhfX0pKX0oKTt2YXIgQmU9WyJXZWJraXQiLCJNb3oiLCJtcyJdLCRlPUUuY3JlYXRlRWxlbWVudCgiZGl2Iikuc3R5bGUsX2U9e307ZnVuY3Rpb24gemUoZSl7dmFyIHQ9Uy5jc3NQcm9wc1tlXXx8X2VbZV07cmV0dXJuIHR8fChlIGluICRlP2U6X2VbZV09ZnVuY3Rpb24oZSl7dmFyIHQ9ZVswXS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSksbj1CZS5sZW5ndGg7d2hpbGUobi0tKWlmKChlPUJlW25dK3QpaW4gJGUpcmV0dXJuIGV9KGUpfHxlKX12YXIgVWU9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFhlPS9eLS0vLFZlPXtwb3NpdGlvbjoiYWJzb2x1dGUiLHZpc2liaWxpdHk6ImhpZGRlbiIsZGlzcGxheToiYmxvY2sifSxHZT17bGV0dGVyU3BhY2luZzoiMCIsZm9udFdlaWdodDoiNDAwIn07ZnVuY3Rpb24gWWUoZSx0LG4pe3ZhciByPXRlLmV4ZWModCk7cmV0dXJuIHI/TWF0aC5tYXgoMCxyWzJdLShufHwwKSkrKHJbM118fCJweCIpOnR9ZnVuY3Rpb24gUWUoZSx0LG4scixpLG8pe3ZhciBhPSJ3aWR0aCI9PT10PzE6MCxzPTAsdT0wO2lmKG49PT0ocj8iYm9yZGVyIjoiY29udGVudCIpKXJldHVybiAwO2Zvcig7YTw0O2ErPTIpIm1hcmdpbiI9PT1uJiYodSs9Uy5jc3MoZSxuK25lW2FdLCEwLGkpKSxyPygiY29udGVudCI9PT1uJiYodS09Uy5jc3MoZSwicGFkZGluZyIrbmVbYV0sITAsaSkpLCJtYXJnaW4iIT09biYmKHUtPVMuY3NzKGUsImJvcmRlciIrbmVbYV0rIldpZHRoIiwhMCxpKSkpOih1Kz1TLmNzcyhlLCJwYWRkaW5nIituZVthXSwhMCxpKSwicGFkZGluZyIhPT1uP3UrPVMuY3NzKGUsImJvcmRlciIrbmVbYV0rIldpZHRoIiwhMCxpKTpzKz1TLmNzcyhlLCJib3JkZXIiK25lW2FdKyJXaWR0aCIsITAsaSkpO3JldHVybiFyJiYwPD1vJiYodSs9TWF0aC5tYXgoMCxNYXRoLmNlaWwoZVsib2Zmc2V0Iit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKV0tby11LXMtLjUpKXx8MCksdX1mdW5jdGlvbiBKZShlLHQsbil7dmFyIHI9UmUoZSksaT0oIXkuYm94U2l6aW5nUmVsaWFibGUoKXx8bikmJiJib3JkZXItYm94Ij09PVMuY3NzKGUsImJveFNpemluZyIsITEsciksbz1pLGE9V2UoZSx0LHIpLHM9Im9mZnNldCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSk7aWYoUGUudGVzdChhKSl7aWYoIW4pcmV0dXJuIGE7YT0iYXV0byJ9cmV0dXJuKCF5LmJveFNpemluZ1JlbGlhYmxlKCkmJml8fCF5LnJlbGlhYmxlVHJEaW1lbnNpb25zKCkmJkEoZSwidHIiKXx8ImF1dG8iPT09YXx8IXBhcnNlRmxvYXQoYSkmJiJpbmxpbmUiPT09Uy5jc3MoZSwiZGlzcGxheSIsITEscikpJiZlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiYoaT0iYm9yZGVyLWJveCI9PT1TLmNzcyhlLCJib3hTaXppbmciLCExLHIpLChvPXMgaW4gZSkmJihhPWVbc10pKSwoYT1wYXJzZUZsb2F0KGEpfHwwKStRZShlLHQsbnx8KGk/ImJvcmRlciI6ImNvbnRlbnQiKSxvLHIsYSkrInB4In1mdW5jdGlvbiBLZShlLHQsbixyLGkpe3JldHVybiBuZXcgS2UucHJvdG90eXBlLmluaXQoZSx0LG4scixpKX1TLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihlLHQpe2lmKHQpe3ZhciBuPVdlKGUsIm9wYWNpdHkiKTtyZXR1cm4iIj09PW4/IjEiOm59fX19LGNzc051bWJlcjp7YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsY29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGdyaWRBcmVhOiEwLGdyaWRDb2x1bW46ITAsZ3JpZENvbHVtbkVuZDohMCxncmlkQ29sdW1uU3RhcnQ6ITAsZ3JpZFJvdzohMCxncmlkUm93RW5kOiEwLGdyaWRSb3dTdGFydDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOnt9LHN0eWxlOmZ1bmN0aW9uKGUsdCxuLHIpe2lmKGUmJjMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmZS5zdHlsZSl7dmFyIGksbyxhLHM9WCh0KSx1PVhlLnRlc3QodCksbD1lLnN0eWxlO2lmKHV8fCh0PXplKHMpKSxhPVMuY3NzSG9va3NbdF18fFMuY3NzSG9va3Nbc10sdm9pZCAwPT09bilyZXR1cm4gYSYmImdldCJpbiBhJiZ2b2lkIDAhPT0oaT1hLmdldChlLCExLHIpKT9pOmxbdF07InN0cmluZyI9PT0obz10eXBlb2YgbikmJihpPXRlLmV4ZWMobikpJiZpWzFdJiYobj1zZShlLHQsaSksbz0ibnVtYmVyIiksbnVsbCE9biYmbj09biYmKCJudW1iZXIiIT09b3x8dXx8KG4rPWkmJmlbM118fChTLmNzc051bWJlcltzXT8iIjoicHgiKSkseS5jbGVhckNsb25lU3R5bGV8fCIiIT09bnx8MCE9PXQuaW5kZXhPZigiYmFja2dyb3VuZCIpfHwobFt0XT0iaW5oZXJpdCIpLGEmJiJzZXQiaW4gYSYmdm9pZCAwPT09KG49YS5zZXQoZSxuLHIpKXx8KHU/bC5zZXRQcm9wZXJ0eSh0LG4pOmxbdF09bikpfX0sY3NzOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzPVgodCk7cmV0dXJuIFhlLnRlc3QodCl8fCh0PXplKHMpKSwoYT1TLmNzc0hvb2tzW3RdfHxTLmNzc0hvb2tzW3NdKSYmImdldCJpbiBhJiYoaT1hLmdldChlLCEwLG4pKSx2b2lkIDA9PT1pJiYoaT1XZShlLHQscikpLCJub3JtYWwiPT09aSYmdCBpbiBHZSYmKGk9R2VbdF0pLCIiPT09bnx8bj8obz1wYXJzZUZsb2F0KGkpLCEwPT09bnx8aXNGaW5pdGUobyk/b3x8MDppKTppfX0pLFMuZWFjaChbImhlaWdodCIsIndpZHRoIl0sZnVuY3Rpb24oZSx1KXtTLmNzc0hvb2tzW3VdPXtnZXQ6ZnVuY3Rpb24oZSx0LG4pe2lmKHQpcmV0dXJuIVVlLnRlc3QoUy5jc3MoZSwiZGlzcGxheSIpKXx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aD9KZShlLHUsbik6TWUoZSxWZSxmdW5jdGlvbigpe3JldHVybiBKZShlLHUsbil9KX0sc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPVJlKGUpLG89IXkuc2Nyb2xsYm94U2l6ZSgpJiYiYWJzb2x1dGUiPT09aS5wb3NpdGlvbixhPShvfHxuKSYmImJvcmRlci1ib3giPT09Uy5jc3MoZSwiYm94U2l6aW5nIiwhMSxpKSxzPW4/UWUoZSx1LG4sYSxpKTowO3JldHVybiBhJiZvJiYocy09TWF0aC5jZWlsKGVbIm9mZnNldCIrdVswXS50b1VwcGVyQ2FzZSgpK3Uuc2xpY2UoMSldLXBhcnNlRmxvYXQoaVt1XSktUWUoZSx1LCJib3JkZXIiLCExLGkpLS41KSkscyYmKHI9dGUuZXhlYyh0KSkmJiJweCIhPT0oclszXXx8InB4IikmJihlLnN0eWxlW3VdPXQsdD1TLmNzcyhlLHUpKSxZZSgwLHQscyl9fX0pLFMuY3NzSG9va3MubWFyZ2luTGVmdD1GZSh5LnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihlLHQpe2lmKHQpcmV0dXJuKHBhcnNlRmxvYXQoV2UoZSwibWFyZ2luTGVmdCIpKXx8ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LU1lKGUse21hcmdpbkxlZnQ6MH0sZnVuY3Rpb24oKXtyZXR1cm4gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fSkpKyJweCJ9KSxTLmVhY2goe21hcmdpbjoiIixwYWRkaW5nOiIiLGJvcmRlcjoiV2lkdGgifSxmdW5jdGlvbihpLG8pe1MuY3NzSG9va3NbaStvXT17ZXhwYW5kOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49e30scj0ic3RyaW5nIj09dHlwZW9mIGU/ZS5zcGxpdCgiICIpOltlXTt0PDQ7dCsrKW5baStuZVt0XStvXT1yW3RdfHxyW3QtMl18fHJbMF07cmV0dXJuIG59fSwibWFyZ2luIiE9PWkmJihTLmNzc0hvb2tzW2krb10uc2V0PVllKX0pLFMuZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gJCh0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89e30sYT0wO2lmKEFycmF5LmlzQXJyYXkodCkpe2ZvcihyPVJlKGUpLGk9dC5sZW5ndGg7YTxpO2ErKylvW3RbYV1dPVMuY3NzKGUsdFthXSwhMSxyKTtyZXR1cm4gb31yZXR1cm4gdm9pZCAwIT09bj9TLnN0eWxlKGUsdCxuKTpTLmNzcyhlLHQpfSxlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX19KSwoKFMuVHdlZW49S2UpLnByb3RvdHlwZT17Y29uc3RydWN0b3I6S2UsaW5pdDpmdW5jdGlvbihlLHQsbixyLGksbyl7dGhpcy5lbGVtPWUsdGhpcy5wcm9wPW4sdGhpcy5lYXNpbmc9aXx8Uy5lYXNpbmcuX2RlZmF1bHQsdGhpcy5vcHRpb25zPXQsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPXIsdGhpcy51bml0PW98fChTLmNzc051bWJlcltuXT8iIjoicHgiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGU9S2UucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGUmJmUuZ2V0P2UuZ2V0KHRoaXMpOktlLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihlKXt2YXIgdCxuPUtlLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9dD1TLmVhc2luZ1t0aGlzLmVhc2luZ10oZSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qZSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz10PWUsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKnQrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksbiYmbi5zZXQ/bi5zZXQodGhpcyk6S2UucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0pLmluaXQucHJvdG90eXBlPUtlLnByb3RvdHlwZSwoS2UucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiAxIT09ZS5lbGVtLm5vZGVUeXBlfHxudWxsIT1lLmVsZW1bZS5wcm9wXSYmbnVsbD09ZS5lbGVtLnN0eWxlW2UucHJvcF0/ZS5lbGVtW2UucHJvcF06KHQ9Uy5jc3MoZS5lbGVtLGUucHJvcCwiIikpJiYiYXV0byIhPT10P3Q6MH0sc2V0OmZ1bmN0aW9uKGUpe1MuZnguc3RlcFtlLnByb3BdP1MuZnguc3RlcFtlLnByb3BdKGUpOjEhPT1lLmVsZW0ubm9kZVR5cGV8fCFTLmNzc0hvb2tzW2UucHJvcF0mJm51bGw9PWUuZWxlbS5zdHlsZVt6ZShlLnByb3ApXT9lLmVsZW1bZS5wcm9wXT1lLm5vdzpTLnN0eWxlKGUuZWxlbSxlLnByb3AsZS5ub3crZS51bml0KX19fSkuc2Nyb2xsVG9wPUtlLnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oZSl7ZS5lbGVtLm5vZGVUeXBlJiZlLmVsZW0ucGFyZW50Tm9kZSYmKGUuZWxlbVtlLnByb3BdPWUubm93KX19LFMuZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LHN3aW5nOmZ1bmN0aW9uKGUpe3JldHVybi41LU1hdGguY29zKGUqTWF0aC5QSSkvMn0sX2RlZmF1bHQ6InN3aW5nIn0sUy5meD1LZS5wcm90b3R5cGUuaW5pdCxTLmZ4LnN0ZXA9e307dmFyIFplLGV0LHR0LG50LHJ0PS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxpdD0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIG90KCl7ZXQmJighMT09PUUuaGlkZGVuJiZDLnJlcXVlc3RBbmltYXRpb25GcmFtZT9DLnJlcXVlc3RBbmltYXRpb25GcmFtZShvdCk6Qy5zZXRUaW1lb3V0KG90LFMuZnguaW50ZXJ2YWwpLFMuZngudGljaygpKX1mdW5jdGlvbiBhdCgpe3JldHVybiBDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtaZT12b2lkIDB9KSxaZT1EYXRlLm5vdygpfWZ1bmN0aW9uIHN0KGUsdCl7dmFyIG4scj0wLGk9e2hlaWdodDplfTtmb3IodD10PzE6MDtyPDQ7cis9Mi10KWlbIm1hcmdpbiIrKG49bmVbcl0pXT1pWyJwYWRkaW5nIituXT1lO3JldHVybiB0JiYoaS5vcGFjaXR5PWkud2lkdGg9ZSksaX1mdW5jdGlvbiB1dChlLHQsbil7Zm9yKHZhciByLGk9KGx0LnR3ZWVuZXJzW3RdfHxbXSkuY29uY2F0KGx0LnR3ZWVuZXJzWyIqIl0pLG89MCxhPWkubGVuZ3RoO288YTtvKyspaWYocj1pW29dLmNhbGwobix0LGUpKXJldHVybiByfWZ1bmN0aW9uIGx0KG8sZSx0KXt2YXIgbixhLHI9MCxpPWx0LnByZWZpbHRlcnMubGVuZ3RoLHM9Uy5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSB1LmVsZW19KSx1PWZ1bmN0aW9uKCl7aWYoYSlyZXR1cm4hMTtmb3IodmFyIGU9WmV8fGF0KCksdD1NYXRoLm1heCgwLGwuc3RhcnRUaW1lK2wuZHVyYXRpb24tZSksbj0xLSh0L2wuZHVyYXRpb258fDApLHI9MCxpPWwudHdlZW5zLmxlbmd0aDtyPGk7cisrKWwudHdlZW5zW3JdLnJ1bihuKTtyZXR1cm4gcy5ub3RpZnlXaXRoKG8sW2wsbix0XSksbjwxJiZpP3Q6KGl8fHMubm90aWZ5V2l0aChvLFtsLDEsMF0pLHMucmVzb2x2ZVdpdGgobyxbbF0pLCExKX0sbD1zLnByb21pc2Uoe2VsZW06byxwcm9wczpTLmV4dGVuZCh7fSxlKSxvcHRzOlMuZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9LGVhc2luZzpTLmVhc2luZy5fZGVmYXVsdH0sdCksb3JpZ2luYWxQcm9wZXJ0aWVzOmUsb3JpZ2luYWxPcHRpb25zOnQsc3RhcnRUaW1lOlplfHxhdCgpLGR1cmF0aW9uOnQuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKGUsdCl7dmFyIG49Uy5Ud2VlbihvLGwub3B0cyxlLHQsbC5vcHRzLnNwZWNpYWxFYXNpbmdbZV18fGwub3B0cy5lYXNpbmcpO3JldHVybiBsLnR3ZWVucy5wdXNoKG4pLG59LHN0b3A6ZnVuY3Rpb24oZSl7dmFyIHQ9MCxuPWU/bC50d2VlbnMubGVuZ3RoOjA7aWYoYSlyZXR1cm4gdGhpcztmb3IoYT0hMDt0PG47dCsrKWwudHdlZW5zW3RdLnJ1bigxKTtyZXR1cm4gZT8ocy5ub3RpZnlXaXRoKG8sW2wsMSwwXSkscy5yZXNvbHZlV2l0aChvLFtsLGVdKSk6cy5yZWplY3RXaXRoKG8sW2wsZV0pLHRoaXN9fSksYz1sLnByb3BzO2ZvcighZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhO2ZvcihuIGluIGUpaWYoaT10W3I9WChuKV0sbz1lW25dLEFycmF5LmlzQXJyYXkobykmJihpPW9bMV0sbz1lW25dPW9bMF0pLG4hPT1yJiYoZVtyXT1vLGRlbGV0ZSBlW25dKSwoYT1TLmNzc0hvb2tzW3JdKSYmImV4cGFuZCJpbiBhKWZvcihuIGluIG89YS5leHBhbmQobyksZGVsZXRlIGVbcl0sbyluIGluIGV8fChlW25dPW9bbl0sdFtuXT1pKTtlbHNlIHRbcl09aX0oYyxsLm9wdHMuc3BlY2lhbEVhc2luZyk7cjxpO3IrKylpZihuPWx0LnByZWZpbHRlcnNbcl0uY2FsbChsLG8sYyxsLm9wdHMpKXJldHVybiBtKG4uc3RvcCkmJihTLl9xdWV1ZUhvb2tzKGwuZWxlbSxsLm9wdHMucXVldWUpLnN0b3A9bi5zdG9wLmJpbmQobikpLG47cmV0dXJuIFMubWFwKGMsdXQsbCksbShsLm9wdHMuc3RhcnQpJiZsLm9wdHMuc3RhcnQuY2FsbChvLGwpLGwucHJvZ3Jlc3MobC5vcHRzLnByb2dyZXNzKS5kb25lKGwub3B0cy5kb25lLGwub3B0cy5jb21wbGV0ZSkuZmFpbChsLm9wdHMuZmFpbCkuYWx3YXlzKGwub3B0cy5hbHdheXMpLFMuZngudGltZXIoUy5leHRlbmQodSx7ZWxlbTpvLGFuaW06bCxxdWV1ZTpsLm9wdHMucXVldWV9KSksbH1TLkFuaW1hdGlvbj1TLmV4dGVuZChsdCx7dHdlZW5lcnM6eyIqIjpbZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLmNyZWF0ZVR3ZWVuKGUsdCk7cmV0dXJuIHNlKG4uZWxlbSxlLHRlLmV4ZWModCksbiksbn1dfSx0d2VlbmVyOmZ1bmN0aW9uKGUsdCl7bShlKT8odD1lLGU9WyIqIl0pOmU9ZS5tYXRjaChQKTtmb3IodmFyIG4scj0wLGk9ZS5sZW5ndGg7cjxpO3IrKyluPWVbcl0sbHQudHdlZW5lcnNbbl09bHQudHdlZW5lcnNbbl18fFtdLGx0LnR3ZWVuZXJzW25dLnVuc2hpZnQodCl9LHByZWZpbHRlcnM6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjLGY9IndpZHRoImluIHR8fCJoZWlnaHQiaW4gdCxwPXRoaXMsZD17fSxoPWUuc3R5bGUsZz1lLm5vZGVUeXBlJiZhZShlKSx2PVkuZ2V0KGUsImZ4c2hvdyIpO2ZvcihyIGluIG4ucXVldWV8fChudWxsPT0oYT1TLl9xdWV1ZUhvb2tzKGUsImZ4IikpLnVucXVldWVkJiYoYS51bnF1ZXVlZD0wLHM9YS5lbXB0eS5maXJlLGEuZW1wdHkuZmlyZT1mdW5jdGlvbigpe2EudW5xdWV1ZWR8fHMoKX0pLGEudW5xdWV1ZWQrKyxwLmFsd2F5cyhmdW5jdGlvbigpe3AuYWx3YXlzKGZ1bmN0aW9uKCl7YS51bnF1ZXVlZC0tLFMucXVldWUoZSwiZngiKS5sZW5ndGh8fGEuZW1wdHkuZmlyZSgpfSl9KSksdClpZihpPXRbcl0scnQudGVzdChpKSl7aWYoZGVsZXRlIHRbcl0sbz1vfHwidG9nZ2xlIj09PWksaT09PShnPyJoaWRlIjoic2hvdyIpKXtpZigic2hvdyIhPT1pfHwhdnx8dm9pZCAwPT09dltyXSljb250aW51ZTtnPSEwfWRbcl09diYmdltyXXx8Uy5zdHlsZShlLHIpfWlmKCh1PSFTLmlzRW1wdHlPYmplY3QodCkpfHwhUy5pc0VtcHR5T2JqZWN0KGQpKWZvcihyIGluIGYmJjE9PT1lLm5vZGVUeXBlJiYobi5vdmVyZmxvdz1baC5vdmVyZmxvdyxoLm92ZXJmbG93WCxoLm92ZXJmbG93WV0sbnVsbD09KGw9diYmdi5kaXNwbGF5KSYmKGw9WS5nZXQoZSwiZGlzcGxheSIpKSwibm9uZSI9PT0oYz1TLmNzcyhlLCJkaXNwbGF5IikpJiYobD9jPWw6KGxlKFtlXSwhMCksbD1lLnN0eWxlLmRpc3BsYXl8fGwsYz1TLmNzcyhlLCJkaXNwbGF5IiksbGUoW2VdKSkpLCgiaW5saW5lIj09PWN8fCJpbmxpbmUtYmxvY2siPT09YyYmbnVsbCE9bCkmJiJub25lIj09PVMuY3NzKGUsImZsb2F0IikmJih1fHwocC5kb25lKGZ1bmN0aW9uKCl7aC5kaXNwbGF5PWx9KSxudWxsPT1sJiYoYz1oLmRpc3BsYXksbD0ibm9uZSI9PT1jPyIiOmMpKSxoLmRpc3BsYXk9ImlubGluZS1ibG9jayIpKSxuLm92ZXJmbG93JiYoaC5vdmVyZmxvdz0iaGlkZGVuIixwLmFsd2F5cyhmdW5jdGlvbigpe2gub3ZlcmZsb3c9bi5vdmVyZmxvd1swXSxoLm92ZXJmbG93WD1uLm92ZXJmbG93WzFdLGgub3ZlcmZsb3dZPW4ub3ZlcmZsb3dbMl19KSksdT0hMSxkKXV8fCh2PyJoaWRkZW4iaW4gdiYmKGc9di5oaWRkZW4pOnY9WS5hY2Nlc3MoZSwiZnhzaG93Iix7ZGlzcGxheTpsfSksbyYmKHYuaGlkZGVuPSFnKSxnJiZsZShbZV0sITApLHAuZG9uZShmdW5jdGlvbigpe2ZvcihyIGluIGd8fGxlKFtlXSksWS5yZW1vdmUoZSwiZnhzaG93IiksZClTLnN0eWxlKGUscixkW3JdKX0pKSx1PXV0KGc/dltyXTowLHIscCksciBpbiB2fHwodltyXT11LnN0YXJ0LGcmJih1LmVuZD11LnN0YXJ0LHUuc3RhcnQ9MCkpfV0scHJlZmlsdGVyOmZ1bmN0aW9uKGUsdCl7dD9sdC5wcmVmaWx0ZXJzLnVuc2hpZnQoZSk6bHQucHJlZmlsdGVycy5wdXNoKGUpfX0pLFMuc3BlZWQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPWUmJiJvYmplY3QiPT10eXBlb2YgZT9TLmV4dGVuZCh7fSxlKTp7Y29tcGxldGU6bnx8IW4mJnR8fG0oZSkmJmUsZHVyYXRpb246ZSxlYXNpbmc6biYmdHx8dCYmIW0odCkmJnR9O3JldHVybiBTLmZ4Lm9mZj9yLmR1cmF0aW9uPTA6Im51bWJlciIhPXR5cGVvZiByLmR1cmF0aW9uJiYoci5kdXJhdGlvbiBpbiBTLmZ4LnNwZWVkcz9yLmR1cmF0aW9uPVMuZnguc3BlZWRzW3IuZHVyYXRpb25dOnIuZHVyYXRpb249Uy5meC5zcGVlZHMuX2RlZmF1bHQpLG51bGwhPXIucXVldWUmJiEwIT09ci5xdWV1ZXx8KHIucXVldWU9ImZ4Iiksci5vbGQ9ci5jb21wbGV0ZSxyLmNvbXBsZXRlPWZ1bmN0aW9uKCl7bShyLm9sZCkmJnIub2xkLmNhbGwodGhpcyksci5xdWV1ZSYmUy5kZXF1ZXVlKHRoaXMsci5xdWV1ZSl9LHJ9LFMuZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMuZmlsdGVyKGFlKS5jc3MoIm9wYWNpdHkiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OnR9LGUsbixyKX0sYW5pbWF0ZTpmdW5jdGlvbih0LGUsbixyKXt2YXIgaT1TLmlzRW1wdHlPYmplY3QodCksbz1TLnNwZWVkKGUsbixyKSxhPWZ1bmN0aW9uKCl7dmFyIGU9bHQodGhpcyxTLmV4dGVuZCh7fSx0KSxvKTsoaXx8WS5nZXQodGhpcywiZmluaXNoIikpJiZlLnN0b3AoITApfTtyZXR1cm4gYS5maW5pc2g9YSxpfHwhMT09PW8ucXVldWU/dGhpcy5lYWNoKGEpOnRoaXMucXVldWUoby5xdWV1ZSxhKX0sc3RvcDpmdW5jdGlvbihpLGUsbyl7dmFyIGE9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdG9wO2RlbGV0ZSBlLnN0b3AsdChvKX07cmV0dXJuInN0cmluZyIhPXR5cGVvZiBpJiYobz1lLGU9aSxpPXZvaWQgMCksZSYmdGhpcy5xdWV1ZShpfHwiZngiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT0hMCx0PW51bGwhPWkmJmkrInF1ZXVlSG9va3MiLG49Uy50aW1lcnMscj1ZLmdldCh0aGlzKTtpZih0KXJbdF0mJnJbdF0uc3RvcCYmYShyW3RdKTtlbHNlIGZvcih0IGluIHIpclt0XSYmclt0XS5zdG9wJiZpdC50ZXN0KHQpJiZhKHJbdF0pO2Zvcih0PW4ubGVuZ3RoO3QtLTspblt0XS5lbGVtIT09dGhpc3x8bnVsbCE9aSYmblt0XS5xdWV1ZSE9PWl8fChuW3RdLmFuaW0uc3RvcChvKSxlPSExLG4uc3BsaWNlKHQsMSkpOyFlJiZvfHxTLmRlcXVldWUodGhpcyxpKX0pfSxmaW5pc2g6ZnVuY3Rpb24oYSl7cmV0dXJuITEhPT1hJiYoYT1hfHwiZngiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZSx0PVkuZ2V0KHRoaXMpLG49dFthKyJxdWV1ZSJdLHI9dFthKyJxdWV1ZUhvb2tzIl0saT1TLnRpbWVycyxvPW4/bi5sZW5ndGg6MDtmb3IodC5maW5pc2g9ITAsUy5xdWV1ZSh0aGlzLGEsW10pLHImJnIuc3RvcCYmci5zdG9wLmNhbGwodGhpcywhMCksZT1pLmxlbmd0aDtlLS07KWlbZV0uZWxlbT09PXRoaXMmJmlbZV0ucXVldWU9PT1hJiYoaVtlXS5hbmltLnN0b3AoITApLGkuc3BsaWNlKGUsMSkpO2ZvcihlPTA7ZTxvO2UrKyluW2VdJiZuW2VdLmZpbmlzaCYmbltlXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgdC5maW5pc2h9KX19KSxTLmVhY2goWyJ0b2dnbGUiLCJzaG93IiwiaGlkZSJdLGZ1bmN0aW9uKGUscil7dmFyIGk9Uy5mbltyXTtTLmZuW3JdPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbnVsbD09ZXx8ImJvb2xlYW4iPT10eXBlb2YgZT9pLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUoc3QociwhMCksZSx0LG4pfX0pLFMuZWFjaCh7c2xpZGVEb3duOnN0KCJzaG93Iiksc2xpZGVVcDpzdCgiaGlkZSIpLHNsaWRlVG9nZ2xlOnN0KCJ0b2dnbGUiKSxmYWRlSW46e29wYWNpdHk6InNob3cifSxmYWRlT3V0OntvcGFjaXR5OiJoaWRlIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eToidG9nZ2xlIn19LGZ1bmN0aW9uKGUscil7Uy5mbltlXT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIHRoaXMuYW5pbWF0ZShyLGUsdCxuKX19KSxTLnRpbWVycz1bXSxTLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgZSx0PTAsbj1TLnRpbWVycztmb3IoWmU9RGF0ZS5ub3coKTt0PG4ubGVuZ3RoO3QrKykoZT1uW3RdKSgpfHxuW3RdIT09ZXx8bi5zcGxpY2UodC0tLDEpO24ubGVuZ3RofHxTLmZ4LnN0b3AoKSxaZT12b2lkIDB9LFMuZngudGltZXI9ZnVuY3Rpb24oZSl7Uy50aW1lcnMucHVzaChlKSxTLmZ4LnN0YXJ0KCl9LFMuZnguaW50ZXJ2YWw9MTMsUy5meC5zdGFydD1mdW5jdGlvbigpe2V0fHwoZXQ9ITAsb3QoKSl9LFMuZnguc3RvcD1mdW5jdGlvbigpe2V0PW51bGx9LFMuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LFMuZm4uZGVsYXk9ZnVuY3Rpb24ocixlKXtyZXR1cm4gcj1TLmZ4JiZTLmZ4LnNwZWVkc1tyXXx8cixlPWV8fCJmeCIsdGhpcy5xdWV1ZShlLGZ1bmN0aW9uKGUsdCl7dmFyIG49Qy5zZXRUaW1lb3V0KGUscik7dC5zdG9wPWZ1bmN0aW9uKCl7Qy5jbGVhclRpbWVvdXQobil9fSl9LHR0PUUuY3JlYXRlRWxlbWVudCgiaW5wdXQiKSxudD1FLmNyZWF0ZUVsZW1lbnQoInNlbGVjdCIpLmFwcGVuZENoaWxkKEUuY3JlYXRlRWxlbWVudCgib3B0aW9uIikpLHR0LnR5cGU9ImNoZWNrYm94Iix5LmNoZWNrT249IiIhPT10dC52YWx1ZSx5Lm9wdFNlbGVjdGVkPW50LnNlbGVjdGVkLCh0dD1FLmNyZWF0ZUVsZW1lbnQoImlucHV0IikpLnZhbHVlPSJ0Iix0dC50eXBlPSJyYWRpbyIseS5yYWRpb1ZhbHVlPSJ0Ij09PXR0LnZhbHVlO3ZhciBjdCxmdD1TLmV4cHIuYXR0ckhhbmRsZTtTLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQpe3JldHVybiAkKHRoaXMsUy5hdHRyLGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtTLnJlbW92ZUF0dHIodGhpcyxlKX0pfX0pLFMuZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89ZS5ub2RlVHlwZTtpZigzIT09byYmOCE9PW8mJjIhPT1vKXJldHVybiJ1bmRlZmluZWQiPT10eXBlb2YgZS5nZXRBdHRyaWJ1dGU/Uy5wcm9wKGUsdCxuKTooMT09PW8mJlMuaXNYTUxEb2MoZSl8fChpPVMuYXR0ckhvb2tzW3QudG9Mb3dlckNhc2UoKV18fChTLmV4cHIubWF0Y2guYm9vbC50ZXN0KHQpP2N0OnZvaWQgMCkpLHZvaWQgMCE9PW4/bnVsbD09PW4/dm9pZCBTLnJlbW92ZUF0dHIoZSx0KTppJiYic2V0ImluIGkmJnZvaWQgMCE9PShyPWkuc2V0KGUsbix0KSk/cjooZS5zZXRBdHRyaWJ1dGUodCxuKyIiKSxuKTppJiYiZ2V0ImluIGkmJm51bGwhPT0ocj1pLmdldChlLHQpKT9yOm51bGw9PShyPVMuZmluZC5hdHRyKGUsdCkpP3ZvaWQgMDpyKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oZSx0KXtpZigheS5yYWRpb1ZhbHVlJiYicmFkaW8iPT09dCYmQShlLCJpbnB1dCIpKXt2YXIgbj1lLnZhbHVlO3JldHVybiBlLnNldEF0dHJpYnV0ZSgidHlwZSIsdCksbiYmKGUudmFsdWU9biksdH19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MCxpPXQmJnQubWF0Y2goUCk7aWYoaSYmMT09PWUubm9kZVR5cGUpd2hpbGUobj1pW3IrK10pZS5yZW1vdmVBdHRyaWJ1dGUobil9fSksY3Q9e3NldDpmdW5jdGlvbihlLHQsbil7cmV0dXJuITE9PT10P1MucmVtb3ZlQXR0cihlLG4pOmUuc2V0QXR0cmlidXRlKG4sbiksbn19LFMuZWFjaChTLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1x3Ky9nKSxmdW5jdGlvbihlLHQpe3ZhciBhPWZ0W3RdfHxTLmZpbmQuYXR0cjtmdFt0XT1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXQudG9Mb3dlckNhc2UoKTtyZXR1cm4gbnx8KGk9ZnRbb10sZnRbb109cixyPW51bGwhPWEoZSx0LG4pP286bnVsbCxmdFtvXT1pKSxyfX0pO3ZhciBwdD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLGR0PS9eKD86YXxhcmVhKSQvaTtmdW5jdGlvbiBodChlKXtyZXR1cm4oZS5tYXRjaChQKXx8W10pLmpvaW4oIiAiKX1mdW5jdGlvbiBndChlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKCJjbGFzcyIpfHwiIn1mdW5jdGlvbiB2dChlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT9lOiJzdHJpbmciPT10eXBlb2YgZSYmZS5tYXRjaChQKXx8W119Uy5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gJCh0aGlzLFMucHJvcCxlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbUy5wcm9wRml4W2VdfHxlXX0pfX0pLFMuZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89ZS5ub2RlVHlwZTtpZigzIT09byYmOCE9PW8mJjIhPT1vKXJldHVybiAxPT09byYmUy5pc1hNTERvYyhlKXx8KHQ9Uy5wcm9wRml4W3RdfHx0LGk9Uy5wcm9wSG9va3NbdF0pLHZvaWQgMCE9PW4/aSYmInNldCJpbiBpJiZ2b2lkIDAhPT0ocj1pLnNldChlLG4sdCkpP3I6ZVt0XT1uOmkmJiJnZXQiaW4gaSYmbnVsbCE9PShyPWkuZ2V0KGUsdCkpP3I6ZVt0XX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PVMuZmluZC5hdHRyKGUsInRhYmluZGV4Iik7cmV0dXJuIHQ/cGFyc2VJbnQodCwxMCk6cHQudGVzdChlLm5vZGVOYW1lKXx8ZHQudGVzdChlLm5vZGVOYW1lKSYmZS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7ImZvciI6Imh0bWxGb3IiLCJjbGFzcyI6ImNsYXNzTmFtZSJ9fSkseS5vcHRTZWxlY3RlZHx8KFMucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3JldHVybiB0JiZ0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9LHNldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7dCYmKHQuc2VsZWN0ZWRJbmRleCx0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4KX19KSxTLmVhY2goWyJ0YWJJbmRleCIsInJlYWRPbmx5IiwibWF4TGVuZ3RoIiwiY2VsbFNwYWNpbmciLCJjZWxsUGFkZGluZyIsInJvd1NwYW4iLCJjb2xTcGFuIiwidXNlTWFwIiwiZnJhbWVCb3JkZXIiLCJjb250ZW50RWRpdGFibGUiXSxmdW5jdGlvbigpe1MucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KSxTLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24odCl7dmFyIGUsbixyLGksbyxhLHMsdT0wO2lmKG0odCkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLmFkZENsYXNzKHQuY2FsbCh0aGlzLGUsZ3QodGhpcykpKX0pO2lmKChlPXZ0KHQpKS5sZW5ndGgpd2hpbGUobj10aGlzW3UrK10paWYoaT1ndChuKSxyPTE9PT1uLm5vZGVUeXBlJiYiICIraHQoaSkrIiAiKXthPTA7d2hpbGUobz1lW2ErK10pci5pbmRleE9mKCIgIitvKyIgIik8MCYmKHIrPW8rIiAiKTtpIT09KHM9aHQocikpJiZuLnNldEF0dHJpYnV0ZSgiY2xhc3MiLHMpfXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbih0KXt2YXIgZSxuLHIsaSxvLGEscyx1PTA7aWYobSh0KSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykucmVtb3ZlQ2xhc3ModC5jYWxsKHRoaXMsZSxndCh0aGlzKSkpfSk7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuYXR0cigiY2xhc3MiLCIiKTtpZigoZT12dCh0KSkubGVuZ3RoKXdoaWxlKG49dGhpc1t1KytdKWlmKGk9Z3Qobikscj0xPT09bi5ub2RlVHlwZSYmIiAiK2h0KGkpKyIgIil7YT0wO3doaWxlKG89ZVthKytdKXdoaWxlKC0xPHIuaW5kZXhPZigiICIrbysiICIpKXI9ci5yZXBsYWNlKCIgIitvKyIgIiwiICIpO2khPT0ocz1odChyKSkmJm4uc2V0QXR0cmlidXRlKCJjbGFzcyIscyl9cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGksdCl7dmFyIG89dHlwZW9mIGksYT0ic3RyaW5nIj09PW98fEFycmF5LmlzQXJyYXkoaSk7cmV0dXJuImJvb2xlYW4iPT10eXBlb2YgdCYmYT90P3RoaXMuYWRkQ2xhc3MoaSk6dGhpcy5yZW1vdmVDbGFzcyhpKTptKGkpP3RoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLnRvZ2dsZUNsYXNzKGkuY2FsbCh0aGlzLGUsZ3QodGhpcyksdCksdCl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZSx0LG4scjtpZihhKXt0PTAsbj1TKHRoaXMpLHI9dnQoaSk7d2hpbGUoZT1yW3QrK10pbi5oYXNDbGFzcyhlKT9uLnJlbW92ZUNsYXNzKGUpOm4uYWRkQ2xhc3MoZSl9ZWxzZSB2b2lkIDAhPT1pJiYiYm9vbGVhbiIhPT1vfHwoKGU9Z3QodGhpcykpJiZZLnNldCh0aGlzLCJfX2NsYXNzTmFtZV9fIixlKSx0aGlzLnNldEF0dHJpYnV0ZSYmdGhpcy5zZXRBdHRyaWJ1dGUoImNsYXNzIixlfHwhMT09PWk/IiI6WS5nZXQodGhpcywiX19jbGFzc05hbWVfXyIpfHwiIikpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj0wO3Q9IiAiK2UrIiAiO3doaWxlKG49dGhpc1tyKytdKWlmKDE9PT1uLm5vZGVUeXBlJiYtMTwoIiAiK2h0KGd0KG4pKSsiICIpLmluZGV4T2YodCkpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIHl0PS9cci9nO1MuZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24obil7dmFyIHIsZSxpLHQ9dGhpc1swXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oaT1tKG4pLHRoaXMuZWFjaChmdW5jdGlvbihlKXt2YXIgdDsxPT09dGhpcy5ub2RlVHlwZSYmKG51bGw9PSh0PWk/bi5jYWxsKHRoaXMsZSxTKHRoaXMpLnZhbCgpKTpuKT90PSIiOiJudW1iZXIiPT10eXBlb2YgdD90Kz0iIjpBcnJheS5pc0FycmF5KHQpJiYodD1TLm1hcCh0LGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lPyIiOmUrIiJ9KSksKHI9Uy52YWxIb29rc1t0aGlzLnR5cGVdfHxTLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiYic2V0ImluIHImJnZvaWQgMCE9PXIuc2V0KHRoaXMsdCwidmFsdWUiKXx8KHRoaXMudmFsdWU9dCkpfSkpOnQ/KHI9Uy52YWxIb29rc1t0LnR5cGVdfHxTLnZhbEhvb2tzW3Qubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiYiZ2V0ImluIHImJnZvaWQgMCE9PShlPXIuZ2V0KHQsInZhbHVlIikpP2U6InN0cmluZyI9PXR5cGVvZihlPXQudmFsdWUpP2UucmVwbGFjZSh5dCwiIik6bnVsbD09ZT8iIjplOnZvaWQgMH19KSxTLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PVMuZmluZC5hdHRyKGUsInZhbHVlIik7cmV0dXJuIG51bGwhPXQ/dDpodChTLnRleHQoZSkpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGk9ZS5vcHRpb25zLG89ZS5zZWxlY3RlZEluZGV4LGE9InNlbGVjdC1vbmUiPT09ZS50eXBlLHM9YT9udWxsOltdLHU9YT9vKzE6aS5sZW5ndGg7Zm9yKHI9bzwwP3U6YT9vOjA7cjx1O3IrKylpZigoKG49aVtyXSkuc2VsZWN0ZWR8fHI9PT1vKSYmIW4uZGlzYWJsZWQmJighbi5wYXJlbnROb2RlLmRpc2FibGVkfHwhQShuLnBhcmVudE5vZGUsIm9wdGdyb3VwIikpKXtpZih0PVMobikudmFsKCksYSlyZXR1cm4gdDtzLnB1c2godCl9cmV0dXJuIHN9LHNldDpmdW5jdGlvbihlLHQpe3ZhciBuLHIsaT1lLm9wdGlvbnMsbz1TLm1ha2VBcnJheSh0KSxhPWkubGVuZ3RoO3doaWxlKGEtLSkoKHI9aVthXSkuc2VsZWN0ZWQ9LTE8Uy5pbkFycmF5KFMudmFsSG9va3Mub3B0aW9uLmdldChyKSxvKSkmJihuPSEwKTtyZXR1cm4gbnx8KGUuc2VsZWN0ZWRJbmRleD0tMSksb319fX0pLFMuZWFjaChbInJhZGlvIiwiY2hlY2tib3giXSxmdW5jdGlvbigpe1MudmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihlLHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIGUuY2hlY2tlZD0tMTxTLmluQXJyYXkoUyhlKS52YWwoKSx0KX19LHkuY2hlY2tPbnx8KFMudmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT09ZS5nZXRBdHRyaWJ1dGUoInZhbHVlIik/Im9uIjplLnZhbHVlfSl9KSx5LmZvY3VzaW49Im9uZm9jdXNpbiJpbiBDO3ZhciBtdD0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8seHQ9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKX07Uy5leHRlbmQoUy5ldmVudCx7dHJpZ2dlcjpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGwsYyxmLHA9W258fEVdLGQ9di5jYWxsKGUsInR5cGUiKT9lLnR5cGU6ZSxoPXYuY2FsbChlLCJuYW1lc3BhY2UiKT9lLm5hbWVzcGFjZS5zcGxpdCgiLiIpOltdO2lmKG89Zj1hPW49bnx8RSwzIT09bi5ub2RlVHlwZSYmOCE9PW4ubm9kZVR5cGUmJiFtdC50ZXN0KGQrUy5ldmVudC50cmlnZ2VyZWQpJiYoLTE8ZC5pbmRleE9mKCIuIikmJihkPShoPWQuc3BsaXQoIi4iKSkuc2hpZnQoKSxoLnNvcnQoKSksdT1kLmluZGV4T2YoIjoiKTwwJiYib24iK2QsKGU9ZVtTLmV4cGFuZG9dP2U6bmV3IFMuRXZlbnQoZCwib2JqZWN0Ij09dHlwZW9mIGUmJmUpKS5pc1RyaWdnZXI9cj8yOjMsZS5uYW1lc3BhY2U9aC5qb2luKCIuIiksZS5ybmFtZXNwYWNlPWUubmFtZXNwYWNlP25ldyBSZWdFeHAoIihefFxcLikiK2guam9pbigiXFwuKD86LipcXC58KSIpKyIoXFwufCQpIik6bnVsbCxlLnJlc3VsdD12b2lkIDAsZS50YXJnZXR8fChlLnRhcmdldD1uKSx0PW51bGw9PXQ/W2VdOlMubWFrZUFycmF5KHQsW2VdKSxjPVMuZXZlbnQuc3BlY2lhbFtkXXx8e30scnx8IWMudHJpZ2dlcnx8ITEhPT1jLnRyaWdnZXIuYXBwbHkobix0KSkpe2lmKCFyJiYhYy5ub0J1YmJsZSYmIXgobikpe2ZvcihzPWMuZGVsZWdhdGVUeXBlfHxkLG10LnRlc3QocytkKXx8KG89by5wYXJlbnROb2RlKTtvO289by5wYXJlbnROb2RlKXAucHVzaChvKSxhPW87YT09PShuLm93bmVyRG9jdW1lbnR8fEUpJiZwLnB1c2goYS5kZWZhdWx0Vmlld3x8YS5wYXJlbnRXaW5kb3d8fEMpfWk9MDt3aGlsZSgobz1wW2krK10pJiYhZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWY9byxlLnR5cGU9MTxpP3M6Yy5iaW5kVHlwZXx8ZCwobD0oWS5nZXQobywiZXZlbnRzIil8fE9iamVjdC5jcmVhdGUobnVsbCkpW2UudHlwZV0mJlkuZ2V0KG8sImhhbmRsZSIpKSYmbC5hcHBseShvLHQpLChsPXUmJm9bdV0pJiZsLmFwcGx5JiZWKG8pJiYoZS5yZXN1bHQ9bC5hcHBseShvLHQpLCExPT09ZS5yZXN1bHQmJmUucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIGUudHlwZT1kLHJ8fGUuaXNEZWZhdWx0UHJldmVudGVkKCl8fGMuX2RlZmF1bHQmJiExIT09Yy5fZGVmYXVsdC5hcHBseShwLnBvcCgpLHQpfHwhVihuKXx8dSYmbShuW2RdKSYmIXgobikmJigoYT1uW3VdKSYmKG5bdV09bnVsbCksUy5ldmVudC50cmlnZ2VyZWQ9ZCxlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmYuYWRkRXZlbnRMaXN0ZW5lcihkLHh0KSxuW2RdKCksZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZmLnJlbW92ZUV2ZW50TGlzdGVuZXIoZCx4dCksUy5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLGEmJihuW3VdPWEpKSxlLnJlc3VsdH19LHNpbXVsYXRlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1TLmV4dGVuZChuZXcgUy5FdmVudCxuLHt0eXBlOmUsaXNTaW11bGF0ZWQ6ITB9KTtTLmV2ZW50LnRyaWdnZXIocixudWxsLHQpfX0pLFMuZm4uZXh0ZW5kKHt0cmlnZ2VyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1MuZXZlbnQudHJpZ2dlcihlLHQsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzWzBdO2lmKG4pcmV0dXJuIFMuZXZlbnQudHJpZ2dlcihlLHQsbiwhMCl9fSkseS5mb2N1c2lufHxTLmVhY2goe2ZvY3VzOiJmb2N1c2luIixibHVyOiJmb2N1c291dCJ9LGZ1bmN0aW9uKG4scil7dmFyIGk9ZnVuY3Rpb24oZSl7Uy5ldmVudC5zaW11bGF0ZShyLGUudGFyZ2V0LFMuZXZlbnQuZml4KGUpKX07Uy5ldmVudC5zcGVjaWFsW3JdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcy5kb2N1bWVudHx8dGhpcyx0PVkuYWNjZXNzKGUscik7dHx8ZS5hZGRFdmVudExpc3RlbmVyKG4saSwhMCksWS5hY2Nlc3MoZSxyLCh0fHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMuZG9jdW1lbnR8fHRoaXMsdD1ZLmFjY2VzcyhlLHIpLTE7dD9ZLmFjY2VzcyhlLHIsdCk6KGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihuLGksITApLFkucmVtb3ZlKGUscikpfX19KTt2YXIgYnQ9Qy5sb2NhdGlvbix3dD17Z3VpZDpEYXRlLm5vdygpfSxUdD0vXD8vO1MucGFyc2VYTUw9ZnVuY3Rpb24oZSl7dmFyIHQsbjtpZighZXx8InN0cmluZyIhPXR5cGVvZiBlKXJldHVybiBudWxsO3RyeXt0PShuZXcgQy5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhlLCJ0ZXh0L3htbCIpfWNhdGNoKGUpe31yZXR1cm4gbj10JiZ0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCJwYXJzZXJlcnJvciIpWzBdLHQmJiFufHxTLmVycm9yKCJJbnZhbGlkIFhNTDogIisobj9TLm1hcChuLmNoaWxkTm9kZXMsZnVuY3Rpb24oZSl7cmV0dXJuIGUudGV4dENvbnRlbnR9KS5qb2luKCJcbiIpOmUpKSx0fTt2YXIgQ3Q9L1xbXF0kLyxFdD0vXHI/XG4vZyxTdD0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksa3Q9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIEF0KG4sZSxyLGkpe3ZhciB0O2lmKEFycmF5LmlzQXJyYXkoZSkpUy5lYWNoKGUsZnVuY3Rpb24oZSx0KXtyfHxDdC50ZXN0KG4pP2kobix0KTpBdChuKyJbIisoIm9iamVjdCI9PXR5cGVvZiB0JiZudWxsIT10P2U6IiIpKyJdIix0LHIsaSl9KTtlbHNlIGlmKHJ8fCJvYmplY3QiIT09dyhlKSlpKG4sZSk7ZWxzZSBmb3IodCBpbiBlKUF0KG4rIlsiK3QrIl0iLGVbdF0scixpKX1TLnBhcmFtPWZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPWZ1bmN0aW9uKGUsdCl7dmFyIG49bSh0KT90KCk6dDtyW3IubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoZSkrIj0iK2VuY29kZVVSSUNvbXBvbmVudChudWxsPT1uPyIiOm4pfTtpZihudWxsPT1lKXJldHVybiIiO2lmKEFycmF5LmlzQXJyYXkoZSl8fGUuanF1ZXJ5JiYhUy5pc1BsYWluT2JqZWN0KGUpKVMuZWFjaChlLGZ1bmN0aW9uKCl7aSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihuIGluIGUpQXQobixlW25dLHQsaSk7cmV0dXJuIHIuam9pbigiJiIpfSxTLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIFMucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT1TLnByb3AodGhpcywiZWxlbWVudHMiKTtyZXR1cm4gZT9TLm1ha2VBcnJheShlKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFTKHRoaXMpLmlzKCI6ZGlzYWJsZWQiKSYma3QudGVzdCh0aGlzLm5vZGVOYW1lKSYmIVN0LnRlc3QoZSkmJih0aGlzLmNoZWNrZWR8fCFwZS50ZXN0KGUpKX0pLm1hcChmdW5jdGlvbihlLHQpe3ZhciBuPVModGhpcykudmFsKCk7cmV0dXJuIG51bGw9PW4/bnVsbDpBcnJheS5pc0FycmF5KG4pP1MubWFwKG4sZnVuY3Rpb24oZSl7cmV0dXJue25hbWU6dC5uYW1lLHZhbHVlOmUucmVwbGFjZShFdCwiXHJcbiIpfX0pOntuYW1lOnQubmFtZSx2YWx1ZTpuLnJlcGxhY2UoRXQsIlxyXG4iKX19KS5nZXQoKX19KTt2YXIgTnQ9LyUyMC9nLGp0PS8jLiokLyxEdD0vKFs/Jl0pXz1bXiZdKi8scXQ9L14oLio/KTpbIFx0XSooW15cclxuXSopJC9nbSxMdD0vXig/OkdFVHxIRUFEKSQvLEh0PS9eXC9cLy8sT3Q9e30sUHQ9e30sUnQ9IiovIi5jb25jYXQoIioiKSxNdD1FLmNyZWF0ZUVsZW1lbnQoImEiKTtmdW5jdGlvbiBJdChvKXtyZXR1cm4gZnVuY3Rpb24oZSx0KXsic3RyaW5nIiE9dHlwZW9mIGUmJih0PWUsZT0iKiIpO3ZhciBuLHI9MCxpPWUudG9Mb3dlckNhc2UoKS5tYXRjaChQKXx8W107aWYobSh0KSl3aGlsZShuPWlbcisrXSkiKyI9PT1uWzBdPyhuPW4uc2xpY2UoMSl8fCIqIiwob1tuXT1vW25dfHxbXSkudW5zaGlmdCh0KSk6KG9bbl09b1tuXXx8W10pLnB1c2godCl9fWZ1bmN0aW9uIFd0KHQsaSxvLGEpe3ZhciBzPXt9LHU9dD09PVB0O2Z1bmN0aW9uIGwoZSl7dmFyIHI7cmV0dXJuIHNbZV09ITAsUy5lYWNoKHRbZV18fFtdLGZ1bmN0aW9uKGUsdCl7dmFyIG49dChpLG8sYSk7cmV0dXJuInN0cmluZyIhPXR5cGVvZiBufHx1fHxzW25dP3U/IShyPW4pOnZvaWQgMDooaS5kYXRhVHlwZXMudW5zaGlmdChuKSxsKG4pLCExKX0pLHJ9cmV0dXJuIGwoaS5kYXRhVHlwZXNbMF0pfHwhc1siKiJdJiZsKCIqIil9ZnVuY3Rpb24gRnQoZSx0KXt2YXIgbixyLGk9Uy5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihuIGluIHQpdm9pZCAwIT09dFtuXSYmKChpW25dP2U6cnx8KHI9e30pKVtuXT10W25dKTtyZXR1cm4gciYmUy5leHRlbmQoITAsZSxyKSxlfU10LmhyZWY9YnQuaHJlZixTLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6YnQuaHJlZix0eXBlOiJHRVQiLGlzTG9jYWw6L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8udGVzdChidC5wcm90b2NvbCksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOiJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgiLGFjY2VwdHM6eyIqIjpSdCx0ZXh0OiJ0ZXh0L3BsYWluIixodG1sOiJ0ZXh0L2h0bWwiLHhtbDoiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbCIsanNvbjoiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0In0sY29udGVudHM6e3htbDovXGJ4bWxcYi8saHRtbDovXGJodG1sLyxqc29uOi9cYmpzb25cYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6InJlc3BvbnNlWE1MIix0ZXh0OiJyZXNwb25zZVRleHQiLGpzb246InJlc3BvbnNlSlNPTiJ9LGNvbnZlcnRlcnM6eyIqIHRleHQiOlN0cmluZywidGV4dCBodG1sIjohMCwidGV4dCBqc29uIjpKU09OLnBhcnNlLCJ0ZXh0IHhtbCI6Uy5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/RnQoRnQoZSxTLmFqYXhTZXR0aW5ncyksdCk6RnQoUy5hamF4U2V0dGluZ3MsZSl9LGFqYXhQcmVmaWx0ZXI6SXQoT3QpLGFqYXhUcmFuc3BvcnQ6SXQoUHQpLGFqYXg6ZnVuY3Rpb24oZSx0KXsib2JqZWN0Ij09dHlwZW9mIGUmJih0PWUsZT12b2lkIDApLHQ9dHx8e307dmFyIGMsZixwLG4sZCxyLGgsZyxpLG8sdj1TLmFqYXhTZXR1cCh7fSx0KSx5PXYuY29udGV4dHx8dixtPXYuY29udGV4dCYmKHkubm9kZVR5cGV8fHkuanF1ZXJ5KT9TKHkpOlMuZXZlbnQseD1TLkRlZmVycmVkKCksYj1TLkNhbGxiYWNrcygib25jZSBtZW1vcnkiKSx3PXYuc3RhdHVzQ29kZXx8e30sYT17fSxzPXt9LHU9ImNhbmNlbGVkIixUPXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoaCl7aWYoIW4pe249e307d2hpbGUodD1xdC5leGVjKHApKW5bdFsxXS50b0xvd2VyQ2FzZSgpKyIgIl09KG5bdFsxXS50b0xvd2VyQ2FzZSgpKyIgIl18fFtdKS5jb25jYXQodFsyXSl9dD1uW2UudG9Mb3dlckNhc2UoKSsiICJdfXJldHVybiBudWxsPT10P251bGw6dC5qb2luKCIsICIpfSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gaD9wOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbD09aCYmKGU9c1tlLnRvTG93ZXJDYXNlKCldPXNbZS50b0xvd2VyQ2FzZSgpXXx8ZSxhW2VdPXQpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWgmJih2Lm1pbWVUeXBlPWUpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoZSlpZihoKVQuYWx3YXlzKGVbVC5zdGF0dXNdKTtlbHNlIGZvcih0IGluIGUpd1t0XT1bd1t0XSxlW3RdXTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZXx8dTtyZXR1cm4gYyYmYy5hYm9ydCh0KSxsKDAsdCksdGhpc319O2lmKHgucHJvbWlzZShUKSx2LnVybD0oKGV8fHYudXJsfHxidC5ocmVmKSsiIikucmVwbGFjZShIdCxidC5wcm90b2NvbCsiLy8iKSx2LnR5cGU9dC5tZXRob2R8fHQudHlwZXx8di5tZXRob2R8fHYudHlwZSx2LmRhdGFUeXBlcz0odi5kYXRhVHlwZXx8IioiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKFApfHxbIiJdLG51bGw9PXYuY3Jvc3NEb21haW4pe3I9RS5jcmVhdGVFbGVtZW50KCJhIik7dHJ5e3IuaHJlZj12LnVybCxyLmhyZWY9ci5ocmVmLHYuY3Jvc3NEb21haW49TXQucHJvdG9jb2wrIi8vIitNdC5ob3N0IT1yLnByb3RvY29sKyIvLyIrci5ob3N0fWNhdGNoKGUpe3YuY3Jvc3NEb21haW49ITB9fWlmKHYuZGF0YSYmdi5wcm9jZXNzRGF0YSYmInN0cmluZyIhPXR5cGVvZiB2LmRhdGEmJih2LmRhdGE9Uy5wYXJhbSh2LmRhdGEsdi50cmFkaXRpb25hbCkpLFd0KE90LHYsdCxUKSxoKXJldHVybiBUO2ZvcihpIGluKGc9Uy5ldmVudCYmdi5nbG9iYWwpJiYwPT1TLmFjdGl2ZSsrJiZTLmV2ZW50LnRyaWdnZXIoImFqYXhTdGFydCIpLHYudHlwZT12LnR5cGUudG9VcHBlckNhc2UoKSx2Lmhhc0NvbnRlbnQ9IUx0LnRlc3Qodi50eXBlKSxmPXYudXJsLnJlcGxhY2UoanQsIiIpLHYuaGFzQ29udGVudD92LmRhdGEmJnYucHJvY2Vzc0RhdGEmJjA9PT0odi5jb250ZW50VHlwZXx8IiIpLmluZGV4T2YoImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCIpJiYodi5kYXRhPXYuZGF0YS5yZXBsYWNlKE50LCIrIikpOihvPXYudXJsLnNsaWNlKGYubGVuZ3RoKSx2LmRhdGEmJih2LnByb2Nlc3NEYXRhfHwic3RyaW5nIj09dHlwZW9mIHYuZGF0YSkmJihmKz0oVHQudGVzdChmKT8iJiI6Ij8iKSt2LmRhdGEsZGVsZXRlIHYuZGF0YSksITE9PT12LmNhY2hlJiYoZj1mLnJlcGxhY2UoRHQsIiQxIiksbz0oVHQudGVzdChmKT8iJiI6Ij8iKSsiXz0iK3d0Lmd1aWQrKytvKSx2LnVybD1mK28pLHYuaWZNb2RpZmllZCYmKFMubGFzdE1vZGlmaWVkW2ZdJiZULnNldFJlcXVlc3RIZWFkZXIoIklmLU1vZGlmaWVkLVNpbmNlIixTLmxhc3RNb2RpZmllZFtmXSksUy5ldGFnW2ZdJiZULnNldFJlcXVlc3RIZWFkZXIoIklmLU5vbmUtTWF0Y2giLFMuZXRhZ1tmXSkpLCh2LmRhdGEmJnYuaGFzQ29udGVudCYmITEhPT12LmNvbnRlbnRUeXBlfHx0LmNvbnRlbnRUeXBlKSYmVC5zZXRSZXF1ZXN0SGVhZGVyKCJDb250ZW50LVR5cGUiLHYuY29udGVudFR5cGUpLFQuc2V0UmVxdWVzdEhlYWRlcigiQWNjZXB0Iix2LmRhdGFUeXBlc1swXSYmdi5hY2NlcHRzW3YuZGF0YVR5cGVzWzBdXT92LmFjY2VwdHNbdi5kYXRhVHlwZXNbMF1dKygiKiIhPT12LmRhdGFUeXBlc1swXT8iLCAiK1J0KyI7IHE9MC4wMSI6IiIpOnYuYWNjZXB0c1siKiJdKSx2LmhlYWRlcnMpVC5zZXRSZXF1ZXN0SGVhZGVyKGksdi5oZWFkZXJzW2ldKTtpZih2LmJlZm9yZVNlbmQmJighMT09PXYuYmVmb3JlU2VuZC5jYWxsKHksVCx2KXx8aCkpcmV0dXJuIFQuYWJvcnQoKTtpZih1PSJhYm9ydCIsYi5hZGQodi5jb21wbGV0ZSksVC5kb25lKHYuc3VjY2VzcyksVC5mYWlsKHYuZXJyb3IpLGM9V3QoUHQsdix0LFQpKXtpZihULnJlYWR5U3RhdGU9MSxnJiZtLnRyaWdnZXIoImFqYXhTZW5kIixbVCx2XSksaClyZXR1cm4gVDt2LmFzeW5jJiYwPHYudGltZW91dCYmKGQ9Qy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7VC5hYm9ydCgidGltZW91dCIpfSx2LnRpbWVvdXQpKTt0cnl7aD0hMSxjLnNlbmQoYSxsKX1jYXRjaChlKXtpZihoKXRocm93IGU7bCgtMSxlKX19ZWxzZSBsKC0xLCJObyBUcmFuc3BvcnQiKTtmdW5jdGlvbiBsKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbD10O2h8fChoPSEwLGQmJkMuY2xlYXJUaW1lb3V0KGQpLGM9dm9pZCAwLHA9cnx8IiIsVC5yZWFkeVN0YXRlPTA8ZT80OjAsaT0yMDA8PWUmJmU8MzAwfHwzMDQ9PT1lLG4mJihzPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzPWUuY29udGVudHMsdT1lLmRhdGFUeXBlczt3aGlsZSgiKiI9PT11WzBdKXUuc2hpZnQoKSx2b2lkIDA9PT1yJiYocj1lLm1pbWVUeXBlfHx0LmdldFJlc3BvbnNlSGVhZGVyKCJDb250ZW50LVR5cGUiKSk7aWYocilmb3IoaSBpbiBzKWlmKHNbaV0mJnNbaV0udGVzdChyKSl7dS51bnNoaWZ0KGkpO2JyZWFrfWlmKHVbMF1pbiBuKW89dVswXTtlbHNle2ZvcihpIGluIG4pe2lmKCF1WzBdfHxlLmNvbnZlcnRlcnNbaSsiICIrdVswXV0pe289aTticmVha31hfHwoYT1pKX1vPW98fGF9aWYobylyZXR1cm4gbyE9PXVbMF0mJnUudW5zaGlmdChvKSxuW29dfSh2LFQsbikpLCFpJiYtMTxTLmluQXJyYXkoInNjcmlwdCIsdi5kYXRhVHlwZXMpJiZTLmluQXJyYXkoImpzb24iLHYuZGF0YVR5cGVzKTwwJiYodi5jb252ZXJ0ZXJzWyJ0ZXh0IHNjcmlwdCJdPWZ1bmN0aW9uKCl7fSkscz1mdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9e30sYz1lLmRhdGFUeXBlcy5zbGljZSgpO2lmKGNbMV0pZm9yKGEgaW4gZS5jb252ZXJ0ZXJzKWxbYS50b0xvd2VyQ2FzZSgpXT1lLmNvbnZlcnRlcnNbYV07bz1jLnNoaWZ0KCk7d2hpbGUobylpZihlLnJlc3BvbnNlRmllbGRzW29dJiYobltlLnJlc3BvbnNlRmllbGRzW29dXT10KSwhdSYmciYmZS5kYXRhRmlsdGVyJiYodD1lLmRhdGFGaWx0ZXIodCxlLmRhdGFUeXBlKSksdT1vLG89Yy5zaGlmdCgpKWlmKCIqIj09PW8pbz11O2Vsc2UgaWYoIioiIT09dSYmdSE9PW8pe2lmKCEoYT1sW3UrIiAiK29dfHxsWyIqICIrb10pKWZvcihpIGluIGwpaWYoKHM9aS5zcGxpdCgiICIpKVsxXT09PW8mJihhPWxbdSsiICIrc1swXV18fGxbIiogIitzWzBdXSkpeyEwPT09YT9hPWxbaV06ITAhPT1sW2ldJiYobz1zWzBdLGMudW5zaGlmdChzWzFdKSk7YnJlYWt9aWYoITAhPT1hKWlmKGEmJmVbInRocm93cyJdKXQ9YSh0KTtlbHNlIHRyeXt0PWEodCl9Y2F0Y2goZSl7cmV0dXJue3N0YXRlOiJwYXJzZXJlcnJvciIsZXJyb3I6YT9lOiJObyBjb252ZXJzaW9uIGZyb20gIit1KyIgdG8gIitvfX19cmV0dXJue3N0YXRlOiJzdWNjZXNzIixkYXRhOnR9fSh2LHMsVCxpKSxpPyh2LmlmTW9kaWZpZWQmJigodT1ULmdldFJlc3BvbnNlSGVhZGVyKCJMYXN0LU1vZGlmaWVkIikpJiYoUy5sYXN0TW9kaWZpZWRbZl09dSksKHU9VC5nZXRSZXNwb25zZUhlYWRlcigiZXRhZyIpKSYmKFMuZXRhZ1tmXT11KSksMjA0PT09ZXx8IkhFQUQiPT09di50eXBlP2w9Im5vY29udGVudCI6MzA0PT09ZT9sPSJub3Rtb2RpZmllZCI6KGw9cy5zdGF0ZSxvPXMuZGF0YSxpPSEoYT1zLmVycm9yKSkpOihhPWwsIWUmJmx8fChsPSJlcnJvciIsZTwwJiYoZT0wKSkpLFQuc3RhdHVzPWUsVC5zdGF0dXNUZXh0PSh0fHxsKSsiIixpP3gucmVzb2x2ZVdpdGgoeSxbbyxsLFRdKTp4LnJlamVjdFdpdGgoeSxbVCxsLGFdKSxULnN0YXR1c0NvZGUodyksdz12b2lkIDAsZyYmbS50cmlnZ2VyKGk/ImFqYXhTdWNjZXNzIjoiYWpheEVycm9yIixbVCx2LGk/bzphXSksYi5maXJlV2l0aCh5LFtULGxdKSxnJiYobS50cmlnZ2VyKCJhamF4Q29tcGxldGUiLFtULHZdKSwtLVMuYWN0aXZlfHxTLmV2ZW50LnRyaWdnZXIoImFqYXhTdG9wIikpKX1yZXR1cm4gVH0sZ2V0SlNPTjpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFMuZ2V0KGUsdCxuLCJqc29uIil9LGdldFNjcmlwdDpmdW5jdGlvbihlLHQpe3JldHVybiBTLmdldChlLHZvaWQgMCx0LCJzY3JpcHQiKX19KSxTLmVhY2goWyJnZXQiLCJwb3N0Il0sZnVuY3Rpb24oZSxpKXtTW2ldPWZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBtKHQpJiYocj1yfHxuLG49dCx0PXZvaWQgMCksUy5hamF4KFMuZXh0ZW5kKHt1cmw6ZSx0eXBlOmksZGF0YVR5cGU6cixkYXRhOnQsc3VjY2VzczpufSxTLmlzUGxhaW5PYmplY3QoZSkmJmUpKX19KSxTLmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKHQgaW4gZS5oZWFkZXJzKSJjb250ZW50LXR5cGUiPT09dC50b0xvd2VyQ2FzZSgpJiYoZS5jb250ZW50VHlwZT1lLmhlYWRlcnNbdF18fCIiKX0pLFMuX2V2YWxVcmw9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBTLmFqYXgoe3VybDplLHR5cGU6IkdFVCIsZGF0YVR5cGU6InNjcmlwdCIsY2FjaGU6ITAsYXN5bmM6ITEsZ2xvYmFsOiExLGNvbnZlcnRlcnM6eyJ0ZXh0IHNjcmlwdCI6ZnVuY3Rpb24oKXt9fSxkYXRhRmlsdGVyOmZ1bmN0aW9uKGUpe1MuZ2xvYmFsRXZhbChlLHQsbil9fSl9LFMuZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiB0aGlzWzBdJiYobShlKSYmKGU9ZS5jYWxsKHRoaXNbMF0pKSx0PVMoZSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKSx0aGlzWzBdLnBhcmVudE5vZGUmJnQuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLHQubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpczt3aGlsZShlLmZpcnN0RWxlbWVudENoaWxkKWU9ZS5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gZX0pLmFwcGVuZCh0aGlzKSksdGhpc30sd3JhcElubmVyOmZ1bmN0aW9uKG4pe3JldHVybiBtKG4pP3RoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLndyYXBJbm5lcihuLmNhbGwodGhpcyxlKSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1TKHRoaXMpLHQ9ZS5jb250ZW50cygpO3QubGVuZ3RoP3Qud3JhcEFsbChuKTplLmFwcGVuZChuKX0pfSx3cmFwOmZ1bmN0aW9uKHQpe3ZhciBuPW0odCk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLndyYXBBbGwobj90LmNhbGwodGhpcyxlKTp0KX0pfSx1bndyYXA6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucGFyZW50KGUpLm5vdCgiYm9keSIpLmVhY2goZnVuY3Rpb24oKXtTKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KSx0aGlzfX0pLFMuZXhwci5wc2V1ZG9zLmhpZGRlbj1mdW5jdGlvbihlKXtyZXR1cm4hUy5leHByLnBzZXVkb3MudmlzaWJsZShlKX0sUy5leHByLnBzZXVkb3MudmlzaWJsZT1mdW5jdGlvbihlKXtyZXR1cm4hIShlLm9mZnNldFdpZHRofHxlLm9mZnNldEhlaWdodHx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCl9LFMuYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IEMuWE1MSHR0cFJlcXVlc3R9Y2F0Y2goZSl7fX07dmFyIEJ0PXswOjIwMCwxMjIzOjIwNH0sJHQ9Uy5hamF4U2V0dGluZ3MueGhyKCk7eS5jb3JzPSEhJHQmJiJ3aXRoQ3JlZGVudGlhbHMiaW4gJHQseS5hamF4PSR0PSEhJHQsUy5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGkpe3ZhciBvLGE7aWYoeS5jb3JzfHwkdCYmIWkuY3Jvc3NEb21haW4pcmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPWkueGhyKCk7aWYoci5vcGVuKGkudHlwZSxpLnVybCxpLmFzeW5jLGkudXNlcm5hbWUsaS5wYXNzd29yZCksaS54aHJGaWVsZHMpZm9yKG4gaW4gaS54aHJGaWVsZHMpcltuXT1pLnhockZpZWxkc1tuXTtmb3IobiBpbiBpLm1pbWVUeXBlJiZyLm92ZXJyaWRlTWltZVR5cGUmJnIub3ZlcnJpZGVNaW1lVHlwZShpLm1pbWVUeXBlKSxpLmNyb3NzRG9tYWlufHxlWyJYLVJlcXVlc3RlZC1XaXRoIl18fChlWyJYLVJlcXVlc3RlZC1XaXRoIl09IlhNTEh0dHBSZXF1ZXN0IiksZSlyLnNldFJlcXVlc3RIZWFkZXIobixlW25dKTtvPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe28mJihvPWE9ci5vbmxvYWQ9ci5vbmVycm9yPXIub25hYm9ydD1yLm9udGltZW91dD1yLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLCJhYm9ydCI9PT1lP3IuYWJvcnQoKToiZXJyb3IiPT09ZT8ibnVtYmVyIiE9dHlwZW9mIHIuc3RhdHVzP3QoMCwiZXJyb3IiKTp0KHIuc3RhdHVzLHIuc3RhdHVzVGV4dCk6dChCdFtyLnN0YXR1c118fHIuc3RhdHVzLHIuc3RhdHVzVGV4dCwidGV4dCIhPT0oci5yZXNwb25zZVR5cGV8fCJ0ZXh0Iil8fCJzdHJpbmciIT10eXBlb2Ygci5yZXNwb25zZVRleHQ/e2JpbmFyeTpyLnJlc3BvbnNlfTp7dGV4dDpyLnJlc3BvbnNlVGV4dH0sci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0sci5vbmxvYWQ9bygpLGE9ci5vbmVycm9yPXIub250aW1lb3V0PW8oImVycm9yIiksdm9pZCAwIT09ci5vbmFib3J0P3Iub25hYm9ydD1hOnIub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09PXIucmVhZHlTdGF0ZSYmQy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7byYmYSgpfSl9LG89bygiYWJvcnQiKTt0cnl7ci5zZW5kKGkuaGFzQ29udGVudCYmaS5kYXRhfHxudWxsKX1jYXRjaChlKXtpZihvKXRocm93IGV9fSxhYm9ydDpmdW5jdGlvbigpe28mJm8oKX19fSksUy5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGUpe2UuY3Jvc3NEb21haW4mJihlLmNvbnRlbnRzLnNjcmlwdD0hMSl9KSxTLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OiJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdCJ9LGNvbnRlbnRzOntzY3JpcHQ6L1xiKD86amF2YXxlY21hKXNjcmlwdFxiL30sY29udmVydGVyczp7InRleHQgc2NyaXB0IjpmdW5jdGlvbihlKXtyZXR1cm4gUy5nbG9iYWxFdmFsKGUpLGV9fX0pLFMuYWpheFByZWZpbHRlcigic2NyaXB0IixmdW5jdGlvbihlKXt2b2lkIDA9PT1lLmNhY2hlJiYoZS5jYWNoZT0hMSksZS5jcm9zc0RvbWFpbiYmKGUudHlwZT0iR0VUIil9KSxTLmFqYXhUcmFuc3BvcnQoInNjcmlwdCIsZnVuY3Rpb24obil7dmFyIHIsaTtpZihuLmNyb3NzRG9tYWlufHxuLnNjcmlwdEF0dHJzKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsdCl7cj1TKCI8c2NyaXB0PiIpLmF0dHIobi5zY3JpcHRBdHRyc3x8e30pLnByb3Aoe2NoYXJzZXQ6bi5zY3JpcHRDaGFyc2V0LHNyYzpuLnVybH0pLm9uKCJsb2FkIGVycm9yIixpPWZ1bmN0aW9uKGUpe3IucmVtb3ZlKCksaT1udWxsLGUmJnQoImVycm9yIj09PWUudHlwZT80MDQ6MjAwLGUudHlwZSl9KSxFLmhlYWQuYXBwZW5kQ2hpbGQoclswXSl9LGFib3J0OmZ1bmN0aW9uKCl7aSYmaSgpfX19KTt2YXIgX3QsenQ9W10sVXQ9Lyg9KVw/KD89JnwkKXxcP1w/LztTLmFqYXhTZXR1cCh7anNvbnA6ImNhbGxiYWNrIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGU9enQucG9wKCl8fFMuZXhwYW5kbysiXyIrd3QuZ3VpZCsrO3JldHVybiB0aGlzW2VdPSEwLGV9fSksUy5hamF4UHJlZmlsdGVyKCJqc29uIGpzb25wIixmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9ITEhPT1lLmpzb25wJiYoVXQudGVzdChlLnVybCk/InVybCI6InN0cmluZyI9PXR5cGVvZiBlLmRhdGEmJjA9PT0oZS5jb250ZW50VHlwZXx8IiIpLmluZGV4T2YoImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCIpJiZVdC50ZXN0KGUuZGF0YSkmJiJkYXRhIik7aWYoYXx8Impzb25wIj09PWUuZGF0YVR5cGVzWzBdKXJldHVybiByPWUuanNvbnBDYWxsYmFjaz1tKGUuanNvbnBDYWxsYmFjayk/ZS5qc29ucENhbGxiYWNrKCk6ZS5qc29ucENhbGxiYWNrLGE/ZVthXT1lW2FdLnJlcGxhY2UoVXQsIiQxIityKTohMSE9PWUuanNvbnAmJihlLnVybCs9KFR0LnRlc3QoZS51cmwpPyImIjoiPyIpK2UuanNvbnArIj0iK3IpLGUuY29udmVydGVyc1sic2NyaXB0IGpzb24iXT1mdW5jdGlvbigpe3JldHVybiBvfHxTLmVycm9yKHIrIiB3YXMgbm90IGNhbGxlZCIpLG9bMF19LGUuZGF0YVR5cGVzWzBdPSJqc29uIixpPUNbcl0sQ1tyXT1mdW5jdGlvbigpe289YXJndW1lbnRzfSxuLmFsd2F5cyhmdW5jdGlvbigpe3ZvaWQgMD09PWk/UyhDKS5yZW1vdmVQcm9wKHIpOkNbcl09aSxlW3JdJiYoZS5qc29ucENhbGxiYWNrPXQuanNvbnBDYWxsYmFjayx6dC5wdXNoKHIpKSxvJiZtKGkpJiZpKG9bMF0pLG89aT12b2lkIDB9KSwic2NyaXB0In0pLHkuY3JlYXRlSFRNTERvY3VtZW50PSgoX3Q9RS5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoIiIpLmJvZHkpLmlubmVySFRNTD0iPGZvcm0+PC9mb3JtPjxmb3JtPjwvZm9ybT4iLDI9PT1fdC5jaGlsZE5vZGVzLmxlbmd0aCksUy5wYXJzZUhUTUw9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiJzdHJpbmciIT10eXBlb2YgZT9bXTooImJvb2xlYW4iPT10eXBlb2YgdCYmKG49dCx0PSExKSx0fHwoeS5jcmVhdGVIVE1MRG9jdW1lbnQ/KChyPSh0PUUuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCIiKSkuY3JlYXRlRWxlbWVudCgiYmFzZSIpKS5ocmVmPUUubG9jYXRpb24uaHJlZix0LmhlYWQuYXBwZW5kQ2hpbGQocikpOnQ9RSksbz0hbiYmW10sKGk9Ti5leGVjKGUpKT9bdC5jcmVhdGVFbGVtZW50KGlbMV0pXTooaT14ZShbZV0sdCxvKSxvJiZvLmxlbmd0aCYmUyhvKS5yZW1vdmUoKSxTLm1lcmdlKFtdLGkuY2hpbGROb2RlcykpKTt2YXIgcixpLG99LFMuZm4ubG9hZD1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9dGhpcyxzPWUuaW5kZXhPZigiICIpO3JldHVybi0xPHMmJihyPWh0KGUuc2xpY2UocykpLGU9ZS5zbGljZSgwLHMpKSxtKHQpPyhuPXQsdD12b2lkIDApOnQmJiJvYmplY3QiPT10eXBlb2YgdCYmKGk9IlBPU1QiKSwwPGEubGVuZ3RoJiZTLmFqYXgoe3VybDplLHR5cGU6aXx8IkdFVCIsZGF0YVR5cGU6Imh0bWwiLGRhdGE6dH0pLmRvbmUoZnVuY3Rpb24oZSl7bz1hcmd1bWVudHMsYS5odG1sKHI/UygiPGRpdj4iKS5hcHBlbmQoUy5wYXJzZUhUTUwoZSkpLmZpbmQocik6ZSl9KS5hbHdheXMobiYmZnVuY3Rpb24oZSx0KXthLmVhY2goZnVuY3Rpb24oKXtuLmFwcGx5KHRoaXMsb3x8W2UucmVzcG9uc2VUZXh0LHQsZV0pfSl9KSx0aGlzfSxTLmV4cHIucHNldWRvcy5hbmltYXRlZD1mdW5jdGlvbih0KXtyZXR1cm4gUy5ncmVwKFMudGltZXJzLGZ1bmN0aW9uKGUpe3JldHVybiB0PT09ZS5lbGVtfSkubGVuZ3RofSxTLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbD1TLmNzcyhlLCJwb3NpdGlvbiIpLGM9UyhlKSxmPXt9OyJzdGF0aWMiPT09bCYmKGUuc3R5bGUucG9zaXRpb249InJlbGF0aXZlIikscz1jLm9mZnNldCgpLG89Uy5jc3MoZSwidG9wIiksdT1TLmNzcyhlLCJsZWZ0IiksKCJhYnNvbHV0ZSI9PT1sfHwiZml4ZWQiPT09bCkmJi0xPChvK3UpLmluZGV4T2YoImF1dG8iKT8oYT0ocj1jLnBvc2l0aW9uKCkpLnRvcCxpPXIubGVmdCk6KGE9cGFyc2VGbG9hdChvKXx8MCxpPXBhcnNlRmxvYXQodSl8fDApLG0odCkmJih0PXQuY2FsbChlLG4sUy5leHRlbmQoe30scykpKSxudWxsIT10LnRvcCYmKGYudG9wPXQudG9wLXMudG9wK2EpLG51bGwhPXQubGVmdCYmKGYubGVmdD10LmxlZnQtcy5sZWZ0K2kpLCJ1c2luZyJpbiB0P3QudXNpbmcuY2FsbChlLGYpOmMuY3NzKGYpfX0sUy5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbih0KXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT10P3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1Mub2Zmc2V0LnNldE9mZnNldCh0aGlzLHQsZSl9KTt2YXIgZSxuLHI9dGhpc1swXTtyZXR1cm4gcj9yLmdldENsaWVudFJlY3RzKCkubGVuZ3RoPyhlPXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbj1yLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcse3RvcDplLnRvcCtuLnBhZ2VZT2Zmc2V0LGxlZnQ6ZS5sZWZ0K24ucGFnZVhPZmZzZXR9KTp7dG9wOjAsbGVmdDowfTp2b2lkIDB9LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGUsdCxuLHI9dGhpc1swXSxpPXt0b3A6MCxsZWZ0OjB9O2lmKCJmaXhlZCI9PT1TLmNzcyhyLCJwb3NpdGlvbiIpKXQ9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtlbHNle3Q9dGhpcy5vZmZzZXQoKSxuPXIub3duZXJEb2N1bWVudCxlPXIub2Zmc2V0UGFyZW50fHxuLmRvY3VtZW50RWxlbWVudDt3aGlsZShlJiYoZT09PW4uYm9keXx8ZT09PW4uZG9jdW1lbnRFbGVtZW50KSYmInN0YXRpYyI9PT1TLmNzcyhlLCJwb3NpdGlvbiIpKWU9ZS5wYXJlbnROb2RlO2UmJmUhPT1yJiYxPT09ZS5ub2RlVHlwZSYmKChpPVMoZSkub2Zmc2V0KCkpLnRvcCs9Uy5jc3MoZSwiYm9yZGVyVG9wV2lkdGgiLCEwKSxpLmxlZnQrPVMuY3NzKGUsImJvcmRlckxlZnRXaWR0aCIsITApKX1yZXR1cm57dG9wOnQudG9wLWkudG9wLVMuY3NzKHIsIm1hcmdpblRvcCIsITApLGxlZnQ6dC5sZWZ0LWkubGVmdC1TLmNzcyhyLCJtYXJnaW5MZWZ0IiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vZmZzZXRQYXJlbnQ7d2hpbGUoZSYmInN0YXRpYyI9PT1TLmNzcyhlLCJwb3NpdGlvbiIpKWU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGV8fHJlfSl9fSksUy5lYWNoKHtzY3JvbGxMZWZ0OiJwYWdlWE9mZnNldCIsc2Nyb2xsVG9wOiJwYWdlWU9mZnNldCJ9LGZ1bmN0aW9uKHQsaSl7dmFyIG89InBhZ2VZT2Zmc2V0Ij09PWk7Uy5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gJCh0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZih4KGUpP3I9ZTo5PT09ZS5ub2RlVHlwZSYmKHI9ZS5kZWZhdWx0Vmlldyksdm9pZCAwPT09bilyZXR1cm4gcj9yW2ldOmVbdF07cj9yLnNjcm9sbFRvKG8/ci5wYWdlWE9mZnNldDpuLG8/bjpyLnBhZ2VZT2Zmc2V0KTplW3RdPW59LHQsZSxhcmd1bWVudHMubGVuZ3RoKX19KSxTLmVhY2goWyJ0b3AiLCJsZWZ0Il0sZnVuY3Rpb24oZSxuKXtTLmNzc0hvb2tzW25dPUZlKHkucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihlLHQpe2lmKHQpcmV0dXJuIHQ9V2UoZSxuKSxQZS50ZXN0KHQpP1MoZSkucG9zaXRpb24oKVtuXSsicHgiOnR9KX0pLFMuZWFjaCh7SGVpZ2h0OiJoZWlnaHQiLFdpZHRoOiJ3aWR0aCJ9LGZ1bmN0aW9uKGEscyl7Uy5lYWNoKHtwYWRkaW5nOiJpbm5lciIrYSxjb250ZW50OnMsIiI6Im91dGVyIithfSxmdW5jdGlvbihyLG8pe1MuZm5bb109ZnVuY3Rpb24oZSx0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoJiYocnx8ImJvb2xlYW4iIT10eXBlb2YgZSksaT1yfHwoITA9PT1lfHwhMD09PXQ/Im1hcmdpbiI6ImJvcmRlciIpO3JldHVybiAkKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByO3JldHVybiB4KGUpPzA9PT1vLmluZGV4T2YoIm91dGVyIik/ZVsiaW5uZXIiK2FdOmUuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50WyJjbGllbnQiK2FdOjk9PT1lLm5vZGVUeXBlPyhyPWUuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGUuYm9keVsic2Nyb2xsIithXSxyWyJzY3JvbGwiK2FdLGUuYm9keVsib2Zmc2V0IithXSxyWyJvZmZzZXQiK2FdLHJbImNsaWVudCIrYV0pKTp2b2lkIDA9PT1uP1MuY3NzKGUsdCxpKTpTLnN0eWxlKGUsdCxuLGkpfSxzLG4/ZTp2b2lkIDAsbil9fSl9KSxTLmVhY2goWyJhamF4U3RhcnQiLCJhamF4U3RvcCIsImFqYXhDb21wbGV0ZSIsImFqYXhFcnJvciIsImFqYXhTdWNjZXNzIiwiYWpheFNlbmQiXSxmdW5jdGlvbihlLHQpe1MuZm5bdF09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMub24odCxlKX19KSxTLmZuLmV4dGVuZCh7YmluZDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHRoaXMub24oZSxudWxsLHQsbil9LHVuYmluZDpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm9mZihlLG51bGwsdCl9LGRlbGVnYXRlOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiB0aGlzLm9uKHQsZSxuLHIpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoZSwiKioiKTp0aGlzLm9mZih0LGV8fCIqKiIsbil9LGhvdmVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMubW91c2VlbnRlcihlKS5tb3VzZWxlYXZlKHR8fGUpfX0pLFMuZWFjaCgiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudSIuc3BsaXQoIiAiKSxmdW5jdGlvbihlLG4pe1MuZm5bbl09ZnVuY3Rpb24oZSx0KXtyZXR1cm4gMDxhcmd1bWVudHMubGVuZ3RoP3RoaXMub24obixudWxsLGUsdCk6dGhpcy50cmlnZ2VyKG4pfX0pO3ZhciBYdD0vXltcc1x1RkVGRlx4QTBdK3xbXHNcdUZFRkZceEEwXSskL2c7Uy5wcm94eT1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaTtpZigic3RyaW5nIj09dHlwZW9mIHQmJihuPWVbdF0sdD1lLGU9biksbShlKSlyZXR1cm4gcj1zLmNhbGwoYXJndW1lbnRzLDIpLChpPWZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkodHx8dGhpcyxyLmNvbmNhdChzLmNhbGwoYXJndW1lbnRzKSkpfSkuZ3VpZD1lLmd1aWQ9ZS5ndWlkfHxTLmd1aWQrKyxpfSxTLmhvbGRSZWFkeT1mdW5jdGlvbihlKXtlP1MucmVhZHlXYWl0Kys6Uy5yZWFkeSghMCl9LFMuaXNBcnJheT1BcnJheS5pc0FycmF5LFMucGFyc2VKU09OPUpTT04ucGFyc2UsUy5ub2RlTmFtZT1BLFMuaXNGdW5jdGlvbj1tLFMuaXNXaW5kb3c9eCxTLmNhbWVsQ2FzZT1YLFMudHlwZT13LFMubm93PURhdGUubm93LFMuaXNOdW1lcmljPWZ1bmN0aW9uKGUpe3ZhciB0PVMudHlwZShlKTtyZXR1cm4oIm51bWJlciI9PT10fHwic3RyaW5nIj09PXQpJiYhaXNOYU4oZS1wYXJzZUZsb2F0KGUpKX0sUy50cmltPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lPyIiOihlKyIiKS5yZXBsYWNlKFh0LCIiKX0sImZ1bmN0aW9uIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKCJqcXVlcnkiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIFN9KTt2YXIgVnQ9Qy5qUXVlcnksR3Q9Qy4kO3JldHVybiBTLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oZSl7cmV0dXJuIEMuJD09PVMmJihDLiQ9R3QpLGUmJkMualF1ZXJ5PT09UyYmKEMualF1ZXJ5PVZ0KSxTfSwidW5kZWZpbmVkIj09dHlwZW9mIGUmJihDLmpRdWVyeT1DLiQ9UyksU30pOwo="
const bs53_1    = "QGNoYXJzZXQgIlVURi04IjsvKiEKICogQm9vdHN0cmFwICB2NS4zLjMgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pCiAqIENvcHlyaWdodCAyMDExLTIwMjQgVGhlIEJvb3RzdHJhcCBBdXRob3JzCiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKQogKi86cm9vdCxbZGF0YS1icy10aGVtZT1saWdodF17LS1icy1ibHVlOiMwZDZlZmQ7LS1icy1pbmRpZ286IzY2MTBmMjstLWJzLXB1cnBsZTojNmY0MmMxOy0tYnMtcGluazojZDYzMzg0Oy0tYnMtcmVkOiNkYzM1NDU7LS1icy1vcmFuZ2U6I2ZkN2UxNDstLWJzLXllbGxvdzojZmZjMTA3Oy0tYnMtZ3JlZW46IzE5ODc1NDstLWJzLXRlYWw6IzIwYzk5NzstLWJzLWN5YW46IzBkY2FmMDstLWJzLWJsYWNrOiMwMDA7LS1icy13aGl0ZTojZmZmOy0tYnMtZ3JheTojNmM3NTdkOy0tYnMtZ3JheS1kYXJrOiMzNDNhNDA7LS1icy1ncmF5LTEwMDojZjhmOWZhOy0tYnMtZ3JheS0yMDA6I2U5ZWNlZjstLWJzLWdyYXktMzAwOiNkZWUyZTY7LS1icy1ncmF5LTQwMDojY2VkNGRhOy0tYnMtZ3JheS01MDA6I2FkYjViZDstLWJzLWdyYXktNjAwOiM2Yzc1N2Q7LS1icy1ncmF5LTcwMDojNDk1MDU3Oy0tYnMtZ3JheS04MDA6IzM0M2E0MDstLWJzLWdyYXktOTAwOiMyMTI1Mjk7LS1icy1wcmltYXJ5OiMwZDZlZmQ7LS1icy1zZWNvbmRhcnk6IzZjNzU3ZDstLWJzLXN1Y2Nlc3M6IzE5ODc1NDstLWJzLWluZm86IzBkY2FmMDstLWJzLXdhcm5pbmc6I2ZmYzEwNzstLWJzLWRhbmdlcjojZGMzNTQ1Oy0tYnMtbGlnaHQ6I2Y4ZjlmYTstLWJzLWRhcms6IzIxMjUyOTstLWJzLXByaW1hcnktcmdiOjEzLDExMCwyNTM7LS1icy1zZWNvbmRhcnktcmdiOjEwOCwxMTcsMTI1Oy0tYnMtc3VjY2Vzcy1yZ2I6MjUsMTM1LDg0Oy0tYnMtaW5mby1yZ2I6MTMsMjAyLDI0MDstLWJzLXdhcm5pbmctcmdiOjI1NSwxOTMsNzstLWJzLWRhbmdlci1yZ2I6MjIwLDUzLDY5Oy0tYnMtbGlnaHQtcmdiOjI0OCwyNDksMjUwOy0tYnMtZGFyay1yZ2I6MzMsMzcsNDE7LS1icy1wcmltYXJ5LXRleHQtZW1waGFzaXM6IzA1MmM2NTstLWJzLXNlY29uZGFyeS10ZXh0LWVtcGhhc2lzOiMyYjJmMzI7LS1icy1zdWNjZXNzLXRleHQtZW1waGFzaXM6IzBhMzYyMjstLWJzLWluZm8tdGV4dC1lbXBoYXNpczojMDU1MTYwOy0tYnMtd2FybmluZy10ZXh0LWVtcGhhc2lzOiM2NjRkMDM7LS1icy1kYW5nZXItdGV4dC1lbXBoYXNpczojNTgxNTFjOy0tYnMtbGlnaHQtdGV4dC1lbXBoYXNpczojNDk1MDU3Oy0tYnMtZGFyay10ZXh0LWVtcGhhc2lzOiM0OTUwNTc7LS1icy1wcmltYXJ5LWJnLXN1YnRsZTojY2ZlMmZmOy0tYnMtc2Vjb25kYXJ5LWJnLXN1YnRsZTojZTJlM2U1Oy0tYnMtc3VjY2Vzcy1iZy1zdWJ0bGU6I2QxZTdkZDstLWJzLWluZm8tYmctc3VidGxlOiNjZmY0ZmM7LS1icy13YXJuaW5nLWJnLXN1YnRsZTojZmZmM2NkOy0tYnMtZGFuZ2VyLWJnLXN1YnRsZTojZjhkN2RhOy0tYnMtbGlnaHQtYmctc3VidGxlOiNmY2ZjZmQ7LS1icy1kYXJrLWJnLXN1YnRsZTojY2VkNGRhOy0tYnMtcHJpbWFyeS1ib3JkZXItc3VidGxlOiM5ZWM1ZmU7LS1icy1zZWNvbmRhcnktYm9yZGVyLXN1YnRsZTojYzRjOGNiOy0tYnMtc3VjY2Vzcy1ib3JkZXItc3VidGxlOiNhM2NmYmI7LS1icy1pbmZvLWJvcmRlci1zdWJ0bGU6IzllZWFmOTstLWJzLXdhcm5pbmctYm9yZGVyLXN1YnRsZTojZmZlNjljOy0tYnMtZGFuZ2VyLWJvcmRlci1zdWJ0bGU6I2YxYWViNTstLWJzLWxpZ2h0LWJvcmRlci1zdWJ0bGU6I2U5ZWNlZjstLWJzLWRhcmstYm9yZGVyLXN1YnRsZTojYWRiNWJkOy0tYnMtd2hpdGUtcmdiOjI1NSwyNTUsMjU1Oy0tYnMtYmxhY2stcmdiOjAsMCwwOy0tYnMtZm9udC1zYW5zLXNlcmlmOnN5c3RlbS11aSwtYXBwbGUtc3lzdGVtLCJTZWdvZSBVSSIsUm9ib3RvLCJIZWx2ZXRpY2EgTmV1ZSIsIk5vdG8gU2FucyIsIkxpYmVyYXRpb24gU2FucyIsQXJpYWwsc2Fucy1zZXJpZiwiQXBwbGUgQ29sb3IgRW1vamkiLCJTZWdvZSBVSSBFbW9qaSIsIlNlZ29lIFVJIFN5bWJvbCIsIk5vdG8gQ29sb3IgRW1vamkiOy0tYnMtZm9udC1tb25vc3BhY2U6U0ZNb25vLVJlZ3VsYXIsTWVubG8sTW9uYWNvLENvbnNvbGFzLCJMaWJlcmF0aW9uIE1vbm8iLCJDb3VyaWVyIE5ldyIsbW9ub3NwYWNlOy0tYnMtZ3JhZGllbnQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7LS1icy1ib2R5LWZvbnQtZmFtaWx5OnZhcigtLWJzLWZvbnQtc2Fucy1zZXJpZik7LS1icy1ib2R5LWZvbnQtc2l6ZToxcmVtOy0tYnMtYm9keS1mb250LXdlaWdodDo0MDA7LS1icy1ib2R5LWxpbmUtaGVpZ2h0OjEuNTstLWJzLWJvZHktY29sb3I6IzIxMjUyOTstLWJzLWJvZHktY29sb3ItcmdiOjMzLDM3LDQxOy0tYnMtYm9keS1iZzojZmZmOy0tYnMtYm9keS1iZy1yZ2I6MjU1LDI1NSwyNTU7LS1icy1lbXBoYXNpcy1jb2xvcjojMDAwOy0tYnMtZW1waGFzaXMtY29sb3ItcmdiOjAsMCwwOy0tYnMtc2Vjb25kYXJ5LWNvbG9yOnJnYmEoMzMsIDM3LCA0MSwgMC43NSk7LS1icy1zZWNvbmRhcnktY29sb3ItcmdiOjMzLDM3LDQxOy0tYnMtc2Vjb25kYXJ5LWJnOiNlOWVjZWY7LS1icy1zZWNvbmRhcnktYmctcmdiOjIzMywyMzYsMjM5Oy0tYnMtdGVydGlhcnktY29sb3I6cmdiYSgzMywgMzcsIDQxLCAwLjUpOy0tYnMtdGVydGlhcnktY29sb3ItcmdiOjMzLDM3LDQxOy0tYnMtdGVydGlhcnktYmc6I2Y4ZjlmYTstLWJzLXRlcnRpYXJ5LWJnLXJnYjoyNDgsMjQ5LDI1MDstLWJzLWhlYWRpbmctY29sb3I6aW5oZXJpdDstLWJzLWxpbmstY29sb3I6IzBkNmVmZDstLWJzLWxpbmstY29sb3ItcmdiOjEzLDExMCwyNTM7LS1icy1saW5rLWRlY29yYXRpb246dW5kZXJsaW5lOy0tYnMtbGluay1ob3Zlci1jb2xvcjojMGE1OGNhOy0tYnMtbGluay1ob3Zlci1jb2xvci1yZ2I6MTAsODgsMjAyOy0tYnMtY29kZS1jb2xvcjojZDYzMzg0Oy0tYnMtaGlnaGxpZ2h0LWNvbG9yOiMyMTI1Mjk7LS1icy1oaWdobGlnaHQtYmc6I2ZmZjNjZDstLWJzLWJvcmRlci13aWR0aDoxcHg7LS1icy1ib3JkZXItc3R5bGU6c29saWQ7LS1icy1ib3JkZXItY29sb3I6I2RlZTJlNjstLWJzLWJvcmRlci1jb2xvci10cmFuc2x1Y2VudDpyZ2JhKDAsIDAsIDAsIDAuMTc1KTstLWJzLWJvcmRlci1yYWRpdXM6MC4zNzVyZW07LS1icy1ib3JkZXItcmFkaXVzLXNtOjAuMjVyZW07LS1icy1ib3JkZXItcmFkaXVzLWxnOjAuNXJlbTstLWJzLWJvcmRlci1yYWRpdXMteGw6MXJlbTstLWJzLWJvcmRlci1yYWRpdXMteHhsOjJyZW07LS1icy1ib3JkZXItcmFkaXVzLTJ4bDp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXh4bCk7LS1icy1ib3JkZXItcmFkaXVzLXBpbGw6NTByZW07LS1icy1ib3gtc2hhZG93OjAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTstLWJzLWJveC1zaGFkb3ctc206MCAwLjEyNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4wNzUpOy0tYnMtYm94LXNoYWRvdy1sZzowIDFyZW0gM3JlbSByZ2JhKDAsIDAsIDAsIDAuMTc1KTstLWJzLWJveC1zaGFkb3ctaW5zZXQ6aW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpOy0tYnMtZm9jdXMtcmluZy13aWR0aDowLjI1cmVtOy0tYnMtZm9jdXMtcmluZy1vcGFjaXR5OjAuMjU7LS1icy1mb2N1cy1yaW5nLWNvbG9yOnJnYmEoMTMsIDExMCwgMjUzLCAwLjI1KTstLWJzLWZvcm0tdmFsaWQtY29sb3I6IzE5ODc1NDstLWJzLWZvcm0tdmFsaWQtYm9yZGVyLWNvbG9yOiMxOTg3NTQ7LS1icy1mb3JtLWludmFsaWQtY29sb3I6I2RjMzU0NTstLWJzLWZvcm0taW52YWxpZC1ib3JkZXItY29sb3I6I2RjMzU0NX1bZGF0YS1icy10aGVtZT1kYXJrXXtjb2xvci1zY2hlbWU6ZGFyazstLWJzLWJvZHktY29sb3I6I2RlZTJlNjstLWJzLWJvZHktY29sb3ItcmdiOjIyMiwyMjYsMjMwOy0tYnMtYm9keS1iZzojMjEyNTI5Oy0tYnMtYm9keS1iZy1yZ2I6MzMsMzcsNDE7LS1icy1lbXBoYXNpcy1jb2xvcjojZmZmOy0tYnMtZW1waGFzaXMtY29sb3ItcmdiOjI1NSwyNTUsMjU1Oy0tYnMtc2Vjb25kYXJ5LWNvbG9yOnJnYmEoMjIyLCAyMjYsIDIzMCwgMC43NSk7LS1icy1zZWNvbmRhcnktY29sb3ItcmdiOjIyMiwyMjYsMjMwOy0tYnMtc2Vjb25kYXJ5LWJnOiMzNDNhNDA7LS1icy1zZWNvbmRhcnktYmctcmdiOjUyLDU4LDY0Oy0tYnMtdGVydGlhcnktY29sb3I6cmdiYSgyMjIsIDIyNiwgMjMwLCAwLjUpOy0tYnMtdGVydGlhcnktY29sb3ItcmdiOjIyMiwyMjYsMjMwOy0tYnMtdGVydGlhcnktYmc6IzJiMzAzNTstLWJzLXRlcnRpYXJ5LWJnLXJnYjo0Myw0OCw1MzstLWJzLXByaW1hcnktdGV4dC1lbXBoYXNpczojNmVhOGZlOy0tYnMtc2Vjb25kYXJ5LXRleHQtZW1waGFzaXM6I2E3YWNiMTstLWJzLXN1Y2Nlc3MtdGV4dC1lbXBoYXNpczojNzViNzk4Oy0tYnMtaW5mby10ZXh0LWVtcGhhc2lzOiM2ZWRmZjY7LS1icy13YXJuaW5nLXRleHQtZW1waGFzaXM6I2ZmZGE2YTstLWJzLWRhbmdlci10ZXh0LWVtcGhhc2lzOiNlYTg2OGY7LS1icy1saWdodC10ZXh0LWVtcGhhc2lzOiNmOGY5ZmE7LS1icy1kYXJrLXRleHQtZW1waGFzaXM6I2RlZTJlNjstLWJzLXByaW1hcnktYmctc3VidGxlOiMwMzE2MzM7LS1icy1zZWNvbmRhcnktYmctc3VidGxlOiMxNjE3MTk7LS1icy1zdWNjZXNzLWJnLXN1YnRsZTojMDUxYjExOy0tYnMtaW5mby1iZy1zdWJ0bGU6IzAzMjgzMDstLWJzLXdhcm5pbmctYmctc3VidGxlOiMzMzI3MDE7LS1icy1kYW5nZXItYmctc3VidGxlOiMyYzBiMGU7LS1icy1saWdodC1iZy1zdWJ0bGU6IzM0M2E0MDstLWJzLWRhcmstYmctc3VidGxlOiMxYTFkMjA7LS1icy1wcmltYXJ5LWJvcmRlci1zdWJ0bGU6IzA4NDI5ODstLWJzLXNlY29uZGFyeS1ib3JkZXItc3VidGxlOiM0MTQ2NGI7LS1icy1zdWNjZXNzLWJvcmRlci1zdWJ0bGU6IzBmNTEzMjstLWJzLWluZm8tYm9yZGVyLXN1YnRsZTojMDg3OTkwOy0tYnMtd2FybmluZy1ib3JkZXItc3VidGxlOiM5OTc0MDQ7LS1icy1kYW5nZXItYm9yZGVyLXN1YnRsZTojODQyMDI5Oy0tYnMtbGlnaHQtYm9yZGVyLXN1YnRsZTojNDk1MDU3Oy0tYnMtZGFyay1ib3JkZXItc3VidGxlOiMzNDNhNDA7LS1icy1oZWFkaW5nLWNvbG9yOmluaGVyaXQ7LS1icy1saW5rLWNvbG9yOiM2ZWE4ZmU7LS1icy1saW5rLWhvdmVyLWNvbG9yOiM4YmI5ZmU7LS1icy1saW5rLWNvbG9yLXJnYjoxMTAsMTY4LDI1NDstLWJzLWxpbmstaG92ZXItY29sb3ItcmdiOjEzOSwxODUsMjU0Oy0tYnMtY29kZS1jb2xvcjojZTY4NWI1Oy0tYnMtaGlnaGxpZ2h0LWNvbG9yOiNkZWUyZTY7LS1icy1oaWdobGlnaHQtYmc6IzY2NGQwMzstLWJzLWJvcmRlci1jb2xvcjojNDk1MDU3Oy0tYnMtYm9yZGVyLWNvbG9yLXRyYW5zbHVjZW50OnJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7LS1icy1mb3JtLXZhbGlkLWNvbG9yOiM3NWI3OTg7LS1icy1mb3JtLXZhbGlkLWJvcmRlci1jb2xvcjojNzViNzk4Oy0tYnMtZm9ybS1pbnZhbGlkLWNvbG9yOiNlYTg2OGY7LS1icy1mb3JtLWludmFsaWQtYm9yZGVyLWNvbG9yOiNlYTg2OGZ9Kiw6OmFmdGVyLDo6YmVmb3Jle2JveC1zaXppbmc6Ym9yZGVyLWJveH1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246bm8tcHJlZmVyZW5jZSl7OnJvb3R7c2Nyb2xsLWJlaGF2aW9yOnNtb290aH19Ym9keXttYXJnaW46MDtmb250LWZhbWlseTp2YXIoLS1icy1ib2R5LWZvbnQtZmFtaWx5KTtmb250LXNpemU6dmFyKC0tYnMtYm9keS1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLWJzLWJvZHktZm9udC13ZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLWJzLWJvZHktbGluZS1oZWlnaHQpO2NvbG9yOnZhcigtLWJzLWJvZHktY29sb3IpO3RleHQtYWxpZ246dmFyKC0tYnMtYm9keS10ZXh0LWFsaWduKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLWJvZHktYmcpOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudH1ocnttYXJnaW46MXJlbSAwO2NvbG9yOmluaGVyaXQ7Ym9yZGVyOjA7Ym9yZGVyLXRvcDp2YXIoLS1icy1ib3JkZXItd2lkdGgpIHNvbGlkO29wYWNpdHk6LjI1fS5oMSwuaDIsLmgzLC5oNCwuaDUsLmg2LGgxLGgyLGgzLGg0LGg1LGg2e21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOi41cmVtO2ZvbnQtd2VpZ2h0OjUwMDtsaW5lLWhlaWdodDoxLjI7Y29sb3I6dmFyKC0tYnMtaGVhZGluZy1jb2xvcil9LmgxLGgxe2ZvbnQtc2l6ZTpjYWxjKDEuMzc1cmVtICsgMS41dncpfUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmgxLGgxe2ZvbnQtc2l6ZToyLjVyZW19fS5oMixoMntmb250LXNpemU6Y2FsYygxLjMyNXJlbSArIC45dncpfUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmgyLGgye2ZvbnQtc2l6ZToycmVtfX0uaDMsaDN7Zm9udC1zaXplOmNhbGMoMS4zcmVtICsgLjZ2dyl9QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuaDMsaDN7Zm9udC1zaXplOjEuNzVyZW19fS5oNCxoNHtmb250LXNpemU6Y2FsYygxLjI3NXJlbSArIC4zdncpfUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7Lmg0LGg0e2ZvbnQtc2l6ZToxLjVyZW19fS5oNSxoNXtmb250LXNpemU6MS4yNXJlbX0uaDYsaDZ7Zm9udC1zaXplOjFyZW19cHttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToxcmVtfWFiYnJbdGl0bGVdey13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSBkb3R0ZWQ7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSBkb3R0ZWQ7Y3Vyc29yOmhlbHA7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6bm9uZTt0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6bm9uZX1hZGRyZXNze21hcmdpbi1ib3R0b206MXJlbTtmb250LXN0eWxlOm5vcm1hbDtsaW5lLWhlaWdodDppbmhlcml0fW9sLHVse3BhZGRpbmctbGVmdDoycmVtfWRsLG9sLHVse21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjFyZW19b2wgb2wsb2wgdWwsdWwgb2wsdWwgdWx7bWFyZ2luLWJvdHRvbTowfWR0e2ZvbnQtd2VpZ2h0OjcwMH1kZHttYXJnaW4tYm90dG9tOi41cmVtO21hcmdpbi1sZWZ0OjB9YmxvY2txdW90ZXttYXJnaW46MCAwIDFyZW19YixzdHJvbmd7Zm9udC13ZWlnaHQ6Ym9sZGVyfS5zbWFsbCxzbWFsbHtmb250LXNpemU6Ljg3NWVtfS5tYXJrLG1hcmt7cGFkZGluZzouMTg3NWVtO2NvbG9yOnZhcigtLWJzLWhpZ2hsaWdodC1jb2xvcik7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1oaWdobGlnaHQtYmcpfXN1YixzdXB7cG9zaXRpb246cmVsYXRpdmU7Zm9udC1zaXplOi43NWVtO2xpbmUtaGVpZ2h0OjA7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3Vie2JvdHRvbTotLjI1ZW19c3Vwe3RvcDotLjVlbX1he2NvbG9yOnJnYmEodmFyKC0tYnMtbGluay1jb2xvci1yZ2IpLHZhcigtLWJzLWxpbmstb3BhY2l0eSwxKSk7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX1hOmhvdmVyey0tYnMtbGluay1jb2xvci1yZ2I6dmFyKC0tYnMtbGluay1ob3Zlci1jb2xvci1yZ2IpfWE6bm90KFtocmVmXSk6bm90KFtjbGFzc10pLGE6bm90KFtocmVmXSk6bm90KFtjbGFzc10pOmhvdmVye2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Y29kZSxrYmQscHJlLHNhbXB7Zm9udC1mYW1pbHk6dmFyKC0tYnMtZm9udC1tb25vc3BhY2UpO2ZvbnQtc2l6ZToxZW19cHJle2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MXJlbTtvdmVyZmxvdzphdXRvO2ZvbnQtc2l6ZTouODc1ZW19cHJlIGNvZGV7Zm9udC1zaXplOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDt3b3JkLWJyZWFrOm5vcm1hbH1jb2Rle2ZvbnQtc2l6ZTouODc1ZW07Y29sb3I6dmFyKC0tYnMtY29kZS1jb2xvcik7d29yZC13cmFwOmJyZWFrLXdvcmR9YT5jb2Rle2NvbG9yOmluaGVyaXR9a2Jke3BhZGRpbmc6LjE4NzVyZW0gLjM3NXJlbTtmb250LXNpemU6Ljg3NWVtO2NvbG9yOnZhcigtLWJzLWJvZHktYmcpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtYm9keS1jb2xvcik7Ym9yZGVyLXJhZGl1czouMjVyZW19a2JkIGtiZHtwYWRkaW5nOjA7Zm9udC1zaXplOjFlbX1maWd1cmV7bWFyZ2luOjAgMCAxcmVtfWltZyxzdmd7dmVydGljYWwtYWxpZ246bWlkZGxlfXRhYmxle2NhcHRpb24tc2lkZTpib3R0b207Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlfWNhcHRpb257cGFkZGluZy10b3A6LjVyZW07cGFkZGluZy1ib3R0b206LjVyZW07Y29sb3I6dmFyKC0tYnMtc2Vjb25kYXJ5LWNvbG9yKTt0ZXh0LWFsaWduOmxlZnR9dGh7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtYWxpZ246LXdlYmtpdC1tYXRjaC1wYXJlbnR9dGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsdHJ7Ym9yZGVyLWNvbG9yOmluaGVyaXQ7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDowfWxhYmVse2Rpc3BsYXk6aW5saW5lLWJsb2NrfWJ1dHRvbntib3JkZXItcmFkaXVzOjB9YnV0dG9uOmZvY3VzOm5vdCg6Zm9jdXMtdmlzaWJsZSl7b3V0bGluZTowfWJ1dHRvbixpbnB1dCxvcHRncm91cCxzZWxlY3QsdGV4dGFyZWF7bWFyZ2luOjA7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtsaW5lLWhlaWdodDppbmhlcml0fWJ1dHRvbixzZWxlY3R7dGV4dC10cmFuc2Zvcm06bm9uZX1bcm9sZT1idXR0b25de2N1cnNvcjpwb2ludGVyfXNlbGVjdHt3b3JkLXdyYXA6bm9ybWFsfXNlbGVjdDpkaXNhYmxlZHtvcGFjaXR5OjF9W2xpc3RdOm5vdChbdHlwZT1kYXRlXSk6bm90KFt0eXBlPWRhdGV0aW1lLWxvY2FsXSk6bm90KFt0eXBlPW1vbnRoXSk6bm90KFt0eXBlPXdlZWtdKTpub3QoW3R5cGU9dGltZV0pOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3J7ZGlzcGxheTpub25lIWltcG9ydGFudH1bdHlwZT1idXR0b25dLFt0eXBlPXJlc2V0XSxbdHlwZT1zdWJtaXRdLGJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufVt0eXBlPWJ1dHRvbl06bm90KDpkaXNhYmxlZCksW3R5cGU9cmVzZXRdOm5vdCg6ZGlzYWJsZWQpLFt0eXBlPXN1Ym1pdF06bm90KDpkaXNhYmxlZCksYnV0dG9uOm5vdCg6ZGlzYWJsZWQpe2N1cnNvcjpwb2ludGVyfTo6LW1vei1mb2N1cy1pbm5lcntwYWRkaW5nOjA7Ym9yZGVyLXN0eWxlOm5vbmV9dGV4dGFyZWF7cmVzaXplOnZlcnRpY2FsfWZpZWxkc2V0e21pbi13aWR0aDowO3BhZGRpbmc6MDttYXJnaW46MDtib3JkZXI6MH1sZWdlbmR7ZmxvYXQ6bGVmdDt3aWR0aDoxMDAlO3BhZGRpbmc6MDttYXJnaW4tYm90dG9tOi41cmVtO2ZvbnQtc2l6ZTpjYWxjKDEuMjc1cmVtICsgLjN2dyk7bGluZS1oZWlnaHQ6aW5oZXJpdH1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpe2xlZ2VuZHtmb250LXNpemU6MS41cmVtfX1sZWdlbmQrKntjbGVhcjpsZWZ0fTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWRheS1maWVsZCw6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1maWVsZHMtd3JhcHBlciw6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1ob3VyLWZpZWxkLDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1pbnV0ZSw6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1tb250aC1maWVsZCw6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC10ZXh0LDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXllYXItZmllbGR7cGFkZGluZzowfTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbntoZWlnaHQ6YXV0b31bdHlwZT1zZWFyY2hdey13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7b3V0bGluZS1vZmZzZXQ6LTJweH06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9Ojotd2Via2l0LWNvbG9yLXN3YXRjaC13cmFwcGVye3BhZGRpbmc6MH06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9ue2ZvbnQ6aW5oZXJpdDstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufTo6ZmlsZS1zZWxlY3Rvci1idXR0b257Zm9udDppbmhlcml0Oy13ZWJraXQtYXBwZWFyYW5jZTpidXR0b259b3V0cHV0e2Rpc3BsYXk6aW5saW5lLWJsb2NrfWlmcmFtZXtib3JkZXI6MH1zdW1tYXJ5e2Rpc3BsYXk6bGlzdC1pdGVtO2N1cnNvcjpwb2ludGVyfXByb2dyZXNze3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LmxlYWR7Zm9udC1zaXplOjEuMjVyZW07Zm9udC13ZWlnaHQ6MzAwfS5kaXNwbGF5LTF7Zm9udC1zaXplOmNhbGMoMS42MjVyZW0gKyA0LjV2dyk7Zm9udC13ZWlnaHQ6MzAwO2xpbmUtaGVpZ2h0OjEuMn1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey5kaXNwbGF5LTF7Zm9udC1zaXplOjVyZW19fS5kaXNwbGF5LTJ7Zm9udC1zaXplOmNhbGMoMS41NzVyZW0gKyAzLjl2dyk7Zm9udC13ZWlnaHQ6MzAwO2xpbmUtaGVpZ2h0OjEuMn1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey5kaXNwbGF5LTJ7Zm9udC1zaXplOjQuNXJlbX19LmRpc3BsYXktM3tmb250LXNpemU6Y2FsYygxLjUyNXJlbSArIDMuM3Z3KTtmb250LXdlaWdodDozMDA7bGluZS1oZWlnaHQ6MS4yfUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmRpc3BsYXktM3tmb250LXNpemU6NHJlbX19LmRpc3BsYXktNHtmb250LXNpemU6Y2FsYygxLjQ3NXJlbSArIDIuN3Z3KTtmb250LXdlaWdodDozMDA7bGluZS1oZWlnaHQ6MS4yfUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmRpc3BsYXktNHtmb250LXNpemU6My41cmVtfX0uZGlzcGxheS01e2ZvbnQtc2l6ZTpjYWxjKDEuNDI1cmVtICsgMi4xdncpO2ZvbnQtd2VpZ2h0OjMwMDtsaW5lLWhlaWdodDoxLjJ9QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuZGlzcGxheS01e2ZvbnQtc2l6ZTozcmVtfX0uZGlzcGxheS02e2ZvbnQtc2l6ZTpjYWxjKDEuMzc1cmVtICsgMS41dncpO2ZvbnQtd2VpZ2h0OjMwMDtsaW5lLWhlaWdodDoxLjJ9QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuZGlzcGxheS02e2ZvbnQtc2l6ZToyLjVyZW19fS5saXN0LXVuc3R5bGVke3BhZGRpbmctbGVmdDowO2xpc3Qtc3R5bGU6bm9uZX0ubGlzdC1pbmxpbmV7cGFkZGluZy1sZWZ0OjA7bGlzdC1zdHlsZTpub25lfS5saXN0LWlubGluZS1pdGVte2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5saXN0LWlubGluZS1pdGVtOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLXJpZ2h0Oi41cmVtfS5pbml0aWFsaXNte2ZvbnQtc2l6ZTouODc1ZW07dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfS5ibG9ja3F1b3Rle21hcmdpbi1ib3R0b206MXJlbTtmb250LXNpemU6MS4yNXJlbX0uYmxvY2txdW90ZT46bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjB9LmJsb2NrcXVvdGUtZm9vdGVye21hcmdpbi10b3A6LTFyZW07bWFyZ2luLWJvdHRvbToxcmVtO2ZvbnQtc2l6ZTouODc1ZW07Y29sb3I6IzZjNzU3ZH0uYmxvY2txdW90ZS1mb290ZXI6OmJlZm9yZXtjb250ZW50OiLigJTCoCJ9LmltZy1mbHVpZHttYXgtd2lkdGg6MTAwJTtoZWlnaHQ6YXV0b30uaW1nLXRodW1ibmFpbHtwYWRkaW5nOi4yNXJlbTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLWJvZHktYmcpO2JvcmRlcjp2YXIoLS1icy1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzKTttYXgtd2lkdGg6MTAwJTtoZWlnaHQ6YXV0b30uZmlndXJle2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5maWd1cmUtaW1ne21hcmdpbi1ib3R0b206LjVyZW07bGluZS1oZWlnaHQ6MX0uZmlndXJlLWNhcHRpb257Zm9udC1zaXplOi44NzVlbTtjb2xvcjp2YXIoLS1icy1zZWNvbmRhcnktY29sb3IpfS5jb250YWluZXIsLmNvbnRhaW5lci1mbHVpZCwuY29udGFpbmVyLWxnLC5jb250YWluZXItbWQsLmNvbnRhaW5lci1zbSwuY29udGFpbmVyLXhsLC5jb250YWluZXIteHhsey0tYnMtZ3V0dGVyLXg6MS41cmVtOy0tYnMtZ3V0dGVyLXk6MDt3aWR0aDoxMDAlO3BhZGRpbmctcmlnaHQ6Y2FsYyh2YXIoLS1icy1ndXR0ZXIteCkgKiAuNSk7cGFkZGluZy1sZWZ0OmNhbGModmFyKC0tYnMtZ3V0dGVyLXgpICogLjUpO21hcmdpbi1yaWdodDphdXRvO21hcmdpbi1sZWZ0OmF1dG99QG1lZGlhIChtaW4td2lkdGg6NTc2cHgpey5jb250YWluZXIsLmNvbnRhaW5lci1zbXttYXgtd2lkdGg6NTQwcHh9fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuY29udGFpbmVyLC5jb250YWluZXItbWQsLmNvbnRhaW5lci1zbXttYXgtd2lkdGg6NzIwcHh9fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuY29udGFpbmVyLC5jb250YWluZXItbGcsLmNvbnRhaW5lci1tZCwuY29udGFpbmVyLXNte21heC13aWR0aDo5NjBweH19QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuY29udGFpbmVyLC5jb250YWluZXItbGcsLmNvbnRhaW5lci1tZCwuY29udGFpbmVyLXNtLC5jb250YWluZXIteGx7bWF4LXdpZHRoOjExNDBweH19QG1lZGlhIChtaW4td2lkdGg6MTQwMHB4KXsuY29udGFpbmVyLC5jb250YWluZXItbGcsLmNvbnRhaW5lci1tZCwuY29udGFpbmVyLXNtLC5jb250YWluZXIteGwsLmNvbnRhaW5lci14eGx7bWF4LXdpZHRoOjEzMjBweH19OnJvb3R7LS1icy1icmVha3BvaW50LXhzOjA7LS1icy1icmVha3BvaW50LXNtOjU3NnB4Oy0tYnMtYnJlYWtwb2ludC1tZDo3NjhweDstLWJzLWJyZWFrcG9pbnQtbGc6OTkycHg7LS1icy1icmVha3BvaW50LXhsOjEyMDBweDstLWJzLWJyZWFrcG9pbnQteHhsOjE0MDBweH0ucm93ey0tYnMtZ3V0dGVyLXg6MS41cmVtOy0tYnMtZ3V0dGVyLXk6MDtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7bWFyZ2luLXRvcDpjYWxjKC0xICogdmFyKC0tYnMtZ3V0dGVyLXkpKTttYXJnaW4tcmlnaHQ6Y2FsYygtLjUgKiB2YXIoLS1icy1ndXR0ZXIteCkpO21hcmdpbi1sZWZ0OmNhbGMoLS41ICogdmFyKC0tYnMtZ3V0dGVyLXgpKX0ucm93Pip7ZmxleC1zaHJpbms6MDt3aWR0aDoxMDAlO21heC13aWR0aDoxMDAlO3BhZGRpbmctcmlnaHQ6Y2FsYyh2YXIoLS1icy1ndXR0ZXIteCkgKiAuNSk7cGFkZGluZy1sZWZ0OmNhbGModmFyKC0tYnMtZ3V0dGVyLXgpICogLjUpO21hcmdpbi10b3A6dmFyKC0tYnMtZ3V0dGVyLXkpfS5jb2x7ZmxleDoxIDAgMCV9LnJvdy1jb2xzLWF1dG8+KntmbGV4OjAgMCBhdXRvO3dpZHRoOmF1dG99LnJvdy1jb2xzLTE+KntmbGV4OjAgMCBhdXRvO3dpZHRoOjEwMCV9LnJvdy1jb2xzLTI+KntmbGV4OjAgMCBhdXRvO3dpZHRoOjUwJX0ucm93LWNvbHMtMz4qe2ZsZXg6MCAwIGF1dG87d2lkdGg6MzMuMzMzMzMzMzMlfS5yb3ctY29scy00Pip7ZmxleDowIDAgYXV0bzt3aWR0aDoyNSV9LnJvdy1jb2xzLTU+KntmbGV4OjAgMCBhdXRvO3dpZHRoOjIwJX0ucm93LWNvbHMtNj4qe2ZsZXg6MCAwIGF1dG87d2lkdGg6MTYuNjY2NjY2NjclfS5jb2wtYXV0b3tmbGV4OjAgMCBhdXRvO3dpZHRoOmF1dG99LmNvbC0xe2ZsZXg6MCAwIGF1dG87d2lkdGg6OC4zMzMzMzMzMyV9LmNvbC0ye2ZsZXg6MCAwIGF1dG87d2lkdGg6MTYuNjY2NjY2NjclfS5jb2wtM3tmbGV4OjAgMCBhdXRvO3dpZHRoOjI1JX0uY29sLTR7ZmxleDowIDAgYXV0bzt3aWR0aDozMy4zMzMzMzMzMyV9LmNvbC01e2ZsZXg6MCAwIGF1dG87d2lkdGg6NDEuNjY2NjY2NjclfS5jb2wtNntmbGV4OjAgMCBhdXRvO3dpZHRoOjUwJX0uY29sLTd7ZmxleDowIDAgYXV0bzt3aWR0aDo1OC4zMzMzMzMzMyV9LmNvbC04e2ZsZXg6MCAwIGF1dG87d2lkdGg6NjYuNjY2NjY2NjclfS5jb2wtOXtmbGV4OjAgMCBhdXRvO3dpZHRoOjc1JX0uY29sLTEwe2ZsZXg6MCAwIGF1dG87d2lkdGg6ODMuMzMzMzMzMzMlfS5jb2wtMTF7ZmxleDowIDAgYXV0bzt3aWR0aDo5MS42NjY2NjY2NyV9LmNvbC0xMntmbGV4OjAgMCBhdXRvO3dpZHRoOjEwMCV9Lm9mZnNldC0xe21hcmdpbi1sZWZ0OjguMzMzMzMzMzMlfS5vZmZzZXQtMnttYXJnaW4tbGVmdDoxNi42NjY2NjY2NyV9Lm9mZnNldC0ze21hcmdpbi1sZWZ0OjI1JX0ub2Zmc2V0LTR7bWFyZ2luLWxlZnQ6MzMuMzMzMzMzMzMlfS5vZmZzZXQtNXttYXJnaW4tbGVmdDo0MS42NjY2NjY2NyV9Lm9mZnNldC02e21hcmdpbi1sZWZ0OjUwJX0ub2Zmc2V0LTd7bWFyZ2luLWxlZnQ6NTguMzMzMzMzMzMlfS5vZmZzZXQtOHttYXJnaW4tbGVmdDo2Ni42NjY2NjY2NyV9Lm9mZnNldC05e21hcmdpbi1sZWZ0Ojc1JX0ub2Zmc2V0LTEwe21hcmdpbi1sZWZ0OjgzLjMzMzMzMzMzJX0ub2Zmc2V0LTExe21hcmdpbi1sZWZ0OjkxLjY2NjY2NjY3JX0uZy0wLC5neC0wey0tYnMtZ3V0dGVyLXg6MH0uZy0wLC5neS0wey0tYnMtZ3V0dGVyLXk6MH0uZy0xLC5neC0xey0tYnMtZ3V0dGVyLXg6MC4yNXJlbX0uZy0xLC5neS0xey0tYnMtZ3V0dGVyLXk6MC4yNXJlbX0uZy0yLC5neC0yey0tYnMtZ3V0dGVyLXg6MC41cmVtfS5nLTIsLmd5LTJ7LS1icy1ndXR0ZXIteTowLjVyZW19LmctMywuZ3gtM3stLWJzLWd1dHRlci14OjFyZW19LmctMywuZ3ktM3stLWJzLWd1dHRlci15OjFyZW19LmctNCwuZ3gtNHstLWJzLWd1dHRlci14OjEuNXJlbX0uZy00LC5neS00ey0tYnMtZ3V0dGVyLXk6MS41cmVtfS5nLTUsLmd4LTV7LS1icy1ndXR0ZXIteDozcmVtfS5nLTUsLmd5LTV7LS1icy1ndXR0ZXIteTozcmVtfUBtZWRpYSAobWluLXdpZHRoOjU3NnB4KXsuY29sLXNte2ZsZXg6MSAwIDAlfS5yb3ctY29scy1zbS1hdXRvPip7ZmxleDowIDAgYXV0bzt3aWR0aDphdXRvfS5yb3ctY29scy1zbS0xPip7ZmxleDowIDAgYXV0bzt3aWR0aDoxMDAlfS5yb3ctY29scy1zbS0yPip7ZmxleDowIDAgYXV0bzt3aWR0aDo1MCV9LnJvdy1jb2xzLXNtLTM+KntmbGV4OjAgMCBhdXRvO3dpZHRoOjMzLjMzMzMzMzMzJX0ucm93LWNvbHMtc20tND4qe2ZsZXg6MCAwIGF1dG87d2lkdGg6MjUlfS5yb3ctY29scy1zbS01Pip7ZmxleDowIDAgYXV0bzt3aWR0aDoyMCV9LnJvdy1jb2xzLXNtLTY+KntmbGV4OjAgMCBhdXRvO3dpZHRoOjE2LjY2NjY2NjY3JX0uY29sLXNtLWF1dG97ZmxleDowIDAgYXV0bzt3aWR0aDphdXRvfS5jb2wtc20tMXtmbGV4OjAgMCBhdXRvO3dpZHRoOjguMzMzMzMzMzMlfS5jb2wtc20tMntmbGV4OjAgMCBhdXRvO3dpZHRoOjE2LjY2NjY2NjY3JX0uY29sLXNtLTN7ZmxleDowIDAgYXV0bzt3aWR0aDoyNSV9LmNvbC1zbS00e2ZsZXg6MCAwIGF1dG87d2lkdGg6MzMuMzMzMzMzMzMlfS5jb2wtc20tNXtmbGV4OjAgMCBhdXRvO3dpZHRoOjQxLjY2NjY2NjY3JX0uY29sLXNtLTZ7ZmxleDowIDAgYXV0bzt3aWR0aDo1MCV9LmNvbC1zbS03e2ZsZXg6MCAwIGF1dG87d2lkdGg6NTguMzMzMzMzMzMlfS5jb2wtc20tOHtmbGV4OjAgMCBhdXRvO3dpZHRoOjY2LjY2NjY2NjY3JX0uY29sLXNtLTl7ZmxleDowIDAgYXV0bzt3aWR0aDo3NSV9LmNvbC1zbS0xMHtmbGV4OjAgMCBhdXRvO3dpZHRoOjgzLjMzMzMzMzMzJX0uY29sLXNtLTExe2ZsZXg6MCAwIGF1dG87d2lkdGg6OTEuNjY2NjY2NjclfS5jb2wtc20tMTJ7ZmxleDowIDAgYXV0bzt3aWR0aDoxMDAlfS5vZmZzZXQtc20tMHttYXJnaW4tbGVmdDowfS5vZmZzZXQtc20tMXttYXJnaW4tbGVmdDo4LjMzMzMzMzMzJX0ub2Zmc2V0LXNtLTJ7bWFyZ2luLWxlZnQ6MTYuNjY2NjY2NjclfS5vZmZzZXQtc20tM3ttYXJnaW4tbGVmdDoyNSV9Lm9mZnNldC1zbS00e21hcmdpbi1sZWZ0OjMzLjMzMzMzMzMzJX0ub2Zmc2V0LXNtLTV7bWFyZ2luLWxlZnQ6NDEuNjY2NjY2NjclfS5vZmZzZXQtc20tNnttYXJnaW4tbGVmdDo1MCV9Lm9mZnNldC1zbS03e21hcmdpbi1sZWZ0OjU4LjMzMzMzMzMzJX0ub2Zmc2V0LXNtLTh7bWFyZ2luLWxlZnQ6NjYuNjY2NjY2NjclfS5vZmZzZXQtc20tOXttYXJnaW4tbGVmdDo3NSV9Lm9mZnNldC1zbS0xMHttYXJnaW4tbGVmdDo4My4zMzMzMzMzMyV9Lm9mZnNldC1zbS0xMXttYXJnaW4tbGVmdDo5MS42NjY2NjY2NyV9Lmctc20tMCwuZ3gtc20tMHstLWJzLWd1dHRlci14OjB9Lmctc20tMCwuZ3ktc20tMHstLWJzLWd1dHRlci15OjB9Lmctc20tMSwuZ3gtc20tMXstLWJzLWd1dHRlci14OjAuMjVyZW19Lmctc20tMSwuZ3ktc20tMXstLWJzLWd1dHRlci15OjAuMjVyZW19Lmctc20tMiwuZ3gtc20tMnstLWJzLWd1dHRlci14OjAuNXJlbX0uZy1zbS0yLC5neS1zbS0yey0tYnMtZ3V0dGVyLXk6MC41cmVtfS5nLXNtLTMsLmd4LXNtLTN7LS1icy1ndXR0ZXIteDoxcmVtfS5nLXNtLTMsLmd5LXNtLTN7LS1icy1ndXR0ZXIteToxcmVtfS5nLXNtLTQsLmd4LXNtLTR7LS1icy1ndXR0ZXIteDoxLjVyZW19Lmctc20tNCwuZ3ktc20tNHstLWJzLWd1dHRlci15OjEuNXJlbX0uZy1zbS01LC5neC1zbS01ey0tYnMtZ3V0dGVyLXg6M3JlbX0uZy1zbS01LC5neS1zbS01ey0tYnMtZ3V0dGVyLXk6M3JlbX19QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5jb2wtbWR7ZmxleDoxIDAgMCV9LnJvdy1jb2xzLW1kLWF1dG8+KntmbGV4OjAgMCBhdXRvO3dpZHRoOmF1dG99LnJvdy1jb2xzLW1kLTE+KntmbGV4OjAgMCBhdXRvO3dpZHRoOjEwMCV9LnJvdy1jb2xzLW1kLTI+KntmbGV4OjAgMCBhdXRvO3dpZHRoOjUwJX0ucm93LWNvbHMtbWQtMz4qe2ZsZXg6MCAwIGF1dG87d2lkdGg6MzMuMzMzMzMzMzMlfS5yb3ctY29scy1tZC00Pip7ZmxleDowIDAgYXV0bzt3aWR0aDoyNSV9LnJvdy1jb2xzLW1kLTU+KntmbGV4OjAgMCBhdXRvO3dpZHRoOjIwJX0ucm93LWNvbHMtbWQtNj4qe2ZsZXg6MCAwIGF1dG87d2lkdGg6MTYuNjY2NjY2NjclfS5jb2wtbWQtYXV0b3tmbGV4OjAgMCBhdXRvO3dpZHRoOmF1dG99LmNvbC1tZC0xe2ZsZXg6MCAwIGF1dG87d2lkdGg6OC4zMzMzMzMzMyV9LmNvbC1tZC0ye2ZsZXg6MCAwIGF1dG87d2lkdGg6MTYuNjY2NjY2NjclfS5jb2wtbWQtM3tmbGV4OjAgMCBhdXRvO3dpZHRoOjI1JX0uY29sLW1kLTR7ZmxleDowIDAgYXV0bzt3aWR0aDozMy4zMzMzMzMzMyV9LmNvbC1tZC01e2ZsZXg6MCAwIGF1dG87d2lkdGg6NDEuNjY2NjY2NjclfS5jb2wtbWQtNntmbGV4OjAgMCBhdXRvO3dpZHRoOjUwJX0uY29sLW1kLTd7ZmxleDowIDAgYXV0bzt3aWR0aDo1OC4zMzMzMzMzMyV9LmNvbC1tZC04e2ZsZXg6MCAwIGF1dG87d2lkdGg6NjYuNjY2NjY2NjclfS5jb2wtbWQtOXtmbGV4OjAgMCBhdXRvO3dpZHRoOjc1JX0uY29sLW1kLTEwe2ZsZXg6MCAwIGF1dG87d2lkdGg6ODMuMzMzMzMzMzMlfS5jb2wtbWQtMTF7ZmxleDowIDAgYXV0bzt3aWR0aDo5MS42NjY2NjY2NyV9LmNvbC1tZC0xMntmbGV4OjAgMCBhdXRvO3dpZHRoOjEwMCV9Lm9mZnNldC1tZC0we21hcmdpbi1sZWZ0OjB9Lm9mZnNldC1tZC0xe21hcmdpbi1sZWZ0OjguMzMzMzMzMzMlfS5vZmZzZXQtbWQtMnttYXJnaW4tbGVmdDoxNi42NjY2NjY2NyV9Lm9mZnNldC1tZC0ze21hcmdpbi1sZWZ0OjI1JX0ub2Zmc2V0LW1kLTR7bWFyZ2luLWxlZnQ6MzMuMzMzMzMzMzMlfS5vZmZzZXQtbWQtNXttYXJnaW4tbGVmdDo0MS42NjY2NjY2NyV9Lm9mZnNldC1tZC02e21hcmdpbi1sZWZ0OjUwJX0ub2Zmc2V0LW1kLTd7bWFyZ2luLWxlZnQ6NTguMzMzMzMzMzMlfS5vZmZzZXQtbWQtOHttYXJnaW4tbGVmdDo2Ni42NjY2NjY2NyV9Lm9mZnNldC1tZC05e21hcmdpbi1sZWZ0Ojc1JX0ub2Zmc2V0LW1kLTEwe21hcmdpbi1sZWZ0OjgzLjMzMzMzMzMzJX0ub2Zmc2V0LW1kLTExe21hcmdpbi1sZWZ0OjkxLjY2NjY2NjY3JX0uZy1tZC0wLC5neC1tZC0wey0tYnMtZ3V0dGVyLXg6MH0uZy1tZC0wLC5neS1tZC0wey0tYnMtZ3V0dGVyLXk6MH0uZy1tZC0xLC5neC1tZC0xey0tYnMtZ3V0dGVyLXg6MC4yNXJlbX0uZy1tZC0xLC5neS1tZC0xey0tYnMtZ3V0dGVyLXk6MC4yNXJlbX0uZy1tZC0yLC5neC1tZC0yey0tYnMtZ3V0dGVyLXg6MC41cmVtfS5nLW1kLTIsLmd5LW1kLTJ7LS1icy1ndXR0ZXIteTowLjVyZW19LmctbWQtMywuZ3gtbWQtM3stLWJzLWd1dHRlci14OjFyZW19LmctbWQtMywuZ3ktbWQtM3stLWJzLWd1dHRlci15OjFyZW19LmctbWQtNCwuZ3gtbWQtNHstLWJzLWd1dHRlci14OjEuNXJlbX0uZy1tZC00LC5neS1tZC00ey0tYnMtZ3V0dGVyLXk6MS41cmVtfS5nLW1kLTUsLmd4LW1kLTV7LS1icy1ndXR0ZXIteDozcmVtfS5nLW1kLTUsLmd5LW1kLTV7LS1icy1ndXR0ZXIteTozcmVtfX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7LmNvbC1sZ3tmbGV4OjEgMCAwJX0ucm93LWNvbHMtbGctYXV0bz4qe2ZsZXg6MCAwIGF1dG87d2lkdGg6YXV0b30ucm93LWNvbHMtbGctMT4qe2ZsZXg6MCAwIGF1dG87d2lkdGg6MTAwJX0ucm93LWNvbHMtbGctMj4qe2ZsZXg6MCAwIGF1dG87d2lkdGg6NTAlfS5yb3ctY29scy1sZy0zPip7ZmxleDowIDAgYXV0bzt3aWR0aDozMy4zMzMzMzMzMyV9LnJvdy1jb2xzLWxnLTQ+KntmbGV4OjAgMCBhdXRvO3dpZHRoOjI1JX0ucm93LWNvbHMtbGctNT4qe2ZsZXg6MCAwIGF1dG87d2lkdGg6MjAlfS5yb3ctY29scy1sZy02Pip7ZmxleDowIDAgYXV0bzt3aWR0aDoxNi42NjY2NjY2NyV9LmNvbC1sZy1hdXRve2ZsZXg6MCAwIGF1dG87d2lkdGg6YXV0b30uY29sLWxnLTF7ZmxleDowIDAgYXV0bzt3aWR0aDo4LjMzMzMzMzMzJX0uY29sLWxnLTJ7ZmxleDowIDAgYXV0bzt3aWR0aDoxNi42NjY2NjY2NyV9LmNvbC1sZy0ze2ZsZXg6MCAwIGF1dG87d2lkdGg6MjUlfS5jb2wtbGctNHtmbGV4OjAgMCBhdXRvO3dpZHRoOjMzLjMzMzMzMzMzJX0uY29sLWxnLTV7ZmxleDowIDAgYXV0bzt3aWR0aDo0MS42NjY2NjY2NyV9LmNvbC1sZy02e2ZsZXg6MCAwIGF1dG87d2lkdGg6NTAlfS5jb2wtbGctN3tmbGV4OjAgMCBhdXRvO3dpZHRoOjU4LjMzMzMzMzMzJX0uY29sLWxnLTh7ZmxleDowIDAgYXV0bzt3aWR0aDo2Ni42NjY2NjY2NyV9LmNvbC1sZy05e2ZsZXg6MCAwIGF1dG87d2lkdGg6NzUlfS5jb2wtbGctMTB7ZmxleDowIDAgYXV0bzt3aWR0aDo4My4zMzMzMzMzMyV9LmNvbC1sZy0xMXtmbGV4OjAgMCBhdXRvO3dpZHRoOjkxLjY2NjY2NjY3JX0uY29sLWxnLTEye2ZsZXg6MCAwIGF1dG87d2lkdGg6MTAwJX0ub2Zmc2V0LWxnLTB7bWFyZ2luLWxlZnQ6MH0ub2Zmc2V0LWxnLTF7bWFyZ2luLWxlZnQ6OC4zMzMzMzMzMyV9Lm9mZnNldC1sZy0ye21hcmdpbi1sZWZ0OjE2LjY2NjY2NjY3JX0ub2Zmc2V0LWxnLTN7bWFyZ2luLWxlZnQ6MjUlfS5vZmZzZXQtbGctNHttYXJnaW4tbGVmdDozMy4zMzMzMzMzMyV9Lm9mZnNldC1sZy01e21hcmdpbi1sZWZ0OjQxLjY2NjY2NjY3JX0ub2Zmc2V0LWxnLTZ7bWFyZ2luLWxlZnQ6NTAlfS5vZmZzZXQtbGctN3ttYXJnaW4tbGVmdDo1OC4zMzMzMzMzMyV9Lm9mZnNldC1sZy04e21hcmdpbi1sZWZ0OjY2LjY2NjY2NjY3JX0ub2Zmc2V0LWxnLTl7bWFyZ2luLWxlZnQ6NzUlfS5vZmZzZXQtbGctMTB7bWFyZ2luLWxlZnQ6ODMuMzMzMzMzMzMlfS5vZmZzZXQtbGctMTF7bWFyZ2luLWxlZnQ6OTEuNjY2NjY2NjclfS5nLWxnLTAsLmd4LWxnLTB7LS1icy1ndXR0ZXIteDowfS5nLWxnLTAsLmd5LWxnLTB7LS1icy1ndXR0ZXIteTowfS5nLWxnLTEsLmd4LWxnLTF7LS1icy1ndXR0ZXIteDowLjI1cmVtfS5nLWxnLTEsLmd5LWxnLTF7LS1icy1ndXR0ZXIteTowLjI1cmVtfS5nLWxnLTIsLmd4LWxnLTJ7LS1icy1ndXR0ZXIteDowLjVyZW19LmctbGctMiwuZ3ktbGctMnstLWJzLWd1dHRlci15OjAuNXJlbX0uZy1sZy0zLC5neC1sZy0zey0tYnMtZ3V0dGVyLXg6MXJlbX0uZy1sZy0zLC5neS1sZy0zey0tYnMtZ3V0dGVyLXk6MXJlbX0uZy1sZy00LC5neC1sZy00ey0tYnMtZ3V0dGVyLXg6MS41cmVtfS5nLWxnLTQsLmd5LWxnLTR7LS1icy1ndXR0ZXIteToxLjVyZW19LmctbGctNSwuZ3gtbGctNXstLWJzLWd1dHRlci14OjNyZW19LmctbGctNSwuZ3ktbGctNXstLWJzLWd1dHRlci15OjNyZW19fUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmNvbC14bHtmbGV4OjEgMCAwJX0ucm93LWNvbHMteGwtYXV0bz4qe2ZsZXg6MCAwIGF1dG87d2lkdGg6YXV0b30ucm93LWNvbHMteGwtMT4qe2ZsZXg6MCAwIGF1dG87d2lkdGg6MTAwJX0ucm93LWNvbHMteGwtMj4qe2ZsZXg6MCAwIGF1dG87d2lkdGg6NTAlfS5yb3ctY29scy14bC0zPip7ZmxleDowIDAgYXV0bzt3aWR0aDozMy4zMzMzMzMzMyV9LnJvdy1jb2xzLXhsLTQ+KntmbGV4OjAgMCBhdXRvO3dpZHRoOjI1JX0ucm93LWNvbHMteGwtNT4qe2ZsZXg6MCAwIGF1dG87d2lkdGg6MjAlfS5yb3ctY29scy14bC02Pip7ZmxleDowIDAgYXV0bzt3aWR0aDoxNi42NjY2NjY2NyV9LmNvbC14bC1hdXRve2ZsZXg6MCAwIGF1dG87d2lkdGg6YXV0b30uY29sLXhsLTF7ZmxleDowIDAgYXV0bzt3aWR0aDo4LjMzMzMzMzMzJX0uY29sLXhsLTJ7ZmxleDowIDAgYXV0bzt3aWR0aDoxNi42NjY2NjY2NyV9LmNvbC14bC0ze2ZsZXg6MCAwIGF1dG87d2lkdGg6MjUlfS5jb2wteGwtNHtmbGV4OjAgMCBhdXRvO3dpZHRoOjMzLjMzMzMzMzMzJX0uY29sLXhsLTV7ZmxleDowIDAgYXV0bzt3aWR0aDo0MS42NjY2NjY2NyV9LmNvbC14bC02e2ZsZXg6MCAwIGF1dG87d2lkdGg6NTAlfS5jb2wteGwtN3tmbGV4OjAgMCBhdXRvO3dpZHRoOjU4LjMzMzMzMzMzJX0uY29sLXhsLTh7ZmxleDowIDAgYXV0bzt3aWR0aDo2Ni42NjY2NjY2NyV9LmNvbC14bC05e2ZsZXg6MCAwIGF1dG87d2lkdGg6NzUlfS5jb2wteGwtMTB7ZmxleDowIDAgYXV0bzt3aWR0aDo4My4zMzMzMzMzMyV9LmNvbC14bC0xMXtmbGV4OjAgMCBhdXRvO3dpZHRoOjkxLjY2NjY2NjY3JX0uY29sLXhsLTEye2ZsZXg6MCAwIGF1dG87d2lkdGg6MTAwJX0ub2Zmc2V0LXhsLTB7bWFyZ2luLWxlZnQ6MH0ub2Zmc2V0LXhsLTF7bWFyZ2luLWxlZnQ6OC4zMzMzMzMzMyV9Lm9mZnNldC14bC0ye21hcmdpbi1sZWZ0OjE2LjY2NjY2NjY3JX0ub2Zmc2V0LXhsLTN7bWFyZ2luLWxlZnQ6MjUlfS5vZmZzZXQteGwtNHttYXJnaW4tbGVmdDozMy4zMzMzMzMzMyV9Lm9mZnNldC14bC01e21hcmdpbi1sZWZ0OjQxLjY2NjY2NjY3JX0ub2Zmc2V0LXhsLTZ7bWFyZ2luLWxlZnQ6NTAlfS5vZmZzZXQteGwtN3ttYXJnaW4tbGVmdDo1OC4zMzMzMzMzMyV9Lm9mZnNldC14bC04e21hcmdpbi1sZWZ0OjY2LjY2NjY2NjY3JX0ub2Zmc2V0LXhsLTl7bWFyZ2luLWxlZnQ6NzUlfS5vZmZzZXQteGwtMTB7bWFyZ2luLWxlZnQ6ODMuMzMzMzMzMzMlfS5vZmZzZXQteGwtMTF7bWFyZ2luLWxlZnQ6OTEuNjY2NjY2NjclfS5nLXhsLTAsLmd4LXhsLTB7LS1icy1ndXR0ZXIteDowfS5nLXhsLTAsLmd5LXhsLTB7LS1icy1ndXR0ZXIteTowfS5nLXhsLTEsLmd4LXhsLTF7LS1icy1ndXR0ZXIteDowLjI1cmVtfS5nLXhsLTEsLmd5LXhsLTF7LS1icy1ndXR0ZXIteTowLjI1cmVtfS5nLXhsLTIsLmd4LXhsLTJ7LS1icy1ndXR0ZXIteDowLjVyZW19LmcteGwtMiwuZ3kteGwtMnstLWJzLWd1dHRlci15OjAuNXJlbX0uZy14bC0zLC5neC14bC0zey0tYnMtZ3V0dGVyLXg6MXJlbX0uZy14bC0zLC5neS14bC0zey0tYnMtZ3V0dGVyLXk6MXJlbX0uZy14bC00LC5neC14bC00ey0tYnMtZ3V0dGVyLXg6MS41cmVtfS5nLXhsLTQsLmd5LXhsLTR7LS1icy1ndXR0ZXIteToxLjVyZW19LmcteGwtNSwuZ3gteGwtNXstLWJzLWd1dHRlci14OjNyZW19LmcteGwtNSwuZ3kteGwtNXstLWJzLWd1dHRlci15OjNyZW19fUBtZWRpYSAobWluLXdpZHRoOjE0MDBweCl7LmNvbC14eGx7ZmxleDoxIDAgMCV9LnJvdy1jb2xzLXh4bC1hdXRvPip7ZmxleDowIDAgYXV0bzt3aWR0aDphdXRvfS5yb3ctY29scy14eGwtMT4qe2ZsZXg6MCAwIGF1dG87d2lkdGg6MTAwJX0ucm93LWNvbHMteHhsLTI+KntmbGV4OjAgMCBhdXRvO3dpZHRoOjUwJX0ucm93LWNvbHMteHhsLTM+KntmbGV4OjAgMCBhdXRvO3dpZHRoOjMzLjMzMzMzMzMzJX0ucm93LWNvbHMteHhsLTQ+KntmbGV4OjAgMCBhdXRvO3dpZHRoOjI1JX0ucm93LWNvbHMteHhsLTU+KntmbGV4OjAgMCBhdXRvO3dpZHRoOjIwJX0ucm93LWNvbHMteHhsLTY+KntmbGV4OjAgMCBhdXRvO3dpZHRoOjE2LjY2NjY2NjY3JX0uY29sLXh4bC1hdXRve2ZsZXg6MCAwIGF1dG87d2lkdGg6YXV0b30uY29sLXh4bC0xe2ZsZXg6MCAwIGF1dG87d2lkdGg6OC4zMzMzMzMzMyV9LmNvbC14eGwtMntmbGV4OjAgMCBhdXRvO3dpZHRoOjE2LjY2NjY2NjY3JX0uY29sLXh4bC0ze2ZsZXg6MCAwIGF1dG87d2lkdGg6MjUlfS5jb2wteHhsLTR7ZmxleDowIDAgYXV0bzt3aWR0aDozMy4zMzMzMzMzMyV9LmNvbC14eGwtNXtmbGV4OjAgMCBhdXRvO3dpZHRoOjQxLjY2NjY2NjY3JX0uY29sLXh4bC02e2ZsZXg6MCAwIGF1dG87d2lkdGg6NTAlfS5jb2wteHhsLTd7ZmxleDowIDAgYXV0bzt3aWR0aDo1OC4zMzMzMzMzMyV9LmNvbC14eGwtOHtmbGV4OjAgMCBhdXRvO3dpZHRoOjY2LjY2NjY2NjY3JX0uY29sLXh4bC05e2ZsZXg6MCAwIGF1dG87d2lkdGg6NzUlfS5jb2wteHhsLTEwe2ZsZXg6MCAwIGF1dG87d2lkdGg6ODMuMzMzMzMzMzMlfS5jb2wteHhsLTExe2ZsZXg6MCAwIGF1dG87d2lkdGg6OTEuNjY2NjY2NjclfS5jb2wteHhsLTEye2ZsZXg6MCAwIGF1dG87d2lkdGg6MTAwJX0ub2Zmc2V0LXh4bC0we21hcmdpbi1sZWZ0OjB9Lm9mZnNldC14eGwtMXttYXJnaW4tbGVmdDo4LjMzMzMzMzMzJX0ub2Zmc2V0LXh4bC0ye21hcmdpbi1sZWZ0OjE2LjY2NjY2NjY3JX0ub2Zmc2V0LXh4bC0ze21hcmdpbi1sZWZ0OjI1JX0ub2Zmc2V0LXh4bC00e21hcmdpbi1sZWZ0OjMzLjMzMzMzMzMzJX0ub2Zmc2V0LXh4bC01e21hcmdpbi1sZWZ0OjQxLjY2NjY2NjY3JX0ub2Zmc2V0LXh4bC02e21hcmdpbi1sZWZ0OjUwJX0ub2Zmc2V0LXh4bC03e21hcmdpbi1sZWZ0OjU4LjMzMzMzMzMzJX0ub2Zmc2V0LXh4bC04e21hcmdpbi1sZWZ0OjY2LjY2NjY2NjY3JX0ub2Zmc2V0LXh4bC05e21hcmdpbi1sZWZ0Ojc1JX0ub2Zmc2V0LXh4bC0xMHttYXJnaW4tbGVmdDo4My4zMzMzMzMzMyV9Lm9mZnNldC14eGwtMTF7bWFyZ2luLWxlZnQ6OTEuNjY2NjY2NjclfS5nLXh4bC0wLC5neC14eGwtMHstLWJzLWd1dHRlci14OjB9LmcteHhsLTAsLmd5LXh4bC0wey0tYnMtZ3V0dGVyLXk6MH0uZy14eGwtMSwuZ3gteHhsLTF7LS1icy1ndXR0ZXIteDowLjI1cmVtfS5nLXh4bC0xLC5neS14eGwtMXstLWJzLWd1dHRlci15OjAuMjVyZW19LmcteHhsLTIsLmd4LXh4bC0yey0tYnMtZ3V0dGVyLXg6MC41cmVtfS5nLXh4bC0yLC5neS14eGwtMnstLWJzLWd1dHRlci15OjAuNXJlbX0uZy14eGwtMywuZ3gteHhsLTN7LS1icy1ndXR0ZXIteDoxcmVtfS5nLXh4bC0zLC5neS14eGwtM3stLWJzLWd1dHRlci15OjFyZW19LmcteHhsLTQsLmd4LXh4bC00ey0tYnMtZ3V0dGVyLXg6MS41cmVtfS5nLXh4bC00LC5neS14eGwtNHstLWJzLWd1dHRlci15OjEuNXJlbX0uZy14eGwtNSwuZ3gteHhsLTV7LS1icy1ndXR0ZXIteDozcmVtfS5nLXh4bC01LC5neS14eGwtNXstLWJzLWd1dHRlci15OjNyZW19fS50YWJsZXstLWJzLXRhYmxlLWNvbG9yLXR5cGU6aW5pdGlhbDstLWJzLXRhYmxlLWJnLXR5cGU6aW5pdGlhbDstLWJzLXRhYmxlLWNvbG9yLXN0YXRlOmluaXRpYWw7LS1icy10YWJsZS1iZy1zdGF0ZTppbml0aWFsOy0tYnMtdGFibGUtY29sb3I6dmFyKC0tYnMtZW1waGFzaXMtY29sb3IpOy0tYnMtdGFibGUtYmc6dmFyKC0tYnMtYm9keS1iZyk7LS1icy10YWJsZS1ib3JkZXItY29sb3I6dmFyKC0tYnMtYm9yZGVyLWNvbG9yKTstLWJzLXRhYmxlLWFjY2VudC1iZzp0cmFuc3BhcmVudDstLWJzLXRhYmxlLXN0cmlwZWQtY29sb3I6dmFyKC0tYnMtZW1waGFzaXMtY29sb3IpOy0tYnMtdGFibGUtc3RyaXBlZC1iZzpyZ2JhKHZhcigtLWJzLWVtcGhhc2lzLWNvbG9yLXJnYiksIDAuMDUpOy0tYnMtdGFibGUtYWN0aXZlLWNvbG9yOnZhcigtLWJzLWVtcGhhc2lzLWNvbG9yKTstLWJzLXRhYmxlLWFjdGl2ZS1iZzpyZ2JhKHZhcigtLWJzLWVtcGhhc2lzLWNvbG9yLXJnYiksIDAuMSk7LS1icy10YWJsZS1ob3Zlci1jb2xvcjp2YXIoLS1icy1lbXBoYXNpcy1jb2xvcik7LS1icy10YWJsZS1ob3Zlci1iZzpyZ2JhKHZhcigtLWJzLWVtcGhhc2lzLWNvbG9yLXJnYiksIDAuMDc1KTt3aWR0aDoxMDAlO21hcmdpbi1ib3R0b206MXJlbTt2ZXJ0aWNhbC1hbGlnbjp0b3A7Ym9yZGVyLWNvbG9yOnZhcigtLWJzLXRhYmxlLWJvcmRlci1jb2xvcil9LnRhYmxlPjpub3QoY2FwdGlvbik+Kj4qe3BhZGRpbmc6LjVyZW0gLjVyZW07Y29sb3I6dmFyKC0tYnMtdGFibGUtY29sb3Itc3RhdGUsdmFyKC0tYnMtdGFibGUtY29sb3ItdHlwZSx2YXIoLS1icy10YWJsZS1jb2xvcikpKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLXRhYmxlLWJnKTtib3JkZXItYm90dG9tLXdpZHRoOnZhcigtLWJzLWJvcmRlci13aWR0aCk7Ym94LXNoYWRvdzppbnNldCAwIDAgMCA5OTk5cHggdmFyKC0tYnMtdGFibGUtYmctc3RhdGUsdmFyKC0tYnMtdGFibGUtYmctdHlwZSx2YXIoLS1icy10YWJsZS1hY2NlbnQtYmcpKSl9LnRhYmxlPnRib2R5e3ZlcnRpY2FsLWFsaWduOmluaGVyaXR9LnRhYmxlPnRoZWFke3ZlcnRpY2FsLWFsaWduOmJvdHRvbX0udGFibGUtZ3JvdXAtZGl2aWRlcntib3JkZXItdG9wOmNhbGModmFyKC0tYnMtYm9yZGVyLXdpZHRoKSAqIDIpIHNvbGlkIGN1cnJlbnRjb2xvcn0uY2FwdGlvbi10b3B7Y2FwdGlvbi1zaWRlOnRvcH0udGFibGUtc20+Om5vdChjYXB0aW9uKT4qPip7cGFkZGluZzouMjVyZW0gLjI1cmVtfS50YWJsZS1ib3JkZXJlZD46bm90KGNhcHRpb24pPip7Ym9yZGVyLXdpZHRoOnZhcigtLWJzLWJvcmRlci13aWR0aCkgMH0udGFibGUtYm9yZGVyZWQ+Om5vdChjYXB0aW9uKT4qPip7Ym9yZGVyLXdpZHRoOjAgdmFyKC0tYnMtYm9yZGVyLXdpZHRoKX0udGFibGUtYm9yZGVybGVzcz46bm90KGNhcHRpb24pPio+Kntib3JkZXItYm90dG9tLXdpZHRoOjB9LnRhYmxlLWJvcmRlcmxlc3M+Om5vdCg6Zmlyc3QtY2hpbGQpe2JvcmRlci10b3Atd2lkdGg6MH0udGFibGUtc3RyaXBlZD50Ym9keT50cjpudGgtb2YtdHlwZShvZGQpPip7LS1icy10YWJsZS1jb2xvci10eXBlOnZhcigtLWJzLXRhYmxlLXN0cmlwZWQtY29sb3IpOy0tYnMtdGFibGUtYmctdHlwZTp2YXIoLS1icy10YWJsZS1zdHJpcGVkLWJnKX0udGFibGUtc3RyaXBlZC1jb2x1bW5zPjpub3QoY2FwdGlvbik+dHI+Om50aC1jaGlsZCgybil7LS1icy10YWJsZS1jb2xvci10eXBlOnZhcigtLWJzLXRhYmxlLXN0cmlwZWQtY29sb3IpOy0tYnMtdGFibGUtYmctdHlwZTp2YXIoLS1icy10YWJsZS1zdHJpcGVkLWJnKX0udGFibGUtYWN0aXZley0tYnMtdGFibGUtY29sb3Itc3RhdGU6dmFyKC0tYnMtdGFibGUtYWN0aXZlLWNvbG9yKTstLWJzLXRhYmxlLWJnLXN0YXRlOnZhcigtLWJzLXRhYmxlLWFjdGl2ZS1iZyl9LnRhYmxlLWhvdmVyPnRib2R5PnRyOmhvdmVyPip7LS1icy10YWJsZS1jb2xvci1zdGF0ZTp2YXIoLS1icy10YWJsZS1ob3Zlci1jb2xvcik7LS1icy10YWJsZS1iZy1zdGF0ZTp2YXIoLS1icy10YWJsZS1ob3Zlci1iZyl9LnRhYmxlLXByaW1hcnl7LS1icy10YWJsZS1jb2xvcjojMDAwOy0tYnMtdGFibGUtYmc6I2NmZTJmZjstLWJzLXRhYmxlLWJvcmRlci1jb2xvcjojYTZiNWNjOy0tYnMtdGFibGUtc3RyaXBlZC1iZzojYzVkN2YyOy0tYnMtdGFibGUtc3RyaXBlZC1jb2xvcjojMDAwOy0tYnMtdGFibGUtYWN0aXZlLWJnOiNiYWNiZTY7LS1icy10YWJsZS1hY3RpdmUtY29sb3I6IzAwMDstLWJzLXRhYmxlLWhvdmVyLWJnOiNiZmQxZWM7LS1icy10YWJsZS1ob3Zlci1jb2xvcjojMDAwO2NvbG9yOnZhcigtLWJzLXRhYmxlLWNvbG9yKTtib3JkZXItY29sb3I6dmFyKC0tYnMtdGFibGUtYm9yZGVyLWNvbG9yKX0udGFibGUtc2Vjb25kYXJ5ey0tYnMtdGFibGUtY29sb3I6IzAwMDstLWJzLXRhYmxlLWJnOiNlMmUzZTU7LS1icy10YWJsZS1ib3JkZXItY29sb3I6I2I1YjZiNzstLWJzLXRhYmxlLXN0cmlwZWQtYmc6I2Q3ZDhkYTstLWJzLXRhYmxlLXN0cmlwZWQtY29sb3I6IzAwMDstLWJzLXRhYmxlLWFjdGl2ZS1iZzojY2JjY2NlOy0tYnMtdGFibGUtYWN0aXZlLWNvbG9yOiMwMDA7LS1icy10YWJsZS1ob3Zlci1iZzojZDFkMmQ0Oy0tYnMtdGFibGUtaG92ZXItY29sb3I6IzAwMDtjb2xvcjp2YXIoLS1icy10YWJsZS1jb2xvcik7Ym9yZGVyLWNvbG9yOnZhcigtLWJzLXRhYmxlLWJvcmRlci1jb2xvcil9LnRhYmxlLXN1Y2Nlc3N7LS1icy10YWJsZS1jb2xvcjojMDAwOy0tYnMtdGFibGUtYmc6I2QxZTdkZDstLWJzLXRhYmxlLWJvcmRlci1jb2xvcjojYTdiOWIxOy0tYnMtdGFibGUtc3RyaXBlZC1iZzojYzdkYmQyOy0tYnMtdGFibGUtc3RyaXBlZC1jb2xvcjojMDAwOy0tYnMtdGFibGUtYWN0aXZlLWJnOiNiY2QwYzc7LS1icy10YWJsZS1hY3RpdmUtY29sb3I6IzAwMDstLWJzLXRhYmxlLWhvdmVyLWJnOiNjMWQ2Y2M7LS1icy10YWJsZS1ob3Zlci1jb2xvcjojMDAwO2NvbG9yOnZhcigtLWJzLXRhYmxlLWNvbG9yKTtib3JkZXItY29sb3I6dmFyKC0tYnMtdGFibGUtYm9yZGVyLWNvbG9yKX0udGFibGUtaW5mb3stLWJzLXRhYmxlLWNvbG9yOiMwMDA7LS1icy10YWJsZS1iZzojY2ZmNGZjOy0tYnMtdGFibGUtYm9yZGVyLWNvbG9yOiNhNmMzY2E7LS1icy10YWJsZS1zdHJpcGVkLWJnOiNjNWU4ZWY7LS1icy10YWJsZS1zdHJpcGVkLWNvbG9yOiMwMDA7LS1icy10YWJsZS1hY3RpdmUtYmc6I2JhZGNlMzstLWJzLXRhYmxlLWFjdGl2ZS1jb2xvcjojMDAwOy0tYnMtdGFibGUtaG92ZXItYmc6I2JmZTJlOTstLWJzLXRhYmxlLWhvdmVyLWNvbG9yOiMwMDA7Y29sb3I6dmFyKC0tYnMtdGFibGUtY29sb3IpO2JvcmRlci1jb2xvcjp2YXIoLS1icy10YWJsZS1ib3JkZXItY29sb3IpfS50YWJsZS13YXJuaW5ney0tYnMtdGFibGUtY29sb3I6IzAwMDstLWJzLXRhYmxlLWJnOiNmZmYzY2Q7LS1icy10YWJsZS1ib3JkZXItY29sb3I6I2NjYzJhNDstLWJzLXRhYmxlLXN0cmlwZWQtYmc6I2YyZTdjMzstLWJzLXRhYmxlLXN0cmlwZWQtY29sb3I6IzAwMDstLWJzLXRhYmxlLWFjdGl2ZS1iZzojZTZkYmI5Oy0tYnMtdGFibGUtYWN0aXZlLWNvbG9yOiMwMDA7LS1icy10YWJsZS1ob3Zlci1iZzojZWNlMWJlOy0tYnMtdGFibGUtaG92ZXItY29sb3I6IzAwMDtjb2xvcjp2YXIoLS1icy10YWJsZS1jb2xvcik7Ym9yZGVyLWNvbG9yOnZhcigtLWJzLXRhYmxlLWJvcmRlci1jb2xvcil9LnRhYmxlLWRhbmdlcnstLWJzLXRhYmxlLWNvbG9yOiMwMDA7LS1icy10YWJsZS1iZzojZjhkN2RhOy0tYnMtdGFibGUtYm9yZGVyLWNvbG9yOiNjNmFjYWU7LS1icy10YWJsZS1zdHJpcGVkLWJnOiNlY2NjY2Y7LS1icy10YWJsZS1zdHJpcGVkLWNvbG9yOiMwMDA7LS1icy10YWJsZS1hY3RpdmUtYmc6I2RmYzJjNDstLWJzLXRhYmxlLWFjdGl2ZS1jb2xvcjojMDAwOy0tYnMtdGFibGUtaG92ZXItYmc6I2U1YzdjYTstLWJzLXRhYmxlLWhvdmVyLWNvbG9yOiMwMDA7Y29sb3I6dmFyKC0tYnMtdGFibGUtY29sb3IpO2JvcmRlci1jb2xvcjp2YXIoLS1icy10YWJsZS1ib3JkZXItY29sb3IpfS50YWJsZS1saWdodHstLWJzLXRhYmxlLWNvbG9yOiMwMDA7LS1icy10YWJsZS1iZzojZjhmOWZhOy0tYnMtdGFibGUtYm9yZGVyLWNvbG9yOiNjNmM3Yzg7LS1icy10YWJsZS1zdHJpcGVkLWJnOiNlY2VkZWU7LS1icy10YWJsZS1zdHJpcGVkLWNvbG9yOiMwMDA7LS1icy10YWJsZS1hY3RpdmUtYmc6I2RmZTBlMTstLWJzLXRhYmxlLWFjdGl2ZS1jb2xvcjojMDAwOy0tYnMtdGFibGUtaG92ZXItYmc6I2U1ZTZlNzstLWJzLXRhYmxlLWhvdmVyLWNvbG9yOiMwMDA7Y29sb3I6dmFyKC0tYnMtdGFibGUtY29sb3IpO2JvcmRlci1jb2xvcjp2YXIoLS1icy10YWJsZS1ib3JkZXItY29sb3IpfS50YWJsZS1kYXJrey0tYnMtdGFibGUtY29sb3I6I2ZmZjstLWJzLXRhYmxlLWJnOiMyMTI1Mjk7LS1icy10YWJsZS1ib3JkZXItY29sb3I6IzRkNTE1NDstLWJzLXRhYmxlLXN0cmlwZWQtYmc6IzJjMzAzNDstLWJzLXRhYmxlLXN0cmlwZWQtY29sb3I6I2ZmZjstLWJzLXRhYmxlLWFjdGl2ZS1iZzojMzczYjNlOy0tYnMtdGFibGUtYWN0aXZlLWNvbG9yOiNmZmY7LS1icy10YWJsZS1ob3Zlci1iZzojMzIzNTM5Oy0tYnMtdGFibGUtaG92ZXItY29sb3I6I2ZmZjtjb2xvcjp2YXIoLS1icy10YWJsZS1jb2xvcik7Ym9yZGVyLWNvbG9yOnZhcigtLWJzLXRhYmxlLWJvcmRlci1jb2xvcil9LnRhYmxlLXJlc3BvbnNpdmV7b3ZlcmZsb3cteDphdXRvOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNofUBtZWRpYSAobWF4LXdpZHRoOjU3NS45OHB4KXsudGFibGUtcmVzcG9uc2l2ZS1zbXtvdmVyZmxvdy14OmF1dG87LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9fUBtZWRpYSAobWF4LXdpZHRoOjc2Ny45OHB4KXsudGFibGUtcmVzcG9uc2l2ZS1tZHtvdmVyZmxvdy14OmF1dG87LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9fUBtZWRpYSAobWF4LXdpZHRoOjk5MS45OHB4KXsudGFibGUtcmVzcG9uc2l2ZS1sZ3tvdmVyZmxvdy14OmF1dG87LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9fUBtZWRpYSAobWF4LXdpZHRoOjExOTkuOThweCl7LnRhYmxlLXJlc3BvbnNpdmUteGx7b3ZlcmZsb3cteDphdXRvOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNofX1AbWVkaWEgKG1heC13aWR0aDoxMzk5Ljk4cHgpey50YWJsZS1yZXNwb25zaXZlLXh4bHtvdmVyZmxvdy14OmF1dG87LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9fS5mb3JtLWxhYmVse21hcmdpbi1ib3R0b206LjVyZW19LmNvbC1mb3JtLWxhYmVse3BhZGRpbmctdG9wOmNhbGMoLjM3NXJlbSArIHZhcigtLWJzLWJvcmRlci13aWR0aCkpO3BhZGRpbmctYm90dG9tOmNhbGMoLjM3NXJlbSArIHZhcigtLWJzLWJvcmRlci13aWR0aCkpO21hcmdpbi1ib3R0b206MDtmb250LXNpemU6aW5oZXJpdDtsaW5lLWhlaWdodDoxLjV9LmNvbC1mb3JtLWxhYmVsLWxne3BhZGRpbmctdG9wOmNhbGMoLjVyZW0gKyB2YXIoLS1icy1ib3JkZXItd2lkdGgpKTtwYWRkaW5nLWJvdHRvbTpjYWxjKC41cmVtICsgdmFyKC0tYnMtYm9yZGVyLXdpZHRoKSk7Zm9udC1zaXplOjEuMjVyZW19LmNvbC1mb3JtLWxhYmVsLXNte3BhZGRpbmctdG9wOmNhbGMoLjI1cmVtICsgdmFyKC0tYnMtYm9yZGVyLXdpZHRoKSk7cGFkZGluZy1ib3R0b206Y2FsYyguMjVyZW0gKyB2YXIoLS1icy1ib3JkZXItd2lkdGgpKTtmb250LXNpemU6Ljg3NXJlbX0uZm9ybS10ZXh0e21hcmdpbi10b3A6LjI1cmVtO2ZvbnQtc2l6ZTouODc1ZW07Y29sb3I6dmFyKC0tYnMtc2Vjb25kYXJ5LWNvbG9yKX0uZm9ybS1jb250cm9se2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtwYWRkaW5nOi4zNzVyZW0gLjc1cmVtO2ZvbnQtc2l6ZToxcmVtO2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxLjU7Y29sb3I6dmFyKC0tYnMtYm9keS1jb2xvcik7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtYm9keS1iZyk7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O2JvcmRlcjp2YXIoLS1icy1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzKTt0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dH1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKXsuZm9ybS1jb250cm9se3RyYW5zaXRpb246bm9uZX19LmZvcm0tY29udHJvbFt0eXBlPWZpbGVde292ZXJmbG93OmhpZGRlbn0uZm9ybS1jb250cm9sW3R5cGU9ZmlsZV06bm90KDpkaXNhYmxlZCk6bm90KFtyZWFkb25seV0pe2N1cnNvcjpwb2ludGVyfS5mb3JtLWNvbnRyb2w6Zm9jdXN7Y29sb3I6dmFyKC0tYnMtYm9keS1jb2xvcik7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1ib2R5LWJnKTtib3JkZXItY29sb3I6Izg2YjdmZTtvdXRsaW5lOjA7Ym94LXNoYWRvdzowIDAgMCAuMjVyZW0gcmdiYSgxMywxMTAsMjUzLC4yNSl9LmZvcm0tY29udHJvbDo6LXdlYmtpdC1kYXRlLWFuZC10aW1lLXZhbHVle21pbi13aWR0aDo4NXB4O2hlaWdodDoxLjVlbTttYXJnaW46MH0uZm9ybS1jb250cm9sOjotd2Via2l0LWRhdGV0aW1lLWVkaXR7ZGlzcGxheTpibG9jaztwYWRkaW5nOjB9LmZvcm0tY29udHJvbDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1icy1zZWNvbmRhcnktY29sb3IpO29wYWNpdHk6MX0uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1icy1zZWNvbmRhcnktY29sb3IpO29wYWNpdHk6MX0uZm9ybS1jb250cm9sOmRpc2FibGVke2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtc2Vjb25kYXJ5LWJnKTtvcGFjaXR5OjF9LmZvcm0tY29udHJvbDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b257cGFkZGluZzouMzc1cmVtIC43NXJlbTttYXJnaW46LS4zNzVyZW0gLS43NXJlbTstd2Via2l0LW1hcmdpbi1lbmQ6Ljc1cmVtO21hcmdpbi1pbmxpbmUtZW5kOi43NXJlbTtjb2xvcjp2YXIoLS1icy1ib2R5LWNvbG9yKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLXRlcnRpYXJ5LWJnKTtwb2ludGVyLWV2ZW50czpub25lO2JvcmRlci1jb2xvcjppbmhlcml0O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MDtib3JkZXItaW5saW5lLWVuZC13aWR0aDp2YXIoLS1icy1ib3JkZXItd2lkdGgpO2JvcmRlci1yYWRpdXM6MDstd2Via2l0LXRyYW5zaXRpb246Y29sb3IgLjE1cyBlYXNlLWluLW91dCxiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246Y29sb3IgLjE1cyBlYXNlLWluLW91dCxiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0fS5mb3JtLWNvbnRyb2w6OmZpbGUtc2VsZWN0b3ItYnV0dG9ue3BhZGRpbmc6LjM3NXJlbSAuNzVyZW07bWFyZ2luOi0uMzc1cmVtIC0uNzVyZW07LXdlYmtpdC1tYXJnaW4tZW5kOi43NXJlbTttYXJnaW4taW5saW5lLWVuZDouNzVyZW07Y29sb3I6dmFyKC0tYnMtYm9keS1jb2xvcik7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy10ZXJ0aWFyeS1iZyk7cG9pbnRlci1ldmVudHM6bm9uZTtib3JkZXItY29sb3I6aW5oZXJpdDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjA7Ym9yZGVyLWlubGluZS1lbmQtd2lkdGg6dmFyKC0tYnMtYm9yZGVyLXdpZHRoKTtib3JkZXItcmFkaXVzOjA7dHJhbnNpdGlvbjpjb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXR9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSl7LmZvcm0tY29udHJvbDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b257LXdlYmtpdC10cmFuc2l0aW9uOm5vbmU7dHJhbnNpdGlvbjpub25lfS5mb3JtLWNvbnRyb2w6OmZpbGUtc2VsZWN0b3ItYnV0dG9ue3RyYW5zaXRpb246bm9uZX19LmZvcm0tY29udHJvbDpob3Zlcjpub3QoOmRpc2FibGVkKTpub3QoW3JlYWRvbmx5XSk6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9ue2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtc2Vjb25kYXJ5LWJnKX0uZm9ybS1jb250cm9sOmhvdmVyOm5vdCg6ZGlzYWJsZWQpOm5vdChbcmVhZG9ubHldKTo6ZmlsZS1zZWxlY3Rvci1idXR0b257YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1zZWNvbmRhcnktYmcpfS5mb3JtLWNvbnRyb2wtcGxhaW50ZXh0e2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtwYWRkaW5nOi4zNzVyZW0gMDttYXJnaW4tYm90dG9tOjA7bGluZS1oZWlnaHQ6MS41O2NvbG9yOnZhcigtLWJzLWJvZHktY29sb3IpO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOnNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci13aWR0aDp2YXIoLS1icy1ib3JkZXItd2lkdGgpIDB9LmZvcm0tY29udHJvbC1wbGFpbnRleHQ6Zm9jdXN7b3V0bGluZTowfS5mb3JtLWNvbnRyb2wtcGxhaW50ZXh0LmZvcm0tY29udHJvbC1sZywuZm9ybS1jb250cm9sLXBsYWludGV4dC5mb3JtLWNvbnRyb2wtc217cGFkZGluZy1yaWdodDowO3BhZGRpbmctbGVmdDowfS5mb3JtLWNvbnRyb2wtc217bWluLWhlaWdodDpjYWxjKDEuNWVtICsgLjVyZW0gKyBjYWxjKHZhcigtLWJzLWJvcmRlci13aWR0aCkgKiAyKSk7cGFkZGluZzouMjVyZW0gLjVyZW07Zm9udC1zaXplOi44NzVyZW07Ym9yZGVyLXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXNtKX0uZm9ybS1jb250cm9sLXNtOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbntwYWRkaW5nOi4yNXJlbSAuNXJlbTttYXJnaW46LS4yNXJlbSAtLjVyZW07LXdlYmtpdC1tYXJnaW4tZW5kOi41cmVtO21hcmdpbi1pbmxpbmUtZW5kOi41cmVtfS5mb3JtLWNvbnRyb2wtc206OmZpbGUtc2VsZWN0b3ItYnV0dG9ue3BhZGRpbmc6LjI1cmVtIC41cmVtO21hcmdpbjotLjI1cmVtIC0uNXJlbTstd2Via2l0LW1hcmdpbi1lbmQ6LjVyZW07bWFyZ2luLWlubGluZS1lbmQ6LjVyZW19LmZvcm0tY29udHJvbC1sZ3ttaW4taGVpZ2h0OmNhbGMoMS41ZW0gKyAxcmVtICsgY2FsYyh2YXIoLS1icy1ib3JkZXItd2lkdGgpICogMikpO3BhZGRpbmc6LjVyZW0gMXJlbTtmb250LXNpemU6MS4yNXJlbTtib3JkZXItcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtbGcpfS5mb3JtLWNvbnRyb2wtbGc6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9ue3BhZGRpbmc6LjVyZW0gMXJlbTttYXJnaW46LS41cmVtIC0xcmVtOy13ZWJraXQtbWFyZ2luLWVuZDoxcmVtO21hcmdpbi1pbmxpbmUtZW5kOjFyZW19LmZvcm0tY29udHJvbC1sZzo6ZmlsZS1zZWxlY3Rvci1idXR0b257cGFkZGluZzouNXJlbSAxcmVtO21hcmdpbjotLjVyZW0gLTFyZW07LXdlYmtpdC1tYXJnaW4tZW5kOjFyZW07bWFyZ2luLWlubGluZS1lbmQ6MXJlbX10ZXh0YXJlYS5mb3JtLWNvbnRyb2x7bWluLWhlaWdodDpjYWxjKDEuNWVtICsgLjc1cmVtICsgY2FsYyh2YXIoLS1icy1ib3JkZXItd2lkdGgpICogMikpfXRleHRhcmVhLmZvcm0tY29udHJvbC1zbXttaW4taGVpZ2h0OmNhbGMoMS41ZW0gKyAuNXJlbSArIGNhbGModmFyKC0tYnMtYm9yZGVyLXdpZHRoKSAqIDIpKX10ZXh0YXJlYS5mb3JtLWNvbnRyb2wtbGd7bWluLWhlaWdodDpjYWxjKDEuNWVtICsgMXJlbSArIGNhbGModmFyKC0tYnMtYm9yZGVyLXdpZHRoKSAqIDIpKX0uZm9ybS1jb250cm9sLWNvbG9ye3dpZHRoOjNyZW07aGVpZ2h0OmNhbGMoMS41ZW0gKyAuNzVyZW0gKyBjYWxjKHZhcigtLWJzLWJvcmRlci13aWR0aCkgKiAyKSk7cGFkZGluZzouMzc1cmVtfS5mb3JtLWNvbnRyb2wtY29sb3I6bm90KDpkaXNhYmxlZCk6bm90KFtyZWFkb25seV0pe2N1cnNvcjpwb2ludGVyfS5mb3JtLWNvbnRyb2wtY29sb3I6Oi1tb3otY29sb3Itc3dhdGNoe2JvcmRlcjowIWltcG9ydGFudDtib3JkZXItcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMpfS5mb3JtLWNvbnRyb2wtY29sb3I6Oi13ZWJraXQtY29sb3Itc3dhdGNoe2JvcmRlcjowIWltcG9ydGFudDtib3JkZXItcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMpfS5mb3JtLWNvbnRyb2wtY29sb3IuZm9ybS1jb250cm9sLXNte2hlaWdodDpjYWxjKDEuNWVtICsgLjVyZW0gKyBjYWxjKHZhcigtLWJzLWJvcmRlci13aWR0aCkgKiAyKSl9LmZvcm0tY29udHJvbC1jb2xvci5mb3JtLWNvbnRyb2wtbGd7aGVpZ2h0OmNhbGMoMS41ZW0gKyAxcmVtICsgY2FsYyh2YXIoLS1icy1ib3JkZXItd2lkdGgpICogMikpfS5mb3JtLXNlbGVjdHstLWJzLWZvcm0tc2VsZWN0LWJnLWltZzp1cmwoImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnJTNlJTNjcGF0aCBmaWxsPSdub25lJyBzdHJva2U9JyUyMzM0M2E0MCcgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzInIGQ9J20yIDUgNiA2IDYtNicvJTNlJTNjL3N2ZyUzZSIpO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtwYWRkaW5nOi4zNzVyZW0gMi4yNXJlbSAuMzc1cmVtIC43NXJlbTtmb250LXNpemU6MXJlbTtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MS41O2NvbG9yOnZhcigtLWJzLWJvZHktY29sb3IpOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLWJvZHktYmcpO2JhY2tncm91bmQtaW1hZ2U6dmFyKC0tYnMtZm9ybS1zZWxlY3QtYmctaW1nKSx2YXIoLS1icy1mb3JtLXNlbGVjdC1iZy1pY29uLG5vbmUpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0IC43NXJlbSBjZW50ZXI7YmFja2dyb3VuZC1zaXplOjE2cHggMTJweDtib3JkZXI6dmFyKC0tYnMtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1ib3JkZXItY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cyk7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXR9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSl7LmZvcm0tc2VsZWN0e3RyYW5zaXRpb246bm9uZX19LmZvcm0tc2VsZWN0OmZvY3Vze2JvcmRlci1jb2xvcjojODZiN2ZlO291dGxpbmU6MDtib3gtc2hhZG93OjAgMCAwIC4yNXJlbSByZ2JhKDEzLDExMCwyNTMsLjI1KX0uZm9ybS1zZWxlY3RbbXVsdGlwbGVdLC5mb3JtLXNlbGVjdFtzaXplXTpub3QoW3NpemU9IjEiXSl7cGFkZGluZy1yaWdodDouNzVyZW07YmFja2dyb3VuZC1pbWFnZTpub25lfS5mb3JtLXNlbGVjdDpkaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLXNlY29uZGFyeS1iZyl9LmZvcm0tc2VsZWN0Oi1tb3otZm9jdXNyaW5ne2NvbG9yOnRyYW5zcGFyZW50O3RleHQtc2hhZG93OjAgMCAwIHZhcigtLWJzLWJvZHktY29sb3IpfS5mb3JtLXNlbGVjdC1zbXtwYWRkaW5nLXRvcDouMjVyZW07cGFkZGluZy1ib3R0b206LjI1cmVtO3BhZGRpbmctbGVmdDouNXJlbTtmb250LXNpemU6Ljg3NXJlbTtib3JkZXItcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtc20pfS5mb3JtLXNlbGVjdC1sZ3twYWRkaW5nLXRvcDouNXJlbTtwYWRkaW5nLWJvdHRvbTouNXJlbTtwYWRkaW5nLWxlZnQ6MXJlbTtmb250LXNpemU6MS4yNXJlbTtib3JkZXItcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtbGcpfVtkYXRhLWJzLXRoZW1lPWRhcmtdIC5mb3JtLXNlbGVjdHstLWJzLWZvcm0tc2VsZWN0LWJnLWltZzp1cmwoImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnJTNlJTNjcGF0aCBmaWxsPSdub25lJyBzdHJva2U9JyUyM2RlZTJlNicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzInIGQ9J20yIDUgNiA2IDYtNicvJTNlJTNjL3N2ZyUzZSIpfS5mb3JtLWNoZWNre2Rpc3BsYXk6YmxvY2s7bWluLWhlaWdodDoxLjVyZW07cGFkZGluZy1sZWZ0OjEuNWVtO21hcmdpbi1ib3R0b206LjEyNXJlbX0uZm9ybS1jaGVjayAuZm9ybS1jaGVjay1pbnB1dHtmbG9hdDpsZWZ0O21hcmdpbi1sZWZ0Oi0xLjVlbX0uZm9ybS1jaGVjay1yZXZlcnNle3BhZGRpbmctcmlnaHQ6MS41ZW07cGFkZGluZy1sZWZ0OjA7dGV4dC1hbGlnbjpyaWdodH0uZm9ybS1jaGVjay1yZXZlcnNlIC5mb3JtLWNoZWNrLWlucHV0e2Zsb2F0OnJpZ2h0O21hcmdpbi1yaWdodDotMS41ZW07bWFyZ2luLWxlZnQ6MH0uZm9ybS1jaGVjay1pbnB1dHstLWJzLWZvcm0tY2hlY2stYmc6dmFyKC0tYnMtYm9keS1iZyk7ZmxleC1zaHJpbms6MDt3aWR0aDoxZW07aGVpZ2h0OjFlbTttYXJnaW4tdG9wOi4yNWVtO3ZlcnRpY2FsLWFsaWduOnRvcDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1mb3JtLWNoZWNrLWJnKTtiYWNrZ3JvdW5kLWltYWdlOnZhcigtLWJzLWZvcm0tY2hlY2stYmctaW1hZ2UpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtib3JkZXI6dmFyKC0tYnMtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1ib3JkZXItY29sb3IpOy13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0O2NvbG9yLWFkanVzdDpleGFjdDtwcmludC1jb2xvci1hZGp1c3Q6ZXhhY3R9LmZvcm0tY2hlY2staW5wdXRbdHlwZT1jaGVja2JveF17Ym9yZGVyLXJhZGl1czouMjVlbX0uZm9ybS1jaGVjay1pbnB1dFt0eXBlPXJhZGlvXXtib3JkZXItcmFkaXVzOjUwJX0uZm9ybS1jaGVjay1pbnB1dDphY3RpdmV7ZmlsdGVyOmJyaWdodG5lc3MoOTAlKX0uZm9ybS1jaGVjay1pbnB1dDpmb2N1c3tib3JkZXItY29sb3I6Izg2YjdmZTtvdXRsaW5lOjA7Ym94LXNoYWRvdzowIDAgMCAuMjVyZW0gcmdiYSgxMywxMTAsMjUzLC4yNSl9LmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZHtiYWNrZ3JvdW5kLWNvbG9yOiMwZDZlZmQ7Ym9yZGVyLWNvbG9yOiMwZDZlZmR9LmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZFt0eXBlPWNoZWNrYm94XXstLWJzLWZvcm0tY2hlY2stYmctaW1hZ2U6dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwIDIwJyUzZSUzY3BhdGggZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNmZmYnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSczJyBkPSdtNiAxMCAzIDMgNi02Jy8lM2UlM2Mvc3ZnJTNlIil9LmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZFt0eXBlPXJhZGlvXXstLWJzLWZvcm0tY2hlY2stYmctaW1hZ2U6dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4JyUzZSUzY2NpcmNsZSByPScyJyBmaWxsPSclMjNmZmYnLyUzZSUzYy9zdmclM2UiKX0uZm9ybS1jaGVjay1pbnB1dFt0eXBlPWNoZWNrYm94XTppbmRldGVybWluYXRle2JhY2tncm91bmQtY29sb3I6IzBkNmVmZDtib3JkZXItY29sb3I6IzBkNmVmZDstLWJzLWZvcm0tY2hlY2stYmctaW1hZ2U6dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwIDIwJyUzZSUzY3BhdGggZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNmZmYnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSczJyBkPSdNNiAxMGg4Jy8lM2UlM2Mvc3ZnJTNlIil9LmZvcm0tY2hlY2staW5wdXQ6ZGlzYWJsZWR7cG9pbnRlci1ldmVudHM6bm9uZTtmaWx0ZXI6bm9uZTtvcGFjaXR5Oi41fS5mb3JtLWNoZWNrLWlucHV0OmRpc2FibGVkfi5mb3JtLWNoZWNrLWxhYmVsLC5mb3JtLWNoZWNrLWlucHV0W2Rpc2FibGVkXX4uZm9ybS1jaGVjay1sYWJlbHtjdXJzb3I6ZGVmYXVsdDtvcGFjaXR5Oi41fS5mb3JtLXN3aXRjaHtwYWRkaW5nLWxlZnQ6Mi41ZW19LmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0ey0tYnMtZm9ybS1zd2l0Y2gtYmc6dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4JyUzZSUzY2NpcmNsZSByPSczJyBmaWxsPSdyZ2JhJTI4MCwgMCwgMCwgMC4yNSUyOScvJTNlJTNjL3N2ZyUzZSIpO3dpZHRoOjJlbTttYXJnaW4tbGVmdDotMi41ZW07YmFja2dyb3VuZC1pbWFnZTp2YXIoLS1icy1mb3JtLXN3aXRjaC1iZyk7YmFja2dyb3VuZC1wb3NpdGlvbjpsZWZ0IGNlbnRlcjtib3JkZXItcmFkaXVzOjJlbTt0cmFuc2l0aW9uOmJhY2tncm91bmQtcG9zaXRpb24gLjE1cyBlYXNlLWluLW91dH1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKXsuZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXR7dHJhbnNpdGlvbjpub25lfX0uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXN7LS1icy1mb3JtLXN3aXRjaC1iZzp1cmwoImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnJTNlJTNjY2lyY2xlIHI9JzMnIGZpbGw9JyUyMzg2YjdmZScvJTNlJTNjL3N2ZyUzZSIpfS5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2Vke2JhY2tncm91bmQtcG9zaXRpb246cmlnaHQgY2VudGVyOy0tYnMtZm9ybS1zd2l0Y2gtYmc6dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4JyUzZSUzY2NpcmNsZSByPSczJyBmaWxsPSclMjNmZmYnLyUzZSUzYy9zdmclM2UiKX0uZm9ybS1zd2l0Y2guZm9ybS1jaGVjay1yZXZlcnNle3BhZGRpbmctcmlnaHQ6Mi41ZW07cGFkZGluZy1sZWZ0OjB9LmZvcm0tc3dpdGNoLmZvcm0tY2hlY2stcmV2ZXJzZSAuZm9ybS1jaGVjay1pbnB1dHttYXJnaW4tcmlnaHQ6LTIuNWVtO21hcmdpbi1sZWZ0OjB9LmZvcm0tY2hlY2staW5saW5le2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDoxcmVtfS5idG4tY2hlY2t7cG9zaXRpb246YWJzb2x1dGU7Y2xpcDpyZWN0KDAsMCwwLDApO3BvaW50ZXItZXZlbnRzOm5vbmV9LmJ0bi1jaGVjazpkaXNhYmxlZCsuYnRuLC5idG4tY2hlY2tbZGlzYWJsZWRdKy5idG57cG9pbnRlci1ldmVudHM6bm9uZTtmaWx0ZXI6bm9uZTtvcGFjaXR5Oi42NX1bZGF0YS1icy10aGVtZT1kYXJrXSAuZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6bm90KDpjaGVja2VkKTpub3QoOmZvY3VzKXstLWJzLWZvcm0tc3dpdGNoLWJnOnVybCgiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM2UlM2NjaXJjbGUgcj0nMycgZmlsbD0ncmdiYSUyODI1NSwgMjU1LCAyNTUsIDAuMjUlMjknLyUzZSUzYy9zdmclM2UiKX0uZm9ybS1yYW5nZXt3aWR0aDoxMDAlO2hlaWdodDoxLjVyZW07cGFkZGluZzowOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5mb3JtLXJhbmdlOmZvY3Vze291dGxpbmU6MH0uZm9ybS1yYW5nZTpmb2N1czo6LXdlYmtpdC1zbGlkZXItdGh1bWJ7Ym94LXNoYWRvdzowIDAgMCAxcHggI2ZmZiwwIDAgMCAuMjVyZW0gcmdiYSgxMywxMTAsMjUzLC4yNSl9LmZvcm0tcmFuZ2U6Zm9jdXM6Oi1tb3otcmFuZ2UtdGh1bWJ7Ym94LXNoYWRvdzowIDAgMCAxcHggI2ZmZiwwIDAgMCAuMjVyZW0gcmdiYSgxMywxMTAsMjUzLC4yNSl9LmZvcm0tcmFuZ2U6Oi1tb3otZm9jdXMtb3V0ZXJ7Ym9yZGVyOjB9LmZvcm0tcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1ie3dpZHRoOjFyZW07aGVpZ2h0OjFyZW07bWFyZ2luLXRvcDotLjI1cmVtOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiMwZDZlZmQ7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czoxcmVtOy13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dH1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKXsuZm9ybS1yYW5nZTo6LXdlYmtpdC1zbGlkZXItdGh1bWJ7LXdlYmtpdC10cmFuc2l0aW9uOm5vbmU7dHJhbnNpdGlvbjpub25lfX0uZm9ybS1yYW5nZTo6LXdlYmtpdC1zbGlkZXItdGh1bWI6YWN0aXZle2JhY2tncm91bmQtY29sb3I6I2I2ZDRmZX0uZm9ybS1yYW5nZTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2t7d2lkdGg6MTAwJTtoZWlnaHQ6LjVyZW07Y29sb3I6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1zZWNvbmRhcnktYmcpO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjFyZW19LmZvcm0tcmFuZ2U6Oi1tb3otcmFuZ2UtdGh1bWJ7d2lkdGg6MXJlbTtoZWlnaHQ6MXJlbTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojMGQ2ZWZkO2JvcmRlcjowO2JvcmRlci1yYWRpdXM6MXJlbTstbW96LXRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXR9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSl7LmZvcm0tcmFuZ2U6Oi1tb3otcmFuZ2UtdGh1bWJ7LW1vei10cmFuc2l0aW9uOm5vbmU7dHJhbnNpdGlvbjpub25lfX0uZm9ybS1yYW5nZTo6LW1vei1yYW5nZS10aHVtYjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojYjZkNGZlfS5mb3JtLXJhbmdlOjotbW96LXJhbmdlLXRyYWNre3dpZHRoOjEwMCU7aGVpZ2h0Oi41cmVtO2NvbG9yOnRyYW5zcGFyZW50O2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtc2Vjb25kYXJ5LWJnKTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czoxcmVtfS5mb3JtLXJhbmdlOmRpc2FibGVke3BvaW50ZXItZXZlbnRzOm5vbmV9LmZvcm0tcmFuZ2U6ZGlzYWJsZWQ6Oi13ZWJraXQtc2xpZGVyLXRodW1ie2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtc2Vjb25kYXJ5LWNvbG9yKX0uZm9ybS1yYW5nZTpkaXNhYmxlZDo6LW1vei1yYW5nZS10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLXNlY29uZGFyeS1jb2xvcil9LmZvcm0tZmxvYXRpbmd7cG9zaXRpb246cmVsYXRpdmV9LmZvcm0tZmxvYXRpbmc+LmZvcm0tY29udHJvbCwuZm9ybS1mbG9hdGluZz4uZm9ybS1jb250cm9sLXBsYWludGV4dCwuZm9ybS1mbG9hdGluZz4uZm9ybS1zZWxlY3R7aGVpZ2h0OmNhbGMoMy41cmVtICsgY2FsYyh2YXIoLS1icy1ib3JkZXItd2lkdGgpICogMikpO21pbi1oZWlnaHQ6Y2FsYygzLjVyZW0gKyBjYWxjKHZhcigtLWJzLWJvcmRlci13aWR0aCkgKiAyKSk7bGluZS1oZWlnaHQ6MS4yNX0uZm9ybS1mbG9hdGluZz5sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7ei1pbmRleDoyO2hlaWdodDoxMDAlO3BhZGRpbmc6MXJlbSAuNzVyZW07b3ZlcmZsb3c6aGlkZGVuO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7cG9pbnRlci1ldmVudHM6bm9uZTtib3JkZXI6dmFyKC0tYnMtYm9yZGVyLXdpZHRoKSBzb2xpZCB0cmFuc3BhcmVudDt0cmFuc2Zvcm0tb3JpZ2luOjAgMDt0cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGVhc2UtaW4tb3V0LHRyYW5zZm9ybSAuMXMgZWFzZS1pbi1vdXR9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSl7LmZvcm0tZmxvYXRpbmc+bGFiZWx7dHJhbnNpdGlvbjpub25lfX0uZm9ybS1mbG9hdGluZz4uZm9ybS1jb250cm9sLC5mb3JtLWZsb2F0aW5nPi5mb3JtLWNvbnRyb2wtcGxhaW50ZXh0e3BhZGRpbmc6MXJlbSAuNzVyZW19LmZvcm0tZmxvYXRpbmc+LmZvcm0tY29udHJvbC1wbGFpbnRleHQ6Oi1tb3otcGxhY2Vob2xkZXIsLmZvcm0tZmxvYXRpbmc+LmZvcm0tY29udHJvbDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjp0cmFuc3BhcmVudH0uZm9ybS1mbG9hdGluZz4uZm9ybS1jb250cm9sLXBsYWludGV4dDo6cGxhY2Vob2xkZXIsLmZvcm0tZmxvYXRpbmc+LmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXJ7Y29sb3I6dHJhbnNwYXJlbnR9LmZvcm0tZmxvYXRpbmc+LmZvcm0tY29udHJvbC1wbGFpbnRleHQ6bm90KDotbW96LXBsYWNlaG9sZGVyLXNob3duKSwuZm9ybS1mbG9hdGluZz4uZm9ybS1jb250cm9sOm5vdCg6LW1vei1wbGFjZWhvbGRlci1zaG93bil7cGFkZGluZy10b3A6MS42MjVyZW07cGFkZGluZy1ib3R0b206LjYyNXJlbX0uZm9ybS1mbG9hdGluZz4uZm9ybS1jb250cm9sLXBsYWludGV4dDpmb2N1cywuZm9ybS1mbG9hdGluZz4uZm9ybS1jb250cm9sLXBsYWludGV4dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSwuZm9ybS1mbG9hdGluZz4uZm9ybS1jb250cm9sOmZvY3VzLC5mb3JtLWZsb2F0aW5nPi5mb3JtLWNvbnRyb2w6bm90KDpwbGFjZWhvbGRlci1zaG93bil7cGFkZGluZy10b3A6MS42MjVyZW07cGFkZGluZy1ib3R0b206LjYyNXJlbX0uZm9ybS1mbG9hdGluZz4uZm9ybS1jb250cm9sLXBsYWludGV4dDotd2Via2l0LWF1dG9maWxsLC5mb3JtLWZsb2F0aW5nPi5mb3JtLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbHtwYWRkaW5nLXRvcDoxLjYyNXJlbTtwYWRkaW5nLWJvdHRvbTouNjI1cmVtfS5mb3JtLWZsb2F0aW5nPi5mb3JtLXNlbGVjdHtwYWRkaW5nLXRvcDoxLjYyNXJlbTtwYWRkaW5nLWJvdHRvbTouNjI1cmVtfS5mb3JtLWZsb2F0aW5nPi5mb3JtLWNvbnRyb2w6bm90KDotbW96LXBsYWNlaG9sZGVyLXNob3duKX5sYWJlbHtjb2xvcjpyZ2JhKHZhcigtLWJzLWJvZHktY29sb3ItcmdiKSwuNjUpO3RyYW5zZm9ybTpzY2FsZSguODUpIHRyYW5zbGF0ZVkoLS41cmVtKSB0cmFuc2xhdGVYKC4xNXJlbSl9LmZvcm0tZmxvYXRpbmc+LmZvcm0tY29udHJvbC1wbGFpbnRleHR+bGFiZWwsLmZvcm0tZmxvYXRpbmc+LmZvcm0tY29udHJvbDpmb2N1c35sYWJlbCwuZm9ybS1mbG9hdGluZz4uZm9ybS1jb250cm9sOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pfmxhYmVsLC5mb3JtLWZsb2F0aW5nPi5mb3JtLXNlbGVjdH5sYWJlbHtjb2xvcjpyZ2JhKHZhcigtLWJzLWJvZHktY29sb3ItcmdiKSwuNjUpO3RyYW5zZm9ybTpzY2FsZSguODUpIHRyYW5zbGF0ZVkoLS41cmVtKSB0cmFuc2xhdGVYKC4xNXJlbSl9LmZvcm0tZmxvYXRpbmc+LmZvcm0tY29udHJvbDpub3QoOi1tb3otcGxhY2Vob2xkZXItc2hvd24pfmxhYmVsOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtpbnNldDoxcmVtIDAuMzc1cmVtO3otaW5kZXg6LTE7aGVpZ2h0OjEuNWVtO2NvbnRlbnQ6IiI7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1ib2R5LWJnKTtib3JkZXItcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMpfS5mb3JtLWZsb2F0aW5nPi5mb3JtLWNvbnRyb2wtcGxhaW50ZXh0fmxhYmVsOjphZnRlciwuZm9ybS1mbG9hdGluZz4uZm9ybS1jb250cm9sOmZvY3VzfmxhYmVsOjphZnRlciwuZm9ybS1mbG9hdGluZz4uZm9ybS1jb250cm9sOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pfmxhYmVsOjphZnRlciwuZm9ybS1mbG9hdGluZz4uZm9ybS1zZWxlY3R+bGFiZWw6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2luc2V0OjFyZW0gMC4zNzVyZW07ei1pbmRleDotMTtoZWlnaHQ6MS41ZW07Y29udGVudDoiIjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLWJvZHktYmcpO2JvcmRlci1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cyl9LmZvcm0tZmxvYXRpbmc+LmZvcm0tY29udHJvbDotd2Via2l0LWF1dG9maWxsfmxhYmVse2NvbG9yOnJnYmEodmFyKC0tYnMtYm9keS1jb2xvci1yZ2IpLC42NSk7dHJhbnNmb3JtOnNjYWxlKC44NSkgdHJhbnNsYXRlWSgtLjVyZW0pIHRyYW5zbGF0ZVgoLjE1cmVtKX0uZm9ybS1mbG9hdGluZz4uZm9ybS1jb250cm9sLXBsYWludGV4dH5sYWJlbHtib3JkZXItd2lkdGg6dmFyKC0tYnMtYm9yZGVyLXdpZHRoKSAwfS5mb3JtLWZsb2F0aW5nPi5mb3JtLWNvbnRyb2w6ZGlzYWJsZWR+bGFiZWwsLmZvcm0tZmxvYXRpbmc+OmRpc2FibGVkfmxhYmVse2NvbG9yOiM2Yzc1N2R9LmZvcm0tZmxvYXRpbmc+LmZvcm0tY29udHJvbDpkaXNhYmxlZH5sYWJlbDo6YWZ0ZXIsLmZvcm0tZmxvYXRpbmc+OmRpc2FibGVkfmxhYmVsOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLXNlY29uZGFyeS1iZyl9LmlucHV0LWdyb3Vwe3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDthbGlnbi1pdGVtczpzdHJldGNoO3dpZHRoOjEwMCV9LmlucHV0LWdyb3VwPi5mb3JtLWNvbnRyb2wsLmlucHV0LWdyb3VwPi5mb3JtLWZsb2F0aW5nLC5pbnB1dC1ncm91cD4uZm9ybS1zZWxlY3R7cG9zaXRpb246cmVsYXRpdmU7ZmxleDoxIDEgYXV0bzt3aWR0aDoxJTttaW4td2lkdGg6MH0uaW5wdXQtZ3JvdXA+LmZvcm0tY29udHJvbDpmb2N1cywuaW5wdXQtZ3JvdXA+LmZvcm0tZmxvYXRpbmc6Zm9jdXMtd2l0aGluLC5pbnB1dC1ncm91cD4uZm9ybS1zZWxlY3Q6Zm9jdXN7ei1pbmRleDo1fS5pbnB1dC1ncm91cCAuYnRue3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6Mn0uaW5wdXQtZ3JvdXAgLmJ0bjpmb2N1c3t6LWluZGV4OjV9LmlucHV0LWdyb3VwLXRleHR7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nOi4zNzVyZW0gLjc1cmVtO2ZvbnQtc2l6ZToxcmVtO2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxLjU7Y29sb3I6dmFyKC0tYnMtYm9keS1jb2xvcik7dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtdGVydGlhcnktYmcpO2JvcmRlcjp2YXIoLS1icy1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzKX0uaW5wdXQtZ3JvdXAtbGc+LmJ0biwuaW5wdXQtZ3JvdXAtbGc+LmZvcm0tY29udHJvbCwuaW5wdXQtZ3JvdXAtbGc+LmZvcm0tc2VsZWN0LC5pbnB1dC1ncm91cC1sZz4uaW5wdXQtZ3JvdXAtdGV4dHtwYWRkaW5nOi41cmVtIDFyZW07Zm9udC1zaXplOjEuMjVyZW07Ym9yZGVyLXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLWxnKX0uaW5wdXQtZ3JvdXAtc20+LmJ0biwuaW5wdXQtZ3JvdXAtc20+LmZvcm0tY29udHJvbCwuaW5wdXQtZ3JvdXAtc20+LmZvcm0tc2VsZWN0LC5pbnB1dC1ncm91cC1zbT4uaW5wdXQtZ3JvdXAtdGV4dHtwYWRkaW5nOi4yNXJlbSAuNXJlbTtmb250LXNpemU6Ljg3NXJlbTtib3JkZXItcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtc20pfS5pbnB1dC1ncm91cC1sZz4uZm9ybS1zZWxlY3QsLmlucHV0LWdyb3VwLXNtPi5mb3JtLXNlbGVjdHtwYWRkaW5nLXJpZ2h0OjNyZW19LmlucHV0LWdyb3VwOm5vdCguaGFzLXZhbGlkYXRpb24pPi5kcm9wZG93bi10b2dnbGU6bnRoLWxhc3QtY2hpbGQobiszKSwuaW5wdXQtZ3JvdXA6bm90KC5oYXMtdmFsaWRhdGlvbik+LmZvcm0tZmxvYXRpbmc6bm90KDpsYXN0LWNoaWxkKT4uZm9ybS1jb250cm9sLC5pbnB1dC1ncm91cDpub3QoLmhhcy12YWxpZGF0aW9uKT4uZm9ybS1mbG9hdGluZzpub3QoOmxhc3QtY2hpbGQpPi5mb3JtLXNlbGVjdCwuaW5wdXQtZ3JvdXA6bm90KC5oYXMtdmFsaWRhdGlvbik+Om5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpOm5vdCguZHJvcGRvd24tbWVudSk6bm90KC5mb3JtLWZsb2F0aW5nKXtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjB9LmlucHV0LWdyb3VwLmhhcy12YWxpZGF0aW9uPi5kcm9wZG93bi10b2dnbGU6bnRoLWxhc3QtY2hpbGQobis0KSwuaW5wdXQtZ3JvdXAuaGFzLXZhbGlkYXRpb24+LmZvcm0tZmxvYXRpbmc6bnRoLWxhc3QtY2hpbGQobiszKT4uZm9ybS1jb250cm9sLC5pbnB1dC1ncm91cC5oYXMtdmFsaWRhdGlvbj4uZm9ybS1mbG9hdGluZzpudGgtbGFzdC1jaGlsZChuKzMpPi5mb3JtLXNlbGVjdCwuaW5wdXQtZ3JvdXAuaGFzLXZhbGlkYXRpb24+Om50aC1sYXN0LWNoaWxkKG4rMyk6bm90KC5kcm9wZG93bi10b2dnbGUpOm5vdCguZHJvcGRvd24tbWVudSk6bm90KC5mb3JtLWZsb2F0aW5nKXtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjB9LmlucHV0LWdyb3VwPjpub3QoOmZpcnN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLW1lbnUpOm5vdCgudmFsaWQtdG9vbHRpcCk6bm90KC52YWxpZC1mZWVkYmFjayk6bm90KC5pbnZhbGlkLXRvb2x0aXApOm5vdCguaW52YWxpZC1mZWVkYmFjayl7bWFyZ2luLWxlZnQ6Y2FsYyh2YXIoLS1icy1ib3JkZXItd2lkdGgpICogLTEpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjB9LmlucHV0LWdyb3VwPi5mb3JtLWZsb2F0aW5nOm5vdCg6Zmlyc3QtY2hpbGQpPi5mb3JtLWNvbnRyb2wsLmlucHV0LWdyb3VwPi5mb3JtLWZsb2F0aW5nOm5vdCg6Zmlyc3QtY2hpbGQpPi5mb3JtLXNlbGVjdHtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS52YWxpZC1mZWVkYmFja3tkaXNwbGF5Om5vbmU7d2lkdGg6MTAwJTttYXJnaW4tdG9wOi4yNXJlbTtmb250LXNpemU6Ljg3NWVtO2NvbG9yOnZhcigtLWJzLWZvcm0tdmFsaWQtY29sb3IpfS52YWxpZC10b29sdGlwe3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxMDAlO3otaW5kZXg6NTtkaXNwbGF5Om5vbmU7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzouMjVyZW0gLjVyZW07bWFyZ2luLXRvcDouMXJlbTtmb250LXNpemU6Ljg3NXJlbTtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtc3VjY2Vzcyk7Ym9yZGVyLXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzKX0uaXMtdmFsaWR+LnZhbGlkLWZlZWRiYWNrLC5pcy12YWxpZH4udmFsaWQtdG9vbHRpcCwud2FzLXZhbGlkYXRlZCA6dmFsaWR+LnZhbGlkLWZlZWRiYWNrLC53YXMtdmFsaWRhdGVkIDp2YWxpZH4udmFsaWQtdG9vbHRpcHtkaXNwbGF5OmJsb2NrfS5mb3JtLWNvbnRyb2wuaXMtdmFsaWQsLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDp2YWxpZHtib3JkZXItY29sb3I6dmFyKC0tYnMtZm9ybS12YWxpZC1ib3JkZXItY29sb3IpO3BhZGRpbmctcmlnaHQ6Y2FsYygxLjVlbSArIC43NXJlbSk7YmFja2dyb3VuZC1pbWFnZTp1cmwoImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOCA4JyUzZSUzY3BhdGggZmlsbD0nJTIzMTk4NzU0JyBkPSdNMi4zIDYuNzMuNiA0LjUzYy0uNC0xLjA0LjQ2LTEuNCAxLjEtLjhsMS4xIDEuNCAzLjQtMy44Yy42LS42MyAxLjYtLjI3IDEuMi43bC00IDQuNmMtLjQzLjUtLjguNC0xLjEuMXonLyUzZSUzYy9zdmclM2UiKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodCBjYWxjKC4zNzVlbSArIC4xODc1cmVtKSBjZW50ZXI7YmFja2dyb3VuZC1zaXplOmNhbGMoLjc1ZW0gKyAuMzc1cmVtKSBjYWxjKC43NWVtICsgLjM3NXJlbSl9LmZvcm0tY29udHJvbC5pcy12YWxpZDpmb2N1cywud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOnZhbGlkOmZvY3Vze2JvcmRlci1jb2xvcjp2YXIoLS1icy1mb3JtLXZhbGlkLWJvcmRlci1jb2xvcik7Ym94LXNoYWRvdzowIDAgMCAuMjVyZW0gcmdiYSh2YXIoLS1icy1zdWNjZXNzLXJnYiksLjI1KX0ud2FzLXZhbGlkYXRlZCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2w6dmFsaWQsdGV4dGFyZWEuZm9ybS1jb250cm9sLmlzLXZhbGlke3BhZGRpbmctcmlnaHQ6Y2FsYygxLjVlbSArIC43NXJlbSk7YmFja2dyb3VuZC1wb3NpdGlvbjp0b3AgY2FsYyguMzc1ZW0gKyAuMTg3NXJlbSkgcmlnaHQgY2FsYyguMzc1ZW0gKyAuMTg3NXJlbSl9LmZvcm0tc2VsZWN0LmlzLXZhbGlkLC53YXMtdmFsaWRhdGVkIC5mb3JtLXNlbGVjdDp2YWxpZHtib3JkZXItY29sb3I6dmFyKC0tYnMtZm9ybS12YWxpZC1ib3JkZXItY29sb3IpfS5mb3JtLXNlbGVjdC5pcy12YWxpZDpub3QoW211bHRpcGxlXSk6bm90KFtzaXplXSksLmZvcm0tc2VsZWN0LmlzLXZhbGlkOm5vdChbbXVsdGlwbGVdKVtzaXplPSIxIl0sLndhcy12YWxpZGF0ZWQgLmZvcm0tc2VsZWN0OnZhbGlkOm5vdChbbXVsdGlwbGVdKTpub3QoW3NpemVdKSwud2FzLXZhbGlkYXRlZCAuZm9ybS1zZWxlY3Q6dmFsaWQ6bm90KFttdWx0aXBsZV0pW3NpemU9IjEiXXstLWJzLWZvcm0tc2VsZWN0LWJnLWljb246dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGZpbGw9JyUyMzE5ODc1NCcgZD0nTTIuMyA2LjczLjYgNC41M2MtLjQtMS4wNC40Ni0xLjQgMS4xLS44bDEuMSAxLjQgMy40LTMuOGMuNi0uNjMgMS42LS4yNyAxLjIuN2wtNCA0LjZjLS40My41LS44LjQtMS4xLjF6Jy8lM2UlM2Mvc3ZnJTNlIik7cGFkZGluZy1yaWdodDo0LjEyNXJlbTtiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0IC43NXJlbSBjZW50ZXIsY2VudGVyIHJpZ2h0IDIuMjVyZW07YmFja2dyb3VuZC1zaXplOjE2cHggMTJweCxjYWxjKC43NWVtICsgLjM3NXJlbSkgY2FsYyguNzVlbSArIC4zNzVyZW0pfS5mb3JtLXNlbGVjdC5pcy12YWxpZDpmb2N1cywud2FzLXZhbGlkYXRlZCAuZm9ybS1zZWxlY3Q6dmFsaWQ6Zm9jdXN7Ym9yZGVyLWNvbG9yOnZhcigtLWJzLWZvcm0tdmFsaWQtYm9yZGVyLWNvbG9yKTtib3gtc2hhZG93OjAgMCAwIC4yNXJlbSByZ2JhKHZhcigtLWJzLXN1Y2Nlc3MtcmdiKSwuMjUpfS5mb3JtLWNvbnRyb2wtY29sb3IuaXMtdmFsaWQsLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbC1jb2xvcjp2YWxpZHt3aWR0aDpjYWxjKDNyZW0gKyBjYWxjKDEuNWVtICsgLjc1cmVtKSl9LmZvcm0tY2hlY2staW5wdXQuaXMtdmFsaWQsLndhcy12YWxpZGF0ZWQgLmZvcm0tY2hlY2staW5wdXQ6dmFsaWR7Ym9yZGVyLWNvbG9yOnZhcigtLWJzLWZvcm0tdmFsaWQtYm9yZGVyLWNvbG9yKX0uZm9ybS1jaGVjay1pbnB1dC5pcy12YWxpZDpjaGVja2VkLC53YXMtdmFsaWRhdGVkIC5mb3JtLWNoZWNrLWlucHV0OnZhbGlkOmNoZWNrZWR7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1mb3JtLXZhbGlkLWNvbG9yKX0uZm9ybS1jaGVjay1pbnB1dC5pcy12YWxpZDpmb2N1cywud2FzLXZhbGlkYXRlZCAuZm9ybS1jaGVjay1pbnB1dDp2YWxpZDpmb2N1c3tib3gtc2hhZG93OjAgMCAwIC4yNXJlbSByZ2JhKHZhcigtLWJzLXN1Y2Nlc3MtcmdiKSwuMjUpfS5mb3JtLWNoZWNrLWlucHV0LmlzLXZhbGlkfi5mb3JtLWNoZWNrLWxhYmVsLC53YXMtdmFsaWRhdGVkIC5mb3JtLWNoZWNrLWlucHV0OnZhbGlkfi5mb3JtLWNoZWNrLWxhYmVse2NvbG9yOnZhcigtLWJzLWZvcm0tdmFsaWQtY29sb3IpfS5mb3JtLWNoZWNrLWlubGluZSAuZm9ybS1jaGVjay1pbnB1dH4udmFsaWQtZmVlZGJhY2t7bWFyZ2luLWxlZnQ6LjVlbX0uaW5wdXQtZ3JvdXA+LmZvcm0tY29udHJvbDpub3QoOmZvY3VzKS5pcy12YWxpZCwuaW5wdXQtZ3JvdXA+LmZvcm0tZmxvYXRpbmc6bm90KDpmb2N1cy13aXRoaW4pLmlzLXZhbGlkLC5pbnB1dC1ncm91cD4uZm9ybS1zZWxlY3Q6bm90KDpmb2N1cykuaXMtdmFsaWQsLndhcy12YWxpZGF0ZWQgLmlucHV0LWdyb3VwPi5mb3JtLWNvbnRyb2w6bm90KDpmb2N1cyk6dmFsaWQsLndhcy12YWxpZGF0ZWQgLmlucHV0LWdyb3VwPi5mb3JtLWZsb2F0aW5nOm5vdCg6Zm9jdXMtd2l0aGluKTp2YWxpZCwud2FzLXZhbGlkYXRlZCAuaW5wdXQtZ3JvdXA+LmZvcm0tc2VsZWN0Om5vdCg6Zm9jdXMpOnZhbGlke3otaW5kZXg6M30uaW52YWxpZC1mZWVkYmFja3tkaXNwbGF5Om5vbmU7d2lkdGg6MTAwJTttYXJnaW4tdG9wOi4yNXJlbTtmb250LXNpemU6Ljg3NWVtO2NvbG9yOnZhcigtLWJzLWZvcm0taW52YWxpZC1jb2xvcil9LmludmFsaWQtdG9vbHRpcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTAwJTt6LWluZGV4OjU7ZGlzcGxheTpub25lO21heC13aWR0aDoxMDAlO3BhZGRpbmc6LjI1cmVtIC41cmVtO21hcmdpbi10b3A6LjFyZW07Zm9udC1zaXplOi44NzVyZW07Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLWRhbmdlcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzKX0uaXMtaW52YWxpZH4uaW52YWxpZC1mZWVkYmFjaywuaXMtaW52YWxpZH4uaW52YWxpZC10b29sdGlwLC53YXMtdmFsaWRhdGVkIDppbnZhbGlkfi5pbnZhbGlkLWZlZWRiYWNrLC53YXMtdmFsaWRhdGVkIDppbnZhbGlkfi5pbnZhbGlkLXRvb2x0aXB7ZGlzcGxheTpibG9ja30uZm9ybS1jb250cm9sLmlzLWludmFsaWQsLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlke2JvcmRlci1jb2xvcjp2YXIoLS1icy1mb3JtLWludmFsaWQtYm9yZGVyLWNvbG9yKTtwYWRkaW5nLXJpZ2h0OmNhbGMoMS41ZW0gKyAuNzVyZW0pO2JhY2tncm91bmQtaW1hZ2U6dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEyIDEyJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZGMzNTQ1JyUzZSUzY2NpcmNsZSBjeD0nNicgY3k9JzYnIHI9JzQuNScvJTNlJTNjcGF0aCBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNS44IDMuNmguNEw2IDYuNXonLyUzZSUzY2NpcmNsZSBjeD0nNicgY3k9JzguMicgcj0nLjYnIGZpbGw9JyUyM2RjMzU0NScgc3Ryb2tlPSdub25lJy8lM2UlM2Mvc3ZnJTNlIik7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246cmlnaHQgY2FsYyguMzc1ZW0gKyAuMTg3NXJlbSkgY2VudGVyO2JhY2tncm91bmQtc2l6ZTpjYWxjKC43NWVtICsgLjM3NXJlbSkgY2FsYyguNzVlbSArIC4zNzVyZW0pfS5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZDpmb2N1cywud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOmludmFsaWQ6Zm9jdXN7Ym9yZGVyLWNvbG9yOnZhcigtLWJzLWZvcm0taW52YWxpZC1ib3JkZXItY29sb3IpO2JveC1zaGFkb3c6MCAwIDAgLjI1cmVtIHJnYmEodmFyKC0tYnMtZGFuZ2VyLXJnYiksLjI1KX0ud2FzLXZhbGlkYXRlZCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2w6aW52YWxpZCx0ZXh0YXJlYS5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZHtwYWRkaW5nLXJpZ2h0OmNhbGMoMS41ZW0gKyAuNzVyZW0pO2JhY2tncm91bmQtcG9zaXRpb246dG9wIGNhbGMoLjM3NWVtICsgLjE4NzVyZW0pIHJpZ2h0IGNhbGMoLjM3NWVtICsgLjE4NzVyZW0pfS5mb3JtLXNlbGVjdC5pcy1pbnZhbGlkLC53YXMtdmFsaWRhdGVkIC5mb3JtLXNlbGVjdDppbnZhbGlke2JvcmRlci1jb2xvcjp2YXIoLS1icy1mb3JtLWludmFsaWQtYm9yZGVyLWNvbG9yKX0uZm9ybS1zZWxlY3QuaXMtaW52YWxpZDpub3QoW211bHRpcGxlXSk6bm90KFtzaXplXSksLmZvcm0tc2VsZWN0LmlzLWludmFsaWQ6bm90KFttdWx0aXBsZV0pW3NpemU9IjEiXSwud2FzLXZhbGlkYXRlZCAuZm9ybS1zZWxlY3Q6aW52YWxpZDpub3QoW211bHRpcGxlXSk6bm90KFtzaXplXSksLndhcy12YWxpZGF0ZWQgLmZvcm0tc2VsZWN0OmludmFsaWQ6bm90KFttdWx0aXBsZV0pW3NpemU9IjEiXXstLWJzLWZvcm0tc2VsZWN0LWJnLWljb246dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEyIDEyJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZGMzNTQ1JyUzZSUzY2NpcmNsZSBjeD0nNicgY3k9JzYnIHI9JzQuNScvJTNlJTNjcGF0aCBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNS44IDMuNmguNEw2IDYuNXonLyUzZSUzY2NpcmNsZSBjeD0nNicgY3k9JzguMicgcj0nLjYnIGZpbGw9JyUyM2RjMzU0NScgc3Ryb2tlPSdub25lJy8lM2UlM2Mvc3ZnJTNlIik7cGFkZGluZy1yaWdodDo0LjEyNXJlbTtiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0IC43NXJlbSBjZW50ZXIsY2VudGVyIHJpZ2h0IDIuMjVyZW07YmFja2dyb3VuZC1zaXplOjE2cHggMTJweCxjYWxjKC43NWVtICsgLjM3NXJlbSkgY2FsYyguNzVlbSArIC4zNzVyZW0pfS5mb3JtLXNlbGVjdC5pcy1pbnZhbGlkOmZvY3VzLC53YXMtdmFsaWRhdGVkIC5mb3JtLXNlbGVjdDppbnZhbGlkOmZvY3Vze2JvcmRlci1jb2xvcjp2YXIoLS1icy1mb3JtLWludmFsaWQtYm9yZGVyLWNvbG9yKTtib3gtc2hhZG93OjAgMCAwIC4yNXJlbSByZ2JhKHZhcigtLWJzLWRhbmdlci1yZ2IpLC4yNSl9LmZvcm0tY29udHJvbC1jb2xvci5pcy1pbnZhbGlkLC53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2wtY29sb3I6aW52YWxpZHt3aWR0aDpjYWxjKDNyZW0gKyBjYWxjKDEuNWVtICsgLjc1cmVtKSl9LmZvcm0tY2hlY2staW5wdXQuaXMtaW52YWxpZCwud2FzLXZhbGlkYXRlZCAuZm9ybS1jaGVjay1pbnB1dDppbnZhbGlke2JvcmRlci1jb2xvcjp2YXIoLS1icy1mb3JtLWludmFsaWQtYm9yZGVyLWNvbG9yKX0uZm9ybS1jaGVjay1pbnB1dC5pcy1pbnZhbGlkOmNoZWNrZWQsLndhcy12YWxpZGF0ZWQgLmZvcm0tY2hlY2staW5wdXQ6aW52YWxpZDpjaGVja2Vke2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtZm9ybS1pbnZhbGlkLWNvbG9yKX0uZm9ybS1jaGVjay1pbnB1dC5pcy1pbnZhbGlkOmZvY3VzLC53YXMtdmFsaWRhdGVkIC5mb3JtLWNoZWNrLWlucHV0OmludmFsaWQ6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAuMjVyZW0gcmdiYSh2YXIoLS1icy1kYW5nZXItcmdiKSwuMjUpfS5mb3JtLWNoZWNrLWlucHV0LmlzLWludmFsaWR+LmZvcm0tY2hlY2stbGFiZWwsLndhcy12YWxpZGF0ZWQgLmZvcm0tY2hlY2staW5wdXQ6aW52YWxpZH4uZm9ybS1jaGVjay1sYWJlbHtjb2xvcjp2YXIoLS1icy1mb3JtLWludmFsaWQtY29sb3IpfS5mb3JtLWNoZWNrLWlubGluZSAuZm9ybS1jaGVjay1pbnB1dH4uaW52YWxpZC1mZWVkYmFja3ttYXJnaW4tbGVmdDouNWVtfS5pbnB1dC1ncm91cD4uZm9ybS1jb250cm9sOm5vdCg6Zm9jdXMpLmlzLWludmFsaWQsLmlucHV0LWdyb3VwPi5mb3JtLWZsb2F0aW5nOm5vdCg6Zm9jdXMtd2l0aGluKS5pcy1pbnZhbGlkLC5pbnB1dC1ncm91cD4uZm9ybS1zZWxlY3Q6bm90KDpmb2N1cykuaXMtaW52YWxpZCwud2FzLXZhbGlkYXRlZCAuaW5wdXQtZ3JvdXA+LmZvcm0tY29udHJvbDpub3QoOmZvY3VzKTppbnZhbGlkLC53YXMtdmFsaWRhdGVkIC5pbnB1dC1ncm91cD4uZm9ybS1mbG9hdGluZzpub3QoOmZvY3VzLXdpdGhpbik6aW52YWxpZCwud2FzLXZhbGlkYXRlZCAuaW5wdXQtZ3JvdXA+LmZvcm0tc2VsZWN0Om5vdCg6Zm9jdXMpOmludmFsaWR7ei1pbmRleDo0fS5idG57LS1icy1idG4tcGFkZGluZy14OjAuNzVyZW07LS1icy1idG4tcGFkZGluZy15OjAuMzc1cmVtOy0tYnMtYnRuLWZvbnQtZmFtaWx5OiA7LS1icy1idG4tZm9udC1zaXplOjFyZW07LS1icy1idG4tZm9udC13ZWlnaHQ6NDAwOy0tYnMtYnRuLWxpbmUtaGVpZ2h0OjEuNTstLWJzLWJ0bi1jb2xvcjp2YXIoLS1icy1ib2R5LWNvbG9yKTstLWJzLWJ0bi1iZzp0cmFuc3BhcmVudDstLWJzLWJ0bi1ib3JkZXItd2lkdGg6dmFyKC0tYnMtYm9yZGVyLXdpZHRoKTstLWJzLWJ0bi1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1icy1idG4tYm9yZGVyLXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzKTstLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1icy1idG4tYm94LXNoYWRvdzppbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpOy0tYnMtYnRuLWRpc2FibGVkLW9wYWNpdHk6MC42NTstLWJzLWJ0bi1mb2N1cy1ib3gtc2hhZG93OjAgMCAwIDAuMjVyZW0gcmdiYSh2YXIoLS1icy1idG4tZm9jdXMtc2hhZG93LXJnYiksIC41KTtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOnZhcigtLWJzLWJ0bi1wYWRkaW5nLXkpIHZhcigtLWJzLWJ0bi1wYWRkaW5nLXgpO2ZvbnQtZmFtaWx5OnZhcigtLWJzLWJ0bi1mb250LWZhbWlseSk7Zm9udC1zaXplOnZhcigtLWJzLWJ0bi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLWJzLWJ0bi1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tYnMtYnRuLWxpbmUtaGVpZ2h0KTtjb2xvcjp2YXIoLS1icy1idG4tY29sb3IpO3RleHQtYWxpZ246Y2VudGVyO3RleHQtZGVjb3JhdGlvbjpub25lO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Ym9yZGVyOnZhcigtLWJzLWJ0bi1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLWJ0bi1ib3JkZXItY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tYnMtYnRuLWJvcmRlci1yYWRpdXMpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtYnRuLWJnKTt0cmFuc2l0aW9uOmNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dH1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKXsuYnRue3RyYW5zaXRpb246bm9uZX19LmJ0bjpob3Zlcntjb2xvcjp2YXIoLS1icy1idG4taG92ZXItY29sb3IpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtYnRuLWhvdmVyLWJnKTtib3JkZXItY29sb3I6dmFyKC0tYnMtYnRuLWhvdmVyLWJvcmRlci1jb2xvcil9LmJ0bi1jaGVjaysuYnRuOmhvdmVye2NvbG9yOnZhcigtLWJzLWJ0bi1jb2xvcik7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1idG4tYmcpO2JvcmRlci1jb2xvcjp2YXIoLS1icy1idG4tYm9yZGVyLWNvbG9yKX0uYnRuOmZvY3VzLXZpc2libGV7Y29sb3I6dmFyKC0tYnMtYnRuLWhvdmVyLWNvbG9yKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLWJ0bi1ob3Zlci1iZyk7Ym9yZGVyLWNvbG9yOnZhcigtLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3IpO291dGxpbmU6MDtib3gtc2hhZG93OnZhcigtLWJzLWJ0bi1mb2N1cy1ib3gtc2hhZG93KX0uYnRuLWNoZWNrOmZvY3VzLXZpc2libGUrLmJ0bntib3JkZXItY29sb3I6dmFyKC0tYnMtYnRuLWhvdmVyLWJvcmRlci1jb2xvcik7b3V0bGluZTowO2JveC1zaGFkb3c6dmFyKC0tYnMtYnRuLWZvY3VzLWJveC1zaGFkb3cpfS5idG4tY2hlY2s6Y2hlY2tlZCsuYnRuLC5idG4uYWN0aXZlLC5idG4uc2hvdywuYnRuOmZpcnN0LWNoaWxkOmFjdGl2ZSw6bm90KC5idG4tY2hlY2spKy5idG46YWN0aXZle2NvbG9yOnZhcigtLWJzLWJ0bi1hY3RpdmUtY29sb3IpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtYnRuLWFjdGl2ZS1iZyk7Ym9yZGVyLWNvbG9yOnZhcigtLWJzLWJ0bi1hY3RpdmUtYm9yZGVyLWNvbG9yKX0uYnRuLWNoZWNrOmNoZWNrZWQrLmJ0bjpmb2N1cy12aXNpYmxlLC5idG4uYWN0aXZlOmZvY3VzLXZpc2libGUsLmJ0bi5zaG93OmZvY3VzLXZpc2libGUsLmJ0bjpmaXJzdC1jaGlsZDphY3RpdmU6Zm9jdXMtdmlzaWJsZSw6bm90KC5idG4tY2hlY2spKy5idG46YWN0aXZlOmZvY3VzLXZpc2libGV7Ym94LXNoYWRvdzp2YXIoLS1icy1idG4tZm9jdXMtYm94LXNoYWRvdyl9LmJ0bi1jaGVjazpjaGVja2VkOmZvY3VzLXZpc2libGUrLmJ0bntib3gtc2hhZG93OnZhcigtLWJzLWJ0bi1mb2N1cy1ib3gtc2hhZG93KX0uYnRuLmRpc2FibGVkLC5idG46ZGlzYWJsZWQsZmllbGRzZXQ6ZGlzYWJsZWQgLmJ0bntjb2xvcjp2YXIoLS1icy1idG4tZGlzYWJsZWQtY29sb3IpO3BvaW50ZXItZXZlbnRzOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1idG4tZGlzYWJsZWQtYmcpO2JvcmRlci1jb2xvcjp2YXIoLS1icy1idG4tZGlzYWJsZWQtYm9yZGVyLWNvbG9yKTtvcGFjaXR5OnZhcigtLWJzLWJ0bi1kaXNhYmxlZC1vcGFjaXR5KX0uYnRuLXByaW1hcnl7LS1icy1idG4tY29sb3I6I2ZmZjstLWJzLWJ0bi1iZzojMGQ2ZWZkOy0tYnMtYnRuLWJvcmRlci1jb2xvcjojMGQ2ZWZkOy0tYnMtYnRuLWhvdmVyLWNvbG9yOiNmZmY7LS1icy1idG4taG92ZXItYmc6IzBiNWVkNzstLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3I6IzBhNThjYTstLWJzLWJ0bi1mb2N1cy1zaGFkb3ctcmdiOjQ5LDEzMiwyNTM7LS1icy1idG4tYWN0aXZlLWNvbG9yOiNmZmY7LS1icy1idG4tYWN0aXZlLWJnOiMwYTU4Y2E7LS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjojMGE1M2JlOy0tYnMtYnRuLWFjdGl2ZS1zaGFkb3c6aW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpOy0tYnMtYnRuLWRpc2FibGVkLWNvbG9yOiNmZmY7LS1icy1idG4tZGlzYWJsZWQtYmc6IzBkNmVmZDstLWJzLWJ0bi1kaXNhYmxlZC1ib3JkZXItY29sb3I6IzBkNmVmZH0uYnRuLXNlY29uZGFyeXstLWJzLWJ0bi1jb2xvcjojZmZmOy0tYnMtYnRuLWJnOiM2Yzc1N2Q7LS1icy1idG4tYm9yZGVyLWNvbG9yOiM2Yzc1N2Q7LS1icy1idG4taG92ZXItY29sb3I6I2ZmZjstLWJzLWJ0bi1ob3Zlci1iZzojNWM2MzZhOy0tYnMtYnRuLWhvdmVyLWJvcmRlci1jb2xvcjojNTY1ZTY0Oy0tYnMtYnRuLWZvY3VzLXNoYWRvdy1yZ2I6MTMwLDEzOCwxNDU7LS1icy1idG4tYWN0aXZlLWNvbG9yOiNmZmY7LS1icy1idG4tYWN0aXZlLWJnOiM1NjVlNjQ7LS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjojNTE1ODVlOy0tYnMtYnRuLWFjdGl2ZS1zaGFkb3c6aW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpOy0tYnMtYnRuLWRpc2FibGVkLWNvbG9yOiNmZmY7LS1icy1idG4tZGlzYWJsZWQtYmc6IzZjNzU3ZDstLWJzLWJ0bi1kaXNhYmxlZC1ib3JkZXItY29sb3I6IzZjNzU3ZH0uYnRuLXN1Y2Nlc3N7LS1icy1idG4tY29sb3I6I2ZmZjstLWJzLWJ0bi1iZzojMTk4NzU0Oy0tYnMtYnRuLWJvcmRlci1jb2xvcjojMTk4NzU0Oy0tYnMtYnRuLWhvdmVyLWNvbG9yOiNmZmY7LS1icy1idG4taG92ZXItYmc6IzE1NzM0NzstLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3I6IzE0NmM0MzstLWJzLWJ0bi1mb2N1cy1zaGFkb3ctcmdiOjYwLDE1MywxMTA7LS1icy1idG4tYWN0aXZlLWNvbG9yOiNmZmY7LS1icy1idG4tYWN0aXZlLWJnOiMxNDZjNDM7LS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjojMTM2NTNmOy0tYnMtYnRuLWFjdGl2ZS1zaGFkb3c6aW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpOy0tYnMtYnRuLWRpc2FibGVkLWNvbG9yOiNmZmY7LS1icy1idG4tZGlzYWJsZWQtYmc6IzE5ODc1NDstLWJzLWJ0bi1kaXNhYmxlZC1ib3JkZXItY29sb3I6IzE5ODc1NH0uYnRuLWluZm97LS1icy1idG4tY29sb3I6IzAwMDstLWJzLWJ0bi1iZzojMGRjYWYwOy0tYnMtYnRuLWJvcmRlci1jb2xvcjojMGRjYWYwOy0tYnMtYnRuLWhvdmVyLWNvbG9yOiMwMDA7LS1icy1idG4taG92ZXItYmc6IzMxZDJmMjstLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3I6IzI1Y2ZmMjstLWJzLWJ0bi1mb2N1cy1zaGFkb3ctcmdiOjExLDE3MiwyMDQ7LS1icy1idG4tYWN0aXZlLWNvbG9yOiMwMDA7LS1icy1idG4tYWN0aXZlLWJnOiMzZGQ1ZjM7LS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjojMjVjZmYyOy0tYnMtYnRuLWFjdGl2ZS1zaGFkb3c6aW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpOy0tYnMtYnRuLWRpc2FibGVkLWNvbG9yOiMwMDA7LS1icy1idG4tZGlzYWJsZWQtYmc6IzBkY2FmMDstLWJzLWJ0bi1kaXNhYmxlZC1ib3JkZXItY29sb3I6IzBkY2FmMH0uYnRuLXdhcm5pbmd7LS1icy1idG4tY29sb3I6IzAwMDstLWJzLWJ0bi1iZzojZmZjMTA3Oy0tYnMtYnRuLWJvcmRlci1jb2xvcjojZmZjMTA3Oy0tYnMtYnRuLWhvdmVyLWNvbG9yOiMwMDA7LS1icy1idG4taG92ZXItYmc6I2ZmY2EyYzstLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3I6I2ZmYzcyMDstLWJzLWJ0bi1mb2N1cy1zaGFkb3ctcmdiOjIxNywxNjQsNjstLWJzLWJ0bi1hY3RpdmUtY29sb3I6IzAwMDstLWJzLWJ0bi1hY3RpdmUtYmc6I2ZmY2QzOTstLWJzLWJ0bi1hY3RpdmUtYm9yZGVyLWNvbG9yOiNmZmM3MjA7LS1icy1idG4tYWN0aXZlLXNoYWRvdzppbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7LS1icy1idG4tZGlzYWJsZWQtY29sb3I6IzAwMDstLWJzLWJ0bi1kaXNhYmxlZC1iZzojZmZjMTA3Oy0tYnMtYnRuLWRpc2FibGVkLWJvcmRlci1jb2xvcjojZmZjMTA3fS5idG4tZGFuZ2Vyey0tYnMtYnRuLWNvbG9yOiNmZmY7LS1icy1idG4tYmc6I2RjMzU0NTstLWJzLWJ0bi1ib3JkZXItY29sb3I6I2RjMzU0NTstLWJzLWJ0bi1ob3Zlci1jb2xvcjojZmZmOy0tYnMtYnRuLWhvdmVyLWJnOiNiYjJkM2I7LS1icy1idG4taG92ZXItYm9yZGVyLWNvbG9yOiNiMDJhMzc7LS1icy1idG4tZm9jdXMtc2hhZG93LXJnYjoyMjUsODMsOTc7LS1icy1idG4tYWN0aXZlLWNvbG9yOiNmZmY7LS1icy1idG4tYWN0aXZlLWJnOiNiMDJhMzc7LS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjojYTUyODM0Oy0tYnMtYnRuLWFjdGl2ZS1zaGFkb3c6aW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpOy0tYnMtYnRuLWRpc2FibGVkLWNvbG9yOiNmZmY7LS1icy1idG4tZGlzYWJsZWQtYmc6I2RjMzU0NTstLWJzLWJ0bi1kaXNhYmxlZC1ib3JkZXItY29sb3I6I2RjMzU0NX0uYnRuLWxpZ2h0ey0tYnMtYnRuLWNvbG9yOiMwMDA7LS1icy1idG4tYmc6I2Y4ZjlmYTstLWJzLWJ0bi1ib3JkZXItY29sb3I6I2Y4ZjlmYTstLWJzLWJ0bi1ob3Zlci1jb2xvcjojMDAwOy0tYnMtYnRuLWhvdmVyLWJnOiNkM2Q0ZDU7LS1icy1idG4taG92ZXItYm9yZGVyLWNvbG9yOiNjNmM3Yzg7LS1icy1idG4tZm9jdXMtc2hhZG93LXJnYjoyMTEsMjEyLDIxMzstLWJzLWJ0bi1hY3RpdmUtY29sb3I6IzAwMDstLWJzLWJ0bi1hY3RpdmUtYmc6I2M2YzdjODstLWJzLWJ0bi1hY3RpdmUtYm9yZGVyLWNvbG9yOiNiYWJiYmM7LS1icy1idG4tYWN0aXZlLXNoYWRvdzppbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7LS1icy1idG4tZGlzYWJsZWQtY29sb3I6IzAwMDstLWJzLWJ0bi1kaXNhYmxlZC1iZzojZjhmOWZhOy0tYnMtYnRuLWRpc2FibGVkLWJvcmRlci1jb2xvcjojZjhmOWZhfS5idG4tZGFya3stLWJzLWJ0bi1jb2xvcjojZmZmOy0tYnMtYnRuLWJnOiMyMTI1Mjk7LS1icy1idG4tYm9yZGVyLWNvbG9yOiMyMTI1Mjk7LS1icy1idG4taG92ZXItY29sb3I6I2ZmZjstLWJzLWJ0bi1ob3Zlci1iZzojNDI0NjQ5Oy0tYnMtYnRuLWhvdmVyLWJvcmRlci1jb2xvcjojMzczYjNlOy0tYnMtYnRuLWZvY3VzLXNoYWRvdy1yZ2I6NjYsNzAsNzM7LS1icy1idG4tYWN0aXZlLWNvbG9yOiNmZmY7LS1icy1idG4tYWN0aXZlLWJnOiM0ZDUxNTQ7LS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjojMzczYjNlOy0tYnMtYnRuLWFjdGl2ZS1zaGFkb3c6aW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpOy0tYnMtYnRuLWRpc2FibGVkLWNvbG9yOiNmZmY7LS1icy1idG4tZGlzYWJsZWQtYmc6IzIxMjUyOTstLWJzLWJ0bi1kaXNhYmxlZC1ib3JkZXItY29sb3I6IzIxMjUyOX0uYnRuLW91dGxpbmUtcHJpbWFyeXstLWJzLWJ0bi1jb2xvcjojMGQ2ZWZkOy0tYnMtYnRuLWJvcmRlci1jb2xvcjojMGQ2ZWZkOy0tYnMtYnRuLWhvdmVyLWNvbG9yOiNmZmY7LS1icy1idG4taG92ZXItYmc6IzBkNmVmZDstLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3I6IzBkNmVmZDstLWJzLWJ0bi1mb2N1cy1zaGFkb3ctcmdiOjEzLDExMCwyNTM7LS1icy1idG4tYWN0aXZlLWNvbG9yOiNmZmY7LS1icy1idG4tYWN0aXZlLWJnOiMwZDZlZmQ7LS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjojMGQ2ZWZkOy0tYnMtYnRuLWFjdGl2ZS1zaGFkb3c6aW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpOy0tYnMtYnRuLWRpc2FibGVkLWNvbG9yOiMwZDZlZmQ7LS1icy1idG4tZGlzYWJsZWQtYmc6dHJhbnNwYXJlbnQ7LS1icy1idG4tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiMwZDZlZmQ7LS1icy1ncmFkaWVudDpub25lfS5idG4tb3V0bGluZS1zZWNvbmRhcnl7LS1icy1idG4tY29sb3I6IzZjNzU3ZDstLWJzLWJ0bi1ib3JkZXItY29sb3I6IzZjNzU3ZDstLWJzLWJ0bi1ob3Zlci1jb2xvcjojZmZmOy0tYnMtYnRuLWhvdmVyLWJnOiM2Yzc1N2Q7LS1icy1idG4taG92ZXItYm9yZGVyLWNvbG9yOiM2Yzc1N2Q7LS1icy1idG4tZm9jdXMtc2hhZG93LXJnYjoxMDgsMTE3LDEyNTstLWJzLWJ0bi1hY3RpdmUtY29sb3I6I2ZmZjstLWJzLWJ0bi1hY3RpdmUtYmc6IzZjNzU3ZDstLWJzLWJ0bi1hY3RpdmUtYm9yZGVyLWNvbG9yOiM2Yzc1N2Q7LS1icy1idG4tYWN0aXZlLXNoYWRvdzppbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7LS1icy1idG4tZGlzYWJsZWQtY29sb3I6IzZjNzU3ZDstLWJzLWJ0bi1kaXNhYmxlZC1iZzp0cmFuc3BhcmVudDstLWJzLWJ0bi1kaXNhYmxlZC1ib3JkZXItY29sb3I6IzZjNzU3ZDstLWJzLWdyYWRpZW50Om5vbmV9LmJ0bi1vdXRsaW5lLXN1Y2Nlc3N7LS1icy1idG4tY29sb3I6IzE5ODc1NDstLWJzLWJ0bi1ib3JkZXItY29sb3I6IzE5ODc1NDstLWJzLWJ0bi1ob3Zlci1jb2xvcjojZmZmOy0tYnMtYnRuLWhvdmVyLWJnOiMxOTg3NTQ7LS1icy1idG4taG92ZXItYm9yZGVyLWNvbG9yOiMxOTg3NTQ7LS1icy1idG4tZm9jdXMtc2hhZG93LXJnYjoyNSwxMzUsODQ7LS1icy1idG4tYWN0aXZlLWNvbG9yOiNmZmY7LS1icy1idG4tYWN0aXZlLWJnOiMxOTg3NTQ7LS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjojMTk4NzU0Oy0tYnMtYnRuLWFjdGl2ZS1zaGFkb3c6aW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpOy0tYnMtYnRuLWRpc2FibGVkLWNvbG9yOiMxOTg3NTQ7LS1icy1idG4tZGlzYWJsZWQtYmc6dHJhbnNwYXJlbnQ7LS1icy1idG4tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiMxOTg3NTQ7LS1icy1ncmFkaWVudDpub25lfS5idG4tb3V0bGluZS1pbmZvey0tYnMtYnRuLWNvbG9yOiMwZGNhZjA7LS1icy1idG4tYm9yZGVyLWNvbG9yOiMwZGNhZjA7LS1icy1idG4taG92ZXItY29sb3I6IzAwMDstLWJzLWJ0bi1ob3Zlci1iZzojMGRjYWYwOy0tYnMtYnRuLWhvdmVyLWJvcmRlci1jb2xvcjojMGRjYWYwOy0tYnMtYnRuLWZvY3VzLXNoYWRvdy1yZ2I6MTMsMjAyLDI0MDstLWJzLWJ0bi1hY3RpdmUtY29sb3I6IzAwMDstLWJzLWJ0bi1hY3RpdmUtYmc6IzBkY2FmMDstLWJzLWJ0bi1hY3RpdmUtYm9yZGVyLWNvbG9yOiMwZGNhZjA7LS1icy1idG4tYWN0aXZlLXNoYWRvdzppbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7LS1icy1idG4tZGlzYWJsZWQtY29sb3I6IzBkY2FmMDstLWJzLWJ0bi1kaXNhYmxlZC1iZzp0cmFuc3BhcmVudDstLWJzLWJ0bi1kaXNhYmxlZC1ib3JkZXItY29sb3I6IzBkY2FmMDstLWJzLWdyYWRpZW50Om5vbmV9LmJ0bi1vdXRsaW5lLXdhcm5pbmd7LS1icy1idG4tY29sb3I6I2ZmYzEwNzstLWJzLWJ0bi1ib3JkZXItY29sb3I6I2ZmYzEwNzstLWJzLWJ0bi1ob3Zlci1jb2xvcjojMDAwOy0tYnMtYnRuLWhvdmVyLWJnOiNmZmMxMDc7LS1icy1idG4taG92ZXItYm9yZGVyLWNvbG9yOiNmZmMxMDc7LS1icy1idG4tZm9jdXMtc2hhZG93LXJnYjoyNTUsMTkzLDc7LS1icy1idG4tYWN0aXZlLWNvbG9yOiMwMDA7LS1icy1idG4tYWN0aXZlLWJnOiNmZmMxMDc7LS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjojZmZjMTA3Oy0tYnMtYnRuLWFjdGl2ZS1zaGFkb3c6aW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpOy0tYnMtYnRuLWRpc2FibGVkLWNvbG9yOiNmZmMxMDc7LS1icy1idG4tZGlzYWJsZWQtYmc6dHJhbnNwYXJlbnQ7LS1icy1idG4tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiNmZmMxMDc7LS1icy1ncmFkaWVudDpub25lfS5idG4tb3V0bGluZS1kYW5nZXJ7LS1icy1idG4tY29sb3I6I2RjMzU0NTstLWJzLWJ0bi1ib3JkZXItY29sb3I6I2RjMzU0NTstLWJzLWJ0bi1ob3Zlci1jb2xvcjojZmZmOy0tYnMtYnRuLWhvdmVyLWJnOiNkYzM1NDU7LS1icy1idG4taG92ZXItYm9yZGVyLWNvbG9yOiNkYzM1NDU7LS1icy1idG4tZm9jdXMtc2hhZG93LXJnYjoyMjAsNTMsNjk7LS1icy1idG4tYWN0aXZlLWNvbG9yOiNmZmY7LS1icy1idG4tYWN0aXZlLWJnOiNkYzM1NDU7LS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjojZGMzNTQ1Oy0tYnMtYnRuLWFjdGl2ZS1zaGFkb3c6aW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpOy0tYnMtYnRuLWRpc2FibGVkLWNvbG9yOiNkYzM1NDU7LS1icy1idG4tZGlzYWJsZWQtYmc6dHJhbnNwYXJlbnQ7LS1icy1idG4tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiNkYzM1NDU7LS1icy1ncmFkaWVudDpub25lfS5idG4tb3V0bGluZS1saWdodHstLWJzLWJ0bi1jb2xvcjojZjhmOWZhOy0tYnMtYnRuLWJvcmRlci1jb2xvcjojZjhmOWZhOy0tYnMtYnRuLWhvdmVyLWNvbG9yOiMwMDA7LS1icy1idG4taG92ZXItYmc6I2Y4ZjlmYTstLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3I6I2Y4ZjlmYTstLWJzLWJ0bi1mb2N1cy1zaGFkb3ctcmdiOjI0OCwyNDksMjUwOy0tYnMtYnRuLWFjdGl2ZS1jb2xvcjojMDAwOy0tYnMtYnRuLWFjdGl2ZS1iZzojZjhmOWZhOy0tYnMtYnRuLWFjdGl2ZS1ib3JkZXItY29sb3I6I2Y4ZjlmYTstLWJzLWJ0bi1hY3RpdmUtc2hhZG93Omluc2V0IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTI1KTstLWJzLWJ0bi1kaXNhYmxlZC1jb2xvcjojZjhmOWZhOy0tYnMtYnRuLWRpc2FibGVkLWJnOnRyYW5zcGFyZW50Oy0tYnMtYnRuLWRpc2FibGVkLWJvcmRlci1jb2xvcjojZjhmOWZhOy0tYnMtZ3JhZGllbnQ6bm9uZX0uYnRuLW91dGxpbmUtZGFya3stLWJzLWJ0bi1jb2xvcjojMjEyNTI5Oy0tYnMtYnRuLWJvcmRlci1jb2xvcjojMjEyNTI5Oy0tYnMtYnRuLWhvdmVyLWNvbG9yOiNmZmY7LS1icy1idG4taG92ZXItYmc6IzIxMjUyOTstLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3I6IzIxMjUyOTstLWJzLWJ0bi1mb2N1cy1zaGFkb3ctcmdiOjMzLDM3LDQxOy0tYnMtYnRuLWFjdGl2ZS1jb2xvcjojZmZmOy0tYnMtYnRuLWFjdGl2ZS1iZzojMjEyNTI5Oy0tYnMtYnRuLWFjdGl2ZS1ib3JkZXItY29sb3I6IzIxMjUyOTstLWJzLWJ0bi1hY3RpdmUtc2hhZG93Omluc2V0IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTI1KTstLWJzLWJ0bi1kaXNhYmxlZC1jb2xvcjojMjEyNTI5Oy0tYnMtYnRuLWRpc2FibGVkLWJnOnRyYW5zcGFyZW50Oy0tYnMtYnRuLWRpc2FibGVkLWJvcmRlci1jb2xvcjojMjEyNTI5Oy0tYnMtZ3JhZGllbnQ6bm9uZX0uYnRuLWxpbmt7LS1icy1idG4tZm9udC13ZWlnaHQ6NDAwOy0tYnMtYnRuLWNvbG9yOnZhcigtLWJzLWxpbmstY29sb3IpOy0tYnMtYnRuLWJnOnRyYW5zcGFyZW50Oy0tYnMtYnRuLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJzLWJ0bi1ob3Zlci1jb2xvcjp2YXIoLS1icy1saW5rLWhvdmVyLWNvbG9yKTstLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1icy1idG4tYWN0aXZlLWNvbG9yOnZhcigtLWJzLWxpbmstaG92ZXItY29sb3IpOy0tYnMtYnRuLWFjdGl2ZS1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1icy1idG4tZGlzYWJsZWQtY29sb3I6IzZjNzU3ZDstLWJzLWJ0bi1kaXNhYmxlZC1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1icy1idG4tYm94LXNoYWRvdzowIDAgMCAjMDAwOy0tYnMtYnRuLWZvY3VzLXNoYWRvdy1yZ2I6NDksMTMyLDI1Mzt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfS5idG4tbGluazpmb2N1cy12aXNpYmxle2NvbG9yOnZhcigtLWJzLWJ0bi1jb2xvcil9LmJ0bi1saW5rOmhvdmVye2NvbG9yOnZhcigtLWJzLWJ0bi1ob3Zlci1jb2xvcil9LmJ0bi1ncm91cC1sZz4uYnRuLC5idG4tbGd7LS1icy1idG4tcGFkZGluZy15OjAuNXJlbTstLWJzLWJ0bi1wYWRkaW5nLXg6MXJlbTstLWJzLWJ0bi1mb250LXNpemU6MS4yNXJlbTstLWJzLWJ0bi1ib3JkZXItcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtbGcpfS5idG4tZ3JvdXAtc20+LmJ0biwuYnRuLXNtey0tYnMtYnRuLXBhZGRpbmcteTowLjI1cmVtOy0tYnMtYnRuLXBhZGRpbmcteDowLjVyZW07LS1icy1idG4tZm9udC1zaXplOjAuODc1cmVtOy0tYnMtYnRuLWJvcmRlci1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cy1zbSl9LmZhZGV7dHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgbGluZWFyfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5mYWRle3RyYW5zaXRpb246bm9uZX19LmZhZGU6bm90KC5zaG93KXtvcGFjaXR5OjB9LmNvbGxhcHNlOm5vdCguc2hvdyl7ZGlzcGxheTpub25lfS5jb2xsYXBzaW5ne2hlaWdodDowO292ZXJmbG93OmhpZGRlbjt0cmFuc2l0aW9uOmhlaWdodCAuMzVzIGVhc2V9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSl7LmNvbGxhcHNpbmd7dHJhbnNpdGlvbjpub25lfX0uY29sbGFwc2luZy5jb2xsYXBzZS1ob3Jpem9udGFse3dpZHRoOjA7aGVpZ2h0OmF1dG87dHJhbnNpdGlvbjp3aWR0aCAuMzVzIGVhc2V9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSl7LmNvbGxhcHNpbmcuY29sbGFwc2UtaG9yaXpvbnRhbHt0cmFuc2l0aW9uOm5vbmV9fS5kcm9wZG93biwuZHJvcGRvd24tY2VudGVyLC5kcm9wZW5kLC5kcm9wc3RhcnQsLmRyb3B1cCwuZHJvcHVwLWNlbnRlcntwb3NpdGlvbjpyZWxhdGl2ZX0uZHJvcGRvd24tdG9nZ2xle3doaXRlLXNwYWNlOm5vd3JhcH0uZHJvcGRvd24tdG9nZ2xlOjphZnRlcntkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tbGVmdDouMjU1ZW07dmVydGljYWwtYWxpZ246LjI1NWVtO2NvbnRlbnQ6IiI7Ym9yZGVyLXRvcDouM2VtIHNvbGlkO2JvcmRlci1yaWdodDouM2VtIHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b206MDtib3JkZXItbGVmdDouM2VtIHNvbGlkIHRyYW5zcGFyZW50fS5kcm9wZG93bi10b2dnbGU6ZW1wdHk6OmFmdGVye21hcmdpbi1sZWZ0OjB9LmRyb3Bkb3duLW1lbnV7LS1icy1kcm9wZG93bi16aW5kZXg6MTAwMDstLWJzLWRyb3Bkb3duLW1pbi13aWR0aDoxMHJlbTstLWJzLWRyb3Bkb3duLXBhZGRpbmcteDowOy0tYnMtZHJvcGRvd24tcGFkZGluZy15OjAuNXJlbTstLWJzLWRyb3Bkb3duLXNwYWNlcjowLjEyNXJlbTstLWJzLWRyb3Bkb3duLWZvbnQtc2l6ZToxcmVtOy0tYnMtZHJvcGRvd24tY29sb3I6dmFyKC0tYnMtYm9keS1jb2xvcik7LS1icy1kcm9wZG93bi1iZzp2YXIoLS1icy1ib2R5LWJnKTstLWJzLWRyb3Bkb3duLWJvcmRlci1jb2xvcjp2YXIoLS1icy1ib3JkZXItY29sb3ItdHJhbnNsdWNlbnQpOy0tYnMtZHJvcGRvd24tYm9yZGVyLXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzKTstLWJzLWRyb3Bkb3duLWJvcmRlci13aWR0aDp2YXIoLS1icy1ib3JkZXItd2lkdGgpOy0tYnMtZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czpjYWxjKHZhcigtLWJzLWJvcmRlci1yYWRpdXMpIC0gdmFyKC0tYnMtYm9yZGVyLXdpZHRoKSk7LS1icy1kcm9wZG93bi1kaXZpZGVyLWJnOnZhcigtLWJzLWJvcmRlci1jb2xvci10cmFuc2x1Y2VudCk7LS1icy1kcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OjAuNXJlbTstLWJzLWRyb3Bkb3duLWJveC1zaGFkb3c6dmFyKC0tYnMtYm94LXNoYWRvdyk7LS1icy1kcm9wZG93bi1saW5rLWNvbG9yOnZhcigtLWJzLWJvZHktY29sb3IpOy0tYnMtZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjp2YXIoLS1icy1ib2R5LWNvbG9yKTstLWJzLWRyb3Bkb3duLWxpbmstaG92ZXItYmc6dmFyKC0tYnMtdGVydGlhcnktYmcpOy0tYnMtZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6I2ZmZjstLWJzLWRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiMwZDZlZmQ7LS1icy1kcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOnZhcigtLWJzLXRlcnRpYXJ5LWNvbG9yKTstLWJzLWRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OjFyZW07LS1icy1kcm9wZG93bi1pdGVtLXBhZGRpbmcteTowLjI1cmVtOy0tYnMtZHJvcGRvd24taGVhZGVyLWNvbG9yOiM2Yzc1N2Q7LS1icy1kcm9wZG93bi1oZWFkZXItcGFkZGluZy14OjFyZW07LS1icy1kcm9wZG93bi1oZWFkZXItcGFkZGluZy15OjAuNXJlbTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OnZhcigtLWJzLWRyb3Bkb3duLXppbmRleCk7ZGlzcGxheTpub25lO21pbi13aWR0aDp2YXIoLS1icy1kcm9wZG93bi1taW4td2lkdGgpO3BhZGRpbmc6dmFyKC0tYnMtZHJvcGRvd24tcGFkZGluZy15KSB2YXIoLS1icy1kcm9wZG93bi1wYWRkaW5nLXgpO21hcmdpbjowO2ZvbnQtc2l6ZTp2YXIoLS1icy1kcm9wZG93bi1mb250LXNpemUpO2NvbG9yOnZhcigtLWJzLWRyb3Bkb3duLWNvbG9yKTt0ZXh0LWFsaWduOmxlZnQ7bGlzdC1zdHlsZTpub25lO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtZHJvcGRvd24tYmcpO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtib3JkZXI6dmFyKC0tYnMtZHJvcGRvd24tYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1kcm9wZG93bi1ib3JkZXItY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tYnMtZHJvcGRvd24tYm9yZGVyLXJhZGl1cyl9LmRyb3Bkb3duLW1lbnVbZGF0YS1icy1wb3BwZXJde3RvcDoxMDAlO2xlZnQ6MDttYXJnaW4tdG9wOnZhcigtLWJzLWRyb3Bkb3duLXNwYWNlcil9LmRyb3Bkb3duLW1lbnUtc3RhcnR7LS1icy1wb3NpdGlvbjpzdGFydH0uZHJvcGRvd24tbWVudS1zdGFydFtkYXRhLWJzLXBvcHBlcl17cmlnaHQ6YXV0bztsZWZ0OjB9LmRyb3Bkb3duLW1lbnUtZW5key0tYnMtcG9zaXRpb246ZW5kfS5kcm9wZG93bi1tZW51LWVuZFtkYXRhLWJzLXBvcHBlcl17cmlnaHQ6MDtsZWZ0OmF1dG99QG1lZGlhIChtaW4td2lkdGg6NTc2cHgpey5kcm9wZG93bi1tZW51LXNtLXN0YXJ0ey0tYnMtcG9zaXRpb246c3RhcnR9LmRyb3Bkb3duLW1lbnUtc20tc3RhcnRbZGF0YS1icy1wb3BwZXJde3JpZ2h0OmF1dG87bGVmdDowfS5kcm9wZG93bi1tZW51LXNtLWVuZHstLWJzLXBvc2l0aW9uOmVuZH0uZHJvcGRvd24tbWVudS1zbS1lbmRbZGF0YS1icy1wb3BwZXJde3JpZ2h0OjA7bGVmdDphdXRvfX1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmRyb3Bkb3duLW1lbnUtbWQtc3RhcnR7LS1icy1wb3NpdGlvbjpzdGFydH0uZHJvcGRvd24tbWVudS1tZC1zdGFydFtkYXRhLWJzLXBvcHBlcl17cmlnaHQ6YXV0bztsZWZ0OjB9LmRyb3Bkb3duLW1lbnUtbWQtZW5key0tYnMtcG9zaXRpb246ZW5kfS5kcm9wZG93bi1tZW51LW1kLWVuZFtkYXRhLWJzLXBvcHBlcl17cmlnaHQ6MDtsZWZ0OmF1dG99fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuZHJvcGRvd24tbWVudS1sZy1zdGFydHstLWJzLXBvc2l0aW9uOnN0YXJ0fS5kcm9wZG93bi1tZW51LWxnLXN0YXJ0W2RhdGEtYnMtcG9wcGVyXXtyaWdodDphdXRvO2xlZnQ6MH0uZHJvcGRvd24tbWVudS1sZy1lbmR7LS1icy1wb3NpdGlvbjplbmR9LmRyb3Bkb3duLW1lbnUtbGctZW5kW2RhdGEtYnMtcG9wcGVyXXtyaWdodDowO2xlZnQ6YXV0b319QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuZHJvcGRvd24tbWVudS14bC1zdGFydHstLWJzLXBvc2l0aW9uOnN0YXJ0fS5kcm9wZG93bi1tZW51LXhsLXN0YXJ0W2RhdGEtYnMtcG9wcGVyXXtyaWdodDphdXRvO2xlZnQ6MH0uZHJvcGRvd24tbWVudS14bC1lbmR7LS1icy1wb3NpdGlvbjplbmR9LmRyb3Bkb3duLW1lbnUteGwtZW5kW2RhdGEtYnMtcG9wcGVyXXtyaWdodDowO2xlZnQ6YXV0b319QG1lZGlhIChtaW4td2lkdGg6MTQwMHB4KXsuZHJvcGRvd24tbWVudS14eGwtc3RhcnR7LS1icy1wb3NpdGlvbjpzdGFydH0uZHJvcGRvd24tbWVudS14eGwtc3RhcnRbZGF0YS1icy1wb3BwZXJde3JpZ2h0OmF1dG87bGVmdDowfS5kcm9wZG93bi1tZW51LXh4bC1lbmR7LS1icy1wb3NpdGlvbjplbmR9LmRyb3Bkb3duLW1lbnUteHhsLWVuZFtkYXRhLWJzLXBvcHBlcl17cmlnaHQ6MDtsZWZ0OmF1dG99fS5kcm9wdXAgLmRyb3Bkb3duLW1lbnVbZGF0YS1icy1wb3BwZXJde3RvcDphdXRvO2JvdHRvbToxMDAlO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOnZhcigtLWJzLWRyb3Bkb3duLXNwYWNlcil9LmRyb3B1cCAuZHJvcGRvd24tdG9nZ2xlOjphZnRlcntkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tbGVmdDouMjU1ZW07dmVydGljYWwtYWxpZ246LjI1NWVtO2NvbnRlbnQ6IiI7Ym9yZGVyLXRvcDowO2JvcmRlci1yaWdodDouM2VtIHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b206LjNlbSBzb2xpZDtib3JkZXItbGVmdDouM2VtIHNvbGlkIHRyYW5zcGFyZW50fS5kcm9wdXAgLmRyb3Bkb3duLXRvZ2dsZTplbXB0eTo6YWZ0ZXJ7bWFyZ2luLWxlZnQ6MH0uZHJvcGVuZCAuZHJvcGRvd24tbWVudVtkYXRhLWJzLXBvcHBlcl17dG9wOjA7cmlnaHQ6YXV0bztsZWZ0OjEwMCU7bWFyZ2luLXRvcDowO21hcmdpbi1sZWZ0OnZhcigtLWJzLWRyb3Bkb3duLXNwYWNlcil9LmRyb3BlbmQgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLWxlZnQ6LjI1NWVtO3ZlcnRpY2FsLWFsaWduOi4yNTVlbTtjb250ZW50OiIiO2JvcmRlci10b3A6LjNlbSBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmlnaHQ6MDtib3JkZXItYm90dG9tOi4zZW0gc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWxlZnQ6LjNlbSBzb2xpZH0uZHJvcGVuZCAuZHJvcGRvd24tdG9nZ2xlOmVtcHR5OjphZnRlcnttYXJnaW4tbGVmdDowfS5kcm9wZW5kIC5kcm9wZG93bi10b2dnbGU6OmFmdGVye3ZlcnRpY2FsLWFsaWduOjB9LmRyb3BzdGFydCAuZHJvcGRvd24tbWVudVtkYXRhLWJzLXBvcHBlcl17dG9wOjA7cmlnaHQ6MTAwJTtsZWZ0OmF1dG87bWFyZ2luLXRvcDowO21hcmdpbi1yaWdodDp2YXIoLS1icy1kcm9wZG93bi1zcGFjZXIpfS5kcm9wc3RhcnQgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLWxlZnQ6LjI1NWVtO3ZlcnRpY2FsLWFsaWduOi4yNTVlbTtjb250ZW50OiIifS5kcm9wc3RhcnQgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXJ7ZGlzcGxheTpub25lfS5kcm9wc3RhcnQgLmRyb3Bkb3duLXRvZ2dsZTo6YmVmb3Jle2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDouMjU1ZW07dmVydGljYWwtYWxpZ246LjI1NWVtO2NvbnRlbnQ6IiI7Ym9yZGVyLXRvcDouM2VtIHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yaWdodDouM2VtIHNvbGlkO2JvcmRlci1ib3R0b206LjNlbSBzb2xpZCB0cmFuc3BhcmVudH0uZHJvcHN0YXJ0IC5kcm9wZG93bi10b2dnbGU6ZW1wdHk6OmFmdGVye21hcmdpbi1sZWZ0OjB9LmRyb3BzdGFydCAuZHJvcGRvd24tdG9nZ2xlOjpiZWZvcmV7dmVydGljYWwtYWxpZ246MH0uZHJvcGRvd24tZGl2aWRlcntoZWlnaHQ6MDttYXJnaW46dmFyKC0tYnMtZHJvcGRvd24tZGl2aWRlci1tYXJnaW4teSkgMDtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0tYnMtZHJvcGRvd24tZGl2aWRlci1iZyk7b3BhY2l0eToxfS5kcm9wZG93bi1pdGVte2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtwYWRkaW5nOnZhcigtLWJzLWRyb3Bkb3duLWl0ZW0tcGFkZGluZy15KSB2YXIoLS1icy1kcm9wZG93bi1pdGVtLXBhZGRpbmcteCk7Y2xlYXI6Ym90aDtmb250LXdlaWdodDo0MDA7Y29sb3I6dmFyKC0tYnMtZHJvcGRvd24tbGluay1jb2xvcik7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjpub25lO3doaXRlLXNwYWNlOm5vd3JhcDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjowO2JvcmRlci1yYWRpdXM6dmFyKC0tYnMtZHJvcGRvd24taXRlbS1ib3JkZXItcmFkaXVzLDApfS5kcm9wZG93bi1pdGVtOmZvY3VzLC5kcm9wZG93bi1pdGVtOmhvdmVye2NvbG9yOnZhcigtLWJzLWRyb3Bkb3duLWxpbmstaG92ZXItY29sb3IpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtZHJvcGRvd24tbGluay1ob3Zlci1iZyl9LmRyb3Bkb3duLWl0ZW0uYWN0aXZlLC5kcm9wZG93bi1pdGVtOmFjdGl2ZXtjb2xvcjp2YXIoLS1icy1kcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcik7dGV4dC1kZWNvcmF0aW9uOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1kcm9wZG93bi1saW5rLWFjdGl2ZS1iZyl9LmRyb3Bkb3duLWl0ZW0uZGlzYWJsZWQsLmRyb3Bkb3duLWl0ZW06ZGlzYWJsZWR7Y29sb3I6dmFyKC0tYnMtZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcik7cG9pbnRlci1ldmVudHM6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5kcm9wZG93bi1tZW51LnNob3d7ZGlzcGxheTpibG9ja30uZHJvcGRvd24taGVhZGVye2Rpc3BsYXk6YmxvY2s7cGFkZGluZzp2YXIoLS1icy1kcm9wZG93bi1oZWFkZXItcGFkZGluZy15KSB2YXIoLS1icy1kcm9wZG93bi1oZWFkZXItcGFkZGluZy14KTttYXJnaW4tYm90dG9tOjA7Zm9udC1zaXplOi44NzVyZW07Y29sb3I6dmFyKC0tYnMtZHJvcGRvd24taGVhZGVyLWNvbG9yKTt3aGl0ZS1zcGFjZTpub3dyYXB9LmRyb3Bkb3duLWl0ZW0tdGV4dHtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6dmFyKC0tYnMtZHJvcGRvd24taXRlbS1wYWRkaW5nLXkpIHZhcigtLWJzLWRyb3Bkb3duLWl0ZW0tcGFkZGluZy14KTtjb2xvcjp2YXIoLS1icy1kcm9wZG93bi1saW5rLWNvbG9yKX0uZHJvcGRvd24tbWVudS1kYXJrey0tYnMtZHJvcGRvd24tY29sb3I6I2RlZTJlNjstLWJzLWRyb3Bkb3duLWJnOiMzNDNhNDA7LS1icy1kcm9wZG93bi1ib3JkZXItY29sb3I6dmFyKC0tYnMtYm9yZGVyLWNvbG9yLXRyYW5zbHVjZW50KTstLWJzLWRyb3Bkb3duLWJveC1zaGFkb3c6IDstLWJzLWRyb3Bkb3duLWxpbmstY29sb3I6I2RlZTJlNjstLWJzLWRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6I2ZmZjstLWJzLWRyb3Bkb3duLWRpdmlkZXItYmc6dmFyKC0tYnMtYm9yZGVyLWNvbG9yLXRyYW5zbHVjZW50KTstLWJzLWRyb3Bkb3duLWxpbmstaG92ZXItYmc6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTstLWJzLWRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiNmZmY7LS1icy1kcm9wZG93bi1saW5rLWFjdGl2ZS1iZzojMGQ2ZWZkOy0tYnMtZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjojYWRiNWJkOy0tYnMtZHJvcGRvd24taGVhZGVyLWNvbG9yOiNhZGI1YmR9LmJ0bi1ncm91cCwuYnRuLWdyb3VwLXZlcnRpY2Fse3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWZsZXg7dmVydGljYWwtYWxpZ246bWlkZGxlfS5idG4tZ3JvdXAtdmVydGljYWw+LmJ0biwuYnRuLWdyb3VwPi5idG57cG9zaXRpb246cmVsYXRpdmU7ZmxleDoxIDEgYXV0b30uYnRuLWdyb3VwLXZlcnRpY2FsPi5idG4tY2hlY2s6Y2hlY2tlZCsuYnRuLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1jaGVjazpmb2N1cysuYnRuLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi5hY3RpdmUsLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuOmFjdGl2ZSwuYnRuLWdyb3VwLXZlcnRpY2FsPi5idG46Zm9jdXMsLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuOmhvdmVyLC5idG4tZ3JvdXA+LmJ0bi1jaGVjazpjaGVja2VkKy5idG4sLmJ0bi1ncm91cD4uYnRuLWNoZWNrOmZvY3VzKy5idG4sLmJ0bi1ncm91cD4uYnRuLmFjdGl2ZSwuYnRuLWdyb3VwPi5idG46YWN0aXZlLC5idG4tZ3JvdXA+LmJ0bjpmb2N1cywuYnRuLWdyb3VwPi5idG46aG92ZXJ7ei1pbmRleDoxfS5idG4tdG9vbGJhcntkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LmJ0bi10b29sYmFyIC5pbnB1dC1ncm91cHt3aWR0aDphdXRvfS5idG4tZ3JvdXB7Ym9yZGVyLXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzKX0uYnRuLWdyb3VwPi5idG4tZ3JvdXA6bm90KDpmaXJzdC1jaGlsZCksLmJ0bi1ncm91cD46bm90KC5idG4tY2hlY2s6Zmlyc3QtY2hpbGQpKy5idG57bWFyZ2luLWxlZnQ6Y2FsYyh2YXIoLS1icy1ib3JkZXItd2lkdGgpICogLTEpfS5idG4tZ3JvdXA+LmJ0bi1ncm91cDpub3QoOmxhc3QtY2hpbGQpPi5idG4sLmJ0bi1ncm91cD4uYnRuLmRyb3Bkb3duLXRvZ2dsZS1zcGxpdDpmaXJzdC1jaGlsZCwuYnRuLWdyb3VwPi5idG46bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSl7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5idG4tZ3JvdXA+LmJ0bi1ncm91cDpub3QoOmZpcnN0LWNoaWxkKT4uYnRuLC5idG4tZ3JvdXA+LmJ0bjpudGgtY2hpbGQobiszKSwuYnRuLWdyb3VwPjpub3QoLmJ0bi1jaGVjaykrLmJ0bntib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5kcm9wZG93bi10b2dnbGUtc3BsaXR7cGFkZGluZy1yaWdodDouNTYyNXJlbTtwYWRkaW5nLWxlZnQ6LjU2MjVyZW19LmRyb3Bkb3duLXRvZ2dsZS1zcGxpdDo6YWZ0ZXIsLmRyb3BlbmQgLmRyb3Bkb3duLXRvZ2dsZS1zcGxpdDo6YWZ0ZXIsLmRyb3B1cCAuZHJvcGRvd24tdG9nZ2xlLXNwbGl0OjphZnRlcnttYXJnaW4tbGVmdDowfS5kcm9wc3RhcnQgLmRyb3Bkb3duLXRvZ2dsZS1zcGxpdDo6YmVmb3Jle21hcmdpbi1yaWdodDowfS5idG4tZ3JvdXAtc20+LmJ0bisuZHJvcGRvd24tdG9nZ2xlLXNwbGl0LC5idG4tc20rLmRyb3Bkb3duLXRvZ2dsZS1zcGxpdHtwYWRkaW5nLXJpZ2h0Oi4zNzVyZW07cGFkZGluZy1sZWZ0Oi4zNzVyZW19LmJ0bi1ncm91cC1sZz4uYnRuKy5kcm9wZG93bi10b2dnbGUtc3BsaXQsLmJ0bi1sZysuZHJvcGRvd24tdG9nZ2xlLXNwbGl0e3BhZGRpbmctcmlnaHQ6Ljc1cmVtO3BhZGRpbmctbGVmdDouNzVyZW19LmJ0bi1ncm91cC12ZXJ0aWNhbHtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6ZmxleC1zdGFydDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5idG4tZ3JvdXAtdmVydGljYWw+LmJ0biwuYnRuLWdyb3VwLXZlcnRpY2FsPi5idG4tZ3JvdXB7d2lkdGg6MTAwJX0uYnRuLWdyb3VwLXZlcnRpY2FsPi5idG4tZ3JvdXA6bm90KDpmaXJzdC1jaGlsZCksLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuOm5vdCg6Zmlyc3QtY2hpbGQpe21hcmdpbi10b3A6Y2FsYyh2YXIoLS1icy1ib3JkZXItd2lkdGgpICogLTEpfS5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cDpub3QoOmxhc3QtY2hpbGQpPi5idG4sLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpe2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cDpub3QoOmZpcnN0LWNoaWxkKT4uYnRuLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bn4uYnRue2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowfS5uYXZ7LS1icy1uYXYtbGluay1wYWRkaW5nLXg6MXJlbTstLWJzLW5hdi1saW5rLXBhZGRpbmcteTowLjVyZW07LS1icy1uYXYtbGluay1mb250LXdlaWdodDogOy0tYnMtbmF2LWxpbmstY29sb3I6dmFyKC0tYnMtbGluay1jb2xvcik7LS1icy1uYXYtbGluay1ob3Zlci1jb2xvcjp2YXIoLS1icy1saW5rLWhvdmVyLWNvbG9yKTstLWJzLW5hdi1saW5rLWRpc2FibGVkLWNvbG9yOnZhcigtLWJzLXNlY29uZGFyeS1jb2xvcik7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO3BhZGRpbmctbGVmdDowO21hcmdpbi1ib3R0b206MDtsaXN0LXN0eWxlOm5vbmV9Lm5hdi1saW5re2Rpc3BsYXk6YmxvY2s7cGFkZGluZzp2YXIoLS1icy1uYXYtbGluay1wYWRkaW5nLXkpIHZhcigtLWJzLW5hdi1saW5rLXBhZGRpbmcteCk7Zm9udC1zaXplOnZhcigtLWJzLW5hdi1saW5rLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tYnMtbmF2LWxpbmstZm9udC13ZWlnaHQpO2NvbG9yOnZhcigtLWJzLW5hdi1saW5rLWNvbG9yKTt0ZXh0LWRlY29yYXRpb246bm9uZTtiYWNrZ3JvdW5kOjAgMDtib3JkZXI6MDt0cmFuc2l0aW9uOmNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0fUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5uYXYtbGlua3t0cmFuc2l0aW9uOm5vbmV9fS5uYXYtbGluazpmb2N1cywubmF2LWxpbms6aG92ZXJ7Y29sb3I6dmFyKC0tYnMtbmF2LWxpbmstaG92ZXItY29sb3IpfS5uYXYtbGluazpmb2N1cy12aXNpYmxle291dGxpbmU6MDtib3gtc2hhZG93OjAgMCAwIC4yNXJlbSByZ2JhKDEzLDExMCwyNTMsLjI1KX0ubmF2LWxpbmsuZGlzYWJsZWQsLm5hdi1saW5rOmRpc2FibGVke2NvbG9yOnZhcigtLWJzLW5hdi1saW5rLWRpc2FibGVkLWNvbG9yKTtwb2ludGVyLWV2ZW50czpub25lO2N1cnNvcjpkZWZhdWx0fS5uYXYtdGFic3stLWJzLW5hdi10YWJzLWJvcmRlci13aWR0aDp2YXIoLS1icy1ib3JkZXItd2lkdGgpOy0tYnMtbmF2LXRhYnMtYm9yZGVyLWNvbG9yOnZhcigtLWJzLWJvcmRlci1jb2xvcik7LS1icy1uYXYtdGFicy1ib3JkZXItcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMpOy0tYnMtbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6dmFyKC0tYnMtc2Vjb25kYXJ5LWJnKSB2YXIoLS1icy1zZWNvbmRhcnktYmcpIHZhcigtLWJzLWJvcmRlci1jb2xvcik7LS1icy1uYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjp2YXIoLS1icy1lbXBoYXNpcy1jb2xvcik7LS1icy1uYXYtdGFicy1saW5rLWFjdGl2ZS1iZzp2YXIoLS1icy1ib2R5LWJnKTstLWJzLW5hdi10YWJzLWxpbmstYWN0aXZlLWJvcmRlci1jb2xvcjp2YXIoLS1icy1ib3JkZXItY29sb3IpIHZhcigtLWJzLWJvcmRlci1jb2xvcikgdmFyKC0tYnMtYm9keS1iZyk7Ym9yZGVyLWJvdHRvbTp2YXIoLS1icy1uYXYtdGFicy1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLW5hdi10YWJzLWJvcmRlci1jb2xvcil9Lm5hdi10YWJzIC5uYXYtbGlua3ttYXJnaW4tYm90dG9tOmNhbGMoLTEgKiB2YXIoLS1icy1uYXYtdGFicy1ib3JkZXItd2lkdGgpKTtib3JkZXI6dmFyKC0tYnMtbmF2LXRhYnMtYm9yZGVyLXdpZHRoKSBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJzLW5hdi10YWJzLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJzLW5hdi10YWJzLWJvcmRlci1yYWRpdXMpfS5uYXYtdGFicyAubmF2LWxpbms6Zm9jdXMsLm5hdi10YWJzIC5uYXYtbGluazpob3Zlcntpc29sYXRpb246aXNvbGF0ZTtib3JkZXItY29sb3I6dmFyKC0tYnMtbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3IpfS5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmV7Y29sb3I6dmFyKC0tYnMtbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3IpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtbmF2LXRhYnMtbGluay1hY3RpdmUtYmcpO2JvcmRlci1jb2xvcjp2YXIoLS1icy1uYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3IpfS5uYXYtdGFicyAuZHJvcGRvd24tbWVudXttYXJnaW4tdG9wOmNhbGMoLTEgKiB2YXIoLS1icy1uYXYtdGFicy1ib3JkZXItd2lkdGgpKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0ubmF2LXBpbGxzey0tYnMtbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cyk7LS1icy1uYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6I2ZmZjstLWJzLW5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzojMGQ2ZWZkfS5uYXYtcGlsbHMgLm5hdi1saW5re2JvcmRlci1yYWRpdXM6dmFyKC0tYnMtbmF2LXBpbGxzLWJvcmRlci1yYWRpdXMpfS5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSwubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGlua3tjb2xvcjp2YXIoLS1icy1uYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3IpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtbmF2LXBpbGxzLWxpbmstYWN0aXZlLWJnKX0ubmF2LXVuZGVybGluZXstLWJzLW5hdi11bmRlcmxpbmUtZ2FwOjFyZW07LS1icy1uYXYtdW5kZXJsaW5lLWJvcmRlci13aWR0aDowLjEyNXJlbTstLWJzLW5hdi11bmRlcmxpbmUtbGluay1hY3RpdmUtY29sb3I6dmFyKC0tYnMtZW1waGFzaXMtY29sb3IpO2dhcDp2YXIoLS1icy1uYXYtdW5kZXJsaW5lLWdhcCl9Lm5hdi11bmRlcmxpbmUgLm5hdi1saW5re3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLWxlZnQ6MDtib3JkZXItYm90dG9tOnZhcigtLWJzLW5hdi11bmRlcmxpbmUtYm9yZGVyLXdpZHRoKSBzb2xpZCB0cmFuc3BhcmVudH0ubmF2LXVuZGVybGluZSAubmF2LWxpbms6Zm9jdXMsLm5hdi11bmRlcmxpbmUgLm5hdi1saW5rOmhvdmVye2JvcmRlci1ib3R0b20tY29sb3I6Y3VycmVudGNvbG9yfS5uYXYtdW5kZXJsaW5lIC5uYXYtbGluay5hY3RpdmUsLm5hdi11bmRlcmxpbmUgLnNob3c+Lm5hdi1saW5re2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjp2YXIoLS1icy1uYXYtdW5kZXJsaW5lLWxpbmstYWN0aXZlLWNvbG9yKTtib3JkZXItYm90dG9tLWNvbG9yOmN1cnJlbnRjb2xvcn0ubmF2LWZpbGwgLm5hdi1pdGVtLC5uYXYtZmlsbD4ubmF2LWxpbmt7ZmxleDoxIDEgYXV0bzt0ZXh0LWFsaWduOmNlbnRlcn0ubmF2LWp1c3RpZmllZCAubmF2LWl0ZW0sLm5hdi1qdXN0aWZpZWQ+Lm5hdi1saW5re2ZsZXgtYmFzaXM6MDtmbGV4LWdyb3c6MTt0ZXh0LWFsaWduOmNlbnRlcn0ubmF2LWZpbGwgLm5hdi1pdGVtIC5uYXYtbGluaywubmF2LWp1c3RpZmllZCAubmF2LWl0ZW0gLm5hdi1saW5re3dpZHRoOjEwMCV9LnRhYi1jb250ZW50Pi50YWItcGFuZXtkaXNwbGF5Om5vbmV9LnRhYi1jb250ZW50Pi5hY3RpdmV7ZGlzcGxheTpibG9ja30ubmF2YmFyey0tYnMtbmF2YmFyLXBhZGRpbmcteDowOy0tYnMtbmF2YmFyLXBhZGRpbmcteTowLjVyZW07LS1icy1uYXZiYXItY29sb3I6cmdiYSh2YXIoLS1icy1lbXBoYXNpcy1jb2xvci1yZ2IpLCAwLjY1KTstLWJzLW5hdmJhci1ob3Zlci1jb2xvcjpyZ2JhKHZhcigtLWJzLWVtcGhhc2lzLWNvbG9yLXJnYiksIDAuOCk7LS1icy1uYXZiYXItZGlzYWJsZWQtY29sb3I6cmdiYSh2YXIoLS1icy1lbXBoYXNpcy1jb2xvci1yZ2IpLCAwLjMpOy0tYnMtbmF2YmFyLWFjdGl2ZS1jb2xvcjpyZ2JhKHZhcigtLWJzLWVtcGhhc2lzLWNvbG9yLXJnYiksIDEpOy0tYnMtbmF2YmFyLWJyYW5kLXBhZGRpbmcteTowLjMxMjVyZW07LS1icy1uYXZiYXItYnJhbmQtbWFyZ2luLWVuZDoxcmVtOy0tYnMtbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZToxLjI1cmVtOy0tYnMtbmF2YmFyLWJyYW5kLWNvbG9yOnJnYmEodmFyKC0tYnMtZW1waGFzaXMtY29sb3ItcmdiKSwgMSk7LS1icy1uYXZiYXItYnJhbmQtaG92ZXItY29sb3I6cmdiYSh2YXIoLS1icy1lbXBoYXNpcy1jb2xvci1yZ2IpLCAxKTstLWJzLW5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6MC41cmVtOy0tYnMtbmF2YmFyLXRvZ2dsZXItcGFkZGluZy15OjAuMjVyZW07LS1icy1uYXZiYXItdG9nZ2xlci1wYWRkaW5nLXg6MC43NXJlbTstLWJzLW5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZToxLjI1cmVtOy0tYnMtbmF2YmFyLXRvZ2dsZXItaWNvbi1iZzp1cmwoImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzAgMzAnJTNlJTNjcGF0aCBzdHJva2U9J3JnYmElMjgzMywgMzcsIDQxLCAwLjc1JTI5JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvJTNlJTNjL3N2ZyUzZSIpOy0tYnMtbmF2YmFyLXRvZ2dsZXItYm9yZGVyLWNvbG9yOnJnYmEodmFyKC0tYnMtZW1waGFzaXMtY29sb3ItcmdiKSwgMC4xNSk7LS1icy1uYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMpOy0tYnMtbmF2YmFyLXRvZ2dsZXItZm9jdXMtd2lkdGg6MC4yNXJlbTstLWJzLW5hdmJhci10b2dnbGVyLXRyYW5zaXRpb246Ym94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6dmFyKC0tYnMtbmF2YmFyLXBhZGRpbmcteSkgdmFyKC0tYnMtbmF2YmFyLXBhZGRpbmcteCl9Lm5hdmJhcj4uY29udGFpbmVyLC5uYXZiYXI+LmNvbnRhaW5lci1mbHVpZCwubmF2YmFyPi5jb250YWluZXItbGcsLm5hdmJhcj4uY29udGFpbmVyLW1kLC5uYXZiYXI+LmNvbnRhaW5lci1zbSwubmF2YmFyPi5jb250YWluZXIteGwsLm5hdmJhcj4uY29udGFpbmVyLXh4bHtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOmluaGVyaXQ7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5uYXZiYXItYnJhbmR7cGFkZGluZy10b3A6dmFyKC0tYnMtbmF2YmFyLWJyYW5kLXBhZGRpbmcteSk7cGFkZGluZy1ib3R0b206dmFyKC0tYnMtbmF2YmFyLWJyYW5kLXBhZGRpbmcteSk7bWFyZ2luLXJpZ2h0OnZhcigtLWJzLW5hdmJhci1icmFuZC1tYXJnaW4tZW5kKTtmb250LXNpemU6dmFyKC0tYnMtbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZSk7Y29sb3I6dmFyKC0tYnMtbmF2YmFyLWJyYW5kLWNvbG9yKTt0ZXh0LWRlY29yYXRpb246bm9uZTt3aGl0ZS1zcGFjZTpub3dyYXB9Lm5hdmJhci1icmFuZDpmb2N1cywubmF2YmFyLWJyYW5kOmhvdmVye2NvbG9yOnZhcigtLWJzLW5hdmJhci1icmFuZC1ob3Zlci1jb2xvcil9Lm5hdmJhci1uYXZ7LS1icy1uYXYtbGluay1wYWRkaW5nLXg6MDstLWJzLW5hdi1saW5rLXBhZGRpbmcteTowLjVyZW07LS1icy1uYXYtbGluay1mb250LXdlaWdodDogOy0tYnMtbmF2LWxpbmstY29sb3I6dmFyKC0tYnMtbmF2YmFyLWNvbG9yKTstLWJzLW5hdi1saW5rLWhvdmVyLWNvbG9yOnZhcigtLWJzLW5hdmJhci1ob3Zlci1jb2xvcik7LS1icy1uYXYtbGluay1kaXNhYmxlZC1jb2xvcjp2YXIoLS1icy1uYXZiYXItZGlzYWJsZWQtY29sb3IpO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47cGFkZGluZy1sZWZ0OjA7bWFyZ2luLWJvdHRvbTowO2xpc3Qtc3R5bGU6bm9uZX0ubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlLC5uYXZiYXItbmF2IC5uYXYtbGluay5zaG93e2NvbG9yOnZhcigtLWJzLW5hdmJhci1hY3RpdmUtY29sb3IpfS5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51e3Bvc2l0aW9uOnN0YXRpY30ubmF2YmFyLXRleHR7cGFkZGluZy10b3A6LjVyZW07cGFkZGluZy1ib3R0b206LjVyZW07Y29sb3I6dmFyKC0tYnMtbmF2YmFyLWNvbG9yKX0ubmF2YmFyLXRleHQgYSwubmF2YmFyLXRleHQgYTpmb2N1cywubmF2YmFyLXRleHQgYTpob3Zlcntjb2xvcjp2YXIoLS1icy1uYXZiYXItYWN0aXZlLWNvbG9yKX0ubmF2YmFyLWNvbGxhcHNle2ZsZXgtYmFzaXM6MTAwJTtmbGV4LWdyb3c6MTthbGlnbi1pdGVtczpjZW50ZXJ9Lm5hdmJhci10b2dnbGVye3BhZGRpbmc6dmFyKC0tYnMtbmF2YmFyLXRvZ2dsZXItcGFkZGluZy15KSB2YXIoLS1icy1uYXZiYXItdG9nZ2xlci1wYWRkaW5nLXgpO2ZvbnQtc2l6ZTp2YXIoLS1icy1uYXZiYXItdG9nZ2xlci1mb250LXNpemUpO2xpbmUtaGVpZ2h0OjE7Y29sb3I6dmFyKC0tYnMtbmF2YmFyLWNvbG9yKTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjp2YXIoLS1icy1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLW5hdmJhci10b2dnbGVyLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1icy1uYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzKTt0cmFuc2l0aW9uOnZhcigtLWJzLW5hdmJhci10b2dnbGVyLXRyYW5zaXRpb24pfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5uYXZiYXItdG9nZ2xlcnt0cmFuc2l0aW9uOm5vbmV9fS5uYXZiYXItdG9nZ2xlcjpob3Zlcnt0ZXh0LWRlY29yYXRpb246bm9uZX0ubmF2YmFyLXRvZ2dsZXI6Zm9jdXN7dGV4dC1kZWNvcmF0aW9uOm5vbmU7b3V0bGluZTowO2JveC1zaGFkb3c6MCAwIDAgdmFyKC0tYnMtbmF2YmFyLXRvZ2dsZXItZm9jdXMtd2lkdGgpfS5uYXZiYXItdG9nZ2xlci1pY29ue2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEuNWVtO2hlaWdodDoxLjVlbTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7YmFja2dyb3VuZC1pbWFnZTp2YXIoLS1icy1uYXZiYXItdG9nZ2xlci1pY29uLWJnKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7YmFja2dyb3VuZC1zaXplOjEwMCV9Lm5hdmJhci1uYXYtc2Nyb2xse21heC1oZWlnaHQ6dmFyKC0tYnMtc2Nyb2xsLWhlaWdodCw3NXZoKTtvdmVyZmxvdy15OmF1dG99QG1lZGlhIChtaW4td2lkdGg6NTc2cHgpey5uYXZiYXItZXhwYW5kLXNte2ZsZXgtd3JhcDpub3dyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Lm5hdmJhci1leHBhbmQtc20gLm5hdmJhci1uYXZ7ZmxleC1kaXJlY3Rpb246cm93fS5uYXZiYXItZXhwYW5kLXNtIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51e3Bvc2l0aW9uOmFic29sdXRlfS5uYXZiYXItZXhwYW5kLXNtIC5uYXZiYXItbmF2IC5uYXYtbGlua3twYWRkaW5nLXJpZ2h0OnZhcigtLWJzLW5hdmJhci1uYXYtbGluay1wYWRkaW5nLXgpO3BhZGRpbmctbGVmdDp2YXIoLS1icy1uYXZiYXItbmF2LWxpbmstcGFkZGluZy14KX0ubmF2YmFyLWV4cGFuZC1zbSAubmF2YmFyLW5hdi1zY3JvbGx7b3ZlcmZsb3c6dmlzaWJsZX0ubmF2YmFyLWV4cGFuZC1zbSAubmF2YmFyLWNvbGxhcHNle2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnQ7ZmxleC1iYXNpczphdXRvfS5uYXZiYXItZXhwYW5kLXNtIC5uYXZiYXItdG9nZ2xlcntkaXNwbGF5Om5vbmV9Lm5hdmJhci1leHBhbmQtc20gLm9mZmNhbnZhc3twb3NpdGlvbjpzdGF0aWM7ei1pbmRleDphdXRvO2ZsZXgtZ3JvdzoxO3dpZHRoOmF1dG8haW1wb3J0YW50O2hlaWdodDphdXRvIWltcG9ydGFudDt2aXNpYmlsaXR5OnZpc2libGUhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50O2JvcmRlcjowIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpub25lfS5uYXZiYXItZXhwYW5kLXNtIC5vZmZjYW52YXMgLm9mZmNhbnZhcy1oZWFkZXJ7ZGlzcGxheTpub25lfS5uYXZiYXItZXhwYW5kLXNtIC5vZmZjYW52YXMgLm9mZmNhbnZhcy1ib2R5e2Rpc3BsYXk6ZmxleDtmbGV4LWdyb3c6MDtwYWRkaW5nOjA7b3ZlcmZsb3cteTp2aXNpYmxlfX1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7Lm5hdmJhci1leHBhbmQtbWR7ZmxleC13cmFwOm5vd3JhcDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0ubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLW5hdntmbGV4LWRpcmVjdGlvbjpyb3d9Lm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnV7cG9zaXRpb246YWJzb2x1dGV9Lm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1uYXYgLm5hdi1saW5re3BhZGRpbmctcmlnaHQ6dmFyKC0tYnMtbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteCk7cGFkZGluZy1sZWZ0OnZhcigtLWJzLW5hdmJhci1uYXYtbGluay1wYWRkaW5nLXgpfS5uYXZiYXItZXhwYW5kLW1kIC5uYXZiYXItbmF2LXNjcm9sbHtvdmVyZmxvdzp2aXNpYmxlfS5uYXZiYXItZXhwYW5kLW1kIC5uYXZiYXItY29sbGFwc2V7ZGlzcGxheTpmbGV4IWltcG9ydGFudDtmbGV4LWJhc2lzOmF1dG99Lm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci10b2dnbGVye2Rpc3BsYXk6bm9uZX0ubmF2YmFyLWV4cGFuZC1tZCAub2ZmY2FudmFze3Bvc2l0aW9uOnN0YXRpYzt6LWluZGV4OmF1dG87ZmxleC1ncm93OjE7d2lkdGg6YXV0byFpbXBvcnRhbnQ7aGVpZ2h0OmF1dG8haW1wb3J0YW50O3Zpc2liaWxpdHk6dmlzaWJsZSFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7Ym9yZGVyOjAhaW1wb3J0YW50O3RyYW5zZm9ybTpub25lIWltcG9ydGFudDt0cmFuc2l0aW9uOm5vbmV9Lm5hdmJhci1leHBhbmQtbWQgLm9mZmNhbnZhcyAub2ZmY2FudmFzLWhlYWRlcntkaXNwbGF5Om5vbmV9Lm5hdmJhci1leHBhbmQtbWQgLm9mZmNhbnZhcyAub2ZmY2FudmFzLWJvZHl7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzowO3BhZGRpbmc6MDtvdmVyZmxvdy15OnZpc2libGV9fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsubmF2YmFyLWV4cGFuZC1sZ3tmbGV4LXdyYXA6bm93cmFwO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2e2ZsZXgtZGlyZWN0aW9uOnJvd30ubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudXtwb3NpdGlvbjphYnNvbHV0ZX0ubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAubmF2LWxpbmt7cGFkZGluZy1yaWdodDp2YXIoLS1icy1uYXZiYXItbmF2LWxpbmstcGFkZGluZy14KTtwYWRkaW5nLWxlZnQ6dmFyKC0tYnMtbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteCl9Lm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYtc2Nyb2xse292ZXJmbG93OnZpc2libGV9Lm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1jb2xsYXBzZXtkaXNwbGF5OmZsZXghaW1wb3J0YW50O2ZsZXgtYmFzaXM6YXV0b30ubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLXRvZ2dsZXJ7ZGlzcGxheTpub25lfS5uYXZiYXItZXhwYW5kLWxnIC5vZmZjYW52YXN7cG9zaXRpb246c3RhdGljO3otaW5kZXg6YXV0bztmbGV4LWdyb3c6MTt3aWR0aDphdXRvIWltcG9ydGFudDtoZWlnaHQ6YXV0byFpbXBvcnRhbnQ7dmlzaWJpbGl0eTp2aXNpYmxlIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudDtib3JkZXI6MCFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUhaW1wb3J0YW50O3RyYW5zaXRpb246bm9uZX0ubmF2YmFyLWV4cGFuZC1sZyAub2ZmY2FudmFzIC5vZmZjYW52YXMtaGVhZGVye2Rpc3BsYXk6bm9uZX0ubmF2YmFyLWV4cGFuZC1sZyAub2ZmY2FudmFzIC5vZmZjYW52YXMtYm9keXtkaXNwbGF5OmZsZXg7ZmxleC1ncm93OjA7cGFkZGluZzowO292ZXJmbG93LXk6dmlzaWJsZX19QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsubmF2YmFyLWV4cGFuZC14bHtmbGV4LXdyYXA6bm93cmFwO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5uYXZiYXItZXhwYW5kLXhsIC5uYXZiYXItbmF2e2ZsZXgtZGlyZWN0aW9uOnJvd30ubmF2YmFyLWV4cGFuZC14bCAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudXtwb3NpdGlvbjphYnNvbHV0ZX0ubmF2YmFyLWV4cGFuZC14bCAubmF2YmFyLW5hdiAubmF2LWxpbmt7cGFkZGluZy1yaWdodDp2YXIoLS1icy1uYXZiYXItbmF2LWxpbmstcGFkZGluZy14KTtwYWRkaW5nLWxlZnQ6dmFyKC0tYnMtbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteCl9Lm5hdmJhci1leHBhbmQteGwgLm5hdmJhci1uYXYtc2Nyb2xse292ZXJmbG93OnZpc2libGV9Lm5hdmJhci1leHBhbmQteGwgLm5hdmJhci1jb2xsYXBzZXtkaXNwbGF5OmZsZXghaW1wb3J0YW50O2ZsZXgtYmFzaXM6YXV0b30ubmF2YmFyLWV4cGFuZC14bCAubmF2YmFyLXRvZ2dsZXJ7ZGlzcGxheTpub25lfS5uYXZiYXItZXhwYW5kLXhsIC5vZmZjYW52YXN7cG9zaXRpb246c3RhdGljO3otaW5kZXg6YXV0bztmbGV4LWdyb3c6MTt3aWR0aDphdXRvIWltcG9ydGFudDtoZWlnaHQ6YXV0byFpbXBvcnRhbnQ7dmlzaWJpbGl0eTp2aXNpYmxlIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudDtib3JkZXI6MCFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUhaW1wb3J0YW50O3RyYW5zaXRpb246bm9uZX0ubmF2YmFyLWV4cGFuZC14bCAub2ZmY2FudmFzIC5vZmZjYW52YXMtaGVhZGVye2Rpc3BsYXk6bm9uZX0ubmF2YmFyLWV4cGFuZC14bCAub2ZmY2FudmFzIC5vZmZjYW52YXMtYm9keXtkaXNwbGF5OmZsZXg7ZmxleC1ncm93OjA7cGFkZGluZzowO292ZXJmbG93LXk6dmlzaWJsZX19QG1lZGlhIChtaW4td2lkdGg6MTQwMHB4KXsubmF2YmFyLWV4cGFuZC14eGx7ZmxleC13cmFwOm5vd3JhcDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0ubmF2YmFyLWV4cGFuZC14eGwgLm5hdmJhci1uYXZ7ZmxleC1kaXJlY3Rpb246cm93fS5uYXZiYXItZXhwYW5kLXh4bCAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudXtwb3NpdGlvbjphYnNvbHV0ZX0ubmF2YmFyLWV4cGFuZC14eGwgLm5hdmJhci1uYXYgLm5hdi1saW5re3BhZGRpbmctcmlnaHQ6dmFyKC0tYnMtbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteCk7cGFkZGluZy1sZWZ0OnZhcigtLWJzLW5hdmJhci1uYXYtbGluay1wYWRkaW5nLXgpfS5uYXZiYXItZXhwYW5kLXh4bCAubmF2YmFyLW5hdi1zY3JvbGx7b3ZlcmZsb3c6dmlzaWJsZX0ubmF2YmFyLWV4cGFuZC14eGwgLm5hdmJhci1jb2xsYXBzZXtkaXNwbGF5OmZsZXghaW1wb3J0YW50O2ZsZXgtYmFzaXM6YXV0b30ubmF2YmFyLWV4cGFuZC14eGwgLm5hdmJhci10b2dnbGVye2Rpc3BsYXk6bm9uZX0ubmF2YmFyLWV4cGFuZC14eGwgLm9mZmNhbnZhc3twb3NpdGlvbjpzdGF0aWM7ei1pbmRleDphdXRvO2ZsZXgtZ3JvdzoxO3dpZHRoOmF1dG8haW1wb3J0YW50O2hlaWdodDphdXRvIWltcG9ydGFudDt2aXNpYmlsaXR5OnZpc2libGUhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50O2JvcmRlcjowIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpub25lfS5uYXZiYXItZXhwYW5kLXh4bCAub2ZmY2FudmFzIC5vZmZjYW52YXMtaGVhZGVye2Rpc3BsYXk6bm9uZX0ubmF2YmFyLWV4cGFuZC14eGwgLm9mZmNhbnZhcyAub2ZmY2FudmFzLWJvZHl7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzowO3BhZGRpbmc6MDtvdmVyZmxvdy15OnZpc2libGV9fS5uYXZiYXItZXhwYW5ke2ZsZXgtd3JhcDpub3dyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Lm5hdmJhci1leHBhbmQgLm5hdmJhci1uYXZ7ZmxleC1kaXJlY3Rpb246cm93fS5uYXZiYXItZXhwYW5kIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51e3Bvc2l0aW9uOmFic29sdXRlfS5uYXZiYXItZXhwYW5kIC5uYXZiYXItbmF2IC5uYXYtbGlua3twYWRkaW5nLXJpZ2h0OnZhcigtLWJzLW5hdmJhci1uYXYtbGluay1wYWRkaW5nLXgpO3BhZGRpbmctbGVmdDp2YXIoLS1icy1uYXZiYXItbmF2LWxpbmstcGFkZGluZy14KX0ubmF2YmFyLWV4cGFuZCAubmF2YmFyLW5hdi1zY3JvbGx7b3ZlcmZsb3c6dmlzaWJsZX0ubmF2YmFyLWV4cGFuZCAubmF2YmFyLWNvbGxhcHNle2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnQ7ZmxleC1iYXNpczphdXRvfS5uYXZiYXItZXhwYW5kIC5uYXZiYXItdG9nZ2xlcntkaXNwbGF5Om5vbmV9Lm5hdmJhci1leHBhbmQgLm9mZmNhbnZhc3twb3NpdGlvbjpzdGF0aWM7ei1pbmRleDphdXRvO2ZsZXgtZ3JvdzoxO3dpZHRoOmF1dG8haW1wb3J0YW50O2hlaWdodDphdXRvIWltcG9ydGFudDt2aXNpYmlsaXR5OnZpc2libGUhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50O2JvcmRlcjowIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpub25lfS5uYXZiYXItZXhwYW5kIC5vZmZjYW52YXMgLm9mZmNhbnZhcy1oZWFkZXJ7ZGlzcGxheTpub25lfS5uYXZiYXItZXhwYW5kIC5vZmZjYW52YXMgLm9mZmNhbnZhcy1ib2R5e2Rpc3BsYXk6ZmxleDtmbGV4LWdyb3c6MDtwYWRkaW5nOjA7b3ZlcmZsb3cteTp2aXNpYmxlfS5uYXZiYXItZGFyaywubmF2YmFyW2RhdGEtYnMtdGhlbWU9ZGFya117LS1icy1uYXZiYXItY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KTstLWJzLW5hdmJhci1ob3Zlci1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpOy0tYnMtbmF2YmFyLWRpc2FibGVkLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7LS1icy1uYXZiYXItYWN0aXZlLWNvbG9yOiNmZmY7LS1icy1uYXZiYXItYnJhbmQtY29sb3I6I2ZmZjstLWJzLW5hdmJhci1icmFuZC1ob3Zlci1jb2xvcjojZmZmOy0tYnMtbmF2YmFyLXRvZ2dsZXItYm9yZGVyLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTstLWJzLW5hdmJhci10b2dnbGVyLWljb24tYmc6dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMwIDMwJyUzZSUzY3BhdGggc3Ryb2tlPSdyZ2JhJTI4MjU1LCAyNTUsIDI1NSwgMC41NSUyOScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzZSUzYy9zdmclM2UiKX1bZGF0YS1icy10aGVtZT1kYXJrXSAubmF2YmFyLXRvZ2dsZXItaWNvbnstLWJzLW5hdmJhci10b2dnbGVyLWljb24tYmc6dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMwIDMwJyUzZSUzY3BhdGggc3Ryb2tlPSdyZ2JhJTI4MjU1LCAyNTUsIDI1NSwgMC41NSUyOScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzZSUzYy9zdmclM2UiKX0uY2FyZHstLWJzLWNhcmQtc3BhY2VyLXk6MXJlbTstLWJzLWNhcmQtc3BhY2VyLXg6MXJlbTstLWJzLWNhcmQtdGl0bGUtc3BhY2VyLXk6MC41cmVtOy0tYnMtY2FyZC10aXRsZS1jb2xvcjogOy0tYnMtY2FyZC1zdWJ0aXRsZS1jb2xvcjogOy0tYnMtY2FyZC1ib3JkZXItd2lkdGg6dmFyKC0tYnMtYm9yZGVyLXdpZHRoKTstLWJzLWNhcmQtYm9yZGVyLWNvbG9yOnZhcigtLWJzLWJvcmRlci1jb2xvci10cmFuc2x1Y2VudCk7LS1icy1jYXJkLWJvcmRlci1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cyk7LS1icy1jYXJkLWJveC1zaGFkb3c6IDstLWJzLWNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czpjYWxjKHZhcigtLWJzLWJvcmRlci1yYWRpdXMpIC0gKHZhcigtLWJzLWJvcmRlci13aWR0aCkpKTstLWJzLWNhcmQtY2FwLXBhZGRpbmcteTowLjVyZW07LS1icy1jYXJkLWNhcC1wYWRkaW5nLXg6MXJlbTstLWJzLWNhcmQtY2FwLWJnOnJnYmEodmFyKC0tYnMtYm9keS1jb2xvci1yZ2IpLCAwLjAzKTstLWJzLWNhcmQtY2FwLWNvbG9yOiA7LS1icy1jYXJkLWhlaWdodDogOy0tYnMtY2FyZC1jb2xvcjogOy0tYnMtY2FyZC1iZzp2YXIoLS1icy1ib2R5LWJnKTstLWJzLWNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzoxcmVtOy0tYnMtY2FyZC1ncm91cC1tYXJnaW46MC43NXJlbTtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21pbi13aWR0aDowO2hlaWdodDp2YXIoLS1icy1jYXJkLWhlaWdodCk7Y29sb3I6dmFyKC0tYnMtYm9keS1jb2xvcik7d29yZC13cmFwOmJyZWFrLXdvcmQ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1jYXJkLWJnKTtiYWNrZ3JvdW5kLWNsaXA6Ym9yZGVyLWJveDtib3JkZXI6dmFyKC0tYnMtY2FyZC1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLWNhcmQtYm9yZGVyLWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLWJzLWNhcmQtYm9yZGVyLXJhZGl1cyl9LmNhcmQ+aHJ7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWxlZnQ6MH0uY2FyZD4ubGlzdC1ncm91cHtib3JkZXItdG9wOmluaGVyaXQ7Ym9yZGVyLWJvdHRvbTppbmhlcml0fS5jYXJkPi5saXN0LWdyb3VwOmZpcnN0LWNoaWxke2JvcmRlci10b3Atd2lkdGg6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJzLWNhcmQtaW5uZXItYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tYnMtY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzKX0uY2FyZD4ubGlzdC1ncm91cDpsYXN0LWNoaWxke2JvcmRlci1ib3R0b20td2lkdGg6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1jYXJkLWlubmVyLWJvcmRlci1yYWRpdXMpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tYnMtY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzKX0uY2FyZD4uY2FyZC1oZWFkZXIrLmxpc3QtZ3JvdXAsLmNhcmQ+Lmxpc3QtZ3JvdXArLmNhcmQtZm9vdGVye2JvcmRlci10b3A6MH0uY2FyZC1ib2R5e2ZsZXg6MSAxIGF1dG87cGFkZGluZzp2YXIoLS1icy1jYXJkLXNwYWNlci15KSB2YXIoLS1icy1jYXJkLXNwYWNlci14KTtjb2xvcjp2YXIoLS1icy1jYXJkLWNvbG9yKX0uY2FyZC10aXRsZXttYXJnaW4tYm90dG9tOnZhcigtLWJzLWNhcmQtdGl0bGUtc3BhY2VyLXkpO2NvbG9yOnZhcigtLWJzLWNhcmQtdGl0bGUtY29sb3IpfS5jYXJkLXN1YnRpdGxle21hcmdpbi10b3A6Y2FsYygtLjUgKiB2YXIoLS1icy1jYXJkLXRpdGxlLXNwYWNlci15KSk7bWFyZ2luLWJvdHRvbTowO2NvbG9yOnZhcigtLWJzLWNhcmQtc3VidGl0bGUtY29sb3IpfS5jYXJkLXRleHQ6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjB9LmNhcmQtbGluaysuY2FyZC1saW5re21hcmdpbi1sZWZ0OnZhcigtLWJzLWNhcmQtc3BhY2VyLXgpfS5jYXJkLWhlYWRlcntwYWRkaW5nOnZhcigtLWJzLWNhcmQtY2FwLXBhZGRpbmcteSkgdmFyKC0tYnMtY2FyZC1jYXAtcGFkZGluZy14KTttYXJnaW4tYm90dG9tOjA7Y29sb3I6dmFyKC0tYnMtY2FyZC1jYXAtY29sb3IpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtY2FyZC1jYXAtYmcpO2JvcmRlci1ib3R0b206dmFyKC0tYnMtY2FyZC1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLWNhcmQtYm9yZGVyLWNvbG9yKX0uY2FyZC1oZWFkZXI6Zmlyc3QtY2hpbGR7Ym9yZGVyLXJhZGl1czp2YXIoLS1icy1jYXJkLWlubmVyLWJvcmRlci1yYWRpdXMpIHZhcigtLWJzLWNhcmQtaW5uZXItYm9yZGVyLXJhZGl1cykgMCAwfS5jYXJkLWZvb3RlcntwYWRkaW5nOnZhcigtLWJzLWNhcmQtY2FwLXBhZGRpbmcteSkgdmFyKC0tYnMtY2FyZC1jYXAtcGFkZGluZy14KTtjb2xvcjp2YXIoLS1icy1jYXJkLWNhcC1jb2xvcik7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1jYXJkLWNhcC1iZyk7Ym9yZGVyLXRvcDp2YXIoLS1icy1jYXJkLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtY2FyZC1ib3JkZXItY29sb3IpfS5jYXJkLWZvb3RlcjpsYXN0LWNoaWxke2JvcmRlci1yYWRpdXM6MCAwIHZhcigtLWJzLWNhcmQtaW5uZXItYm9yZGVyLXJhZGl1cykgdmFyKC0tYnMtY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzKX0uY2FyZC1oZWFkZXItdGFic3ttYXJnaW4tcmlnaHQ6Y2FsYygtLjUgKiB2YXIoLS1icy1jYXJkLWNhcC1wYWRkaW5nLXgpKTttYXJnaW4tYm90dG9tOmNhbGMoLTEgKiB2YXIoLS1icy1jYXJkLWNhcC1wYWRkaW5nLXkpKTttYXJnaW4tbGVmdDpjYWxjKC0uNSAqIHZhcigtLWJzLWNhcmQtY2FwLXBhZGRpbmcteCkpO2JvcmRlci1ib3R0b206MH0uY2FyZC1oZWFkZXItdGFicyAubmF2LWxpbmsuYWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtY2FyZC1iZyk7Ym9yZGVyLWJvdHRvbS1jb2xvcjp2YXIoLS1icy1jYXJkLWJnKX0uY2FyZC1oZWFkZXItcGlsbHN7bWFyZ2luLXJpZ2h0OmNhbGMoLS41ICogdmFyKC0tYnMtY2FyZC1jYXAtcGFkZGluZy14KSk7bWFyZ2luLWxlZnQ6Y2FsYygtLjUgKiB2YXIoLS1icy1jYXJkLWNhcC1wYWRkaW5nLXgpKX0uY2FyZC1pbWctb3ZlcmxheXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtwYWRkaW5nOnZhcigtLWJzLWNhcmQtaW1nLW92ZXJsYXktcGFkZGluZyk7Ym9yZGVyLXJhZGl1czp2YXIoLS1icy1jYXJkLWlubmVyLWJvcmRlci1yYWRpdXMpfS5jYXJkLWltZywuY2FyZC1pbWctYm90dG9tLC5jYXJkLWltZy10b3B7d2lkdGg6MTAwJX0uY2FyZC1pbWcsLmNhcmQtaW1nLXRvcHtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJzLWNhcmQtaW5uZXItYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tYnMtY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzKX0uY2FyZC1pbWcsLmNhcmQtaW1nLWJvdHRvbXtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1jYXJkLWlubmVyLWJvcmRlci1yYWRpdXMpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tYnMtY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzKX0uY2FyZC1ncm91cD4uY2FyZHttYXJnaW4tYm90dG9tOnZhcigtLWJzLWNhcmQtZ3JvdXAtbWFyZ2luKX1AbWVkaWEgKG1pbi13aWR0aDo1NzZweCl7LmNhcmQtZ3JvdXB7ZGlzcGxheTpmbGV4O2ZsZXgtZmxvdzpyb3cgd3JhcH0uY2FyZC1ncm91cD4uY2FyZHtmbGV4OjEgMCAwJTttYXJnaW4tYm90dG9tOjB9LmNhcmQtZ3JvdXA+LmNhcmQrLmNhcmR7bWFyZ2luLWxlZnQ6MDtib3JkZXItbGVmdDowfS5jYXJkLWdyb3VwPi5jYXJkOm5vdCg6bGFzdC1jaGlsZCl7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5jYXJkLWdyb3VwPi5jYXJkOm5vdCg6bGFzdC1jaGlsZCkgLmNhcmQtaGVhZGVyLC5jYXJkLWdyb3VwPi5jYXJkOm5vdCg6bGFzdC1jaGlsZCkgLmNhcmQtaW1nLXRvcHtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowfS5jYXJkLWdyb3VwPi5jYXJkOm5vdCg6bGFzdC1jaGlsZCkgLmNhcmQtZm9vdGVyLC5jYXJkLWdyb3VwPi5jYXJkOm5vdCg6bGFzdC1jaGlsZCkgLmNhcmQtaW1nLWJvdHRvbXtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5jYXJkLWdyb3VwPi5jYXJkOm5vdCg6Zmlyc3QtY2hpbGQpe2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjB9LmNhcmQtZ3JvdXA+LmNhcmQ6bm90KDpmaXJzdC1jaGlsZCkgLmNhcmQtaGVhZGVyLC5jYXJkLWdyb3VwPi5jYXJkOm5vdCg6Zmlyc3QtY2hpbGQpIC5jYXJkLWltZy10b3B7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowfS5jYXJkLWdyb3VwPi5jYXJkOm5vdCg6Zmlyc3QtY2hpbGQpIC5jYXJkLWZvb3RlciwuY2FyZC1ncm91cD4uY2FyZDpub3QoOmZpcnN0LWNoaWxkKSAuY2FyZC1pbWctYm90dG9te2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MH19LmFjY29yZGlvbnstLWJzLWFjY29yZGlvbi1jb2xvcjp2YXIoLS1icy1ib2R5LWNvbG9yKTstLWJzLWFjY29yZGlvbi1iZzp2YXIoLS1icy1ib2R5LWJnKTstLWJzLWFjY29yZGlvbi10cmFuc2l0aW9uOmNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsYm9yZGVyLXJhZGl1cyAwLjE1cyBlYXNlOy0tYnMtYWNjb3JkaW9uLWJvcmRlci1jb2xvcjp2YXIoLS1icy1ib3JkZXItY29sb3IpOy0tYnMtYWNjb3JkaW9uLWJvcmRlci13aWR0aDp2YXIoLS1icy1ib3JkZXItd2lkdGgpOy0tYnMtYWNjb3JkaW9uLWJvcmRlci1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cyk7LS1icy1hY2NvcmRpb24taW5uZXItYm9yZGVyLXJhZGl1czpjYWxjKHZhcigtLWJzLWJvcmRlci1yYWRpdXMpIC0gKHZhcigtLWJzLWJvcmRlci13aWR0aCkpKTstLWJzLWFjY29yZGlvbi1idG4tcGFkZGluZy14OjEuMjVyZW07LS1icy1hY2NvcmRpb24tYnRuLXBhZGRpbmcteToxcmVtOy0tYnMtYWNjb3JkaW9uLWJ0bi1jb2xvcjp2YXIoLS1icy1ib2R5LWNvbG9yKTstLWJzLWFjY29yZGlvbi1idG4tYmc6dmFyKC0tYnMtYWNjb3JkaW9uLWJnKTstLWJzLWFjY29yZGlvbi1idG4taWNvbjp1cmwoImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzMjEyNTI5JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnJTNlJTNjcGF0aCBkPSdNMiA1TDggMTFMMTQgNScvJTNlJTNjL3N2ZyUzZSIpOy0tYnMtYWNjb3JkaW9uLWJ0bi1pY29uLXdpZHRoOjEuMjVyZW07LS1icy1hY2NvcmRpb24tYnRuLWljb24tdHJhbnNmb3JtOnJvdGF0ZSgtMTgwZGVnKTstLWJzLWFjY29yZGlvbi1idG4taWNvbi10cmFuc2l0aW9uOnRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0Oy0tYnMtYWNjb3JkaW9uLWJ0bi1hY3RpdmUtaWNvbjp1cmwoImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzMDUyYzY1JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnJTNlJTNjcGF0aCBkPSdNMiA1TDggMTFMMTQgNScvJTNlJTNjL3N2ZyUzZSIpOy0tYnMtYWNjb3JkaW9uLWJ0bi1mb2N1cy1ib3gtc2hhZG93OjAgMCAwIDAuMjVyZW0gcmdiYSgxMywgMTEwLCAyNTMsIDAuMjUpOy0tYnMtYWNjb3JkaW9uLWJvZHktcGFkZGluZy14OjEuMjVyZW07LS1icy1hY2NvcmRpb24tYm9keS1wYWRkaW5nLXk6MXJlbTstLWJzLWFjY29yZGlvbi1hY3RpdmUtY29sb3I6dmFyKC0tYnMtcHJpbWFyeS10ZXh0LWVtcGhhc2lzKTstLWJzLWFjY29yZGlvbi1hY3RpdmUtYmc6dmFyKC0tYnMtcHJpbWFyeS1iZy1zdWJ0bGUpfS5hY2NvcmRpb24tYnV0dG9ue3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTAwJTtwYWRkaW5nOnZhcigtLWJzLWFjY29yZGlvbi1idG4tcGFkZGluZy15KSB2YXIoLS1icy1hY2NvcmRpb24tYnRuLXBhZGRpbmcteCk7Zm9udC1zaXplOjFyZW07Y29sb3I6dmFyKC0tYnMtYWNjb3JkaW9uLWJ0bi1jb2xvcik7dGV4dC1hbGlnbjpsZWZ0O2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtYWNjb3JkaW9uLWJ0bi1iZyk7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czowO292ZXJmbG93LWFuY2hvcjpub25lO3RyYW5zaXRpb246dmFyKC0tYnMtYWNjb3JkaW9uLXRyYW5zaXRpb24pfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5hY2NvcmRpb24tYnV0dG9ue3RyYW5zaXRpb246bm9uZX19LmFjY29yZGlvbi1idXR0b246bm90KC5jb2xsYXBzZWQpe2NvbG9yOnZhcigtLWJzLWFjY29yZGlvbi1hY3RpdmUtY29sb3IpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtYWNjb3JkaW9uLWFjdGl2ZS1iZyk7Ym94LXNoYWRvdzppbnNldCAwIGNhbGMoLTEgKiB2YXIoLS1icy1hY2NvcmRpb24tYm9yZGVyLXdpZHRoKSkgMCB2YXIoLS1icy1hY2NvcmRpb24tYm9yZGVyLWNvbG9yKX0uYWNjb3JkaW9uLWJ1dHRvbjpub3QoLmNvbGxhcHNlZCk6OmFmdGVye2JhY2tncm91bmQtaW1hZ2U6dmFyKC0tYnMtYWNjb3JkaW9uLWJ0bi1hY3RpdmUtaWNvbik7dHJhbnNmb3JtOnZhcigtLWJzLWFjY29yZGlvbi1idG4taWNvbi10cmFuc2Zvcm0pfS5hY2NvcmRpb24tYnV0dG9uOjphZnRlcntmbGV4LXNocmluazowO3dpZHRoOnZhcigtLWJzLWFjY29yZGlvbi1idG4taWNvbi13aWR0aCk7aGVpZ2h0OnZhcigtLWJzLWFjY29yZGlvbi1idG4taWNvbi13aWR0aCk7bWFyZ2luLWxlZnQ6YXV0bztjb250ZW50OiIiO2JhY2tncm91bmQtaW1hZ2U6dmFyKC0tYnMtYWNjb3JkaW9uLWJ0bi1pY29uKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOnZhcigtLWJzLWFjY29yZGlvbi1idG4taWNvbi13aWR0aCk7dHJhbnNpdGlvbjp2YXIoLS1icy1hY2NvcmRpb24tYnRuLWljb24tdHJhbnNpdGlvbil9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSl7LmFjY29yZGlvbi1idXR0b246OmFmdGVye3RyYW5zaXRpb246bm9uZX19LmFjY29yZGlvbi1idXR0b246aG92ZXJ7ei1pbmRleDoyfS5hY2NvcmRpb24tYnV0dG9uOmZvY3Vze3otaW5kZXg6MztvdXRsaW5lOjA7Ym94LXNoYWRvdzp2YXIoLS1icy1hY2NvcmRpb24tYnRuLWZvY3VzLWJveC1zaGFkb3cpfS5hY2NvcmRpb24taGVhZGVye21hcmdpbi1ib3R0b206MH0uYWNjb3JkaW9uLWl0ZW17Y29sb3I6dmFyKC0tYnMtYWNjb3JkaW9uLWNvbG9yKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLWFjY29yZGlvbi1iZyk7Ym9yZGVyOnZhcigtLWJzLWFjY29yZGlvbi1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLWFjY29yZGlvbi1ib3JkZXItY29sb3IpfS5hY2NvcmRpb24taXRlbTpmaXJzdC1vZi10eXBle2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tYnMtYWNjb3JkaW9uLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJzLWFjY29yZGlvbi1ib3JkZXItcmFkaXVzKX0uYWNjb3JkaW9uLWl0ZW06Zmlyc3Qtb2YtdHlwZT4uYWNjb3JkaW9uLWhlYWRlciAuYWNjb3JkaW9uLWJ1dHRvbntib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJzLWFjY29yZGlvbi1pbm5lci1ib3JkZXItcmFkaXVzKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1hY2NvcmRpb24taW5uZXItYm9yZGVyLXJhZGl1cyl9LmFjY29yZGlvbi1pdGVtOm5vdCg6Zmlyc3Qtb2YtdHlwZSl7Ym9yZGVyLXRvcDowfS5hY2NvcmRpb24taXRlbTpsYXN0LW9mLXR5cGV7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tYnMtYWNjb3JkaW9uLWJvcmRlci1yYWRpdXMpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tYnMtYWNjb3JkaW9uLWJvcmRlci1yYWRpdXMpfS5hY2NvcmRpb24taXRlbTpsYXN0LW9mLXR5cGU+LmFjY29yZGlvbi1oZWFkZXIgLmFjY29yZGlvbi1idXR0b24uY29sbGFwc2Vke2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWJzLWFjY29yZGlvbi1pbm5lci1ib3JkZXItcmFkaXVzKTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWJzLWFjY29yZGlvbi1pbm5lci1ib3JkZXItcmFkaXVzKX0uYWNjb3JkaW9uLWl0ZW06bGFzdC1vZi10eXBlPi5hY2NvcmRpb24tY29sbGFwc2V7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tYnMtYWNjb3JkaW9uLWJvcmRlci1yYWRpdXMpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tYnMtYWNjb3JkaW9uLWJvcmRlci1yYWRpdXMpfS5hY2NvcmRpb24tYm9keXtwYWRkaW5nOnZhcigtLWJzLWFjY29yZGlvbi1ib2R5LXBhZGRpbmcteSkgdmFyKC0tYnMtYWNjb3JkaW9uLWJvZHktcGFkZGluZy14KX0uYWNjb3JkaW9uLWZsdXNoPi5hY2NvcmRpb24taXRlbXtib3JkZXItcmlnaHQ6MDtib3JkZXItbGVmdDowO2JvcmRlci1yYWRpdXM6MH0uYWNjb3JkaW9uLWZsdXNoPi5hY2NvcmRpb24taXRlbTpmaXJzdC1jaGlsZHtib3JkZXItdG9wOjB9LmFjY29yZGlvbi1mbHVzaD4uYWNjb3JkaW9uLWl0ZW06bGFzdC1jaGlsZHtib3JkZXItYm90dG9tOjB9LmFjY29yZGlvbi1mbHVzaD4uYWNjb3JkaW9uLWl0ZW0+LmFjY29yZGlvbi1oZWFkZXIgLmFjY29yZGlvbi1idXR0b24sLmFjY29yZGlvbi1mbHVzaD4uYWNjb3JkaW9uLWl0ZW0+LmFjY29yZGlvbi1oZWFkZXIgLmFjY29yZGlvbi1idXR0b24uY29sbGFwc2Vke2JvcmRlci1yYWRpdXM6MH0uYWNjb3JkaW9uLWZsdXNoPi5hY2NvcmRpb24taXRlbT4uYWNjb3JkaW9uLWNvbGxhcHNle2JvcmRlci1yYWRpdXM6MH1bZGF0YS1icy10aGVtZT1kYXJrXSAuYWNjb3JkaW9uLWJ1dHRvbjo6YWZ0ZXJ7LS1icy1hY2NvcmRpb24tYnRuLWljb246dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPSclMjM2ZWE4ZmUnJTNlJTNjcGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xLjY0NiA0LjY0NmEuNS41IDAgMCAxIC43MDggMEw4IDEwLjI5M2w1LjY0Ni01LjY0N2EuNS41IDAgMCAxIC43MDguNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4IDBsLTYtNmEuNS41IDAgMCAxIDAtLjcwOHonLyUzZSUzYy9zdmclM2UiKTstLWJzLWFjY29yZGlvbi1idG4tYWN0aXZlLWljb246dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPSclMjM2ZWE4ZmUnJTNlJTNjcGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xLjY0NiA0LjY0NmEuNS41IDAgMCAxIC43MDggMEw4IDEwLjI5M2w1LjY0Ni01LjY0N2EuNS41IDAgMCAxIC43MDguNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4IDBsLTYtNmEuNS41IDAgMCAxIDAtLjcwOHonLyUzZSUzYy9zdmclM2UiKX0uYnJlYWRjcnVtYnstLWJzLWJyZWFkY3J1bWItcGFkZGluZy14OjA7LS1icy1icmVhZGNydW1iLXBhZGRpbmcteTowOy0tYnMtYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOjFyZW07LS1icy1icmVhZGNydW1iLWJnOiA7LS1icy1icmVhZGNydW1iLWJvcmRlci1yYWRpdXM6IDstLWJzLWJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjp2YXIoLS1icy1zZWNvbmRhcnktY29sb3IpOy0tYnMtYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmcteDowLjVyZW07LS1icy1icmVhZGNydW1iLWl0ZW0tYWN0aXZlLWNvbG9yOnZhcigtLWJzLXNlY29uZGFyeS1jb2xvcik7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO3BhZGRpbmc6dmFyKC0tYnMtYnJlYWRjcnVtYi1wYWRkaW5nLXkpIHZhcigtLWJzLWJyZWFkY3J1bWItcGFkZGluZy14KTttYXJnaW4tYm90dG9tOnZhcigtLWJzLWJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbSk7Zm9udC1zaXplOnZhcigtLWJzLWJyZWFkY3J1bWItZm9udC1zaXplKTtsaXN0LXN0eWxlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1icmVhZGNydW1iLWJnKTtib3JkZXItcmFkaXVzOnZhcigtLWJzLWJyZWFkY3J1bWItYm9yZGVyLXJhZGl1cyl9LmJyZWFkY3J1bWItaXRlbSsuYnJlYWRjcnVtYi1pdGVte3BhZGRpbmctbGVmdDp2YXIoLS1icy1icmVhZGNydW1iLWl0ZW0tcGFkZGluZy14KX0uYnJlYWRjcnVtYi1pdGVtKy5icmVhZGNydW1iLWl0ZW06OmJlZm9yZXtmbG9hdDpsZWZ0O3BhZGRpbmctcmlnaHQ6dmFyKC0tYnMtYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmcteCk7Y29sb3I6dmFyKC0tYnMtYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yKTtjb250ZW50OnZhcigtLWJzLWJyZWFkY3J1bWItZGl2aWRlciwgIi8iKX0uYnJlYWRjcnVtYi1pdGVtLmFjdGl2ZXtjb2xvcjp2YXIoLS1icy1icmVhZGNydW1iLWl0ZW0tYWN0aXZlLWNvbG9yKX0ucGFnaW5hdGlvbnstLWJzLXBhZ2luYXRpb24tcGFkZGluZy14OjAuNzVyZW07LS1icy1wYWdpbmF0aW9uLXBhZGRpbmcteTowLjM3NXJlbTstLWJzLXBhZ2luYXRpb24tZm9udC1zaXplOjFyZW07LS1icy1wYWdpbmF0aW9uLWNvbG9yOnZhcigtLWJzLWxpbmstY29sb3IpOy0tYnMtcGFnaW5hdGlvbi1iZzp2YXIoLS1icy1ib2R5LWJnKTstLWJzLXBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOnZhcigtLWJzLWJvcmRlci13aWR0aCk7LS1icy1wYWdpbmF0aW9uLWJvcmRlci1jb2xvcjp2YXIoLS1icy1ib3JkZXItY29sb3IpOy0tYnMtcGFnaW5hdGlvbi1ib3JkZXItcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMpOy0tYnMtcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjp2YXIoLS1icy1saW5rLWhvdmVyLWNvbG9yKTstLWJzLXBhZ2luYXRpb24taG92ZXItYmc6dmFyKC0tYnMtdGVydGlhcnktYmcpOy0tYnMtcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6dmFyKC0tYnMtYm9yZGVyLWNvbG9yKTstLWJzLXBhZ2luYXRpb24tZm9jdXMtY29sb3I6dmFyKC0tYnMtbGluay1ob3Zlci1jb2xvcik7LS1icy1wYWdpbmF0aW9uLWZvY3VzLWJnOnZhcigtLWJzLXNlY29uZGFyeS1iZyk7LS1icy1wYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6MCAwIDAgMC4yNXJlbSByZ2JhKDEzLCAxMTAsIDI1MywgMC4yNSk7LS1icy1wYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjojZmZmOy0tYnMtcGFnaW5hdGlvbi1hY3RpdmUtYmc6IzBkNmVmZDstLWJzLXBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjojMGQ2ZWZkOy0tYnMtcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjp2YXIoLS1icy1zZWNvbmRhcnktY29sb3IpOy0tYnMtcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzp2YXIoLS1icy1zZWNvbmRhcnktYmcpOy0tYnMtcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6dmFyKC0tYnMtYm9yZGVyLWNvbG9yKTtkaXNwbGF5OmZsZXg7cGFkZGluZy1sZWZ0OjA7bGlzdC1zdHlsZTpub25lfS5wYWdlLWxpbmt7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztwYWRkaW5nOnZhcigtLWJzLXBhZ2luYXRpb24tcGFkZGluZy15KSB2YXIoLS1icy1wYWdpbmF0aW9uLXBhZGRpbmcteCk7Zm9udC1zaXplOnZhcigtLWJzLXBhZ2luYXRpb24tZm9udC1zaXplKTtjb2xvcjp2YXIoLS1icy1wYWdpbmF0aW9uLWNvbG9yKTt0ZXh0LWRlY29yYXRpb246bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLXBhZ2luYXRpb24tYmcpO2JvcmRlcjp2YXIoLS1icy1wYWdpbmF0aW9uLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtcGFnaW5hdGlvbi1ib3JkZXItY29sb3IpO3RyYW5zaXRpb246Y29sb3IgLjE1cyBlYXNlLWluLW91dCxiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0fUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5wYWdlLWxpbmt7dHJhbnNpdGlvbjpub25lfX0ucGFnZS1saW5rOmhvdmVye3otaW5kZXg6Mjtjb2xvcjp2YXIoLS1icy1wYWdpbmF0aW9uLWhvdmVyLWNvbG9yKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLXBhZ2luYXRpb24taG92ZXItYmcpO2JvcmRlci1jb2xvcjp2YXIoLS1icy1wYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcil9LnBhZ2UtbGluazpmb2N1c3t6LWluZGV4OjM7Y29sb3I6dmFyKC0tYnMtcGFnaW5hdGlvbi1mb2N1cy1jb2xvcik7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1wYWdpbmF0aW9uLWZvY3VzLWJnKTtvdXRsaW5lOjA7Ym94LXNoYWRvdzp2YXIoLS1icy1wYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3cpfS5hY3RpdmU+LnBhZ2UtbGluaywucGFnZS1saW5rLmFjdGl2ZXt6LWluZGV4OjM7Y29sb3I6dmFyKC0tYnMtcGFnaW5hdGlvbi1hY3RpdmUtY29sb3IpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtcGFnaW5hdGlvbi1hY3RpdmUtYmcpO2JvcmRlci1jb2xvcjp2YXIoLS1icy1wYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3IpfS5kaXNhYmxlZD4ucGFnZS1saW5rLC5wYWdlLWxpbmsuZGlzYWJsZWR7Y29sb3I6dmFyKC0tYnMtcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcik7cG9pbnRlci1ldmVudHM6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLXBhZ2luYXRpb24tZGlzYWJsZWQtYmcpO2JvcmRlci1jb2xvcjp2YXIoLS1icy1wYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcil9LnBhZ2UtaXRlbTpub3QoOmZpcnN0LWNoaWxkKSAucGFnZS1saW5re21hcmdpbi1sZWZ0OmNhbGModmFyKC0tYnMtYm9yZGVyLXdpZHRoKSAqIC0xKX0ucGFnZS1pdGVtOmZpcnN0LWNoaWxkIC5wYWdlLWxpbmt7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1icy1wYWdpbmF0aW9uLWJvcmRlci1yYWRpdXMpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tYnMtcGFnaW5hdGlvbi1ib3JkZXItcmFkaXVzKX0ucGFnZS1pdGVtOmxhc3QtY2hpbGQgLnBhZ2UtbGlua3tib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1wYWdpbmF0aW9uLWJvcmRlci1yYWRpdXMpO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWJzLXBhZ2luYXRpb24tYm9yZGVyLXJhZGl1cyl9LnBhZ2luYXRpb24tbGd7LS1icy1wYWdpbmF0aW9uLXBhZGRpbmcteDoxLjVyZW07LS1icy1wYWdpbmF0aW9uLXBhZGRpbmcteTowLjc1cmVtOy0tYnMtcGFnaW5hdGlvbi1mb250LXNpemU6MS4yNXJlbTstLWJzLXBhZ2luYXRpb24tYm9yZGVyLXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLWxnKX0ucGFnaW5hdGlvbi1zbXstLWJzLXBhZ2luYXRpb24tcGFkZGluZy14OjAuNXJlbTstLWJzLXBhZ2luYXRpb24tcGFkZGluZy15OjAuMjVyZW07LS1icy1wYWdpbmF0aW9uLWZvbnQtc2l6ZTowLjg3NXJlbTstLWJzLXBhZ2luYXRpb24tYm9yZGVyLXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXNtKX0uYmFkZ2V7LS1icy1iYWRnZS1wYWRkaW5nLXg6MC42NWVtOy0tYnMtYmFkZ2UtcGFkZGluZy15OjAuMzVlbTstLWJzLWJhZGdlLWZvbnQtc2l6ZTowLjc1ZW07LS1icy1iYWRnZS1mb250LXdlaWdodDo3MDA7LS1icy1iYWRnZS1jb2xvcjojZmZmOy0tYnMtYmFkZ2UtYm9yZGVyLXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzKTtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOnZhcigtLWJzLWJhZGdlLXBhZGRpbmcteSkgdmFyKC0tYnMtYmFkZ2UtcGFkZGluZy14KTtmb250LXNpemU6dmFyKC0tYnMtYmFkZ2UtZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1icy1iYWRnZS1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6MTtjb2xvcjp2YXIoLS1icy1iYWRnZS1jb2xvcik7dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO2JvcmRlci1yYWRpdXM6dmFyKC0tYnMtYmFkZ2UtYm9yZGVyLXJhZGl1cyl9LmJhZGdlOmVtcHR5e2Rpc3BsYXk6bm9uZX0uYnRuIC5iYWRnZXtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6LTFweH0uYWxlcnR7LS1icy1hbGVydC1iZzp0cmFuc3BhcmVudDstLWJzLWFsZXJ0LXBhZGRpbmcteDoxcmVtOy0tYnMtYWxlcnQtcGFkZGluZy15OjFyZW07LS1icy1hbGVydC1tYXJnaW4tYm90dG9tOjFyZW07LS1icy1hbGVydC1jb2xvcjppbmhlcml0Oy0tYnMtYWxlcnQtYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYnMtYWxlcnQtYm9yZGVyOnZhcigtLWJzLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtYWxlcnQtYm9yZGVyLWNvbG9yKTstLWJzLWFsZXJ0LWJvcmRlci1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cyk7LS1icy1hbGVydC1saW5rLWNvbG9yOmluaGVyaXQ7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzp2YXIoLS1icy1hbGVydC1wYWRkaW5nLXkpIHZhcigtLWJzLWFsZXJ0LXBhZGRpbmcteCk7bWFyZ2luLWJvdHRvbTp2YXIoLS1icy1hbGVydC1tYXJnaW4tYm90dG9tKTtjb2xvcjp2YXIoLS1icy1hbGVydC1jb2xvcik7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1hbGVydC1iZyk7Ym9yZGVyOnZhcigtLWJzLWFsZXJ0LWJvcmRlcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1icy1hbGVydC1ib3JkZXItcmFkaXVzKX0uYWxlcnQtaGVhZGluZ3tjb2xvcjppbmhlcml0fS5hbGVydC1saW5re2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjp2YXIoLS1icy1hbGVydC1saW5rLWNvbG9yKX0uYWxlcnQtZGlzbWlzc2libGV7cGFkZGluZy1yaWdodDozcmVtfS5hbGVydC1kaXNtaXNzaWJsZSAuYnRuLWNsb3Nle3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7ei1pbmRleDoyO3BhZGRpbmc6MS4yNXJlbSAxcmVtfS5hbGVydC1wcmltYXJ5ey0tYnMtYWxlcnQtY29sb3I6dmFyKC0tYnMtcHJpbWFyeS10ZXh0LWVtcGhhc2lzKTstLWJzLWFsZXJ0LWJnOnZhcigtLWJzLXByaW1hcnktYmctc3VidGxlKTstLWJzLWFsZXJ0LWJvcmRlci1jb2xvcjp2YXIoLS1icy1wcmltYXJ5LWJvcmRlci1zdWJ0bGUpOy0tYnMtYWxlcnQtbGluay1jb2xvcjp2YXIoLS1icy1wcmltYXJ5LXRleHQtZW1waGFzaXMpfS5hbGVydC1zZWNvbmRhcnl7LS1icy1hbGVydC1jb2xvcjp2YXIoLS1icy1zZWNvbmRhcnktdGV4dC1lbXBoYXNpcyk7LS1icy1hbGVydC1iZzp2YXIoLS1icy1zZWNvbmRhcnktYmctc3VidGxlKTstLWJzLWFsZXJ0LWJvcmRlci1jb2xvcjp2YXIoLS1icy1zZWNvbmRhcnktYm9yZGVyLXN1YnRsZSk7LS1icy1hbGVydC1saW5rLWNvbG9yOnZhcigtLWJzLXNlY29uZGFyeS10ZXh0LWVtcGhhc2lzKX0uYWxlcnQtc3VjY2Vzc3stLWJzLWFsZXJ0LWNvbG9yOnZhcigtLWJzLXN1Y2Nlc3MtdGV4dC1lbXBoYXNpcyk7LS1icy1hbGVydC1iZzp2YXIoLS1icy1zdWNjZXNzLWJnLXN1YnRsZSk7LS1icy1hbGVydC1ib3JkZXItY29sb3I6dmFyKC0tYnMtc3VjY2Vzcy1ib3JkZXItc3VidGxlKTstLWJzLWFsZXJ0LWxpbmstY29sb3I6dmFyKC0tYnMtc3VjY2Vzcy10ZXh0LWVtcGhhc2lzKX0uYWxlcnQtaW5mb3stLWJzLWFsZXJ0LWNvbG9yOnZhcigtLWJzLWluZm8tdGV4dC1lbXBoYXNpcyk7LS1icy1hbGVydC1iZzp2YXIoLS1icy1pbmZvLWJnLXN1YnRsZSk7LS1icy1hbGVydC1ib3JkZXItY29sb3I6dmFyKC0tYnMtaW5mby1ib3JkZXItc3VidGxlKTstLWJzLWFsZXJ0LWxpbmstY29sb3I6dmFyKC0tYnMtaW5mby10ZXh0LWVtcGhhc2lzKX0uYWxlcnQtd2FybmluZ3stLWJzLWFsZXJ0LWNvbG9yOnZhcigtLWJzLXdhcm5pbmctdGV4dC1lbXBoYXNpcyk7LS1icy1hbGVydC1iZzp2YXIoLS1icy13YXJuaW5nLWJnLXN1YnRsZSk7LS1icy1hbGVydC1ib3JkZXItY29sb3I6dmFyKC0tYnMtd2FybmluZy1ib3JkZXItc3VidGxlKTstLWJzLWFsZXJ0LWxpbmstY29sb3I6dmFyKC0tYnMtd2FybmluZy10ZXh0LWVtcGhhc2lzKX0uYWxlcnQtZGFuZ2Vyey0tYnMtYWxlcnQtY29sb3I6dmFyKC0tYnMtZGFuZ2VyLXRleHQtZW1waGFzaXMpOy0tYnMtYWxlcnQtYmc6dmFyKC0tYnMtZGFuZ2VyLWJnLXN1YnRsZSk7LS1icy1hbGVydC1ib3JkZXItY29sb3I6dmFyKC0tYnMtZGFuZ2VyLWJvcmRlci1zdWJ0bGUpOy0tYnMtYWxlcnQtbGluay1jb2xvcjp2YXIoLS1icy1kYW5nZXItdGV4dC1lbXBoYXNpcyl9LmFsZXJ0LWxpZ2h0ey0tYnMtYWxlcnQtY29sb3I6dmFyKC0tYnMtbGlnaHQtdGV4dC1lbXBoYXNpcyk7LS1icy1hbGVydC1iZzp2YXIoLS1icy1saWdodC1iZy1zdWJ0bGUpOy0tYnMtYWxlcnQtYm9yZGVyLWNvbG9yOnZhcigtLWJzLWxpZ2h0LWJvcmRlci1zdWJ0bGUpOy0tYnMtYWxlcnQtbGluay1jb2xvcjp2YXIoLS1icy1saWdodC10ZXh0LWVtcGhhc2lzKX0uYWxlcnQtZGFya3stLWJzLWFsZXJ0LWNvbG9yOnZhcigtLWJzLWRhcmstdGV4dC1lbXBoYXNpcyk7LS1icy1hbGVydC1iZzp2YXIoLS1icy1kYXJrLWJnLXN1YnRsZSk7LS1icy1hbGVydC1ib3JkZXItY29sb3I6dmFyKC0tYnMtZGFyay1ib3JkZXItc3VidGxlKTstLWJzLWFsZXJ0LWxpbmstY29sb3I6dmFyKC0tYnMtZGFyay10ZXh0LWVtcGhhc2lzKX1Aa2V5ZnJhbWVzIHByb2dyZXNzLWJhci1zdHJpcGVzezAle2JhY2tncm91bmQtcG9zaXRpb24teDoxcmVtfX0ucHJvZ3Jlc3MsLnByb2dyZXNzLXN0YWNrZWR7LS1icy1wcm9ncmVzcy1oZWlnaHQ6MXJlbTstLWJzLXByb2dyZXNzLWZvbnQtc2l6ZTowLjc1cmVtOy0tYnMtcHJvZ3Jlc3MtYmc6dmFyKC0tYnMtc2Vjb25kYXJ5LWJnKTstLWJzLXByb2dyZXNzLWJvcmRlci1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cyk7LS1icy1wcm9ncmVzcy1ib3gtc2hhZG93OnZhcigtLWJzLWJveC1zaGFkb3ctaW5zZXQpOy0tYnMtcHJvZ3Jlc3MtYmFyLWNvbG9yOiNmZmY7LS1icy1wcm9ncmVzcy1iYXItYmc6IzBkNmVmZDstLWJzLXByb2dyZXNzLWJhci10cmFuc2l0aW9uOndpZHRoIDAuNnMgZWFzZTtkaXNwbGF5OmZsZXg7aGVpZ2h0OnZhcigtLWJzLXByb2dyZXNzLWhlaWdodCk7b3ZlcmZsb3c6aGlkZGVuO2ZvbnQtc2l6ZTp2YXIoLS1icy1wcm9ncmVzcy1mb250LXNpemUpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtcHJvZ3Jlc3MtYmcpO2JvcmRlci1yYWRpdXM6dmFyKC0tYnMtcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1cyl9LnByb2dyZXNzLWJhcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXI7b3ZlcmZsb3c6aGlkZGVuO2NvbG9yOnZhcigtLWJzLXByb2dyZXNzLWJhci1jb2xvcik7dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtcHJvZ3Jlc3MtYmFyLWJnKTt0cmFuc2l0aW9uOnZhcigtLWJzLXByb2dyZXNzLWJhci10cmFuc2l0aW9uKX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKXsucHJvZ3Jlc3MtYmFye3RyYW5zaXRpb246bm9uZX19LnByb2dyZXNzLWJhci1zdHJpcGVke2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLHJnYmEoMjU1LDI1NSwyNTUsLjE1KSAyNSUsdHJhbnNwYXJlbnQgMjUlLHRyYW5zcGFyZW50IDUwJSxyZ2JhKDI1NSwyNTUsMjU1LC4xNSkgNTAlLHJnYmEoMjU1LDI1NSwyNTUsLjE1KSA3NSUsdHJhbnNwYXJlbnQgNzUlLHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLXNpemU6dmFyKC0tYnMtcHJvZ3Jlc3MtaGVpZ2h0KSB2YXIoLS1icy1wcm9ncmVzcy1oZWlnaHQpfS5wcm9ncmVzcy1zdGFja2VkPi5wcm9ncmVzc3tvdmVyZmxvdzp2aXNpYmxlfS5wcm9ncmVzcy1zdGFja2VkPi5wcm9ncmVzcz4ucHJvZ3Jlc3MtYmFye3dpZHRoOjEwMCV9LnByb2dyZXNzLWJhci1hbmltYXRlZHthbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIHByb2dyZXNzLWJhci1zdHJpcGVzfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5wcm9ncmVzcy1iYXItYW5pbWF0ZWR7YW5pbWF0aW9uOm5vbmV9fS5saXN0LWdyb3Vwey0tYnMtbGlzdC1ncm91cC1jb2xvcjp2YXIoLS1icy1ib2R5LWNvbG9yKTstLWJzLWxpc3QtZ3JvdXAtYmc6dmFyKC0tYnMtYm9keS1iZyk7LS1icy1saXN0LWdyb3VwLWJvcmRlci1jb2xvcjp2YXIoLS1icy1ib3JkZXItY29sb3IpOy0tYnMtbGlzdC1ncm91cC1ib3JkZXItd2lkdGg6dmFyKC0tYnMtYm9yZGVyLXdpZHRoKTstLWJzLWxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzKTstLWJzLWxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXg6MXJlbTstLWJzLWxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXk6MC41cmVtOy0tYnMtbGlzdC1ncm91cC1hY3Rpb24tY29sb3I6dmFyKC0tYnMtc2Vjb25kYXJ5LWNvbG9yKTstLWJzLWxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOnZhcigtLWJzLWVtcGhhc2lzLWNvbG9yKTstLWJzLWxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWJnOnZhcigtLWJzLXRlcnRpYXJ5LWJnKTstLWJzLWxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjp2YXIoLS1icy1ib2R5LWNvbG9yKTstLWJzLWxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzp2YXIoLS1icy1zZWNvbmRhcnktYmcpOy0tYnMtbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjp2YXIoLS1icy1zZWNvbmRhcnktY29sb3IpOy0tYnMtbGlzdC1ncm91cC1kaXNhYmxlZC1iZzp2YXIoLS1icy1ib2R5LWJnKTstLWJzLWxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiNmZmY7LS1icy1saXN0LWdyb3VwLWFjdGl2ZS1iZzojMGQ2ZWZkOy0tYnMtbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOiMwZDZlZmQ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwYWRkaW5nLWxlZnQ6MDttYXJnaW4tYm90dG9tOjA7Ym9yZGVyLXJhZGl1czp2YXIoLS1icy1saXN0LWdyb3VwLWJvcmRlci1yYWRpdXMpfS5saXN0LWdyb3VwLW51bWJlcmVke2xpc3Qtc3R5bGUtdHlwZTpub25lO2NvdW50ZXItcmVzZXQ6c2VjdGlvbn0ubGlzdC1ncm91cC1udW1iZXJlZD4ubGlzdC1ncm91cC1pdGVtOjpiZWZvcmV7Y29udGVudDpjb3VudGVycyhzZWN0aW9uLCAiLiIpICIuICI7Y291bnRlci1pbmNyZW1lbnQ6c2VjdGlvbn0ubGlzdC1ncm91cC1pdGVtLWFjdGlvbnt3aWR0aDoxMDAlO2NvbG9yOnZhcigtLWJzLWxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yKTt0ZXh0LWFsaWduOmluaGVyaXR9Lmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb246Zm9jdXMsLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb246aG92ZXJ7ei1pbmRleDoxO2NvbG9yOnZhcigtLWJzLWxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yKTt0ZXh0LWRlY29yYXRpb246bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLWxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWJnKX0ubGlzdC1ncm91cC1pdGVtLWFjdGlvbjphY3RpdmV7Y29sb3I6dmFyKC0tYnMtbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLWxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZyl9Lmxpc3QtZ3JvdXAtaXRlbXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6dmFyKC0tYnMtbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteSkgdmFyKC0tYnMtbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteCk7Y29sb3I6dmFyKC0tYnMtbGlzdC1ncm91cC1jb2xvcik7dGV4dC1kZWNvcmF0aW9uOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1saXN0LWdyb3VwLWJnKTtib3JkZXI6dmFyKC0tYnMtbGlzdC1ncm91cC1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLWxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yKX0ubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxke2JvcmRlci10b3AtbGVmdC1yYWRpdXM6aW5oZXJpdDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czppbmhlcml0fS5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZHtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czppbmhlcml0O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6aW5oZXJpdH0ubGlzdC1ncm91cC1pdGVtLmRpc2FibGVkLC5saXN0LWdyb3VwLWl0ZW06ZGlzYWJsZWR7Y29sb3I6dmFyKC0tYnMtbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcik7cG9pbnRlci1ldmVudHM6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLWxpc3QtZ3JvdXAtZGlzYWJsZWQtYmcpfS5saXN0LWdyb3VwLWl0ZW0uYWN0aXZle3otaW5kZXg6Mjtjb2xvcjp2YXIoLS1icy1saXN0LWdyb3VwLWFjdGl2ZS1jb2xvcik7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1saXN0LWdyb3VwLWFjdGl2ZS1iZyk7Ym9yZGVyLWNvbG9yOnZhcigtLWJzLWxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlci1jb2xvcil9Lmxpc3QtZ3JvdXAtaXRlbSsubGlzdC1ncm91cC1pdGVte2JvcmRlci10b3Atd2lkdGg6MH0ubGlzdC1ncm91cC1pdGVtKy5saXN0LWdyb3VwLWl0ZW0uYWN0aXZle21hcmdpbi10b3A6Y2FsYygtMSAqIHZhcigtLWJzLWxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoKSk7Ym9yZGVyLXRvcC13aWR0aDp2YXIoLS1icy1saXN0LWdyb3VwLWJvcmRlci13aWR0aCl9Lmxpc3QtZ3JvdXAtaG9yaXpvbnRhbHtmbGV4LWRpcmVjdGlvbjpyb3d9Lmxpc3QtZ3JvdXAtaG9yaXpvbnRhbD4ubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCl7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1icy1saXN0LWdyb3VwLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9Lmxpc3QtZ3JvdXAtaG9yaXpvbnRhbD4ubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCl7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tYnMtbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzKTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjB9Lmxpc3QtZ3JvdXAtaG9yaXpvbnRhbD4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZXttYXJnaW4tdG9wOjB9Lmxpc3QtZ3JvdXAtaG9yaXpvbnRhbD4ubGlzdC1ncm91cC1pdGVtKy5saXN0LWdyb3VwLWl0ZW17Ym9yZGVyLXRvcC13aWR0aDp2YXIoLS1icy1saXN0LWdyb3VwLWJvcmRlci13aWR0aCk7Ym9yZGVyLWxlZnQtd2lkdGg6MH0ubGlzdC1ncm91cC1ob3Jpem9udGFsPi5saXN0LWdyb3VwLWl0ZW0rLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmV7bWFyZ2luLWxlZnQ6Y2FsYygtMSAqIHZhcigtLWJzLWxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoKSk7Ym9yZGVyLWxlZnQtd2lkdGg6dmFyKC0tYnMtbGlzdC1ncm91cC1ib3JkZXItd2lkdGgpfUBtZWRpYSAobWluLXdpZHRoOjU3NnB4KXsubGlzdC1ncm91cC1ob3Jpem9udGFsLXNte2ZsZXgtZGlyZWN0aW9uOnJvd30ubGlzdC1ncm91cC1ob3Jpem9udGFsLXNtPi5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKXtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWJzLWxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0ubGlzdC1ncm91cC1ob3Jpem9udGFsLXNtPi5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKXtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1saXN0LWdyb3VwLWJvcmRlci1yYWRpdXMpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MH0ubGlzdC1ncm91cC1ob3Jpem9udGFsLXNtPi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZle21hcmdpbi10b3A6MH0ubGlzdC1ncm91cC1ob3Jpem9udGFsLXNtPi5saXN0LWdyb3VwLWl0ZW0rLmxpc3QtZ3JvdXAtaXRlbXtib3JkZXItdG9wLXdpZHRoOnZhcigtLWJzLWxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoKTtib3JkZXItbGVmdC13aWR0aDowfS5saXN0LWdyb3VwLWhvcml6b250YWwtc20+Lmxpc3QtZ3JvdXAtaXRlbSsubGlzdC1ncm91cC1pdGVtLmFjdGl2ZXttYXJnaW4tbGVmdDpjYWxjKC0xICogdmFyKC0tYnMtbGlzdC1ncm91cC1ib3JkZXItd2lkdGgpKTtib3JkZXItbGVmdC13aWR0aDp2YXIoLS1icy1saXN0LWdyb3VwLWJvcmRlci13aWR0aCl9fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubGlzdC1ncm91cC1ob3Jpem9udGFsLW1ke2ZsZXgtZGlyZWN0aW9uOnJvd30ubGlzdC1ncm91cC1ob3Jpem9udGFsLW1kPi5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKXtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWJzLWxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0ubGlzdC1ncm91cC1ob3Jpem9udGFsLW1kPi5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKXtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1saXN0LWdyb3VwLWJvcmRlci1yYWRpdXMpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MH0ubGlzdC1ncm91cC1ob3Jpem9udGFsLW1kPi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZle21hcmdpbi10b3A6MH0ubGlzdC1ncm91cC1ob3Jpem9udGFsLW1kPi5saXN0LWdyb3VwLWl0ZW0rLmxpc3QtZ3JvdXAtaXRlbXtib3JkZXItdG9wLXdpZHRoOnZhcigtLWJzLWxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoKTtib3JkZXItbGVmdC13aWR0aDowfS5saXN0LWdyb3VwLWhvcml6b250YWwtbWQ+Lmxpc3QtZ3JvdXAtaXRlbSsubGlzdC1ncm91cC1pdGVtLmFjdGl2ZXttYXJnaW4tbGVmdDpjYWxjKC0xICogdmFyKC0tYnMtbGlzdC1ncm91cC1ib3JkZXItd2lkdGgpKTtib3JkZXItbGVmdC13aWR0aDp2YXIoLS1icy1saXN0LWdyb3VwLWJvcmRlci13aWR0aCl9fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsubGlzdC1ncm91cC1ob3Jpem9udGFsLWxne2ZsZXgtZGlyZWN0aW9uOnJvd30ubGlzdC1ncm91cC1ob3Jpem9udGFsLWxnPi5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKXtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWJzLWxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0ubGlzdC1ncm91cC1ob3Jpem9udGFsLWxnPi5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKXtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1saXN0LWdyb3VwLWJvcmRlci1yYWRpdXMpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MH0ubGlzdC1ncm91cC1ob3Jpem9udGFsLWxnPi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZle21hcmdpbi10b3A6MH0ubGlzdC1ncm91cC1ob3Jpem9udGFsLWxnPi5saXN0LWdyb3VwLWl0ZW0rLmxpc3QtZ3JvdXAtaXRlbXtib3JkZXItdG9wLXdpZHRoOnZhcigtLWJzLWxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoKTtib3JkZXItbGVmdC13aWR0aDowfS5saXN0LWdyb3VwLWhvcml6b250YWwtbGc+Lmxpc3QtZ3JvdXAtaXRlbSsubGlzdC1ncm91cC1pdGVtLmFjdGl2ZXttYXJnaW4tbGVmdDpjYWxjKC0xICogdmFyKC0tYnMtbGlzdC1ncm91cC1ib3JkZXItd2lkdGgpKTtib3JkZXItbGVmdC13aWR0aDp2YXIoLS1icy1saXN0LWdyb3VwLWJvcmRlci13aWR0aCl9fUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7Lmxpc3QtZ3JvdXAtaG9yaXpvbnRhbC14bHtmbGV4LWRpcmVjdGlvbjpyb3d9Lmxpc3QtZ3JvdXAtaG9yaXpvbnRhbC14bD4ubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCl7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1icy1saXN0LWdyb3VwLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9Lmxpc3QtZ3JvdXAtaG9yaXpvbnRhbC14bD4ubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCl7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tYnMtbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzKTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjB9Lmxpc3QtZ3JvdXAtaG9yaXpvbnRhbC14bD4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZXttYXJnaW4tdG9wOjB9Lmxpc3QtZ3JvdXAtaG9yaXpvbnRhbC14bD4ubGlzdC1ncm91cC1pdGVtKy5saXN0LWdyb3VwLWl0ZW17Ym9yZGVyLXRvcC13aWR0aDp2YXIoLS1icy1saXN0LWdyb3VwLWJvcmRlci13aWR0aCk7Ym9yZGVyLWxlZnQtd2lkdGg6MH0ubGlzdC1ncm91cC1ob3Jpem9udGFsLXhsPi5saXN0LWdyb3VwLWl0ZW0rLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmV7bWFyZ2luLWxlZnQ6Y2FsYygtMSAqIHZhcigtLWJzLWxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoKSk7Ym9yZGVyLWxlZnQtd2lkdGg6dmFyKC0tYnMtbGlzdC1ncm91cC1ib3JkZXItd2lkdGgpfX1AbWVkaWEgKG1pbi13aWR0aDoxNDAwcHgpey5saXN0LWdyb3VwLWhvcml6b250YWwteHhse2ZsZXgtZGlyZWN0aW9uOnJvd30ubGlzdC1ncm91cC1ob3Jpem9udGFsLXh4bD4ubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCl7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1icy1saXN0LWdyb3VwLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9Lmxpc3QtZ3JvdXAtaG9yaXpvbnRhbC14eGw+Lmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpe2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJzLWxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5saXN0LWdyb3VwLWhvcml6b250YWwteHhsPi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZle21hcmdpbi10b3A6MH0ubGlzdC1ncm91cC1ob3Jpem9udGFsLXh4bD4ubGlzdC1ncm91cC1pdGVtKy5saXN0LWdyb3VwLWl0ZW17Ym9yZGVyLXRvcC13aWR0aDp2YXIoLS1icy1saXN0LWdyb3VwLWJvcmRlci13aWR0aCk7Ym9yZGVyLWxlZnQtd2lkdGg6MH0ubGlzdC1ncm91cC1ob3Jpem9udGFsLXh4bD4ubGlzdC1ncm91cC1pdGVtKy5saXN0LWdyb3VwLWl0ZW0uYWN0aXZle21hcmdpbi1sZWZ0OmNhbGMoLTEgKiB2YXIoLS1icy1saXN0LWdyb3VwLWJvcmRlci13aWR0aCkpO2JvcmRlci1sZWZ0LXdpZHRoOnZhcigtLWJzLWxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoKX19Lmxpc3QtZ3JvdXAtZmx1c2h7Ym9yZGVyLXJhZGl1czowfS5saXN0LWdyb3VwLWZsdXNoPi5saXN0LWdyb3VwLWl0ZW17Ym9yZGVyLXdpZHRoOjAgMCB2YXIoLS1icy1saXN0LWdyb3VwLWJvcmRlci13aWR0aCl9Lmxpc3QtZ3JvdXAtZmx1c2g+Lmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxke2JvcmRlci1ib3R0b20td2lkdGg6MH0ubGlzdC1ncm91cC1pdGVtLXByaW1hcnl7LS1icy1saXN0LWdyb3VwLWNvbG9yOnZhcigtLWJzLXByaW1hcnktdGV4dC1lbXBoYXNpcyk7LS1icy1saXN0LWdyb3VwLWJnOnZhcigtLWJzLXByaW1hcnktYmctc3VidGxlKTstLWJzLWxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOnZhcigtLWJzLXByaW1hcnktYm9yZGVyLXN1YnRsZSk7LS1icy1saXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjp2YXIoLS1icy1lbXBoYXNpcy1jb2xvcik7LS1icy1saXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1iZzp2YXIoLS1icy1wcmltYXJ5LWJvcmRlci1zdWJ0bGUpOy0tYnMtbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOnZhcigtLWJzLWVtcGhhc2lzLWNvbG9yKTstLWJzLWxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzp2YXIoLS1icy1wcmltYXJ5LWJvcmRlci1zdWJ0bGUpOy0tYnMtbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6dmFyKC0tYnMtcHJpbWFyeS1iZy1zdWJ0bGUpOy0tYnMtbGlzdC1ncm91cC1hY3RpdmUtYmc6dmFyKC0tYnMtcHJpbWFyeS10ZXh0LWVtcGhhc2lzKTstLWJzLWxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlci1jb2xvcjp2YXIoLS1icy1wcmltYXJ5LXRleHQtZW1waGFzaXMpfS5saXN0LWdyb3VwLWl0ZW0tc2Vjb25kYXJ5ey0tYnMtbGlzdC1ncm91cC1jb2xvcjp2YXIoLS1icy1zZWNvbmRhcnktdGV4dC1lbXBoYXNpcyk7LS1icy1saXN0LWdyb3VwLWJnOnZhcigtLWJzLXNlY29uZGFyeS1iZy1zdWJ0bGUpOy0tYnMtbGlzdC1ncm91cC1ib3JkZXItY29sb3I6dmFyKC0tYnMtc2Vjb25kYXJ5LWJvcmRlci1zdWJ0bGUpOy0tYnMtbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6dmFyKC0tYnMtZW1waGFzaXMtY29sb3IpOy0tYnMtbGlzdC1ncm91cC1hY3Rpb24taG92ZXItYmc6dmFyKC0tYnMtc2Vjb25kYXJ5LWJvcmRlci1zdWJ0bGUpOy0tYnMtbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOnZhcigtLWJzLWVtcGhhc2lzLWNvbG9yKTstLWJzLWxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzp2YXIoLS1icy1zZWNvbmRhcnktYm9yZGVyLXN1YnRsZSk7LS1icy1saXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjp2YXIoLS1icy1zZWNvbmRhcnktYmctc3VidGxlKTstLWJzLWxpc3QtZ3JvdXAtYWN0aXZlLWJnOnZhcigtLWJzLXNlY29uZGFyeS10ZXh0LWVtcGhhc2lzKTstLWJzLWxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlci1jb2xvcjp2YXIoLS1icy1zZWNvbmRhcnktdGV4dC1lbXBoYXNpcyl9Lmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzey0tYnMtbGlzdC1ncm91cC1jb2xvcjp2YXIoLS1icy1zdWNjZXNzLXRleHQtZW1waGFzaXMpOy0tYnMtbGlzdC1ncm91cC1iZzp2YXIoLS1icy1zdWNjZXNzLWJnLXN1YnRsZSk7LS1icy1saXN0LWdyb3VwLWJvcmRlci1jb2xvcjp2YXIoLS1icy1zdWNjZXNzLWJvcmRlci1zdWJ0bGUpOy0tYnMtbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6dmFyKC0tYnMtZW1waGFzaXMtY29sb3IpOy0tYnMtbGlzdC1ncm91cC1hY3Rpb24taG92ZXItYmc6dmFyKC0tYnMtc3VjY2Vzcy1ib3JkZXItc3VidGxlKTstLWJzLWxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjp2YXIoLS1icy1lbXBoYXNpcy1jb2xvcik7LS1icy1saXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6dmFyKC0tYnMtc3VjY2Vzcy1ib3JkZXItc3VidGxlKTstLWJzLWxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOnZhcigtLWJzLXN1Y2Nlc3MtYmctc3VidGxlKTstLWJzLWxpc3QtZ3JvdXAtYWN0aXZlLWJnOnZhcigtLWJzLXN1Y2Nlc3MtdGV4dC1lbXBoYXNpcyk7LS1icy1saXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3I6dmFyKC0tYnMtc3VjY2Vzcy10ZXh0LWVtcGhhc2lzKX0ubGlzdC1ncm91cC1pdGVtLWluZm97LS1icy1saXN0LWdyb3VwLWNvbG9yOnZhcigtLWJzLWluZm8tdGV4dC1lbXBoYXNpcyk7LS1icy1saXN0LWdyb3VwLWJnOnZhcigtLWJzLWluZm8tYmctc3VidGxlKTstLWJzLWxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOnZhcigtLWJzLWluZm8tYm9yZGVyLXN1YnRsZSk7LS1icy1saXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjp2YXIoLS1icy1lbXBoYXNpcy1jb2xvcik7LS1icy1saXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1iZzp2YXIoLS1icy1pbmZvLWJvcmRlci1zdWJ0bGUpOy0tYnMtbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOnZhcigtLWJzLWVtcGhhc2lzLWNvbG9yKTstLWJzLWxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzp2YXIoLS1icy1pbmZvLWJvcmRlci1zdWJ0bGUpOy0tYnMtbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6dmFyKC0tYnMtaW5mby1iZy1zdWJ0bGUpOy0tYnMtbGlzdC1ncm91cC1hY3RpdmUtYmc6dmFyKC0tYnMtaW5mby10ZXh0LWVtcGhhc2lzKTstLWJzLWxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlci1jb2xvcjp2YXIoLS1icy1pbmZvLXRleHQtZW1waGFzaXMpfS5saXN0LWdyb3VwLWl0ZW0td2FybmluZ3stLWJzLWxpc3QtZ3JvdXAtY29sb3I6dmFyKC0tYnMtd2FybmluZy10ZXh0LWVtcGhhc2lzKTstLWJzLWxpc3QtZ3JvdXAtYmc6dmFyKC0tYnMtd2FybmluZy1iZy1zdWJ0bGUpOy0tYnMtbGlzdC1ncm91cC1ib3JkZXItY29sb3I6dmFyKC0tYnMtd2FybmluZy1ib3JkZXItc3VidGxlKTstLWJzLWxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOnZhcigtLWJzLWVtcGhhc2lzLWNvbG9yKTstLWJzLWxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWJnOnZhcigtLWJzLXdhcm5pbmctYm9yZGVyLXN1YnRsZSk7LS1icy1saXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6dmFyKC0tYnMtZW1waGFzaXMtY29sb3IpOy0tYnMtbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOnZhcigtLWJzLXdhcm5pbmctYm9yZGVyLXN1YnRsZSk7LS1icy1saXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjp2YXIoLS1icy13YXJuaW5nLWJnLXN1YnRsZSk7LS1icy1saXN0LWdyb3VwLWFjdGl2ZS1iZzp2YXIoLS1icy13YXJuaW5nLXRleHQtZW1waGFzaXMpOy0tYnMtbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOnZhcigtLWJzLXdhcm5pbmctdGV4dC1lbXBoYXNpcyl9Lmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXJ7LS1icy1saXN0LWdyb3VwLWNvbG9yOnZhcigtLWJzLWRhbmdlci10ZXh0LWVtcGhhc2lzKTstLWJzLWxpc3QtZ3JvdXAtYmc6dmFyKC0tYnMtZGFuZ2VyLWJnLXN1YnRsZSk7LS1icy1saXN0LWdyb3VwLWJvcmRlci1jb2xvcjp2YXIoLS1icy1kYW5nZXItYm9yZGVyLXN1YnRsZSk7LS1icy1saXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjp2YXIoLS1icy1lbXBoYXNpcy1jb2xvcik7LS1icy1saXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1iZzp2YXIoLS1icy1kYW5nZXItYm9yZGVyLXN1YnRsZSk7LS1icy1saXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6dmFyKC0tYnMtZW1waGFzaXMtY29sb3IpOy0tYnMtbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOnZhcigtLWJzLWRhbmdlci1ib3JkZXItc3VidGxlKTstLWJzLWxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOnZhcigtLWJzLWRhbmdlci1iZy1zdWJ0bGUpOy0tYnMtbGlzdC1ncm91cC1hY3RpdmUtYmc6dmFyKC0tYnMtZGFuZ2VyLXRleHQtZW1waGFzaXMpOy0tYnMtbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOnZhcigtLWJzLWRhbmdlci10ZXh0LWVtcGhhc2lzKX0ubGlzdC1ncm91cC1pdGVtLWxpZ2h0ey0tYnMtbGlzdC1ncm91cC1jb2xvcjp2YXIoLS1icy1saWdodC10ZXh0LWVtcGhhc2lzKTstLWJzLWxpc3QtZ3JvdXAtYmc6dmFyKC0tYnMtbGlnaHQtYmctc3VidGxlKTstLWJzLWxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOnZhcigtLWJzLWxpZ2h0LWJvcmRlci1zdWJ0bGUpOy0tYnMtbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6dmFyKC0tYnMtZW1waGFzaXMtY29sb3IpOy0tYnMtbGlzdC1ncm91cC1hY3Rpb24taG92ZXItYmc6dmFyKC0tYnMtbGlnaHQtYm9yZGVyLXN1YnRsZSk7LS1icy1saXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6dmFyKC0tYnMtZW1waGFzaXMtY29sb3IpOy0tYnMtbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOnZhcigtLWJzLWxpZ2h0LWJvcmRlci1zdWJ0bGUpOy0tYnMtbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6dmFyKC0tYnMtbGlnaHQtYmctc3VidGxlKTstLWJzLWxpc3QtZ3JvdXAtYWN0aXZlLWJnOnZhcigtLWJzLWxpZ2h0LXRleHQtZW1waGFzaXMpOy0tYnMtbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOnZhcigtLWJzLWxpZ2h0LXRleHQtZW1waGFzaXMpfS5saXN0LWdyb3VwLWl0ZW0tZGFya3stLWJzLWxpc3QtZ3JvdXAtY29sb3I6dmFyKC0tYnMtZGFyay10ZXh0LWVtcGhhc2lzKTstLWJzLWxpc3QtZ3JvdXAtYmc6dmFyKC0tYnMtZGFyay1iZy1zdWJ0bGUpOy0tYnMtbGlzdC1ncm91cC1ib3JkZXItY29sb3I6dmFyKC0tYnMtZGFyay1ib3JkZXItc3VidGxlKTstLWJzLWxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOnZhcigtLWJzLWVtcGhhc2lzLWNvbG9yKTstLWJzLWxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWJnOnZhcigtLWJzLWRhcmstYm9yZGVyLXN1YnRsZSk7LS1icy1saXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6dmFyKC0tYnMtZW1waGFzaXMtY29sb3IpOy0tYnMtbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOnZhcigtLWJzLWRhcmstYm9yZGVyLXN1YnRsZSk7LS1icy1saXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjp2YXIoLS1icy1kYXJrLWJnLXN1YnRsZSk7LS1icy1saXN0LWdyb3VwLWFjdGl2ZS1iZzp2YXIoLS1icy1kYXJrLXRleHQtZW1waGFzaXMpOy0tYnMtbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOnZhcigtLWJzLWRhcmstdGV4dC1lbXBoYXNpcyl9LmJ0bi1jbG9zZXstLWJzLWJ0bi1jbG9zZS1jb2xvcjojMDAwOy0tYnMtYnRuLWNsb3NlLWJnOnVybCgiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nJTIzMDAwJyUzZSUzY3BhdGggZD0nTS4yOTMuMjkzYTEgMSAwIDAgMSAxLjQxNCAwTDggNi41ODYgMTQuMjkzLjI5M2ExIDEgMCAxIDEgMS40MTQgMS40MTRMOS40MTQgOGw2LjI5MyA2LjI5M2ExIDEgMCAwIDEtMS40MTQgMS40MTRMOCA5LjQxNGwtNi4yOTMgNi4yOTNhMSAxIDAgMCAxLTEuNDE0LTEuNDE0TDYuNTg2IDggLjI5MyAxLjcwN2ExIDEgMCAwIDEgMC0xLjQxNHonLyUzZSUzYy9zdmclM2UiKTstLWJzLWJ0bi1jbG9zZS1vcGFjaXR5OjAuNTstLWJzLWJ0bi1jbG9zZS1ob3Zlci1vcGFjaXR5OjAuNzU7LS1icy1idG4tY2xvc2UtZm9jdXMtc2hhZG93OjAgMCAwIDAuMjVyZW0gcmdiYSgxMywgMTEwLCAyNTMsIDAuMjUpOy0tYnMtYnRuLWNsb3NlLWZvY3VzLW9wYWNpdHk6MTstLWJzLWJ0bi1jbG9zZS1kaXNhYmxlZC1vcGFjaXR5OjAuMjU7LS1icy1idG4tY2xvc2Utd2hpdGUtZmlsdGVyOmludmVydCgxKSBncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcygyMDAlKTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O3dpZHRoOjFlbTtoZWlnaHQ6MWVtO3BhZGRpbmc6LjI1ZW0gLjI1ZW07Y29sb3I6dmFyKC0tYnMtYnRuLWNsb3NlLWNvbG9yKTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50IHZhcigtLWJzLWJ0bi1jbG9zZS1iZykgY2VudGVyLzFlbSBhdXRvIG5vLXJlcGVhdDtib3JkZXI6MDtib3JkZXItcmFkaXVzOi4zNzVyZW07b3BhY2l0eTp2YXIoLS1icy1idG4tY2xvc2Utb3BhY2l0eSl9LmJ0bi1jbG9zZTpob3Zlcntjb2xvcjp2YXIoLS1icy1idG4tY2xvc2UtY29sb3IpO3RleHQtZGVjb3JhdGlvbjpub25lO29wYWNpdHk6dmFyKC0tYnMtYnRuLWNsb3NlLWhvdmVyLW9wYWNpdHkpfS5idG4tY2xvc2U6Zm9jdXN7b3V0bGluZTowO2JveC1zaGFkb3c6dmFyKC0tYnMtYnRuLWNsb3NlLWZvY3VzLXNoYWRvdyk7b3BhY2l0eTp2YXIoLS1icy1idG4tY2xvc2UtZm9jdXMtb3BhY2l0eSl9LmJ0bi1jbG9zZS5kaXNhYmxlZCwuYnRuLWNsb3NlOmRpc2FibGVke3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tYnMtYnRuLWNsb3NlLWRpc2FibGVkLW9wYWNpdHkpfS5idG4tY2xvc2Utd2hpdGV7ZmlsdGVyOnZhcigtLWJzLWJ0bi1jbG9zZS13aGl0ZS1maWx0ZXIpfVtkYXRhLWJzLXRoZW1lPWRhcmtdIC5idG4tY2xvc2V7ZmlsdGVyOnZhcigtLWJzLWJ0bi1jbG9zZS13aGl0ZS1maWx0ZXIpfS50b2FzdHstLWJzLXRvYXN0LXppbmRleDoxMDkwOy0tYnMtdG9hc3QtcGFkZGluZy14OjAuNzVyZW07LS1icy10b2FzdC1wYWRkaW5nLXk6MC41cmVtOy0tYnMtdG9hc3Qtc3BhY2luZzoxLjVyZW07LS1icy10b2FzdC1tYXgtd2lkdGg6MzUwcHg7LS1icy10b2FzdC1mb250LXNpemU6MC44NzVyZW07LS1icy10b2FzdC1jb2xvcjogOy0tYnMtdG9hc3QtYmc6cmdiYSh2YXIoLS1icy1ib2R5LWJnLXJnYiksIDAuODUpOy0tYnMtdG9hc3QtYm9yZGVyLXdpZHRoOnZhcigtLWJzLWJvcmRlci13aWR0aCk7LS1icy10b2FzdC1ib3JkZXItY29sb3I6dmFyKC0tYnMtYm9yZGVyLWNvbG9yLXRyYW5zbHVjZW50KTstLWJzLXRvYXN0LWJvcmRlci1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cyk7LS1icy10b2FzdC1ib3gtc2hhZG93OnZhcigtLWJzLWJveC1zaGFkb3cpOy0tYnMtdG9hc3QtaGVhZGVyLWNvbG9yOnZhcigtLWJzLXNlY29uZGFyeS1jb2xvcik7LS1icy10b2FzdC1oZWFkZXItYmc6cmdiYSh2YXIoLS1icy1ib2R5LWJnLXJnYiksIDAuODUpOy0tYnMtdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjp2YXIoLS1icy1ib3JkZXItY29sb3ItdHJhbnNsdWNlbnQpO3dpZHRoOnZhcigtLWJzLXRvYXN0LW1heC13aWR0aCk7bWF4LXdpZHRoOjEwMCU7Zm9udC1zaXplOnZhcigtLWJzLXRvYXN0LWZvbnQtc2l6ZSk7Y29sb3I6dmFyKC0tYnMtdG9hc3QtY29sb3IpO3BvaW50ZXItZXZlbnRzOmF1dG87YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy10b2FzdC1iZyk7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O2JvcmRlcjp2YXIoLS1icy10b2FzdC1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLXRvYXN0LWJvcmRlci1jb2xvcik7Ym94LXNoYWRvdzp2YXIoLS1icy10b2FzdC1ib3gtc2hhZG93KTtib3JkZXItcmFkaXVzOnZhcigtLWJzLXRvYXN0LWJvcmRlci1yYWRpdXMpfS50b2FzdC5zaG93aW5ne29wYWNpdHk6MH0udG9hc3Q6bm90KC5zaG93KXtkaXNwbGF5Om5vbmV9LnRvYXN0LWNvbnRhaW5lcnstLWJzLXRvYXN0LXppbmRleDoxMDkwO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6dmFyKC0tYnMtdG9hc3QtemluZGV4KTt3aWR0aDotd2Via2l0LW1heC1jb250ZW50O3dpZHRoOi1tb3otbWF4LWNvbnRlbnQ7d2lkdGg6bWF4LWNvbnRlbnQ7bWF4LXdpZHRoOjEwMCU7cG9pbnRlci1ldmVudHM6bm9uZX0udG9hc3QtY29udGFpbmVyPjpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206dmFyKC0tYnMtdG9hc3Qtc3BhY2luZyl9LnRvYXN0LWhlYWRlcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmc6dmFyKC0tYnMtdG9hc3QtcGFkZGluZy15KSB2YXIoLS1icy10b2FzdC1wYWRkaW5nLXgpO2NvbG9yOnZhcigtLWJzLXRvYXN0LWhlYWRlci1jb2xvcik7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy10b2FzdC1oZWFkZXItYmcpO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtib3JkZXItYm90dG9tOnZhcigtLWJzLXRvYXN0LWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcik7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czpjYWxjKHZhcigtLWJzLXRvYXN0LWJvcmRlci1yYWRpdXMpIC0gdmFyKC0tYnMtdG9hc3QtYm9yZGVyLXdpZHRoKSk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6Y2FsYyh2YXIoLS1icy10b2FzdC1ib3JkZXItcmFkaXVzKSAtIHZhcigtLWJzLXRvYXN0LWJvcmRlci13aWR0aCkpfS50b2FzdC1oZWFkZXIgLmJ0bi1jbG9zZXttYXJnaW4tcmlnaHQ6Y2FsYygtLjUgKiB2YXIoLS1icy10b2FzdC1wYWRkaW5nLXgpKTttYXJnaW4tbGVmdDp2YXIoLS1icy10b2FzdC1wYWRkaW5nLXgpfS50b2FzdC1ib2R5e3BhZGRpbmc6dmFyKC0tYnMtdG9hc3QtcGFkZGluZy14KTt3b3JkLXdyYXA6YnJlYWstd29yZH0ubW9kYWx7LS1icy1tb2RhbC16aW5kZXg6MTA1NTstLWJzLW1vZGFsLXdpZHRoOjUwMHB4Oy0tYnMtbW9kYWwtcGFkZGluZzoxcmVtOy0tYnMtbW9kYWwtbWFyZ2luOjAuNXJlbTstLWJzLW1vZGFsLWNvbG9yOiA7LS1icy1tb2RhbC1iZzp2YXIoLS1icy1ib2R5LWJnKTstLWJzLW1vZGFsLWJvcmRlci1jb2xvcjp2YXIoLS1icy1ib3JkZXItY29sb3ItdHJhbnNsdWNlbnQpOy0tYnMtbW9kYWwtYm9yZGVyLXdpZHRoOnZhcigtLWJzLWJvcmRlci13aWR0aCk7LS1icy1tb2RhbC1ib3JkZXItcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtbGcpOy0tYnMtbW9kYWwtYm94LXNoYWRvdzp2YXIoLS1icy1ib3gtc2hhZG93LXNtKTstLWJzLW1vZGFsLWlubmVyLWJvcmRlci1yYWRpdXM6Y2FsYyh2YXIoLS1icy1ib3JkZXItcmFkaXVzLWxnKSAtICh2YXIoLS1icy1ib3JkZXItd2lkdGgpKSk7LS1icy1tb2RhbC1oZWFkZXItcGFkZGluZy14OjFyZW07LS1icy1tb2RhbC1oZWFkZXItcGFkZGluZy15OjFyZW07LS1icy1tb2RhbC1oZWFkZXItcGFkZGluZzoxcmVtIDFyZW07LS1icy1tb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOnZhcigtLWJzLWJvcmRlci1jb2xvcik7LS1icy1tb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoOnZhcigtLWJzLWJvcmRlci13aWR0aCk7LS1icy1tb2RhbC10aXRsZS1saW5lLWhlaWdodDoxLjU7LS1icy1tb2RhbC1mb290ZXItZ2FwOjAuNXJlbTstLWJzLW1vZGFsLWZvb3Rlci1iZzogOy0tYnMtbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjp2YXIoLS1icy1ib3JkZXItY29sb3IpOy0tYnMtbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDp2YXIoLS1icy1ib3JkZXItd2lkdGgpO3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt6LWluZGV4OnZhcigtLWJzLW1vZGFsLXppbmRleCk7ZGlzcGxheTpub25lO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTphdXRvO291dGxpbmU6MH0ubW9kYWwtZGlhbG9ne3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOmF1dG87bWFyZ2luOnZhcigtLWJzLW1vZGFsLW1hcmdpbik7cG9pbnRlci1ldmVudHM6bm9uZX0ubW9kYWwuZmFkZSAubW9kYWwtZGlhbG9ne3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcyBlYXNlLW91dDt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsLTUwcHgpfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2d7dHJhbnNpdGlvbjpub25lfX0ubW9kYWwuc2hvdyAubW9kYWwtZGlhbG9ne3RyYW5zZm9ybTpub25lfS5tb2RhbC5tb2RhbC1zdGF0aWMgLm1vZGFsLWRpYWxvZ3t0cmFuc2Zvcm06c2NhbGUoMS4wMil9Lm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxle2hlaWdodDpjYWxjKDEwMCUgLSB2YXIoLS1icy1tb2RhbC1tYXJnaW4pICogMil9Lm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIC5tb2RhbC1jb250ZW50e21heC1oZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW59Lm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIC5tb2RhbC1ib2R5e292ZXJmbG93LXk6YXV0b30ubW9kYWwtZGlhbG9nLWNlbnRlcmVke2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7bWluLWhlaWdodDpjYWxjKDEwMCUgLSB2YXIoLS1icy1tb2RhbC1tYXJnaW4pICogMil9Lm1vZGFsLWNvbnRlbnR7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt3aWR0aDoxMDAlO2NvbG9yOnZhcigtLWJzLW1vZGFsLWNvbG9yKTtwb2ludGVyLWV2ZW50czphdXRvO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtbW9kYWwtYmcpO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtib3JkZXI6dmFyKC0tYnMtbW9kYWwtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1tb2RhbC1ib3JkZXItY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tYnMtbW9kYWwtYm9yZGVyLXJhZGl1cyk7b3V0bGluZTowfS5tb2RhbC1iYWNrZHJvcHstLWJzLWJhY2tkcm9wLXppbmRleDoxMDUwOy0tYnMtYmFja2Ryb3AtYmc6IzAwMDstLWJzLWJhY2tkcm9wLW9wYWNpdHk6MC41O3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt6LWluZGV4OnZhcigtLWJzLWJhY2tkcm9wLXppbmRleCk7d2lkdGg6MTAwdnc7aGVpZ2h0OjEwMHZoO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtYmFja2Ryb3AtYmcpfS5tb2RhbC1iYWNrZHJvcC5mYWRle29wYWNpdHk6MH0ubW9kYWwtYmFja2Ryb3Auc2hvd3tvcGFjaXR5OnZhcigtLWJzLWJhY2tkcm9wLW9wYWNpdHkpfS5tb2RhbC1oZWFkZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtc2hyaW5rOjA7YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmc6dmFyKC0tYnMtbW9kYWwtaGVhZGVyLXBhZGRpbmcpO2JvcmRlci1ib3R0b206dmFyKC0tYnMtbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcik7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1icy1tb2RhbC1pbm5lci1ib3JkZXItcmFkaXVzKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1tb2RhbC1pbm5lci1ib3JkZXItcmFkaXVzKX0ubW9kYWwtaGVhZGVyIC5idG4tY2xvc2V7cGFkZGluZzpjYWxjKHZhcigtLWJzLW1vZGFsLWhlYWRlci1wYWRkaW5nLXkpICogLjUpIGNhbGModmFyKC0tYnMtbW9kYWwtaGVhZGVyLXBhZGRpbmcteCkgKiAuNSk7bWFyZ2luOmNhbGMoLS41ICogdmFyKC0tYnMtbW9kYWwtaGVhZGVyLXBhZGRpbmcteSkpIGNhbGMoLS41ICogdmFyKC0tYnMtbW9kYWwtaGVhZGVyLXBhZGRpbmcteCkpIGNhbGMoLS41ICogdmFyKC0tYnMtbW9kYWwtaGVhZGVyLXBhZGRpbmcteSkpIGF1dG99Lm1vZGFsLXRpdGxle21hcmdpbi1ib3R0b206MDtsaW5lLWhlaWdodDp2YXIoLS1icy1tb2RhbC10aXRsZS1saW5lLWhlaWdodCl9Lm1vZGFsLWJvZHl7cG9zaXRpb246cmVsYXRpdmU7ZmxleDoxIDEgYXV0bztwYWRkaW5nOnZhcigtLWJzLW1vZGFsLXBhZGRpbmcpfS5tb2RhbC1mb290ZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtc2hyaW5rOjA7ZmxleC13cmFwOndyYXA7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDtwYWRkaW5nOmNhbGModmFyKC0tYnMtbW9kYWwtcGFkZGluZykgLSB2YXIoLS1icy1tb2RhbC1mb290ZXItZ2FwKSAqIC41KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLW1vZGFsLWZvb3Rlci1iZyk7Ym9yZGVyLXRvcDp2YXIoLS1icy1tb2RhbC1mb290ZXItYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1tb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1tb2RhbC1pbm5lci1ib3JkZXItcmFkaXVzKTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWJzLW1vZGFsLWlubmVyLWJvcmRlci1yYWRpdXMpfS5tb2RhbC1mb290ZXI+KnttYXJnaW46Y2FsYyh2YXIoLS1icy1tb2RhbC1mb290ZXItZ2FwKSAqIC41KX1AbWVkaWEgKG1pbi13aWR0aDo1NzZweCl7Lm1vZGFsey0tYnMtbW9kYWwtbWFyZ2luOjEuNzVyZW07LS1icy1tb2RhbC1ib3gtc2hhZG93OnZhcigtLWJzLWJveC1zaGFkb3cpfS5tb2RhbC1kaWFsb2d7bWF4LXdpZHRoOnZhcigtLWJzLW1vZGFsLXdpZHRoKTttYXJnaW4tcmlnaHQ6YXV0bzttYXJnaW4tbGVmdDphdXRvfS5tb2RhbC1zbXstLWJzLW1vZGFsLXdpZHRoOjMwMHB4fX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7Lm1vZGFsLWxnLC5tb2RhbC14bHstLWJzLW1vZGFsLXdpZHRoOjgwMHB4fX1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey5tb2RhbC14bHstLWJzLW1vZGFsLXdpZHRoOjExNDBweH19Lm1vZGFsLWZ1bGxzY3JlZW57d2lkdGg6MTAwdnc7bWF4LXdpZHRoOm5vbmU7aGVpZ2h0OjEwMCU7bWFyZ2luOjB9Lm1vZGFsLWZ1bGxzY3JlZW4gLm1vZGFsLWNvbnRlbnR7aGVpZ2h0OjEwMCU7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czowfS5tb2RhbC1mdWxsc2NyZWVuIC5tb2RhbC1mb290ZXIsLm1vZGFsLWZ1bGxzY3JlZW4gLm1vZGFsLWhlYWRlcntib3JkZXItcmFkaXVzOjB9Lm1vZGFsLWZ1bGxzY3JlZW4gLm1vZGFsLWJvZHl7b3ZlcmZsb3cteTphdXRvfUBtZWRpYSAobWF4LXdpZHRoOjU3NS45OHB4KXsubW9kYWwtZnVsbHNjcmVlbi1zbS1kb3due3dpZHRoOjEwMHZ3O21heC13aWR0aDpub25lO2hlaWdodDoxMDAlO21hcmdpbjowfS5tb2RhbC1mdWxsc2NyZWVuLXNtLWRvd24gLm1vZGFsLWNvbnRlbnR7aGVpZ2h0OjEwMCU7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czowfS5tb2RhbC1mdWxsc2NyZWVuLXNtLWRvd24gLm1vZGFsLWZvb3RlciwubW9kYWwtZnVsbHNjcmVlbi1zbS1kb3duIC5tb2RhbC1oZWFkZXJ7Ym9yZGVyLXJhZGl1czowfS5tb2RhbC1mdWxsc2NyZWVuLXNtLWRvd24gLm1vZGFsLWJvZHl7b3ZlcmZsb3cteTphdXRvfX1AbWVkaWEgKG1heC13aWR0aDo3NjcuOThweCl7Lm1vZGFsLWZ1bGxzY3JlZW4tbWQtZG93bnt3aWR0aDoxMDB2dzttYXgtd2lkdGg6bm9uZTtoZWlnaHQ6MTAwJTttYXJnaW46MH0ubW9kYWwtZnVsbHNjcmVlbi1tZC1kb3duIC5tb2RhbC1jb250ZW50e2hlaWdodDoxMDAlO2JvcmRlcjowO2JvcmRlci1yYWRpdXM6MH0ubW9kYWwtZnVsbHNjcmVlbi1tZC1kb3duIC5tb2RhbC1mb290ZXIsLm1vZGFsLWZ1bGxzY3JlZW4tbWQtZG93biAubW9kYWwtaGVhZGVye2JvcmRlci1yYWRpdXM6MH0ubW9kYWwtZnVsbHNjcmVlbi1tZC1kb3duIC5tb2RhbC1ib2R5e292ZXJmbG93LXk6YXV0b319QG1lZGlhIChtYXgtd2lkdGg6OTkxLjk4cHgpey5tb2RhbC1mdWxsc2NyZWVuLWxnLWRvd257d2lkdGg6MTAwdnc7bWF4LXdpZHRoOm5vbmU7aGVpZ2h0OjEwMCU7bWFyZ2luOjB9Lm1vZGFsLWZ1bGxzY3JlZW4tbGctZG93biAubW9kYWwtY29udGVudHtoZWlnaHQ6MTAwJTtib3JkZXI6MDtib3JkZXItcmFkaXVzOjB9Lm1vZGFsLWZ1bGxzY3JlZW4tbGctZG93biAubW9kYWwtZm9vdGVyLC5tb2RhbC1mdWxsc2NyZWVuLWxnLWRvd24gLm1vZGFsLWhlYWRlcntib3JkZXItcmFkaXVzOjB9Lm1vZGFsLWZ1bGxzY3JlZW4tbGctZG93biAubW9kYWwtYm9keXtvdmVyZmxvdy15OmF1dG99fUBtZWRpYSAobWF4LXdpZHRoOjExOTkuOThweCl7Lm1vZGFsLWZ1bGxzY3JlZW4teGwtZG93bnt3aWR0aDoxMDB2dzttYXgtd2lkdGg6bm9uZTtoZWlnaHQ6MTAwJTttYXJnaW46MH0ubW9kYWwtZnVsbHNjcmVlbi14bC1kb3duIC5tb2RhbC1jb250ZW50e2hlaWdodDoxMDAlO2JvcmRlcjowO2JvcmRlci1yYWRpdXM6MH0ubW9kYWwtZnVsbHNjcmVlbi14bC1kb3duIC5tb2RhbC1mb290ZXIsLm1vZGFsLWZ1bGxzY3JlZW4teGwtZG93biAubW9kYWwtaGVhZGVye2JvcmRlci1yYWRpdXM6MH0ubW9kYWwtZnVsbHNjcmVlbi14bC1kb3duIC5tb2RhbC1ib2R5e292ZXJmbG93LXk6YXV0b319QG1lZGlhIChtYXgtd2lkdGg6MTM5OS45OHB4KXsubW9kYWwtZnVsbHNjcmVlbi14eGwtZG93bnt3aWR0aDoxMDB2dzttYXgtd2lkdGg6bm9uZTtoZWlnaHQ6MTAwJTttYXJnaW46MH0ubW9kYWwtZnVsbHNjcmVlbi14eGwtZG93biAubW9kYWwtY29udGVudHtoZWlnaHQ6MTAwJTtib3JkZXI6MDtib3JkZXItcmFkaXVzOjB9Lm1vZGFsLWZ1bGxzY3JlZW4teHhsLWRvd24gLm1vZGFsLWZvb3RlciwubW9kYWwtZnVsbHNjcmVlbi14eGwtZG93biAubW9kYWwtaGVhZGVye2JvcmRlci1yYWRpdXM6MH0ubW9kYWwtZnVsbHNjcmVlbi14eGwtZG93biAubW9kYWwtYm9keXtvdmVyZmxvdy15OmF1dG99fS50b29sdGlwey0tYnMtdG9vbHRpcC16aW5kZXg6MTA4MDstLWJzLXRvb2x0aXAtbWF4LXdpZHRoOjIwMHB4Oy0tYnMtdG9vbHRpcC1wYWRkaW5nLXg6MC41cmVtOy0tYnMtdG9vbHRpcC1wYWRkaW5nLXk6MC4yNXJlbTstLWJzLXRvb2x0aXAtbWFyZ2luOiA7LS1icy10b29sdGlwLWZvbnQtc2l6ZTowLjg3NXJlbTstLWJzLXRvb2x0aXAtY29sb3I6dmFyKC0tYnMtYm9keS1iZyk7LS1icy10b29sdGlwLWJnOnZhcigtLWJzLWVtcGhhc2lzLWNvbG9yKTstLWJzLXRvb2x0aXAtYm9yZGVyLXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzKTstLWJzLXRvb2x0aXAtb3BhY2l0eTowLjk7LS1icy10b29sdGlwLWFycm93LXdpZHRoOjAuOHJlbTstLWJzLXRvb2x0aXAtYXJyb3ctaGVpZ2h0OjAuNHJlbTt6LWluZGV4OnZhcigtLWJzLXRvb2x0aXAtemluZGV4KTtkaXNwbGF5OmJsb2NrO21hcmdpbjp2YXIoLS1icy10b29sdGlwLW1hcmdpbik7Zm9udC1mYW1pbHk6dmFyKC0tYnMtZm9udC1zYW5zLXNlcmlmKTtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MS41O3RleHQtYWxpZ246bGVmdDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtc2hhZG93Om5vbmU7dGV4dC10cmFuc2Zvcm06bm9uZTtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1icmVhazpub3JtYWw7d2hpdGUtc3BhY2U6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7bGluZS1icmVhazphdXRvO2ZvbnQtc2l6ZTp2YXIoLS1icy10b29sdGlwLWZvbnQtc2l6ZSk7d29yZC13cmFwOmJyZWFrLXdvcmQ7b3BhY2l0eTowfS50b29sdGlwLnNob3d7b3BhY2l0eTp2YXIoLS1icy10b29sdGlwLW9wYWNpdHkpfS50b29sdGlwIC50b29sdGlwLWFycm93e2Rpc3BsYXk6YmxvY2s7d2lkdGg6dmFyKC0tYnMtdG9vbHRpcC1hcnJvdy13aWR0aCk7aGVpZ2h0OnZhcigtLWJzLXRvb2x0aXAtYXJyb3ctaGVpZ2h0KX0udG9vbHRpcCAudG9vbHRpcC1hcnJvdzo6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6IiI7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1zdHlsZTpzb2xpZH0uYnMtdG9vbHRpcC1hdXRvW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49dG9wXSAudG9vbHRpcC1hcnJvdywuYnMtdG9vbHRpcC10b3AgLnRvb2x0aXAtYXJyb3d7Ym90dG9tOmNhbGMoLTEgKiB2YXIoLS1icy10b29sdGlwLWFycm93LWhlaWdodCkpfS5icy10b29sdGlwLWF1dG9bZGF0YS1wb3BwZXItcGxhY2VtZW50Xj10b3BdIC50b29sdGlwLWFycm93OjpiZWZvcmUsLmJzLXRvb2x0aXAtdG9wIC50b29sdGlwLWFycm93OjpiZWZvcmV7dG9wOi0xcHg7Ym9yZGVyLXdpZHRoOnZhcigtLWJzLXRvb2x0aXAtYXJyb3ctaGVpZ2h0KSBjYWxjKHZhcigtLWJzLXRvb2x0aXAtYXJyb3ctd2lkdGgpICogLjUpIDA7Ym9yZGVyLXRvcC1jb2xvcjp2YXIoLS1icy10b29sdGlwLWJnKX0uYnMtdG9vbHRpcC1hdXRvW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49cmlnaHRdIC50b29sdGlwLWFycm93LC5icy10b29sdGlwLWVuZCAudG9vbHRpcC1hcnJvd3tsZWZ0OmNhbGMoLTEgKiB2YXIoLS1icy10b29sdGlwLWFycm93LWhlaWdodCkpO3dpZHRoOnZhcigtLWJzLXRvb2x0aXAtYXJyb3ctaGVpZ2h0KTtoZWlnaHQ6dmFyKC0tYnMtdG9vbHRpcC1hcnJvdy13aWR0aCl9LmJzLXRvb2x0aXAtYXV0b1tkYXRhLXBvcHBlci1wbGFjZW1lbnRePXJpZ2h0XSAudG9vbHRpcC1hcnJvdzo6YmVmb3JlLC5icy10b29sdGlwLWVuZCAudG9vbHRpcC1hcnJvdzo6YmVmb3Jle3JpZ2h0Oi0xcHg7Ym9yZGVyLXdpZHRoOmNhbGModmFyKC0tYnMtdG9vbHRpcC1hcnJvdy13aWR0aCkgKiAuNSkgdmFyKC0tYnMtdG9vbHRpcC1hcnJvdy1oZWlnaHQpIGNhbGModmFyKC0tYnMtdG9vbHRpcC1hcnJvdy13aWR0aCkgKiAuNSkgMDtib3JkZXItcmlnaHQtY29sb3I6dmFyKC0tYnMtdG9vbHRpcC1iZyl9LmJzLXRvb2x0aXAtYXV0b1tkYXRhLXBvcHBlci1wbGFjZW1lbnRePWJvdHRvbV0gLnRvb2x0aXAtYXJyb3csLmJzLXRvb2x0aXAtYm90dG9tIC50b29sdGlwLWFycm93e3RvcDpjYWxjKC0xICogdmFyKC0tYnMtdG9vbHRpcC1hcnJvdy1oZWlnaHQpKX0uYnMtdG9vbHRpcC1hdXRvW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49Ym90dG9tXSAudG9vbHRpcC1hcnJvdzo6YmVmb3JlLC5icy10b29sdGlwLWJvdHRvbSAudG9vbHRpcC1hcnJvdzo6YmVmb3Jle2JvdHRvbTotMXB4O2JvcmRlci13aWR0aDowIGNhbGModmFyKC0tYnMtdG9vbHRpcC1hcnJvdy13aWR0aCkgKiAuNSkgdmFyKC0tYnMtdG9vbHRpcC1hcnJvdy1oZWlnaHQpO2JvcmRlci1ib3R0b20tY29sb3I6dmFyKC0tYnMtdG9vbHRpcC1iZyl9LmJzLXRvb2x0aXAtYXV0b1tkYXRhLXBvcHBlci1wbGFjZW1lbnRePWxlZnRdIC50b29sdGlwLWFycm93LC5icy10b29sdGlwLXN0YXJ0IC50b29sdGlwLWFycm93e3JpZ2h0OmNhbGMoLTEgKiB2YXIoLS1icy10b29sdGlwLWFycm93LWhlaWdodCkpO3dpZHRoOnZhcigtLWJzLXRvb2x0aXAtYXJyb3ctaGVpZ2h0KTtoZWlnaHQ6dmFyKC0tYnMtdG9vbHRpcC1hcnJvdy13aWR0aCl9LmJzLXRvb2x0aXAtYXV0b1tkYXRhLXBvcHBlci1wbGFjZW1lbnRePWxlZnRdIC50b29sdGlwLWFycm93OjpiZWZvcmUsLmJzLXRvb2x0aXAtc3RhcnQgLnRvb2x0aXAtYXJyb3c6OmJlZm9yZXtsZWZ0Oi0xcHg7Ym9yZGVyLXdpZHRoOmNhbGModmFyKC0tYnMtdG9vbHRpcC1hcnJvdy13aWR0aCkgKiAuNSkgMCBjYWxjKHZhcigtLWJzLXRvb2x0aXAtYXJyb3ctd2lkdGgpICogLjUpIHZhcigtLWJzLXRvb2x0aXAtYXJyb3ctaGVpZ2h0KTtib3JkZXItbGVmdC1jb2xvcjp2YXIoLS1icy10b29sdGlwLWJnKX0udG9vbHRpcC1pbm5lcnttYXgtd2lkdGg6dmFyKC0tYnMtdG9vbHRpcC1tYXgtd2lkdGgpO3BhZGRpbmc6dmFyKC0tYnMtdG9vbHRpcC1wYWRkaW5nLXkpIHZhcigtLWJzLXRvb2x0aXAtcGFkZGluZy14KTtjb2xvcjp2YXIoLS1icy10b29sdGlwLWNvbG9yKTt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLXRvb2x0aXAtYmcpO2JvcmRlci1yYWRpdXM6dmFyKC0tYnMtdG9vbHRpcC1ib3JkZXItcmFkaXVzKX0ucG9wb3ZlcnstLWJzLXBvcG92ZXItemluZGV4OjEwNzA7LS1icy1wb3BvdmVyLW1heC13aWR0aDoyNzZweDstLWJzLXBvcG92ZXItZm9udC1zaXplOjAuODc1cmVtOy0tYnMtcG9wb3Zlci1iZzp2YXIoLS1icy1ib2R5LWJnKTstLWJzLXBvcG92ZXItYm9yZGVyLXdpZHRoOnZhcigtLWJzLWJvcmRlci13aWR0aCk7LS1icy1wb3BvdmVyLWJvcmRlci1jb2xvcjp2YXIoLS1icy1ib3JkZXItY29sb3ItdHJhbnNsdWNlbnQpOy0tYnMtcG9wb3Zlci1ib3JkZXItcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtbGcpOy0tYnMtcG9wb3Zlci1pbm5lci1ib3JkZXItcmFkaXVzOmNhbGModmFyKC0tYnMtYm9yZGVyLXJhZGl1cy1sZykgLSB2YXIoLS1icy1ib3JkZXItd2lkdGgpKTstLWJzLXBvcG92ZXItYm94LXNoYWRvdzp2YXIoLS1icy1ib3gtc2hhZG93KTstLWJzLXBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDoxcmVtOy0tYnMtcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OjAuNXJlbTstLWJzLXBvcG92ZXItaGVhZGVyLWZvbnQtc2l6ZToxcmVtOy0tYnMtcG9wb3Zlci1oZWFkZXItY29sb3I6aW5oZXJpdDstLWJzLXBvcG92ZXItaGVhZGVyLWJnOnZhcigtLWJzLXNlY29uZGFyeS1iZyk7LS1icy1wb3BvdmVyLWJvZHktcGFkZGluZy14OjFyZW07LS1icy1wb3BvdmVyLWJvZHktcGFkZGluZy15OjFyZW07LS1icy1wb3BvdmVyLWJvZHktY29sb3I6dmFyKC0tYnMtYm9keS1jb2xvcik7LS1icy1wb3BvdmVyLWFycm93LXdpZHRoOjFyZW07LS1icy1wb3BvdmVyLWFycm93LWhlaWdodDowLjVyZW07LS1icy1wb3BvdmVyLWFycm93LWJvcmRlcjp2YXIoLS1icy1wb3BvdmVyLWJvcmRlci1jb2xvcik7ei1pbmRleDp2YXIoLS1icy1wb3BvdmVyLXppbmRleCk7ZGlzcGxheTpibG9jazttYXgtd2lkdGg6dmFyKC0tYnMtcG9wb3Zlci1tYXgtd2lkdGgpO2ZvbnQtZmFtaWx5OnZhcigtLWJzLWZvbnQtc2Fucy1zZXJpZik7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuNTt0ZXh0LWFsaWduOmxlZnQ7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LXNoYWRvdzpub25lO3RleHQtdHJhbnNmb3JtOm5vbmU7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtYnJlYWs6bm9ybWFsO3doaXRlLXNwYWNlOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO2xpbmUtYnJlYWs6YXV0bztmb250LXNpemU6dmFyKC0tYnMtcG9wb3Zlci1mb250LXNpemUpO3dvcmQtd3JhcDpicmVhay13b3JkO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtcG9wb3Zlci1iZyk7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O2JvcmRlcjp2YXIoLS1icy1wb3BvdmVyLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtcG9wb3Zlci1ib3JkZXItY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tYnMtcG9wb3Zlci1ib3JkZXItcmFkaXVzKX0ucG9wb3ZlciAucG9wb3Zlci1hcnJvd3tkaXNwbGF5OmJsb2NrO3dpZHRoOnZhcigtLWJzLXBvcG92ZXItYXJyb3ctd2lkdGgpO2hlaWdodDp2YXIoLS1icy1wb3BvdmVyLWFycm93LWhlaWdodCl9LnBvcG92ZXIgLnBvcG92ZXItYXJyb3c6OmFmdGVyLC5wb3BvdmVyIC5wb3BvdmVyLWFycm93OjpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jaztjb250ZW50OiIiO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjB9LmJzLXBvcG92ZXItYXV0b1tkYXRhLXBvcHBlci1wbGFjZW1lbnRePXRvcF0+LnBvcG92ZXItYXJyb3csLmJzLXBvcG92ZXItdG9wPi5wb3BvdmVyLWFycm93e2JvdHRvbTpjYWxjKC0xICogKHZhcigtLWJzLXBvcG92ZXItYXJyb3ctaGVpZ2h0KSkgLSB2YXIoLS1icy1wb3BvdmVyLWJvcmRlci13aWR0aCkpfS5icy1wb3BvdmVyLWF1dG9bZGF0YS1wb3BwZXItcGxhY2VtZW50Xj10b3BdPi5wb3BvdmVyLWFycm93OjphZnRlciwuYnMtcG9wb3Zlci1hdXRvW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49dG9wXT4ucG9wb3Zlci1hcnJvdzo6YmVmb3JlLC5icy1wb3BvdmVyLXRvcD4ucG9wb3Zlci1hcnJvdzo6YWZ0ZXIsLmJzLXBvcG92ZXItdG9wPi5wb3BvdmVyLWFycm93OjpiZWZvcmV7Ym9yZGVyLXdpZHRoOnZhcigtLWJzLXBvcG92ZXItYXJyb3ctaGVpZ2h0KSBjYWxjKHZhcigtLWJzLXBvcG92ZXItYXJyb3ctd2lkdGgpICogLjUpIDB9LmJzLXBvcG92ZXItYXV0b1tkYXRhLXBvcHBlci1wbGFjZW1lbnRePXRvcF0+LnBvcG92ZXItYXJyb3c6OmJlZm9yZSwuYnMtcG9wb3Zlci10b3A+LnBvcG92ZXItYXJyb3c6OmJlZm9yZXtib3R0b206MDtib3JkZXItdG9wLWNvbG9yOnZhcigtLWJzLXBvcG92ZXItYXJyb3ctYm9yZGVyKX0uYnMtcG9wb3Zlci1hdXRvW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49dG9wXT4ucG9wb3Zlci1hcnJvdzo6YWZ0ZXIsLmJzLXBvcG92ZXItdG9wPi5wb3BvdmVyLWFycm93OjphZnRlcntib3R0b206dmFyKC0tYnMtcG9wb3Zlci1ib3JkZXItd2lkdGgpO2JvcmRlci10b3AtY29sb3I6dmFyKC0tYnMtcG9wb3Zlci1iZyl9LmJzLXBvcG92ZXItYXV0b1tkYXRhLXBvcHBlci1wbGFjZW1lbnRePXJpZ2h0XT4ucG9wb3Zlci1hcnJvdywuYnMtcG9wb3Zlci1lbmQ+LnBvcG92ZXItYXJyb3d7bGVmdDpjYWxjKC0xICogKHZhcigtLWJzLXBvcG92ZXItYXJyb3ctaGVpZ2h0KSkgLSB2YXIoLS1icy1wb3BvdmVyLWJvcmRlci13aWR0aCkpO3dpZHRoOnZhcigtLWJzLXBvcG92ZXItYXJyb3ctaGVpZ2h0KTtoZWlnaHQ6dmFyKC0tYnMtcG9wb3Zlci1hcnJvdy13aWR0aCl9LmJzLXBvcG92ZXItYXV0b1tkYXRhLXBvcHBlci1wbGFjZW1lbnRePXJpZ2h0XT4ucG9wb3Zlci1hcnJvdzo6YWZ0ZXIsLmJzLXBvcG92ZXItYXV0b1tkYXRhLXBvcHBlci1wbGFjZW1lbnRePXJpZ2h0XT4ucG9wb3Zlci1hcnJvdzo6YmVmb3JlLC5icy1wb3BvdmVyLWVuZD4ucG9wb3Zlci1hcnJvdzo6YWZ0ZXIsLmJzLXBvcG92ZXItZW5kPi5wb3BvdmVyLWFycm93OjpiZWZvcmV7Ym9yZGVyLXdpZHRoOmNhbGModmFyKC0tYnMtcG9wb3Zlci1hcnJvdy13aWR0aCkgKiAuNSkgdmFyKC0tYnMtcG9wb3Zlci1hcnJvdy1oZWlnaHQpIGNhbGModmFyKC0tYnMtcG9wb3Zlci1hcnJvdy13aWR0aCkgKiAuNSkgMH0uYnMtcG9wb3Zlci1hdXRvW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49cmlnaHRdPi5wb3BvdmVyLWFycm93OjpiZWZvcmUsLmJzLXBvcG92ZXItZW5kPi5wb3BvdmVyLWFycm93OjpiZWZvcmV7bGVmdDowO2JvcmRlci1yaWdodC1jb2xvcjp2YXIoLS1icy1wb3BvdmVyLWFycm93LWJvcmRlcil9LmJzLXBvcG92ZXItYXV0b1tkYXRhLXBvcHBlci1wbGFjZW1lbnRePXJpZ2h0XT4ucG9wb3Zlci1hcnJvdzo6YWZ0ZXIsLmJzLXBvcG92ZXItZW5kPi5wb3BvdmVyLWFycm93OjphZnRlcntsZWZ0OnZhcigtLWJzLXBvcG92ZXItYm9yZGVyLXdpZHRoKTtib3JkZXItcmlnaHQtY29sb3I6dmFyKC0tYnMtcG9wb3Zlci1iZyl9LmJzLXBvcG92ZXItYXV0b1tkYXRhLXBvcHBlci1wbGFjZW1lbnRePWJvdHRvbV0+LnBvcG92ZXItYXJyb3csLmJzLXBvcG92ZXItYm90dG9tPi5wb3BvdmVyLWFycm93e3RvcDpjYWxjKC0xICogKHZhcigtLWJzLXBvcG92ZXItYXJyb3ctaGVpZ2h0KSkgLSB2YXIoLS1icy1wb3BvdmVyLWJvcmRlci13aWR0aCkpfS5icy1wb3BvdmVyLWF1dG9bZGF0YS1wb3BwZXItcGxhY2VtZW50Xj1ib3R0b21dPi5wb3BvdmVyLWFycm93OjphZnRlciwuYnMtcG9wb3Zlci1hdXRvW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49Ym90dG9tXT4ucG9wb3Zlci1hcnJvdzo6YmVmb3JlLC5icy1wb3BvdmVyLWJvdHRvbT4ucG9wb3Zlci1hcnJvdzo6YWZ0ZXIsLmJzLXBvcG92ZXItYm90dG9tPi5wb3BvdmVyLWFycm93OjpiZWZvcmV7Ym9yZGVyLXdpZHRoOjAgY2FsYyh2YXIoLS1icy1wb3BvdmVyLWFycm93LXdpZHRoKSAqIC41KSB2YXIoLS1icy1wb3BvdmVyLWFycm93LWhlaWdodCl9LmJzLXBvcG92ZXItYXV0b1tkYXRhLXBvcHBlci1wbGFjZW1lbnRePWJvdHRvbV0+LnBvcG92ZXItYXJyb3c6OmJlZm9yZSwuYnMtcG9wb3Zlci1ib3R0b20+LnBvcG92ZXItYXJyb3c6OmJlZm9yZXt0b3A6MDtib3JkZXItYm90dG9tLWNvbG9yOnZhcigtLWJzLXBvcG92ZXItYXJyb3ctYm9yZGVyKX0uYnMtcG9wb3Zlci1hdXRvW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49Ym90dG9tXT4ucG9wb3Zlci1hcnJvdzo6YWZ0ZXIsLmJzLXBvcG92ZXItYm90dG9tPi5wb3BvdmVyLWFycm93OjphZnRlcnt0b3A6dmFyKC0tYnMtcG9wb3Zlci1ib3JkZXItd2lkdGgpO2JvcmRlci1ib3R0b20tY29sb3I6dmFyKC0tYnMtcG9wb3Zlci1iZyl9LmJzLXBvcG92ZXItYXV0b1tkYXRhLXBvcHBlci1wbGFjZW1lbnRePWJvdHRvbV0gLnBvcG92ZXItaGVhZGVyOjpiZWZvcmUsLmJzLXBvcG92ZXItYm90dG9tIC5wb3BvdmVyLWhlYWRlcjo6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6NTAlO2Rpc3BsYXk6YmxvY2s7d2lkdGg6dmFyKC0tYnMtcG9wb3Zlci1hcnJvdy13aWR0aCk7bWFyZ2luLWxlZnQ6Y2FsYygtLjUgKiB2YXIoLS1icy1wb3BvdmVyLWFycm93LXdpZHRoKSk7Y29udGVudDoiIjtib3JkZXItYm90dG9tOnZhcigtLWJzLXBvcG92ZXItYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1wb3BvdmVyLWhlYWRlci1iZyl9LmJzLXBvcG92ZXItYXV0b1tkYXRhLXBvcHBlci1wbGFjZW1lbnRePWxlZnRdPi5wb3BvdmVyLWFycm93LC5icy1wb3BvdmVyLXN0YXJ0Pi5wb3BvdmVyLWFycm93e3JpZ2h0OmNhbGMoLTEgKiAodmFyKC0tYnMtcG9wb3Zlci1hcnJvdy1oZWlnaHQpKSAtIHZhcigtLWJzLXBvcG92ZXItYm9yZGVyLXdpZHRoKSk7d2lkdGg6dmFyKC0tYnMtcG9wb3Zlci1hcnJvdy1oZWlnaHQpO2hlaWdodDp2YXIoLS1icy1wb3BvdmVyLWFycm93LXdpZHRoKX0uYnMtcG9wb3Zlci1hdXRvW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49bGVmdF0+LnBvcG92ZXItYXJyb3c6OmFmdGVyLC5icy1wb3BvdmVyLWF1dG9bZGF0YS1wb3BwZXItcGxhY2VtZW50Xj1sZWZ0XT4ucG9wb3Zlci1hcnJvdzo6YmVmb3JlLC5icy1wb3BvdmVyLXN0YXJ0Pi5wb3BvdmVyLWFycm93OjphZnRlciwuYnMtcG9wb3Zlci1zdGFydD4ucG9wb3Zlci1hcnJvdzo6YmVmb3Jle2JvcmRlci13aWR0aDpjYWxjKHZhcigtLWJzLXBvcG92ZXItYXJyb3ctd2lkdGgpICogLjUpIDAgY2FsYyh2YXIoLS1icy1wb3BvdmVyLWFycm93LXdpZHRoKSAqIC41KSB2YXIoLS1icy1wb3BvdmVyLWFycm93LWhlaWdodCl9LmJzLXBvcG92ZXItYXV0b1tkYXRhLXBvcHBlci1wbGFjZW1lbnRePWxlZnRdPi5wb3BvdmVyLWFycm93OjpiZWZvcmUsLmJzLXBvcG92ZXItc3RhcnQ+LnBvcG92ZXItYXJyb3c6OmJlZm9yZXtyaWdodDowO2JvcmRlci1sZWZ0LWNvbG9yOnZhcigtLWJzLXBvcG92ZXItYXJyb3ctYm9yZGVyKX0uYnMtcG9wb3Zlci1hdXRvW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49bGVmdF0+LnBvcG92ZXItYXJyb3c6OmFmdGVyLC5icy1wb3BvdmVyLXN0YXJ0Pi5wb3BvdmVyLWFycm93OjphZnRlcntyaWdodDp2YXIoLS1icy1wb3BvdmVyLWJvcmRlci13aWR0aCk7Ym9yZGVyLWxlZnQtY29sb3I6dmFyKC0tYnMtcG9wb3Zlci1iZyl9LnBvcG92ZXItaGVhZGVye3BhZGRpbmc6dmFyKC0tYnMtcG9wb3Zlci1oZWFkZXItcGFkZGluZy15KSB2YXIoLS1icy1wb3BvdmVyLWhlYWRlci1wYWRkaW5nLXgpO21hcmdpbi1ib3R0b206MDtmb250LXNpemU6dmFyKC0tYnMtcG9wb3Zlci1oZWFkZXItZm9udC1zaXplKTtjb2xvcjp2YXIoLS1icy1wb3BvdmVyLWhlYWRlci1jb2xvcik7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1wb3BvdmVyLWhlYWRlci1iZyk7Ym9yZGVyLWJvdHRvbTp2YXIoLS1icy1wb3BvdmVyLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtcG9wb3Zlci1ib3JkZXItY29sb3IpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tYnMtcG9wb3Zlci1pbm5lci1ib3JkZXItcmFkaXVzKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1wb3BvdmVyLWlubmVyLWJvcmRlci1yYWRpdXMpfS5wb3BvdmVyLWhlYWRlcjplbXB0eXtkaXNwbGF5Om5vbmV9LnBvcG92ZXItYm9keXtwYWRkaW5nOnZhcigtLWJzLXBvcG92ZXItYm9keS1wYWRkaW5nLXkpIHZhcigtLWJzLXBvcG92ZXItYm9keS1wYWRkaW5nLXgpO2NvbG9yOnZhcigtLWJzLXBvcG92ZXItYm9keS1jb2xvcil9LmNhcm91c2Vse3Bvc2l0aW9uOnJlbGF0aXZlfS5jYXJvdXNlbC5wb2ludGVyLWV2ZW50e3RvdWNoLWFjdGlvbjpwYW4teX0uY2Fyb3VzZWwtaW5uZXJ7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW59LmNhcm91c2VsLWlubmVyOjphZnRlcntkaXNwbGF5OmJsb2NrO2NsZWFyOmJvdGg7Y29udGVudDoiIn0uY2Fyb3VzZWwtaXRlbXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5Om5vbmU7ZmxvYXQ6bGVmdDt3aWR0aDoxMDAlO21hcmdpbi1yaWdodDotMTAwJTstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO3RyYW5zaXRpb246dHJhbnNmb3JtIC42cyBlYXNlLWluLW91dH1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKXsuY2Fyb3VzZWwtaXRlbXt0cmFuc2l0aW9uOm5vbmV9fS5jYXJvdXNlbC1pdGVtLW5leHQsLmNhcm91c2VsLWl0ZW0tcHJldiwuY2Fyb3VzZWwtaXRlbS5hY3RpdmV7ZGlzcGxheTpibG9ja30uYWN0aXZlLmNhcm91c2VsLWl0ZW0tZW5kLC5jYXJvdXNlbC1pdGVtLW5leHQ6bm90KC5jYXJvdXNlbC1pdGVtLXN0YXJ0KXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgxMDAlKX0uYWN0aXZlLmNhcm91c2VsLWl0ZW0tc3RhcnQsLmNhcm91c2VsLWl0ZW0tcHJldjpub3QoLmNhcm91c2VsLWl0ZW0tZW5kKXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwJSl9LmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWl0ZW17b3BhY2l0eTowO3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eTt0cmFuc2Zvcm06bm9uZX0uY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaXRlbS1uZXh0LmNhcm91c2VsLWl0ZW0tc3RhcnQsLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLWVuZCwuY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaXRlbS5hY3RpdmV7ei1pbmRleDoxO29wYWNpdHk6MX0uY2Fyb3VzZWwtZmFkZSAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tZW5kLC5jYXJvdXNlbC1mYWRlIC5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1zdGFydHt6LWluZGV4OjA7b3BhY2l0eTowO3RyYW5zaXRpb246b3BhY2l0eSAwcyAuNnN9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSl7LmNhcm91c2VsLWZhZGUgLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLWVuZCwuY2Fyb3VzZWwtZmFkZSAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tc3RhcnR7dHJhbnNpdGlvbjpub25lfX0uY2Fyb3VzZWwtY29udHJvbC1uZXh0LC5jYXJvdXNlbC1jb250cm9sLXByZXZ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7ei1pbmRleDoxO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxNSU7cGFkZGluZzowO2NvbG9yOiNmZmY7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZDowIDA7Ym9yZGVyOjA7b3BhY2l0eTouNTt0cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBlYXNlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5jYXJvdXNlbC1jb250cm9sLW5leHQsLmNhcm91c2VsLWNvbnRyb2wtcHJldnt0cmFuc2l0aW9uOm5vbmV9fS5jYXJvdXNlbC1jb250cm9sLW5leHQ6Zm9jdXMsLmNhcm91c2VsLWNvbnRyb2wtbmV4dDpob3ZlciwuY2Fyb3VzZWwtY29udHJvbC1wcmV2OmZvY3VzLC5jYXJvdXNlbC1jb250cm9sLXByZXY6aG92ZXJ7Y29sb3I6I2ZmZjt0ZXh0LWRlY29yYXRpb246bm9uZTtvdXRsaW5lOjA7b3BhY2l0eTouOX0uY2Fyb3VzZWwtY29udHJvbC1wcmV2e2xlZnQ6MH0uY2Fyb3VzZWwtY29udHJvbC1uZXh0e3JpZ2h0OjB9LmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbntkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoycmVtO2hlaWdodDoycmVtO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJTtiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlfS5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbntiYWNrZ3JvdW5kLWltYWdlOnVybCgiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nJTIzZmZmJyUzZSUzY3BhdGggZD0nTTExLjM1NCAxLjY0NmEuNS41IDAgMCAxIDAgLjcwOEw1LjcwNyA4bDUuNjQ3IDUuNjQ2YS41LjUgMCAwIDEtLjcwOC43MDhsLTYtNmEuNS41IDAgMCAxIDAtLjcwOGw2LTZhLjUuNSAwIDAgMSAuNzA4IDB6Jy8lM2UlM2Mvc3ZnJTNlIil9LmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29ue2JhY2tncm91bmQtaW1hZ2U6dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPSclMjNmZmYnJTNlJTNjcGF0aCBkPSdNNC42NDYgMS42NDZhLjUuNSAwIDAgMSAuNzA4IDBsNiA2YS41LjUgMCAwIDEgMCAuNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTAuMjkzIDggNC42NDYgMi4zNTRhLjUuNSAwIDAgMSAwLS43MDh6Jy8lM2UlM2Mvc3ZnJTNlIil9LmNhcm91c2VsLWluZGljYXRvcnN7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ei1pbmRleDoyO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6MDttYXJnaW4tcmlnaHQ6MTUlO21hcmdpbi1ib3R0b206MXJlbTttYXJnaW4tbGVmdDoxNSV9LmNhcm91c2VsLWluZGljYXRvcnMgW2RhdGEtYnMtdGFyZ2V0XXtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2ZsZXg6MCAxIGF1dG87d2lkdGg6MzBweDtoZWlnaHQ6M3B4O3BhZGRpbmc6MDttYXJnaW4tcmlnaHQ6M3B4O21hcmdpbi1sZWZ0OjNweDt0ZXh0LWluZGVudDotOTk5cHg7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtib3JkZXI6MDtib3JkZXItdG9wOjEwcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbToxMHB4IHNvbGlkIHRyYW5zcGFyZW50O29wYWNpdHk6LjU7dHJhbnNpdGlvbjpvcGFjaXR5IC42cyBlYXNlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5jYXJvdXNlbC1pbmRpY2F0b3JzIFtkYXRhLWJzLXRhcmdldF17dHJhbnNpdGlvbjpub25lfX0uY2Fyb3VzZWwtaW5kaWNhdG9ycyAuYWN0aXZle29wYWNpdHk6MX0uY2Fyb3VzZWwtY2FwdGlvbntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDoxNSU7Ym90dG9tOjEuMjVyZW07bGVmdDoxNSU7cGFkZGluZy10b3A6MS4yNXJlbTtwYWRkaW5nLWJvdHRvbToxLjI1cmVtO2NvbG9yOiNmZmY7dGV4dC1hbGlnbjpjZW50ZXJ9LmNhcm91c2VsLWRhcmsgLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLC5jYXJvdXNlbC1kYXJrIC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbntmaWx0ZXI6aW52ZXJ0KDEpIGdyYXlzY2FsZSgxMDApfS5jYXJvdXNlbC1kYXJrIC5jYXJvdXNlbC1pbmRpY2F0b3JzIFtkYXRhLWJzLXRhcmdldF17YmFja2dyb3VuZC1jb2xvcjojMDAwfS5jYXJvdXNlbC1kYXJrIC5jYXJvdXNlbC1jYXB0aW9ue2NvbG9yOiMwMDB9W2RhdGEtYnMtdGhlbWU9ZGFya10gLmNhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbixbZGF0YS1icy10aGVtZT1kYXJrXSAuY2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLFtkYXRhLWJzLXRoZW1lPWRhcmtdLmNhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbixbZGF0YS1icy10aGVtZT1kYXJrXS5jYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb257ZmlsdGVyOmludmVydCgxKSBncmF5c2NhbGUoMTAwKX1bZGF0YS1icy10aGVtZT1kYXJrXSAuY2Fyb3VzZWwgLmNhcm91c2VsLWluZGljYXRvcnMgW2RhdGEtYnMtdGFyZ2V0XSxbZGF0YS1icy10aGVtZT1kYXJrXS5jYXJvdXNlbCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBbZGF0YS1icy10YXJnZXRde2JhY2tncm91bmQtY29sb3I6IzAwMH1bZGF0YS1icy10aGVtZT1kYXJrXSAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24sW2RhdGEtYnMtdGhlbWU9ZGFya10uY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb257Y29sb3I6IzAwMH0uc3Bpbm5lci1ib3JkZXIsLnNwaW5uZXItZ3Jvd3tkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDp2YXIoLS1icy1zcGlubmVyLXdpZHRoKTtoZWlnaHQ6dmFyKC0tYnMtc3Bpbm5lci1oZWlnaHQpO3ZlcnRpY2FsLWFsaWduOnZhcigtLWJzLXNwaW5uZXItdmVydGljYWwtYWxpZ24pO2JvcmRlci1yYWRpdXM6NTAlO2FuaW1hdGlvbjp2YXIoLS1icy1zcGlubmVyLWFuaW1hdGlvbi1zcGVlZCkgbGluZWFyIGluZmluaXRlIHZhcigtLWJzLXNwaW5uZXItYW5pbWF0aW9uLW5hbWUpfUBrZXlmcmFtZXMgc3Bpbm5lci1ib3JkZXJ7dG97dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0uc3Bpbm5lci1ib3JkZXJ7LS1icy1zcGlubmVyLXdpZHRoOjJyZW07LS1icy1zcGlubmVyLWhlaWdodDoycmVtOy0tYnMtc3Bpbm5lci12ZXJ0aWNhbC1hbGlnbjotMC4xMjVlbTstLWJzLXNwaW5uZXItYm9yZGVyLXdpZHRoOjAuMjVlbTstLWJzLXNwaW5uZXItYW5pbWF0aW9uLXNwZWVkOjAuNzVzOy0tYnMtc3Bpbm5lci1hbmltYXRpb24tbmFtZTpzcGlubmVyLWJvcmRlcjtib3JkZXI6dmFyKC0tYnMtc3Bpbm5lci1ib3JkZXItd2lkdGgpIHNvbGlkIGN1cnJlbnRjb2xvcjtib3JkZXItcmlnaHQtY29sb3I6dHJhbnNwYXJlbnR9LnNwaW5uZXItYm9yZGVyLXNtey0tYnMtc3Bpbm5lci13aWR0aDoxcmVtOy0tYnMtc3Bpbm5lci1oZWlnaHQ6MXJlbTstLWJzLXNwaW5uZXItYm9yZGVyLXdpZHRoOjAuMmVtfUBrZXlmcmFtZXMgc3Bpbm5lci1ncm93ezAle3RyYW5zZm9ybTpzY2FsZSgwKX01MCV7b3BhY2l0eToxO3RyYW5zZm9ybTpub25lfX0uc3Bpbm5lci1ncm93ey0tYnMtc3Bpbm5lci13aWR0aDoycmVtOy0tYnMtc3Bpbm5lci1oZWlnaHQ6MnJlbTstLWJzLXNwaW5uZXItdmVydGljYWwtYWxpZ246LTAuMTI1ZW07LS1icy1zcGlubmVyLWFuaW1hdGlvbi1zcGVlZDowLjc1czstLWJzLXNwaW5uZXItYW5pbWF0aW9uLW5hbWU6c3Bpbm5lci1ncm93O2JhY2tncm91bmQtY29sb3I6Y3VycmVudGNvbG9yO29wYWNpdHk6MH0uc3Bpbm5lci1ncm93LXNtey0tYnMtc3Bpbm5lci13aWR0aDoxcmVtOy0tYnMtc3Bpbm5lci1oZWlnaHQ6MXJlbX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKXsuc3Bpbm5lci1ib3JkZXIsLnNwaW5uZXItZ3Jvd3stLWJzLXNwaW5uZXItYW5pbWF0aW9uLXNwZWVkOjEuNXN9fS5vZmZjYW52YXMsLm9mZmNhbnZhcy1sZywub2ZmY2FudmFzLW1kLC5vZmZjYW52YXMtc20sLm9mZmNhbnZhcy14bCwub2ZmY2FudmFzLXh4bHstLWJzLW9mZmNhbnZhcy16aW5kZXg6MTA0NTstLWJzLW9mZmNhbnZhcy13aWR0aDo0MDBweDstLWJzLW9mZmNhbnZhcy1oZWlnaHQ6MzB2aDstLWJzLW9mZmNhbnZhcy1wYWRkaW5nLXg6MXJlbTstLWJzLW9mZmNhbnZhcy1wYWRkaW5nLXk6MXJlbTstLWJzLW9mZmNhbnZhcy1jb2xvcjp2YXIoLS1icy1ib2R5LWNvbG9yKTstLWJzLW9mZmNhbnZhcy1iZzp2YXIoLS1icy1ib2R5LWJnKTstLWJzLW9mZmNhbnZhcy1ib3JkZXItd2lkdGg6dmFyKC0tYnMtYm9yZGVyLXdpZHRoKTstLWJzLW9mZmNhbnZhcy1ib3JkZXItY29sb3I6dmFyKC0tYnMtYm9yZGVyLWNvbG9yLXRyYW5zbHVjZW50KTstLWJzLW9mZmNhbnZhcy1ib3gtc2hhZG93OnZhcigtLWJzLWJveC1zaGFkb3ctc20pOy0tYnMtb2ZmY2FudmFzLXRyYW5zaXRpb246dHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7LS1icy1vZmZjYW52YXMtdGl0bGUtbGluZS1oZWlnaHQ6MS41fUBtZWRpYSAobWF4LXdpZHRoOjU3NS45OHB4KXsub2ZmY2FudmFzLXNte3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTowO3otaW5kZXg6dmFyKC0tYnMtb2ZmY2FudmFzLXppbmRleCk7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXgtd2lkdGg6MTAwJTtjb2xvcjp2YXIoLS1icy1vZmZjYW52YXMtY29sb3IpO3Zpc2liaWxpdHk6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtb2ZmY2FudmFzLWJnKTtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7b3V0bGluZTowO3RyYW5zaXRpb246dmFyKC0tYnMtb2ZmY2FudmFzLXRyYW5zaXRpb24pfX1AbWVkaWEgKG1heC13aWR0aDo1NzUuOThweCkgYW5kIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSl7Lm9mZmNhbnZhcy1zbXt0cmFuc2l0aW9uOm5vbmV9fUBtZWRpYSAobWF4LXdpZHRoOjU3NS45OHB4KXsub2ZmY2FudmFzLXNtLm9mZmNhbnZhcy1zdGFydHt0b3A6MDtsZWZ0OjA7d2lkdGg6dmFyKC0tYnMtb2ZmY2FudmFzLXdpZHRoKTtib3JkZXItcmlnaHQ6dmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci1jb2xvcik7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwMCUpfS5vZmZjYW52YXMtc20ub2ZmY2FudmFzLWVuZHt0b3A6MDtyaWdodDowO3dpZHRoOnZhcigtLWJzLW9mZmNhbnZhcy13aWR0aCk7Ym9yZGVyLWxlZnQ6dmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci1jb2xvcik7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwJSl9Lm9mZmNhbnZhcy1zbS5vZmZjYW52YXMtdG9we3RvcDowO3JpZ2h0OjA7bGVmdDowO2hlaWdodDp2YXIoLS1icy1vZmZjYW52YXMtaGVpZ2h0KTttYXgtaGVpZ2h0OjEwMCU7Ym9yZGVyLWJvdHRvbTp2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLWNvbG9yKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSl9Lm9mZmNhbnZhcy1zbS5vZmZjYW52YXMtYm90dG9te3JpZ2h0OjA7bGVmdDowO2hlaWdodDp2YXIoLS1icy1vZmZjYW52YXMtaGVpZ2h0KTttYXgtaGVpZ2h0OjEwMCU7Ym9yZGVyLXRvcDp2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLWNvbG9yKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAlKX0ub2ZmY2FudmFzLXNtLnNob3c6bm90KC5oaWRpbmcpLC5vZmZjYW52YXMtc20uc2hvd2luZ3t0cmFuc2Zvcm06bm9uZX0ub2ZmY2FudmFzLXNtLmhpZGluZywub2ZmY2FudmFzLXNtLnNob3csLm9mZmNhbnZhcy1zbS5zaG93aW5ne3Zpc2liaWxpdHk6dmlzaWJsZX19QG1lZGlhIChtaW4td2lkdGg6NTc2cHgpey5vZmZjYW52YXMtc217LS1icy1vZmZjYW52YXMtaGVpZ2h0OmF1dG87LS1icy1vZmZjYW52YXMtYm9yZGVyLXdpZHRoOjA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnR9Lm9mZmNhbnZhcy1zbSAub2ZmY2FudmFzLWhlYWRlcntkaXNwbGF5Om5vbmV9Lm9mZmNhbnZhcy1zbSAub2ZmY2FudmFzLWJvZHl7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzowO3BhZGRpbmc6MDtvdmVyZmxvdy15OnZpc2libGU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnR9fUBtZWRpYSAobWF4LXdpZHRoOjc2Ny45OHB4KXsub2ZmY2FudmFzLW1ke3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTowO3otaW5kZXg6dmFyKC0tYnMtb2ZmY2FudmFzLXppbmRleCk7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXgtd2lkdGg6MTAwJTtjb2xvcjp2YXIoLS1icy1vZmZjYW52YXMtY29sb3IpO3Zpc2liaWxpdHk6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtb2ZmY2FudmFzLWJnKTtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7b3V0bGluZTowO3RyYW5zaXRpb246dmFyKC0tYnMtb2ZmY2FudmFzLXRyYW5zaXRpb24pfX1AbWVkaWEgKG1heC13aWR0aDo3NjcuOThweCkgYW5kIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSl7Lm9mZmNhbnZhcy1tZHt0cmFuc2l0aW9uOm5vbmV9fUBtZWRpYSAobWF4LXdpZHRoOjc2Ny45OHB4KXsub2ZmY2FudmFzLW1kLm9mZmNhbnZhcy1zdGFydHt0b3A6MDtsZWZ0OjA7d2lkdGg6dmFyKC0tYnMtb2ZmY2FudmFzLXdpZHRoKTtib3JkZXItcmlnaHQ6dmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci1jb2xvcik7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwMCUpfS5vZmZjYW52YXMtbWQub2ZmY2FudmFzLWVuZHt0b3A6MDtyaWdodDowO3dpZHRoOnZhcigtLWJzLW9mZmNhbnZhcy13aWR0aCk7Ym9yZGVyLWxlZnQ6dmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci1jb2xvcik7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwJSl9Lm9mZmNhbnZhcy1tZC5vZmZjYW52YXMtdG9we3RvcDowO3JpZ2h0OjA7bGVmdDowO2hlaWdodDp2YXIoLS1icy1vZmZjYW52YXMtaGVpZ2h0KTttYXgtaGVpZ2h0OjEwMCU7Ym9yZGVyLWJvdHRvbTp2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLWNvbG9yKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSl9Lm9mZmNhbnZhcy1tZC5vZmZjYW52YXMtYm90dG9te3JpZ2h0OjA7bGVmdDowO2hlaWdodDp2YXIoLS1icy1vZmZjYW52YXMtaGVpZ2h0KTttYXgtaGVpZ2h0OjEwMCU7Ym9yZGVyLXRvcDp2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLWNvbG9yKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAlKX0ub2ZmY2FudmFzLW1kLnNob3c6bm90KC5oaWRpbmcpLC5vZmZjYW52YXMtbWQuc2hvd2luZ3t0cmFuc2Zvcm06bm9uZX0ub2ZmY2FudmFzLW1kLmhpZGluZywub2ZmY2FudmFzLW1kLnNob3csLm9mZmNhbnZhcy1tZC5zaG93aW5ne3Zpc2liaWxpdHk6dmlzaWJsZX19QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5vZmZjYW52YXMtbWR7LS1icy1vZmZjYW52YXMtaGVpZ2h0OmF1dG87LS1icy1vZmZjYW52YXMtYm9yZGVyLXdpZHRoOjA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnR9Lm9mZmNhbnZhcy1tZCAub2ZmY2FudmFzLWhlYWRlcntkaXNwbGF5Om5vbmV9Lm9mZmNhbnZhcy1tZCAub2ZmY2FudmFzLWJvZHl7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzowO3BhZGRpbmc6MDtvdmVyZmxvdy15OnZpc2libGU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnR9fUBtZWRpYSAobWF4LXdpZHRoOjk5MS45OHB4KXsub2ZmY2FudmFzLWxne3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTowO3otaW5kZXg6dmFyKC0tYnMtb2ZmY2FudmFzLXppbmRleCk7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXgtd2lkdGg6MTAwJTtjb2xvcjp2YXIoLS1icy1vZmZjYW52YXMtY29sb3IpO3Zpc2liaWxpdHk6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtb2ZmY2FudmFzLWJnKTtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7b3V0bGluZTowO3RyYW5zaXRpb246dmFyKC0tYnMtb2ZmY2FudmFzLXRyYW5zaXRpb24pfX1AbWVkaWEgKG1heC13aWR0aDo5OTEuOThweCkgYW5kIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSl7Lm9mZmNhbnZhcy1sZ3t0cmFuc2l0aW9uOm5vbmV9fUBtZWRpYSAobWF4LXdpZHRoOjk5MS45OHB4KXsub2ZmY2FudmFzLWxnLm9mZmNhbnZhcy1zdGFydHt0b3A6MDtsZWZ0OjA7d2lkdGg6dmFyKC0tYnMtb2ZmY2FudmFzLXdpZHRoKTtib3JkZXItcmlnaHQ6dmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci1jb2xvcik7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwMCUpfS5vZmZjYW52YXMtbGcub2ZmY2FudmFzLWVuZHt0b3A6MDtyaWdodDowO3dpZHRoOnZhcigtLWJzLW9mZmNhbnZhcy13aWR0aCk7Ym9yZGVyLWxlZnQ6dmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci1jb2xvcik7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwJSl9Lm9mZmNhbnZhcy1sZy5vZmZjYW52YXMtdG9we3RvcDowO3JpZ2h0OjA7bGVmdDowO2hlaWdodDp2YXIoLS1icy1vZmZjYW52YXMtaGVpZ2h0KTttYXgtaGVpZ2h0OjEwMCU7Ym9yZGVyLWJvdHRvbTp2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLWNvbG9yKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSl9Lm9mZmNhbnZhcy1sZy5vZmZjYW52YXMtYm90dG9te3JpZ2h0OjA7bGVmdDowO2hlaWdodDp2YXIoLS1icy1vZmZjYW52YXMtaGVpZ2h0KTttYXgtaGVpZ2h0OjEwMCU7Ym9yZGVyLXRvcDp2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLWNvbG9yKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAlKX0ub2ZmY2FudmFzLWxnLnNob3c6bm90KC5oaWRpbmcpLC5vZmZjYW52YXMtbGcuc2hvd2luZ3t0cmFuc2Zvcm06bm9uZX0ub2ZmY2FudmFzLWxnLmhpZGluZywub2ZmY2FudmFzLWxnLnNob3csLm9mZmNhbnZhcy1sZy5zaG93aW5ne3Zpc2liaWxpdHk6dmlzaWJsZX19QG1lZGlhIChtaW4td2lkdGg6OTkycHgpey5vZmZjYW52YXMtbGd7LS1icy1vZmZjYW52YXMtaGVpZ2h0OmF1dG87LS1icy1vZmZjYW52YXMtYm9yZGVyLXdpZHRoOjA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnR9Lm9mZmNhbnZhcy1sZyAub2ZmY2FudmFzLWhlYWRlcntkaXNwbGF5Om5vbmV9Lm9mZmNhbnZhcy1sZyAub2ZmY2FudmFzLWJvZHl7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzowO3BhZGRpbmc6MDtvdmVyZmxvdy15OnZpc2libGU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnR9fUBtZWRpYSAobWF4LXdpZHRoOjExOTkuOThweCl7Lm9mZmNhbnZhcy14bHtwb3NpdGlvbjpmaXhlZDtib3R0b206MDt6LWluZGV4OnZhcigtLWJzLW9mZmNhbnZhcy16aW5kZXgpO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWF4LXdpZHRoOjEwMCU7Y29sb3I6dmFyKC0tYnMtb2ZmY2FudmFzLWNvbG9yKTt2aXNpYmlsaXR5OmhpZGRlbjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLW9mZmNhbnZhcy1iZyk7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O291dGxpbmU6MDt0cmFuc2l0aW9uOnZhcigtLWJzLW9mZmNhbnZhcy10cmFuc2l0aW9uKX19QG1lZGlhIChtYXgtd2lkdGg6MTE5OS45OHB4KSBhbmQgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKXsub2ZmY2FudmFzLXhse3RyYW5zaXRpb246bm9uZX19QG1lZGlhIChtYXgtd2lkdGg6MTE5OS45OHB4KXsub2ZmY2FudmFzLXhsLm9mZmNhbnZhcy1zdGFydHt0b3A6MDtsZWZ0OjA7d2lkdGg6dmFyKC0tYnMtb2ZmY2FudmFzLXdpZHRoKTtib3JkZXItcmlnaHQ6dmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci1jb2xvcik7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwMCUpfS5vZmZjYW52YXMteGwub2ZmY2FudmFzLWVuZHt0b3A6MDtyaWdodDowO3dpZHRoOnZhcigtLWJzLW9mZmNhbnZhcy13aWR0aCk7Ym9yZGVyLWxlZnQ6dmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci1jb2xvcik7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwJSl9Lm9mZmNhbnZhcy14bC5vZmZjYW52YXMtdG9we3RvcDowO3JpZ2h0OjA7bGVmdDowO2hlaWdodDp2YXIoLS1icy1vZmZjYW52YXMtaGVpZ2h0KTttYXgtaGVpZ2h0OjEwMCU7Ym9yZGVyLWJvdHRvbTp2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLWNvbG9yKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSl9Lm9mZmNhbnZhcy14bC5vZmZjYW52YXMtYm90dG9te3JpZ2h0OjA7bGVmdDowO2hlaWdodDp2YXIoLS1icy1vZmZjYW52YXMtaGVpZ2h0KTttYXgtaGVpZ2h0OjEwMCU7Ym9yZGVyLXRvcDp2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLWNvbG9yKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAlKX0ub2ZmY2FudmFzLXhsLnNob3c6bm90KC5oaWRpbmcpLC5vZmZjYW52YXMteGwuc2hvd2luZ3t0cmFuc2Zvcm06bm9uZX0ub2ZmY2FudmFzLXhsLmhpZGluZywub2ZmY2FudmFzLXhsLnNob3csLm9mZmNhbnZhcy14bC5zaG93aW5ne3Zpc2liaWxpdHk6dmlzaWJsZX19QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsub2ZmY2FudmFzLXhsey0tYnMtb2ZmY2FudmFzLWhlaWdodDphdXRvOy0tYnMtb2ZmY2FudmFzLWJvcmRlci13aWR0aDowO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50fS5vZmZjYW52YXMteGwgLm9mZmNhbnZhcy1oZWFkZXJ7ZGlzcGxheTpub25lfS5vZmZjYW52YXMteGwgLm9mZmNhbnZhcy1ib2R5e2Rpc3BsYXk6ZmxleDtmbGV4LWdyb3c6MDtwYWRkaW5nOjA7b3ZlcmZsb3cteTp2aXNpYmxlO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50fX1AbWVkaWEgKG1heC13aWR0aDoxMzk5Ljk4cHgpey5vZmZjYW52YXMteHhse3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTowO3otaW5kZXg6dmFyKC0tYnMtb2ZmY2FudmFzLXppbmRleCk7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXgtd2lkdGg6MTAwJTtjb2xvcjp2YXIoLS1icy1vZmZjYW52YXMtY29sb3IpO3Zpc2liaWxpdHk6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtb2ZmY2FudmFzLWJnKTtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7b3V0bGluZTowO3RyYW5zaXRpb246dmFyKC0tYnMtb2ZmY2FudmFzLXRyYW5zaXRpb24pfX1AbWVkaWEgKG1heC13aWR0aDoxMzk5Ljk4cHgpIGFuZCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5vZmZjYW52YXMteHhse3RyYW5zaXRpb246bm9uZX19QG1lZGlhIChtYXgtd2lkdGg6MTM5OS45OHB4KXsub2ZmY2FudmFzLXh4bC5vZmZjYW52YXMtc3RhcnR7dG9wOjA7bGVmdDowO3dpZHRoOnZhcigtLWJzLW9mZmNhbnZhcy13aWR0aCk7Ym9yZGVyLXJpZ2h0OnZhcigtLWJzLW9mZmNhbnZhcy1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLW9mZmNhbnZhcy1ib3JkZXItY29sb3IpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDAlKX0ub2ZmY2FudmFzLXh4bC5vZmZjYW52YXMtZW5ke3RvcDowO3JpZ2h0OjA7d2lkdGg6dmFyKC0tYnMtb2ZmY2FudmFzLXdpZHRoKTtib3JkZXItbGVmdDp2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLWNvbG9yKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgxMDAlKX0ub2ZmY2FudmFzLXh4bC5vZmZjYW52YXMtdG9we3RvcDowO3JpZ2h0OjA7bGVmdDowO2hlaWdodDp2YXIoLS1icy1vZmZjYW52YXMtaGVpZ2h0KTttYXgtaGVpZ2h0OjEwMCU7Ym9yZGVyLWJvdHRvbTp2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLWNvbG9yKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSl9Lm9mZmNhbnZhcy14eGwub2ZmY2FudmFzLWJvdHRvbXtyaWdodDowO2xlZnQ6MDtoZWlnaHQ6dmFyKC0tYnMtb2ZmY2FudmFzLWhlaWdodCk7bWF4LWhlaWdodDoxMDAlO2JvcmRlci10b3A6dmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci1jb2xvcik7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwJSl9Lm9mZmNhbnZhcy14eGwuc2hvdzpub3QoLmhpZGluZyksLm9mZmNhbnZhcy14eGwuc2hvd2luZ3t0cmFuc2Zvcm06bm9uZX0ub2ZmY2FudmFzLXh4bC5oaWRpbmcsLm9mZmNhbnZhcy14eGwuc2hvdywub2ZmY2FudmFzLXh4bC5zaG93aW5ne3Zpc2liaWxpdHk6dmlzaWJsZX19QG1lZGlhIChtaW4td2lkdGg6MTQwMHB4KXsub2ZmY2FudmFzLXh4bHstLWJzLW9mZmNhbnZhcy1oZWlnaHQ6YXV0bzstLWJzLW9mZmNhbnZhcy1ib3JkZXItd2lkdGg6MDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudH0ub2ZmY2FudmFzLXh4bCAub2ZmY2FudmFzLWhlYWRlcntkaXNwbGF5Om5vbmV9Lm9mZmNhbnZhcy14eGwgLm9mZmNhbnZhcy1ib2R5e2Rpc3BsYXk6ZmxleDtmbGV4LWdyb3c6MDtwYWRkaW5nOjA7b3ZlcmZsb3cteTp2aXNpYmxlO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50fX0ub2ZmY2FudmFze3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTowO3otaW5kZXg6dmFyKC0tYnMtb2ZmY2FudmFzLXppbmRleCk7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXgtd2lkdGg6MTAwJTtjb2xvcjp2YXIoLS1icy1vZmZjYW52YXMtY29sb3IpO3Zpc2liaWxpdHk6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtb2ZmY2FudmFzLWJnKTtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7b3V0bGluZTowO3RyYW5zaXRpb246dmFyKC0tYnMtb2ZmY2FudmFzLXRyYW5zaXRpb24pfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5vZmZjYW52YXN7dHJhbnNpdGlvbjpub25lfX0ub2ZmY2FudmFzLm9mZmNhbnZhcy1zdGFydHt0b3A6MDtsZWZ0OjA7d2lkdGg6dmFyKC0tYnMtb2ZmY2FudmFzLXdpZHRoKTtib3JkZXItcmlnaHQ6dmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci1jb2xvcik7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwMCUpfS5vZmZjYW52YXMub2ZmY2FudmFzLWVuZHt0b3A6MDtyaWdodDowO3dpZHRoOnZhcigtLWJzLW9mZmNhbnZhcy13aWR0aCk7Ym9yZGVyLWxlZnQ6dmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtb2ZmY2FudmFzLWJvcmRlci1jb2xvcik7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwJSl9Lm9mZmNhbnZhcy5vZmZjYW52YXMtdG9we3RvcDowO3JpZ2h0OjA7bGVmdDowO2hlaWdodDp2YXIoLS1icy1vZmZjYW52YXMtaGVpZ2h0KTttYXgtaGVpZ2h0OjEwMCU7Ym9yZGVyLWJvdHRvbTp2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLWNvbG9yKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSl9Lm9mZmNhbnZhcy5vZmZjYW52YXMtYm90dG9te3JpZ2h0OjA7bGVmdDowO2hlaWdodDp2YXIoLS1icy1vZmZjYW52YXMtaGVpZ2h0KTttYXgtaGVpZ2h0OjEwMCU7Ym9yZGVyLXRvcDp2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1vZmZjYW52YXMtYm9yZGVyLWNvbG9yKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAlKX0ub2ZmY2FudmFzLnNob3c6bm90KC5oaWRpbmcpLC5vZmZjYW52YXMuc2hvd2luZ3t0cmFuc2Zvcm06bm9uZX0ub2ZmY2FudmFzLmhpZGluZywub2ZmY2FudmFzLnNob3csLm9mZmNhbnZhcy5zaG93aW5ne3Zpc2liaWxpdHk6dmlzaWJsZX0ub2ZmY2FudmFzLWJhY2tkcm9we3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt6LWluZGV4OjEwNDA7d2lkdGg6MTAwdnc7aGVpZ2h0OjEwMHZoO2JhY2tncm91bmQtY29sb3I6IzAwMH0ub2ZmY2FudmFzLWJhY2tkcm9wLmZhZGV7b3BhY2l0eTowfS5vZmZjYW52YXMtYmFja2Ryb3Auc2hvd3tvcGFjaXR5Oi41fS5vZmZjYW52YXMtaGVhZGVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzp2YXIoLS1icy1vZmZjYW52YXMtcGFkZGluZy15KSB2YXIoLS1icy1vZmZjYW52YXMtcGFkZGluZy14KX0ub2ZmY2FudmFzLWhlYWRlciAuYnRuLWNsb3Nle3BhZGRpbmc6Y2FsYyh2YXIoLS1icy1vZmZjYW52YXMtcGFkZGluZy15KSAqIC41KSBjYWxjKHZhcigtLWJzLW9mZmNhbnZhcy1wYWRkaW5nLXgpICogLjUpO21hcmdpbjpjYWxjKC0uNSAqIHZhcigtLWJzLW9mZmNhbnZhcy1wYWRkaW5nLXkpKSBjYWxjKC0uNSAqIHZhcigtLWJzLW9mZmNhbnZhcy1wYWRkaW5nLXgpKSBjYWxjKC0uNSAqIHZhcigtLWJzLW9mZmNhbnZhcy1wYWRkaW5nLXkpKSBhdXRvfS5vZmZjYW52YXMtdGl0bGV7bWFyZ2luLWJvdHRvbTowO2xpbmUtaGVpZ2h0OnZhcigtLWJzLW9mZmNhbnZhcy10aXRsZS1saW5lLWhlaWdodCl9Lm9mZmNhbnZhcy1ib2R5e2ZsZXgtZ3JvdzoxO3BhZGRpbmc6dmFyKC0tYnMtb2ZmY2FudmFzLXBhZGRpbmcteSkgdmFyKC0tYnMtb2ZmY2FudmFzLXBhZGRpbmcteCk7b3ZlcmZsb3cteTphdXRvfS5wbGFjZWhvbGRlcntkaXNwbGF5OmlubGluZS1ibG9jazttaW4taGVpZ2h0OjFlbTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Y3Vyc29yOndhaXQ7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Y29sb3I7b3BhY2l0eTouNX0ucGxhY2Vob2xkZXIuYnRuOjpiZWZvcmV7ZGlzcGxheTppbmxpbmUtYmxvY2s7Y29udGVudDoiIn0ucGxhY2Vob2xkZXIteHN7bWluLWhlaWdodDouNmVtfS5wbGFjZWhvbGRlci1zbXttaW4taGVpZ2h0Oi44ZW19LnBsYWNlaG9sZGVyLWxne21pbi1oZWlnaHQ6MS4yZW19LnBsYWNlaG9sZGVyLWdsb3cgLnBsYWNlaG9sZGVye2FuaW1hdGlvbjpwbGFjZWhvbGRlci1nbG93IDJzIGVhc2UtaW4tb3V0IGluZmluaXRlfUBrZXlmcmFtZXMgcGxhY2Vob2xkZXItZ2xvd3s1MCV7b3BhY2l0eTouMn19LnBsYWNlaG9sZGVyLXdhdmV7LXdlYmtpdC1tYXNrLWltYWdlOmxpbmVhci1ncmFkaWVudCgxMzBkZWcsIzAwMCA1NSUscmdiYSgwLDAsMCwwLjgpIDc1JSwjMDAwIDk1JSk7bWFzay1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTMwZGVnLCMwMDAgNTUlLHJnYmEoMCwwLDAsMC44KSA3NSUsIzAwMCA5NSUpOy13ZWJraXQtbWFzay1zaXplOjIwMCUgMTAwJTttYXNrLXNpemU6MjAwJSAxMDAlO2FuaW1hdGlvbjpwbGFjZWhvbGRlci13YXZlIDJzIGxpbmVhciBpbmZpbml0ZX1Aa2V5ZnJhbWVzIHBsYWNlaG9sZGVyLXdhdmV7MTAwJXstd2Via2l0LW1hc2stcG9zaXRpb246LTIwMCUgMCU7bWFzay1wb3NpdGlvbjotMjAwJSAwJX19LmNsZWFyZml4OjphZnRlcntkaXNwbGF5OmJsb2NrO2NsZWFyOmJvdGg7Y29udGVudDoiIn0udGV4dC1iZy1wcmltYXJ5e2NvbG9yOiNmZmYhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6UkdCQSh2YXIoLS1icy1wcmltYXJ5LXJnYiksdmFyKC0tYnMtYmctb3BhY2l0eSwxKSkhaW1wb3J0YW50fS50ZXh0LWJnLXNlY29uZGFyeXtjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOlJHQkEodmFyKC0tYnMtc2Vjb25kYXJ5LXJnYiksdmFyKC0tYnMtYmctb3BhY2l0eSwxKSkhaW1wb3J0YW50fS50ZXh0LWJnLXN1Y2Nlc3N7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjpSR0JBKHZhcigtLWJzLXN1Y2Nlc3MtcmdiKSx2YXIoLS1icy1iZy1vcGFjaXR5LDEpKSFpbXBvcnRhbnR9LnRleHQtYmctaW5mb3tjb2xvcjojMDAwIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOlJHQkEodmFyKC0tYnMtaW5mby1yZ2IpLHZhcigtLWJzLWJnLW9wYWNpdHksMSkpIWltcG9ydGFudH0udGV4dC1iZy13YXJuaW5ne2NvbG9yOiMwMDAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6UkdCQSh2YXIoLS1icy13YXJuaW5nLXJnYiksdmFyKC0tYnMtYmctb3BhY2l0eSwxKSkhaW1wb3J0YW50fS50ZXh0LWJnLWRhbmdlcntjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOlJHQkEodmFyKC0tYnMtZGFuZ2VyLXJnYiksdmFyKC0tYnMtYmctb3BhY2l0eSwxKSkhaW1wb3J0YW50fS50ZXh0LWJnLWxpZ2h0e2NvbG9yOiMwMDAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6UkdCQSh2YXIoLS1icy1saWdodC1yZ2IpLHZhcigtLWJzLWJnLW9wYWNpdHksMSkpIWltcG9ydGFudH0udGV4dC1iZy1kYXJre2NvbG9yOiNmZmYhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6UkdCQSh2YXIoLS1icy1kYXJrLXJnYiksdmFyKC0tYnMtYmctb3BhY2l0eSwxKSkhaW1wb3J0YW50fS5saW5rLXByaW1hcnl7Y29sb3I6UkdCQSh2YXIoLS1icy1wcmltYXJ5LXJnYiksdmFyKC0tYnMtbGluay1vcGFjaXR5LDEpKSFpbXBvcnRhbnQ7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3I6UkdCQSh2YXIoLS1icy1wcmltYXJ5LXJnYiksdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50O3RleHQtZGVjb3JhdGlvbi1jb2xvcjpSR0JBKHZhcigtLWJzLXByaW1hcnktcmdiKSx2YXIoLS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5LDEpKSFpbXBvcnRhbnR9LmxpbmstcHJpbWFyeTpmb2N1cywubGluay1wcmltYXJ5OmhvdmVye2NvbG9yOlJHQkEoMTAsODgsMjAyLHZhcigtLWJzLWxpbmstb3BhY2l0eSwxKSkhaW1wb3J0YW50Oy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yOlJHQkEoMTAsODgsMjAyLHZhcigtLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHksMSkpIWltcG9ydGFudDt0ZXh0LWRlY29yYXRpb24tY29sb3I6UkdCQSgxMCw4OCwyMDIsdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50fS5saW5rLXNlY29uZGFyeXtjb2xvcjpSR0JBKHZhcigtLWJzLXNlY29uZGFyeS1yZ2IpLHZhcigtLWJzLWxpbmstb3BhY2l0eSwxKSkhaW1wb3J0YW50Oy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yOlJHQkEodmFyKC0tYnMtc2Vjb25kYXJ5LXJnYiksdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50O3RleHQtZGVjb3JhdGlvbi1jb2xvcjpSR0JBKHZhcigtLWJzLXNlY29uZGFyeS1yZ2IpLHZhcigtLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHksMSkpIWltcG9ydGFudH0ubGluay1zZWNvbmRhcnk6Zm9jdXMsLmxpbmstc2Vjb25kYXJ5OmhvdmVye2NvbG9yOlJHQkEoODYsOTQsMTAwLHZhcigtLWJzLWxpbmstb3BhY2l0eSwxKSkhaW1wb3J0YW50Oy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yOlJHQkEoODYsOTQsMTAwLHZhcigtLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHksMSkpIWltcG9ydGFudDt0ZXh0LWRlY29yYXRpb24tY29sb3I6UkdCQSg4Niw5NCwxMDAsdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50fS5saW5rLXN1Y2Nlc3N7Y29sb3I6UkdCQSh2YXIoLS1icy1zdWNjZXNzLXJnYiksdmFyKC0tYnMtbGluay1vcGFjaXR5LDEpKSFpbXBvcnRhbnQ7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3I6UkdCQSh2YXIoLS1icy1zdWNjZXNzLXJnYiksdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50O3RleHQtZGVjb3JhdGlvbi1jb2xvcjpSR0JBKHZhcigtLWJzLXN1Y2Nlc3MtcmdiKSx2YXIoLS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5LDEpKSFpbXBvcnRhbnR9Lmxpbmstc3VjY2Vzczpmb2N1cywubGluay1zdWNjZXNzOmhvdmVye2NvbG9yOlJHQkEoMjAsMTA4LDY3LHZhcigtLWJzLWxpbmstb3BhY2l0eSwxKSkhaW1wb3J0YW50Oy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yOlJHQkEoMjAsMTA4LDY3LHZhcigtLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHksMSkpIWltcG9ydGFudDt0ZXh0LWRlY29yYXRpb24tY29sb3I6UkdCQSgyMCwxMDgsNjcsdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50fS5saW5rLWluZm97Y29sb3I6UkdCQSh2YXIoLS1icy1pbmZvLXJnYiksdmFyKC0tYnMtbGluay1vcGFjaXR5LDEpKSFpbXBvcnRhbnQ7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3I6UkdCQSh2YXIoLS1icy1pbmZvLXJnYiksdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50O3RleHQtZGVjb3JhdGlvbi1jb2xvcjpSR0JBKHZhcigtLWJzLWluZm8tcmdiKSx2YXIoLS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5LDEpKSFpbXBvcnRhbnR9LmxpbmstaW5mbzpmb2N1cywubGluay1pbmZvOmhvdmVye2NvbG9yOlJHQkEoNjEsMjEzLDI0Myx2YXIoLS1icy1saW5rLW9wYWNpdHksMSkpIWltcG9ydGFudDstd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvcjpSR0JBKDYxLDIxMywyNDMsdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50O3RleHQtZGVjb3JhdGlvbi1jb2xvcjpSR0JBKDYxLDIxMywyNDMsdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50fS5saW5rLXdhcm5pbmd7Y29sb3I6UkdCQSh2YXIoLS1icy13YXJuaW5nLXJnYiksdmFyKC0tYnMtbGluay1vcGFjaXR5LDEpKSFpbXBvcnRhbnQ7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3I6UkdCQSh2YXIoLS1icy13YXJuaW5nLXJnYiksdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50O3RleHQtZGVjb3JhdGlvbi1jb2xvcjpSR0JBKHZhcigtLWJzLXdhcm5pbmctcmdiKSx2YXIoLS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5LDEpKSFpbXBvcnRhbnR9Lmxpbmstd2FybmluZzpmb2N1cywubGluay13YXJuaW5nOmhvdmVye2NvbG9yOlJHQkEoMjU1LDIwNSw1Nyx2YXIoLS1icy1saW5rLW9wYWNpdHksMSkpIWltcG9ydGFudDstd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvcjpSR0JBKDI1NSwyMDUsNTcsdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50O3RleHQtZGVjb3JhdGlvbi1jb2xvcjpSR0JBKDI1NSwyMDUsNTcsdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50fS5saW5rLWRhbmdlcntjb2xvcjpSR0JBKHZhcigtLWJzLWRhbmdlci1yZ2IpLHZhcigtLWJzLWxpbmstb3BhY2l0eSwxKSkhaW1wb3J0YW50Oy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yOlJHQkEodmFyKC0tYnMtZGFuZ2VyLXJnYiksdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50O3RleHQtZGVjb3JhdGlvbi1jb2xvcjpSR0JBKHZhcigtLWJzLWRhbmdlci1yZ2IpLHZhcigtLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHksMSkpIWltcG9ydGFudH0ubGluay1kYW5nZXI6Zm9jdXMsLmxpbmstZGFuZ2VyOmhvdmVye2NvbG9yOlJHQkEoMTc2LDQyLDU1LHZhcigtLWJzLWxpbmstb3BhY2l0eSwxKSkhaW1wb3J0YW50Oy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yOlJHQkEoMTc2LDQyLDU1LHZhcigtLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHksMSkpIWltcG9ydGFudDt0ZXh0LWRlY29yYXRpb24tY29sb3I6UkdCQSgxNzYsNDIsNTUsdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50fS5saW5rLWxpZ2h0e2NvbG9yOlJHQkEodmFyKC0tYnMtbGlnaHQtcmdiKSx2YXIoLS1icy1saW5rLW9wYWNpdHksMSkpIWltcG9ydGFudDstd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvcjpSR0JBKHZhcigtLWJzLWxpZ2h0LXJnYiksdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50O3RleHQtZGVjb3JhdGlvbi1jb2xvcjpSR0JBKHZhcigtLWJzLWxpZ2h0LXJnYiksdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50fS5saW5rLWxpZ2h0OmZvY3VzLC5saW5rLWxpZ2h0OmhvdmVye2NvbG9yOlJHQkEoMjQ5LDI1MCwyNTEsdmFyKC0tYnMtbGluay1vcGFjaXR5LDEpKSFpbXBvcnRhbnQ7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3I6UkdCQSgyNDksMjUwLDI1MSx2YXIoLS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5LDEpKSFpbXBvcnRhbnQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOlJHQkEoMjQ5LDI1MCwyNTEsdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50fS5saW5rLWRhcmt7Y29sb3I6UkdCQSh2YXIoLS1icy1kYXJrLXJnYiksdmFyKC0tYnMtbGluay1vcGFjaXR5LDEpKSFpbXBvcnRhbnQ7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3I6UkdCQSh2YXIoLS1icy1kYXJrLXJnYiksdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50O3RleHQtZGVjb3JhdGlvbi1jb2xvcjpSR0JBKHZhcigtLWJzLWRhcmstcmdiKSx2YXIoLS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5LDEpKSFpbXBvcnRhbnR9LmxpbmstZGFyazpmb2N1cywubGluay1kYXJrOmhvdmVye2NvbG9yOlJHQkEoMjYsMzAsMzMsdmFyKC0tYnMtbGluay1vcGFjaXR5LDEpKSFpbXBvcnRhbnQ7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3I6UkdCQSgyNiwzMCwzMyx2YXIoLS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5LDEpKSFpbXBvcnRhbnQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOlJHQkEoMjYsMzAsMzMsdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50fS5saW5rLWJvZHktZW1waGFzaXN7Y29sb3I6UkdCQSh2YXIoLS1icy1lbXBoYXNpcy1jb2xvci1yZ2IpLHZhcigtLWJzLWxpbmstb3BhY2l0eSwxKSkhaW1wb3J0YW50Oy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yOlJHQkEodmFyKC0tYnMtZW1waGFzaXMtY29sb3ItcmdiKSx2YXIoLS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5LDEpKSFpbXBvcnRhbnQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOlJHQkEodmFyKC0tYnMtZW1waGFzaXMtY29sb3ItcmdiKSx2YXIoLS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5LDEpKSFpbXBvcnRhbnR9LmxpbmstYm9keS1lbXBoYXNpczpmb2N1cywubGluay1ib2R5LWVtcGhhc2lzOmhvdmVye2NvbG9yOlJHQkEodmFyKC0tYnMtZW1waGFzaXMtY29sb3ItcmdiKSx2YXIoLS1icy1saW5rLW9wYWNpdHksLjc1KSkhaW1wb3J0YW50Oy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yOlJHQkEodmFyKC0tYnMtZW1waGFzaXMtY29sb3ItcmdiKSx2YXIoLS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5LDAuNzUpKSFpbXBvcnRhbnQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOlJHQkEodmFyKC0tYnMtZW1waGFzaXMtY29sb3ItcmdiKSx2YXIoLS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5LDAuNzUpKSFpbXBvcnRhbnR9LmZvY3VzLXJpbmc6Zm9jdXN7b3V0bGluZTowO2JveC1zaGFkb3c6dmFyKC0tYnMtZm9jdXMtcmluZy14LDApIHZhcigtLWJzLWZvY3VzLXJpbmcteSwwKSB2YXIoLS1icy1mb2N1cy1yaW5nLWJsdXIsMCkgdmFyKC0tYnMtZm9jdXMtcmluZy13aWR0aCkgdmFyKC0tYnMtZm9jdXMtcmluZy1jb2xvcil9Lmljb24tbGlua3tkaXNwbGF5OmlubGluZS1mbGV4O2dhcDouMzc1cmVtO2FsaWduLWl0ZW1zOmNlbnRlcjstd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvcjpyZ2JhKHZhcigtLWJzLWxpbmstY29sb3ItcmdiKSx2YXIoLS1icy1saW5rLW9wYWNpdHksMC41KSk7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOnJnYmEodmFyKC0tYnMtbGluay1jb2xvci1yZ2IpLHZhcigtLWJzLWxpbmstb3BhY2l0eSwwLjUpKTt0ZXh0LXVuZGVybGluZS1vZmZzZXQ6MC4yNWVtOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW59Lmljb24tbGluaz4uYml7ZmxleC1zaHJpbms6MDt3aWR0aDoxZW07aGVpZ2h0OjFlbTtmaWxsOmN1cnJlbnRjb2xvcjt0cmFuc2l0aW9uOi4ycyBlYXNlLWluLW91dCB0cmFuc2Zvcm19QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSl7Lmljb24tbGluaz4uYml7dHJhbnNpdGlvbjpub25lfX0uaWNvbi1saW5rLWhvdmVyOmZvY3VzLXZpc2libGU+LmJpLC5pY29uLWxpbmstaG92ZXI6aG92ZXI+LmJpe3RyYW5zZm9ybTp2YXIoLS1icy1pY29uLWxpbmstdHJhbnNmb3JtLHRyYW5zbGF0ZTNkKC4yNWVtLDAsMCkpfS5yYXRpb3twb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfS5yYXRpbzo6YmVmb3Jle2Rpc3BsYXk6YmxvY2s7cGFkZGluZy10b3A6dmFyKC0tYnMtYXNwZWN0LXJhdGlvKTtjb250ZW50OiIifS5yYXRpbz4qe3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5yYXRpby0xeDF7LS1icy1hc3BlY3QtcmF0aW86MTAwJX0ucmF0aW8tNHgzey0tYnMtYXNwZWN0LXJhdGlvOjc1JX0ucmF0aW8tMTZ4OXstLWJzLWFzcGVjdC1yYXRpbzo1Ni4yNSV9LnJhdGlvLTIxeDl7LS1icy1hc3BlY3QtcmF0aW86NDIuODU3MTQyODU3MSV9LmZpeGVkLXRvcHtwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO2xlZnQ6MDt6LWluZGV4OjEwMzB9LmZpeGVkLWJvdHRvbXtwb3NpdGlvbjpmaXhlZDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4OjEwMzB9LnN0aWNreS10b3B7cG9zaXRpb246LXdlYmtpdC1zdGlja3k7cG9zaXRpb246c3RpY2t5O3RvcDowO3otaW5kZXg6MTAyMH0uc3RpY2t5LWJvdHRvbXtwb3NpdGlvbjotd2Via2l0LXN0aWNreTtwb3NpdGlvbjpzdGlja3k7Ym90dG9tOjA7ei1pbmRleDoxMDIwfUBtZWRpYSAobWluLXdpZHRoOjU3NnB4KXsuc3RpY2t5LXNtLXRvcHtwb3NpdGlvbjotd2Via2l0LXN0aWNreTtwb3NpdGlvbjpzdGlja3k7dG9wOjA7ei1pbmRleDoxMDIwfS5zdGlja3ktc20tYm90dG9te3Bvc2l0aW9uOi13ZWJraXQtc3RpY2t5O3Bvc2l0aW9uOnN0aWNreTtib3R0b206MDt6LWluZGV4OjEwMjB9fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuc3RpY2t5LW1kLXRvcHtwb3NpdGlvbjotd2Via2l0LXN0aWNreTtwb3NpdGlvbjpzdGlja3k7dG9wOjA7ei1pbmRleDoxMDIwfS5zdGlja3ktbWQtYm90dG9te3Bvc2l0aW9uOi13ZWJraXQtc3RpY2t5O3Bvc2l0aW9uOnN0aWNreTtib3R0b206MDt6LWluZGV4OjEwMjB9fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuc3RpY2t5LWxnLXRvcHtwb3NpdGlvbjotd2Via2l0LXN0aWNreTtwb3NpdGlvbjpzdGlja3k7dG9wOjA7ei1pbmRleDoxMDIwfS5zdGlja3ktbGctYm90dG9te3Bvc2l0aW9uOi13ZWJraXQtc3RpY2t5O3Bvc2l0aW9uOnN0aWNreTtib3R0b206MDt6LWluZGV4OjEwMjB9fUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LnN0aWNreS14bC10b3B7cG9zaXRpb246LXdlYmtpdC1zdGlja3k7cG9zaXRpb246c3RpY2t5O3RvcDowO3otaW5kZXg6MTAyMH0uc3RpY2t5LXhsLWJvdHRvbXtwb3NpdGlvbjotd2Via2l0LXN0aWNreTtwb3NpdGlvbjpzdGlja3k7Ym90dG9tOjA7ei1pbmRleDoxMDIwfX1AbWVkaWEgKG1pbi13aWR0aDoxNDAwcHgpey5zdGlja3kteHhsLXRvcHtwb3NpdGlvbjotd2Via2l0LXN0aWNreTtwb3NpdGlvbjpzdGlja3k7dG9wOjA7ei1pbmRleDoxMDIwfS5zdGlja3kteHhsLWJvdHRvbXtwb3NpdGlvbjotd2Via2l0LXN0aWNreTtwb3NpdGlvbjpzdGlja3k7Ym90dG9tOjA7ei1pbmRleDoxMDIwfX0uaHN0YWNre2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLXNlbGY6c3RyZXRjaH0udnN0YWNre2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSBhdXRvO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1zZWxmOnN0cmV0Y2h9LnZpc3VhbGx5LWhpZGRlbiwudmlzdWFsbHktaGlkZGVuLWZvY3VzYWJsZTpub3QoOmZvY3VzKTpub3QoOmZvY3VzLXdpdGhpbil7d2lkdGg6MXB4IWltcG9ydGFudDtoZWlnaHQ6MXB4IWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50O21hcmdpbjotMXB4IWltcG9ydGFudDtvdmVyZmxvdzpoaWRkZW4haW1wb3J0YW50O2NsaXA6cmVjdCgwLDAsMCwwKSFpbXBvcnRhbnQ7d2hpdGUtc3BhY2U6bm93cmFwIWltcG9ydGFudDtib3JkZXI6MCFpbXBvcnRhbnR9LnZpc3VhbGx5LWhpZGRlbi1mb2N1c2FibGU6bm90KDpmb2N1cyk6bm90KDpmb2N1cy13aXRoaW4pOm5vdChjYXB0aW9uKSwudmlzdWFsbHktaGlkZGVuOm5vdChjYXB0aW9uKXtwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnR9LnN0cmV0Y2hlZC1saW5rOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4OjE7Y29udGVudDoiIn0udGV4dC10cnVuY2F0ZXtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9LnZye2Rpc3BsYXk6aW5saW5lLWJsb2NrO2FsaWduLXNlbGY6c3RyZXRjaDt3aWR0aDp2YXIoLS1icy1ib3JkZXItd2lkdGgpO21pbi1oZWlnaHQ6MWVtO2JhY2tncm91bmQtY29sb3I6Y3VycmVudGNvbG9yO29wYWNpdHk6LjI1fS5hbGlnbi1iYXNlbGluZXt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZSFpbXBvcnRhbnR9LmFsaWduLXRvcHt2ZXJ0aWNhbC1hbGlnbjp0b3AhaW1wb3J0YW50fS5hbGlnbi1taWRkbGV7dmVydGljYWwtYWxpZ246bWlkZGxlIWltcG9ydGFudH0uYWxpZ24tYm90dG9te3ZlcnRpY2FsLWFsaWduOmJvdHRvbSFpbXBvcnRhbnR9LmFsaWduLXRleHQtYm90dG9te3ZlcnRpY2FsLWFsaWduOnRleHQtYm90dG9tIWltcG9ydGFudH0uYWxpZ24tdGV4dC10b3B7dmVydGljYWwtYWxpZ246dGV4dC10b3AhaW1wb3J0YW50fS5mbG9hdC1zdGFydHtmbG9hdDpsZWZ0IWltcG9ydGFudH0uZmxvYXQtZW5ke2Zsb2F0OnJpZ2h0IWltcG9ydGFudH0uZmxvYXQtbm9uZXtmbG9hdDpub25lIWltcG9ydGFudH0ub2JqZWN0LWZpdC1jb250YWluey1vLW9iamVjdC1maXQ6Y29udGFpbiFpbXBvcnRhbnQ7b2JqZWN0LWZpdDpjb250YWluIWltcG9ydGFudH0ub2JqZWN0LWZpdC1jb3Zlcnstby1vYmplY3QtZml0OmNvdmVyIWltcG9ydGFudDtvYmplY3QtZml0OmNvdmVyIWltcG9ydGFudH0ub2JqZWN0LWZpdC1maWxsey1vLW9iamVjdC1maXQ6ZmlsbCFpbXBvcnRhbnQ7b2JqZWN0LWZpdDpmaWxsIWltcG9ydGFudH0ub2JqZWN0LWZpdC1zY2FsZXstby1vYmplY3QtZml0OnNjYWxlLWRvd24haW1wb3J0YW50O29iamVjdC1maXQ6c2NhbGUtZG93biFpbXBvcnRhbnR9Lm9iamVjdC1maXQtbm9uZXstby1vYmplY3QtZml0Om5vbmUhaW1wb3J0YW50O29iamVjdC1maXQ6bm9uZSFpbXBvcnRhbnR9Lm9wYWNpdHktMHtvcGFjaXR5OjAhaW1wb3J0YW50fS5vcGFjaXR5LTI1e29wYWNpdHk6LjI1IWltcG9ydGFudH0ub3BhY2l0eS01MHtvcGFjaXR5Oi41IWltcG9ydGFudH0ub3BhY2l0eS03NXtvcGFjaXR5Oi43NSFpbXBvcnRhbnR9Lm9wYWNpdHktMTAwe29wYWNpdHk6MSFpbXBvcnRhbnR9Lm92ZXJmbG93LWF1dG97b3ZlcmZsb3c6YXV0byFpbXBvcnRhbnR9Lm92ZXJmbG93LWhpZGRlbntvdmVyZmxvdzpoaWRkZW4haW1wb3J0YW50fS5vdmVyZmxvdy12aXNpYmxle292ZXJmbG93OnZpc2libGUhaW1wb3J0YW50fS5vdmVyZmxvdy1zY3JvbGx7b3ZlcmZsb3c6c2Nyb2xsIWltcG9ydGFudH0ub3ZlcmZsb3cteC1hdXRve292ZXJmbG93LXg6YXV0byFpbXBvcnRhbnR9Lm92ZXJmbG93LXgtaGlkZGVue292ZXJmbG93LXg6aGlkZGVuIWltcG9ydGFudH0ub3ZlcmZsb3cteC12aXNpYmxle292ZXJmbG93LXg6dmlzaWJsZSFpbXBvcnRhbnR9Lm92ZXJmbG93LXgtc2Nyb2xse292ZXJmbG93LXg6c2Nyb2xsIWltcG9ydGFudH0ub3ZlcmZsb3cteS1hdXRve292ZXJmbG93LXk6YXV0byFpbXBvcnRhbnR9Lm92ZXJmbG93LXktaGlkZGVue292ZXJmbG93LXk6aGlkZGVuIWltcG9ydGFudH0ub3ZlcmZsb3cteS12aXNpYmxle292ZXJmbG93LXk6dmlzaWJsZSFpbXBvcnRhbnR9Lm92ZXJmbG93LXktc2Nyb2xse292ZXJmbG93LXk6c2Nyb2xsIWltcG9ydGFudH0uZC1pbmxpbmV7ZGlzcGxheTppbmxpbmUhaW1wb3J0YW50fS5kLWlubGluZS1ibG9ja3tkaXNwbGF5OmlubGluZS1ibG9jayFpbXBvcnRhbnR9LmQtYmxvY2t7ZGlzcGxheTpibG9jayFpbXBvcnRhbnR9LmQtZ3JpZHtkaXNwbGF5OmdyaWQhaW1wb3J0YW50fS5kLWlubGluZS1ncmlke2Rpc3BsYXk6aW5saW5lLWdyaWQhaW1wb3J0YW50fS5kLXRhYmxle2Rpc3BsYXk6dGFibGUhaW1wb3J0YW50fS5kLXRhYmxlLXJvd3tkaXNwbGF5OnRhYmxlLXJvdyFpbXBvcnRhbnR9LmQtdGFibGUtY2VsbHtkaXNwbGF5OnRhYmxlLWNlbGwhaW1wb3J0YW50fS5kLWZsZXh7ZGlzcGxheTpmbGV4IWltcG9ydGFudH0uZC1pbmxpbmUtZmxleHtkaXNwbGF5OmlubGluZS1mbGV4IWltcG9ydGFudH0uZC1ub25le2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LnNoYWRvd3tib3gtc2hhZG93OnZhcigtLWJzLWJveC1zaGFkb3cpIWltcG9ydGFudH0uc2hhZG93LXNte2JveC1zaGFkb3c6dmFyKC0tYnMtYm94LXNoYWRvdy1zbSkhaW1wb3J0YW50fS5zaGFkb3ctbGd7Ym94LXNoYWRvdzp2YXIoLS1icy1ib3gtc2hhZG93LWxnKSFpbXBvcnRhbnR9LnNoYWRvdy1ub25le2JveC1zaGFkb3c6bm9uZSFpbXBvcnRhbnR9LmZvY3VzLXJpbmctcHJpbWFyeXstLWJzLWZvY3VzLXJpbmctY29sb3I6cmdiYSh2YXIoLS1icy1wcmltYXJ5LXJnYiksIHZhcigtLWJzLWZvY3VzLXJpbmctb3BhY2l0eSkpfS5mb2N1cy1yaW5nLXNlY29uZGFyeXstLWJzLWZvY3VzLXJpbmctY29sb3I6cmdiYSh2YXIoLS1icy1zZWNvbmRhcnktcmdiKSwgdmFyKC0tYnMtZm9jdXMtcmluZy1vcGFjaXR5KSl9LmZvY3VzLXJpbmctc3VjY2Vzc3stLWJzLWZvY3VzLXJpbmctY29sb3I6cmdiYSh2YXIoLS1icy1zdWNjZXNzLXJnYiksIHZhcigtLWJzLWZvY3VzLXJpbmctb3BhY2l0eSkpfS5mb2N1cy1yaW5nLWluZm97LS1icy1mb2N1cy1yaW5nLWNvbG9yOnJnYmEodmFyKC0tYnMtaW5mby1yZ2IpLCB2YXIoLS1icy1mb2N1cy1yaW5nLW9wYWNpdHkpKX0uZm9jdXMtcmluZy13YXJuaW5ney0tYnMtZm9jdXMtcmluZy1jb2xvcjpyZ2JhKHZhcigtLWJzLXdhcm5pbmctcmdiKSwgdmFyKC0tYnMtZm9jdXMtcmluZy1vcGFjaXR5KSl9LmZvY3VzLXJpbmctZGFuZ2Vyey0tYnMtZm9jdXMtcmluZy1jb2xvcjpyZ2JhKHZhcigtLWJzLWRhbmdlci1yZ2IpLCB2YXIoLS1icy1mb2N1cy1yaW5nLW9wYWNpdHkpKX0uZm9jdXMtcmluZy1saWdodHstLWJzLWZvY3VzLXJpbmctY29sb3I6cmdiYSh2YXIoLS1icy1saWdodC1yZ2IpLCB2YXIoLS1icy1mb2N1cy1yaW5nLW9wYWNpdHkpKX0uZm9jdXMtcmluZy1kYXJrey0tYnMtZm9jdXMtcmluZy1jb2xvcjpyZ2JhKHZhcigtLWJzLWRhcmstcmdiKSwgdmFyKC0tYnMtZm9jdXMtcmluZy1vcGFjaXR5KSl9LnBvc2l0aW9uLXN0YXRpY3twb3NpdGlvbjpzdGF0aWMhaW1wb3J0YW50fS5wb3NpdGlvbi1yZWxhdGl2ZXtwb3NpdGlvbjpyZWxhdGl2ZSFpbXBvcnRhbnR9LnBvc2l0aW9uLWFic29sdXRle3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudH0ucG9zaXRpb24tZml4ZWR7cG9zaXRpb246Zml4ZWQhaW1wb3J0YW50fS5wb3NpdGlvbi1zdGlja3l7cG9zaXRpb246LXdlYmtpdC1zdGlja3khaW1wb3J0YW50O3Bvc2l0aW9uOnN0aWNreSFpbXBvcnRhbnR9LnRvcC0we3RvcDowIWltcG9ydGFudH0udG9wLTUwe3RvcDo1MCUhaW1wb3J0YW50fS50b3AtMTAwe3RvcDoxMDAlIWltcG9ydGFudH0uYm90dG9tLTB7Ym90dG9tOjAhaW1wb3J0YW50fS5ib3R0b20tNTB7Ym90dG9tOjUwJSFpbXBvcnRhbnR9LmJvdHRvbS0xMDB7Ym90dG9tOjEwMCUhaW1wb3J0YW50fS5zdGFydC0we2xlZnQ6MCFpbXBvcnRhbnR9LnN0YXJ0LTUwe2xlZnQ6NTAlIWltcG9ydGFudH0uc3RhcnQtMTAwe2xlZnQ6MTAwJSFpbXBvcnRhbnR9LmVuZC0we3JpZ2h0OjAhaW1wb3J0YW50fS5lbmQtNTB7cmlnaHQ6NTAlIWltcG9ydGFudH0uZW5kLTEwMHtyaWdodDoxMDAlIWltcG9ydGFudH0udHJhbnNsYXRlLW1pZGRsZXt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkhaW1wb3J0YW50fS50cmFuc2xhdGUtbWlkZGxlLXh7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSkhaW1wb3J0YW50fS50cmFuc2xhdGUtbWlkZGxlLXl7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSkhaW1wb3J0YW50fS5ib3JkZXJ7Ym9yZGVyOnZhcigtLWJzLWJvcmRlci13aWR0aCkgdmFyKC0tYnMtYm9yZGVyLXN0eWxlKSB2YXIoLS1icy1ib3JkZXItY29sb3IpIWltcG9ydGFudH0uYm9yZGVyLTB7Ym9yZGVyOjAhaW1wb3J0YW50fS5ib3JkZXItdG9we2JvcmRlci10b3A6dmFyKC0tYnMtYm9yZGVyLXdpZHRoKSB2YXIoLS1icy1ib3JkZXItc3R5bGUpIHZhcigtLWJzLWJvcmRlci1jb2xvcikhaW1wb3J0YW50fS5ib3JkZXItdG9wLTB7Ym9yZGVyLXRvcDowIWltcG9ydGFudH0uYm9yZGVyLWVuZHtib3JkZXItcmlnaHQ6dmFyKC0tYnMtYm9yZGVyLXdpZHRoKSB2YXIoLS1icy1ib3JkZXItc3R5bGUpIHZhcigtLWJzLWJvcmRlci1jb2xvcikhaW1wb3J0YW50fS5ib3JkZXItZW5kLTB7Ym9yZGVyLXJpZ2h0OjAhaW1wb3J0YW50fS5ib3JkZXItYm90dG9te2JvcmRlci1ib3R0b206dmFyKC0tYnMtYm9yZGVyLXdpZHRoKSB2YXIoLS1icy1ib3JkZXItc3R5bGUpIHZhcigtLWJzLWJvcmRlci1jb2xvcikhaW1wb3J0YW50fS5ib3JkZXItYm90dG9tLTB7Ym9yZGVyLWJvdHRvbTowIWltcG9ydGFudH0uYm9yZGVyLXN0YXJ0e2JvcmRlci1sZWZ0OnZhcigtLWJzLWJvcmRlci13aWR0aCkgdmFyKC0tYnMtYm9yZGVyLXN0eWxlKSB2YXIoLS1icy1ib3JkZXItY29sb3IpIWltcG9ydGFudH0uYm9yZGVyLXN0YXJ0LTB7Ym9yZGVyLWxlZnQ6MCFpbXBvcnRhbnR9LmJvcmRlci1wcmltYXJ5ey0tYnMtYm9yZGVyLW9wYWNpdHk6MTtib3JkZXItY29sb3I6cmdiYSh2YXIoLS1icy1wcmltYXJ5LXJnYiksdmFyKC0tYnMtYm9yZGVyLW9wYWNpdHkpKSFpbXBvcnRhbnR9LmJvcmRlci1zZWNvbmRhcnl7LS1icy1ib3JkZXItb3BhY2l0eToxO2JvcmRlci1jb2xvcjpyZ2JhKHZhcigtLWJzLXNlY29uZGFyeS1yZ2IpLHZhcigtLWJzLWJvcmRlci1vcGFjaXR5KSkhaW1wb3J0YW50fS5ib3JkZXItc3VjY2Vzc3stLWJzLWJvcmRlci1vcGFjaXR5OjE7Ym9yZGVyLWNvbG9yOnJnYmEodmFyKC0tYnMtc3VjY2Vzcy1yZ2IpLHZhcigtLWJzLWJvcmRlci1vcGFjaXR5KSkhaW1wb3J0YW50fS5ib3JkZXItaW5mb3stLWJzLWJvcmRlci1vcGFjaXR5OjE7Ym9yZGVyLWNvbG9yOnJnYmEodmFyKC0tYnMtaW5mby1yZ2IpLHZhcigtLWJzLWJvcmRlci1vcGFjaXR5KSkhaW1wb3J0YW50fS5ib3JkZXItd2FybmluZ3stLWJzLWJvcmRlci1vcGFjaXR5OjE7Ym9yZGVyLWNvbG9yOnJnYmEodmFyKC0tYnMtd2FybmluZy1yZ2IpLHZhcigtLWJzLWJvcmRlci1vcGFjaXR5KSkhaW1wb3J0YW50fS5ib3JkZXItZGFuZ2Vyey0tYnMtYm9yZGVyLW9wYWNpdHk6MTtib3JkZXItY29sb3I6cmdiYSh2YXIoLS1icy1kYW5nZXItcmdiKSx2YXIoLS1icy1ib3JkZXItb3BhY2l0eSkpIWltcG9ydGFudH0uYm9yZGVyLWxpZ2h0ey0tYnMtYm9yZGVyLW9wYWNpdHk6MTtib3JkZXItY29sb3I6cmdiYSh2YXIoLS1icy1saWdodC1yZ2IpLHZhcigtLWJzLWJvcmRlci1vcGFjaXR5KSkhaW1wb3J0YW50fS5ib3JkZXItZGFya3stLWJzLWJvcmRlci1vcGFjaXR5OjE7Ym9yZGVyLWNvbG9yOnJnYmEodmFyKC0tYnMtZGFyay1yZ2IpLHZhcigtLWJzLWJvcmRlci1vcGFjaXR5KSkhaW1wb3J0YW50fS5ib3JkZXItYmxhY2t7LS1icy1ib3JkZXItb3BhY2l0eToxO2JvcmRlci1jb2xvcjpyZ2JhKHZhcigtLWJzLWJsYWNrLXJnYiksdmFyKC0tYnMtYm9yZGVyLW9wYWNpdHkpKSFpbXBvcnRhbnR9LmJvcmRlci13aGl0ZXstLWJzLWJvcmRlci1vcGFjaXR5OjE7Ym9yZGVyLWNvbG9yOnJnYmEodmFyKC0tYnMtd2hpdGUtcmdiKSx2YXIoLS1icy1ib3JkZXItb3BhY2l0eSkpIWltcG9ydGFudH0uYm9yZGVyLXByaW1hcnktc3VidGxle2JvcmRlci1jb2xvcjp2YXIoLS1icy1wcmltYXJ5LWJvcmRlci1zdWJ0bGUpIWltcG9ydGFudH0uYm9yZGVyLXNlY29uZGFyeS1zdWJ0bGV7Ym9yZGVyLWNvbG9yOnZhcigtLWJzLXNlY29uZGFyeS1ib3JkZXItc3VidGxlKSFpbXBvcnRhbnR9LmJvcmRlci1zdWNjZXNzLXN1YnRsZXtib3JkZXItY29sb3I6dmFyKC0tYnMtc3VjY2Vzcy1ib3JkZXItc3VidGxlKSFpbXBvcnRhbnR9LmJvcmRlci1pbmZvLXN1YnRsZXtib3JkZXItY29sb3I6dmFyKC0tYnMtaW5mby1ib3JkZXItc3VidGxlKSFpbXBvcnRhbnR9LmJvcmRlci13YXJuaW5nLXN1YnRsZXtib3JkZXItY29sb3I6dmFyKC0tYnMtd2FybmluZy1ib3JkZXItc3VidGxlKSFpbXBvcnRhbnR9LmJvcmRlci1kYW5nZXItc3VidGxle2JvcmRlci1jb2xvcjp2YXIoLS1icy1kYW5nZXItYm9yZGVyLXN1YnRsZSkhaW1wb3J0YW50fS5ib3JkZXItbGlnaHQtc3VidGxle2JvcmRlci1jb2xvcjp2YXIoLS1icy1saWdodC1ib3JkZXItc3VidGxlKSFpbXBvcnRhbnR9LmJvcmRlci1kYXJrLXN1YnRsZXtib3JkZXItY29sb3I6dmFyKC0tYnMtZGFyay1ib3JkZXItc3VidGxlKSFpbXBvcnRhbnR9LmJvcmRlci0xe2JvcmRlci13aWR0aDoxcHghaW1wb3J0YW50fS5ib3JkZXItMntib3JkZXItd2lkdGg6MnB4IWltcG9ydGFudH0uYm9yZGVyLTN7Ym9yZGVyLXdpZHRoOjNweCFpbXBvcnRhbnR9LmJvcmRlci00e2JvcmRlci13aWR0aDo0cHghaW1wb3J0YW50fS5ib3JkZXItNXtib3JkZXItd2lkdGg6NXB4IWltcG9ydGFudH0uYm9yZGVyLW9wYWNpdHktMTB7LS1icy1ib3JkZXItb3BhY2l0eTowLjF9LmJvcmRlci1vcGFjaXR5LTI1ey0tYnMtYm9yZGVyLW9wYWNpdHk6MC4yNX0uYm9yZGVyLW9wYWNpdHktNTB7LS1icy1ib3JkZXItb3BhY2l0eTowLjV9LmJvcmRlci1vcGFjaXR5LTc1ey0tYnMtYm9yZGVyLW9wYWNpdHk6MC43NX0uYm9yZGVyLW9wYWNpdHktMTAwey0tYnMtYm9yZGVyLW9wYWNpdHk6MX0udy0yNXt3aWR0aDoyNSUhaW1wb3J0YW50fS53LTUwe3dpZHRoOjUwJSFpbXBvcnRhbnR9LnctNzV7d2lkdGg6NzUlIWltcG9ydGFudH0udy0xMDB7d2lkdGg6MTAwJSFpbXBvcnRhbnR9LnctYXV0b3t3aWR0aDphdXRvIWltcG9ydGFudH0ubXctMTAwe21heC13aWR0aDoxMDAlIWltcG9ydGFudH0udnctMTAwe3dpZHRoOjEwMHZ3IWltcG9ydGFudH0ubWluLXZ3LTEwMHttaW4td2lkdGg6MTAwdnchaW1wb3J0YW50fS5oLTI1e2hlaWdodDoyNSUhaW1wb3J0YW50fS5oLTUwe2hlaWdodDo1MCUhaW1wb3J0YW50fS5oLTc1e2hlaWdodDo3NSUhaW1wb3J0YW50fS5oLTEwMHtoZWlnaHQ6MTAwJSFpbXBvcnRhbnR9LmgtYXV0b3toZWlnaHQ6YXV0byFpbXBvcnRhbnR9Lm1oLTEwMHttYXgtaGVpZ2h0OjEwMCUhaW1wb3J0YW50fS52aC0xMDB7aGVpZ2h0OjEwMHZoIWltcG9ydGFudH0ubWluLXZoLTEwMHttaW4taGVpZ2h0OjEwMHZoIWltcG9ydGFudH0uZmxleC1maWxse2ZsZXg6MSAxIGF1dG8haW1wb3J0YW50fS5mbGV4LXJvd3tmbGV4LWRpcmVjdGlvbjpyb3chaW1wb3J0YW50fS5mbGV4LWNvbHVtbntmbGV4LWRpcmVjdGlvbjpjb2x1bW4haW1wb3J0YW50fS5mbGV4LXJvdy1yZXZlcnNle2ZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlIWltcG9ydGFudH0uZmxleC1jb2x1bW4tcmV2ZXJzZXtmbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZSFpbXBvcnRhbnR9LmZsZXgtZ3Jvdy0we2ZsZXgtZ3JvdzowIWltcG9ydGFudH0uZmxleC1ncm93LTF7ZmxleC1ncm93OjEhaW1wb3J0YW50fS5mbGV4LXNocmluay0we2ZsZXgtc2hyaW5rOjAhaW1wb3J0YW50fS5mbGV4LXNocmluay0xe2ZsZXgtc2hyaW5rOjEhaW1wb3J0YW50fS5mbGV4LXdyYXB7ZmxleC13cmFwOndyYXAhaW1wb3J0YW50fS5mbGV4LW5vd3JhcHtmbGV4LXdyYXA6bm93cmFwIWltcG9ydGFudH0uZmxleC13cmFwLXJldmVyc2V7ZmxleC13cmFwOndyYXAtcmV2ZXJzZSFpbXBvcnRhbnR9Lmp1c3RpZnktY29udGVudC1zdGFydHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydCFpbXBvcnRhbnR9Lmp1c3RpZnktY29udGVudC1lbmR7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kIWltcG9ydGFudH0uanVzdGlmeS1jb250ZW50LWNlbnRlcntqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyIWltcG9ydGFudH0uanVzdGlmeS1jb250ZW50LWJldHdlZW57anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW4haW1wb3J0YW50fS5qdXN0aWZ5LWNvbnRlbnQtYXJvdW5ke2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQhaW1wb3J0YW50fS5qdXN0aWZ5LWNvbnRlbnQtZXZlbmx5e2p1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHkhaW1wb3J0YW50fS5hbGlnbi1pdGVtcy1zdGFydHthbGlnbi1pdGVtczpmbGV4LXN0YXJ0IWltcG9ydGFudH0uYWxpZ24taXRlbXMtZW5ke2FsaWduLWl0ZW1zOmZsZXgtZW5kIWltcG9ydGFudH0uYWxpZ24taXRlbXMtY2VudGVye2FsaWduLWl0ZW1zOmNlbnRlciFpbXBvcnRhbnR9LmFsaWduLWl0ZW1zLWJhc2VsaW5le2FsaWduLWl0ZW1zOmJhc2VsaW5lIWltcG9ydGFudH0uYWxpZ24taXRlbXMtc3RyZXRjaHthbGlnbi1pdGVtczpzdHJldGNoIWltcG9ydGFudH0uYWxpZ24tY29udGVudC1zdGFydHthbGlnbi1jb250ZW50OmZsZXgtc3RhcnQhaW1wb3J0YW50fS5hbGlnbi1jb250ZW50LWVuZHthbGlnbi1jb250ZW50OmZsZXgtZW5kIWltcG9ydGFudH0uYWxpZ24tY29udGVudC1jZW50ZXJ7YWxpZ24tY29udGVudDpjZW50ZXIhaW1wb3J0YW50fS5hbGlnbi1jb250ZW50LWJldHdlZW57YWxpZ24tY29udGVudDpzcGFjZS1iZXR3ZWVuIWltcG9ydGFudH0uYWxpZ24tY29udGVudC1hcm91bmR7YWxpZ24tY29udGVudDpzcGFjZS1hcm91bmQhaW1wb3J0YW50fS5hbGlnbi1jb250ZW50LXN0cmV0Y2h7YWxpZ24tY29udGVudDpzdHJldGNoIWltcG9ydGFudH0uYWxpZ24tc2VsZi1hdXRve2FsaWduLXNlbGY6YXV0byFpbXBvcnRhbnR9LmFsaWduLXNlbGYtc3RhcnR7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0IWltcG9ydGFudH0uYWxpZ24tc2VsZi1lbmR7YWxpZ24tc2VsZjpmbGV4LWVuZCFpbXBvcnRhbnR9LmFsaWduLXNlbGYtY2VudGVye2FsaWduLXNlbGY6Y2VudGVyIWltcG9ydGFudH0uYWxpZ24tc2VsZi1iYXNlbGluZXthbGlnbi1zZWxmOmJhc2VsaW5lIWltcG9ydGFudH0uYWxpZ24tc2VsZi1zdHJldGNoe2FsaWduLXNlbGY6c3RyZXRjaCFpbXBvcnRhbnR9Lm9yZGVyLWZpcnN0e29yZGVyOi0xIWltcG9ydGFudH0ub3JkZXItMHtvcmRlcjowIWltcG9ydGFudH0ub3JkZXItMXtvcmRlcjoxIWltcG9ydGFudH0ub3JkZXItMntvcmRlcjoyIWltcG9ydGFudH0ub3JkZXItM3tvcmRlcjozIWltcG9ydGFudH0ub3JkZXItNHtvcmRlcjo0IWltcG9ydGFudH0ub3JkZXItNXtvcmRlcjo1IWltcG9ydGFudH0ub3JkZXItbGFzdHtvcmRlcjo2IWltcG9ydGFudH0ubS0we21hcmdpbjowIWltcG9ydGFudH0ubS0xe21hcmdpbjouMjVyZW0haW1wb3J0YW50fS5tLTJ7bWFyZ2luOi41cmVtIWltcG9ydGFudH0ubS0ze21hcmdpbjoxcmVtIWltcG9ydGFudH0ubS00e21hcmdpbjoxLjVyZW0haW1wb3J0YW50fS5tLTV7bWFyZ2luOjNyZW0haW1wb3J0YW50fS5tLWF1dG97bWFyZ2luOmF1dG8haW1wb3J0YW50fS5teC0we21hcmdpbi1yaWdodDowIWltcG9ydGFudDttYXJnaW4tbGVmdDowIWltcG9ydGFudH0ubXgtMXttYXJnaW4tcmlnaHQ6LjI1cmVtIWltcG9ydGFudDttYXJnaW4tbGVmdDouMjVyZW0haW1wb3J0YW50fS5teC0ye21hcmdpbi1yaWdodDouNXJlbSFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6LjVyZW0haW1wb3J0YW50fS5teC0ze21hcmdpbi1yaWdodDoxcmVtIWltcG9ydGFudDttYXJnaW4tbGVmdDoxcmVtIWltcG9ydGFudH0ubXgtNHttYXJnaW4tcmlnaHQ6MS41cmVtIWltcG9ydGFudDttYXJnaW4tbGVmdDoxLjVyZW0haW1wb3J0YW50fS5teC01e21hcmdpbi1yaWdodDozcmVtIWltcG9ydGFudDttYXJnaW4tbGVmdDozcmVtIWltcG9ydGFudH0ubXgtYXV0b3ttYXJnaW4tcmlnaHQ6YXV0byFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6YXV0byFpbXBvcnRhbnR9Lm15LTB7bWFyZ2luLXRvcDowIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjAhaW1wb3J0YW50fS5teS0xe21hcmdpbi10b3A6LjI1cmVtIWltcG9ydGFudDttYXJnaW4tYm90dG9tOi4yNXJlbSFpbXBvcnRhbnR9Lm15LTJ7bWFyZ2luLXRvcDouNXJlbSFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTouNXJlbSFpbXBvcnRhbnR9Lm15LTN7bWFyZ2luLXRvcDoxcmVtIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjFyZW0haW1wb3J0YW50fS5teS00e21hcmdpbi10b3A6MS41cmVtIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjEuNXJlbSFpbXBvcnRhbnR9Lm15LTV7bWFyZ2luLXRvcDozcmVtIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjNyZW0haW1wb3J0YW50fS5teS1hdXRve21hcmdpbi10b3A6YXV0byFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTphdXRvIWltcG9ydGFudH0ubXQtMHttYXJnaW4tdG9wOjAhaW1wb3J0YW50fS5tdC0xe21hcmdpbi10b3A6LjI1cmVtIWltcG9ydGFudH0ubXQtMnttYXJnaW4tdG9wOi41cmVtIWltcG9ydGFudH0ubXQtM3ttYXJnaW4tdG9wOjFyZW0haW1wb3J0YW50fS5tdC00e21hcmdpbi10b3A6MS41cmVtIWltcG9ydGFudH0ubXQtNXttYXJnaW4tdG9wOjNyZW0haW1wb3J0YW50fS5tdC1hdXRve21hcmdpbi10b3A6YXV0byFpbXBvcnRhbnR9Lm1lLTB7bWFyZ2luLXJpZ2h0OjAhaW1wb3J0YW50fS5tZS0xe21hcmdpbi1yaWdodDouMjVyZW0haW1wb3J0YW50fS5tZS0ye21hcmdpbi1yaWdodDouNXJlbSFpbXBvcnRhbnR9Lm1lLTN7bWFyZ2luLXJpZ2h0OjFyZW0haW1wb3J0YW50fS5tZS00e21hcmdpbi1yaWdodDoxLjVyZW0haW1wb3J0YW50fS5tZS01e21hcmdpbi1yaWdodDozcmVtIWltcG9ydGFudH0ubWUtYXV0b3ttYXJnaW4tcmlnaHQ6YXV0byFpbXBvcnRhbnR9Lm1iLTB7bWFyZ2luLWJvdHRvbTowIWltcG9ydGFudH0ubWItMXttYXJnaW4tYm90dG9tOi4yNXJlbSFpbXBvcnRhbnR9Lm1iLTJ7bWFyZ2luLWJvdHRvbTouNXJlbSFpbXBvcnRhbnR9Lm1iLTN7bWFyZ2luLWJvdHRvbToxcmVtIWltcG9ydGFudH0ubWItNHttYXJnaW4tYm90dG9tOjEuNXJlbSFpbXBvcnRhbnR9Lm1iLTV7bWFyZ2luLWJvdHRvbTozcmVtIWltcG9ydGFudH0ubWItYXV0b3ttYXJnaW4tYm90dG9tOmF1dG8haW1wb3J0YW50fS5tcy0we21hcmdpbi1sZWZ0OjAhaW1wb3J0YW50fS5tcy0xe21hcmdpbi1sZWZ0Oi4yNXJlbSFpbXBvcnRhbnR9Lm1zLTJ7bWFyZ2luLWxlZnQ6LjVyZW0haW1wb3J0YW50fS5tcy0ze21hcmdpbi1sZWZ0OjFyZW0haW1wb3J0YW50fS5tcy00e21hcmdpbi1sZWZ0OjEuNXJlbSFpbXBvcnRhbnR9Lm1zLTV7bWFyZ2luLWxlZnQ6M3JlbSFpbXBvcnRhbnR9Lm1zLWF1dG97bWFyZ2luLWxlZnQ6YXV0byFpbXBvcnRhbnR9LnAtMHtwYWRkaW5nOjAhaW1wb3J0YW50fS5wLTF7cGFkZGluZzouMjVyZW0haW1wb3J0YW50fS5wLTJ7cGFkZGluZzouNXJlbSFpbXBvcnRhbnR9LnAtM3twYWRkaW5nOjFyZW0haW1wb3J0YW50fS5wLTR7cGFkZGluZzoxLjVyZW0haW1wb3J0YW50fS5wLTV7cGFkZGluZzozcmVtIWltcG9ydGFudH0ucHgtMHtwYWRkaW5nLXJpZ2h0OjAhaW1wb3J0YW50O3BhZGRpbmctbGVmdDowIWltcG9ydGFudH0ucHgtMXtwYWRkaW5nLXJpZ2h0Oi4yNXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0Oi4yNXJlbSFpbXBvcnRhbnR9LnB4LTJ7cGFkZGluZy1yaWdodDouNXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0Oi41cmVtIWltcG9ydGFudH0ucHgtM3twYWRkaW5nLXJpZ2h0OjFyZW0haW1wb3J0YW50O3BhZGRpbmctbGVmdDoxcmVtIWltcG9ydGFudH0ucHgtNHtwYWRkaW5nLXJpZ2h0OjEuNXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0OjEuNXJlbSFpbXBvcnRhbnR9LnB4LTV7cGFkZGluZy1yaWdodDozcmVtIWltcG9ydGFudDtwYWRkaW5nLWxlZnQ6M3JlbSFpbXBvcnRhbnR9LnB5LTB7cGFkZGluZy10b3A6MCFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MCFpbXBvcnRhbnR9LnB5LTF7cGFkZGluZy10b3A6LjI1cmVtIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbTouMjVyZW0haW1wb3J0YW50fS5weS0ye3BhZGRpbmctdG9wOi41cmVtIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbTouNXJlbSFpbXBvcnRhbnR9LnB5LTN7cGFkZGluZy10b3A6MXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MXJlbSFpbXBvcnRhbnR9LnB5LTR7cGFkZGluZy10b3A6MS41cmVtIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbToxLjVyZW0haW1wb3J0YW50fS5weS01e3BhZGRpbmctdG9wOjNyZW0haW1wb3J0YW50O3BhZGRpbmctYm90dG9tOjNyZW0haW1wb3J0YW50fS5wdC0we3BhZGRpbmctdG9wOjAhaW1wb3J0YW50fS5wdC0xe3BhZGRpbmctdG9wOi4yNXJlbSFpbXBvcnRhbnR9LnB0LTJ7cGFkZGluZy10b3A6LjVyZW0haW1wb3J0YW50fS5wdC0ze3BhZGRpbmctdG9wOjFyZW0haW1wb3J0YW50fS5wdC00e3BhZGRpbmctdG9wOjEuNXJlbSFpbXBvcnRhbnR9LnB0LTV7cGFkZGluZy10b3A6M3JlbSFpbXBvcnRhbnR9LnBlLTB7cGFkZGluZy1yaWdodDowIWltcG9ydGFudH0ucGUtMXtwYWRkaW5nLXJpZ2h0Oi4yNXJlbSFpbXBvcnRhbnR9LnBlLTJ7cGFkZGluZy1yaWdodDouNXJlbSFpbXBvcnRhbnR9LnBlLTN7cGFkZGluZy1yaWdodDoxcmVtIWltcG9ydGFudH0ucGUtNHtwYWRkaW5nLXJpZ2h0OjEuNXJlbSFpbXBvcnRhbnR9LnBlLTV7cGFkZGluZy1yaWdodDozcmVtIWltcG9ydGFudH0ucGItMHtwYWRkaW5nLWJvdHRvbTowIWltcG9ydGFudH0ucGItMXtwYWRkaW5nLWJvdHRvbTouMjVyZW0haW1wb3J0YW50fS5wYi0ye3BhZGRpbmctYm90dG9tOi41cmVtIWltcG9ydGFudH0ucGItM3twYWRkaW5nLWJvdHRvbToxcmVtIWltcG9ydGFudH0ucGItNHtwYWRkaW5nLWJvdHRvbToxLjVyZW0haW1wb3J0YW50fS5wYi01e3BhZGRpbmctYm90dG9tOjNyZW0haW1wb3J0YW50fS5wcy0we3BhZGRpbmctbGVmdDowIWltcG9ydGFudH0ucHMtMXtwYWRkaW5nLWxlZnQ6LjI1cmVtIWltcG9ydGFudH0ucHMtMntwYWRkaW5nLWxlZnQ6LjVyZW0haW1wb3J0YW50fS5wcy0ze3BhZGRpbmctbGVmdDoxcmVtIWltcG9ydGFudH0ucHMtNHtwYWRkaW5nLWxlZnQ6MS41cmVtIWltcG9ydGFudH0ucHMtNXtwYWRkaW5nLWxlZnQ6M3JlbSFpbXBvcnRhbnR9LmdhcC0we2dhcDowIWltcG9ydGFudH0uZ2FwLTF7Z2FwOi4yNXJlbSFpbXBvcnRhbnR9LmdhcC0ye2dhcDouNXJlbSFpbXBvcnRhbnR9LmdhcC0ze2dhcDoxcmVtIWltcG9ydGFudH0uZ2FwLTR7Z2FwOjEuNXJlbSFpbXBvcnRhbnR9LmdhcC01e2dhcDozcmVtIWltcG9ydGFudH0ucm93LWdhcC0we3Jvdy1nYXA6MCFpbXBvcnRhbnR9LnJvdy1nYXAtMXtyb3ctZ2FwOi4yNXJlbSFpbXBvcnRhbnR9LnJvdy1nYXAtMntyb3ctZ2FwOi41cmVtIWltcG9ydGFudH0ucm93LWdhcC0ze3Jvdy1nYXA6MXJlbSFpbXBvcnRhbnR9LnJvdy1nYXAtNHtyb3ctZ2FwOjEuNXJlbSFpbXBvcnRhbnR9LnJvdy1nYXAtNXtyb3ctZ2FwOjNyZW0haW1wb3J0YW50fS5jb2x1bW4tZ2FwLTB7LW1vei1jb2x1bW4tZ2FwOjAhaW1wb3J0YW50O2NvbHVtbi1nYXA6MCFpbXBvcnRhbnR9LmNvbHVtbi1nYXAtMXstbW96LWNvbHVtbi1nYXA6MC4yNXJlbSFpbXBvcnRhbnQ7Y29sdW1uLWdhcDouMjVyZW0haW1wb3J0YW50fS5jb2x1bW4tZ2FwLTJ7LW1vei1jb2x1bW4tZ2FwOjAuNXJlbSFpbXBvcnRhbnQ7Y29sdW1uLWdhcDouNXJlbSFpbXBvcnRhbnR9LmNvbHVtbi1nYXAtM3stbW96LWNvbHVtbi1nYXA6MXJlbSFpbXBvcnRhbnQ7Y29sdW1uLWdhcDoxcmVtIWltcG9ydGFudH0uY29sdW1uLWdhcC00ey1tb3otY29sdW1uLWdhcDoxLjVyZW0haW1wb3J0YW50O2NvbHVtbi1nYXA6MS41cmVtIWltcG9ydGFudH0uY29sdW1uLWdhcC01ey1tb3otY29sdW1uLWdhcDozcmVtIWltcG9ydGFudDtjb2x1bW4tZ2FwOjNyZW0haW1wb3J0YW50fS5mb250LW1vbm9zcGFjZXtmb250LWZhbWlseTp2YXIoLS1icy1mb250LW1vbm9zcGFjZSkhaW1wb3J0YW50fS5mcy0xe2ZvbnQtc2l6ZTpjYWxjKDEuMzc1cmVtICsgMS41dncpIWltcG9ydGFudH0uZnMtMntmb250LXNpemU6Y2FsYygxLjMyNXJlbSArIC45dncpIWltcG9ydGFudH0uZnMtM3tmb250LXNpemU6Y2FsYygxLjNyZW0gKyAuNnZ3KSFpbXBvcnRhbnR9LmZzLTR7Zm9udC1zaXplOmNhbGMoMS4yNzVyZW0gKyAuM3Z3KSFpbXBvcnRhbnR9LmZzLTV7Zm9udC1zaXplOjEuMjVyZW0haW1wb3J0YW50fS5mcy02e2ZvbnQtc2l6ZToxcmVtIWltcG9ydGFudH0uZnN0LWl0YWxpY3tmb250LXN0eWxlOml0YWxpYyFpbXBvcnRhbnR9LmZzdC1ub3JtYWx7Zm9udC1zdHlsZTpub3JtYWwhaW1wb3J0YW50fS5mdy1saWdodGVye2ZvbnQtd2VpZ2h0OmxpZ2h0ZXIhaW1wb3J0YW50fS5mdy1saWdodHtmb250LXdlaWdodDozMDAhaW1wb3J0YW50fS5mdy1ub3JtYWx7Zm9udC13ZWlnaHQ6NDAwIWltcG9ydGFudH0uZnctbWVkaXVte2ZvbnQtd2VpZ2h0OjUwMCFpbXBvcnRhbnR9LmZ3LXNlbWlib2xke2ZvbnQtd2VpZ2h0OjYwMCFpbXBvcnRhbnR9LmZ3LWJvbGR7Zm9udC13ZWlnaHQ6NzAwIWltcG9ydGFudH0uZnctYm9sZGVye2ZvbnQtd2VpZ2h0OmJvbGRlciFpbXBvcnRhbnR9LmxoLTF7bGluZS1oZWlnaHQ6MSFpbXBvcnRhbnR9LmxoLXNte2xpbmUtaGVpZ2h0OjEuMjUhaW1wb3J0YW50fS5saC1iYXNle2xpbmUtaGVpZ2h0OjEuNSFpbXBvcnRhbnR9LmxoLWxne2xpbmUtaGVpZ2h0OjIhaW1wb3J0YW50fS50ZXh0LXN0YXJ0e3RleHQtYWxpZ246bGVmdCFpbXBvcnRhbnR9LnRleHQtZW5ke3RleHQtYWxpZ246cmlnaHQhaW1wb3J0YW50fS50ZXh0LWNlbnRlcnt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnR9LnRleHQtZGVjb3JhdGlvbi1ub25le3RleHQtZGVjb3JhdGlvbjpub25lIWltcG9ydGFudH0udGV4dC1kZWNvcmF0aW9uLXVuZGVybGluZXt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIWltcG9ydGFudH0udGV4dC1kZWNvcmF0aW9uLWxpbmUtdGhyb3VnaHt0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoIWltcG9ydGFudH0udGV4dC1sb3dlcmNhc2V7dGV4dC10cmFuc2Zvcm06bG93ZXJjYXNlIWltcG9ydGFudH0udGV4dC11cHBlcmNhc2V7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlIWltcG9ydGFudH0udGV4dC1jYXBpdGFsaXple3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemUhaW1wb3J0YW50fS50ZXh0LXdyYXB7d2hpdGUtc3BhY2U6bm9ybWFsIWltcG9ydGFudH0udGV4dC1ub3dyYXB7d2hpdGUtc3BhY2U6bm93cmFwIWltcG9ydGFudH0udGV4dC1icmVha3t3b3JkLXdyYXA6YnJlYWstd29yZCFpbXBvcnRhbnQ7d29yZC1icmVhazpicmVhay13b3JkIWltcG9ydGFudH0udGV4dC1wcmltYXJ5ey0tYnMtdGV4dC1vcGFjaXR5OjE7Y29sb3I6cmdiYSh2YXIoLS1icy1wcmltYXJ5LXJnYiksdmFyKC0tYnMtdGV4dC1vcGFjaXR5KSkhaW1wb3J0YW50fS50ZXh0LXNlY29uZGFyeXstLWJzLXRleHQtb3BhY2l0eToxO2NvbG9yOnJnYmEodmFyKC0tYnMtc2Vjb25kYXJ5LXJnYiksdmFyKC0tYnMtdGV4dC1vcGFjaXR5KSkhaW1wb3J0YW50fS50ZXh0LXN1Y2Nlc3N7LS1icy10ZXh0LW9wYWNpdHk6MTtjb2xvcjpyZ2JhKHZhcigtLWJzLXN1Y2Nlc3MtcmdiKSx2YXIoLS1icy10ZXh0LW9wYWNpdHkpKSFpbXBvcnRhbnR9LnRleHQtaW5mb3stLWJzLXRleHQtb3BhY2l0eToxO2NvbG9yOnJnYmEodmFyKC0tYnMtaW5mby1yZ2IpLHZhcigtLWJzLXRleHQtb3BhY2l0eSkpIWltcG9ydGFudH0udGV4dC13YXJuaW5ney0tYnMtdGV4dC1vcGFjaXR5OjE7Y29sb3I6cmdiYSh2YXIoLS1icy13YXJuaW5nLXJnYiksdmFyKC0tYnMtdGV4dC1vcGFjaXR5KSkhaW1wb3J0YW50fS50ZXh0LWRhbmdlcnstLWJzLXRleHQtb3BhY2l0eToxO2NvbG9yOnJnYmEodmFyKC0tYnMtZGFuZ2VyLXJnYiksdmFyKC0tYnMtdGV4dC1vcGFjaXR5KSkhaW1wb3J0YW50fS50ZXh0LWxpZ2h0ey0tYnMtdGV4dC1vcGFjaXR5OjE7Y29sb3I6cmdiYSh2YXIoLS1icy1saWdodC1yZ2IpLHZhcigtLWJzLXRleHQtb3BhY2l0eSkpIWltcG9ydGFudH0udGV4dC1kYXJrey0tYnMtdGV4dC1vcGFjaXR5OjE7Y29sb3I6cmdiYSh2YXIoLS1icy1kYXJrLXJnYiksdmFyKC0tYnMtdGV4dC1vcGFjaXR5KSkhaW1wb3J0YW50fS50ZXh0LWJsYWNrey0tYnMtdGV4dC1vcGFjaXR5OjE7Y29sb3I6cmdiYSh2YXIoLS1icy1ibGFjay1yZ2IpLHZhcigtLWJzLXRleHQtb3BhY2l0eSkpIWltcG9ydGFudH0udGV4dC13aGl0ZXstLWJzLXRleHQtb3BhY2l0eToxO2NvbG9yOnJnYmEodmFyKC0tYnMtd2hpdGUtcmdiKSx2YXIoLS1icy10ZXh0LW9wYWNpdHkpKSFpbXBvcnRhbnR9LnRleHQtYm9keXstLWJzLXRleHQtb3BhY2l0eToxO2NvbG9yOnJnYmEodmFyKC0tYnMtYm9keS1jb2xvci1yZ2IpLHZhcigtLWJzLXRleHQtb3BhY2l0eSkpIWltcG9ydGFudH0udGV4dC1tdXRlZHstLWJzLXRleHQtb3BhY2l0eToxO2NvbG9yOnZhcigtLWJzLXNlY29uZGFyeS1jb2xvcikhaW1wb3J0YW50fS50ZXh0LWJsYWNrLTUwey0tYnMtdGV4dC1vcGFjaXR5OjE7Y29sb3I6cmdiYSgwLDAsMCwuNSkhaW1wb3J0YW50fS50ZXh0LXdoaXRlLTUwey0tYnMtdGV4dC1vcGFjaXR5OjE7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNSkhaW1wb3J0YW50fS50ZXh0LWJvZHktc2Vjb25kYXJ5ey0tYnMtdGV4dC1vcGFjaXR5OjE7Y29sb3I6dmFyKC0tYnMtc2Vjb25kYXJ5LWNvbG9yKSFpbXBvcnRhbnR9LnRleHQtYm9keS10ZXJ0aWFyeXstLWJzLXRleHQtb3BhY2l0eToxO2NvbG9yOnZhcigtLWJzLXRlcnRpYXJ5LWNvbG9yKSFpbXBvcnRhbnR9LnRleHQtYm9keS1lbXBoYXNpc3stLWJzLXRleHQtb3BhY2l0eToxO2NvbG9yOnZhcigtLWJzLWVtcGhhc2lzLWNvbG9yKSFpbXBvcnRhbnR9LnRleHQtcmVzZXR7LS1icy10ZXh0LW9wYWNpdHk6MTtjb2xvcjppbmhlcml0IWltcG9ydGFudH0udGV4dC1vcGFjaXR5LTI1ey0tYnMtdGV4dC1vcGFjaXR5OjAuMjV9LnRleHQtb3BhY2l0eS01MHstLWJzLXRleHQtb3BhY2l0eTowLjV9LnRleHQtb3BhY2l0eS03NXstLWJzLXRleHQtb3BhY2l0eTowLjc1fS50ZXh0LW9wYWNpdHktMTAwey0tYnMtdGV4dC1vcGFjaXR5OjF9LnRleHQtcHJpbWFyeS1lbXBoYXNpc3tjb2xvcjp2YXIoLS1icy1wcmltYXJ5LXRleHQtZW1waGFzaXMpIWltcG9ydGFudH0udGV4dC1zZWNvbmRhcnktZW1waGFzaXN7Y29sb3I6dmFyKC0tYnMtc2Vjb25kYXJ5LXRleHQtZW1waGFzaXMpIWltcG9ydGFudH0udGV4dC1zdWNjZXNzLWVtcGhhc2lze2NvbG9yOnZhcigtLWJzLXN1Y2Nlc3MtdGV4dC1lbXBoYXNpcykhaW1wb3J0YW50fS50ZXh0LWluZm8tZW1waGFzaXN7Y29sb3I6dmFyKC0tYnMtaW5mby10ZXh0LWVtcGhhc2lzKSFpbXBvcnRhbnR9LnRleHQtd2FybmluZy1lbXBoYXNpc3tjb2xvcjp2YXIoLS1icy13YXJuaW5nLXRleHQtZW1waGFzaXMpIWltcG9ydGFudH0udGV4dC1kYW5nZXItZW1waGFzaXN7Y29sb3I6dmFyKC0tYnMtZGFuZ2VyLXRleHQtZW1waGFzaXMpIWltcG9ydGFudH0udGV4dC1saWdodC1lbXBoYXNpc3tjb2xvcjp2YXIoLS1icy1saWdodC10ZXh0LWVtcGhhc2lzKSFpbXBvcnRhbnR9LnRleHQtZGFyay1lbXBoYXNpc3tjb2xvcjp2YXIoLS1icy1kYXJrLXRleHQtZW1waGFzaXMpIWltcG9ydGFudH0ubGluay1vcGFjaXR5LTEwey0tYnMtbGluay1vcGFjaXR5OjAuMX0ubGluay1vcGFjaXR5LTEwLWhvdmVyOmhvdmVyey0tYnMtbGluay1vcGFjaXR5OjAuMX0ubGluay1vcGFjaXR5LTI1ey0tYnMtbGluay1vcGFjaXR5OjAuMjV9Lmxpbmstb3BhY2l0eS0yNS1ob3Zlcjpob3ZlcnstLWJzLWxpbmstb3BhY2l0eTowLjI1fS5saW5rLW9wYWNpdHktNTB7LS1icy1saW5rLW9wYWNpdHk6MC41fS5saW5rLW9wYWNpdHktNTAtaG92ZXI6aG92ZXJ7LS1icy1saW5rLW9wYWNpdHk6MC41fS5saW5rLW9wYWNpdHktNzV7LS1icy1saW5rLW9wYWNpdHk6MC43NX0ubGluay1vcGFjaXR5LTc1LWhvdmVyOmhvdmVyey0tYnMtbGluay1vcGFjaXR5OjAuNzV9Lmxpbmstb3BhY2l0eS0xMDB7LS1icy1saW5rLW9wYWNpdHk6MX0ubGluay1vcGFjaXR5LTEwMC1ob3Zlcjpob3ZlcnstLWJzLWxpbmstb3BhY2l0eToxfS5saW5rLW9mZnNldC0xe3RleHQtdW5kZXJsaW5lLW9mZnNldDowLjEyNWVtIWltcG9ydGFudH0ubGluay1vZmZzZXQtMS1ob3Zlcjpob3Zlcnt0ZXh0LXVuZGVybGluZS1vZmZzZXQ6MC4xMjVlbSFpbXBvcnRhbnR9Lmxpbmstb2Zmc2V0LTJ7dGV4dC11bmRlcmxpbmUtb2Zmc2V0OjAuMjVlbSFpbXBvcnRhbnR9Lmxpbmstb2Zmc2V0LTItaG92ZXI6aG92ZXJ7dGV4dC11bmRlcmxpbmUtb2Zmc2V0OjAuMjVlbSFpbXBvcnRhbnR9Lmxpbmstb2Zmc2V0LTN7dGV4dC11bmRlcmxpbmUtb2Zmc2V0OjAuMzc1ZW0haW1wb3J0YW50fS5saW5rLW9mZnNldC0zLWhvdmVyOmhvdmVye3RleHQtdW5kZXJsaW5lLW9mZnNldDowLjM3NWVtIWltcG9ydGFudH0ubGluay11bmRlcmxpbmUtcHJpbWFyeXstLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHk6MTstd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvcjpyZ2JhKHZhcigtLWJzLXByaW1hcnktcmdiKSx2YXIoLS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5KSkhaW1wb3J0YW50O3RleHQtZGVjb3JhdGlvbi1jb2xvcjpyZ2JhKHZhcigtLWJzLXByaW1hcnktcmdiKSx2YXIoLS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5KSkhaW1wb3J0YW50fS5saW5rLXVuZGVybGluZS1zZWNvbmRhcnl7LS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5OjE7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3I6cmdiYSh2YXIoLS1icy1zZWNvbmRhcnktcmdiKSx2YXIoLS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5KSkhaW1wb3J0YW50O3RleHQtZGVjb3JhdGlvbi1jb2xvcjpyZ2JhKHZhcigtLWJzLXNlY29uZGFyeS1yZ2IpLHZhcigtLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHkpKSFpbXBvcnRhbnR9LmxpbmstdW5kZXJsaW5lLXN1Y2Nlc3N7LS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5OjE7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3I6cmdiYSh2YXIoLS1icy1zdWNjZXNzLXJnYiksdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSkpIWltcG9ydGFudDt0ZXh0LWRlY29yYXRpb24tY29sb3I6cmdiYSh2YXIoLS1icy1zdWNjZXNzLXJnYiksdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSkpIWltcG9ydGFudH0ubGluay11bmRlcmxpbmUtaW5mb3stLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHk6MTstd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvcjpyZ2JhKHZhcigtLWJzLWluZm8tcmdiKSx2YXIoLS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5KSkhaW1wb3J0YW50O3RleHQtZGVjb3JhdGlvbi1jb2xvcjpyZ2JhKHZhcigtLWJzLWluZm8tcmdiKSx2YXIoLS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5KSkhaW1wb3J0YW50fS5saW5rLXVuZGVybGluZS13YXJuaW5ney0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eToxOy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yOnJnYmEodmFyKC0tYnMtd2FybmluZy1yZ2IpLHZhcigtLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHkpKSFpbXBvcnRhbnQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOnJnYmEodmFyKC0tYnMtd2FybmluZy1yZ2IpLHZhcigtLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHkpKSFpbXBvcnRhbnR9LmxpbmstdW5kZXJsaW5lLWRhbmdlcnstLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHk6MTstd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvcjpyZ2JhKHZhcigtLWJzLWRhbmdlci1yZ2IpLHZhcigtLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHkpKSFpbXBvcnRhbnQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOnJnYmEodmFyKC0tYnMtZGFuZ2VyLXJnYiksdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSkpIWltcG9ydGFudH0ubGluay11bmRlcmxpbmUtbGlnaHR7LS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5OjE7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3I6cmdiYSh2YXIoLS1icy1saWdodC1yZ2IpLHZhcigtLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHkpKSFpbXBvcnRhbnQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOnJnYmEodmFyKC0tYnMtbGlnaHQtcmdiKSx2YXIoLS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5KSkhaW1wb3J0YW50fS5saW5rLXVuZGVybGluZS1kYXJrey0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eToxOy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yOnJnYmEodmFyKC0tYnMtZGFyay1yZ2IpLHZhcigtLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHkpKSFpbXBvcnRhbnQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOnJnYmEodmFyKC0tYnMtZGFyay1yZ2IpLHZhcigtLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHkpKSFpbXBvcnRhbnR9LmxpbmstdW5kZXJsaW5ley0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eToxOy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yOnJnYmEodmFyKC0tYnMtbGluay1jb2xvci1yZ2IpLHZhcigtLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHksMSkpIWltcG9ydGFudDt0ZXh0LWRlY29yYXRpb24tY29sb3I6cmdiYSh2YXIoLS1icy1saW5rLWNvbG9yLXJnYiksdmFyKC0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eSwxKSkhaW1wb3J0YW50fS5saW5rLXVuZGVybGluZS1vcGFjaXR5LTB7LS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5OjB9LmxpbmstdW5kZXJsaW5lLW9wYWNpdHktMC1ob3Zlcjpob3ZlcnstLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHk6MH0ubGluay11bmRlcmxpbmUtb3BhY2l0eS0xMHstLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHk6MC4xfS5saW5rLXVuZGVybGluZS1vcGFjaXR5LTEwLWhvdmVyOmhvdmVyey0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eTowLjF9LmxpbmstdW5kZXJsaW5lLW9wYWNpdHktMjV7LS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5OjAuMjV9LmxpbmstdW5kZXJsaW5lLW9wYWNpdHktMjUtaG92ZXI6aG92ZXJ7LS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5OjAuMjV9LmxpbmstdW5kZXJsaW5lLW9wYWNpdHktNTB7LS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5OjAuNX0ubGluay11bmRlcmxpbmUtb3BhY2l0eS01MC1ob3Zlcjpob3ZlcnstLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHk6MC41fS5saW5rLXVuZGVybGluZS1vcGFjaXR5LTc1ey0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eTowLjc1fS5saW5rLXVuZGVybGluZS1vcGFjaXR5LTc1LWhvdmVyOmhvdmVyey0tYnMtbGluay11bmRlcmxpbmUtb3BhY2l0eTowLjc1fS5saW5rLXVuZGVybGluZS1vcGFjaXR5LTEwMHstLWJzLWxpbmstdW5kZXJsaW5lLW9wYWNpdHk6MX0ubGluay11bmRlcmxpbmUtb3BhY2l0eS0xMDAtaG92ZXI6aG92ZXJ7LS1icy1saW5rLXVuZGVybGluZS1vcGFjaXR5OjF9LmJnLXByaW1hcnl7LS1icy1iZy1vcGFjaXR5OjE7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKHZhcigtLWJzLXByaW1hcnktcmdiKSx2YXIoLS1icy1iZy1vcGFjaXR5KSkhaW1wb3J0YW50fS5iZy1zZWNvbmRhcnl7LS1icy1iZy1vcGFjaXR5OjE7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKHZhcigtLWJzLXNlY29uZGFyeS1yZ2IpLHZhcigtLWJzLWJnLW9wYWNpdHkpKSFpbXBvcnRhbnR9LmJnLXN1Y2Nlc3N7LS1icy1iZy1vcGFjaXR5OjE7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKHZhcigtLWJzLXN1Y2Nlc3MtcmdiKSx2YXIoLS1icy1iZy1vcGFjaXR5KSkhaW1wb3J0YW50fS5iZy1pbmZvey0tYnMtYmctb3BhY2l0eToxO2JhY2tncm91bmQtY29sb3I6cmdiYSh2YXIoLS1icy1pbmZvLXJnYiksdmFyKC0tYnMtYmctb3BhY2l0eSkpIWltcG9ydGFudH0uYmctd2FybmluZ3stLWJzLWJnLW9wYWNpdHk6MTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEodmFyKC0tYnMtd2FybmluZy1yZ2IpLHZhcigtLWJzLWJnLW9wYWNpdHkpKSFpbXBvcnRhbnR9LmJnLWRhbmdlcnstLWJzLWJnLW9wYWNpdHk6MTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEodmFyKC0tYnMtZGFuZ2VyLXJnYiksdmFyKC0tYnMtYmctb3BhY2l0eSkpIWltcG9ydGFudH0uYmctbGlnaHR7LS1icy1iZy1vcGFjaXR5OjE7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKHZhcigtLWJzLWxpZ2h0LXJnYiksdmFyKC0tYnMtYmctb3BhY2l0eSkpIWltcG9ydGFudH0uYmctZGFya3stLWJzLWJnLW9wYWNpdHk6MTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEodmFyKC0tYnMtZGFyay1yZ2IpLHZhcigtLWJzLWJnLW9wYWNpdHkpKSFpbXBvcnRhbnR9LmJnLWJsYWNrey0tYnMtYmctb3BhY2l0eToxO2JhY2tncm91bmQtY29sb3I6cmdiYSh2YXIoLS1icy1ibGFjay1yZ2IpLHZhcigtLWJzLWJnLW9wYWNpdHkpKSFpbXBvcnRhbnR9LmJnLXdoaXRley0tYnMtYmctb3BhY2l0eToxO2JhY2tncm91bmQtY29sb3I6cmdiYSh2YXIoLS1icy13aGl0ZS1yZ2IpLHZhcigtLWJzLWJnLW9wYWNpdHkpKSFpbXBvcnRhbnR9LmJnLWJvZHl7LS1icy1iZy1vcGFjaXR5OjE7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKHZhcigtLWJzLWJvZHktYmctcmdiKSx2YXIoLS1icy1iZy1vcGFjaXR5KSkhaW1wb3J0YW50fS5iZy10cmFuc3BhcmVudHstLWJzLWJnLW9wYWNpdHk6MTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudH0uYmctYm9keS1zZWNvbmRhcnl7LS1icy1iZy1vcGFjaXR5OjE7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKHZhcigtLWJzLXNlY29uZGFyeS1iZy1yZ2IpLHZhcigtLWJzLWJnLW9wYWNpdHkpKSFpbXBvcnRhbnR9LmJnLWJvZHktdGVydGlhcnl7LS1icy1iZy1vcGFjaXR5OjE7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKHZhcigtLWJzLXRlcnRpYXJ5LWJnLXJnYiksdmFyKC0tYnMtYmctb3BhY2l0eSkpIWltcG9ydGFudH0uYmctb3BhY2l0eS0xMHstLWJzLWJnLW9wYWNpdHk6MC4xfS5iZy1vcGFjaXR5LTI1ey0tYnMtYmctb3BhY2l0eTowLjI1fS5iZy1vcGFjaXR5LTUwey0tYnMtYmctb3BhY2l0eTowLjV9LmJnLW9wYWNpdHktNzV7LS1icy1iZy1vcGFjaXR5OjAuNzV9LmJnLW9wYWNpdHktMTAwey0tYnMtYmctb3BhY2l0eToxfS5iZy1wcmltYXJ5LXN1YnRsZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLXByaW1hcnktYmctc3VidGxlKSFpbXBvcnRhbnR9LmJnLXNlY29uZGFyeS1zdWJ0bGV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1zZWNvbmRhcnktYmctc3VidGxlKSFpbXBvcnRhbnR9LmJnLXN1Y2Nlc3Mtc3VidGxle2JhY2tncm91bmQtY29sb3I6dmFyKC0tYnMtc3VjY2Vzcy1iZy1zdWJ0bGUpIWltcG9ydGFudH0uYmctaW5mby1zdWJ0bGV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1pbmZvLWJnLXN1YnRsZSkhaW1wb3J0YW50fS5iZy13YXJuaW5nLXN1YnRsZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLXdhcm5pbmctYmctc3VidGxlKSFpbXBvcnRhbnR9LmJnLWRhbmdlci1zdWJ0bGV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icy1kYW5nZXItYmctc3VidGxlKSFpbXBvcnRhbnR9LmJnLWxpZ2h0LXN1YnRsZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLWxpZ2h0LWJnLXN1YnRsZSkhaW1wb3J0YW50fS5iZy1kYXJrLXN1YnRsZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJzLWRhcmstYmctc3VidGxlKSFpbXBvcnRhbnR9LmJnLWdyYWRpZW50e2JhY2tncm91bmQtaW1hZ2U6dmFyKC0tYnMtZ3JhZGllbnQpIWltcG9ydGFudH0udXNlci1zZWxlY3QtYWxsey13ZWJraXQtdXNlci1zZWxlY3Q6YWxsIWltcG9ydGFudDstbW96LXVzZXItc2VsZWN0OmFsbCFpbXBvcnRhbnQ7dXNlci1zZWxlY3Q6YWxsIWltcG9ydGFudH0udXNlci1zZWxlY3QtYXV0b3std2Via2l0LXVzZXItc2VsZWN0OmF1dG8haW1wb3J0YW50Oy1tb3otdXNlci1zZWxlY3Q6YXV0byFpbXBvcnRhbnQ7dXNlci1zZWxlY3Q6YXV0byFpbXBvcnRhbnR9LnVzZXItc2VsZWN0LW5vbmV7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lIWltcG9ydGFudDstbW96LXVzZXItc2VsZWN0Om5vbmUhaW1wb3J0YW50O3VzZXItc2VsZWN0Om5vbmUhaW1wb3J0YW50fS5wZS1ub25le3BvaW50ZXItZXZlbnRzOm5vbmUhaW1wb3J0YW50fS5wZS1hdXRve3BvaW50ZXItZXZlbnRzOmF1dG8haW1wb3J0YW50fS5yb3VuZGVke2JvcmRlci1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cykhaW1wb3J0YW50fS5yb3VuZGVkLTB7Ym9yZGVyLXJhZGl1czowIWltcG9ydGFudH0ucm91bmRlZC0xe2JvcmRlci1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cy1zbSkhaW1wb3J0YW50fS5yb3VuZGVkLTJ7Ym9yZGVyLXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzKSFpbXBvcnRhbnR9LnJvdW5kZWQtM3tib3JkZXItcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtbGcpIWltcG9ydGFudH0ucm91bmRlZC00e2JvcmRlci1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cy14bCkhaW1wb3J0YW50fS5yb3VuZGVkLTV7Ym9yZGVyLXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXh4bCkhaW1wb3J0YW50fS5yb3VuZGVkLWNpcmNsZXtib3JkZXItcmFkaXVzOjUwJSFpbXBvcnRhbnR9LnJvdW5kZWQtcGlsbHtib3JkZXItcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtcGlsbCkhaW1wb3J0YW50fS5yb3VuZGVkLXRvcHtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMpIWltcG9ydGFudDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzKSFpbXBvcnRhbnR9LnJvdW5kZWQtdG9wLTB7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowIWltcG9ydGFudDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowIWltcG9ydGFudH0ucm91bmRlZC10b3AtMXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtc20pIWltcG9ydGFudDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXNtKSFpbXBvcnRhbnR9LnJvdW5kZWQtdG9wLTJ7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzKSFpbXBvcnRhbnQ7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cykhaW1wb3J0YW50fS5yb3VuZGVkLXRvcC0ze2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cy1sZykhaW1wb3J0YW50O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtbGcpIWltcG9ydGFudH0ucm91bmRlZC10b3AtNHtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMteGwpIWltcG9ydGFudDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXhsKSFpbXBvcnRhbnR9LnJvdW5kZWQtdG9wLTV7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXh4bCkhaW1wb3J0YW50O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMteHhsKSFpbXBvcnRhbnR9LnJvdW5kZWQtdG9wLWNpcmNsZXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjUwJSFpbXBvcnRhbnQ7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NTAlIWltcG9ydGFudH0ucm91bmRlZC10b3AtcGlsbHtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtcGlsbCkhaW1wb3J0YW50O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtcGlsbCkhaW1wb3J0YW50fS5yb3VuZGVkLWVuZHtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzKSFpbXBvcnRhbnQ7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cykhaW1wb3J0YW50fS5yb3VuZGVkLWVuZC0we2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjAhaW1wb3J0YW50O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjAhaW1wb3J0YW50fS5yb3VuZGVkLWVuZC0xe2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtc20pIWltcG9ydGFudDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXNtKSFpbXBvcnRhbnR9LnJvdW5kZWQtZW5kLTJ7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cykhaW1wb3J0YW50O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMpIWltcG9ydGFudH0ucm91bmRlZC1lbmQtM3tib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLWxnKSFpbXBvcnRhbnQ7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cy1sZykhaW1wb3J0YW50fS5yb3VuZGVkLWVuZC00e2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMteGwpIWltcG9ydGFudDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXhsKSFpbXBvcnRhbnR9LnJvdW5kZWQtZW5kLTV7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cy14eGwpIWltcG9ydGFudDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXh4bCkhaW1wb3J0YW50fS5yb3VuZGVkLWVuZC1jaXJjbGV7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NTAlIWltcG9ydGFudDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1MCUhaW1wb3J0YW50fS5yb3VuZGVkLWVuZC1waWxse2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtcGlsbCkhaW1wb3J0YW50O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtcGlsbCkhaW1wb3J0YW50fS5yb3VuZGVkLWJvdHRvbXtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzKSFpbXBvcnRhbnQ7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzKSFpbXBvcnRhbnR9LnJvdW5kZWQtYm90dG9tLTB7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MCFpbXBvcnRhbnQ7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowIWltcG9ydGFudH0ucm91bmRlZC1ib3R0b20tMXtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXNtKSFpbXBvcnRhbnQ7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXNtKSFpbXBvcnRhbnR9LnJvdW5kZWQtYm90dG9tLTJ7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cykhaW1wb3J0YW50O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cykhaW1wb3J0YW50fS5yb3VuZGVkLWJvdHRvbS0ze2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtbGcpIWltcG9ydGFudDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtbGcpIWltcG9ydGFudH0ucm91bmRlZC1ib3R0b20tNHtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXhsKSFpbXBvcnRhbnQ7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXhsKSFpbXBvcnRhbnR9LnJvdW5kZWQtYm90dG9tLTV7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cy14eGwpIWltcG9ydGFudDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMteHhsKSFpbXBvcnRhbnR9LnJvdW5kZWQtYm90dG9tLWNpcmNsZXtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1MCUhaW1wb3J0YW50O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NTAlIWltcG9ydGFudH0ucm91bmRlZC1ib3R0b20tcGlsbHtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXBpbGwpIWltcG9ydGFudDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtcGlsbCkhaW1wb3J0YW50fS5yb3VuZGVkLXN0YXJ0e2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cykhaW1wb3J0YW50O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cykhaW1wb3J0YW50fS5yb3VuZGVkLXN0YXJ0LTB7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowIWltcG9ydGFudDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjAhaW1wb3J0YW50fS5yb3VuZGVkLXN0YXJ0LTF7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXNtKSFpbXBvcnRhbnQ7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXNtKSFpbXBvcnRhbnR9LnJvdW5kZWQtc3RhcnQtMntib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMpIWltcG9ydGFudDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMpIWltcG9ydGFudH0ucm91bmRlZC1zdGFydC0ze2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cy1sZykhaW1wb3J0YW50O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tYnMtYm9yZGVyLXJhZGl1cy1sZykhaW1wb3J0YW50fS5yb3VuZGVkLXN0YXJ0LTR7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXhsKSFpbXBvcnRhbnQ7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXhsKSFpbXBvcnRhbnR9LnJvdW5kZWQtc3RhcnQtNXtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMteHhsKSFpbXBvcnRhbnQ7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXh4bCkhaW1wb3J0YW50fS5yb3VuZGVkLXN0YXJ0LWNpcmNsZXtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjUwJSFpbXBvcnRhbnQ7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo1MCUhaW1wb3J0YW50fS5yb3VuZGVkLXN0YXJ0LXBpbGx7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1icy1ib3JkZXItcmFkaXVzLXBpbGwpIWltcG9ydGFudDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJzLWJvcmRlci1yYWRpdXMtcGlsbCkhaW1wb3J0YW50fS52aXNpYmxle3Zpc2liaWxpdHk6dmlzaWJsZSFpbXBvcnRhbnR9LmludmlzaWJsZXt2aXNpYmlsaXR5OmhpZGRlbiFpbXBvcnRhbnR9LnotbjF7ei1pbmRleDotMSFpbXBvcnRhbnR9LnotMHt6LWluZGV4OjAhaW1wb3J0YW50fS56LTF7ei1pbmRleDoxIWltcG9ydGFudH0uei0ye3otaW5kZXg6MiFpbXBvcnRhbnR9LnotM3t6LWluZGV4OjMhaW1wb3J0YW50fUBtZWRpYSAobWluLXdpZHRoOjU3NnB4KXsuZmxvYXQtc20tc3RhcnR7ZmxvYXQ6bGVmdCFpbXBvcnRhbnR9LmZsb2F0LXNtLWVuZHtmbG9hdDpyaWdodCFpbXBvcnRhbnR9LmZsb2F0LXNtLW5vbmV7ZmxvYXQ6bm9uZSFpbXBvcnRhbnR9Lm9iamVjdC1maXQtc20tY29udGFpbnstby1vYmplY3QtZml0OmNvbnRhaW4haW1wb3J0YW50O29iamVjdC1maXQ6Y29udGFpbiFpbXBvcnRhbnR9Lm9iamVjdC1maXQtc20tY292ZXJ7LW8tb2JqZWN0LWZpdDpjb3ZlciFpbXBvcnRhbnQ7b2JqZWN0LWZpdDpjb3ZlciFpbXBvcnRhbnR9Lm9iamVjdC1maXQtc20tZmlsbHstby1vYmplY3QtZml0OmZpbGwhaW1wb3J0YW50O29iamVjdC1maXQ6ZmlsbCFpbXBvcnRhbnR9Lm9iamVjdC1maXQtc20tc2NhbGV7LW8tb2JqZWN0LWZpdDpzY2FsZS1kb3duIWltcG9ydGFudDtvYmplY3QtZml0OnNjYWxlLWRvd24haW1wb3J0YW50fS5vYmplY3QtZml0LXNtLW5vbmV7LW8tb2JqZWN0LWZpdDpub25lIWltcG9ydGFudDtvYmplY3QtZml0Om5vbmUhaW1wb3J0YW50fS5kLXNtLWlubGluZXtkaXNwbGF5OmlubGluZSFpbXBvcnRhbnR9LmQtc20taW5saW5lLWJsb2Nre2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudH0uZC1zbS1ibG9ja3tkaXNwbGF5OmJsb2NrIWltcG9ydGFudH0uZC1zbS1ncmlke2Rpc3BsYXk6Z3JpZCFpbXBvcnRhbnR9LmQtc20taW5saW5lLWdyaWR7ZGlzcGxheTppbmxpbmUtZ3JpZCFpbXBvcnRhbnR9LmQtc20tdGFibGV7ZGlzcGxheTp0YWJsZSFpbXBvcnRhbnR9LmQtc20tdGFibGUtcm93e2Rpc3BsYXk6dGFibGUtcm93IWltcG9ydGFudH0uZC1zbS10YWJsZS1jZWxse2Rpc3BsYXk6dGFibGUtY2VsbCFpbXBvcnRhbnR9LmQtc20tZmxleHtkaXNwbGF5OmZsZXghaW1wb3J0YW50fS5kLXNtLWlubGluZS1mbGV4e2Rpc3BsYXk6aW5saW5lLWZsZXghaW1wb3J0YW50fS5kLXNtLW5vbmV7ZGlzcGxheTpub25lIWltcG9ydGFudH0uZmxleC1zbS1maWxse2ZsZXg6MSAxIGF1dG8haW1wb3J0YW50fS5mbGV4LXNtLXJvd3tmbGV4LWRpcmVjdGlvbjpyb3chaW1wb3J0YW50fS5mbGV4LXNtLWNvbHVtbntmbGV4LWRpcmVjdGlvbjpjb2x1bW4haW1wb3J0YW50fS5mbGV4LXNtLXJvdy1yZXZlcnNle2ZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlIWltcG9ydGFudH0uZmxleC1zbS1jb2x1bW4tcmV2ZXJzZXtmbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZSFpbXBvcnRhbnR9LmZsZXgtc20tZ3Jvdy0we2ZsZXgtZ3JvdzowIWltcG9ydGFudH0uZmxleC1zbS1ncm93LTF7ZmxleC1ncm93OjEhaW1wb3J0YW50fS5mbGV4LXNtLXNocmluay0we2ZsZXgtc2hyaW5rOjAhaW1wb3J0YW50fS5mbGV4LXNtLXNocmluay0xe2ZsZXgtc2hyaW5rOjEhaW1wb3J0YW50fS5mbGV4LXNtLXdyYXB7ZmxleC13cmFwOndyYXAhaW1wb3J0YW50fS5mbGV4LXNtLW5vd3JhcHtmbGV4LXdyYXA6bm93cmFwIWltcG9ydGFudH0uZmxleC1zbS13cmFwLXJldmVyc2V7ZmxleC13cmFwOndyYXAtcmV2ZXJzZSFpbXBvcnRhbnR9Lmp1c3RpZnktY29udGVudC1zbS1zdGFydHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydCFpbXBvcnRhbnR9Lmp1c3RpZnktY29udGVudC1zbS1lbmR7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kIWltcG9ydGFudH0uanVzdGlmeS1jb250ZW50LXNtLWNlbnRlcntqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyIWltcG9ydGFudH0uanVzdGlmeS1jb250ZW50LXNtLWJldHdlZW57anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW4haW1wb3J0YW50fS5qdXN0aWZ5LWNvbnRlbnQtc20tYXJvdW5ke2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQhaW1wb3J0YW50fS5qdXN0aWZ5LWNvbnRlbnQtc20tZXZlbmx5e2p1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHkhaW1wb3J0YW50fS5hbGlnbi1pdGVtcy1zbS1zdGFydHthbGlnbi1pdGVtczpmbGV4LXN0YXJ0IWltcG9ydGFudH0uYWxpZ24taXRlbXMtc20tZW5ke2FsaWduLWl0ZW1zOmZsZXgtZW5kIWltcG9ydGFudH0uYWxpZ24taXRlbXMtc20tY2VudGVye2FsaWduLWl0ZW1zOmNlbnRlciFpbXBvcnRhbnR9LmFsaWduLWl0ZW1zLXNtLWJhc2VsaW5le2FsaWduLWl0ZW1zOmJhc2VsaW5lIWltcG9ydGFudH0uYWxpZ24taXRlbXMtc20tc3RyZXRjaHthbGlnbi1pdGVtczpzdHJldGNoIWltcG9ydGFudH0uYWxpZ24tY29udGVudC1zbS1zdGFydHthbGlnbi1jb250ZW50OmZsZXgtc3RhcnQhaW1wb3J0YW50fS5hbGlnbi1jb250ZW50LXNtLWVuZHthbGlnbi1jb250ZW50OmZsZXgtZW5kIWltcG9ydGFudH0uYWxpZ24tY29udGVudC1zbS1jZW50ZXJ7YWxpZ24tY29udGVudDpjZW50ZXIhaW1wb3J0YW50fS5hbGlnbi1jb250ZW50LXNtLWJldHdlZW57YWxpZ24tY29udGVudDpzcGFjZS1iZXR3ZWVuIWltcG9ydGFudH0uYWxpZ24tY29udGVudC1zbS1hcm91bmR7YWxpZ24tY29udGVudDpzcGFjZS1hcm91bmQhaW1wb3J0YW50fS5hbGlnbi1jb250ZW50LXNtLXN0cmV0Y2h7YWxpZ24tY29udGVudDpzdHJldGNoIWltcG9ydGFudH0uYWxpZ24tc2VsZi1zbS1hdXRve2FsaWduLXNlbGY6YXV0byFpbXBvcnRhbnR9LmFsaWduLXNlbGYtc20tc3RhcnR7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0IWltcG9ydGFudH0uYWxpZ24tc2VsZi1zbS1lbmR7YWxpZ24tc2VsZjpmbGV4LWVuZCFpbXBvcnRhbnR9LmFsaWduLXNlbGYtc20tY2VudGVye2FsaWduLXNlbGY6Y2VudGVyIWltcG9ydGFudH0uYWxpZ24tc2VsZi1zbS1iYXNlbGluZXthbGlnbi1zZWxmOmJhc2VsaW5lIWltcG9ydGFudH0uYWxpZ24tc2VsZi1zbS1zdHJldGNoe2FsaWduLXNlbGY6c3RyZXRjaCFpbXBvcnRhbnR9Lm9yZGVyLXNtLWZpcnN0e29yZGVyOi0xIWltcG9ydGFudH0ub3JkZXItc20tMHtvcmRlcjowIWltcG9ydGFudH0ub3JkZXItc20tMXtvcmRlcjoxIWltcG9ydGFudH0ub3JkZXItc20tMntvcmRlcjoyIWltcG9ydGFudH0ub3JkZXItc20tM3tvcmRlcjozIWltcG9ydGFudH0ub3JkZXItc20tNHtvcmRlcjo0IWltcG9ydGFudH0ub3JkZXItc20tNXtvcmRlcjo1IWltcG9ydGFudH0ub3JkZXItc20tbGFzdHtvcmRlcjo2IWltcG9ydGFudH0ubS1zbS0we21hcmdpbjowIWltcG9ydGFudH0ubS1zbS0xe21hcmdpbjouMjVyZW0haW1wb3J0YW50fS5tLXNtLTJ7bWFyZ2luOi41cmVtIWltcG9ydGFudH0ubS1zbS0ze21hcmdpbjoxcmVtIWltcG9ydGFudH0ubS1zbS00e21hcmdpbjoxLjVyZW0haW1wb3J0YW50fS5tLXNtLTV7bWFyZ2luOjNyZW0haW1wb3J0YW50fS5tLXNtLWF1dG97bWFyZ2luOmF1dG8haW1wb3J0YW50fS5teC1zbS0we21hcmdpbi1yaWdodDowIWltcG9ydGFudDttYXJnaW4tbGVmdDowIWltcG9ydGFudH0ubXgtc20tMXttYXJnaW4tcmlnaHQ6LjI1cmVtIWltcG9ydGFudDttYXJnaW4tbGVmdDouMjVyZW0haW1wb3J0YW50fS5teC1zbS0ye21hcmdpbi1yaWdodDouNXJlbSFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6LjVyZW0haW1wb3J0YW50fS5teC1zbS0ze21hcmdpbi1yaWdodDoxcmVtIWltcG9ydGFudDttYXJnaW4tbGVmdDoxcmVtIWltcG9ydGFudH0ubXgtc20tNHttYXJnaW4tcmlnaHQ6MS41cmVtIWltcG9ydGFudDttYXJnaW4tbGVmdDoxLjVyZW0haW1wb3J0YW50fS5teC1zbS01e21hcmdpbi1yaWdodDozcmVtIWltcG9ydGFudDttYXJnaW4tbGVmdDozcmVtIWltcG9ydGFudH0ubXgtc20tYXV0b3ttYXJnaW4tcmlnaHQ6YXV0byFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6YXV0byFpbXBvcnRhbnR9Lm15LXNtLTB7bWFyZ2luLXRvcDowIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjAhaW1wb3J0YW50fS5teS1zbS0xe21hcmdpbi10b3A6LjI1cmVtIWltcG9ydGFudDttYXJnaW4tYm90dG9tOi4yNXJlbSFpbXBvcnRhbnR9Lm15LXNtLTJ7bWFyZ2luLXRvcDouNXJlbSFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTouNXJlbSFpbXBvcnRhbnR9Lm15LXNtLTN7bWFyZ2luLXRvcDoxcmVtIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjFyZW0haW1wb3J0YW50fS5teS1zbS00e21hcmdpbi10b3A6MS41cmVtIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjEuNXJlbSFpbXBvcnRhbnR9Lm15LXNtLTV7bWFyZ2luLXRvcDozcmVtIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjNyZW0haW1wb3J0YW50fS5teS1zbS1hdXRve21hcmdpbi10b3A6YXV0byFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTphdXRvIWltcG9ydGFudH0ubXQtc20tMHttYXJnaW4tdG9wOjAhaW1wb3J0YW50fS5tdC1zbS0xe21hcmdpbi10b3A6LjI1cmVtIWltcG9ydGFudH0ubXQtc20tMnttYXJnaW4tdG9wOi41cmVtIWltcG9ydGFudH0ubXQtc20tM3ttYXJnaW4tdG9wOjFyZW0haW1wb3J0YW50fS5tdC1zbS00e21hcmdpbi10b3A6MS41cmVtIWltcG9ydGFudH0ubXQtc20tNXttYXJnaW4tdG9wOjNyZW0haW1wb3J0YW50fS5tdC1zbS1hdXRve21hcmdpbi10b3A6YXV0byFpbXBvcnRhbnR9Lm1lLXNtLTB7bWFyZ2luLXJpZ2h0OjAhaW1wb3J0YW50fS5tZS1zbS0xe21hcmdpbi1yaWdodDouMjVyZW0haW1wb3J0YW50fS5tZS1zbS0ye21hcmdpbi1yaWdodDouNXJlbSFpbXBvcnRhbnR9Lm1lLXNtLTN7bWFyZ2luLXJpZ2h0OjFyZW0haW1wb3J0YW50fS5tZS1zbS00e21hcmdpbi1yaWdodDoxLjVyZW0haW1wb3J0YW50fS5tZS1zbS01e21hcmdpbi1yaWdodDozcmVtIWltcG9ydGFudH0ubWUtc20tYXV0b3ttYXJnaW4tcmlnaHQ6YXV0byFpbXBvcnRhbnR9Lm1iLXNtLTB7bWFyZ2luLWJvdHRvbTowIWltcG9ydGFudH0ubWItc20tMXttYXJnaW4tYm90dG9tOi4yNXJlbSFpbXBvcnRhbnR9Lm1iLXNtLTJ7bWFyZ2luLWJvdHRvbTouNXJlbSFpbXBvcnRhbnR9Lm1iLXNtLTN7bWFyZ2luLWJvdHRvbToxcmVtIWltcG9ydGFudH0ubWItc20tNHttYXJnaW4tYm90dG9tOjEuNXJlbSFpbXBvcnRhbnR9Lm1iLXNtLTV7bWFyZ2luLWJvdHRvbTozcmVtIWltcG9ydGFudH0ubWItc20tYXV0b3ttYXJnaW4tYm90dG9tOmF1dG8haW1wb3J0YW50fS5tcy1zbS0we21hcmdpbi1sZWZ0OjAhaW1wb3J0YW50fS5tcy1zbS0xe21hcmdpbi1sZWZ0Oi4yNXJlbSFpbXBvcnRhbnR9Lm1zLXNtLTJ7bWFyZ2luLWxlZnQ6LjVyZW0haW1wb3J0YW50fS5tcy1zbS0ze21hcmdpbi1sZWZ0OjFyZW0haW1wb3J0YW50fS5tcy1zbS00e21hcmdpbi1sZWZ0OjEuNXJlbSFpbXBvcnRhbnR9Lm1zLXNtLTV7bWFyZ2luLWxlZnQ6M3JlbSFpbXBvcnRhbnR9Lm1zLXNtLWF1dG97bWFyZ2luLWxlZnQ6YXV0byFpbXBvcnRhbnR9LnAtc20tMHtwYWRkaW5nOjAhaW1wb3J0YW50fS5wLXNtLTF7cGFkZGluZzouMjVyZW0haW1wb3J0YW50fS5wLXNtLTJ7cGFkZGluZzouNXJlbSFpbXBvcnRhbnR9LnAtc20tM3twYWRkaW5nOjFyZW0haW1wb3J0YW50fS5wLXNtLTR7cGFkZGluZzoxLjVyZW0haW1wb3J0YW50fS5wLXNtLTV7cGFkZGluZzozcmVtIWltcG9ydGFudH0ucHgtc20tMHtwYWRkaW5nLXJpZ2h0OjAhaW1wb3J0YW50O3BhZGRpbmctbGVmdDowIWltcG9ydGFudH0ucHgtc20tMXtwYWRkaW5nLXJpZ2h0Oi4yNXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0Oi4yNXJlbSFpbXBvcnRhbnR9LnB4LXNtLTJ7cGFkZGluZy1yaWdodDouNXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0Oi41cmVtIWltcG9ydGFudH0ucHgtc20tM3twYWRkaW5nLXJpZ2h0OjFyZW0haW1wb3J0YW50O3BhZGRpbmctbGVmdDoxcmVtIWltcG9ydGFudH0ucHgtc20tNHtwYWRkaW5nLXJpZ2h0OjEuNXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0OjEuNXJlbSFpbXBvcnRhbnR9LnB4LXNtLTV7cGFkZGluZy1yaWdodDozcmVtIWltcG9ydGFudDtwYWRkaW5nLWxlZnQ6M3JlbSFpbXBvcnRhbnR9LnB5LXNtLTB7cGFkZGluZy10b3A6MCFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MCFpbXBvcnRhbnR9LnB5LXNtLTF7cGFkZGluZy10b3A6LjI1cmVtIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbTouMjVyZW0haW1wb3J0YW50fS5weS1zbS0ye3BhZGRpbmctdG9wOi41cmVtIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbTouNXJlbSFpbXBvcnRhbnR9LnB5LXNtLTN7cGFkZGluZy10b3A6MXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MXJlbSFpbXBvcnRhbnR9LnB5LXNtLTR7cGFkZGluZy10b3A6MS41cmVtIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbToxLjVyZW0haW1wb3J0YW50fS5weS1zbS01e3BhZGRpbmctdG9wOjNyZW0haW1wb3J0YW50O3BhZGRpbmctYm90dG9tOjNyZW0haW1wb3J0YW50fS5wdC1zbS0we3BhZGRpbmctdG9wOjAhaW1wb3J0YW50fS5wdC1zbS0xe3BhZGRpbmctdG9wOi4yNXJlbSFpbXBvcnRhbnR9LnB0LXNtLTJ7cGFkZGluZy10b3A6LjVyZW0haW1wb3J0YW50fS5wdC1zbS0ze3BhZGRpbmctdG9wOjFyZW0haW1wb3J0YW50fS5wdC1zbS00e3BhZGRpbmctdG9wOjEuNXJlbSFpbXBvcnRhbnR9LnB0LXNtLTV7cGFkZGluZy10b3A6M3JlbSFpbXBvcnRhbnR9LnBlLXNtLTB7cGFkZGluZy1yaWdodDowIWltcG9ydGFudH0ucGUtc20tMXtwYWRkaW5nLXJpZ2h0Oi4yNXJlbSFpbXBvcnRhbnR9LnBlLXNtLTJ7cGFkZGluZy1yaWdodDouNXJlbSFpbXBvcnRhbnR9LnBlLXNtLTN7cGFkZGluZy1yaWdodDoxcmVtIWltcG9ydGFudH0ucGUtc20tNHtwYWRkaW5nLXJpZ2h0OjEuNXJlbSFpbXBvcnRhbnR9LnBlLXNtLTV7cGFkZGluZy1yaWdodDozcmVtIWltcG9ydGFudH0ucGItc20tMHtwYWRkaW5nLWJvdHRvbTowIWltcG9ydGFudH0ucGItc20tMXtwYWRkaW5nLWJvdHRvbTouMjVyZW0haW1wb3J0YW50fS5wYi1zbS0ye3BhZGRpbmctYm90dG9tOi41cmVtIWltcG9ydGFudH0ucGItc20tM3twYWRkaW5nLWJvdHRvbToxcmVtIWltcG9ydGFudH0ucGItc20tNHtwYWRkaW5nLWJvdHRvbToxLjVyZW0haW1wb3J0YW50fS5wYi1zbS01e3BhZGRpbmctYm90dG9tOjNyZW0haW1wb3J0YW50fS5wcy1zbS0we3BhZGRpbmctbGVmdDowIWltcG9ydGFudH0ucHMtc20tMXtwYWRkaW5nLWxlZnQ6LjI1cmVtIWltcG9ydGFudH0ucHMtc20tMntwYWRkaW5nLWxlZnQ6LjVyZW0haW1wb3J0YW50fS5wcy1zbS0ze3BhZGRpbmctbGVmdDoxcmVtIWltcG9ydGFudH0ucHMtc20tNHtwYWRkaW5nLWxlZnQ6MS41cmVtIWltcG9ydGFudH0ucHMtc20tNXtwYWRkaW5nLWxlZnQ6M3JlbSFpbXBvcnRhbnR9LmdhcC1zbS0we2dhcDowIWltcG9ydGFudH0uZ2FwLXNtLTF7Z2FwOi4yNXJlbSFpbXBvcnRhbnR9LmdhcC1zbS0ye2dhcDouNXJlbSFpbXBvcnRhbnR9LmdhcC1zbS0ze2dhcDoxcmVtIWltcG9ydGFudH0uZ2FwLXNtLTR7Z2FwOjEuNXJlbSFpbXBvcnRhbnR9LmdhcC1zbS01e2dhcDozcmVtIWltcG9ydGFudH0ucm93LWdhcC1zbS0we3Jvdy1nYXA6MCFpbXBvcnRhbnR9LnJvdy1nYXAtc20tMXtyb3ctZ2FwOi4yNXJlbSFpbXBvcnRhbnR9LnJvdy1nYXAtc20tMntyb3ctZ2FwOi41cmVtIWltcG9ydGFudH0ucm93LWdhcC1zbS0ze3Jvdy1nYXA6MXJlbSFpbXBvcnRhbnR9LnJvdy1nYXAtc20tNHtyb3ctZ2FwOjEuNXJlbSFpbXBvcnRhbnR9LnJvdy1nYXAtc20tNXtyb3ctZ2FwOjNyZW0haW1wb3J0YW50fS5jb2x1bW4tZ2FwLXNtLTB7LW1vei1jb2x1bW4tZ2FwOjAhaW1wb3J0YW50O2NvbHVtbi1nYXA6MCFpbXBvcnRhbnR9LmNvbHVtbi1nYXAtc20tMXstbW96LWNvbHVtbi1nYXA6MC4yNXJlbSFpbXBvcnRhbnQ7Y29sdW1uLWdhcDouMjVyZW0haW1wb3J0YW50fS5jb2x1bW4tZ2FwLXNtLTJ7LW1vei1jb2x1bW4tZ2FwOjAuNXJlbSFpbXBvcnRhbnQ7Y29sdW1uLWdhcDouNXJlbSFpbXBvcnRhbnR9LmNvbHVtbi1nYXAtc20tM3stbW96LWNvbHVtbi1nYXA6MXJlbSFpbXBvcnRhbnQ7Y29sdW1uLWdhcDoxcmVtIWltcG9ydGFudH0uY29sdW1uLWdhcC1zbS00ey1tb3otY29sdW1uLWdhcDoxLjVyZW0haW1wb3J0YW50O2NvbHVtbi1nYXA6MS41cmVtIWltcG9ydGFudH0uY29sdW1uLWdhcC1zbS01ey1tb3otY29sdW1uLWdhcDozcmVtIWltcG9ydGFudDtjb2x1bW4tZ2FwOjNyZW0haW1wb3J0YW50fS50ZXh0LXNtLXN0YXJ0e3RleHQtYWxpZ246bGVmdCFpbXBvcnRhbnR9LnRleHQtc20tZW5ke3RleHQtYWxpZ246cmlnaHQhaW1wb3J0YW50fS50ZXh0LXNtLWNlbnRlcnt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZmxvYXQtbWQtc3RhcnR7ZmxvYXQ6bGVmdCFpbXBvcnRhbnR9LmZsb2F0LW1kLWVuZHtmbG9hdDpyaWdodCFpbXBvcnRhbnR9LmZsb2F0LW1kLW5vbmV7ZmxvYXQ6bm9uZSFpbXBvcnRhbnR9Lm9iamVjdC1maXQtbWQtY29udGFpbnstby1vYmplY3QtZml0OmNvbnRhaW4haW1wb3J0YW50O29iamVjdC1maXQ6Y29udGFpbiFpbXBvcnRhbnR9Lm9iamVjdC1maXQtbWQtY292ZXJ7LW8tb2JqZWN0LWZpdDpjb3ZlciFpbXBvcnRhbnQ7b2JqZWN0LWZpdDpjb3ZlciFpbXBvcnRhbnR9Lm9iamVjdC1maXQtbWQtZmlsbHstby1vYmplY3QtZml0OmZpbGwhaW1wb3J0YW50O29iamVjdC1maXQ6ZmlsbCFpbXBvcnRhbnR9Lm9iamVjdC1maXQtbWQtc2NhbGV7LW8tb2JqZWN0LWZpdDpzY2FsZS1kb3duIWltcG9ydGFudDtvYmplY3QtZml0OnNjYWxlLWRvd24haW1wb3J0YW50fS5vYmplY3QtZml0LW1kLW5vbmV7LW8tb2JqZWN0LWZpdDpub25lIWltcG9ydGFudDtvYmplY3QtZml0Om5vbmUhaW1wb3J0YW50fS5kLW1kLWlubGluZXtkaXNwbGF5OmlubGluZSFpbXBvcnRhbnR9LmQtbWQtaW5saW5lLWJsb2Nre2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudH0uZC1tZC1ibG9ja3tkaXNwbGF5OmJsb2NrIWltcG9ydGFudH0uZC1tZC1ncmlke2Rpc3BsYXk6Z3JpZCFpbXBvcnRhbnR9LmQtbWQtaW5saW5lLWdyaWR7ZGlzcGxheTppbmxpbmUtZ3JpZCFpbXBvcnRhbnR9LmQtbWQtdGFibGV7ZGlzcGxheTp0YWJsZSFpbXBvcnRhbnR9LmQtbWQtdGFibGUtcm93e2Rpc3BsYXk6dGFibGUtcm93IWltcG9ydGFudH0uZC1tZC10YWJsZS1jZWxse2Rpc3BsYXk6dGFibGUtY2VsbCFpbXBvcnRhbnR9LmQtbWQtZmxleHtkaXNwbGF5OmZsZXghaW1wb3J0YW50fS5kLW1kLWlubGluZS1mbGV4e2Rpc3BsYXk6aW5saW5lLWZsZXghaW1wb3J0YW50fS5kLW1kLW5vbmV7ZGlzcGxheTpub25lIWltcG9ydGFudH0uZmxleC1tZC1maWxse2ZsZXg6MSAxIGF1dG8haW1wb3J0YW50fS5mbGV4LW1kLXJvd3tmbGV4LWRpcmVjdGlvbjpyb3chaW1wb3J0YW50fS5mbGV4LW1kLWNvbHVtbntmbGV4LWRpcmVjdGlvbjpjb2x1bW4haW1wb3J0YW50fS5mbGV4LW1kLXJvdy1yZXZlcnNle2ZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlIWltcG9ydGFudH0uZmxleC1tZC1jb2x1bW4tcmV2ZXJzZXtmbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZSFpbXBvcnRhbnR9LmZsZXgtbWQtZ3Jvdy0we2ZsZXgtZ3JvdzowIWltcG9ydGFudH0uZmxleC1tZC1ncm93LTF7ZmxleC1ncm93OjEhaW1wb3J0YW50fS5mbGV4LW1kLXNocmluay0we2ZsZXgtc2hyaW5rOjAhaW1wb3J0YW50fS5mbGV4LW1kLXNocmluay0xe2ZsZXgtc2hyaW5rOjEhaW1wb3J0YW50fS5mbGV4LW1kLXdyYXB7ZmxleC13cmFwOndyYXAhaW1wb3J0YW50fS5mbGV4LW1kLW5vd3JhcHtmbGV4LXdyYXA6bm93cmFwIWltcG9ydGFudH0uZmxleC1tZC13cmFwLXJldmVyc2V7ZmxleC13cmFwOndyYXAtcmV2ZXJzZSFpbXBvcnRhbnR9Lmp1c3RpZnktY29udGVudC1tZC1zdGFydHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydCFpbXBvcnRhbnR9Lmp1c3RpZnktY29udGVudC1tZC1lbmR7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kIWltcG9ydGFudH0uanVzdGlmeS1jb250ZW50LW1kLWNlbnRlcntqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyIWltcG9ydGFudH0uanVzdGlmeS1jb250ZW50LW1kLWJldHdlZW57anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW4haW1wb3J0YW50fS5qdXN0aWZ5LWNvbnRlbnQtbWQtYXJvdW5ke2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQhaW1wb3J0YW50fS5qdXN0aWZ5LWNvbnRlbnQtbWQtZXZlbmx5e2p1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHkhaW1wb3J0YW50fS5hbGlnbi1pdGVtcy1tZC1zdGFydHthbGlnbi1pdGVtczpmbGV4LXN0YXJ0IWltcG9ydGFudH0uYWxpZ24taXRlbXMtbWQtZW5ke2FsaWduLWl0ZW1zOmZsZXgtZW5kIWltcG9ydGFudH0uYWxpZ24taXRlbXMtbWQtY2VudGVye2FsaWduLWl0ZW1zOmNlbnRlciFpbXBvcnRhbnR9LmFsaWduLWl0ZW1zLW1kLWJhc2VsaW5le2FsaWduLWl0ZW1zOmJhc2VsaW5lIWltcG9ydGFudH0uYWxpZ24taXRlbXMtbWQtc3RyZXRjaHthbGlnbi1pdGVtczpzdHJldGNoIWltcG9ydGFudH0uYWxpZ24tY29udGVudC1tZC1zdGFydHthbGlnbi1jb250ZW50OmZsZXgtc3RhcnQhaW1wb3J0YW50fS5hbGlnbi1jb250ZW50LW1kLWVuZHthbGlnbi1jb250ZW50OmZsZXgtZW5kIWltcG9ydGFudH0uYWxpZ24tY29udGVudC1tZC1jZW50ZXJ7YWxpZ24tY29udGVudDpjZW50ZXIhaW1wb3J0YW50fS5hbGlnbi1jb250ZW50LW1kLWJldHdlZW57YWxpZ24tY29udGVudDpzcGFjZS1iZXR3ZWVuIWltcG9ydGFudH0uYWxpZ24tY29udGVudC1tZC1hcm91bmR7YWxpZ24tY29udGVudDpzcGFjZS1hcm91bmQhaW1wb3J0YW50fS5hbGlnbi1jb250ZW50LW1kLXN0cmV0Y2h7YWxpZ24tY29udGVudDpzdHJldGNoIWltcG9ydGFudH0uYWxpZ24tc2VsZi1tZC1hdXRve2FsaWduLXNlbGY6YXV0byFpbXBvcnRhbnR9LmFsaWduLXNlbGYtbWQtc3RhcnR7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0IWltcG9ydGFudH0uYWxpZ24tc2VsZi1tZC1lbmR7YWxpZ24tc2VsZjpmbGV4LWVuZCFpbXBvcnRhbnR9LmFsaWduLXNlbGYtbWQtY2VudGVye2FsaWduLXNlbGY6Y2VudGVyIWltcG9ydGFudH0uYWxpZ24tc2VsZi1tZC1iYXNlbGluZXthbGlnbi1zZWxmOmJhc2VsaW5lIWltcG9ydGFudH0uYWxpZ24tc2VsZi1tZC1zdHJldGNoe2FsaWduLXNlbGY6c3RyZXRjaCFpbXBvcnRhbnR9Lm9yZGVyLW1kLWZpcnN0e29yZGVyOi0xIWltcG9ydGFudH0ub3JkZXItbWQtMHtvcmRlcjowIWltcG9ydGFudH0ub3JkZXItbWQtMXtvcmRlcjoxIWltcG9ydGFudH0ub3JkZXItbWQtMntvcmRlcjoyIWltcG9ydGFudH0ub3JkZXItbWQtM3tvcmRlcjozIWltcG9ydGFudH0ub3JkZXItbWQtNHtvcmRlcjo0IWltcG9ydGFudH0ub3JkZXItbWQtNXtvcmRlcjo1IWltcG9ydGFudH0ub3JkZXItbWQtbGFzdHtvcmRlcjo2IWltcG9ydGFudH0ubS1tZC0we21hcmdpbjowIWltcG9ydGFudH0ubS1tZC0xe21hcmdpbjouMjVyZW0haW1wb3J0YW50fS5tLW1kLTJ7bWFyZ2luOi41cmVtIWltcG9ydGFudH0ubS1tZC0ze21hcmdpbjoxcmVtIWltcG9ydGFudH0ubS1tZC00e21hcmdpbjoxLjVyZW0haW1wb3J0YW50fS5tLW1kLTV7bWFyZ2luOjNyZW0haW1wb3J0YW50fS5tLW1kLWF1dG97bWFyZ2luOmF1dG8haW1wb3J0YW50fS5teC1tZC0we21hcmdpbi1yaWdodDowIWltcG9ydGFudDttYXJnaW4tbGVmdDowIWltcG9ydGFudH0ubXgtbWQtMXttYXJnaW4tcmlnaHQ6LjI1cmVtIWltcG9ydGFudDttYXJnaW4tbGVmdDouMjVyZW0haW1wb3J0YW50fS5teC1tZC0ye21hcmdpbi1yaWdodDouNXJlbSFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6LjVyZW0haW1wb3J0YW50fS5teC1tZC0ze21hcmdpbi1yaWdodDoxcmVtIWltcG9ydGFudDttYXJnaW4tbGVmdDoxcmVtIWltcG9ydGFudH0ubXgtbWQtNHttYXJnaW4tcmlnaHQ6MS41cmVtIWltcG9ydGFudDttYXJnaW4tbGVmdDoxLjVyZW0haW1wb3J0YW50fS5teC1tZC01e21hcmdpbi1yaWdodDozcmVtIWltcG9ydGFudDttYXJnaW4tbGVmdDozcmVtIWltcG9ydGFudH0ubXgtbWQtYXV0b3ttYXJnaW4tcmlnaHQ6YXV0byFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6YXV0byFpbXBvcnRhbnR9Lm15LW1kLTB7bWFyZ2luLXRvcDowIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjAhaW1wb3J0YW50fS5teS1tZC0xe21hcmdpbi10b3A6LjI1cmVtIWltcG9ydGFudDttYXJnaW4tYm90dG9tOi4yNXJlbSFpbXBvcnRhbnR9Lm15LW1kLTJ7bWFyZ2luLXRvcDouNXJlbSFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTouNXJlbSFpbXBvcnRhbnR9Lm15LW1kLTN7bWFyZ2luLXRvcDoxcmVtIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjFyZW0haW1wb3J0YW50fS5teS1tZC00e21hcmdpbi10b3A6MS41cmVtIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjEuNXJlbSFpbXBvcnRhbnR9Lm15LW1kLTV7bWFyZ2luLXRvcDozcmVtIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjNyZW0haW1wb3J0YW50fS5teS1tZC1hdXRve21hcmdpbi10b3A6YXV0byFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTphdXRvIWltcG9ydGFudH0ubXQtbWQtMHttYXJnaW4tdG9wOjAhaW1wb3J0YW50fS5tdC1tZC0xe21hcmdpbi10b3A6LjI1cmVtIWltcG9ydGFudH0ubXQtbWQtMnttYXJnaW4tdG9wOi41cmVtIWltcG9ydGFudH0ubXQtbWQtM3ttYXJnaW4tdG9wOjFyZW0haW1wb3J0YW50fS5tdC1tZC00e21hcmdpbi10b3A6MS41cmVtIWltcG9ydGFudH0ubXQtbWQtNXttYXJnaW4tdG9wOjNyZW0haW1wb3J0YW50fS5tdC1tZC1hdXRve21hcmdpbi10b3A6YXV0byFpbXBvcnRhbnR9Lm1lLW1kLTB7bWFyZ2luLXJpZ2h0OjAhaW1wb3J0YW50fS5tZS1tZC0xe21hcmdpbi1yaWdodDouMjVyZW0haW1wb3J0YW50fS5tZS1tZC0ye21hcmdpbi1yaWdodDouNXJlbSFpbXBvcnRhbnR9Lm1lLW1kLTN7bWFyZ2luLXJpZ2h0OjFyZW0haW1wb3J0YW50fS5tZS1tZC00e21hcmdpbi1yaWdodDoxLjVyZW0haW1wb3J0YW50fS5tZS1tZC01e21hcmdpbi1yaWdodDozcmVtIWltcG9ydGFudH0ubWUtbWQtYXV0b3ttYXJnaW4tcmlnaHQ6YXV0byFpbXBvcnRhbnR9Lm1iLW1kLTB7bWFyZ2luLWJvdHRvbTowIWltcG9ydGFudH0ubWItbWQtMXttYXJnaW4tYm90dG9tOi4yNXJlbSFpbXBvcnRhbnR9Lm1iLW1kLTJ7bWFyZ2luLWJvdHRvbTouNXJlbSFpbXBvcnRhbnR9Lm1iLW1kLTN7bWFyZ2luLWJvdHRvbToxcmVtIWltcG9ydGFudH0ubWItbWQtNHttYXJnaW4tYm90dG9tOjEuNXJlbSFpbXBvcnRhbnR9Lm1iLW1kLTV7bWFyZ2luLWJvdHRvbTozcmVtIWltcG9ydGFudH0ubWItbWQtYXV0b3ttYXJnaW4tYm90dG9tOmF1dG8haW1wb3J0YW50fS5tcy1tZC0we21hcmdpbi1sZWZ0OjAhaW1wb3J0YW50fS5tcy1tZC0xe21hcmdpbi1sZWZ0Oi4yNXJlbSFpbXBvcnRhbnR9Lm1zLW1kLTJ7bWFyZ2luLWxlZnQ6LjVyZW0haW1wb3J0YW50fS5tcy1tZC0ze21hcmdpbi1sZWZ0OjFyZW0haW1wb3J0YW50fS5tcy1tZC00e21hcmdpbi1sZWZ0OjEuNXJlbSFpbXBvcnRhbnR9Lm1zLW1kLTV7bWFyZ2luLWxlZnQ6M3JlbSFpbXBvcnRhbnR9Lm1zLW1kLWF1dG97bWFyZ2luLWxlZnQ6YXV0byFpbXBvcnRhbnR9LnAtbWQtMHtwYWRkaW5nOjAhaW1wb3J0YW50fS5wLW1kLTF7cGFkZGluZzouMjVyZW0haW1wb3J0YW50fS5wLW1kLTJ7cGFkZGluZzouNXJlbSFpbXBvcnRhbnR9LnAtbWQtM3twYWRkaW5nOjFyZW0haW1wb3J0YW50fS5wLW1kLTR7cGFkZGluZzoxLjVyZW0haW1wb3J0YW50fS5wLW1kLTV7cGFkZGluZzozcmVtIWltcG9ydGFudH0ucHgtbWQtMHtwYWRkaW5nLXJpZ2h0OjAhaW1wb3J0YW50O3BhZGRpbmctbGVmdDowIWltcG9ydGFudH0ucHgtbWQtMXtwYWRkaW5nLXJpZ2h0Oi4yNXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0Oi4yNXJlbSFpbXBvcnRhbnR9LnB4LW1kLTJ7cGFkZGluZy1yaWdodDouNXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0Oi41cmVtIWltcG9ydGFudH0ucHgtbWQtM3twYWRkaW5nLXJpZ2h0OjFyZW0haW1wb3J0YW50O3BhZGRpbmctbGVmdDoxcmVtIWltcG9ydGFudH0ucHgtbWQtNHtwYWRkaW5nLXJpZ2h0OjEuNXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0OjEuNXJlbSFpbXBvcnRhbnR9LnB4LW1kLTV7cGFkZGluZy1yaWdodDozcmVtIWltcG9ydGFudDtwYWRkaW5nLWxlZnQ6M3JlbSFpbXBvcnRhbnR9LnB5LW1kLTB7cGFkZGluZy10b3A6MCFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MCFpbXBvcnRhbnR9LnB5LW1kLTF7cGFkZGluZy10b3A6LjI1cmVtIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbTouMjVyZW0haW1wb3J0YW50fS5weS1tZC0ye3BhZGRpbmctdG9wOi41cmVtIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbTouNXJlbSFpbXBvcnRhbnR9LnB5LW1kLTN7cGFkZGluZy10b3A6MXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MXJlbSFpbXBvcnRhbnR9LnB5LW1kLTR7cGFkZGluZy10b3A6MS41cmVtIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbToxLjVyZW0haW1wb3J0YW50fS5weS1tZC01e3BhZGRpbmctdG9wOjNyZW0haW1wb3J0YW50O3BhZGRpbmctYm90dG9tOjNyZW0haW1wb3J0YW50fS5wdC1tZC0we3BhZGRpbmctdG9wOjAhaW1wb3J0YW50fS5wdC1tZC0xe3BhZGRpbmctdG9wOi4yNXJlbSFpbXBvcnRhbnR9LnB0LW1kLTJ7cGFkZGluZy10b3A6LjVyZW0haW1wb3J0YW50fS5wdC1tZC0ze3BhZGRpbmctdG9wOjFyZW0haW1wb3J0YW50fS5wdC1tZC00e3BhZGRpbmctdG9wOjEuNXJlbSFpbXBvcnRhbnR9LnB0LW1kLTV7cGFkZGluZy10b3A6M3JlbSFpbXBvcnRhbnR9LnBlLW1kLTB7cGFkZGluZy1yaWdodDowIWltcG9ydGFudH0ucGUtbWQtMXtwYWRkaW5nLXJpZ2h0Oi4yNXJlbSFpbXBvcnRhbnR9LnBlLW1kLTJ7cGFkZGluZy1yaWdodDouNXJlbSFpbXBvcnRhbnR9LnBlLW1kLTN7cGFkZGluZy1yaWdodDoxcmVtIWltcG9ydGFudH0ucGUtbWQtNHtwYWRkaW5nLXJpZ2h0OjEuNXJlbSFpbXBvcnRhbnR9LnBlLW1kLTV7cGFkZGluZy1yaWdodDozcmVtIWltcG9ydGFudH0ucGItbWQtMHtwYWRkaW5nLWJvdHRvbTowIWltcG9ydGFudH0ucGItbWQtMXtwYWRkaW5nLWJvdHRvbTouMjVyZW0haW1wb3J0YW50fS5wYi1tZC0ye3BhZGRpbmctYm90dG9tOi41cmVtIWltcG9ydGFudH0ucGItbWQtM3twYWRkaW5nLWJvdHRvbToxcmVtIWltcG9ydGFudH0ucGItbWQtNHtwYWRkaW5nLWJvdHRvbToxLjVyZW0haW1wb3J0YW50fS5wYi1tZC01e3BhZGRpbmctYm90dG9tOjNyZW0haW1wb3J0YW50fS5wcy1tZC0we3BhZGRpbmctbGVmdDowIWltcG9ydGFudH0ucHMtbWQtMXtwYWRkaW5nLWxlZnQ6LjI1cmVtIWltcG9ydGFudH0ucHMtbWQtMntwYWRkaW5nLWxlZnQ6LjVyZW0haW1wb3J0YW50fS5wcy1tZC0ze3BhZGRpbmctbGVmdDoxcmVtIWltcG9ydGFudH0ucHMtbWQtNHtwYWRkaW5nLWxlZnQ6MS41cmVtIWltcG9ydGFudH0ucHMtbWQtNXtwYWRkaW5nLWxlZnQ6M3JlbSFpbXBvcnRhbnR9LmdhcC1tZC0we2dhcDowIWltcG9ydGFudH0uZ2FwLW1kLTF7Z2FwOi4yNXJlbSFpbXBvcnRhbnR9LmdhcC1tZC0ye2dhcDouNXJlbSFpbXBvcnRhbnR9LmdhcC1tZC0ze2dhcDoxcmVtIWltcG9ydGFudH0uZ2FwLW1kLTR7Z2FwOjEuNXJlbSFpbXBvcnRhbnR9LmdhcC1tZC01e2dhcDozcmVtIWltcG9ydGFudH0ucm93LWdhcC1tZC0we3Jvdy1nYXA6MCFpbXBvcnRhbnR9LnJvdy1nYXAtbWQtMXtyb3ctZ2FwOi4yNXJlbSFpbXBvcnRhbnR9LnJvdy1nYXAtbWQtMntyb3ctZ2FwOi41cmVtIWltcG9ydGFudH0ucm93LWdhcC1tZC0ze3Jvdy1nYXA6MXJlbSFpbXBvcnRhbnR9LnJvdy1nYXAtbWQtNHtyb3ctZ2FwOjEuNXJlbSFpbXBvcnRhbnR9LnJvdy1nYXAtbWQtNXtyb3ctZ2FwOjNyZW0haW1wb3J0YW50fS5jb2x1bW4tZ2FwLW1kLTB7LW1vei1jb2x1bW4tZ2FwOjAhaW1wb3J0YW50O2NvbHVtbi1nYXA6MCFpbXBvcnRhbnR9LmNvbHVtbi1nYXAtbWQtMXstbW96LWNvbHVtbi1nYXA6MC4yNXJlbSFpbXBvcnRhbnQ7Y29sdW1uLWdhcDouMjVyZW0haW1wb3J0YW50fS5jb2x1bW4tZ2FwLW1kLTJ7LW1vei1jb2x1bW4tZ2FwOjAuNXJlbSFpbXBvcnRhbnQ7Y29sdW1uLWdhcDouNXJlbSFpbXBvcnRhbnR9LmNvbHVtbi1nYXAtbWQtM3stbW96LWNvbHVtbi1nYXA6MXJlbSFpbXBvcnRhbnQ7Y29sdW1uLWdhcDoxcmVtIWltcG9ydGFudH0uY29sdW1uLWdhcC1tZC00ey1tb3otY29sdW1uLWdhcDoxLjVyZW0haW1wb3J0YW50O2NvbHVtbi1nYXA6MS41cmVtIWltcG9ydGFudH0uY29sdW1uLWdhcC1tZC01ey1tb3otY29sdW1uLWdhcDozcmVtIWltcG9ydGFudDtjb2x1bW4tZ2FwOjNyZW0haW1wb3J0YW50fS50ZXh0LW1kLXN0YXJ0e3RleHQtYWxpZ246bGVmdCFpbXBvcnRhbnR9LnRleHQtbWQtZW5ke3RleHQtYWxpZ246cmlnaHQhaW1wb3J0YW50fS50ZXh0LW1kLWNlbnRlcnt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuZmxvYXQtbGctc3RhcnR7ZmxvYXQ6bGVmdCFpbXBvcnRhbnR9LmZsb2F0LWxnLWVuZHtmbG9hdDpyaWdodCFpbXBvcnRhbnR9LmZsb2F0LWxnLW5vbmV7ZmxvYXQ6bm9uZSFpbXBvcnRhbnR9Lm9iamVjdC1maXQtbGctY29udGFpbnstby1vYmplY3QtZml0OmNvbnRhaW4haW1wb3J0YW50O29iamVjdC1maXQ6Y29udGFpbiFpbXBvcnRhbnR9Lm9iamVjdC1maXQtbGctY292ZXJ7LW8tb2JqZWN0LWZpdDpjb3ZlciFpbXBvcnRhbnQ7b2JqZWN0LWZpdDpjb3ZlciFpbXBvcnRhbnR9Lm9iamVjdC1maXQtbGctZmlsbHstby1vYmplY3QtZml0OmZpbGwhaW1wb3J0YW50O29iamVjdC1maXQ6ZmlsbCFpbXBvcnRhbnR9Lm9iamVjdC1maXQtbGctc2NhbGV7LW8tb2JqZWN0LWZpdDpzY2FsZS1kb3duIWltcG9ydGFudDtvYmplY3QtZml0OnNjYWxlLWRvd24haW1wb3J0YW50fS5vYmplY3QtZml0LWxnLW5vbmV7LW8tb2JqZWN0LWZpdDpub25lIWltcG9ydGFudDtvYmplY3QtZml0Om5vbmUhaW1wb3J0YW50fS5kLWxnLWlubGluZXtkaXNwbGF5OmlubGluZSFpbXBvcnRhbnR9LmQtbGctaW5saW5lLWJsb2Nre2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudH0uZC1sZy1ibG9ja3tkaXNwbGF5OmJsb2NrIWltcG9ydGFudH0uZC1sZy1ncmlke2Rpc3BsYXk6Z3JpZCFpbXBvcnRhbnR9LmQtbGctaW5saW5lLWdyaWR7ZGlzcGxheTppbmxpbmUtZ3JpZCFpbXBvcnRhbnR9LmQtbGctdGFibGV7ZGlzcGxheTp0YWJsZSFpbXBvcnRhbnR9LmQtbGctdGFibGUtcm93e2Rpc3BsYXk6dGFibGUtcm93IWltcG9ydGFudH0uZC1sZy10YWJsZS1jZWxse2Rpc3BsYXk6dGFibGUtY2VsbCFpbXBvcnRhbnR9LmQtbGctZmxleHtkaXNwbGF5OmZsZXghaW1wb3J0YW50fS5kLWxnLWlubGluZS1mbGV4e2Rpc3BsYXk6aW5saW5lLWZsZXghaW1wb3J0YW50fS5kLWxnLW5vbmV7ZGlzcGxheTpub25lIWltcG9ydGFudH0uZmxleC1sZy1maWxse2ZsZXg6MSAxIGF1dG8haW1wb3J0YW50fS5mbGV4LWxnLXJvd3tmbGV4LWRpcmVjdGlvbjpyb3chaW1wb3J0YW50fS5mbGV4LWxnLWNvbHVtbntmbGV4LWRpcmVjdGlvbjpjb2x1bW4haW1wb3J0YW50fS5mbGV4LWxnLXJvdy1yZXZlcnNle2ZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlIWltcG9ydGFudH0uZmxleC1sZy1jb2x1bW4tcmV2ZXJzZXtmbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZSFpbXBvcnRhbnR9LmZsZXgtbGctZ3Jvdy0we2ZsZXgtZ3JvdzowIWltcG9ydGFudH0uZmxleC1sZy1ncm93LTF7ZmxleC1ncm93OjEhaW1wb3J0YW50fS5mbGV4LWxnLXNocmluay0we2ZsZXgtc2hyaW5rOjAhaW1wb3J0YW50fS5mbGV4LWxnLXNocmluay0xe2ZsZXgtc2hyaW5rOjEhaW1wb3J0YW50fS5mbGV4LWxnLXdyYXB7ZmxleC13cmFwOndyYXAhaW1wb3J0YW50fS5mbGV4LWxnLW5vd3JhcHtmbGV4LXdyYXA6bm93cmFwIWltcG9ydGFudH0uZmxleC1sZy13cmFwLXJldmVyc2V7ZmxleC13cmFwOndyYXAtcmV2ZXJzZSFpbXBvcnRhbnR9Lmp1c3RpZnktY29udGVudC1sZy1zdGFydHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydCFpbXBvcnRhbnR9Lmp1c3RpZnktY29udGVudC1sZy1lbmR7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kIWltcG9ydGFudH0uanVzdGlmeS1jb250ZW50LWxnLWNlbnRlcntqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyIWltcG9ydGFudH0uanVzdGlmeS1jb250ZW50LWxnLWJldHdlZW57anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW4haW1wb3J0YW50fS5qdXN0aWZ5LWNvbnRlbnQtbGctYXJvdW5ke2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQhaW1wb3J0YW50fS5qdXN0aWZ5LWNvbnRlbnQtbGctZXZlbmx5e2p1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHkhaW1wb3J0YW50fS5hbGlnbi1pdGVtcy1sZy1zdGFydHthbGlnbi1pdGVtczpmbGV4LXN0YXJ0IWltcG9ydGFudH0uYWxpZ24taXRlbXMtbGctZW5ke2FsaWduLWl0ZW1zOmZsZXgtZW5kIWltcG9ydGFudH0uYWxpZ24taXRlbXMtbGctY2VudGVye2FsaWduLWl0ZW1zOmNlbnRlciFpbXBvcnRhbnR9LmFsaWduLWl0ZW1zLWxnLWJhc2VsaW5le2FsaWduLWl0ZW1zOmJhc2VsaW5lIWltcG9ydGFudH0uYWxpZ24taXRlbXMtbGctc3RyZXRjaHthbGlnbi1pdGVtczpzdHJldGNoIWltcG9ydGFudH0uYWxpZ24tY29udGVudC1sZy1zdGFydHthbGlnbi1jb250ZW50OmZsZXgtc3RhcnQhaW1wb3J0YW50fS5hbGlnbi1jb250ZW50LWxnLWVuZHthbGlnbi1jb250ZW50OmZsZXgtZW5kIWltcG9ydGFudH0uYWxpZ24tY29udGVudC1sZy1jZW50ZXJ7YWxpZ24tY29udGVudDpjZW50ZXIhaW1wb3J0YW50fS5hbGlnbi1jb250ZW50LWxnLWJldHdlZW57YWxpZ24tY29udGVudDpzcGFjZS1iZXR3ZWVuIWltcG9ydGFudH0uYWxpZ24tY29udGVudC1sZy1hcm91bmR7YWxpZ24tY29udGVudDpzcGFjZS1hcm91bmQhaW1wb3J0YW50fS5hbGlnbi1jb250ZW50LWxnLXN0cmV0Y2h7YWxpZ24tY29udGVudDpzdHJldGNoIWltcG9ydGFudH0uYWxpZ24tc2VsZi1sZy1hdXRve2FsaWduLXNlbGY6YXV0byFpbXBvcnRhbnR9LmFsaWduLXNlbGYtbGctc3RhcnR7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0IWltcG9ydGFudH0uYWxpZ24tc2VsZi1sZy1lbmR7YWxpZ24tc2VsZjpmbGV4LWVuZCFpbXBvcnRhbnR9LmFsaWduLXNlbGYtbGctY2VudGVye2FsaWduLXNlbGY6Y2VudGVyIWltcG9ydGFudH0uYWxpZ24tc2VsZi1sZy1iYXNlbGluZXthbGlnbi1zZWxmOmJhc2VsaW5lIWltcG9ydGFudH0uYWxpZ24tc2VsZi1sZy1zdHJldGNoe2FsaWduLXNlbGY6c3RyZXRjaCFpbXBvcnRhbnR9Lm9yZGVyLWxnLWZpcnN0e29yZGVyOi0xIWltcG9ydGFudH0ub3JkZXItbGctMHtvcmRlcjowIWltcG9ydGFudH0ub3JkZXItbGctMXtvcmRlcjoxIWltcG9ydGFudH0ub3JkZXItbGctMntvcmRlcjoyIWltcG9ydGFudH0ub3JkZXItbGctM3tvcmRlcjozIWltcG9ydGFudH0ub3JkZXItbGctNHtvcmRlcjo0IWltcG9ydGFudH0ub3JkZXItbGctNXtvcmRlcjo1IWltcG9ydGFudH0ub3JkZXItbGctbGFzdHtvcmRlcjo2IWltcG9ydGFudH0ubS1sZy0we21hcmdpbjowIWltcG9ydGFudH0ubS1sZy0xe21hcmdpbjouMjVyZW0haW1wb3J0YW50fS5tLWxnLTJ7bWFyZ2luOi41cmVtIWltcG9ydGFudH0ubS1sZy0ze21hcmdpbjoxcmVtIWltcG9ydGFudH0ubS1sZy00e21hcmdpbjoxLjVyZW0haW1wb3J0YW50fS5tLWxnLTV7bWFyZ2luOjNyZW0haW1wb3J0YW50fS5tLWxnLWF1dG97bWFyZ2luOmF1dG8haW1wb3J0YW50fS5teC1sZy0we21hcmdpbi1yaWdodDowIWltcG9ydGFudDttYXJnaW4tbGVmdDowIWltcG9ydGFudH0ubXgtbGctMXttYXJnaW4tcmlnaHQ6LjI1cmVtIWltcG9ydGFudDttYXJnaW4tbGVmdDouMjVyZW0haW1wb3J0YW50fS5teC1sZy0ye21hcmdpbi1yaWdodDouNXJlbSFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6LjVyZW0haW1wb3J0YW50fS5teC1sZy0ze21hcmdpbi1yaWdodDoxcmVtIWltcG9ydGFudDttYXJnaW4tbGVmdDoxcmVtIWltcG9ydGFudH0ubXgtbGctNHttYXJnaW4tcmlnaHQ6MS41cmVtIWltcG9ydGFudDttYXJnaW4tbGVmdDoxLjVyZW0haW1wb3J0YW50fS5teC1sZy01e21hcmdpbi1yaWdodDozcmVtIWltcG9ydGFudDttYXJnaW4tbGVmdDozcmVtIWltcG9ydGFudH0ubXgtbGctYXV0b3ttYXJnaW4tcmlnaHQ6YXV0byFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6YXV0byFpbXBvcnRhbnR9Lm15LWxnLTB7bWFyZ2luLXRvcDowIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjAhaW1wb3J0YW50fS5teS1sZy0xe21hcmdpbi10b3A6LjI1cmVtIWltcG9ydGFudDttYXJnaW4tYm90dG9tOi4yNXJlbSFpbXBvcnRhbnR9Lm15LWxnLTJ7bWFyZ2luLXRvcDouNXJlbSFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTouNXJlbSFpbXBvcnRhbnR9Lm15LWxnLTN7bWFyZ2luLXRvcDoxcmVtIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjFyZW0haW1wb3J0YW50fS5teS1sZy00e21hcmdpbi10b3A6MS41cmVtIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjEuNXJlbSFpbXBvcnRhbnR9Lm15LWxnLTV7bWFyZ2luLXRvcDozcmVtIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjNyZW0haW1wb3J0YW50fS5teS1sZy1hdXRve21hcmdpbi10b3A6YXV0byFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTphdXRvIWltcG9ydGFudH0ubXQtbGctMHttYXJnaW4tdG9wOjAhaW1wb3J0YW50fS5tdC1sZy0xe21hcmdpbi10b3A6LjI1cmVtIWltcG9ydGFudH0ubXQtbGctMnttYXJnaW4tdG9wOi41cmVtIWltcG9ydGFudH0ubXQtbGctM3ttYXJnaW4tdG9wOjFyZW0haW1wb3J0YW50fS5tdC1sZy00e21hcmdpbi10b3A6MS41cmVtIWltcG9ydGFudH0ubXQtbGctNXttYXJnaW4tdG9wOjNyZW0haW1wb3J0YW50fS5tdC1sZy1hdXRve21hcmdpbi10b3A6YXV0byFpbXBvcnRhbnR9Lm1lLWxnLTB7bWFyZ2luLXJpZ2h0OjAhaW1wb3J0YW50fS5tZS1sZy0xe21hcmdpbi1yaWdodDouMjVyZW0haW1wb3J0YW50fS5tZS1sZy0ye21hcmdpbi1yaWdodDouNXJlbSFpbXBvcnRhbnR9Lm1lLWxnLTN7bWFyZ2luLXJpZ2h0OjFyZW0haW1wb3J0YW50fS5tZS1sZy00e21hcmdpbi1yaWdodDoxLjVyZW0haW1wb3J0YW50fS5tZS1sZy01e21hcmdpbi1yaWdodDozcmVtIWltcG9ydGFudH0ubWUtbGctYXV0b3ttYXJnaW4tcmlnaHQ6YXV0byFpbXBvcnRhbnR9Lm1iLWxnLTB7bWFyZ2luLWJvdHRvbTowIWltcG9ydGFudH0ubWItbGctMXttYXJnaW4tYm90dG9tOi4yNXJlbSFpbXBvcnRhbnR9Lm1iLWxnLTJ7bWFyZ2luLWJvdHRvbTouNXJlbSFpbXBvcnRhbnR9Lm1iLWxnLTN7bWFyZ2luLWJvdHRvbToxcmVtIWltcG9ydGFudH0ubWItbGctNHttYXJnaW4tYm90dG9tOjEuNXJlbSFpbXBvcnRhbnR9Lm1iLWxnLTV7bWFyZ2luLWJvdHRvbTozcmVtIWltcG9ydGFudH0ubWItbGctYXV0b3ttYXJnaW4tYm90dG9tOmF1dG8haW1wb3J0YW50fS5tcy1sZy0we21hcmdpbi1sZWZ0OjAhaW1wb3J0YW50fS5tcy1sZy0xe21hcmdpbi1sZWZ0Oi4yNXJlbSFpbXBvcnRhbnR9Lm1zLWxnLTJ7bWFyZ2luLWxlZnQ6LjVyZW0haW1wb3J0YW50fS5tcy1sZy0ze21hcmdpbi1sZWZ0OjFyZW0haW1wb3J0YW50fS5tcy1sZy00e21hcmdpbi1sZWZ0OjEuNXJlbSFpbXBvcnRhbnR9Lm1zLWxnLTV7bWFyZ2luLWxlZnQ6M3JlbSFpbXBvcnRhbnR9Lm1zLWxnLWF1dG97bWFyZ2luLWxlZnQ6YXV0byFpbXBvcnRhbnR9LnAtbGctMHtwYWRkaW5nOjAhaW1wb3J0YW50fS5wLWxnLTF7cGFkZGluZzouMjVyZW0haW1wb3J0YW50fS5wLWxnLTJ7cGFkZGluZzouNXJlbSFpbXBvcnRhbnR9LnAtbGctM3twYWRkaW5nOjFyZW0haW1wb3J0YW50fS5wLWxnLTR7cGFkZGluZzoxLjVyZW0haW1wb3J0YW50fS5wLWxnLTV7cGFkZGluZzozcmVtIWltcG9ydGFudH0ucHgtbGctMHtwYWRkaW5nLXJpZ2h0OjAhaW1wb3J0YW50O3BhZGRpbmctbGVmdDowIWltcG9ydGFudH0ucHgtbGctMXtwYWRkaW5nLXJpZ2h0Oi4yNXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0Oi4yNXJlbSFpbXBvcnRhbnR9LnB4LWxnLTJ7cGFkZGluZy1yaWdodDouNXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0Oi41cmVtIWltcG9ydGFudH0ucHgtbGctM3twYWRkaW5nLXJpZ2h0OjFyZW0haW1wb3J0YW50O3BhZGRpbmctbGVmdDoxcmVtIWltcG9ydGFudH0ucHgtbGctNHtwYWRkaW5nLXJpZ2h0OjEuNXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0OjEuNXJlbSFpbXBvcnRhbnR9LnB4LWxnLTV7cGFkZGluZy1yaWdodDozcmVtIWltcG9ydGFudDtwYWRkaW5nLWxlZnQ6M3JlbSFpbXBvcnRhbnR9LnB5LWxnLTB7cGFkZGluZy10b3A6MCFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MCFpbXBvcnRhbnR9LnB5LWxnLTF7cGFkZGluZy10b3A6LjI1cmVtIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbTouMjVyZW0haW1wb3J0YW50fS5weS1sZy0ye3BhZGRpbmctdG9wOi41cmVtIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbTouNXJlbSFpbXBvcnRhbnR9LnB5LWxnLTN7cGFkZGluZy10b3A6MXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MXJlbSFpbXBvcnRhbnR9LnB5LWxnLTR7cGFkZGluZy10b3A6MS41cmVtIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbToxLjVyZW0haW1wb3J0YW50fS5weS1sZy01e3BhZGRpbmctdG9wOjNyZW0haW1wb3J0YW50O3BhZGRpbmctYm90dG9tOjNyZW0haW1wb3J0YW50fS5wdC1sZy0we3BhZGRpbmctdG9wOjAhaW1wb3J0YW50fS5wdC1sZy0xe3BhZGRpbmctdG9wOi4yNXJlbSFpbXBvcnRhbnR9LnB0LWxnLTJ7cGFkZGluZy10b3A6LjVyZW0haW1wb3J0YW50fS5wdC1sZy0ze3BhZGRpbmctdG9wOjFyZW0haW1wb3J0YW50fS5wdC1sZy00e3BhZGRpbmctdG9wOjEuNXJlbSFpbXBvcnRhbnR9LnB0LWxnLTV7cGFkZGluZy10b3A6M3JlbSFpbXBvcnRhbnR9LnBlLWxnLTB7cGFkZGluZy1yaWdodDowIWltcG9ydGFudH0ucGUtbGctMXtwYWRkaW5nLXJpZ2h0Oi4yNXJlbSFpbXBvcnRhbnR9LnBlLWxnLTJ7cGFkZGluZy1yaWdodDouNXJlbSFpbXBvcnRhbnR9LnBlLWxnLTN7cGFkZGluZy1yaWdodDoxcmVtIWltcG9ydGFudH0ucGUtbGctNHtwYWRkaW5nLXJpZ2h0OjEuNXJlbSFpbXBvcnRhbnR9LnBlLWxnLTV7cGFkZGluZy1yaWdodDozcmVtIWltcG9ydGFudH0ucGItbGctMHtwYWRkaW5nLWJvdHRvbTowIWltcG9ydGFudH0ucGItbGctMXtwYWRkaW5nLWJvdHRvbTouMjVyZW0haW1wb3J0YW50fS5wYi1sZy0ye3BhZGRpbmctYm90dG9tOi41cmVtIWltcG9ydGFudH0ucGItbGctM3twYWRkaW5nLWJvdHRvbToxcmVtIWltcG9ydGFudH0ucGItbGctNHtwYWRkaW5nLWJvdHRvbToxLjVyZW0haW1wb3J0YW50fS5wYi1sZy01e3BhZGRpbmctYm90dG9tOjNyZW0haW1wb3J0YW50fS5wcy1sZy0we3BhZGRpbmctbGVmdDowIWltcG9ydGFudH0ucHMtbGctMXtwYWRkaW5nLWxlZnQ6LjI1cmVtIWltcG9ydGFudH0ucHMtbGctMntwYWRkaW5nLWxlZnQ6LjVyZW0haW1wb3J0YW50fS5wcy1sZy0ze3BhZGRpbmctbGVmdDoxcmVtIWltcG9ydGFudH0ucHMtbGctNHtwYWRkaW5nLWxlZnQ6MS41cmVtIWltcG9ydGFudH0ucHMtbGctNXtwYWRkaW5nLWxlZnQ6M3JlbSFpbXBvcnRhbnR9LmdhcC1sZy0we2dhcDowIWltcG9ydGFudH0uZ2FwLWxnLTF7Z2FwOi4yNXJlbSFpbXBvcnRhbnR9LmdhcC1sZy0ye2dhcDouNXJlbSFpbXBvcnRhbnR9LmdhcC1sZy0ze2dhcDoxcmVtIWltcG9ydGFudH0uZ2FwLWxnLTR7Z2FwOjEuNXJlbSFpbXBvcnRhbnR9LmdhcC1sZy01e2dhcDozcmVtIWltcG9ydGFudH0ucm93LWdhcC1sZy0we3Jvdy1nYXA6MCFpbXBvcnRhbnR9LnJvdy1nYXAtbGctMXtyb3ctZ2FwOi4yNXJlbSFpbXBvcnRhbnR9LnJvdy1nYXAtbGctMntyb3ctZ2FwOi41cmVtIWltcG9ydGFudH0ucm93LWdhcC1sZy0ze3Jvdy1nYXA6MXJlbSFpbXBvcnRhbnR9LnJvdy1nYXAtbGctNHtyb3ctZ2FwOjEuNXJlbSFpbXBvcnRhbnR9LnJvdy1nYXAtbGctNXtyb3ctZ2FwOjNyZW0haW1wb3J0YW50fS5jb2x1bW4tZ2FwLWxnLTB7LW1vei1jb2x1bW4tZ2FwOjAhaW1wb3J0YW50O2NvbHVtbi1nYXA6MCFpbXBvcnRhbnR9LmNvbHVtbi1nYXAtbGctMXstbW96LWNvbHVtbi1nYXA6MC4yNXJlbSFpbXBvcnRhbnQ7Y29sdW1uLWdhcDouMjVyZW0haW1wb3J0YW50fS5jb2x1bW4tZ2FwLWxnLTJ7LW1vei1jb2x1bW4tZ2FwOjAuNXJlbSFpbXBvcnRhbnQ7Y29sdW1uLWdhcDouNXJlbSFpbXBvcnRhbnR9LmNvbHVtbi1nYXAtbGctM3stbW96LWNvbHVtbi1nYXA6MXJlbSFpbXBvcnRhbnQ7Y29sdW1uLWdhcDoxcmVtIWltcG9ydGFudH0uY29sdW1uLWdhcC1sZy00ey1tb3otY29sdW1uLWdhcDoxLjVyZW0haW1wb3J0YW50O2NvbHVtbi1nYXA6MS41cmVtIWltcG9ydGFudH0uY29sdW1uLWdhcC1sZy01ey1tb3otY29sdW1uLWdhcDozcmVtIWltcG9ydGFudDtjb2x1bW4tZ2FwOjNyZW0haW1wb3J0YW50fS50ZXh0LWxnLXN0YXJ0e3RleHQtYWxpZ246bGVmdCFpbXBvcnRhbnR9LnRleHQtbGctZW5ke3RleHQtYWxpZ246cmlnaHQhaW1wb3J0YW50fS50ZXh0LWxnLWNlbnRlcnt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmZsb2F0LXhsLXN0YXJ0e2Zsb2F0OmxlZnQhaW1wb3J0YW50fS5mbG9hdC14bC1lbmR7ZmxvYXQ6cmlnaHQhaW1wb3J0YW50fS5mbG9hdC14bC1ub25le2Zsb2F0Om5vbmUhaW1wb3J0YW50fS5vYmplY3QtZml0LXhsLWNvbnRhaW57LW8tb2JqZWN0LWZpdDpjb250YWluIWltcG9ydGFudDtvYmplY3QtZml0OmNvbnRhaW4haW1wb3J0YW50fS5vYmplY3QtZml0LXhsLWNvdmVyey1vLW9iamVjdC1maXQ6Y292ZXIhaW1wb3J0YW50O29iamVjdC1maXQ6Y292ZXIhaW1wb3J0YW50fS5vYmplY3QtZml0LXhsLWZpbGx7LW8tb2JqZWN0LWZpdDpmaWxsIWltcG9ydGFudDtvYmplY3QtZml0OmZpbGwhaW1wb3J0YW50fS5vYmplY3QtZml0LXhsLXNjYWxley1vLW9iamVjdC1maXQ6c2NhbGUtZG93biFpbXBvcnRhbnQ7b2JqZWN0LWZpdDpzY2FsZS1kb3duIWltcG9ydGFudH0ub2JqZWN0LWZpdC14bC1ub25ley1vLW9iamVjdC1maXQ6bm9uZSFpbXBvcnRhbnQ7b2JqZWN0LWZpdDpub25lIWltcG9ydGFudH0uZC14bC1pbmxpbmV7ZGlzcGxheTppbmxpbmUhaW1wb3J0YW50fS5kLXhsLWlubGluZS1ibG9ja3tkaXNwbGF5OmlubGluZS1ibG9jayFpbXBvcnRhbnR9LmQteGwtYmxvY2t7ZGlzcGxheTpibG9jayFpbXBvcnRhbnR9LmQteGwtZ3JpZHtkaXNwbGF5OmdyaWQhaW1wb3J0YW50fS5kLXhsLWlubGluZS1ncmlke2Rpc3BsYXk6aW5saW5lLWdyaWQhaW1wb3J0YW50fS5kLXhsLXRhYmxle2Rpc3BsYXk6dGFibGUhaW1wb3J0YW50fS5kLXhsLXRhYmxlLXJvd3tkaXNwbGF5OnRhYmxlLXJvdyFpbXBvcnRhbnR9LmQteGwtdGFibGUtY2VsbHtkaXNwbGF5OnRhYmxlLWNlbGwhaW1wb3J0YW50fS5kLXhsLWZsZXh7ZGlzcGxheTpmbGV4IWltcG9ydGFudH0uZC14bC1pbmxpbmUtZmxleHtkaXNwbGF5OmlubGluZS1mbGV4IWltcG9ydGFudH0uZC14bC1ub25le2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LmZsZXgteGwtZmlsbHtmbGV4OjEgMSBhdXRvIWltcG9ydGFudH0uZmxleC14bC1yb3d7ZmxleC1kaXJlY3Rpb246cm93IWltcG9ydGFudH0uZmxleC14bC1jb2x1bW57ZmxleC1kaXJlY3Rpb246Y29sdW1uIWltcG9ydGFudH0uZmxleC14bC1yb3ctcmV2ZXJzZXtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZSFpbXBvcnRhbnR9LmZsZXgteGwtY29sdW1uLXJldmVyc2V7ZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2UhaW1wb3J0YW50fS5mbGV4LXhsLWdyb3ctMHtmbGV4LWdyb3c6MCFpbXBvcnRhbnR9LmZsZXgteGwtZ3Jvdy0xe2ZsZXgtZ3JvdzoxIWltcG9ydGFudH0uZmxleC14bC1zaHJpbmstMHtmbGV4LXNocmluazowIWltcG9ydGFudH0uZmxleC14bC1zaHJpbmstMXtmbGV4LXNocmluazoxIWltcG9ydGFudH0uZmxleC14bC13cmFwe2ZsZXgtd3JhcDp3cmFwIWltcG9ydGFudH0uZmxleC14bC1ub3dyYXB7ZmxleC13cmFwOm5vd3JhcCFpbXBvcnRhbnR9LmZsZXgteGwtd3JhcC1yZXZlcnNle2ZsZXgtd3JhcDp3cmFwLXJldmVyc2UhaW1wb3J0YW50fS5qdXN0aWZ5LWNvbnRlbnQteGwtc3RhcnR7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQhaW1wb3J0YW50fS5qdXN0aWZ5LWNvbnRlbnQteGwtZW5ke2p1c3RpZnktY29udGVudDpmbGV4LWVuZCFpbXBvcnRhbnR9Lmp1c3RpZnktY29udGVudC14bC1jZW50ZXJ7anVzdGlmeS1jb250ZW50OmNlbnRlciFpbXBvcnRhbnR9Lmp1c3RpZnktY29udGVudC14bC1iZXR3ZWVue2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuIWltcG9ydGFudH0uanVzdGlmeS1jb250ZW50LXhsLWFyb3VuZHtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kIWltcG9ydGFudH0uanVzdGlmeS1jb250ZW50LXhsLWV2ZW5seXtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5IWltcG9ydGFudH0uYWxpZ24taXRlbXMteGwtc3RhcnR7YWxpZ24taXRlbXM6ZmxleC1zdGFydCFpbXBvcnRhbnR9LmFsaWduLWl0ZW1zLXhsLWVuZHthbGlnbi1pdGVtczpmbGV4LWVuZCFpbXBvcnRhbnR9LmFsaWduLWl0ZW1zLXhsLWNlbnRlcnthbGlnbi1pdGVtczpjZW50ZXIhaW1wb3J0YW50fS5hbGlnbi1pdGVtcy14bC1iYXNlbGluZXthbGlnbi1pdGVtczpiYXNlbGluZSFpbXBvcnRhbnR9LmFsaWduLWl0ZW1zLXhsLXN0cmV0Y2h7YWxpZ24taXRlbXM6c3RyZXRjaCFpbXBvcnRhbnR9LmFsaWduLWNvbnRlbnQteGwtc3RhcnR7YWxpZ24tY29udGVudDpmbGV4LXN0YXJ0IWltcG9ydGFudH0uYWxpZ24tY29udGVudC14bC1lbmR7YWxpZ24tY29udGVudDpmbGV4LWVuZCFpbXBvcnRhbnR9LmFsaWduLWNvbnRlbnQteGwtY2VudGVye2FsaWduLWNvbnRlbnQ6Y2VudGVyIWltcG9ydGFudH0uYWxpZ24tY29udGVudC14bC1iZXR3ZWVue2FsaWduLWNvbnRlbnQ6c3BhY2UtYmV0d2VlbiFpbXBvcnRhbnR9LmFsaWduLWNvbnRlbnQteGwtYXJvdW5ke2FsaWduLWNvbnRlbnQ6c3BhY2UtYXJvdW5kIWltcG9ydGFudH0uYWxpZ24tY29udGVudC14bC1zdHJldGNoe2FsaWduLWNvbnRlbnQ6c3RyZXRjaCFpbXBvcnRhbnR9LmFsaWduLXNlbGYteGwtYXV0b3thbGlnbi1zZWxmOmF1dG8haW1wb3J0YW50fS5hbGlnbi1zZWxmLXhsLXN0YXJ0e2FsaWduLXNlbGY6ZmxleC1zdGFydCFpbXBvcnRhbnR9LmFsaWduLXNlbGYteGwtZW5ke2FsaWduLXNlbGY6ZmxleC1lbmQhaW1wb3J0YW50fS5hbGlnbi1zZWxmLXhsLWNlbnRlcnthbGlnbi1zZWxmOmNlbnRlciFpbXBvcnRhbnR9LmFsaWduLXNlbGYteGwtYmFzZWxpbmV7YWxpZ24tc2VsZjpiYXNlbGluZSFpbXBvcnRhbnR9LmFsaWduLXNlbGYteGwtc3RyZXRjaHthbGlnbi1zZWxmOnN0cmV0Y2ghaW1wb3J0YW50fS5vcmRlci14bC1maXJzdHtvcmRlcjotMSFpbXBvcnRhbnR9Lm9yZGVyLXhsLTB7b3JkZXI6MCFpbXBvcnRhbnR9Lm9yZGVyLXhsLTF7b3JkZXI6MSFpbXBvcnRhbnR9Lm9yZGVyLXhsLTJ7b3JkZXI6MiFpbXBvcnRhbnR9Lm9yZGVyLXhsLTN7b3JkZXI6MyFpbXBvcnRhbnR9Lm9yZGVyLXhsLTR7b3JkZXI6NCFpbXBvcnRhbnR9Lm9yZGVyLXhsLTV7b3JkZXI6NSFpbXBvcnRhbnR9Lm9yZGVyLXhsLWxhc3R7b3JkZXI6NiFpbXBvcnRhbnR9Lm0teGwtMHttYXJnaW46MCFpbXBvcnRhbnR9Lm0teGwtMXttYXJnaW46LjI1cmVtIWltcG9ydGFudH0ubS14bC0ye21hcmdpbjouNXJlbSFpbXBvcnRhbnR9Lm0teGwtM3ttYXJnaW46MXJlbSFpbXBvcnRhbnR9Lm0teGwtNHttYXJnaW46MS41cmVtIWltcG9ydGFudH0ubS14bC01e21hcmdpbjozcmVtIWltcG9ydGFudH0ubS14bC1hdXRve21hcmdpbjphdXRvIWltcG9ydGFudH0ubXgteGwtMHttYXJnaW4tcmlnaHQ6MCFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6MCFpbXBvcnRhbnR9Lm14LXhsLTF7bWFyZ2luLXJpZ2h0Oi4yNXJlbSFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6LjI1cmVtIWltcG9ydGFudH0ubXgteGwtMnttYXJnaW4tcmlnaHQ6LjVyZW0haW1wb3J0YW50O21hcmdpbi1sZWZ0Oi41cmVtIWltcG9ydGFudH0ubXgteGwtM3ttYXJnaW4tcmlnaHQ6MXJlbSFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6MXJlbSFpbXBvcnRhbnR9Lm14LXhsLTR7bWFyZ2luLXJpZ2h0OjEuNXJlbSFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6MS41cmVtIWltcG9ydGFudH0ubXgteGwtNXttYXJnaW4tcmlnaHQ6M3JlbSFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6M3JlbSFpbXBvcnRhbnR9Lm14LXhsLWF1dG97bWFyZ2luLXJpZ2h0OmF1dG8haW1wb3J0YW50O21hcmdpbi1sZWZ0OmF1dG8haW1wb3J0YW50fS5teS14bC0we21hcmdpbi10b3A6MCFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTowIWltcG9ydGFudH0ubXkteGwtMXttYXJnaW4tdG9wOi4yNXJlbSFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTouMjVyZW0haW1wb3J0YW50fS5teS14bC0ye21hcmdpbi10b3A6LjVyZW0haW1wb3J0YW50O21hcmdpbi1ib3R0b206LjVyZW0haW1wb3J0YW50fS5teS14bC0ze21hcmdpbi10b3A6MXJlbSFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbToxcmVtIWltcG9ydGFudH0ubXkteGwtNHttYXJnaW4tdG9wOjEuNXJlbSFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbToxLjVyZW0haW1wb3J0YW50fS5teS14bC01e21hcmdpbi10b3A6M3JlbSFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTozcmVtIWltcG9ydGFudH0ubXkteGwtYXV0b3ttYXJnaW4tdG9wOmF1dG8haW1wb3J0YW50O21hcmdpbi1ib3R0b206YXV0byFpbXBvcnRhbnR9Lm10LXhsLTB7bWFyZ2luLXRvcDowIWltcG9ydGFudH0ubXQteGwtMXttYXJnaW4tdG9wOi4yNXJlbSFpbXBvcnRhbnR9Lm10LXhsLTJ7bWFyZ2luLXRvcDouNXJlbSFpbXBvcnRhbnR9Lm10LXhsLTN7bWFyZ2luLXRvcDoxcmVtIWltcG9ydGFudH0ubXQteGwtNHttYXJnaW4tdG9wOjEuNXJlbSFpbXBvcnRhbnR9Lm10LXhsLTV7bWFyZ2luLXRvcDozcmVtIWltcG9ydGFudH0ubXQteGwtYXV0b3ttYXJnaW4tdG9wOmF1dG8haW1wb3J0YW50fS5tZS14bC0we21hcmdpbi1yaWdodDowIWltcG9ydGFudH0ubWUteGwtMXttYXJnaW4tcmlnaHQ6LjI1cmVtIWltcG9ydGFudH0ubWUteGwtMnttYXJnaW4tcmlnaHQ6LjVyZW0haW1wb3J0YW50fS5tZS14bC0ze21hcmdpbi1yaWdodDoxcmVtIWltcG9ydGFudH0ubWUteGwtNHttYXJnaW4tcmlnaHQ6MS41cmVtIWltcG9ydGFudH0ubWUteGwtNXttYXJnaW4tcmlnaHQ6M3JlbSFpbXBvcnRhbnR9Lm1lLXhsLWF1dG97bWFyZ2luLXJpZ2h0OmF1dG8haW1wb3J0YW50fS5tYi14bC0we21hcmdpbi1ib3R0b206MCFpbXBvcnRhbnR9Lm1iLXhsLTF7bWFyZ2luLWJvdHRvbTouMjVyZW0haW1wb3J0YW50fS5tYi14bC0ye21hcmdpbi1ib3R0b206LjVyZW0haW1wb3J0YW50fS5tYi14bC0ze21hcmdpbi1ib3R0b206MXJlbSFpbXBvcnRhbnR9Lm1iLXhsLTR7bWFyZ2luLWJvdHRvbToxLjVyZW0haW1wb3J0YW50fS5tYi14bC01e21hcmdpbi1ib3R0b206M3JlbSFpbXBvcnRhbnR9Lm1iLXhsLWF1dG97bWFyZ2luLWJvdHRvbTphdXRvIWltcG9ydGFudH0ubXMteGwtMHttYXJnaW4tbGVmdDowIWltcG9ydGFudH0ubXMteGwtMXttYXJnaW4tbGVmdDouMjVyZW0haW1wb3J0YW50fS5tcy14bC0ye21hcmdpbi1sZWZ0Oi41cmVtIWltcG9ydGFudH0ubXMteGwtM3ttYXJnaW4tbGVmdDoxcmVtIWltcG9ydGFudH0ubXMteGwtNHttYXJnaW4tbGVmdDoxLjVyZW0haW1wb3J0YW50fS5tcy14bC01e21hcmdpbi1sZWZ0OjNyZW0haW1wb3J0YW50fS5tcy14bC1hdXRve21hcmdpbi1sZWZ0OmF1dG8haW1wb3J0YW50fS5wLXhsLTB7cGFkZGluZzowIWltcG9ydGFudH0ucC14bC0xe3BhZGRpbmc6LjI1cmVtIWltcG9ydGFudH0ucC14bC0ye3BhZGRpbmc6LjVyZW0haW1wb3J0YW50fS5wLXhsLTN7cGFkZGluZzoxcmVtIWltcG9ydGFudH0ucC14bC00e3BhZGRpbmc6MS41cmVtIWltcG9ydGFudH0ucC14bC01e3BhZGRpbmc6M3JlbSFpbXBvcnRhbnR9LnB4LXhsLTB7cGFkZGluZy1yaWdodDowIWltcG9ydGFudDtwYWRkaW5nLWxlZnQ6MCFpbXBvcnRhbnR9LnB4LXhsLTF7cGFkZGluZy1yaWdodDouMjVyZW0haW1wb3J0YW50O3BhZGRpbmctbGVmdDouMjVyZW0haW1wb3J0YW50fS5weC14bC0ye3BhZGRpbmctcmlnaHQ6LjVyZW0haW1wb3J0YW50O3BhZGRpbmctbGVmdDouNXJlbSFpbXBvcnRhbnR9LnB4LXhsLTN7cGFkZGluZy1yaWdodDoxcmVtIWltcG9ydGFudDtwYWRkaW5nLWxlZnQ6MXJlbSFpbXBvcnRhbnR9LnB4LXhsLTR7cGFkZGluZy1yaWdodDoxLjVyZW0haW1wb3J0YW50O3BhZGRpbmctbGVmdDoxLjVyZW0haW1wb3J0YW50fS5weC14bC01e3BhZGRpbmctcmlnaHQ6M3JlbSFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0OjNyZW0haW1wb3J0YW50fS5weS14bC0we3BhZGRpbmctdG9wOjAhaW1wb3J0YW50O3BhZGRpbmctYm90dG9tOjAhaW1wb3J0YW50fS5weS14bC0xe3BhZGRpbmctdG9wOi4yNXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206LjI1cmVtIWltcG9ydGFudH0ucHkteGwtMntwYWRkaW5nLXRvcDouNXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206LjVyZW0haW1wb3J0YW50fS5weS14bC0ze3BhZGRpbmctdG9wOjFyZW0haW1wb3J0YW50O3BhZGRpbmctYm90dG9tOjFyZW0haW1wb3J0YW50fS5weS14bC00e3BhZGRpbmctdG9wOjEuNXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MS41cmVtIWltcG9ydGFudH0ucHkteGwtNXtwYWRkaW5nLXRvcDozcmVtIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbTozcmVtIWltcG9ydGFudH0ucHQteGwtMHtwYWRkaW5nLXRvcDowIWltcG9ydGFudH0ucHQteGwtMXtwYWRkaW5nLXRvcDouMjVyZW0haW1wb3J0YW50fS5wdC14bC0ye3BhZGRpbmctdG9wOi41cmVtIWltcG9ydGFudH0ucHQteGwtM3twYWRkaW5nLXRvcDoxcmVtIWltcG9ydGFudH0ucHQteGwtNHtwYWRkaW5nLXRvcDoxLjVyZW0haW1wb3J0YW50fS5wdC14bC01e3BhZGRpbmctdG9wOjNyZW0haW1wb3J0YW50fS5wZS14bC0we3BhZGRpbmctcmlnaHQ6MCFpbXBvcnRhbnR9LnBlLXhsLTF7cGFkZGluZy1yaWdodDouMjVyZW0haW1wb3J0YW50fS5wZS14bC0ye3BhZGRpbmctcmlnaHQ6LjVyZW0haW1wb3J0YW50fS5wZS14bC0ze3BhZGRpbmctcmlnaHQ6MXJlbSFpbXBvcnRhbnR9LnBlLXhsLTR7cGFkZGluZy1yaWdodDoxLjVyZW0haW1wb3J0YW50fS5wZS14bC01e3BhZGRpbmctcmlnaHQ6M3JlbSFpbXBvcnRhbnR9LnBiLXhsLTB7cGFkZGluZy1ib3R0b206MCFpbXBvcnRhbnR9LnBiLXhsLTF7cGFkZGluZy1ib3R0b206LjI1cmVtIWltcG9ydGFudH0ucGIteGwtMntwYWRkaW5nLWJvdHRvbTouNXJlbSFpbXBvcnRhbnR9LnBiLXhsLTN7cGFkZGluZy1ib3R0b206MXJlbSFpbXBvcnRhbnR9LnBiLXhsLTR7cGFkZGluZy1ib3R0b206MS41cmVtIWltcG9ydGFudH0ucGIteGwtNXtwYWRkaW5nLWJvdHRvbTozcmVtIWltcG9ydGFudH0ucHMteGwtMHtwYWRkaW5nLWxlZnQ6MCFpbXBvcnRhbnR9LnBzLXhsLTF7cGFkZGluZy1sZWZ0Oi4yNXJlbSFpbXBvcnRhbnR9LnBzLXhsLTJ7cGFkZGluZy1sZWZ0Oi41cmVtIWltcG9ydGFudH0ucHMteGwtM3twYWRkaW5nLWxlZnQ6MXJlbSFpbXBvcnRhbnR9LnBzLXhsLTR7cGFkZGluZy1sZWZ0OjEuNXJlbSFpbXBvcnRhbnR9LnBzLXhsLTV7cGFkZGluZy1sZWZ0OjNyZW0haW1wb3J0YW50fS5nYXAteGwtMHtnYXA6MCFpbXBvcnRhbnR9LmdhcC14bC0xe2dhcDouMjVyZW0haW1wb3J0YW50fS5nYXAteGwtMntnYXA6LjVyZW0haW1wb3J0YW50fS5nYXAteGwtM3tnYXA6MXJlbSFpbXBvcnRhbnR9LmdhcC14bC00e2dhcDoxLjVyZW0haW1wb3J0YW50fS5nYXAteGwtNXtnYXA6M3JlbSFpbXBvcnRhbnR9LnJvdy1nYXAteGwtMHtyb3ctZ2FwOjAhaW1wb3J0YW50fS5yb3ctZ2FwLXhsLTF7cm93LWdhcDouMjVyZW0haW1wb3J0YW50fS5yb3ctZ2FwLXhsLTJ7cm93LWdhcDouNXJlbSFpbXBvcnRhbnR9LnJvdy1nYXAteGwtM3tyb3ctZ2FwOjFyZW0haW1wb3J0YW50fS5yb3ctZ2FwLXhsLTR7cm93LWdhcDoxLjVyZW0haW1wb3J0YW50fS5yb3ctZ2FwLXhsLTV7cm93LWdhcDozcmVtIWltcG9ydGFudH0uY29sdW1uLWdhcC14bC0wey1tb3otY29sdW1uLWdhcDowIWltcG9ydGFudDtjb2x1bW4tZ2FwOjAhaW1wb3J0YW50fS5jb2x1bW4tZ2FwLXhsLTF7LW1vei1jb2x1bW4tZ2FwOjAuMjVyZW0haW1wb3J0YW50O2NvbHVtbi1nYXA6LjI1cmVtIWltcG9ydGFudH0uY29sdW1uLWdhcC14bC0yey1tb3otY29sdW1uLWdhcDowLjVyZW0haW1wb3J0YW50O2NvbHVtbi1nYXA6LjVyZW0haW1wb3J0YW50fS5jb2x1bW4tZ2FwLXhsLTN7LW1vei1jb2x1bW4tZ2FwOjFyZW0haW1wb3J0YW50O2NvbHVtbi1nYXA6MXJlbSFpbXBvcnRhbnR9LmNvbHVtbi1nYXAteGwtNHstbW96LWNvbHVtbi1nYXA6MS41cmVtIWltcG9ydGFudDtjb2x1bW4tZ2FwOjEuNXJlbSFpbXBvcnRhbnR9LmNvbHVtbi1nYXAteGwtNXstbW96LWNvbHVtbi1nYXA6M3JlbSFpbXBvcnRhbnQ7Y29sdW1uLWdhcDozcmVtIWltcG9ydGFudH0udGV4dC14bC1zdGFydHt0ZXh0LWFsaWduOmxlZnQhaW1wb3J0YW50fS50ZXh0LXhsLWVuZHt0ZXh0LWFsaWduOnJpZ2h0IWltcG9ydGFudH0udGV4dC14bC1jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDoxNDAwcHgpey5mbG9hdC14eGwtc3RhcnR7ZmxvYXQ6bGVmdCFpbXBvcnRhbnR9LmZsb2F0LXh4bC1lbmR7ZmxvYXQ6cmlnaHQhaW1wb3J0YW50fS5mbG9hdC14eGwtbm9uZXtmbG9hdDpub25lIWltcG9ydGFudH0ub2JqZWN0LWZpdC14eGwtY29udGFpbnstby1vYmplY3QtZml0OmNvbnRhaW4haW1wb3J0YW50O29iamVjdC1maXQ6Y29udGFpbiFpbXBvcnRhbnR9Lm9iamVjdC1maXQteHhsLWNvdmVyey1vLW9iamVjdC1maXQ6Y292ZXIhaW1wb3J0YW50O29iamVjdC1maXQ6Y292ZXIhaW1wb3J0YW50fS5vYmplY3QtZml0LXh4bC1maWxsey1vLW9iamVjdC1maXQ6ZmlsbCFpbXBvcnRhbnQ7b2JqZWN0LWZpdDpmaWxsIWltcG9ydGFudH0ub2JqZWN0LWZpdC14eGwtc2NhbGV7LW8tb2JqZWN0LWZpdDpzY2FsZS1kb3duIWltcG9ydGFudDtvYmplY3QtZml0OnNjYWxlLWRvd24haW1wb3J0YW50fS5vYmplY3QtZml0LXh4bC1ub25ley1vLW9iamVjdC1maXQ6bm9uZSFpbXBvcnRhbnQ7b2JqZWN0LWZpdDpub25lIWltcG9ydGFudH0uZC14eGwtaW5saW5le2Rpc3BsYXk6aW5saW5lIWltcG9ydGFudH0uZC14eGwtaW5saW5lLWJsb2Nre2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudH0uZC14eGwtYmxvY2t7ZGlzcGxheTpibG9jayFpbXBvcnRhbnR9LmQteHhsLWdyaWR7ZGlzcGxheTpncmlkIWltcG9ydGFudH0uZC14eGwtaW5saW5lLWdyaWR7ZGlzcGxheTppbmxpbmUtZ3JpZCFpbXBvcnRhbnR9LmQteHhsLXRhYmxle2Rpc3BsYXk6dGFibGUhaW1wb3J0YW50fS5kLXh4bC10YWJsZS1yb3d7ZGlzcGxheTp0YWJsZS1yb3chaW1wb3J0YW50fS5kLXh4bC10YWJsZS1jZWxse2Rpc3BsYXk6dGFibGUtY2VsbCFpbXBvcnRhbnR9LmQteHhsLWZsZXh7ZGlzcGxheTpmbGV4IWltcG9ydGFudH0uZC14eGwtaW5saW5lLWZsZXh7ZGlzcGxheTppbmxpbmUtZmxleCFpbXBvcnRhbnR9LmQteHhsLW5vbmV7ZGlzcGxheTpub25lIWltcG9ydGFudH0uZmxleC14eGwtZmlsbHtmbGV4OjEgMSBhdXRvIWltcG9ydGFudH0uZmxleC14eGwtcm93e2ZsZXgtZGlyZWN0aW9uOnJvdyFpbXBvcnRhbnR9LmZsZXgteHhsLWNvbHVtbntmbGV4LWRpcmVjdGlvbjpjb2x1bW4haW1wb3J0YW50fS5mbGV4LXh4bC1yb3ctcmV2ZXJzZXtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZSFpbXBvcnRhbnR9LmZsZXgteHhsLWNvbHVtbi1yZXZlcnNle2ZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlIWltcG9ydGFudH0uZmxleC14eGwtZ3Jvdy0we2ZsZXgtZ3JvdzowIWltcG9ydGFudH0uZmxleC14eGwtZ3Jvdy0xe2ZsZXgtZ3JvdzoxIWltcG9ydGFudH0uZmxleC14eGwtc2hyaW5rLTB7ZmxleC1zaHJpbms6MCFpbXBvcnRhbnR9LmZsZXgteHhsLXNocmluay0xe2ZsZXgtc2hyaW5rOjEhaW1wb3J0YW50fS5mbGV4LXh4bC13cmFwe2ZsZXgtd3JhcDp3cmFwIWltcG9ydGFudH0uZmxleC14eGwtbm93cmFwe2ZsZXgtd3JhcDpub3dyYXAhaW1wb3J0YW50fS5mbGV4LXh4bC13cmFwLXJldmVyc2V7ZmxleC13cmFwOndyYXAtcmV2ZXJzZSFpbXBvcnRhbnR9Lmp1c3RpZnktY29udGVudC14eGwtc3RhcnR7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQhaW1wb3J0YW50fS5qdXN0aWZ5LWNvbnRlbnQteHhsLWVuZHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQhaW1wb3J0YW50fS5qdXN0aWZ5LWNvbnRlbnQteHhsLWNlbnRlcntqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyIWltcG9ydGFudH0uanVzdGlmeS1jb250ZW50LXh4bC1iZXR3ZWVue2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuIWltcG9ydGFudH0uanVzdGlmeS1jb250ZW50LXh4bC1hcm91bmR7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZCFpbXBvcnRhbnR9Lmp1c3RpZnktY29udGVudC14eGwtZXZlbmx5e2p1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHkhaW1wb3J0YW50fS5hbGlnbi1pdGVtcy14eGwtc3RhcnR7YWxpZ24taXRlbXM6ZmxleC1zdGFydCFpbXBvcnRhbnR9LmFsaWduLWl0ZW1zLXh4bC1lbmR7YWxpZ24taXRlbXM6ZmxleC1lbmQhaW1wb3J0YW50fS5hbGlnbi1pdGVtcy14eGwtY2VudGVye2FsaWduLWl0ZW1zOmNlbnRlciFpbXBvcnRhbnR9LmFsaWduLWl0ZW1zLXh4bC1iYXNlbGluZXthbGlnbi1pdGVtczpiYXNlbGluZSFpbXBvcnRhbnR9LmFsaWduLWl0ZW1zLXh4bC1zdHJldGNoe2FsaWduLWl0ZW1zOnN0cmV0Y2ghaW1wb3J0YW50fS5hbGlnbi1jb250ZW50LXh4bC1zdGFydHthbGlnbi1jb250ZW50OmZsZXgtc3RhcnQhaW1wb3J0YW50fS5hbGlnbi1jb250ZW50LXh4bC1lbmR7YWxpZ24tY29udGVudDpmbGV4LWVuZCFpbXBvcnRhbnR9LmFsaWduLWNvbnRlbnQteHhsLWNlbnRlcnthbGlnbi1jb250ZW50OmNlbnRlciFpbXBvcnRhbnR9LmFsaWduLWNvbnRlbnQteHhsLWJldHdlZW57YWxpZ24tY29udGVudDpzcGFjZS1iZXR3ZWVuIWltcG9ydGFudH0uYWxpZ24tY29udGVudC14eGwtYXJvdW5ke2FsaWduLWNvbnRlbnQ6c3BhY2UtYXJvdW5kIWltcG9ydGFudH0uYWxpZ24tY29udGVudC14eGwtc3RyZXRjaHthbGlnbi1jb250ZW50OnN0cmV0Y2ghaW1wb3J0YW50fS5hbGlnbi1zZWxmLXh4bC1hdXRve2FsaWduLXNlbGY6YXV0byFpbXBvcnRhbnR9LmFsaWduLXNlbGYteHhsLXN0YXJ0e2FsaWduLXNlbGY6ZmxleC1zdGFydCFpbXBvcnRhbnR9LmFsaWduLXNlbGYteHhsLWVuZHthbGlnbi1zZWxmOmZsZXgtZW5kIWltcG9ydGFudH0uYWxpZ24tc2VsZi14eGwtY2VudGVye2FsaWduLXNlbGY6Y2VudGVyIWltcG9ydGFudH0uYWxpZ24tc2VsZi14eGwtYmFzZWxpbmV7YWxpZ24tc2VsZjpiYXNlbGluZSFpbXBvcnRhbnR9LmFsaWduLXNlbGYteHhsLXN0cmV0Y2h7YWxpZ24tc2VsZjpzdHJldGNoIWltcG9ydGFudH0ub3JkZXIteHhsLWZpcnN0e29yZGVyOi0xIWltcG9ydGFudH0ub3JkZXIteHhsLTB7b3JkZXI6MCFpbXBvcnRhbnR9Lm9yZGVyLXh4bC0xe29yZGVyOjEhaW1wb3J0YW50fS5vcmRlci14eGwtMntvcmRlcjoyIWltcG9ydGFudH0ub3JkZXIteHhsLTN7b3JkZXI6MyFpbXBvcnRhbnR9Lm9yZGVyLXh4bC00e29yZGVyOjQhaW1wb3J0YW50fS5vcmRlci14eGwtNXtvcmRlcjo1IWltcG9ydGFudH0ub3JkZXIteHhsLWxhc3R7b3JkZXI6NiFpbXBvcnRhbnR9Lm0teHhsLTB7bWFyZ2luOjAhaW1wb3J0YW50fS5tLXh4bC0xe21hcmdpbjouMjVyZW0haW1wb3J0YW50fS5tLXh4bC0ye21hcmdpbjouNXJlbSFpbXBvcnRhbnR9Lm0teHhsLTN7bWFyZ2luOjFyZW0haW1wb3J0YW50fS5tLXh4bC00e21hcmdpbjoxLjVyZW0haW1wb3J0YW50fS5tLXh4bC01e21hcmdpbjozcmVtIWltcG9ydGFudH0ubS14eGwtYXV0b3ttYXJnaW46YXV0byFpbXBvcnRhbnR9Lm14LXh4bC0we21hcmdpbi1yaWdodDowIWltcG9ydGFudDttYXJnaW4tbGVmdDowIWltcG9ydGFudH0ubXgteHhsLTF7bWFyZ2luLXJpZ2h0Oi4yNXJlbSFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6LjI1cmVtIWltcG9ydGFudH0ubXgteHhsLTJ7bWFyZ2luLXJpZ2h0Oi41cmVtIWltcG9ydGFudDttYXJnaW4tbGVmdDouNXJlbSFpbXBvcnRhbnR9Lm14LXh4bC0ze21hcmdpbi1yaWdodDoxcmVtIWltcG9ydGFudDttYXJnaW4tbGVmdDoxcmVtIWltcG9ydGFudH0ubXgteHhsLTR7bWFyZ2luLXJpZ2h0OjEuNXJlbSFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6MS41cmVtIWltcG9ydGFudH0ubXgteHhsLTV7bWFyZ2luLXJpZ2h0OjNyZW0haW1wb3J0YW50O21hcmdpbi1sZWZ0OjNyZW0haW1wb3J0YW50fS5teC14eGwtYXV0b3ttYXJnaW4tcmlnaHQ6YXV0byFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6YXV0byFpbXBvcnRhbnR9Lm15LXh4bC0we21hcmdpbi10b3A6MCFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTowIWltcG9ydGFudH0ubXkteHhsLTF7bWFyZ2luLXRvcDouMjVyZW0haW1wb3J0YW50O21hcmdpbi1ib3R0b206LjI1cmVtIWltcG9ydGFudH0ubXkteHhsLTJ7bWFyZ2luLXRvcDouNXJlbSFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTouNXJlbSFpbXBvcnRhbnR9Lm15LXh4bC0ze21hcmdpbi10b3A6MXJlbSFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbToxcmVtIWltcG9ydGFudH0ubXkteHhsLTR7bWFyZ2luLXRvcDoxLjVyZW0haW1wb3J0YW50O21hcmdpbi1ib3R0b206MS41cmVtIWltcG9ydGFudH0ubXkteHhsLTV7bWFyZ2luLXRvcDozcmVtIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjNyZW0haW1wb3J0YW50fS5teS14eGwtYXV0b3ttYXJnaW4tdG9wOmF1dG8haW1wb3J0YW50O21hcmdpbi1ib3R0b206YXV0byFpbXBvcnRhbnR9Lm10LXh4bC0we21hcmdpbi10b3A6MCFpbXBvcnRhbnR9Lm10LXh4bC0xe21hcmdpbi10b3A6LjI1cmVtIWltcG9ydGFudH0ubXQteHhsLTJ7bWFyZ2luLXRvcDouNXJlbSFpbXBvcnRhbnR9Lm10LXh4bC0ze21hcmdpbi10b3A6MXJlbSFpbXBvcnRhbnR9Lm10LXh4bC00e21hcmdpbi10b3A6MS41cmVtIWltcG9ydGFudH0ubXQteHhsLTV7bWFyZ2luLXRvcDozcmVtIWltcG9ydGFudH0ubXQteHhsLWF1dG97bWFyZ2luLXRvcDphdXRvIWltcG9ydGFudH0ubWUteHhsLTB7bWFyZ2luLXJpZ2h0OjAhaW1wb3J0YW50fS5tZS14eGwtMXttYXJnaW4tcmlnaHQ6LjI1cmVtIWltcG9ydGFudH0ubWUteHhsLTJ7bWFyZ2luLXJpZ2h0Oi41cmVtIWltcG9ydGFudH0ubWUteHhsLTN7bWFyZ2luLXJpZ2h0OjFyZW0haW1wb3J0YW50fS5tZS14eGwtNHttYXJnaW4tcmlnaHQ6MS41cmVtIWltcG9ydGFudH0ubWUteHhsLTV7bWFyZ2luLXJpZ2h0OjNyZW0haW1wb3J0YW50fS5tZS14eGwtYXV0b3ttYXJnaW4tcmlnaHQ6YXV0byFpbXBvcnRhbnR9Lm1iLXh4bC0we21hcmdpbi1ib3R0b206MCFpbXBvcnRhbnR9Lm1iLXh4bC0xe21hcmdpbi1ib3R0b206LjI1cmVtIWltcG9ydGFudH0ubWIteHhsLTJ7bWFyZ2luLWJvdHRvbTouNXJlbSFpbXBvcnRhbnR9Lm1iLXh4bC0ze21hcmdpbi1ib3R0b206MXJlbSFpbXBvcnRhbnR9Lm1iLXh4bC00e21hcmdpbi1ib3R0b206MS41cmVtIWltcG9ydGFudH0ubWIteHhsLTV7bWFyZ2luLWJvdHRvbTozcmVtIWltcG9ydGFudH0ubWIteHhsLWF1dG97bWFyZ2luLWJvdHRvbTphdXRvIWltcG9ydGFudH0ubXMteHhsLTB7bWFyZ2luLWxlZnQ6MCFpbXBvcnRhbnR9Lm1zLXh4bC0xe21hcmdpbi1sZWZ0Oi4yNXJlbSFpbXBvcnRhbnR9Lm1zLXh4bC0ye21hcmdpbi1sZWZ0Oi41cmVtIWltcG9ydGFudH0ubXMteHhsLTN7bWFyZ2luLWxlZnQ6MXJlbSFpbXBvcnRhbnR9Lm1zLXh4bC00e21hcmdpbi1sZWZ0OjEuNXJlbSFpbXBvcnRhbnR9Lm1zLXh4bC01e21hcmdpbi1sZWZ0OjNyZW0haW1wb3J0YW50fS5tcy14eGwtYXV0b3ttYXJnaW4tbGVmdDphdXRvIWltcG9ydGFudH0ucC14eGwtMHtwYWRkaW5nOjAhaW1wb3J0YW50fS5wLXh4bC0xe3BhZGRpbmc6LjI1cmVtIWltcG9ydGFudH0ucC14eGwtMntwYWRkaW5nOi41cmVtIWltcG9ydGFudH0ucC14eGwtM3twYWRkaW5nOjFyZW0haW1wb3J0YW50fS5wLXh4bC00e3BhZGRpbmc6MS41cmVtIWltcG9ydGFudH0ucC14eGwtNXtwYWRkaW5nOjNyZW0haW1wb3J0YW50fS5weC14eGwtMHtwYWRkaW5nLXJpZ2h0OjAhaW1wb3J0YW50O3BhZGRpbmctbGVmdDowIWltcG9ydGFudH0ucHgteHhsLTF7cGFkZGluZy1yaWdodDouMjVyZW0haW1wb3J0YW50O3BhZGRpbmctbGVmdDouMjVyZW0haW1wb3J0YW50fS5weC14eGwtMntwYWRkaW5nLXJpZ2h0Oi41cmVtIWltcG9ydGFudDtwYWRkaW5nLWxlZnQ6LjVyZW0haW1wb3J0YW50fS5weC14eGwtM3twYWRkaW5nLXJpZ2h0OjFyZW0haW1wb3J0YW50O3BhZGRpbmctbGVmdDoxcmVtIWltcG9ydGFudH0ucHgteHhsLTR7cGFkZGluZy1yaWdodDoxLjVyZW0haW1wb3J0YW50O3BhZGRpbmctbGVmdDoxLjVyZW0haW1wb3J0YW50fS5weC14eGwtNXtwYWRkaW5nLXJpZ2h0OjNyZW0haW1wb3J0YW50O3BhZGRpbmctbGVmdDozcmVtIWltcG9ydGFudH0ucHkteHhsLTB7cGFkZGluZy10b3A6MCFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MCFpbXBvcnRhbnR9LnB5LXh4bC0xe3BhZGRpbmctdG9wOi4yNXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206LjI1cmVtIWltcG9ydGFudH0ucHkteHhsLTJ7cGFkZGluZy10b3A6LjVyZW0haW1wb3J0YW50O3BhZGRpbmctYm90dG9tOi41cmVtIWltcG9ydGFudH0ucHkteHhsLTN7cGFkZGluZy10b3A6MXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MXJlbSFpbXBvcnRhbnR9LnB5LXh4bC00e3BhZGRpbmctdG9wOjEuNXJlbSFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MS41cmVtIWltcG9ydGFudH0ucHkteHhsLTV7cGFkZGluZy10b3A6M3JlbSFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206M3JlbSFpbXBvcnRhbnR9LnB0LXh4bC0we3BhZGRpbmctdG9wOjAhaW1wb3J0YW50fS5wdC14eGwtMXtwYWRkaW5nLXRvcDouMjVyZW0haW1wb3J0YW50fS5wdC14eGwtMntwYWRkaW5nLXRvcDouNXJlbSFpbXBvcnRhbnR9LnB0LXh4bC0ze3BhZGRpbmctdG9wOjFyZW0haW1wb3J0YW50fS5wdC14eGwtNHtwYWRkaW5nLXRvcDoxLjVyZW0haW1wb3J0YW50fS5wdC14eGwtNXtwYWRkaW5nLXRvcDozcmVtIWltcG9ydGFudH0ucGUteHhsLTB7cGFkZGluZy1yaWdodDowIWltcG9ydGFudH0ucGUteHhsLTF7cGFkZGluZy1yaWdodDouMjVyZW0haW1wb3J0YW50fS5wZS14eGwtMntwYWRkaW5nLXJpZ2h0Oi41cmVtIWltcG9ydGFudH0ucGUteHhsLTN7cGFkZGluZy1yaWdodDoxcmVtIWltcG9ydGFudH0ucGUteHhsLTR7cGFkZGluZy1yaWdodDoxLjVyZW0haW1wb3J0YW50fS5wZS14eGwtNXtwYWRkaW5nLXJpZ2h0OjNyZW0haW1wb3J0YW50fS5wYi14eGwtMHtwYWRkaW5nLWJvdHRvbTowIWltcG9ydGFudH0ucGIteHhsLTF7cGFkZGluZy1ib3R0b206LjI1cmVtIWltcG9ydGFudH0ucGIteHhsLTJ7cGFkZGluZy1ib3R0b206LjVyZW0haW1wb3J0YW50fS5wYi14eGwtM3twYWRkaW5nLWJvdHRvbToxcmVtIWltcG9ydGFudH0ucGIteHhsLTR7cGFkZGluZy1ib3R0b206MS41cmVtIWltcG9ydGFudH0ucGIteHhsLTV7cGFkZGluZy1ib3R0b206M3JlbSFpbXBvcnRhbnR9LnBzLXh4bC0we3BhZGRpbmctbGVmdDowIWltcG9ydGFudH0ucHMteHhsLTF7cGFkZGluZy1sZWZ0Oi4yNXJlbSFpbXBvcnRhbnR9LnBzLXh4bC0ye3BhZGRpbmctbGVmdDouNXJlbSFpbXBvcnRhbnR9LnBzLXh4bC0ze3BhZGRpbmctbGVmdDoxcmVtIWltcG9ydGFudH0ucHMteHhsLTR7cGFkZGluZy1sZWZ0OjEuNXJlbSFpbXBvcnRhbnR9LnBzLXh4bC01e3BhZGRpbmctbGVmdDozcmVtIWltcG9ydGFudH0uZ2FwLXh4bC0we2dhcDowIWltcG9ydGFudH0uZ2FwLXh4bC0xe2dhcDouMjVyZW0haW1wb3J0YW50fS5nYXAteHhsLTJ7Z2FwOi41cmVtIWltcG9ydGFudH0uZ2FwLXh4bC0ze2dhcDoxcmVtIWltcG9ydGFudH0uZ2FwLXh4bC00e2dhcDoxLjVyZW0haW1wb3J0YW50fS5nYXAteHhsLTV7Z2FwOjNyZW0haW1wb3J0YW50fS5yb3ctZ2FwLXh4bC0we3Jvdy1nYXA6MCFpbXBvcnRhbnR9LnJvdy1nYXAteHhsLTF7cm93LWdhcDouMjVyZW0haW1wb3J0YW50fS5yb3ctZ2FwLXh4bC0ye3Jvdy1nYXA6LjVyZW0haW1wb3J0YW50fS5yb3ctZ2FwLXh4bC0ze3Jvdy1nYXA6MXJlbSFpbXBvcnRhbnR9LnJvdy1nYXAteHhsLTR7cm93LWdhcDoxLjVyZW0haW1wb3J0YW50fS5yb3ctZ2FwLXh4bC01e3Jvdy1nYXA6M3JlbSFpbXBvcnRhbnR9LmNvbHVtbi1nYXAteHhsLTB7LW1vei1jb2x1bW4tZ2FwOjAhaW1wb3J0YW50O2NvbHVtbi1nYXA6MCFpbXBvcnRhbnR9LmNvbHVtbi1nYXAteHhsLTF7LW1vei1jb2x1bW4tZ2FwOjAuMjVyZW0haW1wb3J0YW50O2NvbHVtbi1nYXA6LjI1cmVtIWltcG9ydGFudH0uY29sdW1uLWdhcC14eGwtMnstbW96LWNvbHVtbi1nYXA6MC41cmVtIWltcG9ydGFudDtjb2x1bW4tZ2FwOi41cmVtIWltcG9ydGFudH0uY29sdW1uLWdhcC14eGwtM3stbW96LWNvbHVtbi1nYXA6MXJlbSFpbXBvcnRhbnQ7Y29sdW1uLWdhcDoxcmVtIWltcG9ydGFudH0uY29sdW1uLWdhcC14eGwtNHstbW96LWNvbHVtbi1nYXA6MS41cmVtIWltcG9ydGFudDtjb2x1bW4tZ2FwOjEuNXJlbSFpbXBvcnRhbnR9LmNvbHVtbi1nYXAteHhsLTV7LW1vei1jb2x1bW4tZ2FwOjNyZW0haW1wb3J0YW50O2NvbHVtbi1nYXA6M3JlbSFpbXBvcnRhbnR9LnRleHQteHhsLXN0YXJ0e3RleHQtYWxpZ246bGVmdCFpbXBvcnRhbnR9LnRleHQteHhsLWVuZHt0ZXh0LWFsaWduOnJpZ2h0IWltcG9ydGFudH0udGV4dC14eGwtY2VudGVye3RleHQtYWxpZ246Y2VudGVyIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuZnMtMXtmb250LXNpemU6Mi41cmVtIWltcG9ydGFudH0uZnMtMntmb250LXNpemU6MnJlbSFpbXBvcnRhbnR9LmZzLTN7Zm9udC1zaXplOjEuNzVyZW0haW1wb3J0YW50fS5mcy00e2ZvbnQtc2l6ZToxLjVyZW0haW1wb3J0YW50fX1AbWVkaWEgcHJpbnR7LmQtcHJpbnQtaW5saW5le2Rpc3BsYXk6aW5saW5lIWltcG9ydGFudH0uZC1wcmludC1pbmxpbmUtYmxvY2t7ZGlzcGxheTppbmxpbmUtYmxvY2shaW1wb3J0YW50fS5kLXByaW50LWJsb2Nre2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50fS5kLXByaW50LWdyaWR7ZGlzcGxheTpncmlkIWltcG9ydGFudH0uZC1wcmludC1pbmxpbmUtZ3JpZHtkaXNwbGF5OmlubGluZS1ncmlkIWltcG9ydGFudH0uZC1wcmludC10YWJsZXtkaXNwbGF5OnRhYmxlIWltcG9ydGFudH0uZC1wcmludC10YWJsZS1yb3d7ZGlzcGxheTp0YWJsZS1yb3chaW1wb3J0YW50fS5kLXByaW50LXRhYmxlLWNlbGx7ZGlzcGxheTp0YWJsZS1jZWxsIWltcG9ydGFudH0uZC1wcmludC1mbGV4e2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnR9LmQtcHJpbnQtaW5saW5lLWZsZXh7ZGlzcGxheTppbmxpbmUtZmxleCFpbXBvcnRhbnR9LmQtcHJpbnQtbm9uZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX0KLyojIHNvdXJjZU1hcHBpbmdVUkw9Ym9vdHN0cmFwLm1pbi5jc3MubWFwICov"
const bs53_2    = "LyohCiAgKiBCb290c3RyYXAgdjUuMy4zIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKQogICogQ29weXJpZ2h0IDIwMTEtMjAyNCBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKQogICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpCiAgKi8KIWZ1bmN0aW9uKHQsZSl7Im9iamVjdCI9PXR5cGVvZiBleHBvcnRzJiYidW5kZWZpbmVkIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6ImZ1bmN0aW9uIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9InVuZGVmaW5lZCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuYm9vdHN0cmFwPWUoKX0odGhpcywoZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y29uc3QgdD1uZXcgTWFwLGU9e3NldChlLGksbil7dC5oYXMoZSl8fHQuc2V0KGUsbmV3IE1hcCk7Y29uc3Qgcz10LmdldChlKTtzLmhhcyhpKXx8MD09PXMuc2l6ZT9zLnNldChpLG4pOmNvbnNvbGUuZXJyb3IoYEJvb3RzdHJhcCBkb2Vzbid0IGFsbG93IG1vcmUgdGhhbiBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnQuIEJvdW5kIGluc3RhbmNlOiAke0FycmF5LmZyb20ocy5rZXlzKCkpWzBdfS5gKX0sZ2V0OihlLGkpPT50LmhhcyhlKSYmdC5nZXQoZSkuZ2V0KGkpfHxudWxsLHJlbW92ZShlLGkpe2lmKCF0LmhhcyhlKSlyZXR1cm47Y29uc3Qgbj10LmdldChlKTtuLmRlbGV0ZShpKSwwPT09bi5zaXplJiZ0LmRlbGV0ZShlKX19LGk9InRyYW5zaXRpb25lbmQiLG49dD0+KHQmJndpbmRvdy5DU1MmJndpbmRvdy5DU1MuZXNjYXBlJiYodD10LnJlcGxhY2UoLyMoW15ccyIjJ10rKS9nLCgodCxlKT0+YCMke0NTUy5lc2NhcGUoZSl9YCkpKSx0KSxzPXQ9Pnt0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KGkpKX0sbz10PT4hKCF0fHwib2JqZWN0IiE9dHlwZW9mIHQpJiYodm9pZCAwIT09dC5qcXVlcnkmJih0PXRbMF0pLHZvaWQgMCE9PXQubm9kZVR5cGUpLHI9dD0+byh0KT90LmpxdWVyeT90WzBdOnQ6InN0cmluZyI9PXR5cGVvZiB0JiZ0Lmxlbmd0aD4wP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobih0KSk6bnVsbCxhPXQ9PntpZighbyh0KXx8MD09PXQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpcmV0dXJuITE7Y29uc3QgZT0idmlzaWJsZSI9PT1nZXRDb21wdXRlZFN0eWxlKHQpLmdldFByb3BlcnR5VmFsdWUoInZpc2liaWxpdHkiKSxpPXQuY2xvc2VzdCgiZGV0YWlsczpub3QoW29wZW5dKSIpO2lmKCFpKXJldHVybiBlO2lmKGkhPT10KXtjb25zdCBlPXQuY2xvc2VzdCgic3VtbWFyeSIpO2lmKGUmJmUucGFyZW50Tm9kZSE9PWkpcmV0dXJuITE7aWYobnVsbD09PWUpcmV0dXJuITF9cmV0dXJuIGV9LGw9dD0+IXR8fHQubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERXx8ISF0LmNsYXNzTGlzdC5jb250YWlucygiZGlzYWJsZWQiKXx8KHZvaWQgMCE9PXQuZGlzYWJsZWQ/dC5kaXNhYmxlZDp0Lmhhc0F0dHJpYnV0ZSgiZGlzYWJsZWQiKSYmImZhbHNlIiE9PXQuZ2V0QXR0cmlidXRlKCJkaXNhYmxlZCIpKSxjPXQ9PntpZighZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdylyZXR1cm4gbnVsbDtpZigiZnVuY3Rpb24iPT10eXBlb2YgdC5nZXRSb290Tm9kZSl7Y29uc3QgZT10LmdldFJvb3ROb2RlKCk7cmV0dXJuIGUgaW5zdGFuY2VvZiBTaGFkb3dSb290P2U6bnVsbH1yZXR1cm4gdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q/dDp0LnBhcmVudE5vZGU/Yyh0LnBhcmVudE5vZGUpOm51bGx9LGg9KCk9Pnt9LGQ9dD0+e3Qub2Zmc2V0SGVpZ2h0fSx1PSgpPT53aW5kb3cualF1ZXJ5JiYhZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoImRhdGEtYnMtbm8tanF1ZXJ5Iik/d2luZG93LmpRdWVyeTpudWxsLGY9W10scD0oKT0+InJ0bCI9PT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyLG09dD0+e3ZhciBlO2U9KCk9Pntjb25zdCBlPXUoKTtpZihlKXtjb25zdCBpPXQuTkFNRSxuPWUuZm5baV07ZS5mbltpXT10LmpRdWVyeUludGVyZmFjZSxlLmZuW2ldLkNvbnN0cnVjdG9yPXQsZS5mbltpXS5ub0NvbmZsaWN0PSgpPT4oZS5mbltpXT1uLHQualF1ZXJ5SW50ZXJmYWNlKX19LCJsb2FkaW5nIj09PWRvY3VtZW50LnJlYWR5U3RhdGU/KGYubGVuZ3RofHxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCJET01Db250ZW50TG9hZGVkIiwoKCk9Pntmb3IoY29uc3QgdCBvZiBmKXQoKX0pKSxmLnB1c2goZSkpOmUoKX0sZz0odCxlPVtdLGk9dCk9PiJmdW5jdGlvbiI9PXR5cGVvZiB0P3QoLi4uZSk6aSxfPSh0LGUsbj0hMCk9PntpZighbilyZXR1cm4gdm9pZCBnKHQpO2NvbnN0IG89KHQ9PntpZighdClyZXR1cm4gMDtsZXR7dHJhbnNpdGlvbkR1cmF0aW9uOmUsdHJhbnNpdGlvbkRlbGF5Oml9PXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpO2NvbnN0IG49TnVtYmVyLnBhcnNlRmxvYXQoZSkscz1OdW1iZXIucGFyc2VGbG9hdChpKTtyZXR1cm4gbnx8cz8oZT1lLnNwbGl0KCIsIilbMF0saT1pLnNwbGl0KCIsIilbMF0sMWUzKihOdW1iZXIucGFyc2VGbG9hdChlKStOdW1iZXIucGFyc2VGbG9hdChpKSkpOjB9KShlKSs1O2xldCByPSExO2NvbnN0IGE9KHt0YXJnZXQ6bn0pPT57bj09PWUmJihyPSEwLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihpLGEpLGcodCkpfTtlLmFkZEV2ZW50TGlzdGVuZXIoaSxhKSxzZXRUaW1lb3V0KCgoKT0+e3J8fHMoZSl9KSxvKX0sYj0odCxlLGksbik9Pntjb25zdCBzPXQubGVuZ3RoO2xldCBvPXQuaW5kZXhPZihlKTtyZXR1cm4tMT09PW8/IWkmJm4/dFtzLTFdOnRbMF06KG8rPWk/MTotMSxuJiYobz0obytzKSVzKSx0W01hdGgubWF4KDAsTWF0aC5taW4obyxzLTEpKV0pfSx2PS9bXi5dKig/PVwuLiopXC58LiovLHk9L1wuLiovLHc9Lzo6XGQrJC8sQT17fTtsZXQgRT0xO2NvbnN0IFQ9e21vdXNlZW50ZXI6Im1vdXNlb3ZlciIsbW91c2VsZWF2ZToibW91c2VvdXQifSxDPW5ldyBTZXQoWyJjbGljayIsImRibGNsaWNrIiwibW91c2V1cCIsIm1vdXNlZG93biIsImNvbnRleHRtZW51IiwibW91c2V3aGVlbCIsIkRPTU1vdXNlU2Nyb2xsIiwibW91c2VvdmVyIiwibW91c2VvdXQiLCJtb3VzZW1vdmUiLCJzZWxlY3RzdGFydCIsInNlbGVjdGVuZCIsImtleWRvd24iLCJrZXlwcmVzcyIsImtleXVwIiwib3JpZW50YXRpb25jaGFuZ2UiLCJ0b3VjaHN0YXJ0IiwidG91Y2htb3ZlIiwidG91Y2hlbmQiLCJ0b3VjaGNhbmNlbCIsInBvaW50ZXJkb3duIiwicG9pbnRlcm1vdmUiLCJwb2ludGVydXAiLCJwb2ludGVybGVhdmUiLCJwb2ludGVyY2FuY2VsIiwiZ2VzdHVyZXN0YXJ0IiwiZ2VzdHVyZWNoYW5nZSIsImdlc3R1cmVlbmQiLCJmb2N1cyIsImJsdXIiLCJjaGFuZ2UiLCJyZXNldCIsInNlbGVjdCIsInN1Ym1pdCIsImZvY3VzaW4iLCJmb2N1c291dCIsImxvYWQiLCJ1bmxvYWQiLCJiZWZvcmV1bmxvYWQiLCJyZXNpemUiLCJtb3ZlIiwiRE9NQ29udGVudExvYWRlZCIsInJlYWR5c3RhdGVjaGFuZ2UiLCJlcnJvciIsImFib3J0Iiwic2Nyb2xsIl0pO2Z1bmN0aW9uIE8odCxlKXtyZXR1cm4gZSYmYCR7ZX06OiR7RSsrfWB8fHQudWlkRXZlbnR8fEUrK31mdW5jdGlvbiB4KHQpe2NvbnN0IGU9Tyh0KTtyZXR1cm4gdC51aWRFdmVudD1lLEFbZV09QVtlXXx8e30sQVtlXX1mdW5jdGlvbiBrKHQsZSxpPW51bGwpe3JldHVybiBPYmplY3QudmFsdWVzKHQpLmZpbmQoKHQ9PnQuY2FsbGFibGU9PT1lJiZ0LmRlbGVnYXRpb25TZWxlY3Rvcj09PWkpKX1mdW5jdGlvbiBMKHQsZSxpKXtjb25zdCBuPSJzdHJpbmciPT10eXBlb2YgZSxzPW4/aTplfHxpO2xldCBvPUkodCk7cmV0dXJuIEMuaGFzKG8pfHwobz10KSxbbixzLG9dfWZ1bmN0aW9uIFModCxlLGksbixzKXtpZigic3RyaW5nIiE9dHlwZW9mIGV8fCF0KXJldHVybjtsZXRbbyxyLGFdPUwoZSxpLG4pO2lmKGUgaW4gVCl7Y29uc3QgdD10PT5mdW5jdGlvbihlKXtpZighZS5yZWxhdGVkVGFyZ2V0fHxlLnJlbGF0ZWRUYXJnZXQhPT1lLmRlbGVnYXRlVGFyZ2V0JiYhZS5kZWxlZ2F0ZVRhcmdldC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpKXJldHVybiB0LmNhbGwodGhpcyxlKX07cj10KHIpfWNvbnN0IGw9eCh0KSxjPWxbYV18fChsW2FdPXt9KSxoPWsoYyxyLG8/aTpudWxsKTtpZihoKXJldHVybiB2b2lkKGgub25lT2ZmPWgub25lT2ZmJiZzKTtjb25zdCBkPU8ocixlLnJlcGxhY2UodiwiIikpLHU9bz9mdW5jdGlvbih0LGUsaSl7cmV0dXJuIGZ1bmN0aW9uIG4ocyl7Y29uc3Qgbz10LnF1ZXJ5U2VsZWN0b3JBbGwoZSk7Zm9yKGxldHt0YXJnZXQ6cn09cztyJiZyIT09dGhpcztyPXIucGFyZW50Tm9kZSlmb3IoY29uc3QgYSBvZiBvKWlmKGE9PT1yKXJldHVybiBQKHMse2RlbGVnYXRlVGFyZ2V0OnJ9KSxuLm9uZU9mZiYmTi5vZmYodCxzLnR5cGUsZSxpKSxpLmFwcGx5KHIsW3NdKX19KHQsaSxyKTpmdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbiBpKG4pe3JldHVybiBQKG4se2RlbGVnYXRlVGFyZ2V0OnR9KSxpLm9uZU9mZiYmTi5vZmYodCxuLnR5cGUsZSksZS5hcHBseSh0LFtuXSl9fSh0LHIpO3UuZGVsZWdhdGlvblNlbGVjdG9yPW8/aTpudWxsLHUuY2FsbGFibGU9cix1Lm9uZU9mZj1zLHUudWlkRXZlbnQ9ZCxjW2RdPXUsdC5hZGRFdmVudExpc3RlbmVyKGEsdSxvKX1mdW5jdGlvbiBEKHQsZSxpLG4scyl7Y29uc3Qgbz1rKGVbaV0sbixzKTtvJiYodC5yZW1vdmVFdmVudExpc3RlbmVyKGksbyxCb29sZWFuKHMpKSxkZWxldGUgZVtpXVtvLnVpZEV2ZW50XSl9ZnVuY3Rpb24gJCh0LGUsaSxuKXtjb25zdCBzPWVbaV18fHt9O2Zvcihjb25zdFtvLHJdb2YgT2JqZWN0LmVudHJpZXMocykpby5pbmNsdWRlcyhuKSYmRCh0LGUsaSxyLmNhbGxhYmxlLHIuZGVsZWdhdGlvblNlbGVjdG9yKX1mdW5jdGlvbiBJKHQpe3JldHVybiB0PXQucmVwbGFjZSh5LCIiKSxUW3RdfHx0fWNvbnN0IE49e29uKHQsZSxpLG4pe1ModCxlLGksbiwhMSl9LG9uZSh0LGUsaSxuKXtTKHQsZSxpLG4sITApfSxvZmYodCxlLGksbil7aWYoInN0cmluZyIhPXR5cGVvZiBlfHwhdClyZXR1cm47Y29uc3RbcyxvLHJdPUwoZSxpLG4pLGE9ciE9PWUsbD14KHQpLGM9bFtyXXx8e30saD1lLnN0YXJ0c1dpdGgoIi4iKTtpZih2b2lkIDA9PT1vKXtpZihoKWZvcihjb25zdCBpIG9mIE9iamVjdC5rZXlzKGwpKSQodCxsLGksZS5zbGljZSgxKSk7Zm9yKGNvbnN0W2ksbl1vZiBPYmplY3QuZW50cmllcyhjKSl7Y29uc3Qgcz1pLnJlcGxhY2UodywiIik7YSYmIWUuaW5jbHVkZXMocyl8fEQodCxsLHIsbi5jYWxsYWJsZSxuLmRlbGVnYXRpb25TZWxlY3Rvcil9fWVsc2V7aWYoIU9iamVjdC5rZXlzKGMpLmxlbmd0aClyZXR1cm47RCh0LGwscixvLHM/aTpudWxsKX19LHRyaWdnZXIodCxlLGkpe2lmKCJzdHJpbmciIT10eXBlb2YgZXx8IXQpcmV0dXJuIG51bGw7Y29uc3Qgbj11KCk7bGV0IHM9bnVsbCxvPSEwLHI9ITAsYT0hMTtlIT09SShlKSYmbiYmKHM9bi5FdmVudChlLGkpLG4odCkudHJpZ2dlcihzKSxvPSFzLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkscj0hcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpLGE9cy5pc0RlZmF1bHRQcmV2ZW50ZWQoKSk7Y29uc3QgbD1QKG5ldyBFdmVudChlLHtidWJibGVzOm8sY2FuY2VsYWJsZTohMH0pLGkpO3JldHVybiBhJiZsLnByZXZlbnREZWZhdWx0KCksciYmdC5kaXNwYXRjaEV2ZW50KGwpLGwuZGVmYXVsdFByZXZlbnRlZCYmcyYmcy5wcmV2ZW50RGVmYXVsdCgpLGx9fTtmdW5jdGlvbiBQKHQsZT17fSl7Zm9yKGNvbnN0W2ksbl1vZiBPYmplY3QuZW50cmllcyhlKSl0cnl7dFtpXT1ufWNhdGNoKGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse2NvbmZpZ3VyYWJsZTohMCxnZXQ6KCk9Pm59KX1yZXR1cm4gdH1mdW5jdGlvbiBqKHQpe2lmKCJ0cnVlIj09PXQpcmV0dXJuITA7aWYoImZhbHNlIj09PXQpcmV0dXJuITE7aWYodD09PU51bWJlcih0KS50b1N0cmluZygpKXJldHVybiBOdW1iZXIodCk7aWYoIiI9PT10fHwibnVsbCI9PT10KXJldHVybiBudWxsO2lmKCJzdHJpbmciIT10eXBlb2YgdClyZXR1cm4gdDt0cnl7cmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KHQpKX1jYXRjaChlKXtyZXR1cm4gdH19ZnVuY3Rpb24gTSh0KXtyZXR1cm4gdC5yZXBsYWNlKC9bQS1aXS9nLCh0PT5gLSR7dC50b0xvd2VyQ2FzZSgpfWApKX1jb25zdCBGPXtzZXREYXRhQXR0cmlidXRlKHQsZSxpKXt0LnNldEF0dHJpYnV0ZShgZGF0YS1icy0ke00oZSl9YCxpKX0scmVtb3ZlRGF0YUF0dHJpYnV0ZSh0LGUpe3QucmVtb3ZlQXR0cmlidXRlKGBkYXRhLWJzLSR7TShlKX1gKX0sZ2V0RGF0YUF0dHJpYnV0ZXModCl7aWYoIXQpcmV0dXJue307Y29uc3QgZT17fSxpPU9iamVjdC5rZXlzKHQuZGF0YXNldCkuZmlsdGVyKCh0PT50LnN0YXJ0c1dpdGgoImJzIikmJiF0LnN0YXJ0c1dpdGgoImJzQ29uZmlnIikpKTtmb3IoY29uc3QgbiBvZiBpKXtsZXQgaT1uLnJlcGxhY2UoL15icy8sIiIpO2k9aS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKStpLnNsaWNlKDEsaS5sZW5ndGgpLGVbaV09aih0LmRhdGFzZXRbbl0pfXJldHVybiBlfSxnZXREYXRhQXR0cmlidXRlOih0LGUpPT5qKHQuZ2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7TShlKX1gKSl9O2NsYXNzIEh7c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJue319c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybnt9fXN0YXRpYyBnZXQgTkFNRSgpe3Rocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBzdGF0aWMgbWV0aG9kICJOQU1FIiwgZm9yIGVhY2ggY29tcG9uZW50IScpfV9nZXRDb25maWcodCl7cmV0dXJuIHQ9dGhpcy5fbWVyZ2VDb25maWdPYmoodCksdD10aGlzLl9jb25maWdBZnRlck1lcmdlKHQpLHRoaXMuX3R5cGVDaGVja0NvbmZpZyh0KSx0fV9jb25maWdBZnRlck1lcmdlKHQpe3JldHVybiB0fV9tZXJnZUNvbmZpZ09iaih0LGUpe2NvbnN0IGk9byhlKT9GLmdldERhdGFBdHRyaWJ1dGUoZSwiY29uZmlnIik6e307cmV0dXJuey4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCwuLi4ib2JqZWN0Ij09dHlwZW9mIGk/aTp7fSwuLi5vKGUpP0YuZ2V0RGF0YUF0dHJpYnV0ZXMoZSk6e30sLi4uIm9iamVjdCI9PXR5cGVvZiB0P3Q6e319fV90eXBlQ2hlY2tDb25maWcodCxlPXRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpe2Zvcihjb25zdFtuLHNdb2YgT2JqZWN0LmVudHJpZXMoZSkpe2NvbnN0IGU9dFtuXSxyPW8oZSk/ImVsZW1lbnQiOm51bGw9PShpPWUpP2Ake2l9YDpPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaSkubWF0Y2goL1xzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKTtpZighbmV3IFJlZ0V4cChzKS50ZXN0KHIpKXRocm93IG5ldyBUeXBlRXJyb3IoYCR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gIiR7bn0iIHByb3ZpZGVkIHR5cGUgIiR7cn0iIGJ1dCBleHBlY3RlZCB0eXBlICIke3N9Ii5gKX12YXIgaX19Y2xhc3MgVyBleHRlbmRzIEh7Y29uc3RydWN0b3IodCxpKXtzdXBlcigpLCh0PXIodCkpJiYodGhpcy5fZWxlbWVudD10LHRoaXMuX2NvbmZpZz10aGlzLl9nZXRDb25maWcoaSksZS5zZXQodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLHRoaXMpKX1kaXNwb3NlKCl7ZS5yZW1vdmUodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKSxOLm9mZih0aGlzLl9lbGVtZW50LHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKTtmb3IoY29uc3QgdCBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSl0aGlzW3RdPW51bGx9X3F1ZXVlQ2FsbGJhY2sodCxlLGk9ITApe18odCxlLGkpfV9nZXRDb25maWcodCl7cmV0dXJuIHQ9dGhpcy5fbWVyZ2VDb25maWdPYmoodCx0aGlzLl9lbGVtZW50KSx0PXRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UodCksdGhpcy5fdHlwZUNoZWNrQ29uZmlnKHQpLHR9c3RhdGljIGdldEluc3RhbmNlKHQpe3JldHVybiBlLmdldChyKHQpLHRoaXMuREFUQV9LRVkpfXN0YXRpYyBnZXRPckNyZWF0ZUluc3RhbmNlKHQsZT17fSl7cmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UodCl8fG5ldyB0aGlzKHQsIm9iamVjdCI9PXR5cGVvZiBlP2U6bnVsbCl9c3RhdGljIGdldCBWRVJTSU9OKCl7cmV0dXJuIjUuMy4zIn1zdGF0aWMgZ2V0IERBVEFfS0VZKCl7cmV0dXJuYGJzLiR7dGhpcy5OQU1FfWB9c3RhdGljIGdldCBFVkVOVF9LRVkoKXtyZXR1cm5gLiR7dGhpcy5EQVRBX0tFWX1gfXN0YXRpYyBldmVudE5hbWUodCl7cmV0dXJuYCR7dH0ke3RoaXMuRVZFTlRfS0VZfWB9fWNvbnN0IEI9dD0+e2xldCBlPXQuZ2V0QXR0cmlidXRlKCJkYXRhLWJzLXRhcmdldCIpO2lmKCFlfHwiIyI9PT1lKXtsZXQgaT10LmdldEF0dHJpYnV0ZSgiaHJlZiIpO2lmKCFpfHwhaS5pbmNsdWRlcygiIyIpJiYhaS5zdGFydHNXaXRoKCIuIikpcmV0dXJuIG51bGw7aS5pbmNsdWRlcygiIyIpJiYhaS5zdGFydHNXaXRoKCIjIikmJihpPWAjJHtpLnNwbGl0KCIjIilbMV19YCksZT1pJiYiIyIhPT1pP2kudHJpbSgpOm51bGx9cmV0dXJuIGU/ZS5zcGxpdCgiLCIpLm1hcCgodD0+bih0KSkpLmpvaW4oIiwiKTpudWxsfSx6PXtmaW5kOih0LGU9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KT0+W10uY29uY2F0KC4uLkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlLHQpKSxmaW5kT25lOih0LGU9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KT0+RWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3Rvci5jYWxsKGUsdCksY2hpbGRyZW46KHQsZSk9PltdLmNvbmNhdCguLi50LmNoaWxkcmVuKS5maWx0ZXIoKHQ9PnQubWF0Y2hlcyhlKSkpLHBhcmVudHModCxlKXtjb25zdCBpPVtdO2xldCBuPXQucGFyZW50Tm9kZS5jbG9zZXN0KGUpO2Zvcig7bjspaS5wdXNoKG4pLG49bi5wYXJlbnROb2RlLmNsb3Nlc3QoZSk7cmV0dXJuIGl9LHByZXYodCxlKXtsZXQgaT10LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7Zm9yKDtpOyl7aWYoaS5tYXRjaGVzKGUpKXJldHVybltpXTtpPWkucHJldmlvdXNFbGVtZW50U2libGluZ31yZXR1cm5bXX0sbmV4dCh0LGUpe2xldCBpPXQubmV4dEVsZW1lbnRTaWJsaW5nO2Zvcig7aTspe2lmKGkubWF0Y2hlcyhlKSlyZXR1cm5baV07aT1pLm5leHRFbGVtZW50U2libGluZ31yZXR1cm5bXX0sZm9jdXNhYmxlQ2hpbGRyZW4odCl7Y29uc3QgZT1bImEiLCJidXR0b24iLCJpbnB1dCIsInRleHRhcmVhIiwic2VsZWN0IiwiZGV0YWlscyIsIlt0YWJpbmRleF0iLCdbY29udGVudGVkaXRhYmxlPSJ0cnVlIl0nXS5tYXAoKHQ9PmAke3R9Om5vdChbdGFiaW5kZXhePSItIl0pYCkpLmpvaW4oIiwiKTtyZXR1cm4gdGhpcy5maW5kKGUsdCkuZmlsdGVyKCh0PT4hbCh0KSYmYSh0KSkpfSxnZXRTZWxlY3RvckZyb21FbGVtZW50KHQpe2NvbnN0IGU9Qih0KTtyZXR1cm4gZSYmei5maW5kT25lKGUpP2U6bnVsbH0sZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0KXtjb25zdCBlPUIodCk7cmV0dXJuIGU/ei5maW5kT25lKGUpOm51bGx9LGdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IodCl7Y29uc3QgZT1CKHQpO3JldHVybiBlP3ouZmluZChlKTpbXX19LFI9KHQsZT0iaGlkZSIpPT57Y29uc3QgaT1gY2xpY2suZGlzbWlzcyR7dC5FVkVOVF9LRVl9YCxuPXQuTkFNRTtOLm9uKGRvY3VtZW50LGksYFtkYXRhLWJzLWRpc21pc3M9IiR7bn0iXWAsKGZ1bmN0aW9uKGkpe2lmKFsiQSIsIkFSRUEiXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpJiZpLnByZXZlbnREZWZhdWx0KCksbCh0aGlzKSlyZXR1cm47Y29uc3Qgcz16LmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyl8fHRoaXMuY2xvc2VzdChgLiR7bn1gKTt0LmdldE9yQ3JlYXRlSW5zdGFuY2UocylbZV0oKX0pKX0scT0iLmJzLmFsZXJ0IixWPWBjbG9zZSR7cX1gLEs9YGNsb3NlZCR7cX1gO2NsYXNzIFEgZXh0ZW5kcyBXe3N0YXRpYyBnZXQgTkFNRSgpe3JldHVybiJhbGVydCJ9Y2xvc2UoKXtpZihOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxWKS5kZWZhdWx0UHJldmVudGVkKXJldHVybjt0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoInNob3ciKTtjb25zdCB0PXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCJmYWRlIik7dGhpcy5fcXVldWVDYWxsYmFjaygoKCk9PnRoaXMuX2Rlc3Ryb3lFbGVtZW50KCkpLHRoaXMuX2VsZW1lbnQsdCl9X2Rlc3Ryb3lFbGVtZW50KCl7dGhpcy5fZWxlbWVudC5yZW1vdmUoKSxOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxLKSx0aGlzLmRpc3Bvc2UoKX1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT1RLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7aWYoInN0cmluZyI9PXR5cGVvZiB0KXtpZih2b2lkIDA9PT1lW3RdfHx0LnN0YXJ0c1dpdGgoIl8iKXx8ImNvbnN0cnVjdG9yIj09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkICIke3R9ImApO2VbdF0odGhpcyl9fSkpfX1SKFEsImNsb3NlIiksbShRKTtjb25zdCBYPSdbZGF0YS1icy10b2dnbGU9ImJ1dHRvbiJdJztjbGFzcyBZIGV4dGVuZHMgV3tzdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm4iYnV0dG9uIn10b2dnbGUoKXt0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgiYXJpYS1wcmVzc2VkIix0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoImFjdGl2ZSIpKX1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT1ZLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7InRvZ2dsZSI9PT10JiZlW3RdKCl9KSl9fU4ub24oZG9jdW1lbnQsImNsaWNrLmJzLmJ1dHRvbi5kYXRhLWFwaSIsWCwodD0+e3QucHJldmVudERlZmF1bHQoKTtjb25zdCBlPXQudGFyZ2V0LmNsb3Nlc3QoWCk7WS5nZXRPckNyZWF0ZUluc3RhbmNlKGUpLnRvZ2dsZSgpfSkpLG0oWSk7Y29uc3QgVT0iLmJzLnN3aXBlIixHPWB0b3VjaHN0YXJ0JHtVfWAsSj1gdG91Y2htb3ZlJHtVfWAsWj1gdG91Y2hlbmQke1V9YCx0dD1gcG9pbnRlcmRvd24ke1V9YCxldD1gcG9pbnRlcnVwJHtVfWAsaXQ9e2VuZENhbGxiYWNrOm51bGwsbGVmdENhbGxiYWNrOm51bGwscmlnaHRDYWxsYmFjazpudWxsfSxudD17ZW5kQ2FsbGJhY2s6IihmdW5jdGlvbnxudWxsKSIsbGVmdENhbGxiYWNrOiIoZnVuY3Rpb258bnVsbCkiLHJpZ2h0Q2FsbGJhY2s6IihmdW5jdGlvbnxudWxsKSJ9O2NsYXNzIHN0IGV4dGVuZHMgSHtjb25zdHJ1Y3Rvcih0LGUpe3N1cGVyKCksdGhpcy5fZWxlbWVudD10LHQmJnN0LmlzU3VwcG9ydGVkKCkmJih0aGlzLl9jb25maWc9dGhpcy5fZ2V0Q29uZmlnKGUpLHRoaXMuX2RlbHRhWD0wLHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzPUJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudCksdGhpcy5faW5pdEV2ZW50cygpKX1zdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4gaXR9c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybiBudH1zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm4ic3dpcGUifWRpc3Bvc2UoKXtOLm9mZih0aGlzLl9lbGVtZW50LFUpfV9zdGFydCh0KXt0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cz90aGlzLl9ldmVudElzUG9pbnRlclBlblRvdWNoKHQpJiYodGhpcy5fZGVsdGFYPXQuY2xpZW50WCk6dGhpcy5fZGVsdGFYPXQudG91Y2hlc1swXS5jbGllbnRYfV9lbmQodCl7dGhpcy5fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaCh0KSYmKHRoaXMuX2RlbHRhWD10LmNsaWVudFgtdGhpcy5fZGVsdGFYKSx0aGlzLl9oYW5kbGVTd2lwZSgpLGcodGhpcy5fY29uZmlnLmVuZENhbGxiYWNrKX1fbW92ZSh0KXt0aGlzLl9kZWx0YVg9dC50b3VjaGVzJiZ0LnRvdWNoZXMubGVuZ3RoPjE/MDp0LnRvdWNoZXNbMF0uY2xpZW50WC10aGlzLl9kZWx0YVh9X2hhbmRsZVN3aXBlKCl7Y29uc3QgdD1NYXRoLmFicyh0aGlzLl9kZWx0YVgpO2lmKHQ8PTQwKXJldHVybjtjb25zdCBlPXQvdGhpcy5fZGVsdGFYO3RoaXMuX2RlbHRhWD0wLGUmJmcoZT4wP3RoaXMuX2NvbmZpZy5yaWdodENhbGxiYWNrOnRoaXMuX2NvbmZpZy5sZWZ0Q2FsbGJhY2spfV9pbml0RXZlbnRzKCl7dGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHM/KE4ub24odGhpcy5fZWxlbWVudCx0dCwodD0+dGhpcy5fc3RhcnQodCkpKSxOLm9uKHRoaXMuX2VsZW1lbnQsZXQsKHQ9PnRoaXMuX2VuZCh0KSkpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgicG9pbnRlci1ldmVudCIpKTooTi5vbih0aGlzLl9lbGVtZW50LEcsKHQ9PnRoaXMuX3N0YXJ0KHQpKSksTi5vbih0aGlzLl9lbGVtZW50LEosKHQ9PnRoaXMuX21vdmUodCkpKSxOLm9uKHRoaXMuX2VsZW1lbnQsWiwodD0+dGhpcy5fZW5kKHQpKSkpfV9ldmVudElzUG9pbnRlclBlblRvdWNoKHQpe3JldHVybiB0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cyYmKCJwZW4iPT09dC5wb2ludGVyVHlwZXx8InRvdWNoIj09PXQucG9pbnRlclR5cGUpfXN0YXRpYyBpc1N1cHBvcnRlZCgpe3JldHVybiJvbnRvdWNoc3RhcnQiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50fHxuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHM+MH19Y29uc3Qgb3Q9Ii5icy5jYXJvdXNlbCIscnQ9Ii5kYXRhLWFwaSIsYXQ9Im5leHQiLGx0PSJwcmV2IixjdD0ibGVmdCIsaHQ9InJpZ2h0IixkdD1gc2xpZGUke290fWAsdXQ9YHNsaWQke290fWAsZnQ9YGtleWRvd24ke290fWAscHQ9YG1vdXNlZW50ZXIke290fWAsbXQ9YG1vdXNlbGVhdmUke290fWAsZ3Q9YGRyYWdzdGFydCR7b3R9YCxfdD1gbG9hZCR7b3R9JHtydH1gLGJ0PWBjbGljayR7b3R9JHtydH1gLHZ0PSJjYXJvdXNlbCIseXQ9ImFjdGl2ZSIsd3Q9Ii5hY3RpdmUiLEF0PSIuY2Fyb3VzZWwtaXRlbSIsRXQ9d3QrQXQsVHQ9e0Fycm93TGVmdDpodCxBcnJvd1JpZ2h0OmN0fSxDdD17aW50ZXJ2YWw6NWUzLGtleWJvYXJkOiEwLHBhdXNlOiJob3ZlciIscmlkZTohMSx0b3VjaDohMCx3cmFwOiEwfSxPdD17aW50ZXJ2YWw6IihudW1iZXJ8Ym9vbGVhbikiLGtleWJvYXJkOiJib29sZWFuIixwYXVzZToiKHN0cmluZ3xib29sZWFuKSIscmlkZToiKGJvb2xlYW58c3RyaW5nKSIsdG91Y2g6ImJvb2xlYW4iLHdyYXA6ImJvb2xlYW4ifTtjbGFzcyB4dCBleHRlbmRzIFd7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpLHRoaXMuX2ludGVydmFsPW51bGwsdGhpcy5fYWN0aXZlRWxlbWVudD1udWxsLHRoaXMuX2lzU2xpZGluZz0hMSx0aGlzLnRvdWNoVGltZW91dD1udWxsLHRoaXMuX3N3aXBlSGVscGVyPW51bGwsdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQ9ei5maW5kT25lKCIuY2Fyb3VzZWwtaW5kaWNhdG9ycyIsdGhpcy5fZWxlbWVudCksdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKSx0aGlzLl9jb25maWcucmlkZT09PXZ0JiZ0aGlzLmN5Y2xlKCl9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIEN0fXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4gT3R9c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuImNhcm91c2VsIn1uZXh0KCl7dGhpcy5fc2xpZGUoYXQpfW5leHRXaGVuVmlzaWJsZSgpeyFkb2N1bWVudC5oaWRkZW4mJmEodGhpcy5fZWxlbWVudCkmJnRoaXMubmV4dCgpfXByZXYoKXt0aGlzLl9zbGlkZShsdCl9cGF1c2UoKXt0aGlzLl9pc1NsaWRpbmcmJnModGhpcy5fZWxlbWVudCksdGhpcy5fY2xlYXJJbnRlcnZhbCgpfWN5Y2xlKCl7dGhpcy5fY2xlYXJJbnRlcnZhbCgpLHRoaXMuX3VwZGF0ZUludGVydmFsKCksdGhpcy5faW50ZXJ2YWw9c2V0SW50ZXJ2YWwoKCgpPT50aGlzLm5leHRXaGVuVmlzaWJsZSgpKSx0aGlzLl9jb25maWcuaW50ZXJ2YWwpfV9tYXliZUVuYWJsZUN5Y2xlKCl7dGhpcy5fY29uZmlnLnJpZGUmJih0aGlzLl9pc1NsaWRpbmc/Ti5vbmUodGhpcy5fZWxlbWVudCx1dCwoKCk9PnRoaXMuY3ljbGUoKSkpOnRoaXMuY3ljbGUoKSl9dG8odCl7Y29uc3QgZT10aGlzLl9nZXRJdGVtcygpO2lmKHQ+ZS5sZW5ndGgtMXx8dDwwKXJldHVybjtpZih0aGlzLl9pc1NsaWRpbmcpcmV0dXJuIHZvaWQgTi5vbmUodGhpcy5fZWxlbWVudCx1dCwoKCk9PnRoaXMudG8odCkpKTtjb25zdCBpPXRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9nZXRBY3RpdmUoKSk7aWYoaT09PXQpcmV0dXJuO2NvbnN0IG49dD5pP2F0Omx0O3RoaXMuX3NsaWRlKG4sZVt0XSl9ZGlzcG9zZSgpe3RoaXMuX3N3aXBlSGVscGVyJiZ0aGlzLl9zd2lwZUhlbHBlci5kaXNwb3NlKCksc3VwZXIuZGlzcG9zZSgpfV9jb25maWdBZnRlck1lcmdlKHQpe3JldHVybiB0LmRlZmF1bHRJbnRlcnZhbD10LmludGVydmFsLHR9X2FkZEV2ZW50TGlzdGVuZXJzKCl7dGhpcy5fY29uZmlnLmtleWJvYXJkJiZOLm9uKHRoaXMuX2VsZW1lbnQsZnQsKHQ9PnRoaXMuX2tleWRvd24odCkpKSwiaG92ZXIiPT09dGhpcy5fY29uZmlnLnBhdXNlJiYoTi5vbih0aGlzLl9lbGVtZW50LHB0LCgoKT0+dGhpcy5wYXVzZSgpKSksTi5vbih0aGlzLl9lbGVtZW50LG10LCgoKT0+dGhpcy5fbWF5YmVFbmFibGVDeWNsZSgpKSkpLHRoaXMuX2NvbmZpZy50b3VjaCYmc3QuaXNTdXBwb3J0ZWQoKSYmdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpfV9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCl7Zm9yKGNvbnN0IHQgb2Ygei5maW5kKCIuY2Fyb3VzZWwtaXRlbSBpbWciLHRoaXMuX2VsZW1lbnQpKU4ub24odCxndCwodD0+dC5wcmV2ZW50RGVmYXVsdCgpKSk7Y29uc3QgdD17bGVmdENhbGxiYWNrOigpPT50aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKGN0KSkscmlnaHRDYWxsYmFjazooKT0+dGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihodCkpLGVuZENhbGxiYWNrOigpPT57ImhvdmVyIj09PXRoaXMuX2NvbmZpZy5wYXVzZSYmKHRoaXMucGF1c2UoKSx0aGlzLnRvdWNoVGltZW91dCYmY2xlYXJUaW1lb3V0KHRoaXMudG91Y2hUaW1lb3V0KSx0aGlzLnRvdWNoVGltZW91dD1zZXRUaW1lb3V0KCgoKT0+dGhpcy5fbWF5YmVFbmFibGVDeWNsZSgpKSw1MDArdGhpcy5fY29uZmlnLmludGVydmFsKSl9fTt0aGlzLl9zd2lwZUhlbHBlcj1uZXcgc3QodGhpcy5fZWxlbWVudCx0KX1fa2V5ZG93bih0KXtpZigvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KHQudGFyZ2V0LnRhZ05hbWUpKXJldHVybjtjb25zdCBlPVR0W3Qua2V5XTtlJiYodC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoZSkpKX1fZ2V0SXRlbUluZGV4KHQpe3JldHVybiB0aGlzLl9nZXRJdGVtcygpLmluZGV4T2YodCl9X3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQodCl7aWYoIXRoaXMuX2luZGljYXRvcnNFbGVtZW50KXJldHVybjtjb25zdCBlPXouZmluZE9uZSh3dCx0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCk7ZS5jbGFzc0xpc3QucmVtb3ZlKHl0KSxlLnJlbW92ZUF0dHJpYnV0ZSgiYXJpYS1jdXJyZW50Iik7Y29uc3QgaT16LmZpbmRPbmUoYFtkYXRhLWJzLXNsaWRlLXRvPSIke3R9Il1gLHRoaXMuX2luZGljYXRvcnNFbGVtZW50KTtpJiYoaS5jbGFzc0xpc3QuYWRkKHl0KSxpLnNldEF0dHJpYnV0ZSgiYXJpYS1jdXJyZW50IiwidHJ1ZSIpKX1fdXBkYXRlSW50ZXJ2YWwoKXtjb25zdCB0PXRoaXMuX2FjdGl2ZUVsZW1lbnR8fHRoaXMuX2dldEFjdGl2ZSgpO2lmKCF0KXJldHVybjtjb25zdCBlPU51bWJlci5wYXJzZUludCh0LmdldEF0dHJpYnV0ZSgiZGF0YS1icy1pbnRlcnZhbCIpLDEwKTt0aGlzLl9jb25maWcuaW50ZXJ2YWw9ZXx8dGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbH1fc2xpZGUodCxlPW51bGwpe2lmKHRoaXMuX2lzU2xpZGluZylyZXR1cm47Y29uc3QgaT10aGlzLl9nZXRBY3RpdmUoKSxuPXQ9PT1hdCxzPWV8fGIodGhpcy5fZ2V0SXRlbXMoKSxpLG4sdGhpcy5fY29uZmlnLndyYXApO2lmKHM9PT1pKXJldHVybjtjb25zdCBvPXRoaXMuX2dldEl0ZW1JbmRleChzKSxyPWU9Pk4udHJpZ2dlcih0aGlzLl9lbGVtZW50LGUse3JlbGF0ZWRUYXJnZXQ6cyxkaXJlY3Rpb246dGhpcy5fb3JkZXJUb0RpcmVjdGlvbih0KSxmcm9tOnRoaXMuX2dldEl0ZW1JbmRleChpKSx0bzpvfSk7aWYocihkdCkuZGVmYXVsdFByZXZlbnRlZClyZXR1cm47aWYoIWl8fCFzKXJldHVybjtjb25zdCBhPUJvb2xlYW4odGhpcy5faW50ZXJ2YWwpO3RoaXMucGF1c2UoKSx0aGlzLl9pc1NsaWRpbmc9ITAsdGhpcy5fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChvKSx0aGlzLl9hY3RpdmVFbGVtZW50PXM7Y29uc3QgbD1uPyJjYXJvdXNlbC1pdGVtLXN0YXJ0IjoiY2Fyb3VzZWwtaXRlbS1lbmQiLGM9bj8iY2Fyb3VzZWwtaXRlbS1uZXh0IjoiY2Fyb3VzZWwtaXRlbS1wcmV2IjtzLmNsYXNzTGlzdC5hZGQoYyksZChzKSxpLmNsYXNzTGlzdC5hZGQobCkscy5jbGFzc0xpc3QuYWRkKGwpLHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCgpPT57cy5jbGFzc0xpc3QucmVtb3ZlKGwsYykscy5jbGFzc0xpc3QuYWRkKHl0KSxpLmNsYXNzTGlzdC5yZW1vdmUoeXQsYyxsKSx0aGlzLl9pc1NsaWRpbmc9ITEscih1dCl9KSxpLHRoaXMuX2lzQW5pbWF0ZWQoKSksYSYmdGhpcy5jeWNsZSgpfV9pc0FuaW1hdGVkKCl7cmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCJzbGlkZSIpfV9nZXRBY3RpdmUoKXtyZXR1cm4gei5maW5kT25lKEV0LHRoaXMuX2VsZW1lbnQpfV9nZXRJdGVtcygpe3JldHVybiB6LmZpbmQoQXQsdGhpcy5fZWxlbWVudCl9X2NsZWFySW50ZXJ2YWwoKXt0aGlzLl9pbnRlcnZhbCYmKGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpLHRoaXMuX2ludGVydmFsPW51bGwpfV9kaXJlY3Rpb25Ub09yZGVyKHQpe3JldHVybiBwKCk/dD09PWN0P2x0OmF0OnQ9PT1jdD9hdDpsdH1fb3JkZXJUb0RpcmVjdGlvbih0KXtyZXR1cm4gcCgpP3Q9PT1sdD9jdDpodDp0PT09bHQ/aHQ6Y3R9c3RhdGljIGpRdWVyeUludGVyZmFjZSh0KXtyZXR1cm4gdGhpcy5lYWNoKChmdW5jdGlvbigpe2NvbnN0IGU9eHQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLHQpO2lmKCJudW1iZXIiIT10eXBlb2YgdCl7aWYoInN0cmluZyI9PXR5cGVvZiB0KXtpZih2b2lkIDA9PT1lW3RdfHx0LnN0YXJ0c1dpdGgoIl8iKXx8ImNvbnN0cnVjdG9yIj09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkICIke3R9ImApO2VbdF0oKX19ZWxzZSBlLnRvKHQpfSkpfX1OLm9uKGRvY3VtZW50LGJ0LCJbZGF0YS1icy1zbGlkZV0sIFtkYXRhLWJzLXNsaWRlLXRvXSIsKGZ1bmN0aW9uKHQpe2NvbnN0IGU9ei5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpO2lmKCFlfHwhZS5jbGFzc0xpc3QuY29udGFpbnModnQpKXJldHVybjt0LnByZXZlbnREZWZhdWx0KCk7Y29uc3QgaT14dC5nZXRPckNyZWF0ZUluc3RhbmNlKGUpLG49dGhpcy5nZXRBdHRyaWJ1dGUoImRhdGEtYnMtc2xpZGUtdG8iKTtyZXR1cm4gbj8oaS50byhuKSx2b2lkIGkuX21heWJlRW5hYmxlQ3ljbGUoKSk6Im5leHQiPT09Ri5nZXREYXRhQXR0cmlidXRlKHRoaXMsInNsaWRlIik/KGkubmV4dCgpLHZvaWQgaS5fbWF5YmVFbmFibGVDeWNsZSgpKTooaS5wcmV2KCksdm9pZCBpLl9tYXliZUVuYWJsZUN5Y2xlKCkpfSkpLE4ub24od2luZG93LF90LCgoKT0+e2NvbnN0IHQ9ei5maW5kKCdbZGF0YS1icy1yaWRlPSJjYXJvdXNlbCJdJyk7Zm9yKGNvbnN0IGUgb2YgdCl4dC5nZXRPckNyZWF0ZUluc3RhbmNlKGUpfSkpLG0oeHQpO2NvbnN0IGt0PSIuYnMuY29sbGFwc2UiLEx0PWBzaG93JHtrdH1gLFN0PWBzaG93biR7a3R9YCxEdD1gaGlkZSR7a3R9YCwkdD1gaGlkZGVuJHtrdH1gLEl0PWBjbGljayR7a3R9LmRhdGEtYXBpYCxOdD0ic2hvdyIsUHQ9ImNvbGxhcHNlIixqdD0iY29sbGFwc2luZyIsTXQ9YDpzY29wZSAuJHtQdH0gLiR7UHR9YCxGdD0nW2RhdGEtYnMtdG9nZ2xlPSJjb2xsYXBzZSJdJyxIdD17cGFyZW50Om51bGwsdG9nZ2xlOiEwfSxXdD17cGFyZW50OiIobnVsbHxlbGVtZW50KSIsdG9nZ2xlOiJib29sZWFuIn07Y2xhc3MgQnQgZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIodCxlKSx0aGlzLl9pc1RyYW5zaXRpb25pbmc9ITEsdGhpcy5fdHJpZ2dlckFycmF5PVtdO2NvbnN0IGk9ei5maW5kKEZ0KTtmb3IoY29uc3QgdCBvZiBpKXtjb25zdCBlPXouZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0KSxpPXouZmluZChlKS5maWx0ZXIoKHQ9PnQ9PT10aGlzLl9lbGVtZW50KSk7bnVsbCE9PWUmJmkubGVuZ3RoJiZ0aGlzLl90cmlnZ2VyQXJyYXkucHVzaCh0KX10aGlzLl9pbml0aWFsaXplQ2hpbGRyZW4oKSx0aGlzLl9jb25maWcucGFyZW50fHx0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fdHJpZ2dlckFycmF5LHRoaXMuX2lzU2hvd24oKSksdGhpcy5fY29uZmlnLnRvZ2dsZSYmdGhpcy50b2dnbGUoKX1zdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4gSHR9c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybiBXdH1zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm4iY29sbGFwc2UifXRvZ2dsZSgpe3RoaXMuX2lzU2hvd24oKT90aGlzLmhpZGUoKTp0aGlzLnNob3coKX1zaG93KCl7aWYodGhpcy5faXNUcmFuc2l0aW9uaW5nfHx0aGlzLl9pc1Nob3duKCkpcmV0dXJuO2xldCB0PVtdO2lmKHRoaXMuX2NvbmZpZy5wYXJlbnQmJih0PXRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbigiLmNvbGxhcHNlLnNob3csIC5jb2xsYXBzZS5jb2xsYXBzaW5nIikuZmlsdGVyKCh0PT50IT09dGhpcy5fZWxlbWVudCkpLm1hcCgodD0+QnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0LHt0b2dnbGU6ITF9KSkpKSx0Lmxlbmd0aCYmdFswXS5faXNUcmFuc2l0aW9uaW5nKXJldHVybjtpZihOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxMdCkuZGVmYXVsdFByZXZlbnRlZClyZXR1cm47Zm9yKGNvbnN0IGUgb2YgdCllLmhpZGUoKTtjb25zdCBlPXRoaXMuX2dldERpbWVuc2lvbigpO3RoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShQdCksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKGp0KSx0aGlzLl9lbGVtZW50LnN0eWxlW2VdPTAsdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwhMCksdGhpcy5faXNUcmFuc2l0aW9uaW5nPSEwO2NvbnN0IGk9YHNjcm9sbCR7ZVswXS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSl9YDt0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2lzVHJhbnNpdGlvbmluZz0hMSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoanQpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChQdCxOdCksdGhpcy5fZWxlbWVudC5zdHlsZVtlXT0iIixOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxTdCl9KSx0aGlzLl9lbGVtZW50LCEwKSx0aGlzLl9lbGVtZW50LnN0eWxlW2VdPWAke3RoaXMuX2VsZW1lbnRbaV19cHhgfWhpZGUoKXtpZih0aGlzLl9pc1RyYW5zaXRpb25pbmd8fCF0aGlzLl9pc1Nob3duKCkpcmV0dXJuO2lmKE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LER0KS5kZWZhdWx0UHJldmVudGVkKXJldHVybjtjb25zdCB0PXRoaXMuX2dldERpbWVuc2lvbigpO3RoaXMuX2VsZW1lbnQuc3R5bGVbdF09YCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVt0XX1weGAsZCh0aGlzLl9lbGVtZW50KSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoanQpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShQdCxOdCk7Zm9yKGNvbnN0IHQgb2YgdGhpcy5fdHJpZ2dlckFycmF5KXtjb25zdCBlPXouZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0KTtlJiYhdGhpcy5faXNTaG93bihlKSYmdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFt0XSwhMSl9dGhpcy5faXNUcmFuc2l0aW9uaW5nPSEwLHRoaXMuX2VsZW1lbnQuc3R5bGVbdF09IiIsdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9Pnt0aGlzLl9pc1RyYW5zaXRpb25pbmc9ITEsdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGp0KSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoUHQpLE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LCR0KX0pLHRoaXMuX2VsZW1lbnQsITApfV9pc1Nob3duKHQ9dGhpcy5fZWxlbWVudCl7cmV0dXJuIHQuY2xhc3NMaXN0LmNvbnRhaW5zKE50KX1fY29uZmlnQWZ0ZXJNZXJnZSh0KXtyZXR1cm4gdC50b2dnbGU9Qm9vbGVhbih0LnRvZ2dsZSksdC5wYXJlbnQ9cih0LnBhcmVudCksdH1fZ2V0RGltZW5zaW9uKCl7cmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCJjb2xsYXBzZS1ob3Jpem9udGFsIik/IndpZHRoIjoiaGVpZ2h0In1faW5pdGlhbGl6ZUNoaWxkcmVuKCl7aWYoIXRoaXMuX2NvbmZpZy5wYXJlbnQpcmV0dXJuO2NvbnN0IHQ9dGhpcy5fZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKEZ0KTtmb3IoY29uc3QgZSBvZiB0KXtjb25zdCB0PXouZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlKTt0JiZ0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW2VdLHRoaXMuX2lzU2hvd24odCkpfX1fZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKHQpe2NvbnN0IGU9ei5maW5kKE10LHRoaXMuX2NvbmZpZy5wYXJlbnQpO3JldHVybiB6LmZpbmQodCx0aGlzLl9jb25maWcucGFyZW50KS5maWx0ZXIoKHQ9PiFlLmluY2x1ZGVzKHQpKSl9X2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0LGUpe2lmKHQubGVuZ3RoKWZvcihjb25zdCBpIG9mIHQpaS5jbGFzc0xpc3QudG9nZ2xlKCJjb2xsYXBzZWQiLCFlKSxpLnNldEF0dHJpYnV0ZSgiYXJpYS1leHBhbmRlZCIsZSl9c3RhdGljIGpRdWVyeUludGVyZmFjZSh0KXtjb25zdCBlPXt9O3JldHVybiJzdHJpbmciPT10eXBlb2YgdCYmL3Nob3d8aGlkZS8udGVzdCh0KSYmKGUudG9nZ2xlPSExKSx0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgaT1CdC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsZSk7aWYoInN0cmluZyI9PXR5cGVvZiB0KXtpZih2b2lkIDA9PT1pW3RdKXRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCAiJHt0fSJgKTtpW3RdKCl9fSkpfX1OLm9uKGRvY3VtZW50LEl0LEZ0LChmdW5jdGlvbih0KXsoIkEiPT09dC50YXJnZXQudGFnTmFtZXx8dC5kZWxlZ2F0ZVRhcmdldCYmIkEiPT09dC5kZWxlZ2F0ZVRhcmdldC50YWdOYW1lKSYmdC5wcmV2ZW50RGVmYXVsdCgpO2Zvcihjb25zdCB0IG9mIHouZ2V0TXVsdGlwbGVFbGVtZW50c0Zyb21TZWxlY3Rvcih0aGlzKSlCdC5nZXRPckNyZWF0ZUluc3RhbmNlKHQse3RvZ2dsZTohMX0pLnRvZ2dsZSgpfSkpLG0oQnQpO3ZhciB6dD0idG9wIixSdD0iYm90dG9tIixxdD0icmlnaHQiLFZ0PSJsZWZ0IixLdD0iYXV0byIsUXQ9W3p0LFJ0LHF0LFZ0XSxYdD0ic3RhcnQiLFl0PSJlbmQiLFV0PSJjbGlwcGluZ1BhcmVudHMiLEd0PSJ2aWV3cG9ydCIsSnQ9InBvcHBlciIsWnQ9InJlZmVyZW5jZSIsdGU9UXQucmVkdWNlKChmdW5jdGlvbih0LGUpe3JldHVybiB0LmNvbmNhdChbZSsiLSIrWHQsZSsiLSIrWXRdKX0pLFtdKSxlZT1bXS5jb25jYXQoUXQsW0t0XSkucmVkdWNlKChmdW5jdGlvbih0LGUpe3JldHVybiB0LmNvbmNhdChbZSxlKyItIitYdCxlKyItIitZdF0pfSksW10pLGllPSJiZWZvcmVSZWFkIixuZT0icmVhZCIsc2U9ImFmdGVyUmVhZCIsb2U9ImJlZm9yZU1haW4iLHJlPSJtYWluIixhZT0iYWZ0ZXJNYWluIixsZT0iYmVmb3JlV3JpdGUiLGNlPSJ3cml0ZSIsaGU9ImFmdGVyV3JpdGUiLGRlPVtpZSxuZSxzZSxvZSxyZSxhZSxsZSxjZSxoZV07ZnVuY3Rpb24gdWUodCl7cmV0dXJuIHQ/KHQubm9kZU5hbWV8fCIiKS50b0xvd2VyQ2FzZSgpOm51bGx9ZnVuY3Rpb24gZmUodCl7aWYobnVsbD09dClyZXR1cm4gd2luZG93O2lmKCJbb2JqZWN0IFdpbmRvd10iIT09dC50b1N0cmluZygpKXt2YXIgZT10Lm93bmVyRG9jdW1lbnQ7cmV0dXJuIGUmJmUuZGVmYXVsdFZpZXd8fHdpbmRvd31yZXR1cm4gdH1mdW5jdGlvbiBwZSh0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIGZlKHQpLkVsZW1lbnR8fHQgaW5zdGFuY2VvZiBFbGVtZW50fWZ1bmN0aW9uIG1lKHQpe3JldHVybiB0IGluc3RhbmNlb2YgZmUodCkuSFRNTEVsZW1lbnR8fHQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudH1mdW5jdGlvbiBnZSh0KXtyZXR1cm4idW5kZWZpbmVkIiE9dHlwZW9mIFNoYWRvd1Jvb3QmJih0IGluc3RhbmNlb2YgZmUodCkuU2hhZG93Um9vdHx8dCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpfWNvbnN0IF9lPXtuYW1lOiJhcHBseVN0eWxlcyIsZW5hYmxlZDohMCxwaGFzZToid3JpdGUiLGZuOmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGU7T2JqZWN0LmtleXMoZS5lbGVtZW50cykuZm9yRWFjaCgoZnVuY3Rpb24odCl7dmFyIGk9ZS5zdHlsZXNbdF18fHt9LG49ZS5hdHRyaWJ1dGVzW3RdfHx7fSxzPWUuZWxlbWVudHNbdF07bWUocykmJnVlKHMpJiYoT2JqZWN0LmFzc2lnbihzLnN0eWxlLGkpLE9iamVjdC5rZXlzKG4pLmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZhciBlPW5bdF07ITE9PT1lP3MucmVtb3ZlQXR0cmlidXRlKHQpOnMuc2V0QXR0cmlidXRlKHQsITA9PT1lPyIiOmUpfSkpKX0pKX0sZWZmZWN0OmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsaT17cG9wcGVyOntwb3NpdGlvbjplLm9wdGlvbnMuc3RyYXRlZ3ksbGVmdDoiMCIsdG9wOiIwIixtYXJnaW46IjAifSxhcnJvdzp7cG9zaXRpb246ImFic29sdXRlIn0scmVmZXJlbmNlOnt9fTtyZXR1cm4gT2JqZWN0LmFzc2lnbihlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSxpLnBvcHBlciksZS5zdHlsZXM9aSxlLmVsZW1lbnRzLmFycm93JiZPYmplY3QuYXNzaWduKGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsaS5hcnJvdyksZnVuY3Rpb24oKXtPYmplY3Qua2V5cyhlLmVsZW1lbnRzKS5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgbj1lLmVsZW1lbnRzW3RdLHM9ZS5hdHRyaWJ1dGVzW3RdfHx7fSxvPU9iamVjdC5rZXlzKGUuc3R5bGVzLmhhc093blByb3BlcnR5KHQpP2Uuc3R5bGVzW3RdOmlbdF0pLnJlZHVjZSgoZnVuY3Rpb24odCxlKXtyZXR1cm4gdFtlXT0iIix0fSkse30pO21lKG4pJiZ1ZShuKSYmKE9iamVjdC5hc3NpZ24obi5zdHlsZSxvKSxPYmplY3Qua2V5cyhzKS5mb3JFYWNoKChmdW5jdGlvbih0KXtuLnJlbW92ZUF0dHJpYnV0ZSh0KX0pKSl9KSl9fSxyZXF1aXJlczpbImNvbXB1dGVTdHlsZXMiXX07ZnVuY3Rpb24gYmUodCl7cmV0dXJuIHQuc3BsaXQoIi0iKVswXX12YXIgdmU9TWF0aC5tYXgseWU9TWF0aC5taW4sd2U9TWF0aC5yb3VuZDtmdW5jdGlvbiBBZSgpe3ZhciB0PW5hdmlnYXRvci51c2VyQWdlbnREYXRhO3JldHVybiBudWxsIT10JiZ0LmJyYW5kcyYmQXJyYXkuaXNBcnJheSh0LmJyYW5kcyk/dC5icmFuZHMubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gdC5icmFuZCsiLyIrdC52ZXJzaW9ufSkpLmpvaW4oIiAiKTpuYXZpZ2F0b3IudXNlckFnZW50fWZ1bmN0aW9uIEVlKCl7cmV0dXJuIS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QoQWUoKSl9ZnVuY3Rpb24gVGUodCxlLGkpe3ZvaWQgMD09PWUmJihlPSExKSx2b2lkIDA9PT1pJiYoaT0hMSk7dmFyIG49dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxzPTEsbz0xO2UmJm1lKHQpJiYocz10Lm9mZnNldFdpZHRoPjAmJndlKG4ud2lkdGgpL3Qub2Zmc2V0V2lkdGh8fDEsbz10Lm9mZnNldEhlaWdodD4wJiZ3ZShuLmhlaWdodCkvdC5vZmZzZXRIZWlnaHR8fDEpO3ZhciByPShwZSh0KT9mZSh0KTp3aW5kb3cpLnZpc3VhbFZpZXdwb3J0LGE9IUVlKCkmJmksbD0obi5sZWZ0KyhhJiZyP3Iub2Zmc2V0TGVmdDowKSkvcyxjPShuLnRvcCsoYSYmcj9yLm9mZnNldFRvcDowKSkvbyxoPW4ud2lkdGgvcyxkPW4uaGVpZ2h0L287cmV0dXJue3dpZHRoOmgsaGVpZ2h0OmQsdG9wOmMscmlnaHQ6bCtoLGJvdHRvbTpjK2QsbGVmdDpsLHg6bCx5OmN9fWZ1bmN0aW9uIENlKHQpe3ZhciBlPVRlKHQpLGk9dC5vZmZzZXRXaWR0aCxuPXQub2Zmc2V0SGVpZ2h0O3JldHVybiBNYXRoLmFicyhlLndpZHRoLWkpPD0xJiYoaT1lLndpZHRoKSxNYXRoLmFicyhlLmhlaWdodC1uKTw9MSYmKG49ZS5oZWlnaHQpLHt4OnQub2Zmc2V0TGVmdCx5OnQub2Zmc2V0VG9wLHdpZHRoOmksaGVpZ2h0Om59fWZ1bmN0aW9uIE9lKHQsZSl7dmFyIGk9ZS5nZXRSb290Tm9kZSYmZS5nZXRSb290Tm9kZSgpO2lmKHQuY29udGFpbnMoZSkpcmV0dXJuITA7aWYoaSYmZ2UoaSkpe3ZhciBuPWU7ZG97aWYobiYmdC5pc1NhbWVOb2RlKG4pKXJldHVybiEwO249bi5wYXJlbnROb2RlfHxuLmhvc3R9d2hpbGUobil9cmV0dXJuITF9ZnVuY3Rpb24geGUodCl7cmV0dXJuIGZlKHQpLmdldENvbXB1dGVkU3R5bGUodCl9ZnVuY3Rpb24ga2UodCl7cmV0dXJuWyJ0YWJsZSIsInRkIiwidGgiXS5pbmRleE9mKHVlKHQpKT49MH1mdW5jdGlvbiBMZSh0KXtyZXR1cm4oKHBlKHQpP3Qub3duZXJEb2N1bWVudDp0LmRvY3VtZW50KXx8d2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnR9ZnVuY3Rpb24gU2UodCl7cmV0dXJuImh0bWwiPT09dWUodCk/dDp0LmFzc2lnbmVkU2xvdHx8dC5wYXJlbnROb2RlfHwoZ2UodCk/dC5ob3N0Om51bGwpfHxMZSh0KX1mdW5jdGlvbiBEZSh0KXtyZXR1cm4gbWUodCkmJiJmaXhlZCIhPT14ZSh0KS5wb3NpdGlvbj90Lm9mZnNldFBhcmVudDpudWxsfWZ1bmN0aW9uICRlKHQpe2Zvcih2YXIgZT1mZSh0KSxpPURlKHQpO2kmJmtlKGkpJiYic3RhdGljIj09PXhlKGkpLnBvc2l0aW9uOylpPURlKGkpO3JldHVybiBpJiYoImh0bWwiPT09dWUoaSl8fCJib2R5Ij09PXVlKGkpJiYic3RhdGljIj09PXhlKGkpLnBvc2l0aW9uKT9lOml8fGZ1bmN0aW9uKHQpe3ZhciBlPS9maXJlZm94L2kudGVzdChBZSgpKTtpZigvVHJpZGVudC9pLnRlc3QoQWUoKSkmJm1lKHQpJiYiZml4ZWQiPT09eGUodCkucG9zaXRpb24pcmV0dXJuIG51bGw7dmFyIGk9U2UodCk7Zm9yKGdlKGkpJiYoaT1pLmhvc3QpO21lKGkpJiZbImh0bWwiLCJib2R5Il0uaW5kZXhPZih1ZShpKSk8MDspe3ZhciBuPXhlKGkpO2lmKCJub25lIiE9PW4udHJhbnNmb3JtfHwibm9uZSIhPT1uLnBlcnNwZWN0aXZlfHwicGFpbnQiPT09bi5jb250YWlufHwtMSE9PVsidHJhbnNmb3JtIiwicGVyc3BlY3RpdmUiXS5pbmRleE9mKG4ud2lsbENoYW5nZSl8fGUmJiJmaWx0ZXIiPT09bi53aWxsQ2hhbmdlfHxlJiZuLmZpbHRlciYmIm5vbmUiIT09bi5maWx0ZXIpcmV0dXJuIGk7aT1pLnBhcmVudE5vZGV9cmV0dXJuIG51bGx9KHQpfHxlfWZ1bmN0aW9uIEllKHQpe3JldHVyblsidG9wIiwiYm90dG9tIl0uaW5kZXhPZih0KT49MD8ieCI6InkifWZ1bmN0aW9uIE5lKHQsZSxpKXtyZXR1cm4gdmUodCx5ZShlLGkpKX1mdW5jdGlvbiBQZSh0KXtyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSx7dG9wOjAscmlnaHQ6MCxib3R0b206MCxsZWZ0OjB9LHQpfWZ1bmN0aW9uIGplKHQsZSl7cmV0dXJuIGUucmVkdWNlKChmdW5jdGlvbihlLGkpe3JldHVybiBlW2ldPXQsZX0pLHt9KX1jb25zdCBNZT17bmFtZToiYXJyb3ciLGVuYWJsZWQ6ITAscGhhc2U6Im1haW4iLGZuOmZ1bmN0aW9uKHQpe3ZhciBlLGk9dC5zdGF0ZSxuPXQubmFtZSxzPXQub3B0aW9ucyxvPWkuZWxlbWVudHMuYXJyb3cscj1pLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxhPWJlKGkucGxhY2VtZW50KSxsPUllKGEpLGM9W1Z0LHF0XS5pbmRleE9mKGEpPj0wPyJoZWlnaHQiOiJ3aWR0aCI7aWYobyYmcil7dmFyIGg9ZnVuY3Rpb24odCxlKXtyZXR1cm4gUGUoIm51bWJlciIhPXR5cGVvZih0PSJmdW5jdGlvbiI9PXR5cGVvZiB0P3QoT2JqZWN0LmFzc2lnbih7fSxlLnJlY3RzLHtwbGFjZW1lbnQ6ZS5wbGFjZW1lbnR9KSk6dCk/dDpqZSh0LFF0KSl9KHMucGFkZGluZyxpKSxkPUNlKG8pLHU9InkiPT09bD96dDpWdCxmPSJ5Ij09PWw/UnQ6cXQscD1pLnJlY3RzLnJlZmVyZW5jZVtjXStpLnJlY3RzLnJlZmVyZW5jZVtsXS1yW2xdLWkucmVjdHMucG9wcGVyW2NdLG09cltsXS1pLnJlY3RzLnJlZmVyZW5jZVtsXSxnPSRlKG8pLF89Zz8ieSI9PT1sP2cuY2xpZW50SGVpZ2h0fHwwOmcuY2xpZW50V2lkdGh8fDA6MCxiPXAvMi1tLzIsdj1oW3VdLHk9Xy1kW2NdLWhbZl0sdz1fLzItZFtjXS8yK2IsQT1OZSh2LHcseSksRT1sO2kubW9kaWZpZXJzRGF0YVtuXT0oKGU9e30pW0VdPUEsZS5jZW50ZXJPZmZzZXQ9QS13LGUpfX0sZWZmZWN0OmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsaT10Lm9wdGlvbnMuZWxlbWVudCxuPXZvaWQgMD09PWk/IltkYXRhLXBvcHBlci1hcnJvd10iOmk7bnVsbCE9biYmKCJzdHJpbmciIT10eXBlb2Ygbnx8KG49ZS5lbGVtZW50cy5wb3BwZXIucXVlcnlTZWxlY3RvcihuKSkpJiZPZShlLmVsZW1lbnRzLnBvcHBlcixuKSYmKGUuZWxlbWVudHMuYXJyb3c9bil9LHJlcXVpcmVzOlsicG9wcGVyT2Zmc2V0cyJdLHJlcXVpcmVzSWZFeGlzdHM6WyJwcmV2ZW50T3ZlcmZsb3ciXX07ZnVuY3Rpb24gRmUodCl7cmV0dXJuIHQuc3BsaXQoIi0iKVsxXX12YXIgSGU9e3RvcDoiYXV0byIscmlnaHQ6ImF1dG8iLGJvdHRvbToiYXV0byIsbGVmdDoiYXV0byJ9O2Z1bmN0aW9uIFdlKHQpe3ZhciBlLGk9dC5wb3BwZXIsbj10LnBvcHBlclJlY3Qscz10LnBsYWNlbWVudCxvPXQudmFyaWF0aW9uLHI9dC5vZmZzZXRzLGE9dC5wb3NpdGlvbixsPXQuZ3B1QWNjZWxlcmF0aW9uLGM9dC5hZGFwdGl2ZSxoPXQucm91bmRPZmZzZXRzLGQ9dC5pc0ZpeGVkLHU9ci54LGY9dm9pZCAwPT09dT8wOnUscD1yLnksbT12b2lkIDA9PT1wPzA6cCxnPSJmdW5jdGlvbiI9PXR5cGVvZiBoP2goe3g6Zix5Om19KTp7eDpmLHk6bX07Zj1nLngsbT1nLnk7dmFyIF89ci5oYXNPd25Qcm9wZXJ0eSgieCIpLGI9ci5oYXNPd25Qcm9wZXJ0eSgieSIpLHY9VnQseT16dCx3PXdpbmRvdztpZihjKXt2YXIgQT0kZShpKSxFPSJjbGllbnRIZWlnaHQiLFQ9ImNsaWVudFdpZHRoIjtBPT09ZmUoaSkmJiJzdGF0aWMiIT09eGUoQT1MZShpKSkucG9zaXRpb24mJiJhYnNvbHV0ZSI9PT1hJiYoRT0ic2Nyb2xsSGVpZ2h0IixUPSJzY3JvbGxXaWR0aCIpLChzPT09enR8fChzPT09VnR8fHM9PT1xdCkmJm89PT1ZdCkmJih5PVJ0LG0tPShkJiZBPT09dyYmdy52aXN1YWxWaWV3cG9ydD93LnZpc3VhbFZpZXdwb3J0LmhlaWdodDpBW0VdKS1uLmhlaWdodCxtKj1sPzE6LTEpLHMhPT1WdCYmKHMhPT16dCYmcyE9PVJ0fHxvIT09WXQpfHwodj1xdCxmLT0oZCYmQT09PXcmJncudmlzdWFsVmlld3BvcnQ/dy52aXN1YWxWaWV3cG9ydC53aWR0aDpBW1RdKS1uLndpZHRoLGYqPWw/MTotMSl9dmFyIEMsTz1PYmplY3QuYXNzaWduKHtwb3NpdGlvbjphfSxjJiZIZSkseD0hMD09PWg/ZnVuY3Rpb24odCxlKXt2YXIgaT10Lngsbj10Lnkscz1lLmRldmljZVBpeGVsUmF0aW98fDE7cmV0dXJue3g6d2UoaSpzKS9zfHwwLHk6d2UobipzKS9zfHwwfX0oe3g6Zix5Om19LGZlKGkpKTp7eDpmLHk6bX07cmV0dXJuIGY9eC54LG09eC55LGw/T2JqZWN0LmFzc2lnbih7fSxPLCgoQz17fSlbeV09Yj8iMCI6IiIsQ1t2XT1fPyIwIjoiIixDLnRyYW5zZm9ybT0ody5kZXZpY2VQaXhlbFJhdGlvfHwxKTw9MT8idHJhbnNsYXRlKCIrZisicHgsICIrbSsicHgpIjoidHJhbnNsYXRlM2QoIitmKyJweCwgIittKyJweCwgMCkiLEMpKTpPYmplY3QuYXNzaWduKHt9LE8sKChlPXt9KVt5XT1iP20rInB4IjoiIixlW3ZdPV8/ZisicHgiOiIiLGUudHJhbnNmb3JtPSIiLGUpKX1jb25zdCBCZT17bmFtZToiY29tcHV0ZVN0eWxlcyIsZW5hYmxlZDohMCxwaGFzZToiYmVmb3JlV3JpdGUiLGZuOmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsaT10Lm9wdGlvbnMsbj1pLmdwdUFjY2VsZXJhdGlvbixzPXZvaWQgMD09PW58fG4sbz1pLmFkYXB0aXZlLHI9dm9pZCAwPT09b3x8byxhPWkucm91bmRPZmZzZXRzLGw9dm9pZCAwPT09YXx8YSxjPXtwbGFjZW1lbnQ6YmUoZS5wbGFjZW1lbnQpLHZhcmlhdGlvbjpGZShlLnBsYWNlbWVudCkscG9wcGVyOmUuZWxlbWVudHMucG9wcGVyLHBvcHBlclJlY3Q6ZS5yZWN0cy5wb3BwZXIsZ3B1QWNjZWxlcmF0aW9uOnMsaXNGaXhlZDoiZml4ZWQiPT09ZS5vcHRpb25zLnN0cmF0ZWd5fTtudWxsIT1lLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyYmKGUuc3R5bGVzLnBvcHBlcj1PYmplY3QuYXNzaWduKHt9LGUuc3R5bGVzLnBvcHBlcixXZShPYmplY3QuYXNzaWduKHt9LGMse29mZnNldHM6ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMscG9zaXRpb246ZS5vcHRpb25zLnN0cmF0ZWd5LGFkYXB0aXZlOnIscm91bmRPZmZzZXRzOmx9KSkpKSxudWxsIT1lLm1vZGlmaWVyc0RhdGEuYXJyb3cmJihlLnN0eWxlcy5hcnJvdz1PYmplY3QuYXNzaWduKHt9LGUuc3R5bGVzLmFycm93LFdlKE9iamVjdC5hc3NpZ24oe30sYyx7b2Zmc2V0czplLm1vZGlmaWVyc0RhdGEuYXJyb3cscG9zaXRpb246ImFic29sdXRlIixhZGFwdGl2ZTohMSxyb3VuZE9mZnNldHM6bH0pKSkpLGUuYXR0cmlidXRlcy5wb3BwZXI9T2JqZWN0LmFzc2lnbih7fSxlLmF0dHJpYnV0ZXMucG9wcGVyLHsiZGF0YS1wb3BwZXItcGxhY2VtZW50IjplLnBsYWNlbWVudH0pfSxkYXRhOnt9fTt2YXIgemU9e3Bhc3NpdmU6ITB9O2NvbnN0IFJlPXtuYW1lOiJldmVudExpc3RlbmVycyIsZW5hYmxlZDohMCxwaGFzZToid3JpdGUiLGZuOmZ1bmN0aW9uKCl7fSxlZmZlY3Q6ZnVuY3Rpb24odCl7dmFyIGU9dC5zdGF0ZSxpPXQuaW5zdGFuY2Usbj10Lm9wdGlvbnMscz1uLnNjcm9sbCxvPXZvaWQgMD09PXN8fHMscj1uLnJlc2l6ZSxhPXZvaWQgMD09PXJ8fHIsbD1mZShlLmVsZW1lbnRzLnBvcHBlciksYz1bXS5jb25jYXQoZS5zY3JvbGxQYXJlbnRzLnJlZmVyZW5jZSxlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtyZXR1cm4gbyYmYy5mb3JFYWNoKChmdW5jdGlvbih0KXt0LmFkZEV2ZW50TGlzdGVuZXIoInNjcm9sbCIsaS51cGRhdGUsemUpfSkpLGEmJmwuYWRkRXZlbnRMaXN0ZW5lcigicmVzaXplIixpLnVwZGF0ZSx6ZSksZnVuY3Rpb24oKXtvJiZjLmZvckVhY2goKGZ1bmN0aW9uKHQpe3QucmVtb3ZlRXZlbnRMaXN0ZW5lcigic2Nyb2xsIixpLnVwZGF0ZSx6ZSl9KSksYSYmbC5yZW1vdmVFdmVudExpc3RlbmVyKCJyZXNpemUiLGkudXBkYXRlLHplKX19LGRhdGE6e319O3ZhciBxZT17bGVmdDoicmlnaHQiLHJpZ2h0OiJsZWZ0Iixib3R0b206InRvcCIsdG9wOiJib3R0b20ifTtmdW5jdGlvbiBWZSh0KXtyZXR1cm4gdC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywoZnVuY3Rpb24odCl7cmV0dXJuIHFlW3RdfSkpfXZhciBLZT17c3RhcnQ6ImVuZCIsZW5kOiJzdGFydCJ9O2Z1bmN0aW9uIFFlKHQpe3JldHVybiB0LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLChmdW5jdGlvbih0KXtyZXR1cm4gS2VbdF19KSl9ZnVuY3Rpb24gWGUodCl7dmFyIGU9ZmUodCk7cmV0dXJue3Njcm9sbExlZnQ6ZS5wYWdlWE9mZnNldCxzY3JvbGxUb3A6ZS5wYWdlWU9mZnNldH19ZnVuY3Rpb24gWWUodCl7cmV0dXJuIFRlKExlKHQpKS5sZWZ0K1hlKHQpLnNjcm9sbExlZnR9ZnVuY3Rpb24gVWUodCl7dmFyIGU9eGUodCksaT1lLm92ZXJmbG93LG49ZS5vdmVyZmxvd1gscz1lLm92ZXJmbG93WTtyZXR1cm4vYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3QoaStzK24pfWZ1bmN0aW9uIEdlKHQpe3JldHVyblsiaHRtbCIsImJvZHkiLCIjZG9jdW1lbnQiXS5pbmRleE9mKHVlKHQpKT49MD90Lm93bmVyRG9jdW1lbnQuYm9keTptZSh0KSYmVWUodCk/dDpHZShTZSh0KSl9ZnVuY3Rpb24gSmUodCxlKXt2YXIgaTt2b2lkIDA9PT1lJiYoZT1bXSk7dmFyIG49R2UodCkscz1uPT09KG51bGw9PShpPXQub3duZXJEb2N1bWVudCk/dm9pZCAwOmkuYm9keSksbz1mZShuKSxyPXM/W29dLmNvbmNhdChvLnZpc3VhbFZpZXdwb3J0fHxbXSxVZShuKT9uOltdKTpuLGE9ZS5jb25jYXQocik7cmV0dXJuIHM/YTphLmNvbmNhdChKZShTZShyKSkpfWZ1bmN0aW9uIFplKHQpe3JldHVybiBPYmplY3QuYXNzaWduKHt9LHQse2xlZnQ6dC54LHRvcDp0LnkscmlnaHQ6dC54K3Qud2lkdGgsYm90dG9tOnQueSt0LmhlaWdodH0pfWZ1bmN0aW9uIHRpKHQsZSxpKXtyZXR1cm4gZT09PUd0P1plKGZ1bmN0aW9uKHQsZSl7dmFyIGk9ZmUodCksbj1MZSh0KSxzPWkudmlzdWFsVmlld3BvcnQsbz1uLmNsaWVudFdpZHRoLHI9bi5jbGllbnRIZWlnaHQsYT0wLGw9MDtpZihzKXtvPXMud2lkdGgscj1zLmhlaWdodDt2YXIgYz1FZSgpOyhjfHwhYyYmImZpeGVkIj09PWUpJiYoYT1zLm9mZnNldExlZnQsbD1zLm9mZnNldFRvcCl9cmV0dXJue3dpZHRoOm8saGVpZ2h0OnIseDphK1llKHQpLHk6bH19KHQsaSkpOnBlKGUpP2Z1bmN0aW9uKHQsZSl7dmFyIGk9VGUodCwhMSwiZml4ZWQiPT09ZSk7cmV0dXJuIGkudG9wPWkudG9wK3QuY2xpZW50VG9wLGkubGVmdD1pLmxlZnQrdC5jbGllbnRMZWZ0LGkuYm90dG9tPWkudG9wK3QuY2xpZW50SGVpZ2h0LGkucmlnaHQ9aS5sZWZ0K3QuY2xpZW50V2lkdGgsaS53aWR0aD10LmNsaWVudFdpZHRoLGkuaGVpZ2h0PXQuY2xpZW50SGVpZ2h0LGkueD1pLmxlZnQsaS55PWkudG9wLGl9KGUsaSk6WmUoZnVuY3Rpb24odCl7dmFyIGUsaT1MZSh0KSxuPVhlKHQpLHM9bnVsbD09KGU9dC5vd25lckRvY3VtZW50KT92b2lkIDA6ZS5ib2R5LG89dmUoaS5zY3JvbGxXaWR0aCxpLmNsaWVudFdpZHRoLHM/cy5zY3JvbGxXaWR0aDowLHM/cy5jbGllbnRXaWR0aDowKSxyPXZlKGkuc2Nyb2xsSGVpZ2h0LGkuY2xpZW50SGVpZ2h0LHM/cy5zY3JvbGxIZWlnaHQ6MCxzP3MuY2xpZW50SGVpZ2h0OjApLGE9LW4uc2Nyb2xsTGVmdCtZZSh0KSxsPS1uLnNjcm9sbFRvcDtyZXR1cm4icnRsIj09PXhlKHN8fGkpLmRpcmVjdGlvbiYmKGErPXZlKGkuY2xpZW50V2lkdGgscz9zLmNsaWVudFdpZHRoOjApLW8pLHt3aWR0aDpvLGhlaWdodDpyLHg6YSx5Omx9fShMZSh0KSkpfWZ1bmN0aW9uIGVpKHQpe3ZhciBlLGk9dC5yZWZlcmVuY2Usbj10LmVsZW1lbnQscz10LnBsYWNlbWVudCxvPXM/YmUocyk6bnVsbCxyPXM/RmUocyk6bnVsbCxhPWkueCtpLndpZHRoLzItbi53aWR0aC8yLGw9aS55K2kuaGVpZ2h0LzItbi5oZWlnaHQvMjtzd2l0Y2gobyl7Y2FzZSB6dDplPXt4OmEseTppLnktbi5oZWlnaHR9O2JyZWFrO2Nhc2UgUnQ6ZT17eDphLHk6aS55K2kuaGVpZ2h0fTticmVhaztjYXNlIHF0OmU9e3g6aS54K2kud2lkdGgseTpsfTticmVhaztjYXNlIFZ0OmU9e3g6aS54LW4ud2lkdGgseTpsfTticmVhaztkZWZhdWx0OmU9e3g6aS54LHk6aS55fX12YXIgYz1vP0llKG8pOm51bGw7aWYobnVsbCE9Yyl7dmFyIGg9InkiPT09Yz8iaGVpZ2h0Ijoid2lkdGgiO3N3aXRjaChyKXtjYXNlIFh0OmVbY109ZVtjXS0oaVtoXS8yLW5baF0vMik7YnJlYWs7Y2FzZSBZdDplW2NdPWVbY10rKGlbaF0vMi1uW2hdLzIpfX1yZXR1cm4gZX1mdW5jdGlvbiBpaSh0LGUpe3ZvaWQgMD09PWUmJihlPXt9KTt2YXIgaT1lLG49aS5wbGFjZW1lbnQscz12b2lkIDA9PT1uP3QucGxhY2VtZW50Om4sbz1pLnN0cmF0ZWd5LHI9dm9pZCAwPT09bz90LnN0cmF0ZWd5Om8sYT1pLmJvdW5kYXJ5LGw9dm9pZCAwPT09YT9VdDphLGM9aS5yb290Qm91bmRhcnksaD12b2lkIDA9PT1jP0d0OmMsZD1pLmVsZW1lbnRDb250ZXh0LHU9dm9pZCAwPT09ZD9KdDpkLGY9aS5hbHRCb3VuZGFyeSxwPXZvaWQgMCE9PWYmJmYsbT1pLnBhZGRpbmcsZz12b2lkIDA9PT1tPzA6bSxfPVBlKCJudW1iZXIiIT10eXBlb2YgZz9nOmplKGcsUXQpKSxiPXU9PT1KdD9adDpKdCx2PXQucmVjdHMucG9wcGVyLHk9dC5lbGVtZW50c1twP2I6dV0sdz1mdW5jdGlvbih0LGUsaSxuKXt2YXIgcz0iY2xpcHBpbmdQYXJlbnRzIj09PWU/ZnVuY3Rpb24odCl7dmFyIGU9SmUoU2UodCkpLGk9WyJhYnNvbHV0ZSIsImZpeGVkIl0uaW5kZXhPZih4ZSh0KS5wb3NpdGlvbik+PTAmJm1lKHQpPyRlKHQpOnQ7cmV0dXJuIHBlKGkpP2UuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gcGUodCkmJk9lKHQsaSkmJiJib2R5IiE9PXVlKHQpfSkpOltdfSh0KTpbXS5jb25jYXQoZSksbz1bXS5jb25jYXQocyxbaV0pLHI9b1swXSxhPW8ucmVkdWNlKChmdW5jdGlvbihlLGkpe3ZhciBzPXRpKHQsaSxuKTtyZXR1cm4gZS50b3A9dmUocy50b3AsZS50b3ApLGUucmlnaHQ9eWUocy5yaWdodCxlLnJpZ2h0KSxlLmJvdHRvbT15ZShzLmJvdHRvbSxlLmJvdHRvbSksZS5sZWZ0PXZlKHMubGVmdCxlLmxlZnQpLGV9KSx0aSh0LHIsbikpO3JldHVybiBhLndpZHRoPWEucmlnaHQtYS5sZWZ0LGEuaGVpZ2h0PWEuYm90dG9tLWEudG9wLGEueD1hLmxlZnQsYS55PWEudG9wLGF9KHBlKHkpP3k6eS5jb250ZXh0RWxlbWVudHx8TGUodC5lbGVtZW50cy5wb3BwZXIpLGwsaCxyKSxBPVRlKHQuZWxlbWVudHMucmVmZXJlbmNlKSxFPWVpKHtyZWZlcmVuY2U6QSxlbGVtZW50OnYsc3RyYXRlZ3k6ImFic29sdXRlIixwbGFjZW1lbnQ6c30pLFQ9WmUoT2JqZWN0LmFzc2lnbih7fSx2LEUpKSxDPXU9PT1KdD9UOkEsTz17dG9wOncudG9wLUMudG9wK18udG9wLGJvdHRvbTpDLmJvdHRvbS13LmJvdHRvbStfLmJvdHRvbSxsZWZ0OncubGVmdC1DLmxlZnQrXy5sZWZ0LHJpZ2h0OkMucmlnaHQtdy5yaWdodCtfLnJpZ2h0fSx4PXQubW9kaWZpZXJzRGF0YS5vZmZzZXQ7aWYodT09PUp0JiZ4KXt2YXIgaz14W3NdO09iamVjdC5rZXlzKE8pLmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZhciBlPVtxdCxSdF0uaW5kZXhPZih0KT49MD8xOi0xLGk9W3p0LFJ0XS5pbmRleE9mKHQpPj0wPyJ5IjoieCI7T1t0XSs9a1tpXSplfSkpfXJldHVybiBPfWZ1bmN0aW9uIG5pKHQsZSl7dm9pZCAwPT09ZSYmKGU9e30pO3ZhciBpPWUsbj1pLnBsYWNlbWVudCxzPWkuYm91bmRhcnksbz1pLnJvb3RCb3VuZGFyeSxyPWkucGFkZGluZyxhPWkuZmxpcFZhcmlhdGlvbnMsbD1pLmFsbG93ZWRBdXRvUGxhY2VtZW50cyxjPXZvaWQgMD09PWw/ZWU6bCxoPUZlKG4pLGQ9aD9hP3RlOnRlLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIEZlKHQpPT09aH0pKTpRdCx1PWQuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gYy5pbmRleE9mKHQpPj0wfSkpOzA9PT11Lmxlbmd0aCYmKHU9ZCk7dmFyIGY9dS5yZWR1Y2UoKGZ1bmN0aW9uKGUsaSl7cmV0dXJuIGVbaV09aWkodCx7cGxhY2VtZW50OmksYm91bmRhcnk6cyxyb290Qm91bmRhcnk6byxwYWRkaW5nOnJ9KVtiZShpKV0sZX0pLHt9KTtyZXR1cm4gT2JqZWN0LmtleXMoZikuc29ydCgoZnVuY3Rpb24odCxlKXtyZXR1cm4gZlt0XS1mW2VdfSkpfWNvbnN0IHNpPXtuYW1lOiJmbGlwIixlbmFibGVkOiEwLHBoYXNlOiJtYWluIixmbjpmdW5jdGlvbih0KXt2YXIgZT10LnN0YXRlLGk9dC5vcHRpb25zLG49dC5uYW1lO2lmKCFlLm1vZGlmaWVyc0RhdGFbbl0uX3NraXApe2Zvcih2YXIgcz1pLm1haW5BeGlzLG89dm9pZCAwPT09c3x8cyxyPWkuYWx0QXhpcyxhPXZvaWQgMD09PXJ8fHIsbD1pLmZhbGxiYWNrUGxhY2VtZW50cyxjPWkucGFkZGluZyxoPWkuYm91bmRhcnksZD1pLnJvb3RCb3VuZGFyeSx1PWkuYWx0Qm91bmRhcnksZj1pLmZsaXBWYXJpYXRpb25zLHA9dm9pZCAwPT09Znx8ZixtPWkuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLGc9ZS5vcHRpb25zLnBsYWNlbWVudCxfPWJlKGcpLGI9bHx8KF8hPT1nJiZwP2Z1bmN0aW9uKHQpe2lmKGJlKHQpPT09S3QpcmV0dXJuW107dmFyIGU9VmUodCk7cmV0dXJuW1FlKHQpLGUsUWUoZSldfShnKTpbVmUoZyldKSx2PVtnXS5jb25jYXQoYikucmVkdWNlKChmdW5jdGlvbih0LGkpe3JldHVybiB0LmNvbmNhdChiZShpKT09PUt0P25pKGUse3BsYWNlbWVudDppLGJvdW5kYXJ5Omgscm9vdEJvdW5kYXJ5OmQscGFkZGluZzpjLGZsaXBWYXJpYXRpb25zOnAsYWxsb3dlZEF1dG9QbGFjZW1lbnRzOm19KTppKX0pLFtdKSx5PWUucmVjdHMucmVmZXJlbmNlLHc9ZS5yZWN0cy5wb3BwZXIsQT1uZXcgTWFwLEU9ITAsVD12WzBdLEM9MDtDPHYubGVuZ3RoO0MrKyl7dmFyIE89dltDXSx4PWJlKE8pLGs9RmUoTyk9PT1YdCxMPVt6dCxSdF0uaW5kZXhPZih4KT49MCxTPUw/IndpZHRoIjoiaGVpZ2h0IixEPWlpKGUse3BsYWNlbWVudDpPLGJvdW5kYXJ5Omgscm9vdEJvdW5kYXJ5OmQsYWx0Qm91bmRhcnk6dSxwYWRkaW5nOmN9KSwkPUw/az9xdDpWdDprP1J0Onp0O3lbU10+d1tTXSYmKCQ9VmUoJCkpO3ZhciBJPVZlKCQpLE49W107aWYobyYmTi5wdXNoKERbeF08PTApLGEmJk4ucHVzaChEWyRdPD0wLERbSV08PTApLE4uZXZlcnkoKGZ1bmN0aW9uKHQpe3JldHVybiB0fSkpKXtUPU8sRT0hMTticmVha31BLnNldChPLE4pfWlmKEUpZm9yKHZhciBQPWZ1bmN0aW9uKHQpe3ZhciBlPXYuZmluZCgoZnVuY3Rpb24oZSl7dmFyIGk9QS5nZXQoZSk7aWYoaSlyZXR1cm4gaS5zbGljZSgwLHQpLmV2ZXJ5KChmdW5jdGlvbih0KXtyZXR1cm4gdH0pKX0pKTtpZihlKXJldHVybiBUPWUsImJyZWFrIn0saj1wPzM6MTtqPjAmJiJicmVhayIhPT1QKGopO2otLSk7ZS5wbGFjZW1lbnQhPT1UJiYoZS5tb2RpZmllcnNEYXRhW25dLl9za2lwPSEwLGUucGxhY2VtZW50PVQsZS5yZXNldD0hMCl9fSxyZXF1aXJlc0lmRXhpc3RzOlsib2Zmc2V0Il0sZGF0YTp7X3NraXA6ITF9fTtmdW5jdGlvbiBvaSh0LGUsaSl7cmV0dXJuIHZvaWQgMD09PWkmJihpPXt4OjAseTowfSkse3RvcDp0LnRvcC1lLmhlaWdodC1pLnkscmlnaHQ6dC5yaWdodC1lLndpZHRoK2kueCxib3R0b206dC5ib3R0b20tZS5oZWlnaHQraS55LGxlZnQ6dC5sZWZ0LWUud2lkdGgtaS54fX1mdW5jdGlvbiByaSh0KXtyZXR1cm5benQscXQsUnQsVnRdLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdPj0wfSkpfWNvbnN0IGFpPXtuYW1lOiJoaWRlIixlbmFibGVkOiEwLHBoYXNlOiJtYWluIixyZXF1aXJlc0lmRXhpc3RzOlsicHJldmVudE92ZXJmbG93Il0sZm46ZnVuY3Rpb24odCl7dmFyIGU9dC5zdGF0ZSxpPXQubmFtZSxuPWUucmVjdHMucmVmZXJlbmNlLHM9ZS5yZWN0cy5wb3BwZXIsbz1lLm1vZGlmaWVyc0RhdGEucHJldmVudE92ZXJmbG93LHI9aWkoZSx7ZWxlbWVudENvbnRleHQ6InJlZmVyZW5jZSJ9KSxhPWlpKGUse2FsdEJvdW5kYXJ5OiEwfSksbD1vaShyLG4pLGM9b2koYSxzLG8pLGg9cmkobCksZD1yaShjKTtlLm1vZGlmaWVyc0RhdGFbaV09e3JlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0czpsLHBvcHBlckVzY2FwZU9mZnNldHM6Yyxpc1JlZmVyZW5jZUhpZGRlbjpoLGhhc1BvcHBlckVzY2FwZWQ6ZH0sZS5hdHRyaWJ1dGVzLnBvcHBlcj1PYmplY3QuYXNzaWduKHt9LGUuYXR0cmlidXRlcy5wb3BwZXIseyJkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuIjpoLCJkYXRhLXBvcHBlci1lc2NhcGVkIjpkfSl9fSxsaT17bmFtZToib2Zmc2V0IixlbmFibGVkOiEwLHBoYXNlOiJtYWluIixyZXF1aXJlczpbInBvcHBlck9mZnNldHMiXSxmbjpmdW5jdGlvbih0KXt2YXIgZT10LnN0YXRlLGk9dC5vcHRpb25zLG49dC5uYW1lLHM9aS5vZmZzZXQsbz12b2lkIDA9PT1zP1swLDBdOnMscj1lZS5yZWR1Y2UoKGZ1bmN0aW9uKHQsaSl7cmV0dXJuIHRbaV09ZnVuY3Rpb24odCxlLGkpe3ZhciBuPWJlKHQpLHM9W1Z0LHp0XS5pbmRleE9mKG4pPj0wPy0xOjEsbz0iZnVuY3Rpb24iPT10eXBlb2YgaT9pKE9iamVjdC5hc3NpZ24oe30sZSx7cGxhY2VtZW50OnR9KSk6aSxyPW9bMF0sYT1vWzFdO3JldHVybiByPXJ8fDAsYT0oYXx8MCkqcyxbVnQscXRdLmluZGV4T2Yobik+PTA/e3g6YSx5OnJ9Ont4OnIseTphfX0oaSxlLnJlY3RzLG8pLHR9KSx7fSksYT1yW2UucGxhY2VtZW50XSxsPWEueCxjPWEueTtudWxsIT1lLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyYmKGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLngrPWwsZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueSs9YyksZS5tb2RpZmllcnNEYXRhW25dPXJ9fSxjaT17bmFtZToicG9wcGVyT2Zmc2V0cyIsZW5hYmxlZDohMCxwaGFzZToicmVhZCIsZm46ZnVuY3Rpb24odCl7dmFyIGU9dC5zdGF0ZSxpPXQubmFtZTtlLm1vZGlmaWVyc0RhdGFbaV09ZWkoe3JlZmVyZW5jZTplLnJlY3RzLnJlZmVyZW5jZSxlbGVtZW50OmUucmVjdHMucG9wcGVyLHN0cmF0ZWd5OiJhYnNvbHV0ZSIscGxhY2VtZW50OmUucGxhY2VtZW50fSl9LGRhdGE6e319LGhpPXtuYW1lOiJwcmV2ZW50T3ZlcmZsb3ciLGVuYWJsZWQ6ITAscGhhc2U6Im1haW4iLGZuOmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsaT10Lm9wdGlvbnMsbj10Lm5hbWUscz1pLm1haW5BeGlzLG89dm9pZCAwPT09c3x8cyxyPWkuYWx0QXhpcyxhPXZvaWQgMCE9PXImJnIsbD1pLmJvdW5kYXJ5LGM9aS5yb290Qm91bmRhcnksaD1pLmFsdEJvdW5kYXJ5LGQ9aS5wYWRkaW5nLHU9aS50ZXRoZXIsZj12b2lkIDA9PT11fHx1LHA9aS50ZXRoZXJPZmZzZXQsbT12b2lkIDA9PT1wPzA6cCxnPWlpKGUse2JvdW5kYXJ5Omwscm9vdEJvdW5kYXJ5OmMscGFkZGluZzpkLGFsdEJvdW5kYXJ5Omh9KSxfPWJlKGUucGxhY2VtZW50KSxiPUZlKGUucGxhY2VtZW50KSx2PSFiLHk9SWUoXyksdz0ieCI9PT15PyJ5IjoieCIsQT1lLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxFPWUucmVjdHMucmVmZXJlbmNlLFQ9ZS5yZWN0cy5wb3BwZXIsQz0iZnVuY3Rpb24iPT10eXBlb2YgbT9tKE9iamVjdC5hc3NpZ24oe30sZS5yZWN0cyx7cGxhY2VtZW50OmUucGxhY2VtZW50fSkpOm0sTz0ibnVtYmVyIj09dHlwZW9mIEM/e21haW5BeGlzOkMsYWx0QXhpczpDfTpPYmplY3QuYXNzaWduKHttYWluQXhpczowLGFsdEF4aXM6MH0sQykseD1lLm1vZGlmaWVyc0RhdGEub2Zmc2V0P2UubW9kaWZpZXJzRGF0YS5vZmZzZXRbZS5wbGFjZW1lbnRdOm51bGwsaz17eDowLHk6MH07aWYoQSl7aWYobyl7dmFyIEwsUz0ieSI9PT15P3p0OlZ0LEQ9InkiPT09eT9SdDpxdCwkPSJ5Ij09PXk/ImhlaWdodCI6IndpZHRoIixJPUFbeV0sTj1JK2dbU10sUD1JLWdbRF0saj1mPy1UWyRdLzI6MCxNPWI9PT1YdD9FWyRdOlRbJF0sRj1iPT09WHQ/LVRbJF06LUVbJF0sSD1lLmVsZW1lbnRzLmFycm93LFc9ZiYmSD9DZShIKTp7d2lkdGg6MCxoZWlnaHQ6MH0sQj1lLm1vZGlmaWVyc0RhdGFbImFycm93I3BlcnNpc3RlbnQiXT9lLm1vZGlmaWVyc0RhdGFbImFycm93I3BlcnNpc3RlbnQiXS5wYWRkaW5nOnt0b3A6MCxyaWdodDowLGJvdHRvbTowLGxlZnQ6MH0sej1CW1NdLFI9QltEXSxxPU5lKDAsRVskXSxXWyRdKSxWPXY/RVskXS8yLWotcS16LU8ubWFpbkF4aXM6TS1xLXotTy5tYWluQXhpcyxLPXY/LUVbJF0vMitqK3ErUitPLm1haW5BeGlzOkYrcStSK08ubWFpbkF4aXMsUT1lLmVsZW1lbnRzLmFycm93JiYkZShlLmVsZW1lbnRzLmFycm93KSxYPVE/InkiPT09eT9RLmNsaWVudFRvcHx8MDpRLmNsaWVudExlZnR8fDA6MCxZPW51bGwhPShMPW51bGw9PXg/dm9pZCAwOnhbeV0pP0w6MCxVPUkrSy1ZLEc9TmUoZj95ZShOLEkrVi1ZLVgpOk4sSSxmP3ZlKFAsVSk6UCk7QVt5XT1HLGtbeV09Ry1JfWlmKGEpe3ZhciBKLFo9IngiPT09eT96dDpWdCx0dD0ieCI9PT15P1J0OnF0LGV0PUFbd10saXQ9InkiPT09dz8iaGVpZ2h0Ijoid2lkdGgiLG50PWV0K2dbWl0sc3Q9ZXQtZ1t0dF0sb3Q9LTEhPT1benQsVnRdLmluZGV4T2YoXykscnQ9bnVsbCE9KEo9bnVsbD09eD92b2lkIDA6eFt3XSk/SjowLGF0PW90P250OmV0LUVbaXRdLVRbaXRdLXJ0K08uYWx0QXhpcyxsdD1vdD9ldCtFW2l0XStUW2l0XS1ydC1PLmFsdEF4aXM6c3QsY3Q9ZiYmb3Q/ZnVuY3Rpb24odCxlLGkpe3ZhciBuPU5lKHQsZSxpKTtyZXR1cm4gbj5pP2k6bn0oYXQsZXQsbHQpOk5lKGY/YXQ6bnQsZXQsZj9sdDpzdCk7QVt3XT1jdCxrW3ddPWN0LWV0fWUubW9kaWZpZXJzRGF0YVtuXT1rfX0scmVxdWlyZXNJZkV4aXN0czpbIm9mZnNldCJdfTtmdW5jdGlvbiBkaSh0LGUsaSl7dm9pZCAwPT09aSYmKGk9ITEpO3ZhciBuLHMsbz1tZShlKSxyPW1lKGUpJiZmdW5jdGlvbih0KXt2YXIgZT10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGk9d2UoZS53aWR0aCkvdC5vZmZzZXRXaWR0aHx8MSxuPXdlKGUuaGVpZ2h0KS90Lm9mZnNldEhlaWdodHx8MTtyZXR1cm4gMSE9PWl8fDEhPT1ufShlKSxhPUxlKGUpLGw9VGUodCxyLGkpLGM9e3Njcm9sbExlZnQ6MCxzY3JvbGxUb3A6MH0saD17eDowLHk6MH07cmV0dXJuKG98fCFvJiYhaSkmJigoImJvZHkiIT09dWUoZSl8fFVlKGEpKSYmKGM9KG49ZSkhPT1mZShuKSYmbWUobik/e3Njcm9sbExlZnQ6KHM9bikuc2Nyb2xsTGVmdCxzY3JvbGxUb3A6cy5zY3JvbGxUb3B9OlhlKG4pKSxtZShlKT8oKGg9VGUoZSwhMCkpLngrPWUuY2xpZW50TGVmdCxoLnkrPWUuY2xpZW50VG9wKTphJiYoaC54PVllKGEpKSkse3g6bC5sZWZ0K2Muc2Nyb2xsTGVmdC1oLngseTpsLnRvcCtjLnNjcm9sbFRvcC1oLnksd2lkdGg6bC53aWR0aCxoZWlnaHQ6bC5oZWlnaHR9fWZ1bmN0aW9uIHVpKHQpe3ZhciBlPW5ldyBNYXAsaT1uZXcgU2V0LG49W107ZnVuY3Rpb24gcyh0KXtpLmFkZCh0Lm5hbWUpLFtdLmNvbmNhdCh0LnJlcXVpcmVzfHxbXSx0LnJlcXVpcmVzSWZFeGlzdHN8fFtdKS5mb3JFYWNoKChmdW5jdGlvbih0KXtpZighaS5oYXModCkpe3ZhciBuPWUuZ2V0KHQpO24mJnMobil9fSkpLG4ucHVzaCh0KX1yZXR1cm4gdC5mb3JFYWNoKChmdW5jdGlvbih0KXtlLnNldCh0Lm5hbWUsdCl9KSksdC5mb3JFYWNoKChmdW5jdGlvbih0KXtpLmhhcyh0Lm5hbWUpfHxzKHQpfSkpLG59dmFyIGZpPXtwbGFjZW1lbnQ6ImJvdHRvbSIsbW9kaWZpZXJzOltdLHN0cmF0ZWd5OiJhYnNvbHV0ZSJ9O2Z1bmN0aW9uIHBpKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsZT1uZXcgQXJyYXkodCksaT0wO2k8dDtpKyspZVtpXT1hcmd1bWVudHNbaV07cmV0dXJuIWUuc29tZSgoZnVuY3Rpb24odCl7cmV0dXJuISh0JiYiZnVuY3Rpb24iPT10eXBlb2YgdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpfSkpfWZ1bmN0aW9uIG1pKHQpe3ZvaWQgMD09PXQmJih0PXt9KTt2YXIgZT10LGk9ZS5kZWZhdWx0TW9kaWZpZXJzLG49dm9pZCAwPT09aT9bXTppLHM9ZS5kZWZhdWx0T3B0aW9ucyxvPXZvaWQgMD09PXM/Zmk6cztyZXR1cm4gZnVuY3Rpb24odCxlLGkpe3ZvaWQgMD09PWkmJihpPW8pO3ZhciBzLHIsYT17cGxhY2VtZW50OiJib3R0b20iLG9yZGVyZWRNb2RpZmllcnM6W10sb3B0aW9uczpPYmplY3QuYXNzaWduKHt9LGZpLG8pLG1vZGlmaWVyc0RhdGE6e30sZWxlbWVudHM6e3JlZmVyZW5jZTp0LHBvcHBlcjplfSxhdHRyaWJ1dGVzOnt9LHN0eWxlczp7fX0sbD1bXSxjPSExLGg9e3N0YXRlOmEsc2V0T3B0aW9uczpmdW5jdGlvbihpKXt2YXIgcz0iZnVuY3Rpb24iPT10eXBlb2YgaT9pKGEub3B0aW9ucyk6aTtkKCksYS5vcHRpb25zPU9iamVjdC5hc3NpZ24oe30sbyxhLm9wdGlvbnMscyksYS5zY3JvbGxQYXJlbnRzPXtyZWZlcmVuY2U6cGUodCk/SmUodCk6dC5jb250ZXh0RWxlbWVudD9KZSh0LmNvbnRleHRFbGVtZW50KTpbXSxwb3BwZXI6SmUoZSl9O3ZhciByLGMsdT1mdW5jdGlvbih0KXt2YXIgZT11aSh0KTtyZXR1cm4gZGUucmVkdWNlKChmdW5jdGlvbih0LGkpe3JldHVybiB0LmNvbmNhdChlLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIHQucGhhc2U9PT1pfSkpKX0pLFtdKX0oKHI9W10uY29uY2F0KG4sYS5vcHRpb25zLm1vZGlmaWVycyksYz1yLnJlZHVjZSgoZnVuY3Rpb24odCxlKXt2YXIgaT10W2UubmFtZV07cmV0dXJuIHRbZS5uYW1lXT1pP09iamVjdC5hc3NpZ24oe30saSxlLHtvcHRpb25zOk9iamVjdC5hc3NpZ24oe30saS5vcHRpb25zLGUub3B0aW9ucyksZGF0YTpPYmplY3QuYXNzaWduKHt9LGkuZGF0YSxlLmRhdGEpfSk6ZSx0fSkse30pLE9iamVjdC5rZXlzKGMpLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuIGNbdF19KSkpKTtyZXR1cm4gYS5vcmRlcmVkTW9kaWZpZXJzPXUuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdC5lbmFibGVkfSkpLGEub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgZT10Lm5hbWUsaT10Lm9wdGlvbnMsbj12b2lkIDA9PT1pP3t9Omkscz10LmVmZmVjdDtpZigiZnVuY3Rpb24iPT10eXBlb2Ygcyl7dmFyIG89cyh7c3RhdGU6YSxuYW1lOmUsaW5zdGFuY2U6aCxvcHRpb25zOm59KTtsLnB1c2gob3x8ZnVuY3Rpb24oKXt9KX19KSksaC51cGRhdGUoKX0sZm9yY2VVcGRhdGU6ZnVuY3Rpb24oKXtpZighYyl7dmFyIHQ9YS5lbGVtZW50cyxlPXQucmVmZXJlbmNlLGk9dC5wb3BwZXI7aWYocGkoZSxpKSl7YS5yZWN0cz17cmVmZXJlbmNlOmRpKGUsJGUoaSksImZpeGVkIj09PWEub3B0aW9ucy5zdHJhdGVneSkscG9wcGVyOkNlKGkpfSxhLnJlc2V0PSExLGEucGxhY2VtZW50PWEub3B0aW9ucy5wbGFjZW1lbnQsYS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiBhLm1vZGlmaWVyc0RhdGFbdC5uYW1lXT1PYmplY3QuYXNzaWduKHt9LHQuZGF0YSl9KSk7Zm9yKHZhciBuPTA7bjxhLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoO24rKylpZighMCE9PWEucmVzZXQpe3ZhciBzPWEub3JkZXJlZE1vZGlmaWVyc1tuXSxvPXMuZm4scj1zLm9wdGlvbnMsbD12b2lkIDA9PT1yP3t9OnIsZD1zLm5hbWU7ImZ1bmN0aW9uIj09dHlwZW9mIG8mJihhPW8oe3N0YXRlOmEsb3B0aW9uczpsLG5hbWU6ZCxpbnN0YW5jZTpofSl8fGEpfWVsc2UgYS5yZXNldD0hMSxuPS0xfX19LHVwZGF0ZToocz1mdW5jdGlvbigpe3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24odCl7aC5mb3JjZVVwZGF0ZSgpLHQoYSl9KSl9LGZ1bmN0aW9uKCl7cmV0dXJuIHJ8fChyPW5ldyBQcm9taXNlKChmdW5jdGlvbih0KXtQcm9taXNlLnJlc29sdmUoKS50aGVuKChmdW5jdGlvbigpe3I9dm9pZCAwLHQocygpKX0pKX0pKSkscn0pLGRlc3Ryb3k6ZnVuY3Rpb24oKXtkKCksYz0hMH19O2lmKCFwaSh0LGUpKXJldHVybiBoO2Z1bmN0aW9uIGQoKXtsLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiB0KCl9KSksbD1bXX1yZXR1cm4gaC5zZXRPcHRpb25zKGkpLnRoZW4oKGZ1bmN0aW9uKHQpeyFjJiZpLm9uRmlyc3RVcGRhdGUmJmkub25GaXJzdFVwZGF0ZSh0KX0pKSxofX12YXIgZ2k9bWkoKSxfaT1taSh7ZGVmYXVsdE1vZGlmaWVyczpbUmUsY2ksQmUsX2VdfSksYmk9bWkoe2RlZmF1bHRNb2RpZmllcnM6W1JlLGNpLEJlLF9lLGxpLHNpLGhpLE1lLGFpXX0pO2NvbnN0IHZpPU9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnR5KHtfX3Byb3RvX186bnVsbCxhZnRlck1haW46YWUsYWZ0ZXJSZWFkOnNlLGFmdGVyV3JpdGU6aGUsYXBwbHlTdHlsZXM6X2UsYXJyb3c6TWUsYXV0bzpLdCxiYXNlUGxhY2VtZW50czpRdCxiZWZvcmVNYWluOm9lLGJlZm9yZVJlYWQ6aWUsYmVmb3JlV3JpdGU6bGUsYm90dG9tOlJ0LGNsaXBwaW5nUGFyZW50czpVdCxjb21wdXRlU3R5bGVzOkJlLGNyZWF0ZVBvcHBlcjpiaSxjcmVhdGVQb3BwZXJCYXNlOmdpLGNyZWF0ZVBvcHBlckxpdGU6X2ksZGV0ZWN0T3ZlcmZsb3c6aWksZW5kOll0LGV2ZW50TGlzdGVuZXJzOlJlLGZsaXA6c2ksaGlkZTphaSxsZWZ0OlZ0LG1haW46cmUsbW9kaWZpZXJQaGFzZXM6ZGUsb2Zmc2V0OmxpLHBsYWNlbWVudHM6ZWUscG9wcGVyOkp0LHBvcHBlckdlbmVyYXRvcjptaSxwb3BwZXJPZmZzZXRzOmNpLHByZXZlbnRPdmVyZmxvdzpoaSxyZWFkOm5lLHJlZmVyZW5jZTpadCxyaWdodDpxdCxzdGFydDpYdCx0b3A6enQsdmFyaWF0aW9uUGxhY2VtZW50czp0ZSx2aWV3cG9ydDpHdCx3cml0ZTpjZX0sU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZToiTW9kdWxlIn0pKSx5aT0iZHJvcGRvd24iLHdpPSIuYnMuZHJvcGRvd24iLEFpPSIuZGF0YS1hcGkiLEVpPSJBcnJvd1VwIixUaT0iQXJyb3dEb3duIixDaT1gaGlkZSR7d2l9YCxPaT1gaGlkZGVuJHt3aX1gLHhpPWBzaG93JHt3aX1gLGtpPWBzaG93biR7d2l9YCxMaT1gY2xpY2ske3dpfSR7QWl9YCxTaT1ga2V5ZG93biR7d2l9JHtBaX1gLERpPWBrZXl1cCR7d2l9JHtBaX1gLCRpPSJzaG93IixJaT0nW2RhdGEtYnMtdG9nZ2xlPSJkcm9wZG93biJdOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJyxOaT1gJHtJaX0uJHskaX1gLFBpPSIuZHJvcGRvd24tbWVudSIsamk9cCgpPyJ0b3AtZW5kIjoidG9wLXN0YXJ0IixNaT1wKCk/InRvcC1zdGFydCI6InRvcC1lbmQiLEZpPXAoKT8iYm90dG9tLWVuZCI6ImJvdHRvbS1zdGFydCIsSGk9cCgpPyJib3R0b20tc3RhcnQiOiJib3R0b20tZW5kIixXaT1wKCk/ImxlZnQtc3RhcnQiOiJyaWdodC1zdGFydCIsQmk9cCgpPyJyaWdodC1zdGFydCI6ImxlZnQtc3RhcnQiLHppPXthdXRvQ2xvc2U6ITAsYm91bmRhcnk6ImNsaXBwaW5nUGFyZW50cyIsZGlzcGxheToiZHluYW1pYyIsb2Zmc2V0OlswLDJdLHBvcHBlckNvbmZpZzpudWxsLHJlZmVyZW5jZToidG9nZ2xlIn0sUmk9e2F1dG9DbG9zZToiKGJvb2xlYW58c3RyaW5nKSIsYm91bmRhcnk6IihzdHJpbmd8ZWxlbWVudCkiLGRpc3BsYXk6InN0cmluZyIsb2Zmc2V0OiIoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKSIscG9wcGVyQ29uZmlnOiIobnVsbHxvYmplY3R8ZnVuY3Rpb24pIixyZWZlcmVuY2U6IihzdHJpbmd8ZWxlbWVudHxvYmplY3QpIn07Y2xhc3MgcWkgZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIodCxlKSx0aGlzLl9wb3BwZXI9bnVsbCx0aGlzLl9wYXJlbnQ9dGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLHRoaXMuX21lbnU9ei5uZXh0KHRoaXMuX2VsZW1lbnQsUGkpWzBdfHx6LnByZXYodGhpcy5fZWxlbWVudCxQaSlbMF18fHouZmluZE9uZShQaSx0aGlzLl9wYXJlbnQpLHRoaXMuX2luTmF2YmFyPXRoaXMuX2RldGVjdE5hdmJhcigpfXN0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiB6aX1zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIFJpfXN0YXRpYyBnZXQgTkFNRSgpe3JldHVybiB5aX10b2dnbGUoKXtyZXR1cm4gdGhpcy5faXNTaG93bigpP3RoaXMuaGlkZSgpOnRoaXMuc2hvdygpfXNob3coKXtpZihsKHRoaXMuX2VsZW1lbnQpfHx0aGlzLl9pc1Nob3duKCkpcmV0dXJuO2NvbnN0IHQ9e3JlbGF0ZWRUYXJnZXQ6dGhpcy5fZWxlbWVudH07aWYoIU4udHJpZ2dlcih0aGlzLl9lbGVtZW50LHhpLHQpLmRlZmF1bHRQcmV2ZW50ZWQpe2lmKHRoaXMuX2NyZWF0ZVBvcHBlcigpLCJvbnRvdWNoc3RhcnQiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50JiYhdGhpcy5fcGFyZW50LmNsb3Nlc3QoIi5uYXZiYXItbmF2IikpZm9yKGNvbnN0IHQgb2ZbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpTi5vbih0LCJtb3VzZW92ZXIiLGgpO3RoaXMuX2VsZW1lbnQuZm9jdXMoKSx0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgiYXJpYS1leHBhbmRlZCIsITApLHRoaXMuX21lbnUuY2xhc3NMaXN0LmFkZCgkaSksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKCRpKSxOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxraSx0KX19aGlkZSgpe2lmKGwodGhpcy5fZWxlbWVudCl8fCF0aGlzLl9pc1Nob3duKCkpcmV0dXJuO2NvbnN0IHQ9e3JlbGF0ZWRUYXJnZXQ6dGhpcy5fZWxlbWVudH07dGhpcy5fY29tcGxldGVIaWRlKHQpfWRpc3Bvc2UoKXt0aGlzLl9wb3BwZXImJnRoaXMuX3BvcHBlci5kZXN0cm95KCksc3VwZXIuZGlzcG9zZSgpfXVwZGF0ZSgpe3RoaXMuX2luTmF2YmFyPXRoaXMuX2RldGVjdE5hdmJhcigpLHRoaXMuX3BvcHBlciYmdGhpcy5fcG9wcGVyLnVwZGF0ZSgpfV9jb21wbGV0ZUhpZGUodCl7aWYoIU4udHJpZ2dlcih0aGlzLl9lbGVtZW50LENpLHQpLmRlZmF1bHRQcmV2ZW50ZWQpe2lmKCJvbnRvdWNoc3RhcnQiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KWZvcihjb25zdCB0IG9mW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKU4ub2ZmKHQsIm1vdXNlb3ZlciIsaCk7dGhpcy5fcG9wcGVyJiZ0aGlzLl9wb3BwZXIuZGVzdHJveSgpLHRoaXMuX21lbnUuY2xhc3NMaXN0LnJlbW92ZSgkaSksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCRpKSx0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgiYXJpYS1leHBhbmRlZCIsImZhbHNlIiksRi5yZW1vdmVEYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsInBvcHBlciIpLE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LE9pLHQpfX1fZ2V0Q29uZmlnKHQpe2lmKCJvYmplY3QiPT10eXBlb2YodD1zdXBlci5fZ2V0Q29uZmlnKHQpKS5yZWZlcmVuY2UmJiFvKHQucmVmZXJlbmNlKSYmImZ1bmN0aW9uIiE9dHlwZW9mIHQucmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCl0aHJvdyBuZXcgVHlwZUVycm9yKGAke3lpLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gInJlZmVyZW5jZSIgcHJvdmlkZWQgdHlwZSAib2JqZWN0IiB3aXRob3V0IGEgcmVxdWlyZWQgImdldEJvdW5kaW5nQ2xpZW50UmVjdCIgbWV0aG9kLmApO3JldHVybiB0fV9jcmVhdGVQb3BwZXIoKXtpZih2b2lkIDA9PT12aSl0aHJvdyBuZXcgVHlwZUVycm9yKCJCb290c3RyYXAncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZykiKTtsZXQgdD10aGlzLl9lbGVtZW50OyJwYXJlbnQiPT09dGhpcy5fY29uZmlnLnJlZmVyZW5jZT90PXRoaXMuX3BhcmVudDpvKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpP3Q9cih0aGlzLl9jb25maWcucmVmZXJlbmNlKToib2JqZWN0Ij09dHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UmJih0PXRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpO2NvbnN0IGU9dGhpcy5fZ2V0UG9wcGVyQ29uZmlnKCk7dGhpcy5fcG9wcGVyPWJpKHQsdGhpcy5fbWVudSxlKX1faXNTaG93bigpe3JldHVybiB0aGlzLl9tZW51LmNsYXNzTGlzdC5jb250YWlucygkaSl9X2dldFBsYWNlbWVudCgpe2NvbnN0IHQ9dGhpcy5fcGFyZW50O2lmKHQuY2xhc3NMaXN0LmNvbnRhaW5zKCJkcm9wZW5kIikpcmV0dXJuIFdpO2lmKHQuY2xhc3NMaXN0LmNvbnRhaW5zKCJkcm9wc3RhcnQiKSlyZXR1cm4gQmk7aWYodC5jbGFzc0xpc3QuY29udGFpbnMoImRyb3B1cC1jZW50ZXIiKSlyZXR1cm4idG9wIjtpZih0LmNsYXNzTGlzdC5jb250YWlucygiZHJvcGRvd24tY2VudGVyIikpcmV0dXJuImJvdHRvbSI7Y29uc3QgZT0iZW5kIj09PWdldENvbXB1dGVkU3R5bGUodGhpcy5fbWVudSkuZ2V0UHJvcGVydHlWYWx1ZSgiLS1icy1wb3NpdGlvbiIpLnRyaW0oKTtyZXR1cm4gdC5jbGFzc0xpc3QuY29udGFpbnMoImRyb3B1cCIpP2U/TWk6amk6ZT9IaTpGaX1fZGV0ZWN0TmF2YmFyKCl7cmV0dXJuIG51bGwhPT10aGlzLl9lbGVtZW50LmNsb3Nlc3QoIi5uYXZiYXIiKX1fZ2V0T2Zmc2V0KCl7Y29uc3R7b2Zmc2V0OnR9PXRoaXMuX2NvbmZpZztyZXR1cm4ic3RyaW5nIj09dHlwZW9mIHQ/dC5zcGxpdCgiLCIpLm1hcCgodD0+TnVtYmVyLnBhcnNlSW50KHQsMTApKSk6ImZ1bmN0aW9uIj09dHlwZW9mIHQ/ZT0+dChlLHRoaXMuX2VsZW1lbnQpOnR9X2dldFBvcHBlckNvbmZpZygpe2NvbnN0IHQ9e3BsYWNlbWVudDp0aGlzLl9nZXRQbGFjZW1lbnQoKSxtb2RpZmllcnM6W3tuYW1lOiJwcmV2ZW50T3ZlcmZsb3ciLG9wdGlvbnM6e2JvdW5kYXJ5OnRoaXMuX2NvbmZpZy5ib3VuZGFyeX19LHtuYW1lOiJvZmZzZXQiLG9wdGlvbnM6e29mZnNldDp0aGlzLl9nZXRPZmZzZXQoKX19XX07cmV0dXJuKHRoaXMuX2luTmF2YmFyfHwic3RhdGljIj09PXRoaXMuX2NvbmZpZy5kaXNwbGF5KSYmKEYuc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCJwb3BwZXIiLCJzdGF0aWMiKSx0Lm1vZGlmaWVycz1be25hbWU6ImFwcGx5U3R5bGVzIixlbmFibGVkOiExfV0pLHsuLi50LC4uLmcodGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyxbdF0pfX1fc2VsZWN0TWVudUl0ZW0oe2tleTp0LHRhcmdldDplfSl7Y29uc3QgaT16LmZpbmQoIi5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIix0aGlzLl9tZW51KS5maWx0ZXIoKHQ9PmEodCkpKTtpLmxlbmd0aCYmYihpLGUsdD09PVRpLCFpLmluY2x1ZGVzKGUpKS5mb2N1cygpfXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPXFpLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyx0KTtpZigic3RyaW5nIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWVbdF0pdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkICIke3R9ImApO2VbdF0oKX19KSl9c3RhdGljIGNsZWFyTWVudXModCl7aWYoMj09PXQuYnV0dG9ufHwia2V5dXAiPT09dC50eXBlJiYiVGFiIiE9PXQua2V5KXJldHVybjtjb25zdCBlPXouZmluZChOaSk7Zm9yKGNvbnN0IGkgb2YgZSl7Y29uc3QgZT1xaS5nZXRJbnN0YW5jZShpKTtpZighZXx8ITE9PT1lLl9jb25maWcuYXV0b0Nsb3NlKWNvbnRpbnVlO2NvbnN0IG49dC5jb21wb3NlZFBhdGgoKSxzPW4uaW5jbHVkZXMoZS5fbWVudSk7aWYobi5pbmNsdWRlcyhlLl9lbGVtZW50KXx8Imluc2lkZSI9PT1lLl9jb25maWcuYXV0b0Nsb3NlJiYhc3x8Im91dHNpZGUiPT09ZS5fY29uZmlnLmF1dG9DbG9zZSYmcyljb250aW51ZTtpZihlLl9tZW51LmNvbnRhaW5zKHQudGFyZ2V0KSYmKCJrZXl1cCI9PT10LnR5cGUmJiJUYWIiPT09dC5rZXl8fC9pbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGZvcm0vaS50ZXN0KHQudGFyZ2V0LnRhZ05hbWUpKSljb250aW51ZTtjb25zdCBvPXtyZWxhdGVkVGFyZ2V0OmUuX2VsZW1lbnR9OyJjbGljayI9PT10LnR5cGUmJihvLmNsaWNrRXZlbnQ9dCksZS5fY29tcGxldGVIaWRlKG8pfX1zdGF0aWMgZGF0YUFwaUtleWRvd25IYW5kbGVyKHQpe2NvbnN0IGU9L2lucHV0fHRleHRhcmVhL2kudGVzdCh0LnRhcmdldC50YWdOYW1lKSxpPSJFc2NhcGUiPT09dC5rZXksbj1bRWksVGldLmluY2x1ZGVzKHQua2V5KTtpZighbiYmIWkpcmV0dXJuO2lmKGUmJiFpKXJldHVybjt0LnByZXZlbnREZWZhdWx0KCk7Y29uc3Qgcz10aGlzLm1hdGNoZXMoSWkpP3RoaXM6ei5wcmV2KHRoaXMsSWkpWzBdfHx6Lm5leHQodGhpcyxJaSlbMF18fHouZmluZE9uZShJaSx0LmRlbGVnYXRlVGFyZ2V0LnBhcmVudE5vZGUpLG89cWkuZ2V0T3JDcmVhdGVJbnN0YW5jZShzKTtpZihuKXJldHVybiB0LnN0b3BQcm9wYWdhdGlvbigpLG8uc2hvdygpLHZvaWQgby5fc2VsZWN0TWVudUl0ZW0odCk7by5faXNTaG93bigpJiYodC5zdG9wUHJvcGFnYXRpb24oKSxvLmhpZGUoKSxzLmZvY3VzKCkpfX1OLm9uKGRvY3VtZW50LFNpLElpLHFpLmRhdGFBcGlLZXlkb3duSGFuZGxlciksTi5vbihkb2N1bWVudCxTaSxQaSxxaS5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpLE4ub24oZG9jdW1lbnQsTGkscWkuY2xlYXJNZW51cyksTi5vbihkb2N1bWVudCxEaSxxaS5jbGVhck1lbnVzKSxOLm9uKGRvY3VtZW50LExpLElpLChmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCkscWkuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS50b2dnbGUoKX0pKSxtKHFpKTtjb25zdCBWaT0iYmFja2Ryb3AiLEtpPSJzaG93IixRaT1gbW91c2Vkb3duLmJzLiR7Vml9YCxYaT17Y2xhc3NOYW1lOiJtb2RhbC1iYWNrZHJvcCIsY2xpY2tDYWxsYmFjazpudWxsLGlzQW5pbWF0ZWQ6ITEsaXNWaXNpYmxlOiEwLHJvb3RFbGVtZW50OiJib2R5In0sWWk9e2NsYXNzTmFtZToic3RyaW5nIixjbGlja0NhbGxiYWNrOiIoZnVuY3Rpb258bnVsbCkiLGlzQW5pbWF0ZWQ6ImJvb2xlYW4iLGlzVmlzaWJsZToiYm9vbGVhbiIscm9vdEVsZW1lbnQ6IihlbGVtZW50fHN0cmluZykifTtjbGFzcyBVaSBleHRlbmRzIEh7Y29uc3RydWN0b3IodCl7c3VwZXIoKSx0aGlzLl9jb25maWc9dGhpcy5fZ2V0Q29uZmlnKHQpLHRoaXMuX2lzQXBwZW5kZWQ9ITEsdGhpcy5fZWxlbWVudD1udWxsfXN0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiBYaX1zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIFlpfXN0YXRpYyBnZXQgTkFNRSgpe3JldHVybiBWaX1zaG93KHQpe2lmKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKXJldHVybiB2b2lkIGcodCk7dGhpcy5fYXBwZW5kKCk7Y29uc3QgZT10aGlzLl9nZXRFbGVtZW50KCk7dGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQmJmQoZSksZS5jbGFzc0xpc3QuYWRkKEtpKSx0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgoKT0+e2codCl9KSl9aGlkZSh0KXt0aGlzLl9jb25maWcuaXNWaXNpYmxlPyh0aGlzLl9nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZShLaSksdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKCk9Pnt0aGlzLmRpc3Bvc2UoKSxnKHQpfSkpKTpnKHQpfWRpc3Bvc2UoKXt0aGlzLl9pc0FwcGVuZGVkJiYoTi5vZmYodGhpcy5fZWxlbWVudCxRaSksdGhpcy5fZWxlbWVudC5yZW1vdmUoKSx0aGlzLl9pc0FwcGVuZGVkPSExKX1fZ2V0RWxlbWVudCgpe2lmKCF0aGlzLl9lbGVtZW50KXtjb25zdCB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpO3QuY2xhc3NOYW1lPXRoaXMuX2NvbmZpZy5jbGFzc05hbWUsdGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQmJnQuY2xhc3NMaXN0LmFkZCgiZmFkZSIpLHRoaXMuX2VsZW1lbnQ9dH1yZXR1cm4gdGhpcy5fZWxlbWVudH1fY29uZmlnQWZ0ZXJNZXJnZSh0KXtyZXR1cm4gdC5yb290RWxlbWVudD1yKHQucm9vdEVsZW1lbnQpLHR9X2FwcGVuZCgpe2lmKHRoaXMuX2lzQXBwZW5kZWQpcmV0dXJuO2NvbnN0IHQ9dGhpcy5fZ2V0RWxlbWVudCgpO3RoaXMuX2NvbmZpZy5yb290RWxlbWVudC5hcHBlbmQodCksTi5vbih0LFFpLCgoKT0+e2codGhpcy5fY29uZmlnLmNsaWNrQ2FsbGJhY2spfSkpLHRoaXMuX2lzQXBwZW5kZWQ9ITB9X2VtdWxhdGVBbmltYXRpb24odCl7Xyh0LHRoaXMuX2dldEVsZW1lbnQoKSx0aGlzLl9jb25maWcuaXNBbmltYXRlZCl9fWNvbnN0IEdpPSIuYnMuZm9jdXN0cmFwIixKaT1gZm9jdXNpbiR7R2l9YCxaaT1ga2V5ZG93bi50YWIke0dpfWAsdG49ImJhY2t3YXJkIixlbj17YXV0b2ZvY3VzOiEwLHRyYXBFbGVtZW50Om51bGx9LG5uPXthdXRvZm9jdXM6ImJvb2xlYW4iLHRyYXBFbGVtZW50OiJlbGVtZW50In07Y2xhc3Mgc24gZXh0ZW5kcyBIe2NvbnN0cnVjdG9yKHQpe3N1cGVyKCksdGhpcy5fY29uZmlnPXRoaXMuX2dldENvbmZpZyh0KSx0aGlzLl9pc0FjdGl2ZT0hMSx0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uPW51bGx9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIGVufXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4gbm59c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuImZvY3VzdHJhcCJ9YWN0aXZhdGUoKXt0aGlzLl9pc0FjdGl2ZXx8KHRoaXMuX2NvbmZpZy5hdXRvZm9jdXMmJnRoaXMuX2NvbmZpZy50cmFwRWxlbWVudC5mb2N1cygpLE4ub2ZmKGRvY3VtZW50LEdpKSxOLm9uKGRvY3VtZW50LEppLCh0PT50aGlzLl9oYW5kbGVGb2N1c2luKHQpKSksTi5vbihkb2N1bWVudCxaaSwodD0+dGhpcy5faGFuZGxlS2V5ZG93bih0KSkpLHRoaXMuX2lzQWN0aXZlPSEwKX1kZWFjdGl2YXRlKCl7dGhpcy5faXNBY3RpdmUmJih0aGlzLl9pc0FjdGl2ZT0hMSxOLm9mZihkb2N1bWVudCxHaSkpfV9oYW5kbGVGb2N1c2luKHQpe2NvbnN0e3RyYXBFbGVtZW50OmV9PXRoaXMuX2NvbmZpZztpZih0LnRhcmdldD09PWRvY3VtZW50fHx0LnRhcmdldD09PWV8fGUuY29udGFpbnModC50YXJnZXQpKXJldHVybjtjb25zdCBpPXouZm9jdXNhYmxlQ2hpbGRyZW4oZSk7MD09PWkubGVuZ3RoP2UuZm9jdXMoKTp0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uPT09dG4/aVtpLmxlbmd0aC0xXS5mb2N1cygpOmlbMF0uZm9jdXMoKX1faGFuZGxlS2V5ZG93bih0KXsiVGFiIj09PXQua2V5JiYodGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbj10LnNoaWZ0S2V5P3RuOiJmb3J3YXJkIil9fWNvbnN0IG9uPSIuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wIixybj0iLnN0aWNreS10b3AiLGFuPSJwYWRkaW5nLXJpZ2h0Iixsbj0ibWFyZ2luLXJpZ2h0IjtjbGFzcyBjbntjb25zdHJ1Y3Rvcigpe3RoaXMuX2VsZW1lbnQ9ZG9jdW1lbnQuYm9keX1nZXRXaWR0aCgpe2NvbnN0IHQ9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO3JldHVybiBNYXRoLmFicyh3aW5kb3cuaW5uZXJXaWR0aC10KX1oaWRlKCl7Y29uc3QgdD10aGlzLmdldFdpZHRoKCk7dGhpcy5fZGlzYWJsZU92ZXJGbG93KCksdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCxhbiwoZT0+ZSt0KSksdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMob24sYW4sKGU9PmUrdCkpLHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHJuLGxuLChlPT5lLXQpKX1yZXNldCgpe3RoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwib3ZlcmZsb3ciKSx0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsYW4pLHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMob24sYW4pLHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMocm4sbG4pfWlzT3ZlcmZsb3dpbmcoKXtyZXR1cm4gdGhpcy5nZXRXaWR0aCgpPjB9X2Rpc2FibGVPdmVyRmxvdygpe3RoaXMuX3NhdmVJbml0aWFsQXR0cmlidXRlKHRoaXMuX2VsZW1lbnQsIm92ZXJmbG93IiksdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvdz0iaGlkZGVuIn1fc2V0RWxlbWVudEF0dHJpYnV0ZXModCxlLGkpe2NvbnN0IG49dGhpcy5nZXRXaWR0aCgpO3RoaXMuX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2sodCwodD0+e2lmKHQhPT10aGlzLl9lbGVtZW50JiZ3aW5kb3cuaW5uZXJXaWR0aD50LmNsaWVudFdpZHRoK24pcmV0dXJuO3RoaXMuX3NhdmVJbml0aWFsQXR0cmlidXRlKHQsZSk7Y29uc3Qgcz13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KS5nZXRQcm9wZXJ0eVZhbHVlKGUpO3Quc3R5bGUuc2V0UHJvcGVydHkoZSxgJHtpKE51bWJlci5wYXJzZUZsb2F0KHMpKX1weGApfSkpfV9zYXZlSW5pdGlhbEF0dHJpYnV0ZSh0LGUpe2NvbnN0IGk9dC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGUpO2kmJkYuc2V0RGF0YUF0dHJpYnV0ZSh0LGUsaSl9X3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModCxlKXt0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHQsKHQ9Pntjb25zdCBpPUYuZ2V0RGF0YUF0dHJpYnV0ZSh0LGUpO251bGwhPT1pPyhGLnJlbW92ZURhdGFBdHRyaWJ1dGUodCxlKSx0LnN0eWxlLnNldFByb3BlcnR5KGUsaSkpOnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoZSl9KSl9X2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2sodCxlKXtpZihvKHQpKWUodCk7ZWxzZSBmb3IoY29uc3QgaSBvZiB6LmZpbmQodCx0aGlzLl9lbGVtZW50KSllKGkpfX1jb25zdCBobj0iLmJzLm1vZGFsIixkbj1gaGlkZSR7aG59YCx1bj1gaGlkZVByZXZlbnRlZCR7aG59YCxmbj1gaGlkZGVuJHtobn1gLHBuPWBzaG93JHtobn1gLG1uPWBzaG93biR7aG59YCxnbj1gcmVzaXplJHtobn1gLF9uPWBjbGljay5kaXNtaXNzJHtobn1gLGJuPWBtb3VzZWRvd24uZGlzbWlzcyR7aG59YCx2bj1ga2V5ZG93bi5kaXNtaXNzJHtobn1gLHluPWBjbGljayR7aG59LmRhdGEtYXBpYCx3bj0ibW9kYWwtb3BlbiIsQW49InNob3ciLEVuPSJtb2RhbC1zdGF0aWMiLFRuPXtiYWNrZHJvcDohMCxmb2N1czohMCxrZXlib2FyZDohMH0sQ249e2JhY2tkcm9wOiIoYm9vbGVhbnxzdHJpbmcpIixmb2N1czoiYm9vbGVhbiIsa2V5Ym9hcmQ6ImJvb2xlYW4ifTtjbGFzcyBPbiBleHRlbmRzIFd7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpLHRoaXMuX2RpYWxvZz16LmZpbmRPbmUoIi5tb2RhbC1kaWFsb2ciLHRoaXMuX2VsZW1lbnQpLHRoaXMuX2JhY2tkcm9wPXRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpLHRoaXMuX2ZvY3VzdHJhcD10aGlzLl9pbml0aWFsaXplRm9jdXNUcmFwKCksdGhpcy5faXNTaG93bj0hMSx0aGlzLl9pc1RyYW5zaXRpb25pbmc9ITEsdGhpcy5fc2Nyb2xsQmFyPW5ldyBjbix0aGlzLl9hZGRFdmVudExpc3RlbmVycygpfXN0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiBUbn1zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIENufXN0YXRpYyBnZXQgTkFNRSgpe3JldHVybiJtb2RhbCJ9dG9nZ2xlKHQpe3JldHVybiB0aGlzLl9pc1Nob3duP3RoaXMuaGlkZSgpOnRoaXMuc2hvdyh0KX1zaG93KHQpe3RoaXMuX2lzU2hvd258fHRoaXMuX2lzVHJhbnNpdGlvbmluZ3x8Ti50cmlnZ2VyKHRoaXMuX2VsZW1lbnQscG4se3JlbGF0ZWRUYXJnZXQ6dH0pLmRlZmF1bHRQcmV2ZW50ZWR8fCh0aGlzLl9pc1Nob3duPSEwLHRoaXMuX2lzVHJhbnNpdGlvbmluZz0hMCx0aGlzLl9zY3JvbGxCYXIuaGlkZSgpLGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCh3biksdGhpcy5fYWRqdXN0RGlhbG9nKCksdGhpcy5fYmFja2Ryb3Auc2hvdygoKCk9PnRoaXMuX3Nob3dFbGVtZW50KHQpKSkpfWhpZGUoKXt0aGlzLl9pc1Nob3duJiYhdGhpcy5faXNUcmFuc2l0aW9uaW5nJiYoTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsZG4pLmRlZmF1bHRQcmV2ZW50ZWR8fCh0aGlzLl9pc1Nob3duPSExLHRoaXMuX2lzVHJhbnNpdGlvbmluZz0hMCx0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShBbiksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9PnRoaXMuX2hpZGVNb2RhbCgpKSx0aGlzLl9lbGVtZW50LHRoaXMuX2lzQW5pbWF0ZWQoKSkpKX1kaXNwb3NlKCl7Ti5vZmYod2luZG93LGhuKSxOLm9mZih0aGlzLl9kaWFsb2csaG4pLHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKSx0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpLHN1cGVyLmRpc3Bvc2UoKX1oYW5kbGVVcGRhdGUoKXt0aGlzLl9hZGp1c3REaWFsb2coKX1faW5pdGlhbGl6ZUJhY2tEcm9wKCl7cmV0dXJuIG5ldyBVaSh7aXNWaXNpYmxlOkJvb2xlYW4odGhpcy5fY29uZmlnLmJhY2tkcm9wKSxpc0FuaW1hdGVkOnRoaXMuX2lzQW5pbWF0ZWQoKX0pfV9pbml0aWFsaXplRm9jdXNUcmFwKCl7cmV0dXJuIG5ldyBzbih7dHJhcEVsZW1lbnQ6dGhpcy5fZWxlbWVudH0pfV9zaG93RWxlbWVudCh0KXtkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpfHxkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLl9lbGVtZW50KSx0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXk9ImJsb2NrIix0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgiYXJpYS1oaWRkZW4iKSx0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgiYXJpYS1tb2RhbCIsITApLHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCJyb2xlIiwiZGlhbG9nIiksdGhpcy5fZWxlbWVudC5zY3JvbGxUb3A9MDtjb25zdCBlPXouZmluZE9uZSgiLm1vZGFsLWJvZHkiLHRoaXMuX2RpYWxvZyk7ZSYmKGUuc2Nyb2xsVG9wPTApLGQodGhpcy5fZWxlbWVudCksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKEFuKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2NvbmZpZy5mb2N1cyYmdGhpcy5fZm9jdXN0cmFwLmFjdGl2YXRlKCksdGhpcy5faXNUcmFuc2l0aW9uaW5nPSExLE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LG1uLHtyZWxhdGVkVGFyZ2V0OnR9KX0pLHRoaXMuX2RpYWxvZyx0aGlzLl9pc0FuaW1hdGVkKCkpfV9hZGRFdmVudExpc3RlbmVycygpe04ub24odGhpcy5fZWxlbWVudCx2biwodD0+eyJFc2NhcGUiPT09dC5rZXkmJih0aGlzLl9jb25maWcua2V5Ym9hcmQ/dGhpcy5oaWRlKCk6dGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpKX0pKSxOLm9uKHdpbmRvdyxnbiwoKCk9Pnt0aGlzLl9pc1Nob3duJiYhdGhpcy5faXNUcmFuc2l0aW9uaW5nJiZ0aGlzLl9hZGp1c3REaWFsb2coKX0pKSxOLm9uKHRoaXMuX2VsZW1lbnQsYm4sKHQ9PntOLm9uZSh0aGlzLl9lbGVtZW50LF9uLChlPT57dGhpcy5fZWxlbWVudD09PXQudGFyZ2V0JiZ0aGlzLl9lbGVtZW50PT09ZS50YXJnZXQmJigic3RhdGljIiE9PXRoaXMuX2NvbmZpZy5iYWNrZHJvcD90aGlzLl9jb25maWcuYmFja2Ryb3AmJnRoaXMuaGlkZSgpOnRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKSl9KSl9KSl9X2hpZGVNb2RhbCgpe3RoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheT0ibm9uZSIsdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoImFyaWEtaGlkZGVuIiwhMCksdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoImFyaWEtbW9kYWwiKSx0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgicm9sZSIpLHRoaXMuX2lzVHJhbnNpdGlvbmluZz0hMSx0aGlzLl9iYWNrZHJvcC5oaWRlKCgoKT0+e2RvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSh3biksdGhpcy5fcmVzZXRBZGp1c3RtZW50cygpLHRoaXMuX3Njcm9sbEJhci5yZXNldCgpLE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LGZuKX0pKX1faXNBbmltYXRlZCgpe3JldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygiZmFkZSIpfV90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCl7aWYoTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsdW4pLmRlZmF1bHRQcmV2ZW50ZWQpcmV0dXJuO2NvbnN0IHQ9dGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQ+ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxlPXRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZOyJoaWRkZW4iPT09ZXx8dGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoRW4pfHwodHx8KHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZPSJoaWRkZW4iKSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoRW4pLHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCgpPT57dGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKEVuKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZPWV9KSx0aGlzLl9kaWFsb2cpfSksdGhpcy5fZGlhbG9nKSx0aGlzLl9lbGVtZW50LmZvY3VzKCkpfV9hZGp1c3REaWFsb2coKXtjb25zdCB0PXRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0PmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsZT10aGlzLl9zY3JvbGxCYXIuZ2V0V2lkdGgoKSxpPWU+MDtpZihpJiYhdCl7Y29uc3QgdD1wKCk/InBhZGRpbmdMZWZ0IjoicGFkZGluZ1JpZ2h0Ijt0aGlzLl9lbGVtZW50LnN0eWxlW3RdPWAke2V9cHhgfWlmKCFpJiZ0KXtjb25zdCB0PXAoKT8icGFkZGluZ1JpZ2h0IjoicGFkZGluZ0xlZnQiO3RoaXMuX2VsZW1lbnQuc3R5bGVbdF09YCR7ZX1weGB9fV9yZXNldEFkanVzdG1lbnRzKCl7dGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdD0iIix0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodD0iIn1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQsZSl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBpPU9uLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyx0KTtpZigic3RyaW5nIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWlbdF0pdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkICIke3R9ImApO2lbdF0oZSl9fSkpfX1OLm9uKGRvY3VtZW50LHluLCdbZGF0YS1icy10b2dnbGU9Im1vZGFsIl0nLChmdW5jdGlvbih0KXtjb25zdCBlPXouZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKTtbIkEiLCJBUkVBIl0uaW5jbHVkZXModGhpcy50YWdOYW1lKSYmdC5wcmV2ZW50RGVmYXVsdCgpLE4ub25lKGUscG4sKHQ9Pnt0LmRlZmF1bHRQcmV2ZW50ZWR8fE4ub25lKGUsZm4sKCgpPT57YSh0aGlzKSYmdGhpcy5mb2N1cygpfSkpfSkpO2NvbnN0IGk9ei5maW5kT25lKCIubW9kYWwuc2hvdyIpO2kmJk9uLmdldEluc3RhbmNlKGkpLmhpZGUoKSxPbi5nZXRPckNyZWF0ZUluc3RhbmNlKGUpLnRvZ2dsZSh0aGlzKX0pKSxSKE9uKSxtKE9uKTtjb25zdCB4bj0iLmJzLm9mZmNhbnZhcyIsa249Ii5kYXRhLWFwaSIsTG49YGxvYWQke3hufSR7a259YCxTbj0ic2hvdyIsRG49InNob3dpbmciLCRuPSJoaWRpbmciLEluPSIub2ZmY2FudmFzLnNob3ciLE5uPWBzaG93JHt4bn1gLFBuPWBzaG93biR7eG59YCxqbj1gaGlkZSR7eG59YCxNbj1gaGlkZVByZXZlbnRlZCR7eG59YCxGbj1gaGlkZGVuJHt4bn1gLEhuPWByZXNpemUke3hufWAsV249YGNsaWNrJHt4bn0ke2tufWAsQm49YGtleWRvd24uZGlzbWlzcyR7eG59YCx6bj17YmFja2Ryb3A6ITAsa2V5Ym9hcmQ6ITAsc2Nyb2xsOiExfSxSbj17YmFja2Ryb3A6Iihib29sZWFufHN0cmluZykiLGtleWJvYXJkOiJib29sZWFuIixzY3JvbGw6ImJvb2xlYW4ifTtjbGFzcyBxbiBleHRlbmRzIFd7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpLHRoaXMuX2lzU2hvd249ITEsdGhpcy5fYmFja2Ryb3A9dGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKCksdGhpcy5fZm9jdXN0cmFwPXRoaXMuX2luaXRpYWxpemVGb2N1c1RyYXAoKSx0aGlzLl9hZGRFdmVudExpc3RlbmVycygpfXN0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiB6bn1zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIFJufXN0YXRpYyBnZXQgTkFNRSgpe3JldHVybiJvZmZjYW52YXMifXRvZ2dsZSh0KXtyZXR1cm4gdGhpcy5faXNTaG93bj90aGlzLmhpZGUoKTp0aGlzLnNob3codCl9c2hvdyh0KXt0aGlzLl9pc1Nob3dufHxOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxObix7cmVsYXRlZFRhcmdldDp0fSkuZGVmYXVsdFByZXZlbnRlZHx8KHRoaXMuX2lzU2hvd249ITAsdGhpcy5fYmFja2Ryb3Auc2hvdygpLHRoaXMuX2NvbmZpZy5zY3JvbGx8fChuZXcgY24pLmhpZGUoKSx0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgiYXJpYS1tb2RhbCIsITApLHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCJyb2xlIiwiZGlhbG9nIiksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKERuKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2NvbmZpZy5zY3JvbGwmJiF0aGlzLl9jb25maWcuYmFja2Ryb3B8fHRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChTbiksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKERuKSxOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxQbix7cmVsYXRlZFRhcmdldDp0fSl9KSx0aGlzLl9lbGVtZW50LCEwKSl9aGlkZSgpe3RoaXMuX2lzU2hvd24mJihOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxqbikuZGVmYXVsdFByZXZlbnRlZHx8KHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKCksdGhpcy5fZWxlbWVudC5ibHVyKCksdGhpcy5faXNTaG93bj0hMSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoJG4pLHRoaXMuX2JhY2tkcm9wLmhpZGUoKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShTbiwkbiksdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoImFyaWEtbW9kYWwiKSx0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgicm9sZSIpLHRoaXMuX2NvbmZpZy5zY3JvbGx8fChuZXcgY24pLnJlc2V0KCksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsRm4pfSksdGhpcy5fZWxlbWVudCwhMCkpKX1kaXNwb3NlKCl7dGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpLHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKCksc3VwZXIuZGlzcG9zZSgpfV9pbml0aWFsaXplQmFja0Ryb3AoKXtjb25zdCB0PUJvb2xlYW4odGhpcy5fY29uZmlnLmJhY2tkcm9wKTtyZXR1cm4gbmV3IFVpKHtjbGFzc05hbWU6Im9mZmNhbnZhcy1iYWNrZHJvcCIsaXNWaXNpYmxlOnQsaXNBbmltYXRlZDohMCxyb290RWxlbWVudDp0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsY2xpY2tDYWxsYmFjazp0PygpPT57InN0YXRpYyIhPT10aGlzLl9jb25maWcuYmFja2Ryb3A/dGhpcy5oaWRlKCk6Ti50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsTW4pfTpudWxsfSl9X2luaXRpYWxpemVGb2N1c1RyYXAoKXtyZXR1cm4gbmV3IHNuKHt0cmFwRWxlbWVudDp0aGlzLl9lbGVtZW50fSl9X2FkZEV2ZW50TGlzdGVuZXJzKCl7Ti5vbih0aGlzLl9lbGVtZW50LEJuLCh0PT57IkVzY2FwZSI9PT10LmtleSYmKHRoaXMuX2NvbmZpZy5rZXlib2FyZD90aGlzLmhpZGUoKTpOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxNbikpfSkpfXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPXFuLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyx0KTtpZigic3RyaW5nIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWVbdF18fHQuc3RhcnRzV2l0aCgiXyIpfHwiY29uc3RydWN0b3IiPT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgIiR7dH0iYCk7ZVt0XSh0aGlzKX19KSl9fU4ub24oZG9jdW1lbnQsV24sJ1tkYXRhLWJzLXRvZ2dsZT0ib2ZmY2FudmFzIl0nLChmdW5jdGlvbih0KXtjb25zdCBlPXouZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKTtpZihbIkEiLCJBUkVBIl0uaW5jbHVkZXModGhpcy50YWdOYW1lKSYmdC5wcmV2ZW50RGVmYXVsdCgpLGwodGhpcykpcmV0dXJuO04ub25lKGUsRm4sKCgpPT57YSh0aGlzKSYmdGhpcy5mb2N1cygpfSkpO2NvbnN0IGk9ei5maW5kT25lKEluKTtpJiZpIT09ZSYmcW4uZ2V0SW5zdGFuY2UoaSkuaGlkZSgpLHFuLmdldE9yQ3JlYXRlSW5zdGFuY2UoZSkudG9nZ2xlKHRoaXMpfSkpLE4ub24od2luZG93LExuLCgoKT0+e2Zvcihjb25zdCB0IG9mIHouZmluZChJbikpcW4uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0KS5zaG93KCl9KSksTi5vbih3aW5kb3csSG4sKCgpPT57Zm9yKGNvbnN0IHQgb2Ygei5maW5kKCJbYXJpYS1tb2RhbF1bY2xhc3MqPXNob3ddW2NsYXNzKj1vZmZjYW52YXMtXSIpKSJmaXhlZCIhPT1nZXRDb21wdXRlZFN0eWxlKHQpLnBvc2l0aW9uJiZxbi5nZXRPckNyZWF0ZUluc3RhbmNlKHQpLmhpZGUoKX0pKSxSKHFuKSxtKHFuKTtjb25zdCBWbj17IioiOlsiY2xhc3MiLCJkaXIiLCJpZCIsImxhbmciLCJyb2xlIiwvXmFyaWEtW1x3LV0qJC9pXSxhOlsidGFyZ2V0IiwiaHJlZiIsInRpdGxlIiwicmVsIl0sYXJlYTpbXSxiOltdLGJyOltdLGNvbDpbXSxjb2RlOltdLGRkOltdLGRpdjpbXSxkbDpbXSxkdDpbXSxlbTpbXSxocjpbXSxoMTpbXSxoMjpbXSxoMzpbXSxoNDpbXSxoNTpbXSxoNjpbXSxpOltdLGltZzpbInNyYyIsInNyY3NldCIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiXSxsaTpbXSxvbDpbXSxwOltdLHByZTpbXSxzOltdLHNtYWxsOltdLHNwYW46W10sc3ViOltdLHN1cDpbXSxzdHJvbmc6W10sdTpbXSx1bDpbXX0sS249bmV3IFNldChbImJhY2tncm91bmQiLCJjaXRlIiwiaHJlZiIsIml0ZW10eXBlIiwibG9uZ2Rlc2MiLCJwb3N0ZXIiLCJzcmMiLCJ4bGluazpocmVmIl0pLFFuPS9eKD8hamF2YXNjcmlwdDopKD86W2EtejAtOSsuLV0rOnxbXiY6Lz8jXSooPzpbLz8jXXwkKSkvaSxYbj0odCxlKT0+e2NvbnN0IGk9dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybiBlLmluY2x1ZGVzKGkpPyFLbi5oYXMoaSl8fEJvb2xlYW4oUW4udGVzdCh0Lm5vZGVWYWx1ZSkpOmUuZmlsdGVyKCh0PT50IGluc3RhbmNlb2YgUmVnRXhwKSkuc29tZSgodD0+dC50ZXN0KGkpKSl9LFluPXthbGxvd0xpc3Q6Vm4sY29udGVudDp7fSxleHRyYUNsYXNzOiIiLGh0bWw6ITEsc2FuaXRpemU6ITAsc2FuaXRpemVGbjpudWxsLHRlbXBsYXRlOiI8ZGl2PjwvZGl2PiJ9LFVuPXthbGxvd0xpc3Q6Im9iamVjdCIsY29udGVudDoib2JqZWN0IixleHRyYUNsYXNzOiIoc3RyaW5nfGZ1bmN0aW9uKSIsaHRtbDoiYm9vbGVhbiIsc2FuaXRpemU6ImJvb2xlYW4iLHNhbml0aXplRm46IihudWxsfGZ1bmN0aW9uKSIsdGVtcGxhdGU6InN0cmluZyJ9LEduPXtlbnRyeToiKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9ufG51bGwpIixzZWxlY3RvcjoiKHN0cmluZ3xlbGVtZW50KSJ9O2NsYXNzIEpuIGV4dGVuZHMgSHtjb25zdHJ1Y3Rvcih0KXtzdXBlcigpLHRoaXMuX2NvbmZpZz10aGlzLl9nZXRDb25maWcodCl9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIFlufXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4gVW59c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuIlRlbXBsYXRlRmFjdG9yeSJ9Z2V0Q29udGVudCgpe3JldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2NvbmZpZy5jb250ZW50KS5tYXAoKHQ9PnRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHQpKSkuZmlsdGVyKEJvb2xlYW4pfWhhc0NvbnRlbnQoKXtyZXR1cm4gdGhpcy5nZXRDb250ZW50KCkubGVuZ3RoPjB9Y2hhbmdlQ29udGVudCh0KXtyZXR1cm4gdGhpcy5fY2hlY2tDb250ZW50KHQpLHRoaXMuX2NvbmZpZy5jb250ZW50PXsuLi50aGlzLl9jb25maWcuY29udGVudCwuLi50fSx0aGlzfXRvSHRtbCgpe2NvbnN0IHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2Iik7dC5pbm5lckhUTUw9dGhpcy5fbWF5YmVTYW5pdGl6ZSh0aGlzLl9jb25maWcudGVtcGxhdGUpO2Zvcihjb25zdFtlLGldb2YgT2JqZWN0LmVudHJpZXModGhpcy5fY29uZmlnLmNvbnRlbnQpKXRoaXMuX3NldENvbnRlbnQodCxpLGUpO2NvbnN0IGU9dC5jaGlsZHJlblswXSxpPXRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5leHRyYUNsYXNzKTtyZXR1cm4gaSYmZS5jbGFzc0xpc3QuYWRkKC4uLmkuc3BsaXQoIiAiKSksZX1fdHlwZUNoZWNrQ29uZmlnKHQpe3N1cGVyLl90eXBlQ2hlY2tDb25maWcodCksdGhpcy5fY2hlY2tDb250ZW50KHQuY29udGVudCl9X2NoZWNrQ29udGVudCh0KXtmb3IoY29uc3RbZSxpXW9mIE9iamVjdC5lbnRyaWVzKHQpKXN1cGVyLl90eXBlQ2hlY2tDb25maWcoe3NlbGVjdG9yOmUsZW50cnk6aX0sR24pfV9zZXRDb250ZW50KHQsZSxpKXtjb25zdCBuPXouZmluZE9uZShpLHQpO24mJigoZT10aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihlKSk/byhlKT90aGlzLl9wdXRFbGVtZW50SW5UZW1wbGF0ZShyKGUpLG4pOnRoaXMuX2NvbmZpZy5odG1sP24uaW5uZXJIVE1MPXRoaXMuX21heWJlU2FuaXRpemUoZSk6bi50ZXh0Q29udGVudD1lOm4ucmVtb3ZlKCkpfV9tYXliZVNhbml0aXplKHQpe3JldHVybiB0aGlzLl9jb25maWcuc2FuaXRpemU/ZnVuY3Rpb24odCxlLGkpe2lmKCF0Lmxlbmd0aClyZXR1cm4gdDtpZihpJiYiZnVuY3Rpb24iPT10eXBlb2YgaSlyZXR1cm4gaSh0KTtjb25zdCBuPShuZXcgd2luZG93LkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKHQsInRleHQvaHRtbCIpLHM9W10uY29uY2F0KC4uLm4uYm9keS5xdWVyeVNlbGVjdG9yQWxsKCIqIikpO2Zvcihjb25zdCB0IG9mIHMpe2NvbnN0IGk9dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO2lmKCFPYmplY3Qua2V5cyhlKS5pbmNsdWRlcyhpKSl7dC5yZW1vdmUoKTtjb250aW51ZX1jb25zdCBuPVtdLmNvbmNhdCguLi50LmF0dHJpYnV0ZXMpLHM9W10uY29uY2F0KGVbIioiXXx8W10sZVtpXXx8W10pO2Zvcihjb25zdCBlIG9mIG4pWG4oZSxzKXx8dC5yZW1vdmVBdHRyaWJ1dGUoZS5ub2RlTmFtZSl9cmV0dXJuIG4uYm9keS5pbm5lckhUTUx9KHQsdGhpcy5fY29uZmlnLmFsbG93TGlzdCx0aGlzLl9jb25maWcuc2FuaXRpemVGbik6dH1fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odCl7cmV0dXJuIGcodCxbdGhpc10pfV9wdXRFbGVtZW50SW5UZW1wbGF0ZSh0LGUpe2lmKHRoaXMuX2NvbmZpZy5odG1sKXJldHVybiBlLmlubmVySFRNTD0iIix2b2lkIGUuYXBwZW5kKHQpO2UudGV4dENvbnRlbnQ9dC50ZXh0Q29udGVudH19Y29uc3QgWm49bmV3IFNldChbInNhbml0aXplIiwiYWxsb3dMaXN0Iiwic2FuaXRpemVGbiJdKSx0cz0iZmFkZSIsZXM9InNob3ciLGlzPSIubW9kYWwiLG5zPSJoaWRlLmJzLm1vZGFsIixzcz0iaG92ZXIiLG9zPSJmb2N1cyIscnM9e0FVVE86ImF1dG8iLFRPUDoidG9wIixSSUdIVDpwKCk/ImxlZnQiOiJyaWdodCIsQk9UVE9NOiJib3R0b20iLExFRlQ6cCgpPyJyaWdodCI6ImxlZnQifSxhcz17YWxsb3dMaXN0OlZuLGFuaW1hdGlvbjohMCxib3VuZGFyeToiY2xpcHBpbmdQYXJlbnRzIixjb250YWluZXI6ITEsY3VzdG9tQ2xhc3M6IiIsZGVsYXk6MCxmYWxsYmFja1BsYWNlbWVudHM6WyJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiXSxodG1sOiExLG9mZnNldDpbMCw2XSxwbGFjZW1lbnQ6InRvcCIscG9wcGVyQ29uZmlnOm51bGwsc2FuaXRpemU6ITAsc2FuaXRpemVGbjpudWxsLHNlbGVjdG9yOiExLHRlbXBsYXRlOic8ZGl2IGNsYXNzPSJ0b29sdGlwIiByb2xlPSJ0b29sdGlwIj48ZGl2IGNsYXNzPSJ0b29sdGlwLWFycm93Ij48L2Rpdj48ZGl2IGNsYXNzPSJ0b29sdGlwLWlubmVyIj48L2Rpdj48L2Rpdj4nLHRpdGxlOiIiLHRyaWdnZXI6ImhvdmVyIGZvY3VzIn0sbHM9e2FsbG93TGlzdDoib2JqZWN0IixhbmltYXRpb246ImJvb2xlYW4iLGJvdW5kYXJ5OiIoc3RyaW5nfGVsZW1lbnQpIixjb250YWluZXI6IihzdHJpbmd8ZWxlbWVudHxib29sZWFuKSIsY3VzdG9tQ2xhc3M6IihzdHJpbmd8ZnVuY3Rpb24pIixkZWxheToiKG51bWJlcnxvYmplY3QpIixmYWxsYmFja1BsYWNlbWVudHM6ImFycmF5IixodG1sOiJib29sZWFuIixvZmZzZXQ6IihhcnJheXxzdHJpbmd8ZnVuY3Rpb24pIixwbGFjZW1lbnQ6IihzdHJpbmd8ZnVuY3Rpb24pIixwb3BwZXJDb25maWc6IihudWxsfG9iamVjdHxmdW5jdGlvbikiLHNhbml0aXplOiJib29sZWFuIixzYW5pdGl6ZUZuOiIobnVsbHxmdW5jdGlvbikiLHNlbGVjdG9yOiIoc3RyaW5nfGJvb2xlYW4pIix0ZW1wbGF0ZToic3RyaW5nIix0aXRsZToiKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKSIsdHJpZ2dlcjoic3RyaW5nIn07Y2xhc3MgY3MgZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKHQsZSl7aWYodm9pZCAwPT09dmkpdGhyb3cgbmV3IFR5cGVFcnJvcigiQm9vdHN0cmFwJ3MgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZykiKTtzdXBlcih0LGUpLHRoaXMuX2lzRW5hYmxlZD0hMCx0aGlzLl90aW1lb3V0PTAsdGhpcy5faXNIb3ZlcmVkPW51bGwsdGhpcy5fYWN0aXZlVHJpZ2dlcj17fSx0aGlzLl9wb3BwZXI9bnVsbCx0aGlzLl90ZW1wbGF0ZUZhY3Rvcnk9bnVsbCx0aGlzLl9uZXdDb250ZW50PW51bGwsdGhpcy50aXA9bnVsbCx0aGlzLl9zZXRMaXN0ZW5lcnMoKSx0aGlzLl9jb25maWcuc2VsZWN0b3J8fHRoaXMuX2ZpeFRpdGxlKCl9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIGFzfXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4gbHN9c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuInRvb2x0aXAifWVuYWJsZSgpe3RoaXMuX2lzRW5hYmxlZD0hMH1kaXNhYmxlKCl7dGhpcy5faXNFbmFibGVkPSExfXRvZ2dsZUVuYWJsZWQoKXt0aGlzLl9pc0VuYWJsZWQ9IXRoaXMuX2lzRW5hYmxlZH10b2dnbGUoKXt0aGlzLl9pc0VuYWJsZWQmJih0aGlzLl9hY3RpdmVUcmlnZ2VyLmNsaWNrPSF0aGlzLl9hY3RpdmVUcmlnZ2VyLmNsaWNrLHRoaXMuX2lzU2hvd24oKT90aGlzLl9sZWF2ZSgpOnRoaXMuX2VudGVyKCkpfWRpc3Bvc2UoKXtjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCksTi5vZmYodGhpcy5fZWxlbWVudC5jbG9zZXN0KGlzKSxucyx0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKSx0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgiZGF0YS1icy1vcmlnaW5hbC10aXRsZSIpJiZ0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgidGl0bGUiLHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCJkYXRhLWJzLW9yaWdpbmFsLXRpdGxlIikpLHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKSxzdXBlci5kaXNwb3NlKCl9c2hvdygpe2lmKCJub25lIj09PXRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSl0aHJvdyBuZXcgRXJyb3IoIlBsZWFzZSB1c2Ugc2hvdyBvbiB2aXNpYmxlIGVsZW1lbnRzIik7aWYoIXRoaXMuX2lzV2l0aENvbnRlbnQoKXx8IXRoaXMuX2lzRW5hYmxlZClyZXR1cm47Y29uc3QgdD1OLnRyaWdnZXIodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZSgic2hvdyIpKSxlPShjKHRoaXMuX2VsZW1lbnQpfHx0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5jb250YWlucyh0aGlzLl9lbGVtZW50KTtpZih0LmRlZmF1bHRQcmV2ZW50ZWR8fCFlKXJldHVybjt0aGlzLl9kaXNwb3NlUG9wcGVyKCk7Y29uc3QgaT10aGlzLl9nZXRUaXBFbGVtZW50KCk7dGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoImFyaWEtZGVzY3JpYmVkYnkiLGkuZ2V0QXR0cmlidXRlKCJpZCIpKTtjb25zdHtjb250YWluZXI6bn09dGhpcy5fY29uZmlnO2lmKHRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy50aXApfHwobi5hcHBlbmQoaSksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoImluc2VydGVkIikpKSx0aGlzLl9wb3BwZXI9dGhpcy5fY3JlYXRlUG9wcGVyKGkpLGkuY2xhc3NMaXN0LmFkZChlcyksIm9udG91Y2hzdGFydCJpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpZm9yKGNvbnN0IHQgb2ZbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpTi5vbih0LCJtb3VzZW92ZXIiLGgpO3RoaXMuX3F1ZXVlQ2FsbGJhY2soKCgpPT57Ti50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoInNob3duIikpLCExPT09dGhpcy5faXNIb3ZlcmVkJiZ0aGlzLl9sZWF2ZSgpLHRoaXMuX2lzSG92ZXJlZD0hMX0pLHRoaXMudGlwLHRoaXMuX2lzQW5pbWF0ZWQoKSl9aGlkZSgpe2lmKHRoaXMuX2lzU2hvd24oKSYmIU4udHJpZ2dlcih0aGlzLl9lbGVtZW50LHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKCJoaWRlIikpLmRlZmF1bHRQcmV2ZW50ZWQpe2lmKHRoaXMuX2dldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKGVzKSwib250b3VjaHN0YXJ0ImluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClmb3IoY29uc3QgdCBvZltdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSlOLm9mZih0LCJtb3VzZW92ZXIiLGgpO3RoaXMuX2FjdGl2ZVRyaWdnZXIuY2xpY2s9ITEsdGhpcy5fYWN0aXZlVHJpZ2dlcltvc109ITEsdGhpcy5fYWN0aXZlVHJpZ2dlcltzc109ITEsdGhpcy5faXNIb3ZlcmVkPW51bGwsdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9Pnt0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCl8fCh0aGlzLl9pc0hvdmVyZWR8fHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKSx0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgiYXJpYS1kZXNjcmliZWRieSIpLE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKCJoaWRkZW4iKSkpfSksdGhpcy50aXAsdGhpcy5faXNBbmltYXRlZCgpKX19dXBkYXRlKCl7dGhpcy5fcG9wcGVyJiZ0aGlzLl9wb3BwZXIudXBkYXRlKCl9X2lzV2l0aENvbnRlbnQoKXtyZXR1cm4gQm9vbGVhbih0aGlzLl9nZXRUaXRsZSgpKX1fZ2V0VGlwRWxlbWVudCgpe3JldHVybiB0aGlzLnRpcHx8KHRoaXMudGlwPXRoaXMuX2NyZWF0ZVRpcEVsZW1lbnQodGhpcy5fbmV3Q29udGVudHx8dGhpcy5fZ2V0Q29udGVudEZvclRlbXBsYXRlKCkpKSx0aGlzLnRpcH1fY3JlYXRlVGlwRWxlbWVudCh0KXtjb25zdCBlPXRoaXMuX2dldFRlbXBsYXRlRmFjdG9yeSh0KS50b0h0bWwoKTtpZighZSlyZXR1cm4gbnVsbDtlLmNsYXNzTGlzdC5yZW1vdmUodHMsZXMpLGUuY2xhc3NMaXN0LmFkZChgYnMtJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUV9LWF1dG9gKTtjb25zdCBpPSh0PT57ZG97dCs9TWF0aC5mbG9vcigxZTYqTWF0aC5yYW5kb20oKSl9d2hpbGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCkpO3JldHVybiB0fSkodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKS50b1N0cmluZygpO3JldHVybiBlLnNldEF0dHJpYnV0ZSgiaWQiLGkpLHRoaXMuX2lzQW5pbWF0ZWQoKSYmZS5jbGFzc0xpc3QuYWRkKHRzKSxlfXNldENvbnRlbnQodCl7dGhpcy5fbmV3Q29udGVudD10LHRoaXMuX2lzU2hvd24oKSYmKHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKSx0aGlzLnNob3coKSl9X2dldFRlbXBsYXRlRmFjdG9yeSh0KXtyZXR1cm4gdGhpcy5fdGVtcGxhdGVGYWN0b3J5P3RoaXMuX3RlbXBsYXRlRmFjdG9yeS5jaGFuZ2VDb250ZW50KHQpOnRoaXMuX3RlbXBsYXRlRmFjdG9yeT1uZXcgSm4oey4uLnRoaXMuX2NvbmZpZyxjb250ZW50OnQsZXh0cmFDbGFzczp0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuY3VzdG9tQ2xhc3MpfSksdGhpcy5fdGVtcGxhdGVGYWN0b3J5fV9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKXtyZXR1cm57Ii50b29sdGlwLWlubmVyIjp0aGlzLl9nZXRUaXRsZSgpfX1fZ2V0VGl0bGUoKXtyZXR1cm4gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLnRpdGxlKXx8dGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoImRhdGEtYnMtb3JpZ2luYWwtdGl0bGUiKX1faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KHQpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yLmdldE9yQ3JlYXRlSW5zdGFuY2UodC5kZWxlZ2F0ZVRhcmdldCx0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKX1faXNBbmltYXRlZCgpe3JldHVybiB0aGlzLl9jb25maWcuYW5pbWF0aW9ufHx0aGlzLnRpcCYmdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKHRzKX1faXNTaG93bigpe3JldHVybiB0aGlzLnRpcCYmdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKGVzKX1fY3JlYXRlUG9wcGVyKHQpe2NvbnN0IGU9Zyh0aGlzLl9jb25maWcucGxhY2VtZW50LFt0aGlzLHQsdGhpcy5fZWxlbWVudF0pLGk9cnNbZS50b1VwcGVyQ2FzZSgpXTtyZXR1cm4gYmkodGhpcy5fZWxlbWVudCx0LHRoaXMuX2dldFBvcHBlckNvbmZpZyhpKSl9X2dldE9mZnNldCgpe2NvbnN0e29mZnNldDp0fT10aGlzLl9jb25maWc7cmV0dXJuInN0cmluZyI9PXR5cGVvZiB0P3Quc3BsaXQoIiwiKS5tYXAoKHQ9Pk51bWJlci5wYXJzZUludCh0LDEwKSkpOiJmdW5jdGlvbiI9PXR5cGVvZiB0P2U9PnQoZSx0aGlzLl9lbGVtZW50KTp0fV9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0KXtyZXR1cm4gZyh0LFt0aGlzLl9lbGVtZW50XSl9X2dldFBvcHBlckNvbmZpZyh0KXtjb25zdCBlPXtwbGFjZW1lbnQ6dCxtb2RpZmllcnM6W3tuYW1lOiJmbGlwIixvcHRpb25zOntmYWxsYmFja1BsYWNlbWVudHM6dGhpcy5fY29uZmlnLmZhbGxiYWNrUGxhY2VtZW50c319LHtuYW1lOiJvZmZzZXQiLG9wdGlvbnM6e29mZnNldDp0aGlzLl9nZXRPZmZzZXQoKX19LHtuYW1lOiJwcmV2ZW50T3ZlcmZsb3ciLG9wdGlvbnM6e2JvdW5kYXJ5OnRoaXMuX2NvbmZpZy5ib3VuZGFyeX19LHtuYW1lOiJhcnJvdyIsb3B0aW9uczp7ZWxlbWVudDpgLiR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hcnJvd2B9fSx7bmFtZToicHJlU2V0UGxhY2VtZW50IixlbmFibGVkOiEwLHBoYXNlOiJiZWZvcmVNYWluIixmbjp0PT57dGhpcy5fZ2V0VGlwRWxlbWVudCgpLnNldEF0dHJpYnV0ZSgiZGF0YS1wb3BwZXItcGxhY2VtZW50Iix0LnN0YXRlLnBsYWNlbWVudCl9fV19O3JldHVybnsuLi5lLC4uLmcodGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyxbZV0pfX1fc2V0TGlzdGVuZXJzKCl7Y29uc3QgdD10aGlzLl9jb25maWcudHJpZ2dlci5zcGxpdCgiICIpO2Zvcihjb25zdCBlIG9mIHQpaWYoImNsaWNrIj09PWUpTi5vbih0aGlzLl9lbGVtZW50LHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKCJjbGljayIpLHRoaXMuX2NvbmZpZy5zZWxlY3RvciwodD0+e3RoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldCh0KS50b2dnbGUoKX0pKTtlbHNlIGlmKCJtYW51YWwiIT09ZSl7Y29uc3QgdD1lPT09c3M/dGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoIm1vdXNlZW50ZXIiKTp0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZSgiZm9jdXNpbiIpLGk9ZT09PXNzP3RoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKCJtb3VzZWxlYXZlIik6dGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoImZvY3Vzb3V0Iik7Ti5vbih0aGlzLl9lbGVtZW50LHQsdGhpcy5fY29uZmlnLnNlbGVjdG9yLCh0PT57Y29uc3QgZT10aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQodCk7ZS5fYWN0aXZlVHJpZ2dlclsiZm9jdXNpbiI9PT10LnR5cGU/b3M6c3NdPSEwLGUuX2VudGVyKCl9KSksTi5vbih0aGlzLl9lbGVtZW50LGksdGhpcy5fY29uZmlnLnNlbGVjdG9yLCh0PT57Y29uc3QgZT10aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQodCk7ZS5fYWN0aXZlVHJpZ2dlclsiZm9jdXNvdXQiPT09dC50eXBlP29zOnNzXT1lLl9lbGVtZW50LmNvbnRhaW5zKHQucmVsYXRlZFRhcmdldCksZS5fbGVhdmUoKX0pKX10aGlzLl9oaWRlTW9kYWxIYW5kbGVyPSgpPT57dGhpcy5fZWxlbWVudCYmdGhpcy5oaWRlKCl9LE4ub24odGhpcy5fZWxlbWVudC5jbG9zZXN0KGlzKSxucyx0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKX1fZml4VGl0bGUoKXtjb25zdCB0PXRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCJ0aXRsZSIpO3QmJih0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgiYXJpYS1sYWJlbCIpfHx0aGlzLl9lbGVtZW50LnRleHRDb250ZW50LnRyaW0oKXx8dGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoImFyaWEtbGFiZWwiLHQpLHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCJkYXRhLWJzLW9yaWdpbmFsLXRpdGxlIix0KSx0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgidGl0bGUiKSl9X2VudGVyKCl7dGhpcy5faXNTaG93bigpfHx0aGlzLl9pc0hvdmVyZWQ/dGhpcy5faXNIb3ZlcmVkPSEwOih0aGlzLl9pc0hvdmVyZWQ9ITAsdGhpcy5fc2V0VGltZW91dCgoKCk9Pnt0aGlzLl9pc0hvdmVyZWQmJnRoaXMuc2hvdygpfSksdGhpcy5fY29uZmlnLmRlbGF5LnNob3cpKX1fbGVhdmUoKXt0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCl8fCh0aGlzLl9pc0hvdmVyZWQ9ITEsdGhpcy5fc2V0VGltZW91dCgoKCk9Pnt0aGlzLl9pc0hvdmVyZWR8fHRoaXMuaGlkZSgpfSksdGhpcy5fY29uZmlnLmRlbGF5LmhpZGUpKX1fc2V0VGltZW91dCh0LGUpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KSx0aGlzLl90aW1lb3V0PXNldFRpbWVvdXQodCxlKX1faXNXaXRoQWN0aXZlVHJpZ2dlcigpe3JldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2FjdGl2ZVRyaWdnZXIpLmluY2x1ZGVzKCEwKX1fZ2V0Q29uZmlnKHQpe2NvbnN0IGU9Ri5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KTtmb3IoY29uc3QgdCBvZiBPYmplY3Qua2V5cyhlKSlabi5oYXModCkmJmRlbGV0ZSBlW3RdO3JldHVybiB0PXsuLi5lLC4uLiJvYmplY3QiPT10eXBlb2YgdCYmdD90Ont9fSx0PXRoaXMuX21lcmdlQ29uZmlnT2JqKHQpLHQ9dGhpcy5fY29uZmlnQWZ0ZXJNZXJnZSh0KSx0aGlzLl90eXBlQ2hlY2tDb25maWcodCksdH1fY29uZmlnQWZ0ZXJNZXJnZSh0KXtyZXR1cm4gdC5jb250YWluZXI9ITE9PT10LmNvbnRhaW5lcj9kb2N1bWVudC5ib2R5OnIodC5jb250YWluZXIpLCJudW1iZXIiPT10eXBlb2YgdC5kZWxheSYmKHQuZGVsYXk9e3Nob3c6dC5kZWxheSxoaWRlOnQuZGVsYXl9KSwibnVtYmVyIj09dHlwZW9mIHQudGl0bGUmJih0LnRpdGxlPXQudGl0bGUudG9TdHJpbmcoKSksIm51bWJlciI9PXR5cGVvZiB0LmNvbnRlbnQmJih0LmNvbnRlbnQ9dC5jb250ZW50LnRvU3RyaW5nKCkpLHR9X2dldERlbGVnYXRlQ29uZmlnKCl7Y29uc3QgdD17fTtmb3IoY29uc3RbZSxpXW9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZykpdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2VdIT09aSYmKHRbZV09aSk7cmV0dXJuIHQuc2VsZWN0b3I9ITEsdC50cmlnZ2VyPSJtYW51YWwiLHR9X2Rpc3Bvc2VQb3BwZXIoKXt0aGlzLl9wb3BwZXImJih0aGlzLl9wb3BwZXIuZGVzdHJveSgpLHRoaXMuX3BvcHBlcj1udWxsKSx0aGlzLnRpcCYmKHRoaXMudGlwLnJlbW92ZSgpLHRoaXMudGlwPW51bGwpfXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPWNzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyx0KTtpZigic3RyaW5nIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWVbdF0pdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkICIke3R9ImApO2VbdF0oKX19KSl9fW0oY3MpO2NvbnN0IGhzPXsuLi5jcy5EZWZhdWx0LGNvbnRlbnQ6IiIsb2Zmc2V0OlswLDhdLHBsYWNlbWVudDoicmlnaHQiLHRlbXBsYXRlOic8ZGl2IGNsYXNzPSJwb3BvdmVyIiByb2xlPSJ0b29sdGlwIj48ZGl2IGNsYXNzPSJwb3BvdmVyLWFycm93Ij48L2Rpdj48aDMgY2xhc3M9InBvcG92ZXItaGVhZGVyIj48L2gzPjxkaXYgY2xhc3M9InBvcG92ZXItYm9keSI+PC9kaXY+PC9kaXY+Jyx0cmlnZ2VyOiJjbGljayJ9LGRzPXsuLi5jcy5EZWZhdWx0VHlwZSxjb250ZW50OiIobnVsbHxzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbikifTtjbGFzcyB1cyBleHRlbmRzIGNze3N0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiBoc31zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIGRzfXN0YXRpYyBnZXQgTkFNRSgpe3JldHVybiJwb3BvdmVyIn1faXNXaXRoQ29udGVudCgpe3JldHVybiB0aGlzLl9nZXRUaXRsZSgpfHx0aGlzLl9nZXRDb250ZW50KCl9X2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpe3JldHVybnsiLnBvcG92ZXItaGVhZGVyIjp0aGlzLl9nZXRUaXRsZSgpLCIucG9wb3Zlci1ib2R5Ijp0aGlzLl9nZXRDb250ZW50KCl9fV9nZXRDb250ZW50KCl7cmV0dXJuIHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5jb250ZW50KX1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT11cy5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsdCk7aWYoInN0cmluZyI9PXR5cGVvZiB0KXtpZih2b2lkIDA9PT1lW3RdKXRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCAiJHt0fSJgKTtlW3RdKCl9fSkpfX1tKHVzKTtjb25zdCBmcz0iLmJzLnNjcm9sbHNweSIscHM9YGFjdGl2YXRlJHtmc31gLG1zPWBjbGljayR7ZnN9YCxncz1gbG9hZCR7ZnN9LmRhdGEtYXBpYCxfcz0iYWN0aXZlIixicz0iW2hyZWZdIix2cz0iLm5hdi1saW5rIix5cz1gJHt2c30sIC5uYXYtaXRlbSA+ICR7dnN9LCAubGlzdC1ncm91cC1pdGVtYCx3cz17b2Zmc2V0Om51bGwscm9vdE1hcmdpbjoiMHB4IDBweCAtMjUlIixzbW9vdGhTY3JvbGw6ITEsdGFyZ2V0Om51bGwsdGhyZXNob2xkOlsuMSwuNSwxXX0sQXM9e29mZnNldDoiKG51bWJlcnxudWxsKSIscm9vdE1hcmdpbjoic3RyaW5nIixzbW9vdGhTY3JvbGw6ImJvb2xlYW4iLHRhcmdldDoiZWxlbWVudCIsdGhyZXNob2xkOiJhcnJheSJ9O2NsYXNzIEVzIGV4dGVuZHMgV3tjb25zdHJ1Y3Rvcih0LGUpe3N1cGVyKHQsZSksdGhpcy5fdGFyZ2V0TGlua3M9bmV3IE1hcCx0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnM9bmV3IE1hcCx0aGlzLl9yb290RWxlbWVudD0idmlzaWJsZSI9PT1nZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW1lbnQpLm92ZXJmbG93WT9udWxsOnRoaXMuX2VsZW1lbnQsdGhpcy5fYWN0aXZlVGFyZ2V0PW51bGwsdGhpcy5fb2JzZXJ2ZXI9bnVsbCx0aGlzLl9wcmV2aW91c1Njcm9sbERhdGE9e3Zpc2libGVFbnRyeVRvcDowLHBhcmVudFNjcm9sbFRvcDowfSx0aGlzLnJlZnJlc2goKX1zdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4gd3N9c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybiBBc31zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm4ic2Nyb2xsc3B5In1yZWZyZXNoKCl7dGhpcy5faW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpLHRoaXMuX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKCksdGhpcy5fb2JzZXJ2ZXI/dGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpOnRoaXMuX29ic2VydmVyPXRoaXMuX2dldE5ld09ic2VydmVyKCk7Zm9yKGNvbnN0IHQgb2YgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLnZhbHVlcygpKXRoaXMuX29ic2VydmVyLm9ic2VydmUodCl9ZGlzcG9zZSgpe3RoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKSxzdXBlci5kaXNwb3NlKCl9X2NvbmZpZ0FmdGVyTWVyZ2UodCl7cmV0dXJuIHQudGFyZ2V0PXIodC50YXJnZXQpfHxkb2N1bWVudC5ib2R5LHQucm9vdE1hcmdpbj10Lm9mZnNldD9gJHt0Lm9mZnNldH1weCAwcHggLTMwJWA6dC5yb290TWFyZ2luLCJzdHJpbmciPT10eXBlb2YgdC50aHJlc2hvbGQmJih0LnRocmVzaG9sZD10LnRocmVzaG9sZC5zcGxpdCgiLCIpLm1hcCgodD0+TnVtYmVyLnBhcnNlRmxvYXQodCkpKSksdH1fbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwoKXt0aGlzLl9jb25maWcuc21vb3RoU2Nyb2xsJiYoTi5vZmYodGhpcy5fY29uZmlnLnRhcmdldCxtcyksTi5vbih0aGlzLl9jb25maWcudGFyZ2V0LG1zLGJzLCh0PT57Y29uc3QgZT10aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuZ2V0KHQudGFyZ2V0Lmhhc2gpO2lmKGUpe3QucHJldmVudERlZmF1bHQoKTtjb25zdCBpPXRoaXMuX3Jvb3RFbGVtZW50fHx3aW5kb3csbj1lLm9mZnNldFRvcC10aGlzLl9lbGVtZW50Lm9mZnNldFRvcDtpZihpLnNjcm9sbFRvKXJldHVybiB2b2lkIGkuc2Nyb2xsVG8oe3RvcDpuLGJlaGF2aW9yOiJzbW9vdGgifSk7aS5zY3JvbGxUb3A9bn19KSkpfV9nZXROZXdPYnNlcnZlcigpe2NvbnN0IHQ9e3Jvb3Q6dGhpcy5fcm9vdEVsZW1lbnQsdGhyZXNob2xkOnRoaXMuX2NvbmZpZy50aHJlc2hvbGQscm9vdE1hcmdpbjp0aGlzLl9jb25maWcucm9vdE1hcmdpbn07cmV0dXJuIG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigodD0+dGhpcy5fb2JzZXJ2ZXJDYWxsYmFjayh0KSksdCl9X29ic2VydmVyQ2FsbGJhY2sodCl7Y29uc3QgZT10PT50aGlzLl90YXJnZXRMaW5rcy5nZXQoYCMke3QudGFyZ2V0LmlkfWApLGk9dD0+e3RoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS52aXNpYmxlRW50cnlUb3A9dC50YXJnZXQub2Zmc2V0VG9wLHRoaXMuX3Byb2Nlc3MoZSh0KSl9LG49KHRoaXMuX3Jvb3RFbGVtZW50fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLnNjcm9sbFRvcCxzPW4+PXRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3A7dGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnBhcmVudFNjcm9sbFRvcD1uO2Zvcihjb25zdCBvIG9mIHQpe2lmKCFvLmlzSW50ZXJzZWN0aW5nKXt0aGlzLl9hY3RpdmVUYXJnZXQ9bnVsbCx0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKGUobykpO2NvbnRpbnVlfWNvbnN0IHQ9by50YXJnZXQub2Zmc2V0VG9wPj10aGlzLl9wcmV2aW91c1Njcm9sbERhdGEudmlzaWJsZUVudHJ5VG9wO2lmKHMmJnQpe2lmKGkobyksIW4pcmV0dXJufWVsc2Ugc3x8dHx8aShvKX19X2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMoKXt0aGlzLl90YXJnZXRMaW5rcz1uZXcgTWFwLHRoaXMuX29ic2VydmFibGVTZWN0aW9ucz1uZXcgTWFwO2NvbnN0IHQ9ei5maW5kKGJzLHRoaXMuX2NvbmZpZy50YXJnZXQpO2Zvcihjb25zdCBlIG9mIHQpe2lmKCFlLmhhc2h8fGwoZSkpY29udGludWU7Y29uc3QgdD16LmZpbmRPbmUoZGVjb2RlVVJJKGUuaGFzaCksdGhpcy5fZWxlbWVudCk7YSh0KSYmKHRoaXMuX3RhcmdldExpbmtzLnNldChkZWNvZGVVUkkoZS5oYXNoKSxlKSx0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuc2V0KGUuaGFzaCx0KSl9fV9wcm9jZXNzKHQpe3RoaXMuX2FjdGl2ZVRhcmdldCE9PXQmJih0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKHRoaXMuX2NvbmZpZy50YXJnZXQpLHRoaXMuX2FjdGl2ZVRhcmdldD10LHQuY2xhc3NMaXN0LmFkZChfcyksdGhpcy5fYWN0aXZhdGVQYXJlbnRzKHQpLE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LHBzLHtyZWxhdGVkVGFyZ2V0OnR9KSl9X2FjdGl2YXRlUGFyZW50cyh0KXtpZih0LmNsYXNzTGlzdC5jb250YWlucygiZHJvcGRvd24taXRlbSIpKXouZmluZE9uZSgiLmRyb3Bkb3duLXRvZ2dsZSIsdC5jbG9zZXN0KCIuZHJvcGRvd24iKSkuY2xhc3NMaXN0LmFkZChfcyk7ZWxzZSBmb3IoY29uc3QgZSBvZiB6LnBhcmVudHModCwiLm5hdiwgLmxpc3QtZ3JvdXAiKSlmb3IoY29uc3QgdCBvZiB6LnByZXYoZSx5cykpdC5jbGFzc0xpc3QuYWRkKF9zKX1fY2xlYXJBY3RpdmVDbGFzcyh0KXt0LmNsYXNzTGlzdC5yZW1vdmUoX3MpO2NvbnN0IGU9ei5maW5kKGAke2JzfS4ke19zfWAsdCk7Zm9yKGNvbnN0IHQgb2YgZSl0LmNsYXNzTGlzdC5yZW1vdmUoX3MpfXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPUVzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyx0KTtpZigic3RyaW5nIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWVbdF18fHQuc3RhcnRzV2l0aCgiXyIpfHwiY29uc3RydWN0b3IiPT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgIiR7dH0iYCk7ZVt0XSgpfX0pKX19Ti5vbih3aW5kb3csZ3MsKCgpPT57Zm9yKGNvbnN0IHQgb2Ygei5maW5kKCdbZGF0YS1icy1zcHk9InNjcm9sbCJdJykpRXMuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0KX0pKSxtKEVzKTtjb25zdCBUcz0iLmJzLnRhYiIsQ3M9YGhpZGUke1RzfWAsT3M9YGhpZGRlbiR7VHN9YCx4cz1gc2hvdyR7VHN9YCxrcz1gc2hvd24ke1RzfWAsTHM9YGNsaWNrJHtUc31gLFNzPWBrZXlkb3duJHtUc31gLERzPWBsb2FkJHtUc31gLCRzPSJBcnJvd0xlZnQiLElzPSJBcnJvd1JpZ2h0IixOcz0iQXJyb3dVcCIsUHM9IkFycm93RG93biIsanM9IkhvbWUiLE1zPSJFbmQiLEZzPSJhY3RpdmUiLEhzPSJmYWRlIixXcz0ic2hvdyIsQnM9Ii5kcm9wZG93bi10b2dnbGUiLHpzPWA6bm90KCR7QnN9KWAsUnM9J1tkYXRhLWJzLXRvZ2dsZT0idGFiIl0sIFtkYXRhLWJzLXRvZ2dsZT0icGlsbCJdLCBbZGF0YS1icy10b2dnbGU9Imxpc3QiXScscXM9YC5uYXYtbGluayR7enN9LCAubGlzdC1ncm91cC1pdGVtJHt6c30sIFtyb2xlPSJ0YWIiXSR7enN9LCAke1JzfWAsVnM9YC4ke0ZzfVtkYXRhLWJzLXRvZ2dsZT0idGFiIl0sIC4ke0ZzfVtkYXRhLWJzLXRvZ2dsZT0icGlsbCJdLCAuJHtGc31bZGF0YS1icy10b2dnbGU9Imxpc3QiXWA7Y2xhc3MgS3MgZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKHQpe3N1cGVyKHQpLHRoaXMuX3BhcmVudD10aGlzLl9lbGVtZW50LmNsb3Nlc3QoJy5saXN0LWdyb3VwLCAubmF2LCBbcm9sZT0idGFibGlzdCJdJyksdGhpcy5fcGFyZW50JiYodGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXModGhpcy5fcGFyZW50LHRoaXMuX2dldENoaWxkcmVuKCkpLE4ub24odGhpcy5fZWxlbWVudCxTcywodD0+dGhpcy5fa2V5ZG93bih0KSkpKX1zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm4idGFiIn1zaG93KCl7Y29uc3QgdD10aGlzLl9lbGVtZW50O2lmKHRoaXMuX2VsZW1Jc0FjdGl2ZSh0KSlyZXR1cm47Y29uc3QgZT10aGlzLl9nZXRBY3RpdmVFbGVtKCksaT1lP04udHJpZ2dlcihlLENzLHtyZWxhdGVkVGFyZ2V0OnR9KTpudWxsO04udHJpZ2dlcih0LHhzLHtyZWxhdGVkVGFyZ2V0OmV9KS5kZWZhdWx0UHJldmVudGVkfHxpJiZpLmRlZmF1bHRQcmV2ZW50ZWR8fCh0aGlzLl9kZWFjdGl2YXRlKGUsdCksdGhpcy5fYWN0aXZhdGUodCxlKSl9X2FjdGl2YXRlKHQsZSl7dCYmKHQuY2xhc3NMaXN0LmFkZChGcyksdGhpcy5fYWN0aXZhdGUoei5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHQpKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+eyJ0YWIiPT09dC5nZXRBdHRyaWJ1dGUoInJvbGUiKT8odC5yZW1vdmVBdHRyaWJ1dGUoInRhYmluZGV4IiksdC5zZXRBdHRyaWJ1dGUoImFyaWEtc2VsZWN0ZWQiLCEwKSx0aGlzLl90b2dnbGVEcm9wRG93bih0LCEwKSxOLnRyaWdnZXIodCxrcyx7cmVsYXRlZFRhcmdldDplfSkpOnQuY2xhc3NMaXN0LmFkZChXcyl9KSx0LHQuY2xhc3NMaXN0LmNvbnRhaW5zKEhzKSkpfV9kZWFjdGl2YXRlKHQsZSl7dCYmKHQuY2xhc3NMaXN0LnJlbW92ZShGcyksdC5ibHVyKCksdGhpcy5fZGVhY3RpdmF0ZSh6LmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodCkpLHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCgpPT57InRhYiI9PT10LmdldEF0dHJpYnV0ZSgicm9sZSIpPyh0LnNldEF0dHJpYnV0ZSgiYXJpYS1zZWxlY3RlZCIsITEpLHQuc2V0QXR0cmlidXRlKCJ0YWJpbmRleCIsIi0xIiksdGhpcy5fdG9nZ2xlRHJvcERvd24odCwhMSksTi50cmlnZ2VyKHQsT3Mse3JlbGF0ZWRUYXJnZXQ6ZX0pKTp0LmNsYXNzTGlzdC5yZW1vdmUoV3MpfSksdCx0LmNsYXNzTGlzdC5jb250YWlucyhIcykpKX1fa2V5ZG93bih0KXtpZighWyRzLElzLE5zLFBzLGpzLE1zXS5pbmNsdWRlcyh0LmtleSkpcmV0dXJuO3Quc3RvcFByb3BhZ2F0aW9uKCksdC5wcmV2ZW50RGVmYXVsdCgpO2NvbnN0IGU9dGhpcy5fZ2V0Q2hpbGRyZW4oKS5maWx0ZXIoKHQ9PiFsKHQpKSk7bGV0IGk7aWYoW2pzLE1zXS5pbmNsdWRlcyh0LmtleSkpaT1lW3Qua2V5PT09anM/MDplLmxlbmd0aC0xXTtlbHNle2NvbnN0IG49W0lzLFBzXS5pbmNsdWRlcyh0LmtleSk7aT1iKGUsdC50YXJnZXQsbiwhMCl9aSYmKGkuZm9jdXMoe3ByZXZlbnRTY3JvbGw6ITB9KSxLcy5nZXRPckNyZWF0ZUluc3RhbmNlKGkpLnNob3coKSl9X2dldENoaWxkcmVuKCl7cmV0dXJuIHouZmluZChxcyx0aGlzLl9wYXJlbnQpfV9nZXRBY3RpdmVFbGVtKCl7cmV0dXJuIHRoaXMuX2dldENoaWxkcmVuKCkuZmluZCgodD0+dGhpcy5fZWxlbUlzQWN0aXZlKHQpKSl8fG51bGx9X3NldEluaXRpYWxBdHRyaWJ1dGVzKHQsZSl7dGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModCwicm9sZSIsInRhYmxpc3QiKTtmb3IoY29uc3QgdCBvZiBlKXRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZCh0KX1fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkKHQpe3Q9dGhpcy5fZ2V0SW5uZXJFbGVtZW50KHQpO2NvbnN0IGU9dGhpcy5fZWxlbUlzQWN0aXZlKHQpLGk9dGhpcy5fZ2V0T3V0ZXJFbGVtZW50KHQpO3Quc2V0QXR0cmlidXRlKCJhcmlhLXNlbGVjdGVkIixlKSxpIT09dCYmdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoaSwicm9sZSIsInByZXNlbnRhdGlvbiIpLGV8fHQuc2V0QXR0cmlidXRlKCJ0YWJpbmRleCIsIi0xIiksdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModCwicm9sZSIsInRhYiIpLHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbCh0KX1fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsKHQpe2NvbnN0IGU9ei5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHQpO2UmJih0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhlLCJyb2xlIiwidGFicGFuZWwiKSx0LmlkJiZ0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhlLCJhcmlhLWxhYmVsbGVkYnkiLGAke3QuaWR9YCkpfV90b2dnbGVEcm9wRG93bih0LGUpe2NvbnN0IGk9dGhpcy5fZ2V0T3V0ZXJFbGVtZW50KHQpO2lmKCFpLmNsYXNzTGlzdC5jb250YWlucygiZHJvcGRvd24iKSlyZXR1cm47Y29uc3Qgbj0odCxuKT0+e2NvbnN0IHM9ei5maW5kT25lKHQsaSk7cyYmcy5jbGFzc0xpc3QudG9nZ2xlKG4sZSl9O24oQnMsRnMpLG4oIi5kcm9wZG93bi1tZW51IixXcyksaS5zZXRBdHRyaWJ1dGUoImFyaWEtZXhwYW5kZWQiLGUpfV9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyh0LGUsaSl7dC5oYXNBdHRyaWJ1dGUoZSl8fHQuc2V0QXR0cmlidXRlKGUsaSl9X2VsZW1Jc0FjdGl2ZSh0KXtyZXR1cm4gdC5jbGFzc0xpc3QuY29udGFpbnMoRnMpfV9nZXRJbm5lckVsZW1lbnQodCl7cmV0dXJuIHQubWF0Y2hlcyhxcyk/dDp6LmZpbmRPbmUocXMsdCl9X2dldE91dGVyRWxlbWVudCh0KXtyZXR1cm4gdC5jbG9zZXN0KCIubmF2LWl0ZW0sIC5saXN0LWdyb3VwLWl0ZW0iKXx8dH1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT1Lcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpO2lmKCJzdHJpbmciPT10eXBlb2YgdCl7aWYodm9pZCAwPT09ZVt0XXx8dC5zdGFydHNXaXRoKCJfIil8fCJjb25zdHJ1Y3RvciI9PT10KXRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCAiJHt0fSJgKTtlW3RdKCl9fSkpfX1OLm9uKGRvY3VtZW50LExzLFJzLChmdW5jdGlvbih0KXtbIkEiLCJBUkVBIl0uaW5jbHVkZXModGhpcy50YWdOYW1lKSYmdC5wcmV2ZW50RGVmYXVsdCgpLGwodGhpcyl8fEtzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykuc2hvdygpfSkpLE4ub24od2luZG93LERzLCgoKT0+e2Zvcihjb25zdCB0IG9mIHouZmluZChWcykpS3MuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0KX0pKSxtKEtzKTtjb25zdCBRcz0iLmJzLnRvYXN0IixYcz1gbW91c2VvdmVyJHtRc31gLFlzPWBtb3VzZW91dCR7UXN9YCxVcz1gZm9jdXNpbiR7UXN9YCxHcz1gZm9jdXNvdXQke1FzfWAsSnM9YGhpZGUke1FzfWAsWnM9YGhpZGRlbiR7UXN9YCx0bz1gc2hvdyR7UXN9YCxlbz1gc2hvd24ke1FzfWAsaW89ImhpZGUiLG5vPSJzaG93Iixzbz0ic2hvd2luZyIsb289e2FuaW1hdGlvbjoiYm9vbGVhbiIsYXV0b2hpZGU6ImJvb2xlYW4iLGRlbGF5OiJudW1iZXIifSxybz17YW5pbWF0aW9uOiEwLGF1dG9oaWRlOiEwLGRlbGF5OjVlM307Y2xhc3MgYW8gZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIodCxlKSx0aGlzLl90aW1lb3V0PW51bGwsdGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbj0hMSx0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uPSExLHRoaXMuX3NldExpc3RlbmVycygpfXN0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiByb31zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIG9vfXN0YXRpYyBnZXQgTkFNRSgpe3JldHVybiJ0b2FzdCJ9c2hvdygpe04udHJpZ2dlcih0aGlzLl9lbGVtZW50LHRvKS5kZWZhdWx0UHJldmVudGVkfHwodGhpcy5fY2xlYXJUaW1lb3V0KCksdGhpcy5fY29uZmlnLmFuaW1hdGlvbiYmdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKCJmYWRlIiksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGlvKSxkKHRoaXMuX2VsZW1lbnQpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChubyxzbyksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9Pnt0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoc28pLE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LGVvKSx0aGlzLl9tYXliZVNjaGVkdWxlSGlkZSgpfSksdGhpcy5fZWxlbWVudCx0aGlzLl9jb25maWcuYW5pbWF0aW9uKSl9aGlkZSgpe3RoaXMuaXNTaG93bigpJiYoTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsSnMpLmRlZmF1bHRQcmV2ZW50ZWR8fCh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoc28pLHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCgpPT57dGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKGlvKSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoc28sbm8pLE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LFpzKX0pLHRoaXMuX2VsZW1lbnQsdGhpcy5fY29uZmlnLmFuaW1hdGlvbikpKX1kaXNwb3NlKCl7dGhpcy5fY2xlYXJUaW1lb3V0KCksdGhpcy5pc1Nob3duKCkmJnRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShubyksc3VwZXIuZGlzcG9zZSgpfWlzU2hvd24oKXtyZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMobm8pfV9tYXliZVNjaGVkdWxlSGlkZSgpe3RoaXMuX2NvbmZpZy5hdXRvaGlkZSYmKHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb258fHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb258fCh0aGlzLl90aW1lb3V0PXNldFRpbWVvdXQoKCgpPT57dGhpcy5oaWRlKCl9KSx0aGlzLl9jb25maWcuZGVsYXkpKSl9X29uSW50ZXJhY3Rpb24odCxlKXtzd2l0Y2godC50eXBlKXtjYXNlIm1vdXNlb3ZlciI6Y2FzZSJtb3VzZW91dCI6dGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbj1lO2JyZWFrO2Nhc2UiZm9jdXNpbiI6Y2FzZSJmb2N1c291dCI6dGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbj1lfWlmKGUpcmV0dXJuIHZvaWQgdGhpcy5fY2xlYXJUaW1lb3V0KCk7Y29uc3QgaT10LnJlbGF0ZWRUYXJnZXQ7dGhpcy5fZWxlbWVudD09PWl8fHRoaXMuX2VsZW1lbnQuY29udGFpbnMoaSl8fHRoaXMuX21heWJlU2NoZWR1bGVIaWRlKCl9X3NldExpc3RlbmVycygpe04ub24odGhpcy5fZWxlbWVudCxYcywodD0+dGhpcy5fb25JbnRlcmFjdGlvbih0LCEwKSkpLE4ub24odGhpcy5fZWxlbWVudCxZcywodD0+dGhpcy5fb25JbnRlcmFjdGlvbih0LCExKSkpLE4ub24odGhpcy5fZWxlbWVudCxVcywodD0+dGhpcy5fb25JbnRlcmFjdGlvbih0LCEwKSkpLE4ub24odGhpcy5fZWxlbWVudCxHcywodD0+dGhpcy5fb25JbnRlcmFjdGlvbih0LCExKSkpfV9jbGVhclRpbWVvdXQoKXtjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCksdGhpcy5fdGltZW91dD1udWxsfXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPWFvLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyx0KTtpZigic3RyaW5nIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWVbdF0pdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkICIke3R9ImApO2VbdF0odGhpcyl9fSkpfX1yZXR1cm4gUihhbyksbShhbykse0FsZXJ0OlEsQnV0dG9uOlksQ2Fyb3VzZWw6eHQsQ29sbGFwc2U6QnQsRHJvcGRvd246cWksTW9kYWw6T24sT2ZmY2FudmFzOnFuLFBvcG92ZXI6dXMsU2Nyb2xsU3B5OkVzLFRhYjpLcyxUb2FzdDphbyxUb29sdGlwOmNzfX0pKTsKLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vdHN0cmFwLmJ1bmRsZS5taW4uanMubWFw"


const getDefaultConfig = () => ({
    "gameInfoTextLeft": "\\I[190]\n\\I[314]",
    "gameInfoTextRight": "\\}\\C[3]\\MN\n\\$ \\C[16]\\G",
    "unknownMapName": "\\C[8]Unknown Region",
    "gaugeColorHp1": "#A16207",
    "gaugeColorHp2": "#F59E0B",
    "gaugeColorHpCrisis1": "#991B1B",
    "gaugeColorHpCrisis2": "#DC2626",
    "gaugeColorMp1": "#1D4ED8",
    "gaugeColorMp2": "#3B82F6",
    "gaugeColorTp1": "#15803D",
    "gaugeColorTp2": "#22C55E",
    "gaugeColorAtb1": "#D980FA",
    "gaugeColorAtb2": "#FDA7DF",
    "gaugeColorExp1": "#888888",
    "gaugeColorExp2": "#FFFFFF",
    "gaugeColorExpMaxed1": "#FFC107",
    "gaugeColorExpMaxed2": "#FFEB3B",
    "gaugeBackgroundColorHp": "#222222",
    "gaugeBackgroundColorHpCrisis": "#222222",
    "gaugeBackgroundColorHpDead": "#440000",
    "gaugeBackgroundColorMp": "#222222",
    "gaugeBackgroundColorTp": "#222222",
    "gaugeBackgroundColorAtb": "#222222",
    "gaugeBackgroundColorExp": "#222222",
    "gaugeBackgroundColorExpMaxed": "#222222",
    "nameX": -30,
    "nameY": 10,
    "classX": -10,
    "classY": 10,
    "levelX": -76,
    "levelY": 4,
    "hpGaugeX": -10,
    "statusEffectsX": 190,
    "shadowBoxX": 200,
    "shadowBoxGradientPower": 100,
    "gaugeWidth": 200,
    "gaugeWidthOverrideScene": "exceptBattle",
    "gaugeHeightOverrideScene": "exceptBattle",
    "gaugeStyle": "stretch",
    "showGaugeMaxValues": true,
    "hpGaugeY": -4,
    "hpGaugeVerticalSpace": 28,
    "hpIconIndex": 84,
    "mpIconIndex": 165,
    "tpIconIndex": 164,
});


// =====================================================================================
// Utilities
// =====================================================================================


const reject = (reason) => {
    const message = (
        "An error occurred in the Plugin %1: %2 " +
        "If the problem persists, contact the Plugin Creator."
    ).format(PLUGIN_NAME, reason);
    
    alert(message);
    throw Error(message);
}

if (!PluginManager._parameters[PLUGIN_NAME.toLowerCase()]) {
    reject(
        'This Plugin is not correctly installed. ' +
        'Please make sure it has the filename "%1.js" and is located in "your game/js/plugins" folder. '.format(PLUGIN_NAME) +
        'Subfolders (i.e. "your game/js/plugins/xy/%1.js") are not allowed.'.format(PLUGIN_NAME)
    );
}

if (!mvSupport && Utils.RPGMAKER_NAME != 'MZ') {
    reject("This Plugin is only compatible with RPG Maker MZ.");
}

const mapCustomValuesTryCatch = (f, arg, name, isRequired) => {
    if (!arg && isRequired) {
        reject((
            "The Plugin Parameter \"%1\" is missing. " +
            "Please check it in the Plugin Manager. It may help to re-install this Plugin (i.e.: remove, re-add)."
        ).format(name));
    }
    if (!arg) return;

    try {
        return f(arg);
    } catch (e) {
        reject((
            "The Plugin Parameter \"%1\" contains an error and could not be interpreted. " +
            "Please check it in the Plugin Manager. It may also help to re-install this Plugin (i.e.: remove, re-add). " +
            "Cause: \"%2\"."
        ).format(name, e));
    }
}

const parameterStructure = (serialized, parameterName, isRequired) => {
    return mapCustomValuesTryCatch(
        JSON.parse,
        serialized,
        parameterName,
        isRequired,
    );
}

const customFunction = (serialized, parameterName, isRequired) => {
    return mapCustomValuesTryCatch(
        arg => new Function(arg),
        serialized,
        parameterName,
        isRequired,
    );
}

function isScene(...scenes) {
    return scenes.some(scene => SceneManager._scene instanceof scene);
}

function equalStringsIgnoreCaseAndWhiteSpaces(a, b) {
    return a && b
        ? a.trim().toLowerCase() == b.trim().toLowerCase()
        : !a && !b;
}

function nullableObjectHasNotetagFlag(object, flag) {
    return object && object.meta && object.meta[flag];
}

function coalesce(...args) {
    for (const arg of args) {
        if (arg !== null && arg !== undefined) {
            return arg;
        }
    }
}

function distinct(list) {
    const result = [ ];
    list.forEach(item => {
        if (!result.includes(item)) result.push(item);
    });
    return result;
}

function jsonNumberList(serialized) {
    return JSON.parse(serialized || '[]')
        .map(Number)
        .filter(n => n || n === 0);
}

function hasPlugin(pluginName) {
    return $plugins.find(plugin => plugin && plugin.status && plugin.name == pluginName);
}


const deserializeCondition = (serialized, showEnabledText, commandText) => {
    const object = parameterStructure(
        serialized,
        '%1 Condition in Menu Command %2'.format(showEnabledText, commandText),
    );

    if (object) {
        return {
            switchId:       Number(object.switchId),
            misc:           object.misc,
            pluginName:     object.pluginName,
            customEval:     object.customEval,
        }
    }
}

const params = PluginManager.parameters(PLUGIN_NAME);
const overrideMenuCommands  = 'false' !== params.overrideMenuCommands;
const menuCommands          = JSON.parse(params.menuCommands || '[ ]')
                                .map(JSON.parse)
                                .map(command => ({
                                    symbol:             command.symbol,
                                    iconIndex:          Number(command.iconIndex),
                                    text:               command.text || '',
                                    showCondition:      deserializeCondition(command.showCondition, 'Show', command.text),
                                    enableCondition:    deserializeCondition(command.enableCondition, 'Enabled', command.text),
                                    action:             command.action,
                                    destination:        command.destination,
                                    commonEventId:      Number(command.commonEventId),
                                    actionCustomCode:   customFunction(
                                                            command.actionCustomCode,
                                                            'Action Custom Code in Menu Command %1'.format(command.text),
                                                        ),
                                    isPersonal:         'true' == command.isPersonal,
                                }));

UICustom.showNews = 'false' !== params.showNews;

const _SceneManager_isGameActive = SceneManager.isGameActive;
SceneManager.isGameActive = function() {
    return (
        _SceneManager_isGameActive.call(this) ||
        (isScene(Scene_Menu) && Utils.isNwjs() && Utils.isOptionValid("test"))
    );
}


// =====================================================================================
// Boot Actions
// =====================================================================================


const _SceneBoot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
    _SceneBoot_start.call(this);

    if (Utils.isNwjs() && Utils.isOptionValid('test')) {
        unpackUiTool();
    }
}

function makeDir(name, then) {
    const fs = require('fs');

    if (fs.existsSync(name)) {
        then();
    } else {
        fs.mkdir(name, (error) => {
            if (error) reject(error);
            else then();
        });
    }
}

function unpackBase64File(filename, content) {
    const fs = require('fs');

    fs.writeFile(filename, Buffer.from(content, 'base64'), (error) => {
        if (error) reject(error);
    });
}


// =====================================================================================
// Load Config
// =====================================================================================

let config = null;

const _DataManager_loadDatabase = DataManager.loadDatabase;
DataManager.loadDatabase = function() {
    _DataManager_loadDatabase.call(this);

    loadFileXhr(
        configFileName,
        data => config = data,
        () => config = getDefaultConfig(),
    );
}

function loadFileXhr(url, onLoad, onError) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.overrideMimeType('application/json');
    xhr.onload = () => {
        try {
            onLoad(JSON.parse(xhr.responseText));
        } catch (error) {
            onError && onError();
        }
    };
    xhr.onerror = () => onError && onError();
    xhr.send();
}

const _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    return _DataManager_isDatabaseLoaded.call(this) && !!config;
}


// =====================================================================================
// Polling / Refresh
// =====================================================================================

let lastUpdateTime;
let _requireRefresh = true;

function loop() {
    _requireRefresh = false;

    const fs = require('fs');
    fs.stat(configFileName, (error, stats) => {
        if (stats) {
            const time = stats.mtime.getTime() / 1000;

            if (lastUpdateTime !== time) {
                lastUpdateTime = time;
                
                fs.readFile(configFileName, (error, data) => {
                    data && refresh(JSON.parse(data));
                });
            }
        }
        setTimeout(() => _requireRefresh = true, 100);
    });
}


function unpackUiTool() {
    makeDir('uicustom', () => {
        unpackBase64File('uicustom/index.html',                 indexHtml);
        unpackBase64File('uicustom/index.css',                  css);
        unpackBase64File('uicustom/jQuery.js',                  jQuery);
        unpackBase64File('uicustom/bootstrap.min.css',          bs53_1);
        unpackBase64File('uicustom/bootstrap.bundle.min.js',    bs53_2);
        unpackBase64File('uicustom/common.js',                  commonJs);
        unpackBase64File('uicustom/index.js',                   indexJs);
    });
}

const _SceneMenu_update = Scene_Menu.prototype.update;
Scene_Menu.prototype.update = function() {
    _SceneMenu_update.call(this);

    if ($gameTemp.isPlaytest() && Input.isTriggered('debug')) {
        window.open('uicustom/index.html', '_blank');
    }

    if ($gameTemp.isPlaytest() && _requireRefresh) {
        loop();
    }
}

function refresh(arg) {
    config = arg;

    SceneManager.goto(Scene_Menu);
}

const _SceneMenu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function() {
    _SceneMenu_create.call(this);

    preloadImages();
}

function preloadImages() {
    $gameParty.members().forEach(actor => {
        ImageManager.loadSvActor(actor.battlerName());
        ImageManager.loadPicture(actor.menuPortrait());
    });
    
    ImageManager.loadBitmapFromFilepath(config.sceneBackgroundFile);
    ImageManager.loadBitmapFromFilepath(config.statusWindowFile);
    ImageManager.loadBitmapFromFilepath(config.statusBackgroundFile);
    ImageManager.loadBitmapFromFilepath(config.statusItemBackgroundFile);
    ImageManager.loadBitmapFromFilepath(config.cursorBackgroundFile);
    ImageManager.loadBitmapFromFilepath(config.statusPendingBackgroundFile);
    ImageManager.loadBitmapFromFilepath(config.commandWindowFile);
    ImageManager.loadBitmapFromFilepath(config.commandBackgroundFile);
    ImageManager.loadBitmapFromFilepath(config.commandItemBackgroundFile);
    ImageManager.loadBitmapFromFilepath(config.goldBackgroundFile);
}

ImageManager.loadBitmapFromFilepath = function(filepath) {
    const filename  = filepath && Utils.extractFileName(filepath).replace('.png', '').replace('.PNG', '');
    const folder    = filepath && filepath.replace(Utils.extractFileName(filepath), '');

    if (filename && folder) {
        return ImageManager.loadBitmap(folder, filename);
    }
}

// Override
Scene_Base.prototype.isRightInputMode = function() {
    return 'left' != config.commandInputMode;
}

const _SceneMenuBase_helpAreaTop = Scene_MenuBase.prototype.helpAreaTop;
Scene_MenuBase.prototype.helpAreaTop = function() {
    if (!this.hasHelpWindow()) {
        return _SceneMenuBase_helpAreaTop.call(this);
    }
    
    return this.isBottomHelpMode()
        ? _SceneMenuBase_helpAreaTop.call(this) + this.vertSpacing()
        : _SceneMenuBase_helpAreaTop.call(this) + this.topSpacing();
}

// Override
Scene_MenuBase.prototype.helpAreaHeight = function() {
    if (!this.hasHelpWindow()) {
        return 0;
    }
    const n = this.helpWindowNumberOfLines();
    return n ? new Window_Help(new Rectangle(0, 0, 0, 0)).fittingHeight(n) : 0;
}

Scene_MenuBase.prototype.hasHelpWindow = function() {
    return true;
}

Scene_MenuBase.prototype.helpWindowNumberOfLines = function() {
    return 2;
}

const _SceneMenuBase_helpWindowRect = Scene_MenuBase.prototype.helpWindowRect;
Scene_MenuBase.prototype.helpWindowRect = function() {
    return new Rectangle(
        this.helpWindowX(),
        this.helpWindowY(),
        this.helpWindowWidth(),
        this.helpWindowHeight(),
    );
}

Scene_MenuBase.prototype.helpWindowX = function() {
    return this.mainAreaLeft();
}

Scene_MenuBase.prototype.helpWindowY = function() {
    return _SceneMenuBase_helpWindowRect.call(this).y;
}

Scene_MenuBase.prototype.helpWindowWidth = function() {
    return this.mainAreaWidth();
}

Scene_MenuBase.prototype.helpWindowHeight = function() {
    return _SceneMenuBase_helpWindowRect.call(this).height;
}

Scene_Menu.prototype.hasHelpWindow = function() {
    return false;
}

Scene_Menu.prototype.helpAreaHeight = function() {
    return 0;
}

const _SceneMenuBase_mainAreaTop = Scene_MenuBase.prototype.mainAreaTop;
Scene_MenuBase.prototype.mainAreaTop = function() {
    if (this.isBottomHelpMode() || !this.hasHelpWindow()) {
        return _SceneMenuBase_mainAreaTop.call(this) + this.topSpacing();
    }
    return _SceneMenuBase_mainAreaTop.call(this) + this.vertSpacing();
}

const _SceneMenuBase_mainAreaHeight = Scene_MenuBase.prototype.mainAreaHeight;
Scene_MenuBase.prototype.mainAreaHeight = function() {
    return _SceneMenuBase_mainAreaHeight.call(this)
        - this.topSpacing()
        - this.bottomSpacing()
        - (this.hasHelpWindow() ? this.vertSpacing() : 0);
}

Scene_MenuBase.prototype.topSpacing = function() {
    return 0;
}

Scene_MenuBase.prototype.bottomSpacing = function() {
    return 0;
}

Scene_MenuBase.prototype.mainAreaLeft = function() {
    return this.leftSpacing();
}

Scene_MenuBase.prototype.mainAreaRight = function() {
    return Graphics.boxWidth - this.rightSpacing();
}

Scene_MenuBase.prototype.mainAreaWidth = function() {
    return this.mainAreaRight() - this.mainAreaLeft();
}

Scene_MenuBase.prototype.leftSpacing = function() {
    return 0;
}

Scene_MenuBase.prototype.rightSpacing = function() {
    return 0;
}

Scene_MenuBase.prototype.vertSpacing = function() {
    return 0;
}

Scene_MenuBase.prototype.horzSpacing = function() {
    return 0;
}

Scene_MenuBase.prototype.mainAreaHeightIncludingHelpArea = function() {
    if (this.hasHelpWindow()) {
        if (this.isBottomHelpMode()) {
            return this.helpAreaBottom() - this.mainAreaTop();
        } else {
            return this.mainAreaBottom() - this.helpAreaTop();
        }
    }
    return this.mainAreaHeight();
}

Scene_Menu.prototype.topSpacing = function() {
    return config.topSpacing || 0;
}

Scene_Menu.prototype.bottomSpacing = function() {
    return config.bottomSpacing || 0;
}

Scene_Menu.prototype.leftSpacing = function() {
    return config.leftSpacing || 0;
}

Scene_Menu.prototype.rightSpacing = function() {
    return config.rightSpacing || 0;
}

Scene_Menu.prototype.vertSpacing = function() {
    return config.vertSpacing || 0;
}

Scene_Menu.prototype.horzSpacing = function() {
    return config.horzSpacing || 0;
}

// Override
Scene_Menu.prototype.commandWindowRect = function() {
    if (config.overrideCommandRectangle) {
        return new Rectangle(
            coalesce(config.commandRectangle_x, this.commandWindowX(), 0),
            coalesce(config.commandRectangle_y, this.commandWindowY(), 0),
            coalesce(config.commandRectangle_width, this.mainCommandWidth(), 0),
            coalesce(config.commandRectangle_height, this.mainCommandHeight(), 0),
        );
    }
    return new Rectangle(
        this.commandWindowX(),
        this.commandWindowY(),
        this.mainCommandWidth(),
        this.mainCommandHeight(),
    );
}

Scene_Menu.prototype.commandWindowX = function() {
    if (config.statusOrientation == 'none') {
        const position = config.commandPosition || 'middleCenter';
        let x = 0;
        
        if (position.toLowerCase().includes('left'))    x = this.mainAreaLeft();
        if (position.toLowerCase().includes('center'))  x = Graphics.boxWidth / 2 - this.mainCommandWidth() / 2;
        if (position.toLowerCase().includes('right'))   x = this.mainAreaRight() - this.mainCommandWidth();

        return x + (config.commandOffsetX || 0);
    }
    if (['top', 'bottom'].includes(config.commandOrientation)) {
        return this.mainAreaLeft();
    }
    return this.isRightInputMode()
        ? this.mainAreaRight() - this.mainCommandWidth()
        : this.mainAreaLeft();
}

Scene_Menu.prototype.commandWindowY = function() {
    if (config.statusOrientation == 'none') {
        const position = config.commandPosition || 'middleCenter';
        let y;

        if (position.toLowerCase().includes('top'))     y = this.mainAreaTop();
        if (position.toLowerCase().includes('middle'))  y = Graphics.boxHeight / 2 - this.mainCommandHeight() / 2;
        if (position.toLowerCase().includes('bottom'))  y = this.mainAreaBottom() - this.mainCommandHeight();

        return y + (config.commandOffsetY || 0);
    }
    if (config.commandOrientation == 'bottom') {
        return showGameInfoWindow()
            ? (this.goldWindowY() - this.mainCommandHeight() - this.vertSpacing())
            : (this.mainAreaBottom() - this.mainCommandHeight());
    }
    return this.mainAreaTop();
}

const _SceneMenu_mainCommandWidth = Scene_Menu.prototype.mainCommandWidth;
Scene_Menu.prototype.mainCommandWidth = function() {
    const isFullWidth = config.statusOrientation != 'none' && ['top', 'bottom'].includes(config.commandOrientation);

    return isFullWidth
        ? this.mainAreaWidth()
        : (config.commandWidth || _SceneMenu_mainCommandWidth.call(this));
}

Scene_Menu.prototype.mainCommandHeight = function() {
    if (config.statusOrientation == 'none') {
        return this.calcCommandWindowHeight(this.numberOfMenuCommands());
    }
    if (config.commandOrientation == 'top') {
        return this.calcCommandWindowHeight(config.commandNumberOfLines || 2);
    }
    if (config.commandOrientation == 'bottom') {
        return this.calcCommandWindowHeight(config.commandNumberOfLines || 2);
    }
    return this.mainAreaHeight() - (showGameInfoWindow() ? this.goldWindowHeight() + this.vertSpacing() : 0);
}

Scene_Menu.prototype.calcCommandWindowHeight = function(n) {
    return new Window_MenuCommand(new Rectangle(0, 0, 0, 0)).fittingHeight(n, true);
}

Scene_Menu.prototype.numberOfMenuCommands = function() {
    return config.commandNumberOfLines || new Window_MenuCommand(new Rectangle(0, 0, 0, 0)).maxItems();
}

function showGameInfoWindow() {
    return config.showGoldWindow !== false;
}

// Override
Scene_Menu.prototype.statusWindowRect = function() {
    if (config.overrideStatusRectangle) {
        return new Rectangle(
            coalesce(config.statusRectangle_x, this.statusWindowX(), 0),
            coalesce(config.statusRectangle_y, this.statusWindowY(), 0),
            coalesce(config.statusRectangle_width, this.statusWindowWidth(), 0),
            coalesce(config.statusRectangle_height, this.statusWindowHeight(), 0),
        );
    }
    return new Rectangle(
        this.statusWindowX(),
        this.statusWindowY(),
        this.statusWindowWidth(),
        this.statusWindowHeight(),
    );
}

Scene_Menu.prototype.statusWindowX = function() {
    if (['top', 'bottom'].includes(config.commandOrientation)) {
        return this.mainAreaLeft();
    }
    return this.isRightInputMode()
        ? this.mainAreaLeft()
        : this.commandWindowX() + this.mainCommandWidth() + this.horzSpacing();
}

Scene_Menu.prototype.statusWindowY = function() {
    if (config.commandOrientation == 'top') {
        return this.commandWindowY() + this.mainCommandHeight() + this.vertSpacing();
    }
    return this.mainAreaTop();
}

Scene_Menu.prototype.statusWindowWidth = function() {
    if (['top', 'bottom'].includes(config.commandOrientation)) {
        return this.mainAreaWidth();
    }
    return this.mainAreaWidth() - this.mainCommandWidth() - this.horzSpacing();
}

Scene_Menu.prototype.statusWindowHeight = function() {
    if (['top', 'bottom'].includes(config.commandOrientation)) {
        return this.mainAreaHeight()
            - (showGameInfoWindow() ? this.goldWindowHeight() + this.vertSpacing() : 0)
            - this.mainCommandHeight()
            - this.vertSpacing();
    }
    return this.mainAreaHeight();
}

Scene_MenuBase.prototype.statusWindowRect = Scene_Menu.prototype.statusWindowRect;


// Override
Scene_Menu.prototype.goldWindowRect = function() {
    if (config.overrideGoldRectangle) {
        return new Rectangle(
            coalesce(config.goldRectangle_x, this.goldWindowX(), 0),
            coalesce(config.goldRectangle_y, this.goldWindowY(), 0),
            coalesce(config.goldRectangle_width, this.goldWindowWidth(), 0),
            coalesce(config.goldRectangle_height, this.goldWindowHeight(), 0),
        );
    }
    return new Rectangle(
        this.goldWindowX(),
        this.goldWindowY(),
        this.goldWindowWidth(),
        this.goldWindowHeight(),
    );
}

Scene_Menu.prototype.goldWindowX = function() {
    if (config.statusOrientation == 'none') {
        const position = config.goldWindowPosition || 'bottomLeft';
        let x = 0;

        if (position.toLowerCase().includes('left'))    x = this.mainAreaLeft();
        if (position.toLowerCase().includes('center'))  x = Graphics.boxWidth / 2 - this.goldWindowWidth() / 2;
        if (position.toLowerCase().includes('right'))   x = this.mainAreaRight() - this.goldWindowWidth();

        return x + (config.goldWindowOffsetX || 0);
    }
    if (['top', 'bottom'].includes(config.commandOrientation)) {
        return this.mainAreaLeft();
    }
    return this.isRightInputMode() ? this.mainAreaRight() - this.mainCommandWidth() : this.mainAreaLeft();
}

Scene_Menu.prototype.goldWindowY = function() {
    if (config.statusOrientation == 'none') {
        const position = config.goldWindowPosition || 'bottomLeft';
        let y;

        if (position.toLowerCase().includes('top'))     y = this.mainAreaTop();
        if (position.toLowerCase().includes('middle'))  y = Graphics.boxHeight / 2 - this.goldWindowHeight() / 2;
        if (position.toLowerCase().includes('bottom'))  y = this.mainAreaBottom() - this.goldWindowHeight();

        return y + (config.goldWindowOffsetY || 0);
    }
    return this.mainAreaBottom() - this.goldWindowHeight();
}

Scene_Menu.prototype.goldWindowWidth = function() {
    if (config.statusOrientation == 'none') {
        return config.goldWindowWidth || this.mainCommandWidth();
    }
    if (['top', 'bottom'].includes(config.commandOrientation)) {
        return this.mainAreaWidth();
    }
    return this.mainCommandWidth();
}

Scene_Menu.prototype.goldWindowHeight = function() {
    const n = ['top', 'bottom'].includes(config.commandOrientation)
        ? 1
        : gameInfoWindowNumberOfLines();
    
    return this.calcWindowHeight(n, true);
}

function gameInfoWindowNumberOfLines() {
    return Math.max(
        (config.gameInfoTextLeft || '').split('\n').length,
        (config.gameInfoTextRight || '').split('\n').length,
        1,
    );
}

const _SceneMenu_createStatusWindow = Scene_Menu.prototype.createStatusWindow;
Scene_Menu.prototype.createStatusWindow = function() {
    _SceneMenu_createStatusWindow.call(this);

    if (SceneManager._scene.isNoStatusWindowLayout()) {
        this._statusWindow.hide();
    }
}

Scene_Menu.prototype.isNoStatusWindowLayout = function() {
    return config.statusOrientation == 'none';
}

// Override
Scene_Menu.prototype.createGoldWindow = function() {
    const rectangle = this.goldWindowRect();
    this._goldWindow = new Window_GameInfo(rectangle);
    this.addWindow(this._goldWindow);

    if (!showGameInfoWindow()) this._goldWindow.hide();
}

Window_MenuCommand.prototype.maxCols = function() {
    if (SceneManager._scene.isNoStatusWindowLayout()) {
        return config.commandNumberOfColumns || 1
    }
    if ('top' == config.commandOrientation || 'bottom' == config.commandOrientation) {
        return config.commandNumberOfColumns || 4
    }
    return 1;
}

Window_MenuStatus.prototype.maxCols = function() {
    switch (this.orientation()) {
        case 'rows':    return 1;
        case 'columns': return this.numberVisibleElements();
        case 'grid':    return (config.statusWindowCols || 2).clamp(1, 10);
    }
    return 1;
}

Window_MenuStatus.prototype.numVisibleRows = function() {
    switch (this.orientation()) {
        case 'rows':    return this.numberVisibleElements();
        case 'columns': return 1;
        case 'grid':    return (config.statusWindowRows || 2).clamp(1, 10);
    }
    return 1;
}

Window_MenuStatus.prototype.orientation = function() {
    return config.statusOrientation || 'rows';
}

Window_MenuStatus.prototype.numberVisibleElements = function() {
    if (config.autoAdjustVisibleActors) {
        return $gameParty.members().length.clamp(
            config.visibleActors || 1,
            config.visibleActorsMax || 4,
        );
    }
    return config.visibleActors || 4;
}


// =====================================================================================
// Windows General
// =====================================================================================


Window_Base.prototype.updatePadding = function() {
    this.padding = this.standardPadding();
}

const _WindowBase_standardPadding = Window_Base.prototype.standardPadding;
Window_Base.prototype.standardPadding = function() {
    return typeof config.windowPadding == 'number'
        ? config.windowPadding
        : (Utils.RPGMAKER_NAME == 'MZ' ? $gameSystem.windowPadding() : _WindowBase_standardPadding.call(this));
}

const _WindowBase_update = Window_Base.prototype.update;
Window_Base.prototype.update = function() {
    _WindowBase_update.call(this);

    if (this.padding !== this.standardPadding()) {
        this.updatePadding();
        this.refreshDimmerBitmap();
    }
}

if ('MZ' == Utils.RPGMAKER_NAME) {

// Override
Window_Base.prototype.fittingHeight = function(n) {
    return n * this.itemHeight() + this.standardPadding() * 2;
}

const _WindowBase_itemHeight = Window_Base.prototype.itemHeight;
Window_Base.prototype.itemHeight = function() {
    return config.windowItemHeight || _WindowBase_itemHeight.call(this);
}

const _WindowBase_itemPadding = Window_Base.prototype.itemPadding;
Window_Base.prototype.itemPadding = function() {
    return config.windowItemPadding >= 0
        ? config.windowItemPadding
        : _WindowBase_itemPadding.call(this);
}

const _WindowSelectable_rowSpacing = Window_Selectable.prototype.rowSpacing;
Window_Selectable.prototype.rowSpacing = function() {
    return config.windowRowSpacing >= 0
        ? config.windowRowSpacing
        : _WindowSelectable_rowSpacing.call(this);
}

const _WindowSelectable_colSpacing = Window_Selectable.prototype.colSpacing;
Window_Selectable.prototype.colSpacing = function() {
    return config.windowColumnSpacing >= 0
        ? config.windowColumnSpacing
        : _WindowSelectable_colSpacing.call(this);
}

} // MZ

if ('MV' == Utils.RPGMAKER_NAME) {

const _WindowSelectable_itemHeight = Window_Selectable.prototype.itemHeight;
Window_Selectable.prototype.itemHeight = function() {
    return config.windowItemHeight || _WindowSelectable_itemHeight.call(this);
}

} // MV

// Override
Window_Command.prototype.drawItem = function(index) {

    !this.isCommandEnabled(index) && config.overrideDisabledTextColor
        ? this.changeTextColor(config.disabledTextColor)
        : this.resetTextColor();

    this.changePaintOpacity(this.isCommandEnabled(index));

    if (!this.iconTextStyle()) {
        const rect          = this.itemLineRect(index);
        const commandName   = stripTextExCommands(this.commandName(index)) || '';
        const iconIndex     = extractIconIndex(this.commandName(index));

        iconIndex
            ? this.drawItemAsIconAndText(iconIndex, commandName, rect)
            : this.drawItemAsText(commandName, rect);
    } else {
        const rect          = this.itemLineRect(index);
        const commandName   = stripTextExCommands(this.commandName(index)) || '';
        const iconIndex     = typeof this.commandIcon(index) == 'number'
                                ? this.commandIcon(index)
                                : extractIconIndex(this.commandName(index));

        switch (this.iconTextStyle()) {
            case 'both':
            case 'iconAndText':
                this.drawItemAsIconAndText(iconIndex, commandName, rect);
                break;
            
            case 'icon':
                this.drawItemAsIcon(iconIndex, rect);
                break;
            
            case 'text':
                this.drawItemAsText(commandName, rect);
                break;
        }
    }

    this.changePaintOpacity(true);
    this.resetTextColor();
}

Window_Command.prototype.drawItemAsIconAndText = function(iconIndex, commandName, rect) {
    this.drawIcon(
        iconIndex,
        rect.x,
        rect.y + rect.height / 2 - ImageManager.iconHeight / 2,
    ); 
    this.drawText(
        commandName,
        rect.x + ImageManager.iconWidth + this.iconTextGap(),
        rect.y,
        rect.width - ImageManager.iconWidth - this.iconTextGap(),
        this.itemTextAlign(),
    );
}

Window_Command.prototype.iconTextGap = function() {
    return 8;
}

Window_Command.prototype.drawItemAsText = function(commandName, rect) {
    this.drawText(
        commandName,
        rect.x,
        rect.y,
        rect.width,
        this.itemTextAlign(),
    );
}

Window_Command.prototype.drawItemAsIcon = function(iconIndex, rect) {
    let x;
    const align = this.itemTextAlign();
    if ('left' == align)    x = rect.x;
    if ('center' == align)  x = rect.x + rect.width / 2 - ImageManager.iconWidth / 2;
    if ('right' == align)   x = rect.x + rect.width - ImageManager.iconWidth;

    this.drawIcon(
        iconIndex,
        x,
        rect.y + rect.height / 2 - ImageManager.iconHeight / 2,
    );
}

Window_Command.prototype.commandIcon = function(index) {
    return null; // to be overridden
}

function extractIconIndex(text) {
    const match = text && text.match(/\\I\[(\d+)\]/);
    return match ? Number(match[1]) : undefined;
}

function stripTextExCommands(text) {
    if (text) {
        return text
            .replace(/\\I\[\d+\]/g, '') // remove icon commands
            .replace(/\\C\[\d+\]/g, '') // remove color commands
            .trim();
    }
}

Window_Command.prototype.iconTextStyle = function() {
    return null; // to be overridden
}

const _WindowBase_translucentOpacity = Window_Base.prototype.translucentOpacity;
Window_Base.prototype.translucentOpacity = function() {
    return config.disabledTextOpacity >= 0
        ? config.disabledTextOpacity
        : _WindowBase_translucentOpacity.call(this);
}


// =====================================================================================
// Cursor
// =====================================================================================

if ('MV' == Utils.RPGMAKER_NAME) {

Window.prototype._makeCursorAlpha = function() {
    const blinkCount = this._animationCount % 40;
    const cursorOpacity = this.contentsOpacity;

    if (this.active && blinkCount < 20) {
        return (cursorOpacity - blinkCount * 8) / 255;
    }
    if (this.active) {
        return (cursorOpacity - (40 - blinkCount) * 8) / 255;
    }
    return cursorOpacity / 255;
}

// Override
Window.prototype._updateCursor = function() {
    this._windowCursorSprite.alpha = this._makeCursorAlpha();
    this._windowCursorSprite.visible = this.isOpen();
}

} // MV

// make Cursor (not) blink
const _WindowSelectable_makeCursorAlpha = Window_Selectable.prototype._makeCursorAlpha;
Window_Selectable.prototype._makeCursorAlpha = function() {
    return config.blinkCursor !== false
        ? _WindowSelectable_makeCursorAlpha.call(this)
        : 1;
}

// hide default cursor
const _WindowSelectable_createCursorSprite = Window_Selectable.prototype._createCursorSprite;
Window_Selectable.prototype._createCursorSprite = function() {
    _WindowSelectable_createCursorSprite.call(this);

    if ('image' == config.cursorStyle) {
        if (this._cursorSprite)         this._cursorSprite.visible = false;
        if (this._windowCursorSprite)   this._windowCursorSprite.visible = false;
    }
}

// hide default cursor
const _WindowSelectable_updateCursor = Window_Selectable.prototype._updateCursor;
Window_Selectable.prototype._updateCursor = function() {
    _WindowSelectable_updateCursor.call(this);

    if ('image' == config.cursorStyle) {
        if (this._cursorSprite)         this._cursorSprite.visible = false;
        if (this._windowCursorSprite)   this._windowCursorSprite.visible = false;
    }
}

// add custom cursor to Scene
const _SceneBase_start = Scene_Base.prototype.start;
Scene_Base.prototype.start = function() {
    _SceneBase_start.call(this);

    if ('image' == config.cursorStyle) {
        this.createCursorLayer();
    }
}

Scene_Base.prototype.createCursorLayer = function() {
    this._cursorLayer = new CursorLayer();
    this.addChild(this._cursorLayer);
}

function CursorLayer() {
    this.initialize.call(this, ...arguments);
}

CursorLayer.prototype = Object.create(Sprite.prototype);
CursorLayer.prototype.constructor = CursorLayer;

CursorLayer.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
    
    this.createCursorSprites();
}

CursorLayer.prototype.createCursorSprites = function() {
    const windowLayer = SceneManager._scene && SceneManager._scene._windowLayer;

    if (windowLayer) {
        windowLayer.children
            .filter(gameWindow => gameWindow instanceof Window_Selectable)
            .forEach(gameWindow => {
                const cursorSprites = new Sprite_Cursors(gameWindow);
                this.addChild(cursorSprites);
            });
    }
}

function Sprite_Cursors() {
    this.initialize.call(this, ...arguments);
}

Sprite_Cursors.prototype = Object.create(Sprite.prototype);
Sprite_Cursors.prototype.constructor = Sprite_Cursors;

Sprite_Cursors.prototype.initialize = function(gameWindow) {
    if (!gameWindow) throw Error('Must have a Game Window.');
    
    this._window = gameWindow;
    this._maxItems = gameWindow.maxItems();

    Sprite.prototype.initialize.call(this);

    this.refreshCursorSprites();
}

Sprite_Cursors.prototype.refreshCursorSprites = function() {
    this.removeChildren();
    this.createCursorSprites();

    this._maxItems = this._window.maxItems();
}

Sprite_Cursors.prototype.createCursorSprites = function() {
    for (let index = 0; index < this._window.maxItems(); index++) {
        const cursorSprite = new CursorSprite(this._window, index);
        cursorSprite.update();
        
        this.addChild(cursorSprite);
    }
}

Sprite_Cursors.prototype.update = function() {
    Sprite.prototype.update.call(this);

    const maxItems = this._window.maxItems();

    if (this._maxItems < maxItems) {
        this.refreshCursorSprites();
    }
}


function CursorSprite() {
    this.initialize.call(this, ...arguments);
}

CursorSprite.prototype = Object.create(Sprite.prototype);
CursorSprite.prototype.constructor = CursorSprite;

CursorSprite.prototype.initialize = function(gameWindow, index) {
    if (gameWindow === undefined)   throw Error('Must have a Game Window.');
    if (index === undefined)        throw Error('Must have an index.');
    
    this._window = gameWindow;
    this._index = index;

    const bitmap = this.getBitmap();
    
    if (bitmap) {
        Sprite.prototype.initialize.call(this, bitmap);
    } else {
        Sprite.prototype.initialize.call(this);
    }
}

CursorSprite.prototype.getBitmap = function() {
    return ImageManager.loadBitmapFromFilepath(config.cursorBackgroundFile);
}

CursorSprite.prototype.update = function() {
    Sprite.prototype.update.call(this);

    this.anchor.x = 0;
    this.anchor.y = 0.5;
    this.updatePosition();

    this.visible = this.isVisible();
    this.opacity = this.getOpacity();
}

CursorSprite.prototype.updatePosition = function() {
    const rect = this._window.itemRect(this._index);

    this.x = this._window.x + rect.x + (config.cursorAdjustX || 0);
    this.y = this._window.y + rect.y + rect.height / 2 + (config.cursorAdjustY || 0);
}

CursorSprite.prototype.isVisible = function() {
    return this._window.isOpenAndActive() && (
        this._window.index() == this._index ||
        this._window.cursorAll()
    );
}

CursorSprite.prototype.getOpacity = function() {
    return 255 * this._window._makeCursorAlpha();
}


// =====================================================================================
// Menu Background & Actor Portrait
// =====================================================================================

Scene_MenuBase.prototype.backgroundType = function() {
    return config.sceneBackgroundType || 'mapSprite';
}

Scene_MenuBase.prototype.backgroundFile = function() {
    return config.sceneBackgroundFile;
}

Scene_MenuBase.prototype.backgroundEffects = function() {
    return config.sceneBackgroundEffects || 'blurred';
}

// Override
Scene_MenuBase.prototype.createBackground = function() {
    this.createBackgroundSprite();
    this.createBackgroundFilters();
    this.addChild(this._backgroundSprite);
}

Scene_MenuBase.prototype.createBackgroundSprite = function() {
    const bitmap = ImageManager.loadBitmapFromFilepath(this.backgroundFile());
    
    if (this.backgroundType() == 'mapSprite') {
        this._backgroundSprite = new Sprite();
        this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
    }
    else if (this.backgroundType() == 'image' && bitmap) {
        this._backgroundSprite = new Sprite(bitmap);
        this._backgroundSprite.scale.x = Graphics.width / bitmap.width;
        this._backgroundSprite.scale.y = Graphics.height / bitmap.height;
    }
    else {
        this._backgroundSprite = new Sprite();
    }
}


Scene_MenuBase.prototype.createBackgroundFilters = function() {
    if (Utils.RPGMAKER_NAME != 'MZ') {
        return; // not supported
    }

    switch (this.backgroundEffects()) {
        case 'blurred':
            this._backgroundFilter = new PIXI.filters.BlurFilter();
            this._backgroundSprite.filters = [this._backgroundFilter];
            break;
        
        case 'blackWhite':
            this._backgroundFilter = new PIXI.filters.ColorMatrixFilter();
            this._backgroundFilter.desaturate();
            this._backgroundSprite.filters = [this._backgroundFilter];
            break;
        
        case 'sepia':
            this._backgroundFilter = new PIXI.filters.ColorMatrixFilter();
            this._backgroundFilter.sepia();
            this._backgroundSprite.filters = [this._backgroundFilter];
            break;
        
        default:
            this._backgroundFilter = new PIXI.filters.BlurFilter();
            this._backgroundSprite.filters = [ ]; // no filter
            break;
    }
}

if (Utils.RPGMAKER_NAME == 'MV') {

SceneManager.snapForBackground = function() {
    this._backgroundBitmap = this.snap();

    if (!config.sceneBackgroundEffects || config.sceneBackgroundEffects == 'blurred') {
        this._backgroundBitmap.blur();
    }
}

} // MV


// =====================================================================================
// Actor Portraits
// =====================================================================================


const _SceneMenuBase_createBackground2 = Scene_MenuBase.prototype.createBackground;
Scene_MenuBase.prototype.createBackground = function() {
    _SceneMenuBase_createBackground2.call(this);

    if (this.actorPortraitEnabled()) {
        this._actorPortrait = new Sprite_ActorPortrait();
        this._actorPortrait.getActorPortrait = this.getActorPortrait.bind(this);
        this._actorPortrait.setActor(this.actor());
        
        const pos = this.actorPortraitPosition().toLowerCase();
        if (pos.includes('center')) {
            this._actorPortrait.x = Graphics.boxWidth / 2;
            this._actorPortrait.anchor.x = 0.5;
        }
        if (pos.includes('right')) {
            this._actorPortrait.x = Graphics.boxWidth;
            this._actorPortrait.anchor.x = 1.0;
        }
        if (pos.includes('middle')) {
            this._actorPortrait.y = Graphics.boxHeight / 2;
            this._actorPortrait.anchor.y = 0.5;
        }
        if (pos.includes('bottom')) {
            this._actorPortrait.y = Graphics.boxHeight;
            this._actorPortrait.anchor.y = 1.0;
        }
        this._actorPortrait.x += this.actorPortraitOffsetX();
        this._actorPortrait.y += this.actorPortraitOffsetY();
        this._actorPortrait.scale.x = this.actorPortraitScale();
        this._actorPortrait.scale.y = this.actorPortraitScale();

        this.addChild(this._actorPortrait);
    }
}

// to be overidden
Scene_MenuBase.prototype.actorPortraitEnabled = function() {
    return false;
}

// to be overidden
Scene_MenuBase.prototype.getActorPortrait = function(actor) {
    return actor ? actor.menuPortrait() : undefined;
}

// to be overidden
Scene_MenuBase.prototype.actorPortraitPosition = function() {
    return 'bottomRight';
}

// to be overidden
Scene_MenuBase.prototype.actorPortraitOffsetX = function() {
    return 0;
}

// to be overidden
Scene_MenuBase.prototype.actorPortraitOffsetY = function() {
    return 0;
}

// to be overidden
Scene_MenuBase.prototype.actorPortraitScale = function() {
    return 1.0;
}

const _SceneMenuBase_updateActor = Scene_MenuBase.prototype.updateActor;
Scene_MenuBase.prototype.updateActor = function() {
    _SceneMenuBase_updateActor.call(this);

    this._actorPortrait && this._actorPortrait.setActor(this.actor());
}

const _GameActor_refresh = Game_Actor.prototype.refresh;
Game_Actor.prototype.refresh = function() {
    _GameActor_refresh.call(this);

    const scene = SceneManager._scene;
    if (scene._actorPortrait) {
        scene._actorPortrait.setActor(this);
    }
}


function Sprite_ActorPortrait() {
    this.initialize(...arguments);
}

Sprite_ActorPortrait.prototype = Object.create(Sprite.prototype);
Sprite_ActorPortrait.prototype.constructor = Sprite_ActorPortrait;

Sprite_ActorPortrait.prototype.setActor = function(actor) {
    const actor2 = actor ? $gameActors.actor(actor.actorId()) : null;
    const nextPictureName = this.getActorPortrait(actor2);

    if (this._pictureName != nextPictureName) {
        this._pictureName = nextPictureName;
        this.bitmap = ImageManager.loadPicture(nextPictureName);
    }
}



// =====================================================================================
// Game Actor
// =====================================================================================

const actorPortraits = { };

(parameterStructure(params.actorPortraits, 'Actor Portraits') || [ ])
    .map((entry, index) => parameterStructure(entry, 'Actor Portraits - Entry ' + (index + 1), true))
    .map(({ actorId, pictureName }) => ({
        actorId: Number(actorId),
        pictureName: pictureName ? pictureName.trim() : null,
    }))
    .filter(entry => entry.actorId && entry.pictureName)
    .forEach(({actorId, pictureName }) => actorPortraits[actorId] = pictureName);

const actorPortraitOverrideRules = (parameterStructure(params.actorPortraitOverrides, 'Actor Conditional Portraits') || [ ])
    .map((entry, index) => parameterStructure(entry, 'Actor Conditional Portraits - Entry ' + (index + 1), true))
    .map((rule, index) => ({
        actorId:            Number(rule.actorId),
        classIds:           jsonNumberList(rule.classIds),
        weaponStatus:       (rule.weaponStatus && rule.weaponStatus != '<ignore>') ? rule.weaponStatus : null,
        weapons:            jsonNumberList(rule.weapons),
        armors:             jsonNumberList(rule.armors),
        deathCrisisState:   (rule.deathCrisisState && rule.deathCrisisState != '<ignore>') ? rule.deathCrisisState : null,
        stateIds:           jsonNumberList(rule.stateIds),
        switchId:           Number(rule.switchId),
        script:             customFunction(rule.script, 'Actor Conditional Portraits Rule Script ' + (index + 1), false),
        pictureName:        rule.pictureName ? rule.pictureName.trim() : null,
    }))
    .filter(rule => rule.pictureName);


function findFirstMatchingRule(actor) {
    return actorPortraitOverrideRules.find(rule =>
        (!rule.actorId          || rule.actorId == actor.actorId()) &&
        (!rule.classIds.length  || rule.classIds.includes(actor.classId())) &&
        (!rule.weapons.length   || rule.weapons.some(weaponId => actor.hasWeapon($dataWeapons[weaponId]))) &&
        (!rule.armors.length    || rule.armors.some(armorId => actor.hasArmor($dataArmors[armorId]))) &&
        (!rule.stateIds.length  || rule.stateIds.some(stateId => actor.isStateAffected(stateId))) &&
        (!rule.switchId         || $gameSwitches.value(rule.switchId)) &&
        (!rule.script           || rule.script.call(null, actor)) &&

        checkWeaponStatus(rule.weaponStatus, actor) &&
        checkDeathCrisisState(rule.deathCrisisState, actor)
    );
}

function checkWeaponStatus(status, actor) {
    switch (status) {
        case 'unarmed':                 return actor.hasNoWeapons();
        case 'any weapon equipped':     return !actor.hasNoWeapons();
        default:                        return true;
    }
}

function checkDeathCrisisState(mode, actor) {
    switch (mode) {
        case 'healthy':                             return !actor.isDead() && !actor.isDying() && !actor.states().some(state => [1, 2].includes(state.motion));
        case 'dead':                                return actor.isDead();
        case 'crisis OR abnormal state':            return actor.isDying() || actor.states().some(state => [1, 2].includes(state.motion));
        case 'crisis OR abnormal state OR dead':    return actor.isDying() || actor.isDead() || actor.states().some(state => [1, 2].includes(state.motion));
        default:                                    return true;
    }
}

Game_Actor.prototype.menuPortrait = function() {
    const pictureName = [
        this._menuPortrait,
        findFirstMatchingRule(this) && findFirstMatchingRule(this).pictureName,
        actorPortraits[this.actorId()],
        this.actor().meta && this.actor().meta["Menu Portrait"],
    ].find(Boolean);

    return pictureName ? pictureName.trim() : null;
}

Game_Actor.prototype.setMenuPortrait = function(pictureName) {
    this._menuPortrait = pictureName;
}

Game_Actor.prototype.resetMenuPortrait = function() {
    this._menuPortrait = undefined;
}

const _SceneMenu_create3 = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function() {
    _SceneMenu_create3.call(this);

    // preload images
    Object.values(actorPortraits)
        .concat(actorPortraitOverrideRules.map(rule => rule.pictureName))
        .filter(Boolean)
        .forEach(pictureName => ImageManager.loadPicture(pictureName));
}


// =====================================================================================
// Status Window
// =====================================================================================

Window_MenuStatus.prototype.actor = function(index) {
    return $gameParty.members()[index];
}

function getBitmap(type, actor) {
    switch (type) {
        case 'face':        return ImageManager.loadFace(actor.faceName());
        case 'battler':     return ImageManager.loadSvActor(actor.battlerName());
        case 'mapSprite':   return ImageManager.loadCharacter(actor.characterName());
        case 'portrait':    return ImageManager.loadPicture(actor.menuPortrait());
    }
}

function pictureWidth(type, actor, bitmap) {
    if (!bitmap) return 0;

    if ('face' == type) {
        return ImageManager.faceWidth;
    }
    if ('battler' == type) {
        return bitmap.width / 9;
    }
    if ('mapSprite' == type) {
        const isBig = ImageManager.isBigCharacter(actor.characterName());
        return bitmap.width / (isBig ? 3 : 12);
    }
    return bitmap.width;
}

function pictureHeight(type, actor, bitmap) {
    if (!bitmap) return 0;
    
    if ('face' == type) {
        return ImageManager.faceHeight;
    }
    if ('battler' == type) {
        return bitmap.height / 6;
    }
    if ('mapSprite' == type) {
        const isBig = ImageManager.isBigCharacter(actor.characterName());
        return bitmap.height / (isBig ? 4 : 8);
    }
    return bitmap.height;
}

function sourceX(type, actor, bitmap) {
    if (!bitmap) return 0;
    
    if ('face' == type) {
        return (actor.faceIndex() % 4) * ImageManager.faceHeight;
    }
    if ('battler' == type) {
        return bitmap.width / 9;
    }
    if ('mapSprite' == type) {
        const isBig = ImageManager.isBigCharacter(actor.characterName());
        const n     = isBig ? 0 : actor.characterIndex();
        return ((n % 4) * 3 + 1) * pictureWidth(type, actor, bitmap);
    }
    return 0;
}

function sourceY(type, actor, bitmap) {
    if (!bitmap) return 0;

    if ('face' == type) {
        return Math.floor(actor.faceIndex() / 4) * ImageManager.faceHeight;
    }
    if ('battler' == type) {
        return 0;
    }
    if ('mapSprite' == type) {
        const isBig = ImageManager.isBigCharacter(actor.characterName());
        const n     = isBig ? 0 : actor.characterIndex();
        return Math.floor(n / 4) * 4 * pictureHeight(type, actor, bitmap);
    }
    return 0;
}

function getAnchorX(align) {
    if (align && align.toLowerCase().includes('center')) return 0.5;
    if (align && align.toLowerCase().includes('right'))  return 1;
    return 0;
}

function getAnchorY(align) {
    if (align && align.toLowerCase().includes('middle')) return 0.5;
    if (align && align.toLowerCase().includes('bottom')) return 1;
    return 0;
}

Window_MenuStatus.prototype.getBackOpacity = function() {
    return typeof config.statusOpacity == 'number'
        ? config.statusOpacity
        : Window_Base.prototype.getBackOpacity.call(this);
}

Window_MenuStatus.prototype.shouldOverrideWindowSkin = function() {
    return config.overrideStatusWindow;
}

Window_MenuStatus.prototype.getWindowSkinFile = function() {
    return config.statusWindowFile;
}

Window_MenuStatus.prototype.standardPadding = function() {
    return typeof config.statusPadding == 'number'
        ? config.statusPadding
        : Window_Base.prototype.standardPadding.call(this);
}

const _WindowMenuStatus_rowSpacing = Window_MenuStatus.prototype.rowSpacing;
Window_MenuStatus.prototype.rowSpacing = function() {
    return config.statusRowSpacing || config.statusRowSpacing === 0
        ? config.statusRowSpacing
        : _WindowMenuStatus_rowSpacing.call(this);
}

const _WindowMenuStatus_colSpacing = Window_MenuStatus.prototype.colSpacing;
Window_MenuStatus.prototype.colSpacing = function() {
    return config.statusColumnSpacing || config.statusColumnSpacing === 0
        ? config.statusColumnSpacing
        : _WindowMenuStatus_colSpacing.call(this);
}

Window_MenuStatus.prototype.getBackgroundType = function() {
    return config.statusBackgroundType;
}

Window_MenuStatus.prototype.getBackgroundFile = function() {
    return config.statusBackgroundFile;
}

Window_MenuStatus.prototype.getItemBackgroundType = function() {
    return config.statusItemBackgroundType;
}

Window_MenuStatus.prototype.getItemBackgroundFile = function() {
    return config.statusItemBackgroundFile;
}

const _WindowMenuStatus_createCursorSprite = Window_MenuStatus.prototype._createCursorSprite;
Window_MenuStatus.prototype._createCursorSprite = function() {
    const filepath = config.statusCursorBackgroundFile;
    
    if ('image' == config.statusCursorBackgroundType && filepath) {
        const bitmap = ImageManager.loadBitmapFromFilepath(filepath);

        this._cursorSprite = new Sprite(bitmap);
        this._cursorSprite.children = [ ];
        this._clientArea.addChild(this._cursorSprite);
    } else {
        _WindowMenuStatus_createCursorSprite.call(this);
    }
}

const _WindowMenuStatus_refreshCursor = Window_MenuStatus.prototype._refreshCursor;
Window_MenuStatus.prototype._refreshCursor = function() {
    if ('image' == config.statusCursorBackgroundType && config.statusCursorBackgroundFile) {
        //
    } else {
        _WindowMenuStatus_refreshCursor.call(this);
    }
}

const _WindowMenuStatus_updateCursor = Window_MenuStatus.prototype._updateCursor;
Window_MenuStatus.prototype._updateCursor = function() {
    if ('image' == config.statusCursorBackgroundType && config.statusCursorBackgroundFile) {
        if (this._cursorSprite) {
            this._cursorSprite.alpha    = config.statusBlinkCursor ? this._makeCursorAlpha() : 255;
            this._cursorSprite.visible  = this.isOpenAndActive() && this.cursorVisible;
            this._cursorSprite.x        = this._cursorRect.x;
            this._cursorSprite.y        = this._cursorRect.y;
            this._cursorSprite.scale.x  = this._cursorRect.width / this._cursorSprite.width;
            this._cursorSprite.scale.y  = this._cursorRect.height / this._cursorSprite.height;
        }
    } else {
        _WindowMenuStatus_updateCursor.call(this);
    }
}

const _WindowMenuStatus_drawPendingItemBackground = Window_MenuStatus.prototype.drawPendingItemBackground;
Window_MenuStatus.prototype.drawPendingItemBackground = function(index) {
    if ('image' == config.statusPendingBackgroundType) {
        if (index !== this._pendingIndex) return;
        
        const rect      = this.itemRect(index);
        const filepath  = config.statusPendingBackgroundFile;
        const bitmap    = ImageManager.loadBitmapFromFilepath(filepath);

        if (!bitmap) return;
        if (!bitmap.isReady()) return;

        this.contents.blt(
            bitmap,
            0,
            0,
            bitmap.width,
            bitmap.height,
            rect.x,
            rect.y,
            rect.width,
            rect.height,
        );
    } else {
        _WindowMenuStatus_drawPendingItemBackground.call(this, index);
    }
}

// Override
Window_MenuStatus.prototype.drawItemImage = function(index) {
    const actor = this.actor(index);
    const rect = this.faceRect(index);

    this.changePaintOpacity(!this.shouldUseTranslucentOpacity(index));
    this.drawActorFace(actor, rect.x, rect.y, rect.width, rect.height);
    this.changePaintOpacity(true);

    if (this.isShadowBoxEnabled()) {
        this.drawShadowBox(index);
    }
}

Window_MenuStatus.prototype.shouldUseTranslucentOpacity = function(index) {
    const actor = this.actor(index);
    return !(actor && actor.isBattleMember());
}

Window_MenuStatus.prototype.faceRect = function(index) {
    const actor     = this.actor(index);
    const type      = this.portraitRenderType();
    const bitmap    = getBitmap(type, actor);

    if (bitmap) {
        const pw        = pictureWidth(type, actor, bitmap);
        const ph        = pictureHeight(type, actor, bitmap);
        const scale     = this.portraitScale();
        const xCrop1    = Math.max(pw * scale - this.itemRect(index).width, 0) / scale;
        const yCrop1    = Math.max(ph * scale - this.itemRect(index).height, 0) / scale;
        const xCrop     = xCrop1 + 2 * this.portraitCropX();
        const yCrop     = yCrop1 + 2 * this.portraitCropY();

        const sw = Math.max(pw - xCrop, 0);
        const sh = Math.max(ph - yCrop, 0);

        const xAnchor = getAnchorX(this.portraitPosition());
        const yAnchor = getAnchorY(this.portraitPosition());

        const dx    = this.itemRect(index).x
                        + this.itemRect(index).width * xAnchor
                        - sw * scale * xAnchor
                        + this.portraitOffsetX();
        const dy    = this.itemRect(index).y
                        + this.itemRect(index).height * yAnchor
                        - sh * scale * yAnchor
                        + this.portraitOffsetY();

        return new Rectangle(dx, dy, sw * scale, sh * scale);
    }
    return new Rectangle();
}

// Override
Window_MenuStatus.prototype.drawActorFace = function(actor, x, y, width, height) {
    const type      = this.portraitRenderType();
    const bitmap    = getBitmap(type, actor);

    if (bitmap) {
        const pw        = pictureWidth(type, actor, bitmap);
        const ph        = pictureHeight(type, actor, bitmap);
        const scale     = this.portraitScale();
        const xCrop1    = Math.max(pw * scale - this.itemRect(0).width, 0) / scale;
        const yCrop1    = Math.max(ph * scale - this.itemRect(0).height, 0) / scale;
        const xCrop     = xCrop1 + 2 * this.portraitCropX();
        const yCrop     = yCrop1 + 2 * this.portraitCropY();

        const sw = Math.max(pw - xCrop, 0);
        const sh = Math.max(ph - yCrop, 0);
        const sx = sourceX(type, actor, bitmap) + (pw - sw) / 2;
        const sy = sourceY(type, actor, bitmap) + (ph - sh) / 2;
        
        this.contents.blt(
            bitmap,
            sx,
            sy,
            sw,
            sh,
            x,
            y,
            width,
            height,
        );
    }
}

Window_MenuStatus.prototype.portraitRenderType = function() {
    return config.statusRenderType || 'face';
}

Window_MenuStatus.prototype.portraitPosition = function() {
    return config.actorImagePosition || 'middleLeft';
}

Window_MenuStatus.prototype.portraitOffsetX = function() {
    return config.actorImageOffsetX || 0;
}

Window_MenuStatus.prototype.portraitOffsetY = function() {
    return config.actorImageOffsetY || 0;
}

Window_MenuStatus.prototype.portraitScale = function() {
    return (config.actorImageScale || 100) / 100;
}

Window_MenuStatus.prototype.portraitCropX = function() {
    return config.actorImageCropX || 0;
}

Window_MenuStatus.prototype.portraitCropY = function() {
    return config.actorImageCropY || 0;
}

Window_MenuStatus.prototype.isShadowBoxEnabled = function() {
    return config.showShadowBox !== false;
}

Window_MenuStatus.prototype.drawShadowBox = function(index) {
    const rectangle = this.itemRect(index);
    const x         = (config.shadowBoxX || 0) + rectangle.x;
    const y         = (config.shadowBoxY || 0) + rectangle.y;
    const width     = Math.min(
                        config.shadowBoxWidth || rectangle.width,
                        rectangle.width - (config.shadowBoxX || 0),
                    );
    const height    = Math.min(
                        config.shadowBoxHeight || rectangle.height,
                        rectangle.height - (config.shadowBoxY || 0),
                    );
    const direction = config.shadowBoxGradientDirection || 'left';
    const power     = (config.shadowBoxGradientPower !== undefined
                        ? config.shadowBoxGradientPower
                        : 10
                    ).clamp(0, 100);
    const delta     = (['top', 'bottom'].includes(direction) ? height : width) * (power / 100);

    const width2    = ['left', 'right'].includes(direction) ? delta : width;
    const height2   = ['top', 'bottom'].includes(direction) ? delta : height;
    const width1    = ['left', 'right'].includes(direction) ? width - width2 : width;
    const height1   = ['top', 'bottom'].includes(direction) ? height - height2 : height;

    const x1        = 'left' == direction ? x + width2 : x;
    const y1        = 'top' == direction ? y + height2 : y;
    const x2        = 'right' == direction ? x + width1 : x;
    const y2        = 'bottom' == direction ? y + height1 : y;

    const opacity   = config.shadowBoxOpacity || config.shadowBoxOpacity === 0 ? config.shadowBoxOpacity : (255 * 0.6);
    const color     = hexToRGBA(config.shadowBoxColor, opacity) || getColor(0, 0, 0, 0.6);
    const color1    = ['bottom', 'right'].includes(direction) ? color : getColor(0, 0, 0, 0);
    const color2    = ['top', 'left'].includes(direction) ? color : getColor(0, 0, 0, 0);
    
    this.contents.fillRect(x1, y1, width1, height1, color);
    this.contents.gradientFillRect(
        x2,
        y2,
        width2,
        height2,
        color1,
        color2,
        ['top', 'bottom'].includes(direction),
    );
}

const hexToRGBA = (hex, opacity) => {
    if (!hex) return;

    const r = hexToDec(hex.slice(1, 3));
    const g = hexToDec(hex.slice(3, 5));
    const b = hexToDec(hex.slice(5, 7));
    return getColor(r, g, b, opacity / 255);
}

const hexToDec = (hex) => Number('0x' + hex);
const getColor = (r = 0, g = 0, b = 0, a = 0) => 'rgba(%1, %2, %3, %4)'.format(r, g, b, a);


// Override
Window_MenuStatus.prototype.drawItemStatus = function(index) {
    const actor = this.actor(index);
    
    if (this.shouldDrawActorName()) {
        this.drawActorName(
            actor,
            this.actorNamePos(index).x,
            this.actorNamePos(index).y,
            this.actorNameWidth(),
        );
    }

    if (this.shouldDrawActorClass()) {
        this.drawActorClass(
            actor,
            this.classNamePos(index).x,
            this.classNamePos(index).y,
            config.classWidth || 2 * this.textWidth('01234567890'),
        );
    }

    this.drawActorLevel(actor,      this.levelPos(index).x,         this.levelPos(index).y);
    this.drawActorIcons(actor,      this.statusIconsPos(index).x,   this.statusIconsPos(index).y,   this.innerWidth);
    this.drawActorHpMpTp(actor,     this.hpMpPos(index).x,          this.hpMpPos(index).y);
}

Window_MenuStatus.prototype.shouldDrawActorName = function() {
    return config.showName !== false;
}

Window_MenuStatus.prototype.shouldDrawActorClass = function() {
    return config.showClass !== false;
}

Window_Base.prototype.drawActorHpMpTp = function(actor, x, y) {
    if (config.showHpMode == 'none') {
        return;
    }
    if (Utils.RPGMAKER_NAME == 'MZ') {
        this.placeBasicGauges(actor, x, y);
    }
    if (Utils.RPGMAKER_NAME == 'MV') {
        if (this.showHp(actor)) {
            this.drawActorHp(actor, x, y, this.hpMpTpBoxWidth());
            y += this.gaugeLineHeight();
        }
        if (this.showMp(actor)) {
            this.drawActorMp(actor, x, y, this.hpMpTpBoxWidth());
            y += this.gaugeLineHeight();
        }
        if (this.showTp(actor)) {
            this.drawActorTp(actor, x, y, this.hpMpTpBoxWidth());
        }
    }
}

Window_MenuStatus.prototype.actorNamePos = function(index) {
    return getTextPos(
        this,
        index,
        this.actorNameWidth(),
        this.textHeightByFontSize(config.nameFontSize),
        this.actorNameHorzAlign(),
        this.actorNameVertAlign(),
        this.actorNameOffsetX(),
        this.actorNameOffsetY(),
    );
}

Window_MenuStatus.prototype.actorNameHorzAlign = function() {
    return config.nameHorzAlign || 'center';
}

Window_MenuStatus.prototype.actorNameVertAlign = function() {
    return config.nameVertAlign || 'top';
}

Window_MenuStatus.prototype.actorNameOffsetX = function() {
    return config.nameX || 0;
}

Window_MenuStatus.prototype.actorNameOffsetY = function() {
    return config.nameY || 0;
}

Window_MenuStatus.prototype.actorNameWidth = function() {
    return config.nameWidth || (2 * this.textWidth('01234567890'));
}

Window_MenuStatus.prototype.classNamePos = function(index) {
    return getTextPos(
        this,
        index,
        config.classWidth || 2 * this.textWidth('01234567890'),
        this.textHeightByFontSize(config.classFontSize),
        config.classHorzAlign || 'right',
        config.classVertAlign || 'top',
        config.classX,
        config.classY,
    );
}

Window_MenuStatus.prototype.levelPos = function(index) {
    return getTextPos(
        this,
        index,
        this.levelInfoWidth(),
        this.textHeightByFontSize(config.levelFontSize),
        config.levelInfoHorzAlign || 'center',
        config.levelInfoVertAlign || 'bottom',
        config.levelX,
        config.levelY,
    );
}

Window_MenuStatus.prototype.levelInfoWidth = function() {
    if (config.showLevelMode == 'text') {
        return this.textWidth(TextManager.levelA)
            + (config.levelGap || 48)
            + this.textWidth('99');
    }

    return coalesce(
        config.expGaugeWidth,
        config.gaugeWidth,
        200,
    );
}

Window_MenuStatus.prototype.statusIconsPos = function(index) {
    const actor     = this.actor(index);
    const icons     = actor.allIcons().slice(0, config.statusEffectsMaxIcons || 8);
    const boxWidth  = icons.length * ImageManager.iconWidth;
    
    return getTextPos(
        this,
        index,
        boxWidth,
        ImageManager.iconHeight,
        this.statusEffectsHorzAlign(),
        this.statusEffectsVertAlign(),
        this.statusEffectsOffsetX(),
        this.statusEffectsOffsetY(),
    );
}

Window_MenuStatus.prototype.statusEffectsHorzAlign = function() {
    return config.statusEffectsHorzAlign || 'left';
}

Window_MenuStatus.prototype.statusEffectsVertAlign = function() {
    return config.statusEffectsVertAlign || 'middle';
}

Window_MenuStatus.prototype.statusEffectsOffsetX = function() {
    return config.statusEffectsX || 0;
}

Window_MenuStatus.prototype.statusEffectsOffsetY = function() {
    return config.statusEffectsY || 0;
}

Window_MenuStatus.prototype.hpMpPos = function(index) {
    return getTextPos(
        this,
        index,
        this.hpMpTpBoxWidth(),
        this.hpMpTpBoxHeight(index),
        this.hpMpTpHorzAlign(),
        this.hpMpTpVertAlign(),
        this.hpMpTpOffsetX(),
        this.hpMpTpOffsetY() - 2,
    );
}

function getTextPos(gameWindow, index, boxWidth, boxHeight, horzAlign, vertAlign, xOffset, yOffset) {
    const rectangle = gameWindow.itemRect(index);
    const xAnchor   = getAnchorX(horzAlign);
    const yAnchor   = getAnchorY(vertAlign);

    const x = rectangle.x
                + (rectangle.width * xAnchor)
                - (xAnchor * boxWidth)
                + (xOffset || 0);
    const y = rectangle.y
                + (rectangle.height * yAnchor)
                - (boxHeight * yAnchor)
                + (yOffset || 10);
    
    return { x, y };
}

Window_MenuStatus.prototype.hpMpTpHorzAlign = function() {
    return config.hpGaugeHorzAlign || 'right';
}

Window_MenuStatus.prototype.hpMpTpVertAlign = function() {
    return config.hpGaugeVertAlign || 'bottom';
}

Window_MenuStatus.prototype.hpMpTpOffsetX = function() {
    return config.hpGaugeX || 0;
}

Window_MenuStatus.prototype.hpMpTpOffsetY = function() {
    return config.hpGaugeY || 0;
}

Window_MenuStatus.prototype.hpMpTpBoxWidth = function() {
    return coalesce(
        config.hpGaugeWidth,
        config.gaugeWidth,
        200,
    );
}

Window_MenuStatus.prototype.hpMpTpBoxHeight = function(index) {
    return this.numberOfHpMpTp(this.actor(index)) * this.gaugeLineHeight();
}

Window_Base.prototype.numberOfHpMpTp = function(actor) {
    return [
        this.showHp(actor),
        this.showMp(actor),
        this.showTp(actor),
    ]
    .filter(Boolean)
    .length;
}

Window_MenuStatus.prototype.gaugeLineHeight = function() {
    if (typeof config.hpGaugeVerticalSpace == 'number') {
        return config.hpGaugeVerticalSpace;
    }
    return Utils.RPGMAKER_NAME == 'MZ'
        ? Window_StatusBase.prototype.gaugeLineHeight.call(this)
        : Window_Base.prototype.lineHeight.call();
}

// Override
Window_MenuStatus.prototype.drawActorName = function(actor, x, y, width) {
    width = width || (2 * this.textWidth('01234567890'));

    if ('none' != config.nameBackgroundType) {
        this.drawHorzGradient(
            x - 8,
            y,
            width + 16,
            this.textHeightByFontSize(config.nameFontSize),
            this.nameTextAlign(),
            ColorManager.dimColor1(),
            ColorManager.dimColor2(),
        );
    }
    
    this.setFontSize(config.nameFontSize);
    this.changeTextColor(this.nameTextColor(actor));
    this.drawText(actor.name(), x, y, width, this.nameTextAlign());
    this.resetFontSettings();
}

Window_MenuStatus.prototype.nameTextColor = function(actor) {
    if (actor && actor.isDying())   return ColorManager.crisisColor();
    if (actor && actor.isDead())    return ColorManager.deathColor();
    
    return ColorManager.textColor(config.nameTextColor || 0);
}

Window_MenuStatus.prototype.nameTextAlign = function() {
    return config.nameTextAlign || 'left';
}

Window_Base.prototype.drawHorzGradient = function(x, y, width, height, textAlign, color1, color2) {
    if ('left' == textAlign) {
        this.contents.gradientFillRect(x, y, width, height, color1, color2);
    }
    if ('center' == textAlign || !textAlign) {
        this.contents.gradientFillRect(x, y, width / 2, height, color2, color1);
        this.contents.gradientFillRect(x + width / 2, y, width / 2, height, color1, color2);
    }
    if ('right' == textAlign) {
        this.contents.gradientFillRect(x, y, width, height, color2, color1);
    }
}

Sprite.prototype.drawHorzGradient = function(x, y, width, height, textAlign, color1, color2) {
    if ('left' == textAlign) {
        this.bitmap.gradientFillRect(x, y, width, height, color1, color2);
    }
    if ('center' == textAlign || !textAlign) {
        this.bitmap.gradientFillRect(x, y, width / 2, height, color2, color1);
        this.bitmap.gradientFillRect(x + width / 2, y, width / 2, height, color1, color2);
    }
    if ('right' == textAlign) {
        this.bitmap.gradientFillRect(x, y, width, height, color2, color1);
    }
}

// Override
Window_MenuStatus.prototype.drawActorClass = function(actor, x, y, width) {
    this.resetFontSettings();
    this.setFontSize(config.classFontSize);
    this.changeTextColor(this.classTextColor());
    
    this.drawText(
        actor.currentClass().name,
        x,
        y,
        width || 2 * this.textWidth('01234567890'),
        config.classTextAlign || 'right',
    );
    
    this.resetFontSettings();
}

Window_MenuStatus.prototype.classTextColor = function() {
    return ColorManager.textColor(coalesce(config.classTextColor, 16));
}

// Override
Window_MenuStatus.prototype.drawActorLevel = function(actor, x, y) {
    const showLevelMode = config.showLevelMode || 'gauge';

    if (showLevelMode == 'text') {
        this.drawActorLevelAsText(actor, x, y);
    }
    if (showLevelMode == 'gauge' && Utils.RPGMAKER_NAME == 'MZ') {
        this.placeGauge(actor, 'exp', x, y);
    }
    if (showLevelMode == 'gauge' && Utils.RPGMAKER_NAME == 'MV') {
        this.drawActorLevelGaugeMV(actor, x, y);
    }
}

Window_Base.prototype.drawActorLevelAsText = function(actor, x, y) {
    this.resetFontSettings();
    this.setFontSize(config.levelFontSize);
    this.changeTextColor(ColorManager.textColor(config.levelTextColor1));
    this.drawText(TextManager.levelA, x, y, 48);

    this.changeTextColor(ColorManager.textColor(config.levelTextColor2));
    this.drawText(actor.level, x + (config.levelGap || 48), y, 36, 'right');
    this.resetFontSettings();
}

// MV
Window_Base.prototype.drawActorLevelGaugeMV = function(actor, x, y) {
    const maxValue      = actor.nextLevelExp() - actor.currentLevelExp();
    const currentValue  = actor.isMaxLevel() ? maxValue : actor.currentExp() - actor.currentLevelExp();

    this.drawGaugeGenericMV(
        x,
        y,
        this.levelInfoWidth(),
        currentValue,
        maxValue,
        this.gaugeColorExp1(actor),
        this.gaugeColorExp2(actor),
        TextManager.levelA,
        actor.level,
    );
}

// MV
Window_Base.prototype.drawGaugeGenericMV = function(
    x,
    y,
    width,
    currentValue,
    maxValue,
    color1,
    color2,
    label,
    valueText,
) {
    const rate = maxValue > 0 ? currentValue / maxValue : 0;

    this.drawGauge(x, y, width, rate, color1, color2);
    
    if (label)      this.drawText(label, x, y, 44);
    if (valueText)  this.drawText(valueText, x, y, width, 'right');
}

Window_Base.prototype.gaugeColorExp1 = function(actor) {
    return (actor.isMaxLevel() ? config.gaugeColorExpMaxed1 : config.gaugeColorExp1) || '#FFFFFF';
}

Window_Base.prototype.gaugeColorExp2 = function(actor) {
    return (actor.isMaxLevel() ? config.gaugeColorExpMaxed2 : config.gaugeColorExp2) || '#FFFFFF';
}

if (Utils.RPGMAKER_NAME == 'MZ') {

// Override
Window_StatusBase.prototype.placeBasicGauges = function(actor, x, y) {
    const showHp = this.showHp(actor);
    const showMp = this.showMp(actor);
    const showTp = this.showTp(actor);
    
    if (showHp) this.placeGauge(actor, 'hp', x, y);

    if (showMp && showTp) {
        this.placeGauge(actor, 'mp', x, y + this.gaugeLineHeight());
        this.placeGauge(actor, 'tp', x, y + this.gaugeLineHeight() * 2);
    }
    if (showMp && !showTp) {
        this.placeGauge(actor, 'mp', x, y + this.gaugeLineHeight());
    }
    if (!showMp && showTp) {
        this.placeGauge(actor, 'tp', x, y + this.gaugeLineHeight());
    }
}

} // MZ

Window_Base.prototype.showHp = function(actor) {
    return actor && actor.usesHp();
}

Window_Base.prototype.showMp = function(actor) {
    if (!actor) return false;
    if (!actor.usesMp()) return false;

    switch (config.showMpMode) {
        case 'off':         return false;
        case 'battleOnly':  return isScene(Scene_Battle);
    }
    return true;
}

Window_Base.prototype.showTp = function(actor) {
    if (!actor) return false;
    if (!actor.usesTp()) return false;

    switch (config.showTpMode) {
        case 'on':          return true;
        case 'off':         return false;
        case 'battleOnly':  return isScene(Scene_Battle);
    }
    return $dataSystem.optDisplayTp;
}

Game_BattlerBase.prototype.usesHp = function() { return true; };
Game_BattlerBase.prototype.usesMp = function() { return true; };
Game_BattlerBase.prototype.usesTp = function() { return false; };

Game_Actor.prototype.usesMp = function() {
    return !this.traitObjects()
        .filter(trait => trait && trait.meta)
        .some(trait => 'No MP' in trait.meta);
}

Game_Actor.prototype.usesTp = function() {
    return !this.traitObjects()
        .filter(trait => trait && trait.meta)
        .some(trait => 'No TP' in trait.meta);
}


// =====================================================================================
// Gauges
// =====================================================================================

if ('MZ' == Utils.RPGMAKER_NAME) {

const _SpriteGauge_bitmapWidth = Sprite_Gauge.prototype.bitmapWidth;
Sprite_Gauge.prototype.bitmapWidth = function() {
    if (typeof config.hpGaugeWidth == 'number' && isScene(Scene_Menu)) {
        return config.hpGaugeWidth;
    }
    
    return shouldUseGaugeWidth() && typeof config.gaugeWidth == 'number'
        ? config.gaugeWidth
        : _SpriteGauge_bitmapWidth.call(this);
}

function shouldUseGaugeWidth() {
    const mode = config.gaugeWidthOverrideScene || 'global';

    switch (mode) {
        case 'global':          return true;
        case 'exceptBattle':    return !isScene(Scene_Battle);
        case 'menu':            return isScene(Scene_Menu);
    }
}

const _SpriteGauge_gaugeHeight = Sprite_Gauge.prototype.gaugeHeight;
Sprite_Gauge.prototype.gaugeHeight = function() {
    if (isScene(Scene_Menu) && typeof config.hpGaugeHeight == 'number') {
        return config.hpGaugeHeight;
    }

    return shouldUseGaugeHeight() && typeof config.gaugeHeight == 'number'
        ? config.gaugeHeight
        : _SpriteGauge_gaugeHeight.call(this);
}

function shouldUseGaugeHeight() {
    const mode = config.gaugeHeightOverrideScene || 'global';

    switch (mode) {
        case 'global':          return true;
        case 'exceptBattle':    return !isScene(Scene_Battle);
        case 'menu':            return isScene(Scene_Menu);
    }
}

// Override
Sprite_Gauge.prototype.bitmapHeight = function() {
    return Math.max(
        this.gaugeHeight(),
        this.labelTextHeight(),
        this.valueTextHeight(),
        this.labelStyle() == 'icon' ? ImageManager.iconHeight : 0,
    );
}

const _SpriteGauge_updateBitmap = Sprite_Gauge.prototype.updateBitmap;
Sprite_Gauge.prototype.updateBitmap = function() {
    
    if (this.bitmap.width != this.bitmapWidth() || this.bitmap.height != this.bitmapHeight()) {
        this.bitmap = new Bitmap(this.bitmapWidth(), this.bitmapHeight());
    }
    _SpriteGauge_updateBitmap.call(this);
}

Sprite_Gauge.prototype.labelY = function() {
    return this.height - this.labelTextHeight() + this.labelYAdjust();
}

Sprite_Gauge.prototype.labelYAdjust = function() {
    return  config.gaugeLabelY || 0;
}

Sprite_Gauge.prototype.valueY = function() {
    return this.height - this.valueTextHeight() + this.valueYAdjust();
}

Sprite_Gauge.prototype.valueYAdjust = function() {
    return config.gaugeValueY || 0;
}

Sprite_Gauge.prototype.style = function() {
    if (this._statusType == 'time') {
        return 'default';
    }
    return config.gaugeStyle || 'default';
}

Sprite_Gauge.prototype.labelX = function() {
    return this.style() == 'stretch'
        ? 5
        : this.labelOutlineWidth() / 2;
}

const _SpriteGauge_gaugeX = Sprite_Gauge.prototype.gaugeX;
Sprite_Gauge.prototype.gaugeX = function() {
    if (this.style() == 'stretch') {
        return 0;
    }
    if (this.labelStyle() == 'icon' && this.supportsLabelAsIcon()) {
        return ImageManager.iconWidth + 4;
    }
    return _SpriteGauge_gaugeX.call(this);
}

Sprite_Gauge.prototype.labelTextHeight = Sprite_Gauge.prototype.textHeight;
Sprite_Gauge.prototype.valueTextHeight = Sprite_Gauge.prototype.textHeight;

// Override
Sprite_Gauge.prototype.drawLabel = function() {
    this.setupLabelFont();
    this.bitmap.paintOpacity = this.labelOpacity();

    if (this.labelStyle() == 'text') {
        this.bitmap.drawText(
            this.label(),
            this.labelX(),
            this.labelY(),
            this.bitmapWidth(),
            this.textHeight(),
            "left",
        );
    }
    if (this.labelStyle() == 'icon') {
        this.drawIcon(
            this.labelIconIndex(),
            0,
            this.height - ImageManager.iconHeight - this.labelYAdjust(),
        );
    }
    
    this.bitmap.paintOpacity = 255;
}

Sprite_Gauge.prototype.labelStyle = function() {
    return config.gaugeLabelStyle == 'icon' && this.supportsLabelAsIcon()
        ? 'icon'
        : 'text';
}

Sprite_Gauge.prototype.supportsLabelAsIcon = function() {
    return ['hp', 'mp', 'tp'].includes(this._statusType);
}

Sprite_Gauge.prototype.labelIconIndex = function() {
    switch (this._statusType) {
        case 'hp': return coalesce(config.hpIconIndex, 84);
        case 'mp': return coalesce(config.mpIconIndex, 165);
        case 'tp': return coalesce(config.tpIconIndex, 164);
        default:   return 0;
    }
}

Sprite_Gauge.prototype.drawIcon = function(iconIndex, x, y) {
    if (iconIndex) {
        const bitmap = ImageManager.loadSystem('IconSet');
        const pw = ImageManager.iconWidth;
        const ph = ImageManager.iconHeight;
        const sx = iconIndex % 16 * pw;
        const sy = Math.floor(iconIndex / 16) * ph;

        this.bitmap.blt(bitmap, sx, sy, pw, ph, x, y);
    }
}

// Override
Sprite_Gauge.prototype.drawGauge = function() {
    
    // added
    if (this.style() == 'text') {
        return;
    }
    
    const gaugeX        = this.gaugeX();
    const gaugeY        = this.bitmapHeight() - this.gaugeHeight(); // changed
    const gaugewidth    = this.bitmapWidth() - gaugeX;
    const gaugeHeight   = this.gaugeHeight();

    this.drawGaugeRect(gaugeX, gaugeY, gaugewidth, gaugeHeight);
}

// Override
Sprite_Gauge.prototype.drawValue = function() {
    this.setupValueFont();

    if (this.shouldDisplayMaxValue()) {
        const textWidth = this.bitmap.measureTextWidth('9999');
        const slashWidth = this.bitmap.measureTextWidth(' / ');
        
        this.bitmap.drawText(
            this.currentValueAsText(),
            0,
            this.valueY(),
            this.bitmapWidth() - textWidth - slashWidth - this.paddingRight(),
            this.textHeight(),
            'right',
        );

        this.bitmap.textColor = this.maxValueColor();

        this.bitmap.drawText(
            ' / ',
            this.bitmapWidth() - textWidth - slashWidth - this.paddingRight(),
            this.valueY(),
            slashWidth,
            this.textHeight(),
            'center',
        );
        this.bitmap.drawText(
            this.currentMaxValue(),
            0,
            this.valueY(),
            this.bitmapWidth() - this.paddingRight(),
            this.textHeight(),
            'right',
        );
    } else {
        this.bitmap.drawText(
            this.currentValueAsText(),
            0,
            this.valueY(),
            this.bitmapWidth() - this.paddingRight(),
            this.textHeight(),
            "right",
        );
    }
}

Sprite_Gauge.prototype.paddingRight = function() {
    return 6;
}

Sprite_Gauge.prototype.currentValueAsText = function() {
    return this.currentValue();
}

const _SpriteGauge_gaugeColor1 = Sprite_Gauge.prototype.gaugeColor1;
Sprite_Gauge.prototype.gaugeColor1 = function() {
    return gaugeColor1(this._statusType, this._battler) || _SpriteGauge_gaugeColor1.call(this);
}

function gaugeColor1(statusType, battler) {
    switch (statusType) {
        case 'hp':      return battler && battler.isDying() ? config.gaugeColorHpCrisis1 : config.gaugeColorHp1;
        case 'mp':      return config.gaugeColorMp1;
        case 'tp':      return config.gaugeColorTp1;
        case 'time':    return config.gaugeColorAtb1;
        default:        return null;
    }
}

const _SpriteGauge_gaugeColor2 = Sprite_Gauge.prototype.gaugeColor2;
Sprite_Gauge.prototype.gaugeColor2 = function() {
    return gaugeColor2(this._statusType, this._battler) || _SpriteGauge_gaugeColor2.call(this);
}

function gaugeColor2(statusType, battler) {
    switch (statusType) {
        case 'hp':      return battler && battler.isDying() ? config.gaugeColorHpCrisis2 : config.gaugeColorHp2;
        case 'mp':      return config.gaugeColorMp2;
        case 'tp':      return config.gaugeColorTp2;
        case 'time':    return config.gaugeColorAtb2;
        default:        return null;
    }
}

const _SpriteGauge_gaugeBackColor = Sprite_Gauge.prototype.gaugeBackColor;
Sprite_Gauge.prototype.gaugeBackColor = function() {
    return gaugeBackColor(this._statusType, this._battler) || _SpriteGauge_gaugeBackColor.call(this);
}

function gaugeBackColor(statusType, battler) {
    switch (statusType) {
        case 'hp':
                        if (battler && battler.isDying())   return config.gaugeBackgroundColorHpCrisis;
                        if (battler && battler.isDead())    return config.gaugeBackgroundColorHpDead;
                        else                                return config.gaugeBackgroundColorHp;
        case 'mp':      return config.gaugeBackgroundColorMp;
        case 'tp':      return config.gaugeBackgroundColorTp;
        case 'time':    return config.gaugeBackgroundColorAtb;
        default:        return null;
    }
}

const _SpriteGauge_labelColor = Sprite_Gauge.prototype.labelColor;
Sprite_Gauge.prototype.labelColor = function() {
    let color = undefined;

    switch (this._statusType) {
        case 'hp': color = config.hpLabelTextColor; break;
        case 'mp': color = config.mpLabelTextColor; break;
        case 'tp': color = config.tpLabelTextColor; break;
    }
    return color !== undefined
        ? ColorManager.textColor(color)
        : _SpriteGauge_labelColor.call(this);
}

Sprite_Gauge.prototype.maxValueColor = function() {
    switch (this._statusType) {
        case 'hp':      return ColorManager.textColor(config.hpValuesTextColor || 0);
        case 'mp':      return ColorManager.textColor(config.mpValuesTextColor || 0);
        default:        return this.valueColor();
    }
}

const _SpriteGauge_labelFontSize = Sprite_Gauge.prototype.labelFontSize;
Sprite_Gauge.prototype.labelFontSize = function() {
    return typeof config.gaugeLabelFontSize == 'number'
        ? config.gaugeLabelFontSize
        : _SpriteGauge_labelFontSize.call(this);
}

const _SpriteGauge_valueFontSize = Sprite_Gauge.prototype.valueFontSize;
Sprite_Gauge.prototype.valueFontSize = function() {
    return typeof config.gaugeValueFontSize == 'number'
        ? config.gaugeValueFontSize
        : _SpriteGauge_valueFontSize.call(this);
}

// Make font size smaller if text is exceeding
const _SpriteGauge_valueFontSize2 = Sprite_Gauge.prototype.valueFontSize;
Sprite_Gauge.prototype.valueFontSize = function() {
    let fontSize = _SpriteGauge_valueFontSize2.call(this)
    
    if (this.shouldDisplayMaxValue()) {    
        for (; fontSize > 0; fontSize = fontSize - 2) {
            this.bitmap.fontSize = fontSize;

            const textWidth = this.bitmap.measureTextWidth('9999');
            const slashWidth = this.bitmap.measureTextWidth(' / ');
            
            if (2 * textWidth + slashWidth < this.bitmapWidth() - 30) {
                return fontSize;
            }
        }
    }
    return _SpriteGauge_valueFontSize2.call(this);
}

Sprite_Gauge.prototype.shouldDisplayMaxValue = function() {
    return config.showGaugeMaxValues || this.style() == 'text';
}

/*
{

    const _SceneBoot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function() {
        _SceneBoot_start.call(this);

        const _SpriteGauge_redraw = Sprite_Gauge.prototype.redraw;
        Sprite_Gauge.prototype.redraw = function() {
            if (config.undoVisustellaGauges && ['hp', 'mp', 'tp'].includes(this._statusType) && typeof VisuMZ !== 'undefined' && VisuMZ.SkillsStatesCore) {
                VisuMZ.SkillsStatesCore.Sprite_Gauge_redraw.call(this);
            } else {
                _SpriteGauge_redraw.call(this);
            }
        }
    }

}

*/

} // MZ

if (Utils.RPGMAKER_NAME === 'MV') {

// Override
Window_Base.prototype.drawGauge = function(x, y, width, rate, color1, color2) {
    if (config.gaugeStyle == 'text') return;

    if (!config.gaugeStyle || config.gaugeStyle == 'default') {
        x += this.gaugeX();
        width -= this.gaugeX();
    }
    
    const fillW         = Math.floor(width * rate);
    const gaugeHeight   = this.gaugeHeight();
    const gaugeY        = y + this.lineHeight() - gaugeHeight - 2;

    this.contents.fillRect(x, gaugeY, width, gaugeHeight, this.gaugeBackColor());
    this.contents.gradientFillRect(x, gaugeY, fillW, gaugeHeight, color1, color2);
}

Window_Base.prototype.gaugeHeight = function() {
    return typeof config.gaugeHeight == 'number' ? config.gaugeHeight : 6;
}

Window_Base.prototype.gaugeX = function() {
    return this.textWidth('HP') + 6;
}

} // MV


// =====================================================================================
// Exp Gauge
// =====================================================================================


if (Utils.RPGMAKER_NAME === 'MZ') {

const _SpriteGauge_bitmapWidth = Sprite_Gauge.prototype.bitmapWidth;
Sprite_Gauge.prototype.bitmapWidth = function() {
    if (this._statusType == 'exp' && typeof config.expGaugeWidth == 'number') {
        return config.expGaugeWidth;
    }
    return _SpriteGauge_bitmapWidth.call(this);
}

const _SpriteGauge_gaugeHeight = Sprite_Gauge.prototype.gaugeHeight;
Sprite_Gauge.prototype.gaugeHeight = function() {
    if (this._statusType == 'exp' && typeof config.expGaugeHeight == 'number') {
        return config.expGaugeHeight;
    }
    return _SpriteGauge_gaugeHeight.call(this);
}

const _SpriteGauge_isValid = Sprite_Gauge.prototype.isValid;
Sprite_Gauge.prototype.isValid = function() {
    return this._statusType == 'exp' || _SpriteGauge_isValid.call(this);
}

const _SpriteGauge_currentValue = Sprite_Gauge.prototype.currentValue;
Sprite_Gauge.prototype.currentValue = function() {
    if (this._statusType == 'exp' && this._battler) {
        return this.isMaxLevel()
            ? 100
            : this._battler.currentExp() - this._battler.currentLevelExp();
    }
    return _SpriteGauge_currentValue.call(this);
}

const _SpriteGauge_currentMaxValue = Sprite_Gauge.prototype.currentMaxValue;
Sprite_Gauge.prototype.currentMaxValue = function() {
    if (this._statusType == 'exp' && this._battler) {
        return this.isMaxLevel()
            ? 100
            : this._battler.nextLevelExp() - this._battler.currentLevelExp();
    }
    return _SpriteGauge_currentMaxValue.call(this);
}

const _SpriteGauge_label = Sprite_Gauge.prototype.label;
Sprite_Gauge.prototype.label = function() {
    if (this._statusType == 'exp') {
        return TextManager.levelA;
    }
    return _SpriteGauge_label.call(this);
}

const _SpriteGauge_currentValueAsText = Sprite_Gauge.prototype.currentValueAsText;
Sprite_Gauge.prototype.currentValueAsText = function() {
    if (this._statusType == 'exp') {
        return this._battler ? this._battler.level : '';
    }
    return _SpriteGauge_currentValueAsText.call(this);
}

const _SpriteGauge_gaugeColor1 = Sprite_Gauge.prototype.gaugeColor1;
Sprite_Gauge.prototype.gaugeColor1 = function() {
    if (this._statusType == 'exp') {

        return this.isMaxLevel()
            ? config.gaugeColorExpMaxed1 || '#FFFFFF'
            : config.gaugeColorExp1 || '#FFFFFF';
    }
    return _SpriteGauge_gaugeColor1.call(this);
}

const _SpriteGauge_gaugeColor2 = Sprite_Gauge.prototype.gaugeColor2;
Sprite_Gauge.prototype.gaugeColor2 = function() {
    if (this._statusType == 'exp') {

        return this.isMaxLevel()
            ? config.gaugeColorExpMaxed2 || '#FFFFFF'
            : config.gaugeColorExp2 || '#FFFFFF';
    }
    return _SpriteGauge_gaugeColor2.call(this);
}

const _SpriteGauge_gaugeBackColor = Sprite_Gauge.prototype.gaugeBackColor;
Sprite_Gauge.prototype.gaugeBackColor = function() {
    if (this._statusType == 'exp' && config.gaugeBackgroundColorExp) {
        return config.gaugeBackgroundColorExp;
    }
    return _SpriteGauge_gaugeBackColor.call(this);
}

Sprite_Gauge.prototype.isMaxLevel = function() {
    return this._statusType == 'exp' && this._battler && this._battler.isMaxLevel();
}

const _SpriteGauge_labelColor = Sprite_Gauge.prototype.labelColor;
Sprite_Gauge.prototype.labelColor = function() {
    if (this._statusType == 'exp' && typeof config.expLabelTextColor == 'number') {
        return ColorManager.textColor(config.expLabelTextColor);
    }
    return _SpriteGauge_labelColor.call(this);
}

const _SpriteGauge_valueColor = Sprite_Gauge.prototype.valueColor;
Sprite_Gauge.prototype.valueColor = function() {
    if (this._statusType == 'exp' && typeof config.expValueTextColor == 'number') {
        return ColorManager.textColor(config.expValueTextColor);
    }
    return _SpriteGauge_valueColor.call(this);
}

const _SpriteGauge_labelFontSize = Sprite_Gauge.prototype.labelFontSize;
Sprite_Gauge.prototype.labelFontSize = function() {
    if (this._statusType == 'exp' && typeof config.expLabelFontSize == 'number') {
        return config.expLabelFontSize;
    }
    return _SpriteGauge_labelFontSize.call(this);
}

const _SpriteGauge_valueFontSize = Sprite_Gauge.prototype.valueFontSize;
Sprite_Gauge.prototype.valueFontSize = function() {
    if (this._statusType == 'exp' && typeof config.expValueFontSize == 'number') {
        return config.expValueFontSize;
    }
    return _SpriteGauge_valueFontSize.call(this);
}

const _SpriteGauge_shouldDisplayMaxValue = Sprite_Gauge.prototype.shouldDisplayMaxValue;
Sprite_Gauge.prototype.shouldDisplayMaxValue = function() {
    return this._statusType != 'exp' && _SpriteGauge_shouldDisplayMaxValue.call(this);
}

}


// =====================================================================================
// Color Manager
// =====================================================================================


const colorCache = { }

const _ColorManager_textColor = ColorManager.textColor;
ColorManager.textColor = function(n = 0) {
    if (colorCache[n]) {
        return colorCache[n];
    }

    colorCache[n] = _ColorManager_textColor.call(this, n);
    return colorCache[n];
}


// Override
ColorManager.hpColor = function(actor) {
    if (actor && actor.isDead())    return this.deathColor();
    if (actor && actor.isDying())   return this.crisisColor();

    return this.textColor(config.hpValuesTextColor || 0);
}

// Override
ColorManager.crisisColor = function() {
    return this.textColor(config.hpCrisisTextColor || 17);
}

// Override
ColorManager.deathColor = function() {
    return this.textColor(config.hpDeadTextColor || 18);
}

// Override
ColorManager.mpColor = function(actor) {
    if (actor && !actor.mp) {
        return this.textColor(config.mpEmptyTextColor || 0);
    }
    return this.textColor(config.mpValuesTextColor || 0);
}

// Override
ColorManager.tpColor = function(/*actor*/) {
    return this.textColor(config.tpValuesTextColor || 0);
}


// =====================================================================================
// Background Type & Frame
// =====================================================================================

const _WindowBase_initialize = Window_Base.prototype.initialize;
Window_Base.prototype.initialize = function() {
    _WindowBase_initialize.apply(this, arguments);

    this.updateBackgroundTypeIfNeeded();
    this.updateFrameVisibility();
}

const _WindowBase_update2 = Window_Base.prototype.update;
Window_Base.prototype.update = function() {
    _WindowBase_update2.call(this);

    this.updateBackgroundTypeIfNeeded();
    this.updateFrameVisibility();
}

Window_Base.prototype.updateBackgroundTypeIfNeeded = function() {
    if (this._mk_backgroundType !== this.getBackgroundType()) {
        this._mk_backgroundType = this.getBackgroundType();

        switch (this.getBackgroundType()) {
            case 'dimmed':
                this.setBackgroundType(1);
                break;
            
            case 'none':
            case 'image':
            case 'gradient':
                this.setBackgroundType(2);
                break;
            
            default:
                this.setBackgroundType(0);
        }
    }
}

Window_Base.prototype.getBackgroundType = function() {
    return 'window'; // to be overridden
}

const _WindowBase_createContents = Window_Base.prototype.createContents;
Window_Base.prototype.createContents = function() {
    _WindowBase_createContents.call(this);

    switch (this.getBackgroundType()) {
        case 'image':       this.createCustomBackground();      break;
        case 'gradient':    this.createGradientBackground();    break;
    }
}

Window_Base.prototype.updateFrameVisibility = function() {
    if (this.isFrameVisible() !== undefined) {
        this.frameVisible = this.isFrameVisible();
    }
}

Window_Base.prototype.isFrameVisible = function() {
    return undefined; // to be overridden
}


// =====================================================================================
// Gradient Background
// =====================================================================================

Window_Base.prototype.createGradientBackground = function() {
    if ('gradient' == this.getBackgroundType()) {
        
        const bitmap = new Bitmap(this.width, this.height);
        bitmap.gradientFillRect(
            0,
            0,
            this.width,
            this.height,
            this.getBackgroundGradientColor1(),
            this.getBackgroundGradientColor2(),
        );
        
        const sprite = new Sprite(bitmap);
        this.addChildAt(sprite, 0);
    }
}

Window_Base.prototype.getBackgroundGradientColor1 = function() {
    return getColor(0, 0, 0);
}

Window_Base.prototype.getBackgroundGradientColor2 = function() {
    return getColor(0, 0, 0, this.getBackOpacity() / 255);
}


// =====================================================================================
// Custom Background
// =====================================================================================

function Sprite_CustomBackground() {
    this.initialize(...arguments);
}

Sprite_CustomBackground.prototype = Object.create(Sprite.prototype);
Sprite_CustomBackground.prototype.constructor = Sprite_CustomBackground;

Sprite_CustomBackground.prototype.initialize = function(gameWindow) {
    this._gameWindow = gameWindow;
    this.visible = this.isVisible();

    Sprite.prototype.initialize.call(this, this.getBitmap());

    this.updateScale();
}

Sprite_CustomBackground.prototype.update = function() {
    this.updateBitmapIfNeeded();
    this.updateScale();
    this.visible = this.isVisible();

    Sprite.prototype.update.call(this);
}

Sprite_CustomBackground.prototype.isVisible = function() {
    return this._gameWindow.visible;
}

Sprite_CustomBackground.prototype.updateBitmapIfNeeded = function() {
    if (this.bitmap != this.getBitmap()) {
        this.bitmap = this.getBitmap();
    }
}

Sprite_CustomBackground.prototype.updateScale = function() {
    if (this.bitmap) {
        this.scale.x = this._gameWindow.width / this.bitmap.width;
        this.scale.y = this._gameWindow.height / this.bitmap.height;
    }
}

Sprite_CustomBackground.prototype.getBitmap = function() {
    return ImageManager.loadBitmapFromFilepath(this._gameWindow.getBackgroundFile());
}

Window_Base.prototype.createCustomBackground = function() {
    const sprite = new Sprite_CustomBackground(this);
    this.addChildAt(sprite, 0);
}

Window_Base.prototype.getBackgroundFile = function() {
    // to be overridden
}


// =====================================================================================
// Back Opacity
// =====================================================================================

// Override
Window_Base.prototype.updateBackOpacity = function() {
    this.backOpacity = this.getBackOpacity();
}

const _WindowBase_update3 = Window_Base.prototype.update;
Window_Base.prototype.update = function() {
    _WindowBase_update3.call(this);

    if (this.backOpacity !== this.getBackOpacity()) {
        this.updateBackOpacity();
        this.refreshDimmerBitmap();
    }
}

// to be overridden
Window_Base.prototype.getBackOpacity = function() {
    return typeof config.windowOpacity == 'number'
        ? config.windowOpacity
        : 'MZ' == Utils.RPGMAKER_NAME ? $gameSystem.windowOpacity() : 192;
}

// Override
Window_Base.prototype.refreshDimmerBitmap = function() {
    if (this._dimmerSprite) {
        const bitmap = this._dimmerSprite.bitmap;
        const w = this.width > 0 ? this.width + 8 : 0;
        const h = this.height;
        const m = this.padding;
        const c1 = getColor(0, 0, 0, this.getBackOpacity() / 255);
        const c2 = getColor(0, 0, 0, 0);
        bitmap.resize(w, h);
        bitmap.gradientFillRect(0, 0, w, m, c2, c1, true);
        bitmap.fillRect(0, m, w, h - m * 2, c1);
        bitmap.gradientFillRect(0, h - m, w, m, c1, c2, true);
        this._dimmerSprite.setFrame(0, 0, w, h);
    }
}


// =====================================================================================
// Window Skin
// =====================================================================================

const _WindowBase_loadWindowskin = Window_Base.prototype.loadWindowskin;
Window_Base.prototype.loadWindowskin = function() {
    
    if (this.shouldOverrideWindowSkin()) {
        const filepath = this.getWindowSkinFile() || 'window';
        const filename = Utils.extractFileName(filepath)
                            .replace('.png', '')
                            .replace('.PNG', '');
        
        this.windowskin = ImageManager.loadSystem(filename);
    } else {
        _WindowBase_loadWindowskin.call(this);
    }
}

Window_Base.prototype.shouldOverrideWindowSkin = function() {
    return false; // to be overridden
}

Window_Base.prototype.getWindowSkinFile = function() {
    return 'window'; // to be overridden
}

// =====================================================================================
// Font Settings
// =====================================================================================


const _WindowBase_resetFontSettings = Window_Base.prototype.resetFontSettings;
Window_Base.prototype.resetFontSettings = function() {
    _WindowBase_resetFontSettings.call(this);

    this.contents.fontSize = this.getDefaultFontSize() || this.standardFontSize();
}

// Override
const _WindowBase_standardFontSize = Window_Base.prototype.standardFontSize;
Window_Base.prototype.standardFontSize = function() {
    if (config.fontSize) return config.fontSize;
    
    return 'MZ' == Utils.RPGMAKER_NAME
        ? $gameSystem.mainFontSize()
        : _WindowBase_standardFontSize.call(this);
}

Window_Base.prototype.getDefaultFontSize = function() {
    return Window_Base.prototype.standardFontSize.call(this); // to be overriden
}

Window_Base.prototype.setFontSize = function(fontSize) {
    this.contents.fontSize = fontSize || this.standardFontSize();
}

Window_Base.prototype.textHeightByFontSize = function(fontSize = 0) {
    return fontSize
        ? (fontSize / this.getDefaultFontSize()) * this.lineHeight()
        : this.lineHeight();
}

const _WindowBase_lineHeight = Window_Base.prototype.lineHeight;
Window_Base.prototype.lineHeight = function() {
    return this.efficientFontSizeFactor
        ? (config.windowLineHeight || _WindowBase_lineHeight.call(this)) * this.efficientFontSizeFactor()
        : (config.windowLineHeight || _WindowBase_lineHeight.call(this));
}

Window_Base.prototype.efficientFontSizeFactor = function() {
    if (!this.getDefaultFontSize()) {
        return 1; // no font size set, use default factor
    }
    return (
        this.getDefaultFontSize() /
        Window_Base.prototype.standardFontSize.call(this)
    );
}

// Override
Window_Base.prototype.drawIcon = function(iconIndex, x, y) {
    const bitmap    = ImageManager.loadSystem("IconSet");
    const pw        = ImageManager.iconWidth;
    const ph        = ImageManager.iconHeight;
    const sx        = (iconIndex % 16) * pw;
    const sy        = Math.floor(iconIndex / 16) * ph;
    const factor    = this.iconScale();

    this.contents.blt(
        bitmap,
        sx,
        sy,
        pw,
        ph,
        x, // + (pw - pw * factor) / 2,
        y + (ph - ph * factor) / 2,
        pw * factor,
        ph * factor,
    );
}

Window_Base.prototype.iconScale = function() {
    return this.efficientFontSizeFactor();
}


// =====================================================================================
// Window Selectable
// =====================================================================================

const _WindowSelectable_drawItemBackground = Window_Selectable.prototype.drawItemBackground;
Window_Selectable.prototype.drawItemBackground = function(index) {
    const type = this.getItemBackgroundType() && this.getItemBackgroundType() != 'default'
        ? this.getItemBackgroundType()
        : Window_Selectable.prototype.getItemBackgroundType.call(this);
    
    switch (type) {
        case 'image':   this.createCustomItemBackground(index);                     break;
        case 'none':    break;
        case 'dimmed':
        default:        _WindowSelectable_drawItemBackground.call(this, index);     break;
    }
}

Window_Selectable.prototype.getItemBackgroundType = function() {
    return config.windowItemBackgroundType; // to be overidden
}

Window_Selectable.prototype.getItemBackgroundFile = function() {
    return config.windowItemBackgroundFile; // to be overidden
}

Window_Selectable.prototype.createCustomItemBackground = function(index) {
    const source = ImageManager.loadBitmapFromFilepath(this.getItemBackgroundFile());

    source && source.addLoadListener(() => {
        const target = this.contentsBack || this.contents;
        
        target.blt(
            source,
            0,
            0,
            source.width,
            source.height,
            this.itemRect(index).x,
            this.itemRect(index).y,
            this.itemRect(index).width,
            this.itemRect(index).height,
        );
    });
}


// =====================================================================================
// Menu Command Window
// =====================================================================================

Window_MenuCommand.prototype.shouldOverrideWindowSkin = function() {
    return config.overrideCommandWindow;
}

Window_MenuCommand.prototype.getWindowSkinFile = function() {
    return config.commandWindowFile;
}

Window_MenuCommand.prototype.getBackgroundType = function() {
    return config.commandBackgroundType || 'window';
}

Window_MenuCommand.prototype.getBackgroundFile = function() {
    return config.commandBackgroundFile;
}

Window_MenuCommand.prototype.iconTextStyle = function() {
    return config.commandStyle || 'both';
}

Window_MenuCommand.prototype.commandIcon = function(index) {
    const command = menuCommands.find(command => command.symbol == this.commandSymbol(index));
    return command ? command.iconIndex : undefined;
}

Window_MenuCommand.prototype.getItemBackgroundType = function() {
    return config.commandItemBackgroundType;
}

Window_MenuCommand.prototype.getItemBackgroundFile = function() {
    return config.commandItemBackgroundFile;
}

const _WindowMenuCommand_updateBackOpacity = Window_MenuCommand.prototype.updateBackOpacity;
Window_MenuCommand.prototype.updateBackOpacity = function() {
    if (config.commandOpacity >= 0) {
        this.backOpacity = config.commandOpacity;
    } else {
        _WindowMenuCommand_updateBackOpacity.call(this);
    }
}

Window_MenuCommand.prototype.getBackOpacity = function() {
    return typeof config.commandOpacity == 'number'
        ? config.commandOpacity
        : Window_Base.prototype.getBackOpacity.call(this);
}

Window_MenuCommand.prototype.standardPadding = function() {
    return typeof config.commandPadding == 'number'
        ? config.commandPadding
        : Window_Base.prototype.standardPadding.call(this);
}

const _WindowMenuCommand_lineHeight = Window_MenuCommand.prototype.lineHeight;
Window_MenuCommand.prototype.lineHeight = function() {
    return config.commandItemHeight || _WindowMenuCommand_lineHeight.call(this);
}

const _WindowMenuCommand_rowSpacing = Window_MenuCommand.prototype.rowSpacing;
Window_MenuCommand.prototype.rowSpacing = function() {
    return config.commandRowSpacing >= 0
        ? config.commandRowSpacing
        : _WindowMenuCommand_rowSpacing.call(this);
}

const _WindowMenuCommand_colSpacing = Window_MenuCommand.prototype.colSpacing;
Window_MenuCommand.prototype.colSpacing = function() {
    return config.commandColumnSpacing >= 0
        ? config.commandColumnSpacing
        : _WindowMenuCommand_colSpacing.call(this);
}

Window_MenuCommand.prototype.itemTextAlign = function() {
    return config.commandTextAlign || 'left';
}

Window_MenuCommand.prototype.getDefaultFontSize = function() {
    return config.commandFontSize;
}


// =====================================================================================
// Game Info Window
// =====================================================================================

function Window_GameInfo() {
    this.initialize(...arguments);
}

Window_GameInfo.prototype = Object.create(Window_Selectable.prototype);
Window_GameInfo.prototype.constructor = Window_GameInfo;

Window_GameInfo.prototype.getBackgroundType = function() {
    return config.goldBackgroundType;
}

Window_GameInfo.prototype.getBackgroundFile = function() {
    return config.goldBackgroundFile;
}

Window_GameInfo.prototype.update = function() {
    Window_Selectable.prototype.update.call(this);

    if (this.requiresRefresh()) {
        this._lastPlaytimeText = $gameSystem.playtimeText();
        this._lastGold = $gameParty.gold();

        this.refresh();
    }
}

Window_GameInfo.prototype.requiresRefresh = function() {
    const showPlaytime = (
        (config.gameInfoTextLeft && config.gameInfoTextLeft.includes('\\PT')) ||
        (config.gameInfoTextRight && config.gameInfoTextRight.includes('\\PT'))
    );
    return (
        (showPlaytime && this._lastPlaytimeText != $gameSystem.playtimeText()) ||
        (this._lastGold != $gameParty.gold())
    );
}

Window_GameInfo.prototype.refresh = function() {
    this.contents && this.contents.clear();

    this.drawAllItems();
}

Window_GameInfo.prototype.maxItems = function() {
    return Math.max(
        config.gameInfoTextLeft ? config.gameInfoTextLeft.split('\n').length : 0,
        config.gameInfoTextRight ? config.gameInfoTextRight.split('\n').length : 0,
    );
}

Window_GameInfo.prototype.maxPageItems = Window_GameInfo.prototype.maxItems;

Window_GameInfo.prototype.drawItemBackground = function(/*index*/) {
    // do nothing
}

Window_GameInfo.prototype.drawItem = function(index) {
    const rectangle = this.itemLineRect(index);
    const textLeft  = this.getTextLeft(index);
    const textRight = this.getTextRight(index);

    textLeft && this.drawTextEx(
        textLeft,
        rectangle.x,
        rectangle.y + rectangle.height - this.textSizeEx(textLeft).height,
        rectangle.width,
    );

    textRight && this.drawTextEx(
        textRight,
        rectangle.width - this.textSizeEx(textRight).width + rectangle.x,
        rectangle.y + rectangle.height - this.textSizeEx(textRight).height,
        rectangle.width,
    );
}

Window_GameInfo.prototype.getTextLeft = function(index) {
    return config.gameInfoTextLeft && config.gameInfoTextLeft.split('\n')[index];
}

Window_GameInfo.prototype.getTextRight = function(index) {
    return config.gameInfoTextRight && config.gameInfoTextRight.split('\n')[index];
}

Window_GameInfo.prototype.maxCols = function() {
    return this.isHorizontalLayout() ? gameInfoWindowNumberOfLines() : 1;
}

Window_GameInfo.prototype.isHorizontalLayout = function() {
    return ['top', 'bottom'].includes(config.commandOrientation);
}

Window_GameInfo.prototype.getDefaultFontSize = function() {
    return config.goldFontSize;
}

// Custom Text Codes
Window_GameInfo.prototype.convertEscapeCharacters = function(text) {
    text = text.replace('\\$',      $gameParty.gold());
    text = text.replace('\\MN',     mapDisplayName() || config.unknownMapName || 'Unknown Region');
    text = text.replace('\\PT',     playtimeText());
    
    return Window_Base.prototype.convertEscapeCharacters.call(this, text);
}

const mapDisplayName = () => silentTryCatch(() => $gameMap.displayName()) || '';
const playtimeText = () => silentTryCatch(() => $gameSystem.playtimeText()) || '';

function silentTryCatch(f) {
    try {
        return f();
    } catch (e) {
        return null;
    }
}

// Stretch Icons according to Font Size
Window_GameInfo.prototype.processDrawIcon = function(iconIndex, textState) {
    const factor = this.efficientFontSizeFactor();

    if ('MZ' == Utils.RPGMAKER_NAME) {
        const deltaX = (ImageManager.standardIconWidth - ImageManager.iconWidth) * factor;
        const deltaY = (ImageManager.standardIconHeight - ImageManager.iconHeight) * factor;
    
        if (textState.drawing) {
            const x = textState.x + deltaX / 2 + 2;
            const y = textState.y + deltaY / 2 + 2;
            this.drawIcon(iconIndex, x, y, factor);
        }
        textState.x += ImageManager.standardIconWidth * factor + 4;
    }
    
    if ('MV' == Utils.RPGMAKER_NAME) {
        this.drawIcon(iconIndex, textState.x + 2, textState.y + 2, factor);
        textState.x += ImageManager.iconWidth * factor + 4;
    }
}

Window_GameInfo.prototype.drawIcon = function(iconIndex, x, y, factor = 1) {
    if (iconIndex) {   
        const bitmap = ImageManager.loadSystem("IconSet");
        const pw = ImageManager.iconWidth;
        const ph = ImageManager.iconHeight;
        const sx = (iconIndex % 16) * pw;
        const sy = Math.floor(iconIndex / 16) * ph;
        
        this.contents.blt(
            bitmap,
            sx,
            sy,
            pw,
            ph,
            x,
            y,
            pw * factor,
            ph * factor,
        );
    }
}


// =====================================================================================
// (No) Touch UI
// =====================================================================================

if ('MZ' == Utils.RPGMAKER_NAME) {

function isNoTouchUI() {
    if (!config) return false;
    
    return (
        'never' == config.showTouchUIMode ||
        ('onMobile' == config.showTouchUIMode && !Utils.isMobileDevice())
    );
}

function isRemoveTouchUIArea() {
    return isNoTouchUI() && !config.keepTouchUISpace;
}

const _SceneBase_buttonAreaHeight = Scene_Base.prototype.buttonAreaHeight;
Scene_Base.prototype.buttonAreaHeight = function() {
    if (isRemoveTouchUIArea()) {
        return 0;
    }
    return config.touchUIAreaHeight !== undefined
        ? config.touchUIAreaHeight
        : _SceneBase_buttonAreaHeight.call(this);
}

const _WindowOptions_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
Window_Options.prototype.addGeneralOptions = function() {
    _WindowOptions_addGeneralOptions.call(this);

    if (isNoTouchUI()) {
        const index = this.findSymbol('touchUI');
        if (index >= 0) this._list.splice(index, 1);
    }
}

const _SceneOptions_maxCommands = Scene_Options.prototype.maxCommands;
Scene_Options.prototype.maxCommands = function() {
    return _SceneOptions_maxCommands.call(this) - (isNoTouchUI() ? 1 : 0);
}

const _SceneBase_create = Scene_Base.prototype.create;
Scene_Base.prototype.create = function() {
    _SceneBase_create.call(this);

    if (isNoTouchUI() && typeof(ConfigManager) !== 'undefined') {
        ConfigManager.touchUI = false;
    }
}

} // MZ


// =====================================================================================
// Skip Actor Selection
// =====================================================================================

const _SceneMenu_commandPersonal = Scene_Menu.prototype.commandPersonal;
Scene_Menu.prototype.commandPersonal = function() {
    if (skipActorSelection()) {
        this._statusWindow.select(0);
        this.onPersonalOk();
    } else {
        _SceneMenu_commandPersonal.call(this);
    }
}

function skipActorSelection() {
    return (
        ('true' == params.skipActorSelection && $gameParty.members().length == 1) ||
        'none' == config.statusOrientation
    );
}


// =====================================================================================
// Menu Commands
// =====================================================================================

if (overrideMenuCommands) {
    
    const _SceneMenu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
    Scene_Menu.prototype.createCommandWindow = function() {
        _SceneMenu_createCommandWindow.call(this);

        menuCommands.forEach(command => {
            const handler = this.makeHandler(command);
            this._commandWindow.setHandler(command.symbol, handler);
        });
    }

    Scene_Menu.prototype.makeHandler = function(command) {
        return command.isPersonal
            ? this.commandPersonal.bind(this)
            : this.makeAction(command).bind(this);
    }

    Scene_Menu.prototype.makeAction = function(command) {
        switch (command.action) {
            case 'Jump to...':
                if (!command.destination) {
                    reject('In Menu Command "%1", you forgot to enter a Scene to jump to.'.format(command.text));
                }
                return () => eval('SceneManager.push(%1)'.format(command.destination));
            
            case 'Formation Mode':
                return this.commandFormation.bind(this);
            
            case 'Common Event':
                return () => {
                    $gameTemp.reserveCommonEvent(command.commonEventId);
                    this.popScene();
                };
            
            case 'Custom Code':
                return () => {
                    this._commandWindow.activate();
                    command.actionCustomCode && command.actionCustomCode();
                }
        }
    }

    // Override
    Window_MenuCommand.prototype.makeCommandList = function() {
        menuCommands
            .filter(command => isMenuCommandConditionMet(command.showCondition))
            .forEach(({text, symbol, enableCondition}) => this.addCommand(
                text,
                symbol,
                isMenuCommandConditionMet(enableCondition)),
            );
    }

    // Override
    Scene_Menu.prototype.onPersonalOk = function() {
        const selectedSymbol    = this._commandWindow.currentSymbol();
        const command           = menuCommands.find(command => command.symbol == selectedSymbol);
        const action            = this.makeAction(command);
        
        action && action.call(this);
    }

    function isMenuCommandConditionMet(condition) {
        if (!condition) return true;
        
        return [
            !condition.switchId || $gameSwitches.value(condition.switchId),
            isMiscMenuCommandConditionMet(condition.misc),
            !condition.pluginName || hasPlugin(condition.pluginName),
            !condition.customEval || silentTryCatch(() => eval(condition.customEval)),
        ]
        .every(Boolean);
    }

    function isMiscMenuCommandConditionMet(misc) {
        switch (misc) {
            case 'at least 1 Party Member?':    return $gameParty.exists();
            case 'is Formation allowed?':       return $gameParty.size() >= 2 && $gameSystem.isFormationEnabled();
            case 'is Save allowed?':            return !DataManager.isEventTest() && $gameSystem.isSaveEnabled();
            default:                            return true;
        }
    }

}


// =====================================================================================
// Custom Parameter
// =====================================================================================

const _WindowMenuStatus_drawItem = Window_MenuStatus.prototype.drawItem;
Window_MenuStatus.prototype.drawItem = function(index) {
    _WindowMenuStatus_drawItem.call(this, index);

    if (UICustom.shouldDrawActorCustomParameter()) {
        this.drawActorCustomParameter(index);
    }
}

UICustom.shouldDrawActorCustomParameter = function() {
    return (
        config.enableCustomParameter && (
            isScene(Scene_Menu) || config.showCustomParameterInOtherScenes
        )
    );
}

Window_Selectable.prototype.drawActorCustomParameter = function(index) {
    const actor     = this.actor(index);
    const mode      = UICustom.actorCustomParameterDataInput().mode;
    const boxWidth  = this.customParameterBoxWidth(mode);
    const pos       = this.getCustomParameterPos(index);

    if (!UICustom.precheckCustomParametersNoError(actor)) {
        this.drawText("ERROR", pos.x, pos.y);
    }
    else if (UICustom.customParameterEmptyOrReturnsTruthy(actor)) {
        this._drawActorCustomParameter(actor, mode, pos, boxWidth);
    }
}

Window_Selectable.prototype.getCustomParameterPos = function(index) {
    const mode      = UICustom.actorCustomParameterDataInput().mode;
    const boxWidth  = this.customParameterBoxWidth(mode);
    const boxHeight = this.customParameterBoxHeight(mode);
    
    return getTextPos(
        this,
        index,
        boxWidth,
        boxHeight,
        config.customParameterHorzAlign || 'center',
        config.customParameterVertAlign || 'middle',
        config.customParameterOffsetX,
        config.customParameterOffsetY,
    );
}

Window_Selectable.prototype._drawActorCustomParameter = function(actor, mode, pos, boxWidth) {
    if ('gauge' == mode && 'MZ' == Utils.RPGMAKER_NAME) {
        this.placeGauge(actor, 'custom', pos.x, pos.y);
    }
    if ('gauge' == mode && 'MV' == Utils.RPGMAKER_NAME) {
        // not supported
    }
    if ('iconMeter' == mode) {
        this.drawActorCustomParameterAsIconMeter(actor, pos.x, pos.y);
    }
    if ('x-y' == mode) {
        this.drawActorCustomParameterAsXY(actor, pos.x, pos.y, boxWidth);
    }
    if ('number' == mode) {
        this.drawActorCustomParameterAsNumber(actor, pos.x, pos.y, boxWidth);
    }
    if ('text' == mode) {
        this.drawActorCustomParameterAsText(actor, pos.x, pos.y, boxWidth);
    }
}

Window_Selectable.prototype.customParameterBoxWidth = function(mode) {
    if (typeof config.customParameterWidth == 'number') {
        return config.customParameterWidth;
    }
    if ('gauge' == mode && 'MZ' == Utils.RPGMAKER_NAME) {
        return new Sprite_Gauge().width;
    }
    if ('iconMeter' == mode) {
        return this.itemWidth() - 8;
    }
    return this.textWidth('HP  9999 / 9999');
}

Window_Selectable.prototype.customParameterBoxHeight = function(mode) {
    if ('gauge' == mode && 'MZ' == Utils.RPGMAKER_NAME) {
        if (typeof config.customParameterHeight == 'number') {
            return config.customParameterHeight;
        }
        return new Sprite_Gauge().height;
    }
    return this.lineHeight();
}

Window_Selectable.prototype.drawActorCustomParameterAsIconMeter = function(actor, x, y) {
    const current       = Math.floor(UICustom.evalActorCustomParameterValue(actor, 'currentValue'));
    const max           = Math.floor(UICustom.evalActorCustomParameterValue(actor, 'maxValue'));
    const align         = UICustom.actorCustomParameterDataInput().textAlign || 'left';
    const iconGap       = UICustom.actorCustomParameterDataInput().iconGap || 0;
    const iconScale     = (UICustom.actorCustomParameterDataInput().iconScale || 100) / 100.0;
    const width         = this.itemWidth();
    const overallWidth  = max * ImageManager.iconWidth * iconScale + (max - 1) * iconGap;

    let x1 = x;
    if (align == 'center') x1 = x + width / 2 - overallWidth / 2;
    if (align == 'right')  x1 = x + width - overallWidth;

    for (let i = 0; i < max; i++) {
        const iconIndex = current > i
            ? UICustom.actorCustomParameterDataInput().filledIconIndex
            : UICustom.actorCustomParameterDataInput().emptyIconIndex;
        
        this.drawIconWithScale(
            iconIndex,
            x1 + i * (ImageManager.iconWidth * iconScale + iconGap),
            y,
            iconScale,
        );
    }
}

Window_Selectable.prototype.drawIconWithScale = function(iconIndex, x, y, factor = 1) {
    if (iconIndex) {   
        const bitmap = ImageManager.loadSystem("IconSet");
        const pw = ImageManager.iconWidth;
        const ph = ImageManager.iconHeight;
        const sx = (iconIndex % 16) * pw;
        const sy = Math.floor(iconIndex / 16) * ph;
        
        this.contents.blt(
            bitmap,
            sx,
            sy,
            pw,
            ph,
            x,
            y,
            pw * factor,
            ph * factor,
        );
    }
}

Window_Selectable.prototype.drawActorCustomParameterAsXY = function(actor, x, y, width) {
    this.setFontSize(UICustom.actorCustomParameterDataInput().fontSize);
    this.changeTextColor(ColorManager.textColor(UICustom.actorCustomParameterDataInput().labelColor));
    this.drawText(UICustom.actorCustomParameterDataInput().label || '', x, y, width);

    const current   = UICustom.evalActorCustomParameterValue(actor, 'currentValue');
    const max       = UICustom.evalActorCustomParameterValue(actor, 'maxValue');

    this.drawCurrentAndMax(
        current,
        max,
        x + this.textWidth(UICustom.actorCustomParameterDataInput().label || ''),
        y,
        width - this.textWidth(UICustom.actorCustomParameterDataInput().label || ''),
        ColorManager.textColor(UICustom.customParameterTextColor(!current)),
        ColorManager.textColor(UICustom.customParameterTextColor()),
    );
    this.resetTextColor();
    this.resetFontSettings();
}

if ('MZ' == Utils.RPGMAKER_NAME) {

Window_StatusBase.prototype.drawCurrentAndMax = function(currentValue, maxValue, x, y, width, color1, color2) {
    const valueWidth = this.textWidth('9999');
    const slashWidth = this.textWidth(' / ');

    const x1 = x + width - valueWidth;
    const x2 = x1 - slashWidth;
    const x3 = x2 - valueWidth;

    this.changeTextColor(color1);
    this.drawText(currentValue, x3, y, valueWidth, 'right');
    this.changeTextColor(color2);
    this.drawText(' /', x2, y, slashWidth);
    this.drawText(maxValue, x1, y, valueWidth, 'right');
    this.resetTextColor();
}

}

Window_Selectable.prototype.drawActorCustomParameterAsNumber = function(actor, x, y, width) {
    const label = UICustom.actorCustomParameterDataInput().label || '';
    const value = UICustom.evalActorCustomParameterValue(actor, 'number');

    this.setFontSize(UICustom.actorCustomParameterDataInput().fontSize);
    this.changeTextColor(ColorManager.textColor(UICustom.actorCustomParameterDataInput().labelColor));
    
    this.drawText(
        label,
        x,
        y,
        width,
    );

    this.changeTextColor(ColorManager.textColor(UICustom.customParameterTextColor(!value)));

    this.drawText(
        value,
        x + this.textWidth(label),
        y,
        width - this.textWidth(label),
        'right',
    );
    this.resetTextColor();
    this.resetFontSettings();
}

Window_Selectable.prototype.drawActorCustomParameterAsText = function(actor, x, y, width) {
    this.setFontSize(UICustom.actorCustomParameterDataInput().fontSize);
    
    const text          = UICustom.evalActorCustomParameterTextValue(actor, 'text');
    const textColor     = UICustom.customParameterTextColor(false);
    const textAlign     = UICustom.actorCustomParameterDataInput().textAlign;
    const textWidth     = this.textSizeEx(text).width;

    let x2;
    if ('left' == textAlign)    x2 = x;
    if ('center' == textAlign)  x2 = x + width / 2 - textWidth / 2;
    if ('right' == textAlign)   x2 = x + width - textWidth;

    this.drawTextEx(
        (textColor ? '\\C[%1]'.format(textColor) : '') + text,
        x2,
        y,
        width,
    );
    this.resetTextColor();
    this.resetFontSettings();
}

UICustom.customParameterTextColor = function(isDepleted) {
    const color = isDepleted
        ? UICustom.actorCustomParameterDataInput().textColorWhenEmpty
        : UICustom.actorCustomParameterDataInput().textColor;
    
    return typeof color === 'number' ? color : 0;
}

UICustom.evalActorCustomParameterValue = function(actor, key) {
    const script = UICustom.actorCustomParameterDataInput()[key];
    return silentTryCatch(() => eval(script)) || 0;
}

UICustom.evalActorCustomParameterTextValue = function(actor, key) {
    const script = UICustom.actorCustomParameterDataInput()[key];
    return silentTryCatch(() => eval(script)) || '';
}

UICustom.actorCustomParameterDataInput = function() {
    return {
        mode:               config.customParameterMode || ('MZ' == Utils.RPGMAKER_NAME ? 'gauge' : 'x-y'),
        label:              config.customParameterLabel,
        labelColor:         config.customParameterLabelTextColor !== undefined ? config.customParameterLabelTextColor : 16,
        preCondition:       config.customParameterPreconditionEval,
        currentValue:       config.customParameterCurrentValueEval,
        maxValue:           config.customParameterMaxValueEval,
        number:             config.customParameterNumberEval,
        text:               config.customParameterTextEval,
        textAlign:          config.customParameterTextAlign || 'left',
        textColor:          config.customParameterTextColor,
        textColorWhenEmpty: config.customParameterWhenEmptyTextColor,
        gaugeColor1:        config.gaugeColorCustom1,
        gaugeColor2:        config.gaugeColorCustom2,
        gaugeBackColor:     config.gaugeBackgroundColorCustom,
        isDisplayMaxValue:  config.showCustomParameterGaugeMaxValues,
        filledIconIndex:    config.customParameterFilledIconIndex,
        emptyIconIndex:     config.customParameterEmptyIconIndex,
        iconGap:            config.customParameterIconGap || 0,
        iconScale:          config.customParameterIconScale || 100,
        fontSize:           config.customParameterFontSize,
    }
}

UICustom.customParameterEmptyOrReturnsTruthy = function(actor) {
    const script = UICustom.actorCustomParameterDataInput().preCondition;
    return !script || silentTryCatch(() => eval(script));
}

UICustom.precheckCustomParametersNoError = function(actor) {
    const mode = UICustom.actorCustomParameterDataInput().mode;
    const evalsToCheck = [ ];
    evalsToCheck.push(UICustom.actorCustomParameterDataInput().preCondition);

    if (['gauge', 'x-y', 'iconMeter'].includes(mode)) {
        evalsToCheck.push(UICustom.actorCustomParameterDataInput().currentValue);
        evalsToCheck.push(UICustom.actorCustomParameterDataInput().maxValue);
    }
    if ('number' == mode)   evalsToCheck.push(UICustom.actorCustomParameterDataInput().number);
    if ('text' == mode)     evalsToCheck.push(UICustom.actorCustomParameterDataInput().text);

    return evalsToCheck
        .filter(Boolean)
        .every(evalString => checkNoError(() => eval(evalString)));
}

function checkNoError(f) {
    try {
        f();
        return true;
    } catch (e) {
        return false;
    }
}

if (Utils.RPGMAKER_NAME == 'MZ') {

const _SpriteGauge_bitmapWidth = Sprite_Gauge.prototype.bitmapWidth;
Sprite_Gauge.prototype.bitmapWidth = function() {
    if (this._statusType == 'custom' && typeof config.customParameterWidth == 'number') {
        return config.customParameterWidth;
    }
    return _SpriteGauge_bitmapWidth.call(this);
}

const _SpriteGauge_gaugeHeight = Sprite_Gauge.prototype.gaugeHeight;
Sprite_Gauge.prototype.gaugeHeight = function() {
    if (this._statusType == 'custom' && typeof config.customParameterHeight == 'number') {
        return config.customParameterHeight;
    }
    return _SpriteGauge_gaugeHeight.call(this);
}

const _SpriteGauge_isValid = Sprite_Gauge.prototype.isValid;
Sprite_Gauge.prototype.isValid = function() {
    return this._statusType == 'custom' || _SpriteGauge_isValid.call(this);
}

const _SpriteGauge_currentValue = Sprite_Gauge.prototype.currentValue;
Sprite_Gauge.prototype.currentValue = function() {
    if (this._statusType == 'custom' && this._battler) {
        return UICustom.evalActorCustomParameterValue(this._battler, 'currentValue');
    }
    return _SpriteGauge_currentValue.call(this);
}

const _SpriteGauge_currentMaxValue = Sprite_Gauge.prototype.currentMaxValue;
Sprite_Gauge.prototype.currentMaxValue = function() {
    if (this._statusType == 'custom' && this._battler) {
        return UICustom.evalActorCustomParameterValue(this._battler, 'maxValue');
    }
    return _SpriteGauge_currentMaxValue.call(this);
}

const _SpriteGauge_label = Sprite_Gauge.prototype.label;
Sprite_Gauge.prototype.label = function() {
    if (this._statusType == 'custom') {
        return UICustom.actorCustomParameterDataInput().label || '';
    }
    return _SpriteGauge_label.call(this);
}

const _SpriteGauge_gaugeColor1 = Sprite_Gauge.prototype.gaugeColor1;
Sprite_Gauge.prototype.gaugeColor1 = function() {
    if (this._statusType == 'custom') {
        return UICustom.actorCustomParameterDataInput().gaugeColor1 || '#FFFFFF';
    }
    return _SpriteGauge_gaugeColor1.call(this);
}

const _SpriteGauge_gaugeColor2 = Sprite_Gauge.prototype.gaugeColor2;
Sprite_Gauge.prototype.gaugeColor2 = function() {
    if (this._statusType == 'custom') {
        return UICustom.actorCustomParameterDataInput().gaugeColor2 || '#FFFFFF';
    }
    return _SpriteGauge_gaugeColor2.call(this);
}

const _SpriteGauge_gaugeBackColor = Sprite_Gauge.prototype.gaugeBackColor;
Sprite_Gauge.prototype.gaugeBackColor = function() {
    if (this._statusType == 'custom') {
        return UICustom.actorCustomParameterDataInput().gaugeBackColor || _SpriteGauge_gaugeBackColor.call(this);
    }
    return _SpriteGauge_gaugeBackColor.call(this);
}

const _SpriteGauge_labelColor = Sprite_Gauge.prototype.labelColor;
Sprite_Gauge.prototype.labelColor = function() {
    if (this._statusType == 'custom' && typeof UICustom.actorCustomParameterDataInput().labelColor == 'number') {
        return ColorManager.textColor(UICustom.actorCustomParameterDataInput().labelColor);
    }
    return _SpriteGauge_labelColor.call(this);
}

const _SpriteGauge_valueColor = Sprite_Gauge.prototype.valueColor;
Sprite_Gauge.prototype.valueColor = function() {
    if (this._statusType == 'custom') {
        return this.currentValue()
            ? ColorManager.textColor(UICustom.actorCustomParameterDataInput().textColor || 0)
            : ColorManager.textColor(UICustom.actorCustomParameterDataInput().textColorWhenEmpty || 0);
    }
    return _SpriteGauge_valueColor.call(this);
}

const _SpriteGauge_maxValueColor = Sprite_Gauge.prototype.maxValueColor;
Sprite_Gauge.prototype.maxValueColor = function() {
    if (this._statusType == 'custom') {
        return ColorManager.textColor(UICustom.actorCustomParameterDataInput().textColor || 0);
    }
    return _SpriteGauge_maxValueColor.call(this);
}

const _SpriteGauge_shouldDisplayMaxValue = Sprite_Gauge.prototype.shouldDisplayMaxValue;
Sprite_Gauge.prototype.shouldDisplayMaxValue = function() {
    if (this._statusType == 'custom') {
        return UICustom.actorCustomParameterDataInput().isDisplayMaxValue;
    }
    return _SpriteGauge_shouldDisplayMaxValue.call(this);
}

}



// =====================================================================================
// Target Actor Window
// =====================================================================================


let isTargetActorWindowActive = false;

Scene_Menu.prototype.openCloseTargetActorWindow = function() {
    (this._actorWindow && this._actorWindow.active)
        ? this.closeTargetActorWindow()
        : this.openTargetActorWindow();
}

Scene_Menu.prototype.openTargetActorWindow = function() {
    if (this._actorWindow && this._actorWindow.active) return;
    
    this._commandWindow.hide();
    this._commandWindow.deactivate();
    this._statusWindow.hide();
    this._goldWindow.hide();

    if (this._actorWindow) {
        this._actorWindow.show();
        this._actorWindow.activate();
    } else {
        this._actorWindow = new Window_MenuActor(this.actorWindowRect());
        this._actorWindow.setHandler('cancel', this.closeTargetActorWindow.bind(this));
        this._actorWindow.show();
        this._actorWindow.open();
        this._actorWindow.activate();

        this.addWindow(this._actorWindow);
    }
    isTargetActorWindowActive = true;
}

Scene_Menu.prototype.closeTargetActorWindow = function() {
    if (this._actorWindow) {
        this._actorWindow.hide();
        this._actorWindow.deactivate();
        this._commandWindow.activate();
        this._commandWindow.show();
        
        if (!this.isNoStatusWindowLayout()) {
            this._statusWindow.show();
        }
        if (showGameInfoWindow()) {
            this._goldWindow.show();
        }
    }
    isTargetActorWindowActive = false;
}

const _SceneMenu_create2 = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function() {
    _SceneMenu_create2.call(this);

    if (isTargetActorWindowActive) {
        this.openCloseTargetActorWindow();
    }
}

// Override
Scene_ItemBase.prototype.actorWindowRect = function() {
    return new Rectangle(
        0,
        this.targetActorWindowTop(),
        this.targetActorWindowWidth(),
        this.targetActorWindowHeight(),
    );
}

Scene_ItemBase.prototype.targetActorWindowTop = function() {
    const vertAlign = config.targetActorWindowVertAlign || 'middle';

    switch (vertAlign) {
        case 'top':      return this.mainAreaTop();
        case 'middle':   return this.mainAreaTop() + (this.mainAreaHeightIncludingHelpArea() - this.targetActorWindowHeight()) / 2;
        case 'bottom':   return Math.max(this.mainAreaBottom(), this.helpAreaBottom()) - this.targetActorWindowHeight();
        default:         return this.mainAreaTop();
    }
}

Scene_ItemBase.prototype.targetActorWindowWidth = function() {
    return Math.floor(Graphics.boxWidth * ((config.targetActorWindowWidthPercentage || 70) / 100));
}

Scene_ItemBase.prototype.targetActorWindowHeight = function() {
    return Math.floor(this.mainAreaHeightIncludingHelpArea() * ((config.targetActorWindowHeightPercentage || 100) / 100));
}

Scene_Menu.prototype.actorWindowRect            = Scene_ItemBase.prototype.actorWindowRect;
Scene_Menu.prototype.targetActorWindowTop       = Scene_ItemBase.prototype.targetActorWindowTop;
Scene_Menu.prototype.targetActorWindowWidth     = Scene_ItemBase.prototype.targetActorWindowWidth;
Scene_Menu.prototype.targetActorWindowHeight    = Scene_ItemBase.prototype.targetActorWindowHeight;


const _SceneItemBase_showActorWindow = Scene_ItemBase.prototype.showActorWindow;
Scene_ItemBase.prototype.showActorWindow = function() {
    _SceneItemBase_showActorWindow.call(this);
    
    this._actorWindow.y         = this.targetActorWindowTop();
    this._actorWindow.width     = this.targetActorWindowWidth();
    this._actorWindow.height    = this.targetActorWindowHeight();

    if (config.targetActorWindowHorzAlignMode == 'center') {
        this._actorWindow.x = Graphics.boxWidth / 2 - this._actorWindow.width / 2;
    }
    else if (this.isCursorLeft()) {
        this._actorWindow.x = this.mainAreaRight() - this._actorWindow.width;
    }
    else {
        this._actorWindow.x = this.mainAreaLeft();
    }
}

Window_MenuActor.prototype.orientation = function() {
    return !config.targetActorWindowOrientation || config.targetActorWindowOrientation == 'default'
        ? Window_MenuStatus.prototype.orientation.call(this)
        : config.targetActorWindowOrientation;
}

Window_MenuActor.prototype.maxCols = function() {
    return ['columns', 'grid'].includes(this.orientation()) && typeof config.targetActorWindowCols == 'number'
        ? config.targetActorWindowCols
        : Window_MenuStatus.prototype.maxCols.call(this);
}

Window_MenuActor.prototype.numVisibleRows = function() {
    return ['rows', 'grid'].includes(this.orientation()) && typeof config.targetActorWindowRows == 'number'
        ? config.targetActorWindowRows
        : Window_MenuStatus.prototype.numVisibleRows.call(this);
}

Window_MenuActor.prototype.getBackgroundType = function() {
    const type = config.targetActorWindowBackgroundType || 'default';

    return type != 'default'
        ? type
        : Window_MenuStatus.prototype.getBackgroundType.call(this);
}

Window_MenuActor.prototype.portraitRenderType = function() {
    const type = config.targetActorPortraitMode || 'default';
    
    return type != 'default'
        ? type
        : Window_MenuStatus.prototype.portraitRenderType.call(this);
}

Window_MenuActor.prototype.portraitPosition = function() {
    return !config.targetActorPortraitPosition || config.targetActorPortraitPosition == 'default'
        ? Window_MenuStatus.prototype.portraitPosition.call(this)
        : config.targetActorPortraitPosition;
}

Window_MenuActor.prototype.portraitOffsetX = function() {
    return typeof config.targetActorPortraitOffsetX == 'number'
        ? config.targetActorPortraitOffsetX
        : Window_MenuStatus.prototype.portraitOffsetX.call(this);
}

Window_MenuActor.prototype.portraitOffsetY = function() {
    return typeof config.targetActorPortraitOffsetY == 'number'
        ? config.targetActorPortraitOffsetY
         : Window_MenuStatus.prototype.portraitOffsetY.call(this);
}

Window_MenuActor.prototype.portraitScale = function() {
    return typeof config.targetActorPortraitScale == 'number'
        ? config.targetActorPortraitScale / 100
        : Window_MenuStatus.prototype.portraitScale.call(this);
}

Window_MenuActor.prototype.portraitCropX = function() {
    return typeof config.targetActorPortraitCropX == 'number'
        ? config.targetActorPortraitCropX
        : 0;
}

Window_MenuActor.prototype.portraitCropY = function() {
    return typeof config.targetActorPortraitCropY == 'number'
        ? config.targetActorPortraitCropY
        : 0;
}

Window_MenuActor.prototype.actorNameHorzAlign = function() {
    const pos = config.targetActorNamePosition || 'default';

    if (pos != 'default') {
        if (pos.toLowerCase().includes('left')) return 'left';
        if (pos.toLowerCase().includes('center')) return 'center';
        if (pos.toLowerCase().includes('right')) return 'right';
    }
    return Window_MenuStatus.prototype.actorNameHorzAlign.call(this);
}

Window_MenuActor.prototype.actorNameVertAlign = function() {
    const pos = config.targetActorNamePosition || 'default';

    if (pos != 'default') {
        if (pos.toLowerCase().includes('top')) return 'top';
        if (pos.toLowerCase().includes('middle')) return 'middle';
        if (pos.toLowerCase().includes('bottom')) return 'bottom';
    }
    return Window_MenuStatus.prototype.actorNameVertAlign.call(this);
}

Window_MenuActor.prototype.actorNameOffsetX = function() {
    return typeof config.targetActorNameOffsetX == 'number'
        ? config.targetActorNameOffsetX
        : Window_MenuStatus.prototype.actorNameOffsetX.call(this);
}

Window_MenuActor.prototype.actorNameOffsetY = function() {
    return typeof config.targetActorNameOffsetY == 'number'
        ? config.targetActorNameOffsetY
        : Window_MenuStatus.prototype.actorNameOffsetY.call(this);
}

Window_MenuActor.prototype.actorNameWidth = function() {
    return typeof config.targetActorNameWidth == 'number'
        ? config.targetActorNameWidth
        : Window_MenuStatus.prototype.actorNameWidth.call(this);
}

Window_MenuActor.prototype.nameTextAlign = function() {
    const align = config.targetActorNameTextAlign || 'default';

    if (align != 'default') {
        return align;
    }
    return Window_MenuStatus.prototype.nameTextAlign.call(this);
}

Window_MenuActor.prototype.shouldDrawActorClass = function() {
    return false; // not yet enabled
}

Window_MenuActor.prototype.drawActorLevel = function(/*args*/) {
    // not yet enabled
}

Window_MenuActor.prototype.isShadowBoxEnabled = function() {
    return false;
}

Window_MenuActor.prototype.hpMpTpHorzAlign = function() {
    const pos = config.targetActorHpMpTpPosition || 'default';

    if (pos != 'default') {
        if (pos.toLowerCase().includes('left'))     return 'left';
        if (pos.toLowerCase().includes('center'))   return 'center';
        if (pos.toLowerCase().includes('right'))    return 'right';
    }
    return Window_MenuStatus.prototype.hpMpTpHorzAlign.call(this);
}

Window_MenuActor.prototype.hpMpTpVertAlign = function() {
    const pos = config.targetActorHpMpTpPosition || 'default';

    if (pos != 'default') {
        if (pos.toLowerCase().includes('top'))    return 'top';
        if (pos.toLowerCase().includes('middle')) return 'middle';
        if (pos.toLowerCase().includes('bottom')) return 'bottom';
    }
    return Window_MenuStatus.prototype.hpMpTpVertAlign.call(this);
}

Window_MenuActor.prototype.hpMpTpOffsetX = function() {
    return typeof config.targetActorHpMpTpOffsetX == 'number'
        ? config.targetActorHpMpTpOffsetX
        : Window_MenuStatus.prototype.hpMpTpOffsetX.call(this);
}

Window_MenuActor.prototype.hpMpTpOffsetY = function() {
    return typeof config.targetActorHpMpTpOffsetY == 'number'
        ? config.targetActorHpMpTpOffsetY
        : Window_MenuStatus.prototype.hpMpTpOffsetY.call(this);
}

Window_MenuActor.prototype.hpMpTpBoxWidth = function() {
    return typeof config.targetActorHpMpTpWidth == 'number'
        ? config.targetActorHpMpTpWidth
        : Window_MenuStatus.prototype.hpMpTpBoxWidth.call(this);
}

if (Utils.RPGMAKER_NAME == 'MZ') {

const _SpriteGauge_bitmapWidth = Sprite_Gauge.prototype.bitmapWidth;
Sprite_Gauge.prototype.bitmapWidth = function() {
    if (this.parent && this.parent.parent && this.parent.parent instanceof Window_MenuActor) {
        return config.targetActorHpMpTpWidth || _SpriteGauge_bitmapWidth.call(this);
    }
    return _SpriteGauge_bitmapWidth.call(this);
}

} // MZ

Window_MenuActor.prototype.statusEffectsHorzAlign = function() {
    const pos = config.targetActorStatusEffectsPosition || 'default';

    if (pos != 'default') {
        if (pos.toLowerCase().includes('left')) return 'left';
        if (pos.toLowerCase().includes('center')) return 'center';
        if (pos.toLowerCase().includes('right')) return 'right';
    }
    return Window_MenuStatus.prototype.statusEffectsHorzAlign.call(this);
}

Window_MenuActor.prototype.statusEffectsVertAlign = function() {
    const pos = config.targetActorStatusEffectsPosition || 'default';

    if (pos != 'default') {
        if (pos.toLowerCase().includes('top')) return 'top';
        if (pos.toLowerCase().includes('middle')) return 'middle';
        if (pos.toLowerCase().includes('bottom')) return 'bottom';
    }
    return Window_MenuStatus.prototype.statusEffectsVertAlign.call(this);
}

Window_MenuActor.prototype.statusEffectsOffsetX = function() {
    return typeof config.targetActorStatusEffectsOffsetX == 'number'
        ? config.targetActorStatusEffectsOffsetX
        : Window_MenuStatus.prototype.statusEffectsOffsetX.call(this);
}

Window_MenuActor.prototype.statusEffectsOffsetY = function() {
    return typeof config.targetActorStatusEffectsOffsetY == 'number'
        ? config.targetActorStatusEffectsOffsetY
        : Window_MenuStatus.prototype.statusEffectsOffsetY.call(this);
}



// =====================================================================================
// Plugin Commands
// =====================================================================================

if (PluginManager.registerCommand) {

    PluginManager.registerCommand(PLUGIN_NAME, 'setMenuPortrait', args => {
        const actor = $gameActors.actor(Number(args.actorId));

        if (actor) actor.setMenuPortrait(args.pictureName);
    });

    PluginManager.registerCommand(PLUGIN_NAME, 'resetMenuPortrait', args => {
        const actor = $gameActors.actor(Number(args.actorId));

        if (actor) actor.resetMenuPortrait();
    });
}


// =====================================================================================
// Compatibility
// =====================================================================================

// Visustella
const _SceneBoot_start2 = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
    _SceneBoot_start2.call(this);

    Scene_Menu.prototype.setCoreEngineUpdateWindowBg = function() {
        // nothing to do
    }
}

// SRPG
if (hasPlugin('SRPG_BattlePrepare_MZ')) {

    const srpgParams    = PluginManager.parameters('SRPG_BattlePrepare_MZ') || reject("SRPG_BattlePrepare_MZ plugin is not correctly installed. ");
    const lockIconIndex = Number(srpgParams['lockIconIndex'] || 195);

    const _WindowMenuStatus_drawItemImage1 = Window_MenuStatus.prototype.drawItemImage;
    Window_MenuStatus.prototype.drawItemImage = function(index) {
        if ($gameSystem.isSRPGMode()) {
            const actor = this.actor(index);
            const rect  = this.faceRect(index); // <-- changed

            this.changePaintOpacity(!actor.srpgTurnEnd() && !actor.isRestricted());
            this.drawActorFace(actor, rect.x, rect.y, rect.width, rect.height); // <-- changed
            this.changePaintOpacity(true);
        } else {
            _WindowMenuStatus_drawItemImage1.call(this, index);
        }
    }

    const _WindowMenuStatus_drawItemImage2 = Window_MenuStatus.prototype.drawItemImage;
    Window_MenuStatus.prototype.drawItemImage = function(index) {
        if ($gameSystem.isSRPGMode() && $gameSystem.isBattlePhase() == 'battle_prepare') {
            const actor = this.actor(index);
            const rect  = this.faceRect(index); // <-- changed

            this.changePaintOpacity($gameParty.inRemainingActorList(actor.actorId()));
            this.drawActorFace(actor, rect.x, rect.y, rect.width, rect.height); // <-- changed
            this.changePaintOpacity(true);

            if ($gameParty.inLockedActorList(actor.actorId())) {
                this.drawIcon(
                    lockIconIndex,
                    rect.x + rect.width - ImageManager.iconWidth, // <-- changed
                    rect.y + rect.height - ImageManager.iconHeight, // <-- changed
                );
            }
        } else {
            _WindowMenuStatus_drawItemImage2.call(this, index);
        }
    }
}


})();
