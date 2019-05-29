import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Database} from '../database.service';
import {Message} from './discussion.component';
import {Observable} from 'rxjs';

@Injectable()
export class DiscussionService {
  constructor(private httpClient: HttpClient, private db: Database) {

  }

  public post(message: Message): Observable<Message> {
    return this.db.add(message);
  }
}
