const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("This is Home Page");
})

app.listen(4000);