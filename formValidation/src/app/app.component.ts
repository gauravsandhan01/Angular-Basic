import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TempletDrivenComponent } from './component/templet-driven/templet-driven.component';
import { ReactiveComponent } from './component/reactive/reactive.component';

@Component({
  selector: 'app-root',
  imports: [TempletDrivenComponent,RouterOutlet,ReactiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formValidation';
}
