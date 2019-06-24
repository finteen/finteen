'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('kid', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastname: {
          type: Sequelize.STRING,
          allowNull: false
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false
      },
      pseudonyme: {
          type: Sequelize.STRING,
          allowNull: false
      },
      age: {
          type: Sequelize.STRING,
          allowNull: false
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false
      },
      iban: {
          type: Sequelize.STRING,
          allowNull: false
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('kid');
  }
};