import {Component, OnInit} from '@angular/core';
import {reminderService} from '../../services/reminder.service';
import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {Reminder} from '../../model/reminder';

@Component({
  selector: 'reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  dataSource = new ReminderDataSource(this.reminderService);
  displayedColumns = ['column'];

  constructor(private reminderService: reminderService) {
  }

  ngOnInit() {
  }
}

export class ReminderDataSource extends DataSource<any> {
  constructor(private reminderService: reminderService) {
    super();
  }

  connect(): Observable<Reminder[]> {
    return this.reminderService.getReminder();
  }

  disconnect() {
  }
}
