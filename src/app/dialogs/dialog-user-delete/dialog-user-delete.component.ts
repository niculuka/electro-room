import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminUserComponent } from '../../admin/admin-user/admin-user.component';

@Component({
  selector: 'app-dialog-user-delete',
  templateUrl: './dialog-user-delete.component.html',
  styleUrls: ['./dialog-user-delete.component.css']
})
export class DialogUserDeleteComponent implements OnInit {

  username: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: AdminUserComponent) {
    this.username = data;
  }

  ngOnInit(): void {
  }

}
