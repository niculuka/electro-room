import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
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

  protected products: Array<Product> = [];

  currentDepartment: string = "";
  currentType: string = "";
  currentCategory: string = "";

  customBreadcrumb: Breadcrumb = new Breadcrumb();
  notFoundProducts: boolean = false;

  displayType: string = "grid";

  private sub0: any;
  private sub1: any;
  private sub2: any;
  private sub3: any;
  private sub4: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
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
    this.sub1 = this.favoriteService.getFavoritesObservable().subscribe(() => {
      this.sub2 = this.compareService.getComparesObservable().subscribe(() => {
        this.sub3 = this.activatedRoute.paramMap.subscribe((params) => {
          this.currentDepartment = params.get('department') || "";
          this.currentType = params.get('type') || "";
          this.currentCategory = params.get('category') || "";
          this.createBreadcrumb();
          if (this.currentCategory === CATEGORY.LAPTOP.toLowerCase()) {
            this.sub4 = this.productService.getProductsByTypeService(this.currentType).subscribe(data => {
              if (data.length) {
                this.products = data;
                this.productCategoryService.productsFiltersService(this.products);
                this.notFoundProducts = false;
              }
              else {
                this.notFoundProducts = true;
              }
            });
          } else {
            this.sub4 = this.productService.getProductsByCategoryService(this.currentCategory).subscribe(data => {
              this.products = data;
              this.productCategoryService.productsFiltersService(this.products);
            });
          }
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
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