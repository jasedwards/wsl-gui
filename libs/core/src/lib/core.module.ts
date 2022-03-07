import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdPipe } from './cd.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [CdPipe],
  exports: [CdPipe],
})
export class CdCoreModule {}
