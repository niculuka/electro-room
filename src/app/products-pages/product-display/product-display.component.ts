import { Component, OnDestroy } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { ProductFilterService } from 'src/app/shared/services/product-filter.service';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnDestroy {

  private sub0: any;
  product: Product = new Product();
  productsOut: Array<Product> = [];

  constructor(
    private favoriteService: FavoriteService,
    private cartService: CartService,
    private productFilterService: ProductFilterService,
  ){
    this.sub0 = this.productFilterService.getProductsOutObservable().subscribe(data => {
      if(data.length) this.productsOut = data;
    }); 
  }

  createProductItem(item: Product) {
    this.product.id = item.id;
    this.product.name = item.name;
    this.product.linkName = item.linkName;
    this.product.description = item.description;
    this.product.brand = item.brand;
    this.product.subcategory = item.subcategory;
    this.product.image = item.image;
    this.product.price = item.price;
    this.product.favorite = item.favorite;
  }

  addToCart(item: Product) {
    this.createProductItem(item);
    this.cartService.addToCartService(this.product);
    this.product = new Product();
  }

  // getFavoritesProducts(data: any) {
  //   this.favoriteService.getFavoritesObservable().subscribe(wish => {
  //     for (let item of wish.items) {
  //       for (let product of data) {
  //         if (product.name === item.productName) {
  //           product.favorite = true;
  //         }
  //       }
  //     }
  //   });
  // }

  handleFavorite(item: Product) {
    item.favorite = !item.favorite;
    // console.log(item);
    this.createProductItem(item);

    if (item.favorite) {
      this.favoriteService.addToFavoritesService(this.product);
    }
    else {
      this.favoriteService.removeFromFavoritesService(this.product.name)
    }
    this.product = new Product();
  }



  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
  }
}