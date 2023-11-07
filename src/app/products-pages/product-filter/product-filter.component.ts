import { Component, OnDestroy } from '@angular/core';
import { PRODUCTS_FILTERS } from 'src/app/shared/data/product-category.data';
import { ProductFilter } from 'src/app/shared/models/product-filter.model';
import { ProductCategoryService } from 'src/app/shared/services/product-category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnDestroy {

  productsFilters: Array<ProductFilter> = PRODUCTS_FILTERS;
  private sub: any;

  constructor(
    private productCategoryService: ProductCategoryService,
  ) {
    this.refreshProductsFilters();
    this.sub = productCategoryService.getProductsFiltersObservable().subscribe(data => {
      if (data.length) this.productsFilters = data;
      // console.log(this.productsFilters);
    });
    this.productCategoryService.changeFilterService(this.productsFilters);
  }

  isAnyFilterChecked() {
    for (let pf of this.productsFilters) {
      let aaa: any = pf.filters.find((item: any) => item.isChecked === true);
      if (aaa) return aaa;
    }
  }

  changeFilters($event: any) {
    this.productsFilters
      .filter((item: any) => item.filters
        .filter((res: any) => {
          if (res.id == $event.target.id) res.isChecked = $event.target.checked;
        })
      );
    this.productCategoryService.changeFilterService(this.productsFilters);
  }

  clearProductsFilters() {
    this.productCategoryService.clearProductsFiltersService();
  }

  refreshProductsFilters() {
    this.productCategoryService.refreshProductsFiltersService();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
