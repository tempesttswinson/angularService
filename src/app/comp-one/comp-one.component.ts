import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {

  peeps: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    //this.peeps = this.personService.getPerson();
  }

  get data(): Person[] {
    return this.personService.getPerson();
  }

  // getPeeps() {
  //   this.personService.getPeople().subscribe(p => this.peeps = p);
  // }

}
