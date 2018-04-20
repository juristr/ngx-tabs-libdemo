import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';

import { NgxTabsLibModule } from '@juristr/ngx-tabs-lib';
import { NgxTabsCoreModule } from '@juristr/ngx-tabs-core';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), NgxTabsLibModule, NgxTabsCoreModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
