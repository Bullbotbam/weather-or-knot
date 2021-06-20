let searchBtn = document.querySelector("#search-btn")
let citySearch = document.querySelector("#search-box")
  searchBtn.addEventListener("click", ()=>{
    console.log("button");
    weatherApp()
  });




// function to make API call

async function weatherApp  () {
  // openweathermap url endpoint  
const URL = "https:/api.openweathermap.org/data/2.5/forecast?q="

// api key 
const API_KEY = "&appid=2cbbc321cf75eab66be5e594226b3a84"
  console.log("Hello");
  
  let response = await fetch(`${URL} + ${API_KEY}`)
  console.log(response)

  // collect data received to API
  let data = await response.json()
  console.log(data)
}

function useApiData (data){
  // assign the data to be used to the container
  document.querySelector("#search-display").innerHTML = `<div class="card col-8 offset-2">
  <div class="card">
  <div class="card-body">
  <h4 class="city-name">${data.city}</h4>  
    This is some text within a card body.
  </div>
</div>`
}


//   .then(function(response) {
  //     return response.json()
  // })
  // .catch(err => {
  //   console.error(err);
  // });


//  Method for using "date" objects obtained from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// const currentDate = new Date(response.data.dt * 1000);
// console.log(currentDate);
// const day = currentDate.getDate();
// const month = currentDate.getMonth() + 1;
// const year = currentDate.getFullYear();
// nameEl.innerHTML =
//   response.data.name + " (" + month + "/" + day + "/" + year + ") ";