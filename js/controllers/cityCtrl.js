angular.module('app').controller('cityCtrl', function($rootScope, citiesFactory){
    var self = this;


    this.removeCity = function(city){
        citiesFactory.removeCity(city);
    };


    this.weatherQuerySubmit = function(city) {
        $rootScope.$emit('weatherQuery', city.cityName);
    }




});