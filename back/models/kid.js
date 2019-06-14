
const sequelize =  require('../helpers/conf');
const Sequelize = require('sequelize')

const Kid = sequelize.define('kid', {
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
    }
}, {freezeTableName: true,
    timestamps: false});

module.exports = Kid;