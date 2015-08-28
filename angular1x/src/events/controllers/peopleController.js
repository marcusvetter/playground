angular.module('peopleModule')
    .controller('peopleController', ['$scope', 'peopleService', '$location', function ($scope, peopleService, $location) {

        //$scope.$on('messageKeyReturn', function () {
        //    alert('jep');
        //})
        //$scope.$emit('messageKey', {});

        var peopleSuccessCallback = function (people) {
            $scope.people = people;
        };

        var peopleErrorCallback = function (error) {
            console.log('Ooops, something went wrong ... ', error);
        };

        peopleService.getPeople(peopleSuccessCallback, peopleErrorCallback);

        $scope.settings = {
            limit: 10,
            orderProp: 'firstName'
        };

        $scope.increaseSalary = function (person) {
            person.salary = person.salary + 100;
        };

        $scope.showDetails = function (person) {
            $location.path('/peopledetails/' + person.id);
        };
    }]);