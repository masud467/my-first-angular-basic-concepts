import { ChildComponent } from './child/child.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { BlogPostComponent } from './blog-post/blog-post.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor,BlogPostComponent, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-angular';
blogs :Blog[] =[
  {
    Id:1,
    Title:"Blog Title 1",
    Description:"Blog Description 1",
    ImageUrl:"https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    Id:2,
    Title:"Blog Title 2",
    Description:"Blog Description 2",
    ImageUrl:"https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    Id:3,
    Title:"Blog Title 3",
    Description:"Blog Description 3",
    ImageUrl:"https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    Id:4,
    Title:"Blog Title 4",
    Description:"Blog Description 4",
    ImageUrl:"https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    Id:5,
    Title:"Blog Title 5",
    Description:"Blog Description 5",
    ImageUrl:"https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
]

featureBlogs:Blog[] =[
  {
    Id:1,
    Title:"Blog Title 4",
    Description:"Blog Description 4",
    ImageUrl:"https://images.unsplash.com/photo-1680249116456-e1dc127b9d46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    Id:2,
    Title:"Blog Title 5",
    Description:"Blog Description 5",
    ImageUrl:"https://images.unsplash.com/photo-1680188591202-22a2f6d7d6af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80"
  },
  {
    Id:3,
    Title:"Blog Title 6",
    Description:"Blog Description 6",
    ImageUrl:"https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
  Id:4,
  Title:"Blog Title 7",
  Description:"Blog Description 7",
  ImageUrl:"https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
  Id:5,
  Title:"Blog Title 8",
  Description:"Blog Description 8",
  ImageUrl:"https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}
]

onLikeCount(e:Blog){
  console.log("Like Count",e);
}
}

export interface Blog{
  Id:number;
  Title:string;
  Description:string;
  ImageUrl:string;
}