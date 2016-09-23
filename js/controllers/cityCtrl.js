angular.module('app').controller('cityCtrl', function ($rootScope, citiesFactory) {
    var self = this;


    this.removeCity = function (city) {
        citiesFactory.removeCity(city);
    };


//SELECT CITY (ADD 'Active' CLASS AND SUBMIT QUERY)
    self.selectCity = function (city) {
        self.selected = city;
    };


    self.isActive = function (city) {
        return self.selected === city;
    };


    this.weatherQuerySubmit = function (city) {
        if (self.selected === city) {
            return;
        }
        else {
            self.selectCity(city);
            $rootScope.$emit('weatherQuery', city.cityName);
        }
    };
//////////////


});