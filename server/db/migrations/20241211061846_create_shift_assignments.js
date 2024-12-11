// server/db/migrations/03_create_shift_assignments.js

export async function up(knex) {
  await knex.schema.createTable('shift_assignments', (table) => {
    table.increments('id').primary()
    table.integer('shift_id').unsigned().notNullable()
    table
      .foreignKey('shift_id', 'fk_shift_assignments_shift_id')
      .references('id')
      .on('shifts')
    table.integer('clerk_id').unsigned().notNullable()
    table
      .foreignKey('clerk_id', 'fk_shift_assignments_clerk_id')
      .references('id')
      .on('clerks')
    table.timestamp('assigned_at').defaultTo(knex.fn.now()) // Use database function for timestamp
  })
}

export async function down(knex) {
  await knex.schema.dropTable('shift_assignments')
}
