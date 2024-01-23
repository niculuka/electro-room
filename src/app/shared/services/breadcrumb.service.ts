import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IBreadcrumb } from '../models/breadcrumb.model';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  public breadcrumbs: Array<IBreadcrumb> = [];
  private breadcrumbsSubject = new BehaviorSubject(this.breadcrumbs);

  handleBreadcrumbsService(breadcrumb: any) {
    this.breadcrumbs = breadcrumb;
    this.breadcrumbsSubject.next(this.breadcrumbs);
  }

  getBreadcrumbsObservable(): Observable<any> {
    return this.breadcrumbsSubject.asObservable();
  }
}
