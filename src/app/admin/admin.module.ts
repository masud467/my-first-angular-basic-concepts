import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { authGuard, canDeactivate, permission, userCanMatch } from '../auth/auth.guard';

const routes:Routes=[
{
  path:'',
  canActivate:[authGuard],
  component:AdminComponent,
  children:[
    {
      path:'',
      canActivateChild:[permission],
      children:[
        {
          path:'create-product',
          // canMatch:[userCanMatch],
          component:CreateProductComponent,
          
        },
        {
          path: 'create-user',
          component: CreateUserComponent,
          canDeactivate:[canDeactivate]
          
        },
      ]
    },
    
    {
      path:'user-list',
      // canActivate:[()=>false],
      component:UserListComponent,
      
    }
  ]
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AdminComponent,
    CreateProductComponent,
    CreateUserComponent,
    UserListComponent
  ]
})
export class AdminModule { }
