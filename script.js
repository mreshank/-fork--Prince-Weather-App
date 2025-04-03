const API_KEY = "C3BCZJV82TWLGY56XVTDBCKL6";
const search = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const temperature = document.getElementById("temperature");
const place = document.getElementById("place");
const humidity = document.getElementById("humidity-value");
const windSpeed = document.getElementById("wind-speed-value");

function searchLocation(e) {
  e.preventDefault();
  getData(search.value);
}

function getData(location) {
  document.querySelector("#errorBox").innerText = "";
  const api_url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;
  fetch(api_url)
    .then((data) => data.json())
    .then(displayData)
    .catch((err) => {
      console.log("CATCH: ", err, err.message.startsWith("Unexpected token"));

      document.querySelector("#errorBox").innerText =
        err.message ||
        "An error occurred with Location Entered. Please try again";
      if (err.message.startsWith("Unexpected token"))
        document.querySelector("#errorBox").innerText =
          "Invalid Location Entered!";
    });
}

function displayData(data) {
  localStorage?.setItem("location", data?.address); // added to store the location in local storage

  const temp = fahrenheitToCelsius(data.days[0].temp);
  temperature.innerHTML = `${temp}<sup>o</sup>C`;
  place.textContent = data.address;
  humidity.textContent = data.days[0].humidity;
  windSpeed.textContent = data.days[0].windspeed;
}

function fahrenheitToCelsius(fahrenheit) {
  return (((fahrenheit - 32) * 5) / 9).toFixed(1);
}

searchBtn.addEventListener("click", (e) => searchLocation(e));
search.addEventListener("submit", (e) => searchLocation(e));

window?.addEventListener("load", (e) => {
  e.preventDefault();
  const loc = localStorage.getItem("location");
  if (loc) {
    getData(loc);
  } else {
    // getData("London");/
    document.querySelector("#errorBox").innerText =
      "Please search for a location";
  }
});

