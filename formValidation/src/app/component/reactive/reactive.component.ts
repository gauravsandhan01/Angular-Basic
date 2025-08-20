import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  userForm : FormGroup =  new FormGroup({
    firstName : new FormControl("",[Validators.required]),
    lname :new FormControl("",[Validators.required,Validators.minLength(5)]),
    userName: new FormControl(""),
    city: new FormControl("goa"),
    state :new FormControl(""),
    zip : new FormControl(),
    isTerm: new FormControl(false)
  })

  constructor(){   ///disable form control
    this.userForm.controls['state'].disable();
    setTimeout(()=>{
      this.userForm.controls['state'].enable();
    }, 5000);
  }

  onUsersave(){
    const formValue =this.userForm.value;
    debugger;
  }

}
