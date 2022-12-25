const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const Datastore = require('nedb')

const windowWidth = 1300;
const windowHeight = 700;

let db = {};
db.data = new Datastore({ filename: path.join(__dirname, '/database/data.db'), autoload: true });
db.settings = new Datastore({ filename: path.join(__dirname, '/database/settings.db'), autoload: true });

let mainWindow;

const createWindow = () => {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: windowWidth,
        height: windowHeight,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    let firstRun = true;

    db.settings.find({ _id: '0' }, (err, docs) => {
        if (err) console.error(err);

        if (docs.length === 0) {
            let settings = {
                _id: '0',
                language: 'pt-br',
                theme: 'light',
                firstRun: true
            };

            db.settings.insert(settings, (newErr, newDoc) => {
                if (newErr) console.error(newErr);

                if (newDoc) console.log('Settings created');
            });
        } else {
            firstRun = docs[0].firstRun;
            console.log('Settings loaded');
        }

        if (firstRun) mainWindow.loadFile(`${__dirname}/dist/financial-angular-app/index.html`);
        else mainWindow.loadFile(`${__dirname}/dist/financial-angular-app/dashboard.html`);
    });


    // and load the index.html of the app.
    mainWindow.loadFile('index.html')

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}

function createDashboardWindow(args) {
    db.settings.update({ _id: '0' }, { $set: { firstRun: false } }, {}, (err, doc) => {
        if (err) console.error(err);

        if (doc) {
            console.log('Settings updated');

            db.data.find({ _id: '0' }, (newErr, docs) => {
                if (newErr) console.error(newErr);

                if (docs.length === 0) {
                    let data = {
                        _id: '0',
                        netSalary: args.netSalary,
                    }

                    insertData(data);
                }
            });
        }
    });
}

function insertData(data) {
    db.data.insert(data, (newError, newDocs) => {
        if (newError) console.error(newError);

        if (newDocs) {
            console.log('Data inserted');

            goToDashboardWindow();
        }
    });
}

function goToDashboardWindow() {
    mainWindow.loadFile(`${__dirname}/dashboard.html`);

    mainWindow.once("ready-to-show", () => {
        mainWindow.show();
    });
}

ipcMain.on("openDashboardWindow", (_event, args) => {
    createDashboardWindow(args);
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process code