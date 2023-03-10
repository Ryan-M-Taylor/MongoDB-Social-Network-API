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

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)

// add reaction
router.route('/:thoughtId/reactions')
  .post(addReaction)

// remove reaction
router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;