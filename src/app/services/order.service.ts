import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Order {
  orderId: string;
  restaurantId: string;
  userId: string;
  orderTime: string;
  food: string;
  status: string;
}

export interface Order {
  orderId: string;
  restaurantId: string;
  customerId: string;
  orderTime: string;
  food: string;
}
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://example.com/api/orders'; // replace with your API endpoint

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  getOrdersByRestaurant(restaurantId: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/restaurant/${restaurantId}`);
  }

  getOrdersByUser(userId: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/user/${userId}`);
  }
}
