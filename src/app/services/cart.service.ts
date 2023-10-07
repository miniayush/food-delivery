import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
  private cartUpdated = new Subject<any[]>();

  addToCart(foodItem: any) {
    this.cartItems.push(foodItem);
    this.cartUpdated.next([...this.cartItems]);
  }

  getCartItems() {
    return this.cartItems;
  }

  isInCart(foodItem: any) {
    return this.cartItems.includes(foodItem);
  }

  getCartCount(foodItem: any) {
    return this.cartItems.filter((item) => item === foodItem).length;
  }

  incrementCount(foodItem: any) {
    this.cartItems.push(foodItem);
    this.cartUpdated.next([...this.cartItems]);
  }

  decrementCount(foodItem: any) {
    const index = this.cartItems.indexOf(foodItem);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
    this.cartUpdated.next([...this.cartItems]);
  }

  getTotalPrice() {
    return this.cartItems.reduce(
      (total, foodItem) => total + Number(foodItem.price),
      0
    );
  }

  clearCart() {
    this.cartItems = [];
    this.cartUpdated.next([...this.cartItems]);
  }
  getCartUpdateListener() {
    return this.cartUpdated.asObservable();
  }
}
