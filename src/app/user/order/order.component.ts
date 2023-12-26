import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/shared/models/order.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { OrderAgreementComponent } from '../order-agreement/order-agreement.component';
import { OrderService } from '../../shared/services/order.service';
import { PAYMENT_TYPE } from 'src/app/shared/enums/electro.enum';
import { Cart } from 'src/app/shared/models/cart.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  cart!: Cart;
  order: Order = new Order();

  message: string = "";
  conditions!: boolean;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router,
    private orderService: OrderService,
    public matDialog: MatDialog
  ) {
    this.cartService.getCartObservable().subscribe((data) => {
      this.cart = data;
      this.order.items = this.cart.items;
      this.order.subtotal = Math.round(this.cart.subtotal * 100) / 100;
      this.order.delivery = this.cart.delivery;
      this.order.totalPrice = this.order.delivery + this.order.subtotal;
      if (this.order.items.length <= 0) this.router.navigate(["/"]);
    })

    const paymentJson = localStorage.getItem('payment-ls');
    if (paymentJson) {
      this.order.paymentType = JSON.parse(paymentJson);
    }

    const conditionsJson = localStorage.getItem('conditions-ls');
    if (conditionsJson) {
      this.conditions = JSON.parse(conditionsJson);
    } else {
      this.conditions = false;
    }
  }

  ngOnInit(): void {
    let userId: any = this.authService.currentUserValue.userId;
    this.order.userIdGet = userId;
    this.order.nameGet = this.authService.currentUserValue.name;
    this.order.emailGet = this.authService.currentUserValue.email;
    this.order.addressGet = this.authService.currentUserValue.address;
    this.order.phoneGet = this.authService.currentUserValue.phone;
  }

  paymentMethod() {
    const paymentJson = JSON.stringify(this.order.paymentType);
    localStorage.setItem('payment-ls', paymentJson);
  }

  conditionsCheck() {
    const conditionsJson = JSON.stringify(this.conditions);
    localStorage.setItem('conditions-ls', conditionsJson);
  }

  conditionsAgreement() {
    const agrement = this.matDialog.open(OrderAgreementComponent);
  }

  errorMessage() {
    return this.conditions === false;
  }

  payWithCard() {
    return this.order.paymentType === PAYMENT_TYPE.CARD;
  }

  createOrder() {
    if (this.conditions) {
      if (!this.authService.currentUserValue.userId) {
        return;
      }
      this.order.userIdGet = this.authService.currentUserValue.userId;

      if (this.order.paymentType === PAYMENT_TYPE.CASH) {
        this.creatingMethod();
        return;
      }
      if (this.order.paymentType === PAYMENT_TYPE.CARD) {
        // Other Validations here!
        this.creatingMethod();
      }
    } else {
      this.message = "Trebuie sa fii de acord cu conditiile !!!"
    }
  }

  creatingMethod() {
    this.orderService.createOrderService(this.order).subscribe({
      next: () => {
        this.cartService.clearCartService();
        this.router.navigate(["/"]);
        this.toastrService.success("Order sent")
      },
      error: (err) => {
        this.toastrService.error(err.error, "Order could not be saved!")
      }
    })
  }

}
