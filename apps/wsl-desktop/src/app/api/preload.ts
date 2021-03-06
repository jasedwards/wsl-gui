import { contextBridge, ipcRenderer } from 'electron';
import { Events } from '@wsl-gui/models';

contextBridge.exposeInMainWorld('api', {
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  platform: process.platform,
  electronIpcOnce: (
    channel: string,
    listener: (event: any, ...arg: any) => void
  ) => {
    ipcRenderer.once(channel, listener);
  },
  getImages: () => ipcRenderer.invoke(Events.GetImages),
  getContainers: () => ipcRenderer.invoke(Events.GetContainers),
  ExecuteContainerCmd: (containerId: string, action: string) =>
    ipcRenderer.invoke(Events.ExecuteContainerCmd, containerId, action),
  SetSettings: (settings) => ipcRenderer.invoke(Events.SetSettings, settings),
  GetSettings: () => ipcRenderer.invoke(Events.GetSettings),
});
