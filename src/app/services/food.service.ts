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
  private apiUrl = ''; // replace with your API endpoint

  constructor(private http: HttpClient) {}

  getFoodDetails(): Observable<Food[]> {
    return this.http.get<Food[]>(this.apiUrl);
  }
  setRestaurant(id: number) {
    this.apiUrl = `https://localhost:7261/api/Restaurant/${id}/fooditems`;
  }
}
