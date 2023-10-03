import { Component, OnDestroy } from '@angular/core';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnDestroy {

  customBreadcrumb: Breadcrumb = new Breadcrumb();

  private sub: any;

  constructor(
    private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService,
    private breadcrumbService: BreadcrumbService,
  ) {
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
      case "laptop-accessory": this.customBreadcrumb.customType = "Accesorii laptopuri"
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
      case "laptop-gaming": this.customBreadcrumb.customCategory = "Gaming"
        break;
      case "laptop-business": this.customBreadcrumb.customCategory = "Business"
        break;
      case "laptop-ultra": this.customBreadcrumb.customCategory = "Ultra"
        break;
      case "laptop-home": this.customBreadcrumb.customCategory = "Home"
        break;
      case "laptop-bag": this.customBreadcrumb.customCategory = "Genti si huse"
        break;
      case "laptop-charger": this.customBreadcrumb.customCategory = "Incarcatoare"
        break;
      case "laptop-hard": this.customBreadcrumb.customCategory = "Harduri"
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
