import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Reminder} from '../model/reminder';
import {RemindersService} from './reminders.service';
import {catchError, finalize} from 'rxjs/operators';


export class RemindersDataSource implements DataSource<Reminder> {

  private remindersSubject = new BehaviorSubject<Reminder[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private remindersService: RemindersService) {
  }

  loadReminders(resultSize: number) {

    this.loadingSubject.next(true);

    this.remindersService.findReminders(resultSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(reminders => this.remindersSubject.next(reminders));

  }

  connect(collectionViewer: CollectionViewer): Observable<Reminder[]> {
    console.log('Connecting data source');
    return this.remindersSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.remindersSubject.complete();
    this.loadingSubject.complete();
  }

}
