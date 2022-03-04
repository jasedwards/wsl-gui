import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContainerInfo } from '@wsl-gui/models';

@Component({
  selector: 'wsl-gui-container-item',
  templateUrl: './container-item.component.html',
  styleUrls: ['./container-item.component.scss'],
})
export class ContainerItemComponent {
  @Input()
  container!: ContainerInfo;

  @Output() executeAction = new EventEmitter<{ id: string; action: string }>();

  onExecute(action: string) {
    this.executeAction.emit({ id: this.container.ID, action });
  }
}
