import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Varayti } from '../varayti/varayti';
import { Contactus } from '../contactus/contactus';
import { Fouter } from '../fouter/fouter';
import { About } from '../about/about';

@Component({
  selector: 'app-home',
  imports: [RouterLink,Varayti,Contactus,Fouter,About],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
