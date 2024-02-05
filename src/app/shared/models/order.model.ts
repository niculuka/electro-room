import { DELIVERY } from "../constants/const";
import { CartItem } from "./cart-item.model";
import { ORDER, ORDER_STATUS, PAYMENT_TYPE } from "../enums/electro.enum";

export class Order {
  id!: number;
  items!: CartItem[];

  subtotal!: number;
  delivery: number = DELIVERY;
  totalPrice!: number;

  paymentType: string = PAYMENT_TYPE.CARD;
  conditions: boolean = false;

  createdAt!: string;
  status: string = ORDER_STATUS.NEW;

  userIdGet!: number;
  usernameGet!: string;
  nameGet!: string;  
  emailGet!: string;
  addressGet!: string;  
  phoneGet!: string;

}

export interface IOrder {
  id: number;
  items: CartItem[];

  subtotal: number;
  delivery: number;
  totalPrice: number;

  paymentType: string;
  conditions: boolean;

  createdAt: string;
  status: string;

  userIdGet: number;
  usernameGet: string;
  nameGet: string;
  emailGet: string;
  addressGet: string;  
  phoneGet: string;

}
