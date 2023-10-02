import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: any;
  ngOnInit(): void {
    // get the profile data from the service
    this.profile = {
      name: 'Shashank Saxena',
      picture:
        'https://th.bing.com/th/id/OIP.NRYWYCYaB-hfvpkmQEAu5QHaHw?w=185&h=193&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      email: 'hello@gmail.com',
      phone: '12345678',
      address: '1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
      orders: [
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
      ],
    };
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
