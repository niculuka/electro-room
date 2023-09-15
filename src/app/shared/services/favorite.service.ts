import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  public favorites: Cart = this.getFavoritesFromLocalStorage();
  private favoritesSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.favorites);

  constructor() { }

  addToFavoritesService(product: Product): void {
    let favoriteItem = this.favorites.items.find(item => item.product.name === product.name);
    if (favoriteItem)
      return;
    this.favorites.items.push(new CartItem(product));
    this.setFavoritesToLocalStorage();
  }

  removeFromFavoritesService(name: string): void {
    this.favorites.items = this.favorites.items.filter(item => item.product.name != name);
    this.setFavoritesToLocalStorage();
  }

  clearFavoritesService() {
    this.favorites = new Cart();
    this.setFavoritesToLocalStorage();
  }

  getFavoritesObservable(): Observable<Cart> {
    return this.favoritesSubject.asObservable();
  }

  getFavorites(): Cart {
    return this.favoritesSubject.value;
  }

  private setFavoritesToLocalStorage(): void {
    const favJson = JSON.stringify(this.favorites);
    localStorage.setItem('fav-ls', favJson);
    this.favoritesSubject.next(this.favorites);
  }

  private getFavoritesFromLocalStorage(): Cart {
    const favJson = localStorage.getItem('fav-ls');
    return favJson ? JSON.parse(favJson) : new Cart();
  }
}
