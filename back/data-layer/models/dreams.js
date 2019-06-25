'use strict';
module.exports = (sequelize, DataTypes) => {
  const dreams = sequelize.define('dreams', {
    dream_description: {
    type: DataTypes.STRING,
    allowNull:false
    },
    dream_price: {
        type: DataTypes.STRING,
        allowNull:false
    },
    money_avaible_for_the_dream: {
        type: DataTypes.STRING,
        allowNull:false
    }
  }, {});
  dreams.associate = function(models) {
    // associations can be defined here
  };
  return dreams;
};