import { contextBridge, ipcRenderer } from 'electron';
import { Events } from '@wsl-gui/models';

contextBridge.exposeInMainWorld('api', {
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  platform: process.platform,
  electronIpcOnce: (channel: string, listener: (event: any, ...arg: any) => void) => {
    ipcRenderer.once(channel, listener);
  },
  getImages:()=> ipcRenderer.invoke(Events.GetImages),
  getContainers: ()=> ipcRenderer.invoke(Events.GetContainers),
  stopContainer: (containerId: string) => ipcRenderer.invoke(Events.StopContainer,containerId)
});
