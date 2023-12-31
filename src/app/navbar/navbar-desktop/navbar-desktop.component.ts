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
  private sub1: any;

  constructor(
    private currentUrl: CurrentUrl,
    private menuService: MenuService,
  ) {
    this.sub1 = this.menuService.getHandleWindowObservable().subscribe((data) => {
      this.handleWindow = data;
      console.log(this.handleWindow);
    });
    // this.sub0 = this.currentUrl.getCurrentUrlObservable().subscribe(url => {
    //   console.log(url)
    //   if (url == "/") {
    //     this.handleWindow.isDesktopMenuOpen = true;
    //   }
    //   else {
    //     this.handleWindow.isDesktopMenuOpen = false;
    //   }
    // });
  }

  // C L I C K - O U T ============================================================
  @HostListener('document:click', ['$event'])
  clickOut(event: any) {
    if (this.menu?.nativeElement.contains(event.target)) {
      console.log("INSIDE - MENU");
    }
    else {
      this.menuService.handleWindow.isDesktopMenuOpen = false;
      this.menuService.handleWindowService();
      console.log("OUTSIDE - MENU");      
    }
  }
  // ===============================================================================

  toggleDesktopMenu() {
    // if (!this.isHomePage()) {
    //   this.handleWindow.isDesktopMenuOpen = !this.handleWindow.isDesktopMenuOpen;
    //   this.menuService.handleWindowService();
    // }
    this.menuService.handleWindow.isDesktopMenuOpen = !this.menuService.handleWindow.isDesktopMenuOpen;
    this.menuService.handleWindowService();
  }

  // handleDesktopMenu() {
  //   if (this.isHomePage()) {
  //     this.handleWindow.isDesktopMenuOpen = true;
  //   }
  //   else {
  //     this.handleWindow.isDesktopMenuOpen = false;
  //   }
  //   // this.menuService.handleWindowService();    
  // }

  // isHomePage() {
  //   return this.currentLink == "/";
  // }
  

  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
    this.sub1?.unsubscribe();
  }

}
