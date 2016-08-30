angular.module('dashboardApp')
    .factory('randomNumberService', function($http, $q) {
            var num, min, max, col, base, format, md, myData;
            var numbersArray = [];

            return {
                getNumbers: function() {
                    var defer = $q.defer();
                    $http({
                            method: 'GET',
                            url: 'https://www.random.org/integers/',
                            params: { num: 14, min: 9, max: 80, col: 1, base: 10, format: 'plain', md: 'new' }
                        })
                        .success(function(response, data, status, config) {
                            numbersArray = response.split(response.charAt(2));
                            defer.resolve(numbersArray);
                        }).error(function(data, status) {
                            defer.reject();
                        });

                    return defer.promise;
                }
            }
        });
