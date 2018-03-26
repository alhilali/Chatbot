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
    function ChatPage(navCtrl, navParams, conversationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.conversationService = conversationService;
        this.message = "";
        this.messages = new Array();
    }
    ChatPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.messages = new Array();
        this.conversationService.sendMessage("").subscribe(function (data) {
            console.log(data);
            _this.updateConversation(data);
        }, function (error) {
            console.log(error);
        });
    };
    ChatPage.prototype.send = function () {
        var _this = this;
        this.messages.push(new Message(this.message, false));
        this.conversationService.sendMessage(this.message).subscribe(function (data) {
            console.log(data);
            _this.updateConversation(data);
        }, function (error) {
            console.log(error);
        });
        this.message = "";
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
        console.log(event.target.localName);
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
            selector: 'page-chat',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/foodee/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>chat</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="chat">\n  <div class="messages">\n    <div class="message" *ngFor="let msg of messages">\n      <div [attr.class]="msg.isWatson ? \'fromThem\' : \'myMessage\'">\n        <p>{{msg.content}}</p>\n        <p class="date">{{msg.timestamp}}</p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer (touchstart)="footerTouchStart($event)">\n  <ion-toolbar class="bottom-bar">\n    <ion-buttons left>\n      <button ion-button color="primary" (touchstart)="touchSendButton($event);" [disabled]="message == \'\'">\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n    <form>\n      <ion-input type="text" placeholder="ادخل رسالتك.." [(ngModel)]="message" (keyup.enter)="send();" name="message"></ion-input>\n    </form>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/foodee/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_conversation_service_conversation_service__["a" /* ConversationServiceProvider */]])
    ], ChatPage);
    return ChatPage;
}());

var Message = /** @class */ (function () {
    function Message(content, isWatson) {
        this.content = content;
        this.isWatson = isWatson;
        var date = new Date();
        this.timestamp = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    }
    return Message;
}());

//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=0.js.map