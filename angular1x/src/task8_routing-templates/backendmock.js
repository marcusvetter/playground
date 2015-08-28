angular.module('peopleModule')
	.run(['$httpBackend', function($httpBackend) {
		
		var people = [
			{ id: '01', firstName: 'Michael', lastName: 'Mayer', salary: 3000 },
			{ id: '02', firstName: 'Christian', lastName: 'Mueller', salary: 4000 },
			{ id: '03', firstName: 'Florian', lastName: 'Schmidt', salary: 6000 }
		];
		
		var addresses = [
			{ peopleId: '01', street: 'Michael-Mayer-Street', houseNumber: 42, zipCode: 80939, town: 'Munich' },
			{ peopleId: '02', street: 'Christian-Mueller-Street', houseNumber: 1337, zipCode: 1024, town: 'Vienna' },
			{ peopleId: '03', street: 'Florian-Schmidt-Street', houseNumber: 24, zipCode: 6014, town: 'Innsbruck' }
		];
		
		var getAddress = function(peopleId) {
			var address;
			
			angular.forEach(addresses, function(addr) {
				if (addr.peopleId === peopleId) {
					address = addr;
				}
			});
			
			return address;
		};
		
		var peopleDetailsRegex = new RegExp('/peopledetails/([0-9]{2})');

		$httpBackend.whenGET({
			test: function (url) {
				return peopleDetailsRegex.test(url);
			}
		}).respond(function (_, url) {
			var peopleId = url.match(peopleDetailsRegex)[1];
			var address = getAddress(peopleId);
			return address ? 
					[200, address] : 
					[404, 'Not Found'];
		});
	
		$httpBackend.whenGET('/people').respond(people);
		
		// Pass through our templates
		$httpBackend.whenGET(/ü\.html/).passThrough();
	}
]);