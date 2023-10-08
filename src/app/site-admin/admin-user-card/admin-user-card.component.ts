import { Component, Input } from '@angular/core';
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
    private toastr: ToastrService
  ) {}
  deleteUser() {
    this.adminService.deleteUser(this.user).subscribe(
      (response) => {
        this.toastr.success('User deleted Successfully!', '', {
          positionClass: 'toast-bottom-right',
        });
      },
      (error) => {
        console.error(error);
        this.toastr.error('Deletion Failed!', '', {
          positionClass: 'toast-bottom-right',
        });
      }
    );
  }
}
