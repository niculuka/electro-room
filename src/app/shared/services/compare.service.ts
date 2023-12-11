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
    if (!this.compares.length) {
      this.addProductToList(product);
    }
    else {
      if (this.compares.length <= 3) {
        let type = this.compares.find(item => item.type.toLowerCase() === product.type.toLowerCase());
        let categ = this.compares.find(item => item.category.toLowerCase() === product.category.toLowerCase());

        if (type || categ) {
          this.addProductToList(product);
        }
        else {
          this.toastrService.warning("Produsele trebuie sa fie din aceeasi categorie");
        }
      }
      else {
        this.toastrService.warning("Se pot compara maxim 4 produse");
      }
    }
  }

  addProductToList(product: Product) {
    let comp = this.compares.find(item => item.id === product.id);
    if (comp) return;
    this.compares.push(product);
    this.setComparesToLocalStorage();
    this.toastrService.success("Produsul a fost adaugat la Comparari")
  }

  removeFromComparesService(product: Product): void {
    this.compares = this.compares.filter(item => item.id != product.id);
    this.toastrService.warning("Produsul a fost sters din Comparari")
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
