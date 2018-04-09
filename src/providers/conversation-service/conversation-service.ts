import { Restaurant } from "./../../models/restaurant";
import { HTTP, HTTPResponse } from "@ionic-native/http";
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ConversationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConversationServiceProvider {
  private url = "/api/v1/workspaces/53e09771-b4bd-4076-99da-0518e2a242fd/message?version=2018-02-16";
  //private url = "https://gateway.watsonplatform.net/assistant/api/v1/workspaces/53e09771-b4bd-4076-99da-0518e2a242fd/message?version=2018-02-16";

  constructor(private http: Http, private http2: HTTP) {
    setTimeout(() => {
      this.sendMessage("هلا");
    }, 3000);
    setTimeout(() => {
      this.sendMessage("هلا");
    }, 6000);
  }

  private getHeaders(): RequestOptions {
    const token = btoa("8511cc8c-6dda-419b-96ed-7f460aed5d6a:afE0uE7CiUQu");
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${token}`,
    });
    let options = new RequestOptions({ headers: headers });
    return options;
  }

  sendMessage(message: string, context?: any): Observable<any> {
    let res = new ConversationDTO(message, context);
    return this.http.post(this.url, res.payload, this.getHeaders()).map(res => res.json());
  }

  // sendMessage(message: string, context?: any): Observable<any> {
  //   this.http2.setHeader("content-type", "application/json")
  //   let res = new ConversationDTO(message, context);
  //   this.http2.acceptAllCerts(true);
  //   this.http2.setDataSerializer('json');
  //   const header = this.http2.getBasicAuthHeader('8511cc8c-6dda-419b-96ed-7f460aed5d6a', 'afE0uE7CiUQu');
  //   let responseData = this.http2.post(this.url, res.bodyObject, header)
  //     .then(resp => JSON.parse(resp.data));
  //   return Observable.fromPromise(responseData);
  // }


  async processFullOrder(data: any, restaurant: Restaurant): Promise<Restaurant> {
    return new Promise<Restaurant>((resolve, reject) => {
      restaurant.resetMenu();
      let numberIndex = data.entities.findIndex(k => k.entity == 'رقم')
      let numberEntity = data.entities[numberIndex];
      let numberValue: number = numberEntity.value;
      let currentOrder: string = data.input.text;
      const splitString = currentOrder.split(" ");
      let prvsStatus = false;
      let orderFound = false;

      for (let index = 0; index < splitString.length; index++) {
        const word = splitString[index];
        let cpyIndex = index

        restaurant.findOrder(word, splitString[cpyIndex += 1]).then(([i, status]) => {
          // console.log(word + " at index " + i + " status " + status);
          if (i >= 0 && !prvsStatus) {
            restaurant.menu[i].set(Number(numberValue));
            orderFound = true;
            data.entities.splice(numberIndex, 1);
            numberIndex = data.entities.findIndex(k => k.entity == 'رقم')
            numberEntity = data.entities[numberIndex];
            if (numberEntity != null)
              numberValue = numberEntity.value;
          }
          if (index + 1 == splitString.length && !orderFound) reject(null)
          else if (index + 1 == splitString.length && orderFound) resolve(restaurant);
          prvsStatus = status
        })
      }

    })
  }


}

export class ConversationDTO {
  message: string;
  payload: any;
  bodyObject: any;

  constructor(message: string, contextBody?: any) {
    this.message = message;
    this.bodyObject = {
      input: {
        text: this.message,
      },
      context: contextBody
    };
    this.payload = JSON.stringify(this.bodyObject); // Stringify payload
  }
}
