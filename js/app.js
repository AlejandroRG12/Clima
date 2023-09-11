const btnGetWeather = document.getElementById('btnGetWeather');
const citySearch = document.getElementById('city');
let cityFound = {};


btnGetWeather.addEventListener('click', () => {
    if(citySearch.value.trim().length > 0){
        getWeather(citySearch.value)
    } else {
        alert('ciudad Vacia... no joals');
        citySearch.focus()
    }
});

const newData = () => {
    const city = document.getElementById('newCity');
    const temp = document.getElementById('temp');
    const aqi_remark = document.getElementById('aqi_remark');
    const wind = document.getElementById('wind');
    const humidity = document.getElementById('humidity');
    const hour = document.getElementById('hour');
    const expectedTemp = document.getElementById('expectedTemp');
    city.textContent = cityFound.city;
    temp.textContent = cityFound.temp;
    hour.textContent = cityFound.hour;
    wind.textContent = cityFound.wind;
    humidity.textContent = cityFound.humidity;
    expectedTemp.textContent = cityFound.expected_temp;
    aqi_remark.textContent = cityFound.aqi_remark

}
