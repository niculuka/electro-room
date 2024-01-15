import { Component, OnInit } from '@angular/core';
import { ADMIN_SIDENAV } from 'src/app/shared/data/sidenav-items.data';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

  sidenavItems: Array<any> = ADMIN_SIDENAV;
  currentSubtitle: string = localStorage.getItem("sidenavItem-ls") || "Laptopuri";

  expandItem: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  selectSubtitle(subtitle: any) {
    this.currentSubtitle = subtitle.name;
    localStorage.setItem('sidenavItem-ls', this.currentSubtitle);
    console.log(this.currentSubtitle)
  }

  // toogleTitle(title: any) {
  //   title.showSubtitle = !title.showSubtitle;
  // }

}
