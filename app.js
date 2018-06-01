// Import external modules and files
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const request = require('request');
const exphbs  = require('express-handlebars');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Initialze app instance and port
const app = express();
const port = 8080;


const nano = require('nano')('http://root:jabberwocky@localhost:5984');
nano.db.create('test');

// Initiate Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Initial View Engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Initiate Public middleware
app.use(express.static(path.join(__dirname, 'public')));

// Initiate Routes
app.use(indexRouter);


/*
    Admin: root
    PW: jabberwocky
*/


app.listen(port, () => {
    console.log(`App Listening on Port: ${port}`);
})
