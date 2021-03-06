function getCityName(res) {
    return res.name;
}
function getTemp(res) {
    return res.main.temp + ' celsius';
}

function getHumidity(res) {
    return res.main.humidity;
}


function getPressure(res) {
    return res.main.pressure;
}

function getDescription(res) {

    return res.description;
}

function getImageUrl(res) {
    return res.imageUrl;
}

function getClearAll(res) {

  
    return res = {};
}

let fetchData = function (searchFor, cb) {
    const result = {};
    url = `https://api.openweathermap.org/data/2.5/weather?q=${searchFor}&units=metric&appid=` + apiKeyWeather;
    //return console.log(url);


    function accessData(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                response = JSON.parse(xhr.responseText);
                callback(response);
            } else
                if (xhr.readyState === 4 && xhr.status == 404) {

                    response = JSON.parse(xhr.responseText);
                    callback(response);


                }

        }
        xhr.open("GET", url);
        xhr.send();
    }


    //
    accessData(url, (response) => {
        
        if (response.cod == 404) {
            result.cod = response.cod;
            result.message = response.message;
            alert(result.message);
            // cb(result);
           
        } else {
            result.name = response.name;
            result.main = response.main;
            result.description = (response.weather[0].description);
            //invoke accessData second time
            let newSearch = response.weather[0].description;
            let newUrl = `http://api.giphy.com/v1/gifs/search?q=weather+${newSearch}&api_key=` + apiKeyGiphy;
            //console.log(newUrl)

            accessData(newUrl, (response) => {
                let index = Math.floor(Math.random() * response.data.length);
                if (index >= 0 && index < response.data.length)
                    result.imageUrl = (response.data[index].images.fixed_width.url);
                // console.log(result);

                cb(result);
            })
        }
    });



}

if (typeof module !== 'undefined') {
    module.exports = { getCityName , getTemp , getHumidity , getPressure , getDescription , getImageUrl , getImageUrl , getClearAll };
  }