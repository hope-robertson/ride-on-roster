// import { Knex } from 'knex';

export async function up(knex) {
  await knex.schema.createTable('roster', (table) => {
    table.increments('id').primary()
    table.date('start_date').notNullable()
  })
}

export async function down(knex) {
  await knex.schema.dropTable('roster')
}
