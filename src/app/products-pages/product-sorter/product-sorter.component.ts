import { Component } from '@angular/core';
import { ProductFilter } from 'src/app/shared/models/product-filter.model';
import { Product } from 'src/app/shared/models/product.model';
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

  protected products: Array<Product> = [];

  constructor(
    private productFilterService: ProductFilterService,
  ) {
    this.productFilterService.getProductsFiltersObservable().subscribe(data => {
      this.productsFilters = data
      // console.log(this.filterNames) 
    });    
  }

  closeFilter(currentFilter: any) {
    this.productsFilters = this.productsFilters.filter((item: any) => item.id != currentFilter.id);
    this.productFilterService.setProductsFiltersToLS(this.productsFilters);
  }

  clearProductsFilters() {
    this.productFilterService.clearProductsFiltersService();
  }

  sorting() {
    if (this.currentSorter === "name") this.name_alphabetic();
    if (this.currentSorter === "lowToHigh") this.price_ascending();
    if (this.currentSorter === "highToLow") this.price_descending();
    if (this.currentSorter === "bestSold") this.sold();
  }

  // ------------------------------------------------------------- S o r t i n g
  name_alphabetic() {
    this.products = this.products.sort((a, b) => {
      const nameA = a.brand.toUpperCase();
      const nameB = b.brand.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

  price_ascending() {
    this.products = this.products.sort((a, b) => a.price - b.price);
  }

  price_descending() {
    this.products = this.products.sort((a, b) => b.price - a.price);
  }

  sold() {
    this.products = this.products.sort((a: any, b: any) => a.id - b.id);
  }

  

}
