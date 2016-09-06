angular.module('dashboardApp').controller('profileController', function($scope, randomUserService, $http, $q, $timeout) {

    $scope.user = {};
    randomUserService.getUser().then(function(data) {
        angular.copy(data, $scope.user);
    });
});
