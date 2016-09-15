angular.module('dashboardApp').controller('barChartController', function($scope, randomNumberService, $q) {


    var myData = [
        [],
        []
    ];
    randomNumberService.getNumbers()
        .then(function(data) {
            myData[[0], [0]] = data.splice(0, 7);
            myData[[0], [1]] = data.splice(0, 7);
        });

    $scope.data = myData;
    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];



});
