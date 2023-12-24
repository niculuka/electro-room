import { Component, OnDestroy } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart.model';
import { CartItem } from 'src/app/shared/models/cart-item.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { DELIVERY, FREE, PICK_UP } from '../../shared/constants/const';
import { Order } from '../../shared/models/order.model';
import { Location } from '@angular/common';
import { FavoriteService } from 'src/app/shared/services/favorite.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnDestroy {

  cart!: Cart;
  order: Order = new Order();

  delivery: number = DELIVERY;
  pickUp: number = PICK_UP;
  free: number = FREE;

  private sub: any;

  constructor(
    private cartService: CartService,
    private location: Location,
    private favoriteService: FavoriteService,
  ) {
    this.sub = this.cartService.getCartObservable().subscribe((data) => {
      this.cart = data;
    })
    const deliveryJson = localStorage.getItem('delivery-ls');
    if (deliveryJson) {
      this.order.favoriteDelivery = JSON.parse(deliveryJson);
    }
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

  handleFavorites(cartItem: CartItem) {
    if (cartItem.product.favorite) this.favoriteService.removeFromFavoritesService(cartItem.product);
    else this.favoriteService.addToFavoritesService(cartItem.product);
  }

  clearCart() {
    this.cartService.clearCartService();
  }

  goBack() {
    this.location.back();
  }

  deliveryOption() {
    const deliveryJson = JSON.stringify(this.order.favoriteDelivery);
    localStorage.setItem('delivery-ls', deliveryJson);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
