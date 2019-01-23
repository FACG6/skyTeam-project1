let searchText = document.getElementById('searchFor');
let searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // document.getElementById("flix").style.background = "blue";
    fetchData(searchText.value, (res) => {
        console.log(res);
        if (res.cod == 404) {
            getClearAll(res);
            alert(res.message);
            return -1;

        } else {

            document.getElementById("flix").style.background = "rgb(135, 135, 152)";
            //load weather
            document.querySelector('#cityName').textContent = 'City name: ' + getCityName(res);
            document.querySelector('#temp').textContent = 'Temperature: ' + getTemp(res);
            document.querySelector('#humidity').textContent = 'Humidity: ' + getHumidity(res);
            document.querySelector('#pressure').textContent = 'Pressure: ' + getPressure(res);
            document.querySelector('#state').textContent = 'State: ' + getDescription(res);

            // load image
            document.querySelector('.image').src = getImageUrl(res);
        }
    });


})