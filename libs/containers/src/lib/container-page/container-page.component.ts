import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DockerService } from '@wsl-gui/facades';
import { ContainerInfo } from '@wsl-gui/models';
import { ContainersFacade } from '../containers.facade';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'wsl-gui-container-page',
  templateUrl: './container-page.component.html',
  styleUrls: ['./container-page.component.scss'],
})
export class ContainerPageComponent {
  constructor(public facade: ContainersFacade, private cd: ChangeDetectorRef) {}
  action(data: { id: string; action: string }) {
    const { id, action } = data;
    this.facade.performAction(id, action);
  }
}
