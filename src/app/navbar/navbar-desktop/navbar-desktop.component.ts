import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.css']
})
export class NavbarDesktopComponent {

  @Input() isDesktopMenuOpen = false;
  @Input() isCarouselOpen = false;

  currentLink: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.activatedRoute.params.subscribe(() => {
      this.currentLink = this.router.url;
    });
  }

  isHomePage() {
    return this.currentLink === "/";
  }

  toggleDesktopMenu() {
    if (this.isHomePage()) {
      this.isDesktopMenuOpen = true;
      return;
    }
    this.isDesktopMenuOpen = !this.isDesktopMenuOpen;
  }

}
