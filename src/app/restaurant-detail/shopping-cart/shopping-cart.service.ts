import {Injectable} from '@angular/core';
import {CartItem} from './cart-item.model';
import {MenuItem} from '../menu-item/menu-item.model';

@Injectable()
export class ShoppingCartService {

  items: CartItem[] = [];

  constructor() {
  }

  clear() {
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find(cartItem => cartItem.menuItem === item);
    if (foundItem) {
      foundItem.quantity++;
    } else {
      this.items.push(new CartItem(item));
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }
}
