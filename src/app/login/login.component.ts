import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  wrongPass = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  constructor(
    private authService: AuthService,
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
          this.router.navigate(['']);
          this.wrongPass = false;
          this.authService.setLoggedIn(true);
          this.toastr.success('Login successful', '', {
            positionClass: 'toast-bottom-right',
          });
        },
        (error) => {
          this.wrongPass = true;
          this.authService.setLoggedIn(false);
          this.toastr.error('Login failed', '', {
            positionClass: 'toast-bottom-right',
          });
        }
      );
    }
  }
  navigateToRegister() {
    this.router.navigate(['register']);
  }
}
