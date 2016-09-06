angular.module('dashboardApp')
    .factory('randomUserService', function($http, $q, $log) {
        var num, min, max, col, base, format, md, myData;
        var numbersArray = [];

        return {
            getUser: function() {
                var defer = $q.defer();
                $http({
                    method: 'GET',
                    url: 'https://randomuser.me/api/'
                })
                .then(function(response, data, status, config) {
                    defer.resolve(response.data.results[0]);
                }, function(reason) {
                    defer.reject(reason);
                    $log.info(reason);
                })
                return defer.promise;
            }
        }
    });
