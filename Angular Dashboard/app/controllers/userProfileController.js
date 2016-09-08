angular.module('dashboardApp').controller('profileController', function($scope, randomUserService, $http, $q, $timeout) {

    $scope.user = {};
    randomUserService.getUser().then(function(data) {
        $scope.user = data;
    });
});
