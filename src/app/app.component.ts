import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count: number = 1;
  public get cannotDecrese(): boolean {
    return this.count <= 0;
  }
  lastUpdate?: number;

  runTimer(): void {
    setInterval(() => (this.count += 0.00364583333), 10);
  }

  increment(): void {
    this.lastUpdate = Date.now();
    this.count++;
  }

  decrement(): void {
    this.lastUpdate = Date.now();
    this.count--;
  }

  reset(): void {
    this.lastUpdate = Date.now();
    this.count = 0;
  }
}
