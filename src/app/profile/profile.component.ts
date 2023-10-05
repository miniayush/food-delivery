import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { OrderService } from '../services/order.service';

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
    private orderService: OrderService
  ) {}
  ngOnInit(): void {
    // get the profile data from the service
    this.profile = this.userService.user.user;
    this.orders = this.orderService.loadData();
    debugger;
  }
}
