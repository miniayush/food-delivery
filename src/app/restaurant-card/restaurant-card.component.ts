import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css'],
})
export class RestaurantCardComponent {
  @Input() restaurant: any;
  imageLoaded: boolean = false;

  getRatingColor(rating: number): string {
    if (rating >= 4) {
      return '#267E3E';
    } else if (rating >= 3) {
      return '#e0d314';
    } else {
      return '#b31705';
    }
  }
  getFormattedRating(rating: number): string {
    return rating.toFixed(1);
  }
  onImageLoad(): void {
    this.imageLoaded = true;
  }
}
