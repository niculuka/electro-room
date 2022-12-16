import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminLaptopSsdComponent } from 'src/app/admin/admin-laptop-ssd/admin-laptop-ssd.component';

@Component({
  selector: 'app-dialog-laptop-ssd-delete',
  templateUrl: './dialog-laptop-ssd-delete.component.html',
  styleUrls: ['./dialog-laptop-ssd-delete.component.css']
})
export class DialogLaptopSsdDeleteComponent {

  ssd: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: AdminLaptopSsdComponent) {
    this.ssd = data;
  }

}