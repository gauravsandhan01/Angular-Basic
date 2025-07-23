import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from './component/admin/admin';
import { User } from './component/user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Admin,User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Component');
}
