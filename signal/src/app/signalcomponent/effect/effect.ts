import { Component, signal } from '@angular/core';
import{ effect } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-effect',
  imports: [FormsModule],
  templateUrl: './effect.html',
  styleUrl: './effect.css'
})
export class Effect {
  nameInput = signal('Gaurav');

  constructor() {
    effect(() => {
      console.log('Name changed:', this.nameInput());
    });
  }

}
