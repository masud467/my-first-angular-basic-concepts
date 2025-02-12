import { AbstractControl, ValidationErrors } from "@angular/forms";
import { delay, Observable, of } from "rxjs";

export class customValidators{
   static noWhiteSpace(control:AbstractControl):ValidationErrors|null{
      const value=control.value as string;
      const isWhiteSpace=value.indexOf(' ')>=0;
      return isWhiteSpace?{whiteSpace:true}:null;
     }

     static userNameExistAsync(control:AbstractControl):Promise<ValidationErrors|null> | Observable<ValidationErrors|null>{
      const userNames=[
        'masud',
        'sakib',
        'rakib',
      ];

      const value= control.value as string;
      const isExist=userNames.includes(value);
      return isExist? of({userExist:true}).pipe(delay(500)) : of(null).pipe(delay(500));
      
     }
}