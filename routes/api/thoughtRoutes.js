const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController.js');

// /api/thought
router.route('/').get(getThoughts).get(getSingleThought).post(createThought).put(updateThought).delete(deleteThought);

// /api/thought/:thoughtId/reactions
router
  .route('/:thoughtId')
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;