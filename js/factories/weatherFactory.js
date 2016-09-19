angular.module('app').factory('weatherFactory', function ($http, $q) {
    var self = this;
    var service = {};



    service.getData = function (url) {

        var deferred = $q.defer();

        $http.get(url).success(function (data, status, headers, config) {
            deferred.resolve(data);
            console.log(data);
        }).error(function (data, status, headers, config) {
            deferred.reject(status);
            console.log('error ', status);
        });
        return deferred.promise;
    };




    return service;


});
