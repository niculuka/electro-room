import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DEPARTMENTS, IDepartment,  } from 'src/app/shared/data/mega-menu.data';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit, OnDestroy {

  departments: Array<IDepartment> = DEPARTMENTS;
  cards: Array<any> = [];

  currentDepartment: string = "";
  currentType: string = "";
  customBreadcrumb: Breadcrumb = new Breadcrumb();

  private sub: any;  

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breadcrumbService: BreadcrumbService,
    private toastrService: ToastrService,
  ) { }  

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((params) => {
      this.currentDepartment = params.get('department') || "";
      this.currentType = params.get('type') || "";
      this.createBreadcrumb();
      this.departments.filter(data => {
        let result = data.titles.find(items => items.path === this.currentType)
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

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
