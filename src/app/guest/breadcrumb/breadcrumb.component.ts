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

  currentBreadcrumb: Breadcrumb = new Breadcrumb();

  private sub: any;

  constructor(
    private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService,
    private breadcrumbService: BreadcrumbService,
  ) {
    this.sub = this.breadcrumbService.getBreadcrumbObservable().subscribe(result => {
      this.currentBreadcrumb = new Breadcrumb();
      this.currentBreadcrumb = result;
      this.customCurrentLevel();
      this.customCurrentType();
      this.customCurrentLinkName();
      this.ngDynamicBreadcrumbService.updateBreadcrumbLabels(this.currentBreadcrumb);
      // console.log(this.currentBreadcrumb);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  customCurrentLevel() {
    switch (this.currentBreadcrumb.customLevel) {
      case "laptops": this.currentBreadcrumb.customLevel = "Laptopuri"
        break;
      case "laptop-accessory": this.currentBreadcrumb.customLevel = "Accesorii laptopuri"
        break;
      default:
        this.currentBreadcrumb.customLevel = "";
    }
  }

  customCurrentType() {
    switch (this.currentBreadcrumb.customType) {
      case "laptop": this.currentBreadcrumb.customType = "Toate laptopurile"
        break;
      case "laptop-gaming": this.currentBreadcrumb.customType = "Gaming"
        break;
      case "laptop-business": this.currentBreadcrumb.customType = "Business"
        break;
      case "laptop-ultra": this.currentBreadcrumb.customType = "Ultra"
        break;
      case "laptop-home": this.currentBreadcrumb.customType = "Home"
        break;
      case "laptop-bag": this.currentBreadcrumb.customType = "Genti si huse"
        break;
      case "laptop-charger": this.currentBreadcrumb.customType = "Incarcatoare"
        break;
      case "laptop-hard": this.currentBreadcrumb.customType = "Harduri"
        break;
      default:
        this.currentBreadcrumb.customType = "";
    }
  }

  customCurrentLinkName() {
    if (this.currentBreadcrumb.customLinkName) {
      this.currentBreadcrumb.customLinkName
        = this.currentBreadcrumb.customLinkName.charAt(0).toUpperCase()
        + this.currentBreadcrumb.customLinkName.slice(1);
    } else {
      this.currentBreadcrumb.customLinkName = "";
    }
  }

}
