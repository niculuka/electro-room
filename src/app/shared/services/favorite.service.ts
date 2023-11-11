import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  public favorites: Array<Product> = this.getFavoritesFromLocalStorage();
  private favoritesSubject: BehaviorSubject<Array<Product>> = new BehaviorSubject(this.favorites);

  addToFavoritesService(product: Product): void {
    let fav = this.favorites.find(item => item.id === product.id);
    if (fav) return;
    this.favorites.push(product);
    this.favorites = this.favorites.sort((a: any, b: any) => a.id - b.id);
    this.setFavoritesToLocalStorage();
  }

  removeFromFavoritesService(product: Product): void {
    this.favorites = this.favorites.filter(item => item.id != product.id);
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
