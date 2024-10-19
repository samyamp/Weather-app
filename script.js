let  weatherKey = "05d3648c98ea595a77e6ec3702143b76";
let place = "London"
const weatherAPI = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=05d3648c98ea595a77e6ec3702143b76";

// Make a GET request
fetch(weatherAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });