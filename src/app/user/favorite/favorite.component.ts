import { Component } from '@angular/core';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  favorites!: Array<Product>;

  constructor(
    private cartService: CartService,
    private favoriteService: FavoriteService,
    private router: Router,
    private location: Location,
  ) {
    this.favoriteService.getFavoritesObservable().subscribe((data) => {
      this.favorites = data;
    });
  }

  isFavoritesEmpty() {
    return this.favorites.length === 0;
  }

  addToCart(product: Product) {
    this.cartService.addToCartService(product);
  }

  removeFromFavorites(product: Product) {
    this.favoriteService.removeFromFavoritesService(product);
  }

  clearFavorites() {
    this.favoriteService.clearFavoritesService();
  }

  goBack() {
    this.location.back();
  }

}
