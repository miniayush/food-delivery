import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private restaurantId = 0;
  private restaurantDetails = {};
  private apiUrl = 'https://localhost:7261/api/Restaurant'; // replace with your API URL
  restaurants: any;
  constructor(private http: HttpClient) {}
  getRestaurants() {
    return this.http.get(this.apiUrl);
  }
  setRestaurantDetails() {
    let url = `https://localhost:7261/api/Restaurant/${this.restaurantId}`;
    this.http.get(url).subscribe((response) => {
      this.restaurantDetails = response;
    });
  }
  getRestaurantDetails() {
    return this.restaurantDetails;
  }

  setRestaurantId(id: number) {
    this.restaurantId = id;
  }
}
