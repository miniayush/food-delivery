import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-site-admin',
  templateUrl: './site-admin.component.html',
  styleUrls: ['./site-admin.component.css'],
})
export class SiteAdminComponent {
  restaurants = [];
  users = [];
  searchRestaurant = '';
  searchUser = '';

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getUsers().subscribe(
      (users) => this.setUsers(users),
      (error) => console.error(error)
    );
    this.adminService.getRestaurants().subscribe(
      (restaurants) => this.setRestaurants(restaurants),
      (error) => console.error(error)
    );
  }

  get filteredRestaurants() {
    if (this.searchRestaurant) {
      return this.restaurants.filter((restaurant: any) =>
        restaurant.name
          .toLowerCase()
          .includes(this.searchRestaurant.toLowerCase())
      );
    } else {
      return this.restaurants;
    }
  }
  get filteredUsers() {
    if (this.searchUser) {
      return this.users.filter((user: any) =>
        user.name.toLowerCase().includes(this.searchUser.toLowerCase())
      );
    } else {
      return this.users;
    }
  }
  addUser() {}
  addRestaurant() {}
  setUsers(users: any) {
    this.users = users;
  }
  setRestaurants(restaurants: any) {
    this.restaurants = restaurants;
  }
}
