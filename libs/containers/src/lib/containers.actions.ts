import { createAction, props } from '@ngrx/store';
import { ContainerInfo } from '@wsl-gui/models';

export const loadContainers = createAction('[Containers] Load Containers');

export const containersLoaded = createAction(
  '[Containers] Containers Loaded',
  props<{ containers: ContainerInfo[] }>()
);

export const performAction = createAction(
  '[Containers] Perform Action',
  props<{ action: string; id: string }>()
);
export const actionPerformed = createAction('[Containers] Action Performed');
