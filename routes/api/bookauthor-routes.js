const router = require('express').Router();
const {

} = require('../../controllers/bookauthor-controller');

// route /api/bookinfo
router.route('/');

// route /api/bookinfo/bookinfoId
router.route('/:bookinfoId');

module.exports = router;