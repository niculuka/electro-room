import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-special-offer',
  templateUrl: './special-offer.component.html',
  styleUrls: ['./special-offer.component.css']
})
export class SpecialOfferComponent {

  constructor(private toastrService: ToastrService) {}

  offer() {
    this.toastrService.success("Oferta valabila in limita stocului disponibil")
  }
}
