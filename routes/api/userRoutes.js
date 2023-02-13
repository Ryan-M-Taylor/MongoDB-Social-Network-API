const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController.js');

// /api/users/:userId
router.route('/').get(getUsers).post(createUser).get(getSingleUser).delete(deleteUser).put(updateUser);

// add and delete friend

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;