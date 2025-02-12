import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.type';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [NgIf],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  id=1
  product!:Product
  constructor(
    private route:ActivatedRoute,
    private productService:ProductService) { 

  }
  changeRoute(){

  }

  ngOnInit(): void {

    console.log(this.route.snapshot.data);
    this.product = this.route.snapshot.data['product']
    // this.productService.getProduct(this.route.snapshot.params['id']).subscribe(res=>{
    //   this.product = res
    //   console.log(res)
    // })
  }

}
