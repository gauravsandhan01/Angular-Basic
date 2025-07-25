import { Component } from '@angular/core';
import { Interpolation } from '../../DataBindingComponet/interpolation/interpolation';
import { PropertyBinding } from '../../DataBindingComponet/property-binding/property-binding';
import { EventBinding } from "../../DataBindingComponet/event-binding/event-binding";
import { TwoWayDataBinding } from '../../DataBindingComponet/two-way-data-binding/two-way-data-binding';


@Component({
  selector: 'app-data-binding',
  imports: [Interpolation, PropertyBinding, EventBinding,TwoWayDataBinding ],
  templateUrl: './data-binding.html',
  styleUrls: ['./data-binding.css']
})
export class DataBinding {

}
