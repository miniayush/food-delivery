import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantService } from '../services/restaurant.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-restaurant-library',
  templateUrl: './restaurant-library.component.html',
  styleUrls: ['./restaurant-library.component.css'],
})
export class RestaurantLibraryComponent implements OnInit {
  restaurants: any;
  searchTerm = '';

  constructor(
    private restaurantService: RestaurantService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(
      (response) => {
        this.restaurantService.restaurants = response;
        this.restaurants = response;
      },
      (error) => {
        this.toastr.error('Something went wrong!', '', {
          positionClass: 'toast-bottom-right',
        });
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
