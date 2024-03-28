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
      },
      {
        id: "af6c12c1-3a61-465a-8eb6-c4dd83800a4f",
        userId: "a46a9fe9-ad63-4959-9901-4c1d5eb3fe8a",
        postId: "51c7040b-d43f-4283-9a8d-03f75bf69611",
        comment: "You should delete your account",
        createdAt: "2024-03-25T07:27:59.986Z",
        updatedAt: "2024-03-25T07:27:59.986Z"
      },
      {
        id: "1fe2a8b0-c6e7-4adf-8540-c27d02966992",
        userId: "a46a9fe9-ad63-4959-9901-4c1d5eb3fe8a",
        postId: "b70990aa-3dc9-4926-9491-e6dbba9d6ae9",
        comment: "You should delete your account too",
        createdAt: "2024-03-25T07:28:42.387Z",
        updatedAt: "2024-03-25T07:28:42.387Z"
      },
      {
        id: "89433b9d-b4f5-4f14-afe8-07a5fa6a27d7",
        userId: "a46a9fe9-ad63-4959-9901-4c1d5eb3fe8a",
        postId: "b70990aa-3dc9-4926-9491-e6dbba9d6ae9",
        comment: "Stop with this nonsense",
        createdAt: "2024-03-25T07:28:56.637Z",
        updatedAt: "2024-03-25T07:28:56.637Z"
      },
      {
        id: "b7ad88fc-bda9-4ce5-9b59-6b45231082bb",
        userId: "a46a9fe9-ad63-4959-9901-4c1d5eb3fe8a",
        postId: "5398e008-697d-485e-b0d9-9d51c7a2e69f",
        comment: "SO you watch Young Sheldon",
        createdAt: "2024-03-25T07:29:40.078Z",
        updatedAt: "2024-03-25T07:29:40.078Z"
      },
      {
        id: "5283f5fa-3511-4095-afea-220c63ecf602",
        userId: "a46a9fe9-ad63-4959-9901-4c1d5eb3fe8a",
        postId: "5398e008-697d-485e-b0d9-9d51c7a2e69f",
        comment: "DO you watch Young Sheldon? If not you should. Fun Fact: Did you know octupous has nore than one heart",
        createdAt: "2024-03-25T07:30:26.754Z",
        updatedAt: "2024-03-25T07:30:26.754Z"
      },
      {
        id: "4eb37a2d-4712-4ac7-afc5-e1db052badd5",
        userId: "8cf88135-a7eb-4291-98d3-24f6512eb1b7",
        postId: "5398e008-697d-485e-b0d9-9d51c7a2e69f",
        comment: "Hello I am billy",
        createdAt: "2024-03-25T07:32:58.516Z",
        updatedAt: "2024-03-25T07:32:58.516Z"
      },
      {
        id: "80adf5f0-c68b-4c38-b8a5-72de8f2590a9",
        userId: "8cf88135-a7eb-4291-98d3-24f6512eb1b7",
        postId: "5398e008-697d-485e-b0d9-9d51c7a2e69f",
        comment: "Hello I am Nilly and my name is also billy",
        createdAt: "2024-03-25T07:33:23.668Z",
        updatedAt: "2024-03-25T07:33:23.668Z"
      },
      {
        id: "6fc4e04a-d2cf-413f-9427-d2e4e3ea6e05",
        userId: "8cf88135-a7eb-4291-98d3-24f6512eb1b7",
        postId: "e33da82f-2de5-4dff-96d8-e2d15edb8993",
        comment: "Cool. I am billy",
        createdAt: "2024-03-25T07:34:00.370Z",
        updatedAt: "2024-03-25T07:34:00.370Z"
      },
      {
        id: "ab9b3f49-811e-4fe6-bdc8-343604299aaa",
        userId: "8cf88135-a7eb-4291-98d3-24f6512eb1b7",
        postId: "e33da82f-2de5-4dff-96d8-e2d15edb8993",
        comment: "Cool. What is your name?",
        createdAt: "2024-03-25T07:34:20.264Z",
        updatedAt: "2024-03-25T07:34:20.264Z"
      },
      {
        id: "b3ed1b35-10ff-4428-a39f-5224a667a84b",
        userId: "b9835b25-ee5b-44e7-a635-7535988802b8",
        postId: "a2e8ce0d-b6b8-448b-833a-b614d8313d02",
        comment: "This user has same mutliple posts. Please delete all and keep one",
        createdAt: "2024-03-27T07:07:08.653Z",
        updatedAt: "2024-03-27T07:07:08.653Z"
      }


    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
