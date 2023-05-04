import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminLaptopHardComponent } from 'src/app/admin/admin-laptop-hard/admin-laptop-hard.component';

@Component({
  selector: 'app-dialog-laptop-hard-delete',
  templateUrl: './dialog-laptop-hard-delete.component.html',
  styleUrls: ['./dialog-laptop-hard-delete.component.css']
})
export class DialogLaptopHardDeleteComponent {

  hard: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: AdminLaptopHardComponent) {
    this.hard = data;
  }

}