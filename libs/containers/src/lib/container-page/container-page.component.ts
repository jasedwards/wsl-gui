import { Component } from '@angular/core';
import { ContainersFacade } from '../containers.facade';

@Component({
  selector: 'wsl-gui-container-page',
  templateUrl: './container-page.component.html',
  styleUrls: ['./container-page.component.scss'],
})
export class ContainerPageComponent {
  constructor(public facade: ContainersFacade) {}
  action(data: { id: string; action: string }) {
    const { id, action } = data;
    this.facade.performAction(id, action);
  }
}
