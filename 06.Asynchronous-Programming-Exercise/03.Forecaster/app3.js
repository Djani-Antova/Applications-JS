function attachEvents() {
    const inputLocation = document.querySelector('#location');
    const forecast = document.querySelector('#forecast');
    const currentWeather = document.querySelector('#current');
    const upcomingWeather = document.querySelector('#upcoming');

    const submitBtn = document
        .querySelector('#submit')
        .addEventListener('click', submit);


    async function submit() {
        try {
            const url = 'http://localhost:3030/jsonstore/forecaster/locations';
            const responce = await fetch(url);
            const data = await responce.json();

            data.forEach(el => {
                if (el.name === inputLocation.value) display(el.code);
            });
        } catch (error) {
            console.log(error);
        }
    }
    function display(city) {
        forecast.style.display = 'block';

        Promise.all([
            fetch(`http://localhost:3030/jsonstore/forecaster/today/${city}`),
            fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${city}`)
        ]).then(responses => {
            responses[0].json().then(data => {
                currentWeather.appendChild(generateBlock(data, 'current'));
            });
            responses[1].json().then(data => {
                upcomingWeather.appendChild(generateBlock(data));
            });
        });
    }

    function generateBlock(data, type) {
        let conditionType;
        const div = document.createElement('div');

        if (type === 'current') {
            div.classList.add('forecasts');

            const symbol = document.createElement('span');
            symbol.classList.add('symbol', 'condition');
            console.log(data);
            switch (data.forecast.condition) {
                case 'Sunny': conditionType = '&#x2600'; break;
                case 'Partly sunny': conditionType = '&#x26C5;'; break;
                case 'Overcast': conditionType = '&#x2601;'; break;
                case 'Rain': conditionType = '&#x2614;'; break;
            }
            symbol.innerHTML = conditionType; 

            const span = document.createElement('span');
            span.classList.add('condition');

            generateSpan(data.name, span);
            generateSpan(`${data.forecast.low}&#176;/${data.forecast.high}&#176;`, span);
            generateSpan(data.forecast.condition, span);

            div.appendChild(symbol);
            div.appendChild(span);

        } else {
            div.classList.add('forecast-info');

            data.forecast.forEach(el => {
                switch (el.condition) {
                    case 'Sunny': conditionType = '&#x2600'; break;
                    case 'Partly sunny': conditionType = '&#x26C5;'; break;
                    case 'Overcast': conditionType = '&#x2601;'; break;
                    case 'Rain': conditionType = '&#x2614;'; break;
                }

                const span = document.createElement('span');
                span.classList.add('upcoming');

                generateSpan(conditionType, span, true);
                generateSpan(`${el.low}&#176;/${el.high}&#176;`, span);
                generateSpan(el.condition, span);

                div.appendChild(span);
            });
        }

        return div;
    }
    function generateSpan(text, parent, noForecastData) {
        const span = document.createElement('span');
        span.innerHTML = text;
        if (!noForecastData) {
            span.setAttribute('class', 'forecast-data');
        } else {
            span.setAttribute('class', 'symbol');
        }
        if (parent) parent.appendChild(span);
        return span;
    }
}

attachEvents();