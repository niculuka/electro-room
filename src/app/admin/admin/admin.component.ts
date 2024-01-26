import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SIDENAV_ITEMS } from 'src/app/shared/data/sidenav-items.data';
import { CATEGORY, ORDER, USER } from 'src/app/shared/enums/electro.enum';

const sidenavTitles: Array<any> = SIDENAV_ITEMS;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

  sidenavItems: Array<any> = this.getSidenavItemsFromLS();
  activeTitle: string = localStorage.getItem("activeTitle-ls") || sidenavTitles[0].title;
  activeSubtitle: string = localStorage.getItem("activeSubtitle-ls") || sidenavTitles[0].subtitles[0].subtitle;

  opened: boolean = true;
  mode: any = "side";

  @ViewChild(MatDrawer) myDrawer!: MatDrawer;

  currentScreenWidth: any = 1000000;

  subtitles: any = {
    laptops: CATEGORY.LAPTOP_URL_KEY,
    laptopAccessory: CATEGORY.LAPTOP_ACCESSORY_URL_KEY,
    pc: CATEGORY.PC_URL_KEY,
    monitor: CATEGORY.MONITOR_URL_KEY,
    orders: ORDER.ORDERS,
    items: ORDER.ITEMS,
    users: USER.USERS,
    tokens: USER.TOKENS,
  };

  ngOnInit(): void {
    this.handleWidth();
    this.openTitleWhereActiveSubtitle();
  }

  openTitleWhereActiveSubtitle() {
    this.sidenavItems.filter((t: any) => {
      t.subtitles.filter((sub: any) => {
        if (sub.subtitle == this.activeSubtitle) t.isOpened = true;
      });
    });
  }

  selectTitle(getTitle: any) {
    this.activeTitle = getTitle.title;
    localStorage.setItem('activeTitle-ls', this.activeTitle);
    this.sidenavItems.filter(item => {
      if (item.name == getTitle.name) item.isOpened = !item.isOpened;
    });
    this.setSidenavItemsToLS();
  }

  selectSubtitle(getSubtitle: any) {
    this.activeSubtitle = getSubtitle.subtitle;
    localStorage.setItem('activeSubtitle-ls', this.activeSubtitle);
    if (!this.opened) this.myDrawer.close();
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
    return sidenavItemsJson ? JSON.parse(sidenavItemsJson) : sidenavTitles;
  }

}
