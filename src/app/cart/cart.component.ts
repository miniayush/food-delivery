import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Order, OrderService } from '../services/order.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

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
    let cartItems = this.cartService.getCartItems();
    debugger;
    // let cartItems = [
    //   {
    //     id: 11,
    //     name: 'Veg Burger',
    //     description: 'Vegetarian burger with fresh veggies.',
    //     rating: 4.2,
    //     imageUrl:
    //       'https://i.pinimg.com/564x/23/ed/80/23ed80fa26efafc1b694094243b0e0bd.jpg',
    //     price: 80,
    //     restaurantId: 2,
    //   },
    //   {
    //     id: 11,
    //     name: 'Veg Burger',
    //     description: 'Vegetarian burger with fresh veggies.',
    //     rating: 4.2,
    //     imageUrl:
    //       'https://i.pinimg.com/564x/23/ed/80/23ed80fa26efafc1b694094243b0e0bd.jpg',
    //     price: 80,
    //     restaurantId: 2,
    //   },
    //   {
    //     id: 12,
    //     name: 'Crispy Burger',
    //     description: 'Crispy and crunchy burger with a special sauce.',
    //     rating: 4.1,
    //     imageUrl:
    //       'https://freepngimg.com/thumb/burger%20sandwich/16-hamburger-burger-png-image-mac-burger.png',
    //     price: 150,
    //     restaurantId: 2,
    //   },
    // ];

    let request = {
      orderId: 0,
      restaurantId: cartItems[0].restaurantId,
      userId: this.userService.getUser().user.id,
      orderTime: Date(),
      food: this.reduceCart(cartItems),
      status: 'active',
    };

    this.postOrder(request);
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
