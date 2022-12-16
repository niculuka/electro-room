import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminLaptopBagComponent } from 'src/app/admin/admin-laptop-bag/admin-laptop-bag.component';
import { LaptopBagImages, LAPTOP_BAG_IMAGES } from 'src/app/shared/data/laptop-bag-images.data';
import { LaptopBag } from 'src/app/shared/models/laptop-bag.model';
import { AdminLaptopBagService } from 'src/app/shared/services/admin-laptop-bag.service';

@Component({
  selector: 'app-dialog-laptop-bag-create',
  templateUrl: './dialog-laptop-bag-create.component.html',
  styleUrls: ['./dialog-laptop-bag-create.component.css']
})
export class DialogLaptopBagCreateComponent implements OnInit {

  protected laptopBagImages: Array<LaptopBagImages> = LAPTOP_BAG_IMAGES;
  protected laptopBags: Array<LaptopBag> = [];
  newLaptopBag: LaptopBag = new LaptopBag();

  errorMessage: string = "";

  handleDropdownMenu = false;
  isDropdownMenuOpen: string = "display: none;";

  constructor(
    private adminLaptopBagService: AdminLaptopBagService,
    @Inject(MAT_DIALOG_DATA) private data: AdminLaptopBagComponent) {
  }

  ngOnInit(): void {
    this.newLaptopBag.src1 = "assets/bags/blank600.png";
  }

  createLaptopBag() {
    this.newLaptopBag.linkName = this.newLaptopBag.name.replace(/\\|`+|~+|'+|,+|\/+|\?/g, "").replace(/\s+/g, "-").toLowerCase();    
    this.adminLaptopBagService.createLaptopBagService(this.newLaptopBag).subscribe({
      next: () => {
        window.location.reload();
      },
      error: error => {
        this.errorMessage = "Could not create the Bag!";
        console.log(error);
      }
    })
  }

  toggleDropdownMenu() {
    this.handleDropdownMenu = !this.handleDropdownMenu;
    this.checkConditions();
  }

  getImage(image: LaptopBagImages) {
    this.newLaptopBag.src1 = image.src1;
    this.newLaptopBag.src2 = image.src2;
    this.newLaptopBag.src3 = image.src3;
    this.newLaptopBag.src4 = image.src4;
    this.newLaptopBag.alt = image.src1.substring(12);
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
