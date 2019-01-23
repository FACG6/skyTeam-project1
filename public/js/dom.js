let searchText = document.getElementById('searchFor');
let searchBtn = document.getElementById('searchBtn');
const result = {};
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetchData(searchText.value, (res) => {
        console.log(res);
        //load weather
        document.querySelector('#cityName').textContent = 'City name: ' + res.name;
        document.querySelector('#temp').textContent = 'Temperature: ' + res.main.temp + ' celsius';
        document.querySelector('#humidity').textContent = 'Humidity: ' + res.main.humidity;
        document.querySelector('#pressure').textContent = 'Pressure: ' + res.main.pressure;
        document.querySelector('#state').textContent = 'State: ' + res.description;

        // load image
        document.querySelector('.image').src = res.imageUrl;

    });


})