import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-restaurant-card',
  templateUrl: './admin-restaurant-card.component.html',
  styleUrls: ['./admin-restaurant-card.component.css'],
})
export class AdminRestaurantCardComponent {
  @Input() restaurant: any;
  deleteRestaurant() {
    console.log(this.restaurant);
  }
}
