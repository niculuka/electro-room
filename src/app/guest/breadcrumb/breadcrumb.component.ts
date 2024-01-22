import { Component, OnDestroy, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {

  breadcrumb: Breadcrumb = new Breadcrumb();

  private sub: any;

  constructor(
    private breadcrumbService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    this.sub = this.breadcrumbService.getBreadcrumbObservable().subscribe(data => {
      if (data) {
        this.breadcrumb = data;
        // console.log(this.breadcrumb);
      }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
