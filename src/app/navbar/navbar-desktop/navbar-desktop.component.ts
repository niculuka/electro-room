import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.css']
})
export class NavbarDesktopComponent implements OnDestroy {

  isDesktopMenuOpen = false;

  currentLink: string = "";
  event$;

  constructor(
    private router: Router,
    private menuService: MenuService,
  ) {
    this.menuService.handleDesktopMenuObservable().subscribe((data) => {
      this.isDesktopMenuOpen = data;
    });
    this.event$ = this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.currentLink = event.url;
        this.handleDesktopMenu();
      }
    });
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
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
