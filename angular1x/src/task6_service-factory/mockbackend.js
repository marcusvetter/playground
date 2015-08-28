angular.module('peopleModule').run(['$httpBackend', function($httpBackend) {

    var people = [
        { firstName: 'Michael', lastName: 'Mayer', salary: 3000	},
        { firstName: 'Christian', lastName: 'Mueller', salary: 4000 },
        { firstName: 'Florian', lastName: 'Schmidt', salary: 6000 }
    ];

    $httpBackend.whenGET('/people').respond(people);

}]);