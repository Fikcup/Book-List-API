const router = require('express').Router();
const {
    getAllBooklists, 
    getOneBooklist,
} = require('../../controllers/booklist-controller');

// route /api/lists
router.route('/').get(getAllBooklists);

// route /api/lists/:listId
router.route('/:listId').get(getOneBooklist);

module.exports = router;