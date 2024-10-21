const weatherKey = "05d3648c98ea595a77e6ec3702143b76";
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=05d3648c98ea595a77e6ec3702143b76

async function checkWeather(location){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherKey}&units=metric`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    document.querySelector(".name").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML= data.main.temp;
    document.querySelector(".windSpeed").innerHTML = data.wind.speed;
    document.querySelector(".humidtyPercentage").innerHTML = data.main.humidity;
  })
  .catch(error => {
    console.error('Error caught:', error);
  });
}

checkWeather("Sofia")





/*
function get_temperature(location) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherKey}&units=metric`)
  .then(response => {
    if (!response.ok) {
      throw new Error("get_temperature response not working");
    }
    return response.json();
  })
  .then(data => {
    console.log(data.main.temp);
  })
  .catch(error => {
    console.error('Error caught:', error);
  });
}

function get_humidity(location) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherKey}&units=metric`)
  .then(response => {
    if (!response.ok) {
      throw new Error("get_humidity response not working");
    }
    return response.json();
  })
  .then(data => {
    console.log(data.main.humidity);
  })
  .catch(error => {
    console.error('Error caught:', error);
  });
}

function get_wind(location) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherKey}&units=imperial`)
  .then(response => {
    if (!response.ok) {
      throw new Error("get_wind response not working");
    }
    return response.json();
  })
  .then(data => {
    console.log(data.wind.speed);
  })
  .catch(error => {
    console.error('Error caught:', error);
  });
}
*/