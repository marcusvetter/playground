angular.module('peopleModule')
	.factory('peopleService', ['$http', '$q', function($http, $q) {

		var getPeople = function() {
			var deferred = $q.defer();

			$http.get('/people').success(function(data) {
				deferred.resolve(data);
			}).error(function(data) {
				deferred.reject(data);
			});

			return deferred.promise;
		};
		
		return {
			getPeople: getPeople,
			getLimit: function() {
				return 3;
			}
		};
	}
]);