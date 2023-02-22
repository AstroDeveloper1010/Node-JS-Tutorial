const express = require('express');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

const filepath = path.join(__dirname, 'public');

app.get('/', (req, res) => {
    res.sendFile(`${filepath}/index.html`)
})

const port = 4000;
app.listen(port, () => {
    console.log('Server is running on port ' + port);
})