const { app, BrowserWindow, ipcMain } = require('electron');
const SerialPort = require('serialport');
const { Readline } = require('serialport/lib/parsers');

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 650,
    resizable: true,
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

// Updates mode that device operates at
var currentMode = 0;
ipcMain.on('updateMode', (event, args) => {
  currentMode = args;
});

//Sets up serial port (work in progress)
/*
var port = new SerialPort('/dev/tty.usbserial-AB0LR1PF', {
  baudRate: 9600,
  flowControl: false
});
*/
var port = new SerialPort('/dev/tty.usbmodem00077337811', {
  baudRate: 115200,
  flowControl: false
});

/*
var port = new SerialPort('/dev/tty.usbmodem14401', {
  baudRate: 9600,
  flowControl: false
});
*/

const parser = port.pipe(new Readline({ Delimiter: '\r\n' }))

//Always update mode when reading
var data = 0;
var mode = '0';
ipcMain.on('readData', (event, args) => {
  mode = args;
  console.log('mode:', args);
  event.returnValue = data;
})

//Reads data from serial port
parser.on('data', (newData) => {
  data = newData;
  console.log("From Arduino: ", data);
});

parser.on('ready', () => {
  console.log('arduino ready for stuff');
});

//Write to Arduino regarding mode
port.on('open', openPort);
function openPort() {
  function sendData() {
    //console.log('Writing: ', mode)
    port.write(mode, 'binary', (err, bytesWritten) => {
      //console.log('bytesWritten: ', bytesWritten);
    });
  }

  setInterval(sendData, 500);
}