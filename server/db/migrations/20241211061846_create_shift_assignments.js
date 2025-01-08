// server/db/migrations/20241211061846_create_shift_assignments.js

export async function up(knex) {
  await knex.schema.createTable('shift_assignments', (table) => {
    table.increments('id').primary()
    table.integer('shift_id').notNullable()
    table
      .foreign('shift_id')
      .references('id')
      .inTable('shifts')
      .onDelete('CASCADE')
    table.integer('clerk_id').notNullable()
    table
      .foreign('clerk_id')
      .references('id')
      .inTable('clerks')
      .onDelete('CASCADE')
    table.date('week_start_date').notNullable()
    table.timestamp('assigned_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex) {
  await knex.schema.table('shift_assignments', (table) => {
    table.dropColumn('week_start_date')
  })
}
