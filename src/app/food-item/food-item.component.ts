import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service'; // adjust the path as needed

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css'],
})
export class FoodItemComponent {
  @Input() foodItem: any;
  count = 1;

  constructor(private cartService: CartService) {}

  getStars(rating: number): { filled: number; half: number; unfilled: number } {
    const filled = Math.floor(rating);
    const half = rating % 1 !== 0 ? 1 : 0;
    const unfilled = 5 - filled - half;
    return { filled, half, unfilled };
  }

  addToCart(foodItem: any) {
    this.cartService.addToCart(foodItem);
    this.count = 1; // reset count after adding to cart
  }

  isInCart(foodItem: any) {
    return this.cartService.isInCart(foodItem);
  }

  getCartCount(foodItem: any) {
    return this.cartService.getCartCount(foodItem);
  }

  incrementCount(foodItem: any) {
    this.cartService.incrementCount(foodItem);
  }

  decrementCount(foodItem: any) {
    this.cartService.decrementCount(foodItem);
  }
}
