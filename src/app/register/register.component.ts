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
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]),
  });

  onSubmit() {
    let request: any = this.userForm.value;
    request.id = 0;
    this.userService.register(request).subscribe(
      (response) => {
        this.toastr.success(response.message, '', {
          positionClass: 'toast-bottom-right',
        });
        this.router.navigate(['login']);
      },
      (error) => {
        this.toastr.success('Something went wrong!', '', {
          positionClass: 'toast-bottom-right',
        });
      }
    );
  }
}
