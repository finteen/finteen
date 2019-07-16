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
      dream_name:{
        type: Sequelize.STRING,
        allowNull:false
      },
      kid_id:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references : {
          model: 'kid',
          key : 'id'
        }
      },
      saving_account_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dream');
  }
};