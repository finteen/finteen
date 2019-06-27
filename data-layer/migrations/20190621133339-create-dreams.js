'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dream', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dream_description: {
          type: Sequelize.STRING,
          allowNull:false
      },
      dream_price: {
          type: Sequelize.STRING,
          allowNull:false
      },
      money_avaible_for_the_dream: {
          type: Sequelize.STRING,
          allowNull:false
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
    return queryInterface.dropTable('dream');
  }
};