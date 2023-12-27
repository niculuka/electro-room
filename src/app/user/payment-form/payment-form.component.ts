import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../shared/models/order.model';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  @Input()
  order!: Order;

  constructor() { }

  ngOnInit(): void {
  }

  // checkoutProceed() {
  //   console.log(this.order);
  // }

}
