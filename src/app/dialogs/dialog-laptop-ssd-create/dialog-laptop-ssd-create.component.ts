import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminLaptopSsdComponent } from 'src/app/admin/admin-laptop-ssd/admin-laptop-ssd.component';
import { LaptopSsdImages, LAPTOP_SSD_IMAGES } from 'src/app/shared/data/laptop-ssd-images.data';
import { LaptopSsd } from 'src/app/shared/models/laptop-ssd.model';
import { AdminLaptopSsdService } from 'src/app/shared/services/admin-laptop-ssd.service';

@Component({
  selector: 'app-dialog-laptop-ssd-create',
  templateUrl: './dialog-laptop-ssd-create.component.html',
  styleUrls: ['./dialog-laptop-ssd-create.component.css']
})
export class DialogLaptopSsdCreateComponent implements OnInit {

  protected laptopSsdImages: Array<LaptopSsdImages> = LAPTOP_SSD_IMAGES;
  newLaptopSsd: LaptopSsd = new LaptopSsd();

  errorMessage: string = "";

  handleDropdownMenu = false;
  isDropdownMenuOpen: string = "display: none;";

  constructor(
    private adminLaptopSsdService: AdminLaptopSsdService,
    @Inject(MAT_DIALOG_DATA) private data: AdminLaptopSsdComponent) {
  }

  ngOnInit(): void {
    this.newLaptopSsd.image = "assets/ssds/blank600.png";
  }

  createLaptopSsd() {
    this.newLaptopSsd.linkName = this.newLaptopSsd.name.replace(/\\|`+|~+|'+|,+|\/+|\?/g, "").replace(/\s+/g, "-").toLowerCase();    
    this.adminLaptopSsdService.createLaptopSsdService(this.newLaptopSsd).subscribe({
      next: () => {
        window.location.reload();
      },
      error: error => {
        this.errorMessage = "Could not create the Ssd!";
        console.log(error);
      }
    })
  }

  toggleDropdownMenu() {
    this.handleDropdownMenu = !this.handleDropdownMenu;
    this.checkConditions();
  }

  getImage(image: LaptopSsdImages) {
    this.newLaptopSsd.image = image.image;
    this.newLaptopSsd.src2 = image.src2;
    this.newLaptopSsd.src3 = image.src3;
    this.newLaptopSsd.src4 = image.src4;
    this.newLaptopSsd.alt = image.image.substring(12);
    this.handleDropdownMenu = false;
    this.checkConditions();
  }

  checkConditions() {
    if (this.handleDropdownMenu == true) {
      this.isDropdownMenuOpen = "display: block;"
    } else {
      this.isDropdownMenuOpen = "display: none;"
    }
  }
}
