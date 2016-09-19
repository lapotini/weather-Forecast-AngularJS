angular.module('app').controller('weatherCtrl', function ($rootScope, weatherFactory) {

    var self = this;


    $rootScope.$on('weatherQuery', function (event, city) {
        var url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=657ef7aabd3d5f744eb93ca11e2a19d4';

       self.weatherGetData(url);
    });


    self.weatherGetData = function (url) {
        self.weatherData = weatherFactory.getData(url);
        //the model returns a promise and THEN items
        self.weatherData.then(function (data) {
            self.weatherData = data;
            self.weatherWeekData = data.list.map(function (value, index) {
                if (index % 8 == 0) {
                    return value;
                }
            }).filter(function (value) {
                return value !== undefined;
            });
            console.log(self.weatherData);
        }, function (status) {
            console.log('controller error', status);
        });
    };

    //Find your location
    function tryToFindUserLocation(){
        navigator.geolocation.getCurrentPosition(onLocationFoundSuccess, onLocationFoundError);
    };
    function onLocationFoundError() {
        console.log("Unable to retrieve your location");
    };
    function onLocationFoundSuccess(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var url = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&APPID=657ef7aabd3d5f744eb93ca11e2a19d4';
        self.weatherGetData(url);
    };
    tryToFindUserLocation();


});
