import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/shared/models/cart.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { CartItem } from 'src/app/shared/models/cart-item.model';

@Component({
  selector: 'cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.css']
})
export class CartNavComponent {
  @Input() cart!: Cart;

  constructor(
    private cartService: CartService,
    private router: Router,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  getProductLinkName(cartItem: CartItem) {
    this.router.navigate([
      '/p/' + cartItem.product.department.toLowerCase()
      + '/' + cartItem.product.type.toLowerCase()
      + '/' + cartItem.product.category.toLowerCase()
      + '/' + cartItem.product.linkName
    ]);
  }

  removeFromCart(cartItem: CartItem) {
    let name: any = cartItem.product.name;
    this.cartService.removeFromCartService(name);
  }
}
