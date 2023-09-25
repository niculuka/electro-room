import { Component } from '@angular/core';
import { CurrentUrl } from 'src/app/shared/services/current-url.service';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.css']
})
export class NavbarDesktopComponent {

  isDesktopMenuOpen = false;
  currentLink: string = "";

  constructor(
    private currentUrl: CurrentUrl,
    private menuService: MenuService,    
  ) {
    this.currentUrl.getCurrentUrlObservable().subscribe(url => {
      if (url) {
        this.currentLink = url;
        this.handleDesktopMenu();
      }
    });
    this.menuService.handleDesktopMenuObservable().subscribe((data) => {
      this.isDesktopMenuOpen = data;
      this.handleDesktopMenu();
    });
  }

  isHomePage() {
    return this.currentLink === "/";
  }

  handleDesktopMenu() {
    if (this.isHomePage()) {
      this.isDesktopMenuOpen = true;
    }
    else {
      this.isDesktopMenuOpen = false;
    }
  }

  toggleDesktopMenu() {
    if (!this.isHomePage()) {
      this.isDesktopMenuOpen = !this.isDesktopMenuOpen;
    }
  }

}
