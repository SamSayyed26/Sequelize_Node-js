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
        // tags: "cool",
        date: "2024-03-20",
        createdAt: "2024-03-21T06:26:47.395Z",
        updatedAt: "2024-03-21T06:26:47.395Z"
      },
      {
        id: "e33da82f-2de5-4dff-96d8-e2d15edb8993",
        userId: "672d2d0d-643f-4acc-b38c-79f8b1ab2ca6",
        title: "SUVs in Pakistan",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida arcu ac.",
        category: "Blog",
        // tags: "cool",
        date: "2024-03-20",
        createdAt: "2024-03-21T06:26:55.055Z",
        updatedAt: "2024-03-21T06:26:55.055Z"
      },
      {
        id: "51c7040b-d43f-4283-9a8d-03f75bf69611",
        userId: "672d2d0d-643f-4acc-b38c-79f8b1ab2ca6",
        title: "How To Become Rich",
        content: "Study smart!!!!",
        category: "Blog",
        // tags: "education",
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
        // tags: "politics",
        date: "2024-03-20",
        createdAt: "2024-03-21T07:18:09.214Z",
        updatedAt: "2024-03-21T07:18:09.214Z"
      },
      {
        id: "1fcdd99f-ccf2-4674-aa23-f26657914536",
        userId: "ccccb1af-6dbf-4918-9c1e-74bfc68b8eff",
        title: "How to buy Bitcoin",
        content: "Hva emoney to invest",
        category: "Blog",
        // tags: "sarcasm",
        date: "2024-03-20",
        createdAt: "2024-03-21T07:24:06.944Z",
        updatedAt: "2024-03-21T07:24:06.944Z"
      },
      {
        id: "5398e008-697d-485e-b0d9-9d51c7a2e69f",
        userId: "ccccb1af-6dbf-4918-9c1e-74bfc68b8eff",
        title: "How not to be rude",
        content: "Shut your mouth",
        category: "Blog",
        // tags: "sarcasm",
        date: "2024-03-20",
        createdAt: "2024-03-21T07:24:32.191Z",
        updatedAt: "2024-03-21T07:24:32.191Z"
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
