import { Component } from '@angular/core';
import { PRODUCTS_FILTERS } from 'src/app/shared/data/product-category.data';
import { ProductCategoryService } from 'src/app/shared/services/product-category.service';

@Component({
  selector: 'app-dialog-product-filter',
  templateUrl: './dialog-product-filter.component.html',
  styleUrls: ['./dialog-product-filter.component.css']
})
export class DialogProductFilterComponent {

  productsFilters = PRODUCTS_FILTERS;
  private sub: any;

  constructor(
    private productCategoryService: ProductCategoryService,
  ) {
    this.sub = productCategoryService.getProductsFiltersObservable().subscribe(data => {
      if (data.length) this.productsFilters = data;
    });
    this.productCategoryService.changeFilterService(this.productsFilters);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
