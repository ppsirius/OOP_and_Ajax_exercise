function log(){try{window.console.log.apply(window.console,arguments);}catch(e){}};

document.addEventListener('DOMContentLoaded', function () {

    var tabel = document.querySelector('.list');

    (function(){
        api.list(function(fn){
            var list= fn;
            for(var i = 0; i < list.length; i++) {
                var elementId = list[i].id,
                    tr = document.createElement('tr'),
                    th = document.createElement('th'),
                    td = document.createElement('td');
                tr.className = "element-list";
                tr.dataset.user = elementId
                tabel.appendChild(tr); // add tr container

                //log(list[i].data.firstName);
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

