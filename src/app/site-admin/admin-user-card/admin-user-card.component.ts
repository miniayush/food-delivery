import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-user-card',
  templateUrl: './admin-user-card.component.html',
  styleUrls: ['./admin-user-card.component.css'],
})
export class AdminUserCardComponent {
  @Input() user: any;
  deleteUser() {
    console.log(this.user);
  }
}
