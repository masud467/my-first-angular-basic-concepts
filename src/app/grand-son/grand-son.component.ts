import { Component } from '@angular/core';

@Component({
  selector: 'app-grand-son',
  imports: [],
  templateUrl: './grand-son.component.html',
  styleUrl: './grand-son.component.css'
})
export class GrandSonComponent {
  count=0;
  increment(){
    this.count++;
  }

}
