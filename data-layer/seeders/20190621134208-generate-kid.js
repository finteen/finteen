'use strict';
const items = [
  {
    name: 'Laura',
    lastname: 'Bonchard',
    email: 'laurabonchard@gmail.com',
    mobile: '0488963187',
    pseudonyme: 'laurala2006',
    age:'2006-06-12',
    gender: 'fille',
    password: 'lauragere06',
    iban: 'FR7630001007941234567890185',
    bic: 'BBRUBEBB'
  },
  {
    name: 'Ben',
    lastname: 'Jünger Klopp',
    email: 'benjungerklopp@gmail.com',
    mobile: '0488963187',
    pseudonyme: 'benliverpool2019',
    age:'2006-06-12 ',
    gender: 'male',
    password: 'bensalah04',
    iban: 'BE03310129669484',
    bic: 'BBRUBEBB',
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('kid', items, {freezeTableName: true});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete(
      'kid',
      {
        id: { [Sequelize.Op.in]: items.map(item => item.id) },
      },
      {freezeTableName: true}
    );
  }
};

