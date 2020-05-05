const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    app.quit();
});

app.on('activate', function () {
    if (mainWindow === null){
        createWindow();
    }
});

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "../gui/index.html"),
        protocol: "file:",
        slashes: true,
    }));

    //mainWindow.webContents.openDevTools();

    mainWindow.on('close', function () {
        mainWindow = null;
    });
}