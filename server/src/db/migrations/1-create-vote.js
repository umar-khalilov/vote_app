'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('votes', {
            id: {
                primaryKey: true, allowNull: false, autoIncrement: true, type: Sequelize.INTEGER,
            }, number: {
                type: Sequelize.ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9'), allowNull: false,
            }, date: {
                type: Sequelize.DATEONLY,
            }, createdAt: {
                allowNull: false, type: Sequelize.DATE, field: 'created_at',
            }, updatedAt: {
                allowNull: false, type: Sequelize.DATE, field: 'updated_at',
            },
        });
    }, async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('votes');
    },
};