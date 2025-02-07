
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPasswordStrength]',
  exportAs:'passwordStrength'
})
export class PasswordStrengthDirective {
  passwordStrength!:number;
  constructor() { }

  @HostListener('input', ['$event'])
  output(event:InputEvent){
    const e = event.target as HTMLInputElement;
    const value = e.value;
    this.passwordStrength = this.PasswordStrengthChecker(value);
    console.log(value);
  }

  PasswordStrengthChecker(password:string):number{
    // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!password) return 0;
    else if(password.length < 6) return 1;
    else if(password.length <8 ) return 2;
    return 3;
  }

}
