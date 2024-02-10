// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */


module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'myguitartabs',
      user: 'postgres',
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
