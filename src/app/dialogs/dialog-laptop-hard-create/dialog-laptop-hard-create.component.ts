import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminLaptopHardComponent } from 'src/app/admin/admin-laptop-hard/admin-laptop-hard.component';
import { LAPTOP_HARD_IMAGES, LaptopHardImages } from 'src/app/shared/data/laptop-ssd-images.data';
import { Product } from 'src/app/shared/models/product.model';
import { AdminLaptopHardService } from 'src/app/shared/services/admin-laptop-hard.service';

@Component({
  selector: 'app-dialog-laptop-hard-create',
  templateUrl: './dialog-laptop-hard-create.component.html',
  styleUrls: ['./dialog-laptop-hard-create.component.css']
})
export class DialogLaptopHardCreateComponent implements OnInit {

  protected laptopHardImages: Array<LaptopHardImages> = LAPTOP_HARD_IMAGES;
  newLaptopHard: Product = new Product();

  errorMessage: string = "";

  handleDropdownMenu = false;
  isDropdownMenuOpen: string = "display: none;";

  constructor(
    private adminLaptopHardService: AdminLaptopHardService,
    @Inject(MAT_DIALOG_DATA) private data: AdminLaptopHardComponent) {
  }

  ngOnInit(): void {
    this.newLaptopHard.image = "assets/hards/blank600.png";
  }

  createLaptopHard() {
    this.newLaptopHard.linkName = this.newLaptopHard.name.replace(/\\|`+|~+|'+|,+|\/+|\?/g, "").replace(/\s+/g, "-").toLowerCase();    
    this.adminLaptopHardService.createLaptopHardService(this.newLaptopHard).subscribe({
      next: () => {
        window.location.reload();
      },
      error: error => {
        this.errorMessage = "Could not create the Hard!";
        console.log(error);
      }
    })
  }

  toggleDropdownMenu() {
    this.handleDropdownMenu = !this.handleDropdownMenu;
    this.checkConditions();
  }

  getImage(image: LaptopHardImages) {
    this.newLaptopHard.image = image.image;
    this.newLaptopHard.alt = image.image.substring(12);
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
