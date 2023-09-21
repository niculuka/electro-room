import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private menuService: MenuService,
  ) {
    this.activatedRoute.params.subscribe(() => {
      this.currentLink = this.router.url;
    });
    this.menuService.handleDesktopMenuObservable().subscribe((data) => {
      this.isDesktopMenuOpen = data;
    });
  }

  isHomePage() {
    return this.currentLink === "/";
  }

  toggleDesktopMenu() {
    if (this.isHomePage()) {
      this.isDesktopMenuOpen = true;
      this.menuService.isDesktopMenuOpen = true;
    }
    else {
      this.isDesktopMenuOpen = !this.isDesktopMenuOpen;
      this.menuService.isDesktopMenuOpen = this.isDesktopMenuOpen;
    }
    this.menuService.handleDesktopMenuService();
  }

}
