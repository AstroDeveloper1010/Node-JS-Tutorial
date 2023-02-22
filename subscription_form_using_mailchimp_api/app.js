const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const pathfile = path.join(__dirname, 'public');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    const fname = req.body.firstname;
    const lname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;

    console.log(fname + " " + lname + " " + email);
    console.log(password);

    res.send('You have successfully subscribed our service.')
})

app.get('/', (req, res) => {
    res.sendFile(`${pathfile}/index.html`);
})

const port = 4000;
app.listen(port, () => {
    console.log("server is running at port 4000");
})