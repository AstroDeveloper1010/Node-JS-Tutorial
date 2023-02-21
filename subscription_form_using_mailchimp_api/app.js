const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const pathfile = path.join(__dirname, 'public');

app.get('/', (req, res) => {
    res.sendFile(`${pathfile}/index.html`);
})

app.listen(4000, () => {
    console.log("server is running at port 4000");
})