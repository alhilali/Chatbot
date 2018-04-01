import { IonicPageModule } from "ionic-angular";
import { NgModule } from '@angular/core';
import { SuggestionsComponent } from './suggestions/suggestions';
import { PaymentComponent } from './payment/payment';
@NgModule({
	declarations: [SuggestionsComponent,
		PaymentComponent],
	imports: [
		IonicPageModule.forChild(SuggestionsComponent),
		IonicPageModule.forChild(PaymentComponent)
	],
	exports: [SuggestionsComponent,
		PaymentComponent]
})
export class ComponentsModule { }
