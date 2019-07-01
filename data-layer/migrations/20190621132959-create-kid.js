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
      mobile: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      pseudonyme: {
          type: Sequelize.STRING,
          allowNull: false
      },
      age: {
          type: Sequelize.DATE,
          allowNull: false
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false
      },
      iban: {
          type: Sequelize.STRING,
          allowNull: false
      },
      bic: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('kid');
  }
};