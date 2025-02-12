import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API_Endpoint = 'https://fakestoreapi.com';
  constructor(private http: HttpClient) { }
  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_Endpoint}/products`);
  }
  getProduct(id:number):Observable<Product> {
    return this.http.get<Product>(`${this.API_Endpoint}/products/${id}`);
  }
}
