// import { Knex } from 'knex';

export async function up(knex) {
  await knex.schema.createTable('roster', (table) => {
    table.increments('id').primary()
    table.date('startDate').notNullable()
    table.jsonb('shifts').notNullable() // Store shifts as a JSON array
  })
}

export async function down(knex) {
  await knex.schema.dropTable('roster')
}
