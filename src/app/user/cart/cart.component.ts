import { Component } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart.model';
import { CartItem } from 'src/app/shared/models/cart-item.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { DELIVERY, PICK_UP } from '../../shared/constants/const';
import { Order } from '../../shared/models/order.model';

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

  deliveryOption() {
    const deliveryJson = JSON.stringify(this.order.favoriteDelivery);
    localStorage.setItem('delivery-ls', deliveryJson);
  }
}
