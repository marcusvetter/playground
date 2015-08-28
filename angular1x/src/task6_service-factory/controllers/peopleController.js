angular.module('peopleModule')
	.controller('peopleController', ['$scope', 'peopleService', function($scope, peopleService) {
				
				//peopleService.getPeople().then(function(data) {
				//	$scope.people = data;
				//});

				$scope.testLimit = peopleService.getLimit('asap', {data: 3});

				$scope.limit = 10;
				$scope.orderProp = 'firstName';
				$scope.maxSalary = 7000;
				
				$scope.increaseSalary = function(person) {
					person.salary = person.salary + 100;
				};
	}]);