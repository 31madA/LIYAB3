
const CONFIG_NAME   = 'config.json';
const pluginVersion = window.opener ? window.opener.Imported.MK_UICustomizer : '1.0.0';
const RPGMAKER_NAME = window.opener ? window.opener.Utils.RPGMAKER_NAME : 'MZ';

$(document).ready(() => loadConfig());
$(document).ready(() => fetchLatestVersion(pluginVersion, data => data.latestVersionCore));

$(document).ready(() => {
    if (window.opener && RPGMAKER_NAME == 'MZ') {
        const coreScriptVersion = window.opener.Utils.RPGMAKER_VERSION;
        const requiredVersion = window.opener.UICustom.requiredCoreCodeVersionMZ;

        toggleVisibility('#requiredCoreScriptVersionWarningBox', !compareVersions(coreScriptVersion, requiredVersion));
        $('#requiredCoreScriptVersion').text(requiredVersion);
    }
});

$(document).ready(() => {
    const Imported = window.opener && window.opener.Imported;

    toggleVisibility('#VisustellaGaugesCompatibilityWarning', Imported && Imported.VisuMZ_1_SkillsStatesCore);
});

const getTemplate2 = (name) => {
    return {
        'rows': {
            nameX: -30,
            nameY: 10,
            classX: -10,
            classY: 10,
            levelX: -76,
            levelY: 4,
            hpGaugeX: -10,
            statusEffectsX: 190,
            shadowBoxX: 200,
            shadowBoxGradientPower: 100,
            hpGaugeY: -4,
            hpGaugeVerticalSpace: 28,
        },
        'columns': {
            statusOrientation: "columns",
            commandOrientation: "top",
            actorImagePosition: "topCenter",
            actorImageOffsetY: 20,
            nameHorzAlign: "center",
            nameX: 0,
            showName: true,
            nameVertAlign: "middle",
            nameY: -20,
            nameTextAlign: "center",
            nameWidth: 100,
            nameBackgroundType: "none",
            classHorzAlign: "center",
            classX: 0,
            classVertAlign: "middle",
            classY: 10,
            classTextAlign: "center",
            classWidth: 200,
            levelX: 0,
            levelY: 50,
            levelInfoHorzAlign: "center",
            levelInfoVertAlign: "middle",
            hpGaugeX: 0,
            hpGaugeHorzAlign: "center",
            hpGaugeY: -10,
            statusEffectsX: 20,
            statusEffectsVertAlign: "bottom",
            statusEffectsY: -120,
            shadowBoxX: 0,
            shadowBoxY: 120,
            shadowBoxGradientDirection: "top",
            shadowBoxGradientPower: 40,
        },
        'singleActor': {
            statusOrientation: "single actor",
            nameVertAlign: "middle",
            nameY: 80,
            hpGaugeVertAlign: "bottom",
            levelX: 40,
            actorImageOffsetX: 0,
            actorImageCropX: 0,
            actorImageScale: 200,
            actorImageHorzAlign: "center",
            actorImageVertAlign: "top",
            hpGaugeHorzAlign: "right",
            hpGaugeWidth: 260,
            hpGaugeY: -40,
            actorImageOffsetY: 40,
            nameBackgroundType: "gradient",
            classHorzAlign: "center",
            classVertAlign: "middle",
            classTextAlign: "right",
            nameTextAlign: "left",
            nameX: 0,
            classX: 0,
            classY: 80,
            levelInfoVertAlign: "bottom",
            levelY: -40,
            showShadowBox: false,
            commandWidth: 300,
            levelInfoHorzAlign: "left",
            hpGaugeX: -40,
            statusEffectsHorzAlign: "right",
            statusEffectsX: -40,
            statusEffectsVertAlign: "bottom",
            statusEffectsY: -150,
        },
        'noStatus': {
            statusOrientation: "none",
            commandWidth: 900,
            commandNumberOfColumns: 3,
            commandNumberOfLines: 3,
            commandItemHeight: 100,
            commandTextAlign: "center",
            goldWindowWidth: 400,
            goldWindowPosition: "bottomCenter"
        },
        'retro': {
            nameHorzAlign: "left",
            nameX: 160,
            nameY: 10,
            classX: -10,
            classY: 10,
            levelX: -76,
            levelY: -10,
            hpGaugeX: -10,
            hpGaugeY: -8,
            statusEffectsX: 190,
            shadowBoxX: 200,
            shadowBoxGradientPower: 100,
            statusRenderType: "battler",
            actorImageScale: 200,
            showLevelMode: "text",
            levelInfoHorzAlign: "left",
            levelInfoVertAlign: "middle",
            levelX: 160,
            levelY: 0,
            commandItemBackgroundType: "none",
            commandStyle: "text",
            commandTextAlign: "right",
            gaugeStyle: "text",
        }
    }[name];
}

const getTemplate = (name) => {
    const template = {
        gameInfoTextLeft: "\\I[190]\n\\I[314]",
        gameInfoTextRight: "\\}\\C[3]\\MN\n\\$ \\C[16]\\G",
        unknownMapName: "\\C[8]Unknown Region",
        gaugeColorHp1: "#A16207",
        gaugeColorHp2: "#F59E0B",
        gaugeColorHpCrisis1: "#991B1B",
        gaugeColorHpCrisis2: "#DC2626",
        gaugeColorMp1: "#1D4ED8",
        gaugeColorMp2: "#3B82F6",
        gaugeColorTp1: "#15803D",
        gaugeColorTp2: "#22C55E",
        gaugeColorAtb1: "#D980FA",
        gaugeColorAtb2: "#FDA7DF",
        gaugeColorExp1: '#888888',
        gaugeColorExp2: '#FFFFFF',
        gaugeColorExpMaxed1: '#FFC107',
        gaugeColorExpMaxed2: '#FFEB3B',
        gaugeBackgroundColorHp: '#222222',
        gaugeBackgroundColorHpCrisis: '#222222',
        gaugeBackgroundColorHpDead: '#440000',
        gaugeBackgroundColorMp: '#222222',
        gaugeBackgroundColorTp: '#222222',
        gaugeBackgroundColorAtb: '#222222',
        gaugeBackgroundColorExp: '#222222',
        gaugeBackgroundColorExpMaxed: '#222222',
        gaugeWidth: 200,
        gaugeWidthOverrideScene: "exceptBattle",
        gaugeHeightOverrideScene: "exceptBattle",
        gaugeStyle: "stretch",
        showGaugeMaxValues: true,
        hpIconIndex: 84,
        mpIconIndex: 165,
        tpIconIndex: 164,
    }
    Object
        .entries(getTemplate2(name || 'rows'))
        .forEach(([key, value]) => template[key] = value);
    
    return template;
}

