describe('peopleController', function () {

    beforeEach(function () {
        module('peopleModule');
    });

    it('should be true', function () {
        inject(function ($controller, $rootScope, peopleService) {

            var x = {
                y : function() {

                }
            }

            spyOn(x, 'y').and.

            spyOn(peopleService, 'getLimit').and.callFake(function() {
               return 123;
            });

            var scope = $rootScope.$new();

            $controller('peopleController', {
                $scope: scope,
                peopleService: peopleService
            });

            expect(scope.testLimit).toEqual(123);
            expect(peopleService.getLimit).toHaveBeenCalledWith('asap', jasmine.any(Object));
        });
    });

});