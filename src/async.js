/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import DOM from './DOM';

const async = (() => {
    const getWeather = async (location) => {
        const units = 'imperial';
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${units}&appid=220032af2efc25d26fc2e72d3abc3914`, { mode: 'cors' });
            if (response.status !== 200) {
                throw new Error();
            } else {
                const weatherData = await response.json();
                return weatherData;
            }
        } catch {
            DOM.loadError();
        }
    };
    const switchMeasurement = (event) => {
        const toggleText = document.querySelector('#toggle-measure-syst > p').textContent;
        if (toggleText === 'F°') {
            // call getWeather but with celsius
        } else {
            // call getWeather but with fahrenheit
        }
    };

    return { getWeather, switchMeasurement };
})();

export default async;
