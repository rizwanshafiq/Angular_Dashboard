angular.module('dashboardApp').controller('doughnutChartController', function($scope, randomNumberService, $q) {


    var myData = [];
    randomNumberService.getNumbers()
        .then(function(data) {
            myData[0] = data.splice(0, 3);
        });
    $scope.data = myData;
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
});
