const { app, BrowserWindow, ipcMain } = require('electron')
const SerialPort = require('serialport')

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
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

function serialComm() {
  if(win) {
    SerialPort.list()
      .then((ports) => {
        console.log(ports);
        win.webContents.send('ports', ports);
      })
  } else {
    console.log('app not ready yet')
  }
}

setTimeout(function listPorts() {
  setTimeout(listPorts, 5000);
  serialComm();
}, 5000);

// Quit when all windows are closed
app.on('window-all-closed', () => {
    app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.