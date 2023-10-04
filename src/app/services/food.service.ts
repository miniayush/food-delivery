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
  private apiUrl = 'http://example.com/api'; // replace with your API endpoint

  constructor(private http: HttpClient) {}

  getFoodDetails(restaurantId: string): Observable<Food[]> {
    const url = `${this.apiUrl}/food-details`; // replace with your API path
    return this.http.post<Food[]>(url, { restaurantId });
  }
}
