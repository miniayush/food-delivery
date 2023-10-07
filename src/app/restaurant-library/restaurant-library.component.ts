import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurant-library',
  templateUrl: './restaurant-library.component.html',
  styleUrls: ['./restaurant-library.component.css'],
})
export class RestaurantLibraryComponent implements OnInit {
  restaurants: any;
  searchTerm = '';

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(
      (response) => {
        this.restaurantService.restaurants = response;
        this.restaurants = response;
        console.log(response);
      },
      (error) => {
        //handle
      }
    );
  }

  get filteredRestaurant() {
    if (this.searchTerm) {
      return this.restaurants.filter((restaurant: any) =>
        restaurant.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      return this.restaurants;
    }
  }
}
