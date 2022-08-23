/* eslint-disable no-unused-vars */
const DOM = (() => {
    const renderMainWeather = (weatherData) => {

    };
    const renderExtraWeather = (weatherData) => {

    };
    const renderForecast = (weatherData) => {

    };
    const switchMeasurement = (weatherData) => {

    };
    const loadError = () => {
        const dataControl = document.getElementById('data-control');
        const toggleMeasureSyst = document.getElementById('toggle-measure-syst');
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'Sorry, we could not find that location.';
        dataControl.insertBefore(errorMsg, toggleMeasureSyst);
    };
    return {
        renderMainWeather, renderExtraWeather, renderForecast, switchMeasurement, loadError,
    };
})();

export default DOM;
