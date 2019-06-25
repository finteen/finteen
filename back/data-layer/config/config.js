const config = {
  use_env_variable: 'DATABASE_URL',
  seederStorage: 'sequelize', // Keep track of executed seeds to avoid re-execution upon each deployment
  dialect: 'DATABASE_DIALECT',
  dialectOptions: {
    ssl: process.env.DATABASE_SSL === 'true',
  },
};

module.exports = {
  development: config,
  production: config,
};