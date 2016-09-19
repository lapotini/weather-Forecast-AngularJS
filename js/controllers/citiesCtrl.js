angular.module('app').controller('citiesCtrl', function(citiesFactory){

    this.cities = citiesFactory.getCities();

    this.addCity = function(){
        citiesFactory.addCity(this.cityName);
        this.cityName = '';
    };

});