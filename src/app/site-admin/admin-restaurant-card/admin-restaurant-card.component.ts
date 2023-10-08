import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-restaurant-card',
  templateUrl: './admin-restaurant-card.component.html',
  styleUrls: ['./admin-restaurant-card.component.css'],
})
export class AdminRestaurantCardComponent {
  @Input() restaurant: any;
  constructor(
    private adminService: AdminService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  deleteRestaurant() {
    console.log(this.restaurant.id);
    this.adminService.deleteRestaurant(this.restaurant.id).subscribe(
      (response) => {
        this.toastr.success('Restaurant deleted Successfully!', '', {
          positionClass: 'toast-bottom-right',
        });
        this.reloadComponent();
      },
      (error) => {
        console.error(error);
        this.toastr.error('Deletion Failed!', '', {
          positionClass: 'toast-bottom-right',
        });
      }
    );
  }
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
