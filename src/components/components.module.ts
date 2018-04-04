import { IonicPageModule } from "ionic-angular";
import { NgModule } from '@angular/core';
import { SuggestionsComponent } from './suggestions/suggestions';
import { PaymentComponent } from './payment/payment';
import { OrderStatusComponent } from './order-status/order-status';
@NgModule({
	declarations: [SuggestionsComponent,
		PaymentComponent,
		OrderStatusComponent],
	imports: [
		IonicPageModule.forChild(SuggestionsComponent),
		IonicPageModule.forChild(PaymentComponent),
		IonicPageModule.forChild(OrderStatusComponent)
	],
	exports: [SuggestionsComponent,
		PaymentComponent,
		OrderStatusComponent]
})
export class ComponentsModule { }
