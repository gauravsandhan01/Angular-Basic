import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  imports: [],
  templateUrl: './computed-signal.html',
  styleUrl: './computed-signal.css'
})
export class ComputedSignal {
  price =signal(100);
  tax = signal(0.18);

  totalprice= computed(() => this.price() +this.tax());
}
