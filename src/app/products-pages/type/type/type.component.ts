import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DEPARTMENTS, } from 'src/app/shared/data/mega-menu.data';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit, OnDestroy {

  departments = DEPARTMENTS;
  cards: Array<any> = [];

  currentDepartment: string = "";
  currentType: string = "";
  customBreadcrumb: Breadcrumb = new Breadcrumb();

  private sub0: any;
  private sub1: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.sub1 = this.activatedRoute.paramMap.subscribe((params) => {
      let path = params.get('path') || "";
      this.departments.filter(depart => {
        let type = depart.titles.find(title => title.path === path);
        if (type?.path) {
          this.cards = type.subtitles;
          this.currentDepartment = depart.name;
          this.currentType = type.name;          
          this.createBreadcrumb();
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
    this.sub0?.unsubscribe();
    this.sub1?.unsubscribe();
  }

}
