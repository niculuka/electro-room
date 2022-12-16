import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminLaptopSsdComponent } from 'src/app/admin/admin-laptop-ssd/admin-laptop-ssd.component';
import { LaptopSsdImages, LAPTOP_SSD_IMAGES } from 'src/app/shared/data/laptop-ssd-images.data';
import { AdminLaptopSsdService } from 'src/app/shared/services/admin-laptop-ssd.service';

@Component({
  selector: 'app-dialog-laptop-ssd-update',
  templateUrl: './dialog-laptop-ssd-update.component.html',
  styleUrls: ['./dialog-laptop-ssd-update.component.css']
})
export class DialogLaptopSsdUpdateComponent implements OnInit {

  protected laptopSsdImages: Array<LaptopSsdImages> = LAPTOP_SSD_IMAGES;  
  laptopSsd: any;  

  errorMessage: string = "";

  handleDropdownMenu = false;
  isDropdownMenuOpen: string = "display: none;";

  constructor(
    private adminLaptopSsdService: AdminLaptopSsdService,
    @Inject(MAT_DIALOG_DATA) private data: AdminLaptopSsdComponent
  ) {
    this.laptopSsd = data;
  }

  ngOnInit(): void {
  }

  updateLaptopSsd() {
    this.laptopSsd.linkName = this.laptopSsd.name.replace(/\\|`+|~+|'+|,+|\/+|\?/g, "").replace(/\s+/g, "-").toLowerCase();
    this.adminLaptopSsdService.updateLaptopSsdService(this.laptopSsd).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.errorMessage = "Could not update the Ssd!";
        console.log(err);
      }
    })
  }

  toggleDropdownMenu() {
    this.handleDropdownMenu = !this.handleDropdownMenu;
    this.checkConditions();
  }  

  getImage(image: LaptopSsdImages) {
    this.laptopSsd.src1 = image.src1;
    this.laptopSsd.src2 = image.src2;
    this.laptopSsd.src3 = image.src3;
    this.laptopSsd.src4 = image.src4;
    this.laptopSsd.alt = image.src1.substring(12);
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
