const router = require('express').Router();
const {
    getAllUsers,
    getOneUser,
} = require('../../controllers/user-controller');

// route /api/users
router.route('/').get(getAllUsers);

// route /api/users/:username
router.route('/:username').get(getOneUser);

module.exports = router;