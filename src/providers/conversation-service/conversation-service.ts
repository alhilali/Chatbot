import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AssistantV1 } from 'watson-developer-cloud';

/*
  Generated class for the ConversationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConversationServiceProvider {
  private url = "/api/v1/workspaces/53e09771-b4bd-4076-99da-0518e2a242fd/message?version=2018-02-16";
  //private url = "https://gateway.watsonplatform.net/assistant/api/v1/workspaces/53e09771-b4bd-4076-99da-0518e2a242fd/message?version=2018-02-16";

  private assistant;
  constructor(private http: Http) {
    // console.log('Hello ConversationServiceProvider Provider');
    // this.assistant = new AssistantV1({
    //   username: '8511cc8c-6dda-419b-96ed-7f460aed5d6a',
    //   password: 'afE0uE7CiUQu',
    //   version: '2018-02-16'
    // })
    // this.assistant.message({
    //   workspace_id: '53e09771-b4bd-4076-99da-0518e2a242fd',
    //   input: { 'text': 'Hello' }
    // }, function (err, response) {
    //   if (err) {
    //     console.log('error:', err);
    //   }
    //   else {
    //     console.log(JSON.stringify(response, null, 2));
    //   }
    // });

  }

  private getHeaders(): RequestOptions {
    const token = btoa("8511cc8c-6dda-419b-96ed-7f460aed5d6a:afE0uE7CiUQu");
    let headers = new Headers({
      // 'Access-Control-Allow-Headers': 'Authorization',
      'Content-Type': 'application/json',
      'Authorization': `Basic ${token}`,
    });
    let options = new RequestOptions({ headers: headers });
    return options;
  }

  sendMessage(message: string): Observable<any> {
    let res = new ConversationDTO(message);
    return this.http.post(this.url, res.payload, this.getHeaders()).map(res => res.json());
  }

}

export class ConversationDTO {
  message: string;
  payload: any;

  constructor(message: string) {
    this.message = message;
    const bodyObject = {
      input: {
        text: this.message,
      }
    };
    this.payload = JSON.stringify(bodyObject); // Stringify payload
  }
}
