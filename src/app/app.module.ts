import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugListComponent } from './pages/bug-list/bug-list.component';
import { BugServiceService } from './services/bug-service.service';
import { CountPipe } from './pipes/count.pipe';
import { UtilsModule } from './utils/utils.module';


@NgModule({
  declarations: [
    AppComponent,
    BugListComponent,
    CountPipe
  ],
  imports: [
    BrowserModule,
    UtilsModule
  ],
  providers: [
    BugServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
