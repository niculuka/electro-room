import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { DialogCartComponent } from 'src/app/dialogs/dialog-cart/dialog-cart.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor(
    private toastrService: ToastrService,
    public matDialog: MatDialog,
  ) { }

  addToCartService(product: Product): void {
    let cartItem = this.cart.items.find(item => item.product.name === product.name);
    if (cartItem) {
      let message = "Produsul este deja in cos.";
      this.matDialog.open(DialogCartComponent, { data: { obj: product, text: message } });
      return;
    }
    this.cart.items.push(new CartItem(product));
    this.setCartToLocalStorage();
    let message = "Produsul a fost adaugat in cos.";
    this.matDialog.open(DialogCartComponent, { data: { obj: product, text: message } });
  }

  changeQuantityService(name: string, quantity: number) {
    let cartItem = this.cart.items.find(item => item.product.name === name);
    if (!cartItem)
      return;
    cartItem.quantity = quantity;
    cartItem.price = Math.round((quantity * cartItem.product.price) * 100) / 100;
    this.setCartToLocalStorage();
  }

  removeFromCartService(name: string): void {
    this.cart.items = this.cart.items.filter(item => item.product.name != name);
    this.setCartToLocalStorage();
  }

  clearCartService() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  getCart(): Cart {
    return this.cartSubject.value;
  }

  private setCartToLocalStorage(): void {
    this.cart.subtotal = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('cart-ls', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('cart-ls');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }

}
