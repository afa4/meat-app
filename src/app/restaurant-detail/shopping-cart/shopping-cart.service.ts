import {Injectable} from '@angular/core';
import {CartItem} from './cart-item.model';
import {MenuItem} from '../menu-item/menu-item.model';

@Injectable()
export class ShoppingCartService {

  items: CartItem[] = [];

  constructor() {
  }

  clear() {
    this.items = [];
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
    if (item.quantity === 1) {
      this.items.splice(this.items.indexOf(item), 1);
    } else {
      item.quantity--;
    }
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }
}
