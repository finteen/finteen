'use strict';

module.exports = (sequelize, DataTypes) => {
  const kid = sequelize.define('kid', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobile: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pseudonyme: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.DATE,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    iban: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bic: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
    {
      freezeTableName: true,
      timestamps: false
    });
  kid.associate = function (models) {
    // associations can be defined here
  };
  return kid;
};