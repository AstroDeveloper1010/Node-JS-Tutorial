const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.listen(4000, () => {
    console.log("server is running at port 4000");
})