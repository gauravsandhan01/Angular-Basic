import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WritableSignal } from './signalcomponent/writable-signal/writable-signal';
import { ComputedSignal } from './signalcomponent/computed-signal/computed-signal';
import { Effect } from './signalcomponent/effect/effect';

@Component({
  selector: 'app-root',
  imports: [WritableSignal,ComputedSignal,Effect, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('signal');
}
