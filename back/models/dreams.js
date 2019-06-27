/*table dreams */
const Sequelize = require('../helpers/conf');
const sequelize = require('sequelize')

const Dreams = sequelize.define('Dreams', {
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
  });

  module.exports = Dreams;
