import { Component, OnInit } from '@angular/core';
import { MessagesService } from '@juristr/ngx-tabs-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private messageService: MessagesService) {}

  ngOnInit() {}

  onSetPrefix(value: string) {
    this.messageService.setTitlePrefix(value);
  }
}
