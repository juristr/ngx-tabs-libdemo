import { Component, ContentChildren, QueryList, AfterContentInit, OnInit } from '@angular/core';
import { TabComponent } from './tab.component';
import { Observable } from 'rxjs/Observable';
import { MessagesService } from '@juristr/ngx-tabs-core';

@Component({
  selector: 'ngx-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit {
  titlePrefix$: Observable<string>;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor(private messageService: MessagesService) {}

  ngOnInit() {
    this.titlePrefix$ = this.messageService.titlePrefix$;
  }

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter(tab => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => (tab.active = false));

    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
