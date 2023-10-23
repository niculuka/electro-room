import { Component } from '@angular/core';
import { ProductFilter } from 'src/app/shared/models/product-filter.model';
import { ProductFilterService } from 'src/app/shared/services/product-filter.service';

@Component({
  selector: 'app-product-sorter',
  templateUrl: './product-sorter.component.html',
  styleUrls: ['./product-sorter.component.css']
})
export class ProductSorterComponent {

  currentCategory: string = "";

  productsFilters: Array<ProductFilter> = [];

  currentSorter: string = "bestSold";

  constructor(
    private productFilterService: ProductFilterService,
  ) {
    this.productFilterService.getProductsFiltersObservable().subscribe(data => {
      this.productsFilters = data;
    });
    this.productFilterService.getCurrentSorterObservable().subscribe(data => {
      this.currentSorter = data;
    });
  }

  closeFilter(currentFilter: any) {
    this.productsFilters = this.productsFilters.filter((item: any) => item.id != currentFilter.id);
    this.productFilterService.setProductsFiltersToLS(this.productsFilters);
  }

  clearProductsFilters() {
    this.productFilterService.clearProductsFiltersService();
  }

  productsSorters() {
    this.productFilterService.setCurrentSorterToLS(this.currentSorter);
  }

  clearCurrentSorter() {
    this.productFilterService.clearCurrentSorterService("bestSold");
  }
}
