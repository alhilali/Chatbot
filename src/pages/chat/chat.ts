import { Context } from "./../../models/context";
import { MenuItem } from "./../../models/menuItem";
import { Restaurant } from "./../../models/restaurant";
import { Message } from "./../../models/message";
import { ConversationServiceProvider } from "./../../providers/conversation-service/conversation-service";
import { IonicPage, NavController, Content } from 'ionic-angular';
import { Component, ViewChild, ElementRef, trigger, state, style, animate, transition } from '@angular/core';
import { SuggestionsComponent } from "../../components/suggestions/suggestions";
declare const google;
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
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  message: string = "";
  messages: Array<Message>;
  marker: any

  origRestaurants: Array<Restaurant>;
  restaurants: Array<Restaurant>;
  context: Context;
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
      'name': 'برقركنق', 'location': 'الملك عبدالعزيز - النفل', 'type': 'برقر',
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
    this.context = new Context();
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

  initMap() {
    let posRiyadh = { lat: 24.713552, lng: 46.675296 }
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 6,
      center: posRiyadh,
      mapTypeId: 'roadmap',
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeControl: false
    });
    this.map.setCenter(posRiyadh);
    this.getMyLocation();
    const vis = this
    google.maps.event.addListener(this.map, "click", function (event) {
      if (this.marker) this.marker.setMap(null);
      let infoWindow = new google.maps.InfoWindow({ map: vis.map });
      this.marker = new google.maps.Marker({
        position: event.latLng,
        map: vis.map,
        draggable: true,
        title: "Drag me!"
      });
      vis.map.setCenter(event.latLng);
      vis.map.setZoom(15);
    });
  }

  getMyLocation() {
    let infoWindow = new google.maps.InfoWindow({ map: this.map });
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log(pos);

        // infoWindow.setPosition(pos);
        // infoWindow.setContent('My location');


        this.marker = new google.maps.Marker({
          position: pos,
          map: this.map
        });
        this.map.setCenter(pos);
        this.map.setZoom(15);
      }, () => {
        this.handleLocationError(true, infoWindow, this.map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, infoWindow, this.map.getCenter());
    }
  }


  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    console.log(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
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

  controlSuggestions() {
    this.suggestions.state == '*' ? this.suggestions.showSuggestions() : this.suggestions.hideSuggestions();
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

  async send(msg?: string) {
    let message = this.message;
    if (msg != null) message = msg;
    if (message == null || message.length == 0) return;


    this.suggestions.hideSuggestions();

    this.messages.push(new Message(message, false));
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });

    const contextPayload: Context = await this.context.getPayload();


    this.conversationService.sendMessage(message, contextPayload).subscribe(
      data => {
        console.log(data);
        let restaurantIndex = data.entities.findIndex(k => k.entity == 'مطعم');
        let cuisineIndex = data.entities.findIndex(k => k.entity == 'كوزين');
        let orderStatusIntent = data.intents.findIndex(k => k.intent == 'حالة_الطلب');
        let sentOrder = data.intents.findIndex(k => k.intent == 'جاهز');
        let menuIntent = data.intents.findIndex(k => k.intent == 'منيو');
        let availRestaurantsIntent = data.intents.findIndex(k => k.intent == 'مطاعم_متوفره');
        let somethingElse = data.output.nodes_visited.findIndex(k => k == 'أي شيء آخر');
        let name = data.context.name;
        if (name) this.context.name = name;


        if (somethingElse >= 0) {
          this.updateConversation(data);
          this.controlSuggestions();
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

          this.listAvailableRestaurants().then(_ => {
            this.updateConversation(data);
          })
        } else if (availRestaurantsIntent >= 0) {
          this.restaurants = this.origRestaurants;
          this.listAvailableRestaurants().then(_ => {
            this.updateConversation(data);
          })
        } else if (orderStatusIntent >= 0 && data.context.order_status == 'true') {
          this.showOrderStatus().then(_ => {
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

  private showOrderStatus(): Promise<any> {
    return new Promise((resolve, reject) => {
      let msg = new Message("", true, 'order_status');
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
        // setTimeout(_ => {
        //   this.initMap();
        // }, 800)
      } else {
        this.messages.push(new Message("لو سمحت اضف اشياء الي السلة 👀", true));
      }
    })
    setTimeout(() => {
      this.content.scrollToBottom(500);
    });
  }

  private sendOrder(type: string, restaurant: Restaurant) {
    this.context.order_stats = 'true';
    this.conversationService.sendMessage("ارسل").subscribe(
      data => {
        console.log(data);
        this.updateConversation(data);
        this.suggestions.displaySuggestion('وش صار على الطلب؟')
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
