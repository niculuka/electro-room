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

  isDisabled: boolean = false;
  changeBackground = '#c7005a';

  private sub: any;

  constructor(
    private compareService: CompareService,
    private router: Router,
    private toastrService: ToastrService,
  ) {
    this.sub = compareService.getComparesObservable().subscribe(comp => {
      this.compares = comp;
      if (this.compares.length >= 2) this.isDisabled = true;
      else this.isDisabled = false;
      this.overButton();
      this.outButton();
    })
  }

  isCompareEmpty() {
    return this.compares.length === 0;
  }

  goToCompare() {
    if (this.compares.length >= 2) this.router.navigate(['/compare']);
    else this.toastrService.warning('Selectati minim 2 produse')
  }

  overButton() {
    if (this.isDisabled) this.changeBackground = '#c7005a';
    else this.changeBackground = '#b4b4b4';
  }

  outButton() {
    if (this.isDisabled) this.changeBackground = '#dc146e';
    else this.changeBackground = '#b4b4b4';
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