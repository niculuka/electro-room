import { Component } from '@angular/core';
import { PRODUCTS_FILTERS } from 'src/app/shared/data/product-filter.data';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { IProductFilter, ProductFilter } from 'src/app/shared/models/product-filter.model';
import { ProductFilterService } from 'src/app/shared/services/product-filter.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {

  productsFilter: ProductFilter = new ProductFilter();  
  productsFilters: Array<IProductFilter> = PRODUCTS_FILTERS;

  constructor(
    private productFilterService: ProductFilterService,
  ) {
    productFilterService.getProductsFiltersObservable().subscribe(data => {
      this.productsFilters = data;
      console.log(data);
    });
  }

  onChange(event: any, cf: ProductFilter) {
    let pfc: any = this.productsFilters.find((item: any) => item.value === cf.value);
    pfc.filters.find((res: any) => { if (res.id === cf.id) res.isChecked = event.target.checked; });
    this.productFilterService.setProductsFiltersToLS(this.productsFilters);
    // console.log(this.productsFilters);   
  }

  clearProductsFilters() {
    this.productFilterService.clearProductsFiltersService();
  }

}
