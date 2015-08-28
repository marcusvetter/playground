angular.module('peopleModule')
    .controller('sidebarController', ['$scope', function ($scope) {

        $scope.user = {
            email: ''
        };

        $scope.submit = function() {
            //alert('submitted');
        };

    }]);