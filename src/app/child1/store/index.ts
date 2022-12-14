import { createReducer, on } from '@ngrx/store';
import { incrementVersion } from './child1.actions';

export const child1FeatureKey = 'child1';

export interface Child1State {
  name: string;
  version: number;
}

export const initialState: Child1State = {
  name: child1FeatureKey,
  version: 0
};

export const child1Reducer = createReducer(
  initialState,
  on(incrementVersion, (state) => ({
    ...state,
    version: state.version + 1
  }))
);