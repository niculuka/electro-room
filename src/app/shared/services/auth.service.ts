import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser, User } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

const API_URL = `${environment.BASE_URL}/auth`

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // CURRENT USER ============================================================================================
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastrService: ToastrService
  ) {
    let storageUser;
    const storageUserAsStr = localStorage.getItem("currentUser-ls");
    if (storageUserAsStr) {
      storageUser = JSON.parse(storageUserAsStr);
    }

    this.currentUserSubject = new BehaviorSubject<User>(storageUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // REGISTER ================================================================================================
  registerService(user: User): Observable<any> {
    return this.http.post(API_URL + "/register", user);
  }

  // LOGIN ===================================================================================================
  loginService(user: IUser): Observable<any> {
    return this.http.post<any>(API_URL + "/login", user).pipe(tap({
      next: data => {
        if (data) {
          this.setSessionUser(data);
          this.toastrService.success(`Welcome ${data.name}!`, 'Login Successful');
        }
      },
      error: (err) => {
        console.log(err.error);
      }
    })
    )
  }

  setSessionUser(user: User) {
    localStorage.setItem('currentUser-ls', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  // LOGOUT ==================================================================================================
  logoutService() {
    localStorage.clear();
    this.currentUserSubject.next(new User);
    this.router.navigate(["/"])
      .then(() => window.location.reload());
  }

}
