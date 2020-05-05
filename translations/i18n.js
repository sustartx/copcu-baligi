const path = require("path");
const electron = require('electron');
const fs = require('fs');
let app = electron.app ? electron.app : electron.remote.app;

let loadedJson;
let selectedLanguage = app.getLocale();

module.exports = i18n;

function i18n() {
    if(fs.existsSync(path.join(__dirname, selectedLanguage + '.json'))) {
        loadedJson = JSON.parse(fs.readFileSync(path.join(__dirname, selectedLanguage + '.json'), 'utf8'))
    } else {
        loadedLanguage = JSON.parse(fs.readFileSync(path.join(__dirname, 'en-US.js'), 'utf8'))
    }
}

i18n.prototype.setLanguage = function(language) {
    selectedLanguage = language;
    i18n();
};

i18n.prototype.__ = function(phrase) {
    let translation = loadedJson[phrase];
    if(translation === undefined) {
        translation = phrase
    }
    return translation
};