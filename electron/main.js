const { app, BrowserWindow, ipcMain } = require('electron')
const SerialPort = require('serialport')

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 650,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    }
  })
  win.setMenu(null)

  //load the index.html from a url
  win.loadURL('http://localhost:3000');

  // Open the DevTools.
  win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed
app.on('window-all-closed', () => {
    app.quit()
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
var isFirstRun = true;
var port;
var selectedPath = "null_port";
function serialComm() {
  if(win) {
    if(isFirstRun) {
      SerialPort.list()
        .then((ports) => {
          console.log(ports);
          win.webContents.send('ports', ports);
        });
      isFirstRun = false;
    } else {
      win.webContents.on('ports', (event, msg) => {
        selectedPath = msg;
      });
      console.log(selectedPath);

      if(selectedPath != "null_port") {
        port = new SerialPort(selectedPath, {
          baudRate: 9600
        });

        port.on('readable', () => {
          console.log("Message From Board: ", port.read());
        });
      }
    }
  } else {
    console.log('app not ready yet')
  }
}

setTimeout(function listPorts() {
  setTimeout(listPorts, 5000);
  serialComm();
}, 5000);