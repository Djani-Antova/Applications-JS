const enumIcon = {
    "Sunny": "&#x2600", // ☀
    "Partly sunny": "&#x26C5", //⛅//
    "Overcast": "&#x2601", // ☁
    "Rain": "&#x2614", // ☂
    "Degrees": " &#176",  // °    

}


function attachEvents() {

    document.getElementById('submit').addEventListener('click', getWeather)

}

async function getWeather(event) {

    const townName = document.getElementById('location').value;

    const url = 'http://localhost:3030/jsonstore/forecaster';

    const response = await fetch(url);
    const data = await response.json();

    const info = data.find(x => x.name === townName);
    createForcaster(info.code)

}

async function createForcaster(code) {
    const currentSection = document.getElementById('current')
    const forecastContainer = document.getElementById('forecast')
    const urlToday = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
    const urlUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

    //TODO use Promise.all

    const responseToday = await fetch(urlToday);
    const dataToday = await responseToday.json();

    const responseUpcoming = await fetch(urlUpcoming);
    const dataUpcoming = await responseUpcoming.json();

    forecastContainer.style.display = 'block'
    const todayHTMLTemp =  createToday(dataToday)
    currentSection.appendChild(todayHTMLTemp)

    const upcomingHTML = createUpcoming(dataUpcoming)

}

function createUpcoming(data) {

}

function createToday(data) {

    const {condition, high, low } = data.forecast;
    const conditionContainer = document.createElement('div');
    

    conditionContainer.classList.add('forecasts');

    const conditionIconSpan = document.createElement('span')
    conditionIconSpan.classList.add('condition', 'symbol');
    conditionIconSpan.innerHTML = enumIcon[condition]

    const conditionSpan = document.createElement('span')
    conditionSpan.classList.add('condition');

    const nameSpan = document.createElement('span');
    nameSpan.classList.add('forecast-data');
    nameSpan.textContent = data.name;

    const tempSpan = document.createElement('span');
    tempSpan.classList.add('forecast-data');
    tempSpan.innerHTML = `${low}${enumIcon[Degrees]}/${high}`

    const conditionTxtSpan = document.createElement('span');
    conditionTxtSpan.classList.add('forecast-data');
    conditionTxtSpan.textContent = condition;

    conditionSpan.appendChild(nameSpan);
    conditionSpan.appendChild(tempSpan);
    conditionSpan.appendChild(conditionTxtSpan);

    conditionContainer.appendChild(conditionIconSpan);
    conditionContainer.appendChild(conditionSpan);
    return conditionContainer;

}

attachEvents();