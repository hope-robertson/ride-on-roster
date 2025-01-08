// import { Knex } from 'knex';

export async function up(knex) {
  await knex.schema.createTable('roster', (table) => {
    table.increments('id').primary()
    table.date('startDate').notNullable()
    table.text('shifts').notNullable() // Use TEXT column to store shifts as JSON string
  })
}

export async function down(knex) {
  await knex.schema.dropTable('roster')
}
