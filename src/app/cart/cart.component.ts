import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: any[];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }

  getCartCount(foodItem: any) {
    return this.cartService.getCartCount(foodItem);
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  getUniqueCartItems() {
    return Array.from(new Set(this.cartItems));
  }
}
