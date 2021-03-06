import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Reminder} from '../model/reminder';

@Injectable()
export class reminderService {
  private serviceUrl = 'http://localhost:8080/reminders';

  constructor(private http: HttpClient) {
  }

  getReminder(): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(this.serviceUrl);
  }

}
