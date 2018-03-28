webpackJsonp([0],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
            ],
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* unused harmony export Message */
/* unused harmony export MenuItem */
/* unused harmony export Restaurant */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_conversation_service_conversation_service__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, conversationService) {
        this.navCtrl = navCtrl;
        this.conversationService = conversationService;
        this.message = "";
        this.messages = new Array();
    }
    ChatPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.messages = new Array();
        this.restaurants = new Array();
        this.conversationService.sendMessage("").subscribe(function (data) {
            console.log(data);
            _this.updateConversation(data);
        }, function (error) {
            console.log(error);
        });
        this.generateMenue('كنتاكي');
    };
    ChatPage.prototype.generateMenue = function (restaurantName) {
        var restaurant = new Restaurant(restaurantName, 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png');
        restaurant.addMenuItem('وجبة تويستر', 15, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/twister-menu.jpg');
        restaurant.addMenuItem('وجبة مايتي زينجر', 20, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39B3QamHch8oECAqWnQ2gx68UQfbX6kQmkOL-5C5YwkJ6vLtQ');
        restaurant.addMenuItem('وجبة كريسبي ستريبس', 19, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/strips-menu-1.jpg');
        restaurant.addMenuItem('وجبة مطافي', 18, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/longer-menu-1.jpg');
        this.restaurants.push(restaurant);
    };
    ChatPage.prototype.loadMoreItems = function (restaurant) {
        restaurant.addMenuItem('وجبة دينر', 16, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/bites_Big_menu.jpg');
    };
    ChatPage.prototype.send = function () {
        var _this = this;
        this.messages.push(new Message(this.message, false));
        setTimeout(function () {
            _this.content.scrollToBottom(200);
        });
        this.conversationService.sendMessage(this.message).subscribe(function (data) {
            if (data.entities[0].entity == 'مطعم') {
                _this.updateConversationWithRestaurant(_this.restaurants[0]);
            }
            _this.updateConversation(data);
        }, function (error) {
            console.log(error);
        });
        this.message = "";
    };
    ChatPage.prototype.updateConversationWithRestaurant = function (restaurant) {
        this.messages.push(new Message("", true, true, restaurant));
    };
    ChatPage.prototype.updateConversation = function (data) {
        var _this = this;
        var msg = "";
        if (data.output.text.length >= 1) {
            msg = data.output.text.join(" ");
        }
        else if (data.output.text.length == 1) {
            msg = data.output.text[0];
        }
        this.messages.push(new Message(msg, true));
        setTimeout(function () {
            _this.content.scrollToBottom(300);
        });
    };
    ChatPage.prototype.footerTouchStart = function (event) {
        var _this = this;
        if (event.target.localName !== "input") {
            event.preventDefault();
        }
        else {
            setTimeout(function () {
                _this.content.scrollToBottom();
            }, 300);
        }
    };
    ChatPage.prototype.touchSendButton = function (event) {
        event.preventDefault();
        this.send();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/foodee/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>🍕 🍔</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="chat">\n  <div class="message" *ngFor="let msg of messages">\n    <div *ngIf="!msg.isRestaurant" [attr.class]="msg.isWatson ? \'fromThem\' : \'myMessage\'">\n      <p>{{msg.content}}</p>\n      <p class="date">{{msg.timestamp}}</p>\n    </div>\n    <div class="fromThem restaurant" *ngIf="msg.isRestaurant">\n      <img class="restaurantLogo" src="{{msg.restaurant.logoImage}}" />\n      <h3 text-center no-margin>مطعم {{msg.restaurant.name}}</h3>\n      <ion-grid>\n        <ion-row wrap>\n          <ion-col *ngFor="let item of msg.restaurant.menu" col-6>\n            <ion-card class="menuItem">\n              <img src="{{item.image}}" />\n              <ion-card-content>\n                <ion-card-title>\n                  {{item.name}}\n                </ion-card-title>\n                <p class="price">\n                  {{item.price}} ريال\n                </p>\n                <p>\n                  مع بيبسي وبطاطس.\n                </p>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <button ion-button clear large (click)="loadMoreItems(msg.restaurant)">المزيد</button>\n      </ion-grid>\n      <p class="date">{{msg.timestamp}}</p>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer (touchstart)="footerTouchStart($event)">\n  <ion-toolbar class="bottom-bar">\n    <ion-buttons left>\n      <button ion-button color="red" (touchstart)="touchSendButton($event);" [disabled]="message == \'\'">\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n    <form>\n      <ion-input type="text" placeholder="ادخل رسالتك.." [(ngModel)]="message" (keyup.enter)="send();" name="message"></ion-input>\n    </form>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/foodee/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_conversation_service_conversation_service__["a" /* ConversationServiceProvider */]])
    ], ChatPage);
    return ChatPage;
}());

var Message = /** @class */ (function () {
    function Message(content, isWatson, type, restaurant) {
        this.content = content;
        this.isWatson = isWatson;
        var date = new Date();
        this.timestamp = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        if (type) {
            this.restaurant = restaurant;
            this.isRestaurant = type;
        }
        else
            type = false;
    }
    return Message;
}());

var MenuItem = /** @class */ (function () {
    function MenuItem(name, price, image) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
    return MenuItem;
}());

var Restaurant = /** @class */ (function () {
    function Restaurant(name, logo) {
        this.name = name;
        this.menu = new Array();
        if (logo)
            this.logoImage = logo;
    }
    Restaurant.prototype.addMenuItem = function (name, price, image) {
        var menuItem = new MenuItem(name, price, image);
        this.menu.push(menuItem);
    };
    return Restaurant;
}());

//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=0.js.map