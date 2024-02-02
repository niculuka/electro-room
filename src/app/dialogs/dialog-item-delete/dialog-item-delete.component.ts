import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminItemComponent } from '../../admin/admin-item/admin-item.component';

@Component({
  selector: 'app-dialog-item-delete',
  templateUrl: './dialog-item-delete.component.html',
  styleUrls: ['./dialog-item-delete.component.css']
})
export class DialogItemDeleteComponent {

  item: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: AdminItemComponent) {
    this.item = data;
  }

}
