import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { AdminDemoService } from 'src/app/shared/services/admin-demo.service';

@Component({
  selector: 'app-admin-demo-charger',
  templateUrl: './admin-demo-charger.component.html',
  styleUrls: ['./admin-demo-charger.component.css']
})
export class AdminDemoChargerComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = true;

  protected chargers: Array<Product> = [];
  protected charger: Product = new Product();

  errorMessage: string = "";

  constructor(
    private adminDemoService: AdminDemoService,
  ) { }

  ngOnInit(): void {
    this.adminDemoService.getAllDemoChargersService().subscribe(data => {
      this.chargers = data;
    });
  }

  noAction() {
    alert("Esti in DEMO-MODE. Pentru acces complet, contacteaza proprietarul!")
  }
}
