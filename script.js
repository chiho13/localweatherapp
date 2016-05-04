$(document).ready(function(){

  function initGeolocation(){
        //   if( navigator.geolocation )
        //   {
        // // Call getCurrentPosition
        //   navigator.geolocation.getCurrentPosition( function(position){
        //   var lat = position.coords.latitude;
        //   var long = position.coords.longitude;
          // console.log(position);
          // getLocation(function() {
          //
          // })
          $.ajax({
            url:'http://ip-api.com/json',
            type:'GET',
            success: function (locationApi) {
              var lat = locationApi.lat;
              var long = locationApi.lon;

          $.ajax({
            url:'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=metric&APPID=f039af3e4953478815429414ac92698a',
            type:'GET',
            success: function (weather) {
              currentWeather(weather);
            }
          });
        }
      });
    //       });
    // }

  }
  initGeolocation();
  console.log("hello");

  function currentWeather(thatweather) {
    var locationName = thatweather.name + ', ' + thatweather.sys.country;
    var currentTemp = Math.round(thatweather.main.temp) + '&deg; C';
    var conditions = thatweather.weather[0].main;
    console.log(thatweather);
    console.log(thatweather.main.temp);
    console.log(thatweather.weather[0].main);
    $("#location").html(locationName);
    $("#temp").html(currentTemp);
    $("#conditions").html(conditions);

    switch(conditions) {
      case 'Clouds':
        $('body').css("background", "url(http://upload.wikimedia.org/wikipedia/commons/6/6b/Vista_House_on_a_Cloudy_Day.JPG)");
        break;
      case 'Clear':
        $('body').css("background", "url(http://upload.wikimedia.org/wikipedia/commons/d/d3/Clear_skies_(3248430722).jpg)");
        break;
      case 'Rain':
          $('body').css("background", "url(http://upload.wikimedia.org/wikipedia/commons/8/8d/Here_comes_rain_again.jpg)");
        break;
      }
  }

  function getLocation(e){
    $.ajax({
      url:'http://ip-api.com/json',
      type:'GET',
      success: function (locationApi) {
        console.log(locationApi.lat);
          console.log(locationApi.lon);
        var lat = locationApi.lat;
        var long = locationApi.lon;
      }
    });
  }

  getLocation();



});
