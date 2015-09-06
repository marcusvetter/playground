/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {routerInjectables, RouterOutlet, RouteConfig} from 'angular2/router';

import {PeopleList} from './people-list';

@Component({
      selector: 'people-app'
})
@View({
    templateUrl: 'views/people-app.html',
    directives: [RouterOutlet]
})
@RouteConfig([
    {path : '/', redirectTo: '/list'},
    {path: '/list', component: PeopleList}
])
class PeopleApp {
}

bootstrap(PeopleApp, []);