import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogUserDeleteComponent } from 'src/app/dialogs/dialog-user-delete/dialog-user-delete.component';
import { ROLE } from 'src/app/shared/enums/electro.enum';
import { User } from 'src/app/shared/models/user.model';
import { AdminUserService } from 'src/app/shared/services/admin-user.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  protected users: Array<User> = [];  
  protected user: User = new User();

  currentUser: User = new User();
  errorMessage: string = "";

  constructor(
    private adminUserService: AdminUserService,
    private authService: AuthService,
    private toastrService: ToastrService,
    public matDialog: MatDialog
  ) {
    this.authService.currentUser.subscribe(data => {
        this.currentUser = data;
      });
  }

  ngOnInit(): void {
    this.adminUserService.findAllUsersService().subscribe(data => {
      this.users = data;
    })
  }

  changeRole(user: User) {
    this.user = user;

    if (this.currentUser.username === this.user.username) {
      this.toastrService.warning("Cannot change this role!", this.currentUser.username)
      this.errorMessage = "Cannot change this role!";
      return;
    }
    if (user.username === "Ana") {
      this.toastrService.warning("You cannot change this role!");
      return;
    }

    let role = this.user.role === ROLE.ADMIN ? ROLE.USER : ROLE.ADMIN;

    this.adminUserService.changeRoleService(this.user.username, role).subscribe({
      next: () => {
        window.location.reload();
      },
      error: error => {
        this.errorMessage = "Could not update the role!";
        console.log(error);
      }
    })
  }

  changeEnabled(user: User) {
    this.user = user;

    if (this.currentUser.username === this.user.username) {
      this.toastrService.warning("Cannot change this status!", this.currentUser.username);
      return;
    }
    if (user.username === "Ana") {
      this.toastrService.warning("Cannot disable this account!");
      return;
    }

    let enabled = this.user.enabled === false ? true : false;

    this.adminUserService.changeEnabledService(this.user.userId, enabled).subscribe({
      next: () => {
        window.location.reload();
      },
      error: error => {
        this.errorMessage = "Could not update this status!";
        console.log(error);
      }
    })
  }

  deleteUserDialog(user: User) {
    const dialogRef = this.matDialog.open(DialogUserDeleteComponent, { data: user.name });
    dialogRef.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.deleteUser(user)
        }
      },
      error: error => {
        this.toastrService.warning("Could not delete this user!")
      }
    })
  }

  deleteUser(user: User) {
    if (this.currentUser.username === user.username) {
      this.toastrService.warning("Cannot delete this user", this.currentUser.username);
      return;
    }
    if (user.username === "Ana") {
      this.toastrService.warning("You can't delete user: " + user.name);
      return;
    }
    this.adminUserService.deleteUserService(user).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.errorMessage = "Could not delete this user!";
        console.log(err);
      }
    })
  }

}
