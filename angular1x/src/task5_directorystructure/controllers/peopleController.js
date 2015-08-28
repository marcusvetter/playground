angular.module("peopleModule")
	.controller("peopleController", ['$scope', function($scope) {
				$scope.people = [
					{ firstName: 'Michael', lastName: 'Mayer', salary: 3000	}, 
					{ firstName: 'Christian', lastName: 'Mueller', salary: 4000 }, 
					{ firstName: 'Florian', lastName: 'Schmidt', salary: 6000 }
				];

				$scope.limit = 10;
				$scope.orderProp = 'firstName';
				$scope.maxSalary = 7000;
				
				$scope.increaseSalary = function(person) {
					person.salary = person.salary + 100;
				};
	}]);