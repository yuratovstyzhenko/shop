import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  purchasedProducts = [
    {
      id: 0,
      name: 'Powerbank',
      price: 50,
    },
  ];

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.purchasedProducts = this.cartService.purchasedProducts;
    }, 2000);
    setTimeout(() => {
      this.purchasedProducts = [];
    }, 3000);
  }

  itemById(index: number, item: any) {
    return item.id;
  }
}
