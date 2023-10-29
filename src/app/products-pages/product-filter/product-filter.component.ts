import { Component, Input } from '@angular/core';
import { PRODUCTS_FILTERS } from 'src/app/shared/data/product-filter.data';
import { ProductFilterArray } from 'src/app/shared/models/product-filter.model';
import { ProductFilterService } from 'src/app/shared/services/product-filter.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {

  productsFilters: Array<ProductFilterArray> = PRODUCTS_FILTERS;

  constructor(
    private productFilterService: ProductFilterService,
  ) {
    productFilterService.getProductsFiltersObservable().subscribe(data => {
      if (data.length) this.productsFilters = data;
      console.log(this.productsFilters);
    });
  }

  changeFilters(event: any) {
    this.productsFilters
      .filter((item: any) => item.filters
        .filter((res: any) => {
          if (res.id == event.target.id) res.isChecked = event.target.checked;
        }
        ));
    this.productFilterService.changeFiltersService(this.productsFilters);
    // console.log(this.productsFilters);
  }

  clearProductsFilters() {
    this.productFilterService.clearProductsFiltersService();
  }

}
