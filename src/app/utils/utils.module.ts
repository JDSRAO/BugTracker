import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimTextPipe } from './pipes/trim-text.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';


@NgModule({
  declarations :[
    TrimTextPipe,
    SortPipe,
    TimeAgoPipe
  ],
  imports: [
    CommonModule,
  ],
  exports : [
    TrimTextPipe,
    SortPipe,
    TimeAgoPipe
  ]
})
export class UtilsModule { }
