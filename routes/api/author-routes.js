const router = require('express').Router();
const {
    getAllAuthors,
    getOneAuthor,
} = require('../../controllers/author-controller');

// route /api/author
router.route('/').get(getAllAuthors);

// route /api/author/:authorId
router.route('/:authorId').get(getOneAuthor);

module.exports = router;