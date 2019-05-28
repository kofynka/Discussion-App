import { Component, OnInit } from '@angular/core';
import { Message } from '../discussion/discussion.component';
import { PusherService } from '../pusher.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  constructor(private pusher: PusherService){}
  messages: Array<Message> = [];

  ngOnInit() {
    const channel = this.pusher.init('discussion');
    channel.bind('message', (data) => {
      this.messages = this.messages.concat(data);
    });
  }
}