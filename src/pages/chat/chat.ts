import { ConversationServiceProvider } from "./../../providers/conversation-service/conversation-service";
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  message: string = "";
  messages: Array<Message>;
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, private navParams: NavParams,
    private conversationService: ConversationServiceProvider) {
    this.messages = new Array<Message>();
  }

  ionViewDidEnter() {
    this.messages = new Array<Message>();
    this.conversationService.sendMessage("").subscribe(
      data => {
        console.log(data);

        this.updateConversation(data);
      },
      error => {
        console.log(error);

      }
    )
  }

  send() {
    this.messages.push(new Message(this.message, false));

    this.conversationService.sendMessage(this.message).subscribe(
      data => {
        console.log(data);

        this.updateConversation(data);
      },
      error => {
        console.log(error);


      }
    )

    this.message = "";
  }

  private updateConversation(data: any) {
    let msg = "";

    if (data.output.text.length >= 1) {
      msg = data.output.text.join(" ");
    } else if (data.output.text.length == 1) {
      msg = data.output.text[0];
    }

    this.messages.push(new Message(msg, true));

    setTimeout(() => {
      this.content.scrollToBottom(300);
    });
  }

  footerTouchStart(event) {
    console.log(event.target.localName);

    if (event.target.localName !== "input") {
      event.preventDefault();
    } else {
      setTimeout(() => {
        this.content.scrollToBottom();
      }, 300);
    }
  }

  touchSendButton(event: Event) {
    event.preventDefault();
    this.send();
  }

}

export class Message {
  content: string;
  isWatson: boolean;
  timestamp: string;

  constructor(content: string, isWatson: boolean) {
    this.content = content;
    this.isWatson = isWatson;
    const date = new Date();
    this.timestamp = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  }
}
