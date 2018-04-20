import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessagesService {
  private msgSubject = new Subject<string>();

  titlePrefix$: Observable<string> = this.msgSubject.asObservable();

  constructor() {}

  setTitlePrefix(value) {
    this.msgSubject.next(value);
  }
}
