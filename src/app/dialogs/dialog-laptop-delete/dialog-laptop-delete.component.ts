import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminLaptopComponent } from 'src/app/admin/admin-laptop/admin-laptop.component';

@Component({
  selector: 'app-dialog-laptop-delete',
  templateUrl: './dialog-laptop-delete.component.html',
  styleUrls: ['./dialog-laptop-delete.component.css']
})
export class DialogLaptopDeleteComponent {

  laptop: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: AdminLaptopComponent) {
    this.laptop = data;
  }

}
