import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { AdminDemoService } from 'src/app/shared/services/admin-demo.service';

@Component({
  selector: 'app-admin-demo-laptop',
  templateUrl: './admin-demo-laptop.component.html',
  styleUrls: ['./admin-demo-laptop.component.css']
})
export class AdminDemoLaptopComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = true;

  protected laptops: Array<Product> = [];
  protected laptop: Product = new Product();

  errorMessage: string = "";

  constructor(
    private adminDemoService: AdminDemoService,
  ) { }

  ngOnInit(): void {
    this.adminDemoService.getAllDemoLaptopsService().subscribe(data => {
      this.laptops = data;
    });
  }

  noAction() {
    alert("Esti in DEMO-MODE. Pentru acces complet, contacteaza proprietarul!")
  }
}
