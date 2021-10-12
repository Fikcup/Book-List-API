const router = require('express').Router();
const {
    getAllAuthors,
    getOneAuthor,
    createAuthor,
} = require('../../controllers/author-controller');

// route /api/author
router.route('/').get(getAllAuthors).post(createAuthor);

// route /api/author/:authorId
router.route('/:authorId').get(getOneAuthor);

module.exports = router;