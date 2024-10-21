const weatherKey = "05d3648c98ea595a77e6ec3702143b76";
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=05d3648c98ea595a77e6ec3702143b76
const searchButton = document.querySelector(".searchbar button");
const search = document.querySelector(".searchbar input");

async function checkWeather(location){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherKey}&units=metric`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    document.querySelector(".name").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".windSpeed").innerHTML = data.wind.speed + " mph";
    document.querySelector(".humidtyPercentage").innerHTML = data.main.humidity + "%";
    console.log(data.weather[0].main)
    if (data.weather[0].main == "Rain"){
      document.querySelector(".icon").src="icons/rainy-5.svg"
    }else if(data.weather[0].main == "Clouds"){
      document.querySelector(".icon").src="icons/cloudy.svg"
    }else if(data.weather[0].main == "Clear"){
      document.querySelector(".icon").src="icons/day.svg"
    }else if(data.weather[0].main == "Snow"){
      document.querySelector(".icon").src="icons/snowy-2.svg"
    }else if(data.weather[0].main == "Thunderstorm"){
      document.querySelector(".icon").src="icons/thunder.svg"
    }else{
      console.log("Noithing")
      console.log(data.weather[0].main)
    }


  })
  .catch(error => {
    console.error('Error caught:', error);
  });
}

checkWeather("London")


searchButton.addEventListener("click", ()=>{
  checkWeather(search.value);
})






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