const router = require('express').Router();

const {
    getAllBooks,
    getOneBook,
    createBook,
} = require('../../controllers/book-controller');

// route /api/books
router.route('/').get(getAllBooks).post(createBook);

// route /api/books/:bookId
router.route('/:bookId').get(getOneBook);

module.exports = router;