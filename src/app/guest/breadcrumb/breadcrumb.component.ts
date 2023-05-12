import { Component, Input, OnInit } from '@angular/core';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input() currentLevelCrumb: string = "";
  @Input() currentTypeCrumb: string = "";
  @Input() currentLinkNameCrumb: string = "";

  currentLevel: string = "";
  currentType: string = "";

  constructor(
    private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService,
  ) { }

  ngOnInit(): void {

    switch (this.currentLevelCrumb) {
      case "laptops": this.currentLevel = "Laptopuri"
        break;
      case "laptop-accessory": this.currentLevel = "Accesorii laptopuri"
        break;
      default:
        this.currentLevel = "";
    }

    switch (this.currentTypeCrumb) {
      case "laptop": this.currentType = "Toate laptopurile"
        break;
      case "laptop-gaming": this.currentType = "Gaming"
        break;
      case "laptop-business": this.currentType = "Business"
        break;
      case "laptop-ultra": this.currentType = "Ultra"
        break;
      case "laptop-home": this.currentType = "Home"
        break;
      case "laptop-bag": this.currentType = "Genti si huse"
        break;
      case "laptop-charger": this.currentType = "Incarcatoare"
        break;
      case "laptop-hard": this.currentType = "Harduri"
        break;
      default:
        this.currentType = "";
    }

    const breadcrumb = {
      customLevel: this.currentLevel,
      customType: this.currentType,
      customLinkName: this.currentLinkNameCrumb.charAt(0).toUpperCase() + this.currentLinkNameCrumb.slice(1),
    };
    this.ngDynamicBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
  }

}
