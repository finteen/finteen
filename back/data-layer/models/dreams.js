'use strict';
module.exports = (sequelize, DataTypes) => {
  const dreams = sequelize.define('dreams', {
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
    }
  }, {});
  dreams.associate = function(models) {
    // associations can be defined here
  };
  return dreams;
};