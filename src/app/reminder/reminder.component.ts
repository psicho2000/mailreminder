import {Component, OnInit} from '@angular/core';
import {RemindersDataSource} from './reminders.datasource';
import {RemindersService} from './reminders.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {

  displayedColumns = ['week', 'span', 'persons'];
  remindersDataSource: RemindersDataSource;

  constructor(private remindersService: RemindersService) {
  }

  ngOnInit() {
    this.remindersDataSource = new RemindersDataSource(this.remindersService);
    this.remindersDataSource.loadReminders(10);
  }

}
