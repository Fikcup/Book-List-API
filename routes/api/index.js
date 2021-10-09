const router = require('express').Router()
const userRoutes = require('./user-routes');
const bookRoutes = require('./book-routes');
const bookList = require('./booklist-routes');

// route /api/users
router.route('/users', userRoutes);

// route /api/books
router.route('/books', bookRoutes);

// route /api/lists
router.route('/lists', bookList);

module.exports = router;