/// <reference path="typings/angular2/angular2.d.ts" />

import {Injectable} from 'angular2/angular2';

export class Person {
    constructor(public name: string, public salary: number) {
    }
}

@Injectable()
export class PeopleStore {

    private people: Array<Person>;
    
    constructor() {
        this.people = [];
        this.addPerson('Michael', 3000);
        this.addPerson('Christian', 4300);
        this.addPerson('Sarah', 8921);
    }
    
    public getPeople(): Array<Person> {
        return this.people;
    }
    
    public addPerson(name: string, salary: number): void {
        this.people.push(new Person(name, salary));
    }
    
    public goToDetails(p: Person) {

    }
}