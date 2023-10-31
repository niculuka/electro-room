import { Component, OnDestroy } from '@angular/core';
import { PRODUCTS_FILTERS } from 'src/app/shared/data/product-filter.data';
import { ProductFilter } from 'src/app/shared/models/product-filter.model';
import { ProductFilterService } from 'src/app/shared/services/product-filter.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnDestroy {

  productsFilters: Array<ProductFilter> = PRODUCTS_FILTERS;
  private sub: any;

  constructor(
    private productFilterService: ProductFilterService,
  ) {
    this.refreshProductsFilters();
    this.sub = productFilterService.getProductsFiltersObservable().subscribe(data => {
      if (data.length) this.productsFilters = data;
      // console.log(this.productsFilters);
    });
    this.productFilterService.changeFilterService(this.productsFilters);
  }  

  changeFilters($event: any) {
    this.productsFilters
      .filter((item: any) => item.filters
        .filter((res: any) => {
          if (res.id == $event.target.id) res.isChecked = $event.target.checked;
        })
      );
    this.productFilterService.changeFilterService(this.productsFilters);
  }

  clearProductsFilters() {
    this.productFilterService.clearProductsFiltersService();
  }

  refreshProductsFilters() {
    this.productFilterService.refreshProductsFiltersService();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
