import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get('https://localhost:7261/api/Admin/view-users');
  }
  getRestaurants(): Observable<any> {
    return this.http.get('https://localhost:7261/api/Restaurant');
  }
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(
      `https://localhost:7261/api/Admin/delete-user/${userId}`
    );
  }
  deleteRestaurant(restaurantId: number): Observable<any> {
    return this.http.delete(
      `https://localhost:7261/api/Admin/delete-restaurant/${restaurantId}`
    );
  }
  createRestaurant(request: any): Observable<any> {
    return this.http.post<any>(
      `https://localhost:7261/api/Admin/add-restaurant`,
      request
    );
  }
}
