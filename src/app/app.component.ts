import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IUser } from './user.modal';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor,NgStyle,NgClass,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-angular';

  users:IUser[]=[
    {
      name:'John',
      age:20,
      image:'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email:'john@gmail.com',
      isActive:true
    },
    {
      name:'Jane',
      age:21,
      image:'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email:'jane@gmail.com',
      isActive:false
    },
    {
      name:'Jack',
      age:22,
      image:'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email:'jack@gmail.com',
      isActive:true
    }
  ]

  // ngIf use case
  blogs=['blog1','blog2','blog3']
  
}
