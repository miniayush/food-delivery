import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Order, OrderService } from '../services/order.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: any[];

  constructor(
    private cartService: CartService,
    private userService: UserService,
    private orderService: OrderService,
    private toastr: ToastrService,
    private router: Router
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
    let cartItems = this.cartService.getCartItems();
    let request = {
      orderId: 0,
      restaurantId: cartItems[0].restaurantId,
      userId: this.userService.getUser().user.id,
      orderTime: Date(),
      food: JSON.stringify(this.reduceCart(cartItems)),
      status: 'active',
      rating: 0,
      review: 'Not reviewed yet!',
    };

    this.postOrder(request);
    this.cartService.clearCart();
  }
  postOrder(order: Order) {
    this.orderService.postOrder(order).subscribe(
      (response) => {
        this.toastr.success('Order placed successfully!', 'Success', {
          positionClass: 'toast-bottom-right',
        });
        this.router.navigate(['profile']);
      },
      (error) => {
        this.toastr.success('Something went wrong!', 'Failed', {
          positionClass: 'toast-bottom-right',
        });
        // handle the error here
      }
    );
  }

  reduceCart(originalCart: any[]) {
    let newArray = originalCart.reduce((acc, curr) => {
      let found = acc.find((item: any) => item.name === curr.name);

      if (found) {
        found.count++;
      } else {
        acc.push({
          name: curr.name,
          price: curr.price,
          count: 1,
        });
      }

      return acc;
    }, []);
    return newArray;
  }
}
