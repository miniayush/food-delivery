// user-order.component.ts
import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Order, OrderService } from '../services/order.service';
import { formatDate } from '@angular/common';
import { Food } from '../services/food.service';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css'],
})
export class UserOrderComponent implements OnInit {
  @Input() orders: any;

  constructor() {}

  ngOnInit(): void {
    // Parse the food string into an array of objects for each order
  }
}
