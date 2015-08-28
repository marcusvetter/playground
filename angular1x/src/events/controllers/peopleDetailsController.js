angular.module('peopleModule')
	.controller('peopleDetailsController', ['$scope', 'peopleService', '$routeParams', '$location', function($scope, peopleService, $routeParams, $location) {
		var peopleDetailsSuccessCallback = function(peopleDetails) {
			$scope.peopleId = peopleDetails.peopleId;
			$scope.street = peopleDetails.street;
			$scope.houseNumber = peopleDetails.houseNumber;
			$scope.zipCode = peopleDetails.zipCode;
			$scope.town = peopleDetails.town;
		};
				
		var peopleDetailsErrorCallback = function(error) {
			console.log('Ooops, something went wrong ... ', error);
		};
				
		peopleService.getPeopleDetails($routeParams.peopleId, peopleDetailsSuccessCallback, peopleDetailsErrorCallback);
		
		$scope.showPeople = function() {
			$location.path('/people');
		};
	}
]);