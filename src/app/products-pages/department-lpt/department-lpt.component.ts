import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DEPARTMENTS, Department } from 'src/app/shared/data/mega-menu.data';

@Component({
  selector: 'app-department-lpt',
  templateUrl: './department-lpt.component.html',
  styleUrls: ['./department-lpt.component.css']
})
export class DepartmentLptComponent implements OnInit {

  departments: Array<Department> = DEPARTMENTS;
  cards: Array<any> = [];

  constructor(
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    let depapartament: any = this.departments.find(item => item.id === 1);
    this.cards = depapartament.titles;
  }

  noRoute(card: any) {
    if (card.isReady === false) {
      this.toastrService.warning("C O N S T R U C T I O N", "U N D E R")
    }
  }
}
