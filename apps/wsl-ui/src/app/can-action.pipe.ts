import { Pipe, PipeTransform } from '@angular/core';
import { ContainerStates } from '@wsl-gui/models';

@Pipe({
  name: 'canAction'
})
export class CanActionPipe implements PipeTransform {

  transform(action: string, state: ContainerStates): boolean {
    switch(action.toLowerCase()){
      case 'stop':
        return state === ContainerStates.Restarting || state === ContainerStates.Running;
      default:
        return false;
    }
  }

}
