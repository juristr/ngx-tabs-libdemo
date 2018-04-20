import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessagesService {
  private msgSubject = new Subject<string>();

  titlePrefix$ = this.msgSubject.asObservable();

  constructor() {}

  setTitlePrefix(value) {
    this.msgSubject.next(value);
  }
}