function syncFormInputs() {
    
    // Touch UI
    showTouchUIMode.value       = config.showTouchUIMode || 'always';
    keepTouchUISpace.checked    = !!config.keepTouchUISpace;
    touchUIAreaHeight.value     = config.touchUIAreaHeight;

    // Common Layout Settings
    toggleButton('#commandInputModeLeft',           'left' == config.commandInputMode);
    toggleButton('#commandInputModeRight',          'left' != config.commandInputMode);

    toggleButton('#statusOrientationRows',          'rows' == config.statusOrientation || !config.statusOrientation);
    toggleButton('#statusOrientationColumns',       'columns' == config.statusOrientation);
    toggleButton('#statusOrientationGrid',          'grid' == config.statusOrientation);
    toggleButton('#statusOrientationSingleActor',   'single actor' == config.statusOrientation);
    toggleButton('#statusOrientationNone',          'none' == config.statusOrientation);

    visibleActors.value                             = config.visibleActors;
    autoAdjustVisibleActors.checked                 = config.autoAdjustVisibleActors;
    visibleActorsMax.value                          = config.visibleActorsMax;
    statusWindowCols.value                          = config.statusWindowCols;
    statusWindowRows.value                          = config.statusWindowRows;

    toggleVisibility('#visibleActorsBox',           ['rows', 'columns'].includes(config.statusOrientation) || !config.statusOrientation);
    toggleVisibility('#visibleActorsWave',          config.autoAdjustVisibleActors);
    toggleVisibility('#visibleActorsMax',           config.autoAdjustVisibleActors);
    toggleVisibility('#statusOrientationGridBox',   'grid' == config.statusOrientation);

    toggleVisibility('#commandOrientationBox',      'none' != config.statusOrientation);
    toggleVisibility('#commandOrientationBox2',     'none' == config.statusOrientation);

    toggleButton('#commandOrientationSide',         'side' == config.commandOrientation || !config.commandOrientation);
    toggleButton('#commandOrientationTop',          'top' == config.commandOrientation);
    toggleButton('#commandOrientationBottom',       'bottom' == config.commandOrientation);

    toggle9DirButtons('#commandPosition',           config.commandPosition || 'middleCenter');

    toggleVisibility('#commandWidthBox',            shouldShowCommandWidth());
    toggleVisibility('#commandNumberOfColumnsBox',  shouldShowCommandColumnsAndLines());
    toggleVisibility('#commandNumberOfLinesBox',    shouldShowCommandColumnsAndLines());

    commandOffsetX.value = config.commandOffsetX;
    commandOffsetY.value = config.commandOffsetY;

    commandWidth.value              = config.commandWidth;
    commandNumberOfColumns.value    = config.commandNumberOfColumns;
    commandNumberOfLines.value      = config.commandNumberOfLines;
    commandItemHeight.value         = config.commandItemHeight;

    toggleVisibility('#goldWindowLayoutBox',    'none' == config.statusOrientation);
    toggle9DirButtons('#goldWindowPosition',    config.goldWindowPosition || 'bottomLeft');
    goldWindowOffsetX.value     = config.goldWindowOffsetX;
    goldWindowOffsetY.value     = config.goldWindowOffsetY;
    goldWindowWidth.value       = config.goldWindowWidth;

    topSpacing.value        = config.topSpacing;
    bottomSpacing.value     = config.bottomSpacing;
    leftSpacing.value       = config.leftSpacing;
    rightSpacing.value      = config.rightSpacing;
    horzSpacing.value       = config.horzSpacing;
    vertSpacing.value       = config.vertSpacing;

    // Layout 2
    syncLayout2Fields(['command', 'status', 'gold']);

    // Windows General
    windowItemBackgroundType.value = config.windowItemBackgroundType || (RPGMAKER_NAME == 'MZ' ? 'dimmed' : 'none');
    toggleVisibility('#windowItemBackgroundFileBox', windowItemBackgroundType.value == 'image');
    
    windowOpacity.value             = config.windowOpacity;
    windowPadding.value             = config.windowPadding;
    windowLineHeight.value          = config.windowLineHeight;
    windowItemHeight.value          = config.windowItemHeight;
    windowItemPadding.value         = config.windowItemPadding;
    windowRowSpacing.value          = config.windowRowSpacing;
    windowColumnSpacing.value       = config.windowColumnSpacing;
    fontSize.value                  = config.fontSize;

    toggleVisibility('#cursorStyleBox', 'image' == config.cursorStyle);
    cursorStyle.value = config.cursorStyle || 'default';
    cursorAdjustX.value = config.cursorAdjustX;
    cursorAdjustY.value = config.cursorAdjustY;
    blinkCursor.checked = config.blinkCursor !== false;

    disabledTextOpacity.value = config.disabledTextOpacity;
    overrideDisabledTextColor.checked = config.overrideDisabledTextColor;
    toggleVisibility('#disabledTextColor', overrideDisabledTextColor.checked);
    disabledTextColor.value = config.disabledTextColor;

    // Scene General
    sceneBackgroundType.value       = config.sceneBackgroundType || 'mapSprite';
    sceneBackgroundEffects.value    = config.sceneBackgroundEffects || 'blurred';

    toggleVisibility('#sceneBackgroundEffectsBox',  'none' != sceneBackgroundType.value);
    toggleVisibility('#sceneBackgroundFileBox',     'image' == sceneBackgroundType.value);

    // Party Status
    statusOpacity.value                 = config.statusOpacity;
    statusPadding.value                 = config.statusPadding;
    statusRowSpacing.value              = config.statusRowSpacing;
    statusColumnSpacing.value           = config.statusColumnSpacing;
    shouldOverrideStatusWindow.checked  = config.overrideStatusWindow;
    statusBackgroundType.value          = config.statusBackgroundType || 'window';
    statusItemBackgroundType.value      = config.statusItemBackgroundType || 'dimmed';
    statusCursorBackgroundType.value    = config.statusCursorBackgroundType || 'default';
    statusBlinkCursor.checked           = config.statusBlinkCursor;
    statusPendingBackgroundType.value   = config.statusPendingBackgroundType || 'default';
    
    toggleVisibility('#statusWindowFileBox',            config.overrideStatusWindow);
    toggleVisibility('#statusBackgroundFileBox',        'image' == config.statusBackgroundType);
    toggleVisibility('#statusItemBackgroundFileBox',    'image' == config.statusItemBackgroundType);
    toggleVisibility('#statusCursorBackgroundFileBox',  'image' == config.statusCursorBackgroundType);
    toggleVisibility('#statusBlinkCursorBox',           'image' == config.statusCursorBackgroundType);
    toggleVisibility('#statusPendingBackgroundFileBox', 'image' == config.statusPendingBackgroundType);

    // Actor Images
    toggleVisibility('#actorImageBox',          'none' != config.statusRenderType);
    toggleVisibility('#portraitNotetagHint',    'portrait' == config.statusRenderType);
    toggle9DirButtons('#actorImagePosition',    config.actorImagePosition || 'middleLeft');

    statusRenderType.value  = config.statusRenderType || 'face';
    actorImageOffsetX.value = config.actorImageOffsetX;
    actorImageOffsetY.value = config.actorImageOffsetY;
    actorImageCropX.value   = config.actorImageCropX;
    actorImageCropY.value   = config.actorImageCropY;
    actorImageScale.value   = config.actorImageScale;

    // Shadow Box
    showShadowBox.checked = config.showShadowBox !== false;
    toggleVisibility('#actorShadowBoxBox', showShadowBox.checked);

    shadowBoxX.value                = config.shadowBoxX;
    shadowBoxY.value                = config.shadowBoxY;
    shadowBoxWidth.value            = config.shadowBoxWidth;
    shadowBoxHeight.value           = config.shadowBoxHeight;
    shadowBoxColor.value            = config.shadowBoxColor || 'rgb(0, 0, 0)';
    shadowBoxOpacity.value          = config.shadowBoxOpacity;
    shadowBoxGradientPower.value    = config.shadowBoxGradientPower;

    toggleButton('#shadowBoxGradientTop',           'top' == config.shadowBoxGradientDirection);
    toggleButton('#shadowBoxGradientBottom',        'bottom' == config.shadowBoxGradientDirection);
    toggleButton('#shadowBoxGradientLeft',          'left' == config.shadowBoxGradientDirection || !config.shadowBoxGradientDirection);
    toggleButton('#shadowBoxGradientRight',         'right' == config.shadowBoxGradientDirection);
    toggleButton('#shadowBoxGradientNone',          'none' == config.shadowBoxGradientDirection);
    toggleVisibility('#shadowBoxGradientPowerBox',  'none' != config.shadowBoxGradientDirection);

    // Name
    shouldShowName.checked = config.showName !== false;
    toggleVisibility('#actorNameBox', shouldShowName.checked);

    toggleButton('#nameHorzAlignLeft',      'left' == config.nameHorzAlign);
    toggleButton('#nameHorzAlignCenter',    'center' == config.nameHorzAlign || !config.nameHorzAlign);
    toggleButton('#nameHorzAlignRight',     'right' == config.nameHorzAlign);
    toggleButton('#nameVertAlignTop',       'top' == config.nameVertAlign || !config.nameVertAlign);
    toggleButton('#nameVertAlignMiddle',    'middle' == config.nameVertAlign);
    toggleButton('#nameVertAlignBottom',    'bottom' == config.nameVertAlign);

    nameX.value                 = config.nameX;
    nameY.value                 = config.nameY;
    nameWidth.value             = config.nameWidth;
    nameFontSize.value          = config.nameFontSize;
    nameBackgroundType.value    = config.nameBackgroundType || 'gradient';

    toggleButton('#nameTextAlignLeft',      'left' == config.nameTextAlign || !config.nameTextAlign);
    toggleButton('#nameTextAlignCenter',    'center' == config.nameTextAlign);
    toggleButton('#nameTextAlignRight',     'right' == config.nameTextAlign);

    // Class
    shouldShowClass.checked = config.showClass !== false;
    toggleVisibility('#actorClassBox', shouldShowClass.checked);

    toggleButton('#classHorzAlignLeft',     'left' == config.classHorzAlign);
    toggleButton('#classHorzAlignCenter',   'center' == config.classHorzAlign);
    toggleButton('#classHorzAlignRight',    'right' == config.classHorzAlign || !config.classHorzAlign);
    toggleButton('#classVertAlignTop',      'top' == config.classVertAlign || !config.classVertAlign);
    toggleButton('#classVertAlignMiddle',   'middle' == config.classVertAlign);
    toggleButton('#classVertAlignBottom',   'bottom' == config.classVertAlign);

    classX.value        = config.classX;
    classY.value        = config.classY;
    classWidth.value    = config.classWidth;
    classFontSize.value = config.classFontSize;

    toggleButton('#classTextAlignLeft',     'left' == config.classTextAlign);
    toggleButton('#classTextAlignCenter',   'center' == config.classTextAlign);
    toggleButton('#classTextAlignRight',    'right' == config.classTextAlign || !config.classTextAlign);

    $('#nameTextColorSpan').css('text-decoration-color',    colorCodeToHex(config.nameTextColor));
    $('#classTextColorSpan').css('text-decoration-color',   colorCodeToHex(config.classTextColor));

    // Level
    showLevelMode.value = config.showLevelMode || 'gauge';

    toggleVisibility('#levelPositionBox',       'none' != showLevelMode.value);
    toggleVisibility('#levelGapBox',            'text' == showLevelMode.value);
    toggleVisibility('#levelEmptyBox',          'text' == showLevelMode.value);
    toggleVisibility('#expGaugeWidthBox',       'gauge' == showLevelMode.value);
    toggleVisibility('#expGaugeHeightBox',      'gauge' == showLevelMode.value);
    toggleVisibility('#levelAsTextBox',         'text' == showLevelMode.value);
    toggleVisibility('#levelAsGaugeBox',        'gauge' == showLevelMode.value);

    toggleButton('#levelInfoHorzAlignLeft',     'left' == config.levelInfoHorzAlign);
    toggleButton('#levelInfoHorzAlignCenter',   'center' == config.levelInfoHorzAlign || !config.levelInfoHorzAlign);
    toggleButton('#levelInfoHorzAlignRight',    'right' == config.levelInfoHorzAlign);
    toggleButton('#levelInfoVertAlignTop',      'top' == config.levelInfoVertAlign);
    toggleButton('#levelInfoVertAlignMiddle',   'middle' == config.levelInfoVertAlign);
    toggleButton('#levelInfoVertAlignBottom',   'bottom' == config.levelInfoVertAlign || !config.levelInfoVertAlign);

    levelX.value        = config.levelX;
    levelY.value        = config.levelY;
    levelGap.value      = config.levelGap;
    levelFontSize.value = config.levelFontSize;
    
    $('#levelTextColor1Span').css('text-decoration-color', colorCodeToHex(config.levelTextColor1));
    $('#levelTextColor2Span').css('text-decoration-color', colorCodeToHex(config.levelTextColor2));

    expGaugeWidth.value = config.expGaugeWidth;
    expGaugeHeight.value = config.expGaugeHeight;

    // HP Gauges
    showHpMode.value = config.showHpMode || 'default';
    toggleVisibility('#actorHpBox', showHpMode.value !== 'none');

    showMpMode.value = config.showMpMode || 'default';
    showTpMode.value = config.showTpMode || 'default';

    toggleButton('#hpGaugeHorzAlignLeft',   'left' == config.hpGaugeHorzAlign);
    toggleButton('#hpGaugeHorzAlignCenter', 'center' == config.hpGaugeHorzAlign);
    toggleButton('#hpGaugeHorzAlignRight',  'right' == config.hpGaugeHorzAlign || !config.hpGaugeHorzAlign);

    toggleButton('#hpGaugeVertAlignTop',    'top' == config.hpGaugeVertAlign);
    toggleButton('#hpGaugeVertAlignMiddle', 'middle' == config.hpGaugeVertAlign);
    toggleButton('#hpGaugeVertAlignBottom', 'bottom' == config.hpGaugeVertAlign || !config.hpGaugeVertAlign);

    hpGaugeX.value                  = config.hpGaugeX;
    hpGaugeY.value                  = config.hpGaugeY;
    hpGaugeWidth.value              = config.hpGaugeWidth;
    hpGaugeHeight.value             = config.hpGaugeHeight;
    hpGaugeVerticalSpace.value      = config.hpGaugeVerticalSpace;

    // Status Effects
    toggleButton('#statusEffectsHorzAlignLeft',   'left' == config.statusEffectsHorzAlign || !config.statusEffectsHorzAlign);
    toggleButton('#statusEffectsHorzAlignCenter', 'center' == config.statusEffectsHorzAlign);
    toggleButton('#statusEffectsHorzAlignRight',  'right' == config.statusEffectsHorzAlign);

    toggleButton('#statusEffectsVertAlignTop',    'top' == config.statusEffectsVertAlign);
    toggleButton('#statusEffectsVertAlignMiddle', 'middle' == config.statusEffectsVertAlign || !config.statusEffectsVertAlign);
    toggleButton('#statusEffectsVertAlignBottom', 'bottom' == config.statusEffectsVertAlign);

    statusEffectsX.value            = config.statusEffectsX;
    statusEffectsY.value            = config.statusEffectsY;
    statusEffectsMaxIcons.value     = config.statusEffectsMaxIcons || 8;

    // Custom Parameter
    enableCustomParameter.checked               = config.enableCustomParameter;
    showCustomParameterInOtherScenes.checked    = config.showCustomParameterInOtherScenes;
    customParameterMode.value                   = config.customParameterMode || (RPGMAKER_NAME == 'MZ' ? 'gauge' : 'x-y');
    customParameterLabel.value                  = config.customParameterLabel || '';
    customParameterPreconditionEval.value       = config.customParameterPreconditionEval || '';
    customParameterCurrentValueEval.value       = config.customParameterCurrentValueEval || '';
    customParameterMaxValueEval.value           = config.customParameterMaxValueEval || '';
    showCustomParameterGaugeMaxValues.checked   = config.showCustomParameterGaugeMaxValues;
    customParameterNumberEval.value             = config.customParameterNumberEval || '';
    customParameterTextEval.value               = config.customParameterTextEval || '';
    customParameterFontSize.value               = config.customParameterFontSize;

    toggleButton('#customParameterHorzAlignLeft',   'left' == config.customParameterHorzAlign);
    toggleButton('#customParameterHorzAlignCenter', 'center' == config.customParameterHorzAlign || !config.customParameterHorzAlign);
    toggleButton('#customParameterHorzAlignRight',  'right' == config.customParameterHorzAlign);

    toggleButton('#customParameterVertAlignTop',    'top' == config.customParameterVertAlign);
    toggleButton('#customParameterVertAlignMiddle', 'middle' == config.customParameterVertAlign || !config.customParameterVertAlign);
    toggleButton('#customParameterVertAlignBottom', 'bottom' == config.customParameterVertAlign);

    customParameterOffsetX.value    = config.customParameterOffsetX;
    customParameterOffsetY.value    = config.customParameterOffsetY;
    customParameterWidth.value      = config.customParameterWidth;
    customParameterHeight.value     = config.customParameterHeight;

    toggleButton('#customParameterTextAlignLeft',   'left' == config.customParameterTextAlign || !config.customParameterTextAlign);
    toggleButton('#customParameterTextAlignCenter', 'center' == config.customParameterTextAlign);
    toggleButton('#customParameterTextAlignRight',  'right' == config.customParameterTextAlign);

    toggleVisibility('#customParameterBox',                     enableCustomParameter.checked);
    toggleVisibility('#customParameterLabelBox',                customParameterMode.value != 'text');
    toggleVisibility('#customParameterXYValuesBox',             ['gauge', 'x-y'].includes(customParameterMode.value));
    toggleVisibility('#customParameterShowMaxValueBox',         customParameterMode.value == 'gauge');
    toggleVisibility('#customParameterNumberEvalBox',           customParameterMode.value == 'number');
    toggleVisibility('#customParameterTextEvalBox',             customParameterMode.value == 'text');
    toggleVisibility('#customParameterHeightBox',               customParameterMode.value == 'gauge');
    toggleVisibility('#customParameterTextAlignBox',            customParameterMode.value == 'text');
    toggleVisibility('#customParameterWhenEmptyTextColorBox',   customParameterMode.value != 'text');
    toggleVisibility('#customParameterGaugeBox',                customParameterMode.value == 'gauge');
    toggleVisibility('#customParameterFontSizeBox',             ['x-y', 'number'].includes(customParameterMode.value));

    // Command Window
    toggleButton('#commandTextAlignLeft',               'left' == config.commandTextAlign || !config.commandTextAlign);
    toggleButton('#commandTextAlignCenter',             'center' == config.commandTextAlign);
    toggleButton('#commandTextAlignRight',              'right' == config.commandTextAlign);
    toggleVisibility('#commandWindowFileBox',           config.overrideCommandWindow);
    toggleVisibility('#commandBackgroundFileBox',       'image' == config.commandBackgroundFile);
    toggleVisibility('#commandItemBackgroundFileBox',   'image' == config.commandItemBackgroundType);

    commandOpacity.value                = config.commandOpacity;
    commandPadding.value                = config.commandPadding;
    commandItemHeight.value             = config.commandItemHeight;
    commandRowSpacing.value             = config.commandRowSpacing;
    commandColumnSpacing.value          = config.commandColumnSpacing;
    commandFontSize.value               = config.commandFontSize;
    commandStyle.value                  = config.commandStyle || 'iconAndText';
    shouldOverrideCommandWindow.checked = config.overrideCommandWindow;
    commandBackgroundType.value         = config.commandBackgroundType || 'window';
    commandItemBackgroundType.value     = config.commandItemBackgroundType || 'dimmed';

    // Game Info
    showGoldWindow.checked                  = config.showGoldWindow !== false;
    toggleVisibility('#goldWindowBox',      showGoldWindow.checked);
    
    gameInfoTextLeft.value      = config.gameInfoTextLeft;
    gameInfoTextRight.value     = config.gameInfoTextRight;
    unknownMapName.value        = config.unknownMapName;

    goldFontSize.value          = config.goldFontSize;
    goldBackgroundType.value    = config.goldBackgroundType || 'window';
    toggleVisibility('#goldBackgroundFileBox', 'image' == config.goldBackgroundType);

    // Gauge Settings
    gaugeWidth.value                = config.gaugeWidth;
    gaugeHeight.value               = config.gaugeHeight;
    gaugeWidthOverrideScene.value   = config.gaugeWidthOverrideScene || 'global';
    gaugeHeightOverrideScene.value  = config.gaugeHeightOverrideScene || 'global';
    gaugeLabelFontSize.value        = config.gaugeLabelFontSize;
    gaugeValueFontSize.value        = config.gaugeValueFontSize;
    gaugeLabelY.value               = config.gaugeLabelY;
    gaugeValueY.value               = config.gaugeValueY;

    toggleVisibility(
        '#gaugeLabelAsIconBox',
        config.gaugeLabelStyle == 'icon',
    );
    toggleButtons(
        '#gaugeLabelStyle',
        ['text', 'icon'],
        config.gaugeLabelStyle || 'text',
    );
    
    gaugeStyle.value                = config.gaugeStyle || 'default';
    showGaugeMaxValues.disabled     = gaugeStyle.value == 'text';
    showGaugeMaxValues.checked      = showGaugeMaxValues.disabled || config.showGaugeMaxValues;

    hpIconIndex.value = typeof config.hpIconIndex == 'number' ? config.hpIconIndex : 84;
    mpIconIndex.value = typeof config.mpIconIndex == 'number' ? config.mpIconIndex : 165;
    tpIconIndex.value = typeof config.tpIconIndex == 'number' ? config.tpIconIndex : 164;

    ['Hp', 'HpCrisis', 'Mp', 'Tp', 'Atb', 'Exp', 'ExpMaxed', 'Custom'].forEach(type => {
        window['gaugeColor' + type + '1'].value = config['gaugeColor' + type + '1'];
        window['gaugeColor' + type + '2'].value = config['gaugeColor' + type + '2'];
    });
    
    ['Hp', 'HpCrisis', 'HpDead', 'Mp', 'Tp', 'Atb', 'Exp', 'Custom'].forEach(type => {
        window['gaugeBackgroundColor' + type].value = config['gaugeBackgroundColor' + type];
    });

    // Target Actor Window
    targetActorWindowWidthPercentage.value      = config.targetActorWindowWidthPercentage;
    targetActorWindowHeightPercentage.value     = config.targetActorWindowHeightPercentage;
    targetActorWindowHorzAlignMode.value        = config.targetActorWindowHorzAlignMode || 'default';
    targetActorWindowCols.value                 = config.targetActorWindowCols;
    targetActorWindowRows.value                 = config.targetActorWindowRows;
    targetActorPortraitMode.value               = config.targetActorPortraitMode || 'default';
    targetActorPortraitPosition.value           = config.targetActorPortraitPosition || 'default';
    targetActorPortraitOffsetX.value            = config.targetActorPortraitOffsetX;
    targetActorPortraitOffsetY.value            = config.targetActorPortraitOffsetY;
    targetActorPortraitScale.value              = config.targetActorPortraitScale;
    targetActorWindowBackgroundType.value       = config.targetActorWindowBackgroundType || 'default';
    targetActorHpMpTpPosition.value             = config.targetActorHpMpTpPosition || 'default';
    targetActorHpMpTpOffsetX.value              = config.targetActorHpMpTpOffsetX;
    targetActorHpMpTpOffsetY.value              = config.targetActorHpMpTpOffsetY;
    targetActorHpMpTpWidth.value                = config.targetActorHpMpTpWidth;
    targetActorNamePosition.value               = config.targetActorNamePosition || 'default';
    targetActorNameOffsetX.value                = config.targetActorNameOffsetX;
    targetActorNameOffsetY.value                = config.targetActorNameOffsetY;
    targetActorNameWidth.value                  = config.targetActorNameWidth;
    targetActorStatusEffectsPosition.value      = config.targetActorStatusEffectsPosition || 'default';
    targetActorStatusEffectsOffsetX.value       = config.targetActorStatusEffectsOffsetX;
    targetActorStatusEffectsOffsetY.value       = config.targetActorStatusEffectsOffsetY;

    toggleButtons(
        '#targetActorWindowVertAlign',
        ['top', 'middle', 'bottom'],
        config.targetActorWindowVertAlign || 'middle',
    );
    toggleButtons(
        '#targetActorWindowOrientation',
        ['default', 'rows', 'columns', 'grid'],
        config.targetActorWindowOrientation || 'default',
    );
    toggleButtons(
        '#targetActorNameTextAlign',
        ['default', 'left', 'center', 'right'],
        config.targetActorNameTextAlign || 'default',
    );
}

