angular.module('dashboardApp').controller('doughnutChartController', function($scope, randomNumberService, $q, $timeout) {


    var myData = [];
    randomNumberService.getLargeNumbers()
        .then(function(data) {
            myData[0] = data.splice(0, 3);

        });
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];

    $timeout(function() {
        $scope.data = myData[0];

    }, 500);


});
