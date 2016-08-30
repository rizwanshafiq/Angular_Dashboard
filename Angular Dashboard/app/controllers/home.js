angular.module('dashboardApp').controller('homeController', function($scope, randomNumberService, $q) {

    /*    var num, min, max, col, base, format, md;
        var newArrayTwo = [[],[]];
        $http({
            method: 'GET',
            url: 'https://www.random.org/integers/',
            params: {num: 14, min: 9, max: 80, col: 1, base:10, format: 'plain', md:'new'}
        }).success(function(response, data, status, config) {
            //console.log(response.charAt(2));
            var newArray = response.split(response.charAt(2));

            var invalidChar = newArray[2];
            console.log(invalidChar);

            for (var i = 0; i < newArray.length; i++) {
                if(newArray[i]==invalidChar){
                    newArray.splice(i, 1);
                }
            }
                console.log(newArray);
                
                newArrayTwo[[0],[0]] = newArray.splice(0,7);
                newArrayTwo[[0], [1]] = newArray.splice(0,7);
                console.log(newArrayTwo);
            //console.log(data);
            })
        .error(function(data, status){
            console.log(status);
        })*/
    var newArrayTwo = [
        [],
        []
    ];
    randomNumberService.getNumbers()
        .then(function(data) {
            $scope.myData = data;
            console.log($scope.myData);
            newArrayTwo[[0], [0]] = $scope.myData.splice(0, 7);
            newArrayTwo[[0], [1]] = $scope.myData.splice(0, 7);
            console.log(newArrayTwo);
        });



    //var newArray = generatedNumbers.split(generatedNumbers.charAt(2));
    //console.log(newArray);
    //console.log(randomNumberService.numbers());

    ///***************************************************************************
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];

    $scope.data = newArrayTwo;
    /*    $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];*/

    //console.log($scope.data);
    //$scope.data = newArrayTwo;
    $scope.onClick = function(points, evt) {
        console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
        scales: {
            yAxes: [{
                id: 'y-axis-1',
                type: 'linear',
                display: true,
                position: 'left'
            }, {
                id: 'y-axis-2',
                type: 'linear',
                display: true,
                position: 'right'
            }]
        }
    };
});
