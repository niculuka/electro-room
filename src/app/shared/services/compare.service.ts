import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  public compares: Array<Product> = this.getComparesFromLocalStorage();
  private comparesSubject: BehaviorSubject<Array<Product>> = new BehaviorSubject(this.compares);

  constructor(
    private toastrService: ToastrService,
  ) { }

  addToComparesService(product: Product): void {
    let comp = this.compares.find(item => item.id === product.id);
    if (comp) return;
    this.compares.push(product);
    this.toastrService.success("Produsul a fost adaugat la Comparari", "Under Construction")
    this.setComparesToLocalStorage();
  }

  removeFromComparesService(product: Product): void {
    this.compares = this.compares.filter(item => item.id != product.id);
    this.toastrService.warning("Produsul a fost sters din Comparari", "Under Construction")
    this.setComparesToLocalStorage();
  }

  clearComparesService() {
    this.compares = [];
    this.setComparesToLocalStorage();
  }

  getComparesObservable(): Observable<Array<Product>> {
    return this.comparesSubject.asObservable();
  }

  private setComparesToLocalStorage(): void {
    const compJson = JSON.stringify(this.compares);
    localStorage.setItem('comp-ls', compJson);
    this.comparesSubject.next(this.compares);
  }

  private getComparesFromLocalStorage(): Array<Product> {
    const compJson = localStorage.getItem('comp-ls');
    return compJson ? JSON.parse(compJson) : [];
  }
}
