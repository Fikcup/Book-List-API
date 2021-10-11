const router = require('express').Router();
const {
    getAllBooklists, 
    getOneBooklist,
    createBooklist,
    updateBooklist
} = require('../../controllers/booklist-controller');

// route /api/lists
router.route('/').get(getAllBooklists).post(createBooklist);

// route /api/lists/:listId
router.route('/:listId').get(getOneBooklist).put(updateBooklist);

module.exports = router;