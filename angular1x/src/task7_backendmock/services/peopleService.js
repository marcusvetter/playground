angular.module('peopleModule')
	.factory('peopleService', ['$http', function($http) {
		
		var getPeople = function(successCallback, errorCallback) {
			return $http.get('/people').success(successCallback).error(errorCallback);
		};
		
		return {
			getPeople: getPeople
		};
	}
]);