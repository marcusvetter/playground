/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
//import {Person, PeopleStore} from 'people-store';
var PeopleList = (function () {
    function PeopleList() {
    }
    PeopleList = __decorate([
        angular2_1.Component({
            selector: 'people-list'
        }),
        angular2_1.View({
            template: '<div>CONTENT</div>'
        }), 
        __metadata('design:paramtypes', [])
    ], PeopleList);
    return PeopleList;
})();
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
