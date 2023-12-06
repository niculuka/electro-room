import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';
import { CompareService } from 'src/app/shared/services/compare.service';

@Component({
  selector: 'app-compare-nav',
  templateUrl: './compare-nav.component.html',
  styleUrls: ['./compare-nav.component.css']
})
export class CompareNavComponent implements OnDestroy{
  
  compares!: Array<Product>;

  private sub: any;

  constructor(
    private compareService: CompareService,
  ) {
    this.sub = compareService.getComparesObservable().subscribe(comp => {
      this.compares = comp;
    })
  }  

  isCompareEmpty() {
    return this.compares.length === 0;
  }

  removeFromCompare(product: Product) {
    this.compareService.removeFromComparesService(product);
  }

  clearCompare() {
    this.compareService.clearComparesService();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
