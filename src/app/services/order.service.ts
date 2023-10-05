import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Order {
  orderId: number;
  restaurantId: number;
  userId: number;
  orderTime: string;
  food: string;
  status: string;
}
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'https://localhost:7261/api/Order'; // replace with your API endpoint

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  postOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

  getOrdersByRestaurant(restaurantId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/restaurant/${restaurantId}`);
  }

  getOrdersByUser(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/user/${userId}`);
  }

  loadData(orderData: any) {
    //add parameter orderData and return sorted array
    // Parse the food string into an array of objects for each order
    orderData.sort((a: any, b: any) => {
      if (a.status === 'active' && b.status !== 'active') return 1;
      else if (a.status !== 'active' && b.status === 'active') return -1;
      else return new Date(a.orderTime) > new Date(b.orderTime) ? 1 : -1;
    });
    orderData.forEach((order: any) => {
      order.food = JSON.parse(order.food);
      order.total = 0;
      order.food.forEach((item: any) => {
        order.total += item.price;
      });
      order.orderTime = this.formatDate(order.orderTime);
    });
    return orderData;
  }

  formatDate(dateStr: string): string {
    let dateObj = new Date(dateStr);

    let day = ('0' + dateObj.getDate()).slice(-2);
    let month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    let year = dateObj.getFullYear();

    let hours = ('0' + dateObj.getHours()).slice(-2);
    let minutes = ('0' + dateObj.getMinutes()).slice(-2);

    let formattedDate = `${day}/${month}/${year} | ${hours}:${minutes}`;
    return formattedDate;
  }
}
