const cityname = document.getElementById('cityname');
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9f10da6d1bmsh684805b33cdd894p1a9207jsn2ae129523f05',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = async (city, index) => {
  cityname.innerHTML = 'Weather at ' + city;
  try {
    const response = await fetch(url + city, options);
    const result = await response.json(); // Parse response as JSON

    const weatherTable = document.getElementById('weatherTable');
    const rows = weatherTable.getElementsByTagName('tr');
    const cells = rows[index].getElementsByTagName('td');
    cells[0].textContent = city;
    cells[1].textContent = result.cloud_pct;
    cells[2].textContent = result.temp;
    cells[3].textContent = result.humidity;
    cells[4].textContent = result.min_temp;
    cells[5].textContent = result.max_temp;
    cells[6].textContent = result.wind_speed;
    cells[7].textContent = result.wind_degrees;
    cells[8].textContent = result.sunrise;
    cells[9].textContent = result.sunset;
  } catch (error) {
    console.error(error);
  }
};


const searchButton = document.getElementById('search');
const input = document.getElementById('input');
searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  getWeather1(input.value);
});

// Initial weather update for default cities
const defaultCities = ['Chennai', 'Berlin', 'Mumbai', 'Barcelona', 'Dubai','Stockholm'];

const updateWeatherForCities = () => {
  for (let i = 0; i < defaultCities.length; i++) {
    const city = defaultCities[i];
    getWeather(city, i + 1);
  }
};
updateWeatherForCities();
const getWeather1=async(city)=>{
  
  cityname.innerHTML = 'Weather at ' + city;
  try {
    const response = await fetch(url + city, options);
    const result = await response.json(); // Parse response as JSON

    const cloud_pct = document.getElementById('cloud_pct');
    const temp = document.getElementById('temp');
    const humidity = document.getElementById('humidity');
    const min_temp = document.getElementById('min_temp');
    const max_temp = document.getElementById('max_temp');
    const wind_speed = document.getElementById('wind_speed');
    const wind_degrees = document.getElementById('wind_degrees');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');
    const cityName = document.getElementById('city_name');
    const temp1=document.getElementById('temp1');
    const temp2=document.getElementById('temp2');
    const temp3=document.getElementById('temp3');
    temp1.innerHTML=result.temp+""+"°c"
    temp2.innerHTML=result.humidity+""+"%"
    temp3.innerHTML=result.cloud_pct+""+"mm"
    cloud_pct.innerHTML = result.cloud_pct;
    temp.innerHTML = result.temp;
    humidity.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML = result.wind_speed;
    wind_degrees.innerHTML = result.wind_degrees;
    sunrise.innerHTML = result.sunrise;
    sunset.innerHTML = result.sunset;
    

  } catch (error) {
    console.error(error);
  }
};
getWeather1('Visakhapatnam');
const theme=document.getElementById('sun-icon');
theme.addEventListener('click',()=>{
  document.body.classList.toggle('white-theme');
  document.body.classList.toggle('black-theme');
})


