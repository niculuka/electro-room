import { Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { HandleWindow } from 'src/app/shared/models/handle-window.model';
import { CurrentUrl } from 'src/app/shared/services/current-url.service';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.css']
})
export class NavbarDesktopComponent implements OnDestroy {

  @ViewChild('menu') menu: ElementRef | undefined;
  handleWindow: HandleWindow = new HandleWindow();
  currentLink: string = "";

  private sub0: any;

  constructor(
    private currentUrl: CurrentUrl,
  ) {
    this.sub0 = this.currentUrl.getCurrentUrlObservable().subscribe(url => {
      this.currentLink = url;
      this.handleDesktopMenu();
    });
  }

  // C L I C K - O U T ============================================================
  @HostListener('document:click', ['$event'])
  clickOut(event: any) {
    if (this.menu?.nativeElement.contains(event.target)) {
      // console.log("INSIDE - MENU");
    }
    else {
      this.handleDesktopMenu();
      // console.log("OUTSIDE - MENU");
    }
  }
  // ===============================================================================

  handleDesktopMenu() {
    if (this.isHomePage()) this.handleWindow.isDesktopMenuOpen = true;
    else this.handleWindow.isDesktopMenuOpen = false;
  }

  isHomePage() {
    return this.currentLink == "/";
  }

  toggleDesktopMenu() {
    if (!this.isHomePage()) {
      this.handleWindow.isDesktopMenuOpen = !this.handleWindow.isDesktopMenuOpen;
    }
  }

  closeDesktopMenu($event: any) {
    this.handleWindow.isDesktopMenuOpen = $event;
  }

  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
  }

}
