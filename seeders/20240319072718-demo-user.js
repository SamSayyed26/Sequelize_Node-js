'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Michael',
        lastName: 'Johnson',
        email: 'michael@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Emily',
        lastName: 'Brown',
        email: 'emily@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'James',
        lastName: 'Wilson',
        email: 'james@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Sarah',
        lastName: 'Anderson',
        email: 'sarah@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'David',
        lastName: 'Martinez',
        email: 'david@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jessica',
        lastName: 'Taylor',
        email: 'jessica@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Christopher',
        lastName: 'Thomas',
        email: 'christopher@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'William',
        lastName: 'Adam',
        email: 'William@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
