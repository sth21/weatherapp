/* eslint-disable no-undef */
import states from 'us-state-converter/index';
import lookup from 'country-code-lookup';
import async from './async';
import DOM from './DOM';

const controller = (() => {
    const acquireLocation = (event) => {
        event.preventDefault();
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

    const toggleMeasurementSystem = () => {

    };

    const changeLocation = (event) => {
        const location = acquireLocation(event);
        const weatherData = async.getWeather(location);
        DOM.renderMainWeather(weatherData);
        DOM.renderExtraWeather(weatherData);
        DOM.renderForecast(weatherData);
    };
    return { acquireLocation, toggleMeasurementSystem, changeLocation };
})();

document.addEventListener('submit', controller.changeLocation);
