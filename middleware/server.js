const express = require('express');
const app = express();

// using middleware
const reqFilter = (req, res, next) => {
    
}

app.get('', (req, res) => {
    res.send("This is Home Page");
})

app.get('/about', (req, res) => {
    res.send("This is About Page");
})

app.get('/contact', (req, res) => {
    res.send("This is Contact Page");
})

app.listen(5000);