const API_KEY = "C3BCZJV82TWLGY56XVTDBCKL6"
const search = document.getElementById('search')
const searchBtn = document.getElementById('search-btn')
const temperature = document.getElementById('temperature')
const place = document.getElementById('place')
const humidity = document.getElementById('humidity-value')
const windSpeed = document.getElementById('wind-speed-value')

function operation(e){
    e.preventDefault()
    const loc = search.value
    const api_url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?key=${API_KEY}`
    fetch(api_url).then((data)=>{
        return data.json()
    }).then(displayData)
}

function displayData(data){ 
    const temp = fahrenheitToCelsius(data.days[0].temp)
    temperature.innerHTML = `${temp}<sup>o</sup>C`;
    place.textContent = data.address
    humidity.textContent = data.days[0].humidity
    windSpeed.textContent = data.days[0].windspeed
}

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5/9).toFixed(1);
}

searchBtn.addEventListener('click' , (e)=>{
    e.preventDefault()
    operation(e)
})





const data = {  
    "queryCost": 1,
    "latitude": 51.5064,
    "longitude": -0.12721,
    "resolvedAddress": "London, England, United Kingdom",
    "address": "London,UK",
    "timezone": "Europe/London",
    "tzoffset": 0,
    "description": "Similar temperatures continuing with a chance of rain tomorrow.",
    "days": [
        {
            "datetime": "2025-03-22",
            "datetimeEpoch": 1742601600,
            "tempmax": 61.1,
            "tempmin": 50.3,
            "temp": 55.4,
            "feelslikemax": 61.1,
            "feelslikemin": 50.3,
            "feelslike": 55.4,
            "dew": 49.5,
            "humidity": 81,
            "precip": 0.158,
            "precipprob": 100,
            "precipcover": 33.33,
            "preciptype": [
                "rain"
            ],
            "snow": 0,
            "snowdepth": 0,
            "windgust": 15.9,
            "windspeed": 9.7,
            "winddir": 107.6,
            "pressure": 999.9,
            "cloudcover": 63.8,
            "visibility": 6.9,
            "solarradiation": 62.2,
            "solarenergy": 5.3,
            "uvindex": 3,
            "severerisk": 10,
            "sunrise": "05:58:14",
            "sunriseEpoch": 1742623094,
            "sunset": "18:17:27",
            "sunsetEpoch": 1742667447,
            "moonphase": 0.75,
            "conditions": "Rain, Partially cloudy",
            "description": "Partly cloudy throughout the day with rain.",
            "icon": "rain",
            "stations": [
                "EGWU",
                "EGLL",
                "D5621",
                "EGLC"
            ],
            "source": "comb",
}
]
}

