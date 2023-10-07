// order-card.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css'],
})
export class OrderCardComponent implements OnInit {
  @Input() orderData: any;
  private restaurantName!: string;
  constructor(private restaurantService: RestaurantService) {}
  ngOnInit(): void {
    this.restaurantService
      .restaurantNameById(this.orderData.restaurantId)
      .subscribe(
        (response) => {
          this.restaurantName = response.name;
        },
        (err) => {
          console.log("couldn't get restaurant name");
        }
      );
  }
  getRestaurantName() {
    return this.restaurantName;
  }
}
