'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Posts', [
      {
        id: "6f56b271-dece-4e17-a322-1e6953236887",
        userId: "672d2d0d-643f-4acc-b38c-79f8b1ab2ca6",
        title: "SUVs in Pakistan",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida arcu ac.",
        category: "Blog",
        date: "2024-03-20",
        createdAt: "2024-03-21T06:26:47.395Z",
        updatedAt: "2024-03-21T06:26:47.395Z"
      },
      {
        id: "51c7040b-d43f-4283-9a8d-03f75bf69611",
        userId: "672d2d0d-643f-4acc-b38c-79f8b1ab2ca6",
        title: "How To Become Rich",
        content: "Study smart!!!!",
        category: "Blog",
        date: "2024-03-20",
        createdAt: "2024-03-21T07:16:50.029Z",
        updatedAt: "2024-03-21T07:16:50.029Z"
      },
      {
        id: "aebbbcab-4166-497a-bb22-750cd52ae52a",
        userId: "672d2d0d-643f-4acc-b38c-79f8b1ab2ca6",
        title: "President Of The United Stated",
        content: "Joe Biden",
        category: "Blog",
        date: "2024-03-20",
        createdAt: "2024-03-21T07:18:09.214Z",
        updatedAt: "2024-03-21T07:18:09.214Z"
      },
      {
        id: "1fcdd99f-ccf2-4674-aa23-f26657914536",
        userId: "ccccb1af-6dbf-4918-9c1e-74bfc68b8eff",
        title: "Laws of Thermodynamics",
        content: "Sheldon LI Cooper",
        category: "Blog",
        date: "2024-03-20",
        createdAt: "2024-03-21T07:24:06.944Z",
        updatedAt: "2024-03-22T10:48:16.413Z"
      },
      {
        id: "5398e008-697d-485e-b0d9-9d51c7a2e69f",
        userId: "ccccb1af-6dbf-4918-9c1e-74bfc68b8eff",
        title: "Laws of Thermodynamics",
        content: "Sheldon LI Cooper",
        category: "Blog",
        date: "2024-03-20",
        createdAt: "2024-03-21T07:24:32.191Z",
        updatedAt: "2024-03-22T10:48:16.413Z"
      },
      {
        id: "b70990aa-3dc9-4926-9491-e6dbba9d6ae9",
        userId: "ccccb1af-6dbf-4918-9c1e-74bfc68b8eff",
        title: "Laws of Thermodynamics",
        content: "Sheldon LI Cooper",
        category: "Blog",
        date: "2024-03-20",
        createdAt: "2024-03-22T10:29:08.624Z",
        updatedAt: "2024-03-22T10:48:16.413Z"
      },
      {
        id: "84524195-03ed-4da8-bcd4-49464b82cda2",
        userId: "672d2d0d-643f-4acc-b38c-79f8b1ab2ca6",
        title: "Laws of Quantum Mechanics",
        content: "By Einstein",
        category: "Blog",
        date: "2024-03-20",
        createdAt: "2024-03-25T07:09:04.771Z",
        updatedAt: "2024-03-25T07:09:04.771Z"
      },
      {
        id: "e33da82f-2de5-4dff-96d8-e2d15edb8993",
        userId: "672d2d0d-643f-4acc-b38c-79f8b1ab2ca6",
        title: "Laws of Entropy",
        content: "Chnage in heat. Every thing moves to destruction",
        category: "Blog",
        date: "2024-03-20",
        createdAt: "2024-03-21T06:26:55.055Z",
        updatedAt: "2024-03-25T07:15:38.378Z"
      },
      {
        id: "2ed0d3fa-bcc2-47c5-a816-3123274bafd9",
        userId: "09998a53-4bce-4003-a007-d83a49303a3b",
        title: "How to be a chupa rustam",
        content: "Follow me",
        category: "Blog",
        date: "2024-03-20",
        createdAt: "2024-03-25T07:40:58.521Z",
        updatedAt: "2024-03-25T07:40:58.521Z"
      },
      {
        id: "a2e8ce0d-b6b8-448b-833a-b614d8313d02",
        userId: "b9835b25-ee5b-44e7-a635-7535988802b8",
        title: "How to work with AWS bucket",
        content: "Delete all buckets",
        category: "Blog",
        date: "2024-03-20",
        createdAt: "2024-03-27T06:12:36.207Z",
        updatedAt: "2024-03-27T06:12:36.207Z"
      }

    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
