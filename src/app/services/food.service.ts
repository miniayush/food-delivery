import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Food {
  image: string;
  name: string;
  description: string;
  rating: number;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private apiUrl = 'https://localhost:7261/api/Restaurant/'; // replace with your API endpoint

  constructor(private http: HttpClient) {}

  getFoodDetails(restaurantId: string): Observable<Food[]> {
    const url = `${this.apiUrl}${restaurantId}/food-items`; // replace with your API path
    return this.http.get<Food[]>(url);
  }
}
