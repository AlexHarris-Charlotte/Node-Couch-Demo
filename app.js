// Import external modules and files
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const request = require('request');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const couchbase = require('couchbase');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Initialze app instance and port
const app = express();
const port = 8080;

const cluster = new couchbase.Cluster('couchbase://192.168.1.48:8091');
const bucket = cluster.openBucket('beer-sample');
console.log(cluster.dsnObj);
console.log(bucket);

// const N1qlQuery = couchbase.N1qlQuery;




// Initiate Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Initial View Engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Initiate Public middleware
app.use(express.static(path.join(__dirname, 'public')));

// Initiate Routes
// app.use(indexRouter);

app.get('/', (req, res) => {
    bucket.get('aass_brewery', (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log(result);
        }
    })
    res.render('home');
});




app.listen(port, () => {
    console.log(`App Listening on Port: ${port}`);
})
