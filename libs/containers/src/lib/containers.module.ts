import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerItemComponent } from './container-item/container-item.component';
import { ContainerPageComponent } from './container-page/container-page.component';
import { CanActionPipe } from './can-action.pipe';
import { NglSpinnersModule } from 'ng-lightning';

@NgModule({
  imports: [CommonModule, NglSpinnersModule],
  declarations: [ContainerItemComponent, ContainerPageComponent, CanActionPipe],
  exports: [ContainerPageComponent],
})
export class ContainersModule {}
