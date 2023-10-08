import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) {}
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  onSubmit() {
    let request: any = this.userForm.value;
    request.id = 0;
    console.log(request);
    this.userService.register(request).subscribe(
      (response) => {
        this.toastr.success(response.message, '', {
          positionClass: 'toast-bottom-right',
        });
      },
      (error) => {
        this.toastr.success('Something went wrong!', '', {
          positionClass: 'toast-bottom-right',
        });
      }
    );
  }
}
