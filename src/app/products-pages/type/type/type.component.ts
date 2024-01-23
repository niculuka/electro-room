import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DEPARTMENTS, } from 'src/app/shared/data/mega-menu.data';
import { IBreadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit, OnDestroy {

  protected departments = DEPARTMENTS;
  cards: Array<any> = [];

  breadcrumbs: Array<IBreadcrumb> = [];
  crumbDepartment: IBreadcrumb = {} as IBreadcrumb;
  crumbType: IBreadcrumb = {} as IBreadcrumb;

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
      let type = params.get('type') || "";
      this.departments.filter(depart => {
        depart.titles.find(title => {
          if (title.type === type) {
            this.cards = title.subtitles;
            this.createBreadcrumb(depart, title);
          }
        });
      });
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  createBreadcrumb(depart: any, title: any) {
    this.crumbDepartment.label = depart.name;
    this.crumbDepartment.url = "/depart/" + depart.department;
    this.breadcrumbs.push(this.crumbDepartment);

    this.crumbType.label = title.name;
    this.breadcrumbs.push(this.crumbType);

    this.breadcrumbService.handleBreadcrumbsService(this.breadcrumbs);
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
