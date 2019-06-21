import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reminder} from "../model/reminder";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RemindersService {

  constructor(private http: HttpClient) {
  }

  findReminders(resultSize = 10): Observable<Reminder[]> {
    return this.http.get('/reminders/${resultSize}').pipe(
      map(res => res["payload"])
    );
  }
}
