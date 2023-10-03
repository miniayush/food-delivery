import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private router: Router) {}
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // Handle form submission
    }
  }
}
