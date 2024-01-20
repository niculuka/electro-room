import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DEPARTMENTS } from 'src/app/shared/data/mega-menu.data';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { Product } from 'src/app/shared/models/product.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';
import { CompareService } from 'src/app/shared/services/compare.service';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { ProductCategoryService } from 'src/app/shared/services/product-category.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit, OnDestroy {

  departments = DEPARTMENTS;
  protected products: Array<Product> = [];

  currentDepartment: string = "";
  currentType: string = "";
  path: string = CATEGORY.LAPTOP;
  customBreadcrumb: Breadcrumb = new Breadcrumb();

  foundProducts: boolean = false;

  displayType: string = "grid";

  private sub0: any;
  private sub1: any;
  private sub2: any;
  private sub3: any;

  constructor(
    private productService: ProductService,
    private router: Router,
    private favoriteService: FavoriteService,
    private compareService: CompareService,
    private breadcrumbService: BreadcrumbService,
    private productCategoryService: ProductCategoryService,
  ) {
    this.sub0 = this.productCategoryService.getDisplayTypeObservable().subscribe(data => {
      if (data || data.length > 0) this.displayType = data;
    });
  }

  ngOnInit(): void {
    this.departments.filter(depart => {
      let type = depart.titles.find(title => title.path === this.path);
      if (type?.path) {
        this.currentDepartment = depart.name;
        this.currentType = type.name;
        this.createBreadcrumb();
        this.sub1 = this.productService.getProductsByTypeService(this.path).subscribe(data => {
          if (data.length) {
            this.products = data;
            this.foundProducts = true;
            this.getFavoritesProducts();
            this.getComparesProducts();
            this.productCategoryService.productsFiltersService(this.products);
          }
          else this.foundProducts = false;
        });
      }
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  getFavoritesProducts() {
    this.sub2 = this.favoriteService.getFavoritesObservable().subscribe(favorites => {
      this.products.filter(prod => {
        prod.favorite = false;
        favorites.filter(fav => {
          if (prod.id == fav.id) prod.favorite = true;
        });
      });
    });
  }

  getComparesProducts() {
    this.sub3 = this.compareService.getComparesObservable().subscribe(compares => {
      this.products.filter(prod => {
        prod.compare = false;
        compares.filter(comp => {
          if (prod.id == comp.id) prod.compare = true;
        });
      });
    });
  }

  createBreadcrumb() {
    this.customBreadcrumb = {
      customDepartment: this.currentDepartment,
      customType: this.currentType,
      customCategory: "",
      customLinkName: "",
    };
    this.breadcrumbService.handleBreadcrumbService(this.customBreadcrumb);
  }

  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
    this.sub3?.unsubscribe();
  }

}
