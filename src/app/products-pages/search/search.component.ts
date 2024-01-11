import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/models/product.model';
import { CompareService } from 'src/app/shared/services/compare.service';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { ProductCategoryService } from 'src/app/shared/services/product-category.service';
import { SearchProductService } from 'src/app/shared/services/search-product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: string = "";
  searchResult: string = "";
  notFoundProducts: boolean = false;

  protected products: Array<Product> = [];
  
  displayType: string = "grid";

  private sub0: any;
  private sub1: any;
  private sub2: any;
  private sub3: any;
  private sub4: any;

  constructor(
    private searchProductService: SearchProductService,
    private productCategoryService: ProductCategoryService,
    private favoriteService: FavoriteService,
    private compareService: CompareService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
  ) {
    this.sub0 = this.productCategoryService.getDisplayTypeObservable().subscribe(data => {
      if (data || data.length > 0) this.displayType = data;
    });
  }

  ngOnInit(): void {
    this.sub1 = this.favoriteService.getFavoritesObservable().subscribe(() => {
      this.sub2 = this.compareService.getComparesObservable().subscribe(() => {
        this.sub3 = this.searchProductService.getProductsObservable().subscribe(data => {
          if (data.length) {
            const getProducts = JSON.stringify(data);
            this.products = JSON.parse(getProducts)
            this.productCategoryService.productsFiltersService(this.products);
            this.notFoundProducts = false;
          }
          else this.notFoundProducts = true;
        });
      });
    });
    this.sub4 = this.activatedRoute.params.subscribe((params) => {
      this.searchTerm = params['searchTerm'];
      if (this.searchTerm.length >= 3) {
        this.searchProductService.searchProducts(this.searchTerm.toLowerCase());
        this.searchResult = "Rezultate cautare: " + this.searchTerm;
      }
      else this.toastrService.warning("Introduceti min 3 litere!")
    });
  }

  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
    this.sub3?.unsubscribe();
    this.sub4?.unsubscribe();
  }
}
