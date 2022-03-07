/**
 * This module is responsible on handling all the inter process communications
 * between the frontend to the electron backend.
 */

import { app, ipcMain } from 'electron';
import { environment } from '../../environments/environment';
import { Events } from '@wsl-gui/models';
import { exec, execFile, fork, spawn } from 'child_process';
import { WslProcess } from '../api/wsl-process';
import App from '../app';

export default class ElectronEvents {
  static bootstrapElectronEvents(): Electron.IpcMain {
    return ipcMain;
  }
}

// Retrieve app version
ipcMain.handle('get-app-version', (event) => {
  console.log(`Fetching application version... [v${environment.version}]`);

  return environment.version;
});

// Handle App termination
ipcMain.on('quit', (event, code) => {
  app.exit(code);
});

ipcMain.handle(Events.GetContainers, (event) => {
  const process = WslProcess.execute(
    `ps --all --no-trunc --format='{{json .}}'`
  );
  process.stdout.on('data', (data) => {
    process.kill(0);
    const result = data.split('\n').filter((r) => !!r);
    App.mainWindow.webContents.send(
      Events.SendContainers,
      `${result.toString()}`
    );
  });

  process.stderr.on('data', (data) => {
    process.kill(0);
    App.mainWindow.webContents.send(Events.SendContainers, data);
  });
});

ipcMain.handle(Events.ExecuteContainerCmd, (event, containerId, action) => {
  const process = WslProcess.execute(`${action} ${containerId}`);
  process.stdout.on('data', (data) => {
    process.kill(0);
    App.mainWindow.webContents.send(Events.ContainerCmdExecuted, data);
  });

  process.stderr.on('data', (data) => {
    process.kill(0);
    App.mainWindow.webContents.send(Events.ContainerCmdExecuted, data);
  });
});
