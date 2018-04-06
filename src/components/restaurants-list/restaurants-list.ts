import { Restaurant } from "./../../models/restaurant";
import {
  Component, Output, EventEmitter,
  trigger, state, style, animate, transition, Input
} from '@angular/core';
/**
 * Generated class for the RestaurantsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'restaurants-list',
  templateUrl: 'restaurants-list.html',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: '0' })),
      state('*', style({ opacity: '1' })),
      transition('void <=> *', animate('300ms ease-in'))
    ])
  ]
})
export class RestaurantsListComponent {
  @Input('restaurants') restaurants: Restaurant[]

  constructor() {
    console.log('Hello RestaurantsListComponent Component');
  }

  generateMenue(restaurant: Restaurant) {
    restaurant.addMenuItem('وجبة تويستر', 15, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/twister-menu.jpg');
    restaurant.addMenuItem('وجبة مايتي زينجر', 20, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39B3QamHch8oECAqWnQ2gx68UQfbX6kQmkOL-5C5YwkJ6vLtQ');
    restaurant.addMenuItem('وجبة كريسبي ستريبس', 19, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/strips-menu-1.jpg');
    restaurant.addMenuItem('وجبة مطافي', 18, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/longer-menu-1.jpg');
    this.restaurants.push(restaurant);
  }

  loadMoreRestuarants() {
    this.generateMenue(new Restaurant('برقر كنق', 'الملك عبدالعزيز - النفل', 'برقر',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Burger_King_Logo.svg/1000px-Burger_King_Logo.svg.png'));
    this.generateMenue(new Restaurant('البيك', 'الملك عبدالعزيز - النفل', 'بروستد',
      'https://upload.wikimedia.org/wikipedia/ar/thumb/a/a1/Albaik_logo.svg/1200px-Albaik_logo.svg.png'));
  }

}
