import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';
import { NgxTabsCoreModule } from '@juristr/ngx-tabs-core';

@NgModule({
  imports: [CommonModule, NgxTabsCoreModule],
  declarations: [TabsComponent, TabComponent],
  exports: [TabsComponent, TabComponent]
})
export class NgxTabsLibModule {}
