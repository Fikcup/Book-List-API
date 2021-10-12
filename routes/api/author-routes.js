const router = require('express').Router();
const {

} = require('../../controllers/author-controller');

// route /api/author
router.route('/');

// route /api/author/:authorId
router.route('/:authorId');

module.exports = router;