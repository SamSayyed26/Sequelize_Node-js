'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        id: "672d2d0d-643f-4acc-b38c-79f8b1ab2ca6",
        firstName: "Sumayyah",
        lastName: "Sayyed",
        email: "sumayyah.sayyed@focusteck.com",
        password: "$2b$10$wUXURI9RcQpdAVXFHIcjt.PcQlsjTGMLg5XCJ8PYL12yu5Ia71JoC",
        role: "Content Creator",
        createdAt: "2024-03-20T05:38:36.197Z",
        updatedAt: "2024-03-20T05:38:36.197Z"
      },
      {
        id: "eee3ebfd-1900-442d-bc9b-df0e9b499138",
        firstName: "Atifa",
        lastName: "Tariq",
        email: "atifa.tariq@focusteck.com",
        password: "$2b$10$TFTxIFSLGECvhyw6ch1g9OMuLpHAPiHxf3CoZW5sMTj9zGNzUJLli",
        role: "Viewer",
        createdAt: "2024-03-20T05:40:59.365Z",
        updatedAt: "2024-03-20T05:40:59.365Z"
      },
      {
        id: "09998a53-4bce-4003-a007-d83a49303a3b",
        firstName: "Ali",
        lastName: "Hassan",
        email: "ali.hassan@focusteck.com",
        password: "$2b$10$JU2xXKHrAyu1S8tCUWgF6eV1zrOgfsRw5Ba4mNRkYPr1NXBlwwAci",
        role: "Content Creator",
        createdAt: "2024-03-20T05:42:05.552Z",
        updatedAt: "2024-03-20T05:42:05.552Z"
      },
      {
        id: "2c0ccbff-6914-42ea-8765-2bb0465c7b59",
        firstName: "Ali",
        lastName: "Hassan",
        email: "ali.hassan+1@focusteck.com",
        password: "$2b$10$LS9HtO3P5KnE5yAZeQGWB.AhlAUs7vKP53Lq9Mgy\/.b2RN0XSEdPu",
        role: "Viewer",
        createdAt: "2024-03-20T05:46:53.891Z",
        updatedAt: "2024-03-20T05:46:53.891Z"
      },
      {
        id: "05897b6b-d64f-49a5-b2bb-02e062f8e1a5",
        firstName: "Zainab",
        lastName: "Rafaqat",
        email: "zainab.rafaqat@focusteck.com",
        password: "$2b$10$K1EP.GAz\/gzUIktHqhXuWeL3SgBZtDa0E.WyFwdQD05\/JFcEPV.IO",
        role: "Viewer",
        createdAt: "2024-03-20T08:25:19.912Z",
        updatedAt: "2024-03-20T08:25:19.912Z"
      },
      {
        id: "ccccb1af-6dbf-4918-9c1e-74bfc68b8eff",
        firstName: "Umair",
        lastName: "Tariq",
        email: "umair.tariq@focusteck.com",
        password: "$2b$10$mc\/gjsQabSuTDzEQYzC6YOwJMhHneJk0vimEeiGk\/OaBTCBFNuCEq",
        role: "Content Creator",
        createdAt: "2024-03-20T08:25:38.624Z",
        updatedAt: "2024-03-20T08:25:38.624Z"
      },
      {
        id: "93d258bf-013f-42ab-8793-7e96fd8bb0f3",
        firstName: "Usama",
        lastName: "Safdar",
        email: "Usama.safdar@focusteck.com",
        password: "$2b$10$Htko3INHEiVe3oRzLbyGJu5w4UQ1eV1h\/KEWVe1TZ5v6tmgpsM.iq",
        role: "Viewer",
        createdAt: "2024-03-20T08:25:57.533Z",
        updatedAt: "2024-03-20T08:25:57.533Z"
      },
      {
        id: "4b2bf894-3fd5-484d-93dd-1c3c0acc0d78",
        firstName: "Rehman",
        lastName: "Chughtai",
        email: "rehman.chughtai@focusteck.com",
        password: "$2b$10$33KCuFtg\/Cs\/froxJe1he.3W3veoLizkEii8J4uf2xytjGk7PGYxG",
        role: "Viewer",
        createdAt: "2024-03-20T08:26:49.033Z",
        updatedAt: "2024-03-20T08:26:49.033Z"
      },
      {
        id: "b153ad8d-2602-428f-bdfa-26ef6f80a9a3",
        firstName: "Arooba",
        lastName: "Ali",
        email: "arooba.ali@focusteck.com",
        password: "$2b$10$HycBxgCTeFZgpa8HFWOjN.8mJPt0PWwe4WERIu64TW4ueyUZ9yfIG",
        role: "Viewer",
        createdAt: "2024-03-20T08:27:13.790Z",
        updatedAt: "2024-03-20T08:27:13.790Z"
      },
      {
        id: "a46a9fe9-ad63-4959-9901-4c1d5eb3fe8a",
        firstName: "Muhammad",
        lastName: "Saleem",
        email: "muhammad.saleem@focusteck.com",
        password: "$2b$10$iSqhcB49S3IPfNRlZie2P.EQwy.dB6Q4t5nDmBO2R0O0Xxldamg9G",
        role: "Viewer",
        createdAt: "2024-03-20T08:28:13.010Z",
        updatedAt: "2024-03-20T08:28:13.010Z"
      },
      {
        id: "83b82503-d162-409a-a651-b5321903713c",
        firstName: "Arsalan",
        lastName: "Ali",
        email: "arsalan.ali@focusteck.com",
        password: "$2b$10$rGiP2uxRPxpPj8GcFTj7LOpnKz7AFsvNiCMcX3fBAaZ7a2TBZ9ZRO",
        role: "Viewer",
        createdAt: "2024-03-20T08:29:41.712Z",
        updatedAt: "2024-03-20T08:29:41.712Z"
      },
      {
        id: "6d5e3572-f8f0-4267-94ab-ba26796a28c8",
        firstName: "Ahad",
        lastName: "Idrees",
        email: "ahad.idress@focusteck.com",
        password: "$2b$10$Dag83FkqBIrEvL2QUNzOhOGV9BwNwGiV\/\/9uiZFEykFiI2OshPDqC",
        role: "Viewer",
        createdAt: "2024-03-20T08:30:51.966Z",
        updatedAt: "2024-03-20T08:30:51.966Z"
      },
      {
        id: "8cf88135-a7eb-4291-98d3-24f6512eb1b7",
        firstName: "Muhammad",
        lastName: "Zeeshan",
        email: "muhammad.zeeshan@focusteck.com",
        password: "$2b$10$IvpkGTmAKK6w78F1an56iebXliQZLo2W13Jas\/cyZZFN6lhubfGdy",
        role: "Viewer",
        createdAt: "2024-03-20T08:31:08.638Z",
        updatedAt: "2024-03-20T08:31:08.638Z"
      },
      {
        id: "2ba5b522-38ef-450d-91cc-b4b550e9e9da",
        firstName: "Bilal",
        lastName: "Ahmad",
        email: "bilal.ahmad@focusteck.com",
        password: "$2b$10$rDGETogPgmNXkHRlbp58LOtVmbhO8.GBfk6BVj5n0Dxah7BvMGrT2",
        role: "Viewer",
        createdAt: "2024-03-20T08:31:31.959Z",
        updatedAt: "2024-03-20T08:31:31.959Z"
      },
      {
        id: "1ac52ab0-999a-4ee4-aede-96d7166c67ce",
        firstName: "Muhammad",
        lastName: "Umar",
        email: "muhammad.umar@focusteck.com",
        password: "$2b$10$riclYfr07ClCDKWDgDQq\/OdTtl4y\/u2KGcbg4tgfNnL0tYllbuEMK",
        role: "Viewer",
        createdAt: "2024-03-20T08:32:09.796Z",
        updatedAt: "2024-03-20T08:32:09.796Z"
      },
      {
        id: "1f039304-c0e4-4e5e-bbd1-2e59b135e0ce",
        firstName: "Saad",
        lastName: "Asad",
        email: "saad.asad@focusteck.com",
        password: "$2b$10$MEEfwZ2ZCqP2nb.HiW73z.T45pnKOTwt6RZOtFxX9PQVeCd8WzghS",
        role: "Viewer",
        createdAt: "2024-03-20T08:32:24.843Z",
        updatedAt: "2024-03-20T08:32:24.843Z"
      },
      {
        id: "8ba1f9eb-bfaa-4afa-bb7d-877c59421639",
        firstName: "Ahad",
        lastName: "Idrees",
        email: "ahad.idrees@focusteck.com",
        password: "$2b$10$HxNGbJpaGmhvPwz..evXT.sm8PclfhDhxH0ZONgLTV9dAp\/RI9pMm",
        role: "Viewer",
        createdAt: "2024-03-20T08:32:38.774Z",
        updatedAt: "2024-03-20T08:32:38.774Z"
      },
      {
        id: "b9835b25-ee5b-44e7-a635-7535988802b8",
        firstName: "Mubarik",
        lastName: "Ali",
        email: "mubarik.ali@focusteck.com",
        password: "$2b$10$drmbCOPemq5zFWw6QgpEMe8mBaPHS7egC/kcOIiS54DNy3v716b2e",
        role: "Content Creator",
        createdAt: "2024-03-27T05:33:45.097Z",
        updatedAt: "2024-03-27T06:12:36.163Z"
      }


    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
