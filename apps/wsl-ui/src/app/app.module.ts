import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContainersModule } from '@wsl-gui/containers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DockerService } from '@wsl-gui/facades';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export function getSettings(service: DockerService) {
  return () => service.getSettings();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ContainersModule,
    StoreModule.forRoot({}, {}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: getSettings,
      deps: [DockerService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
