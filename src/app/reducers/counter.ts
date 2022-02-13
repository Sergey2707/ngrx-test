import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';

export const COUNTER_KEY = 'counter';

export const increment = createAction('[COUNTER] increment');
export const decrement = createAction('[COUNTER] decrement');
export const reset = createAction('[COUNTER] reset');
export const changeLastUpdate = createAction(
  '[COUNTER] lastUpdate',
  props<{ lastUpdate: number }>()
);

export interface CounterState {
  count: number;
  lastUpdate?: number;
}

export const initialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(reset, (state) => ({ ...state, count: 0 })),
  on(changeLastUpdate, (state, action) => ({
    ...state,
    lastUpdate: action.lastUpdate,
  }))
);

export const featureSelector = createFeatureSelector<CounterState>('counter');
export const countSelector = createSelector(
  featureSelector,
  (state) => state.count
);
export const lastUpdateSelector = createSelector(
  featureSelector,
  (state) => state.lastUpdate
);
