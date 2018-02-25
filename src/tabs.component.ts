import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit
} from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'ngx-tabs',
  template: `
    <ul class="nav nav-tabs">
    <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a href="#">{{tab.tabTitle}}</a>
    </li>
  </ul>
  <ng-content></ng-content>
  `,
  // styleUrls: ['./tabs.component.css']
  styles: [
    `
  .nav-tabs:before {
    box-sizing: border-box;
  }
  
  .nav-tabs:after {
    box-sizing: border-box;
  }
  
  .nav {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    height: 43px;
  }
  
  ol,
  ul {
    margin-top: 0;
    margin-bottom: 10px;
  }
  
  a {
    color: #337ab7;
    text-decoration: none;
  }
  
  .nav-tabs {
    border-bottom: 1px solid #ddd;
  }
  
  .nav-tabs > li.active > a,
  .nav-tabs > li.active > a:focus,
  .nav-tabs > li.active > a:hover {
    color: #555;
    cursor: default;
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
  }
  
  .nav-tabs > li > a {
    margin-right: 2px;
    line-height: 1.42857143;
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
  }
  
  .nav > li > a {
    position: relative;
    display: block;
    padding: 10px 15px;
  }
  
  .nav-tabs > li {
    float: left;
    margin-bottom: -1px;
  }
  .nav > li {
    position: relative;
    display: block;
  }  
  `
  ]
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

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
