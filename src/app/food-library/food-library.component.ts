import { Component, OnInit } from '@angular/core';
import { FoodService, Food } from '../services/food.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-food-library',
  templateUrl: './food-library.component.html',
  styleUrls: ['./food-library.component.css'],
})
export class FoodLibraryComponent implements OnInit {
  searchTerm = '';
  foodItems: Food[] = [];
  restaurantDetails!: any;
  constructor(
    private foodService: FoodService,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit() {
    this.foodService.getFoodDetails().subscribe((data) => {
      this.foodItems = data;
    });
    this.restaurantDetails = this.restaurantService.getRestaurantDetails();
  }

  get filteredFoodItems() {
    if (this.searchTerm) {
      return this.foodItems.filter((foodItem) =>
        foodItem.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      return this.foodItems;
    }
  }
}
