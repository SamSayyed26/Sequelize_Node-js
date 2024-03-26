'use strict';

// const ReactionService = require("../src/modules/reactions/services/reaction.service")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reactions', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      postId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      like: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      dislike: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
    // Object.assign(ReactionService, { queryInterface: Sequelize })

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reactions');
  }
};
