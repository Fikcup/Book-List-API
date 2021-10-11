const router = require('express').Router();
const {
    getAllUsers,
    getOneUser,
    createUser,
    deleteUser,
} = require('../../controllers/user-controller');

// route /api/users
router.route('/').get(getAllUsers).post(createUser);

// route /api/users/:username
router.route('/:userId').get(getOneUser).delete(deleteUser);

module.exports = router;