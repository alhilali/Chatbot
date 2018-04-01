webpackJsonp([0],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat__ = __webpack_require__(279);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__chat__["a" /* ChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__chat__["a" /* ChatPage */]),
            ],
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the SuggestionsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SuggestionsComponent = /** @class */ (function () {
    function SuggestionsComponent() {
        var _this = this;
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.suggestions = ['ايش فيه مطاعم حولي؟', 'ابغى اطلب من كنتاكي', 'وريني آخر العروض', 'ايش فيه مطاعم برقر كويسه؟', 'وش صار على الطلب؟'];
        this.state = '*';
        console.log('Hello SuggestionsComponent Component');
        setTimeout(function () {
            _this.state = 'show';
        }, 2000);
    }
    SuggestionsComponent.prototype.pickSuggestion = function (suggestion) {
        this.state = '*';
        this.notify.emit(suggestion);
    };
    SuggestionsComponent.prototype.hideSuggestions = function () {
        this.state = '*';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]) === "function" && _a || Object)
    ], SuggestionsComponent.prototype, "notify", void 0);
    SuggestionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'suggestions',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/foodee/src/components/suggestions/suggestions.html"*/'<!-- Generated template for the SuggestionsComponent component -->\n<div [@fadeInOut]="state" class="suggestions">\n  <ion-scroll class="scrollable" scrollX="true">\n    <ion-row style="direction: rtl; width: 100vh;" nowrap>\n      <span *ngFor="let suggestion of suggestions">\n        <ion-chip (click)=\'pickSuggestion(suggestion)\' class="suggestion-chip">\n          <ion-label>{{suggestion}}</ion-label>\n        </ion-chip>\n      </span>\n    </ion-row>\n  </ion-scroll>\n</div>'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/foodee/src/components/suggestions/suggestions.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* trigger */])('fadeInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: '0' })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* state */])('show', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: '1' })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* transition */])('show <=> *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('300ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], SuggestionsComponent);
    return SuggestionsComponent;
    var _a;
}());

