import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromContainers from './containers.reducer';

export const selectContainersState =
  createFeatureSelector<fromContainers.ContainerState>(
    fromContainers.containersFeatureKey
  );

export const getContainers = createSelector(selectContainersState, (state) => {
  return state.Containers;
});
export const getIsLoading = createSelector(
  selectContainersState,
  (state) => state.Loading
);
