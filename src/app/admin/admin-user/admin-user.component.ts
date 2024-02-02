import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { DialogUserDeleteComponent } from 'src/app/dialogs/dialog-user-delete/dialog-user-delete.component';
import { ROLE } from 'src/app/shared/enums/electro.enum';
import { IUser, User } from 'src/app/shared/models/user.model';
import { AdminUserService } from 'src/app/shared/services/admin-user.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit, OnDestroy {

  protected users: Array<IUser> = [];
  protected user: User = new User();
  userRole: ROLE = ROLE.USER;

  currentUser: User = new User();
  errorMessage: string = "";

  @Input() activeSubtitleName: any;
  @Input() activeSubtitleUrlKey: any;

  displayedColumns: string[] = ['index', 'name', 'username', 'email', 'phone', 'date', 'role', 'active', 'delete'];
  dataSource!: MatTableDataSource<IUser>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private sub0: any;
  private sub1: any;

  constructor(
    private adminUserService: AdminUserService,
    private authService: AuthService,
    private toastrService: ToastrService,
    public matDialog: MatDialog
  ) {
    this.sub0 = this.authService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  ngOnInit(): void {
    this.sub1 = this.adminUserService.findAllUsersService().subscribe(data => {
      this.users = data;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
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

    this.adminUserService.changeEnabledService(this.user.id, enabled).subscribe({
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
    const dialogRef = this.matDialog.open(DialogUserDeleteComponent, { data: { name: user.name, id: user.id } });
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

  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
    this.sub1?.unsubscribe();
  }
}
