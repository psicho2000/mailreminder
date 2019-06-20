import {Component, OnInit} from '@angular/core';
import {RemindersService} from "./reminders.service";

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {

  displayedColumns = ["week", "span", "persons"];
  reminderService = new RemindersService();

  constructor() {
  }

  ngOnInit() {
  }

}
