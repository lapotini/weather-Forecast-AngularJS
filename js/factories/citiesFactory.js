angular.module('app').factory('citiesFactory', function () {
    var service = {};


    var cities = [
        {
            cityName: 'Luhansk'
        },
        {
            cityName: 'Kiev'
        },
        {
            cityName: 'Odessa'
        }
    ];


    //var dataService = {
    //    setData: function setData(itemName, value) {
    //        return localStorage.setItem(itemName, JSON.stringify(value));
    //    },
    //    getData: function getData(itemName) {
    //        return localStorage.getItem(itemName);
    //    }
    //
    //};
    //
    //
    //dataService.setData('citiesList', cities);
    //var test = JSON.parse(dataService.getData('citiesList'));



    service.getCities = function () {
        return cities;
    };

    service.addCity = function (cityName) {
        var cityValidName = cityName.replace(/[^a-zA-Z _-]+/g, "");
        if (cityValidName.length > 2) {
            cities.push({
                cityName: cityValidName
            });
        }
    };

    service.removeCity = function (city) {
        if (cities.length > 1) {
            for (var i = 0; i < cities.length; i++) {
                if (cities[i] == city) {
                    cities.splice(i, 1);
                }
            }
        }
    };

    return service;

});