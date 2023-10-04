import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: any;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    // get the profile data from the service
    this.profile = this.userService.user.user;
  }
}
