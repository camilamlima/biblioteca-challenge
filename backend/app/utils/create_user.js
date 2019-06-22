const User = require('../models/user.model.js');


exports.createAdminUser = () => {

    User.find({username: "admim"})
    .then(user => {
        if(!user) {
            // Create a User
            const user = new User({
                username: "admim",
                password: "1234", 
                is_admin: true
            });
            // Save User in the database
            user.save()
            
            console.log("User admin create.")
        } else {
            console.log("User admin have exist.")
        }
    }).catch(err => {
        console.log("ERROR:" + err)
    });
}
