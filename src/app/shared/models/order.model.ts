import { DELIVERY } from "../constants/const";
import { CartItem } from "./cart-item.model";
import { ORDER_STATUS, PAYMENT_TYPE } from "../enums/electro.enum";

export class Order {
  orderId!: number;
  items!: CartItem[];

  subtotal!: number;
  delivery: number = DELIVERY;
  totalPrice!: number;

  paymentType: string = PAYMENT_TYPE.CASH;

  createdAt!: string;
  status: string = ORDER_STATUS.NEW;

  userIdGet!: number;
  nameGet!: string;
  emailGet!: string;
  addressGet!: string;  
  phoneGet!: string;

}
