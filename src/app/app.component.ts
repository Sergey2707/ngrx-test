import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import {
  changeLastUpdate,
  countSelector,
  decrement,
  increment,
  lastUpdateSelector,
  reset,
} from './reducers/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store) {}

  count$ = this.store.select(countSelector);
  cannotDecrese$ = this.count$.pipe(map((count) => count <= 0));
  lastUpdate$ = this.store.select(lastUpdateSelector);

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
