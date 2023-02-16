const path = require('path');
const express = require('express');

const app = express();
const pathfile = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.sendFile(`${pathfile}/index.html`);
})

app.get('/contact', (req, res) => {
    res.sendFile(`${pathfile}/contact.html`);
})

app.get('/profile', (req, res) => {
    const data = {
        name: 'Priyanshu Jha', 
        email: 'priyanshujha131@gmail.com'
    }
    res.render('profile', {data});
})

app.listen(4000);