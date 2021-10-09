const router = require('express').Router();
const apiRoutes = require('./api');

// route /api
router.route('/api', apiRoutes);

router.route((req, res) => {
    return res.send('Wrong route!');
});

module.exports = router;