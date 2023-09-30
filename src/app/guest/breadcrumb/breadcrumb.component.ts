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
      this.customLevelLabels();
      this.customTypeLabels();
      this.customCurrentLinkName();
      this.ngDynamicBreadcrumbService.updateBreadcrumbLabels(this.customBreadcrumb);
      // console.log(this.currentBreadcrumb);
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
        this.customBreadcrumb.customDepartment = "";
    }
  }

  customLevelLabels() {
    switch (this.customBreadcrumb.customLevel) {
      case "laptops": this.customBreadcrumb.customLevel = "Laptopuri"
        break;
      case "laptop-accessory": this.customBreadcrumb.customLevel = "Accesorii laptopuri"
        break;
      default:
        this.customBreadcrumb.customLevel = "";
    }
  }

  customTypeLabels() {
    switch (this.customBreadcrumb.customType) {
      case "laptop": this.customBreadcrumb.customType = "Toate laptopurile"
        break;
      case "laptop-gaming": this.customBreadcrumb.customType = "Gaming"
        break;
      case "laptop-business": this.customBreadcrumb.customType = "Business"
        break;
      case "laptop-ultra": this.customBreadcrumb.customType = "Ultra"
        break;
      case "laptop-home": this.customBreadcrumb.customType = "Home"
        break;
      case "laptop-bag": this.customBreadcrumb.customType = "Genti si huse"
        break;
      case "laptop-charger": this.customBreadcrumb.customType = "Incarcatoare"
        break;
      case "laptop-hard": this.customBreadcrumb.customType = "Harduri"
        break;
      default:
        this.customBreadcrumb.customType = "";
    }
  }

  customCurrentLinkName() {
    if (this.customBreadcrumb.customLinkName) {
      this.customBreadcrumb.customLinkName
        = this.customBreadcrumb.customLinkName.charAt(0).toUpperCase()
        + this.customBreadcrumb.customLinkName.slice(1);
    } else {
      this.customBreadcrumb.customLinkName = "";
    }
  }
}
