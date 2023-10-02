// cart.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems = [
    { name: 'Burger', price: 50, quantity: 2 },
    { name: 'Pizza', price: 30, quantity: 1 },
    { name: 'Steak', price: 20, quantity: 3 },
  ];

  getTotalPrice() {
    let total = 0;
    for (let item of this.cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeItem(item);
    }
  }

  removeItem(itemToRemove: any) {
    this.cartItems = this.cartItems.filter((item) => item !== itemToRemove);
  }
}
