import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User();
  message: string = "";

  isUsernameEmpty: boolean = false;
  isPasswordEmpty: boolean = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
  ) {
    if (this.authService.currentUserValue?.id) {
      this.router.navigate(["/profile"])
      return;
    }
  }

  getUsername() {
    if (this.user.username.length > 0) this.isUsernameEmpty = false;
    else this.isUsernameEmpty = true;
  }

  getPassword() {
    if (this.user.password.length > 0) this.isPasswordEmpty = false;
    else this.isPasswordEmpty = true;
  }

  login() {
    this.getUsername();
    this.getPassword();
    if (this.isUsernameEmpty === false && this.isPasswordEmpty === false) {
      this.authService.loginService(this.user).subscribe({
        next: () => {
          if (this.cartService.cart.totalCount > 0) {
            this.router.navigate(["/cart"]);
            return;
          }
          this.router.navigate(["/"])
        },
        error: err => {
          this.message = "Username or password is incorect!"
          console.log(err);
        }
      })
    }
  }
}
