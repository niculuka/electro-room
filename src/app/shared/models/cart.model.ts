import { CartItem } from "./cart-item.model";

export class Cart {
  items: CartItem[] = []; 
  
  subtotal: number = 0;  
  totalCount: number = 0;
  delivery: number = 0;  
}
