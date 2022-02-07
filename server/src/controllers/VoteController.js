const VoteService = require('../services/VoteService');

module.exports = class VoteController {
    static async createOne({ body }, res, next) {
        const vote = await VoteService.createVote(body, next);
        res.status(201).send({ data: vote });
    }
};