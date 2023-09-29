import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Breadcrumb } from '../models/breadcrumb.model';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  public currentBreadcrumb: Breadcrumb = new Breadcrumb();

  private currentBreadcrumbSubject = new BehaviorSubject(this.currentBreadcrumb);

  handleBreadcrumbService(currentBreadcrumb: any) {
    this.currentBreadcrumb = currentBreadcrumb;
    this.currentBreadcrumbSubject.next(this.currentBreadcrumb);
  }

  getBreadcrumbObservable(): Observable<any> {
    return this.currentBreadcrumbSubject.asObservable();
  }
}
