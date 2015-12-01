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


//function SuperUser(cityWeather, cityMap){
//    WeatherUser.prototype.temp.call(this, cityWeather);
//};
//


var user = new User("Jan", "Nowak", "male");

console.log(user);