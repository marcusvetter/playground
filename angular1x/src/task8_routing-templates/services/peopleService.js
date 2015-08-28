angular.module('peopleModule')
	.factory('peopleService', ['$http', function($http) {
		
		var getPeople = function(successCallback, errorCallback) {
			return $http.get('/people').success(successCallback).error(errorCallback);
		};
		
		var getPeopleDetails = function(peopleId, successCallback, errorCallback) {
			return $http.get('/peopledetails/' + peopleId).success(successCallback).error(errorCallback);
		};
		
		return {
			getPeople: getPeople,
			getPeopleDetails: getPeopleDetails
		};
	}
]);