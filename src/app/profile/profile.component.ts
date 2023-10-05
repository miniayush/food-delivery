import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { OrderService } from '../services/order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: any;
  orders: any[] = [];

  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    // get the profile data from the service
    this.profile = this.userService.user.user;
    let userId = 1;
    this.orderService.getOrdersByUser(userId).subscribe(
      (response) => {
        this.orders = response;
      },
      (err) => {
        this.toastr.error('Error!', "Couldn't load orders", {
          positionClass: 'toast-bottom-right',
        });
      }
    );
    this.orders = this.orderService.loadData();
    debugger;
  }
}
