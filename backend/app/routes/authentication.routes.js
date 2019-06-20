module.exports = (app) => {
    const authentication = require('../controllers/authentication.controller.js');

    // Login
    app.post('/authenticate', authentication.login);

}


