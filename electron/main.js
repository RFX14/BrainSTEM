const { app, BrowserWindow, ipcMain, ipcRenderer } = require('electron')
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
  });
  win.setMenu(null);

  //load the index.html from a url
  win.loadURL('http://localhost:3000');

  // Open the DevTools.
  win.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
    app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Send available ports to react
function isReady() {
  win.webContents.send('isReady', true);
}

setTimeout(() => {
    isReady();
}, 2000);

ipcMain.on('getPorts', (event, args) => {
    SerialPort.list()
      .then((ports) => {
        var newArray = [];
        for(const [key, value] of Object.entries(ports)) {
            console.log(value.path);
            newArray.push(value.path);
        }
        event.returnValue = newArray;
      });
});

// Update the selected port
var selectedPort = 'null_port';
ipcMain.on('updateSelectedPort', (event, args) => {
  selectedPort = args;
  console.log(selectedPort);
});

// Opens port to device
var port;
function openCommPort() {
  if(selectedPort != undefined && selectedPort != 'null_port') {
    port = new SerialPort(selectedPort, {
      baudRate: 9600
    });
  }
}

// Updates mode that device operates at
var currentMode = 0;
ipcMain.on('updateMode', (event, args) => {
  currentMode = args;
  openCommPort();
  //readData();
});

function readData() {
  
}

/*
port.open((err) => {
  if(err) {
    return console.log('Error opening port: ', err.message);
  }

  console.log('Port Opened!');
});
*/

/*
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
      win.webContents.on('portName', (event, msg) => {
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
*/