function shouldShowCommandWidth() {
    return (
        'none' == config.statusOrientation ||
        'side' == config.commandOrientation ||
        !config.commandOrientation
    );
}

function shouldShowCommandColumnsAndLines() {
    return (
        'none' == config.statusOrientation ||
        'top' == config.commandOrientation ||
        'bottom' == config.commandOrientation
    );
}

function onCommandInputMode(direction) {
    toggleButtons(
        '#commandInputMode',
        ['left', 'right'],
        direction,
    );
    
    config.commandInputMode = direction;
    onSave();
}

function onCommandOrientation(orientation) {
    config.commandOrientation = orientation;
    
    toggleButton('#commandOrientationSide',         'side' == orientation);
    toggleButton('#commandOrientationTop',          'top' == orientation);
    toggleButton('#commandOrientationBottom',       'bottom' == orientation);
    toggleVisibility('#commandWidthBox',            shouldShowCommandWidth());
    toggleVisibility('#commandNumberOfColumnsBox',  shouldShowCommandColumnsAndLines());
    toggleVisibility('#commandNumberOfLinesBox',    shouldShowCommandColumnsAndLines());

    onSave();
}

function onStatusWindowModeChange(orientation) {
    config.statusOrientation = orientation;
    
    toggleButton('#statusOrientationRows',          'rows' == orientation);
    toggleButton('#statusOrientationColumns',       'columns' == orientation);
    toggleButton('#statusOrientationGrid',          'grid' == orientation);
    toggleButton('#statusOrientationSingleActor',   'single actor' == orientation);
    toggleButton('#statusOrientationNone',          'none' == orientation);
    toggleVisibility('#visibleActorsBox',           ['rows', 'columns'].includes(orientation));
    toggleVisibility('#statusOrientationGridBox',   'grid' == orientation);
    toggleVisibility('#commandOrientationBox',      'none' != orientation);
    toggleVisibility('#commandOrientationBox2',     'none' == orientation);
    toggleVisibility('#commandWidthBox',            shouldShowCommandWidth());
    toggleVisibility('#commandNumberOfColumnsBox',  shouldShowCommandColumnsAndLines());
    toggleVisibility('#commandNumberOfLinesBox',    shouldShowCommandColumnsAndLines());
    toggleVisibility('#goldWindowLayoutBox',        'none' == orientation);

    onSave();
}

