import { Component } from '@angular/core';

/**
 * Generated class for the OrderStatusComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'order-status',
  templateUrl: 'order-status.html'
})
export class OrderStatusComponent {

  text: string;

  constructor() {
    console.log('Hello OrderStatusComponent Component');
    this.text = 'Hello World';
  }

}
