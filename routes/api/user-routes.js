const router = require('express').Router();
const { updateAdminAccess } = require('../../controllers/admin-controller');
const {
    getAllUsers,
    getOneUser,
    createUser,
    deleteUser,
    updateUser,
} = require('../../controllers/user-controller');

// route /api/users
router.route('/').get(getAllUsers).post(createUser);

// route /api/users/:userId
router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

// route /api/users/:userId/admin
router.route('/:userId/admin').put(updateAdminAccess);

module.exports = router;