function onAutoAdjustVisibleActorsChange(checked) {
    toggleVisibility('#visibleActorsWave', checked);
    toggleVisibility('#visibleActorsMax', checked);
    
    config.autoAdjustVisibleActors = checked;
    onSave();
}

function onWindowItemBackgroundTypeChange(type) {
    toggleVisibility('#windowItemBackgroundFileBox', type == 'image');

    config.windowItemBackgroundType = type;
    onSave();
}

function onCursorStyleChange(style) {
    toggleVisibility('#cursorStyleBox', 'image' == style);
    
    config.cursorStyle = style;
    onSave();
}

function onOverrideDisabledTextColorChange(checked) {
    toggleVisibility('#disabledTextColor', checked);
    
    config.overrideDisabledTextColor = checked;
    onSave();
}

function onSceneBackgroundTypeChange(type) {
    toggleVisibility('#sceneBackgroundEffectsBox', 'none' != type);
    toggleVisibility('#sceneBackgroundFileBox', 'image' == type);

    config.sceneBackgroundType = type;
    onSave();
}

function onOverrideStatusWindowChange(b) {
    toggleVisibility('#statusWindowFileBox', b);
    
    config.overrideStatusWindow = b;
    onSave();
}

function onStatusBackgroundTypeChange(type) {
    toggleVisibility('#statusBackgroundFileBox', 'image' == type);
    
    config.statusBackgroundType = type;
    onSave();
}

