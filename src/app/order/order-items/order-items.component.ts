import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from '../../restaurant-detail/shopping-cart/cart-item.model';
import {OrderService} from '../order.service';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[];

  constructor(public orderService: OrderService) {
  }

  ngOnInit() {
  }

  cartItems() {
    return this.orderService.cartItems();
  }

  removeCartItem(item: CartItem) {
    this.orderService.removeCartItem(item);
  }

  cartTotal() {
    return this.orderService.cartTotal();
  }

  addCartItem(item: CartItem) {
    this.orderService.addCartItem(item);
  }

}
