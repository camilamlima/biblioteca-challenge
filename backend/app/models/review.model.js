const mongoose = require('mongoose');

// const conservation = [
//     100, 75, 50, 25
// ]

const ReviewSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    book: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'},
    conservation_state: Number,
    rate: Number,
    comments: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Review', ReviewSchema);