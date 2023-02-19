const https = require('https');
const express = require('express');

const app = express();

app.get('/', (req, res) => {

    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=1cdc5bf6abf70ae6ca69a708a09393eb';
    https.get(url, (resp) => {
        console.log(resp.statusCode);

        resp.on('data', (data) => {
            const weatherData = JSON.parse(data);
            console.log(weatherData);
        })
    })

    // res.write("This is home page");
    res.send('Server is running');
    // res.end();
})

app.listen(5000);