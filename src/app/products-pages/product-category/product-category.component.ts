import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEPARTMENTS, Department } from 'src/app/shared/data/mega-menu.data';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { ProductFilter } from 'src/app/shared/models/product-filter.model';
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

  notFoundProducts: boolean = false;


  // ------------------------------------------------------------------------
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private favoriteService: FavoriteService,
    private breadcrumbService: BreadcrumbService,
    private productFilterService: ProductFilterService,
  ) { }

  ngOnInit(): void {
    this.favoriteService.getFavoritesObservable().subscribe(() => {
      this.activatedRoute.paramMap.subscribe((params) => {
        this.currentDepartment = params.get('department') || "";
        this.currentType = params.get('type') || "";
        this.currentCategory = params.get('category') || "";
        this.createBreadcrumb();
        if (this.currentCategory === CATEGORY.LAPTOP.toLowerCase()) {
          this.productService.getProductsByTypeService(this.currentType).subscribe(data => {
            if (data.length > 0) {
              this.products = data;
              // console.log(this.products);
              this.productFilterService.productsFiltersService(this.products)             
              this.notFoundProducts = false;
            }
            else {
              // console.log(this.products);
              this.notFoundProducts = true;
            }
          });
        } else {
          this.productService.getProductsByCategoryService(this.currentCategory).subscribe(data => {
            this.products = data;
            // console.log(this.products);
            this.productFilterService.productsFiltersService(this.products);
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