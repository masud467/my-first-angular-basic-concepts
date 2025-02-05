import { AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { GrandSonComponent } from '../grand-son/grand-son.component';

@Component({
  selector: 'app-child',
  imports: [GrandSonComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, AfterViewInit{
  ngAfterViewInit():void{
    console.log(this.child);
  }
  ngOnInit():void{
    console.log(this.calender);
  }
  loadCalender(){
    console.log(this.calender.nativeElement.value);
    this.input.nativeElement.value=this.calender.nativeElement.value;
  }
@ViewChild('calender',{read:ElementRef,static:true}) calender!:ElementRef;
@ViewChild('input',{read:ElementRef,static:true}) input!:ElementRef;

@ViewChild(GrandSonComponent) child!:GrandSonComponent;

add(){
  this.child.increment();
}
}