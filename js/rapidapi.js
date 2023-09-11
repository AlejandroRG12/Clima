

const getWeather = async (city) => {
    const url = `https://the-weather-api.p.rapidapi.com/api/weather/${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b9b74838d6msheb05578c1835060p1c14f5jsn55f713d29745',
            'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if(result.success){
            cityFound = result.data;
            console.log(result.data);
            newData();
        } else {
            alert('City was not found');
        }
    } catch (error) {
        console.error(error);
    }
}




