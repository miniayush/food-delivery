import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://your-api-url.com'; // replace with your API URL
  isLoggedIn = false;
  constructor(private http: HttpClient) {}

  login(email: any, password: any) {
    return this.http.post(`${this.apiUrl}/authenticate`, {
      username: email,
      password: password,
    });
  }
  isAuthenticated() {
    return this.isLoggedIn;
  }
}
