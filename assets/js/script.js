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
