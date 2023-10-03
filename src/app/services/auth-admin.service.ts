import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthAdminService {
  private apiUrl = 'http://your-api-url.com'; // replace with your API URL
  private isLoggedIn = false; //set to false
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  login(email: any, password: any) {
    return this.http.post(
      `${this.apiUrl}/authadmin`, //change if requires
      {
        username: email,
        password: password,
      }
    );
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
}
