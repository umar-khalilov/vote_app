const router = require('express').Router();
const voteRouter = require('./vote');

router.use('/votes', voteRouter);

module.exports = router;