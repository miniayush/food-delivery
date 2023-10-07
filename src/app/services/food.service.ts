import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Food {
  id: number;
  name: string;
  description: string;
  rating: number;
  imageUrl: string;
  restaurantId: number;
}

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private restaurantId = 0;
  private apiUrl = ''; // replace with your API endpoint

  constructor(private http: HttpClient) {}

  getFoodDetails(): Observable<Food[]> {
    return this.http.get<Food[]>(this.apiUrl);
  }
  setRestaurantId(id: number) {
    this.restaurantId = id;
    this.apiUrl = `https://localhost:7261/api/Restaurant/${this.restaurantId}/fooditems`;
  }
}
