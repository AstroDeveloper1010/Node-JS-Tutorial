const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const { dirname } = require('path');

const app = express();

const filepath = path.join(__dirname, 'public')

app.get('/', (req, res) => {
    res.send("This is Home Page");
})
app.get('/calculator', (req, res) => {
    res.sendFile(`${filepath}/calculator.html`);
})

app.listen(4000);