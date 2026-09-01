
$(document).ready(() => {
    const rpgMakerName = window.opener ? window.opener.Utils.RPGMAKER_NAME : 'MZ';
    $(rpgMakerName == 'MZ' ? '.mv' : '.mz').hide();
});

$(document).ready(() =>
    $('.initially-hidden')
        .css('display', 'none')
        .removeClass('initially-hidden')
);

const hexColors = [
    '#ffffff',
    '#20A0D6',
    '#FF784C',
    '#66CC40',
    '#99CCFF',
    '#CCC0FF',
    '#FFFFA0',
    '#808080',
    '#C0C0C0',
    '#2080CC',
    '#FF3810',
    '#00A010',
    '#3E9ADE',
    '#A098FF',
    '#FFCC20',
    '#000000',
    '#84AAFF',
    '#FFFF40',
    '#FF2020',
    '#202040',
    '#E08040',
    '#F0C040',
    '#4080C0',
    '#40C0F0',
    '#80FF80',
    '#C08080',
    '#8080FF',
    '#FF80FF',
    '#00A040',
    '#00E060',
    '#A060E0',
    '#C080FF',
];

function colorCodeToHex(color) {
    return hexColors[color] || '#ffffff';
}

$(document).ready(() => {
    $('.my-color-picker').each((_, element) => {
        hexColors.forEach((hex, i) => $(element)
            .append($('<option></option>')
                .val(i)
                .css('background-color', hex)
            ))
    });
});

var config = { };

function loadConfig() {
    readFile(
        'uicustom/' + CONFIG_NAME,
        (data) => Object.assign(config, data),
        () => config = getTemplate(),
        () => syncFormInputs(),
    );
}

function onSave() {
    writeFile('uicustom/' + CONFIG_NAME, config);
}

function onQuickTemplate(template) {
    config = getTemplate(template);

    syncFormInputs();
    onSave();
}

function onRestoreDefaults() {
    onQuickTemplate(null);
}

function changeText(key, value) {
    config[key] = value !== '' ? value : undefined;
    onSave();
}

function changeNumber(key, value) {
    config[key] = value !== '' ? Number(value) : undefined;
    onSave();
}

function changeBoolean(key, checked) {
    config[key] = checked;
    onSave();
}

function changeFile(key, folder, file) {
    config[key] = userFileToLocalFile(folder, file);
    onSave();
}

function userFileToLocalFile(folder, filepath) {
    return filepath
        ? folder + '/' + filepath.replace(/\\/g, '/').split('/' + folder + '/')[1]
        : null;
}

function changeTextAlign(fullElementId) {
    changeButtonGroup(fullElementId, ['left', 'center', 'right']);
}

function changeVertAlign(fullElementId) {
    changeButtonGroup(fullElementId, ['top', 'middle', 'bottom']);
}

function change9Dir(fullElementId) {  
    const directions = [
        'topLeft',      'topCenter',        'topRight',
        'middleLeft',   'middleCenter',     'middleRight',
        'bottomLeft',   'bottomCenter',     'bottomRight',
    ];

    changeButtonGroup(fullElementId, directions);
}

function changeButtonGroup(fullElementId, buttons) {
    const activeButton = buttons.find(item => fullElementId.toLowerCase().includes(item.toLowerCase()));

    if (activeButton) {
        const key = fullElementId.slice(0, fullElementId.length - activeButton.length);
        config[key] = activeButton;

        toggleButtons('#' + key, buttons, activeButton);
        onSave();
    }
}

function toggle9DirButtons(elementId, selectedValue) {
    toggleButtons(
        elementId,
        [
            'topLeft',      'topCenter',        'topRight',
            'middleLeft',   'middleCenter',     'middleRight',
            'bottomLeft',   'bottomCenter',     'bottomRight',
        ],
        selectedValue,
    );
}

function toggleButtons(elementId, values, selectedValue) {
    values.forEach((value) => toggleButton(
        elementId + capitalizeFirstLetter(value),
        value == selectedValue,
    ));
}

function toggleButton(elementId, b) {
    b
        ? $(elementId).removeClass('btn-outline-primary').addClass('btn-primary')
        : $(elementId).removeClass('btn-primary').addClass('btn-outline-primary');
}

function toggleVisibility(elementId, b) {
    b
        ? $(elementId).show()
        : $(elementId).hide();
}

function toggleEnable(elementId, b) {
    $(elementId).prop('disabled', !b);
}

function changeTextColor(elementId, textColor) {
    $('#' + elementId + 'Span').css('text-decoration-color', colorCodeToHex(textColor));

    config[elementId] = Number(textColor);
    onSave();
}

function changeColor(key, value) {
    changeText(key, value);
}

function onResetGaugeColor(type) {
    window['gaugeColor' + type + '1'].value = getTemplate()['gaugeColor' + type + '1'];
    window['gaugeColor' + type + '2'].value = getTemplate()['gaugeColor' + type + '2'];

    config['gaugeColor' + type + '1'] = getTemplate()['gaugeColor' + type + '1'];
    config['gaugeColor' + type + '2'] = getTemplate()['gaugeColor' + type + '2'];
    onSave();
}

