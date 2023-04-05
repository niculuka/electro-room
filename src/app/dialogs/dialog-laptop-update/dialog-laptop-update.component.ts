import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminLaptopComponent } from 'src/app/admin/admin-laptop/admin-laptop.component';
import { LaptopImages, LAPTOP_IMAGES } from 'src/app/shared/data/laptop-images.data';
import { AdminLaptopService } from 'src/app/shared/services/admin-laptop.service';

@Component({
  selector: 'app-dialog-laptop-update',
  templateUrl: './dialog-laptop-update.component.html',
  styleUrls: ['./dialog-laptop-update.component.css']
})
export class DialogLaptopUpdateComponent implements OnInit {

  protected laptopImages: Array<LaptopImages> = LAPTOP_IMAGES;
  laptop: any;  

  errorMessage: string = "";

  handleDropdownMenu = false;
  isDropdownMenuOpen: string = "display: none;";

  constructor(
    private adminLaptopService: AdminLaptopService,
    @Inject(MAT_DIALOG_DATA) private data: AdminLaptopComponent
  ) {
    this.laptop = data;
  }

  ngOnInit(): void {
  }

  updateLaptop() {
    this.laptop.linkName = this.laptop.name.replace(/\\|`+|~+|'+|,+|\/+|\?/g, "").replace(/\s+/g, "-").toLowerCase();
    this.adminLaptopService.updateLaptopService(this.laptop).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.errorMessage = "Could not update laptop!";
        console.log(err);
      }
    })
  }

  toggleDropdownMenu() {
    this.handleDropdownMenu = !this.handleDropdownMenu;
    this.checkConditions();
  }  

  getImage(image: LaptopImages) {
    this.laptop.image = image.image;
    this.laptop.src2 = image.src2;
    this.laptop.src3 = image.src3;
    this.laptop.src4 = image.src4;
    this.laptop.alt = image.image.substring(15);
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