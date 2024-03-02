import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';

// add this:  -  "browser": {"crypto": false} -  in package.json
const bcrypt = require("bcryptjs");
// add this:  -  "browser": {"crypto": false} -  in package.json

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  currentUser: User = new User();
  user: User = new User();

  errorMessage: string = ""
  repeatPassword: string = "";

  match: boolean = false;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router,
  ) {
    this.authService.currentUser.subscribe(data => {
      this.currentUser = data;
      this.user.id = data.id;
    })
  }

  differentPassword() {
    return this.currentUser.newPassword === this.currentUser.oldPassword;
  }

  confirmPassword() {
    return this.currentUser.newPassword !== this.repeatPassword;
  }

  updatePassword() {
    if (this.differentPassword() || this.confirmPassword()) return;
    this.userService.updatePasswordService(this.currentUser).subscribe({
      next: () => {
        this.authService.logoutService();
        this.router.navigate(['auth/login']);
        this.toastrService.info("Parola Actualizata!");
      },
      error: err => {
        this.toastrService.warning("Parola Gresita", "Parola nu a fost actualizata!")
        this.errorMessage = "Nu s-a putut actualiza parola!";
        console.log(err);
      }
    })
  }

  updateProfile() {
    bcrypt.compare(this.currentUser.oldPassword, this.currentUser.password, (err: any, isMatch: any) => {
      if (err) { console.log(err); return; }
      if (!isMatch) { this.match = true; return; }

      this.userService.updateProfileService(this.currentUser).subscribe({
        next: () => {
          this.authService.logoutService();
          this.router.navigate(['auth/login']);
          this.toastrService.info("Profil actualizat!");
        },
        error: err => {
          this.toastrService.warning("Profile nu a fost actualizat!", this.currentUser.username);
          this.errorMessage = "Nu s-a putut actualiza profilul!";
          console.log(err);
        }
      })
    })
  }

  deleteAccount(user: User) {
    if (this.currentUser.id !== user.id) return;

    bcrypt.compare(this.currentUser.oldPassword, this.currentUser.password, (err: any, isMatch: any) => {
      if (err) { console.log(err); return; }
      if (!isMatch) { this.match = true; return; }

      this.user.oldPassword = this.currentUser.oldPassword;
      this.userService.deleteUserProfileService(user).subscribe({
        next: () => {
          this.authService.logoutService();
          this.router.navigate(["/"]);
          this.toastrService.info("Countul a fost sters!");
        },
        error: err => {
          this.errorMessage = "Cont-ul nu s-a putut sterge!";
          this.toastrService.warning("Nu s-a putut sterge cont-ul!")
          console.log(err);
        }
      })
    })
  }

}
