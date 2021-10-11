const router = require('express').Router();
const {
    getAllBooklists, 
    getOneBooklist,
    createBooklist,
    updateBooklist,
    deleteBooklist,
} = require('../../controllers/booklist-controller');

// route /api/lists
router.route('/').get(getAllBooklists).post(createBooklist);

// route /api/lists/:listId
router.route('/:listId').get(getOneBooklist).put(updateBooklist).delete(deleteBooklist);

module.exports = router;