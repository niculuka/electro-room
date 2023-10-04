import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { STORES, Stores } from 'src/app/shared/data/store.data';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent {

  protected stores: Array<Stores> = STORES;
  currentStore: any;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      let storeName = params.get('storeName') || "";

      for (let store of this.stores) {
        if ( storeName === store.linkName) {
          this.currentStore = store;
        }
      }      
    });
  }
}
