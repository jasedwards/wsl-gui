import {
  ChangeDetectorRef,
  NgZone,
  OnDestroy,
  Pipe,
  PipeTransform,
} from '@angular/core';

@Pipe({
  name: 'cd',
})
export class CdPipe implements PipeTransform, OnDestroy {
  private timeoutId: any = null;

  constructor(private zone: NgZone, private cd: ChangeDetectorRef) {}
  transform(value: unknown): any {
    this.timeoutId = setTimeout(() => {
      this.timeoutId = null;
      this.cd.detectChanges();
    }, 400);

    return value;
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
}
