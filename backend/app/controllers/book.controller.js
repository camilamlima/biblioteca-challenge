const Book = require('../models/book.model.js');

// Create and Save a new Book
exports.create = (req, res) => {

    // Validate request
    if(!req.body.title) {
        return res.status(400).send({
            message: "Book title can not be empty"
        });
    }

    // Create a Book
    const book = new Book({
        title: req.body.title, 
        description: req.body.description
    });

    // Save Book in the database
    book.save()
    .then(book => {
        res.send({ ...book._doc, id: book._id });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Book."
        });
    });


};

// Retrieve and return all books from the database.
exports.findAll = (req, res) => {
    
    Book.find()
    .then(books => {
        res.header('Content-Range', books.length);    
        res.send(books.map(book => ({ ...book._doc, id: book._id })));
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving books."
        });
    });
};

// Find a single book with a bookId
exports.findOne = (req, res) => {
    
    Book.findById(req.params.bookId)
    .then(book => {
        if(!book) {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });            
        }
        res.header('Content-Range', 1);    
        res.send({ ...book._doc, id: book._id });
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Books not found with id " + req.params.bookId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving book with id " + req.params.bookId
        });
    });
};

// Update a Book identified by the bookId in the request
exports.update = (req, res) => {
    
    // Validate Request
    if(!req.body.title) {
        return res.status(400).send({
            message: "Book title can not be empty"
        });
    }

    // Find book and update it with the request body
    Book.findByIdAndUpdate(req.params.bookId, {
        title: req.body.title,
        description: req.body.description
    }, {new: true})
    .then(book => {
        if(!book) {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });
        }
        res.send({ ...book._doc, id: book._id });
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });                
        }
        return res.status(500).send({
            message: "Error updating book with id " + req.params.bookId
        });
    });''
};

// Delete a Book with the specified bookId in the request
exports.delete = (req, res) => {
    
    Book.findByIdAndRemove(req.params.bookId)
    .then(book => {
        if(!book) {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });
        }
        res.send({message: "Book deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });                
        }
        return res.status(500).send({
            message: "Could not delete book with id " + req.params.bookId
        });
    });
};
