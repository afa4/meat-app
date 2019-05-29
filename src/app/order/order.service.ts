import {Injectable} from '@angular/core';
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model';
import {Order} from './order.model';
import {Observable} from 'rxjs';
import {Headers, Http, RequestOptions} from '@angular/http';
import {MEAT_API} from '../../../app.api';

@Injectable()
export class OrderService {

  constructor(private shoppingCartService: ShoppingCartService,
              private http: Http) {
  }

  cartItems() {
    return this.shoppingCartService.items;
  }

  removeCartItem(item: CartItem) {
    this.shoppingCartService.removeItem(item);
  }

  cartTotal() {
    return this.shoppingCartService.total();
  }

  addCartItem(item: CartItem) {
    this.shoppingCartService.addItem(item.menuItem);
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({headers: headers}))
      .map(response => response.json())
      .map(order => order.id);
  }

  clear() {
    this.shoppingCartService.clear();
  }

}
