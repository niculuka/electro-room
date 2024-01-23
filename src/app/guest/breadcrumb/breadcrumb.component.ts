import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBreadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {

  breadcrumbs: Array<IBreadcrumb> = [];

  private sub: any;

  constructor(
    private breadcrumbService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    this.sub = this.breadcrumbService.getBreadcrumbsObservable().subscribe(data => {
      if (data.length) {
        this.breadcrumbs = data;
        // console.log(this.breadcrumbs)
      }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
