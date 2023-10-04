import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DEPARTMENTS, Department } from 'src/app/shared/data/mega-menu.data';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {

  departments: Array<Department> = DEPARTMENTS;
  cards: Array<any> = [];

  currentDepartment: string = "";
  currentType: string = "";
  customBreadcrumb: Breadcrumb = new Breadcrumb();

  isLaptopPage: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breadcrumbService: BreadcrumbService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.currentDepartment = params.get('department') || "";
      this.currentType = params.get('type') || "";
      this.createBreadcrumb();
      this.departments.filter(data => {
        let result = data.titles.find(items => items.type.replace(/_/g, "-").toLowerCase() === this.currentType)
        if (result) {
          this.cards = result.subtitles;          
        }
      });
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  createBreadcrumb() {
    this.customBreadcrumb = {
      customDepartment: this.currentDepartment,
      customType: this.currentType,
      customCategory: "",
      customLinkName: "",
    };
    this.breadcrumbService.handleBreadcrumbService(this.customBreadcrumb);
  }

  noRoute(card: any) {
    if (card.isReady === false) {
      this.toastrService.warning("C O N S T R U C T I O N", "U N D E R")
    }
  }
}
