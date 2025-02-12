import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CanComponentDeactivate } from '../../../auth/auth.guard';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements CanComponentDeactivate{

  
  name!:string;
  email!:string;
  address!:string;


  canExit(){
    if(this.name || this.email || this.address){
      return confirm('Are you sure you want to leave this page?');
    }
    return true;
  }
}
