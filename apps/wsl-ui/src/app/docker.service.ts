import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from '@wsl-gui/models';

@Injectable({
  providedIn: 'root'
})
export class DockerService {

  getContainers(): Observable<any>{
    return new Observable(subscriber => {
      window.api.electronIpcOnce(Events.SendContainers,(event,arg) => {
        try {
           subscriber.next(JSON.parse(`[${arg}]`));
          //subscriber.next(arg);
        }catch(ex){
          subscriber.next(ex);
        }finally {
          subscriber.complete();
        }

      });
      window.api.getContainers();
    })
  }

  stopStartContainer(id: string,action: string): Observable<any> {
    return new Observable(subscriber => {
      window.api.electronIpcOnce(Events.ContainerStoppedStarted,(event,arg) => {
        try {
          subscriber.next(arg);
          //subscriber.next(arg);
        }catch(ex){
          subscriber.next(ex);
        }finally {
          subscriber.complete();
        }

      });
      window.api.stopStartContainer(id, action);
    })
  }
}
