import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DialogLaptopCreateComponent } from 'src/app/dialogs/dialog-laptop-create/dialog-laptop-create.component';
import { DialogLaptopDeleteComponent } from 'src/app/dialogs/dialog-laptop-delete/dialog-laptop-delete.component';
import { DialogLaptopUpdateComponent } from 'src/app/dialogs/dialog-laptop-update/dialog-laptop-update.component';
import { Laptop } from 'src/app/shared/models/laptop.model';
import { AdminLaptopService } from 'src/app/shared/services/admin-laptop.service';

@Component({
  selector: 'app-admin-laptop',
  templateUrl: './admin-laptop.component.html',
  styleUrls: ['./admin-laptop.component.css']
})
export class AdminLaptopComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = true;

  protected laptops: Array<Laptop> = [];
  protected laptop: Laptop = new Laptop();

  errorMessage: string = "";

  constructor(
    private adminLaptopService: AdminLaptopService,
    private router: Router,
    private toastrService: ToastrService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.adminLaptopService.getAllLaptopsService().subscribe(data => {
      this.laptops = data;
    });
  }

  viewLaptop(laptop: Laptop) {
    this.router.navigate(['/lap/' + laptop.linkName]);
  }

  createLaptopDialog() {
    const create = this.matDialog.open(DialogLaptopCreateComponent);
    create.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.toastrService.success("Created Laptop!")
        }
      },
      error: error => {
        this.toastrService.warning("Could not create Laptop!")
      }
    })
  }

  updateLaptopDialog(laptop: Laptop) {
    const update = this.matDialog.open(DialogLaptopUpdateComponent, { data: laptop });
    update.afterClosed().subscribe(result => {
      if (result !== "true") {
        window.location.reload();
      }
    })
  }

  deleteLaptopDialog(laptop: Laptop) {
    const dialogRef = this.matDialog.open(DialogLaptopDeleteComponent, { data: laptop });
    dialogRef.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.deleteLaptop(laptop)
        }
      },
      error: error => {
        this.toastrService.warning("Could not delete Laptop!")
      }
    })
  }

  deleteLaptop(laptop: Laptop) {
    this.adminLaptopService.deleteLaptopService(laptop).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.toastrService.warning("Could not delete Laptop!")
        this.errorMessage = "Could not delete Laptop!";
        console.log(err);
      }
    })
  }

}
