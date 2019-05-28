import { Injectable } from '@angular/core';
    declare const Pusher: any;
    @Injectable()
    export class PusherService {
      constructor() {  
        this.pusher = new Pusher("2c4a587fd9901476e039", {
          cluster: 'eu',
          encrypted: true,
        });
      }
      pusher;
      public init(channel) {
        return this.pusher.subscribe(channel);
      }
    }