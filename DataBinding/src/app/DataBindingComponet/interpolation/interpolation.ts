import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css'
})
export class Interpolation {
  coureseName :string = 'Angular Basic';
  productPrice :number = 1000;
  AuthorName :string = 'Google';
  isDisabled :boolean = true;
}
