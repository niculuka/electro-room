import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AdminDemoService } from 'src/app/shared/services/admin-demo.service';
import { AdminUserService } from 'src/app/shared/services/admin-user.service';

@Component({
  selector: 'app-admin-demo-user',
  templateUrl: './admin-demo-user.component.html',
  styleUrls: ['./admin-demo-user.component.css']
})
export class AdminDemoUserComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  protected users: Array<User> = [];  
  protected user: User = new User();

  currentUser: User = new User();
  errorMessage: string = "";

  constructor(
    private adminDemoService: AdminDemoService,
  ) { }

  ngOnInit(): void {
    this.adminDemoService.getAllDemoUsersService().subscribe(data => {
      this.users = data;
    })
  }

  noAction() {
    alert("Esti in DEMO-MODE. Pentru acces complet, contacteaza proprietarul!")
  }
}
