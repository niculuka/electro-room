import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DialogLaptopBagCreateComponent } from 'src/app/dialogs/dialog-laptop-bag-create/dialog-laptop-bag-create.component';
import { DialogLaptopBagDeleteComponent } from 'src/app/dialogs/dialog-laptop-bag-delete/dialog-laptop-bag-delete.component';
import { DialogLaptopBagUpdateComponent } from 'src/app/dialogs/dialog-laptop-bag-update/dialog-laptop-bag-update.component';
import { Product } from 'src/app/shared/models/product.model';
import { AdminLaptopBagService } from 'src/app/shared/services/admin-laptop-bag.service';

@Component({
  selector: 'app-admin-laptop-bag',
  templateUrl: './admin-laptop-bag.component.html',
  styleUrls: ['./admin-laptop-bag.component.css']
})
export class AdminLaptopBagComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = true;

  protected bags: Array<Product> = [];
  protected bag: Product = new Product();

  errorMessage: string = "";

  constructor(
    private adminBagService: AdminLaptopBagService,
    private router: Router,
    private toastrService: ToastrService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.adminBagService.getAllLaptopBagsService().subscribe(data => {
      this.bags = data;
    });
  }

  viewLaptop(laptopBag: Product) {
    this.router.navigate(['/bag/' + laptopBag.linkName]);
  }

  createBagDialog() {
    const create = this.matDialog.open(DialogLaptopBagCreateComponent);
    create.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.toastrService.success("Created Bag!")
        }
      },
      error: error => {
        this.toastrService.warning("Could not create the Bag!")
      }
    })
  }

  updateBagDialog(bag: Product) {
    const update = this.matDialog.open(DialogLaptopBagUpdateComponent, { data: bag });
    update.afterClosed().subscribe(result => {
      if (result !== "true") {
        window.location.reload();
      }
    })
  }

  deleteBagDialog(bag: Product) {
    const del = this.matDialog.open(DialogLaptopBagDeleteComponent, { data: bag });
    del.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.deleteBag(bag)
        }
      },
      error: error => {
        this.toastrService.warning("Could not delete the Bag!")
      }
    })
  }

  deleteBag(bag: Product) {
    this.adminBagService.deleteLaptopBagService(bag).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.toastrService.warning("Could not delete the Bag!")
        this.errorMessage = "Could not delete the Bag!";
        console.log(err);
      }
    })
  }

}
