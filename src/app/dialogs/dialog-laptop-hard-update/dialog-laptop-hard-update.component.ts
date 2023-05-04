import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminLaptopHardComponent } from 'src/app/admin/admin-laptop-hard/admin-laptop-hard.component';
import { LAPTOP_HARD_IMAGES, LaptopHardImages } from 'src/app/shared/data/laptop-ssd-images.data';
import { AdminLaptopHardService } from 'src/app/shared/services/admin-laptop-hard.service';

@Component({
  selector: 'app-dialog-laptop-hard-update',
  templateUrl: './dialog-laptop-hard-update.component.html',
  styleUrls: ['./dialog-laptop-hard-update.component.css']
})
export class DialogLaptopHardUpdateComponent implements OnInit {

  protected laptopHardImages: Array<LaptopHardImages> = LAPTOP_HARD_IMAGES;  
  laptopHard: any;  

  errorMessage: string = "";

  handleDropdownMenu = false;
  isDropdownMenuOpen: string = "display: none;";

  constructor(
    private adminLaptopHardService: AdminLaptopHardService,
    @Inject(MAT_DIALOG_DATA) private data: AdminLaptopHardComponent
  ) {
    this.laptopHard = data;
  }

  ngOnInit(): void {
  }

  updateLaptopHard() {
    this.laptopHard.linkName = this.laptopHard.name.replace(/\\|`+|~+|'+|,+|\/+|\?/g, "").replace(/\s+/g, "-").toLowerCase();
    this.adminLaptopHardService.updateLaptopHardService(this.laptopHard).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.errorMessage = "Could not update the Hard!";
        console.log(err);
      }
    })
  }

  toggleDropdownMenu() {
    this.handleDropdownMenu = !this.handleDropdownMenu;
    this.checkConditions();
  }  

  getImage(image: LaptopHardImages) {
    this.laptopHard.image = image.image;
    this.laptopHard.src2 = image.src2;
    this.laptopHard.src3 = image.src3;
    this.laptopHard.src4 = image.src4;
    this.laptopHard.alt = image.image.substring(12);
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
