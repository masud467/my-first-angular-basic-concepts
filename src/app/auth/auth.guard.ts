import { inject } from '@angular/core';
import { CanActivateFn, CanDeactivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs';
import { CreateUserComponent } from '../admin/components/create-user/create-user.component';

export const authGuard: CanActivateFn = () => {
  
  const authService =  inject(AuthService);
  const router =  inject(Router);

  return authService.isLoggedIn().pipe(map(isLogin=>{
    if(isLogin) return true;
    
    else{
      return router.createUrlTree(['/login']);
      
    }
  }))
};


export const permission: CanActivateFn = () => {
  
  const authService =  inject(AuthService);
  const router =  inject(Router);

  return authService.hasPermission().pipe(map(isLogin=>{
    if(isLogin) return true;
    
    else{
      return router.createUrlTree(['admin']);
      
    }
  }))
};


export interface CanComponentDeactivate{
  canExit:()=>boolean;
}

export const canDeactivate: CanDeactivateFn<CanComponentDeactivate> = (component:CanComponentDeactivate) => {
  return component.canExit();
};

export const userCanMatch: CanMatchFn=()=>{
  return false;
}
export const adminCanMatch: CanMatchFn=()=>{
  return true;
}