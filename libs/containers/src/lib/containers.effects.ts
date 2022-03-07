import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map, switchMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

import * as ContainersActions from './containers.actions';
import { DockerService } from '@wsl-gui/facades';

@Injectable()
export class ContainersEffects {
  loadContainers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContainersActions.loadContainers),
      switchMap(() => this.dockerService.getContainers()),
      map((val) => ContainersActions.containersLoaded({ containers: val }))
    );
  });

  actionPerformed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContainersActions.actionPerformed),
      map(() => ContainersActions.loadContainers())
    );
  });

  performAction$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContainersActions.performAction),
      switchMap(({ action, id }) => {
        return this.dockerService.performContainerAction(id, action);
      }),
      map(() => ContainersActions.actionPerformed())
    );
  });

  constructor(
    private actions$: Actions,
    private dockerService: DockerService
  ) {}
}
