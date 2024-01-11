import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  public favorites: Array<Product> = this.getFavoritesFromLocalStorage();
  private favoritesSubject: BehaviorSubject<Array<Product>> = new BehaviorSubject(this.favorites);

  constructor(
    private toastrService: ToastrService,
  ) { }

  addToFavoritesService(product: Product): void {
    if (this.favorites.length < 20) {
      let fav = this.favorites.find(item => item.id === product.id);
      if (fav) return;
      this.favorites.push(product);
      this.toastrService.success("Produsul a fost adaugat la Favorite")
      this.setFavoritesToLocalStorage();
    }
    else this.toastrService.warning("Se pot adauga maxim 20 produse favorite");
  }

  removeFromFavoritesService(product: Product): void {
    this.favorites = this.favorites.filter(item => item.id != product.id);
    this.toastrService.warning("Produsul a fost sters din Favorite")
    this.setFavoritesToLocalStorage();
  }

  clearFavoritesService() {
    this.favorites = [];
    this.setFavoritesToLocalStorage();
  }

  getFavoritesObservable(): Observable<Array<Product>> {
    return this.favoritesSubject.asObservable();
  }

  private setFavoritesToLocalStorage(): void {
    const favJson = JSON.stringify(this.favorites);
    localStorage.setItem('fav-ls', favJson);
    this.favoritesSubject.next(this.favorites);
  }

  private getFavoritesFromLocalStorage(): Array<Product> {
    const favJson = localStorage.getItem('fav-ls');
    return favJson ? JSON.parse(favJson) : [];
  }
}
