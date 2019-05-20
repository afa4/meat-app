import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  constructor(public shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
  }

  items() {
    return this.shoppingCartService.items;
  }

  removeItem(item: CartItem) {
    this.shoppingCartService.removeItem(item);
  }

  total() {
    return this.shoppingCartService.total();
  }

  addItem(item: CartItem) {
    this.shoppingCartService.addItem(item.menuItem);
  }
}
