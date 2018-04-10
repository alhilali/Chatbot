import { ComponentsModule } from "./../../components/components.module";
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
import { Ionic2RatingModule } from 'ionic2-rating'

@NgModule({
  declarations: [
    ChatPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ChatPage),
    Ionic2RatingModule
  ],
})
export class ChatPageModule { }
