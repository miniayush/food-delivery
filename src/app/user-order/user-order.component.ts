// user-order.component.ts
import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Order, OrderService } from '../services/order.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css'],
})
export class UserOrderComponent implements OnInit {
  orders: any[] = [
    {
      orderId: '123',
      restaurantId: '456',
      customerId: '789',
      userId: '111',
      status: 'Active',
      orderTime: "'Thu Oct 05 2023 00:06:25 GMT+0530 (India Standard Time)'",
      food: '[{"name":"burger","price":23},{"name":"pizza","price":32}]',
    },
    {
      orderId: '124',
      restaurantId: '457',
      userId: '111',
      status: 'Active',
      customerId: '790',
      orderTime: "'Fri Oct 06 2023 01:07:26 GMT+0530 (India Standard Time)'",
      food: '[{"name":"pasta","price":22},{"name":"tacos","price":12}]',
    },
  ];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    // Parse the food string into an array of objects for each order
    this.orders.forEach((order) => {
      order.food = JSON.parse(order.food);
      order.total = 0;
      order.food.forEach((item: any) => {
        order.total += item.price;
      });
      order.orderTime = this.formatDate(order.orderTime);
    });
  }

  formatDate(dateStr: string): string {
    let dateObj = new Date(dateStr);

    let day = ('0' + dateObj.getDate()).slice(-2);
    let month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    let year = dateObj.getFullYear();

    let hours = ('0' + dateObj.getHours()).slice(-2);
    let minutes = ('0' + dateObj.getMinutes()).slice(-2);

    let formattedDate = `${day}/${month}/${year} | ${hours}:${minutes}`;
    return formattedDate;
  }
}
