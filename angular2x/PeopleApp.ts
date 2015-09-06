/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {routerInjectables, Router, RouterOutlet, RouteConfig} from 'angular2/router';

//import {PeopleList} from './PeopleList';
@Component({
      selector: 'people-list'
})
@View({
    template: '<div>CONTENT</div>'
})
class PeopleList {
}

@Component({
      selector: 'people-app'
})
@View({
    templateUrl: 'views/people-app.html',
    directives: [RouterOutlet]
})
@RouteConfig([
    {path : '/', component: PeopleList}
])
class PeopleApp {
}

bootstrap(PeopleApp, [routerInjectables]);