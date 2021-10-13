const router = require('express').Router();
const {
    updatePriority,
} = require('../../controllers/priority-controller');
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

// route /api/lists/list:id/priority
router.route('/:listId/priority').put(updatePriority);

module.exports = router;