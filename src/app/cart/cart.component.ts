import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Order, OrderService } from '../services/order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: any[];

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private toastr: ToastrService
  ) {
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
  checkout() {
    debugger;
  }
  postOrder(order: Order) {
    this.orderService.postOrder(order).subscribe(
      (response) => {
        this.toastr.success('Order placed successfully!', 'Success', {
          positionClass: 'toast-bottom-right',
        });
      },
      (error) => {
        this.toastr.success('Something went wrong!', 'Failed', {
          positionClass: 'toast-bottom-right',
        });
        // handle the error here
      }
    );
  }
}
