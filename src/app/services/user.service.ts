import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable()
export class UserService {
  private serviceUrl2 = 'http://localhost:8080/reminders/10';
  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }

}
