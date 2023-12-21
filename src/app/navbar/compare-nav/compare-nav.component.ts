import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/models/product.model';
import { CompareService } from 'src/app/shared/services/compare.service';

@Component({
  selector: 'app-compare-nav',
  templateUrl: './compare-nav.component.html',
  styleUrls: ['./compare-nav.component.css']
})
export class CompareNavComponent implements OnDestroy {

  compares!: Array<Product>;
  compareUrl: string = '/compare';

  private sub: any;

  constructor(
    private compareService: CompareService,
    private router: Router,
    private toastrService: ToastrService,
  ) {
    this.sub = compareService.getComparesObservable().subscribe(comp => {
      this.compares = comp;
    })
  }

  isCompareEmpty() {
    return this.compares.length === 0;
  }

  goToCompare() {
    if (this.compares.length >= 2) {
      this.router.navigate(['/compare']);
    }
    else {
      this.toastrService.warning('Selectati minim 2 produse')
    }

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