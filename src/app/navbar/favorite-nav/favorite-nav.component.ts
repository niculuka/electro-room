import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/shared/models/cart.model';
import { CartItem } from 'src/app/shared/models/cart-item.model';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'favorite-nav',
  templateUrl: './favorite-nav.component.html',
  styleUrls: ['./favorite-nav.component.css']
})
export class FavoriteNavComponent {
  @Input() favorites!: Cart;


  constructor(
    private cartService: CartService,
    private favoriteService: FavoriteService,
    private router: Router,
  ) { }

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

  removeFromFavorites(cartItem: CartItem) {
    let name: any = cartItem.product.name;
    this.favoriteService.removeFromFavoritesService(name);
  }

}
