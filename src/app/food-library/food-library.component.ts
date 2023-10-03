import { Component } from '@angular/core';

@Component({
  selector: 'app-food-library',
  templateUrl: './food-library.component.html',
  styleUrls: ['./food-library.component.css'],
})
export class FoodLibraryComponent {
  searchTerm = '';
  foodItems = [
    {
      image:
        'https://b.zmtcdn.com/data/dish_photos/2e8/01a59e3cf87ae3d33589365805de02e8.jpg?fit=around|130:130&crop=130:130;*,*',
      name: 'Pizza',
      description: 'Delicious cheese pizza',
      rating: 4.5,
      price: '10',
    },
    {
      image:
        'https://b.zmtcdn.com/data/dish_photos/2e8/01a59e3cf87ae3d33589365805de02e8.jpg?fit=around|130:130&crop=130:130;*,*',
      name: 'Burger',
      description: 'Delicious cheese pizza',
      rating: 3.5,
      price: '10',
    },
    {
      image:
        'https://b.zmtcdn.com/data/dish_photos/2e8/01a59e3cf87ae3d33589365805de02e8.jpg?fit=around|130:130&crop=130:130;*,*',
      name: 'Roti',
      description: 'Delicious cheese pizza',
      rating: 2.2,
      price: '10',
    },
    {
      image:
        'https://b.zmtcdn.com/data/dish_photos/2e8/01a59e3cf87ae3d33589365805de02e8.jpg?fit=around|130:130&crop=130:130;*,*',
      name: 'Paratha',
      description: 'Delicious cheese pizza',
      rating: 4.9,
      price: '10',
    },
    {
      image:
        'https://b.zmtcdn.com/data/dish_photos/2e8/01a59e3cf87ae3d33589365805de02e8.jpg?fit=around|130:130&crop=130:130;*,*',
      name: 'Chai',
      description: 'Delicious cheese pizza',
      rating: 4.5,
      price: '10',
    },
    {
      image:
        'https://b.zmtcdn.com/data/dish_photos/2e8/01a59e3cf87ae3d33589365805de02e8.jpg?fit=around|130:130&crop=130:130;*,*',
      name: 'Paani',
      description: 'Delicious cheese pizza',
      rating: 4.5,
      price: '10',
    },
  ];
  get filteredFoodItems() {
    if (this.searchTerm) {
      return this.foodItems.filter((foodItem) =>
        foodItem.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      return this.foodItems;
    }
  }
}
