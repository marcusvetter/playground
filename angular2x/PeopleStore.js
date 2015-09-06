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
var Person = (function () {
    function Person(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    return Person;
})();
exports.Person = Person;
var PeopleStore = (function () {
    function PeopleStore() {
        this.people = [];
        this.addPerson('Michael', 3000);
        this.addPerson('Christian', 4300);
        this.addPerson('Sarah', 8921);
    }
    PeopleStore.prototype.getPeople = function () {
        return this.people;
    };
    PeopleStore.prototype.addPerson = function (name, salary) {
        this.people.push(new Person(name, salary));
    };
    PeopleStore.prototype.goToDetails = function (p) {
    };
    PeopleStore = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PeopleStore);
    return PeopleStore;
})();
exports.PeopleStore = PeopleStore;
