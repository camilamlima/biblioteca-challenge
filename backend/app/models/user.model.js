const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    is_admin: Boolean,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);