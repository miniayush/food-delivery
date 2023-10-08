import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: any = {};
  constructor(private http: HttpClient) {}

  setUser(data: any) {
    this.user = data;
  }
  getUser() {
    return this.user;
  }
  register(request: any): Observable<any> {
    return this.http.post<any>(
      'https://localhost:7261/api/User/register',
      request
    );
  }
}
