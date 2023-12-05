import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';
import { CompareService } from 'src/app/shared/services/compare.service';

@Component({
  selector: 'app-compare-nav',
  templateUrl: './compare-nav.component.html',
  styleUrls: ['./compare-nav.component.css']
})
export class CompareNavComponent {
  compares!: Array<Product>;

  constructor(
    private compareService: CompareService,
    private router: Router,
  ) {
    compareService.getComparesObservable().subscribe(comp => {
      this.compares = comp;
    })
  }

  removeFromCompare(product: Product) {
    this.compareService.removeFromComparesService(product);
  }

}
