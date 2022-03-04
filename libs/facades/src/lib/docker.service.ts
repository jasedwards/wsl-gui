import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContainerInfo, Events } from '@wsl-gui/models';

interface WindowApi extends Window {
  api: {
    getImages: () => void;
    getContainers: () => void;
    electronIpcOnce: (
      channel: string,
      listener: (event: any, ...arg: any) => void
    ) => void;
    stopStartContainer: (containerId: string, action: string) => void;
  };
}

@Injectable({
  providedIn: 'root',
})
export class DockerService {
  win = window as unknown as WindowApi;
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
        Events.ContainerStoppedStarted,
        (event, arg) => {
          subscriber.next(arg);
          subscriber.complete();
        }
      );
      this.win.api.stopStartContainer(id, action);
    });
  }
}
