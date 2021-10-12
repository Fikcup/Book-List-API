const router = require('express').Router();
const {
    getAllAuthors,
    getOneAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor,
} = require('../../controllers/author-controller');

// route /api/author
router.route('/').get(getAllAuthors).post(createAuthor);

// route /api/author/:authorId
router.route('/:authorId').get(getOneAuthor).put(updateAuthor).delete(deleteAuthor);

module.exports = router;