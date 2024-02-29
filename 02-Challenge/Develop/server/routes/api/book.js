const express = require('express')
const router = express.Router();

//module
const Book = require(models/book.js)

router.get('/', (req, res) => {Book.find()
    .sort({ date: -1 })
    
    .then(books => res.json(books));
});

//save book
router.post('/', (req, res) => {
    const savedBook = new Book({
      title: req.body.title,

      authors: req.body.authors,
     description: req.body.description,
      image: req.body.image,
    link: req.body.link
    });
    savedBook.save().then(book => res.json(book));
  });