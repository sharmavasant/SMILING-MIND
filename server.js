require('dotenv').config();
const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const PORT = process.env.PORT || 3300;
const bodyParser = require('body-parser');

//assets
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//set template engine
app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

//route configuration
require('./routes/web')(app);
app.use((req,res) => {
    res.status(404).render('error/404');
});

//listen
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});