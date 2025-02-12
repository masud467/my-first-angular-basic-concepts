import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { customValidators } from '../custom-validators';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  userName = 'userName';
  email = 'email';
  password = 'password';


  // regForm= new FormGroup({
  //   userName: new FormControl('',Validators.compose([
  //     Validators.required,
  //     Validators.minLength(4),
  //     Validators.maxLength(10)
  //   ])),
  //   email: new FormControl('',Validators.required),
  //   password: new FormControl('',Validators.compose([
  //     Validators.required,
  //     Validators.minLength(8),
  //   ])),
  // })

  regForm:FormGroup;

  constructor(private fb:FormBuilder){
    this.regForm=this.fb.group({
      userName:['',Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
        customValidators.noWhiteSpace
      ]),
      customValidators.userNameExistAsync
    ],
      email:['',Validators.email],
      password:['',Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])],
    })
  }

  signUp(){
    console.log(this.regForm.value,this.regForm.status,this.regForm);
  }
}
