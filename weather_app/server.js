const path = require('path');
const bodyParser = require('body-parser');
const https = require('https');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const filepath = path.join(__dirname, 'public');

app.get('/', (req, res) => {
    res.sendFile(`${filepath}/index.html`)
})

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

app.post('/', (req, res) => {
    console.log(req.body.latitude);
    console.log(req.body.longitude);

    // const lati = 44.34;
    const lati = req.body.latitude;
    // const longi = 10.99;
    const longi = req.body.longitude;
    const units = 'metric'
    const appid = '1cdc5bf6abf70ae6ca69a708a09393eb'
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lati + '&lon=' + longi + '&appid=' + appid + '&units=' + units;
    https.get(url, (resp) => {
        console.log(resp.statusCode);

        resp.on('data', (data) => {
            const weatherData = JSON.parse(data);

            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;
            const pressure = weatherData.main.pressure;
            const humidity = weatherData.main.humidity;

            res.write('<p>Weather is ' + desc + '</p>')
            res.write('<p>temperature is ' + temp + '</p>');
            res.write('<p>humidity is ' + humidity + '</p>');
            res.write('<p>pressure is ' + pressure + '</p>');

            res.end();
        })
    })
});