angular.module('dashboardApp').controller('bubbleChartController', function($scope, randomNumberService, $q, $timeout) {


    var myData = [];
    randomNumberService.getLargeNumbers()
        .then(function(data) {
            myData[0] = data.splice(0, 3);


        });
    $scope.series = ['Series A', 'Series B'];

    $timeout(function() {
            $scope.data = [
      [{
        x: 40,
        y: 10,
        r: 20
      }],
      [{
        x: 10,
        y: 40,
        r: 50
      }]
    ];

    }, 500);


});
