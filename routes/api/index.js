const router = require('express').Router()
const userRoutes = require('./user-routes');
const bookRoutes = require('./book-routes');
const bookList = require('./booklist-routes');

// route /api/users
router.use('/users', userRoutes);

// route /api/books
router.use('/books', bookRoutes);

// route /api/lists
router.use('/lists', bookList);

module.exports = router;