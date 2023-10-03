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

  constructor(
    private http: HttpClient,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.restaurants = this.restaurantService.getRestaurants();
  }
}
