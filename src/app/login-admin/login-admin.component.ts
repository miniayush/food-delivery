import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthAdminService } from '../services/auth-admin.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
})
export class LoginAdminComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  wrongPass = false;
  constructor(
    private authService: AuthAdminService,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService
  ) {}
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        (response) => {
          this.userService.setUser(response);
          this.wrongPass = false;
          // navigate to admin portal
          this.router.navigate(['adminportal']);
          this.authService.setLoggedIn(true);
          // show success message
          this.toastr.success('Login successful'); // Show success toast
        },
        (error) => {
          this.authService.setLoggedIn(false);
          this.toastr.error('Login failed'); // API error
        }
      );
    }
  }
}
