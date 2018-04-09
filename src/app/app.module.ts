import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { NgxTabsLibModule } from 'projects/ngx-tabs-lib';
// import { NgxTabsLibModule } from 'projects/ngx-tabs-lib/src/public_api';
import { NgxTabsLibModule } from '@juristr/ngx-tabs-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxTabsLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
