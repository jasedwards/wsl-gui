import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContainerInfo, Events } from '@wsl-gui/models';

@Injectable({
  providedIn: 'root'
})
export class DockerService {
  getContainers(): Observable<ContainerInfo[]>{
    return new Observable(subscriber => {
      window.api.electronIpcOnce(Events.SendContainers,(event,arg) => {
        try {
          subscriber.next(JSON.parse(`[${arg}]`));
        }catch(ex){
          subscriber.next(ex);
        }finally {
          subscriber.complete();
        }

      });
      window.api.getContainers();
    })
  }

  performContainerAction(id: string,action: string): Observable<string> {
    return new Observable(subscriber => {
      window.api.electronIpcOnce(Events.ContainerStoppedStarted,(event,arg) => {
        subscriber.next(arg);
        subscriber.complete();
      });
      window.api.stopStartContainer(id, action);
    })
  }
}
