import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PropertyBinding } from '../property-binding/property-binding';

@Component({
  selector: 'app-two-way-data-binding',
  imports: [FormsModule],
  templateUrl: './two-way-data-binding.html',
  styleUrl: './two-way-data-binding.css'
})
export class TwoWayDataBinding {
  firstName: string = "Gaurav";
  lastName: string = "Sandhan";


}
