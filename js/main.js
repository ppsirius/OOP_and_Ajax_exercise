function log(){try{window.console.log.apply(window.console,arguments);}catch(e){}};

document.addEventListener('DOMContentLoaded', function () {

    var table = document.querySelector('.list');

    (function(){
        var tmp = template(document.querySelector('[data-tmp]').innerHTML);
        api.list(function(list){
            for(var i = 0; i < list.length; i++) {
                log(list[i])
                var data = list[i];
                data.count = i+1;


                $('<div></div>').html(tmp(data)).find('> *').appendTo($(table));

            };


        });
    })();

}, false);




// Class

function User(firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
};

function WeatherUser(cityWeather) {
    this.cityWeather = cityWeather;
};

// Inheritance from User
WeatherUser.prototype = Object.create(User.prototype);
WeatherUser.prototype.constructor = WeatherUser;

WeatherUser.prototype.temp = function() {
    // method for yahoo API for temp
    return console.log('temp');
}

WeatherUser.prototype.humidity = function() {
    // method for yahoo API for humidity
    return console.log('humidity');
}

function MapUser(cityMap) {
    this.cityMap = cityMap;
};

// Inheritance from User
MapUser.prototype = Object.create(User.prototype);
MapUser.prototype.constructor = MapUser;

MapUser.prototype.location = function() {
    // method for Google Maps
}

//var user = new User("Jan", "Nowak", "male");
//
//var userJson = JSON.stringify(user);
//
//console.log(userJson);
//
//console.log(user);

