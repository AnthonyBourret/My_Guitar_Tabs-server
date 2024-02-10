/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema
  .createTable('user', (table) => {
        table.increments('id').primary();
        table.string('username').notNullable();
        table.string('mail').notNullable();
        table.string('password').notNullable();
        table.text('picture');
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        table.timestamp('updated_at');
  })
    .createTable('song', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('artist').notNullable();
        table.string('tab_link');
        table.string('lyrics_link');
        table.string('comments');
        table.string('difficulty').notNullable();
        table.string('status').notNullable();
        table.string('capo').notNullable();
        table.integer('user_id').notNullable().references('id').inTable('user');
        table.integer('tuning_id').notNullable().references('id').inTable('tuning');
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        table.timestamp('updated_at');
    })
    .createTable('style', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        table.timestamp('updated_at');
    })
    .createTable('tuning', (table) => { 
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('strings').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        table.timestamp('updated_at');
    })
    .createTable('song_has_style', (table) => {
        table.integer('song_id').notNullable().references('id').inTable('song');
        table.integer('style_id').notNullable().references('id').inTable('style');
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        table.timestamp('updated_at');
    })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema
    .dropTable('song_has_style')
    .dropTable('tuning')
    .dropTable('style')
    .dropTable('song')
    .dropTable('user');
