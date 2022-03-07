import { Action, createReducer, on } from '@ngrx/store';
import * as ContainersActions from './containers.actions';
import { ContainerInfo } from '@wsl-gui/models';

export const containersFeatureKey = 'containers';

export interface ContainerState {
  Containers: ContainerInfo[];
  Loading: boolean;
}

export const initialState: ContainerState = {
  Containers: [],
  Loading: false,
};

export const reducer = createReducer(
  initialState,

  on(ContainersActions.containersLoaded, (state, data) => {
    return Object.assign({}, state, { Containers: data.containers });
  }),
  on(ContainersActions.performAction, (state) => {
    return Object.assign({}, state, { Loading: true });
  }),
  on(ContainersActions.actionPerformed, (state) => {
    return Object.assign({}, state, { Loading: false });
  })
);
