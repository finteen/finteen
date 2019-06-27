'use strict';
module.exports = (sequelize, DataTypes) => {
  const dream = sequelize.define('dream', {    
    dream_price: {
      type: DataTypes.DECIMAL,
      allowNull:false
    },
    money_avaible_for_the_dream: {
      type: DataTypes.DECIMAL,
      allowNull:false
    },
    dream_name:{
      type: DataTypes.STRING,
      allowNull:false
    },
    saving_account_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kid_id:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dream_description: {
      type: Sequelize.STRING,
      allowNull:false
    },
  }, {freezeTableName: true});
  dream.associate = function(models) {
    // associations can be defined here
  };
  return dream;
};