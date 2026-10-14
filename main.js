const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({ width: 1280, height: 860, backgroundColor: '#edf0f3', title: 'UK Corporation Tax Workbench', icon: path.join(__dirname, 'app/icons/icon-512.png'), webPreferences: { contextIsolation: true, sandbox: true } });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, 'app/index.html'));
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
