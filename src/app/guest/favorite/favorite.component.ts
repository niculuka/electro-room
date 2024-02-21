import { Component } from '@angular/core';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { Location } from '@angular/common';
import { CartService } from 'src/app/shared/services/cart.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  favorites!: Array<Product>;

  private sub: any;

  constructor(
    private cartService: CartService,
    private favoriteService: FavoriteService,
    private location: Location,
  ) {
    this.sub = this.favoriteService.getFavoritesObservable().subscribe((fav) => {
      this.favorites = fav;
    });
  }

  isFavoritesEmpty() {
    return this.favorites.length == 0;
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

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
