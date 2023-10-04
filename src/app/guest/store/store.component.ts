import { Component } from '@angular/core';
import { STORES, Stores } from 'src/app/shared/data/store.data';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent{

  protected stores: Array<Stores> = STORES;

  constructor(
    
  ) { }

  
}
