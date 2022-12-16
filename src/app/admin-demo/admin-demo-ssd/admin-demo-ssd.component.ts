import { Component, OnInit } from '@angular/core';
import { LaptopSsd } from 'src/app/shared/models/laptop-ssd.model';
import { AdminDemoService } from 'src/app/shared/services/admin-demo.service';

@Component({
  selector: 'app-admin-demo-ssd',
  templateUrl: './admin-demo-ssd.component.html',
  styleUrls: ['./admin-demo-ssd.component.css']
})
export class AdminDemoSsdComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = true;

  protected ssds: Array<LaptopSsd> = [];
  protected ssd: LaptopSsd = new LaptopSsd();

  errorMessage: string = "";

  constructor(
    private adminDemoService: AdminDemoService,
  ) { }

  ngOnInit(): void {
    this.adminDemoService.getAllDemoSsdsService().subscribe(data => {
      this.ssds = data;
    });
  }

  noAction() {
    alert("Esti in DEMO-MODE. Pentru acces complet, contacteaza proprietarul!")
  }

}
