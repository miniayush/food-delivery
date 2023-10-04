// order-card.component.ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css'],
})
export class OrderCardComponent implements OnInit {
  @Input() orderData: any;

  constructor() {}
  ngOnInit(): void {
    // console.log(this.orderData);
  }
}
