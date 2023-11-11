import { Component, OnDestroy } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { ProductCategoryService } from 'src/app/shared/services/product-category.service';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent implements OnDestroy {

  compare: boolean = false;

  product: Product = new Product();
  productsOut: Array<Product> = [];

  private sub1: any;

  constructor(
    private favoriteService: FavoriteService,
    private cartService: CartService,
    private productCategoryService: ProductCategoryService,
  ) {
    this.sub1 = this.productCategoryService.getProductsOutObservable().subscribe(data => {
      if (data.length) this.productsOut = data;
      this.getFavoritesProducts();
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCartService(product);
    this.product = new Product();
  }

  getFavoritesProducts() {
    this.favoriteService.getFavoritesObservable().subscribe(fav => {
      for (let fp of fav) {
        for (let product of this.productsOut) {
          if (product.id === fp.id) {
            product.favorite = true;
          }
        }
      }
    });
  }

  addToFavorites(product: Product) {
    this.favoriteService.addToFavoritesService(product);
  }

  removeFromFavorites(product: Product) {
    this.favoriteService.removeFromFavoritesService(product);
  }

  addToCompares(product: Product)  {
    this.compare = true;
  }

  removeFromCompares(product: Product) {
    this.compare = false;
  }

  ngOnDestroy(): void {
    this.sub1?.unsubscribe();
  }
}
