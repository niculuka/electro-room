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
    let fav = this.favorites.find(item => item.id === product.id);
    if (fav) {
      this.toastrService.warning("Produsul este deja in Favorite.")
      return;
    }
    this.favorites.push(product);
    this.toastrService.success("Produsul a fost adaugat la Favorite")
    this.setFavoritesToLocalStorage();
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