function onStatusItemBackgroundTypeChange(type) {
    toggleVisibility('#statusItemBackgroundFileBox', 'image' == type);
    
    config.statusItemBackgroundType = type;
    onSave();
}

function onStatusCursorBackgroundTypeChange(type) {
    toggleVisibility('#statusCursorBackgroundFileBox',  'image' == type);
    toggleVisibility('#statusBlinkCursorBox',           'image' == type);
    
    config.statusCursorBackgroundType = type;
    onSave();
}

function onStatusPendingBackgroundTypeChange(type) {
    toggleVisibility('#statusPendingBackgroundFileBox', 'image' == type);
    
    config.statusPendingBackgroundType = type;
    onSave();
}

function onStatusRenderTypeChange(type) {
    toggleVisibility('#portraitNotetagHint', 'portrait' == type);
    toggleVisibility('#actorImageBox', 'none' != type);
    
    config.statusRenderType = type;
    onSave();
}

function onShowShadowBoxChange(checked) {
    toggleVisibility('#actorShadowBoxBox', checked);

    config.showShadowBox = checked;
    onSave();
}

function onShadowBoxGradientChange(direction) {
    toggleButton('#shadowBoxGradientTop',           'top' == direction);
    toggleButton('#shadowBoxGradientBottom',        'bottom' == direction);
    toggleButton('#shadowBoxGradientLeft',          'left' == direction);
    toggleButton('#shadowBoxGradientRight',         'right' == direction);
    toggleButton('#shadowBoxGradientNone',          'none' == direction);
    toggleVisibility('#shadowBoxGradientPowerBox',  'none' != direction)

    config.shadowBoxGradientDirection = direction;
    onSave();
}

