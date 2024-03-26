'use strict';
// const PostTagsService = require("../src/modules/postTags/services/postTag.services");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PostTags', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      postId: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      tagId: {
        type: Sequelize.UUID,
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
    // Object.assign(PostTagsService, { queryInterface: Sequelize })

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PostTags');
  }
};
