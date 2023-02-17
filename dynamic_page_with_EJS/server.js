const path = require('path')
const express = require('express');

const app = express();
const pathfile = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.sendFile(`${pathfile}/index.html`);
});

app.get('/contact', (req, res) => {
    res.sendFile(`${pathfile}/contact.html`);
})

app.get('/about', (req, res) => {
    const user = {
        name: 'Priyanshu Jha',
        email: 'priyanshujha131@gmail.com',
        profession: 'student',
        skills: ['javascript', 'c++', 'python', 'c', 'ui/ux designing', 'graphic designing', 'node js', 'express js']
    }
    res.render('about', { user });
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.listen(4000);