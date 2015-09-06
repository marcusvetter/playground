/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View/*, NgFor, NgIf*/} from 'angular2/angular2';
//import {Person, PeopleStore} from 'people-store';

@Component({
      selector: 'people-list'
})
@View({
    template: '<div>CONTENT</div>'
})
class PeopleList {
    constructor() {
    }
}
/*
@Component({
      selector: 'people-list'
})
@View({
    template: '<div>CONTENT</div>'
    //templateUrl: 'views/people-list.html'
    //,directives: [NgFor, NgIf]
})
class PeopleList {
    private people: Array<Person>;
    
    constructor() {
        console.log('LOAD PEOPLE_LIST');
        const peopleStore = new PeopleStore();
        this.people = peopleStore.getPeople();
    }
    
    public increaseSalary(person: Person, change: string): void {
        person.salary = person.salary + (+change);
    }

    public isMaxSalaryReached(p: Person) {
        return p.salary > 6000;
    }
}*/