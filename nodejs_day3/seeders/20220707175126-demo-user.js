'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [{
      firstName: 'john',
      lastName: 'doe',
      email: 'n@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'jane',
      lastName: 'doe',
      email: 'ja@hotmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'joe',
      lastName: 'doe',
      email: 'joe@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     * await queryInterface.bulkDelete('Users', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
