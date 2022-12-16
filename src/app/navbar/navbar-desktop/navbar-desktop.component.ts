import { Component, Input, OnInit } from '@angular/core';
import { Departament, DEPARTAMENTS } from 'src/app/shared/data/mega-menu.data';

@Component({
  selector: 'navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.css']
})
export class NavbarDesktopComponent implements OnInit {

  @Input() isDesktopMenuOpen = true;
  @Input() isCarouselOpen = true;

  departaments: Array<Departament> = DEPARTAMENTS; 

  handleDesktopMenu = true;  

  constructor() { }

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

  closeFromSubtitles() {
    this.handleDesktopMenu = false;
  }

}
