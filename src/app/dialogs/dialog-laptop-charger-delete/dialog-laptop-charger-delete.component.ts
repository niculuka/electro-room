import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminLaptopChargerComponent } from 'src/app/admin/admin-laptop-charger/admin-laptop-charger.component';

@Component({
  selector: 'app-dialog-laptop-charger-delete',
  templateUrl: './dialog-laptop-charger-delete.component.html',
  styleUrls: ['./dialog-laptop-charger-delete.component.css']
})
export class DialogLaptopChargerDeleteComponent{

  charger!: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: AdminLaptopChargerComponent) {
    this.charger = data;
  }

}
