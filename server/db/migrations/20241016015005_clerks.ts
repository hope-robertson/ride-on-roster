import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('clerks', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('role').notNullable().defaultTo('user')
    table.boolean('status').defaultTo(true)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('clerks')
}
