import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../services/food.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css'],
})
export class RestaurantCardComponent {
  @Input() restaurant: any;

  imageLoaded: boolean = false;

  constructor(
    private router: Router,
    private foodService: FoodService,
    private restaurantService: RestaurantService
  ) {}

  getRatingColor(rating: number): string {
    if (rating >= 4) {
      return '#267E3E';
    } else if (rating >= 3) {
      return '#e0d314';
    } else {
      return '#b31705';
    }
  }
  getFormattedRating(rating: number): string {
    return rating.toFixed(1);
  }
  onImageLoad(): void {
    this.imageLoaded = true;
  }
  navigateTo(path: any) {
    this.foodService.setRestaurant(this.restaurant.id);
    this.restaurantService.setRestaurantId(this.restaurant.id);
    this.restaurantService.setRestaurantDetails(this.restaurant);
    this.router.navigate([path]);
  }
}
