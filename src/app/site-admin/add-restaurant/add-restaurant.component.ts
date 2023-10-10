import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css'],
})
export class AddRestaurantComponent {
  inputForm = new FormGroup({
    name: new FormControl(''),
    imageUrl: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  onSubmit(): void {
    let request = {
      id: 0,
      name: this.inputForm.value.name,
      restaurantId: 0,
      rating: 0,
      imageUrl: this.inputForm.value.imageUrl,
      description: this.inputForm.value.description,
      foodItems: [
        {
          id: 0,
          name: 'string',
          description: 'string',
          rating: 0,
          imageUrl: 'string',
          price: 0,
          restaurantId: 0,
        },
      ],
    };
    this.adminService.createRestaurant(request).subscribe(
      (response) => {
        this.toastr.success('Restaurant created successfully', '', {
          positionClass: 'toast-bottom-right',
        });
        this.router.navigate(['adminhome']);
      },
      (err) => {
        console.error(err);
      }
    );
    console.log(this.inputForm.value);
  }
}
