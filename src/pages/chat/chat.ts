import { Restaurant } from "./../../models/restaurant";
import { Message } from "./../../models/message";
import { ConversationServiceProvider } from "./../../providers/conversation-service/conversation-service";
import { IonicPage, NavController, Content } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { SuggestionsComponent } from "../../components/suggestions/suggestions";
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  @ViewChild(Content) content: Content;
  @ViewChild('suggestions') suggestions: SuggestionsComponent;
  message: string = "";
  messages: Array<Message>;
  restaurants: Array<Restaurant>;

  constructor(public navCtrl: NavController,
    private conversationService: ConversationServiceProvider) {
    this.messages = new Array<Message>();
    this.restaurants = new Array<Restaurant>();
  }

  ionViewDidEnter() {
    this.conversationService.sendMessage("").subscribe(
      data => {
        console.log(data);
        this.updateConversation(data);
      },
      error => {
        console.log(error);
      }
    )
    this.generateMenue(new Restaurant('كنتاكي', 'الملك عبدالعزيز - النفل', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png'));
    this.generateMenue(new Restaurant('برقر كنق', 'الملك عبدالعزيز - النفل', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Burger_King_Logo.svg/1000px-Burger_King_Logo.svg.png'));
  }

  generateMenue(restaurant: Restaurant) {
    restaurant.addMenuItem('وجبة تويستر', 15, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/twister-menu.jpg');
    restaurant.addMenuItem('وجبة مايتي زينجر', 20, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39B3QamHch8oECAqWnQ2gx68UQfbX6kQmkOL-5C5YwkJ6vLtQ');
    restaurant.addMenuItem('وجبة كريسبي ستريبس', 19, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/strips-menu-1.jpg');
    restaurant.addMenuItem('وجبة مطافي', 18, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/longer-menu-1.jpg');
    this.restaurants.push(restaurant);
  }

  loadMoreItems(restaurant: Restaurant) {
    restaurant.addMenuItem('وجبة دينر', 16, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/bites_Big_menu.jpg');
    restaurant.addMenuItem('وجبة تويستر', 15, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/twister-menu.jpg');
  }

  send(msg?: string) {

    this.suggestions.hideSuggestions();
    let message = this.message;
    console.log(msg);

    if (msg != null) message = msg;

    this.messages.push(new Message(message, false));
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });

    this.conversationService.sendMessage(message).subscribe(
      data => {
        console.log(data);

        if (data.entities[0] && data.entities[0].entity == 'مطعم'
          && data.intents[0] && data.intents[0].intent == 'منيو') {
          this.findRestaurant(data.entities[0].value).then(res => {
          }).then(_ => {
            this.updateConversation(data);
          }).catch(err => {
            this.updateConversation(data);
          })
        } else if (data.intents[0] && data.intents[0].intent == 'طلب_كامل') {
          //this.processOrder(data);
        } else if (data.intents[0] && data.intents[0].intent == 'مطاعم_متوفره') {
          this.listAvailableRestaurants().then(_ => {
            this.updateConversation(data);
          })
        } else {

          this.updateConversation(data);
        }
      },
      error => {
        console.log(error);
      }
    )

    this.message = "";
  }

  findRestaurant(name: string): Promise<Restaurant> {
    return new Promise((resolve, reject) => {
      this.restaurants.forEach((res, index) => {
        if (res.name === name) {
          const restaurant: Restaurant = res;
          this.updateConversationWithRestaurant(restaurant);
          resolve(res);
        }
        if (index == this.restaurants.length - 1) {
          reject(null)
        }
      })
    })
  }

  private listAvailableRestaurants(): Promise<any> {
    return new Promise((resolve, reject) => {
      let msg = new Message("", true, 'restaurants-list');
      this.messages.push(msg);
      resolve(null)
    })
  }

  private updateConversationWithRestaurant(restaurant: Restaurant) {
    let msg = new Message("", true, 'menu');
    msg.setRestaurant(restaurant);
    this.messages.push(msg);
    setTimeout(() => {
      this.content.scrollToBottom(500);
    }, 100);
  }

  private order(restaurant: Restaurant) {
    let msg = new Message("", true, 'receipt');
    restaurant.setTotal().then(res => {
      if (res > 0) {
        msg.setRestaurant(restaurant);
        this.messages.push(msg);
      } else {
        this.messages.push(new Message("لو سمحت اضف اشياء الي السلة 👀", true));
      }
    })
    setTimeout(() => {
      this.content.scrollToBottom(500);
    });
  }

  private sendOrder(restaurant: Restaurant) {
    this.conversationService.sendMessage("ارسل").subscribe(
      data => {
        console.log(data);
        this.updateConversation(data);
      },
      error => {
        console.log(error);
      }
    )
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
      this.content.scrollToBottom(100);
    });
  }

  private pickSuggestion(suggestion: string) {
    this.send(suggestion);
  }

  footerTouchStart(event) {
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
