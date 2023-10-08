import { Component } from '@angular/core';

@Component({
  selector: 'app-site-admin',
  templateUrl: './site-admin.component.html',
  styleUrls: ['./site-admin.component.css'],
})
export class SiteAdminComponent {
  restaurants = [
    {
      id: 1,
      name: 'Radhika',
      restaurantId: 1,
      rating: 4.5,
      imageUrl:
        'https://i.pinimg.com/originals/7d/74/19/7d7419496c7c143aadfbcffcfd6c2812.png',
      description: 'Since 1978, Eat Sweet and Talk Sweetly.',
      foodItems: null,
    },
    {
      id: 2,
      name: 'Burger King',
      restaurantId: 2,
      rating: 4,
      imageUrl:
        'https://www.shutterstock.com/shutterstock/photos/2129642369/display_1500/stock-photo-amsterdam-netherlands-feb-burger-set-from-burger-king-restaurant-burger-king-s-2129642369.jpg',
      description: 'Be A King Like Burger King.',
      foodItems: null,
    },
    {
      id: 3,
      name: 'Dominos',
      restaurantId: 3,
      rating: 4.2,
      imageUrl:
        'https://smartcanucks.ca/wp-content/uploads/2015/12/dominos-pizza.jpg',
      description: "It's All About Domino's Pizza.....",
      foodItems: null,
    },
    {
      id: 4,
      name: 'ShakesEra',
      restaurantId: 4,
      rating: 4.3,
      imageUrl:
        'https://b.zmtcdn.com/data/pictures/7/20569307/960684662f5846e1a6d91a3255e218a9_featured_v2.jpg',
      description: 'Where Shakes Come to Life',
      foodItems: null,
    },
    {
      id: 5,
      name: 'Baskin Ice Cream',
      restaurantId: 5,
      rating: 4.4,
      imageUrl:
        'https://content.jdmagicbox.com/comp/kolkata/x4/033pxx33.xx33.210811101413.v9x4/catalogue/baskin-robbins-batanagar-kolkata-ice-cream-parlours-d2mjjj2dz9.jpg',
      description: 'Discover a World of Ice Cream',
      foodItems: null,
    },
    {
      id: 6,
      name: 'Biryani Junction',
      restaurantId: 6,
      rating: 4.1,
      imageUrl:
        'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      description: 'The Home of Authentic Biryani',
      foodItems: null,
    },
    {
      id: 7,
      name: 'South Pride',
      restaurantId: 7,
      rating: 4.6,
      imageUrl:
        'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvc2F8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      description: 'Experience South Indian Delights',
      foodItems: null,
    },
  ];
  users = [
    {
      id: 3,
      firstName: 'amn',
      lastName: 'saxena',
      username: 'amn10@gmail.com',
      password: 'amn11',
      email: 'amn2@gmail.com',
      phoneNumber: '22',
    },
    {
      id: 4,
      firstName: 'Anjli',
      lastName: 'kumari',
      username: 'Anjli10',
      password: 'anjali11',
      email: 'anjli12@gmail.com',
      phoneNumber: '12',
    },
    {
      id: 5,
      firstName: 'Ayush',
      lastName: 'Saxena',
      username: 'Ayush10',
      password: 'Ayush10',
      email: 'ayush10@gmail.com',
      phoneNumber: '123',
    },
    {
      id: 6,
      firstName: 'arya',
      lastName: 'k',
      username: 'arya1@gmail.com',
      password: 'aeya11',
      email: 'arya2@gmail.com',
      phoneNumber: '123',
    },
  ];
  searchRestaurant = '';
  searchUser = '';

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
}
