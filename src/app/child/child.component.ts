import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  ngOnInit():void {
    console.log('ChildComponent ngOnInit called');
  }
  constructor() {
    console.log('ChildComponent constructor called');
  }
}