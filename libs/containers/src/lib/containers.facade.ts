import { ContainerState } from './containers.reducer';
import { select, Store } from '@ngrx/store';
import { getContainers, getIsLoading } from './containers.selectors';
import { interval } from 'rxjs';
import * as ContainersActions from './containers.actions';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContainersFacade {
  loading$ = this.store.pipe(select(getIsLoading));
  containers$ = this.store.pipe(select(getContainers));

  constructor(private store: Store<ContainerState>) {
    this.init();
  }

  private init() {
    this.store.dispatch(ContainersActions.loadContainers());
    interval(1000 * 30).subscribe(() => {
      this.store.dispatch(ContainersActions.loadContainers());
    });
  }

  performAction(id: string, action: string) {
    this.store.dispatch(ContainersActions.performAction({ id, action }));
  }
}
