import {Component, OnInit} from '@angular/core';
import {RadioOption} from '../shared/radio/radio-option.model';
import {OrderService} from './order.service';

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

}
