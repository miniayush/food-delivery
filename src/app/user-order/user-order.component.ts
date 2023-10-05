// user-order.component.ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css'],
})
export class UserOrderComponent implements OnInit {
  @Input() orders: any;

  constructor() {}

  ngOnInit(): void {}
}