function onShowNameChange(checked) {
    toggleVisibility('#actorNameBox', checked);
    
    config.showName = checked;
    onSave();
}

function onNameHorzAlign(align) {
    toggleButton('#nameHorzAlignLeft',      'left' == align);
    toggleButton('#nameHorzAlignCenter',    'center' == align);
    toggleButton('#nameHorzAlignRight',     'right' == align);
    
    config.nameHorzAlign = align;
    onSave();
}

function onNameVertAlign(align) {
    toggleButton('#nameVertAlignTop',       'top' == align);
    toggleButton('#nameVertAlignMiddle',    'middle' == align);
    toggleButton('#nameVertAlignBottom',    'bottom' == align);
    
    config.nameVertAlign = align;
    onSave();
}

function onNameTextAlignChange(align) {
    toggleButton('#nameTextAlignLeft',    'left' == align);
    toggleButton('#nameTextAlignCenter',  'center' == align);
    toggleButton('#nameTextAlignRight',   'right' == align);

    config.nameTextAlign = align;
    onSave();
}

function onNameTextColorChange(color) {
    $('#nameTextColorSpan').css('text-decoration-color', colorCodeToHex(color));
    
    config.nameTextColor = Number(color);
    onSave();
}

function onShowClassChange(checked) {
    toggleVisibility('#actorClassBox', checked);
    
    config.showClass = checked;
    onSave();
}

function onClassHorzAlign(align) {
    toggleButton('#classHorzAlignLeft',     'left' == align);
    toggleButton('#classHorzAlignCenter',   'center' == align);
    toggleButton('#classHorzAlignRight',    'right' == align);
    
    config.classHorzAlign = align;
    onSave();
}

function onClassVertAlign(align) {
    toggleButton('#classVertAlignTop',      'top' == align);
    toggleButton('#classVertAlignMiddle',   'middle' == align);
    toggleButton('#classVertAlignBottom',   'bottom' == align);
    
    config.classVertAlign = align;
    onSave();
}

function onClassTextAlignChange(align) {
    toggleButton('#classTextAlignLeft',    'left' == align);
    toggleButton('#classTextAlignCenter',  'center' == align);
    toggleButton('#classTextAlignRight',   'right' == align);

    config.classTextAlign = align;
    onSave();
}

function onClassTextColorChange(color) {
    $('#classTextColorSpan').css('text-decoration-color', colorCodeToHex(color));
    
    config.classTextColor = Number(color);
    onSave();
}

function onShowHpModeChange(mode) {
    toggleVisibility('#actorHpBox', mode != 'none');

    config.showHpMode = mode;
    onSave();
}

function onHpGaugeHorzAlign(align) {
    toggleButton('#hpGaugeHorzAlignLeft',   'left' == align);
    toggleButton('#hpGaugeHorzAlignCenter', 'center' == align);
    toggleButton('#hpGaugeHorzAlignRight',  'right' == align);

    config.hpGaugeHorzAlign = align;
    onSave();
}

function onHpGaugeVertAlign(align) {
    toggleButton('#hpGaugeVertAlignTop',    'top' == align);
    toggleButton('#hpGaugeVertAlignMiddle', 'middle' == align);
    toggleButton('#hpGaugeVertAlignBottom', 'bottom' == align);

    config.hpGaugeVertAlign = align;
    onSave();
}

function onTextColorChange(id, color) {
    $('#' + id + 'TextColorSpan').css('text-decoration-color', colorCodeToHex(color));
    
    config[id + 'TextColor'] = Number(color);
    onSave();
}

function onStatusEffectsHorzAlign(align) {
    toggleButton('#statusEffectsHorzAlignLeft',   'left' == align);
    toggleButton('#statusEffectsHorzAlignCenter', 'center' == align);
    toggleButton('#statusEffectsHorzAlignRight',  'right' == align);

    config.statusEffectsHorzAlign = align;
    onSave();
}

