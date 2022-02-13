import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import {
  changeLastUpdate,
  decrement,
  increment,
  reset,
} from './reducers/counter';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  lastUpdate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increment, decrement, reset),
      map(() => changeLastUpdate({ lastUpdate: Date.now() }))
    )
  );
}
