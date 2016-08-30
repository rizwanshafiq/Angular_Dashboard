angular.module('dashboardApp').factory('randomNumberService', function($http) {
    var num, min, max, col, base, format, md, myData;
    var newArrayTwo = [
        [],
        []
    ];
    return {
        getRandomNumbers: function() {
            $http({
                method: 'GET',
                url: 'https://www.random.org/integers/',
                params: { num: 14, min: 9, max: 80, col: 1, base: 10, format: 'plain', md: 'new' }
            }).success(function(response, data, status, config) {
                myData = response;
                return myData;
            }).error(function(data, status) {
                //error code here
            });

        },
        data: function() {return myData;}
    };
});
