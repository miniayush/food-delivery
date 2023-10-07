import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Restaurant {
  id: number;
  name: string;
  restaurantId: number;
  rating: number;
  imageUrl: string;
  description: string;
}
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
  setRestaurant() {
    let url = `https://localhost:7261/api/Restaurant/${this.restaurantId}`;
    return this.http.get<Restaurant>(url);
  }
  getRestaurantDetails() {
    return this.restaurantDetails;
  }
  setRestaurantDetails(restaurantDetails: any) {
    this.restaurantDetails = restaurantDetails;
  }
  setRestaurantId(id: number) {
    this.restaurantId = id;
  }
  restaurantNameById(id: any): Observable<Restaurant> {
    return this.http.get<Restaurant>(
      `https://localhost:7261/api/Restaurant/${id}`
    );
  }
}
