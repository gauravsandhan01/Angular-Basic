import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveComponent } from '../reactive/reactive.component';

@Component({
  selector: 'app-templet-driven',
  imports: [FormsModule,NgIf ],
  templateUrl: './templet-driven.component.html',
  styleUrl: './templet-driven.component.css'
})
export class TempletDrivenComponent {

  userObj:any ={

    firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    zip:'',
    isTermCondition: false

  }

  onSave(){
    debugger;
    const formValue =this.userObj;
    alert("form is submitted");
  }

}
