'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      mobile: {
        type: Sequelize.STRING(25)
      },
      gender: {
        type: Sequelize.ENUM('male','female','other')
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: true

      },
      status: {
        type: Sequelize.ENUM('1','0'),
        defaultValue:'1'
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};