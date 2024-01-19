import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEPARTMENTS, IDepartment } from 'src/app/shared/data/mega-menu.data';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { Product } from 'src/app/shared/models/product.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';
import { CompareService } from 'src/app/shared/services/compare.service';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { ProductCategoryService } from 'src/app/shared/services/product-category.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit, OnDestroy {

  departments: Array<IDepartment> = DEPARTMENTS;
  protected products: Array<Product> = [];

  currentDepartment: string = "";
  currentType: string = "";
  currentCategory: string = "";
  customBreadcrumb: Breadcrumb = new Breadcrumb();

  foundProducts: boolean = false;

  displayType: string = "grid";

  private sub0: any;
  private sub1: any;
  private sub2: any;
  private sub3: any;
  private sub4: any;

  constructor(
    private activatedRoute: ActivatedRoute,
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
    this.sub1 = this.activatedRoute.paramMap.subscribe((params) => {
      this.currentType = params.get('category') || "";
      this.departments.filter(depart => {
        depart.titles.filter(title => {
          let categ = title.subtitles.find(subtitle => subtitle.category === this.currentType);
          if (categ?.category) {
            this.currentDepartment = depart.name;
            this.currentCategory = categ.name;
            this.createBreadcrumb();
            this.sub2 = this.productService.getProductsByCategoryService(categ.category).subscribe(data => {
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
      });
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  getFavoritesProducts() {
    this.sub3 = this.favoriteService.getFavoritesObservable().subscribe(favorites => {
      this.products.filter(prod => {
        prod.favorite = false;
        favorites.filter(fav => {
          if (prod.id == fav.id) prod.favorite = true;
        });
      });
    });
  }

  getComparesProducts() {
    this.sub4 = this.compareService.getComparesObservable().subscribe(compares => {
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
      customCategory: this.currentCategory,
      customLinkName: "",
    };
    this.breadcrumbService.handleBreadcrumbService(this.customBreadcrumb);
  }

  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
    this.sub3?.unsubscribe();
    this.sub4?.unsubscribe();
  }

}