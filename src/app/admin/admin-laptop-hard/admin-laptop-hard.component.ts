import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DialogLaptopHardCreateComponent } from 'src/app/dialogs/dialog-laptop-hard-create/dialog-laptop-hard-create.component';
import { DialogLaptopHardDeleteComponent } from 'src/app/dialogs/dialog-laptop-hard-delete/dialog-laptop-hard-delete.component';
import { DialogLaptopHardUpdateComponent } from 'src/app/dialogs/dialog-laptop-hard-update/dialog-laptop-hard-update.component';
import { Product } from 'src/app/shared/models/product.model';
import { AdminLaptopHardService } from 'src/app/shared/services/admin-laptop-hard.service';

@Component({
  selector: 'app-admin-laptop-hard',
  templateUrl: './admin-laptop-hard.component.html',
  styleUrls: ['./admin-laptop-hard.component.css']
})
export class AdminLaptopHardComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = true;

  protected hards: Array<Product> = [];
  protected hard: Product = new Product();

  errorMessage: string = "";

  constructor(
    private adminHardService: AdminLaptopHardService,
    private router: Router,
    private toastrService: ToastrService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.adminHardService.getAllLaptopHardsService().subscribe(data => {
      this.hards = data;
    });
  }

  viewLaptop(hard: Product) {
    this.router.navigate(['/hard/' + hard.linkName]);
  }

  createHardDialog() {
    const create = this.matDialog.open(DialogLaptopHardCreateComponent);
    create.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.toastrService.success("Created Hard!")
        }
      },
      error: error => {
        this.toastrService.warning("Could not create the Hard!")
      }
    })
  }

  updateHardDialog(hard: Product) {
    const update = this.matDialog.open(DialogLaptopHardUpdateComponent, { data: hard });
    update.afterClosed().subscribe(result => {
      if (result !== "true") {
        window.location.reload();
      }
    })
  }

  deleteHardDialog(hard: Product) {
    const del = this.matDialog.open(DialogLaptopHardDeleteComponent, { data: hard });
    del.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.deleteHard(hard)
        }
      },
      error: error => {
        this.toastrService.warning("Could not delete the Hard!")
      }
    })
  }

  deleteHard(hard: Product) {
    this.adminHardService.deleteLaptopHardService(hard).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.toastrService.warning("Could not delete the Hard!")
        this.errorMessage = "Could not delete the Hard!";
        console.log(err);
      }
    })
  }

}
