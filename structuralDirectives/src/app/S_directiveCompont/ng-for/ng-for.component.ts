import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  student=["ram","sham","tinku"];
  fruits = ['Apple', 'Banana', 'Cherry'];

  
categories = [
  {
    name: 'Fruits',
    items: ['Apple', 'Banana', 'Cherry']
  },
  {
    name: 'Vegetables',
    items: ['Carrot', 'Potato', 'Tomato']
  }
];



}
