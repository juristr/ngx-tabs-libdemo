import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesService } from './messages.service';

@NgModule({
  imports: [CommonModule]
})
export class NgxTabsCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxTabsCoreModule,
      providers: [MessagesService]
    };
  }
}
