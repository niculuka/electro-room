import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Breadcrumb } from '../models/breadcrumb.model';
import { CATEGORY, MENU } from '../enums/electro.enum';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  crumb: Breadcrumb = new Breadcrumb();
  public breadcrumb: Array<Breadcrumb> = [];
  private currentBreadcrumbSubject = new BehaviorSubject(this.breadcrumb);

  handleBreadcrumbService(breadcrumb: any) {

    console.log(breadcrumb)

    // this.breadcrumb = [];

    // breadcrumb.filter((item: any) => {

    //   this.crumb = new Breadcrumb();

    //   this.crumb.url = item;
    //   // this.customUrl(item);


    //   this.crumb.label = item;
    //   // this.customLabels();

    //   this.breadcrumb.push(this.crumb);

    // })
    // this.customLabels();    

    this.currentBreadcrumbSubject.next(this.breadcrumb);
    // console.log(breadcrumb)


  }

  getBreadcrumbObservable(): Observable<any> {
    return this.currentBreadcrumbSubject.asObservable();
  }




  // customUrl(item: any) {
  //   switch (this.crumb.url) {
  //     // Depart ----------------------------------------------------------------------
  //     case CATEGORY.LPT || CATEGORY.DPS: this.crumb.url = "/depart/" + CATEGORY.LPT; break;
  //     case CATEGORY.DPS: this.crumb.url = "/depart/" + CATEGORY.DPS; break;
  //     // Type ------------------------------------------------------------------------
  //     case CATEGORY.LAPTOP: this.crumb.url = "/type/" + CATEGORY.LAPTOP; break;
  //     case CATEGORY.LAPTOP_ACCESSORY: this.crumb.url = "/type/" + CATEGORY.LAPTOP_ACCESSORY; break;
  //     case CATEGORY.PC: this.crumb.url = "/type/" + CATEGORY.PC; break;
  //     case CATEGORY.MONITOR: this.crumb.url = "/type/" + CATEGORY.MONITOR; break;
  //     // categ -----------------------------------------------------------------------
  //     case CATEGORY.LAPTOP_GAMING: this.crumb.url = "/categ/" + CATEGORY.LAPTOP_GAMING; break;
  //     case CATEGORY.LAPTOP_BUSINESS: this.crumb.url = "/categ/" + CATEGORY.LAPTOP_BUSINESS; break;
  //     case CATEGORY.LAPTOP_ULTRA: this.crumb.url = "/categ/" + CATEGORY.LAPTOP_ULTRA; break;
  //     case CATEGORY.LAPTOP_HOME: this.crumb.url = "/categ/" + CATEGORY.LAPTOP_HOME; break;
  //     case CATEGORY.LAPTOP_BAG: this.crumb.url = "/categ/" + CATEGORY.LAPTOP_BAG; break;
  //     case CATEGORY.LAPTOP_CHARGER: this.crumb.url = "/categ/" + CATEGORY.LAPTOP_CHARGER; break;
  //     case CATEGORY.LAPTOP_HARD: this.crumb.url = "/categ/" + CATEGORY.LAPTOP_HARD; break;
  //     case CATEGORY.EXTERNAL_BATTERY: this.crumb.url = "/categ/" + CATEGORY.EXTERNAL_BATTERY; break;
  //     case CATEGORY.RAM_MEMORY: this.crumb.url = "/categ/" + CATEGORY.RAM_MEMORY; break;
  //     case CATEGORY.PC_GAMING: this.crumb.url = "/categ/" + CATEGORY.PC_GAMING; break;
  //     case CATEGORY.ALL_IN_ONE: this.crumb.url = "/categ/" + CATEGORY.ALL_IN_ONE; break;
  //     case CATEGORY.MONITOR_PRO: this.crumb.url = "/categ/" + CATEGORY.MONITOR_PRO; break;
  //     // linkname -----------------------------------------------------------------------
  //     // default: this.crumb.url
  //     //   = this.crumb.url.charAt(0).toUpperCase()
  //     //   + this.crumb.url.slice(1).replace(/-/g, " ").toLowerCase();
  //   }
  // }




  // Replace C A T E G O R Y  with  M E N U.names --------------------------------------------------
  // customLabels() {
  //   switch (this.crumb.label) {
  //     // Depart ----------------------------------------------------------------------
  //     case CATEGORY.LPT: this.crumb.label = MENU.LPT;
  //       break;
  //     case CATEGORY.DPS: this.crumb.label = MENU.DPS;
  //       break;
  //     // Type ------------------------------------------------------------------------
  //     case CATEGORY.LAPTOP: this.crumb.label = MENU.LAPTOP;
  //       break;
  //     case CATEGORY.LAPTOP_ACCESSORY: this.crumb.label = MENU.LAPTOP_ACCESSORY;
  //       break;
  //     case CATEGORY.PC: this.crumb.label = MENU.PC;
  //       break;
  //     case CATEGORY.MONITOR: this.crumb.label = MENU.MONITOR;
  //       break;
  //     // categ -----------------------------------------------------------------------
  //     case CATEGORY.LAPTOP_GAMING: this.crumb.label = MENU.LAPTOP_GAMING;
  //       break;
  //     case CATEGORY.LAPTOP_BUSINESS: this.crumb.label = MENU.LAPTOP_BUSINESS;
  //       break;
  //     case CATEGORY.LAPTOP_ULTRA: this.crumb.label = MENU.LAPTOP_ULTRA;
  //       break;
  //     case CATEGORY.LAPTOP_HOME: this.crumb.label = MENU.LAPTOP_HOME;
  //       break;
  //     case CATEGORY.LAPTOP_BAG: this.crumb.label = MENU.LAPTOP_BAG;
  //       break;
  //     case CATEGORY.LAPTOP_CHARGER: this.crumb.label = MENU.LAPTOP_CHARGER;
  //       break;
  //     case CATEGORY.LAPTOP_HARD: this.crumb.label = MENU.LAPTOP_HARD;
  //       break;
  //     case CATEGORY.EXTERNAL_BATTERY: this.crumb.label = MENU.EXTERNAL_BATTERY;
  //       break;
  //     case CATEGORY.RAM_MEMORY: this.crumb.label = MENU.RAM_MEMORY;
  //       break;
  //     case CATEGORY.PC_GAMING: this.crumb.label = MENU.PC_GAMING;
  //       break;
  //     case CATEGORY.ALL_IN_ONE: this.crumb.label = MENU.ALL_IN_ONE;
  //       break;
  //     case CATEGORY.MONITOR_PRO: this.crumb.label = MENU.MONITOR_PRO;
  //       break;
  //     // linkname -----------------------------------------------------------------------
  //     default: this.crumb.label
  //       = this.crumb.label.charAt(0).toUpperCase()
  //       + this.crumb.label.slice(1).replace(/-/g, " ").toLowerCase();
  //   }
  // }
}
