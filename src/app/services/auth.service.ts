import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://your-api-url.com'; // replace with your API URL

  constructor(private http: HttpClient, private router: Router) {}

  login(email: any, password: any) {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }
}
