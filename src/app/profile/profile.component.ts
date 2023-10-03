import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: any;
  orders = [
    {
      id: '1',
      dateTime: Date(),
      status: 'Complete',
      rating: 4,
      items: [
        { name: 'Burger', price: 50 },
        { name: 'Pizza', price: 30 },
        { name: 'Steak', price: 20 },
      ],
    },
    {
      id: '2',
      dateTime: Date(),
      status: 'Complete',
      rating: 3,
      items: [
        { name: 'Burger', price: 40 },
        { name: 'Pizza', price: 60 },
        { name: 'Steak', price: 60 },
      ],
    },
  ];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    // get the profile data from the service
    console.log(this.userService);
    
    this.profile = this.userService.user.user;
    this.profile.orders = this.orders;
    function calculateTotal(profile: any): void {
      let total = 0;
      for (let order of profile.orders) {
        for (let item of order.items) {
          total += item.price;
        }
        order.total = total;
      }
    }
    calculateTotal(this.profile);
  }
}
