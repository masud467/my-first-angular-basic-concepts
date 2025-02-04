import { Component, EventEmitter, input, output } from '@angular/core';
import { Blog } from '../app.component';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  onLikeEvent = output<Blog>();
  blog = input.required<Blog>();
  onLike(){
   this.onLikeEvent.emit(this.blog());
  }
}
