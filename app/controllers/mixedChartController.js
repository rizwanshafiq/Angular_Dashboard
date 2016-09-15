angular.module('dashboardApp').controller('mixedChartController', function($scope, randomNumberService, $q, $timeout) {


    var myData = [
        [],
        []
    ];
    randomNumberService.getNumbers()
        .then(function(data) {
            myData[[0], [0]] = data.splice(0, 7);
            myData[[0], [1]] = data.splice(0, 7);
        });

    $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

    $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    $timeout(function() {
        $scope.data = myData;
        $scope.datasetOverride = [{
            label: "Bar chart",
            borderWidth: 1,
            type: 'bar'
        }, {
            label: "Line chart",
            borderWidth: 3,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            type: 'line'
        }];

    }, 500);






});
