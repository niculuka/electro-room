import { Component, Input, OnDestroy } from '@angular/core';
import { SPECIFICATIONS } from 'src/app/shared/enums/electro.enum';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { CompareService } from 'src/app/shared/services/compare.service';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { ProductCategoryService } from 'src/app/shared/services/product-category.service';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnDestroy {

  @Input() displayType: string = "";

  product: Product = new Product();
  productsOut: Array<Product> = [];

  name = SPECIFICATIONS;

  private sub1: any;
  private sub2: any;
  private sub3: any;

  constructor(
    private favoriteService: FavoriteService,
    private compareService: CompareService,
    private cartService: CartService,
    private productCategoryService: ProductCategoryService,
  ) {
    this.sub1 = this.productCategoryService.getProductsOutObservable().subscribe(data => {
      if (data.length) this.productsOut = data;
      this.getFavoritesProducts();
      this.getComparesProducts();
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCartService(product);
    this.product = new Product();
  }

  getFavoritesProducts() {
    this.sub2 = this.favoriteService.getFavoritesObservable().subscribe(fav => {
      for (let fp of fav) {
        for (let product of this.productsOut) {
          if (product.id === fp.id) {
            product.favorite = true;
          }
        }
      }
    });
  }

  getComparesProducts() {
    this.sub3 = this.compareService.getComparesObservable().subscribe(comp => {
      for (let cp of comp) {
        for (let product of this.productsOut) {
          if (product.id === cp.id) {
            product.compare = true;
          }
        }
      }
    });
  }

  handleFavorites(product: Product) {
    if (product.favorite) this.favoriteService.removeFromFavoritesService(product);
    else this.favoriteService.addToFavoritesService(product);
  }

  handleCompares(product: Product) {
    if (product.compare) this.compareService.removeFromComparesService(product);
    else this.compareService.addToComparesService(product);
  }

  ngOnDestroy(): void {
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
    this.sub3?.unsubscribe();
  }

}
