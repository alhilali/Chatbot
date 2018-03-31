import { IonicPageModule } from "ionic-angular";
import { NgModule } from '@angular/core';
import { SuggestionsComponent } from './suggestions/suggestions';
@NgModule({
	declarations: [SuggestionsComponent],
	imports: [IonicPageModule.forChild(SuggestionsComponent)],
	exports: [SuggestionsComponent]
})
export class ComponentsModule { }
