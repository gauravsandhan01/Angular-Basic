import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoggedIn = true;

  isActive=true;
  isChecked:boolean=false;
  dayName:string='';
  fruits = ['Apple', 'Banana', 'Cherry'];

  role = 'user';

  users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'editor' },
  { name: 'Charlie', role: 'guest' }
];




}

