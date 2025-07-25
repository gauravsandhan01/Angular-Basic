import { Component, } from '@angular/core';
import { signal } from '@angular/core';
@Component({
  selector: 'app-writable-signal',
  templateUrl: './writable-signal.html',
  styleUrl: './writable-signal.css'
})
export class WritableSignal {
  firstNAme:string ="Gaurav";

  productName= "moto";

  courseName =signal<string>('Angular');

  courseDuration=signal("3 months");
  count = signal(0); // initialize with value 0

  increment() {
    this.count.set(this.count() + 1); // update value
  }

  constructor(){
    this.firstNAme = "tinku";
    console.log(this.firstNAme);

  
    setTimeout (()=>{
      this.courseName.set("React")
    },4000);
    console.log(this.courseName());
  
  }

}
