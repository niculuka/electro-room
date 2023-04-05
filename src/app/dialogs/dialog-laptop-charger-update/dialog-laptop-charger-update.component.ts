import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminLaptopChargerComponent } from 'src/app/admin/admin-laptop-charger/admin-laptop-charger.component';
import { LaptopChargerImages, LAPTOP_CHARGER_IMAGES } from 'src/app/shared/data/laptop-charger-images.data';
import { AdminLaptopChargerService } from 'src/app/shared/services/admin-laptop-charger.service';

@Component({
  selector: 'app-dialog-laptop-charger-update',
  templateUrl: './dialog-laptop-charger-update.component.html',
  styleUrls: ['./dialog-laptop-charger-update.component.css']
})
export class DialogLaptopChargerUpdateComponent implements OnInit {

  protected laptopChargerImages: Array<LaptopChargerImages> = LAPTOP_CHARGER_IMAGES;
  laptopCharger: any;

  errorMessage: string = "";

  handleDropdownMenu = false;
  isDropdownMenuOpen: string = "display: none;";

  constructor(
    private adminLaptopChargerService: AdminLaptopChargerService,
    @Inject(MAT_DIALOG_DATA) private data: AdminLaptopChargerComponent
  ) {
    this.laptopCharger = data;
  }

  ngOnInit(): void {
  }

  updateLaptopCharger() {
    this.laptopCharger.linkName = this.laptopCharger.name.replace(/\\|`+|~+|'+|,+|\/+|\?/g, "").replace(/\s+/g, "-").toLowerCase();
    this.adminLaptopChargerService.updateLaptopChargerService(this.laptopCharger).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.errorMessage = "Could not update the Charger!";
        console.log(err);
      }
    })
  }

  toggleDropdownMenu() {
    this.handleDropdownMenu = !this.handleDropdownMenu;
    this.checkConditions();
  }

  getImage(image: LaptopChargerImages) {
    this.laptopCharger.image = image.image;
    this.laptopCharger.src2 = image.src2;
    this.laptopCharger.src3 = image.src3;
    this.laptopCharger.src4 = image.src4;
    this.laptopCharger.alt = image.image.substring(16);
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