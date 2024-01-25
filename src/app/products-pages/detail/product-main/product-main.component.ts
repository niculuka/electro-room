import { Component, Input, OnInit } from '@angular/core';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { CompareService } from 'src/app/shared/services/compare.service';
import { FavoriteService } from 'src/app/shared/services/favorite.service';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.css']
})
export class ProductMainComponent implements OnInit {

  @Input() product: Product = new Product();
  productImages: Array<any> = [];
  currentImage: string = "";

  category = CATEGORY;

  constructor(
    private cartService: CartService,
    private favoriteService: FavoriteService,
    private compareService: CompareService,
  ) { }

  ngOnInit(): void {
    this.productImages = this.product.gallery;
    this.currentImage = this.productImages[0].image;
  }

  handleFavorites(product: Product) {
    if (product.favorite) this.favoriteService.removeFromFavoritesService(product);
    else this.favoriteService.addToFavoritesService(product);
  }

  handleCompares(product: Product) {
    if (product.compare) this.compareService.removeFromComparesService(product);
    else this.compareService.addToComparesService(product);
  }

  addToCart() {
    this.cartService.addToCartService(this.product);
  }

  receiveCurrentImage($event: any) {
    this.currentImage = $event;
  }

}
