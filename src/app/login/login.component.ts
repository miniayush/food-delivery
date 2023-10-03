import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
  constructor(private authService: AuthService, private router: Router) {}
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        (response) => {
          sessionStorage.setItem('username', JSON.stringify(response));
          // navigate to home page
          this.router.navigate(['']);
          this.wrongPass = false;
          this.authService.isLoggedIn = true;
          // show success message
        },
        (error) => {
          console.error('api error ho gaya', error);
          this.wrongPass = true;
          this.authService.isLoggedIn = false;
          // handle error response
          // show error message
        }
      );
    }
  }
}
