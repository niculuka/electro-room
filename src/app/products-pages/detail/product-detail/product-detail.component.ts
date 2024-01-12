import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { Product } from 'src/app/shared/models/product.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';
import { CompareService } from 'src/app/shared/services/compare.service';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  protected product: Product = new Product();

  currentDepartment: string = "";
  currentType: string = "";
  currentCategory: string = "";
  currentLinkName: string = "";

  customBreadcrumb: Breadcrumb = new Breadcrumb();
  foundProduct: boolean = false;

  private sub0: any;
  private sub1: any;
  private sub2: any;
  private sub3: any;
  private sub4: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private favoriteService: FavoriteService,
    private compareService: CompareService,
    private breadcrumbService: BreadcrumbService,
  ) { }

  ngOnInit(): void {






    this.sub0 = this.activatedRoute.paramMap.subscribe((params) => {
      this.currentDepartment = params.get('department') || "";
      this.currentType = params.get('type') || "";
      this.currentCategory = params.get('category') || "";
      this.currentLinkName = params.get('linkName') || "";
      this.createBreadcrumb();

      this.sub2 = this.productService.getProductByNameService(this.currentLinkName).subscribe(data => {
        if (data) {
          this.product = data;
          this.foundProduct = true;

          this.getFavoritesProducts();
          this.getComparesProducts();

        }
        else this.foundProduct = false;
        
      });
    });
  }  

  getFavoritesProducts() {
    this.sub3 = this.favoriteService.getFavoritesObservable().subscribe(fav => {
      for (let fp of fav) {
        if (this.product.id === fp.id) {
          this.product.favorite = true;
        }
      }
    });
  }

  getComparesProducts() {
    this.sub4 = this.compareService.getComparesObservable().subscribe(comp => {
      for (let cp of comp) {
        if (this.product.id === cp.id) {
          this.product.compare = true;
        }
      }
    });
  }

  createBreadcrumb() {
    this.customBreadcrumb = {
      customDepartment: this.currentDepartment,
      customType: this.currentType,
      customCategory: this.currentCategory,
      customLinkName: this.currentLinkName,
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