import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DialogLaptopChargerCreateComponent } from 'src/app/dialogs/dialog-laptop-charger-create/dialog-laptop-charger-create.component';
import { DialogLaptopChargerDeleteComponent } from 'src/app/dialogs/dialog-laptop-charger-delete/dialog-laptop-charger-delete.component';
import { DialogLaptopChargerUpdateComponent } from 'src/app/dialogs/dialog-laptop-charger-update/dialog-laptop-charger-update.component';
import { LaptopCharger } from 'src/app/shared/models/laptop-charger.model';
import { AdminLaptopChargerService } from 'src/app/shared/services/admin-laptop-charger.service';

@Component({
  selector: 'app-admin-laptop-charger',
  templateUrl: './admin-laptop-charger.component.html',
  styleUrls: ['./admin-laptop-charger.component.css']
})
export class AdminLaptopChargerComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = true;

  protected chargers: Array<LaptopCharger> = [];
  protected charger: LaptopCharger = new LaptopCharger();

  errorMessage: string = "";

  constructor(
    private adminChargerService: AdminLaptopChargerService,
    private router: Router,
    private toastrService: ToastrService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.adminChargerService.getAllLaptopChargersService().subscribe(data => {
      this.chargers = data;
    });
  }

  viewLCharger(charger: LaptopCharger) {
    this.router.navigate(['/charger/' + charger.linkName]);
  }

  createChargerDialog() {
    const create = this.matDialog.open(DialogLaptopChargerCreateComponent);
    create.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.toastrService.success("Created Charger!")
        }
      },
      error: error => {
        this.toastrService.warning("Could not create the Charger!")
      }
    })
  }

  updateChargerDialog(charger: LaptopCharger) {
    const update = this.matDialog.open(DialogLaptopChargerUpdateComponent, { data: charger });
    update.afterClosed().subscribe(result => {
      if (result !== "true") {
        window.location.reload();
      }
    })
  }

  deleteChargerDialog(charger: LaptopCharger) {
    const del = this.matDialog.open(DialogLaptopChargerDeleteComponent, { data: charger });
    del.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.deleteCharger(charger)
        }
      },
      error: error => {
        this.toastrService.warning("Could not delete the Charger!")
      }
    })
  }

  deleteCharger(charger: LaptopCharger) {
    this.adminChargerService.deleteLaptopChargerService(charger).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.toastrService.warning("Could not delete the Charger!")
        this.errorMessage = "Could not delete the Charger!";
        console.log(err);
      }
    })
  }

}
