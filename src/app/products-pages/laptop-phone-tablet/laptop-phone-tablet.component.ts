import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DEPARTMENTS, Department } from 'src/app/shared/data/mega-menu.data';

@Component({
  selector: 'app-laptop-phone-tablet',
  templateUrl: './laptop-phone-tablet.component.html',
  styleUrls: ['./laptop-phone-tablet.component.css']
})
export class LaptopPhoneTabletComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  departments: Array<Department> = DEPARTMENTS;
  cards: Array<any> = [];

  currentName: string = "Laptopuri, Telefoane, Tablete";

  constructor(
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    let depapartament: any = this.departments.find(item => item.name === this.currentName);
    this.cards = depapartament.titles;
  }

  noRoute(card: any) {
    if (card.isReady === false) {
      this.toastrService.warning("C O N S T R U C T I O N", "U N D E R")
    }
  }
}
