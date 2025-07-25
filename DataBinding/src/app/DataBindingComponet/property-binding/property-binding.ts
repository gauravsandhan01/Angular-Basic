import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-binding',
  imports: [FormsModule],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css'
})
export class PropertyBinding {
  inputype: string = "checkbox";
  myclass: string = "mycolour";
  firstName: string = "Gaurav";
  lastName: string = "Sandhan";
}