function onStatusEffectsVertAlign(align) {
    toggleButton('#statusEffectsVertAlignTop',    'top' == align);
    toggleButton('#statusEffectsVertAlignMiddle', 'middle' == align);
    toggleButton('#statusEffectsVertAlignBottom', 'bottom' == align);

    config.statusEffectsVertAlign = align;
    onSave();
}

function onStatusEffectsXChange(x) {
    config.statusEffectsX = Number(x);
    onSave();
}

function onStatusEffectsYChange(y) {
    config.statusEffectsY = Number(y);
    onSave();
}

function onStatusEffectsMaxIconsChange(value) {
    config.statusEffectsMaxIcons = Number(value);
    onSave();
}

function onEnableCustomParameterChange(checked) {
    toggleVisibility('#customParameterBox', checked);
    
    config.enableCustomParameter = checked;
    onSave();
}

function onShowCustomParameterInOtherScenesChange(checked) {
    config.showCustomParameterInOtherScenes = checked;
    onSave();
}

function onCustomParameterModeChange(customParameterMode) {
    toggleVisibility('#customParameterLabelBox',                customParameterMode != 'text');
    toggleVisibility('#customParameterXYValuesBox',             ['gauge', 'x-y'].includes(customParameterMode));
    toggleVisibility('#customParameterShowMaxValueBox',         customParameterMode == 'gauge');
    toggleVisibility('#customParameterNumberEvalBox',           customParameterMode == 'number');
    toggleVisibility('#customParameterTextEvalBox',             customParameterMode == 'text');
    toggleVisibility('#customParameterHeightBox',               customParameterMode == 'gauge');
    toggleVisibility('#customParameterTextAlignBox',            customParameterMode == 'text');
    toggleVisibility('#customParameterWhenEmptyTextColorBox',   customParameterMode != 'text');
    toggleVisibility('#customParameterGaugeBox',                customParameterMode == 'gauge');
    toggleVisibility('#customParameterFontSizeBox',             ['x-y', 'number'].includes(customParameterMode));

    config.customParameterMode = customParameterMode;
    onSave();
}

function onCustomParameterLabelChange(value) {
    config.customParameterLabel = value;
    onSave();
}

function onCustomParameterPreconditionEvalChange(value) {
    config.customParameterPreconditionEval = value != '' ? value : undefined;
    onSave();
}

function onCustomParameterCurrentValueEvalChange(value) {
    config.customParameterCurrentValueEval = value != '' ? value : undefined;
    onSave();
}

function onCustomParameterMaxValueEvalChange(value) {
    config.customParameterMaxValueEval = value != '' ? value : undefined;
    onSave();
}

function onShowCustomParameterGaugeMaxValuesChange(checked) {
    config.showCustomParameterGaugeMaxValues = checked;
    onSave();
}

function onCustomParameterNumberEvalChange(value) {
    config.customParameterNumberEval = value != '' ? value : undefined;
    onSave();
}

function onCustomParameterTextEvalChange(value) {
    config.customParameterTextEval = value != '' ? value : undefined;
    onSave();
}

function onCustomParameterHorzAlign(align) {
    toggleButton('#customParameterHorzAlignLeft',       align == 'left');
    toggleButton('#customParameterHorzAlignCenter',     align == 'center');
    toggleButton('#customParameterHorzAlignRight',      align == 'right');

    config.customParameterHorzAlign = align;
    onSave();
}

function onCustomParameterVertAlign(align) {
    toggleButton('#customParameterVertAlignTop',        align == 'top');
    toggleButton('#customParameterVertAlignMiddle',     align == 'middle');
    toggleButton('#customParameterVertAlignBottom',     align == 'bottom');

    config.customParameterVertAlign = align;
    onSave();
}

function onCustomParameterOffsetXChange(value) {
    config.customParameterOffsetX = value != '' ? Number(value) : undefined;
    onSave();
}

function onCustomParameterOffsetYChange(value) {
    config.customParameterOffsetY = value != '' ? Number(value) : undefined;
    onSave();
}

function onCustomParameterWidthChange(value) {
    config.customParameterWidth = value != '' ? Number(value) : undefined;
    onSave();
}

function onCustomParameterHeightChange(value) {
    config.customParameterHeight = value != '' ? Number(value) : undefined;
    onSave();
}

function onCustomParameterTextAlign(align) {
    toggleButton('#customParameterTextAlignLeft',       align == 'left');
    toggleButton('#customParameterTextAlignCenter',     align == 'center');
    toggleButton('#customParameterTextAlignRight',      align == 'right');

    config.customParameterTextAlign = align;
    onSave();
}

function onCustomParameterFontSizeChange(value) {
    config.customParameterFontSize = value != '' ? Number(value) : undefined;
    onSave();
}

function onCommandOpacityChange(value) {
    config.commandOpacity = value || value === 0 ? Number(value) : undefined;
    onSave();
}

function onCommandItemHeightChange(value) {
    config.commandItemHeight = value || value === 0 ? Number(value) : undefined;
    onSave();
}

function onCommandRowSpacingChange(value) {
    config.commandRowSpacing = value || value === 0 ? Number(value) : undefined;
    onSave();
}

function onCommandColumnSpacingChange(value) {
    config.commandColumnSpacing = value || value === 0 ? Number(value) : undefined;
    onSave();
}

function onCommandFontSizeChange(value) {
    config.commandFontSize = value !== '' ? Number(value) : undefined;
    onSave();
}

function onCommandStyleChange(value) {
    config.commandStyle = value;
    onSave();
}

function onCommandTextAlign(align) {
    toggleButton('#commandTextAlignLeft',    'left' == align);
    toggleButton('#commandTextAlignCenter',  'center' == align);
    toggleButton('#commandTextAlignRight',   'right' == align);

    config.commandTextAlign = align;
    onSave();
}

function onShowLevelModeChange(mode) {
    toggleVisibility('#levelPositionBox',   'none' != mode);
    toggleVisibility('#levelGapBox',        'text' == mode);
    toggleVisibility('#levelEmptyBox',      'text' == mode);
    toggleVisibility('#expGaugeWidthBox',   'gauge' == mode);
    toggleVisibility('#expGaugeHeightBox',  'gauge' == mode);
    toggleVisibility('#levelAsTextBox',     'text' == mode);
    toggleVisibility('#levelAsGaugeBox',    'gauge' == mode);

    config.showLevelMode = mode;
    onSave();
}

function onLevelInfoHorzAlign(align) {
    toggleButton('#levelInfoHorzAlignLeft',     'left' == align);
    toggleButton('#levelInfoHorzAlignCenter',   'center' == align);
    toggleButton('#levelInfoHorzAlignRight',    'right' == align);

    config.levelInfoHorzAlign = align;
    onSave();
}

