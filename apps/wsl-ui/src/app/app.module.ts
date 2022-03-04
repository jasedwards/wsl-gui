import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContainersModule } from '@wsl-gui/containers';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContainersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
