const router = require('express').Router();
const {
    getAllBookInfo,
    getOneBookInfo,
    createBookInfo,
} = require('../../controllers/bookauthor-controller');

// route /api/bookinfo
router.route('/').get(getAllBookInfo).post(createBookInfo);

// route /api/bookinfo/bookinfoId
router.route('/:bookinfoId').get(getOneBookInfo);

module.exports = router;