import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SIDENAV_ITEMS } from 'src/app/shared/data/sidenav-items.data';
import { CATEGORY, ORDER, TYPE, USER } from 'src/app/shared/enums/electro.enum';

const SIDENAV = SIDENAV_ITEMS;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

  sidenavItems: Array<any> = this.getSidenavItemsFromLS();
  activeTitle: any = { name: "", }
  activeSubtitle: any = { name: "", urlKey: "", }

  @ViewChild(MatDrawer) myDrawer!: MatDrawer;
  opened: boolean = true;
  mode: any = "side";

  currentScreenWidth: any = 1000000;

  type = TYPE;
  category = CATEGORY;
  order = ORDER;
  user = USER;

  constructor() {
    const at = localStorage.getItem("activeTitle-ls");
    if (at) this.activeTitle = JSON.parse(at);
    else this.activeTitle.name = SIDENAV[0].name;

    const as = localStorage.getItem("activeSubtitle-ls");
    if (as) this.activeSubtitle = JSON.parse(as);
    else {
      this.activeSubtitle.name = SIDENAV[0].subtitles[0].name;
      this.activeSubtitle.urlKey = SIDENAV[0].subtitles[0].urlKey;
    }
  }

  ngOnInit(): void {
    this.handleWidth();
    this.openTitleWhereActiveSubtitle();
  }

  selectTitle(selectedTitle: any) {
    this.activeTitle.name = selectedTitle.name;
    const activeTitleJSON = JSON.stringify(this.activeTitle);
    localStorage.setItem('activeTitle-ls', activeTitleJSON);
    this.sidenavItems.filter(item => {
      if (item.name == this.activeTitle.name) item.isOpened = !item.isOpened;
    });
    this.setSidenavItemsToLS();
  }

  selectSubtitle(selectedSubtitle: any) {
    this.activeSubtitle.name = selectedSubtitle.name;
    this.activeSubtitle.urlKey = selectedSubtitle.urlKey;
    const activeSubtitleJSON = JSON.stringify(this.activeSubtitle);
    localStorage.setItem('activeSubtitle-ls', activeSubtitleJSON);
    if (!this.opened) this.myDrawer.close();
  }

  private setSidenavItemsToLS() {
    const sidenavItemsJson = JSON.stringify(this.sidenavItems);
    localStorage.setItem('sidenavItems-ls', sidenavItemsJson);
  }

  private getSidenavItemsFromLS() {
    const sidenavItemsJson = localStorage.getItem('sidenavItems-ls');
    return sidenavItemsJson ? JSON.parse(sidenavItemsJson) : SIDENAV;
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

  openTitleWhereActiveSubtitle() {
    this.sidenavItems.filter((t: any) => {
      t.subtitles.filter((sub: any) => {
        if (sub.name == this.activeSubtitle.name) t.isOpened = true;
      });
    });
  }
}
