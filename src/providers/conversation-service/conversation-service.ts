import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the ConversationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConversationServiceProvider {
  private url = "/api/v1/workspaces/53e09771-b4bd-4076-99da-0518e2a242fd/message?version=2018-02-16";
  //private url = "https://gateway.watsonplatform.net/assistant/api/v1/workspaces/53e09771-b4bd-4076-99da-0518e2a242fd/message?version=2018-02-16";

  constructor(private http: Http) {

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

}

export class ConversationDTO {
  message: string;
  payload: any;

  constructor(message: string, contextBody?: any) {
    this.message = message;
    const bodyObject = {
      input: {
        text: this.message,
      },
      context: contextBody
    };
    this.payload = JSON.stringify(bodyObject); // Stringify payload
  }
}
