const User = require('../models/user.model.js');

// Create and Save a new User
exports.create = (req, res) => {

    // Validate request
    if(!req.body.username) {
        return res.status(400).send({
            message: "User username can not be empty"
        });
    }

    // Validate is_admin
    let is_admin = req.body.is_admin || false
    if (!req.body.password && is_admin){
        is_admin = false
    }
    
    // Create a User
    const user = new User({
        username: req.body.username,
        password: req.body.password || null, 
        is_admin: is_admin
    });

    // Save User in the database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

// Find a single user with a userId
exports.findOne = (req, res) => {
    
    User.findById(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Users not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.userId
        });
    });
};

// Update a User identified by the userId in the request
exports.update = (req, res) => {
    
    // Validate Request
    if(!req.body.username) {
        return res.status(400).send({
            message: "User username can not be empty"
        });
    }
 
    // Validate is_admin
    let is_admin = req.body.is_admin || false
    if (!req.body.password && is_admin){
        is_admin = false
    }
    
    // Find user and update it with the request body
    User.findByIdAndUpdate(req.params.userId, {
        username: req.body.username,
        password: req.body.password || null, 
        is_admin: is_admin
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.userId
        });
    });''
};

// Delete a User with the specified userId in the request
exports.delete = (req, res) => {
    
    User.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    });
};
