'use strict';
module.exports.errorHandler = async (err, req, res, next) => {
    console.log('LOG ERROR =>', err);
    try {
        if (err.message || err.status) {
            res.status(err.status).send(err.message);
        } else {
            res.status(500).send('Server Error');
        }
    } catch (err) {
        next(err);
    }

};