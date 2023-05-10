import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';
import { ToastrService } from 'ngx-toastr';
import { DEPARTMENTS, Department } from 'src/app/shared/data/mega-menu.data';

@Component({
  selector: 'app-product-level',
  templateUrl: './product-level.component.html',
  styleUrls: ['./product-level.component.css']
})
export class ProductLevelComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  departments: Array<Department> = DEPARTMENTS;
  cards: Array<any> = [];

  currentLevel: any = "";

  isLaptopPage: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService,
    private router: Router,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.currentLevel = params.get('level') || "";

      const breadcrumb = {
        customLevel: this.currentLevel.charAt(0).toUpperCase() + this.currentLevel.slice(1),
      };
      this.ngDynamicBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
      
      this.departments.filter(data => {
        let result = data.titles.find(items => items.level.replace(/_/g, "-").toLowerCase() === this.currentLevel)
        if (result) {
          this.cards = result.subtitles;
        }
      });
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  noRoute(card: any) {
    if (card.isReady === false) {
      this.toastrService.warning("C O N S T R U C T I O N", "U N D E R")
    }
  }
}
