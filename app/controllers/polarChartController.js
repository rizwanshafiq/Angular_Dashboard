angular.module('dashboardApp').controller('polarChartController', function($scope, randomNumberService, $q,$timeout) {


    var myData = [];
    randomNumberService.getLargeNumbers()
        .then(function(data) {
            myData[0] = data.splice(0, 5);
        });

    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];

    $timeout(function() {
        $scope.data = myData[0];

    }, 500);



});
