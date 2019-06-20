import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemindersService {

  constructor() {
  }

  findReminders() {
    return [{"week": "1", "span": "1-7", "persons": ["Markus", "Lydia"]}, {"week": "2", "span": "8-14", "persons": []}];
  }
}
