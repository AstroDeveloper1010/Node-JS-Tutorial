const path = require('path')
const express = require('express');
const app = express();

const pathFile = path.join(__dirname, 'public');
console.log(pathFile);

app.use(express.static(pathFile));

app.listen(4500);