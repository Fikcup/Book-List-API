const router = require('express').Router()
const userRoutes = require('./user-routes');
const bookInfoRoutes = require('./bookauthor-routes');
const bookRoutes = require('./book-routes');
const authorRoutes = require('./author-routes');
const readingList = require('./readinglist-routes');

// route /api/users
router.use('/users', userRoutes);

// route /api/bookinfo
router.use('/bookinfo', bookInfoRoutes)

// route /api/books
router.use('/books', bookRoutes);

// route /api/authors
router.use('/authors', authorRoutes);

// route /api/lists
router.use('/lists', readingList);

module.exports = router;