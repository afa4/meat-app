import {Injectable} from '@angular/core';
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model';

@Injectable()
export class OrderService {

  constructor(private shoppingCartService: ShoppingCartService) {
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

}
