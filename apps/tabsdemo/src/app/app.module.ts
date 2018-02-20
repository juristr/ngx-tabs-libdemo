import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';

import { NgxTabsLibModule } from '@juristr/ngx-tabs-lib';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), NgxTabsLibModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
