import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DialogLaptopSsdCreateComponent } from 'src/app/dialogs/dialog-laptop-ssd-create/dialog-laptop-ssd-create.component';
import { DialogLaptopSsdDeleteComponent } from 'src/app/dialogs/dialog-laptop-ssd-delete/dialog-laptop-ssd-delete.component';
import { DialogLaptopSsdUpdateComponent } from 'src/app/dialogs/dialog-laptop-ssd-update/dialog-laptop-ssd-update.component';
import { LaptopSsd } from 'src/app/shared/models/laptop-ssd.model';
import { AdminLaptopSsdService } from 'src/app/shared/services/admin-laptop-ssd.service';

@Component({
  selector: 'app-admin-laptop-ssd',
  templateUrl: './admin-laptop-ssd.component.html',
  styleUrls: ['./admin-laptop-ssd.component.css']
})
export class AdminLaptopSsdComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = true;

  protected ssds: Array<LaptopSsd> = [];
  protected ssd: LaptopSsd = new LaptopSsd();

  errorMessage: string = "";

  constructor(
    private adminSsdService: AdminLaptopSsdService,
    private router: Router,
    private toastrService: ToastrService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.adminSsdService.getAllLaptopSsdsService().subscribe(data => {
      this.ssds = data;
    });
  }

  viewLaptop(ssd: LaptopSsd) {
    this.router.navigate(['/ssd/' + ssd.linkName]);
  }

  createSsdDialog() {
    const create = this.matDialog.open(DialogLaptopSsdCreateComponent);
    create.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.toastrService.success("Created Ssd!")
        }
      },
      error: error => {
        this.toastrService.warning("Could not create the Ssd!")
      }
    })
  }

  updateSsdDialog(ssd: LaptopSsd) {
    const update = this.matDialog.open(DialogLaptopSsdUpdateComponent, { data: ssd });
    update.afterClosed().subscribe(result => {
      if (result !== "true") {
        window.location.reload();
      }
    })
  }

  deleteSsdDialog(ssd: LaptopSsd) {
    const del = this.matDialog.open(DialogLaptopSsdDeleteComponent, { data: ssd });
    del.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.deleteSsd(ssd)
        }
      },
      error: error => {
        this.toastrService.warning("Could not delete the Ssd!")
      }
    })
  }

  deleteSsd(ssd: LaptopSsd) {
    this.adminSsdService.deleteLaptopSsdService(ssd).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.toastrService.warning("Could not delete the Ssd!")
        this.errorMessage = "Could not delete the Ssd!";
        console.log(err);
      }
    })
  }

}
