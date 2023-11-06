import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { Product } from 'src/app/shared/models/product.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { ProductFilterService } from 'src/app/shared/services/product-filter.service';
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

  private sub1: any;
  private sub2: any;
  private sub3: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private favoriteService: FavoriteService,
    private breadcrumbService: BreadcrumbService,
    private productFilterService: ProductFilterService,
  ) { }

  ngOnInit(): void {
    this.sub1 = this.favoriteService.getFavoritesObservable().subscribe(() => {
      this.sub2 = this.activatedRoute.paramMap.subscribe((params) => {
        this.currentDepartment = params.get('department') || "";
        this.currentType = params.get('type') || "";
        this.currentCategory = params.get('category') || "";
        this.createBreadcrumb();
        if (this.currentCategory === CATEGORY.LAPTOP.toLowerCase()) {
          this.sub3 = this.productService.getProductsByTypeService(this.currentType).subscribe(data => {
            if (data.length) {
              this.products = data;
              this.productFilterService.productsFiltersService(this.products);
              this.notFoundProducts = false;
            }
            else {
              this.notFoundProducts = true;
            }
          });
        } else {
          this.sub3 = this.productService.getProductsByCategoryService(this.currentCategory).subscribe(data => {
            this.products = data;
            this.productFilterService.productsFiltersService(this.products);
          });
        }
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
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
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
    this.sub3?.unsubscribe();
  }

}