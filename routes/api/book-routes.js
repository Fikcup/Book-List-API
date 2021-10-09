const router = require('express').Router();

const {
    getAllBooks
} = require('../../controllers/book-controller');

// route /api/books
router.route('/').get(getAllBooks);

module.exports = router;