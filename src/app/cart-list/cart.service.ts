import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  purchasedProducts = [
    {
      id: 1,
      name: 'Phone',
      price: 1200,
    },
    {
      id: 2,
      name: 'PC',
      price: 4000,
    },
  ];

  constructor() {}
}
