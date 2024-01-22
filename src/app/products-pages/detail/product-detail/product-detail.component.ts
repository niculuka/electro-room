import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  breadcrumb: Array<Breadcrumb> = [];
  crumbDepartment: Breadcrumb = new Breadcrumb();
  crumbType: Breadcrumb = new Breadcrumb();
  crumbCategory: Breadcrumb = new Breadcrumb();
  crumbLinkname: Breadcrumb = new Breadcrumb();
  
  foundProduct: boolean = false;

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
      let linkname = params.get('linkname') || "";
      this.sub2 = this.productService.getProductByNameService(linkname).subscribe(data => {
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

  createBreadcrumb() {
    this.crumbDepartment.label = this.product.department;
    this.crumbDepartment.url = "/depart/" + this.product.department;
    this.breadcrumb.push(this.crumbDepartment);

    this.crumbType.label = this.product.type;
    this.crumbType.url = "/type/" + this.product.type;
    this.breadcrumb.push(this.crumbType);

    this.crumbCategory.label = this.product.category;
    this.crumbCategory.url = "/categ/" + this.product.category;
    this.breadcrumb.push(this.crumbCategory);

    this.crumbLinkname.label = this.product.linkName;
    this.crumbLinkname.url = "/prod/" + this.product.linkName;
    this.breadcrumb.push(this.crumbLinkname);

    this.breadcrumbService.handleBreadcrumbService(this.breadcrumb);
  }

  ngOnDestroy(): void {
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
    this.sub3?.unsubscribe();
    this.sub4?.unsubscribe();
  }

}