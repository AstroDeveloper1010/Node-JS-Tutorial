const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const filepath = path.join(__dirname, 'public');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('blog');
})

const port = 4000;
app.listen(port, () => {
    console.log('server is running at port ' + port);
})