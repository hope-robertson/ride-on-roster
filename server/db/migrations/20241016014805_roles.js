// import { Knex } from 'knex'

export async function up(knex) {
  await knex.schema.createTable('roles', (table) => {
    table.increments('id').primary()

    table.string('name').notNullable()
  })
}

export async function down(knex) {
  await knex.schema.dropTable('roles')
}
