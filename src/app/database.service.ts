import {Injectable} from '@angular/core';
import {Message} from './discussion/discussion.component';
import {Observable, of} from 'rxjs';


@Injectable()
export class Database {
  currentId = 0;
  messages: Message[] = [];

  constructor() {

  }


  public add(message: Message): Observable<Message> {
    message.created = new Date();
    message.id = this.currentId++;



    this.messages.push(message);

    const result = Object.assign({}, message);

    return of(result);
  }
}
