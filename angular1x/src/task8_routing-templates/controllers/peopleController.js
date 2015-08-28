angular.module('peopleModule')
	.controller('peopleController', ['$scope', 'peopleService', '$location', function($scope, peopleService, $location) {
				
				var peopleSuccessCallback = function(people) {
					$scope.people = people;
				};
				
				var peopleErrorCallback = function(error) {
					console.log('Ooops, something went wrong ... ', error);
				};
				
				peopleService.getPeople(peopleSuccessCallback, peopleErrorCallback);

				$scope.limit = 10;
				$scope.orderProp = 'firstName';
				$scope.maxSalary = 7000;
				
				$scope.increaseSalary = function(person) {
					person.salary = person.salary + 100;
				};
				
				$scope.showDetails = function(person) {
					$location.path('/peopledetails/' + person.id);
				};
	}]);