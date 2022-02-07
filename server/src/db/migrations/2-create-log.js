'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('logs', {
            id: {
                primaryKey: true, allowNull: false, autoIncrement: true, type: Sequelize.INTEGER,
            }, voteId: {
                type: Sequelize.INTEGER, allowNull: false, field: 'vote_id', references: {
                    model: 'votes', key: 'id',
                }, onDelete: 'CASCADE', onUpdate: 'RESTRICT',
            }, url: {
                allowNull: false, type: Sequelize.STRING(300),
            }, json: {
                allowNull: false, type: Sequelize.JSONB,
            }, date: {
                allowNull: false, type: Sequelize.DATEONLY,
            }, createdAt: {
                field: 'created_at', allowNull: false, type: Sequelize.DATE,
            }, updatedAt: {
                field: 'updated_at', allowNull: false, type: Sequelize.DATE,
            },
        });
    }, async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('logs');
    },
};