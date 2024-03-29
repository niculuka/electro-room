import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminTokenComponent } from '../../admin/admin-token/admin-token.component';

@Component({
  selector: 'app-dialog-token-delete',
  templateUrl: './dialog-token-delete.component.html',
  styleUrls: ['./dialog-token-delete.component.css']
})
export class DialogTokenDeleteComponent {

  token: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: AdminTokenComponent) {
    this.token = data;
  }

}
