'use strict';
const items = [
  {
    dream_name:'playstation',
    dream_description:'new playstation',
    dream_price: 400,
    money_avaible_for_the_dream: 250,
    saving_account_id: 1,
  },

];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('dream', items, {freezeTableName: true});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete(
      'dream',
      {
        id: { [Sequelize.Op.in]: items.map(item => item.id) },
      },
      {freezeTableName: true}
    );
  }
};
