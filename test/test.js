var test = require('tape');
var logic = require('../public/js/logic');

// test('testing accessData', function (t) {
//     const actual = logic.accessData('https://api.openweathermap.org/data/2.5/weather?q=fgdg&units=metric&appid=,y+a850b87c5f9b5aaca357e468213b8a52',(response)=>{return response.code});
//     const expected = '404';
//     t.Equal(actual, expected, 'sdgssdfg');
//     t.end();
// });


const testRes = {
    name: 'Gaza',
    main: {
        temp: 10,
        humidity: 20,
        pressure: 30,
        
    },
    description: "Sunny",
    imageUrl:'img URL',
}

test("testing getCityName function", (t) => {
    actual = logic.getCityName(testRes);
    expected = 'Gaza';
    t.deepEqual(actual, expected, 'Expected result is Gaza');
    t.end();
});

test('testing getTemp function', (t) => {
    actual = logic.getTemp(testRes);
    expected = '10 celsius';
    t.deepEqual(actual, expected, 'Expected result is 10 celsius');
    t.end();
})

test('testing getHumidity function', (t) => {
    actual = logic.getHumidity(testRes);
    expected = 20;
    t.deepEqual(actual, expected, 'Expected result is 20');
    t.end();
})


test('testing getPressure function', (t) => {
    actual = logic.getPressure(testRes);
    expected = 30;
    t.deepEqual(actual, expected, 'Expected result is 30');
    t.end();
})
test('testing getDescription function', (t) => {
    actual = logic.getDescription(testRes);
    expected = 'Sunny';
    t.deepEqual(actual, expected, 'Expected result is Sunny');
    t.end();
})

test('testing getImageUrl function', (t) => {
    actual = logic.getImageUrl(testRes);
    expected = 'img URL';
    t.deepEqual(actual, expected, 'Expected result is img URL');
    t.end();
})
test('testing getClearAll function', (t) => {
    actual = logic.getClearAll(testRes);
    expected = {};
    t.deepEqual(actual, expected, 'Expected result is an empty object');
    t.end();
})
