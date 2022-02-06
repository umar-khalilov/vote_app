'use strict';
const { Model } = require('sequelize');
const { isAfter } = require('date-fns');

module.exports = (sequelize, DataTypes) => {
    class Log extends Model {
        static associate(models) {
            Log.hasOne(models.Vote, {
                foreignKey: 'id',
            });
            Log.belongsTo(models.Vote, {
                foreignKey: 'id',
            });
        }
    }

    Log.init({
        url: {
            type: DataTypes.STRING, allowNull: false, validate: {
                notNull: true, notEmpty: true, isUrl: true,
            },
        }, json: {
            type: DataTypes.JSONB, allowNull: false, validate: {
                notNull: true, notEmpty: true,
            },
        }, date: {
            type: DataTypes.DATEONLY, allowNull: false, validate: {
                notNull: true, notEmpty: true, isDate: true, isCorrectDate(value) {
                    if (isAfter(new Date(), new Date(value))) {
                        throw new Error('Enter a valid date');
                    }
                },
            },
        },
    }, {
        sequelize, modelName: 'Log', tableName: 'logs', underscored: true,
    });
    return Log;
};