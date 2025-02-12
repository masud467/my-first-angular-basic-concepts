import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, MaybeAsync, RedirectCommand, Resolve, RouterStateSnapshot } from '@angular/router';
import { Product } from '../models/product.type';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Product> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<Product | RedirectCommand> {
    const id = route.params['id'];
    return this.productService.getProduct(id);
  }

  constructor(private productService:ProductService) { }
}
