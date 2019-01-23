let searchText = document.getElementById('searchFor');
let searchBtn = document.getElementById('searchBtn');

function updateStatus(res){
    document.querySelector('#cityName').textContent = 'City name: ' + getCityName(res);
    document.querySelector('#temp').textContent = 'Temperature: ' + getTemp(res);
    document.querySelector('#humidity').textContent = 'Humidity: ' + getHumidity(res);
    document.querySelector('#pressure').textContent = 'Pressure: ' + getPressure(res);
    document.querySelector('#state').textContent = 'State: ' + getDescription(res);
    // load image
    document.querySelector('.image').src = getImageUrl(res);
}
searchBtn.addEventListener('click', (e) => {
    if(searchText.value !== ''){
       
        
    
    e.preventDefault();
    fetchData(searchText.value, (res) => {
        console.log(res);
        if (res.cod == 404) {
            getClearAll(res);
            alert(res.message);
            updateStatus(res); 
        } else {
          
       updateStatus(res); 
            //load weather
         
        }
    });

    }
    else alert('please enter valid city name')
})