'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('kid', [
      {
        name: 'Laura'
        lastname: 'Bonchard'
        email: 'laurabonchard@gmail.com'
        pseudonyme: 'laurala2006'
        age:2006-06-12 
        password: 'lauragere06'
        iban: 'FR7630001007941234567890185'
        createdAt: 
        updatedAt: 
      },
      {
        name: 'Ben'
        lastname: 'Jünger Klopp'
        email: 'benjungerklopp@gmail.com'
        pseudonyme: 'benliverpool2019'
        age:2006-06-12 
        password: 'bensalah04'
        iban: 'BE03310129669484'
      }]);
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
