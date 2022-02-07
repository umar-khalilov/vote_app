const voteRouter = require('express').Router();
const VoteController = require('../controllers/VoteController');

voteRouter.route('/').post(VoteController.createOne);

module.exports = voteRouter;