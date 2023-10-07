import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Restaurant {
  id: number;
  name: string;
  restaurantId: number;
  rating: number;
  imageUrl: string;
  description: string;
  foodItems: null;
}
@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private restaurantId = 0;
  public restaurantDetails = {};
  private apiUrl = 'https://localhost:7261/api/Restaurant'; // replace with your API URL
  restaurants: any;
  constructor(private http: HttpClient) {}
  getRestaurants() {
    return this.http.get(this.apiUrl);
  }
  setRestaurantDetails() {
    let url = `https://localhost:7261/api/Restaurant/${this.restaurantId}`;
    return this.http.get<Restaurant>(url);
  }
  getRestaurantDetails() {
    return this.restaurantDetails;
  }

  setRestaurantId(id: number) {
    this.restaurantId = id;
  }
}
