import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEPARTMENTS } from 'src/app/shared/data/mega-menu.data';
import { IBreadcrumb } from 'src/app/shared/models/breadcrumb.model';
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

  protected departments = DEPARTMENTS;
  protected product: Product = new Product();
  foundProduct: boolean = false;

  breadcrumbs: Array<IBreadcrumb> = [];
  crumbDepartment: IBreadcrumb = {} as IBreadcrumb;
  crumbType: IBreadcrumb = {} as IBreadcrumb;
  crumbCategory: IBreadcrumb = {} as IBreadcrumb;
  crumbLinkname: IBreadcrumb = {} as IBreadcrumb;  

  private sub1: any;
  private sub2: any;
  private sub3: any;
  private sub4: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private favoriteService: FavoriteService,
    private compareService: CompareService,
    private breadcrumbService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    this.sub1 = this.activatedRoute.paramMap.subscribe((params) => {
      let urlKey = params.get('urlKey') || "";
      this.sub2 = this.productService.getProductByNameService(urlKey).subscribe(data => {
        if (data) {
          this.product = data;
          this.foundProduct = true;
          this.createBreadcrumb();
          this.getFavoritesProducts();
          this.getComparesProducts();
        }
        else this.foundProduct = false;
      });
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  createBreadcrumb() {
    this.departments.filter(depart => {
      depart.types.filter(type => {
        type.categories.find(category => {
          if (category.urlKey === this.product.categoryUrlKey) {

            this.crumbDepartment.label = depart.name;
            this.crumbDepartment.url = "/depart/" + depart.urlKey;
            this.breadcrumbs.push(this.crumbDepartment);

            this.crumbType.label = type.name;
            this.crumbType.url = "/type/" + type.urlKey;
            this.breadcrumbs.push(this.crumbType);

            this.crumbCategory.label = category.name;
            this.crumbCategory.url = "/categ/" + category.urlKey;
            this.breadcrumbs.push(this.crumbCategory);

            this.crumbLinkname.label
              = this.product.urlKey.charAt(0).toUpperCase()
              + this.product.urlKey.slice(1).replace(/-/g, " ");
            this.breadcrumbs.push(this.crumbLinkname);

            this.breadcrumbService.handleBreadcrumbsService(this.breadcrumbs);
          }
        });
      });
    });
  }

  getFavoritesProducts() {
    this.sub3 = this.favoriteService.getFavoritesObservable().subscribe(favorites => {
      this.product.favorite = false;
      favorites.filter(fav => {
        if (this.product.id == fav.id) this.product.favorite = true;
      });
    });
  }

  getComparesProducts() {
    this.sub4 = this.compareService.getComparesObservable().subscribe(compares => {
      this.product.compare = false;
      compares.filter(comp => {
        if (this.product.id == comp.id) this.product.compare = true;
      });
    });
  }

  ngOnDestroy(): void {
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
    this.sub3?.unsubscribe();
    this.sub4?.unsubscribe();
  }

}