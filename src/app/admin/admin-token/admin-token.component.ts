import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogTokenDeleteComponent } from '../../dialogs/dialog-token-delete/dialog-token-delete.component';
import { Token } from '../../shared/models/token.model';
import { AdminTokenService } from '../../shared/services/admin-token.service';

@Component({
  selector: 'app-admin-token',
  templateUrl: './admin-token.component.html',
  styleUrls: ['./admin-token.component.css']
})
export class AdminTokenComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  protected tokens: Array<Token> = [];
  protected token!: Token;

  constructor(
    private adminTokenService: AdminTokenService,
    private toastrService: ToastrService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.adminTokenService.getAllTokensService().subscribe(data => {
      this.tokens = data;
    })
  }

  deleteTokenDialog(token: Token) {
    const dialogRef = this.matDialog.open(DialogTokenDeleteComponent, { data: token.tokenId });
    dialogRef.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.deleteToken(token)
        }
      },
      error: error => {
        this.toastrService.warning("Could not delete this token!")
      }
    })
  }

  deleteToken(token: Token) {
    this.adminTokenService.deleteTokenService(token).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.toastrService.warning("Could not delete this token!")
        console.log(err);
      }
    })
  }

}
