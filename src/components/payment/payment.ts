import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the PaymentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'payment',
  templateUrl: 'payment.html'
})
export class PaymentComponent {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  type: string = 'cash';
  change: string = '50';

  constructor() {
    console.log('Hello PaymentComponent Component');
  }

  sendOrder(type: string) {
    this.notify.emit(this.type);
  }

}
