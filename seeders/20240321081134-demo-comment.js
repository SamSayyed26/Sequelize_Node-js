'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Comments', [
      {
        id: "def50eda-692a-4b0a-b57a-081ed74c1b6f",
        userId: "672d2d0d-643f-4acc-b38c-79f8b1ab2ca6",
        postId: "6f56b271-dece-4e17-a322-1e6953236887",
        comment: "I really like this user. Always posts insightful stuff",
        createdAt: "2024-03-21T07:04:36.347Z",
        updatedAt: "2024-03-21T07:04:36.347Z"
      },
      {
        id: "1264585b-25c4-47c2-9705-1b376c10f1c5",
        userId: "a46a9fe9-ad63-4959-9901-4c1d5eb3fe8a",
        postId: "e33da82f-2de5-4dff-96d8-e2d15edb8993",
        comment: "Please stop uploading this crap",
        createdAt: "2024-03-21T07:08:31.255Z",
        updatedAt: "2024-03-21T07:08:31.255Z"
      },
      {
        id: "91413ef4-4595-4ec5-bffc-43c8b5259f30",
        userId: "a46a9fe9-ad63-4959-9901-4c1d5eb3fe8a",
        postId: "aebbbcab-4166-497a-bb22-750cd52ae52a",
        comment: "Again.. Stop Posting. I am not wasting my money on this",
        createdAt: "2024-03-21T07:19:51.101Z",
        updatedAt: "2024-03-21T07:19:51.101Z"
      },
      {
        id: "a1b08489-3055-4168-b668-5b23edc2c992",
        userId: "a46a9fe9-ad63-4959-9901-4c1d5eb3fe8a",
        postId: "5398e008-697d-485e-b0d9-9d51c7a2e69f",
        comment: "Now thats a guy who know how to post content unlike the other one",
        createdAt: "2024-03-21T07:26:01.047Z",
        updatedAt: "2024-03-21T07:26:01.047Z"
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
