import { Component, OnDestroy } from '@angular/core';
import { SORTERS_OPTIONS } from 'src/app/shared/data/product-category.data';
import { SORTERS } from 'src/app/shared/enums/electro.enum';
import { ProductSorter } from 'src/app/shared/models/product-filter.model';
import { ProductCategoryService } from 'src/app/shared/services/product-category.service';

@Component({
  selector: 'app-dialog-products-sorter',
  templateUrl: './dialog-products-sorter.component.html',
  styleUrls: ['./dialog-products-sorter.component.css']
})
export class DialogProductsSorterComponent implements OnDestroy {  

  defaultOption: string = SORTERS.BEST_SOLD;
  currentOption: string = this.defaultOption;
  productsSorters: Array<ProductSorter> = SORTERS_OPTIONS;

  sub: any;

  constructor(
    private productCategoryService: ProductCategoryService,
  ) {
    this.sub = this.productCategoryService.getCurrentSorterObservable().subscribe(data => {
      if (data || data.length > 0) this.currentOption = data;
      else this.currentOption = this.defaultOption;
    });
  }

  changeSorter() {
    this.productCategoryService.changeSorterService(this.currentOption);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
