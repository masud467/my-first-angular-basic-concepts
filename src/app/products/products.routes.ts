import { Routes } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductResolverService } from "./services/product-resolver.service";

export const routes: Routes = [
  {
    path:'',
    component:ProductsComponent
  },
  {
    path:'details/:id',
    resolve:{
      product:ProductResolverService
    },
    component:ProductDetailsComponent
  }
];