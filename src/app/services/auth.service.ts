import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:7261/api/User';
  private isLoggedIn = false; //set to false
  private authStatusListener = new Subject<boolean>();

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

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
    this.authStatusListener.next(value);
  }
  logout() {
    this.isLoggedIn = false;
  }
}
