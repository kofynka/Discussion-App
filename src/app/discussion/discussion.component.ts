import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DiscussionService} from './discussion.service';


export class Message {
  text: string;
  name: string;
  id: number;
  created: Date;
}


@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss'],
})
export class DiscussionComponent implements OnInit {
  @Output() onSendMessage: EventEmitter<Message> = new EventEmitter();

  private message: Message;

  constructor(private service: DiscussionService) {
  }


  sendMessage() {
    this.message.text = this.message.text.trim()
    this.message.name = this.message.name.trim()
    if (this.message.text !== '' && this.message.name !== '') {
      this.service.post(this.message)
        .subscribe((res: Message) => {
          this.onSendMessage.emit(this.message);
          this.message = new Message();
        });
    }
  }

  ngOnInit() {
    this.message = new Message();
  }
}
