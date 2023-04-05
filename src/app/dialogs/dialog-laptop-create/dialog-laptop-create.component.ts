import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminLaptopComponent } from 'src/app/admin/admin-laptop/admin-laptop.component';
import { LaptopImages, LAPTOP_IMAGES } from 'src/app/shared/data/laptop-images.data';
import { Laptop } from 'src/app/shared/models/laptop.model';
import { AdminLaptopService } from 'src/app/shared/services/admin-laptop.service';

@Component({
  selector: 'app-dialog-laptop-create',
  templateUrl: './dialog-laptop-create.component.html',
  styleUrls: ['./dialog-laptop-create.component.css']
})
export class DialogLaptopCreateComponent implements OnInit {

  protected laptopImages: Array<LaptopImages> = LAPTOP_IMAGES;
  newLaptop: Laptop = new Laptop();

  errorMessage: string = "";

  handleDropdownMenu = false;
  isDropdownMenuOpen: string = "display: none;";

  constructor(
    private adminLaptopService: AdminLaptopService,
    @Inject(MAT_DIALOG_DATA) private data: AdminLaptopComponent) {
  }

  ngOnInit(): void {
    this.newLaptop.image = "assets/laptops/blank600.png";
  }

  createLaptop() {
    this.newLaptop.linkName = this.newLaptop.name.replace(/\\|`+|~+|'+|,+|\/+|\?/g, "").replace(/\s+/g, "-").toLowerCase();    
    this.adminLaptopService.createLaptopService(this.newLaptop).subscribe({
      next: () => {
        window.location.reload();
      },
      error: error => {
        this.errorMessage = "Could not create the laptop!";
        console.log(error);
      }
    })
  }

  toggleDropdownMenu() {
    this.handleDropdownMenu = !this.handleDropdownMenu;
    this.checkConditions();
  }

  getImage(image: LaptopImages) {
    this.newLaptop.image = image.image;
    this.newLaptop.src2 = image.src2;
    this.newLaptop.src3 = image.src3;
    this.newLaptop.src4 = image.src4;
    this.newLaptop.alt = image.image.substring(15);
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
