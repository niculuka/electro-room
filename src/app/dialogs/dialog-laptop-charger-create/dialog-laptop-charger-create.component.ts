import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminLaptopChargerComponent } from 'src/app/admin/admin-laptop-charger/admin-laptop-charger.component';
import { LaptopChargerImages, LAPTOP_CHARGER_IMAGES } from 'src/app/shared/data/laptop-charger-images.data';
import { LaptopCharger } from 'src/app/shared/models/laptop-charger.model';
import { AdminLaptopChargerService } from 'src/app/shared/services/admin-laptop-charger.service';

@Component({
  selector: 'app-dialog-laptop-charger-create',
  templateUrl: './dialog-laptop-charger-create.component.html',
  styleUrls: ['./dialog-laptop-charger-create.component.css']
})
export class DialogLaptopChargerCreateComponent implements OnInit {

  protected laptopChargerImages: Array<LaptopChargerImages> = LAPTOP_CHARGER_IMAGES;
  protected laptopChargers: Array<LaptopCharger> = [];
  newLaptopCharger: LaptopCharger = new LaptopCharger();

  errorMessage: string = "";

  handleDropdownMenu = false;
  isDropdownMenuOpen: string = "display: none;";

  constructor(
    private adminLaptopChargerService: AdminLaptopChargerService,
    @Inject(MAT_DIALOG_DATA) private data: AdminLaptopChargerComponent) {
  }

  ngOnInit(): void {
    this.newLaptopCharger.image = "assets/chargers/blank600.png";
  }

  createLaptopCharger() {
    this.newLaptopCharger.linkName = this.newLaptopCharger.name.replace(/\\|`+|~+|'+|,+|\/+|\?/g, "").replace(/\s+/g, "-").toLowerCase();    
    this.adminLaptopChargerService.createLaptopChargerService(this.newLaptopCharger).subscribe({
      next: () => {
        window.location.reload();
      },
      error: error => {
        this.errorMessage = "Could not create the Charger!";
        console.log(error);
      }
    })
  }

  toggleDropdownMenu() {
    this.handleDropdownMenu = !this.handleDropdownMenu;
    this.checkConditions();
  }

  getImage(image: LaptopChargerImages) {
    this.newLaptopCharger.image = image.image;
    this.newLaptopCharger.src2 = image.src2;
    this.newLaptopCharger.src3 = image.src3;
    this.newLaptopCharger.src4 = image.src4;
    this.newLaptopCharger.alt = image.image.substring(16);
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
