import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { AdminDemoService } from 'src/app/shared/services/admin-demo.service';

@Component({
  selector: 'app-admin-demo-hard',
  templateUrl: './admin-demo-hard.component.html',
  styleUrls: ['./admin-demo-hard.component.css']
})
export class AdminDemoHardComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = true;

  protected hards: Array<Product> = [];
  protected hard: Product = new Product();

  errorMessage: string = "";

  constructor(
    private adminDemoService: AdminDemoService,
  ) { }

  ngOnInit(): void {
    this.adminDemoService.getAllDemoHardsService().subscribe(data => {
      this.hards = data;
    });
  }

  noAction() {
    alert("Esti in DEMO-MODE. Pentru acces complet, contacteaza proprietarul!")
  }

}
