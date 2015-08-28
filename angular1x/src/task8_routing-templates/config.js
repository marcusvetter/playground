angular.module('peopleModule')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/people', {
				templateUrl: 'views/people.html',
				controller: 'peopleController'
			})                                           
			.when('/peopledetails/:peopleId', {          
				templateUrl: 'views/peopleDetails.html', 
				controller: 'peopleDetailsController'    
			})                                           
			.otherwise({                                 
				redirectTo: '/people'                
			});
	}
]);