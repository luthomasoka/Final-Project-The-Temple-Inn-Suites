const destination = document.querySelector('#destination');
const loc = document.querySelector('.location');
const temp = document.querySelector('.temp');
const chill = document.querySelector('#chill');
const icon = document.querySelector('.weather-icon');
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity");


const celsToFahr = temp * 9/5 + 32;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${destination.value}&units=metric&appid=43219341657d7557244efb66c3f4d2b9`;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    temp.innerHTML = weatherData.main.temp.toFixed(0);

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const dest = destination.value

    description.textContent = desc;
    loc.textContent = dest;
    humidity.textContent = weatherData.main.humidity

    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc);

}
  
apiFetch();


