import {Component, OnInit} from '@angular/core';
import {RadioOption} from '../shared/radio/radio-option.model';
import {OrderService} from './order.service';
import {Order, OrderItem} from './order.model';
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery = 8;

  paymentOptions: RadioOption[] = [
    new RadioOption('Dinheiro', 'MON'),
    new RadioOption('Crédito', 'CRE'),
    new RadioOption('Débito', 'DEB'),
  ];

  constructor(public orderService: OrderService) {
  }

  ngOnInit() {
  }

  cartItems() {
    return this.orderService.cartItems();
  }

  total() {
    return this.orderService.cartTotal();
  }

  checkOrder(order: Order) {
    order.items = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order).subscribe((orderId: String) => {
      console.log(`Compra concluída: ${orderId}`);
      this.orderService.clear();
    });
    console.log(order);
  }

}
