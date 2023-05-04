import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminLaptopBagComponent } from 'src/app/admin/admin-laptop-bag/admin-laptop-bag.component';
import { LaptopBagImages, LAPTOP_BAG_IMAGES } from 'src/app/shared/data/laptop-bag-images.data';
import { AdminLaptopBagService } from 'src/app/shared/services/admin-laptop-bag.service';

@Component({
  selector: 'app-dialog-laptop-bag-update',
  templateUrl: './dialog-laptop-bag-update.component.html',
  styleUrls: ['./dialog-laptop-bag-update.component.css']
})
export class DialogLaptopBagUpdateComponent implements OnInit {

  protected laptopBagImages: Array<LaptopBagImages> = LAPTOP_BAG_IMAGES;  
  laptopBag: any;  

  errorMessage: string = "";

  handleDropdownMenu = false;
  isDropdownMenuOpen: string = "display: none;";

  constructor(
    private adminLaptopBagService: AdminLaptopBagService,
    @Inject(MAT_DIALOG_DATA) private data: AdminLaptopBagComponent
  ) {
    this.laptopBag = data;
  }

  ngOnInit(): void {
  }

  updateLaptopBag() {
    this.laptopBag.linkName = this.laptopBag.name.replace(/\\|`+|~+|'+|,+|\/+|\?/g, "").replace(/\s+/g, "-").toLowerCase();
    this.adminLaptopBagService.updateLaptopBagService(this.laptopBag).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.errorMessage = "Could not update the Bag!";
        console.log(err);
      }
    })
  }

  toggleDropdownMenu() {
    this.handleDropdownMenu = !this.handleDropdownMenu;
    this.checkConditions();
  }  

  getImage(image: LaptopBagImages) {
    this.laptopBag.image = image.image;
    this.laptopBag.src2 = image.src2;
    this.laptopBag.src3 = image.src3;
    this.laptopBag.src4 = image.src4;
    this.laptopBag.alt = image.image.substring(12);
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