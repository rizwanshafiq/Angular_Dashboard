angular.module('dashboardApp').controller('radarChartController', function($scope, randomNumberService, $q) {


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
     $scope.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];


});
