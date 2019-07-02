import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatInputModule, MatTableModule} from '@angular/material';
import {UsertableComponent} from './components/usertable/usertable.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
