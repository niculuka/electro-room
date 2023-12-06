import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Product, ProductSpecification } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { CompareService } from 'src/app/shared/services/compare.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent {

  compares!: Array<Product>;

  specification: ProductSpecification = new ProductSpecification();
  specifications: Array<ProductSpecification> = [];  

  private sub: any;

  constructor(
    private cartService: CartService,
    private compareService: CompareService,
    private location: Location,
  ) {
    this.sub = compareService.getComparesObservable().subscribe(comp => {
      this.compares = comp;
      for (let product of this.compares) {
        this.specifications = this.specifications.concat(product.specifications);
      }
      this.isSpecificationsEmpty();
    });
  }

  titles:any =  {display: null, general: null}

  isSpecificationsEmpty() {    
    this.specifications.find(item => {
      if (item.display_size) this.specification.display_size = item.display_size;
      if (item.display_frequency) this.specification.display_frequency = item.display_frequency;
      if (item.display_touch) this.specification.display_touch = item.display_touch;

      if (item.type) this.specification.type = item.type;
      if (item.power) this.specification.power = item.power;      
      if (item.output) this.specification.output = item.output;
    })
    if (this.specification.display_size || this.specification.display_frequency || this.specification.display_touch) {
      this.titles.display = "E C R A N";
      return this.titles.display ;
    }
    if (this.specification.type || this.specification.power || this.specification.output) {
      this.titles.general = "C A R A C T E R I S T I C I - G E N E R A L E";
      return this.titles.general;
    }
    // console.log(this.specification) 
    return this.specification;
  }

  addToCart(product: Product) {
    this.cartService.addToCartService(product);
  }

  removeFromCompare(product: Product) {
    this.compareService.removeFromComparesService(product);
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
