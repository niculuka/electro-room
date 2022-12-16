import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminLaptopBagComponent } from 'src/app/admin/admin-laptop-bag/admin-laptop-bag.component';

@Component({
  selector: 'app-dialog-laptop-bag-delete',
  templateUrl: './dialog-laptop-bag-delete.component.html',
  styleUrls: ['./dialog-laptop-bag-delete.component.css']
})
export class DialogLaptopBagDeleteComponent {

  bag: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: AdminLaptopBagComponent) {
    this.bag = data;
  }

}
