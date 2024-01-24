import { Component, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogProductFilterComponent } from 'src/app/dialogs/dialog-product-filter/dialog-product-filter.component';
import { DialogProductsSorterComponent } from 'src/app/dialogs/dialog-products-sorter/dialog-products-sorter.component';
import { SORTERS_OPTIONS } from 'src/app/shared/data/product-category.data';
import { ProductCategoryService } from 'src/app/shared/services/product-category.service';

@Component({
  selector: 'app-product-sorter',
  templateUrl: './product-sorter.component.html',
  styleUrls: ['./product-sorter.component.css']
})
export class ProductSorterComponent implements OnDestroy {

  @Input() currentCategory: string = "";
  @Input() searchResult: string = "";
  totalFoundProducts: number = 0;

  productsFilters: any = "";
  activeFilters: Array<string> = [];

  productsSorters: any = SORTERS_OPTIONS;
  currentOption: string = "";

  @Input() displayType: string = "";

  private sub0: any;
  private sub1: any;
  private sub2: any;
  private sub3: any;

  constructor(
    private productCategoryService: ProductCategoryService,
    public matDialog: MatDialog,
  ) {
    this.sub0 = productCategoryService.getProductsFiltersObservable().subscribe(data => {
      if (data.length) {
        this.productsFilters = data;
        this.activeFiltersArray();
      }
    });
    this.sub1 = this.productCategoryService.getCurrentSorterObservable().subscribe(data => {
      if (data.length > 0) this.currentOption = data;
    });
    this.sub2 = this.productCategoryService.getProductsOutObservable().subscribe(data => {
      if (data.length) this.totalFoundProducts = data.length;
    });
  }

  // --------------------------------------------------------- S E L E C T E D - F I L T E R S
  activeFiltersArray() {
    this.activeFilters = [];
    this.productsFilters
      .filter((item: any) => item.filters
        .filter((res: any) => {
          if (res.isChecked === true) this.activeFilters.push(res.value);
        })
      );
  }

  closeSelectedFilter(af: any) {
    this.productsFilters
      .filter((item: any) => item.filters
        .filter((res: any) => {
          if (res.value === af) res.isChecked = false;
        })
      );
    this.productCategoryService.changeFilterService(this.productsFilters);
  }

  clearProductsFilters() {
    this.productCategoryService.clearProductsFiltersService();
  }

  // ---------------------------------------------------------------------------- S O R T E R S
  changeSorter() {
    this.productCategoryService.changeSorterService(this.currentOption);
  }

  resetSorter() {
    this.productCategoryService.resetSorterService();
  }

  // ---------------------------------------------------------------------------- B U T T O N S
  changeDisplayType(displayType: any) {
    this.displayType = displayType;
    this.productCategoryService.changeDisplayTypeService(this.displayType);
  }

  displayFiltersDialog() {
    const dialogFilter = this.matDialog.open(DialogProductFilterComponent, { width: '100%' });
    dialogFilter.afterClosed().subscribe(res => {
      if (res === "false") this.clearProductsFilters();
    });
  }

  displaySortersDialog() {
    const dialogSorter = this.matDialog.open(DialogProductsSorterComponent, { width: '100%' });
    dialogSorter.afterClosed().subscribe(res =>
      this.productCategoryService.changeSorterService(res.data)
    )
  }

  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
    this.sub3?.unsubscribe();
  }

}