function onResetGaugeBackgroundColor(type) {
    window['gaugeBackgroundColor' + type].value = getTemplate()['gaugeBackgroundColor' + type];

    config['gaugeBackgroundColor' + type] = getTemplate()['gaugeBackgroundColor' + type];
    onSave();
}

function onHelpWindowBackgroundTypeChange(type) {
    toggleVisibility('#helpWindowBackgroundFileBox', 'image' == type);
    
    config.helpWindowBackgroundType = type;
    onSave();
}

function onOverrideHelpWindowChange(checked) {
    toggleVisibility('#helpWindowFileBox', checked);
    
    config.overrideHelpWindowSkin = checked;
    onSave();
}

function syncLayout2Fields(windowTypes) {
    windowTypes.forEach(windowType => {
        const key = `override${capitalizeFirstLetter(windowType)}Rectangle`;
        window[key].checked = config[key];

        toggleVisibility(`#${windowType}RectangleByValuesBox`, config[key]);

        ['x', 'y', 'width', 'height']
            .map(prop => `${windowType}Rectangle_${prop}`)
            .forEach(key => window[key].value = config[key]);
    });
}

function onLayout2CheckboxChange(windowType, checked) {
    toggleVisibility(`#${windowType}RectangleByValuesBox`, checked);
    
    const key = `override${capitalizeFirstLetter(windowType)}Rectangle`;
    changeBoolean(key, checked);
}

function onLayout2ValueChange(windowType, prop, value) {
    const key = `${windowType}Rectangle_${prop}`;

    changeNumber(key, value);
}

function checkPluginParameter(pluginName, parameterName, valueToCheck) {
    if (window.opener) {
        const params = window.opener.PluginManager.parameters(pluginName);
        return params && params[parameterName] === valueToCheck;
    }
    return false;
}


function readFile(filePath, f, error, then) {
    try {
        const fs = require('fs');
        fs.readFile(filePath, 'utf-8', (_, data) => {
            if (data) {
                f(JSON.parse(data));
            } else {
                error();
            }
            then();
        });
    } catch (_) {
        error();
        then();
    }
}

function writeFile(filepath, data) {
    const fs = require('fs');
    fs.writeFile(
        filepath,
        JSON.stringify(data, null, 2),
        'utf-8',
        (error) => error && alert("Something went wrong: " + error),
    );
}

function fetchLatestVersion(currentVersion, extractVersionOnServer) {
    $.ajax({
        url:        'http://downloads.aerosys.blog/plugins/news.json',
        type:       'GET',
        dataType:   'json',
        timeout:    5000,
        cache:      false,
        error:      () => ({ }),
        success:    (data) => {
            const versionOnServer = extractVersionOnServer(data);

            if (versionOnServer && !compareVersions(currentVersion, versionOnServer)) {
                $('#newVersionAvailableBox').show();
                $('#newVersionAvailableMessage').text("A new version of this plugin is available: " + versionOnServer);
            }
        },
    });
}

function capitalizeFirstLetter(string) {
    if (!string || string.length === 0) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
}

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

let currentTargetInput          = null;
let currentIconPickerConfigKey  = null;
let selectedIconIndex           = null;

const ICONS_PER_ROW = 16;

const ICON_SIZE = window && window.opener && window.opener.$dataSystem && window.opener.$dataSystem.iconSize
    ? window.opener.$dataSystem.iconSize
    : 32;


function initIconPicker() {
    const sprite = document.getElementById('iconSprite');

    sprite.addEventListener('click', e => {
        selectedIconIndex = getHighlightedIconIndex(e);
        moveIconHighlight(selectedIconIndex);
    });

    sprite.addEventListener('dblclick', e => {
        const iconIndex = getHighlightedIconIndex(e);

        if (typeof iconIndex == 'number') {
            selectedIconIndex = iconIndex;
            onChooseIconConfirm();
        }
    });
}

function getHighlightedIconIndex(e) {
    const rect  = e.target.getBoundingClientRect();
    const x     = e.clientX - rect.left;
    const y     = e.clientY - rect.top;
    const col   = Math.floor(x / ICON_SIZE);
    const row   = Math.floor(y / ICON_SIZE);
    
    return row * ICONS_PER_ROW + col;
}

function moveIconHighlight(index) {
    const highlight = document.getElementById('highlight');
    
    highlight.style.left        = ((index % ICONS_PER_ROW) * ICON_SIZE) + "px";
    highlight.style.top         = (Math.floor(index / ICONS_PER_ROW) * ICON_SIZE) + "px";
    highlight.style.display     = "block";
}

function onChooseIconConfirm() {
    closeIconPicker();
    
    if (currentTargetInput) {
        currentTargetInput.value = selectedIconIndex;
        changeNumber(currentIconPickerConfigKey, selectedIconIndex);
    }
}

function closeIconPicker() {
    $('#iconPickerModal').modal('hide');
}

$(document).ready(() => {
    initIconPicker();
    
    $('.choose-icon').on('click', e => {
        currentTargetInput          = document.querySelector(e.currentTarget.dataset.target);
        currentIconPickerConfigKey  = e.currentTarget.dataset.configField;
        selectedIconIndex           = config[currentIconPickerConfigKey] || 0;
        
        moveIconHighlight(selectedIconIndex);

        $('#iconPickerModal').modal('show');
    });
});
