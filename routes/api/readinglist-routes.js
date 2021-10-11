const router = require('express').Router();
const {
    getAllReadingLists,
    getOneReadingList,
    createReadingList,
    updateReadingList,
    deleteReadingList,
} = require('../../controllers/readinglist-controller');

// route /api/lists
router.route('/').get(getAllReadingLists).post(createReadingList);

// route /api/lists/:listId
router.route('/:listId').get(getOneReadingList).put(updateReadingList).delete(deleteReadingList);

module.exports = router;