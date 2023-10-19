import { Injectable } from '@angular/core';
import { AvailableFilter } from '../models/product-filter.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductFilterService {

  public availables: Array<AvailableFilter> = this.getAvailableFilterLS();
  private availablesSubject: BehaviorSubject<Array<AvailableFilter>> = new BehaviorSubject(this.availables);

  constructor() { }


  clearAvailablesService() {
    this.availables = [];
    this.setAvailableFilterLS();
  }

  getAvailablesObservable(): Observable<Array<AvailableFilter>> {
    return this.availablesSubject.asObservable();
  }

  private setAvailableFilterLS(): void {
    const avJson = JSON.stringify(this.availables);
    localStorage.setItem('av-ls', avJson);
    this.availablesSubject.next(this.availables);
  }

  private getAvailableFilterLS(): Array<AvailableFilter> {
    const avJson = localStorage.getItem('av-ls');
    return avJson ? JSON.parse(avJson) : [];
  }
}
