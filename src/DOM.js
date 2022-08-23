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
    const formatDate = (date) => {
        date = date.toString().substring(4, 15);
        date = `${date.substring(0, date.length - 4)}, ${date.substring(date.length - 4, date.length)}`;
        return date;
    };
    const findIcon = (code) => {
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
        console.log(weatherData);

        const location = document.querySelector('.location');
        location.textContent = `${weatherData.city.name}, ${weatherData.city.country}`;

        const weather = document.querySelector('.weather');
        weather.textContent = formatWeather(weatherData.list[0].weather[0].description.split(' '));

        const date = document.querySelector('.date');
        let dateTxt = new Date(weatherData.list[0].dt_txt.substring(0, 10)).toString();
        dateTxt = dateTxt.substring(4, 15);
        date.textContent = formatDate(new Date(weatherData.list[0].dt_txt.substring(0, 10)));

        const temperature = document.querySelector('.temp');
        temperature.textContent = `Currently: ${weatherData.list[0].main.temp}°`;

        const feelsLike = document.querySelector('.feels-like');
        feelsLike.textContent = `Feels Like: ${weatherData.list[0].main.feels_like}°`;

        const img = document.querySelector('.weather-icon');
        img.src = findIcon(weatherData.list[0].weather[0].icon);
    };
    const renderExtraWeather = () => {

    };
    const renderForecast = () => {

    };
    const switchMeasurement = () => {

    };
    const loadError = () => {
        const dataControl = document.getElementById('data-control');
        const toggleMeasureSyst = document.getElementById('toggle-measure-syst');
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'Sorry, we could not find that location.';
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
