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

  productsFilters: Array<ProductFilter> = PRODUCTS_FILTERS;

  defaultOption: string = SORTERS.BEST_SOLD;
  currentOption: string = this.defaultOption;
  productsSorters: Array<ProductSorter> = SORTERS_OPTIONS;

  private sub1: any;
  private sub2: any;

  constructor(
    private productFilterService: ProductFilterService,
  ) {
    this.sub1 = productFilterService.getProductsFiltersObservable().subscribe(data => {
      if (data.length) this.productsFilters = data;
    });
    this.sub2 = this.productFilterService.getCurrentSorterObservable().subscribe(data => {
      if (data || data.length > 0) this.currentOption = data;
      else this.currentOption = this.defaultOption;
    });
  }

  // -------------------------------------------------------------- L A B E L S - F I L T E R S
  closeFilter(cf: any) {
    this.productsFilters
      .filter((item: any) => item.filters
        .filter((res: any) => {
          if (res.id === cf.id) res.isChecked = false;
        })
      );
    this.productFilterService.changeFilterService(this.productsFilters);
  }

  isFilterChecked() {
    for (let pf of this.productsFilters) {
      let aaa: any = pf.filters.find((item: any) => item.isChecked === true);
      if (aaa) return aaa;
    }
  }

  clearProductsFilters() {
    this.productFilterService.clearProductsFiltersService();
  }

  // ---------------------------------------------------------------------------- S O R T E R S
  changeSorter() {
    this.productFilterService.changeSorterService(this.currentOption);
  }

  clearCurrentSorter() {
    this.productFilterService.clearCurrentSorterService();
  }

  ngOnDestroy(): void {
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
  }

}
