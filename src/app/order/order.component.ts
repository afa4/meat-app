import {Component, OnInit} from '@angular/core';
import {RadioOption} from '../shared/radio/radio-option.model';
import {OrderService} from './order.service';
import {Order, OrderItem} from './order.model';
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  numberPattern = /^[0-9]*$/;

  orderForm: FormGroup;

  delivery = 8;

  paymentOptions: RadioOption[] = [
    new RadioOption('Dinheiro', 'MON'),
    new RadioOption('Crédito', 'CRE'),
    new RadioOption('Débito', 'DEB'),
  ];

  constructor(public orderService: OrderService,
              public router: Router,
              public formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control(''),
      address: this.formBuilder.control(''),
      number: this.formBuilder.control('', Validators.pattern(this.numberPattern)),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('')
    });
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
      this.router.navigate(['/order-summary']).then(() => {
        this.orderService.clear();
      });
    });
    console.log(order);
  }

}
