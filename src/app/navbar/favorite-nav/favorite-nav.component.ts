import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { Product } from 'src/app/shared/models/product.model';

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
  ) { }

  removeFromFavorites(product: Product) {
    this.favoriteService.removeFromFavoritesService(product);
  }

}
