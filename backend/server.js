const express = require('express');
const bodyParser = require('body-parser');

// Configuring the database
const dbConfig = require('./config/database.config.js');
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

// define a simple HOME route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to ReviewsBiblioteca application. Backend to register User, Books and reviews of Bibioteca."});
});

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
app.set('port', process.env.PORT || 3000);

// listen for requests
app.listen(app.get('port'), function() {
  console.log('Node server is running..');
  console.log('Express server listening on port ' + app.get('port'));
  console.log('Access http://localhost:' + app.get('port'));
});
