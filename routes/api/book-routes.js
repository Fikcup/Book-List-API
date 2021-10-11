const router = require('express').Router();

const {
    getAllBooks,
    getOneBook,
    createBook,
    updateBook,
    deleteBook,
} = require('../../controllers/book-controller');

// route /api/books
router.route('/').get(getAllBooks).post(createBook);

// route /api/books/:bookId
router.route('/:bookId').get(getOneBook).put(updateBook).delete(deleteBook);

module.exports = router;