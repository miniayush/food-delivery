import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-user-card',
  templateUrl: './admin-user-card.component.html',
  styleUrls: ['./admin-user-card.component.css'],
})
export class AdminUserCardComponent {
  @Input() user: any;
  constructor(
    private adminService: AdminService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  deleteUser() {
    this.adminService.deleteUser(this.user.id).subscribe(
      (response) => {
        this.toastr.success('User deleted Successfully!', '', {
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
