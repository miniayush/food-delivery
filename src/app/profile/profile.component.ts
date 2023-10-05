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
    console.log('profile initiated');

    // get the profile data from the service
    this.profile = this.userService.getUser().user;
    let userId = this.profile.id;
    this.orderService.getOrdersByUser(userId).subscribe(
      (response) => {
        this.orders = this.orderService.loadData(response);
      },
      (err) => {
        this.toastr.error("Couldn't load orders", 'Error!', {
          positionClass: 'toast-bottom-right',
        });
      }
    );
  }
}
