'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cabservices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey :true,
        type: Sequelize.INTEGER
      },
      teckId: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      CustomerMob: {
        type: Sequelize.INTEGER,
        allowNull : false

      },
      CustName: {
        type: Sequelize.STRING,
        allowNull : false
      },
      CustLoca: {
        type: Sequelize.STRING,
        allowNull : false
      },
      CustDesti: {
        type: Sequelize.STRING,
      },
      Rate: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cabservices');
  }
};