import { NgIf } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordStrengthDirective } from './password-strength.directive';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent,NgIf,PasswordStrengthDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isChild:boolean = false;
  ngOnInit(): void {
    console.log('AppComponent ngOnInit called');
  }
  title = 'my-first-angular';

  constructor() {
    console.log('AppComponent constructor called');
  }

  toggle(){
    this.isChild = !this.isChild;
  }
}

