import { Component, Input } from '@angular/core';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { Product } from 'src/app/shared/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-nav',
  templateUrl: './favorite-nav.component.html',
  styleUrls: ['./favorite-nav.component.css']
})
export class FavoriteNavComponent {
  @Input() favorites!: Array<Product>;

  constructor(
    private favoriteService: FavoriteService,
    private router: Router,
    ) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

  removeFromFavorites(product: Product) {
    this.favoriteService.removeFromFavoritesService(product);
  }

}
