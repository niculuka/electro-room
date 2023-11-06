import { Component, Input, OnDestroy } from '@angular/core';
import { PRODUCTS_FILTERS, SORTERS_OPTIONS } from 'src/app/shared/data/product-filter.data';
import { SORTERS } from 'src/app/shared/enums/electro.enum';
import { ProductFilter, ProductSorter } from 'src/app/shared/models/product-filter.model';
import { ProductFilterService } from 'src/app/shared/services/product-filter.service';

@Component({
  selector: 'app-product-sorter',
  templateUrl: './product-sorter.component.html',
  styleUrls: ['./product-sorter.component.css']
})
export class ProductSorterComponent implements OnDestroy {

  @Input() currentCategory: string = "";
  totalFoundProducts: number = 0;

  productsFilters: Array<ProductFilter> = PRODUCTS_FILTERS;
  activeFilters: Array<string> = [];

  defaultOption: string = SORTERS.BEST_SOLD;
  currentOption: string = this.defaultOption;
  productsSorters: Array<ProductSorter> = SORTERS_OPTIONS;

  private sub0: any;
  private sub1: any;
  private sub2: any;

  constructor(
    private productFilterService: ProductFilterService,
  ) {
    this.sub1 = productFilterService.getProductsFiltersObservable().subscribe(data => {
      if (data.length) {
        this.productsFilters = data;
        this.activeFiltersArray();
      }
    });
    this.sub2 = this.productFilterService.getCurrentSorterObservable().subscribe(data => {
      if (data || data.length > 0) this.currentOption = data;
      else this.currentOption = this.defaultOption;
    });
    this.sub0 = this.productFilterService.getProductsOutObservable().subscribe(data => {
      if (data.length) this.totalFoundProducts = data.length;
    });
  }

  // -------------------------------------------------------------- L A B E L S - F I L T E R S
  activeFiltersArray() {
    this.activeFilters = [];
    this.productsFilters
      .filter((item: any) => item.filters
        .filter((res: any) => {
          if (res.isChecked === true) this.activeFilters.push(res.labelName);
        })
      );
  }

  closeSelectedFilter(af: any) {
    this.productsFilters
      .filter((item: any) => item.filters
        .filter((res: any) => {
          if (res.labelName === af) res.isChecked = false;
        })
      );
    this.productFilterService.changeFilterService(this.productsFilters);
  }

  clearProductsFilters() {
    this.productFilterService.clearProductsFiltersService();
  }

  // ---------------------------------------------------------------------------- S O R T E R S
  changeSorter() {
    this.productFilterService.changeSorterService(this.currentOption);
  }

  resetSorter() {
    this.productFilterService.resetSorterService();
  }

  ngOnDestroy(): void {
    // this.sub0?.unsubscribe();
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
  }

}
