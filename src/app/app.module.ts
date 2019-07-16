import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReminderComponent} from './components/reminder/reminder.component';
import {reminderService} from './services/reminder.service';
import {MatChipsModule, MatInputModule, MatTableModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ReminderComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatChipsModule
  ],
  providers: [reminderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
