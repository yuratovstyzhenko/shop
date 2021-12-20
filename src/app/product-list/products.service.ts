import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [
    {
      name: 'item1',
      price: 150,
    },
    {
      name: 'item2',
      price: 200,
    },
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }
}
