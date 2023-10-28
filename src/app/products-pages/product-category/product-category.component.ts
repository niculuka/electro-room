import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCTS_FILTERS } from 'src/app/shared/data/product-filter.data';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { IProductFilter, ProductFilterArray } from 'src/app/shared/models/product-filter.model';
import { Product } from 'src/app/shared/models/product.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { ProductFilterService } from 'src/app/shared/services/product-filter.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  protected products: Array<Product> = [];
  product: Product = new Product();

  currentDepartment: string = "";
  currentType: string = "";
  currentCategory: string = "";

  customBreadcrumb: Breadcrumb = new Breadcrumb();
  notFoundProducts: boolean = false;

  productsFilters: Array<ProductFilterArray> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private favoriteService: FavoriteService,
    private breadcrumbService: BreadcrumbService,
    private productFilterService: ProductFilterService,
  ) {
    // productFilterService.getProductsFiltersObservable().subscribe(data => {
    //   if (data.length) this.productsFilters = data;
    // });
  }

  ngOnInit(): void {
    this.favoriteService.getFavoritesObservable().subscribe(() => {
      this.activatedRoute.paramMap.subscribe((params) => {
        this.currentDepartment = params.get('department') || "";
        this.currentType = params.get('type') || "";
        this.currentCategory = params.get('category') || "";
        this.createBreadcrumb();
        if (this.currentCategory === CATEGORY.LAPTOP.toLowerCase()) {
          this.productService.getProductsByTypeService(this.currentType).subscribe(data => {
            if (data.length) {
              this.products = data;
              // this.productFilterService.productsFiltersService(this.products);
              this.notFoundProducts = false;
            }
            else {
              this.notFoundProducts = true;
            }
          });
        } else {
          this.productService.getProductsByCategoryService(this.currentCategory).subscribe(data => {
            this.products = data;
            // this.productFilterService.productsFiltersService(this.products);
          });
        }
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      });
    });
  }

  getFavoritesProducts(data: any) {
    this.favoriteService.getFavoritesObservable().subscribe(wish => {
      for (let item of wish.items) {
        for (let product of data) {
          if (product.name === item.productName) {
            product.favorite = true;
          }
        }
      }
    });
  }

  createBreadcrumb() {
    this.customBreadcrumb = {
      customDepartment: this.currentDepartment,
      customType: this.currentType,
      customCategory: this.currentCategory,
      customLinkName: "",
    };
    this.breadcrumbService.handleBreadcrumbService(this.customBreadcrumb);
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


}