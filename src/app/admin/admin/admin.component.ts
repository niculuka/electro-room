import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ADMIN_SIDENAV } from 'src/app/shared/data/sidenav-items.data';

const adminSidenav: Array<any> = ADMIN_SIDENAV;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

  sidenavItems: Array<any> = this.getSidenavItemsFromLS();

  currentScreenWidth: any = 1000000;
  opened: boolean = true;
  mode: any = "side";

  currentSubtitle: string = localStorage.getItem("currentSubtitle-ls") || "Laptopuri";

  @ViewChild(MatDrawer) drawer!: MatDrawer;

  ngOnInit(): void {
    this.handleWidth();
  }

  selectTitle(title: any) {
    this.sidenavItems.filter(item => {
      if (item.name == title.name) item.isOpened = !item.isOpened;
    });
    this.setSidenavItemsToLS();
  }

  selectSubtitle(subtitle: any) {
    this.currentSubtitle = subtitle.name;
    localStorage.setItem('currentSubtitle-ls', this.currentSubtitle);
    this.setSidenavItemsToLS();
    if (!this.opened) this.drawer.toggle();
  }

  @HostListener('window:resize', ['$event'])
  handleWidth() {
    this.currentScreenWidth = window.innerWidth;
    if (this.currentScreenWidth > 1020) {
      this.opened = true;
      this.mode = "side";
    }
    else {
      this.opened = false;
      this.mode = "over";
    }
  }

  private setSidenavItemsToLS() {
    const sidenavItemsJson = JSON.stringify(this.sidenavItems);
    localStorage.setItem('sidenavItems-ls', sidenavItemsJson);
  }

  private getSidenavItemsFromLS() {
    const sidenavItemsJson = localStorage.getItem('sidenavItems-ls');
    return sidenavItemsJson ? JSON.parse(sidenavItemsJson) : adminSidenav;
  }

}
