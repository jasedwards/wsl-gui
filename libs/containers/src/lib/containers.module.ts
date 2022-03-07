import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerItemComponent } from './container-item/container-item.component';
import { ContainerPageComponent } from './container-page/container-page.component';
import { CanActionPipe } from './can-action.pipe';
import { NglSpinnersModule } from 'ng-lightning';
import { StoreModule } from '@ngrx/store';
import * as fromContainers from './containers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ContainersEffects } from './containers.effects';
import { CdCoreModule } from '@wsl-gui/core';

@NgModule({
  imports: [
    CommonModule,
    NglSpinnersModule,
    StoreModule.forFeature(
      fromContainers.containersFeatureKey,
      fromContainers.reducer
    ),
    EffectsModule.forFeature([ContainersEffects]),
    CdCoreModule,
  ],
  declarations: [ContainerItemComponent, ContainerPageComponent, CanActionPipe],
  exports: [ContainerPageComponent],
})
export class ContainersModule {}
