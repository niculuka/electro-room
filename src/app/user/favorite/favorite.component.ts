import { Component } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart.model';
import { CartItem } from 'src/app/shared/models/cart-item.model';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  favorites!: Cart;

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
    return this.favorites.items.length === 0;
  }

  addToCart(cartItem: CartItem) {
    this.cartService.addToCartService(cartItem.product);
  }

  removeFromFavorites(cartItem: CartItem) {
    let name: any = cartItem.product.name;
    this.favoriteService.removeFromFavoritesService(name);
  }

  clearFavorites() {
    this.favoriteService.clearFavoritesService();
  }

  getProductLinkName(cartItem: CartItem) {
    this.router.navigate([
      '/lpt/'
      + cartItem.product.type.replace(/_/g, "-").toLowerCase()
      + '/'
      + cartItem.product.category.replace(/_/g, "-").toLowerCase()
      + '/'
      + cartItem.product.linkName
    ]);
  }

  goBack() {
    this.location.back();
  }

}
