/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import clearsky from './media/clearsky.png';
import fewclouds from './media/fewclouds.png';
import scatteredclouds from './media/scatteredclouds.png';
import brokenclouds from './media/brokenclouds.png';
import showerrain from './media/showerrain.png';
import rain from './media/rain.png';
import thunderstorm from './media/thunderstorm.png';
import snow from './media/snow.png';
import mist from './media/mist.png';

const DOM = (() => {
    const formatWeather = (weatherArr) => {
        weatherArr.forEach((word, index) => {
            weatherArr[index] = word[0].toUpperCase() + word.substring(1);
        });
        return weatherArr.join(' ');
    };
    const formatDate = (weatherData, dateNum) => {
        let dateTxt = new Date(weatherData.list[dateNum].dt_txt.substring(0, 10));
        dateTxt.setDate(dateTxt.getDate() + 1);
        dateTxt = dateTxt.toString();
        dateTxt = dateTxt.substring(4, 15);
        return `${dateTxt.substring(0, dateTxt.length - 4)}, ${dateTxt.substring(dateTxt.length - 4, dateTxt.length)}`;
    };
    const findIcon = (weatherData, dateNum) => {
        const code = weatherData.list[dateNum].weather[0].icon;
        let iconsrc;
        if (code === '01d' || code === '01n') {
            iconsrc = clearsky;
        } else if (code === '02d' || code === '02n') {
            iconsrc = fewclouds;
        } else if (code === '03d' || code === '03n') {
            iconsrc = scatteredclouds;
        } else if (code === '04d' || code === '04n') {
            iconsrc = brokenclouds;
        } else if (code === '09d' || code === '09n') {
            iconsrc = showerrain;
        } else if (code === '10d' || code === '10n') {
            iconsrc = rain;
        } else if (code === '11d' || code === '11n') {
            iconsrc = thunderstorm;
        } else if (code === '13d' || code === '13n') {
            iconsrc = snow;
        } else {
            iconsrc = mist;
        }
        return iconsrc;
    };
    const renderMainWeather = (weatherData) => {
        const location = document.querySelector('.location');
        location.textContent = `${weatherData.city.name}, ${weatherData.city.country}`;

        const weather = document.querySelector('.weather');
        weather.textContent = formatWeather(weatherData.list[0].weather[0].description.split(' '));

        const date = document.querySelector('.date');
        date.textContent = formatDate(weatherData, 0);

        const temperature = document.querySelector('.temp');
        temperature.textContent = `Currently: ${weatherData.list[0].main.temp}°`;

        const feelsLike = document.querySelector('.feels-like');
        feelsLike.textContent = `Feels Like: ${weatherData.list[0].main.feels_like}°`;

        const img = document.querySelector('.weather-icon');
        img.src = findIcon(weatherData, 0);
    };
    const renderExtraWeather = (weatherData) => {
        const highTemp = document.querySelector('.high-temp').children[1];
        highTemp.textContent = `${weatherData.list[0].main.temp_max}°`;

        const lowTemp = document.querySelector('.low-temp').children[1];
        lowTemp.textContent = `${weatherData.list[0].main.temp_min}°`;

        const humidity = document.querySelector('.humidity').children[1];
        humidity.textContent = `${weatherData.list[0].main.humidity}%`;

        const airPressure = document.querySelector('.air-pressure').children[1];
        airPressure.textContent = `${weatherData.list[0].main.pressure} psi`;
    };
    const renderForecast = (weatherData) => {
        const day1 = document.querySelector('.day-one');
        const day1date = day1.children[0];
        day1date.textContent = formatDate(weatherData, 0);
        const day1img = day1.children[1];
        day1img.src = findIcon(weatherData, 0);
        const day1high = day1.children[2];
        day1high.textContent = `High: ${weatherData.list[0].main.temp_max}°`;
        const day1low = day1.children[3];
        day1low.textContent = `Low: ${weatherData.list[0].main.temp_min}°`;

        const day2 = document.querySelector('.day-two');
        const day2date = day2.children[0];
        day2date.textContent = formatDate(weatherData, 8);
        const day2img = day2.children[1];
        day2img.src = findIcon(weatherData, 8);
        const day2high = day2.children[2];
        day2high.textContent = `High: ${weatherData.list[8].main.temp_max}°`;
        const day2low = day2.children[3];
        day2low.textContent = `Low: ${weatherData.list[8].main.temp_min}°`;

        const day3 = document.querySelector('.day-three');
        const day3date = day3.children[0];
        day3date.textContent = formatDate(weatherData, 16);
        const day3img = day3.children[1];
        day3img.src = findIcon(weatherData, 16);
        const day3high = day3.children[2];
        day3high.textContent = `High: ${weatherData.list[16].main.temp_max}°`;
        const day3low = day3.children[3];
        day3low.textContent = `Low: ${weatherData.list[16].main.temp_min}°`;

        const day4 = document.querySelector('.day-four');
        const day4date = day4.children[0];
        day4date.textContent = formatDate(weatherData, 24);
        const day4img = day4.children[1];
        day4img.src = findIcon(weatherData, 24);
        const day4high = day4.children[2];
        day4high.textContent = `High: ${weatherData.list[24].main.temp_max}°`;
        const day4low = day4.children[3];
        day4low.textContent = `Low: ${weatherData.list[24].main.temp_min}°`;

        const day5 = document.querySelector('.day-five');
        const day5date = day5.children[0];
        day5date.textContent = formatDate(weatherData, 32);
        const day5img = day5.children[1];
        day5img.src = findIcon(weatherData, 32);
        const day5high = day5.children[2];
        day5high.textContent = `High: ${weatherData.list[32].main.temp_max}°`;
        const day5low = day5.children[3];
        day5low.textContent = `Low: ${weatherData.list[32].main.temp_min}°`;
    };
    const switchMeasurement = () => {

    };
    const loadError = () => {
        const dataControl = document.getElementById('data-control');
        const toggleMeasureSyst = document.getElementById('toggle-measure-syst');
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'Sorry, we could not find that city.';
        dataControl.insertBefore(errorMsg, toggleMeasureSyst);
    };
    const removeError = () => {
        const dataControl = document.getElementById('data-control');
        if (dataControl.children[1].getAttribute('id') !== 'toggle-measure-syst') {
            dataControl.children[1].remove();
        }
    };

    return {
        renderMainWeather,
        renderExtraWeather,
        renderForecast,
        switchMeasurement,
        loadError,
        removeError,
    };
})();

export default DOM;
