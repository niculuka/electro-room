import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { AdminDemoService } from 'src/app/shared/services/admin-demo.service';

@Component({
  selector: 'app-admin-demo-bag',
  templateUrl: './admin-demo-bag.component.html',
  styleUrls: ['./admin-demo-bag.component.css']
})
export class AdminDemoBagComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = true;

  protected bags: Array<Product> = [];
  protected bag: Product = new Product();

  errorMessage: string = "";

  constructor(
    private adminDemoService: AdminDemoService,
  ) { }

  ngOnInit(): void {
    this.adminDemoService.getAllDemoBagsService().subscribe(data => {
      this.bags = data;
    });
  }

  noAction() {
    alert("Esti in DEMO-MODE. Pentru acces complet, contacteaza proprietarul!")
  }
}
