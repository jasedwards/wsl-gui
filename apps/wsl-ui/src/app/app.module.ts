import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CanActionPipe } from './can-action.pipe';
import { NglSpinnersModule } from 'ng-lightning';

@NgModule({
  declarations: [AppComponent, CanActionPipe],
  imports: [BrowserModule, NglSpinnersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
