const User = require('../models/user.model.js');
const uuid = require('uuid/v4')

// Login
exports.login = (req, res) => {

  if (req.body.username && req.body.password) {
    User.authenticate(req.body.username, req.body.password, function (error, user) {
      if (error || !user) {
          return res.status(401).send({
              message: 'Wrong email or password.'
          });  
      } else {
        const uniqueId = uuid();
        res.send(
            {token: uniqueId}
        );
      }
    });
  } else {
      return res.status(400).send({
            message: "All fields required."
      });   
  }

};