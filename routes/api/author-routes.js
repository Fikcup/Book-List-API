const router = require('express').Router();
const {
    getAllAuthors,
} = require('../../controllers/author-controller');

// route /api/author
router.route('/').get(getAllAuthors);

// route /api/author/:authorId
router.route('/:authorId');

module.exports = router;