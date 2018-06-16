import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugListComponent } from './pages/bug-list/bug-list.component';
import { BugServiceService } from './services/bug-service.service';
import { TrimTextPipe } from './pipes/trim-text.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { CountPipe } from './pipes/count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugListComponent,
    TrimTextPipe,
    SortPipe,
    CountPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BugServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
