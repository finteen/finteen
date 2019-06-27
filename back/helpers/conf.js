/*config de la BDD Sequelize (donné privé dans le dossier .env)*/
const Sequelize = require ('sequelize');

const sequelize = new Sequelize(
    process.env.SQL_DATABASE,
    process.env.SQL_USER,
    process.env.SQL_PASSWORD,{
    host:process.env.SQL_HOST,
    dialect: process.env.SQL_DIALECT,
    /*---------*/
    operatorsAliases: false,
    pool: {
      max:5,
      min: 0, 
      acquire:30000,
      idle:10000
    }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;