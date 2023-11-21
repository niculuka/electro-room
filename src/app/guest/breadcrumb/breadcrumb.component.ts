import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {

  customBreadcrumb: Breadcrumb = new Breadcrumb();

  private sub: any;

  constructor(
    private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService,
    private breadcrumbService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    this.sub = this.breadcrumbService.getBreadcrumbObservable().subscribe(result => {
      this.customBreadcrumb = new Breadcrumb();
      this.customBreadcrumb = result;
      this.customDepartmentLabels();
      this.customTypeLabels();
      this.customCategoryLabels();
      this.customCurrentLinkName();
      this.ngDynamicBreadcrumbService.updateBreadcrumbLabels(this.customBreadcrumb);
      // console.log(this.customBreadcrumb);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  customDepartmentLabels() {
    switch (this.customBreadcrumb.customDepartment) {
      case "lpt": this.customBreadcrumb.customDepartment = "Laptopuri, Telefoane, Tablete"
        break;
      case "dps": this.customBreadcrumb.customDepartment = "Desktop, Periferice, Software"
        break;
      default:
        this.customBreadcrumb.customDepartment = this.customBreadcrumb.customDepartment;
    }
  }

  customTypeLabels() {
    switch (this.customBreadcrumb.customType) {
      case "laptops": this.customBreadcrumb.customType = "Laptopuri"
        break;
      case "laptop_accessory": this.customBreadcrumb.customType = "Accesorii laptopuri"
        break;
      case "pc": this.customBreadcrumb.customType = "PC-uri"
        break;
      case "monitor": this.customBreadcrumb.customType = "Monitoare"
        break;
      default:
        this.customBreadcrumb.customType = this.customBreadcrumb.customType;
    }
  }

  customCategoryLabels() {
    switch (this.customBreadcrumb.customCategory) {
      case "laptop": this.customBreadcrumb.customCategory = "Toate laptopurile"
        break;
      case "laptop_gaming": this.customBreadcrumb.customCategory = "Gaming"
        break;
      case "laptop_business": this.customBreadcrumb.customCategory = "Business"
        break;
      case "laptop_ultra": this.customBreadcrumb.customCategory = "Ultra"
        break;
      case "laptop_home": this.customBreadcrumb.customCategory = "Home"
        break;
      case "laptop_bag": this.customBreadcrumb.customCategory = "Genti si huse"
        break;
      case "laptop_charger": this.customBreadcrumb.customCategory = "Incarcatoare"
        break;
      case "laptop_hard": this.customBreadcrumb.customCategory = "Harduri"
        break;
      case "external_battery": this.customBreadcrumb.customCategory = "Baterii externe"
        break;
      case "ram_memory": this.customBreadcrumb.customCategory = "Memorii RAM"
        break;
      case "pc_gaming": this.customBreadcrumb.customCategory = "Gaming"
        break;
      case "all_in_one": this.customBreadcrumb.customCategory = "All In One"
        break;
      case "monitor_pro": this.customBreadcrumb.customCategory = "Profesionale"
        break;
      default:
        this.customBreadcrumb.customCategory = this.customBreadcrumb.customCategory;
    }
  }

  customCurrentLinkName() {
    if (this.customBreadcrumb.customLinkName) {
      this.customBreadcrumb.customLinkName
        = this.customBreadcrumb.customLinkName.charAt(0).toUpperCase()
        + this.customBreadcrumb.customLinkName.slice(1);
    } else {
      this.customBreadcrumb.customLinkName = this.customBreadcrumb.customLinkName;
    }
  }
}
