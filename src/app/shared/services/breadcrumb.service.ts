import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Breadcrumb } from '../models/breadcrumb.model';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  public customBreadcrumb: Breadcrumb = new Breadcrumb();

  private currentBreadcrumbSubject = new BehaviorSubject(this.customBreadcrumb);

  handleBreadcrumbService(customBreadcrumb: any) {
    this.customBreadcrumb = customBreadcrumb;
    this.currentBreadcrumbSubject.next(this.customBreadcrumb);
  }

  getBreadcrumbObservable(): Observable<any> {
    return this.currentBreadcrumbSubject.asObservable();
  }
}
