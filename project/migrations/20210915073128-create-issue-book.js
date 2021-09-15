"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("IssueBooks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        reference: {
          model: {
            tableName: "Categories",
          },
          key: "id",
        },
        allowNull: false,
      },
      bookId:  {
        type: Sequelize.INTEGER,
        reference: {
          model: {
            tableName: "Books",
          },
          key: "id",
        },
        allowNull: false,
      },
      userId:  {
        type: Sequelize.INTEGER,
        reference: {
          model: {
            tableName: "users",
          },
          key: "id",
        },
        allowNull: false,
      },
      days_issued: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      issued_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      is_returned: {
        type: Sequelize.ENUM('1','0'),
        defaultValue : '0'
      },
      returned_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM('1', '0'),
        defaultValue: '1'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("IssueBooks");
  },
};
