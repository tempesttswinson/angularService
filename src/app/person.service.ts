import { Injectable } from '@angular/core';
import { Person } from './person';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private peeps: Person[] = [
    new Person("Tempestt Swinson", "blush")
  ];

  constructor() { }

  getPerson(): Person[] {
    return this.peeps;
  }

  getPeople(): Observable<Person[]> {
    return of(this.peeps);
  }
}
