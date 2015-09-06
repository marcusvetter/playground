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
var people_store_1 = require('people-store');
var PeopleList = (function () {
    function PeopleList() {
        var peopleStore = new people_store_1.PeopleStore();
        this.people = peopleStore.getPeople();
    }
    PeopleList.prototype.increaseSalary = function (person, change) {
        person.salary = person.salary + (+change);
    };
    PeopleList.prototype.isMaxSalaryReached = function (p) {
        return p.salary > 6000;
    };
    PeopleList = __decorate([
        angular2_1.Component({
            selector: 'people-list'
        }),
        angular2_1.View({
            templateUrl: 'views/people-list.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], PeopleList);
    return PeopleList;
})();
