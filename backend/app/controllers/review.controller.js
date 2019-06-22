const Review = require('../models/review.model.js');

// Create and Save a new Review
exports.create = (req, res) => {

    // Validate request
    if(!req.body.book) {
        return res.status(400).send({
            message: "Book title can not be empty"
        });
    }

    // Create a Review
    const review = new Review({
        user: req.body.user, 
        book: req.body.book, 
        conservation_state: req.body.conservation_state, 
        rate: req.body.rate, 
        comments: req.body.comments, 
    });

    // Save Review in the database
    review.save()
    .then(review => {
        res.send({ ...review._doc, id: review._id });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Review."
        });
    });

};

// Retrieve and return all reviews from the database.
exports.findAll = (req, res) => {
    Review.find()
    .then(reviews => {
        res.header('Content-Range', reviews.length);    
        res.send(reviews.map(review => ({ ...review._doc, id: review._id })));
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving reviews."
        });
    });
};

// Find a single review with a reviewId
exports.findOne = (req, res) => {
    Review.findById(req.params.reviewId)
    .then(review => {
        if(!review) {
            return res.status(404).send({
                message: "review not found with id " + req.params.reviewId
            });            
        }
        res.header('Content-Range', 1);    
        res.send({ ...review._doc, id: review._id });
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "reviews not found with id " + req.params.reviewId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving review with id " + req.params.reviewId
        });
    });
};

// Update a review identified by the reviewId in the request
exports.update = (req, res) => {

    // Validate request
    if(!req.body.book) {
        return res.status(400).send({
            message: "Book title can not be empty"
        });
    }

    // Find book and update it with the request body
    Review.findByIdAndUpdate(req.params.reviewId, {
        user: req.body.user, 
        book: req.body.book, 
        conservation_state: req.body.conservation_state, 
        rate: req.body.rate, 
        comments: req.body.comments, 
    }, {new: true})
    .then(review => {
        if(!review) {
            return res.status(404).send({
                message: "Review not found with id " + req.params.reviewId
            });
        }
        res.send({ ...review._doc, id: review._id });
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Review not found with id " + req.params.reviewId
            });                
        }
        return res.status(500).send({
            message: "Error updating review with id " + req.params.reviewId
        });
    });
};

// Delete a review with the specified reviewId in the request
exports.delete = (req, res) => {

    Review.findByIdAndRemove(req.params.reviewId)
    .then(review => {
        if(!review) {
            return res.status(404).send({
                message: "Review not found with id " + req.params.reviewId
            });
        }
        res.send({message: "review deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "review not found with id " + req.params.reviewId
            });                
        }
        return res.status(500).send({
            message: "Could not delete review with id " + req.params.reviewId
        });
    });

};