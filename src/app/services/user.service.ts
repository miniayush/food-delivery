import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: any = {};
  constructor() {}

  setUser(data: any) {
    this.user = data;
  }
  getUser() {
    return this.user;
  }
}
