import { Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  private sub1: any;

  constructor(
    private currentUrl: CurrentUrl,
    private router: Router,
    private menuService: MenuService,
  ) {
    // this.sub0 = this.currentUrl.getCurrentUrlObservable().subscribe(url => {
    //   if (url) {
    //     this.currentLink = url;
    //     this.handleDesktopMenu();
    //   }
    // });
    this.sub1 = this.menuService.getHandleWindowObservable().subscribe((data) => {
      this.handleWindow = data;
      console.log(this.handleWindow);
    });
    
  }

  // C L I C K - O U T ============================================================
  @HostListener('document:click', ['$event'])
  clickOut(event: any) {
    if (this.menu?.nativeElement.contains(event.target)) {
      // console.log("INSIDE - MENU");
    }
    else {
      this.handleWindow.isDesktopMenuOpen = false;
      // console.log("OUTSIDE - MENU");
    }
    this.menuService.handleWindow.isDesktopMenuOpen = this.handleWindow.isDesktopMenuOpen;
    this.menuService.handleWindowService();
    // console.log("-------------------------------")
  }
  // ===============================================================================

  isHomePage() {
    return this.currentLink == "/";
  }

  handleDesktopMenu() {
    if (this.isHomePage()) {
      this.handleWindow.isDesktopMenuOpen = true;
    }
    else {
      this.handleWindow.isDesktopMenuOpen = false;
    }
    this.menuService.handleWindowService();    
  }

  toggleDesktopMenu() {
    if (!this.isHomePage()) {
      this.handleWindow.isDesktopMenuOpen = !this.handleWindow.isDesktopMenuOpen;
      this.menuService.handleWindowService();
    }    
  }

  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
    this.sub1?.unsubscribe();
  }

}
