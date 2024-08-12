"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Banners", [
      {
        description: "Elevate Your Learning Journey with TUF+ Course Curated learning, approach-wise solutions, personalized roadmaps, expert doubt assistance, and more!",
        timer: 30, // seconds
        link: "https://takeuforward.org/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Banners", null, {});
  },
};