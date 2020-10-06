const {
    app,
    BrowserWindow
} = require('electron')
const box = require('commandboxjs')
const path = require('path')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// Make sure this port matches the server.json port
const commandbox_port = 8888

var cfml_path = path.join(app.getAppPath(), 'cfml');

// Use commented out value to define a different place where your CFML engine files will live
var properties_path = '';
//var properties_path = path.join(path_to_module, 'commandbox', 'home');

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    startCommandBox()
    createWindow()
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})

app.on('before-quit', () => {
    stopCommandBox()
})

function createWindow() {

    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    win.loadURL(`file://${__dirname}/index.html?port=${commandbox_port}`);

    // Open the DevTools.
    win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

function startCommandBox() {
    box.execute(cfml_path, 'server start', properties_path);
}

function stopCommandBox() {
    box.execute(cfml_path, 'server stop', properties_path);
}
