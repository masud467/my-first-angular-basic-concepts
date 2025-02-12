import { Product } from './models/product.type';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './services/product.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor,AsyncPipe,RouterLink],
  providers: [ProductService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
Products$!:Observable<Product[]>;
constructor(private productService:ProductService) { }
ngOnInit(): void {
this.Products$ = this.productService.getProducts();
}

}
