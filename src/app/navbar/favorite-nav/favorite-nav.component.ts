import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/shared/models/cart.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { CartItem } from 'src/app/shared/models/cart-item.model';

@Component({
  selector: 'favorite-nav',
  templateUrl: './favorite-nav.component.html',
  styleUrls: ['./favorite-nav.component.css']
})
export class FavoriteNavComponent {
  
  @Input() cart!: Cart;

  constructor(
    private cartService: CartService,
    private router: Router,
  ) {

  }

  getProductLinkName(cartItem: CartItem) {
    this.router.navigate([
      '/lpt/'
      + cartItem.product.level.replace(/_/g, "-").toLowerCase()
      + '/'
      + cartItem.product.type.replace(/_/g, "-").toLowerCase()
      + '/'
      + cartItem.product.linkName
    ]);
  }

  removeFromCart(cartItem: CartItem) {
    let name: any = cartItem.product.name;
    this.cartService.removeFromCartService(name);
  }

}
