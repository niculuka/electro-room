import { Component, Input, OnInit } from '@angular/core';
import { Department, DEPARTMENTS } from 'src/app/shared/data/mega-menu.data';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.css']
})
export class NavbarDesktopComponent implements OnInit {

  @Input() isDesktopMenuOpen = true;
  @Input() isCarouselOpen = true;

  departments: Array<Department> = DEPARTMENTS; 

  handleDesktopMenu = true;  

  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
    if (this.isDesktopMenuOpen == true) {
      this.handleDesktopMenu = true;
    }
    if (this.isDesktopMenuOpen == false) {
      this.handleDesktopMenu = false;
    }
  }

  toggleDesktopMenu() {
    if (this.isDesktopMenuOpen == true) {
      this.handleDesktopMenu = true;
    }
    if (this.isDesktopMenuOpen == false) {
      this.handleDesktopMenu = !this.handleDesktopMenu;
    }
  }

  closeMenu(item: any) {
    this.handleDesktopMenu = false;
    this.localStorageService.sendItem(item);
  }

}
