import { Component } from '@angular/core';
import { ProductFilter } from 'src/app/shared/models/product-filter.model';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-sorter',
  templateUrl: './product-sorter.component.html',
  styleUrls: ['./product-sorter.component.css']
})
export class ProductSorterComponent {

  protected products: Array<Product> = [];

  filterNames: Array<ProductFilter> = [];
  currentCategory: string = "";

  products_sorting: string = "bestSold";

  sorting() {
    if (this.products_sorting === "name") this.name_alphabetic();
    if (this.products_sorting === "lowToHigh") this.price_ascending();
    if (this.products_sorting === "highToLow") this.price_descending();
    if (this.products_sorting === "bestSold") this.sold();
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
