const router = require('express').Router();

const {
    getAllBooks,
    getOneBook,
} = require('../../controllers/book-controller');

// route /api/books
router.route('/').get(getAllBooks);

// route /api/books/:bookId
router.route('/:bookId').get(getOneBook);

module.exports = router;