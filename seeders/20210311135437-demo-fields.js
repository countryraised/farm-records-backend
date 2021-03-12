'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('FarmRecords', [
      {
        fieldName: 'demo1',
        dateComplete:'01/01/2021',
        operationType:'disc',
        details:'worked in fertilizer',
        userId: 1
      },
      {
        fieldName: 'demo2',
        dateComplete:'01/01/2021',
        operationType:'disc',
        details:'worked in fertilizer',
        userId: 1
      },
      {
        fieldName: 'demo1',
        dateComplete:'01/02/2021',
        operationType:'field cultivate',
        details:'prep seed bed for planting',
        userId: 2
      },
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('FarmRecords', null, {});     
  }
};
