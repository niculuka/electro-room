import { Component } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart.model';
import { CartItem } from 'src/app/shared/models/cart-item.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { DELIVERY, PICK_UP } from '../../shared/constants/const';
import { Order } from '../../shared/models/order.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart!: Cart;
  order: Order = new Order();

  delivery: number = DELIVERY;
  pickUp: number = PICK_UP;

  message: string = "";
  link: string = "";

  constructor(
    private cartService: CartService,
    private router: Router,
    private location: Location,
  ) {
    this.cartService.getCartObservable().subscribe((data) => {
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

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    let name: any = cartItem.product.name;
    this.cartService.changeQuantityService(name, quantity);
  }

  removeFromCart(cartItem: CartItem) {
    let name: any = cartItem.product.name;
    this.cartService.removeFromCartService(name);
  }

  clearCart() {
    this.cartService.clearCartService();
  }

  deliveryOption() {
    const deliveryJson = JSON.stringify(this.order.favoriteDelivery);
    localStorage.setItem('delivery-ls', deliveryJson);
  }

  goBack() {
    this.location.back();
  }
}
