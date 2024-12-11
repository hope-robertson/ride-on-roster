// server/db/migrations/20241211061846_create_shift_assignments.js

export async function up(knex) {
  await knex.schema.createTable('shift_assignments', (table) => {
    table.increments('id').primary()
    table.integer('shift_id').unsigned().notNullable()
    table
      .foreign('shift_id')
      .references('id')
      .inTable('shifts')
      .onDelete('CASCADE') // SQLite syntax
    table.integer('clerk_id').unsigned().notNullable()
    table
      .foreign('clerk_id')
      .references('id')
      .inTable('clerks')
      .onDelete('CASCADE') // SQLite syntax
    table.timestamp('assigned_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex) {
  await knex.schema.dropTable('shift_assignments')
}