import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-library',
  templateUrl: './restaurant-library.component.html',
  styleUrls: ['./restaurant-library.component.css'],
})
export class RestaurantLibraryComponent implements OnInit {
  restaurants = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://6517d7c2582f58d62d352813.mockapi.io/restaurants')
      .subscribe((data: any) => {
        this.restaurants = data;
      });
  }
}
