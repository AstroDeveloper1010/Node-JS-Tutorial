const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const { dirname } = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const filepath = path.join(__dirname, 'public')

app.get('/', (req, res) => {
    res.sendFile(`${filepath}/index.html`);
})
app.get('/calculator', (req, res) => {
    res.sendFile(`${filepath}/calculator.html`);
})
app.post('/', (req, res) => {
    console.log(req.body);
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let sum = num1 + num2;
    res.send("The sum is " + sum);
    res.end();
})

app.listen(4000);