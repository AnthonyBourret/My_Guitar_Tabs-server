require('dotenv').config();


module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.PG_DATABASE,
      user: process.env.PG_USER,
    },
    migrations: {
      directory: './migrations',
    },

    seeds: {
      directory: './seeds/',
    },
    ssl: true,
  },

};
