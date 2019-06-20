const express = require('express');
const bodyParser = require('body-parser');

// Configuring the database
const dbConfig = require('./config/database.config.js');
const appConfig = require('./config/app.config.js');
const mongoose = require('mongoose');



// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Access-Control-Expose-Headers', 'Content-Range');

    //intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
      //respond with 200
      res.send(200);
    }
    else {
    //move on
      next();
    }
});

// define a simple HOME route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to ReviewsBiblioteca application. Backend to register User, Books and reviews of Bibioteca."});
});

// Require Authentication routes
require('./app/routes/authentication.routes.js')(app);

// Require Users routes
require('./app/routes/user.routes.js')(app);

// Require Books routes
require('./app/routes/book.routes.js')(app);

// Require Reviews routes
require('./app/routes/review.routes.js')(app);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.set('port', appConfig.port);

// listen for requests
app.listen(app.get('port'), function() {
  console.log('Node server is running..');
  console.log('Express server listening on port ' + app.get('port'));
  console.log('Access http://localhost:' + app.get('port'));
});
