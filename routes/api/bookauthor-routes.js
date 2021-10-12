const router = require('express').Router();
const {
    getAllBookInfo,
    getOneBookInfo,
    createBookInfo,
    updateBookInfo,
} = require('../../controllers/bookauthor-controller');

// route /api/bookinfo
router.route('/').get(getAllBookInfo).post(createBookInfo);

// route /api/bookinfo/bookinfoId
router.route('/:bookinfoId').get(getOneBookInfo).put(updateBookInfo);

module.exports = router;