import { Component, OnDestroy } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart.model';
import { CartItem } from 'src/app/shared/models/cart-item.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { Location } from '@angular/common';
import { FavoriteService } from 'src/app/shared/services/favorite.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnDestroy {

  cart!: Cart;

  private sub0: any;
  private sub1: any;

  constructor(
    private cartService: CartService,
    private location: Location,
    private favoriteService: FavoriteService,
  ) {
    this.sub0 = this.cartService.getCartObservable().subscribe((data) => {
      this.cart = data;
      this.getFavoritesProducts();
    });
  }

  isCartEmpty() {
    return this.cart.items.length === 0;
  }

  decrease(cartItem: CartItem) {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      let name: any = cartItem.product.name;
      this.cartService.changeQuantityService(name, cartItem.quantity);
    }
  }

  increase(cartItem: CartItem) {
    if (cartItem.quantity < 5) {
      cartItem.quantity++;
      let name: any = cartItem.product.name;
      this.cartService.changeQuantityService(name, cartItem.quantity);
    }
  }

  removeFromCart(cartItem: CartItem) {
    let name: any = cartItem.product.name;
    this.cartService.removeFromCartService(name);
  }

  clearCart() {
    this.cartService.clearCartService();
  }

  getFavoritesProducts() {
    this.sub1 = this.favoriteService.getFavoritesObservable().subscribe(favorites => {
      this.cart.items.filter(item => {
        item.product.favorite = false;
        favorites.filter(fav => {
          if (item.product.id == fav.id) item.product.favorite = true;
        });
      });
    });
  }

  handleFavorites(cartItem: CartItem) {
    if (cartItem.product.favorite) this.favoriteService.removeFromFavoritesService(cartItem.product);
    else this.favoriteService.addToFavoritesService(cartItem.product);
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
    this.sub1?.unsubscribe();
  }
}
