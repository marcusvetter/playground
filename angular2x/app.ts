/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
import {Decorator} from 'angular2/angular2';
import {Location, RouteConfig, RouterLink, Router} from 'angular2/router';
import {Person, PeopleStore} from 'peopleStore';

@Component({
      selector: 'people-app'
})
@View({
    templateUrl: '/views/people-app.html',
    directives: [NgFor, NgIf]
})
@RouteConfig([
  { path: '/',       redirectTo: '/home' },
  { path: '/home',   as: 'people',   component: PeopleAppComponent }
])
class PeopleAppComponent {
    private people: Array<Person>;
    
    constructor() {
        const peopleStore = new PeopleStore();
        this.people = peopleStore.getPeople();
    }
    
    public increaseSalary(person: Person, change: string): void {
        person.salary = person.salary + (+change);
    }

    public isMaxSalaryReached(p: Person) {
        return p.salary > 6000;
    }
    
}

bootstrap(PeopleAppComponent);