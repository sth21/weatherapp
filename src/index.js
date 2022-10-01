/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
import states from 'us-state-converter/index';
import lookup from 'country-code-lookup';
import async from './async';
import DOM from './DOM';
import searchIcon from '../dist/d2062b8b8cc750f6a8bc.png';

const controller = (() => {
    let measurementUnit = 'imperial';
    const acquireLocation = () => {
        let data = document.getElementById('search').value;
        data = data.split(', ');
        let location;

        // If format = state or state, country
        if (data.length === 1) {
            if (states.abbr(data[0]) !== 'No abbreviation found with that state name') {
                location = [states.abbr(data[0]), 'US'];
            // If format = country
            } else if (lookup.byCountry(data[0]) !== null) {
                location = [lookup.byCountry(data[0]).iso3];
            // If format = city
            } else {
                location = [data[0]];
            }
        // If format = city, state or city, state, country
        } else if (states.abbr(data[1]) !== 'No abbreviation found with that state name') {
            location = [data[0], data[1], 'US'];
        // If format = city, country
        } else {
            location = [data[0], data[1]];
        }
        return location.join(',');
    };

    const changeLocation = async (event) => {
        event.preventDefault();
        DOM.removeError();
        const location = acquireLocation();
        const weatherData = await async.getWeather(location, measurementUnit);
        if (weatherData === undefined) {
            return;
        }
        DOM.renderMainWeather(weatherData);
        DOM.renderExtraWeather(weatherData);
        DOM.renderForecast(weatherData);
        document.getElementById('search').value = '';
    };

    const toggleMeasurementSystem = (event) => {
        let text;
        (event.target.getAttribute('id') === 'toggle-measure-syst') ? text = event.target.children[0] : text = event.target;
        if (text.textContent === 'F°') {
            text.textContent = 'C°';
            measurementUnit = 'metric';
        } else {
            text.textContent = 'F°';
            measurementUnit = 'imperial';
        }
        document.getElementById('search').value = document.querySelector('.location').textContent;
        document.getElementById('submit').click();
    };

    return { acquireLocation, toggleMeasurementSystem, changeLocation };
})();

document.getElementById('submit').setAttribute('src', `${searchIcon}`);
document.addEventListener('submit', controller.changeLocation);
document.getElementById('toggle-measure-syst').addEventListener('click', controller.toggleMeasurementSystem);
document.getElementById('submit').click();
