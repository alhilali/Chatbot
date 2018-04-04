import { MenuItem } from "./../../models/menuItem";
import { Restaurant } from "./../../models/restaurant";
import { Message } from "./../../models/message";
import { ConversationServiceProvider } from "./../../providers/conversation-service/conversation-service";
import { IonicPage, NavController, Content } from 'ionic-angular';
import { Component, ViewChild, trigger, state, style, animate, transition } from '@angular/core';
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
  templateUrl: 'chat.html',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: '0' })),
      state('*', style({ opacity: '1' })),
      transition('void <=> *', animate('300ms ease-in'))
    ])
  ]
})
export class ChatPage {
  @ViewChild(Content) content: Content;
  @ViewChild('suggestions') suggestions: SuggestionsComponent;
  message: string = "";
  messages: Array<Message>;
  origRestaurants: Array<Restaurant>;
  restaurants: Array<Restaurant>;
  rest: Array<any> = [
    {
      'name': 'كنتاكي', 'location': 'الملك عبدالعزيز - النفل', 'type': 'برقر',
      'logoImage': 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png'
    },
    {
      'name': 'شاورمر', 'location': 'الملك عبدالعزيز - الربيع', 'type': 'شاورما',
      'logoImage': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Shawarmer_logo.jpg'
    },
    {
      'name': 'برقر كنق', 'location': 'الملك عبدالعزيز - النفل', 'type': 'برقر',
      'logoImage': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Burger_King_Logo.svg/1000px-Burger_King_Logo.svg.png'
    },
    {
      'name': 'البيك', 'location': 'الملك عبدالعزيز - النفل', 'type': 'بروستد',
      'logoImage': 'https://upload.wikimedia.org/wikipedia/ar/thumb/a/a1/Albaik_logo.svg/1200px-Albaik_logo.svg.png'
    }
  ]
  menus: Array<any> = [[
    { 'name': 'وجبة تويستر', 'price': 15, 'image': 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/twister-menu.jpg' },
    { 'name': 'وجبة مايتي زينجر', 'price': 20, 'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39B3QamHch8oECAqWnQ2gx68UQfbX6kQmkOL-5C5YwkJ6vLtQ' },
    { 'name': 'وجبة كريسبي ستريبس', 'price': 19, 'image': 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/strips-menu-1.jpg' },
    { 'name': 'وجبة مطافي', 'price': 18, 'image': 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/longer-menu-1.jpg' }
  ],
  [
    { 'name': 'وجبة ديو', 'price': 15, 'image': 'http://www.shawarmer.com//images/Content/Products/Duo.jpg' },
    { 'name': 'وجبة تنوري', 'price': 20, 'image': 'https://pbs.twimg.com/media/DOS4KaEW4AY89Bt.jpg' },
    { 'name': 'وجبة شطشويش', 'price': 19, 'image': 'http://www.shawarmer.com//images/Content/Products/Shatshaweesh.jpg' },
    { 'name': 'جمعات', 'price': 40, 'image': 'http://www.shawarmer.com//images/Content/Products/Gatherings.jpg' }
  ],
  [
    { 'name': 'وجبة وابر', 'price': 15, 'image': 'https://www.burgerking.delivery/storage/app/uploads/public/597/70b/f1f/x59770bf1f40cc722126399.png.pagespeed.ic.xu4DWti9sV.webp' },
    { 'name': 'وجبة دوبل وابر', 'price': 20, 'image': 'https://www.burgerking.delivery/storage/app/uploads/public/597/70d/07c/x59770d07c4fcc720357782.png.pagespeed.ic.o7BWGIJnWO.webp' },
    { 'name': 'وجبة تشيكن رويال', 'price': 19, 'image': 'https://www.burgerking.delivery/storage/app/uploads/public/597/70e/f05/x59770ef0528e0263459403.png.pagespeed.ic.fZ2QV-VNM6.webp' },
    { 'name': 'وجبة تشيكن وابر', 'price': 18, 'image': 'https://www.burgerking.delivery/storage/app/uploads/public/597/70f/687/x59770f6872fba728528016.png.pagespeed.ic.dxKvB-3gta.webp' }
  ],
  [
    { 'name': 'وجبة بروستد', 'price': 15, 'image': 'http://www.recipesaresimple.com/wp-content/uploads/2015/06/al-baik-style-broasted-chicken-recipe.jpg' },
    { 'name': 'وجبة مسحب', 'price': 20, 'image': 'http://www.dishocean.com/media/uploads/foods/chicken-crispy-qtr-broast-chest-al-shaikh-restaurant-gulshan-e-iqbal-karachi.jpg' },
    { 'name': 'وجبة العائلة', 'price': 49, 'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbuVLiU2aKG9VJLclvPTbef0eDVg1pkRslFOyBREUcN3zcKf718w' },
    { 'name': 'وجبة برقر بروستد', 'price': 18, 'image': 'http://albaikpizza.com.au/images/burger_zinger_menu.jpg' }
  ]]

  constructor(public navCtrl: NavController,
    private conversationService: ConversationServiceProvider) {
    this.messages = new Array<Message>();
    this.restaurants = new Array<Restaurant>();
    this.origRestaurants = new Array<Restaurant>();
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
    this.loadRestuarants();
  }

  loadRestuarants() {
    this.rest.forEach((res, index) => {
      let ress: Restaurant = res as Restaurant;
      let restaurant = new Restaurant(ress.name, ress.type, ress.location, ress.logoImage);
      let menu: Array<MenuItem> = this.menus[index] as Array<MenuItem>;
      (restaurant as Restaurant).addMenu(menu);
      this.restaurants.push(restaurant);
      this.origRestaurants.push(restaurant);
    })
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

  loadMoreRestuarants() {
    this.generateMenue(new Restaurant('برقر كنق', 'الملك عبدالعزيز - النفل', 'برقر',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Burger_King_Logo.svg/1000px-Burger_King_Logo.svg.png'));
    this.generateMenue(new Restaurant('البيك', 'الملك عبدالعزيز - النفل', 'بروستد',
      'https://upload.wikimedia.org/wikipedia/ar/thumb/a/a1/Albaik_logo.svg/1200px-Albaik_logo.svg.png'));
  }

  send(msg?: string) {
    this.suggestions.hideSuggestions();
    let message = this.message;
    if (msg != null) message = msg;

    this.messages.push(new Message(message, false));
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });

    this.conversationService.sendMessage(message).subscribe(
      data => {
        console.log(data);
        let restaurantIndex = data.entities.findIndex(k => k.entity == 'مطعم');
        let cuisineIndex = data.entities.findIndex(k => k.entity == 'كوزين');
        let menuIntent = data.intents.findIndex(k => k.intent == 'منيو');
        let availRestaurantsIntent = data.intents.findIndex(k => k.intent == 'مطاعم_متوفره');
        let somethingElse = data.output.nodes_visited.findIndex(k => k == 'أي شيء آخر');


        if (somethingElse >= 0) {
          this.updateConversation(data);
          // setTimeout(() => {
          //   this.suggestions.showSuggestions();
          // }, 2000)
        } else if (restaurantIndex >= 0 && menuIntent >= 0) {
          this.findRestaurant(data.entities[restaurantIndex].value).then(res => {
          }).then(_ => {
            this.updateConversation(data);
          }).catch(err => {
            this.updateConversation(data);
          })
        } else if (cuisineIndex >= 0) {
          this.restaurants = this.origRestaurants.filter(res => res.type === data.entities[cuisineIndex].value)
          console.log(this.restaurants);

          this.listAvailableRestaurants().then(_ => {
            this.updateConversation(data);
          })
        } else if (availRestaurantsIntent >= 0) {
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

  private sendOrder(type: string, restaurant: Restaurant) {
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

  pay(restaurant: Restaurant) {
    let msg = new Message("", true, 'payment');
    msg.setRestaurant(restaurant);
    this.messages.push(msg);
    setTimeout(() => {
      this.content.scrollToBottom(500);
    }, 100);
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
