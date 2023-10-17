import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEPARTMENTS, Department } from 'src/app/shared/data/mega-menu.data';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { ProductFilter } from 'src/app/shared/models/product.model';
import { Product } from 'src/app/shared/models/product.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  // L A P T O P S - Vars ---------------------------------------------------
  // ------------------------------------------------------------------------
  protected products: Array<Product> = [];
  product: Product = new Product();

  filterNames: Array<ProductFilter> = [];
  currentFilterName: string = "";
  productFilter: ProductFilter = new ProductFilter();

  currentFilterGroup: string = "";



  // ------------------------------------------------------------------------
  departments: Array<Department> = DEPARTMENTS;
  cards: Array<any> = [];

  currentDepartment: string = "";
  currentType: string = "";
  currentCategory: string = "";

  customBreadcrumb: Breadcrumb = new Breadcrumb();

  notFoundProduct: boolean = true;

  availables: Array<string> = ["STOCK", "DEPOSIT"];
  availablesProducts: Array<Product> = [];

  prices: Array<any> = [{ min: 0, max: 1000 }, { min: 1000, max: 2000 }, { min: 2000, max: 3000 }, { min: 3000, max: 4000 }, { min: 4000, max: 1000000 }];
  pricesProducts: Array<Product> = [];

  // ------------------------------------------------------------------------
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private favoriteService: FavoriteService,
    private breadcrumbService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    this.favoriteService.getFavoritesObservable().subscribe(() => {
      this.activatedRoute.paramMap.subscribe((params) => {
        this.currentDepartment = params.get('department') || "";
        this.currentType = params.get('type') || "";
        this.currentCategory = params.get('category') || "";
        this.createBreadcrumb();
        if (
          this.currentCategory === CATEGORY.LAPTOP.replace(/_/g, "-").toLowerCase()
        ) {
          this.productService.getProductsByTypeService(this.currentType).subscribe(data => {
            this.products = data;
            this.filterAvailable(this.products);
            this.filterPrice(this.products);
            console.log(this.products)
          });
        } else {
          this.productService.getProductsByCategoryService(this.currentCategory).subscribe(data => {
            this.products = data;
            // console.log(this.products)
            // this.filters(data);
          });
        }
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      });
    });
  }

  filterAvailable(data: Array<Product>) {
    for (let available of this.availables) {
      let av = data.filter((item: any) => item.available === available)
      this.availablesProducts = this.availablesProducts.concat(av)
    }
    this.products = this.availablesProducts;
  }

  filterPrice(data: Array<Product>) {
    for (let price of this.prices) {
      let pr = data.filter((item: any) => item.price >= price.min && item.price < price.max)
      this.pricesProducts = this.pricesProducts.concat(pr)
    }
    this.products = this.pricesProducts;
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