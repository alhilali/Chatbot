import { IonicPageModule } from "ionic-angular";
import { NgModule } from '@angular/core';
import { SuggestionsComponent } from './suggestions/suggestions';
import { PaymentComponent } from './payment/payment';
import { OrderStatusComponent } from './order-status/order-status';
import { MenuListComponent } from './menu-list/menu-list';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list';
@NgModule({
	declarations: [SuggestionsComponent,
		PaymentComponent,
		OrderStatusComponent,
		MenuListComponent,
		RestaurantsListComponent],
	imports: [
		IonicPageModule.forChild(SuggestionsComponent),
		IonicPageModule.forChild(PaymentComponent),
		IonicPageModule.forChild(OrderStatusComponent),
		IonicPageModule.forChild(MenuListComponent),
		IonicPageModule.forChild(RestaurantsListComponent)
	],
	exports: [SuggestionsComponent,
		PaymentComponent,
		OrderStatusComponent,
		MenuListComponent,
		RestaurantsListComponent]
})
export class ComponentsModule { }
