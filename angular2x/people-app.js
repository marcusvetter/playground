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
var router_1 = require('angular2/router');
var people_list_1 = require('./people-list');
var PeopleApp = (function () {
    function PeopleApp() {
    }
    PeopleApp = __decorate([
        angular2_1.Component({
            selector: 'people-app'
        }),
        angular2_1.View({
            templateUrl: 'views/people-app.html',
            directives: [router_1.RouterOutlet]
        }),
        router_1.RouteConfig([
            { path: '/', redirectTo: '/list' },
            { path: '/list', component: people_list_1.PeopleList }
        ]), 
        __metadata('design:paramtypes', [])
    ], PeopleApp);
    return PeopleApp;
})();
angular2_1.bootstrap(PeopleApp, []);
