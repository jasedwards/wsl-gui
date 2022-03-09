import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContainerInfo, Events, Settings } from '@wsl-gui/models';

interface WindowApi extends Window {
  api: {
    getImages: () => void;
    getContainers: () => void;
    electronIpcOnce: (
      channel: string,
      listener: (event: any, ...arg: any) => void
    ) => void;
    ExecuteContainerCmd: (containerId: string, action: string) => void;
    SetSettings: (settings: { [key: string]: any }) => void;
    GetSettings: () => void;
  };
}

@Injectable({
  providedIn: 'root',
})
export class DockerService {
  win = window as unknown as WindowApi;

  private _settings!: Settings;

  get settings() {
    return this._settings;
  }

  getSettings(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.win.api.electronIpcOnce(Events.ReturnGetSettings, (settings) => {
        this._settings = settings;
        resolve();
      });
      this.win.api.GetSettings();
    });
  }

  getContainers(): Observable<ContainerInfo[]> {
    return new Observable((subscriber) => {
      this.win.api.electronIpcOnce(Events.SendContainers, (event, arg) => {
        try {
          subscriber.next(JSON.parse(`[${arg}]`));
        } catch (ex) {
          subscriber.next(ex);
        } finally {
          subscriber.complete();
        }
      });
      this.win.api.getContainers();
    });
  }

  performContainerAction(id: string, action: string): Observable<string> {
    return new Observable((subscriber) => {
      this.win.api.electronIpcOnce(
        Events.ContainerCmdExecuted,
        (event, arg) => {
          subscriber.next(arg);
          subscriber.complete();
        }
      );
      this.win.api.ExecuteContainerCmd(id, action);
    });
  }
}
