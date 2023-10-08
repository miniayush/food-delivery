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
}
