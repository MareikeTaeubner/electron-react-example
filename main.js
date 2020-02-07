const { app, BrowserWindow } = require("electron");

let win;
app.whenReady().then(() => {
  win = new BrowserWindow({
    height: 800,
    width: 1000
  });
  if (app.isPackaged) {
    win.loadFile("./gui/build/index.html");
  } else {
    win.loadURL("http://localhost:3000");
  }
});