//# sourceMappingURL=suggestions.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suggestions_suggestions__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_payment__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__suggestions_suggestions__["a" /* SuggestionsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__payment_payment__["a" /* PaymentComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__suggestions_suggestions__["a" /* SuggestionsComponent */]),
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__payment_payment__["a" /* PaymentComponent */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__suggestions_suggestions__["a" /* SuggestionsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__payment_payment__["a" /* PaymentComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the PaymentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.type = 'cash';
        this.change = '50';
        console.log('Hello PaymentComponent Component');
    }
    PaymentComponent.prototype.sendOrder = function (type) {
        this.notify.emit(this.type);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], PaymentComponent.prototype, "notify", void 0);
    PaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'payment',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/foodee/src/components/payment/payment.html"*/'<!-- Generated template for the PaymentComponent component -->\n<ion-card class="receipt menuItem">\n  <ion-card-header class="receipt-header" text-center>\n    <ion-segment [(ngModel)]="type">\n      <ion-segment-button class="payment-button" value="cash">\n        <ion-icon name="cash"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button class="payment-button" value="card">\n        <ion-icon name="card"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-card-header>\n  <ion-card-content padding-horizontal>\n    <div [ngSwitch]="type">\n      <div *ngSwitchCase="\'cash\'">\n        <div padding text-center>\n          <ion-segment dir="rtl" [(ngModel)]="change">\n            <ion-segment-button class="change-button" value="50">\n              <ion-icon name="md-cash"></ion-icon>\n              <h4>50 ريال</h4>\n            </ion-segment-button>\n            <ion-segment-button class="change-button" value="100">\n              <ion-icon name="md-cash"></ion-icon>\n              <h4>100 ريال</h4>\n            </ion-segment-button>\n            <ion-segment-button class="change-button" value="500">\n              <ion-icon name="md-cash"></ion-icon>\n              <h4>500 ريال</h4>\n            </ion-segment-button>\n          </ion-segment>\n          <p>تحتاج صرف؟</p>\n        </div>\n      </div>\n      <div *ngSwitchCase="\'card\'">\n        <div class="card-container">\n          <img src="http://www.pngmart.com/files/3/Credit-Card-Visa-And-Master-Card-Transparent-PNG.png" alt="">\n          <ion-item>\n            <ion-input type="text" placeholder="NAME ON CARD"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="text" placeholder="CARD NUMBER"></ion-input>\n          </ion-item>\n          <ion-row wrap justify-content-start>\n            <ion-col col-3>\n              <ion-item>\n                <ion-input type="text" placeholder="02"></ion-input>\n              </ion-item>\n\n            </ion-col>\n            <ion-col col-4>\n              <ion-item>\n                <ion-input type="text" placeholder="2017"></ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col push-1 col-4 style="padding-right: 0px;">\n              <ion-item>\n                <ion-input type="text" placeholder="CV"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n        </div>\n      </div>\n    </div>\n  </ion-card-content>\n</ion-card>\n<div class="bottom-btns">\n  <button ion-button color="red" block (click)="sendOrder()">ارسل الطلب</button>\n</div>'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/foodee/src/components/payment/payment.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_restaurant__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_message__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conversation_service_conversation_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_suggestions_suggestions__ = __webpack_require__(276);
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
        this.restaurants = new Array();
    }
    ChatPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.conversationService.sendMessage("").subscribe(function (data) {
            console.log(data);
            _this.updateConversation(data);
        }, function (error) {
            console.log(error);
        });
        this.generateMenue(new __WEBPACK_IMPORTED_MODULE_0__models_restaurant__["a" /* Restaurant */]('كنتاكي', 'الملك عبدالعزيز - النفل', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png'));
        this.generateMenue(new __WEBPACK_IMPORTED_MODULE_0__models_restaurant__["a" /* Restaurant */]('شاورمر', 'الملك عبدالعزيز - الربيع', 'https://upload.wikimedia.org/wikipedia/commons/6/64/Shawarmer_logo.jpg'));
    };
    ChatPage.prototype.generateMenue = function (restaurant) {
        restaurant.addMenuItem('وجبة تويستر', 15, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/twister-menu.jpg');
        restaurant.addMenuItem('وجبة مايتي زينجر', 20, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39B3QamHch8oECAqWnQ2gx68UQfbX6kQmkOL-5C5YwkJ6vLtQ');
        restaurant.addMenuItem('وجبة كريسبي ستريبس', 19, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/strips-menu-1.jpg');
        restaurant.addMenuItem('وجبة مطافي', 18, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/longer-menu-1.jpg');
        this.restaurants.push(restaurant);
    };
    ChatPage.prototype.loadMoreItems = function (restaurant) {
        restaurant.addMenuItem('وجبة دينر', 16, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/bites_Big_menu.jpg');
        restaurant.addMenuItem('وجبة تويستر', 15, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/twister-menu.jpg');
    };
    ChatPage.prototype.loadMoreRestuarants = function () {
        this.generateMenue(new __WEBPACK_IMPORTED_MODULE_0__models_restaurant__["a" /* Restaurant */]('برقر كنق', 'الملك عبدالعزيز - النفل', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Burger_King_Logo.svg/1000px-Burger_King_Logo.svg.png'));
        this.generateMenue(new __WEBPACK_IMPORTED_MODULE_0__models_restaurant__["a" /* Restaurant */]('البيك', 'الملك عبدالعزيز - النفل', 'https://upload.wikimedia.org/wikipedia/ar/thumb/a/a1/Albaik_logo.svg/1200px-Albaik_logo.svg.png'));
    };
    ChatPage.prototype.send = function (msg) {
        var _this = this;
        this.suggestions.hideSuggestions();
        var message = this.message;
        console.log(msg);
        if (msg != null)
            message = msg;
        this.messages.push(new __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */](message, false));
        setTimeout(function () {
            _this.content.scrollToBottom(200);
        });
        this.conversationService.sendMessage(message).subscribe(function (data) {
            console.log(data);
            if (data.entities[0] && data.entities[0].entity == 'مطعم'
                && data.intents[0] && data.intents[0].intent == 'منيو') {
                _this.findRestaurant(data.entities[0].value).then(function (res) {
                }).then(function (_) {
                    _this.updateConversation(data);
                }).catch(function (err) {
                    _this.updateConversation(data);
                });
            }
            else if (data.intents[0] && data.intents[0].intent == 'طلب_كامل') {
                //this.processOrder(data);
            }
            else if (data.intents[0] && data.intents[0].intent == 'مطاعم_متوفره') {
                _this.listAvailableRestaurants().then(function (_) {
                    _this.updateConversation(data);
                });
            }
            else {
                _this.updateConversation(data);
            }
        }, function (error) {
            console.log(error);
        });
        this.message = "";
    };
    ChatPage.prototype.findRestaurant = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.restaurants.forEach(function (res, index) {
                if (res.name === name) {
                    var restaurant = res;
                    _this.updateConversationWithRestaurant(restaurant);
                    resolve(res);
                }
                if (index == _this.restaurants.length - 1) {
                    reject(null);
                }
            });
        });
    };
    ChatPage.prototype.listAvailableRestaurants = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var msg = new __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */]("", true, 'restaurants-list');
            _this.messages.push(msg);
            resolve(null);
        });
    };
    ChatPage.prototype.updateConversationWithRestaurant = function (restaurant) {
        var _this = this;
        var msg = new __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */]("", true, 'menu');
        msg.setRestaurant(restaurant);
        this.messages.push(msg);
        setTimeout(function () {
            _this.content.scrollToBottom(500);
        }, 100);
    };
    ChatPage.prototype.order = function (restaurant) {
        var _this = this;
        var msg = new __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */]("", true, 'receipt');
        restaurant.setTotal().then(function (res) {
            if (res > 0) {
                msg.setRestaurant(restaurant);
                _this.messages.push(msg);
            }
            else {
                _this.messages.push(new __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */]("لو سمحت اضف اشياء الي السلة 👀", true));
            }
        });
        setTimeout(function () {
            _this.content.scrollToBottom(500);
        });
    };
    ChatPage.prototype.sendOrder = function (type, restaurant) {
        var _this = this;
        this.conversationService.sendMessage("ارسل").subscribe(function (data) {
            console.log(data);
            _this.updateConversation(data);
        }, function (error) {
            console.log(error);
        });
    };
    ChatPage.prototype.pay = function (restaurant) {
        var _this = this;
        var msg = new __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */]("", true, 'payment');
        msg.setRestaurant(restaurant);
        this.messages.push(msg);
        setTimeout(function () {
            _this.content.scrollToBottom(500);
        }, 100);
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
        this.messages.push(new __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */](msg, true));
        setTimeout(function () {
            _this.content.scrollToBottom(100);
        });
    };
    ChatPage.prototype.pickSuggestion = function (suggestion) {
        this.send(suggestion);
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
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_8" /* ViewChild */])('suggestions'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__components_suggestions_suggestions__["a" /* SuggestionsComponent */])
    ], ChatPage.prototype, "suggestions", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/foodee/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="gold">\n    <ion-title>\n      <img class="title-image" src="https://pizza-t.net/assets/front/food_oddappz/images/food_oddappz.png?1522516070" height="40"\n        alt="">\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="chat">\n  <div class="message" *ngFor="let msg of messages">\n    <div *ngIf="msg.type === \'regular\'" [attr.class]="msg.isWatson ? \'fromThem\' : \'myMessage\'">\n      <p>{{msg.content}}</p>\n      <p class="date">{{msg.timestamp}}</p>\n    </div>\n    <div class="fromThem nohover restaurant" *ngIf="msg.type === \'menu\'">\n      <img class="restaurantLogo" src="{{msg.restaurant.logoImage}}" />\n      <h3 text-center no-margin>مطعم {{msg.restaurant.name}}</h3>\n      <ion-grid>\n        <ion-row wrap style="text-align: -webkit-center;">\n          <ion-col *ngFor="let item of msg.restaurant.menu">\n            <ion-card [@fadeInOut] class="menuItem sm-card" no-margin>\n              <img src="{{item.image}}" />\n              <ion-card-content>\n                <ion-card-title>\n                  {{item.name}}\n                </ion-card-title>\n                <p class="price">\n                  {{item.price}} ريال\n                </p>\n                <ion-row class="button-bar" wrap align-items-center justify-content-around>\n                  <button color="smoke" ion-button icon-only small>\n                    <ion-icon color="red" name="ios-settings"></ion-icon>\n                  </button>\n                  <button ion-button icon-only clear (click)="item.remove()">\n                    <ion-icon color="red" name="remove"></ion-icon>\n                  </button>\n                  <p>{{item.quantitiy}}</p>\n                  <button ion-button icon-only clear (click)="item.add()">\n                    <ion-icon color="red" name="add"></ion-icon>\n                  </button>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <div class="bottom-btns">\n          <button ion-button color="red" block (click)="order(msg.restaurant)">اطلب</button>\n          <button ion-button clear block icon-only (click)="loadMoreItems(msg.restaurant)">\n            <ion-icon color="red" name="ios-arrow-down"></ion-icon>\n          </button>\n        </div>\n      </ion-grid>\n    </div>\n    <div class="fromThem nohover restaurant" *ngIf="msg.type === \'restaurants-list\'">\n      <ion-grid>\n        <ion-row wrap style="text-align: -webkit-center;">\n          <ion-col *ngFor="let restaurant of restaurants">\n            <ion-card [@fadeInOut] class="menuItem sm-card smallCard" no-margin>\n              <img class="restaurants-list-logo" src="{{restaurant.logoImage}}" />\n              <ion-card-content padding-horizontal>\n                <ion-card-title>\n                  {{restaurant.name}}\n                </ion-card-title>\n                <p class="price">\n                  {{restaurant.location}}\n                </p>\n\n                <button ion-button outline small block color="red" (click)="updateConversationWithRestaurant(restaurant)">اطلب</button>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <button ion-button clear block icon-only (click)="loadMoreRestuarants()">\n          <ion-icon color="red" name="ios-arrow-down"></ion-icon>\n        </button>\n      </ion-grid>\n    </div>\n    <div class="fromThem nohover restaurant" *ngIf="msg.type === \'receipt\'">\n      <ion-card class="receipt menuItem">\n        <ion-card-header class="receipt-header" text-center>\n          ملخص الطلب من {{msg.restaurant.name}}\n        </ion-card-header>\n\n        <ion-list>\n          <span *ngFor="let item of msg.restaurant.menu">\n            <ion-item *ngIf="item.quantitiy > 0">\n              <ion-avatar item-start>\n                <img src="{{item.image}}">\n              </ion-avatar>\n              <ion-row justify-content-between>\n                <h2>{{item.name}}</h2>\n                <h2 class="red">x {{item.quantitiy}}</h2>\n              </ion-row>\n              <p>\n                {{item.price}} ريال\n              </p>\n            </ion-item>\n          </span>\n          <ion-item item-end>\n            <h3>الاجمالي</h3>\n            <h3 class="red">{{msg.restaurant.total}} ريال</h3>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n      <div class="bottom-btns">\n        <button ion-button color="red" block (click)="pay(msg.restaurant)">ادفع</button>\n        <button ion-button color="red" block outline (click)="updateConversationWithRestaurant(msg.restaurant)">تعديل</button>\n      </div>\n    </div>\n    <div class="fromThem nohover restaurant" *ngIf="msg.type === \'payment\'">\n      <payment (notify)=\'sendOrder($event, msg.restaurant)\'></payment>\n    </div>\n  </div>\n  <suggestions #suggestions (notify)=\'pickSuggestion($event)\'></suggestions>\n</ion-content>\n\n<ion-footer (touchstart)="footerTouchStart($event)">\n  <ion-toolbar class="bottom-bar">\n    <ion-buttons left>\n      <button ion-button color="red" (touchstart)="touchSendButton($event);" [disabled]="message == \'\'">\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n    <form>\n      <ion-input class="message" type="text" placeholder="ادخل رسالتك.." [(ngModel)]="message" (keyup.enter)="send();" name="message"></ion-input>\n    </form>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/foodee/src/pages/chat/chat.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_23" /* trigger */])('fadeInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_20" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_21" /* style */])({ opacity: '0' })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_20" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_21" /* style */])({ opacity: '1' })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_22" /* transition */])('void <=> *', Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_13" /* animate */])('300ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_conversation_service_conversation_service__["a" /* ConversationServiceProvider */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Restaurant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menuItem__ = __webpack_require__(281);

var Restaurant = /** @class */ (function () {
    function Restaurant(name, location, logo) {
        this.total = 0;
        this.name = name;
        this.menu = new Array();
        if (logo != null)
            this.logoImage = logo;
        if (location != null)
            this.location = location;
    }
    Restaurant.prototype.addMenuItem = function (name, price, image) {
        var menuItem = new __WEBPACK_IMPORTED_MODULE_0__menuItem__["a" /* MenuItem */](name, price, image);
        this.menu.push(menuItem);
    };
    Restaurant.prototype.setTotal = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var total = 0;
            _this.menu.forEach(function (item, index) {
                total += item.price * item.quantitiy;
                if (index == _this.menu.length - 1) {
                    _this.total = total;
                    resolve(_this.total);
                }
            });
        });
    };
    return Restaurant;
}());

//# sourceMappingURL=restaurant.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItem; });
var MenuItem = /** @class */ (function () {
    function MenuItem(name, price, image) {
        this.name = name;
        this.price = price;
        this.quantitiy = 0;
        if (image != null)
            this.image = image;
    }
    MenuItem.prototype.add = function () {
        this.quantitiy++;
    };
    MenuItem.prototype.remove = function () {
        if (this.quantitiy > 0)
            this.quantitiy--;
    };
    return MenuItem;
}());

//# sourceMappingURL=menuItem.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(content, isWatson, type) {
        this.content = content;
        this.isWatson = isWatson;
        var date = new Date();
        this.timestamp = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        if (type != null) {
            this.type = type;
        }
        else
            this.type = 'regular';
    }
    Message.prototype.setRestaurant = function (restaurant) {
        this.restaurant = restaurant;
    };
    return Message;
}());

//# sourceMappingURL=message.js.map

/***/ })

});
//# sourceMappingURL=0.js.map