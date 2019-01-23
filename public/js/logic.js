

let fetchData = function (searchFor, cb) {

    url = `https://api.openweathermap.org/data/2.5/weather?q=${searchFor}&units=metric&appid=` + apiKeyWeather;
    //return console.log(url);


    function accessData(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                response = JSON.parse(xhr.responseText);
                console.log(response);

                callback(response);
            }

        }
        xhr.open("GET", url);
        xhr.send();
    }

    //
    accessData(url, (response) => {
        result.name = (response.name);
        result.main = (response.main);
        result.description = (response.weather[0].description);
        //invoke accessData second time
        let newSearch = response.weather[0].description ;
        let newUrl = `http://api.giphy.com/v1/gifs/search?q=weather+${newSearch}&api_key=` + apiKeyGiphy;
        //console.log(newUrl)
        accessData(newUrl, (response) => {
            let index = Math.floor(Math.random() * response.data.length);
            if (index >= 0 && index < response.data.length)
                result.imageUrl = (response.data[index].images.fixed_width.url);
            // console.log(result);

            cb(result);
        })

    });



}