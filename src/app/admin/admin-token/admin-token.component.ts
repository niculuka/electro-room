import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogTokenDeleteComponent } from '../../dialogs/dialog-token-delete/dialog-token-delete.component';
import { IToken, Token } from '../../shared/models/token.model';
import { AdminTokenService } from '../../shared/services/admin-token.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-token',
  templateUrl: './admin-token.component.html',
  styleUrls: ['./admin-token.component.css']
})
export class AdminTokenComponent implements OnInit, OnDestroy {

  protected tokens: Array<IToken> = [];
  protected token!: Token;
  foundTokens: boolean = false;

  @Input() activeSubtitleName: any;
  @Input() activeSubtitleUrlKey: any;

  displayedColumns: string[] = ['index', 'id', 'createdAt', 'expiresAt', 'confirmedAt', 'token', 'userIdFk', 'delete'];
  dataSource!: MatTableDataSource<IToken>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private sub0: any;
  private sub1: any;
  private sub2: any;

  constructor(
    private adminTokenService: AdminTokenService,
    private toastrService: ToastrService,
    public matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.adminTokenService.getAllTokensService().subscribe(data => {
      if (data) {
        this.tokens = data;
        this.foundTokens = true;
        this.dataSource = new MatTableDataSource(this.tokens);
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      }
      else this.foundTokens = false;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
  }

  deleteTokenDialog(token: Token) {
    const dialogRef = this.matDialog.open(DialogTokenDeleteComponent, { data: { id: token.id, token: token.token } });
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

  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
  }
}
