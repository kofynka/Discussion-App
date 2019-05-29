import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DiscussionComponent} from './discussion/discussion.component';
import {HttpClientModule} from '@angular/common/http';
import {Database} from './database.service';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {DiscussionService} from './discussion/discussion.service';

@NgModule({
  declarations: [AppComponent, DiscussionComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [Database, DiscussionService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
