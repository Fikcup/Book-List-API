const router = require('express').Router();
const {
    getAllBookInfo,
} = require('../../controllers/bookauthor-controller');

// route /api/bookinfo
router.route('/').get(getAllBookInfo);

// route /api/bookinfo/bookinfoId
router.route('/:bookinfoId');

module.exports = router;