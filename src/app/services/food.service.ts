import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Food {
  "id": number,
    "name": string,
    "description": string,
    "rating": number,
    "imageUrl": string,
    "restaurantId": number
}

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private apiUrl = 'https://localhost:7261/api/Restaurant/'; // replace with your API endpoint

  constructor(private http: HttpClient) {}

  getFoodDetails(restaurantId: string): Observable<Food[]> {
    const url = `${this.apiUrl}${restaurantId}/fooditems`; // replace with your API path
    return this.http.get<Food[]>(url);
  }
}
