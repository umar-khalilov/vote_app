'use strict';
const {
    Model,
} = require('sequelize');
const { isAfter } = require('date-fns');

module.exports = (sequelize, DataTypes) => {
    class Vote extends Model {
        static associate(models) {
            Vote.hasOne(models.Log, {
                foreignKey: 'id',
            });
            Vote.belongsTo(models.Log, {
                foreignKey: 'id',
            });
        }
    }

    Vote.init({
        number: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9'), allowNull: false, validate: {
                notNull: true, notEmpty: true, isInt: true,
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
        sequelize, modelName: 'Vote', tableName: 'votes', underscored: true,
    });
    return Vote;
};