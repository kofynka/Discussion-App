import {Component, OnInit} from '@angular/core';
import {Message} from '../discussion/discussion.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

  messages: Message[] = [];

  ngOnInit() {

  }

  messageRec(message: Message) {
    this.messages.push(message);
  }
}
