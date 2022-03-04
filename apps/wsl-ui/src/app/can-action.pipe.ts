import { Pipe, PipeTransform } from '@angular/core';
import { ContainerStates } from '@wsl-gui/models';

@Pipe({
  name: 'canAction'
})
export class CanActionPipe implements PipeTransform {

  transform(action: string, state: ContainerStates): boolean {
    action = action.toLowerCase();
   /* switch(action.toLowerCase()){
      case 'stop':
        return state === ContainerStates.Restarting || state === ContainerStates.Running;
        case ''
      default:
        return false;
    }*/
    switch(state){
      case ContainerStates.Created:
        return action === 'start';
      case ContainerStates.Restarting:
      case ContainerStates.Running:
        return action === 'stop' || action === 'restart' || action === 'pause';
      case ContainerStates.Removing:
        return false;
      case ContainerStates.Paused:
        return action !== 'pause';
      case ContainerStates.Exited:
          return action === 'start';
      case ContainerStates.Dead:
        return false;
    }
  }

}
