import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-standard-cards',
  templateUrl: './standard-cards.component.html',
  styleUrls: ['./standard-cards.component.css']
})
export class StandardCardsComponent {

  @Input() cards: Array<any> = [];

  constructor(
    private toastrService: ToastrService,
  ) { }

  noRoute(card: any) {
    if (card.isReady === false) {
      this.toastrService.warning("C O N S T R U C T I O N", "U N D E R")
    }
  }
}
