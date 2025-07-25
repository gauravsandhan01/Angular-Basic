import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css'
})
export class EventBinding {
  firstName: string = "Gaurav";
  lastName: string = "Sandhan";

  constructor() {
  }

    showWelcomeMessage() {
      alert("welcome to angular 20");
    }

    onCityChange(){
      alert("city changed");
      console.log("city changed will be displayed here");
    }

}