function onLevelInfoVertAlign(align) {
    toggleButton('#levelInfoVertAlignTop',      'top' == align);
    toggleButton('#levelInfoVertAlignMiddle',   'middle' == align);
    toggleButton('#levelInfoVertAlignBottom',   'bottom' == align);

    config.levelInfoVertAlign = align;
    onSave();
}

function onLevelTextColor1Change(color) {
    $('#levelTextColor1Span').css('text-decoration-color', colorCodeToHex(color));
    
    config.levelTextColor1 = Number(color);
    onSave();
}

function onLevelTextColor2Change(color) {
    $('#levelTextColor2Span').css('text-decoration-color', colorCodeToHex(color));
    
    config.levelTextColor2 = Number(color);
    onSave();
}

function onExpGaugeColorChange(type, color) {
    config['expGaugeColor' + type] = color;
    onSave();
}

function onGaugeLabelStyleChange(style) {
    config.gaugeLabelStyle = style;

    toggleVisibility('#gaugeLabelAsIconBox', style == 'icon');
    toggleButtons(
        '#gaugeLabelStyle',
        ['text', 'icon'],
        style,
    );
    onSave();
}

function onGaugeStyleChange(style) {
    showGaugeMaxValues.disabled = style == 'text';
    showGaugeMaxValues.checked  = showGaugeMaxValues.disabled || config.showGaugeMaxValues;

    config.gaugeStyle = style;
    onSave();
}

function onOverrideCommandWindowChange(b) {
    toggleVisibility('#commandWindowFileBox', b);

    config.overrideCommandWindow = b;
    onSave();
}

function onCommandBackgroundTypeChange(type) {
    toggleVisibility('#commandBackgroundFileBox', 'image' == type);
    
    config.commandBackgroundType = type;
    onSave();
}

function onCommandItemBackgroundTypeChange(type) {
    toggleVisibility('#commandItemBackgroundFileBox', 'image' == type);
    
    config.commandItemBackgroundType = type;
    onSave();
}

function onShowGoldChange(checked) {
    toggleVisibility('#goldWindowBox', checked);
    
    config.showGoldWindow = checked;
    onSave();
}

function onGameInfoTextLeftChange(text) {
    config.gameInfoTextLeft = text;
    onSave();
}

function onGameInfoTextRightChange(text) {
    config.gameInfoTextRight = text;
    onSave();
}

function onGoldBackgroundTypeChange(type) {
    toggleVisibility('#goldBackgroundFileBox', 'image' == type);
    
    config.goldBackgroundType = type;
    onSave();
}

function onGaugeColorChange(type, color) {
    config['gaugeColor' + type] = color;
    onSave();
}

function onResetGaugeColor(type) {
    window['gaugeColor' + type + '1'].value = getTemplate()['gaugeColor' + type + '1'];
    window['gaugeColor' + type + '2'].value = getTemplate()['gaugeColor' + type + '2'];

    config['gaugeColor' + type + '1'] = getTemplate()['gaugeColor' + type + '1'];
    config['gaugeColor' + type + '2'] = getTemplate()['gaugeColor' + type + '2'];
    onSave();
}

function onGaugeBackgroundColorChange(type, color) {
    config['gaugeBackgroundColor' + type] = color;
    onSave();
}

function onResetGaugeBackgroundColor(type) {
    window['gaugeBackgroundColor' + type].value = getTemplate()['gaugeBackgroundColor' + type];

    config['gaugeBackgroundColor' + type] = getTemplate()['gaugeBackgroundColor' + type];
    onSave();
}

function onTargetActorWindowVertAlign(align) {
    toggleButtons(
        '#targetActorWindowVertAlign',
        ['top', 'middle', 'bottom'],
        align,
    );

    config.targetActorWindowVertAlign = align;
    onSave();
}

function onTargetActorWindowOrientationChange(orientation) {
    toggleButtons(
        '#targetActorWindowOrientation',
        ['default', 'rows', 'columns', 'grid'],
        orientation,
    );
    config.targetActorWindowOrientation = orientation;
    onSave();
}

function onTargetActorNameTextAlignChange(align) {
    toggleButtons(
        '#targetActorNameTextAlign',
        ['default', 'left', 'center', 'right'],
        align,
    );
    config.targetActorNameTextAlign = align;
    onSave();
}


function fetchNews() {
    if (window.opener && window.opener.UICustom.showNews) {
        $.ajax({
            url:        'http://downloads.aerosys.blog/plugins/news.json',
            type:       'GET',
            dataType:   'json',
            timeout:    5000,
            cache:      false,
            success:    (data) => onFetchNewsSuccess(data),
            error:      () => $('#newsMessage').text("Unable to load news. The server is not available right now or you don't have an internet connection."),
        });
    } else {
        $('#newsBoxContainer').hide();
    }
};

function onFetchNewsSuccess(data) {
    $('#newsMessage').text(data.message);
    $('#newsLink').attr('href', data.link);

    if (data.backgroundColor)   $('#newsBox').css('background-color', data.backgroundColor);
    if (data.textColor)         $('#newsBox').css('color', data.textColor);
    if (data.borderColor)       $('#newsBox').css('border-color', data.borderColor);
    if (data.buttonActionText)  $('#newsLink').text(data.buttonActionText);  
}

$(document).ready(() => fetchNews());


function healActor() {
    const actor = leader();

    if (actor) {
        actor.setHp(Math.floor(actor.mhp * 0.8));
        actor.setMp(Math.floor(actor.mmp * 0.8));
        actor.setTp(Math.floor(actor.maxTp() * 0.8));

        refreshScene();
    }
}

function makeActorCrisis() {
    const actor = leader();

    if (actor) {
        actor.setHp(Math.floor(actor.mhp * 0.2));
        refreshScene();
    }
}

function makeActorDead() {
    const actor = leader();

    if (actor) {
        actor.setHp(0);
        refreshScene();
    }
}

function makeActorExpMaxedOut() {
    const actor = leader();

    if (actor) {
        actor.changeLevel(actor.maxLevel());
        refreshScene();
    }
}

function undoMakeActorExpMaxedOut() {
    const actor = leader();

    if (actor) {
        actor.changeLevel(1);
        actor.changeExp(Math.floor(actor.nextLevelExp() * 0.7));

        refreshScene();
    }
}

function applyStates() {
    changeStates(true);
}

function clearStates() {
    changeStates(false);
}

function changeStates(add) {
    const actor = leader();

    if (actor) {
        for (let i = 4; i <= 10; i++) {
            add ? actor.addState(i) : actor.removeState(i);
        }
        refreshScene();
    }
}

function leader() {
    return window.opener && window.opener.$gameParty.leader();
}

function refreshScene() {
    window.opener.SceneManager.goto(window.opener.Scene_Menu);
}

function openCloseTargetActorWindow() {
    const scene = window.opener.SceneManager._scene;
    if (scene && scene.openCloseTargetActorWindow) {
        scene.openCloseTargetActorWindow();
    }
}
