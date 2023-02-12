const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addReaction,
  removeReaction,
} = require('../../controllers/userController.js');

// /api/students
router.route('/').get(getUsers).post(createUser);

// /api/students/:studentId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/students/:studentId/assignments
router.route('/:userId/reactions').post(addThought);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:userId/reactions/:reactionId').delete(removeThought);

module.exports = router;