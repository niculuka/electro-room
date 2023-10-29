import { Component, Input } from '@angular/core';
import { PRODUCTS_FILTERS } from 'src/app/shared/data/product-filter.data';
import { SORTER_SELECT } from 'src/app/shared/enums/electro.enum';
import {  ProductSorter, SORTERS_OPTIONS } from 'src/app/shared/models/product-filter.model';
import { ProductFilterService } from 'src/app/shared/services/product-filter.service';

@Component({
  selector: 'app-product-sorter',
  templateUrl: './product-sorter.component.html',
  styleUrls: ['./product-sorter.component.css']
})
export class ProductSorterComponent{ 

  // @Input() currentCategory: string = "";  

  // @Input() productsFilters: Array<IProductFilter> = PRODUCTS_FILTERS;

  // defaultOption: string = SORTER_SELECT.BEST_SOLD;
  // currentOption: string = this.defaultOption;
  // sortersOptions: Array<ProductSorter> = SORTERS_OPTIONS;

  // constructor(
  //   private productFilterService: ProductFilterService,
  // ) {
  //   this.check();
  //   //   this.productFilterService.getCurrentSorterObservable().subscribe(data => {
  //   //     if (data) {
  //   //       this.currentOption = data;
  //   //     }
  //   //   });
  // }

  // closeCurrentFilter(cf: any) {
  //   let pfc: any = this.productsFilters.find((item: any) => item.value === cf.value);
  //   pfc.filters.find((res: any) => { if (res.id === cf.id) res.isChecked = false; });
  //   // console.log(this.productsFilters)
  //   this.productFilterService.setProductsFiltersToLS(this.productsFilters);
  // }

  // check() {
  //   for (let pf of this.productsFilters) {
  //     let aaa: any = pf.filters.find((item: any) => item.isChecked === true);
  //     if (aaa) return aaa;
  //   }
  // }

  // clearProductsFilters() {
  //   this.productFilterService.clearProductsFiltersService();
  // }

  // productsSorters() {
  //   // this.productFilterService.setCurrentSorterToLS(this.currentOption);
  // }

  // clearCurrentSorter() {
  //   // this.productFilterService.clearCurrentSorterService(this.defaultOption);
  // }
}
