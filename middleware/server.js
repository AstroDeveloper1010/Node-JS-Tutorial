const express = require('express');
const app = express();

// using middleware
const reqFilter = (req, res, next) => {
    // console.log('reqFilter');
    if (!req.query.age) {
        res.send("please enter your age");
    }
    else if (req.query.age < 18) {
        res.send("you cannot access this website");
    }
    else {
        next();
    }
}

app.use(reqFilter); // using Middleware to send response to the server

app.get('', (req, res) => {
    res.send("This is Home Page");
})

app.get('/about', (req, res) => {
    res.send("This is About Page");
})

app.get('/contact', (req, res) => {
    res.send("This is Contact Page");
})

/*
    // if we don't want to use reqFilter in /contact then simply remove app.use(reqFilter) and pass reqFilter as a parameter in app.get('/contact', reqFilter, (req, res) => {
        res.send('This is Contact Page')
    })

    app.get('', reqFilter,  (req, res) => {
        res.send("This is Home Page");
})

    app.get('/about', (req, res) => {
        res.send("This is About Page");
})

    app.get('/contact', (req, res) => {
        res.send("This is Contact Page"); 
})
*/

app.listen(4000);