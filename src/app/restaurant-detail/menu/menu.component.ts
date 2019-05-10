import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {RestaurantsService} from '../../restaurants/restaurants.service';
import {ActivatedRoute} from '@angular/router';
import {MenuItem} from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(public restaurantsService: RestaurantsService,
              public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.menu = this.restaurantsService.menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }

}
