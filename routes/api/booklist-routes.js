const router = require('express').Router();
const {
    getAllBooklists
} = require('../../controllers/booklist-controller');

// route /api/lists
router.route('/').get(getAllBooklists);

module.exports = router;