import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiUrl = 'https://localhost:7261/api/Restaurant'; // replace with your API URL

  constructor(private http: HttpClient) {}
  getRestaurants() {
    return this.http.post(this.apiUrl, {});
  }
}