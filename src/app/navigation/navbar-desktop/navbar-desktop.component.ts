import { Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { DEPARTMENTS } from 'src/app/shared/data/mega-menu.data';
import { HandleWindow } from 'src/app/shared/models/handle-window.model';
import { CurrentUrl } from 'src/app/shared/services/current-url.service';
import { OverlayerService } from 'src/app/shared/services/overlayer.service';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.css']
})
export class NavbarDesktopComponent implements OnDestroy {

  departments = DEPARTMENTS;  

  @ViewChild('menu') menu: ElementRef | undefined;
  handleWindow: HandleWindow = new HandleWindow();
  currentLink: string = "";

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  private sub0: any;

  constructor(
    private currentUrl: CurrentUrl,
    private overlayerService: OverlayerService,
  ) {
    this.sub0 = this.currentUrl.getCurrentUrlObservable().subscribe(url => {
      if (url) {
        this.currentLink = url;
        this.handleDesktopMenu();
        this.handleOverlayerWhenLinkChanges();
      }
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
      this.handleOverlayer();
      // console.log("OUTSIDE - MENU");
    }
  }
  // ===============================================================================

  // B u r g e r  M e n u ----------------------------------------------------------
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
      this.handleOverlayer();
    }
  }  

  handleOverlayer() {
    if (this.isHomePage()) this.overlayerService.overlayer.overlayerDesktop = false;
    else this.overlayerService.overlayer.overlayerDesktop = this.handleWindow.isDesktopMenuOpen;
    this.overlayerService.handleOverlayerService();
  }

  handleOverlayerWhenLinkChanges() {
    if (this.currentLink) this.overlayerService.overlayer.overlayerDesktop = false;
    this.overlayerService.handleOverlayerService();
  }

  closeDesktopMenu(event: any) {
    this.handleWindow.isDesktopMenuOpen = event;
    this.handleOverlayer();
  }

  // D r o p D o w n  M e n u -------------------------------------------------------
  closeDropDownMenu() {
    this.trigger.closeMenu();
  }

  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
  }

}
