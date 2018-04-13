import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessageService {
  messages: string[] = [];
  ipAddress: any;
  
  constructor(private _http : HttpClient) {
    this._http.get<{ip : string}>('https://jsonip.com')
    .subscribe( data => {
      this.ipAddress = data.ip;
    });
  }

  add(message: string){

    if(!this.ipAddress){
      this._http.get<{ip : string}>('https://jsonip.com')
      .subscribe( data => {
        this.ipAddress = data.ip;
        this.messages.push('[' + this.ipAddress + ']'+ message);
      });
    }else{
      this.messages.push('[' + this.ipAddress + ']'+ message);
    }
  }

  clear(){
    this.messages = [];
  }
}
