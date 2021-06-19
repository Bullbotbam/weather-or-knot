var button = document
  .getElementById("searchBtn")
  .addEventListener("click", myFunction);
console.log(button);
function myFunction() {
  console.log("Hello");
}
//  Method for using "date" objects obtained from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
const currentDate = new Date(response.data.dt * 1000);
console.log(currentDate);
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();
nameEl.innerHTML =
  response.data.name + " (" + month + "/" + day + "/" + year + ") ";

  api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&appid={API key}
  fetch("https://community-open-weather-map.p.rapidapi.com/forecast?q=san%20francisco%2Cus&units=imperial&lang=english", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "5c7de9724dmsh5a75b580091d59bp1083f5jsn1a89bc56379b",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });